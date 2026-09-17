---
layout: "default"
title: "Jeans analysis in expanding universe"
---
{% raw %}
when a fluid has both **pressure** (which resists compression) and **gravity** (which drives compression), there is a critical scale below which pressure wins and above which gravity wins. that scale is the **Jeans length**.

in cosmology, the Jeans criterion determines which scales of density perturbations can grow gravitationally and which oscillate as sound waves.

---

## the linear perturbation equation with pressure

starting from the perturbed fluid equations (see [Linear evolution of perturbations in expanding universe](./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html)), with sound speed $c_s$:

$$\ddot\delta + 2H\dot\delta + \left(\frac{c_s^2 k^2}{a^2} - 4\pi G\bar\rho\right)\delta = 0$$

dispersion relation if we ignore Hubble for a moment:
$$\omega^2 = \frac{c_s^2 k^2}{a^2} - 4\pi G\bar\rho$$

- $\omega^2 > 0$: oscillatory solution (sound waves)
- $\omega^2 < 0$: exponentially growing solution (gravitational instability)

the boundary $\omega^2 = 0$ defines the **Jeans wavenumber**:
$$k_J = \frac{a\sqrt{4\pi G\bar\rho}}{c_s}$$

the **Jeans length**:
$$\boxed{\,\lambda_J = \frac{2\pi}{k_J/a} = c_s\sqrt{\frac{\pi}{G\bar\rho}}\,}$$

---

## the Jeans criterion

- $\lambda < \lambda_J$ ($k > k_J$): pressure wins, perturbations *oscillate* as sound waves
- $\lambda > \lambda_J$ ($k < k_J$): gravity wins, perturbations *grow*

equivalently, a **Jeans mass**:
$$M_J = \frac{4\pi}{3}\bar\rho \left(\frac{\lambda_J}{2}\right)^3$$

masses larger than $M_J$ collapse; smaller masses oscillate.

---

## three cosmological scales where this matters

### baryons before recombination

before recombination, baryons + photons form a tightly coupled fluid with sound speed $c_s \sim c/\sqrt 3$. the Jeans length is huge — much larger than the Hubble radius. so **no baryon perturbation can grow before recombination**: they all oscillate as acoustic waves. this is the origin of the CMB peak structure and BAO. → see [Matter power spectrum and BAO](./Matter%20power%20spectrum%20and%20BAO.html) and [Photon decoupling and CMB](./Photon%20decoupling%20and%20CMB.html).

### baryons after recombination

after recombination ($z < 1100$), photon pressure is gone, and the baryon sound speed is just thermal: $c_s \sim \sqrt{k_BT/m_p} \sim$ km/s, much smaller than before. the Jeans mass plummets:
$$M_J \sim 10^4 - 10^5\, M_\odot$$

so baryon perturbations on essentially all galactic scales can grow. they fall into the dark-matter potential wells that have been growing since matter-radiation equality.

### dark matter is always Jeans-unstable

cold dark matter has $c_s \approx 0$ (or extremely small velocity dispersion), so $\lambda_J \approx 0$. **all CDM scales are above the Jeans length** at all times — CDM can grow on all scales as soon as it dominates the energy density (after matter-radiation equality at $z_{\rm eq} \sim 3300$). this is exactly what enables structure formation.

→ this is also why dark matter must be cold: hot dark matter has a large Jeans length, washing out small-scale structure (free-streaming). see [Hot vs cold dark matter](./Hot%20vs%20cold%20dark%20matter.html).

---

## the cosmological Jeans is *modified* by Hubble friction

include the $2H\dot\delta$ term. the Jeans criterion becomes more nuanced — gravitational growth still happens above $\lambda_J$, but at a *power-law* rate ($\delta \propto a$), not exponential. Hubble friction slows growth by orders of magnitude relative to the static case, but does not eliminate it.

so the practical rule:
- **above $\lambda_J$**: $\delta \propto a$ (or $\log a$ in radiation era, or constant in Λ era), see [Growth factor D(z)](./Growth%20factor%20D%28z%29.html)
- **below $\lambda_J$**: oscillation, no net growth

---

## connection to galaxy formation

the Jeans criterion sets a **minimum mass** for a self-gravitating cloud to collapse:
$$M_J \sim \left(\frac{k_BT}{Gm_p}\right)^{3/2} \rho^{-1/2}$$

- molecular clouds in our galaxy: $T \sim 10$ K, $\rho \sim 10^{-22}$ g/cm$^3$, $M_J \sim$ a few $M_\odot$
- HII regions: $T \sim 10^4$ K, $\rho \sim 10^{-24}$ g/cm$^3$, $M_J \sim 10^7 M_\odot$
- intracluster gas: $T \sim 10^7$ K, $\rho \sim 10^{-26}$ g/cm$^3$, $M_J \sim 10^{15} M_\odot$ (cluster scale)

so the Jeans analysis is also the foundation of star formation theory: clouds with $M > M_J$ collapse and form stars (see [Jeans theory and protostellar formation](./Jeans%20theory%20and%20protostellar%20formation.html)).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Linear evolution of perturbations in expanding universe](./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html)
- [Growth factor D(z)](./Growth%20factor%20D%28z%29.html)
- [Hot vs cold dark matter](./Hot%20vs%20cold%20dark%20matter.html)
- [Photon decoupling and CMB](./Photon%20decoupling%20and%20CMB.html)
- [Matter power spectrum and BAO](./Matter%20power%20spectrum%20and%20BAO.html)
- [Spherical collapse](./Spherical%20collapse.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Baumann_reference.html" class="backlink-item">Baumann_reference</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html" class="backlink-item">Cosmological evolution of perturbations in the cosmic fluid</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Growth%20factor%20D%28z%29.html" class="backlink-item">Growth factor D(z)</a></li>
    <li class="backlink-item-wrap"><a href="./Jeans%20theory%20and%20protostellar%20formation.html" class="backlink-item">Jeans theory and protostellar formation</a></li>
    <li class="backlink-item-wrap"><a href="./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html" class="backlink-item">Linear evolution of perturbations in expanding universe</a></li>
    <li class="backlink-item-wrap"><a href="./Linear%20vs%20nonlinear%20regime.html" class="backlink-item">Linear vs nonlinear regime</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Perturbations%20in%20an%20expanding%20universe.html" class="backlink-item">Perturbations in an expanding universe</a></li>
    <li class="backlink-item-wrap"><a href="./Spherical%20collapse.html" class="backlink-item">Spherical collapse</a></li>
  </ul>
</div>
