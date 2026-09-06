---
layout: default
title: "Hubble constant and deceleration parameter"
---

the **Hubble parameter** $H(t)$ measures the rate of expansion at any cosmic time. its value today is the **Hubble constant** $H_0$. the **deceleration parameter** $q_0$ measures how the expansion is changing with time today.

---

## the Hubble parameter

definition:
$$\boxed{\,H \equiv \frac{\dot a}{a}\,}$$

units: inverse time. equivalently, velocity per distance — km/s per Mpc.

$H$ is positive if the universe is expanding, negative if contracting. observationally $H > 0$, and at the present epoch
$$\boxed{\,H_0 = 67.4 \pm 0.5~\text{km/s/Mpc} \quad \text{(Planck 2018, CMB-anchored)}\,}$$
$$\boxed{\,H_0 = 73.04 \pm 1.04~\text{km/s/Mpc} \quad \text{(Riess et al. 2022, SN Ia local)}\,}$$

these two values disagree at the $\sim 5\sigma$ level — the **Hubble tension**, one of the great open problems of 2025/2026.

a useful conversion: $H_0^{-1} = 9.7776\,h^{-1} \times 10^9$ years, where $h \equiv H_0/(100~\text{km/s/Mpc})$. so for $h = 0.674$, $H_0^{-1} \approx 14.5$ Gyr — close to but slightly larger than the age of the universe.

---

## $H$ as a function of redshift

from the Friedmann equation (see Friedmann equations with Λ):
$$H^2(z) = H_0^2[\Omega_m(1+z)^3 + \Omega_\Lambda + \Omega_K(1+z)^2 + \Omega_\gamma(1+z)^4]$$

at low $z$ this is close to constant. at high $z$ it grows steeply because of the $(1+z)^3$ matter and $(1+z)^4$ radiation terms.

---

## the deceleration parameter

definition:
$$\boxed{\,q \equiv -\frac{\ddot a a}{\dot a^2} = -\frac{\ddot a}{a H^2}\,}$$

at the present epoch:
$$q_0 = -\frac{\ddot a(t_0) a_0}{\dot a(t_0)^2}$$

sign convention: $q > 0$ means deceleration (the standard, before 1998), $q < 0$ means acceleration.

substituting the Friedmann equations:
$$q_0 = \frac{\Omega_m}{2} - \Omega_\Lambda$$

(with $\Omega_K \approx 0$ as today.)

with Planck values $\Omega_m \approx 0.31$, $\Omega_\Lambda \approx 0.69$:
$$q_0 \approx 0.155 - 0.69 \approx -0.53$$

**the universe is accelerating today.**

---

## measuring $q_0$ from the Hubble diagram

the luminosity distance, expanded around small $z$:
$$d_L(z) = \frac{c}{H_0}\left[z + \tfrac12 (1 - q_0) z^2 + O(z^3)\right]$$

so:
- **lowest order**: $d_L = (c/H_0) z$ — measures $H_0$
- **next order**: $\propto (1 - q_0) z^2$ — measures $q_0$

it is exactly this $z^2$ correction that the SN Ia Hubble diagram resolved in 1998. data with $z \sim 0.5$–$1$ break the degeneracy between $H_0$ and $q_0$, and the result was $q_0 < 0$. this was the discovery of dark energy.

<img src="{{ "/assets/images/intro-34.png" | relative_url }}" alt="intro-34" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## connection to the equation of state

if dark energy is a perfect fluid with $p = w\rho$, then accelerated expansion ($q_0 < 0$) requires
$$w < -\frac{1}{3}$$

a cosmological constant has $w = -1$ exactly. observed $w \approx -1$ to $\sim 1\%$ precision so far.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html)
- [Cosmic_inventory_dark_energy](../../02_Zettel/Theory/Cosmic_inventory_dark_energy.html)
- Friedmann equations with Λ
- [Density parameters and flatness](../../02_Zettel/Theory/Density parameters and flatness.html)
- [Hubble law derivation low-z](../../02_Zettel/Theory/Hubble law derivation low-z.html)
- [Hubble law exact form](../../02_Zettel/Theory/Hubble law exact form.html)
