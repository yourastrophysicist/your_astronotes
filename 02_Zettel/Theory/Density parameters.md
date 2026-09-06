---
layout: default
title: "Density parameters"
---

**density parameters** $\Omega_X$ are dimensionless ratios of cosmic energy densities to the **critical density**. they parameterise $\Lambda$CDM + are the natural variables in the Friedmann equation. companion: [Density parameters and flatness](../../02_Zettel/Theory/Density parameters and flatness.html).

## the critical density

defined as the density that makes a flat universe in the Friedmann equation:
$$\rho_c \equiv \frac{3 H_0^2}{8\pi G}$$

with $H_0$ the Hubble constant today. numerical:
$$\rho_c = 1.878\times 10^{-29}\,h^2\,\text{g/cm}^3 \approx 5.1\,h^2\,\text{protons/m}^3$$

with $h = H_0/100$ km/s/Mpc.

## the density parameters

for each fluid + curvature component:
$$\Omega_X = \rho_X/\rho_c$$

today's values (Planck $\Lambda$CDM):
- $\Omega_b \approx 0.049$ (baryons).
- $\Omega_c \approx 0.265$ (cold dark matter).
- $\Omega_m = \Omega_b + \Omega_c \approx 0.315$ (total matter).
- $\Omega_r \approx 9.2 \times 10^{-5}$ (radiation: photons + neutrinos).
- $\Omega_\Lambda \approx 0.685$ (dark energy / cosmological constant).
- $\Omega_k \approx 0$ (curvature, $|\Omega_k| < 0.005$).

normalisation:
$$\Omega_m + \Omega_r + \Omega_\Lambda + \Omega_k = 1$$

(by definition of the Friedmann equation today.)

## the Friedmann equation in $\Omega$ form

dividing by $H_0^2$:
$$\frac{H(z)^2}{H_0^2} = \Omega_r(1+z)^4 + \Omega_m(1+z)^3 + \Omega_\Lambda + \Omega_k(1+z)^2$$

each term scales differently with $z$:
- $\Omega_r(1+z)^4$: dominates at high $z$ (radiation era).
- $\Omega_m(1+z)^3$: dominates at intermediate $z$ (matter era).
- $\Omega_\Lambda$: dominates at low $z$ (dark-energy era).
- $\Omega_k(1+z)^2$: small at all $z$ in our universe.

## the curvature parameter $\Omega_k$

defined:
$$\Omega_k \equiv -\frac{kc^2}{a_0^2 H_0^2} = 1 - \Omega_{\rm tot}$$

so:
- $\Omega_k > 0$ ↔ $k < 0$: **open** universe.
- $\Omega_k = 0$ ↔ $k = 0$: **flat** universe.
- $\Omega_k < 0$ ↔ $k > 0$: **closed** universe.

equivalently, **$\Omega_{\rm tot} = 1 \Leftrightarrow$ flat universe**.

current measurements: $|\Omega_k| < 0.005$. universe is **flat to better than 0.5%**.

## the deceleration parameter

derived from acceleration equation:
$$q_0 \equiv -\frac{\ddot a a}{\dot a^2}\bigg|_{t_0} = \frac{1}{2}\Omega_m + \Omega_r - \Omega_\Lambda$$

(approximate; ignores radiation today since $\Omega_r$ tiny). with current values:
$$q_0 \approx \frac{1}{2}(0.315) - 0.685 = -0.527$$

negative = **accelerating** universe. measured directly from SN Ia Hubble diagram.

## the typical $\Omega h^2$ values

CMB data measures $\Omega h^2$ directly (via the physical density), then $\Omega$ alone requires $H_0$:
- $\Omega_b h^2 = 0.0224$.
- $\Omega_c h^2 = 0.120$.
- $\Omega_m h^2 = 0.143$.

these are determined to $\sim 1\%$ from Planck CMB peak structure. converting to $\Omega$ requires $H_0$, the most uncertain step (Hubble tension at $\sim 7\%$).

## see also

- [Density parameters and flatness](../../02_Zettel/Theory/Density parameters and flatness.html)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.html)
- [Spatial curvature parameter k](../../02_Zettel/Theory/Spatial curvature parameter k.html)
- [ΛCDM current parameters](../../02_Zettel/Theory/ΛCDM current parameters.html)
- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.html)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html)
