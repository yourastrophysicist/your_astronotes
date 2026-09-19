---
layout: "default"
title: "Preheating and parametric resonance"
---
# Preheating and parametric resonance

> *explosive, non-thermal particle production driven by parametric resonance in an oscillating inflaton background.*

---

## core physical intuition

Before slow perturbative decay can occur, the coherent oscillations of the inflaton field can trigger non-perturbative, explosive particle creation known as **preheating** (Kofman, Linde, Starobinsky 1994).

When an oscillating inflaton field $\phi(t)$ couples to another scalar field $\chi$ via $\frac{1}{2}g^2\phi^2\chi^2$, the effective mass of the $\chi$ field oscillates in time. For modes within specific resonance bands, the quantum vacuum fluctuations experience parametric resonance, growing exponentially fast and fragmenting the homogeneous condensate within a few dozen oscillations.

---

## key derivation & equations

The mode equation for fluctuations $\chi_k$ is:
$$\ddot{\chi}_k + 3H\dot{\chi}_k + \left(\frac{k^2}{a^2} + m_\chi^2 + g^2\phi^2(t)\right)\chi_k = 0$$

Writing $\phi(t) = \Phi(t)\sin(mt)$ and defining $X_k \equiv a^{3/2}\chi_k$ over a few oscillations yields the **Mathieu equation**:
$$\frac{d^2 X_k}{d\tau^2} + \left[ A_k - 2q \cos(2\tau) \right] X_k = 0$$
where $\tau = mt$ and:
$$A_k \equiv \frac{k^2/a^2 + m_\chi^2}{m^2} + 2q, \quad q \equiv \frac{g^2 \Phi^2}{4 m^2}$$

### Broad resonance regime ($q \gg 1$)
Whenever the oscillating inflaton crosses zero ($\phi = 0$), the adiabaticity condition $\lvert\dot{\omega}_k / \omega_k^2\rvert \ll 1$ is strongly violated. Particles are created in non-adiabatic bursts:
$$n_k(\tau) \propto e^{2\mu_k \tau}$$
with Floquet growth exponent $\mu_k \sim 0.1 - 0.2$.

---

## astrophysical context

* Rapid non-thermal generation of heavy particles (e.g. GUT bosons, right-handed neutrinos for leptogenesis).
* Generation of non-thermal stochastic gravitational wave backgrounds.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Reheating dynamics and thermalization](Reheating%20dynamics%20and%20thermalization.html)
  - [Out-of-equilibrium decay baryogenesis and Weinberg model](Out-of-equilibrium%20decay%20baryogenesis%20and%20Weinberg%20model.html)
  - [Electroweak sphalerons and leptogenesis](Electroweak%20sphalerons%20and%20leptogenesis.html)
  - [Part6_Reheating_Baryogenesis_and_Dark_Matter](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part6_Reheating_Baryogenesis_and_Dark_Matter.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Reheating%20dynamics%20and%20thermalization.html" class="backlink-item">Reheating dynamics and thermalization</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

