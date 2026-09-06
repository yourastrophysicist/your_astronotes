---
layout: default
title: "Hint - TODO 1.1 Loading Data with np.loadtxt"
---

# Hint - TODO 1.1 Loading Data with np.loadtxt

**Target TODO**: TODO 1.1 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.html), [Pandas for tabular astrophysics data](../../02_Zettel/Theory/Pandas for tabular astrophysics data.html)

---

## Explanation

When loading ASCII data files with headers or metadata:
- `data_path`: The absolute string path to `data_black_holes.txt`.
- `skiprows=3`: Skips lines 0, 1, and 2 so parsing starts cleanly at row index 3.
- `usecols=(3, 4)`: Selects column index 3 ($M_1$ remnant mass) and column index 4 ($M_2$ remnant mass).
- `unpack=True`: Transposes the returned matrix so it unpacks directly into two separate 1D arrays `M1, M2`.

```python
M1, M2 = np.loadtxt(data_path, skiprows=3, usecols=(3, 4), unpack=True)
```
