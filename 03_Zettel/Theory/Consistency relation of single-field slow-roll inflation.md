---
layout: "default"
title: "Consistency relation of single-field slow-roll inflation"
---
# Consistency relation of single-field slow-roll inflation

> *the non-negotiable kinematic relation linking tensor tilt directly to the tensor-to-scalar ratio in canonical single-field models.*

---

## core physical intuition

In single-field slow-roll inflation, both the tensor power spectrum amplitude (via $r$) and the tensor tilt ($n_T$) are dictated by the exact same physical quantity: the velocity of the background field $\dot{\phi}^2$, parameterized by the first slow-roll parameter $\epsilon$.

Because both observables depend on a single parameter, single-field inflation predicts an exact algebraic relationship between them: $r = -8 n_T$. If future experiments measure a tensor tilt that violates this relation, canonical single-field slow-roll inflation is falsified immediately, regardless of what potential $V(\phi)$ is proposed.

---

## key derivation & equations

From the slow-roll expressions:
1. The tensor-to-scalar ratio is:
   $$r = 16\epsilon$$
2. The scale dependence of the tensor spectrum is:
   $$n_T \equiv \frac{d\ln\mathcal{P}_T}{d\ln k} = \frac{1}{H}\frac{d\ln H^2}{dt} = 2\frac{\dot{H}}{H^2} = -2\epsilon$$

Combining these two equations by eliminating $\epsilon$:
$$r = 16\left(-\frac{n_T}{2}\right) = -8 n_T$$

Equivalently:
$$n_T = -\frac{r}{8}$$

### Robustness and modifications
* This consistency relation holds strictly for single-field inflation with canonical kinetic terms in General Relativity.
* In models with non-canonical kinetic terms $\mathcal{L}(X, \phi)$ (such as k-inflation or DBI), the sound speed $c_s$ modifies the relation to:
  $$r = -8 c_s n_T$$
* In multi-field models, isocurvature modes contribute to scalar perturbations without affecting tensors, turning the equality into an inequality:
  $$r < -8 n_T$$

---

## astrophysical context

* Primary observational goal for next-generation B-mode observatories (LiteBIRD, CMB-S4) paired with space-based gravitational wave detectors (DECIGO, BBO).

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Tensor perturbations and primordial gravitational waves](Tensor%20perturbations%20and%20primordial%20gravitational%20waves.html)
  - [Tensor-to-scalar ratio r and inflation energy scale](Tensor-to-scalar%20ratio%20r%20and%20inflation%20energy%20scale.html)
  - [Slow-roll parameters epsilon and eta](Slow-roll%20parameters%20epsilon%20and%20eta.html)
  - [Part3_Quantum_Perturbations_and_Power_Spectra](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part3_Quantum_Perturbations_and_Power_Spectra.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Lyth%20bound%20and%20field%20excursion.html" class="backlink-item">Lyth bound and field excursion</a></li>
    <li class="backlink-item-wrap"><a href="Slow-roll%20parameters%20epsilon%20and%20eta.html" class="backlink-item">Slow-roll parameters epsilon and eta</a></li>
    <li class="backlink-item-wrap"><a href="Tensor%20perturbations%20and%20primordial%20gravitational%20waves.html" class="backlink-item">Tensor perturbations and primordial gravitational waves</a></li>
    <li class="backlink-item-wrap"><a href="Tensor-to-scalar%20ratio%20r%20and%20inflation%20energy%20scale.html" class="backlink-item">Tensor-to-scalar ratio r and inflation energy scale</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

