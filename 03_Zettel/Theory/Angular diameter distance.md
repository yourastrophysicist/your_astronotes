---
layout: "default"
title: "Angular diameter distance"
---
the **angular diameter distance** $d_A$ relates the **physical size** of an object to its **observed angular size**. defined so that the small-angle relation $\theta = D/d_A$ holds.

## the formula

for a **flat** universe ($k = 0$):
$$\boxed{\, d_A(z) = \frac{d_C(z)}{1 + z} \,}$$

with $d_C(z)$ the comoving distance (see [[Radial comoving distance]]).

at low $z$: $d_A \approx cz/H_0$, just like Newtonian distance.

## the non-monotonic behaviour

$d_A$ has the unusual feature: as $z$ increases, $d_A$ first **grows**, reaches a **maximum** around $z \sim 1.5$, then **decreases**.

| $z$ | $d_A$ (Mpc, $\Lambda$CDM) |
|---|---|
| 0.1 | 397 |
| 0.5 | 1294 |
| 1.0 | 1660 |
| 1.6 | 1763 (peak!) |
| 3.0 | 1597 |
| 5.0 | 1308 |
| 10.0 | 855 |
| 1100 | 14.0 / 1101 ≈ 12.7 |

so very-high-$z$ objects appear to **subtend the same angle** as nearby ones with the same physical size. counter-intuitive.

physical reason: at very high $z$, the universe was much smaller. so the photons we see today were emitted from a part of the universe that, at the time, was closer to us in proper distance. this proper-time-of-emission distance is small, so the angular size appears large.

## the implications

### CMB acoustic peak position

the first acoustic peak of the CMB at $\ell \approx 200$ corresponds to a sound-horizon scale at recombination of $\sim 150$ Mpc (comoving). its observed angular size:
$$\theta = (150\,\text{Mpc})/d_A(z = 1100) \approx 1°$$

the position of this peak is $\propto 1/\theta \propto d_A(z = 1100)$. measuring $\ell_1 \approx 200$ pins down $d_A$ to $z = 1100$, hence the **geometry of the universe**: $\Omega_K$ to $0.5\%$ precision.

### BAO (baryon acoustic oscillations)

galaxy distribution has a feature at the BAO scale of $\sim 150$ Mpc (comoving). its angular size at any $z$ gives $d_A(z)$. measuring this at multiple $z$ pins down cosmological parameters.

### high-$z$ galaxy sizes

a galaxy of physical size $D = 10$ kpc at $z = 5$:
$$\theta = D/d_A = 10\,\text{kpc}/(1308\,\text{Mpc}) \approx 1.6\,\text{arcsec}$$

resolved by HST and JWST routinely.

## the derivation

assumptions: an object of proper transverse size $D$ at comoving coordinate $\chi$, seen under a small angle $\theta$.

the two ends of the object emit at the same time $t_e$ and at the same $\chi$. their separation is purely angular, so from the Robertson-Walker metric the proper length between them is

$$D = a(t_e)\, S_k(\chi)\, \theta = \frac{d_M}{1+z}\,\theta$$

the photons then travel on radial paths, so the angle between them does not change on the way. comparing with $\theta = D/d_A$:

$$d_A = \frac{d_M}{1+z}$$

in words, $d_A$ is the **proper distance of the object when the light left it**. this is the sentence that explains the turnover.

## where the maximum is

in an Einstein-de Sitter universe the integral is analytic:

$$d_A = \frac{2c}{H_0}\left[\frac{1}{1+z} - \frac{1}{(1+z)^{3/2}}\right]$$

setting $d\,d_A/dz = 0$ gives $(1+z)^{1/2} = 3/2$, so

$$z_{\max} = 1.25, \qquad d_{A,\max} = \frac{8}{27}\frac{c}{H_0}$$

with $\Lambda$ the expansion at late times is faster, the comoving distance keeps growing for longer, and the maximum moves out to $z \approx 1.6$.

the turnover exists in every model with a horizon. as $z \to \infty$, $d_M$ tends to a finite value while $1 + z$ grows without limit, so $d_A \to 0$.

## the angular scale

the number I use in practice is how many kiloparsecs fit in one arcsecond, $d_A \times 4.848 \times 10^{-6}$:

| $z$ | kpc per arcsec |
|---|---|
| 0.1 | 1.9 |
| 0.5 | 6.3 |
| 1.0 | 8.0 |
| 1.6 | 8.5 |
| 3.0 | 7.7 |
| 5.0 | 6.3 |
| 10.0 | 4.1 |

so between $z = 1$ and $z = 3$ one arcsecond is always about 8 kpc. the resolution of JWST at $2\,\mu$m, about $0.07''$, is then about 0.6 kpc at every redshift in that range.

## where it goes wrong

- thinking that a larger angular size at high $z$ makes the object easier to see. the surface brightness falls as $(1+z)^{-4}$, so the same light is spread over more sky. see [[Surface brightness dimming]].
- using $d_A$ for separations along the line of sight. it only converts angles.
- forgetting that $d_A$ gives proper sizes. comoving sizes, like the BAO scale, need $d_M = (1+z)\,d_A$.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Angular diameter distance**. "In astronomy, angular diameter distance is a distance (in units of length) defined in terms of an object's physical size (also in units of length)," ([Wikipedia](https://en.wikipedia.org/wiki/Angular_diameter_distance))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- 03_Zettel/Theory/Cosmological distances
- [[Radial comoving distance]]
- [[Luminosity distance]]
- [[Surface brightness dimming]]
- [[FLRW metric]]
- [[CMB power spectrum]]
- [[Matter power spectrum and BAO]]
- [[Observational_Cosmology_MOC]]



## Linked References

- [[Comoving vs proper coordinates]]
- [[Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback]]
- [[Curvature-dynamics relation]]
- [[Distance ladder derivations]]
- [[K-correction in optical vs sub-mm]]
- [[Luminosity distance]]
- [[Radial comoving distance]]
- [[Surface brightness dimming]]
- [[Observational_Cosmology_MOC]]


