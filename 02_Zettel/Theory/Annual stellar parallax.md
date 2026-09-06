---
layout: default
title: "Annual stellar parallax"
---

the second rung of the distance ladder, calibrated entirely by geometry. annual stellar parallax is the **only fully geometric distance method** in the ladder; everything above is calibrated against it.

## the geometry

Earth orbits the Sun on a $2$ AU baseline. observed from two opposite points six months apart, a nearby star appears to shift against more-distant background stars. the **parallax angle** $p$ is half the maximum angular shift over a year:
$$p = \frac{1\,\text{AU}}{d}$$

the apparent path of the star on the sky over a year is a small **parallactic ellipse** with semi-major axis $p$. the ellipse is a circle when the star is at the ecliptic pole, a line segment at the ecliptic, and an ellipse in between (squashed by $\sin\beta_{\rm eclip}$).

## the parsec definition

distance at which $1$ AU subtends $1$ arcsecond:
$$d(\text{pc}) = \frac{1}{p(\text{arcsec})}$$

closest stars:
- Proxima Centauri: $p = 0.7687''$, $d = 1.30$ pc.
- Barnard's Star: $p = 0.5475''$, $d = 1.83$ pc.
- $61$ Cyg: $p = 0.286''$, $d = 3.5$ pc. (the first parallax measurement, Bessel 1838.)

at $10$ pc, $p = 0.1''$. at $100$ pc, $p = 0.01'' = 10$ mas. at $1$ kpc, $p = 1$ mas. at $30$ kpc, $p = 33\,\mu$as. so parallax becomes harder very fast.

## astrometric instruments

| era | instrument | precision | range |
|---|---|---|---|
| 1838 | Bessel, photographic | $\sim 0.1''$ | nearest few stars |
| 1900s | meridian circle | $\sim 0.05''$ | $\sim 20$ pc |
| 1980s | photographic plates + Schmidt | $\sim 1$ to $10$ mas | $\sim 100$ pc |
| 1989-1993 | **Hipparcos** | $\sim 1$ mas | $\sim 100$ pc, $10^5$ stars |
| 2014- | **Gaia** | $10\,\mu$as for bright | $\sim 10$ kpc, $> 10^9$ stars |

Gaia is the transformative dataset for the modern distance scale. every Cepheid, Mira, RR Lyrae, eclipsing binary in the Galaxy now has a directly-measured Gaia parallax that calibrates the standard-candle relations.

## systematics and corrections

modern parallax is a precision measurement requiring careful systematics control:
- **annual aberration** (constant $20''$, must be removed; see [Precession nutation aberration parallax](../../02_Zettel/Theory/Precession nutation aberration parallax.html)).
- **proper motion** (linear drift on the sky, $\sim$mas/yr for nearby stars; orthogonal to parallax oscillation in time).
- **stellar binary motion** (additional ellipse if the star has an unresolved companion).
- **Gaia zero-point offset** ($\sim -29\,\mu$as for the parallax bias, debated).

absolute parallax (from a fixed reference frame defined by quasars) vs relative parallax (from comparison stars at unknown distance). Hipparcos and Gaia work in absolute parallax, with reference frame tied to extragalactic quasars.

## the negative-parallax problem

at the precision floor, some stars yield formally negative parallaxes (random walk into negative). these are not unphysical; they are just the noisy result. **always work with parallaxes themselves, not derived distances** (which require $1/p$, asymmetric for Gaussian-distributed $p$). modern Bayesian techniques (Bailer-Jones distance estimation) give correctly-shaped distance posteriors.

## consequence: every higher rung

every standard-candle technique relies on parallax somewhere:
- **MS fitting**: needs absolute magnitudes of MS stars, calibrated by Hyades parallaxes.
- **RR Lyrae**: $M_V$ calibrated by parallax to Galactic field RR Lyrae.
- **Cepheids**: Leavitt PL relation calibrated by parallax to Galactic Cepheids.
- **TRGB**: $M_I$ calibrated against globular clusters whose distances are anchored by parallax to halo subdwarfs.

Gaia DR3 reduced the systematic uncertainty on the local-distance ladder from $\sim 5\%$ to $\sim 1\%$, reigniting the $H_0$ tension debate.

## see also

- [AU calibration parallax and parsec](../../02_Zettel/Theory/AU calibration parallax and parsec.html)
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.html)
- [Cepheid period-luminosity relation](../../02_Zettel/Theory/Cepheid period-luminosity relation.html)
- [Spectroscopic parallax and main-sequence fitting](../../02_Zettel/Theory/Spectroscopic parallax and main-sequence fitting.html)
- [Distance modulus](../../02_Zettel/Theory/Distance modulus.html)
- [Precession nutation aberration parallax](../../02_Zettel/Theory/Precession nutation aberration parallax.html)
- [Parallax and standard candles](../../02_Zettel/Theory/Parallax and standard candles.html)
- [Hubble flow distances](../../02_Zettel/Theory/Hubble flow distances.html)
