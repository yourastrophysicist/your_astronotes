---
layout: default
title: "Computational complexity and speed"
---

# Computational complexity and speed

the second axis after accuracy. given a problem of size $N$, how does the runtime scale? this is **Big-O notation**: $O(f(N))$ means the runtime is bounded by some constant times $f(N)$ for large $N$. the constant matters in practice but the asymptotic behavior decides what is feasible.

## the complexity ladder

| complexity | example | feasible up to |
|---|---|---|
| $O(1)$ | array indexing, hash table lookup | any $N$ |
| $O(\log N)$ | bisection, binary search, balanced tree lookup | any $N$ |
| $O(N)$ | linear scan, array sum, vector dot product | $N \sim 10^{10}$ |
| $O(N \log N)$ | FFT, mergesort, heapsort, quicksort (avg) | $N \sim 10^9$ |
| $O(N^2)$ | naive matrix-vector, naive sort, all-pairs distance | $N \sim 10^4 \text{–} 10^5$ |
| $O(N^3)$ | Gauss elimination, naive matrix-matrix, naive eigenvalue | $N \sim 10^3 \text{–} 10^4$ |
| $O(2^N)$ | brute-force enumeration, NP-complete | $N \sim 30$ |

a modern laptop does $\sim 10^9$ floating-point operations per second on numpy code. so $O(N^3)$ for $N = 1000$ is $\sim 1$ second. for $N = 10^4$ it is $\sim 1000$ seconds, almost 20 minutes. for $N = 10^5$ it is two weeks.

## the central algorithms in this course and their complexity

**linear systems** ($A\mathbf{x} = \mathbf{b}$):
- Gauss elimination, LU: $O(N^3)$ once, $O(N^2)$ per RHS afterwards
- Gauss-Seidel iteration: $O(N^2)$ per iteration; converges in $\sim O(\log(1/\epsilon))$ iterations for nice matrices, so total $\sim O(N^2 \log(1/\epsilon))$. for sparse $A$ with $k$ nonzeros per row, only $O(kN)$ per iteration

**eigenvalues**:
- power iteration (dominant only): $O(N^2)$ per iteration
- QR algorithm: $O(N^3)$ overall

**root finding** (1D):
- bisection: $O(\log_2(1/\epsilon))$ iterations
- Newton-Raphson: $O(\log\log(1/\epsilon))$ iterations (quadratic convergence), but each iteration costs an $f$ and $f'$ evaluation

**integration**:
- trapezoidal/Simpson: $O(N)$ for $N$ points, error $O(N^{-p})$ — high-order rules win for smooth integrands
- Monte Carlo: $O(N)$, error $O(N^{-1/2})$ regardless of dimension

**ODEs**:
- one step: $O(D)$ where $D$ is the system dimension
- $T/h$ steps total: $O(TD/h)$
- N-body force computation: $O(N^2)$ naive, $O(N \log N)$ tree code, $O(N)$ FMM

**FFT**: $O(N \log N)$, the algorithm that made signal processing practical

**sorting**: $O(N \log N)$, see [Sorting algorithms overview](../../02_Zettel/Theory/Sorting algorithms overview.html)

## space complexity

memory matters too. an $N \times N$ dense matrix at double precision takes $8N^2$ bytes:
- $N = 10^3$: 8 MB, easy
- $N = 10^4$: 800 MB, tight
- $N = 10^5$: 80 GB, no
- $N = 10^6$: 8 TB, dream

so for large $N$ I am forced to use **sparse** representations (CSR, CSC formats in scipy.sparse), which store only nonzero entries.

## what makes python code fast

python's interpreter is slow ($\sim 10^7$ operations per second on plain loops). numpy is fast because it calls into compiled C/BLAS underneath ($\sim 10^9 \text{–} 10^{10}$ FLOPS on optimized matrix ops). the practical implication:

**slow**:
```python
result = 0
for i in range(N):
    for j in range(N):
        result += A[i, j] * x[j] * x[i]
```

**fast** (100×–1000× faster):
```python
result = x @ A @ x
```

this is the *single most important* python performance lesson and the reason [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.html) is its own zettel.

## profiling, when to optimize

**rule**: never optimize until I have measured. use `%timeit` in a notebook, or `cProfile` for whole scripts:

```python
import cProfile
cProfile.run('my_function()')
```

the result tells me which function consumes 80% of the time. **only optimize that one**. I have wasted hours micro-optimizing code paths that turned out to take 2% of the runtime.

## the "is this feasible?" mental check

before writing code, mentally compute: what is $N$, what is the algorithm complexity, what is the constant factor (~$10^9$ FLOPS), what is the resulting wall-clock time. if it is more than a few hours, redesign — pick a faster algorithm, exploit sparsity, parallelize, or reduce $N$ (cosmologically: use a sample of the catalog).

## see also

- [Vectorization and python speed](../../02_Zettel/Theory/Vectorization and python speed.html)
- [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.html)
- [Sorting algorithms overview](../../02_Zettel/Theory/Sorting algorithms overview.html)
- [Fast Fourier transform algorithm](../../02_Zettel/Theory/Fast Fourier transform algorithm.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
