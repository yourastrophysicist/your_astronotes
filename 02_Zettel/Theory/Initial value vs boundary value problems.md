---
layout: default
title: "Initial value vs boundary value problems"
---

# Initial value vs boundary value problems

an ODE is determined by the equation *plus* enough auxiliary conditions to pick a unique solution. *where* I impose those conditions splits ODE problems into two fundamentally different classes.

## initial value problem (IVP)

all conditions are at the *same* time $t_0$:

$$\dot{\mathbf{y}} = \mathbf{f}(\mathbf{y}, t), \quad \mathbf{y}(t_0) = \mathbf{y}_0$$

I integrate forward from $t_0$. each step uses only past information. the algorithms are Euler, RK, leapfrog — see [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.html), [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.html), etc.

natural for: dynamical evolution where I know the present state and want to predict the future. orbits, stellar evolution from a starting model, nuclear burning, atmospheric chemistry.

## boundary value problem (BVP)

conditions are at *two or more* points, splitting across boundaries. classic 2nd-order example:

$$y''(x) = f(x, y, y'), \quad y(a) = \alpha, \quad y(b) = \beta$$

I do not know $y'(a)$, so I cannot start integrating forward. the algorithms are different: shooting, finite differences, collocation.

natural for: equilibrium or steady-state problems with conditions specified at the geometric edges. stellar structure (centre regularity + surface conditions), Schrödinger eigenvalue (zero at $\pm \infty$), wave-guide modes.

## the conceptual difference

**IVP**: temporal evolution. each timestep is computed from the previous. *causality*. solution exists and is unique under mild conditions.

**BVP**: global constraint. the solution at any point depends on the conditions at *both* boundaries simultaneously. solutions may not exist (over-constrained), may not be unique (eigenvalue problems), or may exist only for special parameter values.

## algorithms for BVPs

three main families:

### shooting method

[Shooting method](../../02_Zettel/Theory/Shooting method.html): turn the BVP into an IVP by guessing the missing initial conditions, integrate forward, root-find on the boundary residual at the other end. wraps a 1D root finder around an IVP solver.

pros: uses standard IVP machinery. flexible. easy to implement.
cons: sensitive to the initial guess; can be unstable for stiff or oscillatory problems.

### finite differences

discretize on a grid $x_0 = a, x_1, \ldots, x_N = b$. replace derivatives with finite-difference stencils. boundary conditions become equations at the grid endpoints. result: a linear (if the ODE is linear) or non-linear system on the grid values $y_0, y_1, \ldots, y_N$.

pros: robust, handles arbitrary BVPs, scales naturally to PDEs.
cons: large linear system; convergence requires fine grids.

### collocation

assume the solution has a parametric form (polynomial, spline, Fourier series), pick the parameters so the ODE is satisfied at chosen "collocation points" plus the boundary conditions. pseudo-spectral and finite-element methods are special cases.

pros: very high accuracy for smooth problems; what `scipy.integrate.solve_bvp` uses.
cons: works less well when the solution has sharp features.

## eigenvalue problems

a special class of BVPs where the equation contains a parameter $\lambda$, and the BVP has solutions only for special values of $\lambda$:

$$y''(x) + (\lambda - V(x)) y(x) = 0, \quad y(\pm \infty) = 0$$

(the time-independent Schrödinger equation). $\lambda$ is an eigenvalue, $y$ is the eigenfunction. methods:

- **shooting with parameter sweep**: pick $\lambda$, shoot, check boundary residual, vary $\lambda$ until residual = 0. classical method
- **finite-difference matrix eigenvalue**: discretize, get a sparse symmetric matrix, find eigenvalues with `scipy.sparse.linalg.eigsh`. workhorse for QM
- **collocation/spectral**: project onto basis functions, get a dense matrix eigenvalue problem

## examples in astrophysics

| problem | type | typical method |
|---|---|---|
| Kepler orbit | IVP | RK4, leapfrog |
| stellar evolution | IVP | implicit Henyey scheme |
| stellar structure | BVP | shooting + Henyey, collocation |
| pulsational mode frequencies | eigenvalue BVP | shooting on $\omega^2$ |
| Schrödinger bound states | eigenvalue BVP | finite difference + matrix diagonalization |
| atmospheric radiative transfer | BVP | iterative ALI |
| wave equation propagation | IVP (in time) + BVP (in space) | finite-difference grid |

## the practical recipe

ask: *where are the conditions specified?*

- all at the same $t_0$ → IVP → use `solve_ivp` or write RK4/leapfrog
- some at $a$, some at $b$ → BVP → use `solve_bvp` or shoot
- contains a free parameter to be determined → eigenvalue BVP → shoot or matrix-eigenvalue

## see also

- [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.html)
- [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.html)
- [Shooting method](../../02_Zettel/Theory/Shooting method.html)
- [Built-in scipy integrators](../../02_Zettel/Theory/Built-in scipy integrators.html)
- [Boundary value PDEs and iteration](../../02_Zettel/Theory/Boundary value PDEs and iteration.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
