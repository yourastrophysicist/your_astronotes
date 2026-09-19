---
layout: "default"
title: "Time-redshift relation"
---
# time-redshift relation

up: [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html) · [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html) · [Cosmological redshift](Cosmological%20redshift.html)

## derivation from the scale factor

Redshift is defined in terms of the scale factor $a(t) = (1+z)^{-1}$ (with $a(t_0) = 1$ today). Taking the time derivative:

$$\frac{da}{dt} = - (1+z)^{-2} \frac{dz}{dt}$$

Dividing by $a$:

$$H(z) \equiv \frac{\dot{a}}{a} = - \frac{1}{1+z} \frac{dz}{dt}$$

Rearranging gives the fundamental differential relation between cosmic time $t$ and redshift $z$:

$$\boxed{\, dt = - \frac{dz}{H_0 (1+z) E(z)} \,}$$

where the dimensionless expansion rate $E(z)$ is given by the Friedmann equation:

$$E(z) \equiv \frac{H(z)}{H_0} = \sqrt{\Omega_{r,0}(1+z)^4 + \Omega_{m,0}(1+z)^3 + \Omega_{k,0}(1+z)^2 + \Omega_{\Lambda,0}}$$

## lookback time

The lookback time $t_{\rm lb}(z)$ is the difference between the age of the universe today $t_0$ and the cosmic time $t(z)$ when photons were emitted:

$$t_{\rm lb}(z) = t_0 - t(z) = \int_{t(z)}^{t_0} dt = \frac{1}{H_0} \int_0^z \frac{dz'}{(1+z') E(z')}$$

## age of the universe

The age of the universe at redshift $z$ is:

$$t(z) = \int_0^{t(z)} dt = \frac{1}{H_0} \int_z^\infty \frac{dz'}{(1+z') E(z')}$$

In a flat matter-dominated universe (Einstein-de Sitter, $\Omega_m = 1$):
$$t(z) = \frac{2}{3 H_0 (1+z)^{3/2}} \implies t_0 = \frac{2}{3 H_0} \approx 9.3 h^{-1} \text{ Gyr}$$

In a flat $\Lambda$CDM universe (neglecting early radiation for $t_0$):
$$t_0 = \frac{2}{3 H_0 \sqrt{\Omega_\Lambda}} \text{arcsinh}\left(\sqrt{\frac{\Omega_\Lambda}{\Omega_m}}\right)$$
With Planck 2018 parameters ($\Omega_m = 0.315$, $\Omega_\Lambda = 0.685$, $H_0 = 67.4$ km/s/Mpc):
$$t_0 \approx 13.8 \text{ Gyr}$$

## connections

- distances: [Radial comoving distance](Radial%20comoving%20distance.html), [Cosmological distances](Cosmological%20distances.html)
- background: [Friedmann equations](Friedmann%20equations.html), [GR Friedmann with Lambda](GR%20Friedmann%20with%20Lambda.html)
- application: [Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback](Cosmology%20calculator%20-%20how%20to%20use%20H0%20Omega_m%20Omega_Lambda%20to%20get%20dL%20dA%20t_lookback.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Cosmic%20look-back%20time.html" class="backlink-item">Cosmic look-back time</a></li>
    <li class="backlink-item-wrap"><a href="Cosmological%20redshift.html" class="backlink-item">Cosmological redshift</a></li>
    <li class="backlink-item-wrap"><a href="Radial%20comoving%20distance.html" class="backlink-item">Radial comoving distance</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

