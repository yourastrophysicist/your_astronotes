---
layout: "default"
title: "Annual stellar parallax"
---
the second rung of the cosmic distance ladder, calibrated entirely by Euclidean geometry. **annual stellar parallax** is the only direct, assumption-free geometric method for measuring distances to stars outside the solar system; every subsequent rung of the distance scale rests upon it.

![sphereastro2-21.png](../../assets/images/sphereastro2-21.png)

---

## the geometric definition

as Earth orbits the Sun, an observer's position shifts by a baseline of $2$ AU over six months. nearby stars therefore appear to shift periodically against the distant, essentially fixed background of distant stars and quasars.

the **annual parallax** $p$ (or $\pi$) is defined as the semi-angle subtended by Earth's mean orbital radius ($1$ AU) as seen from the star:
$$\sin p \approx p = \frac{1\,\text{AU}}{d}$$

![sphereastro2-22.png](../../assets/images/sphereastro2-22.png)

---

## the definition of the parsec

the parallax angle is so small that astronomers define a dedicated unit of astronomical distance: the **parsec** (parallax-arcsecond, pc). 
one parsec is defined as the distance at which a baseline of $1$ AU subtends an angle of exactly $1$ arcsecond ($1''$):
$$1\text{ pc} = \frac{1\,\text{AU}}{1''\text{ in radians}} = \frac{1.4959787 \times 10^{11}\text{ m}}{\frac{1}{3600} \times \frac{\pi}{180}} \approx 3.0857 \times 10^{16}\text{ m} \approx 3.26\,\text{light-years}$$

this yields the celebrated relation:
$$\boxed{\, d(\text{pc}) = \frac{1}{p(\text{arcsec})} \,}$$

### key benchmark distances:
- **nearest star**: Proxima Centauri: $p = 0.7687'' \implies d = 1.30$ pc ($4.24$ ly).
- **historical landmark**: in 1838, **Friedrich Bessel** measured the first stellar parallax for $61$ Cygni ($p = 0.286'' \implies d = 3.5$ pc), ending a 2000-year search since Aristotle.
- $d = 10$ pc $\implies p = 0.1'' = 100$ mas.
- $d = 100$ pc $\implies p = 0.01'' = 10$ mas.
- $d = 1000$ pc ($1$ kpc) $\implies p = 0.001'' = 1$ mas.
- $d = 8$ kpc (Galactic Center) $\implies p = 0.125$ mas $= 125\,\mu$as.

![sphereastro2-23.png](../../assets/images/sphereastro2-23.png)

---

## the parallactic ellipse

similar to aberration, the annual motion of Earth causes a star to trace out a **parallactic ellipse** on the sky over one year:
- **semi-major axis**: equal to $p$, parallel to the ecliptic plane.
- **semi-minor axis**: equal to $p\sin\beta$, where $\beta$ is the ecliptic latitude.
  - at the ecliptic pole ($\beta = 90^\circ$): a circle of radius $p$.
  - in the ecliptic plane ($\beta = 0^\circ$): an oscillating straight line segment of length $2p$.

![sphereastro2-24.png](../../assets/images/sphereastro2-24.png)

---

## the space astrometry revolution: Hipparcos to Gaia

ground-based telescopes are fundamentally limited by atmospheric turbulence (seeing, $\theta \sim 0.5''-1''$), restricting ground parallax measurements to $d \lesssim 20-50$ pc with accuracies of $\sim 5-10$ mas.

space astrometry removed the atmosphere:
1. **ESA Hipparcos (1989-1993)**: measured $\sim 118,000$ stars with $1$ mas precision, reaching reliably to $\sim 100$ pc.
2. **ESA Gaia (2013-present)**: measured parallaxes, proper motions, and photometry for over **1.8 billion stars** across the entire Milky Way, with astrometric precision reaching **$10-20\,\mu\text{as}$** for bright stars! Gaia directly calibrates Cepheids, RR Lyrae, and open cluster isochrones across the Galactic disk.

---

## see also

- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Parallax and standard candles]]
- [[Distance ladder derivations]]
- [[Cepheids and supernovae]]
- [[Proper motion and stellar kinematics]]
- [[Aberration of light]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_dist-07.png](../../assets/images/obs_dist-07.png)
*Trigonometric parallax geometry: d(pc) = 1 / p(arcsec).*

![obs_dist-08.png](../../assets/images/obs_dist-08.png)
*Historical breakthrough: Bessel 1838 measurement of 61 Cygni (p = 0.314 arcsec).*

![obs_dist-09.png](../../assets/images/obs_dist-09.png)
*Space astrometry missions: Hipparcos (1 mas) and Gaia (10 micro-arcsec).*

![obs_dist-10.png](../../assets/images/obs_dist-10.png)
*Lutz-Kelker statistical bias in parallax distance inversion d = 1/p.*



## Linked References

- [[AU calibration parallax and parsec]]
- [[Aberration of light]]
- [[Atmospheric refraction]]
- [[Cepheid period-luminosity relation]]
- [[Moving cluster method]]
- [[Parallax and standard candles]]
- [[Precession and nutation]]
- [[Precession nutation aberration parallax]]
- [[Proper motion and stellar kinematics]]
- [[Radial velocity from stellar spectra]]
- [[Spectroscopic parallax and main-sequence fitting]]
- [[Stellar velocity from Doppler shift]]
- [[Variable stars as standard candles]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Observational_Astrophysics_MOC]]


