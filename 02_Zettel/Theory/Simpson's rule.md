---
layout: default
title: "Simpson's rule"
---

# Simpson's rule

a fourth-order quadrature rule. given samples of $f$ at three consecutive equispaced points, fit a parabola through them and integrate the parabola exactly. apply the recipe across the whole interval (using non-overlapping triplets), get $\int_a^b f \, dx$ with $O(h^4)$ accuracy.

## the formula

for $N$ equispaced subintervals (**$N$ must be even**), $x_i = a + i h$ with $h = (b - a)/N$, and $f_i = f(x_i)$:

$$\int_a^b f(x)\,dx \approx \frac{h}{3}\Big[f_0 + 4(f_1 + f_3 + f_5 + \cdots + f_{N-1}) + 2(f_2 + f_4 + \cdots + f_{N-2}) + f_N\Big]$$

the pattern: endpoints with weight 1, odd interior points with weight 4, even interior points with weight 2, all multiplied by $h/3$.

## why $O(h^4)$

each pair of subintervals $[x_i, x_{i+2}]$ is fitted by a unique parabola $p$ through $(x_i, f_i), (x_{i+1}, f_{i+1}), (x_{i+2}, f_{i+2})$. integrating the parabola exactly over $[x_i, x_{i+2}]$ gives

$$\int_{x_i}^{x_{i+2}} p(x)\,dx = \frac{h}{3}(f_i + 4 f_{i+1} + f_{i+2})$$

the error of one Simpson "panel" is $-h^5 f^{(4)}(\xi)/90$, total error is $O(h^4)$ for $N$ panels. **two orders better than the trapezoidal rule** at no extra cost in points.

## python implementation

```python
def simpson(f, a, b, N):
    if N % 2 != 0:
        raise ValueError("Simpson's rule needs even N")
    x = np.linspace(a, b, N + 1)
    y = f(x)
    h = (b - a) / N
    return h/3 * (y[0] + y[-1] + 4*np.sum(y[1::2]) + 2*np.sum(y[2:-1:2]))
```

scipy:

```python
from scipy.integrate import simpson
result = simpson(y, x=x)        # simpson auto-detects spacing
```

(in older scipy: `simps` instead of `simpson`).

## comparison with trapezoidal

| rule | error per panel | weights | order |
|---|---|---|---|
| trapezoidal | $-h^3 f''/12$ | $(1, 1)/2$ | 2 |
| **Simpson 1/3** | $-h^5 f^{(4)}/90$ | $(1, 4, 1)/3$ | **4** |
| Simpson 3/8 | $-3h^5 f^{(4)}/80$ | $(1, 3, 3, 1) \cdot 3/8$ | 4 |

so for the **same number of points** and a smooth integrand, Simpson is dramatically better than trapezoidal. for $N = 100$ points integrating $\int_0^1 e^x dx$:
- trapezoidal: error $\sim 10^{-5}$
- Simpson: error $\sim 10^{-9}$

## convergence test

doubling $N$ should reduce the Simpson error by 16× (since error is $O(h^4)$ and $h \to h/2$).

```python
errs = []
Ns = [10, 20, 40, 80, 160]
for N in Ns:
    errs.append(abs(simpson(f, a, b, N) - exact))
plt.loglog(Ns, errs, 'o-')
# slope should be -4
```

## strengths

- **fourth-order accuracy** at the same number of evaluations as trapezoidal
- **simple to code** (one line in numpy)
- **works for any smooth integrand**

## limitations

- **needs even $N$**: workaround is Simpson's 3/8 rule on the last three intervals if $N$ is odd
- **assumes equispaced samples**: for non-uniform $x_i$, use Simpson's rule formula adapted to the actual spacing, or switch to a trapezoidal rule
- **breaks down at discontinuities**: the parabolic fit through a kink is meaningless, the local error is $O(h)$ instead of $O(h^5)$

## extensions

- **adaptive Simpson**: bisect the interval until the local error estimate (from Romberg-like extrapolation) is below tolerance. `scipy.integrate.quad` does something like this internally
- **Simpson's 3/8 rule**: 4-point version, weights $(1, 3, 3, 1) \cdot 3/8$, also $O(h^4)$, slightly less accurate constant. used for the last three subintervals when $N$ is odd
- **Romberg integration**: trapezoidal at a sequence of step sizes $h, h/2, h/4, \ldots$, combined via Richardson extrapolation. Simpson's rule emerges as the first level of Romberg from trapezoidal

## astrophysics use cases

- **integrating Friedmann's equation** for $D_L(z)$, $D_A(z)$ in cosmology
- **computing magnitudes from spectra**: $\int F_\nu T_\nu d\nu / \int T_\nu d\nu$ where $T_\nu$ is the filter transmission curve
- **column density along a sightline**
- **ground-state energy** in variational Monte Carlo

for any 1D integral of a smooth function, Simpson is the right default. for 2D and higher, switch to Monte Carlo. for sharp features, switch to adaptive quadrature (`scipy.integrate.quad`).

## see also

- [Trapezoidal rule](../../02_Zettel/Theory/Trapezoidal rule.html)
- [Trapezoidal rule error estimate](../../02_Zettel/Theory/Trapezoidal rule error estimate.html)
- [Monte Carlo integration mean value method](../../02_Zettel/Theory/Monte Carlo integration mean value method.html)
- [Truncation error and order of accuracy](../../02_Zettel/Theory/Truncation error and order of accuracy.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
