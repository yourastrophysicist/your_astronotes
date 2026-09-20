---
layout: "default"
title: "Lyth bound and field excursion"
---
# Lyth bound and field excursion

> *a direct geometric link between the amplitude of primordial gravitational waves and the field excursion of the inflaton in Planck units.*

---

## core physical intuition

David Lyth (1997) demonstrated that the tensor-to-scalar ratio $r$ is directly proportional to the square of the rate at which the inflaton field moves per e-fold. By integrating this relation over the 4 to 6 e-folds during which observable CMB scales crossed the horizon, one obtains a lower bound on the inflaton excursion $\Delta\phi$.

Detecting primordial gravitational waves at the level $r \gtrsim 0.01$ would prove definitively that the inflaton traversed a super-Planckian distance in field space, providing an unprecedented empirical laboratory for quantum gravity.

---

## key derivation & equations

The rate of field change per e-fold $N$ is:
$$\frac{d\phi}{dN} = \frac{\dot{\phi}}{H}$$

Using the definition of the Hubble slow-roll parameter $\epsilon = \frac{\dot{\phi}^2}{2 M_{\rm Pl}^2 H^2}$:
$$\frac{d\phi}{dN} = \sqrt{2\epsilon}\, M_{\rm Pl}$$

Using the single-field slow-roll consistency relation $r = 16\epsilon$:
$$\frac{d\phi}{dN} = \sqrt{\frac{r}{8}}\, M_{\rm Pl}$$

Integrating over the interval $\Delta N$ corresponding to observable CMB multipoles ($\ell \sim 2 - 100$, $\Delta N \approx 4 - 6$):
$$\frac{\Delta\phi}{M_{\rm Pl}} = \int_0^{\Delta N} \sqrt{\frac{r(N)}{8}}\, dN$$

Assuming $r$ is roughly constant over this narrow window:
$$\frac{\Delta\phi}{M_{\rm Pl}} \approx \Delta N \sqrt{\frac{r}{8}} \approx 0.7 \left(\frac{\Delta N}{4}\right) \left(\frac{r}{0.01}\right)^{1/2}$$

Therefore:
* If $r \ge 0.01$, then $\Delta\phi \gtrsim M_{\rm Pl}$ (super-Planckian field excursion).
* If $r \le 10^{-3}$, then $\Delta\phi \ll M_{\rm Pl}$ (sub-Planckian field excursion).

---

## astrophysical context

* The BICEP/Keck and Planck upper limit $r < 0.032$ places an upper bound $\Delta\phi \lesssim 1.2 M_{\rm Pl}$.
* Future B-mode satellite LiteBIRD targets $\sigma(r) \sim 10^{-3}$, capable of testing the super-Planckian threshold.

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Large-field versus small-field inflation models]]
  - [[Tensor-to-scalar ratio r and inflation energy scale]]
  - [[Consistency relation of single-field slow-roll inflation]]
  - [[Part2_Inflation_Kinematics_Dynamics_and_Models]]



## Linked References

- [[Large-field versus small-field inflation models]]
- [[Number of e-folds and horizon exit]]
- [[Tensor-to-scalar ratio r and inflation energy scale]]
- [[Cosmology_of_the_Early_Universe_MOC]]


