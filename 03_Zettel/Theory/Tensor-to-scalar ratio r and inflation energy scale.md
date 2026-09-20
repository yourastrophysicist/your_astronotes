---
layout: "default"
title: "Tensor-to-scalar ratio r and inflation energy scale"
---
# Tensor-to-scalar ratio r and inflation energy scale

> *measuring the ratio of tensor to scalar fluctuations to pin down the Grand Unification energy scale of inflation.*

---

## core physical intuition

The tensor-to-scalar ratio $r$ compares the power in metric tensor fluctuations to scalar curvature fluctuations at a pivot scale. Because the scalar spectrum depends on $H^2/\epsilon$, while the tensor spectrum depends strictly on $H^2$, their ratio directly measures the slow-roll parameter $\epsilon$, and fixes the potential energy $V^{1/4}$ during inflation.

---

## key derivation & equations

The tensor-to-scalar ratio is defined as:
$$r \equiv \frac{\mathcal{P}_T(k_0)}{\mathcal{P}_\mathcal{R}(k_0)}$$

Substituting the explicit slow-roll expressions:
$$r = \frac{\frac{2}{\pi^2}\frac{H^2}{M_{\rm Pl}^2}}{\frac{1}{8\pi^2}\frac{H^2}{\epsilon M_{\rm Pl}^2}} = 16\epsilon = 16\epsilon_V$$

### Energy scale of inflation
Using the Friedmann equation $V = 3 M_{\rm Pl}^2 H^2$:
$$\mathcal{P}_T = \frac{2}{3\pi^2}\frac{V}{M_{\rm Pl}^4} \implies V = \frac{3\pi^2}{2} M_{\rm Pl}^4 r \mathcal{P}_\mathcal{R}$$

Taking the fourth root:
$$V^{1/4} = \left(\frac{3\pi^2}{2} M_{\rm Pl}^4 \mathcal{P}_\mathcal{R}\right)^{1/4} r^{1/4}$$
Substituting $M_{\rm Pl} = 2.435 \times 10^{18}\text{ GeV}$ and $\mathcal{P}_\mathcal{R} = 2.1 \times 10^{-9}$:
$$V^{1/4} \approx 1.88 \times 10^{16}\text{ GeV} \left(\frac{r}{0.10}\right)^{1/4} \simeq 0.6 \times 10^{16}\text{ GeV} \left(\frac{r}{10^{-3}}\right)^{1/4}$$

---

## astrophysical context

* Current experimental upper bound from BICEP/Keck + Planck:
  $$r < 0.032 \implies V^{1/4} < 1.38 \times 10^{16}\text{ GeV}$$
* Constrains inflation to occur at or below the GUT scale ($10^{16}\text{ GeV}$).

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Tensor perturbations and primordial gravitational waves]]
  - [[Consistency relation of single-field slow-roll inflation]]
  - [[Lyth bound and field excursion]]
  - [[Part3_Quantum_Perturbations_and_Power_Spectra]]



## Linked References

- [[Consistency relation of single-field slow-roll inflation]]
- [[Large-field versus small-field inflation models]]
- [[Lyth bound and field excursion]]
- [[Starobinsky R-squared inflation]]
- [[Tensor perturbations and primordial gravitational waves]]
- [[Cosmology_of_the_Early_Universe_MOC]]


