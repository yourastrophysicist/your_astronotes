---
layout: default
title: "LU decomposition"
---

# LU decomposition

a *factorization* of a square matrix into a lower-triangular $L$ times an upper-triangular $U$:

$$A = LU$$

with $L$ having unit diagonal ($L_{ii} = 1$) and $U$ having the pivots on its diagonal. for a singular or badly-conditioned matrix this also requires a permutation: $PA = LU$ with $P$ a permutation matrix.

## why bother

[Gauss elimination](../../02_Zettel/Theory/Gauss elimination.html) solves $A\mathbf{x} = \mathbf{b}$ in $O(N^3)$. but if I have *many* right-hand sides $\mathbf{b}_1, \mathbf{b}_2, \ldots, \mathbf{b}_M$ with the same $A$, redoing the elimination $M$ times is wasteful: the elimination work is identical each time, only the RHS changes.

LU caches the elimination work as $L$ and $U$. then for each RHS:

$$A\mathbf{x} = LU\mathbf{x} = \mathbf{b} \quad\Longrightarrow\quad L\mathbf{y} = \mathbf{b} \text{ then } U\mathbf{x} = \mathbf{y}$$

each of those triangular solves is $O(N^2)$. so:

| operation | cost |
|---|---|
| factor $A = LU$ | $O(N^3)$, **once** |
| solve for one RHS | $O(N^2)$ |
| solve for $M$ RHS | $O(N^3 + M N^2)$ |

versus $O(M N^3)$ for naive Gauss. for $M = N$ this is a factor-of-$N$ speedup.

## the math

$L$ stores the multipliers from Gauss elimination:

$$L_{ik} = m_{ik} = A_{ik}^{(k)}/A_{kk}^{(k)} \quad \text{for } i > k$$

$U$ is the upper-triangular matrix produced by the elimination. since elimination was *constructed* by row operations $\text{row}_i \leftarrow \text{row}_i - m_{ik}\text{row}_k$, the inverse operations reconstruct $A$:

$$A = LU$$

with $L$ unit lower triangular (its diagonal is 1, its below-diagonal entries are the multipliers).

## with partial pivoting

real LU includes row swaps: $PA = LU$ where $P$ is the permutation matrix recording which rows were swapped. the solve becomes:

$$L\mathbf{y} = P\mathbf{b}, \quad U\mathbf{x} = \mathbf{y}$$

scipy returns this with `scipy.linalg.lu(A)` → returns `P, L, U`. or use `scipy.linalg.lu_factor(A)` and `lu_solve` for the efficient combined version.

## python (production)

```python
from scipy.linalg import lu_factor, lu_solve

# factor once
lu, piv = lu_factor(A)

# solve for each RHS
x1 = lu_solve((lu, piv), b1)
x2 = lu_solve((lu, piv), b2)
# ...
```

## connection to determinant and inverse

**determinant**: $\det A = \det L \cdot \det U = 1 \cdot \prod U_{kk}$ (times the sign of the permutation). LU is the practical way `np.linalg.det` works.

**inverse**: solve $AX = I$ column by column with the same LU. each column is one $O(N^2)$ triangular solve, $N$ columns total, so the inverse costs $O(N^3 + N \cdot N^2) = O(N^3)$. **but I almost never need the explicit inverse** — if I want $\mathbf{x} = A^{-1}\mathbf{b}$, just solve $A\mathbf{x} = \mathbf{b}$ directly.

## variants

- **LDL$^T$ decomposition**: for symmetric $A$, $A = LDL^T$ with $D$ diagonal. half the storage, half the work
- **Cholesky decomposition**: for symmetric positive-definite $A$, $A = LL^T$. half the work again, and numerically the most stable factorization. the workhorse for covariance matrices in statistics
- **QR decomposition**: $A = QR$ with $Q$ orthogonal, $R$ upper triangular — see [QR decomposition](../../02_Zettel/Theory/QR decomposition.html). better for least-squares problems
- **SVD**: $A = U\Sigma V^T$, the most general factorization, expensive but works for rectangular and rank-deficient matrices

## when LU is the right tool

- **dense $A$**, fits in memory
- **multiple right-hand sides** with the same $A$
- **need the determinant**

## when something else is better

- **sparse $A$**: use sparse LU (`scipy.sparse.linalg.splu`) or iterative methods (Gauss-Seidel, conjugate gradient)
- **least squares** ($A$ rectangular): use QR or SVD
- **symmetric positive-definite**: use Cholesky

## see also

- [Gauss elimination](../../02_Zettel/Theory/Gauss elimination.html) — what LU caches
- [Partial pivoting](../../02_Zettel/Theory/Partial pivoting.html) — the $P$ in $PA = LU$
- [QR decomposition](../../02_Zettel/Theory/QR decomposition.html) — different factorization, different problem
- [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.html)
- [Pros and cons of linear solvers](../../02_Zettel/Theory/Pros and cons of linear solvers.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
