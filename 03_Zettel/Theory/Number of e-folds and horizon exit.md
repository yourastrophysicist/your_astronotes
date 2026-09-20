---
layout: "default"
title: "Number of e-folds and horizon exit"
---
# Number of e-folds and horizon exit

> *counting cosmic expansion during inflation, and matching observable scales to horizon crossing.*

---

## core physical intuition

Because the scale factor grows exponentially during inflation, cosmic time is naturally parameterized by the number of e-folds $N \equiv \ln(a_{\rm end}/a(t))$, which counts the number of factors of $e$ by which the universe expands before inflation ends.

Cosmological scales observed today in the CMB were stretched outside the comoving Hubble radius $(aH)^{-1}$ between 50 and 60 e-folds before the end of inflation. Calculating $N(\phi)$ allows one to link the value of the inflaton field at horizon exit directly to modern cosmological observables.

---

## key derivation & equations

The number of e-folds remaining until the end of inflation is:
$$N \equiv \int_t^{t_{\rm end}} H\, dt'$$

Using $dt = \frac{d\phi}{\dot{\phi}} \approx -\frac{3H}{V'} d\phi$:
$$N(\phi) \approx \int_{\phi_{\rm end}}^\phi \frac{H^2}{V'} d\phi' = \frac{1}{M_{\rm Pl}^2} \int_{\phi_{\rm end}}^\phi \frac{V}{V'} d\phi' = \frac{1}{M_{\rm Pl}} \int_{\phi_{\rm end}}^\phi \frac{d\phi'}{\sqrt{2\epsilon_V}}$$

where $\phi_{\rm end}$ is defined by the breakdown of slow roll:
$$\epsilon_V(\phi_{\rm end}) = 1 \quad \text{or} \quad \lvert \eta_V(\phi_{\rm end})\rvert = 1$$

### Horizon exit condition
A comoving Fourier mode $k$ exits the Hubble radius when its comoving wavelength equals the comoving Hubble radius:
$$k = a H$$
After horizon exit, physical wavelength $\lambda_{\rm phys} = a/k$ exceeds $H^{-1}$, and the perturbation mode freezes out.

The number of e-folds between horizon exit of the pivot scale $k_0 = 0.05\text{ Mpc}^{-1}$ and the end of inflation depends on the post-inflationary reheating history:
$$N(k_0) \approx 55 - \frac{1}{3(1+w_{\rm reh})}\ln\left(\frac{\rho_{\rm end}^{1/4}}{T_{\rm reh}}\right)$$

---

## astrophysical context

* Horizon exit of CMB modes at $N \approx 50 - 60$.
* Cosmological large-scale structure (galaxies, clusters) exiting at $N \approx 45 - 55$.

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Single-field slow-roll inflation dynamics]]
  - [[Slow-roll parameters epsilon and eta]]
  - [[Lyth bound and field excursion]]
  - [[Part2_Inflation_Kinematics_Dynamics_and_Models]]



## Linked References

- [[Flatness problem and dynamical attractor]]
- [[Horizon problem and causal structure]]
- [[Single-field slow-roll inflation dynamics]]
- [[Slow-roll parameters epsilon and eta]]
- [[Cosmology_of_the_Early_Universe_MOC]]


