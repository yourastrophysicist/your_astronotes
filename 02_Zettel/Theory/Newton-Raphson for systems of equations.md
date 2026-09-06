---
layout: default
title: "Newton-Raphson for systems of equations"
---

# Newton-Raphson for systems of equations

the multivariate generalization of [Newton-Raphson method](../../02_Zettel/Theory/Newton-Raphson method.md). given a vector function $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^n$, find $\mathbf{x}^*$ such that $\mathbf{f}(\mathbf{x}^*) = \mathbf{0}$.

## the algorithm

linearize at the current guess $\mathbf{x}_k$:
$$\mathbf{f}(\mathbf{x}) \approx \mathbf{f}(\mathbf{x}_k) + J(\mathbf{x}_k)(\mathbf{x} - \mathbf{x}_k)$$

where $J$ is the **Jacobian matrix**, $J_{ij} = \partial f_i/\partial x_j$. set the linearization to zero:

$$J(\mathbf{x}_k) (\mathbf{x}_{k+1} - \mathbf{x}_k) = -\mathbf{f}(\mathbf{x}_k)$$

so

$$\mathbf{x}_{k+1} = \mathbf{x}_k - J(\mathbf{x}_k)^{-1} \mathbf{f}(\mathbf{x}_k)$$

in practice **never invert $J$ explicitly** — solve the linear system $J\Delta\mathbf{x} = -\mathbf{f}$ for $\Delta\mathbf{x}$ at each iteration and update $\mathbf{x}_{k+1} = \mathbf{x}_k + \Delta\mathbf{x}$.

## python implementation

```python
def newton_system(f, jac, x0, tol=1e-10, max_iter=100):
    x = x0.astype(float).copy()
    for k in range(max_iter):
        fx = f(x)
        if np.linalg.norm(fx) < tol:
            return x, k
        J = jac(x)
        dx = np.linalg.solve(J, -fx)
        x += dx
        if np.linalg.norm(dx) < tol:
            return x, k + 1
    raise RuntimeError("did not converge")
```

## convergence

quadratic, just like 1D Newton, *if* the Jacobian is non-singular at the root and we start close enough. failure modes are the same as the 1D case but more numerous:

- **singular $J$**: linear solve fails. happens at saddle points or where the equations are linearly dependent
- **ill-conditioned $J$**: the linear solve amplifies roundoff. happens when the equations are nearly redundant
- **bad starting point**: even with a good Jacobian, far from the root the linearization is wrong and the step may overshoot
- **basin of attraction**: in $n$ dimensions, basins can be even more fractal-like than in 1D

## when the Jacobian is hard to write down

three options:

1. **finite-difference Jacobian**: $J_{ij} \approx [f_i(\mathbf{x} + h\mathbf{e}_j) - f_i(\mathbf{x})]/h$. costs $n$ extra function evaluations per Newton step, often a good tradeoff
2. **automatic differentiation**: tools like `jax` or `autograd` compute exact $J$ from $\mathbf{f}$ at the cost of one or two extra function evaluations
3. **Broyden's method**: a quasi-Newton scheme that updates an approximate $J$ each iteration. cheaper than finite differences for moderate $n$, slower convergence (super-linear, not quadratic)

## scipy production

```python
from scipy.optimize import root
sol = root(f, x0, jac=jac, method='hybr')      # default modified Powell
sol = root(f, x0, jac=jac, method='lm')        # Levenberg-Marquardt
```

## linear-system structure exploitation

when $\mathbf{f}$ comes from discretizing a PDE, the Jacobian inherits structure (sparse, banded, or block-diagonal). exploit it:
- sparse matrices: `scipy.sparse.linalg.spsolve`
- iterative solvers: `scipy.sparse.linalg.gmres`, `cg` for symmetric systems

## astrophysics use cases

- **multi-zone stellar structure** (Henyey method): the discretized stellar structure equations are a coupled non-linear system, solved by relaxation = Newton-Raphson with a banded Jacobian
- **chemical equilibrium**: many species, many reactions, find the equilibrium concentrations
- **multi-body problems**: find equilibrium points (Lagrangian points $L_1$–$L_5$) of a 3-body gravitational system
- **MCMC step**: HMC requires the gradient of the log-posterior; finding modes uses Newton on the gradient
- **radiative transfer**: ALI iteration is essentially block-Newton-Raphson on the source function

## see also

- [Newton-Raphson method](../../02_Zettel/Theory/Newton-Raphson method.md) — 1D version
- [Bisection method](../../02_Zettel/Theory/Bisection method.md) — slower but bulletproof alternative
- [Choosing a root finder](../../02_Zettel/Theory/Choosing a root finder.md)
- [Linear least squares](../../02_Zettel/Theory/Linear least squares.md) — minimization is equivalent to root-finding on the gradient
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
