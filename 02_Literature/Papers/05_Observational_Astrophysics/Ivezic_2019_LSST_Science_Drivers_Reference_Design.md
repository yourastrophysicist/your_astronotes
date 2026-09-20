---
layout: "default"
title: "Ivezić et al. (2019) — LSST: From Science Drivers to Reference Design and Anticipated Data Products"
---
## Metadata
- **Authors**: Željko Ivezić, Steven M. Kahn, J. Anthony Tyson, et al. (LSST/Rubin Observatory collaboration)
- **Year**: 2019 (arXiv preprint originally submitted 2008, continuously revised)
- **arXiv ID**: [arXiv:0805.2366](https://arxiv.org/abs/0805.2366)
- **ADS Bibcode**: `2019ApJ...873..111I`
- **Journal**: *ApJ*, 873, 111
- **Sub-field**: astro-ph.IM
- **Key Observatory / Code**: Vera C. Rubin Observatory (formerly LSST), 8.4 m primary mirror, 3.2-gigapixel camera

---

## Executive Summary
This design paper presents the complete science case, optical design, and anticipated data products of the Vera C. Rubin Observatory's Legacy Survey of Space and Time (LSST), a 10-year, wide-field, multi-band optical survey covering $\sim18{,}000\,\mathrm{deg}^2$ to unprecedented depth and cadence. Four primary science drivers shaped the reference design: probing dark energy and dark matter, taking a census of the Solar System, exploring the transient/variable optical sky, and mapping the Milky Way's structure — and the paper shows how the resulting three-mirror anastigmat design, wide field of view, and rapid-cadence observing strategy jointly serve all four with a single instrument.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: survey étendue (grasp) — the product of collecting area and field-of-view solid angle, $A\Omega$ — is the figure of merit that determines the volume of sky a telescope/camera system can survey to a given depth per unit time; LSST's 8.4 m primary and $9.6\,\mathrm{deg}^2$ field of view give it an étendue roughly an order of magnitude larger than prior wide-field imagers.

**Single-visit photometric depth**, following the general astronomical signal-to-noise relation (see [[Signal-Noise Ratio]]):
$$\mathrm{SNR} = \frac{N_\star t}{\sqrt{N_\star t + n_{\mathrm{pix}}\left(B + D\right)t + n_{\mathrm{pix}}\sigma_{\mathrm{RON}}^2}}$$
where $N_\star$ is the source count rate, $B$ the sky-background count rate per pixel, $D$ the dark current, $n_{\mathrm{pix}}$ the number of pixels in the photometric aperture, and $\sigma_{\mathrm{RON}}$ the read noise — LSST's $2\times15$ s paired-visit exposure strategy is optimized against this relation to balance depth, cosmic-ray rejection, and total survey area covered per night.

**Error budget for weak-lensing shape measurement**, one of the dark-energy science drivers, requiring the point-spread-function (PSF) to be characterized to a fractional systematic-error tolerance
$$\frac{\delta(\mathrm{PSF\ ellipticity})}{\mathrm{PSF\ ellipticity}} \lesssim \text{few}\times10^{-3}$$
across the full field of view and over the survey's 10-year time baseline, driving stringent requirements on optical design stability, active optics, and photometric/astrometric calibration.

**Photometric self-calibration**: with $\sim800$ visits to each field over 10 years (rolling cadence across bands), overlapping-visit photometric ("ubercal"-style) self-calibration solves simultaneously for stellar magnitudes and per-visit zero points, achieving the $\lesssim1\%$ relative photometric repeatability required for the transient and cosmological science cases.

**Asymptotic checks**: in the single-visit ($N_{\mathrm{visits}}=1$) limit, achievable photometric depth and astrometric precision are set purely by the per-visit SNR equation above; in the full 10-year co-added limit ($N_{\mathrm{visits}}\sim800$), stacked depth improves as $\sqrt{N_{\mathrm{visits}}}$ (for background-limited imaging), which is the regime enabling LSST's faint static-sky (galaxy weak-lensing, photometric-redshift) science, distinct from the single-visit regime that drives its time-domain/transient science.

---

## Observational Data & Methodology
- **Target / Sample**: the full observable sky south of $+34°$ declination, six-band ($ugrizy$) photometry, $\sim10^{10}$ stars and galaxies over the survey lifetime.
- **Instrument Setup**: 8.4 m (6.5 m effective) three-mirror anastigmat, 3.2-gigapixel focal plane, $9.6\,\mathrm{deg}^2$ field of view, sited at Cerro Pachón, Chile.
- **Reduction & Detrending Pipeline**: real-time (within 60 s) transient alert pipeline (difference imaging against a reference template) plus annual co-added Data Release processing for the static-sky catalog.

---

## Critical Findings & Scientific Impact
1. Establishes the reference design and quantitative error budgets against which the operational Rubin Observatory (first light 2025) is now being validated and characterized.
2. Demonstrates that a single wide-field, high-cadence survey instrument can simultaneously serve static-sky cosmology, Solar System science, Galactic structure, and time-domain transient science — a design philosophy now widely emulated.
3. Open problem flagged at the design stage: the real-time alert-generation pipeline must process $\sim10\,\mathrm{million}$ alerts per night with strict latency requirements, a data-management challenge whose full-scale operational performance continues to be characterized post-first-light.

---

## Vault Cross-References
- Core Theory: [[Signal-Noise Ratio]], [[CCD detectors and SNR]], [[Atmospheric seeing]]
- Related: [[Extinction and Bouguer Law|Airmass and Atmospheric Extinction Correction]]
- Map of Content: [[Observational_Astrophysics_MOC]], [[Observational_Cosmology_MOC]]
