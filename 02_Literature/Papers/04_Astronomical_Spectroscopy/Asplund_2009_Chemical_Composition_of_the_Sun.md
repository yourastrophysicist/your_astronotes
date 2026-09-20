---
layout: "default"
title: "Asplund, Grevesse, Sauval & Scott (2009) — The Chemical Composition of the Sun"
---
## Metadata
- **Authors**: Martin Asplund, Nicolas Grevesse, A. Jacques Sauval, Pat Scott
- **Year**: 2009
- **arXiv ID**: [arXiv:0909.0948](https://arxiv.org/abs/0909.0948)
- **ADS Bibcode**: `2009ARA&A..47..481A`
- **Journal**: *ARA&A*, 47, 481
- **Sub-field**: astro-ph.SR
- **Key Observatory / Code**: 3D, time-dependent radiative-hydrodynamic (RHD) solar atmosphere models

---

## Executive Summary
This review re-derives the solar photospheric elemental abundances using a realistic three-dimensional, time-dependent hydrodynamic model of the solar atmosphere in place of the classical one-dimensional, hydrostatic, mixing-length model atmospheres used for decades. The 3D treatment self-consistently captures convective granulation and its associated temperature and velocity inhomogeneities, which systematically affect the strengths of temperature-sensitive spectral lines. The revision yields significantly lower abundances of C, N, O, and Ne than the widely used previous (Grevesse & Sauval 1998) values — a shift large enough to reopen the "solar modeling problem": standard solar interior models computed with the new, lower heavy-element abundance $Z$ underpredict the sound-speed profile inferred from helioseismology.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: local thermodynamic equilibrium (LTE) or non-LTE radiative transfer through a granulation-resolving 3D RHD atmosphere, with elemental abundances $\epsilon_X = \log_{10}(N_X/N_H) + 12$ determined by matching synthetic to observed line profiles/equivalent widths.

**Equivalent width and abundance**, via the curve-of-growth relation linking a measured line equivalent width $W_\lambda$ to the column density of absorbers:
$$W_\lambda = \int \left(1 - \frac{F_\lambda}{F_c}\right)\, d\lambda \;\;\propto\;\; N_X\, f_{\mathrm{osc}}\, \lambda^2$$
where $N_X$ is the column density of the absorbing species, $f_{\mathrm{osc}}$ the transition oscillator strength, and $F_\lambda/F_c$ the line-to-continuum flux ratio (see [[Voigt profile]] for the microscopic line-shape function entering $F_\lambda$).

**3D granulation correction**: the emergent line strength depends non-linearly on the local temperature via the Saha-Boltzmann population factors and the Planck function's temperature sensitivity; because hot, upwelling granule centers and cool, downwelling intergranular lanes contribute unequally to a spatially unresolved disk-integrated spectrum, the 3D-average line strength differs systematically from the strength computed in a 1D atmosphere with the same mean temperature structure:
$$\langle W_\lambda\rangle_{\mathrm{3D}} \neq W_\lambda(\langle T\rangle_{\mathrm{1D}})$$
This inequality — a consequence of Jensen's inequality applied to the non-linear temperature dependence of the line source function — is the physical origin of the abundance revision.

**Metallicity and the solar modeling problem**: the total heavy-element mass fraction
$$Z = 1 - X - Y$$
(with $X, Y$ the hydrogen and helium mass fractions) decreased from $Z\approx0.019$ (older compilations) to $Z\approx0.0134$ under the new abundances, directly lowering the opacity $\kappa(\rho,T,Z)$ in the solar radiative-zone energy-transport equation
$$\frac{dT}{dr} = -\frac{3\kappa\rho L}{16\pi a c r^2 T^3}$$
(see [[Stellar Structure Equations]]), which shifts the predicted sound-speed profile $c_s^2 = \Gamma_1 P/\rho$ away from the helioseismically inferred profile.

**Asymptotic checks**: in the limit of a strictly 1D, horizontally homogeneous atmosphere (no granulation), the 3D correction vanishes identically and the classical abundances are recovered — confirming the revision's physical origin is the granulation-induced temperature inhomogeneity, not a change in atomic input data.

---

## Observational Data & Methodology
- **Target / Sample**: the Sun — the disk-integrated photospheric spectrum, used as the fundamental abundance reference for essentially all stellar and Galactic chemical evolution studies.
- **Instrument Setup**: high-resolution solar flux atlases (ground- and space-based) spanning UV through IR.
- **Reduction & Detrending Pipeline**: line-by-line spectral synthesis with the 3D RHD model, cross-checked for consistency against center-to-limb variation and line-profile asymmetries (bisectors) — diagnostics only a granulation-resolving model can reproduce simultaneously with the correct equivalent width.

---

## Critical Findings & Scientific Impact
1. Revises solar C, N, O, Ne abundances downward by $\sim0.1$–$0.2$ dex relative to Grevesse & Sauval (1998), establishing the modern reference abundance scale used throughout stellar spectroscopy.
2. Reopened the unresolved "solar abundance problem": standard solar models built with the new $Z$ no longer match the helioseismic sound-speed profile as well as older, higher-$Z$ models did.
3. Open problem: reconciling the low photospheric metal abundances with helioseismology remains unresolved; proposed resolutions include revised opacities, accretion of metal-poor material, or residual systematics in the 3D RHD modeling — an active area of astro-ph.SR research (see also Asplund et al. 2021, arXiv:2105.01661, for updated abundances).

---

## Vault Cross-References
- Core Theory: [[Stellar Structure Equations]], [[Voigt profile]], [[Curve of growth abundance analysis]]
- Related: [[Atmospheric radiative transfer equation and Voigt profile]]
- Map of Content: [[Astronomical_Spectroscopy_MOC]], [[Stellar_Astrophysics_MOC]]
