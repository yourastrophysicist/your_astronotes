---
layout: "default"
title: "Initial value PDEs and FTCS"
---
# Initial value PDEs and FTCS

an initial-value PDE is a partial differential equation where time is one of the variables and the solution evolves forward from an initial condition. examples: diffusion equation $\partial_t u = D \partial_x^2 u$, advection $\partial_t u + c \partial_x u = 0$, wave equation $\partial_t^2 u = c^2 \partial_x^2 u$. the simplest discretization is **forward-time, centered-space** (FTCS).

## the FTCS scheme

discretize on a grid: $u_i^n \equiv u(x_i, t_n)$ with $x_i = i\Delta x$ and $t_n = n\Delta t$. replace each derivative with a finite difference:

- **forward time**: $\partial_t u \approx (u_i^{n+1} - u_i^n)/\Delta t$
- **centered space (first derivative)**: $\partial_x u \approx (u_{i+1}^n - u_{i-1}^n)/(2\Delta x)$
- **centered space (second derivative)**: $\partial_x^2 u \approx (u_{i+1}^n - 2u_i^n + u_{i-1}^n)/\Delta x^2$

substitute into the PDE and solve algebraically for $u_i^{n+1}$. the result is an *explicit* update rule.

## diffusion equation example

$$\partial_t u = D \partial_x^2 u$$

becomes

$$\frac{u_i^{n+1} - u_i^n}{\Delta t} = D \frac{u_{i+1}^n - 2u_i^n + u_{i-1}^n}{\Delta x^2}$$

solve for $u_i^{n+1}$:

$$u_i^{n+1} = u_i^n + \alpha (u_{i+1}^n - 2u_i^n + u_{i-1}^n), \quad \alpha = \frac{D \Delta t}{\Delta x^2}$$

each new grid point depends only on three old grid points — explicit, simple, fast.

## stability

FTCS for diffusion is **conditionally stable**: stable iff

$$\alpha = \frac{D \Delta t}{\Delta x^2} \leq \frac{1}{2}$$

so $\Delta t \leq \Delta x^2/(2D)$. this is the diffusion CFL condition. **violating it makes the simulation blow up exponentially** — the solution oscillates with growing amplitude. see [Stability and the Courant condition](Stability%20and%20the%20Courant%20condition.html) for a fuller discussion.

for advection, FTCS is **unconditionally unstable** — even with arbitrarily small $\Delta t$ it grows. for hyperbolic problems we need upwind or Lax-Wendroff schemes instead.

## python implementation (1D diffusion)

```python
def ftcs_diffusion(u0, D, dx, dt, n_steps):
    u = u0.copy()
    alpha = D * dt / dx**2
    if alpha > 0.5:
        print(f"warning: alpha = {alpha} > 0.5, scheme is unstable")
    for n in range(n_steps):
        # boundary conditions: hold endpoints fixed (Dirichlet)
        u_new = u.copy()
        u_new[1:-1] = u[1:-1] + alpha * (u[2:] - 2*u[1:-1] + u[:-2])
        u = u_new
    return u
```

## boundary conditions

the FTCS update needs values at $i-1$ and $i+1$ for each interior point. at the boundaries ($i = 0$ and $i = N-1$) one side is missing. the boundary condition supplies the rule:

- **Dirichlet** ($u$ specified at boundary): just set $u_0$ and $u_{N-1}$ each step, never update them
- **Neumann** ($\partial_x u$ specified): use a "ghost cell" $u_{-1}$ such that $(u_1 - u_{-1})/(2\Delta x) = $ specified flux
- **periodic** ($u$ wraps around): $u_{-1} = u_{N-1}$, $u_N = u_0$. perfect for spectral methods

## accuracy

FTCS is $O(\Delta t) + O(\Delta x^2)$. first-order in time, second-order in space. to get a balanced refinement, take $\Delta t \propto \Delta x^2$ — which is exactly what stability requires anyway.

## the implicit alternative

backward Euler in time:

$$\frac{u_i^{n+1} - u_i^n}{\Delta t} = D \frac{u_{i+1}^{n+1} - 2u_i^{n+1} + u_{i-1}^{n+1}}{\Delta x^2}$$

now $u^{n+1}$ appears on *both* sides — implicit. solve a linear system at each timestep. cost per step is higher ($O(N)$ for tridiagonal), but the scheme is **unconditionally stable**. for stiff problems (large $D$ or fine grid), the implicit scheme can take vastly larger timesteps and beat FTCS overall.

the **Crank-Nicolson** scheme is the implicit-explicit average: $O(\Delta t^2) + O(\Delta x^2)$, unconditionally stable. the workhorse for diffusion problems in production.

## astrophysics use cases

- **stellar interior diffusion**: thermal diffusion in protoplanetary disks
- **chemical evolution networks** with diffusion
- **the diffusion approximation** in radiative transfer
- **cosmic-ray transport** in ISM
- **neutrino diffusion** in supernova cores

## the structure I learn from FTCS

FTCS is the conceptual key to the rest of computational PDE work:

- the **forward time / centered space** structure is the template for all explicit schemes
- the **CFL stability condition** is the template for understanding when explicit schemes blow up
- the **transition to implicit** is the template for stiff-problem methods
- the **discretized Laplacian** $u_{i+1} - 2u_i + u_{i-1}$ is the building block of every grid-based PDE solver

## see also

- [Finite difference discretization](Finite%20difference%20discretization.html)
- [Stability and the Courant condition](Stability%20and%20the%20Courant%20condition.html)
- [Boundary value PDEs and iteration](Boundary%20value%20PDEs%20and%20iteration.html)
- [Forward backward and central differences](Forward%20backward%20and%20central%20differences.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Boundary%20value%20PDEs%20and%20iteration.html" class="backlink-item">Boundary value PDEs and iteration</a></li>
    <li class="backlink-item-wrap"><a href="Finite%20difference%20discretization.html" class="backlink-item">Finite difference discretization</a></li>
    <li class="backlink-item-wrap"><a href="Stability%20and%20the%20Courant%20condition.html" class="backlink-item">Stability and the Courant condition</a></li>
    <li class="backlink-item-wrap"><a href="When%20to%20use%20implicit%20schemes.html" class="backlink-item">When to use implicit schemes</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>

