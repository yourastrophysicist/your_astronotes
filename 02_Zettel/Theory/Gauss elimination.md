---
layout: default
title: "Gauss elimination"
---

# Gauss elimination

the textbook algorithm for solving $A\mathbf{x} = \mathbf{b}$ where $A$ is a square $N \times N$ matrix and $\mathbf{b}$ is a known vector. the idea: row-reduce the augmented matrix $[A | \mathbf{b}]$ to upper triangular, then back-substitute.

## the math

the system
$$A_{11} x_1 + A_{12} x_2 + \cdots + A_{1n} x_n = b_1$$
$$A_{21} x_1 + A_{22} x_2 + \cdots + A_{2n} x_n = b_2$$
$$\vdots$$

written as a matrix equation $A\mathbf{x} = \mathbf{b}$. if $\det A \neq 0$ there is a unique solution. if $\det A = 0$ the matrix is *singular* and there is either no solution or infinitely many (Gauss elimination will detect this by hitting a zero pivot).

## the algorithm (forward elimination)

at step $k$ (for $k = 1, 2, \ldots, N-1$), use row $k$ to eliminate $A_{ik}$ for all $i > k$:

$$\text{for } i = k+1, \ldots, N: \quad m = A_{ik}/A_{kk}, \quad \text{row}_i \leftarrow \text{row}_i - m \cdot \text{row}_k$$

after $N-1$ such steps the matrix is upper triangular. the entry $A_{kk}$ at step $k$ is the **pivot**. if it is zero, the algorithm fails — fix this with [Partial pivoting](../../02_Zettel/Theory/Partial pivoting.md).

## the algorithm (back substitution)

once upper triangular, solve from the bottom up:

$$x_N = b_N / A_{NN}$$
$$x_{N-1} = (b_{N-1} - A_{N-1,N} x_N) / A_{N-1,N-1}$$
$$\vdots$$
$$x_k = \left(b_k - \sum_{j=k+1}^{N} A_{kj} x_j\right) / A_{kk}$$

## python implementation (educational, not for production)

```python
import numpy as np

def gauss_elim(A, b):
    A = A.astype(float).copy()
    b = b.astype(float).copy()
    N = len(b)
    
    # forward elimination
    for k in range(N - 1):
        for i in range(k + 1, N):
            m = A[i, k] / A[k, k]            # pivot ratio
            A[i, k:] -= m * A[k, k:]
            b[i]    -= m * b[k]
    
    # back substitution
    x = np.zeros(N)
    for k in range(N - 1, -1, -1):
        x[k] = (b[k] - A[k, k+1:] @ x[k+1:]) / A[k, k]
    
    return x
```

worth implementing once from scratch to understand every line. for production, use `np.linalg.solve(A, b)` — it does Gauss elimination with partial pivoting under the hood.

## complexity

- **forward elimination**: $\sum_{k=1}^{N-1} (N-k)(N-k+1) \approx N^3/3$ flops
- **back substitution**: $\approx N^2/2$ flops
- **total**: $O(N^3)$, dominated by elimination

memory: $O(N^2)$ for the matrix.

## when does it fail

- **zero pivot**: $A_{kk} = 0$ at step $k$. the formula divides by zero. fix: [Partial pivoting](../../02_Zettel/Theory/Partial pivoting.md) swaps row $k$ with the row below that has the largest absolute value in column $k$
- **tiny pivot**: $A_{kk}$ is small but nonzero. the formula divides by a small number, amplifying any roundoff in $A_{kk}$. partial pivoting also fixes this
- **ill-conditioned $A$**: even with pivoting, if $A$ is "nearly singular" (condition number $\gg 1$) the answer is sensitive to roundoff. this is a property of the problem, not the algorithm

## why one would ever do this manually

the algorithm is the same one used to compute determinants and check rank by hand. recognising "row reduce" as the same operation in three different contexts (linear system, determinant, rank) is the linear-algebra payoff.

## determinant as a byproduct

after forward elimination, $A$ is upper triangular and:

$$\det A = \prod_{k=1}^N A_{kk}$$

(times $(-1)^{\text{number of row swaps}}$ if pivoting). this is in fact how `np.linalg.det` computes determinants for general $N$ — the cofactor expansion is $O(N!)$ and infeasible.

## what to do with multiple right-hand sides

if I need to solve $A\mathbf{x}_i = \mathbf{b}_i$ for many $\mathbf{b}_i$, **do not redo the elimination each time**. factor $A = LU$ once (also $O(N^3)$) and reuse: each new RHS costs only $O(N^2)$. see [LU decomposition](../../02_Zettel/Theory/LU decomposition.md).

## see also

- [Partial pivoting](../../02_Zettel/Theory/Partial pivoting.md) — the fix for zero/tiny pivots
- [LU decomposition](../../02_Zettel/Theory/LU decomposition.md) — factor once, reuse for many RHS
- [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.md) — iterative alternative
- [Pros and cons of linear solvers](../../02_Zettel/Theory/Pros and cons of linear solvers.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
