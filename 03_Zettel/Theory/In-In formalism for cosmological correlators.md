---
layout: "default"
title: "In-In formalism for cosmological correlators"
---
# In-In formalism for cosmological correlators

> *the Schwinger-Keldysh path integral framework for computing equal-time correlation functions in time-dependent spacetimes.*

---

## core physical intuition

Standard particle physics computes S-matrix elements $\langle 0_{\rm out} \vert T[\dots] \vert 0_{\rm in} \rangle$ between an asymptotic past vacuum and an asymptotic future vacuum. In an expanding universe, we do not know the asymptotic future state $\vert 0_{\rm out} \rangle$; observations on the CMB or large scale structure measure expectation values of quantum fields $\mathcal{O}(t)$ at a **single fixed time** $t$.

The **In-In formalism** (Schwinger-Keldysh path integral) computes these equal-time expectation values $\langle \Omega \vert \mathcal{O}(t) \vert \Omega \rangle$ by integrating along a closed time contour from $-\infty$ up to $t$ and then back to $-\infty$, projecting the free Bunch-Davies vacuum onto the true interacting vacuum state.

---

## key derivation & equations

The equal-time expectation value of an operator $\mathcal{O}(t)$ in the true vacuum $\vert \Omega \rangle$ is:
$$\langle \mathcal{O}(t) \rangle = \langle 0 \vert \left[ \bar{T} \exp\left( i \int_{-\infty(1-i\epsilon)}^t dt' H_I(t') \right) \right] \mathcal{O}_I(t) \left[ T \exp\left( -i \int_{-\infty(1+i\epsilon)}^t dt' H_I(t') \right) \right] \vert 0 \rangle$$
where $T$ is time ordering, $\bar{T}$ is anti-time ordering, and $H_I(t)$ is the interaction Hamiltonian.

Weinberg's master commutator expansion formula expresses this perturbatively:
$$\langle \mathcal{O}(t) \rangle = \sum_{N=0}^\infty i^N \int_{-\infty}^t dt_1 \int_{-\infty}^{t_1} dt_2 \dots \int_{-\infty}^{t_{N-1}} dt_N \langle 0 \vert [H_I(t_N), [H_I(t_{N-1}), \dots [H_I(t_1), \mathcal{O}_I(t)] \dots ]] \vert 0 \rangle$$

To compute the 3-point correlation function (bispectrum) at first order:
$$\langle \zeta_{\vec{k}_1}\zeta_{\vec{k}_2}\zeta_{\vec{k}_3}(t) \rangle = -i \int_{-\infty}^t dt' \langle 0 \vert [\zeta_{\vec{k}_1}\zeta_{\vec{k}_2}\zeta_{\vec{k}_3}(t), H_I(t')] \vert 0 \rangle$$

---

## astrophysical context

* Systematic calculation of primordial non-Gaussianity ($f_{\rm NL}$ parameters and shapes).
* Loop corrections to primordial power spectra and cosmological infrared divergences.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Primordial non-Gaussianity and bispectrum shapes](Primordial%20non-Gaussianity%20and%20bispectrum%20shapes.html)
  - [Maldacena consistency condition](Maldacena%20consistency%20condition.html)
  - [Delta-N formalism](Delta-N%20formalism.html)
  - [Part4_Advanced_Formalisms_and_Non_Gaussianity](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part4_Advanced_Formalisms_and_Non_Gaussianity.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Maldacena%20consistency%20condition.html" class="backlink-item">Maldacena consistency condition</a></li>
    <li class="backlink-item-wrap"><a href="Primordial%20non-Gaussianity%20and%20bispectrum%20shapes.html" class="backlink-item">Primordial non-Gaussianity and bispectrum shapes</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

