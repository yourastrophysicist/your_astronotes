---
layout: "default"
title: "Gram-Schmidt orthogonalization"
---
# Gram-Schmidt orthogonalization

a constructive procedure that turns a linearly independent set of vectors $\{\mathbf{a}_0, \mathbf{a}_1, \ldots, \mathbf{a}_{N-1}\}$ into an *orthonormal* set $\{\mathbf{q}_0, \mathbf{q}_1, \ldots, \mathbf{q}_{N-1}\}$ spanning the same subspace.

## the geometric picture

the first vector is just normalized:
$$\mathbf{q}_0 = \mathbf{a}_0 / \\lvert \mathbf{a}_0\\rvert$$

the second vector is what is left of $\mathbf{a}_1$ after removing its projection onto $\mathbf{q}_0$:
$$\mathbf{u}_1 = \mathbf{a}_1 - (\mathbf{q}_0 \cdot \mathbf{a}_1)\mathbf{q}_0$$
$$\mathbf{q}_1 = \mathbf{u}_1 / \\lvert \mathbf{u}_1\\rvert$$

the third vector is $\mathbf{a}_2$ minus its projections onto $\mathbf{q}_0$ and $\mathbf{q}_1$, normalized. and so on.

## the formula

$$\mathbf{u}_i = \mathbf{a}_i - \sum_{k=0}^{i-1}(\mathbf{q}_k \cdot \mathbf{a}_i)\mathbf{q}_k, \qquad \mathbf{q}_i = \frac{\mathbf{u}_i}{\\lvert \mathbf{u}_i\\rvert}$$

each new $\mathbf{u}_i$ is the orthogonal complement of $\mathbf{a}_i$ relative to the span of the previous $\mathbf{q}$'s, then we normalize.

if at any step $\mathbf{u}_i = 0$, the input vectors were linearly dependent — $\mathbf{a}_i$ already lay in the span of $\mathbf{a}_0, \ldots, \mathbf{a}_{i-1}$.

## python implementation

```python
def gram_schmidt(A):
    A = np.array(A, dtype=float)
    N = A.shape[1]
    Q = np.zeros_like(A)
    for i in range(N):
        u = A[:, i].copy()
        for k in range(i):
            u -= (Q[:, k] @ A[:, i]) * Q[:, k]
        norm = np.linalg.norm(u)
        if norm < 1e-12:
            raise ValueError("input vectors are linearly dependent")
        Q[:, i] = u / norm
    return Q
```

## classical vs modified Gram-Schmidt

the **classical** version (above) computes each $\mathbf{u}_i$ from the original $\mathbf{a}_i$ minus all projections at once. it is unstable in floating point: the later $\mathbf{q}_i$ become non-orthogonal because the projections were computed against an already-corrupted basis.

the **modified** version updates $\mathbf{u}_i$ one projection at a time:

```python
def modified_gram_schmidt(A):
    A = np.array(A, dtype=float)
    N = A.shape[1]
    Q = np.zeros_like(A)
    R = np.zeros((N, N))
    V = A.copy()
    for i in range(N):
        R[i, i] = np.linalg.norm(V[:, i])
        Q[:, i] = V[:, i] / R[i, i]
        for j in range(i + 1, N):
            R[i, j] = Q[:, i] @ V[:, j]
            V[:, j] -= R[i, j] * Q[:, i]
    return Q, R
```

mathematically the two are identical; numerically the modified version preserves orthogonality far better. if I am going to write Gram-Schmidt by hand, write the modified version.

## the matrix-level statement: $A = QR$

writing the recursion for $\mathbf{a}_i$ in terms of the $\mathbf{q}_k$:

$$\mathbf{a}_i = \\lvert \mathbf{u}_i\\rvert\mathbf{q}_i + \sum_{k=0}^{i-1}(\mathbf{q}_k \cdot \mathbf{a}_i)\mathbf{q}_k$$

stack as columns:

$$A = QR$$

with $Q$ orthogonal ($Q^T Q = I$) and $R$ upper triangular with diagonal $\\lvert \mathbf{u}_i\\rvert$ and off-diagonal $(\mathbf{q}_k \cdot \mathbf{a}_i)$. this is [QR decomposition](QR%20decomposition.html) — Gram-Schmidt is *one* way to compute it.

## why it matters in physics

- **eigenvector matrices**: for a symmetric matrix, the eigenvectors are orthogonal but not yet orthonormal. Gram-Schmidt (or just normalization, since they are already orthogonal) finishes the job
- **basis functions**: building an orthonormal basis on a function space (Legendre polynomials, Hermite polynomials, spherical harmonics) is Gram-Schmidt applied to a sequence of monomials with respect to a chosen inner product
- **wavefunction orthonormalization**: in quantum mechanics, the eigenstates of a Hamiltonian are orthogonal *if* the eigenvalues are distinct; if degenerate, Gram-Schmidt within the degenerate subspace
- **the QR eigenvalue algorithm**: iterate QR factorizations to converge to the eigenvalues

## complexity

$O(N^3)$ for an $N \times N$ matrix (the dominant cost is the dot products and rescalings).

## see also

- [QR decomposition](QR%20decomposition.html)
- [QR algorithm for eigenvalues](QR%20algorithm%20for%20eigenvalues.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Matrix%20diagonalization%20%24A%20%3D%20VDV%5ET%24.html" class="backlink-item">Matrix diagonalization $A = VDV^T$</a></li>
    <li class="backlink-item-wrap"><a href="QR%20algorithm%20for%20eigenvalues.html" class="backlink-item">QR algorithm for eigenvalues</a></li>
    <li class="backlink-item-wrap"><a href="QR%20decomposition.html" class="backlink-item">QR decomposition</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>

