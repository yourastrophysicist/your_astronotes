---
layout: default
title: "Matrix inverse via linear systems"
---

# Matrix inverse via linear systems

the right way to compute $A^{-1}$ when I actually need it: solve $AX = I$ column by column, never use cofactor expansion or any direct inversion formula. and most of the time, **I don't need $A^{-1}$ at all** — I need $A^{-1}\mathbf{b}$, which is just `np.linalg.solve(A, b)`.

## why never invert directly

three problems with computing the inverse explicitly and then multiplying:

1. **slower**: solving $A\mathbf{x} = \mathbf{b}$ once is $O(N^3)$. computing $A^{-1}$ is also $O(N^3)$ but with a worse constant ($\sim 3\times$). then multiplying $A^{-1}\mathbf{b}$ is $O(N^2)$. total: $\sim 4 N^3/3$ vs $N^3/3$ for direct solve
2. **less accurate**: each operation accumulates roundoff. inverting then multiplying is two roundoff-laden operations; a direct solve is one
3. **wasteful when $A$ is sparse**: the inverse of a sparse matrix is generally **dense**, even if $A$ is mostly zeros. for huge sparse systems (PDE discretizations), forming $A^{-1}$ is impossible

so: never write `inv(A) @ b`. write `np.linalg.solve(A, b)`.

## when I actually need the inverse

a few legitimate use cases:

- **the inverse is the answer**: e.g. computing the parameter covariance $(A^T A)^{-1}$ in least squares to report uncertainties
- **many right-hand sides** that aren't known in advance: precompute $A^{-1}$, then apply it $M$ times. but **LU is better**: factor once, solve $M$ times in $O(M N^2)$
- **the inverse is intrinsic to the formula**: in some pedagogical or theoretical contexts

## the algorithm: solve $AX = I$ column by column

let $X = (\mathbf{x}_0, \mathbf{x}_1, \ldots, \mathbf{x}_{N-1})$ and $I = (\mathbf{e}_0, \mathbf{e}_1, \ldots, \mathbf{e}_{N-1})$ where $\mathbf{e}_i$ is the $i$-th standard basis vector. then $AX = I$ means $A\mathbf{x}_i = \mathbf{e}_i$ for each $i$. solve each:

```python
def matrix_inverse_via_solve(A):
    N = A.shape[0]
    I = np.eye(N)
    return np.linalg.solve(A, I)        # solves A X = I, returns X
```

internally this does one LU factorization of $A$ and $N$ triangular solves, $O(N^3)$.

## adjugate / cofactor formula (do NOT do this)

textbook formula:
$$A^{-1} = \frac{1}{\det A} \text{adj}(A)$$

where $\text{adj}(A)_{ij} = (-1)^{i+j} M_{ji}$ and $M_{ji}$ is a minor determinant. **the cost is $O(N!)$**. for $N = 20$ this is $\sim 10^{18}$ operations, infeasible. only useful for $2 \times 2$ and $3 \times 3$ where you can do it by hand.

## numpy production

```python
A_inv = np.linalg.inv(A)             # if you really need the inverse
x = np.linalg.solve(A, b)            # if you just need A^{-1} b — preferred
```

`np.linalg.inv` does exactly the column-by-column LU procedure under the hood.

## the regularization trick

if $A$ is ill-conditioned, the inverse is *enormous* (large entries) and $A^{-1}\mathbf{b}$ amplifies any noise in $\mathbf{b}$. fix: solve

$$(A^T A + \lambda I) \mathbf{x} = A^T \mathbf{b}$$

with small $\lambda > 0$ (Tikhonov regularization). the regularized matrix is well-conditioned. equivalently, in SVD: zero out singular values below $\lambda$.

## the pseudoinverse

for rectangular $A$ (or singular square $A$), the **Moore-Penrose pseudoinverse** $A^+$ generalizes the inverse:

```python
A_pinv = np.linalg.pinv(A)
x = A_pinv @ b
```

for full-rank tall $A$ ($M > N$), $A^+ = (A^T A)^{-1} A^T$, and $A^+ \mathbf{b}$ gives the least-squares solution. for full-rank wide $A$, $A^+ = A^T (A A^T)^{-1}$, the minimum-norm solution. for singular $A$, computed via SVD with truncation.

## astrophysics use cases

- **fisher matrix inversion** for forecasting parameter constraints from a dataset
- **propagating error covariance** through a linear transformation: $\Sigma_{\rm new} = J \Sigma J^T$ where $J$ is the Jacobian of the transformation — needs the covariance, not its inverse, but the analogous operation does need inversion
- **deconvolution of an image with a known PSF**: ill-conditioned, regularization essential
- **inverting a rotation matrix**: trivial since $R^{-1} = R^T$, no general algorithm needed

## see also

- [Gauss elimination](../../02_Zettel/Theory/Gauss elimination.md)
- [LU decomposition](../../02_Zettel/Theory/LU decomposition.md)
- [Pros and cons of linear solvers](../../02_Zettel/Theory/Pros and cons of linear solvers.md)
- [Linear least squares](../../02_Zettel/Theory/Linear least squares.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
