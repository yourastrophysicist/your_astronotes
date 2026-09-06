---
layout: default
title: "Linear vs nonlinear regime"
---

cosmological perturbations begin **linear** ($\delta \ll 1$, growing as $\delta \propto a$) but eventually become **non-linear** ($\delta \gg 1$, collapsing into bound structures). the transition + non-linear regime is where galaxies + clusters form.

## the criterion

linear perturbations satisfy:
$$\rho(\vec x) = \bar\rho(t)[1 + \delta(\vec x, t)], \quad |\delta| \ll 1$$

linear theory predicts evolution by ODEs (see [Perturbations in an expanding universe](../../02_Zettel/Theory/Perturbations in an expanding universe.md)). evolution is solvable analytically.

once $\delta \sim 1$, **non-linear effects** dominate. linear theory **breaks down**. need full N-body simulations or analytic approximations.

## the linear regime

valid for:
- **CMB** at $z = 1100$: $\delta \sim 10^{-5}$. very linear.
- **large scales today** ($\lambda > 50$ Mpc): $\delta \lesssim 0.1$, linear.
- **early universe**: all perturbations linear.

linear theory predicts:
- **CMB anisotropy power spectrum** $C_\ell$.
- **matter power spectrum** $P(k, z)$ on large scales.
- **growth factor** $D(z)$.

these are pinned down to $\sim 1\%$ precision by Planck + DES + DESI.

## the non-linear regime

happens for:
- **collapsed structures**: galaxies, clusters, halos. $\delta > 100$.
- **small scales today** ($\lambda < 10$ Mpc): $\delta \gtrsim 1$, non-linear.
- **late-time evolution**: structures continue to grow non-linearly.

non-linear theory predicts:
- **halo mass function** (Press-Schechter, Sheth-Tormen, modified).
- **galaxy clustering** at $\lesssim 10$ Mpc.
- **cosmic web structure** (filaments, voids).
- **galaxy cluster properties**.

## the transition: spherical collapse

a useful **toy model**: a spherical overdensity collapses self-similarly. the linear-extrapolated overdensity at the moment of collapse is:
$$\delta_c = 1.686$$
(in matter-only $\Lambda$CDM).

so when **linear** $\delta$ reaches $1.686$, the **actual** $\delta \to \infty$ (collapse).

see [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.md).

## Press-Schechter mass function

at any given $z$, the abundance of halos with $M > M_*$ is:
$$n(M, z)\,dM \propto \exp\!\left[-\frac{\delta_c^2}{2\sigma^2(M, z)}\right]$$

where $\sigma^2(M, z)$ is the linear matter variance on scale $M$. so the **fraction of mass above a given collapse threshold** depends on the spectrum + growth factor.

see [Press-Schechter halo mass function](../../02_Zettel/Theory/Press-Schechter halo mass function.md).

## N-body simulations

for full non-linear evolution, **N-body simulations** are essential:
- Millennium ($10^{10}$ particles).
- Bolshoi ($\sim 10^{10}$).
- IllustrisTNG, EAGLE, FIRE: include hydrodynamics + galaxy formation.

these reproduce observed galaxy + cluster + LSS statistics.

see [N-body simulations](../../02_Zettel/Theory/N-body simulations.md).

## the implications for observations

different observables probe different regimes:
- **CMB**: linear regime. measures primordial spectrum + cosmological parameters.
- **galaxy clustering at large scales** ($\lambda > 50$ Mpc): linear. BAO + RSD measurements.
- **galaxy clustering at small scales** ($\lambda < 10$ Mpc): non-linear. galaxy-halo connection, environment.
- **galaxy cluster abundance**: non-linear collapse. constraints on $\sigma_8$.
- **lensing**: probes both regimes via projected mass.

modern cosmological analyses combine **all** regimes: linear + non-linear, CMB + LSS + lensing + clusters. each constrains different parameter combinations + breaks degeneracies.

## see also

- [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.md)
- [Cosmological evolution of perturbations in the cosmic fluid](../../02_Zettel/Theory/Cosmological evolution of perturbations in the cosmic fluid.md)
- [Perturbations in an expanding universe](../../02_Zettel/Theory/Perturbations in an expanding universe.md)
- [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.md)
- [Press-Schechter halo mass function](../../02_Zettel/Theory/Press-Schechter halo mass function.md)
- [N-body simulations](../../02_Zettel/Theory/N-body simulations.md)
- [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md)
- [Matter power spectrum and BAO](../../02_Zettel/Theory/Matter power spectrum and BAO.md)
- [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
