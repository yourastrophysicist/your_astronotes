---
layout: default
title: "Euler method"
---

# Euler method

the simplest ODE integrator. given $\dot{\mathbf{y}} = \mathbf{f}(\mathbf{y}, t)$ with initial condition $\mathbf{y}(t_0) = \mathbf{y}_0$, advance one step with

$$\mathbf{y}_{n+1} = \mathbf{y}_n + h\,\mathbf{f}(\mathbf{y}_n, t_n)$$

where $h = t_{n+1} - t_n$ is the timestep. one function evaluation per step, simplest possible code, **first-order accuracy** ($O(h)$ local truncation error per step, $O(h)$ global error after $T/h$ steps).

## the geometric picture

at $t_n$ I know $\mathbf{y}_n$. the slope of $\mathbf{y}$ at that moment is $\mathbf{f}(\mathbf{y}_n, t_n)$. extrapolate the tangent line by $h$, land at $\mathbf{y}_{n+1}$. that is Euler.

## why it is taught first

it is the *definition* of an ODE turned into a one-line algorithm. every higher-order method (RK2, RK4, leapfrog) is some refinement of Euler — averaging slopes across the step, or staggering positions and velocities, or using past slope information. understanding why Euler is bad is the gateway to understanding why those refinements help.

## why it is bad

three problems:

1. **first-order accuracy**: error per step is $O(h^2)$, global error is $O(h)$. halving $h$ halves the error. compare RK4: halving $h$ cuts error by 16
2. **secular energy drift**: for Hamiltonian systems (orbits, oscillators), Euler systematically gains energy each step. an orbit spirals outward over time. this is *not* a roundoff issue; it is a structural property of the algorithm
3. **stability**: for stiff systems, Euler requires very small timesteps to avoid blowup. the stability region of explicit Euler is the disk $|1 + h\lambda| \leq 1$ in the complex plane, which is small

## python implementation

```python
def euler(f, y0, t0, t_end, h):
    n_steps = int((t_end - t0) / h)
    t = np.zeros(n_steps + 1)
    y = np.zeros((n_steps + 1, len(y0)))
    t[0], y[0] = t0, y0
    for i in range(n_steps):
        y[i+1] = y[i] + h * f(y[i], t[i])
        t[i+1] = t[i] + h
    return t, y
```

## demonstration: harmonic oscillator with Euler

$\ddot x + x = 0$ as a 2D system $(x, v)$ with $\dot x = v$, $\dot v = -x$. Euler:
$x_{n+1} = x_n + h v_n$
$v_{n+1} = v_n - h x_n$

energy $E = (x^2 + v^2)/2$. after one step:
$E_{n+1} = \tfrac12(x_n + hv_n)^2 + \tfrac12(v_n - hx_n)^2 = (1 + h^2/2)(x_n^2 + v_n^2)/2 \cdot \text{ish}$
$\quad = E_n (1 + h^2) + O(h^3)$

so each step gains energy by a fractional factor $h^2$. after $N$ steps, $E_N = (1 + h^2)^N E_0 \approx e^{Nh^2} E_0$. for $h = 0.01$, $N = 1000$ steps: factor $e^{0.1} \approx 1.1$, a 10% energy gain. for $N = 10^4$: factor $e \approx 2.7$. by $N = 10^5$, energy has tripled. **this is why Euler is not used for orbit integration.**

## when Euler is acceptable

- **dissipative systems** with no conserved quantity (e.g. exponential decay $\dot y = -\lambda y$)
- **first-time exploratory** integration — get something running, switch to a better method later
- **didactic demonstrations** of error growth — the standard way to motivate RK and leapfrog
- **simple numerical examples** in coursework

## the implicit Euler variant

backward Euler: $\mathbf{y}_{n+1} = \mathbf{y}_n + h\mathbf{f}(\mathbf{y}_{n+1}, t_{n+1})$. solve for $\mathbf{y}_{n+1}$ implicitly (linear or non-linear solver per step). first-order, but **unconditionally stable** for linear stiff problems. used as a building block in operator-splitting schemes.

## semi-implicit Euler (symplectic Euler)

for Hamiltonian systems with separable Hamiltonian $H = T(\mathbf{p}) + V(\mathbf{q})$:

$$\mathbf{p}_{n+1} = \mathbf{p}_n - h\nabla V(\mathbf{q}_n)$$
$$\mathbf{q}_{n+1} = \mathbf{q}_n + h\nabla T(\mathbf{p}_{n+1})$$

note the order: $\mathbf{p}$ first (using current $\mathbf{q}$), then $\mathbf{q}$ (using *new* $\mathbf{p}$). this is symplectic — it conserves a slightly modified Hamiltonian and so the energy oscillates around the true value rather than drifting. for the harmonic oscillator, energy stays bounded.

semi-implicit Euler is the simplest symplectic integrator, and the conceptual ancestor of [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.html).

## see also

- [Runge-Kutta 2 midpoint method](../../02_Zettel/Theory/Runge-Kutta 2 midpoint method.html) — $O(h^2)$ at twice the cost
- [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.html) — $O(h^4)$ at four times the cost, the workhorse
- [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.html) — second-order, symplectic, no energy drift
- [Energy conservation as a diagnostic](../../02_Zettel/Theory/Energy conservation as a diagnostic.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
