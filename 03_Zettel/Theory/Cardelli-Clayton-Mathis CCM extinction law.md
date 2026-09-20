---
layout: "default"
title: "Cardelli-Clayton-Mathis CCM extinction law"
---
Cardelli, Clayton, & Mathis (CCM 1989, *ApJ*, 345, 245) established that the total extinction law $A_\lambda / A_V$ from $0.125\text{ }\mu\text{m}$ to $3.5\text{ }\mu\text{m}$ is governed by a single parameter: $R_V \equiv A_V / E(B-V)$.

$$\frac{A_\lambda}{A_V} = a(x) + \frac{b(x)}{R_V} \quad \text{with } x \equiv \frac{1}{\lambda}\ [\mu\text{m}^{-1}]$$

## polynomial coefficients

1. **Infrared ($0.3 \le x \le 1.1\,\mu\text{m}^{-1}$)**:
   $$a(x) = 0.574 \, x^{1.61}$$
   $$b(x) = -0.527 \, x^{1.61}$$
2. **Optical / Near-IR ($1.1 \le x \le 3.3\,\mu\text{m}^{-1}$, $y \equiv x - 1.82$)**:
   $$a(x) = 1 + 0.17699 y - 0.50447 y^2 - 0.02427 y^3 + 0.72085 y^4 + 0.01979 y^5 - 0.77530 y^6 + 0.32999 y^7$$
   $$b(x) = 1.41338 y + 2.28305 y^2 + 1.07233 y^3 - 5.38434 y^4 - 0.62251 y^5 + 5.30260 y^6 - 2.09002 y^7$$
3. **Ultraviolet ($3.3 \le x \le 8.0\,\mu\text{m}^{-1}$)**:
   $$a(x) = 1.752 - 0.316 x - \frac{0.104}{(x - 4.67)^2 + 0.341} + F_a(x)$$
   $$b(x) = -3.090 + 1.825 x + \frac{1.206}{(x - 4.62)^2 + 0.263} + F_b(x)$$

where the Lorentzian profiles represent the **$2175\text{ \AA}$ bump** ($x \approx 4.6\text{ }\mu\text{m}^{-1}$).

## see also

- [[Astrophysics_of_the_Interstellar_Medium_MOC]]
- [[Trumpler discovery of interstellar extinction]]
- [[Diffuse interstellar bands and polycyclic aromatic hydrocarbons]]
- [[Interstellar reddening and the reddening vector]]
- [[Carraro_05_Interstellar_Dust_and_Extinction]]



## Linked References

- [[Diffuse interstellar bands and polycyclic aromatic hydrocarbons]]
- [[Trumpler discovery of interstellar extinction]]
- [[Astrophysics_of_the_Interstellar_Medium_MOC]]


