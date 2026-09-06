---
layout: default
title: "Vectorization and python speed"
---

# Vectorization and python speed

the rule that explains every "why is my code so slow" complaint in scientific python: the bottleneck is the python interpreter, not the algorithm. vectorizing — replacing python loops with numpy array operations — is usually a 10× to 1000× speedup for free.

## the interpreter tax

each line of pure python costs ~$100$ ns of overhead just for the interpreter to figure out what to do. for simple operations, that overhead *dwarfs* the actual computation. a C floating-point add takes ~1 ns; the python interpretation around it takes 100×.

so a python loop running $10^6$ iterations of an arithmetic operation takes ~100 ms of interpreter overhead alone, even before the math.

## what vectorization does

it pushes the loop into compiled C code. numpy arrays know their dtype and shape, so loops over them can be expressed as single C-level operations:

```python
# slow: python loop
result = np.zeros(N)
for i in range(N):
    result[i] = a[i] * b[i] + c[i]
# 100x slower than:

# fast: vectorized
result = a * b + c
```

both produce the same answer. the second runs entirely in compiled C, the first runs $N$ python interpretations.

## the rules of vectorization

1. **avoid python loops over array elements**. replace with array operations
2. **avoid python conditionals inside loops**. use `np.where`, boolean masks, or `np.select`
3. **avoid appending to lists in a loop** if you know the size ahead of time. preallocate `np.zeros(N)` and assign by index
4. **avoid calling python functions per element**. if you need to apply $f(x)$ elementwise, use a "ufunc" (universal function) — `np.exp`, `np.sin`, `np.where(cond, a, b)`. for custom $f$, use `np.vectorize` (but this is just a python loop in disguise — sometimes faster numerically with jax/numba)

## broadcasting: vectorization across shapes

numpy automatically aligns arrays of compatible shapes. this lets me vectorize across pairs, triplets, grids — not just 1D.

```python
# pairwise distances between N points in 3D, no python loop
r = np.random.randn(N, 3)
dr = r[None, :, :] - r[:, None, :]            # (N, N, 3)
d  = np.sqrt(np.sum(dr**2, axis=-1))           # (N, N)
```

the `None` index inserts a new axis of length 1. broadcasting then expands those 1's against the matching axis of the other array. the result is a 2D matrix of all pairwise distances, computed in C.

## the masking idiom

instead of `if x > 0: do A else: do B` in a loop:

```python
# slow
for i in range(N):
    if x[i] > 0:
        y[i] = np.log(x[i])
    else:
        y[i] = 0

# fast
y = np.where(x > 0, np.log(np.abs(x) + 1e-30), 0)
```

the trick: compute *both* branches for all elements, then `where` picks. wasted work in the false branch, but the C-level loop wins.

## the cost of vectorization

vectorization trades CPU time for memory. the all-pairs distance computation above uses $O(N^2)$ memory for the $(N, N, 3)$ array. for $N = 10^4$ that is $\sim 2$ GB, impractical. for $N = 10^3$ it is $\sim 20$ MB, fine.

so for very large $N$, the vectorized approach hits memory limits before the python loop hits time limits. solutions:

- **chunk the computation**: vectorize over blocks of $10^3$ at a time, loop over blocks
- **use jax.jit** or **numba.jit**: compile the python loop to native code, getting C-level speed without the memory blowup
- **rewrite the inner loop in cython** or **C** if I really need both

## profiling

```python
%timeit np.sin(arr)                # in jupyter
import cProfile
cProfile.run("my_function()")      # in scripts
```

profile **before** optimizing. I have wasted hours optimizing the wrong line.

## the tradeoff with numba

`numba.jit` compiles a python function to native code:

```python
from numba import njit

@njit
def myloop(a, b, c):
    n = len(a)
    out = np.empty(n)
    for i in range(n):
        out[i] = a[i] * b[i] + c[i]
    return out
```

this is now as fast as the vectorized version, but uses $O(1)$ extra memory because there is no intermediate allocation. for memory-constrained large-$N$ work, numba beats vectorization.

## astrophysics where this matters

- **N-body force computation**: the vectorized $(N, N, 3)$ approach is fastest up to $N \sim 10^3$; beyond that, switch to numba or a tree code
- **image processing**: every per-pixel operation must be vectorized
- **time-series analysis**: filtering, FFT, smoothing — all naturally vectorized
- **grid-based PDE updates**: stencil operations in numpy are clean and fast

## see also

- [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.md)
- [Computational complexity and speed](../../02_Zettel/Theory/Computational complexity and speed.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
