---
layout: default
title: "Hint - TODO 4.3 Energy Conservation Diagnostic"
---

# Hint - TODO 4.3 Energy Conservation Diagnostic

**Target TODO**: TODO 4.3 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Energy conservation as a diagnostic](../../02_Zettel/Theory/Energy conservation as a diagnostic.html)

---

## Explanation

Total mechanical energy $E = T + V$:
- Kinetic Energy $T = \frac{1}{2} \sum_{i=1}^N m_i v_i^2$
- Potential Energy $V = -G \sum_{i < j} \frac{m_i m_j}{|\mathbf{r}_i - \mathbf{r}_j|}$

The relative energy variation between steps is defined as:
$$\frac{\Delta E}{E(t)} = \frac{E(t+h) - E(t)}{E(t)}$$

For a non-symplectic integrator like RK2 Midpoint, $\frac{\Delta E}{E}$ oscillates with time and exhibits a slow secular energy drift.
