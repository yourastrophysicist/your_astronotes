---
layout: default
title: "Sorting algorithms overview"
---

# Sorting algorithms overview

a small but unavoidable block. sorting comes up everywhere: building histograms, finding nearest neighbors, ranking, merging catalogs, computing percentiles. and it is the canonical example for "complexity of an algorithm" — every textbook walks through the $O(N^2)$ vs $O(N \log N)$ comparison here.

## the four classical algorithms

### bubble sort

repeatedly compare adjacent elements and swap if out of order. one pass moves the largest element to the end; $N$ passes sort the whole array.

```python
def bubble_sort(a):
    a = a.copy()
    N = len(a)
    for i in range(N - 1):
        for j in range(N - 1 - i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
    return a
```

complexity: $O(N^2)$ best, average, and worst case (best case improves to $O(N)$ if you add an early-exit when no swaps occur). simple, slow, almost never used in practice.

### selection sort

find the smallest element, swap it to position 0. find the next smallest, swap it to position 1. and so on.

complexity: $O(N^2)$ in all cases. as slow as bubble sort but does fewer swaps.

### quicksort

pick a "pivot" element, partition the array into "less than pivot" and "greater than pivot," recursively sort each half.

```python
def quicksort(a):
    if len(a) <= 1:
        return a
    pivot = a[len(a) // 2]
    less = [x for x in a if x < pivot]
    eq   = [x for x in a if x == pivot]
    more = [x for x in a if x > pivot]
    return quicksort(less) + eq + quicksort(more)
```

complexity: $O(N \log N)$ on average, $O(N^2)$ worst case (e.g. already-sorted input with naive pivot choice). in-place implementations are tighter than the simple python version above.

### merge sort

divide-and-conquer: split the array in half, recursively sort each half, merge the two sorted halves into one.

```python
def merge_sort(a):
    if len(a) <= 1:
        return a
    mid = len(a) // 2
    left  = merge_sort(a[:mid])
    right = merge_sort(a[mid:])
    return merge(left, right)

def merge(a, b):
    out = []
    i, j = 0, 0
    while i < len(a) and j < len(b):
        if a[i] <= b[j]: out.append(a[i]); i += 1
        else:            out.append(b[j]); j += 1
    out.extend(a[i:]); out.extend(b[j:])
    return out
```

complexity: $O(N \log N)$ in *all* cases — guaranteed, no worst-case explosion. needs $O(N)$ extra memory.

## the comparison

| algorithm | best | average | worst | space | stable |
|---|---|---|---|---|---|
| bubble | $O(N)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | yes |
| selection | $O(N^2)$ | $O(N^2)$ | $O(N^2)$ | $O(1)$ | no |
| quicksort | $O(N \log N)$ | $O(N \log N)$ | $O(N^2)$ | $O(\log N)$ | no |
| mergesort | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ | yes |
| heapsort | $O(N \log N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(1)$ | no |
| **Timsort** (python's) | $O(N)$ | $O(N \log N)$ | $O(N \log N)$ | $O(N)$ | yes |

- **stable** = preserves the relative order of equal elements (matters when sorting by multiple keys)
- **in-place** = $O(\log N)$ or $O(1)$ extra memory

## the lower bound

any comparison-based sorting algorithm needs at least $\log_2(N!) \sim N \log_2 N$ comparisons in the worst case. this is the information-theoretic minimum: $N!$ possible orderings, each comparison gives one bit. so $O(N \log N)$ is the best you can do for general data.

## non-comparison sorts (when you can do better)

if the data has structure beyond pairwise comparison, you can beat $N \log N$:

- **counting sort**: $O(N + K)$ for integers in range $[0, K]$
- **radix sort**: $O(d (N + b))$ for $d$-digit integers in base $b$
- **bucket sort**: $O(N)$ for uniformly-distributed real numbers

these are rarely useful in scientific computing because the constants are large or the data does not have the right structure.

## what python and numpy actually do

- **python's `sorted()` and `list.sort()`**: Timsort, a hybrid of mergesort and insertion sort that exploits already-sorted runs in real-world data
- **numpy's `np.sort()`**: defaults to quicksort, with `kind='mergesort'` and `kind='heapsort'` available
- **numpy's `np.argsort()`**: returns the *indices* that would sort the array — extremely useful for sorting one array by the order of another

never write a sorting algorithm in production. use the built-in:

```python
import numpy as np
sorted_arr = np.sort(arr)
sort_indices = np.argsort(arr)
arr_sorted_by_b = arr[np.argsort(b)]    # sort arr by the order of b
```

## astrophysics use cases

- **building a histogram from sample positions**: bin assignment is essentially a sort
- **k-nearest-neighbor search**: sort by distance, take the first k
- **finding the brightest sources** in a catalog: $O(N \log N)$ sort, take top
- **median computations**: sort then index — $O(N \log N)$. or use `np.partition` for $O(N)$
- **merging two catalogs**: stable sort by RA, then sort by Dec, with index tracking — Timsort handles stability
- **MCMC posterior quantiles**: `np.percentile` does the right thing internally

## see also

- [Computational complexity and speed](../../02_Zettel/Theory/Computational complexity and speed.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
