---
layout: "default"
title: "Tensor perturbations and primordial gravitational waves"
---
{% raw %}
# Tensor perturbations and primordial gravitational waves

> *quantum fluctuations of the spatial geometry itself, producing a stochastic background of gravitational waves.*

---

## core physical intuition

Just as scalar field fluctuations generate scalar density perturbations, quantum fluctuations of the transverse-traceless parts of the spacetime metric generate a primordial background of tensor perturbations (gravitational waves).

Unlike scalar perturbations, tensor perturbations do not couple to the scalar potential $V'(\phi)$ or fluid sound speed; their amplitude is determined purely by the expansion rate $H$ during inflation. Detecting primordial gravitational waves provides a direct, unmediated measurement of the energy scale of inflation.

---

## key derivation & equations

The spatial metric perturbation is:
$$g_{ij} = a^2(t)\left[\delta_{ij} + h_{ij}(t, \vec{x})\right]$$
with $\delta^{ij}h_{ij} = 0$ and $\partial^i h_{ij} = 0$.

Expanding in polarization states $h_{ij} = h_+ e_{ij}^+ + h_\times e_{ij}^\times$, each mode obeys:
$$h_k'' + 2\frac{a'}{a} h_k' + k^2 h_k = 0$$

Defining canonically normalized variables $v_k = \frac{a M_{\rm Pl}}{2} h_k$:
$$v_k'' + \left(k^2 - \frac{a''}{a}\right) v_k = 0$$

Quantizing in the Bunch-Davies vacuum yields the tensor power spectrum (summed over both polarizations):
$$\mathcal{P}_T(k) \equiv 2 \times \frac{k^3}{2\pi^2}\lvert h_k\rvert^2 = \frac{2}{\pi^2}\frac{H^2}{M_{\rm Pl}^2}\Bigg\vert_{k=aH} = \frac{2}{3\pi^2}\frac{V}{M_{\rm Pl}^4}\Bigg\vert_{k=aH}$$

### Tensor spectral index $n_T$
$$\mathcal{P}_T(k) = A_t \left(\frac{k}{k_0}\right)^{n_T}$$
$$n_T \equiv \frac{d\ln\mathcal{P}_T}{d\ln k} = \frac{1}{H}\frac{d\ln H^2}{dt} = 2\frac{\dot{H}}{H^2} = -2\epsilon$$

The tensor spectrum is strictly red-tilted ($n_T < 0$).

---

## astrophysical context

* Creates primordial B-mode curl polarization in the CMB at multipoles $\ell \lesssim 100$.
* BICEP/Keck + Planck limit: $r < 0.032$.
* Future targets: LiteBIRD space mission, CMB-S4, AliCPT.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Tensor-to-scalar ratio r and inflation energy scale](./Tensor-to-scalar%20ratio%20r%20and%20inflation%20energy%20scale.html)
  - [Consistency relation of single-field slow-roll inflation](./Consistency%20relation%20of%20single-field%20slow-roll%20inflation.html)
  - [Scalar primordial power spectrum and spectral index](./Scalar%20primordial%20power%20spectrum%20and%20spectral%20index.html)
  - [Part3_Quantum_Perturbations_and_Power_Spectra](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part3_Quantum_Perturbations_and_Power_Spectra.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Consistency%20relation%20of%20single-field%20slow-roll%20inflation.html" class="backlink-item">Consistency relation of single-field slow-roll inflation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part3_Quantum_Perturbations_and_Power_Spectra.html" class="backlink-item">Part3_Quantum_Perturbations_and_Power_Spectra</a></li>
    <li class="backlink-item-wrap"><a href="./Scalar%20primordial%20power%20spectrum%20and%20spectral%20index.html" class="backlink-item">Scalar primordial power spectrum and spectral index</a></li>
    <li class="backlink-item-wrap"><a href="./Tensor-to-scalar%20ratio%20r%20and%20inflation%20energy%20scale.html" class="backlink-item">Tensor-to-scalar ratio r and inflation energy scale</a></li>
  </ul>
</div>
