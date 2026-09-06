---
layout: default
title: "Trapezoidal rule error estimate"
---

# Trapezoidal rule error estimate

how to know how accurate my trapezoidal integral is, and how many points I need for a target tolerance.

## the error formula

for the composite trapezoidal rule on $[a, b]$ with $N$ subintervals of width $h = (b - a)/N$:

$$E_T = -\frac{(b - a)\, h^2}{12} f''(\xi)$$

for some $\xi \in [a, b]$. this is an *exact* error formula, but $\xi$ is unknown. the practical bound:

$$|E_T| \leq \frac{(b - a)^3}{12 N^2} \max_{x \in [a,b]} |f''(x)|$$

so error scales as $1/N^2$. doubling the number of points cuts the error by a factor of 4. **second-order accuracy.**

## the experimental error estimate

in practice I rarely know $\max |f''|$ analytically. instead I use the **Richardson estimate**: compute the trapezoidal integral at $N$ and at $2N$ points, $T_N$ and $T_{2N}$. since the error is $\propto 1/N^2$:

$$T - T_N \approx 4 (T - T_{2N})$$

solve for the error in $T_{2N}$:

$$T - T_{2N} \approx \frac{T_{2N} - T_N}{3}$$

so the *difference between successive refinements is a good error estimate* (within a factor of 3).

## the Romberg trick

once I have $T_N$ and $T_{2N}$ with errors $\propto h^2$ and $\propto h^2/4$, the *combination*

$$R = T_{2N} + \frac{T_{2N} - T_N}{3}$$

cancels the $h^2$ error term. this is **Richardson extrapolation**, and the resulting $R$ is fourth-order accurate ($O(h^4)$). $R$ is in fact equivalent to **Simpson's rule** applied to the same $2N + 1$ points!

so trapezoidal at $N$ and $2N$, combined, *automatically gives me Simpson's accuracy*. iterating this idea (combining trapezoidal at $N, 2N, 4N, 8N, \ldots$) gives **Romberg integration**, with each level canceling the next-leading error and reaching very high accuracy quickly for smooth integrands.

## adaptive trapezoidal

the standard usage:

1. compute $T_N$ for $N = 2, 4, 8, \ldots$
2. stop when $|T_{2N} - T_N| < \epsilon$ (the differences are estimating the error)
3. report $R = T_{2N} + (T_{2N} - T_N)/3$ as the answer (Richardson-extrapolated)

```python
def adaptive_trapezoid(f, a, b, tol=1e-10, max_levels=20):
    T_prev = 0.5 * (b - a) * (f(a) + f(b))      # N = 1
    N = 1
    for level in range(max_levels):
        N *= 2
        h = (b - a) / N
        # trapezoidal at N points:
        # T_N = T_prev/2 + h * sum_of_new_midpoints
        new_pts = np.linspace(a + h, b - h, N // 2 + (1 if N // 2 < N else 0))
        # easier: just resample fully
        x = np.linspace(a, b, N + 1)
        y = f(x)
        T_now = h * (0.5 * y[0] + np.sum(y[1:-1]) + 0.5 * y[-1])
        if abs(T_now - T_prev) < tol:
            return T_now + (T_now - T_prev) / 3       # Richardson-extrapolated
        T_prev = T_now
    raise RuntimeError("did not converge")
```

## when this fails

if $f$ has a discontinuity, kink, or singularity in $[a, b]$, the trapezoidal error formula does not apply (the bound assumes bounded $f''$). symptoms:
- error does not decrease as $1/N^2$
- successive refinements jump erratically

remedies:
- **subdivide at the singular point**: integrate $[a, c]$ and $[c, b]$ separately, where $c$ is the trouble spot
- **change of variable** that smooths the integrand
- **use a method designed for singular endpoints**: tanh-sinh quadrature, Gauss-Jacobi for endpoint singularities

## periodic integrands: spectral accuracy

a remarkable fact: when integrating a smooth periodic function over a full period, the trapezoidal rule has error decaying *faster than any power* of $h$ — exponentially fast. the $f''$ contributions cancel by periodicity.

so for periodic integrands, plain trapezoidal *beats Simpson's rule* at large $N$. this is why FFT-based numerical integration uses uniform sampling on a periodic interval.

## astrophysics use cases

- **luminosity from a tabulated spectrum** $\int F_\nu d\nu$: smooth, low-D, trapezoidal
- **integration over a CMB sky map** with periodic boundaries
- **comoving distance integral** $\int dz/E(z)$ for cosmology: smooth, trapezoidal works fine, but I usually use Simpson or scipy.integrate.quad

## see also

- [Trapezoidal rule](../../02_Zettel/Theory/Trapezoidal rule.html)
- [Simpson's rule](../../02_Zettel/Theory/Simpson's rule.html)
- [Truncation error and order of accuracy](../../02_Zettel/Theory/Truncation error and order of accuracy.html)
- [Built-in scipy integrators](../../02_Zettel/Theory/Built-in scipy integrators.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
