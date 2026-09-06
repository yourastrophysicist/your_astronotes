---
layout: default
title: "Matrix diagonalization $A = VDV^T$"
---

# Matrix diagonalization $A = VDV^T$

for a real symmetric matrix $A$, the spectral theorem promises a decomposition

$$A = V D V^T$$

with $D$ diagonal (eigenvalues on the diagonal) and $V$ orthogonal ($V^T V = I$, columns are eigenvectors). this factorization is the *geometric content* of "diagonalization": $A$ describes a stretching along certain orthogonal axes, and $V$ tells me what those axes are.

## the spectral theorem

every real symmetric matrix is **orthogonally diagonalizable**: there exist orthogonal $V$ and diagonal $D$ such that $A = V D V^T$. equivalently:

- the eigenvalues of $A$ are real
- the eigenvectors corresponding to distinct eigenvalues are orthogonal
- there is a complete orthonormal basis of eigenvectors

this is *not* true for general (non-symmetric) matrices: those need complex eigenvalues, or have defective eigenvector bases.

## reading the factorization

write $V = (\mathbf{v}_0\, \mathbf{v}_1\, \cdots\, \mathbf{v}_{N-1})$ and $D = \text{diag}(\lambda_0, \lambda_1, \ldots, \lambda_{N-1})$. then

$$A V = V D \quad\Leftrightarrow\quad A\mathbf{v}_i = \lambda_i \mathbf{v}_i \;\forall i$$

so $V$'s columns are the eigenvectors, $D$'s diagonal is the eigenvalues. multiplying out:

$$A = \sum_{i=0}^{N-1} \lambda_i \mathbf{v}_i \mathbf{v}_i^T$$

this is the **spectral decomposition**: $A$ is a sum of rank-1 projectors onto each eigenvector, weighted by the eigenvalues.

## geometric meaning

the action of $A$ on a vector $\mathbf{x}$:

1. **rotate** to the eigenbasis: $V^T \mathbf{x}$
2. **stretch** along each eigenaxis by $\lambda_i$: $D V^T \mathbf{x}$
3. **rotate back**: $V D V^T \mathbf{x} = A \mathbf{x}$

so $A$ is "rotate, stretch, unrotate." the eigenvectors are the **principal axes** of the linear transformation.

## functional calculus

once I have $A = VDV^T$, computing functions of $A$ is trivial:

$$f(A) = V f(D) V^T = V \,\text{diag}(f(\lambda_0), f(\lambda_1), \ldots)\, V^T$$

examples:
- $A^2 = V D^2 V^T$
- $A^{-1} = V D^{-1} V^T$ (if all $\lambda_i \neq 0$)
- $e^A = V e^D V^T$ (with $e^D = \text{diag}(e^{\lambda_i})$)
- $A^{1/2} = V D^{1/2} V^T$ (if all $\lambda_i \geq 0$)

so diagonalization is the natural way to compute matrix exponentials (used in solving linear ODE systems), matrix square roots (sampling correlated Gaussians), and arbitrary matrix functions.

## python

```python
eigenvalues, eigenvectors = np.linalg.eigh(A)            # for symmetric A
D = np.diag(eigenvalues)
V = eigenvectors

# verify
np.allclose(V @ D @ V.T, A)                              # True

# matrix function
def matrix_function(A, f):
    eigvals, V = np.linalg.eigh(A)
    return V @ np.diag(f(eigvals)) @ V.T

A_sqrt = matrix_function(A, np.sqrt)
A_exp  = matrix_function(A, np.exp)
A_inv  = matrix_function(A, lambda x: 1/x)
```

## what goes wrong for non-symmetric matrices

a general (non-symmetric) matrix has complex eigenvalues and may not have a full eigenvector basis. the diagonalization becomes

$$A = V D V^{-1}$$

with $V$ the (possibly complex) eigenvector matrix, no longer orthogonal, no transposed shortcut. for **defective** matrices (geometric multiplicity less than algebraic), $V$ is *not invertible* — diagonalization fails entirely. one needs the **Jordan form** instead, which is numerically ill-conditioned and rarely useful in practice.

for symmetric matrices, none of these troubles occur. **always check symmetry before diagonalizing.**

## practical numerical considerations

- `np.linalg.eigh(A)` for symmetric $A$ is faster, more accurate, and returns *real* eigenvalues. always use it when applicable
- `np.linalg.eig(A)` for general $A$ returns complex eigenvalues. slower
- for sparse $A$, `scipy.sparse.linalg.eigsh(A, k)` returns the top $k$ eigenvalues without the full diagonalization — vastly faster for huge matrices

## physics applications

- **principal component analysis** (PCA): eigendecompose the covariance matrix, project data onto top eigenvectors
- **normal modes**: eigenvalues of the stiffness/inertia matrix give natural frequencies, eigenvectors give mode shapes
- **stationary states in QM**: eigenvalues of the Hamiltonian are energy levels, eigenvectors are stationary wavefunctions
- **moment of inertia tensor**: eigenvalues are principal moments, eigenvectors are principal axes
- **stress tensor**: eigenvalues are principal stresses, eigenvectors give stress directions
- **CMB power spectrum to map**: realizations sampled by drawing $\mathbf{a}_{\ell m} \sim \mathcal{N}(0, \Sigma)$ where $\Sigma$ is diagonal in $\ell$ but represented in pixel space requires diagonalization

## see also

- [QR algorithm for eigenvalues](../../02_Zettel/Theory/QR algorithm for eigenvalues.md)
- [QR decomposition](../../02_Zettel/Theory/QR decomposition.md)
- [Gram-Schmidt orthogonalization](../../02_Zettel/Theory/Gram-Schmidt orthogonalization.md)
- [Power iteration](../../02_Zettel/Theory/Power iteration.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
