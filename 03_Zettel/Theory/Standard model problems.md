---
layout: "default"
title: "Standard model problems"
---
the hot Big Bang model is a fantastic match to observations. but extrapolating it backward to early times reveals deep **fine-tuning problems** that the model itself cannot explain. these are the **flatness problem**, the **horizon problem**, and the **monopole problem**. they motivate **inflation**.

---

## the flatness problem

the curvature density parameter is
$$\Omega_K = -\frac{kc^2}{H^2 a^2}$$

today: $\Omega_K = 0.001 \pm 0.002$ — the universe is flat to a fraction of a percent.

but $\Omega_K$ **grows with time** in a matter or radiation dominated universe:
- radiation era: $H^2 \propto a^{-4}$, so $\lvert \Omega_K\rvert \propto a^2$
- matter era: $H^2 \propto a^{-3}$, so $\lvert \Omega_K\rvert \propto a$

so extrapolating *backward* in time, $\lvert \Omega_K\rvert$ has to be **fantastically small** in the early universe to give the present-day value.

at the Planck epoch ($T \sim 10^{19}$ GeV, $a \sim 10^{-31}$):
$$\lvert \Omega_K(t_{\rm Pl})\rvert \lesssim 10^{-60}$$

why was the early universe so close to flat? if $\lvert \Omega_K\rvert$ was anything but tiny, the universe would either have recollapsed within Planck times (closed) or expanded so fast that no structure could form (open).

→ the **flatness problem**: a 60-decimal-place fine-tuning of initial conditions, not predicted by the standard model.

---

## the horizon problem

the **particle horizon** at cosmic time $t$ is the maximum comoving distance light could have traveled since the Big Bang:
$$\chi_{\rm ph}(t) = \int_0^t \frac{c\, dt'}{a(t')}$$

regions separated by more than $\chi_{\rm ph}$ have **never been in causal contact**.

now look at the CMB. it is uniform to $\Delta T/T \sim 10^{-5}$ over the entire sky. but at recombination ($z = 1100$), the particle horizon subtended only **about 1° on the sky**. so points more than 1° apart on the CMB sky were *never in causal contact* before they emitted the photons we see now.

→ how did they thermalize to the same temperature?

![intro-12.png](../../assets/images/intro-12.png)

the **horizon problem**: the universe is much more uniform than causality allows. at face value this is impossible.

---

## the monopole problem

grand unified theories (GUTs) predict that **magnetic monopoles** were copiously produced at the GUT phase transition ($T \sim 10^{16}$ GeV). their predicted abundance would dominate the energy density of the universe by many orders of magnitude.

we observe **none**. (or at least no detection.)

→ the **monopole problem**: why did the universe not retain GUT-scale topological defects?

---

## inflation as the solution

inflation = an early epoch of nearly exponential expansion driven by a scalar field with $w \approx -1$ (de Sitter-like). during inflation:

- $a(t) \propto e^{Ht}$ with $H$ approximately constant
- the comoving Hubble radius $(aH)^{-1}$ **shrinks**
- any pre-inflation curvature gets diluted: $\lvert \Omega_K\rvert \to \lvert \Omega_K\rvert/e^{2N}$ over $N$ e-folds
- the Hubble volume at the start of inflation gets stretched far beyond what we observe today, making the entire observable universe come from a single causally connected region
- any pre-inflation density of monopoles gets diluted by $e^{3N}$

with $N \approx 60$ e-folds of inflation:
- $\lvert \Omega_K\rvert$ gets suppressed by $e^{-120} \sim 10^{-52}$ — solving flatness
- the observable universe (today $\sim H_0^{-1}$ across) was at the start of inflation a single Hubble volume, all in causal contact — solving the horizon problem
- monopole density diluted to undetectable — solving the monopole problem

inflation also generates the primordial perturbations from quantum fluctuations stretched to cosmic scales. the **same fluctuations** that solve the horizon problem also seed structure formation. → see [Inflation overview](Inflation%20overview.html).

---

## the broader lesson

the standard model is **fine-tuned**: the initial conditions at the Planck epoch require dialing dimensionless numbers to absurd precision. inflation is an attempt to **dynamically generate** the apparently fine-tuned conditions — replacing fine-tuned initial conditions with a generic dynamical attractor.

the price: a hypothetical scalar field (the **inflaton**) with a specific potential, plus a mechanism to end inflation gracefully (reheating). there is no direct observational evidence for the inflaton itself — we only see its consequences in the primordial perturbations.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Inflation overview](Inflation%20overview.html)
- [Inflaton scalar field dynamics](Inflaton%20scalar%20field%20dynamics.html)
- [Old vs new vs chaotic inflation, slow-roll](Old%20vs%20new%20vs%20chaotic%20inflation%2C%20slow-roll.html)
- [Density parameters and flatness](Density%20parameters%20and%20flatness.html)
- [Brief thermal history](Brief%20thermal%20history.html)
- [Baumann_reference](Baumann_reference.html) — chapter 2 has the full story

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Cosmological%20inflation.html" class="backlink-item">Cosmological inflation</a></li>
    <li class="backlink-item-wrap"><a href="Density%20parameters%20and%20flatness.html" class="backlink-item">Density parameters and flatness</a></li>
    <li class="backlink-item-wrap"><a href="Inflation%20overview.html" class="backlink-item">Inflation overview</a></li>
    <li class="backlink-item-wrap"><a href="Inflaton%20scalar%20field%20dynamics.html" class="backlink-item">Inflaton scalar field dynamics</a></li>
    <li class="backlink-item-wrap"><a href="Old%20vs%20new%20vs%20chaotic%20inflation%2C%20slow-roll.html" class="backlink-item">Old vs new vs chaotic inflation, slow-roll</a></li>
    <li class="backlink-item-wrap"><a href="Phase%20transitions.html" class="backlink-item">Phase transitions</a></li>
    <li class="backlink-item-wrap"><a href="Photon%20decoupling%20and%20CMB.html" class="backlink-item">Photon decoupling and CMB</a></li>
    <li class="backlink-item-wrap"><a href="Robertson-Walker%20metric.html" class="backlink-item">Robertson-Walker metric</a></li>
    <li class="backlink-item-wrap"><a href="interf/Phase%20transitions.html" class="backlink-item">Phase transitions</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

