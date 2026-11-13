---
layout: "default"
title: "Adaptive timesteps near close encounters"
---
# Adaptive timesteps near close encounters

a Kepler orbit at radius 1 needs $h \sim 10^{-2}$ for accurate integration. a binary at radius $10^{-3}$ needs $h \sim 10^{-5}$. a fixed timestep set to satisfy both wastes 99% of the work. a fixed timestep set for the larger orbit catastrophically fails on the binary. **the only sane approach** is to give each particle its own timestep.

## why fixed timesteps fail

Kepler orbital frequency: $\Omega \propto r^{-3/2}$. so the timescale to resolve scales as $r^{3/2}$. for a planetary system with bodies at $r = 0.4$ to $r = 30$ AU, the ratio of timescales is $(30/0.4)^{3/2} \approx 600$. for a star cluster with binaries from $r = 10^{-4}$ to $10^2$ pc, the ratio is $(10^6)^{3/2} = 10^9$.

a fixed timestep tuned for the smallest orbit makes the largest orbits enormously expensive. tuned for the largest, the smallest blow up.

## the Aarseth timestep formula

the standard adaptive-timestep formula in collisional N-body:

$$\Delta t_i = \eta \sqrt{\frac{\lvert \mathbf{a}_i\lvert }{\rvert\dddot{\mathbf{r}}_i\rvert}}$$

where $\eta \sim 0.02$ is a tuning parameter and $\dddot{\mathbf{r}}_i$ is the **second derivative of acceleration** (snap). geometric meaning: $\Delta t$ scales with the local dynamical timescale of particle $i$. close encounters have huge $\dddot{\mathbf{r}}$, hence tiny $\Delta t$.

variants use different combinations of $\mathbf{a}$, $\dot{\mathbf{a}}$ (jerk), $\ddot{\mathbf{a}}$ (snap), $\dddot{\mathbf{r}}$ (crackle), each tuned for a particular order of integrator.

## individual timesteps

each particle $i$ has its own $\Delta t_i$. the integrator advances the *single particle with the smallest current $t_i + \Delta t_i$*. between timesteps, the others are predicted forward via Taylor expansion (using their stored derivatives).

```python
# pseudo-code
while t < t_end:
    i = argmin(t_arr + dt_arr)              # most-overdue particle
    # predict all other particles' positions to time t_arr[i] + dt_arr[i]
    r_pred = r_arr + v_arr * (t_arr[i] + dt_arr[i] - t_arr) + ...
    # compute force on particle i using predicted positions
    a_new = compute_force(i, r_pred)
    # update particle i with Hermite scheme
    r_arr[i], v_arr[i] = hermite_correct(...)
    # update its individual timestep
    t_arr[i] += dt_arr[i]
    dt_arr[i] = aarseth_dt(a_new, jerk_new)
```

each particle integrates at its own pace. this is the architecture of NBODY6 and friends.

## block timesteps

for cache and parallelism, restrict $\Delta t_i$ to $h_{\rm max} / 2^k$ for integer $k$. then particles with the same level synchronize. only the most-active block (smallest $\Delta t$) advances each round. ensures particles can be integrated in batches of correlated levels.

this is **block timestepping**: the workhorse of cosmological GADGET runs and similar.

## the energy diagnostic gets messy

with adaptive individual timesteps, "the energy at time $t$" requires synchronized predictions of all particles. the cost is non-negligible. typical compromise: only check $E$ at uniform output snapshots, not every timestep.

## regularization - a different trick

for very close binaries, even adaptive timestepping is too slow. use a **change of variables** that removes the $1/r$ singularity:

- **Kustaanheimo-Stiefel (KS) regularization**: 4D coordinates that turn the binary into a 4D harmonic oscillator. exact, no timestep penalty
- **Mikkola-Aarseth chain regularization**: generalizes to triplets and chains of close particles
- **Burrau-Aarseth time transformation**: $\tau$ such that close encounters are stretched in $\tau$

regularization is the trick that lets NBODY6 simulate globular clusters with binaries 6 orders of magnitude smaller than the cluster scale.

## astrophysics use cases

- **planetary systems with multiple time scales** (Mercury at 88 days, Pluto at 248 years)
- **globular cluster N-body** with close binaries
- **galactic-center dynamics**: stars near Sgr A* have orbits ~hours, the cluster has Gyr timescales
- **stellar core collapse phases**: the core dynamical time becomes very small
- **planet formation simulations**: planetesimals from km to thousands of km

## what the exam exercise glosses over

the exam template's Pythagorean 3-body integration uses *fixed* $h = 10^{-5}$. this is dictated, but it works because:
- only 3 particles
- short integration ($t_{\rm end} = 5$, a few crossing times)
- fixed $h$ is small enough to handle the (eventual) close encounter

a real Pythagorean 3-body integrator (Burrau 1913, Szebehely & Peters 1967) uses regularization or adaptive timesteps. the modern standard for this exact problem is the **Brutus** code (Boekholt & Portegies Zwart 2015), which integrates with arbitrary precision arithmetic to track the chaotic divergence to >100 significant figures.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Adaptive step size|500](https://commons.wikimedia.org/wiki/Special:FilePath/Periodic_3-body_RKF_Integration.gif?width=600)
*3-body numerical simulation showcasing the benefit of using a Runge-Kutta integrator that can estimate error* ([Commons file page](https://commons.wikimedia.org/wiki/File:Periodic_3-body_RKF_Integration.gif), Mgolden96, CC BY-SA 4.0, as used on the Wikipedia article [Adaptive step size](https://en.wikipedia.org/wiki/Adaptive_step_size))

- **Adaptive step size**. "In mathematics and numerical analysis, an adaptive step size is used in some methods for the numerical solution of ordinary differential equations (including the special case of numerical integration) in order to control the errors of the method and to ensure stability properties such as A-stability. Using an adaptive stepsize is of particular importance when there is a large variation in the size of the derivative." ([Wikipedia](https://en.wikipedia.org/wiki/Adaptive_step_size))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Adaptive step size control]]
- [[Astrophysical N-body problem formulation]]
- [[Fourth-order Hermite predictor-corrector]]
- [[Collisional vs collisionless N-body]]
- [[The Pythagorean three-body problem]]
- [[Mathematical_Numerical_Methods_MOC]]



## Linked References

- [[Collisional vs collisionless N-body]]
- [[The Pythagorean three-body problem]]
- [[Mathematical_Numerical_Methods_MOC]]


