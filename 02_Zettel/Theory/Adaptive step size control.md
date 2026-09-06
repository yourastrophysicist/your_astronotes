---
layout: default
title: "Adaptive step size control"
---

# Adaptive step size control

the smart way to integrate ODEs: use a small $h$ where the solution changes fast, a large $h$ where it changes slowly. the integrator estimates the local error after each step and adjusts $h$ to keep that error within a target tolerance.

## the basic recipe

at each step:

1. propose a step of size $h$
2. compute the result $\mathbf{y}_{n+1}$ AND an *error estimate* $\boldsymbol{\delta}$ (more on this below)
3. if $\|\boldsymbol{\delta}\| < \epsilon_{\rm target}$: accept the step, increase $h$ for next time
4. if $\|\boldsymbol{\delta}\| \geq \epsilon_{\rm target}$: reject, decrease $h$, retry

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

multistep methods (e.g. Adams-Bashforth-Moulton) do a "predictor" step then a "corrector" step. their difference is the error estimate. used in [Fourth-order Hermite predictor-corrector](../../02_Zettel/Theory/Fourth-order Hermite predictor-corrector.md) for collisional N-body.

## the step size update rule

once I have an error estimate $\delta$ and target $\epsilon$, the standard formula:

$$h_{\rm new} = h \cdot S \cdot \left(\frac{\epsilon}{\delta}\right)^{1/(p+1)}$$

where $p$ is the integrator order and $S \in (0.8, 0.95)$ is a safety factor (so I do not push to the edge). for an RK4 step ($p = 4$): $h_{\rm new} = 0.9 h (\epsilon/\delta)^{1/5}$.

this is *the* adaptive timestep formula. it appears verbatim in scipy, in Press et al., everywhere.

## tolerances: relative vs absolute

a single tolerance $\epsilon$ is too crude for problems with components of very different magnitudes (some $y_i \sim 10^6$, others $\sim 10^{-3}$). use a hybrid:

$$\text{scale}_i = \text{atol} + \text{rtol} \cdot |y_i|$$
$$\delta_i^{\rm scaled} = \delta_i / \text{scale}_i$$
$$\|\delta\|^2 = \frac{1}{N}\sum_i (\delta_i^{\rm scaled})^2$$

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
- **Bulirsch-Stoer**: built around adaptivity, see [Bulirsch-Stoer extrapolation](../../02_Zettel/Theory/Bulirsch-Stoer extrapolation.md)

## the diagnostic: how to see adaptivity working

plot the timestep $h$ as a function of $t$. for an N-body simulation it should:
- be roughly constant during smooth motion
- plummet during close encounters
- recover after the encounter

this is also a useful sanity check: if $h$ is constant throughout, adaptivity is not actually engaging and the fixed-step version would have been just as good (or better).

## see also

- [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.md)
- [Bulirsch-Stoer extrapolation](../../02_Zettel/Theory/Bulirsch-Stoer extrapolation.md)
- [Fourth-order Hermite predictor-corrector](../../02_Zettel/Theory/Fourth-order Hermite predictor-corrector.md)
- [Astrophysical N-body problem formulation](../../02_Zettel/Theory/Astrophysical N-body problem formulation.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
