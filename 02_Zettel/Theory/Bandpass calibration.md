---
layout: default
title: "Bandpass calibration"
---

# Bandpass calibration

flatten the frequency response of each antenna and the receiver chain. the first step (after flagging) in radio data reduction. essential for any spectral-line work and important for continuum.

## the issue

the receiver-correlator chain has a *non-flat* frequency response. the gain $G_i(\nu)$ at antenna $i$ varies across the band: higher in some channels, lower in others, due to:
- bandpass filters in the LO + IF chain
- amplifier roll-off near band edges
- frequency-dependent feed-horn coupling
- imperfect digital filterbank shapes

without correction, the *measured* visibility has the bandpass shape baked in:
$$V_{\rm meas}(\nu) = V_{\rm true}(\nu) \cdot G_1(\nu) G_2^*(\nu)$$

so spectral-line measurements look distorted, and continuum photometry is biased.

## the procedure

observe a **bandpass calibrator**: a strong source with known *flat* spectrum (or known parameterized spectrum). standard choices:
- **3C 286**: ~7 Jy at 1.4 GHz, well-characterized spectrum from 50 MHz to 50 GHz
- **3C 48**: similar, slightly fainter
- **3C 84**: variable but still useful
- bright planets (Mars, Jupiter): well-known thermal spectra, used as flux calibrators *and* bandpass shapes

the observation:
1. observe the bandpass calibrator for ~5-10 minutes
2. for each antenna, divide the observed visibility spectrum by the expected source spectrum
3. the result is the antenna's *bandpass*, $B_i(\nu)$
4. apply the inverse bandpass to all subsequent science observations

## complex bandpass

the bandpass has both **amplitude** and **phase** components:

$$B_i(\nu) = |B_i(\nu)| \cdot e^{i \phi_i(\nu)}$$

both vary with frequency. amplitude variations cause spectral-line distortions; phase variations cause spectral-position errors. a good bandpass calibration corrects both.

## the bandpass solver

modern CASA implementation:
```python
bandpass(vis='target.ms',
         caltable='bp.cal',
         field='3C286',           # bandpass calibrator
         refant='ea01',           # reference antenna (defines phase zero)
         solnorm=True,            # normalize so mean = 1
         spw='0~3',               # spectral windows to solve
         minblperant=4)           # min baselines per antenna
```

result: a calibration table containing $B_i(\nu)$ for each antenna and channel.

## the smoothing

raw bandpass solutions are noisy at the channel level (limited photons per channel). smoothing improves SNR at the cost of throwing away fine spectral structure:
- **frequency smoothing**: average over several adjacent channels
- **time smoothing**: average over multiple observations (assumes bandpass is stable)

modern observations use *no smoothing* in regions of interest, smoothing only in well-behaved off-line regions.

## the typical lifetime

a single bandpass calibration lasts:
- **CEIs (VLA, ALMA)**: hours to days. bandpass is mostly stable
- **VLBI**: bandpass per session. cross-correlation between sessions involves additional calibration
- **broad-band correlators**: smaller wavelet effects per-channel, can be modeled per-session

so a single bandpass observation per session is typically sufficient.

## what can go wrong

three:

### 1. wrong calibrator spectrum

if the assumed source spectrum is off by, e.g., 5% at one end of the band, the bandpass solution is biased by that amount. solutions: use the most-recently-measured spectrum; cross-check with multiple calibrators.

### 2. RFI in the calibrator data

if the bandpass calibrator data has RFI in some channels, those channels' bandpass is wrong. solution: flag RFI before solving, then solve.

### 3. variability of calibrator

3C 84 is notoriously variable — useful as a *secondary* calibrator but not primary. for high-precision work, observe a *list* of several bandpass calibrators per session.

## the legacy of poor bandpass

a common cause of bad images: incorrect bandpass leaves residual spectral structure that propagates into the dirty image as spurious sources or "negative bowls." good practice: always verify the bandpass solution before applying it (look at the calibration plot, check for outliers).

## see also

- [Calibration overview](../../02_Zettel/Theory/interf/Calibration overview.html)
- [Flux calibration](../../02_Zettel/Theory/interf/Flux calibration.html)
- [Phase referencing](../../02_Zettel/Theory/interf/Phase referencing.html)
- [Self-calibration](../../02_Zettel/Theory/interf/Self-calibration.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
