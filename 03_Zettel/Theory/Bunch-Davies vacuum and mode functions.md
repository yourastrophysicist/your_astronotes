---
layout: "default"
title: "Bunch-Davies vacuum and mode functions"
---
{% raw %}
# Bunch-Davies vacuum and mode functions

> *the unique physical vacuum state for cosmological perturbations, defined by matching to flat Minkowski space in the ultraviolet.*

---

## core physical intuition

In curved, time-dependent spacetimes, there is no global timelike Killing vector, which implies there is no unique definition of a vacuum state or particle number.

However, for cosmological perturbations, all Fourier modes originated deep inside the Hubble radius in the asymptotic past ($-k\tau \to \infty$). At these sub-horizon scales, the physical wavelength is negligible compared to the cosmic radius of curvature ($\lambda_{\rm phys} \ll H^{-1}$). Spacetime is locally flat Minkowski space. The **Bunch-Davies vacuum** is the unique quantum state that matches the standard positive-frequency Minkowski ground state in this ultraviolet limit.

---

## key derivation & equations

The canonical commutation relation $[v_{\vec{k}}, v_{\vec{k}'}^{\prime\dagger}] = i (2\pi)^3 \delta^{(3)}(\vec{k}-\vec{k}')$ imposes the Wronskian normalization condition:
$$v_k^*(\tau) v_k'(\tau) - v_k(\tau) v_k^{*\prime}(\tau) = -i$$

The asymptotic past boundary condition defining the Bunch-Davies vacuum $|0\rangle$ is:
$$\lim_{\tau \to -\infty} v_k(\tau) = \frac{1}{\sqrt{2k}} e^{-ik\tau}$$
where $\hat{a}_{\vec{k}}|0\rangle = 0$ for all $\vec{k}$.

The exact solution to $v_k'' + (k^2 - 2/\tau^2)v_k = 0$ satisfying this condition is:
$$v_k(\tau) = \frac{e^{-ik\tau}}{\sqrt{2k}}\left(1 - \frac{i}{k\tau}\right)$$

In terms of Hankel functions of the first kind for general $\nu$:
$$v_k(\tau) = \frac{\sqrt{\pi}}{2} e^{i(\nu + 1/2)\frac{\pi}{2}} \sqrt{-\tau}\, H_\nu^{(1)}(-k\tau)$$

---

## astrophysical context

* Fundamental postulate underlying all inflationary predictions tested by Planck and WMAP.
* Non-Bunch-Davies initial states (excited or thermal vacua) would produce distinctive oscillations in the primordial bispectrum (folded non-Gaussianity).

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Sasaki-Mukhanov variable and equation](./Sasaki-Mukhanov%20variable%20and%20equation.html)
  - [Quantum fluctuations of the inflaton field](./Quantum%20fluctuations%20of%20the%20inflaton%20field.html)
  - [Primordial non-Gaussianity and bispectrum shapes](./Primordial%20non-Gaussianity%20and%20bispectrum%20shapes.html)
  - [Part3_Quantum_Perturbations_and_Power_Spectra](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part3_Quantum_Perturbations_and_Power_Spectra.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part3_Quantum_Perturbations_and_Power_Spectra.html" class="backlink-item">Part3_Quantum_Perturbations_and_Power_Spectra</a></li>
    <li class="backlink-item-wrap"><a href="./Quantum%20fluctuations%20of%20the%20inflaton%20field.html" class="backlink-item">Quantum fluctuations of the inflaton field</a></li>
    <li class="backlink-item-wrap"><a href="./Sasaki-Mukhanov%20variable%20and%20equation.html" class="backlink-item">Sasaki-Mukhanov variable and equation</a></li>
  </ul>
</div>
