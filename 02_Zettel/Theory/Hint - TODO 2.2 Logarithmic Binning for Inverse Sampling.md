---
layout: default
title: "Hint - TODO 2.2 Logarithmic Binning for Inverse Sampling"
---

# Hint - TODO 2.2 Logarithmic Binning for Inverse Sampling

**Target TODO**: TODO 2.2 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Verifying random samples](../../02_Zettel/Theory/Verifying random samples.html), [Matplotlib plotting essentials](../../02_Zettel/Theory/Matplotlib plotting essentials.html)

---

## Explanation

Power laws ($P(s) \propto 1/s$) drop off sharply across orders of magnitude:
- Linear bins place almost all counts into the first bin and leave high values empty.
- Use `bins = np.logspace(np.log10(s_min), np.log10(s_max), num_bins)` to ensure equal bin widths in log-space.
- Pass `density=True` in `plt.hist()` to compare sample frequency against the theoretical PDF $P(s)$.

```python
bins = np.logspace(np.log10(1.0), np.log10(1000.0), 50)
ax.hist(s_samples, bins=bins, density=True, alpha=0.6)
ax.set_xscale('log')
ax.set_yscale('log')
```
