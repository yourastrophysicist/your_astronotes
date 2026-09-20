---
layout: "default"
title: "Quantum fluctuations of the inflaton field"
---
# Quantum fluctuations of the inflaton field

> *the microphysical mechanism transforming microscopic vacuum fluctuations into macroscopic cosmological perturbations.*

---

## core physical intuition

During inflation, the inflaton field is not an inert classical variable; like all quantum fields, it undergoes irreducible zero-point vacuum fluctuations $\delta\hat{\phi}(\vec{x}, t)$.

Deep inside the horizon ($\lambda \ll H^{-1}$), these fluctuations are ordinary quantum oscillator modes. As space expands exponentially, the physical wavelength of each mode is stretched until it exceeds the Hubble radius ($k = aH$). Beyond the horizon, causal microphysics can no longer oscillate the mode; the fluctuation freezes out, decoheres through interactions, and behaves as a classical stochastic perturbation of the spatial background.

---

## key derivation & equations

Expanding the inflaton as background plus perturbation:
$$\phi(t, \vec{x}) = \phi_0(t) + \delta\phi(t, \vec{x})$$

The linearized equation of motion in flat FLRW is:
$$\ddot{\delta\phi} + 3H\dot{\delta\phi} - \frac{\nabla^2\delta\phi}{a^2} + V''(\phi_0)\delta\phi = 0$$

In conformal time $\tau$ ($d\tau = dt/a$), introducing $u(\tau, \vec{x}) \equiv a(\tau)\delta\phi(\tau, \vec{x})$:
$$u_k''(\tau) + \left[k^2 - \frac{a''}{a} + a^2 V''(\phi_0)\right] u_k(\tau) = 0$$

For a light field ($V'' \ll H^2$) in de Sitter spacetime ($a''/a = 2/\tau^2$):
$$u_k''(\tau) + \left(k^2 - \frac{2}{\tau^2}\right) u_k(\tau) = 0$$

The exact solution satisfying the Bunch-Davies vacuum condition is:
$$u_k(\tau) = \frac{e^{-ik\tau}}{\sqrt{2k}}\left(1 - \frac{i}{k\tau}\right)$$

The physical field perturbation is $\delta\phi_k = u_k/a$:
$$\delta\phi_k(\tau) = -\frac{H\tau}{\sqrt{2k}} e^{-ik\tau}\left(1 - \frac{i}{k\tau}\right) = \frac{H}{\sqrt{2k^3}}(i - k\tau)e^{-ik\tau}$$

On super-horizon scales ($-k\tau \to 0$):
$$\delta\phi_k \to \frac{i H}{\sqrt{2k^3}} = \text{constant}$$

The dimensionless power spectrum outside the horizon is:
$$\mathcal{P}_{\delta\phi}(k) \equiv \frac{k^3}{2\pi^2}\lvert \delta\phi_k\rvert^2 = \left(\frac{H}{2\pi}\right)^2$$

---

## astrophysical context

* Physical origin of the temperature anisotropies $\Delta T/T$ in the CMB.
* Primordial seed fluctuations for galaxies, clusters, and cosmic web filaments.

---

## connections & zettel links

* parent moc: [[Cosmology_of_the_Early_Universe_MOC]]
* related zettels:
  - [[Sasaki-Mukhanov variable and equation]]
  - [[Bunch-Davies vacuum and mode functions]]
  - [[Scalar primordial power spectrum and spectral index]]
  - [[Part3_Quantum_Perturbations_and_Power_Spectra]]



## Linked References

- [[Bunch-Davies vacuum and mode functions]]
- [[Sasaki-Mukhanov variable and equation]]
- [[Single-field slow-roll inflation dynamics]]
- [[Cosmology_of_the_Early_Universe_MOC]]


