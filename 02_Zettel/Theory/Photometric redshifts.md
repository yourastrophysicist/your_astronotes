---
layout: default
title: "Photometric redshifts"
---

# photometric redshifts

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the idea

a galaxy spectrum has *features* (Lyman break, 4000 Å break, Balmer absorption, emission lines). these features fall in different broadband filters at different redshifts. by measuring fluxes through enough filters, you can locate the features and infer $z$ to a few percent without ever taking a spectrum.

cost: spectra are tens of minutes per object on a 10-m class telescope. broadband photometry gets thousands of galaxies per pointing. so photo-z is the only way to redshift a survey of $\sim 10^8$ galaxies (LSST, Euclid).

## the two families of methods

### 1. template fitting

assume a library of galaxy SED templates (E, Sa, Sb, Sc, Sd, Irr, starburst, plus optional dust). for each galaxy, predict its broadband fluxes for every $(\text{template}, z)$ combination, and find the maximum likelihood. output is a posterior $p(z | \text{photometry})$.

canonical codes: HyperZ, BPZ (Benítez 2000), EAZY (Brammer 2008), LePHARE.

### 2. machine learning

train a regressor (random forest, k-NN, neural net) on a *training set* of galaxies with known spectroscopic redshift. apply it to galaxies with only photometry. needs a representative spec-z training set, which is a hard requirement at faint magnitudes.

canonical: ANNz, TPZ.

## the workhorse spectral feature

at $z < 1$, the **4000 Å break** (or Balmer break for younger populations) is the dominant photo-z driver. it sits at the gap between the $u$ and $g$ bands at $z = 0$ and shifts redward; tracking it through $u-g$, $g-r$, $r-i$ colors gives photo-z to $\sigma_z / (1+z) \sim 0.03$ for bright galaxies.

at $z > 4$, the **Lyman break** (912 Å rest, intervening Ly$\alpha$ forest absorption blueward of 1216 Å) takes over. this is what "Lyman-break galaxy" (LBG) selection is.

## benítez 2000 likelihood

Benítez introduced a Bayesian prior on the prior magnitude-redshift distribution $p(z, T | m_0)$, where $T$ is template type and $m_0$ is observed magnitude. his fig. 4 shows that the prior reduces catastrophic outliers (galaxies whose photo-z is off by $> 0.15$) by a factor of $\sim 3$ compared to plain max-likelihood.

## what i remember

photo-z is not optional in modern surveys, and it is not free. expect $\sigma_z / (1+z) \sim 0.02$–$0.05$ at best, and $\sim 1$–$10\%$ catastrophic outliers depending on filter set and depth (see [Photo-z biases and catastrophic outliers](../../02_Zettel/Theory/Photo-z biases and catastrophic outliers.md)).

## connections

- biases of photo-z: [Photo-z biases and catastrophic outliers](../../02_Zettel/Theory/Photo-z biases and catastrophic outliers.md)
- the underlying selection: [Redshift distribution of flux-limited samples](../../02_Zettel/Theory/Redshift distribution of flux-limited samples.md), [Malmquist bias](../../02_Zettel/Theory/Malmquist bias.md)
- features that drive photo-z: 4000 Å break and Lyman break

## key references

- Benítez 2000, ApJ 536, 571 (BPZ)
- Bolzonella, Miralles & Pelló 2000 (HyperZ)
- Brammer, van Dokkum, Coppi 2008 (EAZY)
