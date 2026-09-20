---
layout: "default"
title: "Janesick (2001) — Scientific Charge-Coupled Devices and the Photon Transfer Method"
---
## Metadata
- **Authors**: James R. Janesick
- **Year**: 2001
- **arXiv ID**: none (SPIE Press monograph, pre-arXiv-relevant field)
- **ADS Bibcode**: `2001SPIE.T04.....J` (SPIE Press monograph *Scientific Charge-Coupled Devices*)
- **Sub-field**: astro-ph.IM
- **Key Observatory / Code**: foundational CCD characterization methodology used across nearly all ground- and space-based imaging instruments

---

## Executive Summary
Janesick's monograph establishes the **photon transfer method**, a purely empirical, model-independent technique for measuring a CCD's fundamental performance parameters — system gain ($e^-/\mathrm{ADU}$), read noise, full-well capacity, and photon-response non-uniformity (PRNU) — directly from a sequence of flat-field exposures of increasing signal level, without requiring any independent absolute calibration of incident photon flux. The technique remains the standard detector-characterization procedure taught and applied throughout observational astrophysics instrumentation labs.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: photon arrival at a CCD pixel is a Poisson process, so the photon shot-noise variance equals the mean signal in photon (electron) units: $\sigma_{\mathrm{shot}}^2 = \bar{N}_e$. Combined with a fixed-pattern PRNU term and an additive, signal-independent read-noise term, the total measured variance (in ADU) as a function of mean signal (in ADU) is
$$\sigma_{\mathrm{ADU}}^2(\bar{S}) = \sigma_{\mathrm{RON}}^2 + \frac{\bar{S}}{g} + \left(\sigma_{\mathrm{PRNU}}\,\bar{S}\right)^2$$
where:
- $\sigma_{\mathrm{RON}}$ is the read noise in ADU (signal-independent, dominates at low signal)
- $g$ is the system gain in $e^-/\mathrm{ADU}$ (the shot-noise term $\bar S/g$ dominates at intermediate signal)
- $\sigma_{\mathrm{PRNU}}$ is the fractional pixel-to-pixel response non-uniformity (the quadratic term dominates at high signal, near full well)

**Photon transfer curve (PTC)**: plotting $\log\sigma_{\mathrm{ADU}}^2$ against $\log\bar{S}$ from a stack of flat-field exposures at increasing exposure time/illumination reveals three characteristic regimes with slopes $0$, $1$, and $2$ respectively, corresponding to the three terms above. The **gain** is extracted directly from the slope-1 (shot-noise-dominated) regime:
$$g = \frac{\bar{S}}{\sigma_{\mathrm{ADU}}^2 - \sigma_{\mathrm{RON}}^2} \quad \text{(in the shot-noise-dominated regime)}$$
via linear regression on $\sigma_{\mathrm{ADU}}^2$ vs. $\bar{S}$, with the read noise $\sigma_{\mathrm{RON}}$ obtained as the y-intercept, and $\sigma_{\mathrm{PRNU}}$ obtained from the high-signal quadratic departure from linearity.

**Full-well capacity** is identified as the signal level at which the PTC curve turns sharply downward (variance collapses) due to charge saturation, and is read directly off the same flat-field sequence.

**Asymptotic regimes**: at very low signal ($\bar S \to 0$), $\sigma_{\mathrm{ADU}}^2 \to \sigma_{\mathrm{RON}}^2$ (flat, slope-0 regime); at intermediate signal, the linear (slope-1) shot-noise regime dominates and enables the gain measurement; at signal approaching full well, PRNU-driven quadratic scaling (slope-2) takes over before catastrophic saturation.

---

## Observational Data & Methodology
- **Target / Sample**: laboratory flat-field calibration frames of any CCD or CMOS science detector — not astrophysical targets, but the universal precursor calibration for every subsequent astronomical CCD measurement (see [[Malavolta 01 - Bias Analysis and Detector Calibration]] and related lab exercises).
- **Instrument Setup**: uniformly illuminated flat-field source (integrating sphere or dome/twilight flat) at a sequence of increasing exposure levels spanning bias level to full well.
- **Reduction & Detrending Pipeline**: mean-variance regression across the flat-field sequence, following exactly the calibration chain used in [[Janesick Photon Transfer Method for Gain and Readout Noise]].

---

## Critical Findings & Scientific Impact
1. Establishes the photon transfer method as the field-standard, self-calibrating procedure for deriving CCD gain and read noise without external photometric standards.
2. Provides the physical basis for the general **CCD noise equation** used throughout ground-based astronomical signal-to-noise calculations (see [[Signal-Noise Ratio]], [[CCD detectors and SNR]]).
3. Extended by later work to CMOS and EMCCD/electron-multiplying detectors, which introduce additional excess-noise terms not present in the original conventional-CCD PTC formalism.

---

## Vault Cross-References
- Core Theory: [[Janesick Photon Transfer Method for Gain and Readout Noise]], [[Signal-Noise Ratio]], [[Full Well Capacity and Charge Saturation]], [[Quantum Efficiency in Astronomical Detectors]]
- Map of Content: [[Observational_Astrophysics_MOC]], [[Astrophysics_Laboratory_2_MOC]]
