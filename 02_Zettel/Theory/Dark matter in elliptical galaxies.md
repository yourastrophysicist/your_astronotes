---
layout: default
title: "Dark matter in elliptical galaxies"
---

**ellipticals don't have a clean rotation curve** like spirals (they're dispersion-dominated, not rotation-dominated). but other techniques reveal that ellipticals also have **dark-matter halos**, comparable to or larger than spirals' at fixed mass.

## the challenge

ellipticals lack:
- regular rotation: kinematics dominated by dispersion $\sigma$, not $V$.
- HI gas: little neutral H to trace at large radii.
- bright HII regions: sparse in old populations.

so the "rotation curve" technique fails. need other tracers.

## the techniques

### 1. X-ray hot gas

bright ellipticals + groups + clusters have hot ($T \sim 10^7$ K) X-ray-emitting **interstellar / intergalactic gas**. assuming hydrostatic equilibrium:
$$\frac{dP}{dr} = -\rho\,GM(r)/r^2$$

with $P = n k T$. measuring $T(r), n(r)$ from X-ray spectra + imaging gives $M(r)$ directly.

result: massive ellipticals (M87, NGC 1399, etc.) have $M_{\rm tot}/M_* \sim 10$ to $50$ within $r \sim 100$ kpc. **substantial dark matter**.

### 2. globular cluster + planetary nebula kinematics

GCs + PNe are **discrete kinematic tracers** of the elliptical's velocity field at large radii (out to $\sim 5 r_e$). measure their radial velocities + apply Jeans modelling:
$$\frac{d(\rho\sigma_r^2)}{dr} + \frac{2\beta\rho\sigma_r^2}{r} = -\rho\,GM(r)/r^2$$

with $\beta$ = velocity anisotropy. result: enclosed mass profile.

modern surveys: **PN.S** (Planetary Nebula Spectrograph) for nearby ellipticals; **SLUGGS** for GCs in nearby ETGs.

### 3. stellar kinematics
inner regions: longslit + IFU (MaNGA, ATLAS3D) measure $\sigma(R)$ + apply Jeans modelling. typically reach $\sim 1$ to $2 r_e$.

### 4. strong + weak lensing
ellipticals' projected mass within the Einstein radius from strong lensing of background galaxies. weak lensing of background galaxies maps mass profile out to $\sim 100\,h^{-1}$ kpc.

modern: **SLACS** (Sloan Lens ACS) sample of $\sim 100$ lensing ellipticals + Einstein-radius mass measurements.

## the results

combined techniques: ellipticals have:
- **inner regions** ($r \lesssim r_e$): dominated by stars, $M_*/L \sim 5$ to $10$.
- **outer regions** ($r > r_e$): increasingly dark-matter-dominated, $M_{\rm tot}/L$ rises to $\sim 30$ to $100$ at $5 r_e$.
- **total halo mass**: $M_{\rm halo} \sim 10$ to $30 \times M_*$ for typical massive ellipticals.

similar to spirals' halos at the same total mass.

## the dark halo profiles

NFW + Einasto profiles fit the data adequately. but uncertainties large because of the modelling complexities (anisotropy, non-spherical shapes, radial coverage).

## the universality

**$\Lambda$CDM predicts** that all galaxies sit in dark halos following NFW. ellipticals confirm this. their $M_{\rm halo}/M_*$ is consistent with the **stellar-to-halo mass relation** found across all galaxy types.

## the IMVT (Initial Mass-to-Light) Variation

a still-debated issue: in massive ellipticals, the IMF may be **bottom-heavy** (more low-mass stars than Salpeter). this would inflate $M_*$ from photometry + reduce the apparent dark matter fraction.

evidence: ATLAS3D dynamical $M_*/L$ vs SED-fitted $M_*/L$ shows discrepancies pointing to non-universal IMF. major systematic for inferring DM fractions in ETGs.

## see also

- [Dark matter rotation curves](../../02_Zettel/Theory/Dark matter rotation curves.md)
- [Dark matter in dwarf galaxies](../../02_Zettel/Theory/Dark matter in dwarf galaxies.md)
- [Cosmic_inventory_dark_matter](../../02_Zettel/Theory/Cosmic_inventory_dark_matter.md)
- [Galaxy clusters and overview of evolution](../../02_Zettel/Theory/Galaxy clusters and overview of evolution.md)
- [LOSVD](../../02_Zettel/Theory/LOSVD.md)
- [Stellar kinematics measurements](../../02_Zettel/Theory/Stellar kinematics measurements.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [Lensing as a cosmological probe](../../02_Zettel/Theory/Lensing as a cosmological probe.md)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md)
