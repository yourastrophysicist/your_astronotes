---
layout: "default"
title: "Hubble law exact form"
---
the Hubble law $v = H_0 d$ is only valid for $z \ll 1$. at higher redshifts the linear form fails and we need the full **luminosity-distance form**:
$$d_L(z) = (1 + z)\int_0^z \frac{c\, dz'}{H(z')}$$

(in a flat universe.) this is the form actually used to fit SN Ia Hubble diagrams and discover dark energy in 1998.

---

## the small-z expansion

expanding $d_L(z)$ in powers of $z$:
$$\boxed{\,d_L(z) = \frac{c}{H_0}\left[z + \tfrac12(1 - q_0) z^2 + \cdots\right]\,}$$

with the deceleration parameter
$$q_0 = -\frac{\ddot a(t_0) a_0}{\dot a(t_0)^2}$$

so:
- the **first-order** term $\propto z$ measures $H_0$ alone — the Hubble constant
- the **second-order** term $\propto z^2$ measures $q_0$ — the acceleration

a positive $q_0$ means deceleration (an EdS or matter-only universe). a negative $q_0$ means acceleration, requiring something with negative pressure (Λ).

---

## the SN Ia Hubble diagram

at $z \sim 0.5$–$1$, the second-order term is large enough to break the degeneracy between $H_0$ and $q_0$. when SN Ia were measured at these redshifts in 1998, they came out *fainter* than any matter-only model, sitting on a curve consistent with $\Omega_M = 0.28, \Omega_\Lambda = 0.72$ — the discovery of dark energy.

![intro-33.png](../../assets/images/intro-33.png)

---

## the full $d_L$ for ΛCDM

with $\Omega_K \approx 0$, $\Omega_\gamma$ negligible:
$$d_L(z) = \frac{c(1+z)}{H_0}\int_0^z \frac{dz'}{\sqrt{\Omega_m(1+z')^3 + \Omega_\Lambda}}$$

for nonzero curvature you also need a $\sin/\sinh$ factor on the comoving distance (see 03_Zettel/Theory/Cosmological distances).

related distances (all equal at low z, all different at high z):
- comoving: $d_C(z) = \int_0^z c\,dz'/H(z')$
- angular diameter: $d_A(z) = d_C(z)/(1+z)$
- luminosity: $d_L(z) = d_C(z)(1+z) = d_A(z)(1+z)^2$

→ see 03_Zettel/Theory/Cosmological distances for the full set.

![intro-34.png](../../assets/images/intro-34.png)

---

## why this distinction matters

at low $z$ I can interchange "velocity" and "distance" almost casually because everything is linear. at high $z$ I cannot. the cosmological *redshift* is no longer a kinematic Doppler effect — it is a **geometrical** consequence of $a(t)$ stretching photons.

so when an undergraduate first encounters $z = 0.5$ they often want to compute "how fast that galaxy is moving" using $v = cz/(1+z)$ or some variant. the right answer is: there is no single velocity. the universe is not just stars moving in a static space; it is space itself stretching. what we *measure* is $z$, not $v$.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Hubble law derivation low-z](Hubble%20law%20derivation%20low-z.html)
- [Hubble constant and deceleration parameter](Hubble%20constant%20and%20deceleration%20parameter.html)
- 03_Zettel/Theory/Cosmological distances
- [Cosmic_inventory_dark_energy](Cosmic_inventory_dark_energy.html)
- Friedmann equations with Λ

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Cosmic_inventory_dark_energy.html" class="backlink-item">Cosmic_inventory_dark_energy</a></li>
    <li class="backlink-item-wrap"><a href="Cosmological%20distances.html" class="backlink-item">Cosmological distances</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20constant%20and%20deceleration%20parameter.html" class="backlink-item">Hubble constant and deceleration parameter</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20flow%20distances.html" class="backlink-item">Hubble flow distances</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20law%20derivation%20low-z.html" class="backlink-item">Hubble law derivation low-z</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20law.html" class="backlink-item">Hubble law</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

