---
layout: default
title: "Hint - TODO 1.4 2D Histograms and Colorbars"
---

# Hint - TODO 1.4 2D Histograms and Colorbars

**Target TODO**: TODO 1.4 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Matplotlib plotting essentials](../../02_Zettel/Theory/Matplotlib plotting essentials.html)

---

## Explanation

`plt.hist2d` bins 2D data $(x, y)$ into a regular rectangular grid:
- `bins=50`: Creates a $50 \times 50$ grid across the data domain.
- `cmap='viridis'`: Applies a continuous perceptually uniform colormap.
- `h2d[3]` returns the QuadMesh image object required by `plt.colorbar()`.

```python
h2d = ax2.hist2d(M1, M2, bins=50, cmap='viridis')
plt.colorbar(h2d[3], ax=ax2, label='Number of Binaries')
```
