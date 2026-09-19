---
layout: "default"
title: "Electroweak sphalerons and leptogenesis"
---
# Electroweak sphalerons and leptogenesis

> *how non-perturbative electroweak gauge field configurations violate B+L and convert a primordial lepton asymmetry into the baryon asymmetry.*

---

## core physical intuition

In the Standard Model, the chiral anomaly implies that baryon number $B$ and lepton number $L$ are not conserved individually; only the combination $B - L$ is an exact global symmetry. At temperatures above the electroweak scale ($T > 100\text{ GeV}$), thermal fluctuations over the $SU(2)_L$ gauge vacuum barrier (**sphaleron transitions**) occur rapidly, washing out any pre-existing $B+L$ asymmetry.

**Leptogenesis** (Fukugita and Yanagida 1986) elegantly uses this property: out-of-equilibrium decays of heavy right-handed Majorana neutrinos generate a primordial *lepton* asymmetry ($B-L \neq 0$). Electroweak sphalerons then naturally convert roughly one-third of this lepton asymmetry into the observed baryon asymmetry of the universe!

---

## key derivation & equations

The anomalous divergence of the baryon and lepton currents is:
$$\partial_\mu j_B^\mu = \partial_\mu j_L^\mu = \frac{N_f}{32\pi^2} \left( g^2 W_{\mu\nu}^a \tilde{W}^{a\mu\nu} - g'^2 B_{\mu\nu}\tilde{B}^{\mu\nu} \right)$$
which implies:
$$\Delta B = \Delta L = N_f \Delta N_{\rm CS}$$
where $N_{\rm CS}$ is the Chern-Simons number, and $\Delta(B - L) = 0$.

### Thermal leptogenesis
Heavy right-handed Majorana neutrinos $N_1$ decay out of equilibrium via Yukawa couplings into leptons and Higgs bosons:
$$N_1 \to \ell H \quad \text{vs} \quad N_1 \to \bar{\ell} H^*$$
Interference between tree-level and one-loop vertex/self-energy diagrams creates a CP asymmetry $\epsilon_1 \neq 0$:
$$\epsilon_1 \equiv \frac{\Gamma(N_1 \to \ell H) - \Gamma(N_1 \to \bar{\ell} H^*)}{\Gamma_{\rm total}}$$

Sphaleron equilibrium enforces chemical potential balance, converting the $B-L$ asymmetry into a net baryon asymmetry:
$$B = \left(\frac{8 N_f + 4 N_H}{22 N_f + 13 N_H}\right) (B - L) = \frac{28}{79} (B - L)$$
where $N_f = 3$ generations and $N_H = 1$ Higgs doublet.

---

## astrophysical context

* Directly connects the origin of matter to the origin of non-zero neutrino masses via the seesaw mechanism ($m_\nu \sim y_\nu^2 v^2 / M_N$).
* Explains the null results of GUT proton decay searches.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Sakharov conditions for baryogenesis](Sakharov%20conditions%20for%20baryogenesis.html)
  - [Out-of-equilibrium decay baryogenesis and Weinberg model](Out-of-equilibrium%20decay%20baryogenesis%20and%20Weinberg%20model.html)
  - [Part6_Reheating_Baryogenesis_and_Dark_Matter](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part6_Reheating_Baryogenesis_and_Dark_Matter.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Out-of-equilibrium%20decay%20baryogenesis%20and%20Weinberg%20model.html" class="backlink-item">Out-of-equilibrium decay baryogenesis and Weinberg model</a></li>
    <li class="backlink-item-wrap"><a href="Preheating%20and%20parametric%20resonance.html" class="backlink-item">Preheating and parametric resonance</a></li>
    <li class="backlink-item-wrap"><a href="Sakharov%20conditions%20for%20baryogenesis.html" class="backlink-item">Sakharov conditions for baryogenesis</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

