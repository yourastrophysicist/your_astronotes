---
layout: default
title: "QR decomposition"
---

# QR decomposition

every matrix $A$ (square or rectangular) factors as

$$A = QR$$

with $Q$ **orthogonal** ($Q^T Q = I$) and $R$ upper triangular. the columns of $Q$ are an orthonormal basis for the column space of $A$. for symmetric matrices this factorization is the foundation of the [QR algorithm for eigenvalues](../../02_Zettel/Theory/QR algorithm for eigenvalues.md); for rectangular matrices it is the cleanest way to do least squares.

## why orthogonal matrices are special

an orthogonal matrix $Q$ preserves length: $\|Q\mathbf{x}\| = \|\mathbf{x}\|$. it also preserves angles. geometrically, $Q$ is a rotation (or rotation + reflection). this is what makes $Q$ numerically benign: multiplying by $Q$ neither blows up nor shrinks vectors, so roundoff errors stay bounded.

## construction via Gram-Schmidt

[Gram-Schmidt orthogonalization](../../02_Zettel/Theory/Gram-Schmidt orthogonalization.md) turns the columns $\mathbf{a}_0, \mathbf{a}_1, \ldots, \mathbf{a}_{N-1}$ of $A$ into an orthonormal set $\mathbf{q}_0, \mathbf{q}_1, \ldots, \mathbf{q}_{N-1}$:

$$\mathbf{u}_i = \mathbf{a}_i - \sum_{k=0}^{i-1} (\mathbf{q}_k \cdot \mathbf{a}_i) \mathbf{q}_k, \qquad \mathbf{q}_i = \mathbf{u}_i / \|\mathbf{u}_i\|$$

writing $\mathbf{a}_i$ in the new basis:

$$\mathbf{a}_i = \|\mathbf{u}_i\| \mathbf{q}_i + \sum_{k=0}^{i-1}(\mathbf{q}_k \cdot \mathbf{a}_i)\mathbf{q}_k$$

so

$$A = (\mathbf{a}_0\, \mathbf{a}_1\, \cdots\, \mathbf{a}_{N-1}) = (\mathbf{q}_0\, \mathbf{q}_1\, \cdots\, \mathbf{q}_{N-1}) \begin{pmatrix} \|\mathbf{u}_0\| & \mathbf{q}_0\cdot\mathbf{a}_1 & \mathbf{q}_0\cdot\mathbf{a}_2 & \cdots \\ 0 & \|\mathbf{u}_1\| & \mathbf{q}_1\cdot\mathbf{a}_2 & \cdots \\ 0 & 0 & \|\mathbf{u}_2\| & \cdots \\ \vdots & & & \ddots \end{pmatrix} = QR$$

with $R$ explicitly upper triangular. the diagonal of $R$ is the lengths $\|\mathbf{u}_i\|$ before normalization; the off-diagonal entries are projections.

## python (production)

```python
import numpy as np
Q, R = np.linalg.qr(A)
```

`np.linalg.qr` uses the **Householder reflections** algorithm internally, which is more numerically stable than Gram-Schmidt. for a hand-written version (and for understanding), Gram-Schmidt is fine.

## the three flavors

- **classical Gram-Schmidt**: as above. simple, but unstable in floating point — the orthogonality of the later $\mathbf{q}_i$ degrades because the $\mathbf{u}_i$ have lost orthogonality from accumulated roundoff
- **modified Gram-Schmidt**: subtract projections one at a time, updating $\mathbf{u}_i$ as I go. mathematically equivalent, much more stable
- **Householder reflections**: build $Q$ as a product of reflection matrices that zero out one column at a time. the gold standard, what LAPACK uses

## complexity

- $O(N^3)$ for an $N \times N$ matrix
- $O(MN^2)$ for an $M \times N$ matrix with $M \geq N$ (the rectangular case for least squares)

## applications

### 1. least squares (the canonical use)

solve $A\mathbf{x} \approx \mathbf{b}$ with $A$ tall ($M > N$). the normal equations $A^T A \mathbf{x} = A^T \mathbf{b}$ work but are numerically ugly (they square the condition number). QR fixes this:

$$A = QR \quad\Rightarrow\quad QR\mathbf{x} = \mathbf{b} \quad\Rightarrow\quad R\mathbf{x} = Q^T \mathbf{b}$$

$R$ is upper triangular, so back-substitution. the conditioning of the problem is preserved through $Q^T$.

this is what `np.linalg.lstsq` does under the hood.

### 2. eigenvalue computation (the QR algorithm)

iterate: $A_0 = A$, then $A_k = Q_k R_k$, $A_{k+1} = R_k Q_k$. for symmetric $A$, $A_k$ converges to a diagonal matrix whose entries are the eigenvalues, and the cumulative product of the $Q_k$ converges to the eigenvector matrix. this is [QR algorithm for eigenvalues](../../02_Zettel/Theory/QR algorithm for eigenvalues.md).

### 3. orthonormal basis for a subspace

given a set of vectors that span a subspace $V$, the columns of $Q$ are an orthonormal basis. this is just Gram-Schmidt under a different name.

## complementary perspective

QR is the matrix-level statement of Gram-Schmidt. seeing both side by side:

| Gram-Schmidt | QR |
|---|---|
| takes $\{\mathbf{a}_i\}$, returns $\{\mathbf{q}_i\}$ orthonormal | takes $A$, returns $Q$ with orthonormal columns |
| keeps track of projections $\mathbf{q}_k \cdot \mathbf{a}_i$ | stores them in $R$ |
| stops at $i = N - 1$ | $R$ is $N \times N$ upper triangular |

## see also

- [Gram-Schmidt orthogonalization](../../02_Zettel/Theory/Gram-Schmidt orthogonalization.md)
- [QR algorithm for eigenvalues](../../02_Zettel/Theory/QR algorithm for eigenvalues.md)
- [Power iteration](../../02_Zettel/Theory/Power iteration.md)
- [Linear least squares](../../02_Zettel/Theory/Linear least squares.md) — uses QR internally
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
