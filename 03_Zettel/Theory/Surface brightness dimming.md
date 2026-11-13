---
layout: "default"
title: "Surface brightness dimming"
---
the **surface brightness** of a resolved source at high redshift drops as $(1+z)^{-4}$. a brutal cosmological penalty: the same galaxy at $z = 1$ appears **16 times fainter per square arcsecond** than at $z = 0$.

## the formula

$$\boxed{\, \sigma_{\rm obs} = \frac{\sigma_{\rm rest}}{(1 + z)^4} \,}$$

with $\sigma$ = flux per unit solid angle (e.g. erg/s/cm$^2$/arcsec$^2$).

## the derivation

surface brightness = flux / solid angle = $F/\Omega$:
- **flux** $F \propto L/d_L^2 = L/[d_C(1+z)]^2$.
- **solid angle** of an object of physical size $D$: $\Omega = (D/d_A)^2 = D^2(1+z)^2/d_C^2$ (with $d_A = d_C/(1+z)$ for flat).

so:
$$\sigma_{\rm obs} = \frac{F}{\Omega} = \frac{L/[d_C(1+z)]^2}{D^2(1+z)^2/d_C^2} = \frac{L}{D^2}\cdot\frac{1}{(1+z)^4}$$

with $L/D^2 = \sigma_{\rm rest}$ (the intrinsic surface brightness in the source's rest frame).

## the four factors of $(1+z)$

four pieces, each contributing one factor:

1. **photon energy redshift**: each photon has $1/(1+z)$ of its rest-frame energy.
2. **photon arrival rate dilation**: photons arrive at a rate reduced by $1/(1+z)$.
3. **angular size enlargement (from photon emission)**: this gives a factor $(1+z)^2$ in solid angle.

so flux is reduced by $(1+z)^2$, but solid angle is enlarged by $(1+z)^2$, giving $(1+z)^{-4}$ in surface brightness.

(equivalent argument via Etherington reciprocity: $d_L = d_A(1+z)^2$, so flux/area $\propto 1/d_L^2 \cdot 1/d_A^2 \cdot (1+z)^{-2}$ etc.)

## the brutal consequence

at $z = 1$: $(1+z)^{-4} = 1/16$. galaxies are $16\times$ fainter per arcsec$^2$ than the same galaxy locally.

at $z = 3$: $(1+z)^{-4} = 1/256$.

at $z = 6$: $(1+z)^{-4} = 1/2401$.

so high-$z$ galaxies are **drastically more difficult** to image than equivalent local galaxies. surface-brightness limited surveys (KIDS, HSC) fail at high $z$. only **point sources** (LBGs, quasars at the bright end) can be detected.

## the effect on observational cosmology

several consequences:
- **galaxy size measurements** at high $z$: harder than at low $z$ because the outskirts disappear into the noise faster.
- **morphology classification** at high $z$: only inner bright cores resolved.
- **integrated photometry** is preferred over surface-brightness-resolved at high $z$.
- **HST + JWST advantages**: high resolution + low PSF wings + low background combine to allow reaching $\mu \sim 27$ to $30$ mag/arcsec$^2$ at high $z$ in deep fields.

## the gravity-of-it-all

surface brightness is conserved in flat space (Liouville theorem). it's the cosmological **expansion** that breaks this conservation. so the $(1+z)^{-4}$ dimming is a direct test of the FLRW expansion model.

## the way out - NIR + sub-mm

at NIR wavelengths and sub-mm, the K-correction can **partially compensate** for the SB dimming when looking at the right rest-frame features (peak of the dust SED in sub-mm, the rest-frame UV break in NIR for high-$z$ LBGs).

so deep-field surveys at $H, K$ + ALMA sub-mm reach much higher $z$ than equivalent optical surveys.

## worked example

at $z = 1$ the dimming is $(1+z)^4 = 16$, or 3.0 mag. at $z = 5$ it is 1296, or 7.8 mag. a disk with central surface brightness 21.5 mag/arcsec$^2$ at $z = 0$ appears at 29.3 mag/arcsec$^2$ at $z = 5$ before the K-correction.

## where it goes wrong

- the dimming is bolometric. in a fixed band the K-correction changes it.
- it applies to surface brightness, not to total flux.
- it is a test of the expansion. a tired-light universe would give $(1+z)^{-1}$.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Tolman surface brightness test|500](https://commons.wikimedia.org/wiki/Special:FilePath/Tolman_surface_brightness_test.png?width=600)
*Lead figure of the Wikipedia article Tolman surface brightness test* ([Commons file page](https://commons.wikimedia.org/wiki/File:Tolman_surface_brightness_test.png), Stigmatella aurantiaca, CC BY-SA 4.0, as used on the Wikipedia article [Tolman surface brightness test](https://en.wikipedia.org/wiki/Tolman_surface_brightness_test))

- **Tolman surface brightness test**. "The Tolman surface brightness test is one out of six cosmological tests that were conceived in the 1930s to check the viability of and compare new cosmological models. Tolman's test compares the surface brightness of galaxies as a function of their redshift (measured as z). Such a comparison was first proposed in 1930 by Richard C. Tolman as a test of whether the universe is expanding or static." ([Wikipedia](https://en.wikipedia.org/wiki/Tolman_surface_brightness_test))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Luminosity distance]]
- [[Angular diameter distance]]
- [[Radial comoving distance]]
- [[K-correction]]
- [[K-correction in optical vs sub-mm]]
- 03_Zettel/Theory/Cosmological distances
- [[Hubble flow distances]]
- [[Photometric redshifts]]
- [[Observational_Cosmology_MOC]]



## Linked References

- [[Angular diameter distance]]
- [[Cosmological distances]]
- [[Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback]]
- [[K-correction in optical vs sub-mm]]
- [[Luminosity distance]]
- [[Specific intensity flux luminosity]]
- [[Observational_Cosmology_MOC]]


