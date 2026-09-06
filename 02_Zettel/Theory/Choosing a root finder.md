---
layout: default
title: "Choosing a root finder"
---

# Choosing a root finder

decision tree for finding $x$ such that $f(x) = 0$. each method has a specific situation where it dominates.

## the cheat sheet (1D)

| situation | method | rate |
|---|---|---|
| smooth $f$, can compute $f'$, good initial guess | **Newton-Raphson** | quadratic |
| smooth $f$, no analytic $f'$, good initial guess | **secant** | super-linear ($\phi \approx 1.618$) |
| have a bracket $f(a) f(b) < 0$ | **bisection** | linear (rate 1/2) |
| have a bracket, want speed | **Brent's method** | super-linear, guaranteed |
| stiff or noisy $f$ | **bisection** or relaxation | linear |
| multiple roots in interval | **bracket each, then refine** | depends |

## the practical recommendation

for any new 1D problem, default to:

```python
from scipy.optimize import brentq
root = brentq(f, a, b)
```

`brentq` is bracketed (so it cannot diverge) and uses inverse quadratic interpolation when the function is smooth, falling back to bisection when needed. fast and bulletproof.

if no bracket is available:

```python
from scipy.optimize import newton
root = newton(f, x0, fprime=fprime)        # if I have analytic f'
root = newton(f, x0)                       # secant method
```

## when each method shines

### bisection wins when
- the function is noisy or has rapid oscillations
- $f'$ is hard to compute or unreliable
- I need a guaranteed answer in bounded time
- I am writing exam code and cannot afford to debug

### Newton-Raphson wins when
- the function is smooth and well-behaved near the root
- I have an analytic $f'$ or can compute one cheaply
- I have a good initial guess (within the basin of attraction)
- I need many digits (the doubling property pays off)

### secant wins when
- Newton's territory but I want to avoid analytic differentiation
- $f$ is expensive to evaluate (so an extra evaluation for finite-difference $f'$ is too costly)

### Brent wins when
- I have a bracket and want both safety and speed
- the function is mostly smooth but I do not want to risk Newton's failure modes

### relaxation wins when
- the problem comes from a fixed-point reformulation $x = g(x)$ that is naturally smooth
- the convergence rate $|g'(x^*)|$ happens to be small

## the multi-dimensional case

| situation | method |
|---|---|
| smooth, analytic Jacobian | **Newton-Raphson for systems** |
| smooth, no Jacobian | **Broyden's method** (quasi-Newton) |
| general non-linear system | `scipy.optimize.root` |
| optimization (looking for $\min f$, equivalent to root of $\nabla f$) | **L-BFGS-B**, **Nelder-Mead**, **trust-region** |

`scipy.optimize.root(f, x0, jac=jac)` is the multivariate workhorse, defaulting to a hybrid Powell method.

## the failure modes to remember

- **Newton diverges**: bracket and bisect a few steps to localize, then re-Newton
- **Newton hits zero derivative**: switch to bisection
- **bisection cannot bracket**: scan for sign changes first, possibly with multiple starting brackets
- **multiple roots in bracket**: bisection finds *some* root, not necessarily the one I want — refine the bracket
- **flat function**: $|f|$ is small but the actual root is far away; check the residual *and* the change in $x$
- **noise**: a noisy $f$ can produce spurious sign changes; smooth first or use a wider tolerance

## the verification step

after any root finder converges:

1. **plug in**: compute $f(x^*)$. should be near zero
2. **plot**: $f$ in the neighborhood of $x^*$ with the converged root marked
3. **think**: does the value of $x^*$ make physical sense?

skipping this step is the cause of more wrong-answer bugs than any algorithm choice.

## astrophysics hit list

- **inverting Kepler's equation** $M = E - e \sin E$: smooth, derivative cheap, Newton with $E_0 = M$ gives the right answer in 3 steps
- **finding the photosphere**: $\tau(r) = 2/3$ as a function of $r$, monotonic, bisection
- **adiabatic-radiative boundary** in stars: where does the Schwarzschild criterion change sign? bisection on the gradient
- **Saha equation for ionization fraction**: $X_e \in (0, 1)$, monotonic in $T$, bisection or Newton
- **finding eigenvalues by shooting**: bracket the energy, bisect on the wave-function boundary residual
- **MCMC mode-finding**: Newton on the gradient of the log-posterior

## see also

- [Bisection method](../../02_Zettel/Theory/Bisection method.html)
- [Newton-Raphson method](../../02_Zettel/Theory/Newton-Raphson method.html)
- [Newton-Raphson for systems of equations](../../02_Zettel/Theory/Newton-Raphson for systems of equations.html)
- [Relaxation method](../../02_Zettel/Theory/Relaxation method.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
