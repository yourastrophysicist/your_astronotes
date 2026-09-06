---
layout: default
title: "Power iteration"
---

# Power iteration

the simplest eigenvalue algorithm. given a square matrix $A$, find the dominant eigenvalue $\lambda_1$ (largest in absolute value) and corresponding eigenvector $\mathbf{v}_1$ by repeated matrix-vector products.

## the algorithm

start from a random vector $\mathbf{v}^{(0)}$. iterate:

$$\mathbf{v}^{(k+1)} = \frac{A \mathbf{v}^{(k)}}{\|A \mathbf{v}^{(k)}\|}$$

the normalization keeps the vector from blowing up or shrinking to zero. as $k \to \infty$, $\mathbf{v}^{(k)} \to \mathbf{v}_1$ (the dominant eigenvector). recover the eigenvalue:

$$\lambda_1 = \mathbf{v}^{(k)T} A \mathbf{v}^{(k)} \quad \text{(Rayleigh quotient)}$$

## why it converges

expand $\mathbf{v}^{(0)}$ in the eigenbasis: $\mathbf{v}^{(0)} = \sum_i c_i \mathbf{v}_i$ with eigenvalues $\lambda_1, \lambda_2, \ldots$ ordered $|\lambda_1| > |\lambda_2| \geq \cdots$. then

$$A^k \mathbf{v}^{(0)} = \sum_i c_i \lambda_i^k \mathbf{v}_i = \lambda_1^k \left(c_1 \mathbf{v}_1 + \sum_{i \geq 2} c_i (\lambda_i/\lambda_1)^k \mathbf{v}_i\right)$$

since $|\lambda_i/\lambda_1| < 1$ for $i \geq 2$, the non-dominant terms decay geometrically. after $k$ steps:

$$A^k \mathbf{v}^{(0)} \to \lambda_1^k c_1 \mathbf{v}_1$$

normalizing kills the $\lambda_1^k$ factor and leaves $\mathbf{v}_1$ (up to sign).

## convergence rate

linear with rate $|\lambda_2/\lambda_1|$:

$$\|\mathbf{v}^{(k)} - \mathbf{v}_1\| \sim |\lambda_2/\lambda_1|^k$$

if $|\lambda_2| \approx |\lambda_1|$, convergence is slow. if $|\lambda_2| \ll |\lambda_1|$ (well-separated dominant eigenvalue), convergence is fast.

## python

```python
def power_iteration(A, max_iter=1000, tol=1e-10):
    N = A.shape[0]
    v = np.random.randn(N)
    v /= np.linalg.norm(v)
    for k in range(max_iter):
        Av = A @ v
        v_new = Av / np.linalg.norm(Av)
        if np.linalg.norm(v_new - v) < tol:
            break
        v = v_new
    eigenvalue = v @ A @ v
    return eigenvalue, v
```

## variants

### inverse power iteration

apply power iteration to $A^{-1}$ instead of $A$. the eigenvalues of $A^{-1}$ are $1/\lambda_i$, so the *largest* eigenvalue of $A^{-1}$ corresponds to the *smallest* eigenvalue of $A$. used to find the smallest eigenvalue.

at each step solve $A\mathbf{v}_{k+1} = \mathbf{v}_k$ instead of computing $A^{-1}$ explicitly. one LU factorization up front, then $O(N^2)$ per step.

### shifted inverse iteration

apply inverse power iteration to $A - \sigma I$ for some shift $\sigma$. the eigenvalues are $1/(\lambda_i - \sigma)$, so the *largest* corresponds to the eigenvalue $\lambda_i$ *closest to $\sigma$*. by varying $\sigma$, can target any specific eigenvalue.

this is the basis of the **Rayleigh quotient iteration**: at each step, set $\sigma$ to the current Rayleigh quotient. converges *cubically* near a simple eigenvalue — three correct digits become nine, become twenty-seven, become beyond machine precision in three steps. one of the most beautiful algorithms in numerical analysis.

### subspace iteration

run power iteration on $K > 1$ orthogonal vectors simultaneously, with re-orthogonalization (via Gram-Schmidt or QR) between steps. converges to the $K$ dominant eigenvectors at once. this is essentially the [QR algorithm for eigenvalues](../../02_Zettel/Theory/QR algorithm for eigenvalues.html) in disguise.

## limitations

- **only finds the dominant eigenvalue**. for the full spectrum, use QR algorithm
- **fails if $|\lambda_2| = |\lambda_1|$** (e.g. eigenvalues $\pm \lambda$ for a symmetric matrix with both signs): the iteration cycles, doesn't converge
- **slow if $|\lambda_2/\lambda_1|$ is close to 1**

## astrophysics applications

- **Markov chain stationary distribution**: the dominant eigenvector of the transition matrix gives the equilibrium probabilities
- **PageRank**-style algorithms for citation networks
- **stability analysis**: dominant eigenvalue of the Jacobian determines whether a fixed point is stable
- **principal component analysis**: each PC is the dominant eigenvector of the residual covariance matrix; find them sequentially via power iteration with deflation
- **largest mode in linear stability**: of self-gravitating disks, plasmas, etc.

## production code

```python
# largest eigenvalue:
eigenvalues, eigenvectors = np.linalg.eig(A)
i_max = np.argmax(np.abs(eigenvalues))
print(eigenvalues[i_max], eigenvectors[:, i_max])

# few largest of a sparse matrix:
from scipy.sparse.linalg import eigs
vals, vecs = eigs(A_sparse, k=5, which='LM')        # largest magnitude
```

`scipy.sparse.linalg.eigs` uses Arnoldi iteration (a sophisticated cousin of power iteration) and handles sparse matrices efficiently — often the right tool when only a few eigenvalues are needed.

## see also

- [QR algorithm for eigenvalues](../../02_Zettel/Theory/QR algorithm for eigenvalues.html)
- [QR decomposition](../../02_Zettel/Theory/QR decomposition.html)
- [Matrix diagonalization $A = VDV^T$](../../02_Zettel/Theory/Matrix diagonalization $A = VDV^T$.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
