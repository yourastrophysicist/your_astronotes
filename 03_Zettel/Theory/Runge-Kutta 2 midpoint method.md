---
layout: "default"
title: "Runge-Kutta 2 midpoint method"
---
# Runge-Kutta 2 (midpoint method)

a one-step ODE integrator with second-order accuracy ($O(h^2)$ local truncation, $O(h^2)$ global error). evaluates the slope twice per step: once at the start, once at the *midpoint*, then uses the midpoint slope for the full step.

## the formulas

$$\mathbf{k}_1 = \mathbf{f}(\mathbf{y}_n, t_n)$$
$$\mathbf{k}_2 = \mathbf{f}(\mathbf{y}_n + \tfrac{h}{2} \mathbf{k}_1,\; t_n + \tfrac{h}{2})$$
$$\mathbf{y}_{n+1} = \mathbf{y}_n + h \mathbf{k}_2$$

intuition: $\mathbf{k}_1$ is the Euler slope at the start. step *halfway* with $\mathbf{k}_1$ to get a midpoint estimate of $\mathbf{y}$. evaluate the slope $\mathbf{k}_2$ at that midpoint. take the *full* step using $\mathbf{k}_2$ as the slope.

## why it is $O(h^2)$

Taylor-expand the true solution:
$$\mathbf{y}(t + h) = \mathbf{y}(t) + h\dot{\mathbf{y}} + \tfrac{h^2}{2}\ddot{\mathbf{y}} + O(h^3)$$

with $\dot{\mathbf{y}} = \mathbf{f}$ and $\ddot{\mathbf{y}} = \partial_t \mathbf{f} + (\nabla_y \mathbf{f}) \mathbf{f}$. the midpoint method's $\mathbf{k}_2$ Taylor-expands as
$$\mathbf{k}_2 = \mathbf{f}(\mathbf{y}_n, t_n) + \tfrac{h}{2}[\partial_t \mathbf{f} + (\nabla_y \mathbf{f}) \mathbf{f}] + O(h^2)$$

so $h\mathbf{k}_2 = h\mathbf{f} + \tfrac{h^2}{2}\ddot{\mathbf{y}} + O(h^3)$, matching the true expansion through $h^2$. the leading error is $O(h^3)$ per step, $O(h^2)$ global.

## python implementation

```python
def rk2(f, y0, t0, t_end, h):
    n_steps = int((t_end - t0) / h)
    t = np.zeros(n_steps + 1)
    y = np.zeros((n_steps + 1, len(np.atleast_1d(y0))))
    t[0], y[0] = t0, y0
    for i in range(n_steps):
        k1 = f(y[i], t[i])
        k2 = f(y[i] + 0.5 * h * k1, t[i] + 0.5 * h)
        y[i+1] = y[i] + h * k2
        t[i+1] = t[i] + h
    return t, y
```

## the cost-vs-accuracy tradeoff

| method | function evals | order | error scaling |
|---|---|---|---|
| Euler | 1 | 1 | $O(h)$ |
| midpoint (RK2) | 2 | 2 | $O(h^2)$ |
| RK4 | 4 | 4 | $O(h^4)$ |

doubling the cost (Euler → RK2) buys *one extra order* of accuracy. for any sensible target accuracy, RK2 wins overwhelmingly.

## the other RK2: Heun's method (improved Euler)

Heun's method is also second-order. it averages the slope at the start and the slope at the *full step*:

$$\mathbf{k}_1 = \mathbf{f}(\mathbf{y}_n, t_n), \quad \mathbf{k}_2 = \mathbf{f}(\mathbf{y}_n + h\mathbf{k}_1, t_n + h)$$
$$\mathbf{y}_{n+1} = \mathbf{y}_n + \tfrac{h}{2}(\mathbf{k}_1 + \mathbf{k}_2)$$

equivalent to a "predict with Euler, correct with trapezoidal." accuracy is the same $O(h^2)$ but the constant coefficient differs. for general use, the midpoint method is slightly more accurate; Heun's is sometimes preferred for boundary cases.

## the Pythagorean three-body exam exercise

`exam_template.pdf` exercise 4 asks for **midpoint integration** of the Pythagorean three-body problem with $h = 10^{-5}$, between $t = 0$ and $t_f = 5$. that is $5 \times 10^5$ steps. expected output:
- orbital trajectories in the xy plane (curving lines, eventual escape of the 5-mass)
- relative energy variation $\Delta E/E$ vs time

the energy diagnostic for midpoint should show $\Delta E/E$ on the order of $h^2$ ish, growing roughly linearly with time but bounded.

## comparison vs Euler on harmonic oscillator

energy gain per step: $\sim h^2/2$ for Euler, $\sim h^4$ for midpoint. the energy still drifts (midpoint is *not* symplectic), but at a much slower rate. for many problems midpoint is "good enough."

for *long-time* energy conservation, [Leapfrog integrator](Leapfrog%20integrator.html) (also second-order) is structurally better than midpoint because it is symplectic.

## stability

midpoint is conditionally stable: it is stable for $\lvert 1 + h\lambda + h^2 \lambda^2/2\rvert \leq 1$, which is a slightly larger region than Euler's. but for stiff problems (large $\lvert \lambda\rvert$), it still requires small $h$.

## astrophysics use cases

- **as a teaching tool for second-order accuracy** — the natural step up from Euler
- **lightweight integrations** where RK4 is overkill but Euler is too inaccurate
- **embedded RK pairs** (e.g. RK23) use a midpoint-class step plus a higher-order step to estimate error for adaptive control. see [Adaptive step size control](Adaptive%20step%20size%20control.html)

## see also

- [Euler method](Euler%20method.html)
- [Runge-Kutta 4 method](Runge-Kutta%204%20method.html)
- [Leapfrog integrator](Leapfrog%20integrator.html) — same order, symplectic, better for orbits
- [Energy conservation as a diagnostic](Energy%20conservation%20as%20a%20diagnostic.html)
- [Astrophysical N-body problem formulation](Astrophysical%20N-body%20problem%20formulation.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Euler%20method.html" class="backlink-item">Euler method</a></li>
    <li class="backlink-item-wrap"><a href="Hint%20-%20TODO%204.2%20RK2%20Midpoint%20Integrator.html" class="backlink-item">Hint - TODO 4.2 RK2 Midpoint Integrator</a></li>
    <li class="backlink-item-wrap"><a href="N-body%20with%20Euler%20vs%20midpoint%20vs%20leapfrog.html" class="backlink-item">N-body with Euler vs midpoint vs leapfrog</a></li>
    <li class="backlink-item-wrap"><a href="Runge-Kutta%204%20method.html" class="backlink-item">Runge-Kutta 4 method</a></li>
    <li class="backlink-item-wrap"><a href="The%20Pythagorean%20three-body%20problem.html" class="backlink-item">The Pythagorean three-body problem</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>

