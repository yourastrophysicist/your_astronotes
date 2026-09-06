---
layout: default
name: Isochrones and isochrone fitting
description: theoretical loci of coeval stars at fixed age and metallicity, the modern grids (PARSEC, DSEP, BaSTI), and how they are fit to cluster CMDs
---

an **isochrone** is the locus, in either the [HR diagram](../../02_Zettel/Theory/HR diagram.html) or its observational CMD projection, of stars that share the same *age* and *initial chemical composition* but cover the full range of *initial masses*. it is the natural model for a coeval, chemically homogeneous stellar population and therefore the workhorse comparison object for [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html).

construction. starting from a grid of stellar evolution tracks $(L(t,M), T_\mathrm{eff}(t,M))$ for many initial masses $M$ at fixed initial composition $(Y, [\mathrm{Fe}/\mathrm{H}], [\alpha/\mathrm{Fe}])$, an isochrone at age $t$ is constructed by interpolating across tracks at constant $t$. the result is a curve in $(\log L, \log T_\mathrm{eff})$ parametrised by $M$, running from the un-evolved low-mass end of the MS through the TO, SGB, RGB, HB or RC, AGB, and (in some grids) the white dwarf cooling sequence. each point along the curve corresponds to a star of specific initial mass that is *currently* in the corresponding evolutionary state at age $t$.

to compare to a CMD, the theoretical $(\log L, \log T_\mathrm{eff})$ must be transformed to *photometric magnitudes and colours* via a stellar atmosphere library (the **bolometric correction tables**). this step uses synthetic spectra (PHOENIX, MARCS, ATLAS9 / castelli-kurucz, koester WD atmospheres) integrated with the chosen filter-system transmission curves to produce $M_\lambda(T_\mathrm{eff}, \log g, [\mathrm{Fe}/\mathrm{H}])$. atmosphere libraries are themselves a major systematic uncertainty, especially on the cool RGB and at high metallicity.

modern public isochrone grids:

- **PARSEC** (padova, bressan et al. 2012) covers $0.09 \leq M/M_\odot \leq 350$, $-2 \leq [\mathrm{M}/\mathrm{H}] \leq +0.7$, includes TP-AGB and pre-MS, broad photometric system support. the standard padova grid for the milone group.
- **DSEP** (dartmouth, dotter et al. 2008) optimised for old, metal-poor populations including multiple populations in globular clusters with custom $[\alpha/\mathrm{Fe}]$ and helium variants.
- **BaSTI** (bag of stellar tracks and isochrones, pietrinferni et al.) extensively used for HB and post-HB modelling, includes $\alpha$-enhanced and scaled-solar grids with diffusion options.
- **MIST** (MESA isochrones and stellar tracks, choi et al. 2016) built from the open-source MESA code, transparent and reproducible.
- **YY** (yi et al.), **STAREVOL**, and **Geneva** are also widely used.

what isochrone fitting actually solves. given a cluster CMD with measured magnitudes $m_i$ and colours $c_i$, fit the four parameters
$$ \theta = (t, [\mathrm{Fe}/\mathrm{H}], (m-M)_0, E(B-V)) $$
by minimising a likelihood that compares the data to a *shifted, reddened isochrone*:
$$ M_V = m_V - (m-M)_0 - A_V, \quad (B-V)_0 = (B-V) - E(B-V) $$
with $A_V \approx 3.1 \, E(B-V)$. priors come from independent constraints: $[\mathrm{Fe}/\mathrm{H}]$ from spectroscopy of cluster members; $(m-M)_0$ from gaia parallaxes for nearby clusters or RR Lyrae for GCs; $E(B-V)$ from dust maps (schlegel, schlafly, planck). degeneracies are real: the [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.html) couples $t$ and $[\mathrm{Fe}/\mathrm{H}]$, and a *reddening-distance degeneracy* couples $E(B-V)$ and $(m-M)_0$ along the reddening vector in the CMD.

three philosophies of fit:

(1) **chi-by-eye / morphological matching.** overlay isochrones for a small grid of $(t, [\mathrm{Fe}/\mathrm{H}])$ at the priorised $(m-M)_0$ and $E(B-V)$, pick the one that best reproduces TO, SGB, RGB and HB simultaneously. surprisingly robust for clean GC CMDs.

(2) **chi-square / hess-diagram fitting.** bin the CMD into a 2D histogram (a *hess diagram*) and compare to a synthetic hess diagram built by sampling the isochrone with the IMF and convolving with the photometric error model. minimises pixel-wise residuals. used in PHAT, DOLPHIN, MATCH (dolphin 2002).

(3) **bayesian inference.** explicit likelihood $\mathcal{L}(\theta | \mathrm{data})$ marginalised over per-star nuisance parameters (binarity, photometric errors, contamination), sampled via MCMC. modern packages: BASE-9 (von hippel et al.), spisea, isochrones.py.

key subtleties. the **mass function** matters: an isochrone is only a curve, but the *density of stars along it* is set by IMF $\xi(M)$ times the time the star spends per unit luminosity, $|dt/dL|$. the latter automatically populates short-lived phases (TO hook, RGB tip, HB) sparsely and long-lived phases (lower MS, lower RGB) densely. **binarity** offsets stars by up to $0.75$ mag in $V$, producing a parallel binary sequence. **differential reddening** broadens features in the colour direction. **photometric incompleteness** at faint magnitudes biases TO determination if not modelled.

the result of a successful isochrone fit is the *simultaneous* determination of cluster age, metallicity, distance, and reddening, with internal consistency checks from the multiple loci on the CMD (TO, RGB, HB, WD). for the milone group's high-precision HST work on multiple populations, isochrone fitting is the workhorse tool that converts photometric splits into helium and CNO abundance differences between sub-populations.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
- [Main sequence turn-off as age indicator](../../02_Zettel/Theory/Main sequence turn-off as age indicator.html)
- Cluster age from main sequence turn-off
- Distance modulus from CMD
- [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
