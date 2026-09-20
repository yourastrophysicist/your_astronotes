---
layout: "default"
title: "Schechter (1976) — An Analytic Expression for the Luminosity Function of Galaxies"
---
## Metadata
- **Authors**: Paul Schechter
- **Year**: 1976
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: `1976ApJ...203..297S`
- **Journal**: *ApJ*, 203, 297
- **Sub-field**: astro-ph.GA
- **Key Observatory / Code**: analytic fit motivated by, and calibrated against, galaxy cluster/field photometric catalogs

---

## Executive Summary
Schechter proposes a simple three-parameter analytic function that accurately fits the observed distribution of galaxy luminosities (the galaxy luminosity function) across the full range from faint dwarfs to the brightest cluster galaxies, combining a power-law faint-end slope with an exponential bright-end cutoff. The **Schechter function** remains the standard parametrization for galaxy (and, with reinterpreted parameters, dark-matter halo and quasar) luminosity/mass functions throughout extragalactic astrophysics.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: motivated by the approximately self-similar, hierarchical character of galaxy formation, the number density of galaxies per unit luminosity interval is proposed to follow a power law modulated by an exponential cutoff at a characteristic luminosity scale $L^*$.

**Schechter luminosity function**:
$$\Phi(L)\,dL = \Phi^*\left(\frac{L}{L^*}\right)^{\alpha}\exp\left(-\frac{L}{L^*}\right)\frac{dL}{L^*}$$
where:
- $\Phi^*$ is the overall normalization (number density per unit volume, at $L\sim L^*$)
- $L^*$ is the characteristic luminosity marking the transition from power-law to exponential decline
- $\alpha$ is the faint-end power-law slope (typically $\alpha\sim-1$ to $-1.5$ for field galaxies, steeper/more negative for cluster dwarf populations)

**Equivalent magnitude-space form**, since $L/L^* = 10^{-0.4(M-M^*)}$:
$$\Phi(M)\,dM = 0.4\ln(10)\,\Phi^*\,10^{0.4(\alpha+1)(M^*-M)}\exp\left[-10^{0.4(M^*-M)}\right]\,dM$$

**Total number and luminosity density**, obtained by integrating $\Phi(L)$ over the full luminosity range, expressible in closed form via the incomplete Gamma function:
$$n_{\mathrm{tot}} = \int_0^\infty \Phi(L)\,dL = \Phi^*\,\Gamma(\alpha+1), \qquad \rho_L = \int_0^\infty L\,\Phi(L)\,dL = \Phi^* L^*\,\Gamma(\alpha+2)$$
where $\Gamma(x)$ is the Gamma function — the total number density integral converges only for $\alpha>-1$, while the luminosity density integral converges for $\alpha>-2$, so a sufficiently steep faint-end slope ($\alpha\le-1$) implies a formally divergent total galaxy number count, requiring an observationally or physically motivated low-luminosity truncation.

**Asymptotic regimes**:
- $L\ll L^*$: $\Phi(L)\to\Phi^*(L/L^*)^\alpha/L^*$, the pure power-law faint end — the regime probed by deep dwarf-galaxy and low-mass halo surveys.
- $L\gg L^*$: $\Phi(L)\to\Phi^*(L/L^*)^\alpha e^{-L/L^*}/L^*$, exponentially suppressed — explaining the observed rarity of extremely luminous galaxies (the bright-end cutoff) relative to a pure power law.
- $\alpha\to0$: recovers a purely exponential luminosity function with no faint-end power-law enhancement.

---

## Observational Data & Methodology
- **Target / Sample**: galaxy cluster and field photometric catalogs available in the mid-1970s, later refined by essentially every subsequent large redshift survey (CfA, 2dFGRS, SDSS, GAMA) and, at near-IR wavelengths, by targeted cluster imaging (see [[Schechter K-band luminosity function]]).
- **Instrument Setup**: N/A — analytic fitting function; observationally constrained via photometric survey number counts combined with redshift or cluster-membership information.
- **Reduction & Detrending Pipeline**: maximum-likelihood or $\chi^2$ fitting of $(\Phi^*, L^*, \alpha)$ to binned or unbinned galaxy number-density-vs-luminosity data, correcting for survey completeness and Malmquist/Eddington bias at the faint and bright ends respectively.

---

## Critical Findings & Scientific Impact
1. Provided the first physically motivated, broadly successful analytic description of the galaxy luminosity function shape, still in near-universal use nearly five decades later.
2. The same functional form, reinterpreted in terms of halo mass, underlies the theoretically motivated Press-Schechter formalism for the dark-matter halo mass function in hierarchical structure formation.
3. Open problem: the faint-end slope $\alpha$ and characteristic luminosity $L^*$ both evolve with redshift and environment (field vs. cluster), and the pure Schechter form under- or over-predicts number counts at the extreme faint and bright ends in some modern deep surveys, motivating double-Schechter and other extended parametrizations.

---

## Vault Cross-References
- Core Theory: [[Schechter K-band luminosity function]], [[Luminosity function definition]], [[UV luminosity function]]
- Related: [[NFW Dark Matter Halo Profile]]
- Map of Content: [[Astrophysics_of_Galaxies_MOC]]
