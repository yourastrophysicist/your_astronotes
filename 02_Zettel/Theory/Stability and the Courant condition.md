---
layout: default
title: "Stability and the Courant condition"
---

# Stability and the Courant condition

every explicit time-stepping scheme for a PDE has a maximum stable timestep $\Delta t$ that depends on the spatial resolution $\Delta x$. exceeding it makes the simulation explode exponentially. the constraint takes a different form for different equations.

## the von Neumann stability analysis

the workhorse method for analyzing linear schemes. assume a Fourier mode solution $u_j^n = \xi^n e^{ik j \Delta x}$, plug into the discrete scheme, solve for the **amplification factor** $\xi(k)$. stability requires $|\xi(k)| \leq 1$ for all $k$. otherwise that mode grows in time, and roundoff seeds will eventually make the whole solution blow up.

## the parabolic constraint (diffusion)

FTCS for $\partial_t u = D \partial_x^2 u$ has

$$\xi = 1 - 2\alpha(1 - \cos k\Delta x), \quad \alpha = D \Delta t/\Delta x^2$$

worst case $k\Delta x = \pi$: $\xi = 1 - 4\alpha$. $|\xi| \leq 1$ requires:

$$\boxed{\alpha = \frac{D \Delta t}{\Delta x^2} \leq \frac{1}{2}}$$

so $\Delta t \leq \Delta x^2/(2D)$. **the diffusive CFL condition**.

implications:
- halving $\Delta x$ requires quartering $\Delta t$ → 4× the steps for the same total time
- **the work scales as $\Delta x^{-3}$ in 1D, $\Delta x^{-4}$ in 2D, $\Delta x^{-5}$ in 3D** for fixed total time. this is what makes high-resolution explicit diffusion expensive

## the hyperbolic CFL condition (advection)

for the wave equation $\partial_t u + c \partial_x u = 0$ discretized by upwind:

$$\xi = 1 - \nu(1 - e^{-ik\Delta x}), \quad \nu = c\Delta t/\Delta x$$

stability requires $|\xi|^2 \leq 1$, which gives

$$\boxed{\nu = \frac{c \Delta t}{\Delta x} \leq 1}$$

**the original Courant-Friedrichs-Lewy (CFL) condition**, 1928. physical meaning: the numerical "domain of influence" (the stencil over one timestep) must contain the analytic domain of influence (the characteristic line $x - ct$).

implications:
- halving $\Delta x$ requires halving $\Delta t$ — work scales as $\Delta x^{-2}$ in 1D
- the equation tells the numerics what the maximum timestep is — the *physics* sets the limit, not the algorithm

## why FTCS for advection is unconditionally unstable

FTCS for $\partial_t u + c \partial_x u = 0$:
$$u_j^{n+1} = u_j^n - \tfrac{\nu}{2}(u_{j+1}^n - u_{j-1}^n)$$

amplification: $\xi = 1 - i\nu \sin(k\Delta x)$. $|\xi|^2 = 1 + \nu^2 \sin^2(k\Delta x) > 1$ for any $\nu > 0$. **every Fourier mode grows**, no $\Delta t$ small enough saves the scheme. this is why we use upwind, Lax-Wendroff, or implicit schemes for hyperbolic problems.

## what blowup looks like

if I violate the CFL condition by a small margin, say $\nu = 1.01$, the simulation may run for many timesteps looking fine, then suddenly explode — values reach $10^{300}$ overnight, the array becomes NaN, the plot is white. the warning sign: **growing oscillations** at the grid scale. when these appear, $\Delta t$ is too large.

## fixes

three approaches when an explicit scheme is too expensive due to CFL:

1. **implicit time-stepping**: backward Euler is unconditionally stable. linear solver per step, but unlimited timestep size
2. **Crank-Nicolson** (semi-implicit): $O(\Delta t^2) + O(\Delta x^2)$, also unconditionally stable, the workhorse for diffusion
3. **operator splitting**: split the equation into pieces with different stiffness, treat each piece with the right method (e.g. implicit for diffusion, explicit for advection)
4. **subcycling**: run the diffusion or advection step at a smaller $\Delta t$ within the main step

## astrophysics where CFL bites

- **stellar core convection** simulations: huge $D$ in convective regions, tiny $\Delta t$ → use implicit or anelastic approximation
- **shock simulation** in supernovae: shocks have high $c$ across them, $\Delta t$ collapses near the shock → adaptive mesh refinement
- **MHD with high Alfvén speed** in low-density regions: local $c$ enormous → semi-implicit MHD or relativistic-MHD formulation
- **radiation hydrodynamics**: the speed of light is everywhere, so explicit is hopeless → flux-limited diffusion, M1, full radiation transport

## the practical rule

before running any explicit PDE simulation:

1. compute the relevant CFL number for my equation and stencil
2. set $\Delta t = 0.5 \times \Delta t_{\rm CFL}$ (safety factor)
3. monitor the energy / norm growth as a sanity check
4. if oscillations appear, halve $\Delta t$ and rerun

## see also

- [Initial value PDEs and FTCS](../../02_Zettel/Theory/Initial value PDEs and FTCS.md)
- [Finite difference discretization](../../02_Zettel/Theory/Finite difference discretization.md)
- [Boundary value PDEs and iteration](../../02_Zettel/Theory/Boundary value PDEs and iteration.md)
- [Adaptive step size control](../../02_Zettel/Theory/Adaptive step size control.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
