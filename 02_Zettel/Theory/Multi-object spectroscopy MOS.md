---
layout: default
title: "Multi-object spectroscopy MOS"
---

**multi-object spectroscopy** acquires spectra of many targets simultaneously across the focal plane. the workhorse of redshift-survey astronomy.

## the two implementations

### slit-mask MOS

a custom-cut **mask** with multiple short slits at the positions of pre-selected targets. the focal-plane image lands on the mask; only light passing through the slits enters the spectrograph. the dispersing element produces a stack of short spectra on the detector, one per slit.

- **slit width**: $\sim 1''$ to $2''$.
- **slit length**: typically $\sim 5''$ to $20''$ to allow sky-subtraction with the target plus its surroundings.
- **multiplexing**: $\sim 30$ to $100$ slits per mask, depending on target density and dispersion length.
- **mask manufacture**: laser- or plasma-cut from imaging data taken in advance.

examples: VIMOS-MOS (VLT, retired), FORS2-MXU (VLT), DEIMOS (Keck), LDSS-3 (Magellan).

### fiber-fed MOS

optical **fibers** are positioned at target locations in the focal plane (manually or by robots). the fibers carry light to a remote spectrograph where they are arranged in a single linear pseudoslit. each fiber = one target.

- **fiber diameter**: $\sim 2''$ to $3''$ on the sky.
- **multiplexing**: thousands of fibers in modern systems.
- **positioning**: robotic in modern instruments (DESI: $5000$ fibers, repositioned in $\sim 30$ s; LAMOST: $4000$).

examples: SDSS BOSS/eBOSS ($1000$ fibers), DESI ($5000$), LAMOST ($4000$), 4MOST ($2436$), MOONS (VLT, $1000$).

## the science cases

### redshift surveys

the most-cited use. measure spectroscopic redshifts of $\sim 10^7$ to $10^8$ galaxies/quasars to map large-scale structure.
- **SDSS / BOSS / eBOSS**: $> 5 \times 10^6$ galaxies, redshift catalog backbone of cosmology since 2000.
- **DESI** (2021-2026): $40 \times 10^6$ targets to constrain BAO + RSD + dark energy.
- **4MOST** (starting 2025): southern complement to DESI.

### stellar surveys

galactic-archaeology and chemical-evolution surveys.
- **APOGEE** (SDSS-III/IV): NIR spectra of $\sim 10^6$ Galactic stars.
- **GALAH** (HERMES on AAT): $\sim 10^6$ stars, $30$ elements per star.
- **Gaia-ESO**: $10^5$ stars in clusters and field for abundances + kinematics.

### cluster + field galaxy spectroscopy

velocity dispersions, mass measurements, star-formation classification.

## practical issues

- **target selection**: must be done from imaging in advance.
- **slit/fiber assignment**: optimisation problem (avoid collisions between adjacent fibers; cover as many targets as possible).
- **sky subtraction**: small slits limit local sky; fibers need dedicated sky fibers spread across the field.
- **flux calibration**: harder than longslit because each fiber/slit has a slightly different throughput; cross-calibration via standard star fibers and sky-line normalisation.

## limits

- **lower $R$** than echelle: typical $R \sim 1000$ to $5000$. high-$R$ MOS is hard.
- **smaller wavelength range** than longslit echelle.
- **target density**: fiber MOS has minimum fiber separation, so very dense fields (cluster centres) saturate. multi-pass observing with different mask configurations.
- **calibration overhead**: a typical MOS night spends substantial time on flat fields and arc lamps because of the per-fiber variations.

## see also

- [Spectrograph types](../../02_Zettel/Theory/Spectrograph types.md)
- [Spectrograph design](../../02_Zettel/Theory/Spectrograph design.md)
- [Echelle spectroscopy](../../02_Zettel/Theory/Echelle spectroscopy.md)
- [Integral-field spectroscopy IFU](../../02_Zettel/Theory/Integral-field spectroscopy IFU.md)
- [Wavelength calibration](../../02_Zettel/Theory/Wavelength calibration.md)
- [Flux calibration](../../02_Zettel/Theory/interf/Flux calibration.md)
- [Survey resources for Obs Astro](../../02_Zettel/Theory/Survey resources for Obs Astro.md)
- [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.md) — what MOS surveys spectroscopically confirm
