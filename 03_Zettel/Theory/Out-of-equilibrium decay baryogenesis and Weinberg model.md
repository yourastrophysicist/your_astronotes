---
layout: "default"
title: "Out-of-equilibrium decay baryogenesis and Weinberg model"
---
# Out-of-equilibrium decay baryogenesis and Weinberg model

> *the canonical mechanism of generating baryon asymmetry through the out-of-equilibrium decay of heavy GUT gauge or Higgs bosons.*

---

## core physical intuition

Steven Weinberg (1979) formulated the classic model of baryogenesis: heavy GUT bosons $X$ (mass $M_X \sim 10^{15}\text{ GeV}$) fall out of thermal equilibrium as the universe expands faster than their decay rate ($H > \Gamma_X$). When they finally decay at lower temperatures, inverse decays that would destroy the generated baryon asymmetry are kinematically blocked by Boltzmann suppression ($e^{-M_X/T} \ll 1$).

---

## key derivation & equations

Consider a heavy boson $X$ with decays:
* $X \to q q$ (baryon number $B_1$, branching ratio $r$)
* $X \to \bar{q} \bar{\ell}$ (baryon number $B_2$, branching ratio $1 - r$)

The antiparticle $\bar{X}$ decays to conjugate channels:
* $\bar{X} \to \bar{q} \bar{q}$ (baryon number $-B_1$, branching ratio $\bar{r}$)
* $\bar{X} \to q \ell$ (baryon number $-B_2$, branching ratio $1 - \bar{r}$)

The net asymmetry generated per $X - \bar{X}$ decay pair is:
$$\Delta B = r B_1 + (1-r) B_2 - [\bar{r}(-B_1) + (1-\bar{r})(-B_2)] = (r - \bar{r})(B_1 - B_2)$$
A non-zero asymmetry requires both $B$-violation ($B_1 \neq B_2$) and $CP$-violation ($r \neq \bar{r}$).

### The decay parameter $K$
$$K \equiv \frac{\Gamma_X}{2 H(T = M_X)}$$
* **Weak washout ($K \ll 1$)**: Decays occur out of equilibrium at $T_D \sim K^{1/2} M_X \ll M_X$. The final baryon-to-entropy ratio is:
  $$\frac{n_B}{s} \approx \frac{\Delta B}{g_*}$$
* **Strong washout ($K \gg 1$)**: Inverse decays wash out the asymmetry:
  $$\frac{n_B}{s} \propto \frac{\Delta B}{K \ln K}$$

---

## astrophysical context

* Foundational framework for GUT baryogenesis and modern leptogenesis models.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Sakharov conditions for baryogenesis](Sakharov%20conditions%20for%20baryogenesis.html)
  - [Electroweak sphalerons and leptogenesis](Electroweak%20sphalerons%20and%20leptogenesis.html)
  - [Part6_Reheating_Baryogenesis_and_Dark_Matter](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part6_Reheating_Baryogenesis_and_Dark_Matter.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Electroweak%20sphalerons%20and%20leptogenesis.html" class="backlink-item">Electroweak sphalerons and leptogenesis</a></li>
    <li class="backlink-item-wrap"><a href="Preheating%20and%20parametric%20resonance.html" class="backlink-item">Preheating and parametric resonance</a></li>
    <li class="backlink-item-wrap"><a href="Sakharov%20conditions%20for%20baryogenesis.html" class="backlink-item">Sakharov conditions for baryogenesis</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

