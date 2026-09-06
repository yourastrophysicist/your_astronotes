---
layout: default
title: "Overrelaxation"
---

# Overrelaxation

an acceleration trick for [relaxation](../../02_Zettel/Theory/Relaxation method.md) iterations and for [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.md). instead of accepting the relaxation update $g(x_n)$ as the next iterate, **overshoot** by a factor $\omega > 1$:

$$x_{n+1} = x_n + \omega (g(x_n) - x_n)$$

equivalently
$$x_{n+1} = (1 - \omega) x_n + \omega g(x_n)$$

if the iteration converges with rate $|g'(x^*)|$ slowly approaching 1, overrelaxation can accelerate it dramatically by canceling the leading error mode.

## the formula

for vanilla relaxation the error obeys $e_{n+1} \approx g'(x^*) e_n$. for overrelaxation:

$$e_{n+1} \approx [1 + \omega(g'(x^*) - 1)] e_n$$

this multiplier vanishes when

$$\omega^* = \frac{1}{1 - g'(x^*)}$$

at this *optimal* $\omega^*$, the error contracts in one step (well, in the linearized regime). in practice $g'$ is unknown, but a few iterations let me estimate it from successive errors:

$$|g'(x^*)| \approx \frac{|x_{n+1} - x_n|}{|x_n - x_{n-1}|}$$

then plug in.

## $\omega$ regimes

- $\omega = 1$: standard relaxation
- $1 < \omega < 2$: **overrelaxation** — accelerates monotone convergence
- $\omega > 2$: usually diverges
- $0 < \omega < 1$: **underrelaxation** — slows down oscillating iterations to make them converge

## successive overrelaxation (SOR) for Gauss-Seidel

applied to the linear system $A\mathbf{x} = \mathbf{b}$, each Gauss-Seidel update for $x_i$ is

$$x_i^{\rm GS} = \frac{1}{A_{ii}}\left(b_i - \sum_{j < i} A_{ij} x_j^{(k+1)} - \sum_{j > i} A_{ij} x_j^{(k)}\right)$$

SOR replaces it with

$$x_i^{(k+1)} = (1 - \omega) x_i^{(k)} + \omega \, x_i^{\rm GS}$$

for the optimal $\omega$ on a 2D Laplacian discretization, SOR converges in $O(N)$ iterations vs $O(N^2)$ for plain Gauss-Seidel — an order-of-magnitude speedup at zero extra cost per iteration.

## the optimal $\omega$ for the discrete Laplacian

for a $5$-point Laplacian on an $N \times N$ grid (the model Poisson problem), a classical result:

$$\omega_{\rm opt} = \frac{2}{1 + \sin(\pi/N)}$$

approximately $\omega_{\rm opt} \to 2$ as $N \to \infty$. so for fine grids, the optimal $\omega$ is just under 2; the convergence rate is $1 - O(1/N)$ instead of $1 - O(1/N^2)$.

## python implementation

```python
def sor(A, b, omega=1.5, tol=1e-10, max_iter=10000):
    x = np.zeros_like(b, dtype=float)
    N = len(b)
    for k in range(max_iter):
        x_old = x.copy()
        for i in range(N):
            sigma = A[i, :i] @ x[:i] + A[i, i+1:] @ x_old[i+1:]
            x_gs = (b[i] - sigma) / A[i, i]
            x[i] = (1 - omega) * x_old[i] + omega * x_gs
        if np.linalg.norm(x - x_old) < tol:
            return x, k + 1
    raise RuntimeError("SOR did not converge")
```

## how to find $\omega$ in practice

three options:

1. **try a sweep**: run SOR for $\omega = 1.0, 1.2, 1.4, 1.6, 1.8$ and pick the fastest. cheap if I am going to solve many similar systems
2. **use the analytic formula** if the discretization is one of the standard cases (5-point Laplacian on a uniform grid)
3. **adaptive estimation**: monitor consecutive error ratios, update $\omega$ on the fly. trickier to get right, often not worth it

if the system is small, just use a direct solver (`np.linalg.solve`) and skip the entire SOR question.

## limitations

- **needs SPD or diagonally dominant $A$** (same as Gauss-Seidel) to converge
- **$\omega$ depends on the spectral radius**: hard to know in advance, easy to get wrong
- **modern preference**: conjugate gradient with preconditioning beats SOR on modern hardware. SOR remains pedagogically central but rarely the production choice

## astrophysics applications

- **historical**: SOR was the standard PDE solver in the 1960s-1980s for stellar structure relaxation, magneto-hydrostatic equilibria, etc.
- **multigrid** uses Gauss-Seidel or SOR as a "smoother" between coarse-grid corrections; the synergy gives $O(N)$ overall
- **solving the Poisson equation** for self-gravitating systems on a grid

## see also

- [Relaxation method](../../02_Zettel/Theory/Relaxation method.md)
- [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.md)
- [Boundary value PDEs and iteration](../../02_Zettel/Theory/Boundary value PDEs and iteration.md)
- [Pros and cons of linear solvers](../../02_Zettel/Theory/Pros and cons of linear solvers.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
