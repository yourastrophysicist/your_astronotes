---
layout: "default"
title: "Press-Schechter halo mass function"
---
{% raw %}
how many dark-matter halos of a given mass exist in a given comoving volume? the answer is the **halo mass function** $dn/dM$. an analytic prediction is the **Press-Schechter formalism** (Press & Schechter 1974), which combines linear perturbation theory with the spherical collapse threshold.

it is the bridge between the **matter power spectrum** $P_m(k)$ and the **abundance of galaxies and clusters**.

---

## the setup

start from the linear matter power spectrum at some reference time (today, say). smooth it with a top-hat filter of comoving radius $R$ to get the variance:
$$\sigma^2(R) = \int \frac{dk}{2\pi^2}\, k^2\, P_m(k)\, |W(kR)|^2$$

with $|W(kR)|^2 = (3/(kR)^3)^2 [\sin(kR) - kR\cos(kR)]^2$ the Fourier transform of a top hat.

associate $R$ with a mass scale via the mean matter density:
$$M(R) = \frac{4\pi}{3}\bar\rho_m R^3$$

so $\sigma(M)$ is the rms fluctuation of $\delta$ on the mass scale $M$. for ΛCDM:
- $\sigma_8 \equiv \sigma(R = 8\,h^{-1}\,\text{Mpc}) \approx 0.81$ (Planck 2018)
- $\sigma$ decreases with increasing $M$ (less power on larger scales)

---

## the Press-Schechter ansatz

assume:
1. $\delta$ is Gaussian with variance $\sigma^2(M)$ at any mass scale
2. a region of mass $M$ has collapsed if its smoothed linear $\delta$ exceeds the spherical-collapse threshold $\delta_c \approx 1.686$ (see [Spherical collapse](./Spherical%20collapse.html))

the fraction of mass in regions with $\delta > \delta_c$ is:
$$F(>M) = \frac{1}{\sqrt{2\pi}\sigma}\int_{\delta_c}^\infty e^{-\delta^2/(2\sigma^2)}\,d\delta = \frac{1}{2}\,\text{erfc}\left(\frac{\delta_c}{\sqrt 2\sigma}\right)$$

the **fudge factor of 2** comes from the "cloud-in-cloud" problem (a region with $\delta < \delta_c$ might be part of a larger collapsed region). Press and Schechter put this in by hand; the **excursion-set theory** of Bond, Cole, Efstathiou, Kaiser (1991) derives it rigorously.

differentiating gives the **mass function**:
$$\boxed{\,\frac{dn}{dM} = \sqrt{\frac{2}{\pi}}\, \frac{\bar\rho_m}{M^2}\, \frac{\delta_c}{\sigma(M)}\, \left|\frac{d\ln\sigma}{d\ln M}\right|\, e^{-\delta_c^2/(2\sigma^2)}\,}$$

---

## the universal shape

the PS mass function has a **power-law** behavior at small mass and an **exponential cutoff** at high mass:
- low-mass: $dn/dM \propto M^{-2 + n_s/2}$
- high-mass: exponential cutoff at the mass where $\sigma(M) = \delta_c$

so the universe has many small halos and few big ones — exactly what we observe in galaxy and cluster surveys.

---

## the Sheth-Tormen improvement

Sheth & Tormen (1999) noted that PS overpredicts the small-mass and underpredicts the large-mass end. they generalized to **ellipsoidal collapse**, giving:
$$f_{ST}(\nu) = A\sqrt{\frac{2 a}{\pi}}\,\nu\,(1 + (a\nu^2)^{-p})\, e^{-a\nu^2/2}$$

with $\nu = \delta_c/\sigma$, fitting parameters $A = 0.322$, $a = 0.707$, $p = 0.3$. matches N-body simulations much better.

modern simulations (Jenkins, Tinker, etc.) provide further calibrated mass functions — usually $T(\nu)$-type fits to numerical data.

---

## why this matters

the halo mass function is the **building block** of structure formation. given:
1. a set of cosmological parameters (specifically $\sigma_8$, $\Omega_m$, $h$)
2. the spherical collapse threshold $\delta_c \approx 1.686$
3. the matter power spectrum $P_m(k)$

we can predict:
- the abundance of galaxy clusters as a function of mass
- the redshift evolution of cluster counts
- the fraction of mass in collapsed objects vs free
- the **halo occupation distribution** (number of galaxies per halo, used in galaxy clustering analyses)

cluster counts are a competitive cosmological probe — they directly measure $\sigma_8$ and the late-time growth of structure. the so-called "$\sigma_8$ tension" between CMB-derived and cluster-derived $\sigma_8$ in 2025 is an active research topic.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Spherical collapse](./Spherical%20collapse.html)
- [Linear evolution of perturbations in expanding universe](./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html)
- [Growth factor D(z)](./Growth%20factor%20D%28z%29.html)
- [Matter power spectrum and BAO](./Matter%20power%20spectrum%20and%20BAO.html)
- [Cosmic_inventory_dark_matter](./Cosmic_inventory_dark_matter.html)
- [Halo mass function vs galaxy mass function](./Halo%20mass%20function%20vs%20galaxy%20mass%20function.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html" class="backlink-item">Cosmological evolution of perturbations in the cosmic fluid</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20clusters%20and%20overview%20of%20evolution.html" class="backlink-item">Galaxy clusters and overview of evolution</a></li>
    <li class="backlink-item-wrap"><a href="./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html" class="backlink-item">Linear evolution of perturbations in expanding universe</a></li>
    <li class="backlink-item-wrap"><a href="./Linear%20vs%20nonlinear%20regime.html" class="backlink-item">Linear vs nonlinear regime</a></li>
    <li class="backlink-item-wrap"><a href="./Matter%20power%20spectrum%20and%20BAO.html" class="backlink-item">Matter power spectrum and BAO</a></li>
    <li class="backlink-item-wrap"><a href="./N-body%20simulations.html" class="backlink-item">N-body simulations</a></li>
    <li class="backlink-item-wrap"><a href="./Protocluster%20detection%20techniques.html" class="backlink-item">Protocluster detection techniques</a></li>
    <li class="backlink-item-wrap"><a href="./Spherical%20collapse.html" class="backlink-item">Spherical collapse</a></li>
  </ul>
</div>
