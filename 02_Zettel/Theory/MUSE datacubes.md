---
layout: default
title: "MUSE datacubes"
---

# muse datacubes

up: [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md) · [Datacube reduction](../../02_Zettel/Theory/Datacube reduction.md)

## instrument characteristics

The Multi Unit Spectroscopic Explorer (MUSE) is a second-generation panoramic integral-field spectrograph mounted on the Nasmyth B focus of UT4 (Yepun) at the ESO Very Large Telescope (VLT), Cerro Paranal.

- **Wide Field Mode (WFM)**:
  - Field of view: $1' \times 1'$
  - Spatial sampling: $0.2'' \times 0.2''$ per spaxel
  - Wavelength range: $4800\text{ \AA} - 9300\text{ \AA}$
  - Resolving power: $R \approx 1770$ at $4800\text{ \AA}$ to $R \approx 3590$ at $9300\text{ \AA}$
- **Narrow Field Mode (NFM)**:
  - Laser Guide Star AO (GALACSI system with 4 sodium lasers)
  - Field of view: $7.5'' \times 7.5''$
  - Spatial sampling: $0.025'' \times 0.025''$ (near diffraction limit)
  - Core black hole sphere of influence studies.

## datacube structure in fits

A typical reduced MUSE cube contains:
- `PRIMARY`: metadata, observing conditions, astrometry.
- `DATA`: 3D flux array $[N_\lambda, N_y, N_x]$ with $\sim 3700$ spectral channels and $300 \times 300$ spatial pixels.
- `STAT`: 3D variance array $\sigma^2(x, y, \lambda)$ propagated through every reduction step.

## primary astrophysical applications

- **stellar kinematics**: extracting $V$ and $\sigma$ via penalized pixel-fitting (pPXF).
- **ionized gas kinematics**: mapping emission lines ($[\text{O III}]$, $\text{H}\alpha$, $[\text{N II}]$, $[\text{S II}]$) to probe disks, outflows, and non-circular motions.
- **resolved stellar populations**: mapping age, metallicity, and $[\alpha/\text{Fe}]$ gradients across galaxy disks and bulges.
- **deep-field cosmology**: blind detection of high-$z$ Ly$\alpha$ emitters without photometric pre-selection.

## connections

- pipeline: [Datacube reduction](../../02_Zettel/Theory/Datacube reduction.md)
- kinematics: [Ionized gas kinematics](../../02_Zettel/Theory/Ionized gas kinematics.md), [Stellar kinematics measurements](../../02_Zettel/Theory/Stellar kinematics measurements.md)
