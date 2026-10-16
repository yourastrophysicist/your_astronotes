---
layout: "default"
title: "Equivalent evolutionary phase EEP"
---
the **equivalent evolutionary phase (EEP)** is an index along a stellar evolution track that labels *where the star is in its life* rather than how old or how massive it is. EEP 202 on a $0.8\,M_\odot$ track and EEP 202 on a $1.5\,M_\odot$ track are at the same evolutionary milestone, even though their ages differ by gigayears. introduced in its modern form by dotter (2016) for the MIST grids.

## core physical intuition

stars of different mass live on wildly different clocks, so interpolating between tracks at fixed *age* mixes a main-sequence star with a subgiant and produces nonsense near the turnoff. interpolating at fixed *EEP* mixes like with like.

construction (dotter 2016):
* **primary EEPs**: physically defined milestones, e.g. ZAMS, intermediate-age MS, TAMS (central hydrogen exhausted), base of the RGB, RGB tip
* **secondary EEPs**: points placed between primaries at equal "metric distance" along the track in the HR diagram, so that each segment is uniformly sampled

the actual integer values are irrelevant. the EEP is only an interpolation index.

## two different jobs

in an isochrone fitter the EEP does two things, with different requirements.

**1. as a prior coordinate.** we want an IMF prior on initial mass $\mathcal{M}$ but we sample in EEP $\mathcal{E}$. change of variables:

$$p(\mathcal{E}) = p(\mathcal{M}) \left| \frac{\partial \mathcal{M}}{\partial \mathcal{E}} \right|$$

this is exact for *any* monotonic index, physics-based or not. with a chabrier IMF $\xi$:

$$P(\mathcal{E}) \propto \xi(M_\mathrm{ini}) \left| \frac{dM_\mathrm{ini}}{d\mathcal{E}} \right|$$

the jacobian is pre-computed by finite differences along the EEP axis. (see [[Salpeter Kroupa Chabrier IMFs]])

**2. as an interpolation coordinate.** a stronger requirement: a fixed $\mathcal{E}$ must mean the same evolutionary state at every age and metallicity, otherwise interpolating along $\log\tau$ and [Fe/H] blends unlike stars. a plain mass-sorted row index does *not* guarantee this, because the turnoff moves to lower mass with age: one index can be a dwarf on a young isochrone and a subgiant on an old one.

## how the five grids get their EEPs

| grid | EEP provenance | note |
| :--- | :--- | :--- |
| MIST | phase-based | native dotter (2016) EEPs |
| PARSEC | translated | own phase labels mapped linearly onto the MIST scheme within each phase block |
| Dartmouth | compact | its own native EEPs |
| BaSTI | mass index | no EEPs shipped; ~2000 mass points per isochrone, fine enough that the index tracks phase smoothly |
| YaPSI | reconstructed | only ~70 mass points, too coarse; EEPs rebuilt from the tabulated central hydrogen fraction $X_c$ |

the YaPSI reconstruction anchors four primaries: ZAMS at $X_c = X_{c,\mathrm{init}}$, an intermediate point at $X_c = 0.3$, TAMS at $X_c \simeq 0$, and the base of the RGB at the first $T_\mathrm{eff}$ minimum past the turnoff. secondaries are spaced so adjacent EEPs differ by $\lesssim 0.03$ dex in $\log L$ and $\log T_\mathrm{eff}$ (~200 points per track).

## where a mass index breaks

the mass-sorted index fails at the **convective-core hook** of intermediate-mass stars ($\sim 1.5$–$2.5\,M_\odot$, ages $\sim 0.5$–$2$ Gyr). there the whole rise to the turnoff is squeezed into $\sim 10^{-3}\,M_\odot$, and linear interpolation clips the sharp corner:

* error $\sim 1.1\%$ in $T_\mathrm{eff}$ and $\sim 2.7\%$ in $L$, even at BaSTI's resolution
* denser sampling does not help: the error is set by the *curvature* of the corner, not the node count
* a phase-based EEP renders the same feature as a smooth dome, roughly 25× more accurate (0.04% and 0.17%)

held-out test (drop a node, rebuild it from its neighbours): all coordinates agree at the few-per-cent level in the median, but the 95th-percentile luminosity error reaches ~18% on the fastest-evolving nodes. see [[Linear interpolation]] for why curvature is the enemy.

## see also

- [[Stellar_Astrophysics_MOC]]
- [[Isochrones and isochrone fitting]]
- [[Stellar evolutionary phases on the CMD]]
- [[Main sequence turn-off as age indicator]]
- [[Subgiant branch SGB]]
- [[Stellar model grid systematics and the inter-grid floor]]
- source: 2610.01931-astro.ph
