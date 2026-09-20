---
layout: "default"
title: "Mandel-Agol analytical transit light curve model"
---
Kaisey Mandel and Eric Agol (2002) derived exact analytical formulas for exoplanetary transit light curves including stellar limb darkening using complete elliptic integrals.

## transit geometry and parameters

the transit light curve $F(t) / F_0$ depends on:
- planet-to-star radius ratio: $k \equiv R_p / R_\star$
- normalized center-to-center projected separation: $z(t) = d(t) / R_\star$
- impact parameter: $b = \frac{a \cos i}{R_\star} \left(\frac{1 - e^2}{1 + e \sin\omega}\right)$
- limb darkening profile $I(r) / I(0)$

the transit depth in the absence of limb darkening is simply the area ratio:

$$\delta = \frac{\Delta F}{F_0} = \left( \frac{R_p}{R_\star} \right)^2 = k^2$$

## quadratic limb darkening law

the intensity profile across the stellar disk is parameterized by:

$$\frac{I(\mu)}{I(1)} = 1 - u_1 (1 - \mu) - u_2 (1 - \mu)^2$$

where $\mu = \cos\theta = \sqrt{1 - r^2}$ ($r$ is normalized distance from center of star to limb).

## analytical regimes in the mandel-agol formulation

the normalized flux $F(z, k)$ is evaluated across distinct geometric phases:
1. **out of transit** ($z \ge 1 + k$):
   $$F(z, k) = 1$$
2. **ingress / egress** ($1 - k < z < 1 + k$): planet partially covers the stellar limb; computed via incomplete elliptic integrals of the first, second, and third kind ($F(\phi, k), E(\phi, k), \Pi(n, \phi, k)$).
3. **full transit (in-transit)** ($z \le 1 - k$): planet fully inside stellar disk:
   $$F(z, k) = 1 - \frac{1}{4\Omega} \left[ (1 - u_1 - 2u_2) k^2 + (u_1 + 2u_2) \mathcal{Q}(z, k) + \dots \right]$$
   where $\Omega = 1 - u_1/3 - u_2/6$ is the disk normalization factor.

implemented in fast modern codes (`batman`, `juliet`, `pytransit`), computing thousands of models per second for MCMC posterior sampling.

## see also

- [[Exoplanetary_Astrophysics_MOC]]
- [[16_Transit_Light_Curve_Modeling_and_Limb_Darkening]]
- [[Transit Modeling with batman]]
- [[Mean stellar density determination from transit observables]]
- [[Stellar Limb Darkening Laws]]



## Linked References

- [[Exoplanet atmospheric scale height and transmission spectroscopy]]
- [[Mean stellar density determination from transit observables]]
- [[Rossiter-McLaughlin effect and spin-orbit obliquity]]
- [[Transit false positive vetting and blending validation]]
- [[Transit timing variations and resonant multi-planet dynamics]]
- [[Exoplanetary_Astrophysics_MOC]]


