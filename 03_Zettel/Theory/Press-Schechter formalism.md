---
layout: "default"
title: "Press-Schechter formalism"
---
# press-schechter formalism

up: [[Observational_Cosmology_MOC]] · [[Spherical collapse]] · [[Linear vs nonlinear regime]]

## the core premise

Press & Schechter (1974) proposed an analytical framework to calculate the number density of collapsed, gravitationally bound dark matter halos of mass $M$ per unit mass interval: the **halo mass function** $dn/dM$.

## the mathematical derivation

1. **Gaussian linear density field**:
   Density perturbations $\delta(\vec{x}) \equiv (\rho - \bar{\rho})/\bar{\rho}$ smoothed on a spatial scale $R$ corresponding to mass $M = \frac{4\pi}{3}\bar{\rho} R^3$ obey a Gaussian distribution:
   $$P(\delta_M) = \frac{1}{\sqrt{2\pi}\sigma(M)} \exp\left(-\frac{\delta_M^2}{2\sigma^2(M)}\right)$$
   where $\sigma^2(M) = \int \frac{k^2 dk}{2\pi^2} P(k) \lvert W(kR)\rvert^2$ is the mass variance.

2. **spherical collapse threshold**:
   In the spherical top-hat collapse model, a perturbation stops expanding, turns around, and collapses to a virialized halo when its linearly extrapolated overdensity reaches:
   $$\delta_c = \frac{3(12\pi)^{2/3}}{20} \approx 1.686$$

3. **the fraction of collapsed volume**:
   The fraction of points with linearly extrapolated overdensity $\delta > \delta_c$ is:
   $$F(>M) = \int_{\delta_c}^\infty P(\delta_M) d\delta_M = \frac{1}{2} \text{erfc}\left(\frac{\delta_c}{\sqrt{2}\sigma(M)}\right)$$

4. **the factor of 2 resolution**:
   As $M \to 0$, $\sigma(M) \to \infty$, so $F(>M) \to 1/2$. Half the mass appears uncollapsed (the cloud-in-cloud problem). Press and Schechter heuristically multiplied the expression by 2. Excursion set theory (Bond et al. 1991) rigorously justified this factor using Brownian motion with an absorbing barrier at $\delta_c$.

## the differential halo mass function

Taking the derivative with respect to $M$:

$$\boxed{\, \frac{dn}{dM} = \sqrt{\frac{2}{\pi}} \frac{\bar{\rho}}{M} \frac{\delta_c}{\sigma^2(M)} \left|\frac{d\sigma}{dM}\right| \exp\left(-\frac{\delta_c^2}{2\sigma^2(M)}\right) \,}$$

## physical regimes

- **low-mass power law**: for $M \ll M^*(z)$ where $\sigma(M) \gg \delta_c$, the exponential is $\approx 1$, yielding a steep power law $dn/dM \propto M^{-2 + (n+3)/6}$.
- **high-mass exponential cutoff**: for $M \gg M^*(z)$ where $\sigma(M) \ll \delta_c$, the exponential suppresses the number of massive halos.
- **connection to the galaxy luminosity function**: the exponential cutoff in the halo mass function directly seeds the bright-end exponential cutoff in the [[Schechter function]].

## modern extensions

- **Sheth-Tormen (2002)**: incorporates ellipsoidal collapse (tidal shear delays collapse, moving the barrier to $\delta_c(M)$).
- **Tinker et al. (2008)**: universal fitting functions calibrated to high-resolution cosmological $N$-body simulations.

## where it goes wrong

- the formalism needs a choice of filter, and the results depend on it.

## connections

- linear collapse: [[Spherical collapse]]
- galaxy counterpart: [[Schechter function]], [[Integrals of the Schechter function]]



<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Press–Schechter formalism**. "The Press–Schechter formalism is a mathematical model for predicting the number of objects (such as galaxies, galaxy clusters or dark matter halos) of a certain mass within a given volume of the Universe. It was described in an academic paper by William H. Press and Paul Schechter in 1974." ([Wikipedia](https://en.wikipedia.org/wiki/Press%E2%80%93Schechter_formalism))
- **The Excursion Set Theory of Halo Mass Functions, Halo Clustering, and Halo Growth**. "I review the excursion set theory (EST) of dark matter halo formation and clustering. I recount the Press-Schechter argument for the mass function of bound objects and review the derivation of the Press-Schechter mass function in EST. The EST formalism is powerful and can be applied to numerous problems. I review the EST of halo bias and the properties of void regions." ([arXiv:astro-ph/0611454](https://arxiv.org/abs/astro-ph/0611454))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## Linked References

- [[Observational_Cosmology_MOC]]


