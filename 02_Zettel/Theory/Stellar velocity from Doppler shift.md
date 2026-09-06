---
layout: default
title: "Stellar velocity from Doppler shift"
---

a star's **radial velocity** $v_r$ (line-of-sight velocity) shifts every spectral line by the Doppler factor $\Delta\lambda/\lambda = v_r/c$. measuring this shift relative to laboratory wavelengths gives $v_r$, the precision of which underpins exoplanet detection, binary stars, and Galactic dynamics.

## the formula

at non-relativistic speeds:
$$\frac{\Delta\lambda}{\lambda_{\rm rest}} = \frac{v_r}{c}$$

so a star moving away (positive $v_r$) shifts lines redward; toward (negative $v_r$) blueward.

at $v_r/c \gtrsim 0.01$, full relativistic Doppler:
$$\frac{\lambda_{\rm obs}}{\lambda_{\rm rest}} = \sqrt{\frac{1 + v_r/c}{1 - v_r/c}}$$

stars rarely have $|v_r| > 1000$ km/s (relative to Sun), so non-relativistic version is fine.

## the measurement

procedure:
1. **identify** several spectral lines (absorption in stars).
2. **fit centroids** of each line.
3. **compute** $v_r$ from each line individually; average for precision.
4. **correct** for Earth's motion (barycentric correction).

precision varies by spectrograph:
- low-res ($R = 1000$): $\sigma_v \sim 50$ km/s.
- moderate ($R = 10\,000$): $\sigma_v \sim 5$ km/s.
- high-res ($R = 50\,000$): $\sigma_v \sim 0.5$ to $1$ km/s.
- precision RV ($R = 100\,000$, vacuum, calibrated): $\sigma_v \sim 0.1$ to $1$ m/s.

modern: HARPS, ESPRESSO at $\sim 0.5$ to $1$ m/s on bright stars.

## the cross-correlation method (Tonry-Davis)

the standard high-precision technique:
1. shift a template spectrum by various $v$ values.
2. cross-correlate with the observed spectrum.
3. peak of the cross-correlation function (CCF) is at the true $v_r$.
4. CCF width gives $v\sin i$ (rotational broadening).

this combines all the spectral information, not just a few lines, and is robust against per-line systematics.

## the barycentric correction

Earth's orbital motion ($\sim 30$ km/s) shifts observed wavelengths. the **barycentric correction** transforms to the solar system barycentre:
$$v_{\rm bary} = v_r^{\rm obs} - v_{\rm Earth}\cdot\hat r_{\rm target}$$

dependent on Earth's velocity at observation time + target's sky direction. computed to $\sim 1$ cm/s by modern software (barycorrpy, astropy). essential for precision RV.

## astronomical applications

### exoplanet detection
the **radial-velocity wobble** caused by an orbiting planet:
$$K = (M_p \sin i / M_\star)\,(2\pi/P)^{1/3}\,(GM_\star)^{1/3}/(1-e^2)^{1/2}$$

for Jupiter-mass planet at $5$ AU around Sun-like star: $K \sim 12$ m/s. for Earth-mass at $1$ AU: $K \sim 9$ cm/s.

so detecting Earth-twins requires **decimetre-per-second** precision over years. the goal of ESPRESSO and beyond.

### stellar binaries
double-line spectroscopic binaries (SB2) show two sets of moving lines. fitting both gives **mass ratio** $M_1/M_2$ from velocity amplitudes, plus orbital parameters from period.

### Galactic kinematics
$v_r$ surveys (RAVE, APOGEE, GALAH, Gaia-RVS) give millions of stars' $v_r$. combined with proper motions, give 3D space velocities for Galactic-archaeology + dark-matter tracing.

### high-redshift galaxies
at high $z$, the term "stellar velocity" is replaced by **redshift**. but velocity dispersions within galaxies (rotation, virial) still measured by Doppler-shift principle.

## the limits

- **stellar activity**: spots, granulation, magnetic activity create spurious RV signals at $\sim 1$ to $10$ m/s level. major obstacle for Earth-mass exoplanet detection.
- **stellar oscillations**: pressure modes give p-mode oscillations at $\sim 1$ m/s on minute timescales. averaged over hours, reduce to $\sim 0.3$ m/s.
- **instrument stability**: requires temperature and pressure control to ppm level.

## see also

- [Spectroscopic redshift from line shifts](../../02_Zettel/Theory/Spectroscopic redshift from line shifts.html)
- [Wavelength calibration](../../02_Zettel/Theory/Wavelength calibration.html)
- [Echelle spectroscopy](../../02_Zettel/Theory/Echelle spectroscopy.html)
- [Rotational broadening](../../02_Zettel/Theory/Rotational broadening.html)
- [Stellar v sin i from line shape](../../02_Zettel/Theory/Stellar v sin i from line shape.html)
- [Velocity dispersion from line width](../../02_Zettel/Theory/Velocity dispersion from line width.html)
- [Annual stellar parallax](../../02_Zettel/Theory/Annual stellar parallax.html)
- [Macroturbulence](../../02_Zettel/Theory/Macroturbulence.html)
