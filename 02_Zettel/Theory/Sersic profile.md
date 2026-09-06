---
layout: default
title: "Sersic profile"
---

the **Sérsic profile** is the standard parametrisation of galaxy surface-brightness profiles. specified by 3 parameters (effective radius, surface brightness at $r_e$, Sérsic index $n$). interpolates between exponential disks and de Vaucouleurs ellipticals.

## the formula

$$\boxed{\, \Sigma(r) = \Sigma_e\,\exp\!\left[-b_n\!\left(\!\left(\frac{r}{r_e}\right)^{1/n} - 1\right)\right] \,}$$

with:
- $r_e$: **effective radius** (half-light radius; encloses 50% of total flux).
- $\Sigma_e$: surface brightness at $r_e$.
- $n$: **Sérsic index** (shape parameter).
- $b_n$: a constant that depends on $n$, fixed so that $r_e$ is the half-light radius. $b_n \approx 2n - 0.327$ for $n \gtrsim 1$.

## key cases

### $n = 1$: exponential profile
$$\Sigma(r) = \Sigma_0\,e^{-r/h}$$
with scale length $h = r_e/1.678$. fits **disk galaxies** (Sa, Sb, Sc spirals).

### $n = 4$: de Vaucouleurs profile
$$\Sigma(r) = \Sigma_e\,\exp[-7.67((r/r_e)^{1/4} - 1)]$$
fits **elliptical galaxies** (E, S0). historically derived empirically by de Vaucouleurs 1948.

### intermediate $n$
$n = 2$: bulgy galaxies, lenticulars. some early-type spirals.
$n \sim 0.5$: very flat / disky profiles.
$n > 4$: very concentrated, **cD galaxies**, brightest cluster galaxies (BCGs).

## the meaning of $n$

higher $n$ = more **centrally concentrated** profile + more extended outer wings:
- $n = 1$: rapid exponential drop, no extended halo.
- $n = 4$: smooth roll-over at small $r$, very gradual decline at large $r$.

## the practical fit

GALFIT (Peng 2002) and other galaxy-fitting codes fit a Sérsic profile to a galaxy image. recovers $r_e, \Sigma_e, n$ for each galaxy. used in survey pipelines (HST, JWST, MaNGA).

bulge + disk decompositions: fit two Sérsic profiles, one with $n \sim 4$ (bulge), one with $n = 1$ (disk).

## the integrated luminosity

total luminosity:
$$L = \int 2\pi r\,\Sigma(r)\,dr = 2\pi r_e^2 \Sigma_e\,\frac{2n e^{b_n}\Gamma(2n)}{b_n^{2n}}$$

closed-form in terms of incomplete Gamma functions. tabulated.

## relation to Hubble morphology

| morphology | typical $n$ | typical $r_e$ |
|---|---|---|
| dwarf elliptical | $1$ to $2$ | $0.5$ to $2$ kpc |
| massive elliptical (E) | $4$ to $6$ | $5$ to $20$ kpc |
| cD galaxy | $> 6$ | $> 50$ kpc |
| S0 (lenticular) | $\sim 3$ | $5$ to $10$ kpc |
| Sa (early spiral) | $\sim 2$ (bulge) + $\sim 1$ (disk) | bulge $\sim 1$ kpc, disk $\sim 5$ kpc |
| Sc (late spiral) | $\sim 1$ (disk-dominated) | $\sim 5$ kpc |

so $n$ correlates with morphology: high $n$ = early-type, low $n$ = late-type.

## why it works

physically motivated by relaxation:
- **disks** ($n = 1$): formed by dissipative collapse; angular-momentum-supported.
- **ellipticals** ($n \sim 4$): formed by violent relaxation in mergers; pressure-supported.
- **mixed**: galaxies with significant bulges + disks need 2-component fits.

Sérsic captures both ends + everything in between with a single parameter.

## see also

- [De Vaucouleurs and exponential profiles](../../02_Zettel/Theory/De Vaucouleurs and exponential profiles.md)
- [Hubble morphological sequence](../../02_Zettel/Theory/Hubble morphological sequence.md)
- [CAS galaxy classification](../../02_Zettel/Theory/CAS galaxy classification.md)
- [Galaxy size-luminosity relation](../../02_Zettel/Theory/Galaxy size-luminosity relation.md)
- [Petrosian radius](../../02_Zettel/Theory/Petrosian radius.md)
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.md)
- [PSF photometry](../../02_Zettel/Theory/PSF photometry.md)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md)
