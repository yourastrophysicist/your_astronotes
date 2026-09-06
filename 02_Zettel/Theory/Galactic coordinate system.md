---
layout: default
title: "Galactic coordinate system"
---

the **Galactic coordinate system** uses the plane of the Milky Way as the reference great circle. it is the natural frame for any work involving the disk, the ISM, the bulge, or the halo of our Galaxy.

## the geometry

defined by IAU 1958:
- **Galactic plane** $\equiv$ great circle through the centroid of the disk.
- **Galactic centre** at the origin of $\ell$, located in the direction of Sgr A$^\star$.
- **north Galactic pole** at $(\alpha, \delta) = (12^{\rm h}51.42^{\rm m}, +27.13°)$, J2000.

## the coordinates

- **Galactic longitude** $\ell$, measured along the Galactic plane from the direction toward the Galactic centre, eastward. $0° \le \ell < 360°$.
- **Galactic latitude** $b$, measured perpendicular to the Galactic plane. $-90° \le b \le +90°$. positive toward the north Galactic pole.

key directions:
- $(\ell, b) = (0°, 0°)$: Galactic centre, Sgr A$^\star$.
- $(\ell, b) = (180°, 0°)$: Galactic anticentre.
- $(\ell, b) = (90°, 0°)$: direction of Galactic rotation.
- $|b| < 10°$: the Galactic disk, dust-extinguished but rich in Galactic targets.
- $|b| > 30°$: extragalactic windows, low ISM extinction.

## the transformation

equatorial $(\alpha, \delta) \to$ Galactic $(\ell, b)$ is a fixed rotation (precession-corrected to J2000):
$$\sin b = \cos\delta_p \cos\delta \cos(\alpha - \alpha_p) + \sin\delta_p \sin\delta$$
where $(\alpha_p, \delta_p)$ is the equatorial coordinates of the Galactic north pole. the longitude $\ell$ is then computed from a similar rotation. in practice, astropy.coordinates does this in one line.

## when Galactic coordinates are used

- **Galactic plane surveys**: SDSS does not target $|b| < 30°$ to avoid extinction.
- **ISM and dust maps**: Schlegel-Finkbeiner-Davis 1998, Planck 2014 dust maps tabulated in $(\ell, b)$.
- **Galactic structure**: spiral arms, rotation curve, GMC distribution.
- **stellar streams and halo substructure**: positions of streams given in $(\ell, b)$.

at high Galactic latitude, **Galactic extinction** is small ($A_V \lesssim 0.1$) and predictable, so targets there are preferred for cosmological surveys.

## see also

- [Equatorial system](../../02_Zettel/Theory/Equatorial system.html)
- [Ecliptic system](../../02_Zettel/Theory/Ecliptic system.html)
- [Milky Way structure](../../02_Zettel/Theory/Milky Way structure.html)
- [Interstellar medium components and gas cycle](../../02_Zettel/Theory/Interstellar medium components and gas cycle.html)
- [Spiral arm kinematics](../../02_Zettel/Theory/Spiral arm kinematics.html)
- [Spherical trigonometry](../../02_Zettel/Theory/Spherical trigonometry.html)
