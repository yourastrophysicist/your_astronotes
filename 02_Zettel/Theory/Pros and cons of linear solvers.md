---
layout: default
title: "Pros and cons of linear solvers"
---

# Pros and cons of linear solvers

decision tree for solving $A\mathbf{x} = \mathbf{b}$. the choice depends on the structure of $A$, the number of right-hand sides, and what I need from the answer.

## the cheat sheet

| situation | algorithm | cost | why |
|---|---|---|---|
| dense $A$, single RHS | **Gauss elimination + partial pivoting** | $O(N^3)$ | simplest direct method |
| dense $A$, many RHS | **LU decomposition** | $O(N^3)$ once + $O(N^2)$ per RHS | factor once, reuse |
| symmetric positive-definite $A$ | **Cholesky** $A = LL^T$ | $\tfrac12 O(N^3)$ | half the work of LU, half the storage |
| symmetric $A$ (any sign) | **LDL$^T$** | $\tfrac12 O(N^3)$ | Cholesky-like for indefinite case |
| rectangular $A$ (least squares) | **QR decomposition** | $O(MN^2)$ | better-conditioned than normal equations |
| sparse $A$ | **sparse LU** or **iterative** | depends | structure matters |
| sparse, diagonally dominant or SPD | **Gauss-Seidel**, **CG** | $O(\text{nnz} \cdot k)$ | iterative, only nonzero ops |
| huge sparse SPD | **conjugate gradient** | $O(\text{nnz} \sqrt{\kappa})$ | the workhorse |
| nearly singular $A$ | **SVD** | $O(N^3)$ | rank-revealing, can solve over/underdetermined |

## detailed comparison

### Gauss elimination
- **pro**: simple, well-understood, $O(N^3)$
- **con**: needs partial pivoting to be numerically safe; redoing for many RHS is wasteful; not ideal for sparse $A$
- **use when**: dense matrix, single RHS, learning purposes

### LU decomposition
- **pro**: caches the elimination work, $O(N^2)$ per additional RHS, gives determinant for free
- **con**: still $O(N^3)$ to factor, needs $O(N^2)$ memory
- **use when**: I will solve with the same $A$ many times (different forcing terms in PDE solvers, repeated state estimation)

### Cholesky
- **pro**: fastest direct method for SPD $A$, half the work and storage of LU, no pivoting needed (always stable)
- **con**: only works for SPD, fails on indefinite or non-symmetric matrices
- **use when**: covariance matrices, normal equations of LSQ ($A^T A$ is always SPSD), elliptic PDE discretizations

### QR decomposition
- **pro**: numerically stable for least squares (avoids the squared condition number of normal equations); orthogonal $Q$ preserves errors; works for rectangular $A$
- **con**: more expensive than normal equations for square $A$; the $Q$ factor is dense even for sparse $A$
- **use when**: least squares with many parameters, ill-conditioned $A$, eigenvalue iteration

### SVD
- **pro**: most general factorization, works for any $A$ (rectangular, rank-deficient); reveals rank and condition number
- **con**: slowest direct method, $\sim 10\times$ more expensive than LU
- **use when**: rank-deficient problems, total least squares, principal component analysis, when I want to see the singular values for diagnostic purposes

### Gauss-Seidel iteration
- **pro**: $O(\text{nnz})$ per iteration, no memory beyond $A$ and $\mathbf{x}$
- **con**: needs diagonally dominant or SPD $A$; convergence is linear; needs a tolerance and stopping criterion
- **use when**: sparse $A$ from PDE discretization, iterative refinement of a direct solution

### Conjugate Gradient (CG)
- **pro**: $O(\text{nnz} \sqrt{\kappa})$ where $\kappa$ is the condition number, much faster than Gauss-Seidel for the same problem
- **con**: only for symmetric positive-definite $A$; preconditioning helps a lot but adds complexity
- **use when**: massive sparse SPD systems (cosmological PDE, FE meshes, lattice QCD)

### GMRES
- **pro**: works for general (non-symmetric) sparse $A$; converges in $\leq N$ steps
- **con**: each iteration adds a Krylov basis vector, so memory grows; usually need restarting
- **use when**: large sparse non-symmetric systems (advection-diffusion, hyperbolic PDE)

## condition number considerations

if $\kappa(A) = \|A\| \|A^{-1}\| \gg 1$, the matrix is **ill-conditioned**: small perturbations in $\mathbf{b}$ cause large changes in $\mathbf{x}$. iterative methods may stall; direct methods may give a "solution" that is off by many digits.

diagnostics:
- $\log_{10}\kappa(A)$ tells you roughly how many digits of precision are lost
- if $\kappa \sim 10^{12}$ and double precision is 16 digits, you have only 4 reliable digits

mitigations:
- **scaling**: divide each row of $A$ by its largest element ("equilibration")
- **regularization**: add $\lambda I$ to $A$ (Tikhonov / ridge regression)
- **SVD with truncation**: zero out singular values below a threshold

## the python decision tree

```python
import numpy as np
from scipy import linalg, sparse
from scipy.sparse import linalg as splinalg

# default for any problem you don't think about deeply:
x = np.linalg.solve(A, b)              # dense, single RHS

# multiple RHS with same A:
lu, piv = linalg.lu_factor(A)
x1 = linalg.lu_solve((lu, piv), b1)
x2 = linalg.lu_solve((lu, piv), b2)

# SPD A (e.g. covariance):
L = np.linalg.cholesky(A)
y = linalg.solve_triangular(L, b, lower=True)
x = linalg.solve_triangular(L.T, y, lower=False)

# rectangular A (least squares):
x, _, _, _ = np.linalg.lstsq(A, b, rcond=None)

# sparse A:
A_sparse = sparse.csr_matrix(A)
x = splinalg.spsolve(A_sparse, b)             # sparse direct
x, info = splinalg.cg(A_sparse, b, tol=1e-8)  # SPD iterative

# rank-revealing for nearly singular:
U, s, Vt = np.linalg.svd(A)
# truncate small s, then x = Vt.T @ ((U.T @ b) / s_truncated)
```

## see also

- [Gauss elimination](../../02_Zettel/Theory/Gauss elimination.html)
- [LU decomposition](../../02_Zettel/Theory/LU decomposition.html)
- [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.html)
- [QR decomposition](../../02_Zettel/Theory/QR decomposition.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
