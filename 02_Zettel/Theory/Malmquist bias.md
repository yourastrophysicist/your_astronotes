---
layout: default
title: "Malmquist bias"
---

# malmquist bias

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the bias in one sentence

a flux-limited sample preferentially includes the **intrinsically brightest** sources at any given distance, because faint sources at the same distance fall below the cutoff. the deeper into the survey volume you go, the more biased the average source becomes.

named after Karl Gunnar Malmquist (1922).

## the math

assume the absolute magnitudes of sources follow a Gaussian distribution with mean $\langle M \rangle$ and dispersion $\sigma_M$. the apparent magnitude limit is $m_{\text{lim}}$, which corresponds to an absolute magnitude limit at distance $d$ of:

$$M_{\text{lim}}(d) = m_{\text{lim}} - 5 \log_{10}(d / 10\,\text{pc})$$

a source at distance $d$ enters the sample only if $M < M_{\text{lim}}(d)$. as $d$ grows, $M_{\text{lim}}$ shrinks (gets brighter), so the average $M$ of sources at distance $d$ drops below $\langle M \rangle$.

for a Gaussian intrinsic distribution, the classical Malmquist correction to the mean absolute magnitude is

$$\langle M \rangle_{\text{obs}}(d) = \langle M \rangle - 1.382\, \sigma_M^2$$

at the sample boundary; it grows worse as you get closer to the limit.

## what it does to your science

if you do not correct for Malmquist:

- mean galaxy luminosity rises with $z$ → fake luminosity evolution
- the [Schechter function](../../02_Zettel/Theory/Schechter function.md) $L^*$ moves to higher luminosity at high $z$ → fake $L^*$ evolution
- standard candles get *brighter* at large distance → biased $H_0$ if uncorrected

most modern analyses use [1Vmax estimator](../../02_Zettel/Theory/1Vmax estimator.md) or maximum-likelihood (Sandage-Tammann-Yahil 1979) techniques to invert the bias rather than trying to apply a correction. the principle is the same: weight each source by the inverse volume in which it could have been detected.

## a related effect: eddington bias

Eddington bias is similar in spirit but applies in *flux* space: photometric scatter scatters more sources up across the flux cutoff than down (because the source counts rise toward fainter fluxes). this *boosts* observed counts at the limit. some authors lump both under "Malmquist", but they are different.

## what i remember

it is the cosmologists' version of survivorship bias. the sample edge selects, the population statistics get distorted, and the only honest fix is to model the selection function explicitly.

## connections

- previous: [Redshift distribution of flux-limited samples](../../02_Zettel/Theory/Redshift distribution of flux-limited samples.md)
- the LF estimator that handles it: [1Vmax estimator](../../02_Zettel/Theory/1Vmax estimator.md)
- combined with photometry: [Photo-z biases and catastrophic outliers](../../02_Zettel/Theory/Photo-z biases and catastrophic outliers.md)

## key references

- Malmquist 1922 (the original)
- Sandage, Tammann, Yahil 1979 (max-likelihood LF, deals with the bias)
- Teerikorpi 1997 ARAA review
