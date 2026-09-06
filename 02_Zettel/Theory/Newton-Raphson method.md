---
layout: default
title: "Newton-Raphson method"
---

# Newton-Raphson method

the standard 1D root finder when I have $f$ *and* $f'$. uses a local linearization to predict where the root is, then iterates. when it works, it is dramatically faster than bisection. when it doesn't, it can diverge.

## the idea

near $x_n$, approximate $f$ by its tangent line:
$$f(x) \approx f(x_n) + f'(x_n)(x - x_n)$$

set this to zero and solve:
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

this is the Newton iteration. geometrically: draw the tangent at $x_n$, slide along it to where it crosses the x-axis, that is $x_{n+1}$.

## convergence: quadratic when it works

assuming $f'(x^*) \neq 0$ at the root and starting "close enough":

$$|x_{n+1} - x^*| \leq C |x_n - x^*|^2$$

so the number of correct digits *doubles* every iteration. starting with 1 digit accuracy, after 5 iterations I have 32 digits — *if* the iteration converges.

bisection: 1 bit per step, $\sim 50$ steps to machine precision.
Newton: doubling every step, $\sim 5$ steps to machine precision.
the speedup is enormous.

## python implementation

```python
def newton(f, fprime, x0, tol=1e-12, max_iter=100):
    x = x0
    for k in range(max_iter):
        fx = f(x)
        if abs(fx) < tol:
            return x, k
        fpx = fprime(x)
        if fpx == 0:
            raise ValueError("zero derivative — Newton failed")
        x_new = x - fx / fpx
        if abs(x_new - x) < tol:
            return x_new, k + 1
        x = x_new
    raise RuntimeError("did not converge")
```

## the failure modes

Newton-Raphson is fast but fragile. it can fail in several ways:

1. **zero derivative** ($f'(x_n) = 0$): division by zero. happens at maxima/minima of $f$ where $f$ touches but does not cross the x-axis
2. **flat function**: $f'(x_n)$ very small → $x_{n+1}$ overshoots wildly, lands far from the root, may be outside the basin of attraction
3. **bad starting point**: if $x_0$ is far from the root, the tangent prediction may overshoot in any direction
4. **multiple roots**: Newton converges *linearly*, not quadratically, near a multiple root. accuracy is reduced
5. **cycling**: for some pathological $f$, the iteration enters a finite-period cycle and never converges
6. **basin of attraction is fractal**: for many problems with multiple roots, the set of starting points that converge to a given root is a fractal. small perturbations of $x_0$ can land in different basins

## when to use Newton

- **smooth function with known derivative** that I can evaluate cheaply
- **good initial guess** (e.g. from a coarse bisection, from physics intuition, or from a previous solution in a parameter sweep)
- **need many digits**: if I want 10+ digits, Newton's quadratic convergence is the only practical way

## what to do when it fails

- **bracket-then-Newton**: do a few bisection steps to localize the root, then switch to Newton. or use `scipy.optimize.brentq`, which does this automatically
- **damped Newton**: $x_{n+1} = x_n - \alpha f(x_n)/f'(x_n)$ with $\alpha < 1$ to slow down dangerous overshoots
- **secant method**: replace $f'(x_n)$ by the finite-difference estimate $[f(x_n) - f(x_{n-1})]/(x_n - x_{n-1})$. avoids needing the analytic derivative; convergence is golden-ratio (~1.618) instead of quadratic (2). still very fast and far more practical when $f'$ is hard to compute

## numerical derivative as a fallback

if I cannot or do not want to differentiate $f$ analytically, replace by a central difference:

$$f'(x) \approx \frac{f(x + h) - f(x - h)}{2h}$$

with $h \sim \epsilon^{1/3}$ for optimal accuracy. this gives "Newton with numerical derivative" — works well for smooth $f$, slightly slower than analytic Newton because of the extra evaluations.

## scipy production

```python
from scipy.optimize import newton
root = newton(f, x0, fprime=fprime)        # Newton with analytic derivative
root = newton(f, x0)                       # secant method (no derivative)
```

or `scipy.optimize.brentq(f, a, b)` for the bracket-Brent hybrid.

## astrophysics use cases

- **inverting Kepler's equation** $M = E - e\sin E$ to find eccentric anomaly $E$ from mean anomaly $M$
- **Saha equation** for ionization equilibrium
- **stellar structure**: find the central pressure $P_c$ for which the boundary condition $\rho(R) = 0$ at the surface is satisfied (this is shooting + Newton)
- **fitting**: $\chi^2$ minimization is a multivariate Newton (with the gradient as $f$)

## see also

- [Bisection method](../../02_Zettel/Theory/Bisection method.md)
- [Newton-Raphson for systems of equations](../../02_Zettel/Theory/Newton-Raphson for systems of equations.md)
- [Relaxation method](../../02_Zettel/Theory/Relaxation method.md)
- [Choosing a root finder](../../02_Zettel/Theory/Choosing a root finder.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
