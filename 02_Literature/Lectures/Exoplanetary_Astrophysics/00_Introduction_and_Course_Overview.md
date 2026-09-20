---
layout: "default"
title: "00_Introduction_and_Course_Overview"
---
# Lesson 00 – Introduction and Course Overview

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 28/09/2025)*  
*Index: [[Exoplanetary_Astrophysics_MOC]]*

---

## Foundations and Scope of Exoplanetary Astrophysics

Exoplanetary astrophysics addresses the detection, physical characterization, internal structure, atmospheric physics, and formation pathways of planets orbiting stars other than the Sun. Historically rooted in speculative philosophy—from ancient atomism to Giordano Bruno (1584)—the discipline transitioned into an empirical branch of astrophysics with the discovery of the first planet orbiting a main-sequence solar-type star: **51 Pegasi b** (Mayor & Queloz 1995, Nature 378, 355; awarded the 2019 Nobel Prize in Physics).

```
Timeline Milestone:
1992: PSR B1257+12 b, c (Pulsar timing; Wolszczan & Frail)
1995: 51 Pegasi b (Radial velocity; Mayor & Queloz) -> Nobel Prize 2019
2000: HD 209458 b (First transiting planet; Charbonneau et al., Henry et al.)
2009: Kepler Space Telescope launched -> Revolution in small planet statistics
2016: TRAPPIST-1 system discovered (Gillon et al.) -> 7 Earth-sized planets
2018: TESS launched; CHEOPS operational (2019); JWST science (2022)
Future: PLATO (ESA, 2026+), Ariel (ESA, 2029), Roman Space Telescope (NASA, 2027)
```

The primary empirical realization from three decades of exoplanet surveys is **diversity**:
- Observed planetary systems display architectures, physical dimensions, compositions, and dynamical states radically different from the Solar System.
- Hot Jupiters, super-Earths, sub-Neptunes, circumbinary planets, and resonant chains demonstrate that planet formation and migration processes operate across a vast parameter space.

---

## Course Objectives and Competence Matrix

The pedagogical objective of this course is to provide master-level competence in observational and theoretical exoplanetary physics:

1. **Detection Physics**: Mathematical formulation, instrumental limits, sensitivity functions, and systematic noise sources across all major detection channels (Radial Velocity, Transit Photometry, Microlensing, Direct Imaging, Astrometry, and Timing).
2. **Bulk Characterization**: Determining fundamental physical quantities—mass $M_p$, radius $R_p$, mean bulk density $\bar{\rho}_p$, equilibrium temperature $T_{\text{eq}}$, surface gravity $g_p$, and evolutionary age.
3. **Atmospheric Physics**: Radiative equilibrium, transmission and emission spectroscopy, scale height $H$, line absorption, cloud/haze opacity, and space-based spectroscopic retrieval (HST, JWST, Ariel).
4. **Planetary System Dynamics & Formation**: Protoplanetary disk structure, dust coagulation, pebble and core accretion, gravitational instability, disc-driven migration (Type I/II), and mean-motion resonances.
5. **Literature Synthesis & Critical Analysis**: Tracking ongoing research on arXiv (astro-ph.EP), reviewing peer-reviewed papers, and defending research methodologies.

---

## Primary Detection Channels: Governing Physics

| Detection Method | Primary Observable | Physical Constraint | Governing Scaling / Equation |
|---|---|---|---|
| **Radial Velocity (Doppler)** | Periodic Doppler shift $\Delta \lambda / \lambda$ | Minimum mass $M_p \sin i$, period $P$, eccentricity $e$ | $K \propto M_p \sin i \cdot M_\star^{-2/3} P^{-1/3} (1-e^2)^{-1/2}$ |
| **Transit Photometry** | Relative flux drop $\delta = \Delta F / F_\star$ | Radius ratio $R_p / R_\star$, inclination $i$, semi-major axis $a / R_\star$ | $\delta \approx (R_p / R_\star)^2, \quad \mathcal{P}_{\text{tr}} \approx R_\star / a$ |
| **Astrometry** | 2D angular displacement $\alpha$ on sky plane | True planetary mass $M_p$, 3D orbital inclination $i, \Omega$ | $\alpha = \frac{M_p}{M_\star} \frac{a}{d}$ |
| **Gravitational Microlensing** | Transient gravitational magnification $A(t)$ | Planet-star mass ratio $q = M_p / M_\star$, projected separation $s$ | $\theta_E = \sqrt{\frac{4GM}{c^2} \frac{D_{LS}}{D_L D_S}}$ |
| **Direct Imaging** | Spatially resolved planetary flux $F_p$ | Luminosity, effective temperature $T_{\text{eff}}$, atmospheric spectrum | Contrast $\frac{F_p}{F_\star} \sim 10^{-4}-10^{-6} \text{ (thermal IR)}, \sim 10^{-9}-10^{-10} \text{ (optical)}$ |
| **Timing Methods** | Departures from periodicity $\Delta t$ | Perturbing masses, resonances, light-travel time effects | $\Delta t_{\text{LTTE}} = \frac{a_\star \sin i}{c}$ |

---

## Course Logistics, Textbooks, and Digital Resources

### Reference Textbooks
- **Michael Perryman**, *The Exoplanet Handbook* (2nd Edition, 2018, Cambridge University Press). Comprehensive reference covering detection mechanics, demographics, and orbital dynamics.
- **Hans J. Deeg & Juan Antonio Belmonte** (Eds.), *Handbook of Exoplanets* (Springer, 2018 / updated edition 2024–2025). Exhaustive multi-volume handbook containing dedicated chapters on survey completeness, instrumentation, and atmospheric retrieval.
- **Sara Seager**, *Exoplanets* (University of Arizona Press, 2010). Core foundation for planetary atmospheres and interior modeling.

### Canonical Exoplanet Databases
- **The Extrasolar Planets Encyclopaedia**: [exoplanet.eu](https://exoplanet.eu) (Maintained by Jean Schneider / Paris Observatory). Comprehensive historical and active catalog.
- **NASA Exoplanet Archive**: [exoplanetarchive.ipac.caltech.edu](https://exoplanetarchive.ipac.caltech.edu) (IPAC/Caltech). Standard repository for confirmed planets, Kepler/K2/TESS candidates, transmission spectra, and stellar host parameters.
- **Open Exoplanet Catalogue**: [openexoplanetcatalogue.com](https://www.openexoplanetcatalogue.com). Community-driven XML/database.

### Examination Requirements
The examination consists of:
1. Selection and oral presentation of an accepted peer-reviewed paper from recent literature (e.g., from arXiv astro-ph.EP).
2. Theoretical discussion extending from the paper to the foundational topics of the course: detection methods, orbital mechanics, planetary interiors, atmospheres, and formation scenarios.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [[Exoplanetary_Astrophysics_MOC]]
- Next Lecture: [[01_Global_Architecture_of_the_Solar_System]]
- Related Courses: [[Astrophysics_Laboratory_2_MOC]] | [[Computational_Astrophysics_MOC]]



## Linked References

- [[Exoplanetary_Astrophysics_MOC]]


