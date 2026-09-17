---
layout: "default"
title: "Adaptive step size control"
---
{% raw %}
# Adaptive step size control

the smart way to integrate ODEs: use a small $h$ where the solution changes fast, a large $h$ where it changes slowly. the integrator estimates the local error after each step and adjusts $h$ to keep that error within a target tolerance.

## the basic recipe

at each step:

1. propose a step of size $h$
2. compute the result $\mathbf{y}_{n+1}$ AND an *error estimate* $\boldsymbol{\delta}$ (more on this below)
3. if $\\lvert \boldsymbol{\delta}\\rvert < \epsilon_{\rm target}$: accept the step, increase $h$ for next time
4. if $\\lvert \boldsymbol{\delta}\\rvert \geq \epsilon_{\rm target}$: reject, decrease $h$, retry

the result is an integrator that costs the *minimum* number of function evaluations to maintain a given accuracy throughout the integration.

## how to estimate the error

three standard approaches:

### 1. step doubling

run the integrator with step $h$ to get $\mathbf{y}^{(1)}$. then run twice with step $h/2$ from the same start to get $\mathbf{y}^{(2)}$. for a method of order $p$:

$$\boldsymbol{\delta} \approx \mathbf{y}^{(2)} - \mathbf{y}^{(1)} \cdot \frac{1}{2^p - 1}$$

cost: $\sim 3\times$ a single step. simple but expensive.

### 2. embedded Runge-Kutta pairs

use *two* RK methods of different orders that share the same $\mathbf{k}_i$ stages. the difference between them estimates the error.

example: **Dormand-Prince RK45**, used in `scipy.integrate.solve_ivp` (`method='RK45'`). seven $\mathbf{k}_i$ stages compute both an order-4 and an order-5 estimate; their difference is the local truncation error of the order-4 step. cost: only one extra `f` evaluation compared to RK4 alone.

### 3. predictor-corrector mismatch

multistep methods (e.g. Adams-Bashforth-Moulton) do a "predictor" step then a "corrector" step. their difference is the error estimate. used in [Fourth-order Hermite predictor-corrector](./Fourth-order%20Hermite%20predictor-corrector.html) for collisional N-body.

## the step size update rule

once I have an error estimate $\delta$ and target $\epsilon$, the standard formula:

$$h_{\rm new} = h \cdot S \cdot \left(\frac{\epsilon}{\delta}\right)^{1/(p+1)}$$

where $p$ is the integrator order and $S \in (0.8, 0.95)$ is a safety factor (so I do not push to the edge). for an RK4 step ($p = 4$): $h_{\rm new} = 0.9 h (\epsilon/\delta)^{1/5}$.

this is *the* adaptive timestep formula. it appears verbatim in scipy, in Press et al., everywhere.

## tolerances: relative vs absolute

a single tolerance $\epsilon$ is too crude for problems with components of very different magnitudes (some $y_i \sim 10^6$, others $\sim 10^{-3}$). use a hybrid:

$$\text{scale}_i = \text{atol} + \text{rtol} \cdot \lvert y_i\rvert$$
$$\delta_i^{\rm scaled} = \delta_i / \text{scale}_i$$
$$\\lvert \delta\\rvert^2 = \frac{1}{N}\sum_i (\delta_i^{\rm scaled})^2$$

`atol` (absolute tolerance) sets a floor for components near zero. `rtol` (relative tolerance) sets the per-component fractional error. typical values: `rtol=1e-8`, `atol=1e-10`.

## scipy production usage

```python
from scipy.integrate import solve_ivp

def f(t, y):
    return [y[1], -y[0]]   # harmonic oscillator

sol = solve_ivp(f, t_span=(0, 100), y0=[1, 0],
                method='RK45', rtol=1e-8, atol=1e-10,
                dense_output=True)
```

`sol.t`, `sol.y` give the actual timesteps and solution. `sol.sol(t)` evaluates the dense interpolant at any $t$.

## when fixed-step beats adaptive

- **symplectic integrators**: leapfrog with fixed $h$ has bounded energy drift; adaptive leapfrog generally does *not* (the symplectic property is broken). for long-time orbits, prefer fixed-step leapfrog
- **simple smooth problems**: an adaptive integrator may waste effort on error estimation when a fixed RK4 is more than accurate enough
- **exam exercises that specify a fixed $h$**: just use the fixed step they ask for

## when adaptive is essential

- **close encounters in N-body**: the timestep needed during a close approach is $10^4 \times$ smaller than during smooth motion. fixed-step is infeasible
- **stiff problems**: the timestep needed for stability is much smaller than for accuracy; adaptive control catches this automatically
- **shock formation in PDEs**: gradients sharpen, $h$ must follow
- **Bulirsch-Stoer**: built around adaptivity, see [Bulirsch-Stoer extrapolation](./Bulirsch-Stoer%20extrapolation.html)

## the diagnostic: how to see adaptivity working

plot the timestep $h$ as a function of $t$. for an N-body simulation it should:
- be roughly constant during smooth motion
- plummet during close encounters
- recover after the encounter

this is also a useful sanity check: if $h$ is constant throughout, adaptivity is not actually engaging and the fixed-step version would have been just as good (or better).

## see also

- [Runge-Kutta 4 method](./Runge-Kutta%204%20method.html)
- [Bulirsch-Stoer extrapolation](./Bulirsch-Stoer%20extrapolation.html)
- [Fourth-order Hermite predictor-corrector](./Fourth-order%20Hermite%20predictor-corrector.html)
- [Astrophysical N-body problem formulation](./Astrophysical%20N-body%20problem%20formulation.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

---

### Numerical Methods & Algorithmic Diagnostics

![mapelli_fig04_p35.png](../../assets/images/mapelli_fig04_p9.png)
*Adaptive step size control via embedded Runge-Kutta Cash-Karp / Dormand-Prince pairs.*
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (11)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Adaptive%20timesteps%20near%20close%20encounters.html" class="backlink-item">Adaptive timesteps near close encounters</a></li>
    <li class="backlink-item-wrap"><a href="./Astrophysical%20N-body%20problem%20formulation.html" class="backlink-item">Astrophysical N-body problem formulation</a></li>
    <li class="backlink-item-wrap"><a href="./Built-in%20scipy%20integrators.html" class="backlink-item">Built-in scipy integrators</a></li>
    <li class="backlink-item-wrap"><a href="./Bulirsch-Stoer%20extrapolation.html" class="backlink-item">Bulirsch-Stoer extrapolation</a></li>
    <li class="backlink-item-wrap"><a href="./Energy%20conservation%20as%20a%20diagnostic.html" class="backlink-item">Energy conservation as a diagnostic</a></li>
    <li class="backlink-item-wrap"><a href="./Fourth-order%20Hermite%20predictor-corrector.html" class="backlink-item">Fourth-order Hermite predictor-corrector</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Modified%20midpoint%20method.html" class="backlink-item">Modified midpoint method</a></li>
    <li class="backlink-item-wrap"><a href="./Runge-Kutta%202%20midpoint%20method.html" class="backlink-item">Runge-Kutta 2 midpoint method</a></li>
    <li class="backlink-item-wrap"><a href="./Runge-Kutta%204%20method.html" class="backlink-item">Runge-Kutta 4 method</a></li>
    <li class="backlink-item-wrap"><a href="./Stability%20and%20the%20Courant%20condition.html" class="backlink-item">Stability and the Courant condition</a></li>
  </ul>
</div>
