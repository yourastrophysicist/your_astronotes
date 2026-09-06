---
layout: default
title: "Boundary value PDEs and iteration"
---

# Boundary value PDEs and iteration

elliptic PDEs (Laplace, Poisson) are *boundary value problems*: no time evolution, just a constraint relating the values at every grid point to its neighbors plus the boundary conditions. discretization gives a linear system; iterative methods (Gauss-Seidel, SOR, multigrid) solve it.

## the Laplace equation as the canonical case

$\nabla^2 \phi = 0$ on a domain with $\phi$ specified on the boundary. discretize on a 2D grid with the 5-point Laplacian:

$$\phi_{i+1,j} + \phi_{i-1,j} + \phi_{i,j+1} + \phi_{i,j-1} - 4 \phi_{i,j} = 0$$

solve for the interior point:

$$\phi_{i,j} = \frac{1}{4}(\phi_{i+1,j} + \phi_{i-1,j} + \phi_{i,j+1} + \phi_{i,j-1})$$

each interior $\phi_{i,j}$ is the **average** of its four neighbors. this is the discrete version of the harmonic property "the value at a point equals the average over a small ball."

## the iteration

start from any guess (often $\phi = 0$ in the interior). at each sweep, replace each interior $\phi_{i,j}$ with the average of its neighbors. repeat until converged.

```python
def jacobi_laplace(phi, n_iter=10000, tol=1e-6):
    phi = phi.copy()
    for _ in range(n_iter):
        phi_old = phi.copy()
        # update interior points (Jacobi: use only old values)
        phi[1:-1, 1:-1] = 0.25 * (phi_old[2:, 1:-1] + phi_old[:-2, 1:-1] +
                                   phi_old[1:-1, 2:] + phi_old[1:-1, :-2])
        if np.max(np.abs(phi - phi_old)) < tol:
            break
    return phi
```

this is **Jacobi iteration**: at each sweep, all updates use the *old* values. simple, parallelizable, but slow.

## Gauss-Seidel: faster convergence

at each sweep, use the *latest* available values. some neighbors have already been updated this sweep, others not:

```python
for i in range(1, N-1):
    for j in range(1, N-1):
        phi[i, j] = 0.25 * (phi[i-1, j] + phi[i+1, j] + phi[i, j-1] + phi[i, j+1])
        # phi[i-1, j] and phi[i, j-1] are this sweep's values
        # phi[i+1, j] and phi[i, j+1] are last sweep's
```

converges in roughly half the iterations of Jacobi (the spectral radius of the iteration matrix is the square of Jacobi's). slightly harder to vectorize.

see [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.md) for the linear-algebra perspective.

## SOR: even faster

successive over-relaxation. update the new value as

$$\phi_{i,j}^{(k+1)} = (1 - \omega) \phi_{i,j}^{(k)} + \omega \cdot (\text{Gauss-Seidel update})$$

with $\omega \in (1, 2)$. for a 2D Laplacian on $N \times N$ grid, optimal $\omega^* = 2/(1 + \sin(\pi/N))$, accelerating convergence by a factor $N$. see [Overrelaxation](../../02_Zettel/Theory/Overrelaxation.md).

## the Poisson equation $\nabla^2 \phi = \rho$

generalizes trivially. the grid update becomes

$$\phi_{i,j} = \frac{1}{4}(\phi_{i+1,j} + \phi_{i-1,j} + \phi_{i,j+1} + \phi_{i,j-1} - \Delta x^2 \rho_{i,j})$$

iterating to convergence solves the Poisson equation with the given boundary conditions. this is what Mapelli's section on "boundary-value PDEs with finite difference methods" covers.

## boundary conditions in detail

- **Dirichlet** (specified value): set the boundary $\phi$ once, don't update during iteration. interior iterations naturally include the boundary in the averaging
- **Neumann** (specified flux): use a "ghost cell" outside the domain, set such that the finite-difference flux matches the prescribed value. update the boundary $\phi$ during iteration
- **mixed (Robin)**: linear combination of $\phi$ and $\partial \phi/\partial n$ at the boundary. requires a more careful boundary update formula

## convergence rate

for an $N \times N$ grid, the convergence rates:

| method | iterations to tolerance $\epsilon$ |
|---|---|
| Jacobi | $\sim N^2 \log(1/\epsilon)$ |
| Gauss-Seidel | $\sim N^2 \log(1/\epsilon)$ (constant smaller than Jacobi) |
| SOR | $\sim N \log(1/\epsilon)$ |
| conjugate gradient | $\sim N \log(1/\epsilon)$ |
| multigrid | $\sim \log(1/\epsilon)$ |

multigrid is *the* asymptotic king. it works by alternating between fine grids (good resolution, slow convergence on smooth modes) and coarse grids (fast convergence on smooth modes). cost per iteration is $O(N^2)$ (proportional to the grid size, plus the multigrid hierarchy), and convergence is independent of $N$.

for this course, Jacobi/Gauss-Seidel/SOR is the relevant level. `scipy.sparse.linalg` has CG and other modern solvers for production work.

## astrophysics applications

- **gravitational potential** $\nabla^2 \Phi = 4\pi G \rho$ in self-gravitating systems
- **electric/magnetic potentials** in MHD simulations
- **stationary diffusion** in protoplanetary disks
- **steady-state thermal balance** in stellar atmospheres
- **ionization equilibrium** with photoelectric heating

every elliptic problem in computational astrophysics reduces to this iterative-relaxation pattern.

## see also

- [Finite difference discretization](../../02_Zettel/Theory/Finite difference discretization.md)
- [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.md)
- [Overrelaxation](../../02_Zettel/Theory/Overrelaxation.md)
- [Initial value PDEs and FTCS](../../02_Zettel/Theory/Initial value PDEs and FTCS.md)
- [When to use implicit schemes](../../02_Zettel/Theory/When to use implicit schemes.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
