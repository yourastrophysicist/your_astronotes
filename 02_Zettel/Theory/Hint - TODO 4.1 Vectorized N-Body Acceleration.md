---
layout: default
title: "Hint - TODO 4.1 Vectorized N-Body Acceleration"
---

# Hint - TODO 4.1 Vectorized N-Body Acceleration

**Target TODO**: TODO 4.1 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Astrophysical N-body problem formulation](../../02_Zettel/Theory/Astrophysical N-body problem formulation.html), [The Pythagorean three-body problem](../../02_Zettel/Theory/The Pythagorean three-body problem.html)

---

## Explanation

Gravitational acceleration on particle $i$ from all other particles $j$:
$$\mathbf{a}_i = -G \sum_{j \neq i} m_j \frac{\mathbf{r}_i - \mathbf{r}_j}{|\mathbf{r}_i - \mathbf{r}_j|^3}$$

In Python:
```python
acc = np.zeros_like(r)
for i in range(N):
    for j in range(N):
        if i != j:
            dr = r[i] - r[j]
            dist = np.sqrt(np.sum(dr**2))
            acc[i] -= G * m[j] * dr / (dist**3)
```
