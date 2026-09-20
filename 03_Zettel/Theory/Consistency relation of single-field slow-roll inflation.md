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

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Tensor perturbations and primordial gravitational waves]]
  - [[Tensor-to-scalar ratio r and inflation energy scale]]
  - [[Slow-roll parameters epsilon and eta]]
  - [[Part3_Quantum_Perturbations_and_Power_Spectra]]



## Linked References

- [[Lyth bound and field excursion]]
- [[Slow-roll parameters epsilon and eta]]
- [[Tensor perturbations and primordial gravitational waves]]
- [[Tensor-to-scalar ratio r and inflation energy scale]]
- [[Cosmology_of_the_Early_Universe_MOC]]


