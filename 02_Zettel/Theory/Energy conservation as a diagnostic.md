---
layout: default
title: "Energy conservation as a diagnostic"
---

# Energy conservation as a diagnostic

for any Hamiltonian system (an N-body simulation, a Kepler orbit, an oscillator), the total energy $E$ is constant. an integrator that fails to conserve $E$ is producing non-physical solutions. so I track $E(t)$ as the canonical quality diagnostic for *every* dynamical simulation.

## what to plot

the **relative energy variation**:

$$\frac{\Delta E(t)}{E_0} = \frac{E(t) - E_0}{E_0}$$

where $E_0 = E(t=0)$. plot this against time on a linear or log scale. expected behavior depends on the integrator:

| integrator | $\Delta E/E$ vs $t$ |
|---|---|
| Euler | exponential growth (unstable for orbits) |
| RK4 | linear drift, slope $\sim h^4$ per step |
| midpoint | linear drift, slope $\sim h^2$ per step |
| **leapfrog** | **bounded oscillation, no drift** |
| Hermite | bounded oscillation, very small amplitude |

a bounded $\Delta E/E$ is the signature of a **symplectic** integrator. a drift is the signature of a non-symplectic one.

## the practical metric

after an integration of $N_{\rm orb}$ orbits:

- **good** ($\Delta E/E < 10^{-6}$): integrator is fine
- **acceptable** ($10^{-6} < \Delta E/E < 10^{-3}$): may need more care, smaller timestep, or check for close encounters
- **bad** ($\Delta E/E > 10^{-3}$): integration is corrupting the physics, do not trust the orbits

## the exam-template plot

`exam_template.pdf` exercise 4 explicitly asks:

> Calculate and plot the relative energy variation $[E(t+h) - E(t)]/E(t)$ of the system between two timesteps and plot it as a function of time.

note this is the *step-by-step* variation, not the cumulative $E(t)/E_0 - 1$. for a non-symplectic integrator, the step-by-step variation will look like noise oscillating around a small bias; the cumulative drift only becomes obvious when you sum many steps. **plot both** if there is room — they answer different questions.

## a pseudocode skeleton

```python
def total_energy(r, v, m, G=1.0, eps=0.0):
    KE = 0.5 * np.sum(m * np.sum(v**2, axis=1))
    PE = 0.0
    N = len(m)
    for i in range(N):
        for j in range(i+1, N):
            d = np.linalg.norm(r[i] - r[j])
            PE -= G * m[i] * m[j] / np.sqrt(d**2 + eps**2)
    return KE + PE

# at each timestep
energies = []
times = []
for step in range(n_steps):
    # ... integrator step ...
    times.append(t)
    energies.append(total_energy(r, v, m))

energies = np.array(energies)
delta_E = (energies - energies[0]) / energies[0]
plt.plot(times, np.abs(delta_E))
plt.yscale('log')
plt.xlabel('t'); plt.ylabel('|ΔE/E|')
```

## angular momentum: the second diagnostic

after energy, angular momentum $\mathbf{L} = \sum m_i \mathbf{r}_i \times \mathbf{v}_i$ is the next conserved quantity. for any spherically symmetric problem (a single planet around a fixed sun, an isolated cluster) it should be constant.

leapfrog conserves $\mathbf{L}$ to *machine precision* (a stronger property than energy), because angular momentum is a quadratic invariant of the symplectic structure. RK4 conserves it only to $O(h^4)$.

## what a bad integrator looks like, visually

three signatures of a bad-or-too-large-timestep integration:

1. **steady drift** in $\Delta E/E$ — non-symplectic integrator at moderate $h$ → use a smaller $h$ or switch to leapfrog
2. **explosive growth** in $\Delta E/E$ — unstable, e.g. Euler at any $h$ on a Kepler orbit → switch to a higher-order method
3. **sudden jumps** in $\Delta E/E$ at specific times — close encounter that the timestep cannot resolve → use adaptive timestepping (see [Adaptive step size control](../../02_Zettel/Theory/Adaptive step size control.html))

case 3 is the most common cause of mysterious-looking energy plots in N-body work. the fix is timestep refinement, not algorithm change.

## a cosmological aside

for a cosmological simulation in an expanding background, energy is *not* conserved (the universe is expanding, work is being done). the right invariant is a different combination involving the scale factor. but for an *isolated* gravitational system (everything in this exam), energy conservation is exact and is the right diagnostic.

## see also

- [Astrophysical N-body problem formulation](../../02_Zettel/Theory/Astrophysical N-body problem formulation.html)
- [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.html)
- [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.html)
- [Adaptive step size control](../../02_Zettel/Theory/Adaptive step size control.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
