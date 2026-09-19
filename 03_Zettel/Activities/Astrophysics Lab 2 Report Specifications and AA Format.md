---
layout: "default"
title: "Astrophysics Lab 2 Report Specifications and AA Format"
---
# Astrophysics Lab 2 Report Specifications and AA Format

Official structural and presentation specifications for the final exam research paper for Astrophysics Laboratory 2.

## Formal Guidelines
- **Template**: Astronomy & Astrophysics 2-column LaTeX format (`aa.cls`).
- **Page Budget**: strictly maximum 15 pages total, including references and appendices.
- **Figure Limit**: maximum 10 figures.
- **Submission**: by email in PDF format to Prof. Malavolta and Prof. Piotto at least 5 days prior to the oral examination.

## Manuscript Structure Breakdown

### Abstract
Context, Aims, Methods, Results, and Conclusions in standard A&A paragraph format.

### Section 1 — Introduction ($\,\sim 1\text{ page}$)
Scientific motivation, planetary demographics, discovery context of target exoplanet, host star literature parameters ($M_\star, R_\star, T_{\text{eff}}, \log g, [\text{Fe}/\text{H}]$).

### Section 2 — Observations and Data Sets
- Ground observations with 1.82m Copernico telescope (filter, exposure times, airmass range, observing conditions).
- Space observations with TESS (sectors, cameras, cadences).

### Section 3 — Ground-Based Photometry Pipeline
- Detector calibration (master bias, master flat, error propagation, cosmic ray rejection).
- Time transformation from UTC to $BJD_{\text{TDB}}$ using `jplephem`.
- Centroid tracking and guiding evaluation.
- Local background subtraction and aperture optimization via curve of growth.
- Comparison star selection and differential light curve generation.

### Section 4 — TESS Data Reduction and Filtering
- Custom aperture mask vs pipeline mask.
- SAP vs PDCSAP comparison.
- Quality flag cadence filtering.
- Stellar activity flattening with transit masking.

### Section 5 — Transit Modeling and Bayesian MCMC Analysis
- Analytical model formulation (`batman`).
- Theoretical limb darkening priors from PHOENIX models (`ldtk`).
- Joint likelihood construction.
- MCMC implementation (`emcee`): walker configuration, burn-in removal, autocorrelation time convergence proofs.
- Parameter correlation triangle (corner plot).

### Section 6 — Physical Parameters and Discussion
- Final parameters table ($R_p/R_\star, a/R_\star, i, b, T_{14}, T_0, P$) with $1\sigma$ credible intervals.
- Derived physical properties ($R_p, M_p, \bar{\rho}_p, g_p, T_{\text{eq}}$).
- Comparison with literature values.
- Search for Transit Timing Variations ($O - C$ analysis).

### Section 7 — Conclusions
Summary of empirical measurements and future observational prospects.

### References
Complete formal citations for literature and all Python packages (`astropy`, `batman-package`, `ldtk`, `emcee`, `corner`, `jplephem`, `scipy`, `numpy`, `matplotlib`).

## Related Notes
- [Lesson 00 - Course Overview and Research Methodology](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Lesson%2000%20-%20Course%20Overview%20and%20Research%20Methodology.html)
- [Laboratory Report Guidelines and Scientific Writing](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Laboratory%20Report%20Guidelines%20and%20Scientific%20Writing.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

