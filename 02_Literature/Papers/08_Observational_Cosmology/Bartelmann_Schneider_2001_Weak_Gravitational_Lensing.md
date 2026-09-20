---
layout: "default"
title: "Bartelmann & Schneider (2001) — Weak Gravitational Lensing"
---
## Metadata
- **Authors**: Matthias Bartelmann, Peter Schneider
- **Year**: 2001
- **arXiv ID**: [arXiv:astro-ph/9912508](https://arxiv.org/abs/astro-ph/9912508)
- **ADS Bibcode**: `2001PhR...340..291B`
- **Journal**: *Physics Reports*, 340, 291
- **Sub-field**: astro-ph.CO
- **Key Observatory / Code**: comprehensive review of ground- and space-based weak-lensing survey methodology

---

## Executive Summary
This review develops the complete theoretical formalism of weak gravitational lensing by large-scale structure — the small, statistical distortion of distant galaxy images by the intervening matter distribution's gravitational tidal field — and its application to measuring the matter power spectrum, cluster masses, and cosmological parameters without requiring any assumption about the relationship between visible and dark matter. Because weak lensing responds only to the total (dark + baryonic) mass along the line of sight, it provides a mass-selected, bias-free probe of large-scale structure complementary to galaxy clustering and BAO.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: light rays from distant sources are deflected by the gravitational potential of intervening (foreground) mass concentrations, described in the weak-field, thin-lens approximation by the deflection angle
$$\hat{\alpha}(\vec{\xi}) = \frac{2}{c^2}\int \nabla_\perp\Phi\,dl$$
where $\Phi$ is the Newtonian gravitational potential of the lensing mass and the integral runs along the unperturbed light path.

**Convergence and shear**: the lens equation's Jacobian, linearized around a given line of sight, decomposes into an isotropic magnification (**convergence** $\kappa$) and an anisotropic distortion (**shear** $\gamma$):
$$A^{-1} = \begin{pmatrix}1-\kappa-\gamma_1 & -\gamma_2\\ -\gamma_2 & 1-\kappa+\gamma_1\end{pmatrix}, \qquad \kappa = \frac{\Sigma}{\Sigma_{\rm cr}}$$
where $\Sigma$ is the projected surface mass density and $\Sigma_{\rm cr} = \frac{c^2}{4\pi G}\frac{D_s}{D_l D_{ls}}$ is the critical surface density (a purely geometric quantity depending on the lens, source, and lens-source angular diameter distances $D_l, D_s, D_{ls}$).

**Cosmic shear power spectrum**: for weak lensing by the *large-scale structure* of the universe itself (rather than a single discrete lens), the observable shear correlation is related to the underlying 3D matter power spectrum $P_\delta(k)$ by a projection (Limber-approximation) integral along the line of sight:
$$C_\ell^{\kappa\kappa} = \int_0^{\chi_H} d\chi\,\frac{W^2(\chi)}{\chi^2}\,P_\delta\!\left(\frac{\ell}{\chi};\,\chi\right)$$
where $\chi$ is the comoving distance, $\chi_H$ the horizon distance, and $W(\chi)$ a lensing efficiency kernel that weights each foreground shell by the fraction of background source galaxies actually lensed by it:
$$W(\chi) = \frac{3}{2}\Omega_m H_0^2\,\frac{\chi}{a(\chi)}\int_\chi^{\chi_H}d\chi'\,n(\chi')\,\frac{\chi'-\chi}{\chi'}$$
with $n(\chi')$ the normalized comoving source-redshift distribution.

**Asymptotic checks**: for a source population entirely at a single redshift $\chi_s$ (delta-function $n(\chi')$), the lensing kernel simplifies to $W(\chi)\propto\chi(\chi_s-\chi)/\chi_s$ for $\chi<\chi_s$ and vanishes for $\chi>\chi_s$ — recovering the standard single-lens-plane geometric lensing efficiency; in the limit $\Omega_m\to0$, $W(\chi)\to0$ identically, since gravitational lensing by structure requires matter to source the tidal potential in the first place — confirming that the amplitude of the measured cosmic shear signal is directly proportional to $\Omega_m$ (in combination with the power-spectrum normalization $\sigma_8$), the basis for using cosmic shear as an $\Omega_m$-$\sigma_8$ cosmological probe.

---

## Observational Data & Methodology
- **Target / Sample**: review synthesizing early weak-lensing survey results (cluster mass reconstructions, first cosmic-shear detections circa 2000) and the underlying theoretical framework subsequently used by KiDS, DES, and HSC.
- **Instrument Setup**: wide-field optical imaging with sub-arcsecond, PSF-corrected shape measurement of background galaxies.
- **Reduction & Detrending Pipeline**: galaxy shape measurement with careful point-spread-function correction (a dominant systematic-error source), photometric redshift estimation of source galaxies to construct $n(\chi')$, and two-point shear correlation function or power spectrum estimation.

---

## Critical Findings & Scientific Impact
1. Establishes weak lensing as a geometrically clean, bias-free cosmological probe, sensitive to the total matter distribution rather than any particular tracer population.
2. Provides the theoretical foundation for essentially all subsequent cosmic-shear cosmology (KiDS, DES, HSC, and the ongoing Euclid and LSST/Rubin surveys), including the joint $\Omega_m$-$\sigma_8$ ("$S_8$") constraint now compared against CMB-inferred values as an independent test of $\Lambda$CDM.
3. Open problem flagged even in this early review and still unresolved: precise, unbiased shape measurement in the presence of a spatially and temporally varying PSF remains the dominant systematic-error floor for weak-lensing cosmology, motivating continued development of shape-measurement algorithms and dedicated calibration simulations (e.g. the GREAT challenges).

---

## Vault Cross-References
- Core Theory: [[Strong vs weak lensing]], [[Matter power spectrum and BAO]]
- Related: [[Friedmann equations with Lambda]]
- Map of Content: [[Observational_Cosmology_MOC]], [[Astrophysics_of_Galaxies_MOC]]
