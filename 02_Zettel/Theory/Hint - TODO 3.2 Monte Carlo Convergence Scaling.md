---
layout: default
title: "Hint - TODO 3.2 Monte Carlo Convergence Scaling"
---

# Hint - TODO 3.2 Monte Carlo Convergence Scaling

**Target TODO**: TODO 3.2 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Monte Carlo integration mean value method](../../02_Zettel/Theory/Monte Carlo integration mean value method.md), [Matplotlib plotting essentials](../../02_Zettel/Theory/Matplotlib plotting essentials.md)

---

## Explanation

Monte Carlo integration error scales as $\sigma \propto \frac{1}{\sqrt{N}}$:
- Plotting absolute error $|I_{\text{MC}} - I_{\text{exact}}|$ against $N$ on a log-log scale produces a line with slope $-1/2$.

```python
ax.loglog(N_values, errors, 'o-', label='Actual Error')
ax.loglog(N_values, [1.0/np.sqrt(N) for N in N_values], 'k--', label='Theoretical O(1/sqrt(N))')
```
