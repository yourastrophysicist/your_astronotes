---
layout: "default"
title: "Finite difference discretization"
---
# Finite difference discretization

the most direct way to turn a partial differential equation into something a computer can solve. replace the continuous derivatives with finite differences on a discrete grid, transforming the PDE into a system of algebraic equations for the values at grid points.

## the two ingredients

1. **a grid**: discretize the spatial domain into points $x_i$ (1D), $(x_i, y_j)$ (2D), or $(x_i, y_j, z_k)$ (3D). usually uniform spacing $\Delta x$
2. **finite-difference stencils**: replace each partial derivative with a stencil of grid values. central, forward, backward, higher-order, mixed

## standard 1D stencils

| derivative | stencil | accuracy |
|---|---|---|
| $\partial_x u$ central | $(u_{i+1} - u_{i-1})/(2\Delta x)$ | $O(\Delta x^2)$ |
| $\partial_x u$ upwind ($v > 0$) | $(u_i - u_{i-1})/\Delta x$ | $O(\Delta x)$ |
| $\partial_x^2 u$ | $(u_{i+1} - 2u_i + u_{i-1})/\Delta x^2$ | $O(\Delta x^2)$ |
| $\partial_x^4 u$ | $(u_{i+2} - 4u_{i+1} + 6u_i - 4u_{i-1} + u_{i-2})/\Delta x^4$ | $O(\Delta x^2)$ |

higher-order stencils are derived by Taylor expansion. each one buys an order of accuracy by widening the stencil.

## the discrete Laplacian

in 1D: $u_{i+1} - 2u_i + u_{i-1}$ (with $\Delta x = 1$).

in 2D: the **5-point stencil**:

$$\nabla^2 u_{i,j} \approx u_{i+1,j} + u_{i-1,j} + u_{i,j+1} + u_{i,j-1} - 4 u_{i,j}$$

with a higher-order **9-point stencil** for $O(\Delta x^4)$ accuracy if needed.

in 3D: the **7-point stencil**, six neighbors plus the center.

these are the discrete versions of the continuous Laplacian operator and form the heart of every grid-based PDE solver.

## from PDE to algebraic system

### example: Poisson equation $\nabla^2 \phi = \rho$ on a 2D grid

at each interior grid point $(i, j)$:
$$\frac{\phi_{i+1,j} + \phi_{i-1,j} + \phi_{i,j+1} + \phi_{i,j-1} - 4\phi_{i,j}}{\Delta x^2} = \rho_{i,j}$$

this is one linear equation per grid point. if the grid is $N \times N$ with Dirichlet boundary conditions on the edges, there are $(N-2)^2$ unknowns and $(N-2)^2$ equations, forming a sparse linear system $A\boldsymbol\phi = \boldsymbol\rho$. each row of $A$ has exactly 5 nonzeros (the 5-point stencil weights) — a **band matrix** structure.

solve with Gauss-Seidel, conjugate gradient, multigrid, or sparse direct methods.

### example: heat equation $\partial_t u = D \nabla^2 u$

discretize space *and* time. with FTCS:
$$\frac{u_{i,j}^{n+1} - u_{i,j}^n}{\Delta t} = D \cdot (\text{5-point Laplacian of } u^n)_{i,j}$$

solve for $u_{i,j}^{n+1}$ explicitly. each timestep is a single matrix-vector multiplication. see [Initial value PDEs and FTCS](Initial%20value%20PDEs%20and%20FTCS.html).

## boundary conditions in the discretization

three standard types:

- **Dirichlet** ($u = $ given): set $u_{0,j}, u_{N-1,j}$ etc. to the prescribed value, never update them
- **Neumann** ($\partial_n u = $ given): use a "ghost cell" $u_{-1,j}$ chosen so that $(u_{1,j} - u_{-1,j})/(2\Delta x) = $ flux. solve for the boundary $u_{0,j}$
- **periodic**: $u_{N, j} = u_{0, j}$, $u_{-1, j} = u_{N-1, j}$. the stencil wraps around

implementing boundary conditions correctly is half the bug-finding work in a real PDE solver.

## the convergence test

for any new finite-difference code, halve $\Delta x$ and check that the error drops by the expected factor ($4\times$ for $O(\Delta x^2)$, $16\times$ for $O(\Delta x^4)$). if the order is wrong, the discretization or the boundary conditions are wrong.

## non-uniform grids

if the solution varies rapidly in some regions and slowly in others (e.g. boundary layers, shocks), uniform grids waste resolution. options:

- **stretched grids**: $x_i = f(i)$ for some smooth $f$ that compresses where needed
- **adaptive mesh refinement (AMR)**: dynamically refine in high-gradient regions
- **finite element**: triangular/tetrahedral meshes that conform to geometry

these come at the cost of more complex stencil definitions (the simple "$u_{i+1} - 2u_i + u_{i-1}$" formula needs adjustment for non-uniform spacing).

## astrophysics applications

- **self-gravity**: Poisson equation discretized on a 5-point stencil
- **stellar pulsations**: linear waves discretized on the radial grid of a stellar model
- **molecular cloud collapse**: hydrodynamics + self-gravity on AMR grids
- **cosmological N-body**: density field discretized for FFT-based force computation
- **ice giant atmosphere modeling**: energy and momentum equations on a stretched grid

## see also

- [Forward backward and central differences](Forward%20backward%20and%20central%20differences.html)
- [Second derivatives](Second%20derivatives.html)
- [Initial value PDEs and FTCS](Initial%20value%20PDEs%20and%20FTCS.html)
- [Boundary value PDEs and iteration](Boundary%20value%20PDEs%20and%20iteration.html)
- [Stability and the Courant condition](Stability%20and%20the%20Courant%20condition.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Boundary%20value%20PDEs%20and%20iteration.html" class="backlink-item">Boundary value PDEs and iteration</a></li>
    <li class="backlink-item-wrap"><a href="Initial%20value%20PDEs%20and%20FTCS.html" class="backlink-item">Initial value PDEs and FTCS</a></li>
    <li class="backlink-item-wrap"><a href="Second%20derivatives.html" class="backlink-item">Second derivatives</a></li>
    <li class="backlink-item-wrap"><a href="Stability%20and%20the%20Courant%20condition.html" class="backlink-item">Stability and the Courant condition</a></li>
    <li class="backlink-item-wrap"><a href="When%20to%20use%20implicit%20schemes.html" class="backlink-item">When to use implicit schemes</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>

