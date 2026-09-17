---
layout: "default"
title: "Malmquist bias"
---
{% raw %}
# malmquist bias

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

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
- the [Schechter function](./Schechter%20function.html) $L^*$ moves to higher luminosity at high $z$ → fake $L^*$ evolution
- standard candles get *brighter* at large distance → biased $H_0$ if uncorrected

most modern analyses use [1Vmax estimator](./1Vmax%20estimator.html) or maximum-likelihood (Sandage-Tammann-Yahil 1979) techniques to invert the bias rather than trying to apply a correction. the principle is the same: weight each source by the inverse volume in which it could have been detected.

## a related effect: eddington bias

Eddington bias is similar in spirit but applies in *flux* space: photometric scatter scatters more sources up across the flux cutoff than down (because the source counts rise toward fainter fluxes). this *boosts* observed counts at the limit. some authors lump both under "Malmquist", but they are different.

## what i remember

it is the cosmologists' version of survivorship bias. the sample edge selects, the population statistics get distorted, and the only honest fix is to model the selection function explicitly.

## connections

- previous: [Redshift distribution of flux-limited samples](./Redshift%20distribution%20of%20flux-limited%20samples.html)
- the LF estimator that handles it: [1Vmax estimator](./1Vmax%20estimator.html)
- combined with photometry: [Photo-z biases and catastrophic outliers](./Photo-z%20biases%20and%20catastrophic%20outliers.html)

## key references

- Malmquist 1922 (the original)
- Sandage, Tammann, Yahil 1979 (max-likelihood LF, deals with the bias)
- Teerikorpi 1997 ARAA review
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./1Vmax%20estimator.html" class="backlink-item">1Vmax estimator</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Photo-z%20biases%20and%20catastrophic%20outliers.html" class="backlink-item">Photo-z biases and catastrophic outliers</a></li>
    <li class="backlink-item-wrap"><a href="./Redshift%20distribution%20of%20flux-limited%20samples.html" class="backlink-item">Redshift distribution of flux-limited samples</a></li>
  </ul>
</div>
