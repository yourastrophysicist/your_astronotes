---
layout: "default"
title: "Delta-N formalism"
---
{% raw %}
# Delta-N formalism

> *a powerful non-linear tool for computing super-horizon curvature perturbations without solving second-order perturbation theory.*

---

## core physical intuition

On spatial scales much larger than the Hubble radius ($k \ll aH$), spatial gradient terms $\nabla^2/a^2$ are suppressed by $(k/aH)^2 \to 0$. In this super-horizon regime, every spatial point expands independently, behaving locally as an unperturbed homogeneous Friedmann universe (the **separate universe approach**).

The total non-linear curvature perturbation $\zeta$ on a uniform energy density hypersurface at time $t$ is simply the difference between the local number of e-folds of expansion $N(t, \vec{x})$ and the unperturbed background e-folds $\bar{N}(t)$.

---

## key derivation & equations

The primordial curvature perturbation is expressed as:
$$\zeta(t, \vec{x}) \approx \delta N(t, \vec{x}) \equiv N(t, \vec{x}; \phi_i^I) - \bar{N}(t)$$
where $N(t, \vec{x}) = \int_{t_i}^t H\, dt'$ is evaluated between an initial flat spatial hypersurface $t_i$ (shortly after horizon exit) and a final uniform-density hypersurface $t$.

Expanding $\delta N$ in a Taylor series in the initial field fluctuations $\delta\phi^I$ at horizon exit:
$$\delta N = \sum_I N_{,I} \delta\phi^I + \frac{1}{2}\sum_{I,J} N_{,IJ} \delta\phi^I \delta\phi^J + \dots$$
where $N_{,I} \equiv \frac{\partial N}{\partial \phi^I}$ and $N_{,IJ} \equiv \frac{\partial^2 N}{\partial \phi^I \partial \phi^J}$.

### Power spectrum
$$\mathcal{P}_\zeta(k) = \sum_I N_{,I}^2 \left(\frac{H}{2\pi}\right)^2$$

### Primordial non-Gaussianity
The local non-linear parameter is determined directly from the second derivatives:
$$f_{\rm NL}^{\rm local} = \frac{5}{6} \frac{\sum_{I,J} N_{,I} N_{,J} N_{,IJ}}{\left( \sum_K N_{,K}^2 \right)^2}$$

In multi-field models (such as the curvaton), curved trajectories in field space allow $N_{,IJ}$ to be large, generating detectable $\lvert f_{\rm NL}\rvert \gg 1$.

---

## astrophysical context

* Standard computational tool for multi-field inflation, the curvaton scenario, and modulated reheating.
* Evaluation of primordial black hole formation from large amplitude fluctuations.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Curvature perturbation R and zeta](./Curvature%20perturbation%20R%20and%20zeta.html)
  - [Primordial non-Gaussianity and bispectrum shapes](./Primordial%20non-Gaussianity%20and%20bispectrum%20shapes.html)
  - [Maldacena consistency condition](./Maldacena%20consistency%20condition.html)
  - [Part4_Advanced_Formalisms_and_Non_Gaussianity](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part4_Advanced_Formalisms_and_Non_Gaussianity.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./In-In%20formalism%20for%20cosmological%20correlators.html" class="backlink-item">In-In formalism for cosmological correlators</a></li>
    <li class="backlink-item-wrap"><a href="./Maldacena%20consistency%20condition.html" class="backlink-item">Maldacena consistency condition</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part4_Advanced_Formalisms_and_Non_Gaussianity.html" class="backlink-item">Part4_Advanced_Formalisms_and_Non_Gaussianity</a></li>
    <li class="backlink-item-wrap"><a href="./Primordial%20non-Gaussianity%20and%20bispectrum%20shapes.html" class="backlink-item">Primordial non-Gaussianity and bispectrum shapes</a></li>
  </ul>
</div>
