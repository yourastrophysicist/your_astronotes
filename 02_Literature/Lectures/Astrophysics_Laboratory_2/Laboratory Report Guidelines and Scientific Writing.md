---
layout: "default"
title: "Laboratory Report Guidelines and Scientific Writing"
---
# Laboratory Report Guidelines and Scientific Writing

*Astrophysics Laboratory 2, Prof. Luca Malavolta & Prof. Giampaolo Piotto*  
*Index: [[Astrophysics_Laboratory_2_MOC]]*

---

## Manuscript Requirements and Format

The final deliverable for Astrophysics Laboratory 2 is an authentic scientific research paper:
- **Format**: Astronomy & Astrophysics (A&A) 2-column LaTeX manuscript (using the official Overleaf / A&A template `aa.cls`).
- **Length Constraints**: strictly maximum 15 pages (including references and appendices) and maximum 10 figures.
- **Submission**: by email to both professors at least 5 days before the scheduled oral exam.
- **Software Citation**: every data reduction and analysis code must be properly cited in the references (Astropy, batman, ldtk, emcee, corner, jplephem, SciPy, NumPy, Matplotlib).

---

## Structure of the Research Report

### 1. Title, Abstract, and Keywords
- Concise, descriptive title identifying target exoplanet, instrumentation, and core measurement.
- Structured abstract: Context, Aims, Methods, Results, Conclusions.
- Standard A&A keywords (e.g., `planets and satellites: individual: HAT-P-44 b`, `techniques: photometric`, `methods: data analysis`).

### 2. Introduction ($\,\sim 1\text{ page}$)
- Astrophysical motivation: exoplanet demographics, atmospheric scale height, or transit timing variations.
- Discovery history of the target exoplanet.
- Host star properties ($T_{\text{eff}}, \log g, [\text{Fe}/\text{H}], M_\star, R_\star$).
- Published literature parameters and open questions.

### 3. Observations and Datasets
- **Ground-Based Observations (TASTE)**:
	- Telescope: 1.82m Copernico Telescope at Cima Ekar (Asiago, Italy).
	- Detector specifications: CCD format, pixel scale, gain ($e^-/\text{ADU}$), readout noise.
	- Observing log: date, duration, filter (e.g., Sloan $r'$), exposure time, cadence, weather conditions, airmass range.
- **Space-Based Observations (TESS)**:
	- Mission overview, sectors observed, camera and CCD numbers.
	- Cadence (2-minute or 20-second), target pixel files, pipeline data provenance.

### 4. Ground-Based Photometry Pipeline
- Calibration protocol: master bias creation, readout noise measurement, master flat creation, vignetting and dust mapping.
- Science frame reduction and pixel variance propagation equations.
- Cosmic ray rejection with Astro-SCRAPPY.
- Time conversion: UTC to $BJD_{\text{TDB}}$ using `jplephem`.
- Star identification, coordinate alignment, centroiding algorithms, and tracking drift.
- Aperture photometry: sky background estimation, curve of growth, optimal aperture radius selection.
- Differential photometry: comparison stars selection, ensemble weighting, airmass detrending, and light curve extraction.

### 5. TESS Light Curve Extraction and Filtering
- TPF inspection, pipeline aperture mask vs custom threshold mask.
- SAP vs PDCSAP comparison.
- Quality flag filtering (excluding momentum dumps, attitude tweaks).
- Out-of-transit stellar activity detrending and transit masking protocol.

### 6. Transit Modeling and Bayesian MCMC Analysis
- Analytical transit model (`batman`) setup and parameterization.
- Limb darkening coefficients from PHOENIX models (`ldtk`) and prior formulations.
- Joint likelihood definition combining TASTE and TESS.
- MCMC implementation (`emcee`): walker configuration, burn-in removal, autocorrelation time convergence proof.
- Corner plot presentation and discussion of parameter degeneracies ($a/R_\star$ vs $i$).

### 7. Results and Discussion
- Final parameter table: $R_p / R_\star, a / R_\star, i, b, T_{14}, T_0, P$, with $1\sigma$ credible intervals.
- Physical planetary parameters derived using host star mass and radius ($R_p [R_J], M_p [M_J], \bar{\rho}_p [\text{g cm}^{-3}], g_p [\text{m s}^{-2}], T_{\text{eq}} [\text{K}]$).
- Comparison with published discovery papers.
- Transit Timing Variation (TTV) analysis: observed minus calculated ($O - C$) transit epoch diagram.

### 8. Conclusions
- Summary of empirical findings and evaluation of observational precision achieved.

---

## Related Notes
- [[Lesson 00 - Course Overview and Research Methodology]]
- [[Astrophysics Lab 2 Report Specifications and AA Format]]



## Linked References

- [[Astrophysics Lab 2 Report Specifications and AA Format]]
- [[Astrophysics_Laboratory_2_MOC]]


