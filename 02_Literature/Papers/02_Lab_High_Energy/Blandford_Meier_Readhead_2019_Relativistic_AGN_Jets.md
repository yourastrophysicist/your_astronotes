---
layout: "default"
title: "Blandford, Meier & Readhead (2019) — Relativistic Jets from Active Galactic Nuclei"
---
## Metadata
- **Authors**: Roger D. Blandford, David L. Meier, Anthony Readhead
- **Year**: 2019
- **arXiv ID**: [arXiv:1812.06025](https://arxiv.org/abs/1812.06025)
- **ADS Bibcode**: `2019ARA&A..57..467B`
- **Journal**: *ARA&A*, 57, 467
- **Sub-field**: astro-ph.HE
- **Key Observatory / Code**: comprehensive review; synthesizes VLBI, EHT, GRMHD simulation, and multi-wavelength AGN jet literature

---

## Executive Summary
This review synthesizes four decades of theoretical and observational progress on relativistic jets from active galactic nuclei, arguing for a unified physical picture: jets are launched when a spinning black hole (via the [[Blandford-Znajek Mechanism|Blandford-Znajek mechanism]]) or a magnetized accretion disk (via the [[Blandford-Payne Jet Launching|Blandford-Payne mechanism]]) converts gravitational/rotational energy into a Poynting-flux-dominated outflow, which is then collimated by hoop stress from the large-scale poloidal field and accelerated to relativistic bulk Lorentz factors ($\Gamma\sim 10$–$50$) over scales of $10^3$–$10^6\,r_g$. The authors distinguish high-power (FR II-like, supersonic, proton-dominated, terminating in strong hot-spot shocks) from low-power (FR I-like, subsonic-transitioning, decelerating into buoyant plumes) jet classes, and connect jet power to black-hole spin and accretion-disk magnetic flux state (magnetically arrested disk, MAD, vs. standard/thin disk).

---

## Key Equations & Theoretical Framework
**Jet power budget**, combining the Blandford-Znajek spin-powered channel and the disk-wind (Blandford-Payne) channel:
$$P_{\mathrm{jet}} = P_{\mathrm{BZ}} + P_{\mathrm{wind}}, \qquad P_{\mathrm{BZ}} \approx \frac{\kappa}{4\pi}\Phi_H^2\Omega_H^2$$
(see [[Blandford_Znajek_1977_Electromagnetic_Extraction_Kerr_BH]] for the full derivation of $\Phi_H$, $\Omega_H$), with the magnetic flux $\Phi_H$ set self-consistently by the accretion flow's ability to advect flux inward against outward diffusion/reconnection — the **magnetically arrested disk (MAD)** state saturates $\Phi_H$ at
$$\phi \equiv \frac{\Phi_H}{\sqrt{\dot{M}r_g^2 c}} \approx 50 \;\;(\text{dimensionless, MAD saturation value from GRMHD simulations})$$

**Jet collimation via hoop stress**: for a force-free, axisymmetric poloidal-toroidal field configuration, the transverse (pinching) magnetic force per unit volume balancing the outflow's tendency to expand is
$$f_{\mathrm{hoop}} = -\frac{B_\phi^2}{4\pi \varpi}, \qquad \varpi = r\sin\theta$$
where $B_\phi$ is the toroidal field component wound up by the differential rotation of the footpoints, and $\varpi$ is the cylindrical radius from the jet axis; equilibrium collimation requires the hoop stress to balance the jet's internal pressure gradient, producing the observed parabolic-to-conical shape transition seen in VLBI jet imaging (e.g. M87).

**Bulk relativistic beaming**, relating observed (Doppler-boosted) and intrinsic jet luminosities:
$$L_{\mathrm{obs}} = \delta^{3+\alpha}\, L_{\mathrm{int}}, \qquad \delta = \frac{1}{\Gamma(1-\beta\cos\theta_{\mathrm{obs}})}$$
where $\delta$ is the Doppler factor, $\Gamma=(1-\beta^2)^{-1/2}$ the bulk Lorentz factor, $\theta_{\mathrm{obs}}$ the angle between the jet axis and the line of sight, and $\alpha$ the spectral index — this is the mechanism responsible for blazar-class one-sided superluminal apparent motions and extreme flux variability when $\theta_{\mathrm{obs}}\lesssim 1/\Gamma$.

**Asymptotic regimes**:
- $a\to 0$ (non-spinning black hole): $P_{\mathrm{BZ}}\to 0$, jet power (if any) must derive entirely from the Blandford-Payne disk-wind channel.
- $\theta_{\mathrm{obs}} \to 1/\Gamma$ (jet pointed near the line of sight — the blazar orientation): $\delta$ is maximized, $L_{\mathrm{obs}}\gg L_{\mathrm{int}}$, explaining why blazars appear as the most luminous, most rapidly variable AGN class despite being intrinsically similar to misaligned radio galaxies (per the AGN unification scheme).
- Far downstream ($z\gg r_g$, jet terminus): kinetic power dominates over Poynting flux as the jet decelerates and mass-loads, producing the FR II hot spots or FR I plumes depending on the initial jet power and ambient medium density.

---

## Observational Data & Methodology
- **Target / Sample**: Synthesizes the full AGN jet population — radio galaxies (FR I/FR II), blazars (BL Lacs, flat-spectrum radio quasars including 4C 31.61-class sources), and the EHT-imaged M87*.
- **Instrument Setup**: VLBI (VLBA, EHT) imaging from parsec to kiloparsec scales; multi-wavelength (radio through TeV gamma-ray) SED monitoring for blazar variability studies.
- **Reduction & Detrending Pipeline**: comparison of observed jet morphology, proper motions, and spectral evolution against GRMHD simulation libraries (e.g. `BHAC`, `HARM`) spanning MAD and standard-and-normal-evolution (SANE) disk states.

---

## Critical Findings & Scientific Impact
1. Consolidates observational evidence (EHT M87* polarimetry, VLBI proper motions) supporting the MAD-state, spin-powered jet paradigm over purely disk-wind-driven alternatives for the most powerful jets.
2. Provides a quantitative bridge between the FR I/FR II morphological dichotomy and the underlying jet power / accretion-mode dichotomy (radiatively efficient thin-disk vs. radiatively inefficient ADAF-like accretion).
3. Open problems flagged: the detailed dissipation mechanism converting ordered Poynting flux into the particle acceleration powering blazar gamma-ray flares (reconnection vs. shocks) remains actively debated, as does the long-term stability of jets against kink and other MHD instabilities over $10^6\,r_g$ propagation scales.

---

## Vault Cross-References
- Core Theory: [[Blandford-Znajek Mechanism]], [[Blandford-Payne Jet Launching]], [[Synchrotron and Inverse Compton Radiation]]
- Related: [[AGN taxonomy unified model and feedback]], [[AGN and supermassive black holes]]
- Map of Content: [[Lab_High-Energy_MOC]], [[Fluid_and_Plasma_Dynamics_MOC]], [[General_Relativity_MOC]]
