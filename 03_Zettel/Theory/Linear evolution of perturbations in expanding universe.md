---
layout: "default"
title: "Linear evolution of perturbations in expanding universe"
---
small density perturbations $\delta(\vec x, t) \equiv \delta\rho/\bar\rho$ on a homogeneous expanding background evolve according to a closed set of equations: continuity, Euler, and Poisson. in the **linear regime** ($\lvert \delta\rvert \ll 1$), these equations have analytic solutions that describe the *growth* of structure from CMB-era seeds to galaxy-era inhomogeneities.

once $\delta \gtrsim 1$, linear theory breaks down and we have to go nonlinear (spherical collapse, N-body simulations).

---

## the perturbed fluid equations (Newtonian)

starting from the standard fluid equations on the expanding FRW background, perturbing density $\rho = \bar\rho + \delta\rho$, velocity $\vec v = H \vec x + \vec u$ (Hubble flow + peculiar velocity), and pressure, gravitational potential to first order in the perturbations:

**continuity:**
$$\dot\delta + \frac{1}{a}\nabla\cdot\vec u = 0$$

**Euler:**
$$\dot{\vec u} + H \vec u + \frac{1}{a}\nabla\Phi = -\frac{1}{a\bar\rho}\nabla\delta p$$

**Poisson:**
$$\nabla^2 \Phi = 4\pi G a^2 \bar\rho\, \delta$$

(here $\nabla$ is with respect to comoving $\vec x$, $a$ is the scale factor.)

---

## combining: the master perturbation equation

eliminate $\vec u$ between continuity and Euler. for a pressureless fluid ($\delta p = 0$), the result is:
$$\boxed{\,\ddot\delta + 2H\dot\delta - 4\pi G\bar\rho_m\, \delta = 0\,}$$

(also sometimes called the **growth equation**.)

three terms:
- $\ddot\delta$: acceleration of the perturbation
- $2H\dot\delta$: **Hubble friction** — expansion damps growth
- $-4\pi G\bar\rho_m\,\delta$: gravitational instability driving growth

with pressure included:
$$\ddot\delta + 2H\dot\delta + \left(\frac{c_s^2 k^2}{a^2} - 4\pi G\bar\rho_m\right)\delta = 0$$

where $c_s$ is the sound speed and $k$ is the comoving wavenumber. the second bracketed term is positive when the pressure gradient dominates (oscillation), negative when gravity dominates (growth) — see the **Jeans criterion** in [Jeans analysis in expanding universe](Jeans%20analysis%20in%20expanding%20universe.html).

---

## solution in the matter-dominated era

in matter domination, $H = 2/(3t)$ and $\bar\rho_m \propto a^{-3}$. the growth equation has two power-law solutions:
$$\delta_+ \propto t^{2/3} \propto a$$
$$\delta_- \propto t^{-1}$$

the **growing mode** $\delta_+$ grows linearly with the scale factor. the **decaying mode** $\delta_-$ falls off and is irrelevant after a Hubble time. so:
$$\boxed{\,\delta(a) \propto a \quad \text{(matter domination)}\,}$$

---

## solution in the radiation-dominated era

in radiation domination, things are different. dark matter perturbations on sub-horizon scales experience the radiation-dominated $H \propto t^{-1}$, but the source term $\bar\rho_m$ is small compared to $\bar\rho_\gamma$. the result is **Meszaros suppression**:
$$\delta_m \propto \log(a)$$

i.e. nearly constant, only logarithmic growth.

so dark matter perturbations grow strongly only after matter-radiation equality at $z_{\rm eq} \sim 3300$. the Meszaros effect is what determines the position of the **turnover** in the matter power spectrum (see [Matter power spectrum and BAO](Matter%20power%20spectrum%20and%20BAO.html)).

---

## solution in the Λ-dominated era

in Λ domination, the growth equation has:
$$\ddot\delta + 2H\dot\delta - 0 \cdot \delta = 0$$

(no source, since $\bar\rho_m \to 0$ at late times.) the growing mode **freezes out** — no further growth. perturbations stop growing once Λ takes over at $z \sim 0.7$.

so the **growth factor** $D(a)$ — the amplitude of $\delta(a)$ relative to today — is:
$$D(a) \approx \begin{cases} \log(a)\quad (\text{rad. dominated, sub-horizon}) \\ a \quad (\text{matter dominated}) \\ \text{constant}\quad (\text{Λ dominated}) \end{cases}$$

→ see [Growth factor D(z)](Growth%20factor%20D%28z%29.html) for the full analytic form.

---

## why this matters

the linear growth solution is the **bridge** between the CMB era and the modern universe.

- at $z \sim 1100$ (CMB): $\delta \sim 10^{-5}$ in matter
- if matter-dominated for the entire interval: $\delta(0) \sim \delta(1100) \times 1100 = 10^{-2}$
- but with Λ taking over at $z \sim 0.7$, the actual growth between $z = 1100$ and $z = 0$ is suppressed: $D(z=1100)/D(z=0) \approx 1/780$, so $\delta(0) \sim 10^{-5} \times 780 \approx 10^{-2}$

→ matches the observed CMB anisotropies of $\sim 10^{-5}$ growing into the cosmic web of $\sim 10^{-1}$–$1$ density contrasts in galaxy clusters today.

so linear theory works *all the way* from the CMB to large-scale structure today — at least for the largest-scale modes that have not yet entered the nonlinear regime.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Jeans analysis in expanding universe](Jeans%20analysis%20in%20expanding%20universe.html)
- [Growth factor D(z)](Growth%20factor%20D%28z%29.html)
- [Spherical collapse](Spherical%20collapse.html)
- [Press-Schechter halo mass function](Press-Schechter%20halo%20mass%20function.html)
- [Matter power spectrum and BAO](Matter%20power%20spectrum%20and%20BAO.html)
- [Baumann_reference](Baumann_reference.html) — chapters 4 and 5 are the rigorous treatment

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (18)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Baumann_reference.html" class="backlink-item">Baumann_reference</a></li>
    <li class="backlink-item-wrap"><a href="CMB%20Spectral%20Distortions%20-%20What%20They%20Are%20and%20Where%20They%20Come%20From.html" class="backlink-item">CMB Spectral Distortions - What They Are and Where They Come From</a></li>
    <li class="backlink-item-wrap"><a href="CMB%20anisotropies.html" class="backlink-item">CMB anisotropies</a></li>
    <li class="backlink-item-wrap"><a href="CMB%20power%20spectrum.html" class="backlink-item">CMB power spectrum</a></li>
    <li class="backlink-item-wrap"><a href="Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html" class="backlink-item">Cosmological evolution of perturbations in the cosmic fluid</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20clusters%20and%20overview%20of%20evolution.html" class="backlink-item">Galaxy clusters and overview of evolution</a></li>
    <li class="backlink-item-wrap"><a href="Growth%20factor%20D%28z%29.html" class="backlink-item">Growth factor D(z)</a></li>
    <li class="backlink-item-wrap"><a href="Jeans%20analysis%20in%20expanding%20universe.html" class="backlink-item">Jeans analysis in expanding universe</a></li>
    <li class="backlink-item-wrap"><a href="Jeans%20theory%20and%20protostellar%20formation.html" class="backlink-item">Jeans theory and protostellar formation</a></li>
    <li class="backlink-item-wrap"><a href="Linear%20vs%20nonlinear%20regime.html" class="backlink-item">Linear vs nonlinear regime</a></li>
    <li class="backlink-item-wrap"><a href="Matter%20power%20spectrum%20and%20BAO.html" class="backlink-item">Matter power spectrum and BAO</a></li>
    <li class="backlink-item-wrap"><a href="Matter%20vs%20radiation%20density%20scaling.html" class="backlink-item">Matter vs radiation density scaling</a></li>
    <li class="backlink-item-wrap"><a href="Perturbations%20in%20an%20expanding%20universe.html" class="backlink-item">Perturbations in an expanding universe</a></li>
    <li class="backlink-item-wrap"><a href="Polarization%20E%20and%20B%20modes.html" class="backlink-item">Polarization E and B modes</a></li>
    <li class="backlink-item-wrap"><a href="Press-Schechter%20halo%20mass%20function.html" class="backlink-item">Press-Schechter halo mass function</a></li>
    <li class="backlink-item-wrap"><a href="SVT%20decomposition.html" class="backlink-item">SVT decomposition</a></li>
    <li class="backlink-item-wrap"><a href="Spherical%20collapse.html" class="backlink-item">Spherical collapse</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

