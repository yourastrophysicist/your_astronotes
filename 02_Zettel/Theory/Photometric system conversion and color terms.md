---
layout: default
title: "Photometric system conversion and color terms"
---

magnitudes in two photometric systems cannot in general be related by a single constant offset. you need a **color term** because different filter throughputs sample the SED differently, and the correction depends on the source's spectral shape (e.g. its temperature). this is the core point of `obs6.pdf`.

## the conversion formula

a typical empirical conversion between two systems is
$$\boxed{\, m_1 = m_2 + a + b\,(c_2)\,}$$
where $c_2$ is a color in system 2, $a$ is a constant offset, and $b$ is the **color coefficient** (or "color term"). the $b$-term encodes the SED dependence.

example, SDSS to Johnson:
$$V \approx g - 0.59 (g - r) - 0.01\quad\text{(Lupton 2005)}$$
the coefficient $-0.59$ is the color term. without it, the conversion is wrong by $\sim 0.1$ to $0.5$ mag depending on the source color.

## why a constant offset fails

consider two filters, $i_{\rm SDSS}$ and $I_{\rm Cousins}$, both centred near $\sim 760$ nm but with different bandpass shapes. let $T_1(\lambda)$ and $T_2(\lambda)$ be the throughputs.

flux measured in each:
$$F_1 = \int F_\lambda\, T_1(\lambda)\, d\lambda, \qquad F_2 = \int F_\lambda\, T_2(\lambda)\, d\lambda$$

if $T_1 \neq T_2$, the ratio $F_1/F_2$ depends on the **shape** of $F_\lambda$, not just its overall normalisation.

worked example from `obs6.pdf`: a $6000$ K star has more flux in the bluer half of the i-band; SDSS-i with a slightly bluer effective wavelength catches more of it than Cousins-I. for a $3000$ K star, the SED is steeply rising into the red, so the redder Cousins-I catches more flux. the magnitude shift between the two systems thus *changes sign* with stellar temperature.

so the "right" conversion needs a SED-dependent term. the color $g - r$ (or equivalent) is a proxy for SED shape, and a linear term in this color absorbs most of the dependence.

## practical procedure

to derive a conversion empirically:
1. observe a set of standard stars in **both** systems.
2. plot $\Delta m \equiv m_1 - m_2$ vs a color $c_2$.
3. fit $\Delta m = a + b\,c_2$.
4. apply $a, b$ to your survey targets.

published conversions exist for almost any pair of major systems (Smith et al. 2002 for SDSS-Johnson, Bilir et al. 2008, Jordi et al. 2010). always cite the assumed source population: a conversion derived for main-sequence stars may fail for galaxies or quasars whose SEDs are different.

## limits of the linear color-term

the linear term works when the two filters are similar enough that a single color captures the SED-shape difference. for very different bandpass shapes, or for very red/very blue sources, second-order terms matter:
$$m_1 = m_2 + a + b\,c_2 + c\,c_2^2$$
or you need a different proxy color. extreme cases (e.g. emission-line galaxies, brown dwarfs, quasars at specific redshifts where Lyman-$\alpha$ enters the band) require **synthetic photometry** instead: take the source's spectrum, integrate through both filter shapes, and predict $m_1 - m_2$ directly.

## consequence for archival data

cross-matching catalogs from different surveys without a color-term correction biases the magnitudes by $\sim 0.05$ to $0.5$ mag in a systematic, color-dependent way. this is a **major source of systematic error** in cluster CMDs, photometric redshift catalogs, and Hubble-diagram analyses that combine SDSS, Pan-STARRS, DECam, and HST data.

## see also

- [Filter systems and bandpasses](../../02_Zettel/Theory/Filter systems and bandpasses.md)
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.md)
- [Color indices](../../02_Zettel/Theory/Color indices.md)
- [Pogson magnitudes and flux relation](../../02_Zettel/Theory/Pogson magnitudes and flux relation.md)
- [Photometric standard stars](../../02_Zettel/Theory/Photometric standard stars.md)
- [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.md) — extreme version of the conversion problem
