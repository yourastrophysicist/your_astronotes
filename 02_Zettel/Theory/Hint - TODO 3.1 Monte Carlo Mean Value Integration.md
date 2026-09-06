---
layout: default
title: "Hint - TODO 3.1 Monte Carlo Mean Value Integration"
---

# Hint - TODO 3.1 Monte Carlo Mean Value Integration

**Target TODO**: TODO 3.1 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Monte Carlo integration mean value method](../../02_Zettel/Theory/Monte Carlo integration mean value method.md)

---

## Explanation

The mean-value theorem for Monte Carlo integration estimates $\int_a^b f(x) dx$:
1. Sample $N$ uniform random points $x_i \sim U(a, b)$.
2. Compute the mean height $\bar{f} = \frac{1}{N}\sum_{i=1}^N f(x_i)$.
3. Multiply by the interval width $(b - a)$:

```python
x_rand = rng.uniform(a, b, size=int(N))
integral_estimate = (b - a) * np.mean(f(x_rand))
```
