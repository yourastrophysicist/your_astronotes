---
layout: default
title: "Collisional vs collisionless N-body"
---

# Collisional vs collisionless N-body

two physical regimes of gravitational $N$-body dynamics that demand fundamentally different numerical strategies. the distinction is not about whether the particles literally collide; it is about whether *two-body* gravitational encounters significantly perturb each particle's orbit during the simulation.

## the relaxation timescale

for a system of $N$ particles, the timescale for two-body encounters to significantly redistribute energy:

$$t_{\rm relax} \approx \frac{N}{8 \ln N} \, t_{\rm cross}$$

where $t_{\rm cross}$ is the crossing time. with $\ln N$ called the Coulomb logarithm.

- $N = 10^4$ (small open cluster): $t_{\rm relax}/t_{\rm cross} \approx 140$ — relaxation matters within ~100 crossing times
- $N = 10^6$ (globular cluster): $\sim 1000$ crossing times
- $N = 10^{11}$ (galaxy): $\sim 10^9$ crossing times $\gg t_{\rm Hubble}$ — relaxation never happens during the lifetime of the universe

so:

- **collisional**: $N \lesssim 10^6$. relaxation is fast, two-body encounters drive the dynamics (energy equipartition, mass segregation, evaporation). every pair of particles matters
- **collisionless**: $N \gg 10^6$. each particle moves in the *smooth potential* of the rest. individual encounters average out

## simulation choice follows physics

different physics → different algorithm requirements:

### collisional N-body codes

target: globular clusters, dense star clusters, planetary systems, few-body problems.

requirements:
- **direct $O(N^2)$ force summation**: every pair counts
- **adaptive individual timesteps**: a binary needs $\Delta t = 10^{-6}$, the rest of the cluster needs $\Delta t = 10^{-2}$
- **regularization for close encounters**: change of variables (KS, Mikkola-Aarseth) to avoid singularities
- **high-order integrators**: Hermite 4th or 6th order

flagship codes: **NBODY6** (Aarseth), **NBODY7**, **starlab/kira**.

### collisionless N-body codes

target: galaxies, dark matter halos, cosmological large-scale structure.

requirements:
- **fast force evaluation**: $O(N \log N)$ tree codes or $O(N)$ FMM. $O(N^2)$ is infeasible
- **softening**: artificial $\epsilon$ in the force law smooths out two-body encounters that would be unphysical (since each particle represents many real ones)
- **uniform timestep** (mostly): smooth potential = smooth dynamics = no need for $10^6\times$ adaptive Δt
- **leapfrog suffices**: 2nd-order, symplectic, energy-conserving for the long times needed

flagship codes: **GADGET**, **AREPO**, **PKDGRAV**, **RAMSES**.

## softening, in detail

in collisionless simulations, particles are mock representations of fluid elements. each "particle" stands for ~$10^4$ to $10^9$ real stars or DM particles. close approaches between mock particles do not represent real physical events, so we replace

$$\mathbf{a}_{\rm Newton} = -\frac{GM}{r^2}\hat{\mathbf{r}}$$

with the **softened** form

$$\mathbf{a}_{\rm soft} = -\frac{GM}{(r^2 + \epsilon^2)^{3/2}} \mathbf{r}$$

with $\epsilon$ the **softening length**, chosen as the smallest scale we want to resolve. typical values:
- galaxy simulation: $\epsilon \sim 100$ pc to 1 kpc
- cosmological: $\epsilon \sim 10$ kpc comoving

softening prevents close-encounter blowups and keeps the dynamics in the collisionless regime where it should be. the $\epsilon$ is a deliberate physics choice, not a numerical hack.

## why collisional codes don't soften

in a globular cluster, two stars *can* really come within an AU. the resulting close encounter or binary capture is *physics, not error*. softening would erase real dynamics. so collisional codes set $\epsilon = 0$ and pay the algorithmic price (regularization, individual timesteps, expensive integrators).

## the boundary regime ($N \sim 10^7$)

systems with $N \sim 10^7$ — the inner halos of galaxies, globular cluster ensembles in a galactic halo — sit at the boundary. neither pure collisional nor pure collisionless. specialized hybrid codes (FROST, P3T) treat close-encounter pairs collisionally and the bulk collisionlessly.

## astrophysics applications

| system | $N$ | regime | code style |
|---|---|---|---|
| solar system | 9 | collisional (3-body) | high-order, regularized |
| 3-body Pythagorean (exam) | 3 | collisional | midpoint or higher |
| open star cluster | 1000 | collisional | direct + Hermite |
| globular cluster | $10^5$-$10^6$ | collisional | NBODY6 |
| dwarf galaxy | $10^7$-$10^8$ | borderline | tree + close-encounter handling |
| Milky Way | $10^{11}$ | collisionless | tree + softening |
| cosmological box | $10^{10}$-$10^{12}$ | collisionless | tree-PM, softening |

## the exam connection

the Pythagorean three-body problem of the exam template is squarely **collisional**: $N = 3$, no softening, direct force summation, the close-encounter dynamics is *the* answer. but it is small enough that even a fixed-step midpoint integrator works for short integrations.

## see also

- [Astrophysical N-body problem formulation](../../02_Zettel/Theory/Astrophysical N-body problem formulation.md)
- [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.md)
- [Fourth-order Hermite predictor-corrector](../../02_Zettel/Theory/Fourth-order Hermite predictor-corrector.md)
- [Adaptive timesteps near close encounters](../../02_Zettel/Theory/Adaptive timesteps near close encounters.md)
- [Energy conservation as a diagnostic](../../02_Zettel/Theory/Energy conservation as a diagnostic.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
