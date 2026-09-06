---
layout: default
title: "Hint - TODO 4.2 RK2 Midpoint Integrator"
---

# Hint - TODO 4.2 RK2 Midpoint Integrator

**Target TODO**: TODO 4.2 in Module_1_Random_Sampling_and_Monte_Carlo  
**Related Zettels**: [Runge-Kutta 2 midpoint method](../../02_Zettel/Theory/Runge-Kutta 2 midpoint method.html)

---

## Explanation

The 2nd-order Runge-Kutta (Midpoint) scheme evaluates accelerations at the half step:

1. Half-step prediction:
   $$\mathbf{r}_{\text{mid}} = \mathbf{r}_n + \frac{h}{2} \mathbf{v}_n, \quad \mathbf{v}_{\text{mid}} = \mathbf{v}_n + \frac{h}{2} \mathbf{a}(\mathbf{r}_n)$$
2. Full-step update:
   $$\mathbf{r}_{n+1} = \mathbf{r}_n + h \mathbf{v}_{\text{mid}}, \quad \mathbf{v}_{n+1} = \mathbf{v}_n + h \mathbf{a}(\mathbf{r}_{\text{mid}})$$

```python
a_now = compute_accelerations(r, m)
r_mid = r + 0.5 * h * v
v_mid = v + 0.5 * h * a_now

a_mid = compute_accelerations(r_mid, m)
r_next = r + h * v_mid
v_next = v + h * a_mid
```
