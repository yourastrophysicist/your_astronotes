---
layout: default
title: "Press-Schechter formalism"
---

# press-schechter formalism

up: [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html) · [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.html) · [Linear vs nonlinear regime](../../02_Zettel/Theory/Linear vs nonlinear regime.html)

## the core premise

Press & Schechter (1974) proposed an analytical framework to calculate the number density of collapsed, gravitationally bound dark matter halos of mass $M$ per unit mass interval: the **halo mass function** $dn/dM$.

## the mathematical derivation

1. **Gaussian linear density field**:
   Density perturbations $\delta(\vec{x}) \equiv (\rho - \bar{\rho})/\bar{\rho}$ smoothed on a spatial scale $R$ corresponding to mass $M = \frac{4\pi}{3}\bar{\rho} R^3$ obey a Gaussian distribution:
   $$P(\delta_M) = \frac{1}{\sqrt{2\pi}\sigma(M)} \exp\left(-\frac{\delta_M^2}{2\sigma^2(M)}
ight)$$
   where $\sigma^2(M) = \int \frac{k^2 dk}{2\pi^2} P(k) |W(kR)|^2$ is the mass variance.

2. **spherical collapse threshold**:
   In the spherical top-hat collapse model, a perturbation stops expanding, turns around, and collapses to a virialized halo when its linearly extrapolated overdensity reaches:
   $$\delta_c = \frac{3(12\pi)^{2/3}}{20} \approx 1.686$$

3. **the fraction of collapsed volume**:
   The fraction of points with linearly extrapolated overdensity $\delta > \delta_c$ is:
   $$F(>M) = \int_{\delta_c}^\infty P(\delta_M) d\delta_M = \frac{1}{2} \text{erfc}\left(\frac{\delta_c}{\sqrt{2}\sigma(M)}
ight)$$

4. **the factor of 2 resolution**:
   As $M \to 0$, $\sigma(M) \to \infty$, so $F(>M) \to 1/2$. Half the mass appears uncollapsed (the cloud-in-cloud problem). Press and Schechter heuristically multiplied the expression by 2. Excursion set theory (Bond et al. 1991) rigorously justified this factor using Brownian motion with an absorbing barrier at $\delta_c$.

## the differential halo mass function

Taking the derivative with respect to $M$:

$$\boxed{\, \frac{dn}{dM} = \sqrt{\frac{2}{\pi}} \frac{\bar{\rho}}{M} \frac{\delta_c}{\sigma^2(M)} \left|\frac{d\sigma}{dM}\right| \exp\left(-\frac{\delta_c^2}{2\sigma^2(M)}
ight) \,}$$

## physical regimes

- **low-mass power law**: for $M \ll M^*(z)$ where $\sigma(M) \gg \delta_c$, the exponential is $\approx 1$, yielding a steep power law $dn/dM \propto M^{-2 + (n+3)/6}$.
- **high-mass exponential cutoff**: for $M \gg M^*(z)$ where $\sigma(M) \ll \delta_c$, the exponential suppresses the number of massive halos.
- **connection to the galaxy luminosity function**: the exponential cutoff in the halo mass function directly seeds the bright-end exponential cutoff in the [Schechter function](../../02_Zettel/Theory/Schechter function.html).

## modern extensions

- **Sheth-Tormen (2002)**: incorporates ellipsoidal collapse (tidal shear delays collapse, moving the barrier to $\delta_c(M)$).
- **Tinker et al. (2008)**: universal fitting functions calibrated to high-resolution cosmological $N$-body simulations.

## connections

- linear collapse: [Spherical collapse](../../02_Zettel/Theory/Spherical collapse.html)
- galaxy counterpart: [Schechter function](../../02_Zettel/Theory/Schechter function.html), [Integrals of the Schechter function](../../02_Zettel/Theory/Integrals of the Schechter function.html)
