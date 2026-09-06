---
layout: default
title: "Deceleration parameter"
---

the **deceleration parameter** $q_0$ measures the rate of change of cosmic expansion + thus the universe's deceleration (or acceleration) today. defined to be **positive for deceleration** by historical convention (when everyone assumed gravity slows expansion).

## the definition

$$\boxed{\, q_0 \equiv -\frac{\ddot a\,a}{\dot a^2}\bigg|_{t_0} \,}$$

with $a$ + $\dot a$ + $\ddot a$ evaluated today. negative sign by convention, so positive $q_0$ corresponds to deceleration.

equivalently:
$$q_0 = -\frac{\ddot a}{a H_0^2}$$

## the physical interpretation

from the acceleration equation:
$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}(\rho + 3p) + \frac{\Lambda c^2}{3}$$

dividing by $H_0^2$ + using $\rho_c = 3H_0^2/(8\pi G)$:
$$q_0 = \frac{1}{2}\Omega_m + \Omega_r - \Omega_\Lambda$$

(approximate; ignores $\Omega_r$ today since it's tiny; equation of state $w = 0$ for matter, $1/3$ for radiation, $-1$ for $\Lambda$).

so $q_0$ depends on the **balance** between attractive matter + repulsive dark energy:
- pure matter universe ($\Omega_\Lambda = 0$, $\Omega_m = 1$): $q_0 = 0.5$ (decelerating).
- pure $\Lambda$ universe ($\Omega_m = 0$, $\Omega_\Lambda = 1$): $q_0 = -1$ (accelerating).
- our universe ($\Omega_m = 0.31$, $\Omega_\Lambda = 0.69$): $q_0 \approx -0.53$ (accelerating).

## the discovery

before 1998, $q_0$ was assumed positive (deceleration; "the universe is slowing down"). Perlmutter, Riess, Schmidt 1998 used SN Ia to measure $q_0$ directly. result:
$$q_0 \approx -0.6$$
**negative**: universe is accelerating. this **directly required** $\Omega_\Lambda > 0$ + revolutionised cosmology.

## the SN Ia measurement

at small + moderate $z$, the luminosity distance expands as:
$$d_L(z) = \frac{c}{H_0}\!\left[z + \frac{1 - q_0}{2}z^2 + \dots\right]$$

so the second-order $z^2$ coefficient gives $q_0$. SN Ia at $z \sim 0.5$ to $1$ probe this term. their distances are **systematically larger** (fainter) than EdS prediction, requiring $q_0 < 0$.

## the modern values

Planck $\Lambda$CDM: $q_0 = -0.527 \pm 0.011$. **acceleration confirmed**.

equivalent: deceleration was happening at $z > 0.7$ (when matter dominated), but acceleration started recently as $\Lambda$ took over.

the **transition redshift** (from $q > 0$ to $q < 0$):
$$z_{\rm acc} \approx 0.7$$

so the universe started accelerating $\sim 6$ Gyr ago.

## see also

- [Hubble constant and deceleration parameter](../../02_Zettel/Theory/Hubble constant and deceleration parameter.html)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.html)
- [Cosmological constant](../../02_Zettel/Theory/Cosmological constant.html)
- [ΛCDM current parameters](../../02_Zettel/Theory/ΛCDM current parameters.html)
- [Supernova Hubble diagram](../../02_Zettel/Theory/Supernova Hubble diagram.html)
- [Density parameters](../../02_Zettel/Theory/Density parameters.html)
- [Cosmic eras](../../02_Zettel/Theory/Cosmic eras.html)
- [Type Ia supernovae as standard candles](../../02_Zettel/Theory/Type Ia supernovae as standard candles.html)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html)
