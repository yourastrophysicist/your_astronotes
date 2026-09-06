---
layout: default
title: "Hint - TODO 1.3 Creating Scatter Plots for Large Datasets"
---

# Hint - TODO 1.3 Creating Scatter Plots for Large Datasets

**Target TODO**: TODO 1.3 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Matplotlib plotting essentials](../../02_Zettel/Theory/Matplotlib plotting essentials.html)

---

## Explanation

For large datasets ($N = 147,114$ binaries):
- Default markers (`s=20`, `alpha=1.0`) turn into a solid black blob due to heavy overplotting.
- Pass `s=1` (tiny marker size) and `alpha=0.2` (transparency) so overlapping regions naturally reveal population density.

```python
ax1.scatter(M1, M2, s=1, alpha=0.2, color='navy')
```
