---
layout: "default"
title: "Kormendy & Ho (2013) — Coevolution (Or Not) of Supermassive Black Holes and Host Galaxies"
---
## Metadata
- **Authors**: John Kormendy, Luis C. Ho
- **Year**: 2013
- **arXiv ID**: [arXiv:1304.7762](https://arxiv.org/abs/1304.7762)
- **ADS Bibcode**: `2013ARA&A..51..511K`
- **Journal**: *ARA&A*, 51, 511
- **Sub-field**: astro-ph.GA / astro-ph.HE
- **Key Observatory / Code**: compilation/reanalysis of dynamically measured black-hole masses (stellar, gas, and maser kinematics) across nearby galaxies

---

## Executive Summary
Kormendy & Ho critically compile and reanalyze dynamically measured supermassive black-hole masses in nearby galaxies, refining the empirical scaling relations between black-hole mass $M_\bullet$ and host-galaxy bulge properties — most importantly the $M_\bullet$–$\sigma$ (velocity dispersion) relation. They argue that the tightest, most physically fundamental correlation is between $M_\bullet$ and the properties of the galaxy's classical bulge/spheroid component specifically (not the disk or the total stellar mass), and that black holes appear to correlate poorly or not at all with pseudobulges and pure disks — evidence against a universal, purely gravity-driven coevolution and toward a picture where mergers (which build classical bulges) are mechanistically linked to black-hole growth.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: black-hole mass is dynamically measured via the virial relation applied to spatially resolved stellar, gas, or maser kinematics within the black hole's sphere of influence, $r_{\mathrm{infl}}\sim GM_\bullet/\sigma^2$:
$$M_\bullet = f\,\frac{R\,\sigma^2}{G} \quad \text{(generic virial estimator; $f$ an order-unity geometric factor)}$$

**$M_\bullet$–$\sigma$ relation**, the tightest empirical scaling identified, relating black-hole mass to the host bulge's stellar velocity dispersion $\sigma$:
$$\log\left(\frac{M_\bullet}{M_\odot}\right) = \alpha + \beta\,\log\left(\frac{\sigma}{200\,\mathrm{km\,s^{-1}}}\right)$$
with best-fit (Kormendy & Ho 2013) values $\alpha\approx8.5$, $\beta\approx4.4$–$5.3$ depending on sample selection, and intrinsic scatter $\sim0.3$ dex — comparable to, or only slightly larger than, the measurement uncertainty on individual dynamical masses.

**$M_\bullet$–$M_{\mathrm{bulge}}$ relation**, the corresponding mass-mass correlation:
$$\log\left(\frac{M_\bullet}{M_\odot}\right) = \alpha' + \beta'\,\log\left(\frac{M_{\mathrm{bulge}}}{10^{11}M_\odot}\right)$$
with typical normalization implying $M_\bullet/M_{\mathrm{bulge}}\sim10^{-3}$ for classical bulges/ellipticals — the ratio invoked in high-redshift black-hole "overmassive" comparisons (see [[Maiolino_2024_JADES_Broad_Line_AGN_High_Redshift]]).

**Sphere-of-influence resolution requirement**: a dynamical mass measurement is considered reliable only if the telescope/instrument angular resolution $\theta_{\mathrm{res}}$ resolves the black hole's sphere of influence,
$$\theta_{\mathrm{res}} \lesssim \theta_{\mathrm{infl}} = \frac{r_{\mathrm{infl}}}{D} = \frac{GM_\bullet}{\sigma^2 D}$$
where $D$ is the galaxy's distance — this resolution criterion is central to the paper's critical re-vetting of the literature black-hole mass compilation, excluding measurements that do not satisfy it.

**Asymptotic checks**: for a pure-disk galaxy with no classical bulge component, the paper finds the $M_\bullet$–$\sigma$ and $M_\bullet$–$M_{\mathrm{bulge}}$ relations break down or show much larger scatter — consistent with a picture where the correlation's physical origin is tied to bulge-building (violent, merger-driven) processes rather than a generic gravitational feedback loop operating in every galaxy regardless of morphology.

---

## Observational Data & Methodology
- **Target / Sample**: $\sim90$ nearby galaxies with dynamically measured $M_\bullet$ from resolved stellar, ionized/molecular gas, or water-maser kinematics.
- **Instrument Setup**: HST and adaptive-optics-assisted ground-based integral-field/long-slit spectroscopy (stellar and gas dynamics); VLBI maser mapping (e.g. NGC 4258) for the most precise geometric distance-independent masses.
- **Reduction & Detrending Pipeline**: dynamical (Jeans-equation or Schwarzschild orbit-superposition) modeling of resolved kinematics to extract $M_\bullet$ jointly with the stellar mass-to-light ratio and dark-matter halo contribution.

---

## Critical Findings & Scientific Impact
1. Refines the $M_\bullet$–$\sigma$ and $M_\bullet$–$M_{\mathrm{bulge}}$ relations with a rigorously vetted dynamical mass sample, revising the normalization upward relative to earlier (pre-2010) compilations.
2. Demonstrates that pseudobulges and pure-disk galaxies do not follow the same tight scaling as classical bulges/ellipticals, reframing "black hole-galaxy coevolution" as specifically merger/classical-bulge-driven rather than universal.
3. Open problem: the causal mechanism enforcing the $M_\bullet$–$\sigma$ relation (AGN feedback self-regulating both black-hole growth and bulge velocity dispersion, versus a purely statistical central-limit-theorem consequence of hierarchical merging) remains debated.

---

## Vault Cross-References
- Core Theory: [[SMBH Reverberation Mapping]], [[Jeans Equations and Virial Theorem]], [[AGN and supermassive black holes]]
- Related: [[Faber-Jackson relation]], [[Fundamental plane of ellipticals]]
- Map of Content: [[Astrophysics_of_Galaxies_MOC]], [[Lab_High-Energy_MOC]]
