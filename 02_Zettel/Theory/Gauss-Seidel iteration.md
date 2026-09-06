---
layout: default
title: "Gauss-Seidel iteration"
---

# Gauss-Seidel iteration

an *iterative* method for solving $A\mathbf{x} = \mathbf{b}$. instead of factoring $A$ exactly (Gauss elimination, LU), Gauss-Seidel starts from a guess and refines it. cheap per iteration, $O(N^2)$ instead of $O(N^3)$, and dominates for **large sparse** systems.

## the idea

write the linear system row by row:
$$A_{ii} x_i + \sum_{j \neq i} A_{ij} x_j = b_i$$

solve for $x_i$:
$$x_i = \frac{1}{A_{ii}}\left(b_i - \sum_{j \neq i} A_{ij} x_j\right)$$

if I knew the $x_j$ for $j \neq i$, I could compute $x_i$ exactly. I don't, but I have a guess. so I update each $x_i$ using the latest available values of the other components, sweep through $i = 1, 2, \ldots, N$, and repeat.

## the algorithm

initialize $\mathbf{x}^{(0)}$ (often $\mathbf{0}$ or $\mathbf{b}$). then for iteration $k = 0, 1, 2, \ldots$:

$$x_i^{(k+1)} = \frac{1}{A_{ii}}\left(b_i - \sum_{j < i} A_{ij} x_j^{(k+1)} - \sum_{j > i} A_{ij} x_j^{(k)}\right)$$

note the *latest* $x_j$ are used: components below $i$ use the new value already computed in this sweep. that is what distinguishes Gauss-Seidel from Jacobi (which uses only old values).

stop when $\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \epsilon$ for some tolerance.

## python implementation

```python
def gauss_seidel(A, b, tol=1e-10, max_iter=10000):
    N = len(b)
    x = np.zeros_like(b, dtype=float)
    for k in range(max_iter):
        x_old = x.copy()
        for i in range(N):
            s1 = A[i, :i] @ x[:i]            # already updated this sweep
            s2 = A[i, i+1:] @ x_old[i+1:]    # last sweep's values
            x[i] = (b[i] - s1 - s2) / A[i, i]
        if np.linalg.norm(x - x_old) < tol:
            return x, k + 1
    raise RuntimeError("Gauss-Seidel did not converge")
```

note I do *not* need to make a copy of $x$ during the sweep — Gauss-Seidel naturally uses the in-place updated values. the copy is only for the convergence check.

## convergence

Gauss-Seidel converges if and only if the spectral radius of the iteration matrix $G = -(D + L)^{-1}U$ is less than 1 (where $A = D + L + U$ is the diagonal-plus-strictly-lower-plus-strictly-upper splitting). practical sufficient conditions:

- **diagonally dominant** $A$: $|A_{ii}| > \sum_{j \neq i} |A_{ij}|$ for all $i$ — converges
- **symmetric positive-definite** $A$ — converges
- general $A$: may diverge

if the matrix is not diagonally dominant or SPD, Gauss-Seidel can diverge spectacularly. always check convergence empirically.

## convergence rate

linear: each iteration reduces the error by a factor of the spectral radius $\rho(G) \in (0, 1)$. so

$$\|\mathbf{x}^{(k)} - \mathbf{x}^*\| \sim \rho^k \|\mathbf{x}^{(0)} - \mathbf{x}^*\|$$

iterations needed to reach tolerance $\epsilon$: $k \sim \log(1/\epsilon)/\log(1/\rho)$. for $\rho = 0.9$ (slow): $k \sim 219$ iterations to reach $\epsilon = 10^{-10}$. for $\rho = 0.5$: $k \sim 33$.

if convergence is slow, try **successive over-relaxation (SOR)**: $x_i^{(k+1)} = (1-\omega) x_i^{(k)} + \omega \cdot \text{Gauss-Seidel update}$ with $\omega \in (1, 2)$. for the right $\omega$, SOR can be an order of magnitude faster than vanilla Gauss-Seidel.

## when Gauss-Seidel beats direct methods

- **sparse $A$**: each iteration costs $O(\text{nnz}(A))$ instead of $O(N^2)$. for a tridiagonal matrix that is $O(N)$
- **large $N$**: $O(N^3)$ direct factorization may be infeasible
- **good initial guess**: when solving a sequence of related linear systems (e.g. each timestep of an implicit PDE solver), start from the previous solution and Gauss-Seidel converges in a few iterations

## astrophysics applications

- **boundary-value PDEs** discretized on a grid: the resulting linear system is sparse (each grid point connects only to its neighbors) and Gauss-Seidel is the textbook method. see [Boundary value PDEs and iteration](../../02_Zettel/Theory/Boundary value PDEs and iteration.md)
- **iterative refinement** of any direct-solver result, to clean up roundoff
- **multigrid methods** use Gauss-Seidel as the "smoother" between coarse-grid corrections

## comparison table

| method | cost per solve | when |
|---|---|---|
| Gauss elimination | $O(N^3)$ | dense $A$, single RHS |
| LU decomposition | $O(N^3)$ once + $O(N^2)$ per RHS | dense $A$, many RHS |
| Gauss-Seidel | $O(\text{nnz} \cdot k)$ where $k = $ iterations | sparse $A$, large $N$ |
| Conjugate Gradient | $O(\text{nnz} \cdot \sqrt{\kappa})$ | sparse SPD $A$, even faster |

## see also

- [Gauss elimination](../../02_Zettel/Theory/Gauss elimination.md)
- [LU decomposition](../../02_Zettel/Theory/LU decomposition.md)
- [Pros and cons of linear solvers](../../02_Zettel/Theory/Pros and cons of linear solvers.md)
- [Boundary value PDEs and iteration](../../02_Zettel/Theory/Boundary value PDEs and iteration.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
