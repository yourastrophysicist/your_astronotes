---
layout: "default"
title: "Asteroseismic and eclipsing binary benchmark stars"
---
to validate a stellar-parameter code you need stars whose mass, radius and age are known by some *other* method. there are two standard families, and they are complementary: asteroseismic stars give all three quantities but are model-dependent; detached eclipsing binaries give model-independent mass and radius but no age.

## the two anchors

| | asteroseismic | detached eclipsing binaries |
| :--- | :--- | :--- |
| what is measured | oscillation frequencies | RV orbits + eclipse light curves |
| mass & radius | from stellar-interior modelling | dynamical / geometric |
| model dependence | **model-based** | **model-independent** |
| typical precision | ~5% mass, ~2% radius, ~15% age | ~1% mass, ~2% radius |
| age | yes | no independent age |
| main weakness | shares stellar-model assumptions with what you are testing | blended light of two stars in any broad-band photometry |

**asteroseismology.** sun-like stars ring with pressure modes. to first order the large frequency separation scales with mean density and the frequency of maximum power with surface gravity:

$$\Delta\nu \propto \sqrt{\bar\rho} \propto M^{1/2} R^{-3/2}, \qquad \nu_\mathrm{max} \propto g\, T_\mathrm{eff}^{-1/2} \propto M R^{-2} T_\mathrm{eff}^{-1/2}$$

the best benchmarks go beyond these scaling relations and fit *individual* mode frequencies, which probe the interior and therefore the age.

**detached eclipsing binaries.** kepler's laws plus double-lined radial velocities give both masses; eclipse durations and depths give both radii. no stellar model enters.

## the LACHESIS benchmark sample

241 stars (155 F, 65 G, 21 K), main sequence and subgiants:

* **76 asteroseismic**: kepler LEGACY sample (lund et al. 2017; silva aguirre et al. 2017) plus davies et al. (2016) planet hosts, as compiled by bétrisey et al. (2026). anchors mass **and** age. mostly F and G dwarfs (47 F, 27 G, 2 K)
* **165 detached EBs**: DEBCat (southworth 2015). anchors mass. 108 F, 38 G, 19 K



14 of the original 90 asteroseismic stars were dropped for gaia RUWE > 1.4 (see [[Unresolved binary flux contamination and Gaia RUWE]]).

## the asymmetry in practice

the ideal test would use the EB dynamical masses, since they are model-independent. but an EB's broad-band SED is the light of both stars, so it cannot be fed to a single-star isochrone fit. the EBs can only be fitted from spectroscopic $T_\mathrm{eff}$ and [Fe/H], which constrain mass weakly (recovery biased low by 6.7%, worse above $1.2\,M_\odot$ as the IMF prior takes over).

so the mass scale ends up being tested mainly against the *model-based* asteroseismic values. two consequences:

* comparing isochrone ages against asteroseismic ages is partly circular. the bias zero-point is not absolute
* the model-only quantity that escapes this circularity is the inter-grid scatter (see [[Stellar model grid systematics and the inter-grid floor]])

the EBs are still kept on purpose: as a dynamical-mass cross-check and as a stress test for binary contamination of the photometric radius.

## see also

- [[Stellar_Astrophysics_MOC]]
- [[Observational_Astrophysics_MOC]]
- [[Binary star orbits]]
- [[Unresolved binary flux contamination and Gaia RUWE]]
- Posterior calibration - coverage, pull and PIT
- [[Photometric age degeneracy on the main sequence]]
- source: 2610.01931-astro.ph
