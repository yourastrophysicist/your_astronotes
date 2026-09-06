---
layout: default
title: "QR algorithm for eigenvalues"
---

# QR algorithm for eigenvalues

an iterative method for computing all eigenvalues and eigenvectors of a symmetric matrix $A$ at once. it is one of the great algorithms of 20th-century numerical analysis, and the basis for almost every production eigenvalue routine.

## the idea in two sentences

repeatedly factor $A_k = Q_k R_k$ via [QR decomposition](../../02_Zettel/Theory/QR decomposition.html), then form $A_{k+1} = R_k Q_k$ (the same factors swapped). for symmetric $A$, the matrices $A_k$ converge to a *diagonal* matrix whose entries are the eigenvalues. the cumulative product $V = Q_0 Q_1 Q_2 \cdots$ converges to the eigenvector matrix.

## why it works

at each step,
$$A_{k+1} = R_k Q_k = Q_k^T(Q_k R_k) Q_k = Q_k^T A_k Q_k$$

so $A_{k+1}$ is a *similarity transform* of $A_k$ — it has the same eigenvalues. iterating, $A_k = (Q_0 Q_1 \cdots Q_{k-1})^T A (Q_0 Q_1 \cdots Q_{k-1})$. as $k \to \infty$, this similarity transform converges to a diagonal matrix because the QR step gradually concentrates "energy" on the diagonal (a precise statement requires the theory of subspace iteration).

set $V_k = Q_0 Q_1 \cdots Q_{k-1}$, an orthogonal matrix. in the limit:

$$\lim_{k \to \infty} V_k^T A V_k = D$$

with $D$ diagonal, eigenvalues on the diagonal, and the columns of $V = \lim V_k$ are the eigenvectors.

## the algorithm (textbook form)

1. initialize $V \leftarrow I$, $A_1 \leftarrow A$
2. factor $A_1 = Q R$ (one of the methods in [QR decomposition](../../02_Zettel/Theory/QR decomposition.html))
3. compute $A_1 \leftarrow R Q$ and $V \leftarrow V Q$
4. compute $D = V^T A V$
5. if $D$ is sufficiently diagonal (off-diagonal elements below tolerance $\epsilon$), output $V$ and $D$. otherwise go to step 2

the diagonal of $D$ has the eigenvalues; the columns of $V$ are the eigenvectors.

## python implementation

```python
def qr_algorithm(A, tol=1e-10, max_iter=1000):
    A = A.astype(float).copy()
    N = A.shape[0]
    V = np.eye(N)
    for k in range(max_iter):
        Q, R = np.linalg.qr(A)
        A = R @ Q              # similarity transform
        V = V @ Q              # accumulate eigenvectors
        # check off-diagonal magnitude
        off = np.sqrt(np.sum(A**2) - np.sum(np.diag(A)**2))
        if off < tol:
            break
    return np.diag(A), V       # eigenvalues, eigenvectors
```

## complexity

each QR factorization is $O(N^3)$, and convergence is linear (typically tens to hundreds of iterations). vanilla QR is therefore $O(N^4)$ or worse — too slow for production. the production version uses two acceleration tricks:

1. **Hessenberg reduction**: pre-process $A$ into upper Hessenberg form (zero below the first sub-diagonal) in $O(N^3)$ once. each subsequent QR step then costs only $O(N^2)$
2. **shifts**: subtract a near-eigenvalue $\sigma$ before the QR step ($A - \sigma I$), then add it back. accelerates convergence dramatically (cubic instead of linear)

with both tricks: $O(N^3)$ total. this is what `np.linalg.eigh` (for symmetric) and `np.linalg.eig` (general) call into.

## connection to power iteration

[Power iteration](../../02_Zettel/Theory/Power iteration.html) finds the *single* dominant eigenvalue and eigenvector. the QR algorithm is "power iteration on the whole eigenvector basis at once": each QR step is essentially performing one power iteration step on $N$ orthogonal subspaces simultaneously, with re-orthogonalization at every step.

## limitations

- **non-symmetric $A$**: still works in the sense that $A_k$ converges to upper triangular (Schur form) with eigenvalues on the diagonal. complex eigenvalues need $2 \times 2$ blocks
- **defective matrices** (geometric multiplicity < algebraic): the QR algorithm gives the eigenvalues but not a full set of eigenvectors. need the Jordan form, which is numerically ill-defined
- **degenerate eigenvalues**: convergence slows and the eigenvectors within the degenerate subspace are not unique

## physics applications

- **normal mode analysis** of mechanical systems: eigenvalues of the stiffness matrix
- **principal component analysis** in data analysis: eigenvalues of the covariance matrix
- **stationary states** in quantum mechanics: eigenvalues of the discretized Hamiltonian
- **stability analysis** of dynamical systems: eigenvalues of the Jacobian

## production code

never write the QR algorithm yourself in production. use:

```python
eigenvalues, eigenvectors = np.linalg.eigh(A)    # symmetric A, real eigenvalues
eigenvalues, eigenvectors = np.linalg.eig(A)     # general A, complex eigenvalues
```

`eigh` is faster and more accurate for symmetric matrices and should be preferred whenever possible.


## see also

- [QR decomposition](../../02_Zettel/Theory/QR decomposition.html)
- [Gram-Schmidt orthogonalization](../../02_Zettel/Theory/Gram-Schmidt orthogonalization.html)
- [Power iteration](../../02_Zettel/Theory/Power iteration.html)
- [Matrix diagonalization $A = VDV^T$](../../02_Zettel/Theory/Matrix diagonalization $A = VDV^T$.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
