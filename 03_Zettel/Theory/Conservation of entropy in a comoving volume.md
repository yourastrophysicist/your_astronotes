---
layout: "default"
title: "Conservation of entropy in a comoving volume"
---
{% raw %}
in the early universe, while interactions are fast enough to maintain thermal equilibrium, **the total entropy in a comoving volume is conserved**:
$$\frac{d(s a^3)}{dt} = 0 \quad \Leftrightarrow \quad s a^3 = \text{const}$$

with the entropy density
$$s = \frac{2\pi^2}{45}\, g_{*s}(T)\, T^3$$

---

## why entropy is conserved

in an adiabatic expansion (no entropy production), the comoving entropy of a fluid is conserved. the FRW universe with reversible interactions is, to a very good approximation, adiabatic.

violations occur only when:
- a phase transition with latent heat releases entropy
- a species annihilates and dumps its entropy into the rest of the bath
- a non-equilibrium decay process produces entropy

most of the standard model evolution conserves entropy precisely.

---

## practical use

since $s = (2\pi^2/45) g_{*s}(T) T^3$ and $s a^3 = $ const:
$$g_{*s}(T)\, T^3\, a^3 = \text{const}$$

so:
$$T \propto \frac{1}{a\, [g_{*s}(T)]^{1/3}}$$

across a smooth epoch with constant $g_{*s}$, this reduces to $T \propto 1/a$. across a transition where $g_{*s}$ drops (a species annihilating), $T$ falls more slowly than $1/a$ — i.e., the photon temperature gets a "boost" from the absorbed entropy.

---

## the famous example: $T_\nu/T_\gamma = (4/11)^{1/3}$

this is the textbook application.

**before $e^\pm$ annihilation** ($T \gtrsim m_e/3 \sim 0.5$ MeV), the relativistic species in equilibrium include photons ($g = 2$), $e^-$ ($g = 2$), $e^+$ ($g = 2$), and three neutrinos × 2 helicities × 2 (ν, ν̄) = 6 fermionic dof.

if neutrinos have already decoupled but share $T_\gamma$:
$$g_{*s}(\text{before}) = 2 + \frac{7}{8}(2 + 2 + 6) = 2 + 7/8 \cdot 10 = 10.75$$

actually we want to think about this differently. the key insight: after neutrino decoupling but before $e^\pm$ annihilation, neutrinos have temperature $T_\nu = T_\gamma$ but evolve **separately**. when $e^\pm$ annihilate at $T \sim m_e/3$, they dump their entropy *only* into photons, not into neutrinos.

let $T$ be the common temperature *just before annihilation* (when $e^\pm$ are still relativistic). entropy in the photon-electron-positron sector before annihilation:
$$s_{\gamma e e} \propto \left(2 + \frac{7}{8}\cdot 4\right) T^3 = \frac{11}{2} T^3$$

after annihilation, electrons/positrons have disappeared, photons inherit all that entropy:
$$s_\gamma \propto 2\, T_\gamma^3$$

equating (entropy conservation):
$$\frac{11}{2} T^3 = 2 T_\gamma^3 \quad \Rightarrow \quad T_\gamma = \left(\frac{11}{4}\right)^{1/3} T$$

meanwhile neutrinos, which decoupled before annihilation, kept $T_\nu = T$ throughout. so:

$$\boxed{\,\frac{T_\nu}{T_\gamma} = \left(\frac{4}{11}\right)^{1/3} \approx 0.714\,}$$

today, with $T_\gamma = 2.725$ K, this gives:
$$T_\nu \approx 1.95\,\text{K}$$

→ see [Cosmic_inventory_neutrinos](./Cosmic_inventory_neutrinos.html) for the full discussion.

---

## connection to the baryon-to-photon ratio

the conservation of $n_b/s$ (baryon number per comoving volume) is what makes the **baryon-to-photon ratio** $\eta = n_b/n_\gamma$ approximately constant in time, except across transitions where $g_{*s}$ changes:
$$\eta = 1.8\, g_{*s}(T) \cdot \frac{n_b}{s}$$

after $e^\pm$ annihilation (everything settled), $g_{*s}$ is constant and $\eta$ is rigorously constant. this is why we can use the present-day $\eta \approx 6 \times 10^{-10}$ to compute BBN abundances at $T \sim 0.1$ MeV: by then $\eta$ is already at its present value.

→ see [BBN_baryon_to_photon_ratio](./BBN_baryon_to_photon_ratio.html).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Thermal equilibrium in the early universe](./Thermal%20equilibrium%20in%20the%20early%20universe.html)
- [Decoupling and freeze-out](./Decoupling%20and%20freeze-out.html)
- [BBN_baryon_to_photon_ratio](./BBN_baryon_to_photon_ratio.html)
- [Cosmic_inventory_neutrinos](./Cosmic_inventory_neutrinos.html)
- [Brief thermal history](./Brief%20thermal%20history.html)
- [Baumann_reference](./Baumann_reference.html) — chapter 3.2.3 has the rigorous treatment
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./BBN_baryon_to_photon_ratio.html" class="backlink-item">BBN_baryon_to_photon_ratio</a></li>
    <li class="backlink-item-wrap"><a href="./CMB%20Spectral%20Distortions%20-%20What%20They%20Are%20and%20Where%20They%20Come%20From.html" class="backlink-item">CMB Spectral Distortions - What They Are and Where They Come From</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmic_inventory_neutrinos.html" class="backlink-item">Cosmic_inventory_neutrinos</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmic_inventory_photons_derivation.html" class="backlink-item">Cosmic_inventory_photons_derivation</a></li>
    <li class="backlink-item-wrap"><a href="./Decoupling%20and%20freeze-out.html" class="backlink-item">Decoupling and freeze-out</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Matter%20vs%20radiation%20density%20scaling.html" class="backlink-item">Matter vs radiation density scaling</a></li>
    <li class="backlink-item-wrap"><a href="./Number%20density%20and%20energy%20density%20at%20thermal%20equilibrium.html" class="backlink-item">Number density and energy density at thermal equilibrium</a></li>
    <li class="backlink-item-wrap"><a href="./Temperature-time%20relation.html" class="backlink-item">Temperature-time relation</a></li>
    <li class="backlink-item-wrap"><a href="./Thermal%20equilibrium%20in%20the%20early%20universe.html" class="backlink-item">Thermal equilibrium in the early universe</a></li>
  </ul>
</div>
