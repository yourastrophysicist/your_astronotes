---
layout: default
title: "Stellar v sin i from line shape"
---

a star rotating at equatorial speed $V$ presents its near limb moving toward the observer (blueshift) and far limb away (redshift). disk-integrated, this distributes the line over a characteristic **two-horned profile** with sharp edges at $\pm v\sin i$. measuring this profile gives $v\sin i$, where $i$ is the unknown inclination.

## the rotational profile

the disk-integrated line profile, including limb darkening:
$$\phi_{\rm rot}(v) = \frac{2}{\pi v\sin i}\left[(1 - \beta)\sqrt{1 - (v/v\sin i)^2} + \beta(1 - (v/v\sin i)^2)\right]$$

with $\beta$ the limb-darkening parameter. dominant feature: **sharp edges at $\pm v\sin i$**, with a cusp profile in between.

## measuring $v\sin i$

three main methods:

### Fourier transform method (Carroll 1933, Gray 2008)
the rotational profile has zeros in Fourier space at predictable locations. measuring these zeros gives $v\sin i$ directly, robust against macroturbulence (which has a different Fourier signature).

modern method of choice for high-precision $v\sin i$ in echelle spectra.

### profile-shape fitting
fit a parameterised rotational + macroturbulence + Gaussian (for thermal + microturbulence) convolution model to a clean line. several parameters; degeneracies.

### cross-correlation function (CCF) width
cross-correlate observed spectrum with a template; CCF width $\propto v\sin i$ (after subtracting other broadening contributions). simpler, less precise.

## requirements

- **high resolution**: $R \gtrsim 30\,000$ for $v\sin i = 5$ km/s; $R \gtrsim 100\,000$ for $v\sin i \lesssim 1$ km/s.
- **sharp lines**: choose lines with low Doppler + microturbulence widths. metal lines in cool stars work well.
- **isolated lines**: avoid blends.

## values for common stars

| star type | typical $v\sin i$ (km/s) |
|---|---|
| O5 V | 100 to 400 |
| B0 V | 100 to 300 |
| A0 V | 100 to 200 |
| F5 V | 10 to 50 |
| G2 V (Sun) | $\sim 2$ |
| K0 V | $\sim 3$ |
| M5 V | $\sim 5$ |
| Be stars | $\sim 200$ to $500$ (near breakup) |
| WR stars | $\sim 100$ to $500$ (winds dominate) |

## the $\sin i$ ambiguity

we measure $v\sin i$, not $V$. for a single star, $i$ is unknown. for ensemble:
- assuming **random orientations**, $\langle V\rangle = (4/\pi)\langle v\sin i\rangle$.
- statistical de-projection valid for large samples.

for individual stars with known $i$ (eclipsing binaries, transiting planets via Rossiter-McLaughlin), $V$ recovered.

## the macroturbulence-rotation degeneracy

both rotation and **macroturbulence** ([Macroturbulence](../../02_Zettel/Theory/Macroturbulence.md)) broaden lines without changing equivalent width. they have **different shapes**:
- rotation: two-horned profile with sharp edges at $\pm v\sin i$.
- macroturbulence: smooth Gaussian-like profile.

separable at high resolution + Fourier method. fit both as free parameters.

## astronomical implications

### stellar evolution
rotation rate evolves: young stars rotate fast, magnetic braking slows them. **gyrochronology** uses rotation rate to age low-mass MS stars from $\sim 100$ Myr to $\sim 5$ Gyr.

### exoplanet host alignment
the **Rossiter-McLaughlin effect**: planet transits occult different velocity components of the rotating star, producing an apparent RV signature whose shape gives the planet-star spin alignment angle. used to discover misaligned (and even retrograde) hot Jupiters.

### Be and WR stars
extreme rotators near critical breakup. used to identify rapidly rotating binaries, primordial fast rotators.

## see also

- [Rotational broadening](../../02_Zettel/Theory/Rotational broadening.md)
- [Stellar velocity from Doppler shift](../../02_Zettel/Theory/Stellar velocity from Doppler shift.md)
- [Macroturbulence](../../02_Zettel/Theory/Macroturbulence.md)
- [Microturbulence](../../02_Zettel/Theory/Microturbulence.md)
- [Velocity dispersion from line width](../../02_Zettel/Theory/Velocity dispersion from line width.md)
- [Echelle spectroscopy](../../02_Zettel/Theory/Echelle spectroscopy.md)
- [Voigt profile](../../02_Zettel/Theory/Voigt profile.md)
- [Emission line stars](../../02_Zettel/Theory/Emission line stars.md)
