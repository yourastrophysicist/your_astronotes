---
layout: default
title: "1Vmax estimator"
---

# 1/Vmax estimator

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html) · [Luminosity function definition](../../02_Zettel/Theory/Luminosity function definition.html)

## the problem

a flux-limited sample (apparent magnitude $m < m_{\text{lim}}$) does not see all galaxies in your survey volume. faint galaxies are only visible nearby; bright galaxies are visible far. so a naive histogram of absolute magnitudes is biased toward bright objects (this is [Malmquist bias](../../02_Zettel/Theory/Malmquist bias.html)).

we want $\phi(L)$, the *intrinsic* density of galaxies per unit luminosity per unit volume. how do we estimate it?

## schmidt 1968 answer

for each galaxy in the sample, compute $V_{\max}$, the **maximum comoving volume** in which this particular galaxy could have been detected (still satisfying $m < m_{\text{lim}}$). a faint galaxy has small $V_{\max}$; a bright galaxy has $V_{\max}$ equal to the full survey volume.

then estimate the LF by

$$\hat{\phi}(L)\, dL = \sum_{i: L_i \in [L, L+dL]} \frac{1}{V_{\max,i}}$$

i.e., **weight each galaxy by the inverse of the volume in which it could have been seen**. faint galaxies get weighted up; bright galaxies get weighted down.

## why it works

the expected number of galaxies of luminosity $L$ in your sample is $\phi(L)\, dL\, V_{\max}(L)$. so the unbiased estimator of $\phi(L)\, dL$ is the *count* divided by $V_{\max}(L)$, which is what 1/Vmax does on a galaxy-by-galaxy basis. it generalizes naturally to inhomogeneous samples (different magnitude limits in different sub-areas, different cosmologies for different surveys).

## the V_max integral, for completeness

$$V_{\max}(L) = \Omega_{\text{survey}} \int_{z_{\min}}^{z_{\max}(L)} \frac{dV}{dz\, d\Omega}\, dz$$

where $z_{\max}(L)$ solves $L = 4 \pi d_L(z_{\max})^2 \cdot S_{\text{lim}} \cdot 10^{0.4\, K(z_{\max})}$. so $V_{\max}$ folds in cosmology, [K-correction](../../02_Zettel/Theory/K-correction.html), and the survey footprint.

## variants and limitations

- **bivariate $V_{\max}$**: when you have two flux limits (e.g. K-band and 24 μm) you intersect the two volumes.
- **photo-z $V_{\max}$**: marginalize over $p(z)$ rather than using a point estimate, otherwise outliers (see [Photo-z biases and catastrophic outliers](../../02_Zettel/Theory/Photo-z biases and catastrophic outliers.html)) bias the LF.
- **Sandage-Tammann-Yahil 1979 max-likelihood**: an alternative that does not bin in $L$ and is less sensitive to large-scale structure (which can bias 1/Vmax in pencil-beam surveys).
- **STY likelihood for the Schechter parameters**: fit $\phi^*$, $L^*$, $\alpha$ directly without binning.

## what i remember

it is the simplest unbiased LF estimator. it costs essentially nothing per galaxy (one $V_{\max}$ integral), and it generalizes to mass functions, color-LFs, and SFR functions trivially. its main weakness: in pencil-beam surveys it amplifies large-scale structure (a void at low $z$ down-weights faint galaxies, biasing $\alpha$).

## connections

- bias it corrects: [Malmquist bias](../../02_Zettel/Theory/Malmquist bias.html)
- the LF it estimates: [Schechter function](../../02_Zettel/Theory/Schechter function.html)
- when photo-z complicate it: [Photo-z biases and catastrophic outliers](../../02_Zettel/Theory/Photo-z biases and catastrophic outliers.html)
- mass version: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.html)

## key references

- Schmidt 1968, ApJ 151, 393 (the original)
- Felten 1976
- Sandage, Tammann, Yahil 1979 (max-likelihood alternative)
