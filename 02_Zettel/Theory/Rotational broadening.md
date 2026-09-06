---
layout: default
title: "Rotational broadening"
---

a rotating star has its near limb moving toward the observer (blueshift) and far limb moving away (redshift). disk-integrated, this distributes the line over a velocity range, broadening it without changing equivalent width.

## the line profile

for a star rotating with surface equatorial velocity $V$ at inclination $i$, the maximum line-of-sight velocity is **$v\sin i$** at the limbs.

the rotational profile has a characteristic shape:
$$\phi_{\rm rot}(v) = \frac{2}{\pi v\sin i}\sqrt{1 - (v/v\sin i)^2} \cdot (1 - \beta) + \beta \cdot ...$$
(more carefully, with limb darkening $\beta$ included). without limb darkening, this is the famous **two-horned profile** with sharp edges at $\pm v\sin i$.

## why two-horned

at the limbs, the integrated line of sight has a full velocity span; at disk centre, much less. the cross-section through the disk produces a $1/\sqrt{1 - (v/v\sin i)^2}$ density of velocities at $|v| < v\sin i$, with sharp edges at $\pm v\sin i$.

with limb darkening, the horns are blunted and the profile looks more bell-like.

## measuring $v\sin i$

at high spectral resolution, the **edges of the rotational profile** are sharp and locate $\pm v\sin i$ directly. methods:
- **single-line fitting**: fit a rotational profile + macroturbulence to a clean line.
- **cross-correlation method** (Tonry-Davis): cross-correlate observed spectrum with a template; the width of the CCF gives $v\sin i$.
- **Fourier transform method** (Carroll 1933, Gray 2008): the rotational profile has zeros in Fourier space at predictable locations.

typical precision: $\sim 1$ km/s with $R \gtrsim 30\,000$.

## values

| spectral type | typical $v\sin i$ |
|---|---|
| O5 V | $\sim 100$ to $300$ km/s |
| B5 V | $\sim 100$ to $200$ km/s |
| F5 V | $\sim 10$ to $50$ km/s |
| Sun | $\sim 2$ km/s |
| K5 V | $\sim 1$ to $5$ km/s |
| M dwarf | $\sim 1$ to $10$ km/s, slowdown with age |

so massive stars rotate fast (up to break-up); main-sequence cool dwarfs lose angular momentum via magnetic braking and slow down over $\sim$Gyr.

## the $\sin i$ ambiguity

we measure only $v\sin i$, not $V$. the inclination $i$ is generally unknown for a single star. statistical de-projection (assuming random $i$, the population-averaged $\langle v\sin i\rangle = (\pi/4)\langle V\rangle$) gives ensemble values.

for known-inclination stars (eclipsing binaries, transiting exoplanet hosts via Rossiter-McLaughlin), $V$ is recovered.

## astronomical consequences

### stellar evolution

rotation rate evolves with age: young stars rotate fast, then magnetic braking slows them down. **gyrochronology** (Barnes 2003) uses rotation rate to age stars from $\sim 100$ Myr to several Gyr.

### Be stars and Wolf-Rayet stars

extreme rotators near break-up. material flung off into circumstellar disks gives the characteristic emission-line spectra (see [Emission line stars](../../02_Zettel/Theory/Emission line stars.html)).

### exoplanets via Rossiter-McLaughlin

a planet transiting in front of a rotating star occults different velocity components at different times. the apparent radial velocity shift during transit ("RM effect") measures the stellar spin axis vs orbital axis alignment.

## see also

- [Line profile function phi nu](../../02_Zettel/Theory/Line profile function phi nu.html)
- [Macroturbulence](../../02_Zettel/Theory/Macroturbulence.html)
- [Microturbulence](../../02_Zettel/Theory/Microturbulence.html)
- [Voigt profile](../../02_Zettel/Theory/Voigt profile.html)
- [Stellar v sin i from line shape](../../02_Zettel/Theory/Stellar v sin i from line shape.html)
- [Echelle spectroscopy](../../02_Zettel/Theory/Echelle spectroscopy.html)
- [Stellar velocity from Doppler shift](../../02_Zettel/Theory/Stellar velocity from Doppler shift.html)
- [Emission line stars](../../02_Zettel/Theory/Emission line stars.html)
