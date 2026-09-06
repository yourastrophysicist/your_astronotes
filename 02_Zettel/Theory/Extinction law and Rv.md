---
layout: default
name: Extinction law and Rv
description: the wavelength dependence of dust extinction parametrised by Cardelli Clayton Mathis 1989 and the role of Rv in distinguishing diffuse from dense ISM
---

the extinction law is the function $A(\lambda)/A_V$ that tells you how much dust attenuation there is at wavelength $\lambda$ relative to the $V$ band. cardelli, clayton & mathis (1989, ApJ 345, 245), usually shortened to CCM89, gave a parametrised fit covering UV through IR that depends on a single parameter, $R_V$:

$$\frac{A(\lambda)}{A_V} = a(x) + \frac{b(x)}{R_V}$$

where $x = 1/\lambda$ in $\mu\text{m}^{-1}$, and $a(x)$, $b(x)$ are piecewise polynomial coefficients given separately for IR ($0.3 \le x \le 1.1$), optical/NIR ($1.1 \le x \le 3.3$), UV ($3.3 \le x \le 8$) and far-UV. the structure tells you that **the shape of the law is set by $R_V$**: pick an $R_V$ and the entire curve is fixed.

$R_V$ itself is the total-to-selective extinction ratio,

$$R_V = \frac{A_V}{E(B-V)}$$

and physically it traces the size distribution of the dust grains. small grains scatter blue light efficiently and produce a steep, blue extinction curve (low $R_V$, around 2.5 in some sightlines). bigger grains have a flatter, greyer curve (high $R_V$).

empirical values and recent measurements:

- **Legnardi et al. 2023**: measured $R_V$ values in the directions of 21 Galactic globular clusters, showing significant star-to-star and sightline-to-sightline variation, confirming that $R_V$ is not a single universal constant even within cluster environments.
- **diffuse ISM**: $R_V \approx 3.1$. this is the canonical value for the local milky way and for sightlines that do not pass through dense molecular material. most galactic CMD work assumes 3.1 by default.
- **dense regions**: $R_V \approx 4$ to $5$, sometimes higher in dark clouds and star-forming regions like rho ophiuchi or the orion nebula. grain coagulation and ice mantles in cold dense gas grow grains, flattening the law.
- **SMC and starburst sightlines**: lower $R_V$, around 2.5 to 3.0. a smaller $R_V$ corresponds to a steeper extinction curve (resulting in significantly more UV extinction relative to $A_V$), whereas a larger $R_V$ produces a flatter extinction curve (typical of dense regions with larger dust grains).

the **2175 angstrom bump** is a broad UV absorption feature commonly attributed to small graphitic grains or polycyclic aromatic hydrocarbons. its strength relative to the continuum is encoded in $b(x)$ and is one way to distinguish milky way from SMC-like extinction. in $R_V \approx 3.1$ sightlines it is prominent; in starburst-like sightlines it is suppressed.

## systematic impact on the Hubble constant ($H_0$)

since the Hubble constant is defined as $H_0 = v/d$, systematic errors in distance determination propagate directly into $H_0$. because distance $d$ is derived from the de-reddened distance modulus:
$$d = 10^{(m - M_0 - A_V + 5)/5}$$
overestimating or underestimating $R_V$ (and thus $A_V$) creates systematic distance shifts:
- **overestimating distances** (e.g. by underestimating $A_V$) $\to$ smaller $H_0$.
- **underestimating distances** (e.g. by overestimating $A_V$) $\to$ larger $H_0$.
this directly shifts the slope of the Hubble diagram, illustrating why high-precision extinction laws are key for cosmology.

## reference papers

- **Cardelli, Clayton, Mathis 1989 (CCM89)** — standard extinction law.
- **Legnardi et al. 2023** — $R_V$ variations across 21 Galactic GCs.
- **Nataf et al. 2013** — Galactic bulge extinction anomalies.

## see also

- [Interstellar reddening and the reddening vector](../../02_Zettel/Theory/Interstellar reddening and the reddening vector.html)
- [Interstellar absorption](../../02_Zettel/Theory/Interstellar absorption.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
