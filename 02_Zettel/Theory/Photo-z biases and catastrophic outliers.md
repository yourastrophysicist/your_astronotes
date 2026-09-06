---
layout: default
title: "Photo-z biases and catastrophic outliers"
---

# photo-z biases and catastrophic outliers

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html) · [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.html)

## the failure modes

photo-z accuracy is usually summarized by:

- **bias** $\langle \Delta z / (1+z) \rangle$, the systematic offset
- **scatter** $\sigma_{\text{NMAD}}(\Delta z / (1+z))$, the typical error
- **catastrophic outlier fraction** $\eta$, the fraction with $|\Delta z| / (1+z) > 0.15$ (a common threshold)

modern deep-field photo-z (COSMOS2020, JADES) reach $\sigma \approx 0.01$ for bright spec-z-confirmed galaxies, but $\eta$ can climb to 5–15% at faint magnitudes.

## why outliers happen

the dominant cause: **degeneracies between low-$z$ and high-$z$ templates**.

- the 4000 Å break at $z \sim 0.2$ in the $g$ band looks similar to the Lyman break at $z \sim 3$ in the $u$ band if you do not have UV coverage.
- a dusty, red, intermediate-$z$ Sa can be mistaken for a passive high-$z$ elliptical.

these are not noise; they are real ambiguities in the galaxy SED library. they can only be broken by adding more filters (UV or NIR), or by spectroscopy.

## the oyaizu 2008 picture

Oyaizu et al. 2008 systematically tested SDSS photo-z against spectroscopy and showed:

- bias is small ($\langle \Delta z \rangle \sim 0.005$) for the bulk of galaxies
- scatter grows with magnitude as expected
- the catastrophic outlier fraction is concentrated in specific regions of color-color space, not uniformly distributed; he produced **photo-z error maps**.

the key insight: photo-z errors are *not* Gaussian. they have heavy tails and structured failure regions. you cannot model them as a single $\sigma_z$.

## why this kills high-$z$ science if you ignore it

if 5% of your $z \sim 7$ Lyman-break candidates are actually $z \sim 0.2$ red dwarfs, then a derived $z \sim 7$ luminosity function of $10^4$ candidates contains $\sim 500$ contaminants. those contaminants are *bright* in the rest frame, so they bias $L^*$ upward. JWST has been wrestling with this exact failure mode in 2023–2024 high-$z$ candidates.

## mitigations

- add bands (NUV, FUV, broad NIR through MIRI 5–25 μm)
- add narrow-band filters at expected Lyα or 4000 Å break locations
- demand spectroscopic confirmation of a representative subsample (the only ground truth)
- propagate the *full* $p(z)$ posterior, not just a point estimate, into downstream LF or counts

## connections

- previous: [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.html)
- driving statistics: [Redshift distribution of flux-limited samples](../../02_Zettel/Theory/Redshift distribution of flux-limited samples.html), [Malmquist bias](../../02_Zettel/Theory/Malmquist bias.html)
- LF estimation under photo-z uncertainty: [1Vmax estimator](../../02_Zettel/Theory/1Vmax estimator.html) needs $V_{\max}$ to be marginalized over $p(z)$

## key references

- Oyaizu et al. 2008, ApJ 674, 768
- Hildebrandt et al. 2010 (PHAT photo-z code comparison)
- Salvato, Ilbert, Hoyle 2019 ARAA on photo-z
