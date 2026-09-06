---
layout: default
title: "Strong vs weak lensing"
---

**strong lensing** produces multiple images, arcs, or rings. **weak lensing** produces tiny ($\sim 1\%$) shape distortions of background galaxies. each gives different cosmological information.

## strong lensing

### the regime
mass concentration high enough that surface mass density exceeds the **critical surface density**:
$$\Sigma_{\rm crit} = \frac{c^2}{4\pi G}\frac{d_S}{d_L\,d_{LS}}$$

at galaxy + cluster scales, $\Sigma_{\rm crit} \sim 2$ kg/m$^2$. galaxy clusters routinely exceed this in their central regions.

### the observables
- **multiple images** of a background source.
- **giant arcs** (extended shape distortions of a background galaxy).
- **Einstein rings** (perfect alignment of source-lens-observer; rare).
- **time delays** between multiple images (from differing path lengths). used for $H_0$ measurement.

### what it teaches

- **lens mass profile**: locations + flux ratios of multiple images constrain the mass distribution within the lens.
- **dark matter mapping**: total lens mass = stellar + dark matter; subtract stellar from light distribution to get dark.
- **time-delay $H_0$**: independent of distance ladder. $H_0$ to $\sim 5\%$ precision (TDCOSMO, H0LiCOW).

### canonical examples

- **galaxy-galaxy lensing** (SLACS): foreground elliptical galaxies lensing background galaxies. ~ Einstein-ring shape gives lens mass within Einstein radius.
- **cluster lensing** (Abell 370, Bullet Cluster): multiple arcs + dark matter mapping.
- **lensed quasars** (Q0957, RXJ1131): twin/quad images, time delays measured.

## weak lensing

### the regime
foreground mass is **diffuse**. deflection $\Delta\theta$ is small compared to the source's angular size. so the source isn't multiply imaged, just slightly **sheared** in shape.

### the observables
**shape distortions** ($\sim 1\%$) of background galaxies. statistical: average over **many** galaxies to measure the **shear field** $\gamma(\theta)$ on the sky.

### what it teaches

- **mass-sheet** at each line of sight: integrated mass projected onto the sky.
- **two-point correlation** of $\gamma$: encodes the matter power spectrum.
- **dark-matter distribution** in clusters and large-scale structure.
- **cosmological parameters** $\Omega_m$, $\sigma_8$ from weak lensing tomography (DES, KiDS, HSC).

### key surveys

- **DES** (Dark Energy Survey): $\sim 5000$ deg$^2$, $z = 0$ to $1.5$, $\sim 100$ million galaxies.
- **KiDS** (Kilo-Degree Survey): $\sim 1500$ deg$^2$, similar scope.
- **HSC** (Hyper Suprime-Cam Survey): $\sim 1000$ deg$^2$ at $z$ to $\sim 1.5$.
- **Euclid** (launching 2023): all-sky weak lensing.
- **LSST** (Vera Rubin, soon): tens of billions of galaxies.

## comparison

| feature | strong | weak |
|---|---|---|
| mass needed | high concentration | diffuse |
| observables | multiple images, arcs, rings | shape distortions |
| number of sources | tens per lens | millions in survey |
| info per measurement | local mass profile | statistical |
| science | dark matter in lenses, $H_0$ | cosmological parameters, $\sigma_8$, $\Omega_m$ |

both are essential complementary probes.

## see also

- Gravitational lensing — intro
- [Lensing as a cosmological probe](../../02_Zettel/Theory/Lensing as a cosmological probe.md)
- [Light deflection](../../02_Zettel/Theory/Light deflection.md)
- [Cosmic_inventory_dark_matter](../../02_Zettel/Theory/Cosmic_inventory_dark_matter.md)
- 03_Zettel/Theory/Cosmological distances
- [ΛCDM current parameters](../../02_Zettel/Theory/ΛCDM current parameters.md)
- [Hubble law](../../02_Zettel/Theory/Hubble law.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
