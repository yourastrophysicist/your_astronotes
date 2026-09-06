---
layout: default
title: "MaNGA survey"
---

**Mapping Nearby Galaxies at Apache Point (MaNGA)** is the SDSS-IV survey using IFU spectroscopy to map $\sim 10\,000$ nearby galaxies. enables spatially-resolved study of stellar populations + kinematics + ionised gas across the Hubble sequence. one of the largest IFU surveys to date.

## the survey

- **dates**: 2014 to 2020.
- **target sample**: $\sim 10\,000$ galaxies at $z = 0.01$ to $0.15$.
- **selection**: roughly mass-balanced sample across $\log M_* = 9$ to $11.5\,M_\odot$.
- **bands**: $u, g, r, i, z$ photometry + IFU spectra.
- **instrument**: SDSS 2.5m + the BOSS spectrograph + bundle of fibre IFUs (19, 37, 61, 91, 127 fibres per IFU).

## the IFU bundles

each galaxy is mapped with one of 5 fibre IFU bundles, sized to cover $1$ to $2.5\,r_e$ at the galaxy distance. fibre size: $2''$. spectral coverage: $3600$ to $10300$ Å, $R \sim 2000$.

so each galaxy has **hundreds to thousands of independent spectra** across its image, providing a 2D kinematic + stellar-population map.

## the data products

per galaxy:
- **stellar kinematics map**: $v(x, y), \sigma(x, y), h_3(x, y), h_4(x, y)$.
- **emission-line maps**: H$\alpha, H\beta, [OIII], [NII], [SII]$ flux maps + kinematics.
- **stellar-population maps**: age, metallicity, $\alpha$/Fe via spectral fitting.
- **dust maps** via Balmer decrement.
- **ionisation classification** (BPT) per spaxel.
- **mass + SFR maps**.

## the science goals

MaNGA enables:

### kinematics across morphology

map $\lambda_R$ for thousands of galaxies. confirm fast-rotator vs slow-rotator distinction. find that slow rotators are mostly massive ellipticals.

### stellar-population gradients

age + metallicity + $\alpha$/Fe gradients across galaxies. ellipticals have **negative metallicity gradients** (metal-rich centre, metal-poor outskirts) + flat or slightly positive $\alpha$/Fe gradients.

interpretation: inside-out formation; central regions formed first + on shorter timescales.

### gas vs stellar kinematics

ionised gas (H$\alpha$, $[OIII]$) often shows different kinematics from stars. signs of:
- **ongoing accretion** (counter-rotating gas vs stars).
- **outflows** (broad-velocity emission from galactic winds).
- **AGN-driven kinematics**.

### environment effects

cluster vs field galaxies in MaNGA. cluster spirals show truncated H$\alpha$ disks (ram-pressure stripping). passive ellipticals dominate cluster cores.

### barred galaxies

high-resolution kinematics of bars + bulge-bar-disk decompositions. test bar-driven secular evolution.

## the reduction pipeline

raw IFU exposures $\to$ row-stacked spectra $\to$ wavelength + flux calibrated 1D spectra per fibre $\to$ rebinned + combined into a 3D **datacube** (RA, Dec, $\lambda$). distributed in standard FITS format.

modern data release (DR17, 2021): full sample of $\sim 10\,000$ galaxies + their datacubes + derived value-added catalogs.

## the comparison with other IFU surveys

| survey | $N$ galaxies | $z$ | spectral $R$ |
|---|---|---|---|
| SAURON | $\sim 100$ | $\sim 0$ | $\sim 1500$ |
| ATLAS3D | $\sim 260$ | $\sim 0$ | $\sim 1500$ |
| CALIFA | $\sim 600$ | $\sim 0.02$ | $\sim 1700$ |
| **MaNGA** | $\sim 10^4$ | $0.01$ to $0.15$ | $\sim 2000$ |
| SAMI | $\sim 3000$ | $\sim 0.05$ | $\sim 1700$ |
| Hector (planned) | $\sim 15\,000$ | $\sim 0.05$ | $\sim 2000$ |

so MaNGA is the **statistical workhorse** of nearby IFU astronomy.

## see also

- [Integral-field spectroscopy IFU](../../02_Zettel/Theory/Integral-field spectroscopy IFU.html)
- [Stellar kinematics measurements](../../02_Zettel/Theory/Stellar kinematics measurements.html)
- [LOSVD](../../02_Zettel/Theory/LOSVD.html)
- [SDSS overview](../../02_Zettel/Theory/SDSS overview.html)
- [Galaxy spectroscopy by type](../../02_Zettel/Theory/Galaxy spectroscopy by type.html)
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
