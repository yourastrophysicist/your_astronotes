---
layout: default
title: "Truncation error and order of accuracy"
---

# Truncation error and order of accuracy

every numerical algorithm replaces a continuous mathematical operation with a discrete approximation. the *truncation error* is what is lost in that replacement — the terms in the Taylor series that we throw away, the integral pieces that we approximate by trapezoids, the ODE step that we miss by linearizing. this is the *deterministic* error of the algorithm. the other kind, [roundoff](../../02_Zettel/Theory/Floating point representation and rounding errors.md), is the random error from finite precision. both matter, and they fight each other.

## the Taylor series anchor

every claim "this method is $O(h^p)$" comes from a Taylor expansion. given a smooth $f$:

$$f(x + h) = f(x) + hf'(x) + \tfrac{h^2}{2}f''(x) + \tfrac{h^3}{6}f'''(x) + \cdots$$

every algorithm that uses values of $f$ at neighboring points effectively rearranges this series and throws away the highest-order kept term. that thrown-away term is the truncation error.

## first-derivative approximations as the textbook example

**forward difference**:
$$\frac{f(x+h) - f(x)}{h} = f'(x) + \tfrac{h}{2}f''(x) + O(h^2) \quad\Rightarrow\quad O(h)$$

**backward difference**: same order, $O(h)$.

**central difference**:
$$\frac{f(x+h) - f(x-h)}{2h} = f'(x) + \tfrac{h^2}{6}f'''(x) + O(h^4) \quad\Rightarrow\quad O(h^2)$$

the symmetric subtraction kills the $f''$ term, gaining one order of accuracy at the same cost (two function evaluations).

**second derivative**:
$$\frac{f(x+h) - 2f(x) + f(x-h)}{h^2} = f''(x) + \tfrac{h^2}{12}f^{(4)}(x) + O(h^4) \quad\Rightarrow\quad O(h^2)$$

three function evaluations, $O(h^2)$.

## what "order $p$" means in practice

an algorithm of order $p$ has truncation error $\sim Ch^p$ for some constant $C$ that depends on the local derivatives of $f$. consequences:

- halving $h$ shrinks the error by a factor $2^p$. order 1: factor of 2. order 4: factor of 16
- to improve accuracy by a factor of 10 with an order-$p$ method, I need $h \to h \cdot 10^{-1/p}$. order 1: 10× more steps. order 4: 1.78× more steps. **higher-order methods win at high accuracy by a wide margin**

## the convergence test (the most important test in numerics)

run the algorithm at step sizes $h$ and $h/2$. if the answers differ by an amount that scales as $h^p$ where $p$ is the claimed order, the algorithm is working as advertised. if the scaling is wrong, something is broken.

```python
errs = []
hs = [1e-1, 5e-2, 2.5e-2, 1.25e-2]
for h in hs:
    errs.append(my_algorithm(h) - true_answer)
# log-log plot: slope should be the order p
plt.loglog(hs, np.abs(errs))
```

a missing convergence plot is a red flag.

## quadrature rules

**trapezoidal rule**: $O(h^2)$, error $\propto h^2 f''$
**Simpson's rule**: $O(h^4)$, error $\propto h^4 f^{(4)}$
**Gauss-Legendre $n$-point**: $O(h^{2n})$, optimal for polynomial integrands

doubling the number of points on Simpson's rule cuts the error by a factor of 16. on trapezoidal, by a factor of 4.

## ODE integrators

| method | order | function evals per step |
|---|---|---|
| Euler | 1 | 1 |
| RK2 (midpoint) | 2 | 2 |
| RK4 | 4 | 4 |
| Bulirsch-Stoer | adaptive | many |

the cost-versus-accuracy ratio favors RK4 for typical smooth problems.

## the U-curve, when truncation meets roundoff

for any finite-difference computation: as I shrink $h$, truncation error goes down ($\sim h^p$) but roundoff goes *up* (cancellation). the total error is U-shaped, with a minimum at the **optimal step size**:

$$h_{\rm opt} \sim \epsilon^{1/(p+1)}$$

for forward-difference first derivative ($p = 1$): $h_{\rm opt} \sim \sqrt\epsilon \sim 10^{-8}$.
for central difference ($p = 2$): $h_{\rm opt} \sim \epsilon^{1/3} \sim 10^{-5}$.

this is why I cannot just "use very small $h$" to make finite differences accurate. see [Roundoff vs truncation balance](../../02_Zettel/Theory/Roundoff vs truncation balance.md) for the full picture.

## see also

- [Floating point representation and rounding errors](../../02_Zettel/Theory/Floating point representation and rounding errors.md)
- [Roundoff vs truncation balance](../../02_Zettel/Theory/Roundoff vs truncation balance.md)
- [Forward backward and central differences](../../02_Zettel/Theory/Forward backward and central differences.md)
- [Trapezoidal rule](../../02_Zettel/Theory/Trapezoidal rule.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
