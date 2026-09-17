---
layout: "default"
title: "Cosmological inflation"
---
{% raw %}
**cosmological inflation** is a brief period of nearly-exponential expansion in the very early universe ($t \sim 10^{-32}$ s), driving the universe through $\sim 60$ e-folds. proposed by Guth (1981) + Linde + Steinhardt + Albrecht to solve the **horizon, flatness, and monopole problems** of the Hot Big Bang. (companion: [Inflation overview](./Inflation%20overview.html) for additional context.)

## the problems inflation solves

### the horizon problem

the CMB is **uniform** to $\Delta T/T \sim 10^{-5}$ across the sky. but in standard Hot Big Bang cosmology, regions on opposite sides of the sky **never causally communicated** before recombination (their past light cones don't intersect). how can they have the same temperature?

**inflation's solution**: inflation expands a small causally-connected patch by $\sim 60$ e-folds, encompassing the entire observable universe. so all the regions we see were once in causal contact + thermal equilibrium.

### the flatness problem

$\Omega_k$ today is $\sim 0$ to high precision. but $\Omega_k$ grows linearly with $a$ during radiation era + as $a^2$ during matter era. so $\Omega_k$ at very early times must have been **fine-tuned** to $\sim 10^{-60}$ at the Planck era. unnatural.

**inflation's solution**: during inflation, $\Omega_k$ shrinks **exponentially** ($\propto e^{-2N}$ with $N$ = number of e-folds). starts at any value, ends at $\Omega_k \sim 0$ regardless. predicts a flat universe today, in agreement with observation.

### the monopole problem

GUT-scale physics predicts **magnetic monopoles** at $T \sim 10^{16}$ GeV. their density would be $\Omega_{\rm mono} \gg 1$ today, contradicting observation.

**inflation's solution**: monopoles are produced **before** inflation, then diluted by $e^{3N}$ during inflation. final density: undetectably small.

## the mechanism

inflation needs a fluid with $w < -1/3$ (the "inflation" condition). the simplest is a **scalar field** $\phi$ with potential $V(\phi)$:
$$\rho_\phi = \frac{1}{2}\dot\phi^2 + V(\phi), \quad p_\phi = \frac{1}{2}\dot\phi^2 - V(\phi)$$

if $V \gg \dot\phi^2/2$ (slow-roll regime), then $w \approx -1$, $\rho \approx $ const, $a \propto e^{Ht}$.

needed: $V(\phi)$ that:
1. is **flat enough** to allow slow rolling ($\sim 60$ e-folds).
2. has a **minimum** where inflation ends.
3. converts inflaton energy into Standard Model particles via **reheating**.

## the predictions

inflation makes specific predictions, **all of which have been observed**:
1. **flatness**: $\Omega_k \to 0$. confirmed: $\lvert \Omega_k\rvert < 0.005$.
2. **gaussian + nearly-scale-invariant scalar perturbations**: with spectral tilt $n_s$ slightly less than 1. confirmed: $n_s = 0.965 \pm 0.004$.
3. **adiabatic perturbations**: same fluctuations in all species (photons, baryons, neutrinos, dark matter). confirmed by CMB.
4. **gaussianity**: density perturbations have a near-Gaussian distribution. confirmed: $f_{NL} \sim 0$.
5. **tensor perturbations**: predicted at amplitude $A_t \propto V_{\rm inf}$. unconfirmed (current bound $r < 0.06$).

## the inflaton candidates

many models exist:
- **chaotic inflation** (Linde 1983): $V = \tfrac12 m^2\phi^2$ or $V = \lambda\phi^4$. simple. ruled out by latest data.
- **new inflation** (Linde + Albrecht-Steinhardt 1982): $V$ with broken symmetry, slow-roll near plateau.
- **hybrid inflation** (Linde 1991): two fields, one slow-rolling, one undergoing waterfall.
- **Starobinsky inflation** (1980, modified gravity): $R + R^2$ Lagrangian. one of the best-fitting current models.

LiteBIRD, SPHEREx, future CMB-S4 will test r ↔ $V_{\rm inf}$ down to $r \sim 10^{-3}$.

## the still-open questions

despite the success:
- **what is the inflaton**? a fundamental field? the Higgs? something else?
- **what is the inflaton potential**? specific functional form?
- **what's before inflation**? quantum gravity epoch, or something else?
- **was inflation eternal** in some regions? leading to the multiverse?

these are some of the deepest open questions in physics.

## see also

- [Inflation overview](./Inflation%20overview.html)
- [Old vs new vs chaotic inflation, slow-roll](./Old%20vs%20new%20vs%20chaotic%20inflation%2C%20slow-roll.html)
- [Inflaton scalar field dynamics](./Inflaton%20scalar%20field%20dynamics.html)
- [Phase transitions](interf/Phase%20transitions.html)
- [CMB power spectrum](./CMB%20power%20spectrum.html)
- [Polarization E and B modes](./Polarization%20E%20and%20B%20modes.html)
- [ΛCDM current parameters](./%CE%9BCDM%20current%20parameters.html)
- [Standard model problems](./Standard%20model%20problems.html)
- [Brief thermal history](./Brief%20thermal%20history.html)
- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Cosmic%20relics%20and%20Kibble%20mechanism.html" class="backlink-item">Cosmic relics and Kibble mechanism</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Horizon%20problem%20and%20causal%20structure.html" class="backlink-item">Horizon problem and causal structure</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part1_Standard_Big_Bang_and_Shortcomings.html" class="backlink-item">Part1_Standard_Big_Bang_and_Shortcomings</a></li>
    <li class="backlink-item-wrap"><a href="./Phase%20transitions.html" class="backlink-item">Phase transitions</a></li>
    <li class="backlink-item-wrap"><a href="interf/Phase%20transitions.html" class="backlink-item">Phase transitions</a></li>
  </ul>
</div>
