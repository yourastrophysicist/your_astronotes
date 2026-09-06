---
layout: default
title: "Hint - TODO 2.1 Deriving Inverse CDF for Power Laws"
---

# Hint - TODO 2.1 Deriving Inverse CDF for Power Laws

**Target TODO**: TODO 2.1 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Inverse transform sampling](../../02_Zettel/Theory/Inverse transform sampling.html)

---

## Explanation

For $P(s) = C / s$ on $[s_{\min}, s_{\max}] = [1, 1000]\text{ AU}$:

1. Normalization: $\int_1^{1000} \frac{C}{s} ds = C \ln(1000) = 1 \implies C = \frac{1}{\ln(1000)}$.
2. CDF: $F(s) = \frac{\ln(s)}{\ln(1000)} = u \in [0, 1]$.
3. Inverse: $s(u) = 1000^u = s_{\min} \cdot \left(\frac{s_{\max}}{s_{\min}}\right)^u$.

```python
s = s_min * (s_max / s_min)**u
```
