---
layout: default
title: "Linearity and saturation"
---

a CCD pixel responds linearly to incoming photons up to some fraction of its full well capacity, then turns over. at saturation, charge spills into adjacent pixels (blooming). photometry fails in both regimes.

## the linear regime

ideally, pixel output (in ADU) is exactly proportional to integrated electrons:
$$N_{\rm ADU} = N_{\rm e^-}/g$$

deviations from this linearity are typically $< 0.5\%$ for $0$ to $\sim 70\%$ of full well, and grow toward saturation. the "linear regime" is conventionally taken to extend to $50\%$ to $70\%$ of full well capacity for safe photometry.

practical exposure-planning rule: **aim for peak source flux at $\sim 50\%$ of full well**. this gives margin against unexpected brightening (atmospheric variations, asteroids passing through, etc.) and stays well within the linear regime.

### linearity correction

if the response is well-characterised, residual non-linearity can be calibrated and removed:
$$N_{\rm e^-, true} = f_{\rm lin}(N_{\rm e^-, obs})$$
typically a low-order polynomial fit. needed for high-precision photometry approaching the well limit.

## saturation and full-well

at the **full-well capacity** ($\sim 10^5$ to $10^6$ electrons), the potential well is full and additional charge has nowhere to go. consequences:
- **flat output**: pixel reads the same value regardless of additional photons.
- **blooming**: surplus charge spills along the column to neighbouring pixels, creating bright vertical streaks. visible as extended bleed columns from saturated stars.
- **anti-blooming gates**: some CCDs have drains that absorb overflow charge. limits well capacity but reduces blooming.

### consequences for photometry

if a source pixel is above $\sim 80\%$ of full well, you cannot trust the integrated flux. options:
1. **shorter exposure**: drop $t$ until peak is below limit.
2. **defocus**: spread the PSF over more pixels, lowering peak per-pixel signal.
3. **neutral-density filter**: reduce throughput.
4. **narrower filter**: less sky and source flux per second.

for survey design, this sets the **bright limit** of any survey: stars brighter than some magnitude saturate the detector and cannot be measured.

## ghosts and persistence

at very bright sources, pixels can develop **persistent images** that bleed into subsequent exposures. mostly an issue for IR detectors (HgCdTe) but can affect CCDs near saturation. mitigated by exposing a "clean" frame after each saturated source, or running a reset cycle.

## why the linear regime matters

the entire photometric calibration chain assumes linearity:
- flat-field correction: linear pixel-by-pixel scaling.
- aperture photometry: summing assumes linearity.
- magnitude derivation: $m = -2.5\log F$ assumes $F$ is the true total source flux.

a bright star whose central pixel is non-linear or saturated will have its photometry **systematically wrong** even after aperture correction; the fix is either to mask saturated pixels and PSF-fit only the unsaturated wings, or to discard the source entirely.

## the bright/faint limit problem in surveys

every survey has both:
- **faint limit**: where SNR drops below threshold (e.g. $5\sigma$).
- **bright limit**: where saturation begins.

dynamic range = bright magnitude - faint magnitude ≈ $\sim 16$ to $20$ mag for a typical CCD survey. surveys solve this by:
- multiple exposure depths (short for bright, long for faint).
- Sloan-style "ubercalibration" tying the depths together.

## see also

- [CCD basics](../../02_Zettel/Theory/CCD basics.html)
- [CCD calibration steps](../../02_Zettel/Theory/CCD calibration steps.html)
- [CCD readout chain](../../02_Zettel/Theory/CCD readout chain.html)
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.html)
- [PSF photometry](../../02_Zettel/Theory/PSF photometry.html)
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.html)
- [The CCD equation](../../02_Zettel/Theory/The CCD equation.html)
