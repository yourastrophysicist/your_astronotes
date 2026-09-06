---
layout: default
title: "Calibration overview"
---

# Calibration overview

raw visibilities are *not* science. the path from correlator output to publishable image involves multiple calibration stages, each correcting a specific instrumental or atmospheric effect. understanding the order and purpose of each step is essential for both observers and theorists interpreting interferometric data.

## the calibration cascade

```
raw visibilities →
  flagging (remove RFI, bad data) →
  bandpass calibration (frequency response) →
  flux calibration (absolute scale) →
  phase calibration (atmosphere, instrumental) →
  self-calibration (refine using science target) →
  imaging (CLEAN) →
  science-ready image
```

each stage requires a specific *type* of observation, taken alongside the science observations.

## flagging

remove data corrupted by:
- **RFI**: terrestrial transmitters, satellites, cell phones
- **shadowing**: one antenna shadowed by another
- **pointing errors**: target outside primary beam
- **noisy channels**: dead receiver components

automated flagging (CASA's `flagdata`, AOFlagger) handles most cases. manual flagging cleans up edge cases.

## bandpass calibration

each antenna's frequency response is not flat — different gain at different frequencies. measure with a **bandpass calibrator**: a strong, spectrally-flat source (often a known quasar like 3C 286 or 3C 48). divide each antenna's spectrum by this measured shape.

result: each antenna now has a flat (instrumental) response across frequency.

## flux calibration

the *absolute* flux scale is set by observing a **flux calibrator**: a source whose flux density is known to a few percent. typically:
- bright planets (Mars, Neptune): well-constrained continuum spectra
- bright quasars (3C 286, 3C 48): with measured spectra from multiple-band campaigns
- known asteroids (Vesta, Ceres): for very high frequencies

the comparison between observed and known flux gives the absolute gain factor that converts correlator output to physical flux density (Jy).

## phase calibration

the atmospheric phase is changing, and instrumental phases drift slowly. observe a **phase calibrator** every few minutes — a compact source within ~5° of the target whose true position is known. apply the measured calibrator-to-target phase difference to correct the target visibilities.

frequency: every 5-10 minutes for high-frequency observations (more atmospheric stability needed); every 15-30 minutes for lower frequencies.

## polarization calibration

if observing in full polarization (Stokes I, Q, U, V):
- **leakage calibration**: a flat-spectrum, unpolarized calibrator measures the parallel-vs-cross-polarization gain mismatch ("D-terms")
- **polarization angle calibration**: a known-polarized source sets the absolute angle reference

without these, polarization measurements are biased.

## the order matters

each calibration step assumes the *previous* steps have been applied:
- bandpass before flux (need flat spectrum to normalize)
- flux before phase (need flux scale to weight phase data)
- phase before self-cal (need rough phase to identify peak in dirty image)

skipping or reordering steps gives wrong answers.

## delay calibration

before correlation, geometric delays are subtracted (in the correlator). after correlation, residual delays from clock drift, cable-length changes, or model errors must be calibrated:

- **delay calibrator**: a strong source whose phase across frequency is *flat* (within a few wavelengths)
- determine the slope of phase vs frequency for each antenna pair
- subtract this slope from the science visibilities

frequent for VLBI; rare for connected-element interferometers (where the LO is locked).

## the calibration in CASA

modern radio data reduction is done in **CASA** (Common Astronomy Software Application). a typical script:

```python
gencal(vis='target.ms', caltable='gain.cal', ...)  # gain calibration
applycal(vis='target.ms', gaintable='gain.cal')    # apply
bandpass(vis='target.ms', caltable='bp.cal', ...)  # bandpass
applycal(vis='target.ms', gaintable=['gain.cal','bp.cal']) # combined
fluxscale(vis='target.ms', ...)                    # flux
gaincal(vis='target.ms', caltable='phase.cal', ...) # phase
applycal(vis='target.ms', gaintable=[...])         # final
```

modern VLA/ALMA pipelines automate this with parameters tuned per dataset.

## the self-cal step

after the standard cascade, run **self-calibration** on the science target itself:

1. CLEAN the calibrated dirty image to get a model of the source
2. compute predicted visibilities from the model
3. compare to measured visibilities, derive residual gain/phase corrections
4. apply corrections, re-CLEAN, iterate

self-cal works because the *source itself* provides better gain/phase information than infrequent calibrator observations. for compact bright sources, self-cal can improve image dynamic range by 10-100×.

## the calibration uncertainty budget

every calibration step introduces some uncertainty:
- bandpass: ~1% typical
- flux: ~3-5% (limited by primary calibrator absolute fluxes)
- phase: ~1° per 10-minute switching cycle
- polarization: ~1% for D-terms, ~1° for absolute angle

these add (in quadrature) to give the total systematic uncertainty on visibility measurements. for radio source modeling, this is often the dominant noise source.

## BookAI expansion

BookAI frames calibration as part of the observing workflow, not just data reduction. the full chain is:

```text
science goal -> array configuration -> sensitivity estimate -> calibrator choice -> scheduling block -> observation -> flagging -> calibration -> imaging -> deconvolution -> interpretation
```

basic measurement equation:

$$V_{ij}^{\rm obs}=g_i g_j^*V_{ij}^{\rm true}+n_{ij}$$

where $g_i$ and $g_j$ are complex antenna gains. the standard calibrator roles are:

- **flux calibrator**: sets the absolute brightness scale
- **bandpass calibrator**: corrects frequency response
- **phase calibrator**: tracks time-variable phase/gain
- **polarization calibrator**: solves leakage and angle if needed

BookAI's practical point: a final image is already determined by choices made before observation, especially configuration, calibrator cadence, bandwidth, and integration time. see [Steps in radio interferometric observations](../../../02_Zettel/Theory/interf/Steps in radio interferometric observations.html).

## scientific figure

<img src="{{ "/assets/images/radio_observing_workflow.svg" | relative_url }}" alt="radio_observing_workflow" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: calibration is the middle of the observing story. the raw visibility is not yet astrophysics; gains, bandpass, flux scale, and phase behavior must be solved before imaging.

source: local workflow diagram generated from the standard radio-reduction sequence.

## see also

- [Bandpass calibration](../../../02_Zettel/Theory/interf/Bandpass calibration.html)
- [Flux calibration](../../../02_Zettel/Theory/interf/Flux calibration.html)
- [Phase referencing](../../../02_Zettel/Theory/interf/Phase referencing.html)
- [Self-calibration](../../../02_Zettel/Theory/interf/Self-calibration.html)
- [Polarization in interferometry](../../../02_Zettel/Theory/interf/Polarization in interferometry.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
