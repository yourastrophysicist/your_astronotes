---
layout: "default"
title: "BBN_predictions"
---
how precise are BBN theoretical predictions, and on what do they depend?

BBN predictions depend on three things:
1. **input nuclear physics data** (cross-sections, neutron half-life)
2. **cosmological parameters**: $g_*(T)$ and $\eta$
3. **the way the universe expands**, $H(T)$, set by the radiation-dominated Friedmann equation

---

## 1. input nuclear physics data

the relevant cross-sections are known with great precision in laboratory experiments. some uncertainty remains in the rates that produce and destroy $^7$Li.

importantly, the final abundances depend on the **weak interaction rates** that regulate the n/p ratio. these are the same rates that determine the **neutron half-life**:
$$\tau_{1/2}(n) = 610.11 \pm 1\,\text{s}$$

dimensionally:
$$\Gamma \propto G_F^2 T^5, \qquad \tau_{1/2}(n) \propto (G_F^2 m_n^5)^{-1} \quad \Rightarrow \quad \Gamma \propto T^5/\tau_{1/2}(n)$$

an **increase** in $\tau_{1/2}(n)$ (longer-lived neutron) decreases all weak interaction rates, leading to **earlier freeze-out** of n/p (because $\Gamma_w \sim H$ is satisfied at higher $T$), and thus a **larger frozen n/p ratio** and consequently **more $^4$He**.

![bbn-32.png](../../assets/images/bbn-32.png)

---

## 2. cosmological parameters: $g_*(T)$ and $\eta$

since the universe is radiation-dominated during BBN, $H \propto g_*^{1/2} T^2$. so an increase in $g_*$ leads to a faster expansion, an earlier freeze-out of n/p, and a **higher $^4$He abundance**.

> *this is how BBN constrains the number of light particle species in the universe.* extra (sterile) neutrino species, or primordial gravitational waves, would all increase $g_*$.

the various cross-sections also depend on $T$, and the number densities of nuclear species are
$$n_A = (X_A/A)(\eta n_\gamma)$$
so the corresponding interaction rates $\Gamma = n_A \sigma v = \Gamma(\eta, T)$.

note: $\eta = (n_N/n_\gamma) = 2.68 \times 10^{-8}\, (\Omega_{0b} h^2)$, see [BBN_baryon_to_photon_ratio](BBN_baryon_to_photon_ratio.html).

![bbn-33.png](../../assets/images/bbn-33.png)

---

## 3. dependence on $\eta$

NSE abundances scale as $X_A \propto \eta^{A-1}$, so:

> **if one increases $\eta$**, then D, $^3$He, $^3$H build up earlier and so $^4$He gets synthesized earlier, when $(n/p)$ is larger, and so **more $^4$He is produced**.

notice however that, when $^4$He production is significant (around $T \sim 0.1$ MeV), the n/p ratio is only slowly decreasing due to occasional neutron decays, so **the sensitivity of the final $^4$He abundance on $\eta$ is not strong**. it grows roughly logarithmically.

on the other hand, the abundance of D and $^3$He left unburnt depends *strongly* on $\eta$:
> if you increase $\eta$, the rate for producing $^4$He from fuels like D and $^3$He increases, so **less D and $^3$He are left unburnt**.

→ **D/H decreases with increasing $\eta$**.

finally, for $^7$Li there is a "trough" at $\eta \sim 3 \times 10^{-10}$ because of the **two dominant production channels** taking place, one for smaller $\eta$ and one for larger $\eta$:
- for $\eta < 3 \times 10^{-10}$: $^4\text{He} + ^3\text{H} \to ^7\text{Li} + \gamma$ dominates
- for $\eta > 3 \times 10^{-10}$: $^4\text{He} + ^3\text{He} \to ^7\text{Be} + \gamma$, then $\beta$-decay $^7\text{Be} \to ^7\text{Li}$ dominates

so $^7$Li is a particularly **sensitive probe of $\eta$**.

![bbn-34.png](../../assets/images/bbn-34.png)

---

## the master prediction

the development of primordial nucleosynthesis as a function of $T$ for $\eta = 3 \times 10^{-10}$, $\tau_{1/2} = 10.6$ min, $N_\nu = 3$:

![bbn-35.png](../../assets/images/bbn-35.png)

a more modern version with all the species labeled:

![bbn-36.png](../../assets/images/bbn-36.png)

(Pradler & Pospelov 1011.1054.) you can see deuterium burning (D b.n.), neutrino decoupling, n/p decoupling, $e^\pm$ annihilation, and finally standard BBN freeze-out (SBBN f.o.) on a single timeline.

---

## abundances as a function of $\eta$

the famous "schramm plot":

![bbn-37.png](../../assets/images/bbn-37.png)

the $^4$He mass fraction $Y_p = 4n_4/n_N$ slowly increases with $\eta$ (and with $N_\nu$). curves for D, $^3$He, $^7$Li are sensitive in different ways. the **$^7$Li trough** at $\eta \sim 3 \times 10^{-10}$ is visible.

---

## summary of dependences

| change | effect on $Y_p$ | effect on D, $^3$He | effect on $^7$Li |
|---|---|---|---|
| increase $\eta$ | slight increase | strong decrease | trough at $\eta \sim 3\times 10^{-10}$ |
| increase $\tau_{1/2}(n)$ | increase | mild | mild |
| increase $g_*$ | increase | mild | mild |

these specific dependences are what make BBN such a powerful probe:
- $Y_p$ is a clean probe of $g_*$, hence of light degrees of freedom (e.g. the number of neutrino species)
- D/H is the cleanest probe of $\eta$ (hence of $\Omega_b h^2$)
- $^7$Li/H provides an independent cross-check, although the famous **lithium problem** muddles things

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [BBN_overview](BBN_overview.html)
- [BBN_three_steps](BBN_three_steps.html)
- [BBN_baryon_to_photon_ratio](BBN_baryon_to_photon_ratio.html)
- [BBN_observations](BBN_observations.html)
- [BBN_concordance_with_CMB](BBN_concordance_with_CMB.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="BBN_concordance_with_CMB.html" class="backlink-item">BBN_concordance_with_CMB</a></li>
    <li class="backlink-item-wrap"><a href="BBN_neutron_proton_ratio.html" class="backlink-item">BBN_neutron_proton_ratio</a></li>
    <li class="backlink-item-wrap"><a href="BBN_observations.html" class="backlink-item">BBN_observations</a></li>
    <li class="backlink-item-wrap"><a href="BBN_three_steps.html" class="backlink-item">BBN_three_steps</a></li>
    <li class="backlink-item-wrap"><a href="Big%20Bang%20nucleosynthesis.html" class="backlink-item">Big Bang nucleosynthesis</a></li>
    <li class="backlink-item-wrap"><a href="Boltzmann%20equation%20in%20cosmology.html" class="backlink-item">Boltzmann equation in cosmology</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic_inventory_neutrinos.html" class="backlink-item">Cosmic_inventory_neutrinos</a></li>
    <li class="backlink-item-wrap"><a href="Temperature-time%20relation.html" class="backlink-item">Temperature-time relation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

