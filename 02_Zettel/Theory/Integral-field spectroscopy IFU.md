---
layout: default
title: "Integral-field spectroscopy IFU"
---

an **integral-field spectrograph** produces a **datacube** $(x, y, \lambda)$: a spectrum at every spatial position in a 2D field of view. it is the natural instrument for spatially resolved physics of extended objects (galaxies, planetary nebulae, AGN narrow-line regions, lensing arcs).

## the technologies

three main IFU implementations:

### lenslet array
a 2D array of microlenses at the focal plane. each lenslet condenses one spatial element ("spaxel") of the field onto a small spot, and the spots are arranged for the spectrograph. each spot becomes one short spectrum on the detector.

example: SAURON (WHT, 1999), OSIRIS (Keck), GMOS-IFU.

advantage: simple, no fibers. disadvantage: spaxels and spectra both share the detector, limiting wavelength range or field size.

### lenslets + fibers
each lenslet feeds an optical fiber that carries light to a remote spectrograph. the fibers are reformatted into a single linear **pseudoslit** at the spectrograph's input. each fiber gives one full-length spectrum on the detector.

example: VIMOS-IFU (VLT, retired), MaNGA (SDSS-IV), KMOS (VLT, multiple IFUs simultaneously), SAMI.

advantage: large field, full spectrum per spaxel. disadvantage: fiber losses.

### image slicer
a stack of small mirrors slices the 2D field into thin strips, then realigns the strips into a single line at the spectrograph's input. the slicer + spectrograph effectively reformats the 2D field into a 1D pseudoslit.

example: **MUSE** (VLT, 2014), **KCWI** (Keck), **NIRSpec IFU** (JWST), MIRI/MRS (JWST).

advantage: high throughput, no fibers. disadvantage: complex optics, narrow field.

## the datacube

the output of an IFU observation is a 3D datacube with axes $(x, y, \lambda)$. you can:
- **collapse along $\lambda$** at a chosen line $\to$ a narrow-band image of that emission/absorption.
- **fit a profile at each spaxel** $\to$ kinematic map (velocity, dispersion).
- **integrate along spatial axes** $\to$ a 1D spectrum of any chosen aperture.
- **stack many spaxels** $\to$ low-SNR features become detectable.

this is the most information-rich observation per unit telescope time you can get; the data volume is huge.

## flagship instruments

### MUSE (VLT, 2014)
- field of view: $1' \times 1'$ (wide-field) or $7.5'' \times 7.5''$ (narrow-field with AO).
- spaxels: $300 \times 300$ ($90\,000$ spectra simultaneously).
- $R \sim 1700$ (blue) to $3500$ (red).
- $\lambda$ coverage: $4750$ to $9350$ Å.
- science: galaxy kinematics, lensing arcs, planetary nebulae, AGN, star clusters.

### KCWI (Keck)
- $20'' \times 33''$ field, $R \sim 4000$ to $20\,000$.
- emphasis on UV ($3500$ to $5600$ Å, optimised for high-$z$ Ly$\alpha$ work).

### MaNGA (SDSS-IV)
- a fiber-IFU survey of $\sim 10\,000$ nearby galaxies.
- $19$ to $127$ fibers per IFU, multiple IFUs simultaneously.
- $R \sim 2000$.
- science: spatially resolved galaxy properties (kinematics, abundances, age) for entire morphological classes.

### NIRSpec IFU (JWST)
- $3'' \times 3''$ field, $R \sim 100$ to $2700$ depending on grating.
- $\lambda = 0.6$ to $5.3\,\mu$m.
- science: high-$z$ galaxy kinematics, transit spectra, exoplanet host environments.

## science cases

- **galaxy kinematics**: rotation curves, velocity dispersion maps, dynamical masses (CALIFA, MaNGA, SAMI surveys).
- **AGN narrow-line regions**: ionisation cones, outflow kinematics.
- **planetary nebulae**: 3D structure, ionisation stratification.
- **gravitational arcs**: redshift mapping of lensed sources.
- **stellar populations**: spaxel-by-spaxel age-metallicity-extinction maps.

## see also

- [Spectrograph types](../../02_Zettel/Theory/Spectrograph types.html)
- [Multi-object spectroscopy MOS](../../02_Zettel/Theory/Multi-object spectroscopy MOS.html)
- [Echelle spectroscopy](../../02_Zettel/Theory/Echelle spectroscopy.html)
- [Spectrograph design](../../02_Zettel/Theory/Spectrograph design.html)
- [Survey resources for Obs Astro](../../02_Zettel/Theory/Survey resources for Obs Astro.html)
- [Galaxy main sequence of star formation](../../02_Zettel/Theory/Galaxy main sequence of star formation.html)
- [Velocity dispersion from line width](../../02_Zettel/Theory/Velocity dispersion from line width.html)
