---
layout: default
title: "The Pythagorean three-body problem"
---

# The Pythagorean three-body problem

three masses 3, 4, 5 placed at the apexes of a 3-4-5 right triangle (sides 3, 4, 5), released from rest under mutual Newtonian gravity with $G = 1$. one of the most studied problems in chaotic dynamics, and the standard exam exercise for N-body integration in Mapelli's course.

## the setup

initial positions:
- $m_1 = 3$ at apex opposite side 3 (length-3 side, between $m_2$ and $m_3$)
- $m_2 = 4$ at apex opposite side 4
- $m_3 = 5$ at apex opposite side 5

with side lengths 3, 4, 5 forming a right angle at the vertex opposite the side of length 5.

a common explicit choice (matching Burrau's original numbers):
- $\mathbf{r}_1 = (1, 3)$
- $\mathbf{r}_2 = (-2, -1)$
- $\mathbf{r}_3 = (1, -1)$

(distances: $|r_1 - r_2| = \sqrt{9 + 16} = 5$, $|r_1 - r_3| = \sqrt{0 + 16} = 4$, $|r_2 - r_3| = \sqrt{9 + 0} = 3$. ✓)

initial velocities: all zero. units: $G = 1$.

## the dynamics (a brief tour)

starting from rest, the three masses fall toward each other. the smallest mass is *not* simply ejected first; the dynamics is genuinely 3-body chaotic. through a sequence of close-triple encounters and exchanges, eventually:

- the lightest mass ($m_1 = 3$) is **ejected** on a hyperbolic trajectory
- the heavier two ($m_2 = 4$, $m_3 = 5$) bind into a **stable binary**

this final state was first computed by Burrau (1913) by hand and confirmed by Szebehely & Peters (1967) using a Hilbert-Brouwer numerical integrator. the time of escape is $t \approx 60$ in these units.

## the chaos

the system is **deterministically chaotic**. tiny changes in initial conditions or in numerical roundoff lead to wildly different trajectories. consecutive close encounters amplify by factors of $10^4$-$10^6$, so by the third encounter, double-precision integrations diverge from each other.

modern *arbitrary-precision* integrations (Boekholt & Portegies Zwart 2015, the **Brutus** code) trace the trajectory to thousands of significant figures. these confirm that the answer is well-defined mathematically, but practically unreachable by standard numerics over the full integration time.

## the energy diagnostic

with $G = 1$, the total energy is:

$$E = \tfrac12 \sum_i m_i v_i^2 - \sum_{i < j} \frac{m_i m_j}{|\mathbf{r}_i - \mathbf{r}_j|}$$

at $t = 0$ (rest):
$$E_0 = -\frac{m_1 m_2}{5} - \frac{m_1 m_3}{4} - \frac{m_2 m_3}{3} = -\frac{12}{5} - \frac{15}{4} - \frac{20}{3} = -\frac{289}{20\cdot 3} \approx -12.81\overline{6}$$

(exact value $-289/22 ish$ — work the LCD: $\frac{12}{5} = 144/60, \frac{15}{4} = 225/60, \frac{20}{3} = 400/60$, sum $769/60 = 12.8166\ldots$). so $E_0 \approx -12.817$.

throughout the integration, this should be conserved. a properly-tuned midpoint or RK4 integrator with $h = 10^{-5}$ keeps $|\Delta E/E| < 10^{-8}$ during smooth phases, with brief excursions to ~$10^{-5}$ at close encounters.

## the standard exam exercise

from `exam_template.pdf`:

> Three point masses attract each other according to the Newtonian law of gravitation: $\vec{a}_i = -G \sum_{j \neq i} m_j (\vec{x}_i - \vec{x}_j)/|\vec{x}_i - \vec{x}_j|^3$. The masses of the particles are $m_1 = 3, m_2 = 4, m_3 = 5$; they are initially located at the apexes of a right triangle with sides 3, 4, and 5, as shown in the figure. The particles are free to move in the xy plane of the triangle and are at rest initially. We assume $G = 1$.
>
> A. Write a script to integrate the position and the velocity of the three particles in two dimensions with the **midpoint method** between time $t = 0$ and time $t_f = 5$ with timesteps of $h = 10^{-5}$.
> B. Plot the orbits of the three particles in the xy plane.
> C. Calculate and plot the relative energy variation $[E(t+h) - E(t)]/E(t)$ of the system between two timesteps and plot it as a function of time.

the exam stops at $t = 5$, well *before* the chaotic ejection (which happens around $t \approx 60$). so the integration is in the smooth pre-encounter phase, where energy conservation is excellent.

## complete solution sketch

```python
import numpy as np
import matplotlib.pyplot as plt

m = np.array([3, 4, 5])
r0 = np.array([[1, 3], [-2, -1], [1, -1]], dtype=float)
v0 = np.zeros((3, 2))

def acceleration(r):
    a = np.zeros_like(r)
    for i in range(3):
        for j in range(3):
            if i != j:
                dr = r[j] - r[i]
                a[i] += m[j] * dr / np.linalg.norm(dr)**3
    return a

def midpoint_step(r, v, h):
    a1 = acceleration(r)
    r_half = r + 0.5*h*v
    v_half = v + 0.5*h*a1
    a_half = acceleration(r_half)
    r_new = r + h*v_half
    v_new = v + h*a_half
    return r_new, v_new

def energy(r, v):
    KE = 0.5 * np.sum(m[:, None] * v**2)
    PE = 0.0
    for i in range(3):
        for j in range(i+1, 3):
            PE -= m[i]*m[j] / np.linalg.norm(r[i] - r[j])
    return KE + PE

# integrate
h = 1e-5
n_steps = int(5 / h)
r_hist = np.zeros((n_steps + 1, 3, 2))
E_hist = np.zeros(n_steps + 1)
r, v = r0.copy(), v0.copy()
r_hist[0] = r; E_hist[0] = energy(r, v)
for i in range(n_steps):
    r, v = midpoint_step(r, v, h)
    r_hist[i+1] = r
    E_hist[i+1] = energy(r, v)

# plot orbits
fig, axes = plt.subplots(1, 2, figsize=(12, 5))
for k in range(3):
    axes[0].plot(r_hist[:, k, 0], r_hist[:, k, 1], label=f'm{k+1}={m[k]}')
axes[0].set_aspect('equal'); axes[0].legend(); axes[0].set_xlabel('x'); axes[0].set_ylabel('y')

# plot energy
dE = np.abs((E_hist[1:] - E_hist[:-1]) / E_hist[:-1])
t = np.linspace(0, 5, n_steps)
axes[1].plot(t, dE)
axes[1].set_yscale('log'); axes[1].set_xlabel('t'); axes[1].set_ylabel('|ΔE/E|')

plt.tight_layout()
plt.savefig('pythagorean.pdf')
```

`n_steps = 5e5`, takes ~30 seconds in pure python with a loop. for full marks, vectorize the acceleration computation to make it run faster.

## the longer story (for fun, not the exam)

Burrau (1913) hand-computed the first ~50 time units. Szebehely & Peters (1967) ran modest computers and found the escape at $t \approx 59.9$. the lightest mass escapes with the heaviest two binding into a binary with semi-major axis $a \approx 0.21$.

the system has been a benchmark for chaotic-dynamics integrators ever since. one of the deeper results: even the *qualitative* outcome (which star escapes) depends on numerical precision. arbitrary-precision integrators have shown the question is well-defined but extraordinarily sensitive.

## see also

- [Astrophysical N-body problem formulation](../../02_Zettel/Theory/Astrophysical N-body problem formulation.md)
- [Runge-Kutta 2 midpoint method](../../02_Zettel/Theory/Runge-Kutta 2 midpoint method.md)
- [Energy conservation as a diagnostic](../../02_Zettel/Theory/Energy conservation as a diagnostic.md)
- [N-body with Euler vs midpoint vs leapfrog](../../02_Zettel/Theory/N-body with Euler vs midpoint vs leapfrog.md)
- [Adaptive timesteps near close encounters](../../02_Zettel/Theory/Adaptive timesteps near close encounters.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
