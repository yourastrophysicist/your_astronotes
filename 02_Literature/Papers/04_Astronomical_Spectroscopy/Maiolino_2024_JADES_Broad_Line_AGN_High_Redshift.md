---
layout: "default"
title: "Maiolino et al. (2024) — JADES: The Diverse Population of Infant Black Holes at 4 < z < 11"
---
## Metadata
- **Authors**: Roberto Maiolino et al. (JADES Collaboration)
- **Year**: 2024 (arXiv preprint 2023)
- **arXiv ID**: [arXiv:2308.01230](https://arxiv.org/abs/2308.01230)
- **ADS Bibcode**: `2024A&A...691A.145M`
- **Journal**: *A&A*, 691, A145
- **Sub-field**: astro-ph.GA / astro-ph.SR
- **Key Observatory / Code**: JWST/NIRSpec, JADES (JWST Advanced Deep Extragalactic Survey)

**Provenance note**: the original enrichment brief described this paper generically as "JWST NIRSpec spectroscopy of early galaxies and low-metallicity broad-line AGN at z > 10"; the verified title/topic is the JADES infant-black-hole census across $4<z<11$, including the GN-z11 broad-line AGN and twelve additional broad-H$\alpha$ systems.

---

## Executive Summary
Using deep JWST/NIRSpec spectroscopy from the JADES survey, Maiolino et al. identify twelve new broad-line active galactic nuclei at $4\lesssim z\lesssim 11$ (in addition to the previously reported GN-z11), each selected via detection of a broadened Balmer (H$\alpha$) emission component superposed on narrower host-galaxy line emission. The inferred black-hole masses ($M_{\bullet}\sim10^6$–$10^8\,M_\odot$) and bolometric luminosities place a subset of these systems well above the local $M_\bullet$–$M_\star$ relation, indicating that supermassive black holes in the first billion years of cosmic history can be overmassive relative to their host galaxy's stellar mass — a direct empirical constraint on black-hole seeding and early growth scenarios.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: a broadened permitted emission line (H$\alpha$) in an AGN spectrum originates from gas in the broad-line region (BLR) orbiting close to the central black hole at velocities set by the local gravitational potential, enabling a **single-epoch virial black-hole mass estimate**:
$$M_\bullet = f_\bullet\,\frac{R_{\mathrm{BLR}}\,\mathrm{(FWHM)}^2}{G}$$
where:
- $R_{\mathrm{BLR}}$ is the BLR radius, estimated via the radius-luminosity relation calibrated from local reverberation mapping (see [[Peterson_2014_SMBH_Reverberation_Mapping]]), $R_{\mathrm{BLR}}\propto L^{0.5}$
- $\mathrm{FWHM}$ is the full width at half maximum of the broad H$\alpha$ component, tracing the BLR gas orbital velocity
- $f_\bullet$ is a virial normalization factor (order unity, calibrated against local reverberation-mapped AGN) encoding the unknown BLR geometry/inclination

**Balmer decrement and dust/gas diagnostics**, used to separate genuine AGN broad-line emission from star-formation-driven or outflow-driven line broadening:
$$\frac{F(\mathrm{H}\alpha)}{F(\mathrm{H}\beta)} = 2.86 \times 10^{0.4\,E(B-V)\,[k(\mathrm{H}\beta)-k(\mathrm{H}\alpha)]}$$
where $2.86$ is the intrinsic Case B recombination ratio and $k(\lambda)$ the assumed dust attenuation curve.

**$M_\bullet$–$M_\star$ offset**: comparing the virial $M_\bullet$ estimate to the host stellar mass $M_\star$ (from SED fitting of the underlying continuum, see [[Stellar population synthesis]]) against the local relation
$$\log(M_\bullet/M_\star)_{\mathrm{local}} \approx -2.5 \;\; (\text{Kormendy \& Ho 2013 normalization})$$
several JADES sources show $M_\bullet/M_\star$ ratios $1$–$2$ orders of magnitude above this local value.

**Asymptotic checks**: in the limit that the observed broad component is entirely due to star-formation-driven outflows rather than a virialized BLR (an alternative interpretation the paper explicitly tests against), the inferred "$M_\bullet$" would carry no physical black-hole-mass meaning — the paper's diagnostic use of line ratios, line widths, and the absence of extended spatial structure in the broad component is designed to disfavor this alternative for the reported AGN candidates.

---

## Observational Data & Methodology
- **Target / Sample**: JADES survey fields (GOODS-S/N), broad-H$\alpha$-selected AGN candidates at $4\lesssim z\lesssim11$.
- **Instrument Setup**: JWST/NIRSpec multi-object and micro-shutter-assembly spectroscopy, medium/high spectral resolution ($R\sim1000$–$2700$).
- **Reduction & Detrending Pipeline**: multi-component (narrow + broad) emission-line profile decomposition, dust-correction via Balmer decrement, and SED-based stellar mass estimation from the underlying continuum.

---

## Critical Findings & Scientific Impact
1. Confirms a numerous population of broad-line, actively accreting black holes already in place within the first $\sim1$ Gyr of cosmic history, substantially expanding the known high-redshift AGN census beyond pre-JWST quasar surveys (which probed only the rarest, most luminous quasars).
2. Several sources lie significantly above the local $M_\bullet$–$M_\star$ relation, favoring "heavy seed" (direct-collapse black hole) formation channels over pure light-seed (Pop III remnant) growth for at least a subset of the early black-hole population.
3. Open problem: virial mass estimates extrapolated from low-redshift BLR radius-luminosity calibrations carry substantial systematic uncertainty when applied to these low-metallicity, rapidly assembling systems — an active caveat driving continued JWST reverberation-mapping feasibility studies at high redshift.

---

## Vault Cross-References
- Core Theory: [[SMBH Reverberation Mapping]], [[AGN and supermassive black holes]]
- Related: [[Stellar population synthesis]], [[Age dating from the WD luminosity function]]
- Map of Content: [[Astronomical_Spectroscopy_MOC]], [[Astrophysics_of_Galaxies_MOC]], [[Observational_Cosmology_MOC]]
