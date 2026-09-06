---
layout: default
title: "When to use implicit schemes"
---

# When to use implicit schemes

implicit time-stepping schemes solve a linear (or nonlinear) system at each step, evaluating the right-hand side at the **new** time level. expensive per step, but **unconditionally stable** for linear problems. when explicit schemes need an absurdly small timestep, implicit pays off.

## explicit vs implicit

**explicit** (FTCS, Euler, RK4): $u^{n+1}$ computed directly from $u^n$ and earlier values. one matrix-vector multiplication or function evaluation per step. cheap per step, but stability constrains $\Delta t$.

**implicit** (backward Euler, Crank-Nicolson, BDF): $u^{n+1}$ defined by an equation involving $u^{n+1}$ itself, so we must solve a system at each step:

$$u^{n+1} - \Delta t \cdot \mathcal{L}(u^{n+1}) = u^n$$

(for a linear operator $\mathcal{L}$). costs an $O(N)$ to $O(N^3)$ linear solve per step, but **unconditionally stable** — any $\Delta t$ gives a bounded answer.

## the diffusion CFL trap

for the diffusion equation $\partial_t u = D \nabla^2 u$, the explicit FTCS stability condition is

$$\Delta t \leq \frac{\Delta x^2}{2D}$$

so refining $\Delta x$ by a factor of 2 demands shrinking $\Delta t$ by 4. for a 1024-point grid simulating a smooth diffusion, $\Delta t$ may be $\sim 10^{-6}$ — millions of timesteps for a single dynamical timescale.

implicit (backward Euler) has no such limit. each step costs more, but I can take steps proportional to the *physics* timescale rather than the *grid* timescale. for high-resolution diffusion, this is the difference between hours and weeks.

## stiff ODEs

a system is **stiff** if it has a wide range of timescales. explicit integrators are stability-limited by the *fastest* mode, but the *interesting* dynamics is on the slow one. examples:

- chemical reaction networks (rates differ by $10^{10}$+)
- electrical circuit analysis with fast capacitors and slow resistors
- atmospheric chemistry (ozone vs CO2 lifetimes)
- stellar interior with both nuclear and thermal timescales
- spring-mass systems with very stiff springs

for stiff problems, implicit methods (BDF, Radau) take steps 100× to $10^6$× larger than explicit. the cost of the linear solve is much less than the saving in steps.

`scipy.integrate.solve_ivp(..., method='BDF')` or `'Radau'` for these cases. `'LSODA'` automatically switches between stiff and non-stiff.

## backward Euler in detail

for the heat equation $\partial_t u = D \partial_x^2 u$, backward Euler:

$$\frac{u_i^{n+1} - u_i^n}{\Delta t} = D \frac{u_{i+1}^{n+1} - 2u_i^{n+1} + u_{i-1}^{n+1}}{\Delta x^2}$$

rearranging:

$$-\alpha u_{i-1}^{n+1} + (1 + 2\alpha) u_i^{n+1} - \alpha u_{i+1}^{n+1} = u_i^n, \quad \alpha = \frac{D \Delta t}{\Delta x^2}$$

a tridiagonal linear system at each step. solve with Thomas algorithm in $O(N)$ — very fast, even for huge grids.

## Crank-Nicolson: the workhorse

average the explicit and implicit versions:

$$\frac{u_i^{n+1} - u_i^n}{\Delta t} = \frac{D}{2}\left[\frac{u_{i+1}^{n+1} - 2u_i^{n+1} + u_{i-1}^{n+1}}{\Delta x^2} + \frac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{\Delta x^2}\right]$$

$O(\Delta t^2) + O(\Delta x^2)$, **unconditionally stable**, and *time-symmetric* (so it can preserve some physical structures better than backward Euler). standard for diffusion problems in astrophysics.

cost per step: still a tridiagonal solve in 1D, sparse banded solve in higher dimensions.

## when implicit is *not* the answer

- **non-linear stiff problems**: each step requires Newton-Raphson on the full state vector, plus a Jacobian solve. expensive
- **hyperbolic equations** (waves, advection): implicit methods are stable but smear out wave fronts artificially. better to keep explicit and respect the CFL
- **parallel computation**: explicit methods parallelize trivially (each grid point updates independently). implicit methods need a coupled solve, harder to parallelize

## the decision tree

ask:
1. is the problem *stiff* or *diffusion-dominated*? → implicit
2. is the explicit timestep absurdly small relative to the dynamical timescale? → implicit
3. is the system smooth and the explicit timestep reasonable? → explicit (RK45 etc.)
4. is the problem hyperbolic or wave-like? → explicit, respect CFL

## astrophysics use cases

- **stellar evolution**: implicit Henyey scheme, since thermal vs nuclear timescales span many orders
- **chemical evolution networks** (galaxy formation models): implicit, reaction rates are stiff
- **radiative diffusion** in stellar atmospheres: implicit or operator-split implicit-explicit
- **MHD with strong magnetic field gradients**: semi-implicit, treating Alfvén waves implicitly
- **cosmological N-body**: explicit (collisionless dynamics is not stiff), so leapfrog with appropriate $\Delta t$

## see also

- [Initial value PDEs and FTCS](../../02_Zettel/Theory/Initial value PDEs and FTCS.md)
- [Stability and the Courant condition](../../02_Zettel/Theory/Stability and the Courant condition.md)
- [Finite difference discretization](../../02_Zettel/Theory/Finite difference discretization.md)
- [Built-in scipy integrators](../../02_Zettel/Theory/Built-in scipy integrators.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
