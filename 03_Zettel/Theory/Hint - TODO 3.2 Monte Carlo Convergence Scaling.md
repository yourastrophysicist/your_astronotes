---
layout: "default"
title: "Hint - TODO 3.2 Monte Carlo Convergence Scaling"
---
{% raw %}
# Hint - TODO 3.2 Monte Carlo Convergence Scaling

**Target TODO**: TODO 3.2 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Monte Carlo integration mean value method](./Monte%20Carlo%20integration%20mean%20value%20method.html), [Matplotlib plotting essentials](./Matplotlib%20plotting%20essentials.html)

---

## Explanation

Monte Carlo integration error scales as $\sigma \propto \frac{1}{\sqrt{N}}$:
- Plotting absolute error $\lvert I_{\text{MC}} - I_{\text{exact}}\rvert$ against $N$ on a log-log scale produces a line with slope $-1/2$.

```python
ax.loglog(N_values, errors, 'o-', label='Actual Error')
ax.loglog(N_values, [1.0/np.sqrt(N) for N in N_values], 'k--', label='Theoretical O(1/sqrt(N))')
```
{% endraw %}