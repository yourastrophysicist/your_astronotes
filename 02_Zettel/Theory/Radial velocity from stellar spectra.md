---
layout: default
name: Radial velocity from stellar spectra
description: measuring line-of-sight velocity from Doppler shifts of stellar absorption lines, with applications from binaries to exoplanets
---

# radial velocity from stellar spectra

a stellar spectrum carries a Doppler-shifted version of the rest-frame line list of the photosphere. measuring the wavelength shift gives the line-of-sight velocity (radial velocity, RV) of the star. RV is one of the cleanest spectroscopic observables and underpins binary orbits, cluster membership, exoplanet detections, galactic kinematics, and cosmological redshift.

## the basic relation

for a non-relativistic source moving with line-of-sight velocity $v_r$,
$$\frac{\Delta\lambda}{\lambda_0} = \frac{v_r}{c}.$$
positive $v_r$ corresponds to a redshift (recession), negative to a blueshift (approach). conventionally one corrects for the Earth's motion to refer the velocity to the heliocentric or barycentric frame.

precision scales as
$$\sigma_{v_r} \approx \frac{c}{R\,\sqrt{N_{\rm lines}}\,\text{S/N}},$$
where $R = \lambda/\Delta\lambda$ is the spectral resolution. high-resolution echelle spectrographs reach $R \sim 100{,}000$ and, with iodine cells or laser frequency combs for wavelength stability, can reach $\sim 1$ m/s.

## how it is measured

**cross-correlation.** the standard technique (Tonry & Davis 1979). compute
$$C(v) = \int F_*(\lambda)\,T(\lambda(1+v/c))\,d\lambda,$$
where $T$ is a template (a synthetic spectrum or a high-S/N reference star) and $F_*$ is the observation. the peak position of $C(v)$ is the RV. uncertainties come from the width and noise of the peak.

**least-squares deconvolution / matched filter.** uses many lines simultaneously, equivalent to a weighted cross-correlation in line space.

**direct line fitting.** fit a Gaussian or Voigt profile to a few clean lines and average the velocities. simpler but less precise than cross-correlation.

## applications

- **single-line spectroscopic binaries (SB1).** periodic RV variation traces the orbit of a star around the centre of mass; combined with Kepler's law it gives the mass function $f(m) = (m_2 \sin i)^3 / (m_1 + m_2)^2$.
- **double-line binaries (SB2).** both stars contribute lines, enabling individual mass measurements (modulo $\sin i$).
- **exoplanet detection.** Mayor & Queloz (1995) discovered 51 Peg b through RV wobbles of $\sim 60$ m/s. modern instruments (HARPS, ESPRESSO) reach $\sim 0.1$ m/s, sufficient for Earth-mass planets in habitable zones.
- **cluster membership and kinematics.** stars in a cluster share the cluster bulk motion to within the velocity dispersion ($\sim 0.5$ km/s in open clusters, $\sim 5\text{-}20$ km/s in globulars). RV cleans out field interlopers.
- **galactic chemodynamics.** RV + proper motions + distance + metallicity yields full 6D phase space, the basis of large surveys like Gaia, APOGEE, GALAH, 4MOST.

## sources of systematic error

- **wavelength calibration.** thorium-argon arc lamps, iodine cells, laser frequency combs. instabilities at the $\sim 1$ m/s level dominate exoplanet science.
- **stellar activity.** spots, plages, and convective blueshifts create RV "jitter" that mimics planetary signals at the 1-10 m/s level.
- **line asymmetries** from convective granulation (3D effects) introduce wavelength-dependent shifts of order tens of m/s.
- **template mismatch.** using a template with wrong $T_{\rm eff}$, $\log g$, [Fe/H], or $v\sin i$ broadens the cross-correlation peak and biases its centroid.
- **gravitational redshift** of the photons leaving the star contributes a constant offset of order
$$v_{\rm GR} = \frac{GM}{Rc} \approx 0.6\;\text{km/s}\quad\text{for the sun}.$$

## absolute vs differential

absolute RVs (referred to a global standard) rely on accurate atomic line wavelengths and detailed corrections; precision is limited to $\sim 100$ m/s. differential RVs (within one observing campaign of one star) routinely reach 0.5-1 m/s, which is what makes exoplanet RV surveys possible.

## see also
- [Stellar rotation v sini](../../02_Zettel/Theory/Stellar rotation v sini.md)
- [Atmospheric parameters Teff log g feh vmicro](../../02_Zettel/Theory/interf/Atmospheric parameters Teff log g feh vmicro.md)
- [Annual stellar parallax](../../02_Zettel/Theory/Annual stellar parallax.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
