---
layout: default
title: "Hint - TODO 1.2 Computing Summary Statistics"
---

# Hint - TODO 1.2 Computing Summary Statistics

**Target TODO**: TODO 1.2 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Numpy arrays vs Python lists](../../02_Zettel/Theory/Numpy arrays vs Python lists.html)

---

## Explanation

NumPy array methods provide fast C-level functions for summary statistics:
- `.mean()`: Computes the arithmetic mean $\bar{x} = \frac{1}{N}\sum x_i$.
- `.std()`: Computes the standard deviation $\sigma = \sqrt{\frac{1}{N}\sum (x_i - \bar{x})^2}$.

```python
m1_mean = M1.mean()
m1_std  = M1.std()

m2_mean = M2.mean()
m2_std  = M2.std()
```
