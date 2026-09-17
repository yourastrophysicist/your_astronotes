---
layout: "default"
title: "Density parameters and flatness"
---
{% raw %}
density parameters $\Omega_i$ are the dimensionless way to express the energy budget of the universe in units of the critical density.

---

## the critical density

from the Friedmann equation (see Friedmann equations with Λ) with $\Lambda$ absorbed and $k = 0$:
$$\rho_{\rm crit} = \frac{3 H^2}{8\pi G}$$

at the present epoch:
$$\rho_{0,\rm crit} = \frac{3 H_0^2}{8\pi G} \approx 1.88\,h^2 \times 10^{-29}~\text{g/cm}^3 \simeq 8.1 \times 10^{-11}\,h^2~\text{eV}^4$$

(in natural units.) this is the density a flat universe must have at any given $H$.

---

## density parameter for each component

$$\Omega_i \equiv \frac{\rho_i}{\rho_{\rm crit}} = \frac{8\pi G}{3 H^2}\rho_i$$

evaluated today (with subscript $0$ on $\Omega$ when ambiguous):

| component | $\rho \propto$ | $\Omega_0$ |
|---|---|---|
| photons | $a^{-4}$ | $\Omega_{0\gamma} \approx 5 \times 10^{-5}$ |
| neutrinos | $a^{-4}$ (when relativistic), then $a^{-3}$ | $\Omega_\nu \lesssim 10^{-3}$ |
| baryons | $a^{-3}$ | $\Omega_b \approx 0.049$ |
| dark matter | $a^{-3}$ | $\Omega_{dm} \approx 0.265$ |
| total matter | $a^{-3}$ | $\Omega_m \approx 0.315$ |
| cosmological constant | constant | $\Omega_\Lambda \approx 0.685$ |
| curvature | $a^{-2}$ | $\Omega_K = 1 - \Omega_0 \approx 0.001 \pm 0.002$ |

---

## the flatness condition

the Friedmann equation in dimensionless form:
$$1 = \Omega_m + \Omega_\gamma + \Omega_\Lambda + \Omega_K$$

defining
$$\Omega_K \equiv -\frac{k c^2}{H^2 a^2}$$

so:
$$\boxed{\,\Omega_K = 1 - \Omega_0 = 1 - (\Omega_m + \Omega_\gamma + \Omega_\Lambda)\,}$$

the universe is:
- **closed** ($k = +1$): $\Omega_K < 0 \Leftrightarrow \Omega_0 > 1$
- **flat** ($k = 0$): $\Omega_K = 0 \Leftrightarrow \Omega_0 = 1$
- **open** ($k = -1$): $\Omega_K > 0 \Leftrightarrow \Omega_0 < 1$

---

## what we measure

from Planck 2018 + lensing + BAO:
$$\boxed{\,\Omega_K = 0.001 \pm 0.002 \quad (68\%~\text{CL})\,}$$

the universe is **flat to a fraction of a percent**.

so in practice I always use $\Omega_K = 0$ in cosmological calculations. the $\Omega_m + \Omega_\Lambda \approx 1$ closure relation is the cleanest summary of ΛCDM.

---

## the curvature-dynamics relation

from the Friedmann equation:
$$\frac{kc^2}{a^2} = H^2(\Omega_0 - 1)$$

at the present epoch:
$$\frac{kc^2}{a_0^2} = H_0^2(\Omega_0 - 1)$$

so the curvature *scale* is set by the deviation from $\Omega_0 = 1$, normalized by $H_0$. for $\Omega_K \approx 10^{-3}$ and $H_0^{-1} \approx 14$ Gpc, the curvature radius is at least
$$a_0/\sqrt{|k|} \gtrsim H_0^{-1}/\sqrt{|\Omega_K|} \sim 14/\sqrt{0.003} \approx 250~\text{Gpc}$$

far larger than the observable universe. so even if the universe is technically curved, we cannot detect it.

---

## why is the universe so flat?

a deep question. if $\Omega_K(t)$ were anything but tiny in the early universe, it would have grown enormously by today (the **flatness problem**). starting with $\Omega_K \sim 10^{-3}$ today, you can extrapolate back and find the universe at the Planck epoch must have had $|\Omega_K|$ tuned to $\sim 10^{-60}$. this is a fine-tuning that **inflation** is designed to solve (see [Inflation overview](./Inflation%20overview.html) and [Standard model problems](./Standard%20model%20problems.html)).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- Friedmann equations with Λ
- [Curvature parameter k](./Curvature%20parameter%20k.html)
- [Hubble constant and deceleration parameter](./Hubble%20constant%20and%20deceleration%20parameter.html)
- [Inflation overview](./Inflation%20overview.html)
- [Standard model problems](./Standard%20model%20problems.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Curvature%20parameter%20k.html" class="backlink-item">Curvature parameter k</a></li>
    <li class="backlink-item-wrap"><a href="./Density%20parameters.html" class="backlink-item">Density parameters</a></li>
    <li class="backlink-item-wrap"><a href="./Friedmann%20equations%20with%20Lambda.html" class="backlink-item">Friedmann equations with Lambda</a></li>
    <li class="backlink-item-wrap"><a href="./Friedmann%20models.html" class="backlink-item">Friedmann models</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Hubble%20constant%20and%20deceleration%20parameter.html" class="backlink-item">Hubble constant and deceleration parameter</a></li>
    <li class="backlink-item-wrap"><a href="./Newtonian%20Friedmann%20derivation.html" class="backlink-item">Newtonian Friedmann derivation</a></li>
    <li class="backlink-item-wrap"><a href="./Standard%20model%20problems.html" class="backlink-item">Standard model problems</a></li>
  </ul>
</div>
