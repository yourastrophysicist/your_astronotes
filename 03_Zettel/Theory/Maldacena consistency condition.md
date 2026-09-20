---
layout: "default"
title: "Maldacena consistency condition"
---
# Maldacena consistency condition

> *the non-perturbative theorem proving that single-field inflation cannot generate detectable local non-Gaussianity.*

---

## core physical intuition

In single-field inflation, when one Fourier mode $\vec{k}_1$ has a wavelength far larger than the other two ($k_1 \ll k_2 \approx k_3$, the squeezed limit), it exits the horizon dozens of e-folds earlier. Outside the horizon, this long-wavelength mode is frozen and acts simply as an unperturbed background with a spatial coordinate rescaling $\tilde{x}^i = e^{\zeta_L} x^i$.

Because the two short modes simply evolve inside this locally rescaled coordinate system, their two-point function cannot be influenced by any physical interaction with the long mode. The correlation between the long mode and the short modes is therefore strictly proportional to the scale dependence (tilt) of the short modes: $f_{\rm NL}^{\rm local} \propto (1 - n_s)$.

---

## key derivation & equations

In the squeezed limit ($k_1 \to 0$):
$$\lim_{k_1 \to 0} \langle \zeta_{\vec{k}_1}\zeta_{\vec{k}_2}\zeta_{\vec{k}_3} \rangle = -(2\pi)^3 \delta^{(3)}(\vec{k}_1 + \vec{k}_2 + \vec{k}_3) P_\zeta(k_1) \frac{\partial P_\zeta(k_2)}{\partial \ln k_2}$$

Using $\frac{\partial\ln P_\zeta(k)}{\partial\ln k} = n_s - 1$:
$$\lim_{k_1 \to 0} \frac{B_\zeta(k_1, k_2, k_3)}{P_\zeta(k_1)P_\zeta(k_2)} = -(n_s - 1)$$

Comparing this to the definition of the local non-Gaussianity parameter $B_\zeta^{\rm local} \approx \frac{12}{5} f_{\rm NL}^{\rm local} P_\zeta(k_1)P_\zeta(k_2)$:
$$f_{\rm NL}^{\rm local} = \frac{5}{12}(1 - n_s) = \mathcal{O}(\epsilon, \eta) \ll 1$$

With $n_s \approx 0.965$:
$$f_{\rm NL}^{\rm local} \approx \frac{5}{12}(1 - 0.965) \approx 0.015$$

### Foundational theorem
A confirmed measurement of $\lvert f_{\rm NL}^{\rm local}\rvert \gtrsim 1$ would definitively falsify **all canonical single-field slow-roll inflation models**, proving that multiple dynamical fields or non-Bunch-Davies vacua were present during the primordial epoch.

---

## astrophysical context

* Benchmark target for future galaxy surveys measuring scale-dependent clustering bias $\Delta b(k) \propto f_{\rm NL} / k^2$.

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Primordial non-Gaussianity and bispectrum shapes]]
  - [[In-In formalism for cosmological correlators]]
  - [[Delta-N formalism]]
  - [[Part4_Advanced_Formalisms_and_Non_Gaussianity]]



## Linked References

- [[Delta-N formalism]]
- [[In-In formalism for cosmological correlators]]
- [[Primordial non-Gaussianity and bispectrum shapes]]
- [[Cosmology_of_the_Early_Universe_MOC]]


