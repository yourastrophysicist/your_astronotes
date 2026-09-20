---
layout: "default"
title: "Guyon (2018) — Extreme Adaptive Optics"
---
## Metadata
- **Authors**: Olivier Guyon
- **Year**: 2018
- **arXiv ID**: none found (published review; no arXiv preprint located)
- **ADS Bibcode**: `2018ARA&A..56..315G`
- **Journal**: *ARA&A*, 56, 315
- **Sub-field**: astro-ph.IM
- **Key Observatory / Code**: SCExAO (Subaru), GPI, SPHERE, and the extreme-AO architectures baselined for ELTs

**Provenance note**: the original enrichment brief supplied "arXiv:1805.02166" for this paper; that ID resolves to an unrelated mathematics preprint. No arXiv preprint for this review could be located; citation here uses the ADS bibcode/DOI only, following the same treatment as other pre-arXiv or arXiv-absent canonical references in this vault (e.g. Shakura & Sunyaev 1973).

---

## Executive Summary
Guyon reviews the technology and control theory of extreme adaptive optics (ExAO) — AO systems specifically engineered to deliver the very high Strehl ratios and deep, stable point-spread-function (PSF) suppression required for direct imaging of exoplanets and circumstellar disks at small angular separations, where the planet-to-star contrast ratio can reach $10^{-4}$ to $10^{-10}$. The review covers wavefront sensing (Shack-Hartmann, pyramid sensors), deformable-mirror actuator-count/stroke requirements, predictive/high-order control loops, and coronagraphic PSF suppression, quantifying the residual-wavefront-error budget that ultimately sets achievable imaging contrast.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: atmospheric turbulence imprints a time-variable wavefront phase error $\phi(\mathbf{x},t)$ on the incoming stellar wavefront, characterized statistically by the Fried parameter $r_0$ (see [[Fried parameter $r_0$]]) and Kolmogorov turbulence power spectrum; AO systems measure and correct $\phi$ in near-real time using a wavefront sensor–deformable mirror servo loop.

**Strehl ratio**, the standard metric of AO correction quality, relating the peak of the corrected PSF to the diffraction-limited peak:
$$S \approx \exp\left(-\sigma_\phi^2\right) \quad \text{(Maréchal approximation, valid for } \sigma_\phi \lesssim 1 \text{ rad)}$$
where $\sigma_\phi^2$ is the residual wavefront-error variance (in radians$^2$) after AO correction, summed in quadrature over independent error terms (fitting error, servo-lag error, photon-noise error, etc.):
$$\sigma_\phi^2 = \sigma_{\mathrm{fit}}^2 + \sigma_{\mathrm{lag}}^2 + \sigma_{\mathrm{photon}}^2 + \sigma_{\mathrm{other}}^2$$

**Fitting error**, set by the deformable mirror's finite actuator spacing $d$ relative to the turbulence coherence scale:
$$\sigma_{\mathrm{fit}}^2 \approx \mu\left(\frac{d}{r_0}\right)^{5/3}$$
where $\mu$ is an O(1) constant depending on DM influence-function geometry — driving ExAO systems toward very high actuator counts ($\sim2000$–$4000$) to keep $d\ll r_0$.

**Servo-lag error**, set by the ratio of the atmospheric coherence time $\tau_0$ to the AO loop's total latency $\tau_{\mathrm{sys}}$ (sensing + computation + actuation delay):
$$\sigma_{\mathrm{lag}}^2 \approx \left(\frac{\tau_{\mathrm{sys}}}{\tau_0}\right)^{5/3}$$
driving ExAO systems toward kHz-class loop rates, since $\tau_0\sim$ a few ms at good sites.

**Raw contrast achievable**, combining residual Strehl-limited halo with coronagraphic starlight suppression $C_{\mathrm{coro}}$:
$$C_{\mathrm{raw}}(\theta) \sim \sigma_\phi^2 \times C_{\mathrm{coro}}(\theta)$$
showing that ExAO wavefront correction and coronagraph design are multiplicatively coupled — neither alone suffices for $\lesssim10^{-6}$ contrast imaging.

**Asymptotic checks**: as $d/r_0\to0$ (arbitrarily fine actuator pitch) and $\tau_{\mathrm{sys}}/\tau_0\to0$ (arbitrarily fast loop), $\sigma_\phi^2\to\sigma_{\mathrm{photon}}^2$ — the fundamental photon-noise floor set by guide-star brightness, which is the ultimate physical limit no amount of AO hardware improvement can circumvent for a given target magnitude.

---

## Observational Data & Methodology
- **Target / Sample**: review synthesizing results from SCExAO/Subaru, GPI/Gemini, SPHERE/VLT direct-imaging exoplanet and disk surveys.
- **Instrument Setup**: pyramid and Shack-Hartmann wavefront sensors, MEMS/piezo deformable mirrors with $\sim2000$–$4000$ actuators, kHz-class real-time control.
- **Reduction & Detrending Pipeline**: angular differential imaging (ADI) and spectral differential imaging post-processing to further suppress residual quasi-static speckle noise beyond the real-time AO correction.

---

## Critical Findings & Scientific Impact
1. Quantifies the wavefront-error budget separating current-generation 8–10 m telescope ExAO systems from the contrast performance needed for reflected-light imaging of rocky exoplanets, motivating the design requirements for next-generation ELT instruments and dedicated space coronagraphs.
2. Establishes predictive control (using recent wavefront history to anticipate and pre-correct atmospheric evolution) as a key strategy for reducing servo-lag error beyond what loop-speed increases alone can achieve.
3. Open problem: non-common-path aberrations between the wavefront sensor and science arm remain a dominant residual-speckle floor even in state-of-the-art ExAO systems, motivating focal-plane wavefront sensing techniques as an active research frontier.

---

## Vault Cross-References
- Core Theory: [[Adaptive optics]], [[Adaptive optics overview]], [[Fried parameter $r_0$]], [[Atmospheric seeing]]
- Map of Content: [[Observational_Astrophysics_MOC]], [[Exoplanetary_Astrophysics_MOC]]
