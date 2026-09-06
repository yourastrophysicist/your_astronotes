---
layout: default
title: "Partial pivoting"
---

# Partial pivoting

the fix for the failure mode of plain [Gauss elimination](../../02_Zettel/Theory/Gauss elimination.html): zero or tiny pivots. partial pivoting swaps rows so that at each elimination step the **largest available pivot** is used.

## why it matters

at step $k$ of Gauss elimination, every row below uses the multiplier $m = A_{ik}/A_{kk}$. if $A_{kk}$ is tiny, $m$ is huge. multiplying a row by a huge number and subtracting amplifies any roundoff in that row. the answer becomes garbage.

extreme example without pivoting:
$$\begin{pmatrix} 10^{-20} & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$$

forward elimination uses $m = 1/10^{-20} = 10^{20}$. row 2 becomes $(0, 1 - 10^{20})$, RHS $2 - 10^{20}$. in floating point $1 - 10^{20} \approx -10^{20}$ exactly, the $1$ is lost, and back-substitution gives $y \approx 1$, $x \approx 0$. true answer: $y \approx 1$, $x \approx 1$. the $x$ answer is *wrong by 100%*.

with partial pivoting, swap rows first:
$$\begin{pmatrix} 1 & 1 \\ 10^{-20} & 1 \end{pmatrix}$$

then $m = 10^{-20}$, the multiplications stay tiny, and the answer is correct to machine precision.

## the algorithm

at the start of step $k$:

1. find $i^* \in \{k, k+1, \ldots, N\}$ with $|A_{i^*,k}| = \max_i |A_{ik}|$
2. swap rows $k$ and $i^*$ of both $A$ and $\mathbf{b}$
3. proceed with normal Gauss elimination

each swap multiplies the determinant by $-1$, so I keep a parity counter if I need the determinant at the end.

## python implementation

```python
def gauss_elim_pivot(A, b):
    A = A.astype(float).copy()
    b = b.astype(float).copy()
    N = len(b)
    
    for k in range(N - 1):
        # find pivot row
        i_star = k + np.argmax(np.abs(A[k:, k]))
        if i_star != k:
            Ak, i_star = Ai_star, k    # swap rows
            bk, i_star = bi_star, k
        
        if A[k, k] == 0:
            raise ValueError("matrix is singular")
        
        for i in range(k + 1, N):
            m = A[i, k] / A[k, k]
            A[i, k:] -= m * A[k, k:]
            b[i]    -= m * b[k]
    
    # back substitution
    x = np.zeros(N)
    for k in range(N - 1, -1, -1):
        x[k] = (b[k] - A[k, k+1:] @ x[k+1:]) / A[k, k]
    return x
```

## partial vs full pivoting

**partial**: swap rows only. at step $k$, search column $k$ from row $k$ down. cost: $O(N)$ per step, $O(N^2)$ total. **standard practice**.

**full**: swap rows *and* columns. find the largest absolute value in the entire remaining sub-matrix. cost: $O(N^2)$ per step, $O(N^3)$ total — same order as the elimination itself, doubles the constant. used only when the matrix is so ill-conditioned that partial pivoting is not enough.

## the cost

partial pivoting adds $O(N^2)$ work to a $O(N^3)$ algorithm — **negligible**. there is no good reason to skip it.

## what about iterative methods?

[Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.html) does not need pivoting in the same way — it iterates rather than eliminates. but Gauss-Seidel has a different requirement: the matrix must be diagonally dominant for convergence. so the algorithm and the diagnostic differ.

## scaling and equilibration

partial pivoting does the right thing if all rows have comparable scales. if one row is in meters and another in micrometers, partial pivoting may pick the wrong row. **fix**: divide each row by its largest entry first (row equilibration), then pivot. modern LAPACK routines do this automatically.

## determinant with partial pivoting

$$\det A = (-1)^{\text{swaps}} \prod_{k=1}^N A_{kk}$$

after elimination. the parity of the number of row swaps must be tracked.

## see also

- [Gauss elimination](../../02_Zettel/Theory/Gauss elimination.html) — the unpivoted algorithm
- [LU decomposition](../../02_Zettel/Theory/LU decomposition.html) — same elimination, cached as a factorization (with permutation matrix $P$)
- [Gauss-Seidel iteration](../../02_Zettel/Theory/Gauss-Seidel iteration.html)
- [Pros and cons of linear solvers](../../02_Zettel/Theory/Pros and cons of linear solvers.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
