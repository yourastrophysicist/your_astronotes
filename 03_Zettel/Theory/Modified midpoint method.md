---
layout: "default"
title: "Modified midpoint method"
---
# Modified midpoint method

the workhorse subroutine for [Bulirsch-Stoer extrapolation](Bulirsch-Stoer%20extrapolation.html). integrates an ODE from $t$ to $t + H$ using $n$ substeps of the midpoint rule, with a clever final correction step. the result is an estimate that has only *even* powers of $h = H/n$ in its error expansion — exactly what Richardson extrapolation wants.

## the algorithm

given the ODE $\dot{\mathbf{y}} = \mathbf{f}(\mathbf{y}, t)$, integrate from $\mathbf{y}_0$ at time $t$ to time $t + H$ using $n$ substeps of size $h = H/n$.

1. **Euler half-step** to start: $\mathbf{y}_1 = \mathbf{y}_0 + h \mathbf{f}(\mathbf{y}_0, t)$
2. **midpoint loop** for $i = 1, 2, \ldots, n - 1$:
$$\mathbf{y}_{i+1} = \mathbf{y}_{i-1} + 2h \mathbf{f}(\mathbf{y}_i, t + ih)$$
3. **smoothing step** at the end:
$$\mathbf{y}(t + H) \approx \tfrac12 [\mathbf{y}_n + \mathbf{y}_{n-1} + h \mathbf{f}(\mathbf{y}_n, t + H)]$$

the smoothing step is the "modified" part. without it, the bare midpoint rule has both even and odd powers of $h$ in its error; with it, only even powers remain. this allows Richardson extrapolation in $h^2$ rather than $h$, doubling the convergence rate of each extrapolation level.

## why the structure matters

the local truncation error of the modified midpoint method is

$$E(h) = \alpha h^2 + \beta h^4 + \gamma h^6 + \cdots$$

(only even powers). running it at several $n$ (giving several $h$) and extrapolating in $h^2$ to $h = 0$ gives a sequence of estimates that converge geometrically. this is [Bulirsch-Stoer extrapolation](Bulirsch-Stoer%20extrapolation.html).

## python implementation

```python
def modified_midpoint(f, y0, t0, H, n):
    """Integrate y' = f(y,t) from t0 to t0+H using n substeps."""
    h = H / n
    y_old = y0.copy()
    y_new = y0 + h * f(y0, t0)        # first Euler half-step
    for i in range(1, n):
        y_temp = y_old + 2*h * f(y_new, t0 + i*h)
        y_old = y_new
        y_new = y_temp
    # smoothing step
    y_final = 0.5 * (y_new + y_old + h * f(y_new, t0 + H))
    return y_final
```

## evaluations per macrostep

$n + 1$ evaluations of $\mathbf{f}$ per macrostep of size $H$. for $n = 2, 4, 6, \ldots$, the cost grows linearly. compare RK4, which uses 4 evaluations for one step of size $H$.

## why it is rarely used standalone

modified midpoint as a standalone integrator is just a second-order method with twice the cost of midpoint RK2. nobody runs it alone.

its **only** purpose is as the inner-loop subroutine of [Bulirsch-Stoer extrapolation](Bulirsch-Stoer%20extrapolation.html), which combines results from $n = 2, 4, 6, 8, \ldots$ via Richardson extrapolation to achieve very high-order accuracy.

## see also

- [Bulirsch-Stoer extrapolation](Bulirsch-Stoer%20extrapolation.html)
- [Runge-Kutta 4 method](Runge-Kutta%204%20method.html)
- [Adaptive step size control](Adaptive%20step%20size%20control.html)
- [Truncation error and order of accuracy](Truncation%20error%20and%20order%20of%20accuracy.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Bulirsch-Stoer%20extrapolation.html" class="backlink-item">Bulirsch-Stoer extrapolation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>

