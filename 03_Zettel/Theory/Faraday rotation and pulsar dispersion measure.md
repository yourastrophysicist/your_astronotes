---
layout: "default"
title: "Faraday rotation and pulsar dispersion measure"
name: "Faraday rotation and pulsar dispersion measure"
description: "plasma birefringence, rotation measure RM, dispersion measure DM, and the derivation of mean line-of-sight field"
---
{% raw %}
Faraday rotation is the rotation of the polarization plane of linearly polarized radio waves passing through a magnetized ionized plasma.

## rotation measure (rm)

due to plasma birefringence ($v_R > v_L$):

$$\Delta \theta = \text{RM} \cdot \lambda^2$$

where:

$$\text{RM} = \frac{e^3}{2\pi m_e^2 c^4} \int_0^d n_e(s) B_\parallel(s) ds = 0.812 \int_0^d \left(\frac{n_e}{\text{cm}^{-3}}\right)\left(\frac{B_\parallel}{\mu\text{G}}\right)\left(\frac{ds}{\text{pc}}\right)\ [\text{rad m}^{-2}]$$

## dispersion measure (dm)

the frequency-dependent pulse arrival delay measures total electron column:

$$\text{DM} = \int_0^d n_e(s) ds \quad [\text{pc cm}^{-3}]$$

## calculating the mean field $\langle B_\parallel \rangle$

dividing $\text{RM}$ by $\text{DM}$:

$$\langle B_\parallel \rangle = \frac{\int n_e B_\parallel ds}{\int n_e ds} = \frac{\text{RM}}{0.812 \, \text{DM}} = 1.232 \frac{\text{RM}}{\text{DM}} \quad [\mu\text{G}]$$

this is prof. carraro's equation (slide 14). by compiling $\text{RM}$ and $\text{DM}$ for hundreds of Galactic pulsars, astronomers map large-scale field reversals across Galactic spiral arms.

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Interstellar magnetic field tracers](./Interstellar%20magnetic%20field%20tracers.html)
- [Carraro_07_Interstellar_Magnetic_Fields](../../02_Literature/Lectures/Interstellar_Medium/Carraro_07_Interstellar_Magnetic_Fields.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Interstellar_Medium/Carraro_07_Interstellar_Magnetic_Fields.html" class="backlink-item">Carraro_07_Interstellar_Magnetic_Fields</a></li>
    <li class="backlink-item-wrap"><a href="./Cold%20plasma%20dielectric%20tensor%20and%20Appleton-Hartree%20dispersion.html" class="backlink-item">Cold plasma dielectric tensor and Appleton-Hartree dispersion</a></li>
    <li class="backlink-item-wrap"><a href="./Interstellar%20magnetic%20field%20tracers.html" class="backlink-item">Interstellar magnetic field tracers</a></li>
  </ul>
</div>
