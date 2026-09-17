---
layout: "default"
title: "Starobinsky R-squared inflation"
---
{% raw %}
# Starobinsky R-squared inflation

> *the premier modified gravity model of inflation, originating from quadratic curvature corrections in quantum gravity.*

---

## core physical intuition

Proposed by Alexei Starobinsky in 1980 before Guth's scalar field proposal, $R^2$ inflation generates accelerated expansion not from an ad-hoc scalar field, but from quantum gravitational corrections to the Einstein-Hilbert action quadratic in the Ricci scalar $R$.

By performing a conformal transformation from the geometric "Jordan frame" to the "Einstein frame", the higher-derivative gravitational degree of freedom transforms into a standard scalar field (the scalaron) with an asymptotically flat plateau potential. This plateau delivers an exceptional fit to modern Planck and BICEP/Keck observations.

---

## key derivation & equations

The action in the Jordan frame is:
$$S = \frac{M_{\rm Pl}^2}{2} \int d^4 x \sqrt{-g} \left[ R + \frac{R^2}{6 M^2} \right]$$
where $M$ is a mass scale characterizing the quadratic curvature correction.

Perform a conformal transformation of the metric:
$$\tilde{g}_{\mu\nu} = \Omega^2(x) g_{\mu\nu}, \quad \Omega^2 = 1 + \frac{R}{3M^2} \equiv e^{\sqrt{2/3}\, \phi / M_{\rm Pl}}$$

In the Einstein frame, the action takes standard canonical form:
$$S = \int d^4 x \sqrt{-\tilde{g}} \left[ \frac{M_{\rm Pl}^2}{2} \tilde{R} + \frac{1}{2}\tilde{g}^{\mu\nu}\partial_\mu\phi\partial_\nu\phi - V(\phi) \right]$$

The effective potential for the scalaron $\phi$ is:
$$V(\phi) = \frac{3}{4} M^2 M_{\rm Pl}^2 \left(1 - e^{-\sqrt{2/3}\, \phi / M_{\rm Pl}}\right)^2$$

For large field values $\phi \gg M_{\rm Pl}$, the potential approaches a flat plateau:
$$\epsilon_V \approx \frac{4}{3} e^{-2\sqrt{2/3}\, \phi / M_{\rm Pl}} \approx \frac{3}{4 N^2}$$
$$\eta_V \approx -\frac{4}{3} e^{-\sqrt{2/3}\, \phi / M_{\rm Pl}} \approx -\frac{1}{N}$$

The observational predictions at $N \approx 55$ are:
$$n_s = 1 - 6\epsilon_V + 2\eta_V \approx 1 - \frac{2}{N} \approx 0.964$$
$$r = 16\epsilon_V \approx \frac{12}{N^2} \approx 0.004$$

---

## astrophysical context

* Sits precisely at the maximum likelihood peak of the Planck 2018 ($n_s - r$) contours.
* Fixing the scalar amplitude $\mathcal{P}_\mathcal{R} \approx 2.1 \times 10^{-9}$ sets the scalaron mass scale:
  $$M \approx 1.3 \times 10^{-5} M_{\rm Pl} \approx 3 \times 10^{13}\text{ GeV}$$

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Large-field versus small-field inflation models](./Large-field%20versus%20small-field%20inflation%20models.html)
  - [Scalar primordial power spectrum and spectral index](./Scalar%20primordial%20power%20spectrum%20and%20spectral%20index.html)
  - [Tensor-to-scalar ratio r and inflation energy scale](./Tensor-to-scalar%20ratio%20r%20and%20inflation%20energy%20scale.html)
  - [Part2_Inflation_Kinematics_Dynamics_and_Models](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part2_Inflation_Kinematics_Dynamics_and_Models.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Large-field%20versus%20small-field%20inflation%20models.html" class="backlink-item">Large-field versus small-field inflation models</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part2_Inflation_Kinematics_Dynamics_and_Models.html" class="backlink-item">Part2_Inflation_Kinematics_Dynamics_and_Models</a></li>
  </ul>
</div>
