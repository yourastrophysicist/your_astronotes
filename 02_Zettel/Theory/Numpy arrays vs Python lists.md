---
layout: default
title: "Numpy arrays vs Python lists"
---

# Numpy arrays vs Python lists

the *single most important* python performance concept for scientific computing. lists and arrays look interchangeable in many code snippets but their performance is wildly different — sometimes by factors of 100 to 1000.

## what they actually are, under the hood

a **python list** is a heterogeneous, dynamically-resizable sequence of pointers to python objects. each element is a full PyObject (with reference counting, type information, etc.). list comprehensions and `for` loops over lists run through the python interpreter — every operation is interpreted, type-checked, dispatched.

a **numpy array** is a contiguous block of memory holding values of a single fixed type (e.g. `float64`, `int32`). operations on arrays are vectorized: the loop runs in compiled C code with no per-element python overhead, often using SIMD instructions and cache-friendly memory layouts.

## the performance gap

```python
import numpy as np
import time

N = 1_000_000
a_list = list(range(N))
a_arr  = np.arange(N)

# sum
t0 = time.time(); s = sum(a_list);    print(time.time() - t0)   # ~0.05 s
t0 = time.time(); s = a_arr.sum();    print(time.time() - t0)   # ~0.001 s — 50× faster

# elementwise multiply
t0 = time.time(); b = [x * 2 for x in a_list];  print(time.time() - t0)   # ~0.1 s
t0 = time.time(); b = a_arr * 2;                print(time.time() - t0)   # ~0.002 s — 50× faster
```

for an N-body force loop (the inner loop is *the* bottleneck):

```python
# slow: python loop, N^2 iterations interpreted
for i in range(N):
    for j in range(N):
        if i != j:
            a[i] += m[j] * (r[j] - r[i]) / (dist(r[i], r[j]))**3
# 100x slower than:

# fast: vectorized, O(N^2) memory but the FLOPS run in compiled BLAS
dr = r[None, :, :] - r[:, None, :]            # (N, N, 3)
inv_r3 = 1.0 / (np.sum(dr**2, axis=-1) + eps**2)**1.5
np.fill_diagonal(inv_r3, 0)
a = G * np.sum(m[None, :, None] * inv_r3[:, :, None] * dr, axis=1)
```

## what counts as "vectorized"

operations that **avoid python-level loops** and use array-level operations:

- arithmetic: `a + b`, `a * c`, `np.sin(a)`, `a ** 2`
- reductions: `a.sum()`, `a.mean()`, `np.cumsum(a)`
- broadcasting: `a[:, None] + b[None, :]` for outer-product-style ops
- masking: `a[a > 0]`, `np.where(cond, a, b)`
- linear algebra: `A @ x`, `np.linalg.solve(A, b)`

operations that *don't* count:

- `for` loops over individual array elements
- `[f(x) for x in a]` for a custom python `f`
- `np.vectorize(f)` (which is just a python loop with array-friendly syntax)
- functions called per-element: `[np.sum(arr) for arr in nested_list]`

## broadcasting in two minutes

numpy automatically aligns arrays of compatible shapes. the rules:
1. compare shapes from the trailing axis
2. axes that are equal, or where one is 1, are compatible
3. missing axes are treated as 1

example: $(N, 3) + (3,) \to (N, 3)$. each row gets the same vector added.
example: $(N, 1) + (1, M) \to (N, M)$. an outer product.

this is what makes the N-body vectorization above possible: $r$ has shape $(N, 3)$, and `r[None, :, :] - r[:, None, :]` produces a $(N, N, 3)$ array of all pairwise displacements.

## copies vs views

slicing returns a **view** (zero-copy reference into the original):

```python
a = np.arange(10)
b = a[2:5]      # view — modifying b changes a
b[0] = 100      # a is now [0 1 100 3 4 5 6 7 8 9]
```

fancy indexing (boolean masks, integer arrays) returns a **copy**:

```python
b = a[a > 3]    # copy
b[0] = 0        # a unchanged
```

knowing the difference matters when working with large arrays.

## when lists are fine

- **small numbers of items** (< ~100): list performance is fine, code is simpler
- **heterogeneous data**: a list of mixed types (`[1, "hello", 3.14, [1, 2]]`)
- **frequent appending/extending**: numpy arrays must be resized (involves copy), python lists amortize at $O(1)$
- **dynamic data structures**: queues, stacks, trees built from lists are simpler to reason about

## the conversion idioms

`np.array(my_list)` converts list → array. for nested lists, the inner lists become rows. specify the dtype if you care:

```python
arr = np.array([1, 2, 3], dtype=np.float64)
```

`arr.tolist()` converts back. expensive for large arrays — usually I avoid this.

## astrophysics application

the typical exam / research workflow:

1. **load data** as numpy arrays via `np.loadtxt`, `np.genfromtxt`, or `astropy.io.fits`
2. **filter, mask, manipulate** using array operations (no loops)
3. **compute statistics** with `np.mean`, `np.std`, `np.histogram`
4. **plot** with matplotlib (which is itself array-based)

if I find myself writing a `for` loop over data, the question is: can this be vectorized? 95% of the time the answer is yes.

## see also

- [Computational complexity and speed](../../02_Zettel/Theory/Computational complexity and speed.md)
- [Vectorization and python speed](../../02_Zettel/Theory/Vectorization and python speed.md)
- [Python language essentials](../../02_Zettel/Theory/Python language essentials.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
