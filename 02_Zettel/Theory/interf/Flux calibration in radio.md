---
layout: default
title: "Flux calibration in radio"
---

# Flux calibration (radio interferometry)

set the *absolute* flux scale of a radio observation by tying it to a known reference. the second step (after bandpass) in radio data reduction. essential for any quantitative radio measurement.

(for *spectroscopic* flux calibration, see [Flux calibration](../../../02_Zettel/Theory/interf/Flux calibration.html) for stellar spectra.)

## the issue

after correlation, the visibility is in *correlator units* — typically dimensionless. converting to physical units (Jy) requires a known-flux reference.

the visibility for a known calibrator at a measured value sets the conversion factor:

$$\text{conversion factor} = \frac{S_{\rm cal,true}(\nu)}{|V_{\rm cal,measured}(\nu)|}$$

apply this factor to the science target to get its flux in Jy.

## standard primary radio flux calibrators

### planets

- **Mars, Jupiter, Saturn, Neptune**: thermal spectra modeled from atmospheric models. fluxes ~10-1000 Jy at radio. uncertainty ~3-10%, depending on band and time of year
- **asteroids (Vesta, Ceres)**: smaller, weaker, but more spectrally clean

### radio quasars

- **3C 286 and 3C 48**: the *primary* radio calibrators, with measured spectra from 50 MHz to 50 GHz at ~1-3% precision. spectra reduced as polynomial fits in $\log\nu$ vs $\log S$. standard formulas in CASA: `setjy(field='3C286', model='3C286_C.im')`
- **3C 84**: variable but useful as secondary

## the calibration step

after bandpass correction:

1. observe the flux calibrator (e.g. 3C 286) for ~5-10 minutes
2. measure the calibrator's *amplitude* and *flux* in CASA: `gaincal(...)`
3. set the model spectrum: `setjy(field='3C286', model='3C286_C.im', spw='*')`
4. transfer the flux scale to *all other observations* via `fluxscale(...)`

## the precision

typical flux calibration precision:
- **routine**: 5-10%
- **high-precision**: 3-5% (with multiple primary calibrators)
- **best case**: ~1%

so the *systematic* flux scale uncertainty often dominates statistical errors for bright sources.

## the secondary calibrator approach

often easier to:
1. observe one *primary* flux calibrator (usually distant from target)
2. observe a *secondary* phase calibrator (close to target)
3. transfer flux from primary to secondary, then from secondary to target

CASA's `fluxscale` automates this two-step transfer.

## the flux calibration in mm-wave

for ALMA:
- planets are most commonly used
- atmospheric absorption is critical — must be calibrated separately
- flux uncertainties larger at higher frequencies (~10% at ALMA Band 10)

## what can go wrong

three:

### 1. wrong calibrator model

if assumed model spectrum is wrong, absolute scale is wrong by that amount.

### 2. atmospheric absorption errors

for high-frequency observations, atmospheric absorption between calibrator and target may differ.

### 3. resolved calibrator

if "calibrator" is partially resolved, naive flux transfer underestimates the conversion factor.

## see also

- [Calibration overview](../../../02_Zettel/Theory/interf/Calibration overview.html)
- [Bandpass calibration](../../../02_Zettel/Theory/interf/Bandpass calibration.html)
- [Phase referencing](../../../02_Zettel/Theory/interf/Phase referencing.html)
- [Self-calibration](../../../02_Zettel/Theory/interf/Self-calibration.html)
- [Flux calibration](../../../02_Zettel/Theory/interf/Flux calibration.html) — for stellar spectra (different topic)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
