---
layout: "default"
title: "Cosmological principle"
---
{% raw %}
the **cosmological principle** is the assumption that the universe, on sufficiently large scales, is **homogeneous and isotropic**.

- **homogeneous**: independent of position. every point looks the same.
- **isotropic**: independent of direction. every direction looks the same.

isotropy at every point implies homogeneity. so the principle is really one statement.

---

## what "large scales" means

![intro-02.png](../../assets/images/intro-02.png)

![intro-03.png](../../assets/images/intro-03.png)

the typical scales:
- separation of stars in our galaxy: parsecs (1 pc $\approx 3.086 \times 10^{13}$ km)
- separation of bright galaxies: $\sim 1$ Mpc
- the cosmological regime: $l \gtrsim 1$ Mpc

at scales above $\sim 100$ Mpc, the galaxy distribution looks statistically homogeneous and isotropic: that is the regime in which the cosmological principle holds.

below that scale the universe is *clumpy* — galaxies, clusters, walls, voids, the cosmic web (see [Matter power spectrum and BAO](./Matter%20power%20spectrum%20and%20BAO.html)).

---

## why we adopt it

three reasons, in increasing order of weight:

1. **cosmographic surveys**: redshift surveys (2dFGRS, SDSS, Planck) show the galaxy distribution is statistically isotropic on large scales. small-scale clumpiness averages out at $> 100$ Mpc.

![intro-04.png](../../assets/images/intro-04.png)

2. **CMB anisotropies are tiny**: $\Delta T/\bar T \sim 10^{-5}$. the universe at $z = 1100$ was extraordinarily smooth. modern temperature and polarization maps (Planck 2018) show this directly:

![intro-12.png](../../assets/images/intro-12.png)

3. **theoretical simplicity**: the Copernican principle generalized. there is no privileged observer or direction in the universe. picking any other condition would require fine-tuning.

> *despite what your mom might have told you, we shouldn't assume that we are the centre of the universe.* — Baumann

---

## the comoving observer

within an isotropic and homogeneous universe, there is a privileged class of observers: those who see the universe as isotropic *around them*. these are called **comoving observers** or "fundamental observers." they are not unique — every point of space supports one.

a comoving observer is one who follows the **Hubble flow** of expansion, with no peculiar velocity superimposed. our observed local-group peculiar velocity ($\sim 600$ km/s) shows up as the **CMB dipole** — once we subtract that, the rest-frame CMB is isotropic to $\Delta T/T \sim 10^{-5}$.

so the CMB itself is the operational realization of the comoving frame.

---

## consequences

- the universe can be foliated into spatial slices $\Sigma_t$ at fixed cosmic time, each homogeneous and isotropic
- this restricts the metric to a unique form: the **Robertson-Walker metric** (see 03_Zettel/Theory/Robertson-Walker metric)
- only one function of time, the scale factor $a(t)$, encodes the entire geometry
- combined with the Einstein equations, the dynamics of $a(t)$ is the **Friedmann equation** (see Friedmann equations with Λ)

so the cosmological principle reduces all of cosmology to *one ODE for one function of time*. that is its enormous practical power.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmic_inventory_overview](./Cosmic_inventory_overview.html)
- 03_Zettel/Theory/Robertson-Walker metric
- Friedmann equations with Λ
- [Cosmic_inventory_photons](./Cosmic_inventory_photons.html) — the CMB as the realization of the comoving frame
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Book/Baumann%20GR/Ch%207%20-%20Cosmology.html" class="backlink-item">Ch 7 - Cosmology</a></li>
    <li class="backlink-item-wrap"><a href="./FLRW%20metric.html" class="backlink-item">FLRW metric</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Newtonian%20derivation%20of%20Friedmann.html" class="backlink-item">Newtonian derivation of Friedmann</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Robertson-Walker%20metric.html" class="backlink-item">Robertson-Walker metric</a></li>
    <li class="backlink-item-wrap"><a href="./Sectional%20and%20Gaussian%20curvature.html" class="backlink-item">Sectional and Gaussian curvature</a></li>
    <li class="backlink-item-wrap"><a href="./Spatial%20curvature%20parameter%20k.html" class="backlink-item">Spatial curvature parameter k</a></li>
  </ul>
</div>
