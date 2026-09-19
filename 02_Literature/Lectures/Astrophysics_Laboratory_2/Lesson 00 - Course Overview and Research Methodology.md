---
layout: "default"
title: "Lesson 00 - Course Overview and Research Methodology"
---
# Lesson 00 — Course Overview and Research Methodology

*Astrophysics Laboratory 2, Master Degree in Astrophysics and Cosmology, Università degli Studi di Padova*  
*Lecturers: Prof. Luca Malavolta (36 hours), Prof. Giampaolo Piotto (12 hours)*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## Pedagogical Philosophy and Course Objectives

The stated goal of Astrophysics Laboratory 2 is to provide a scaled-down authentic research experience. Rather than running canned cookbook experiments, the course follows an observational research project through its complete lifecycle:
\text{raw telescope data} \to \text{instrumental calibration} \to \text{photometric extraction} \to \text{time-series modeling} \to \text{A&A manuscript} \to \text{oral defense}

The project centers on characterizing transiting extrasolar planets by combining ground-based high-precision differential photometry from the TASTE project (The Asiago Search for Transit timing variations of Exoplanets, mounted on the 1.82m Copernico Telescope in Cima Ekar) with space-based high-cadence time-series from NASA's TESS (Transiting Exoplanet Survey Satellite).

---

## Course Architecture and Syllabus

The course is partitioned into theoretical lectures and intensive computer laboratory sessions in LabP104:

1. **Foundations of Detectors and Exoplanetary Systems (Prof. Piotto)**
	- Modern astronomical detectors: CCDs vs photon counting devices
	- Physical mechanisms of charge generation, transfer, readout, and noise
	- Overview of exoplanet detection techniques (radial velocity, transit, microlensing, direct imaging, astrometry, timing variations)
	- Atmospheric characterization through transmission spectroscopy and occultations

2. **CCD Data Reduction and Photometry Pipelines (Prof. Malavolta)**
	- FITS file structure and header parsing in Python
	- Bias frame analysis: electronic offset, spatial structure, readout noise, and Janesick gain measurement
	- Flat field frame analysis: pixel response non-uniformity (PRNU), vignetting, shutter effect, and normalization
	- Science frame correction with rigorous pixel-by-pixel error propagation
	- Coordinate alignment, SIMBAD target matching, and sub-pixel stellar centroiding
	- Circular aperture photometry, local sky background subtraction, and curve of growth
	- Object-oriented Python pipeline architecture (AperturePhotometry and reduction classes)
	- Differential ensemble photometry for atmospheric extinction removal

3. **Space Photometry and Transit Analysis (Prof. Malavolta)**
	- TESS Target Pixel Files (TPFs) and Light Curve Files (LCFs) via MAST
	- Simple Aperture Photometry (SAP) vs Pre-search Data Conditioning SAP (PDCSAP)
	- Filtering and detrending: running median, biweight, Savitzky-Golay, and transit masking
	- Analytical transit modeling via Mandel & Agol (2002) using \batman
	- Synthetic stellar limb darkening calculation with ldtk and PHOENIX atmosphere models
	- Bayesian parameter inference and Markov Chain Monte Carlo (MCMC) sampling with emcee
	- Autocorrelation time convergence diagnostics and marginalized posterior analysis

---

## Examination Rules and Deliverables

The examination consists of two interdependent components:

- **Written Scientific Report**:
	- Format: Astronomy & Astrophysics (A&A) 2-column LaTeX template
	- Strict length limits: maximum 15 pages (including references), maximum 10 figures
	- Submission deadline: by email to both professors at least 5 days prior to the oral examination date
	- Content: introduction, target and observation description, complete data reduction steps, light curve extraction, filtering methodology, transit modeling, MCMC results, and comparison with published literature
	- Reference codes: every Python package utilized (\astropy, \batman-package, ldtk, emcee, corner, scikit-learn, jplephem) must be formally cited in the bibliography

- **Oral Examination**:
	- A conference-style oral defense based on the submitted report
	- Presentation: 15–20 minutes summarizing the pipeline, key decisions, error budget, and physical results
	- Questions: probing theoretical foundations (CCD physics, noise propagation equations, limb darkening laws, MCMC convergence criteria, and potential systematic biases)

---

## Related Notes
- [Lesson 01 - Linux Environment and Scientific Python Setup](./Lesson%2001%20-%20Linux%20Environment%20and%20Scientific%20Python%20Setup.html)
- [Astrophysics Lab 2 Report Specifications and AA Format](../../../03_Zettel/Activities/Astrophysics%20Lab%202%20Report%20Specifications%20and%20AA%20Format.html)
- [Laboratory Report Guidelines and Scientific Writing](./Laboratory%20Report%20Guidelines%20and%20Scientific%20Writing.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Activities/Astrophysics%20Lab%202%20Report%20Specifications%20and%20AA%20Format.html" class="backlink-item">Astrophysics Lab 2 Report Specifications and AA Format</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

