---
layout: default
title: "Relaxation method"
---

# Relaxation method

a fixed-point root finder. recast $f(x) = 0$ as $x = g(x)$ and iterate

$$x_{n+1} = g(x_n)$$

if the iteration converges, the limit $x^*$ satisfies $x^* = g(x^*)$, equivalently $f(x^*) = 0$. simple, derivative-free, and the conceptual ancestor of every iterative method in this course (Gauss-Seidel, Newton, ODE integrators).

## the rewriting

given $f(x) = 0$, the rewriting $x = g(x)$ is not unique. for $f(x) = x^2 - 2$ (root at $\sqrt{2}$) two rewritings:

- $x = 2/x$ → $g'(\sqrt{2}) = -1$ → diverges (cycles)
- $x = (x + 2/x)/2$ → $g'(\sqrt{2}) = 0$ → converges (this is in fact Newton-Raphson on $f$)

so the *choice* of rewriting determines whether the method works.

## convergence condition

the iteration $x_{n+1} = g(x_n)$ converges to a fixed point $x^*$ iff $|g'(x^*)| < 1$ (and we start close enough). proof: by Taylor,
$$x_{n+1} - x^* = g(x_n) - g(x^*) \approx g'(x^*)(x_n - x^*)$$

so the error multiplies by $g'(x^*)$ each step. if $|g'| < 1$ the error shrinks (linear convergence with rate $|g'|$). if $|g'| > 1$ it grows. if $|g'| = 0$, convergence is super-linear (this is what Newton achieves by construction).

## convergence rate

linear: error $\sim |g'(x^*)|^n$. iterations to tolerance $\epsilon$:
$$n \sim \frac{\log(1/\epsilon)}{\log(1/|g'(x^*)|)}$$

for $|g'| = 0.9$: 219 steps to $\epsilon = 10^{-10}$. for $|g'| = 0.5$: 33 steps. for $|g'| = 0.1$: 10 steps. compare: bisection is $\log_2(1/\epsilon) \approx 33$ steps for $\epsilon = 10^{-10}$, regardless of the function.

## python implementation

```python
def relaxation(g, x0, tol=1e-10, max_iter=10000):
    x = x0
    for k in range(max_iter):
        x_new = g(x)
        if abs(x_new - x) < tol:
            return x_new, k + 1
        x = x_new
    raise RuntimeError("did not converge")
```

## overrelaxation

if the iteration converges but slowly (because $|g'|$ is close to 1 from below), accelerate by overshooting:

$$x_{n+1} = x_n + \omega (g(x_n) - x_n)$$

with $\omega > 1$. for the optimal $\omega$ (which depends on $g'$), the effective $|g'_{\rm eff}| = |1 + \omega(g' - 1)|$ can be much smaller than $|g'|$.

if $\omega = 1$: standard relaxation.
if $\omega < 1$: under-relaxation, slows things down (useful when relaxation oscillates around the root).

picking $\omega$:
- start with $\omega = 1$, observe convergence rate
- estimate $g'$ from successive errors: $|g'| \approx |x_{n+1} - x_n|/|x_n - x_{n-1}|$
- for the optimum: $\omega^* = 2/(1 + \sqrt{1 - g'(x^*)^2})$ for symmetric problems

in practice the optimal $\omega$ depends on the specific problem and is often found empirically.

## under-relaxation, the opposite trick

if relaxation oscillates around the root (overshoots, undershoots, overshoots again), use $\omega < 1$:

$$x_{n+1} = (1 - \omega) x_n + \omega g(x_n)$$

this damps the oscillations and converges where vanilla relaxation diverges.

## astrophysics use cases

- **Saha equation for ionization**: $X_e = g(X_e)$ from the Saha law, a transcendental equation
- **stellar atmosphere temperature stratification**: iterate radiative equilibrium → temperature → radiation field → equilibrium ...
- **Gauss-Seidel for boundary value PDEs** is multivariate relaxation: each grid point's update is a relaxation step
- **molecular dynamics with constraints**: SHAKE algorithm is relaxation on the constraint equations
- **iterative deconvolution** of an observed spectrum: each iteration applies the instrument response and corrects

## relation to other methods

- **Newton-Raphson** is a relaxation method with the special choice $g(x) = x - f(x)/f'(x)$. that choice makes $g'(x^*) = 0$, hence quadratic convergence
- **Gauss-Seidel iteration** is relaxation applied to a linear system, equivalent to $\mathbf{x} = (D + L)^{-1}(\mathbf{b} - U\mathbf{x})$
- **Picard iteration** for solving differential equations is relaxation on the integral form

## see also

- [Bisection method](../../02_Zettel/Theory/Bisection method.md)
- [Newton-Raphson method](../../02_Zettel/Theory/Newton-Raphson method.md)
- [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.md)
- [Overrelaxation](../../02_Zettel/Theory/Overrelaxation.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
