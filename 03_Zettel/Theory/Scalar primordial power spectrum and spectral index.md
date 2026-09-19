---
layout: "default"
title: "Scalar primordial power spectrum and spectral index"
---
# Scalar primordial power spectrum and spectral index

> *the mathematical form of primordial density fluctuations, predicting a nearly scale-invariant red tilt.*

---

## core physical intuition

The scalar power spectrum $\mathcal{P}_\mathcal{R}(k)$ characterizes the variance of curvature perturbations per logarithmic interval in wavenumber $k$. Because the expansion rate $H$ changes very slowly during slow roll, fluctuations exiting the horizon at different times have nearly the same amplitude, yielding a nearly scale-invariant spectrum.

Because $H$ decreases as the field rolls down the potential ($\dot{H} < 0$), modes that exit later (smaller scales, higher $k$) freeze out at slightly smaller values of $H$, predicting that the spectrum has more power on large scales than on small scales (a "red tilt", $n_s < 1$).

---

## key derivation & equations

Using $\mathcal{R}_k = v_k / z$ with $z = a\sqrt{2\epsilon} M_{\rm Pl}$ and the super-horizon limit $\lvert v_k\rvert \to \frac{1}{\sqrt{2k^3}\tau}$:
$$\mathcal{P}_\mathcal{R}(k) \equiv \frac{k^3}{2\pi^2}\lvert \mathcal{R}_k\rvert^2 = \frac{k^3}{2\pi^2}\frac{\lvert v_k\rvert^2}{a^2 2\epsilon M_{\rm Pl}^2} = \frac{H^2}{8\pi^2 \epsilon M_{\rm Pl}^2}\Bigg\vert_{k=aH} = \frac{1}{24\pi^2 M_{\rm Pl}^4}\frac{V}{\epsilon_V}\Bigg\vert_{k=aH}$$

### The scalar spectral index $n_s$
$$\mathcal{P}_\mathcal{R}(k) = A_s \left(\frac{k}{k_0}\right)^{n_s - 1}$$
$$n_s - 1 \equiv \frac{d\ln\mathcal{P}_\mathcal{R}}{d\ln k}$$

Using $d\ln k = d\ln(aH) \approx H dt$:
$$n_s - 1 = \frac{1}{H}\frac{d}{dt}\ln\left(\frac{H^2}{\epsilon}\right) = 2\frac{\dot{H}}{H^2} - \frac{\dot{\epsilon}}{H\epsilon}$$
Using $\dot{H}/H^2 = -\epsilon$ and $\dot{\epsilon}/(H\epsilon) = 2(\epsilon - \eta)$:
$$n_s - 1 = -2\epsilon - 2(\epsilon - \eta) = 2\eta - 4\epsilon \approx 2\eta_V - 6\epsilon_V$$

---

## astrophysical context

* Measured by Planck 2018:
  $$A_s \approx (2.10 \pm 0.03) \times 10^{-9}, \quad n_s = 0.9649 \pm 0.0042$$
* Exact scale invariance ($n_s = 1$, Harrison-Zeldovich spectrum) is ruled out at $> 8\sigma$.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Slow-roll parameters epsilon and eta](Slow-roll%20parameters%20epsilon%20and%20eta.html)
  - [Curvature perturbation R and zeta](Curvature%20perturbation%20R%20and%20zeta.html)
  - [Tensor perturbations and primordial gravitational waves](Tensor%20perturbations%20and%20primordial%20gravitational%20waves.html)
  - [Part3_Quantum_Perturbations_and_Power_Spectra](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part3_Quantum_Perturbations_and_Power_Spectra.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Curvature%20perturbation%20R%20and%20zeta.html" class="backlink-item">Curvature perturbation R and zeta</a></li>
    <li class="backlink-item-wrap"><a href="Quantum%20fluctuations%20of%20the%20inflaton%20field.html" class="backlink-item">Quantum fluctuations of the inflaton field</a></li>
    <li class="backlink-item-wrap"><a href="Sasaki-Mukhanov%20variable%20and%20equation.html" class="backlink-item">Sasaki-Mukhanov variable and equation</a></li>
    <li class="backlink-item-wrap"><a href="Slow-roll%20parameters%20epsilon%20and%20eta.html" class="backlink-item">Slow-roll parameters epsilon and eta</a></li>
    <li class="backlink-item-wrap"><a href="Starobinsky%20R-squared%20inflation.html" class="backlink-item">Starobinsky R-squared inflation</a></li>
    <li class="backlink-item-wrap"><a href="Tensor%20perturbations%20and%20primordial%20gravitational%20waves.html" class="backlink-item">Tensor perturbations and primordial gravitational waves</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
  </ul>
</div>

