---
layout: "default"
title: "Horizon problem and causal structure"
---
{% raw %}
# Horizon problem and causal structure

> *the puzzle of why 40,000 causally disconnected patches of the early universe share the exact same temperature to one part in 100,000.*

---

## core physical intuition

In the standard decelerating Friedmann universe, the comoving distance that light can travel since the Big Bang (the comoving particle horizon $\tau$) grows monotonically with time. Looking back at the Cosmic Microwave Background last scattering surface at $z \approx 1100$, the angular scale subtended by this causal horizon is only about $1^\circ$ on the sky.

This means that patches of the CMB separated by more than two degrees were never in causal communication before recombination. Their past light cones had zero intersection. Yet, when Planck and WMAP measure the CMB temperature across the entire sky, it is isotropic to $\Delta T/T \sim 10^{-5}$. The standard model offers no physical mechanism for this thermal equilibrium; it must be postulated as an arbitrary initial condition.

---

## key derivation & equations

The physical particle horizon at recombination ($t_{\rm rec}$) in a matter-dominated regime is:
$$d_H(t_{\rm rec}) = a(t_{\rm rec}) \int_0^{t_{\rm rec}} \frac{c\, dt'}{a(t')} = 3 c t_{\rm rec} = \frac{2c}{H(t_{\rm rec})}$$

The angular diameter distance from the observer today to the last scattering surface is:
$$d_A(z_{\rm rec}) = \frac{1}{1+z_{\rm rec}}\int_0^{z_{\rm rec}} \frac{c\, dz'}{H(z')} \approx \frac{2c}{H_0 \Omega_m^{1/2}(1+z_{\rm rec})}$$

The angular size subtended by one causal patch on the sky today is:
$$\theta_H = \frac{d_H(t_{\rm rec})}{d_A(z_{\rm rec})} = \frac{1}{\sqrt{1+z_{\rm rec}}} \approx \frac{1}{\sqrt{1100}} \approx 0.030\text{ rad} \approx 1.7^\circ \sim 1^\circ$$

The total number of causally independent patches on the two-sphere is:
$$N_{\rm patches} \approx \frac{4\pi}{\pi \theta_H^2} \approx 40{,}000$$

### The inflationary resolution
During inflation, accelerated expansion ($\ddot{a} > 0$) causes the comoving Hubble radius $(aH)^{-1}$ to shrink exponentially. Conformal time runs over an enormous negative interval:
$$\tau = -\frac{1}{aH} \in (-\infty, 0)$$
The particle horizon expands exponentially relative to the Hubble radius:
$$d_H(t) \approx \frac{c}{H} e^N \gg \frac{c}{H}$$
A single microscopic patch of size $\ll H^{-1}$ prior to inflation expands to encompass the entire observable universe today, ensuring causal contact and thermal equilibrium prior to the hot Big Bang.

---

## astrophysical context

* CMB temperature maps (COBE, WMAP, Planck) showing large-scale isotropy.
* Sachs-Wolfe effect and horizon-scale temperature correlations.

---

## connections & zettel links

* parent moc: [Cosmology_of_the_Early_Universe_MOC](../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html)
* related zettels:
  - [Flatness problem and dynamical attractor](./Flatness%20problem%20and%20dynamical%20attractor.html)
  - [Cosmological inflation](./Cosmological%20inflation.html)
  - [Number of e-folds and horizon exit](./Number%20of%20e-folds%20and%20horizon%20exit.html)
  - [Part1_Standard_Big_Bang_and_Shortcomings](../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part1_Standard_Big_Bang_and_Shortcomings.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Cosmic%20relics%20and%20Kibble%20mechanism.html" class="backlink-item">Cosmic relics and Kibble mechanism</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Flatness%20problem%20and%20dynamical%20attractor.html" class="backlink-item">Flatness problem and dynamical attractor</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Cosmology_of_the_Early_Universe/Part1_Standard_Big_Bang_and_Shortcomings.html" class="backlink-item">Part1_Standard_Big_Bang_and_Shortcomings</a></li>
  </ul>
</div>
