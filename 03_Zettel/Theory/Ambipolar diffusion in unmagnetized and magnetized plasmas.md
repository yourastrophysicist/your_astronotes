---
layout: "default"
title: "Ambipolar diffusion in unmagnetized and magnetized plasmas"
---
ambipolar diffusion describes the joint diffusion of electrons and ions in a plasma, where electrostatic forces enforce equal net fluxes to preserve macroscopic charge neutrality.

## unmagnetized plasma

in the absence of a magnetic field, light electrons diffuse much faster than heavy ions ($D_e \gg D_i$). this tends to leave the plasma with a net positive charge, setting up an **ambipolar electric field** $\mathbf{E}_A$:

$$\boldsymbol{\Gamma}_e = -D_e \nabla n_e - \mu_e n_e \mathbf{E}_A$$
$$\boldsymbol{\Gamma}_i = -D_i \nabla n_i + \mu_i n_i \mathbf{E}_A$$

quasi-neutrality ($n_e \approx n_i = n$) requires equal fluxes $\boldsymbol{\Gamma}_e = \boldsymbol{\Gamma}_i$:

$$\mathbf{E}_A = -\frac{D_e - D_i}{\mu_e + \mu_i} \frac{\nabla n}{n}$$

substituting $\mathbf{E}_A$ back into either flux expression yields Fick's law $\boldsymbol{\Gamma} = -D_A \nabla n$ with the **ambipolar diffusion coefficient**:

$$D_A = \frac{\mu_i D_e + \mu_e D_i}{\mu_i + \mu_e} \approx D_i \left( 1 + \frac{T_e}{T_i} \right)$$

the slow ions drag the electrons, and the effective diffusion rate is set by the ion diffusion coefficient enhanced by the temperature ratio $(1 + T_e/T_i)$.

## strongly magnetized plasma: cross-field diffusion inversion

perpendicular to a strong magnetic field, cross-field diffusion scales inversely with particle mass:

$$D_{\perp, s} \sim \frac{\rho_{L, s}^2}{\tau_s} \propto m_s^{1/2}$$

the heavy ions now have larger gyroradii than electrons ($\rho_{L, i} \gg \rho_{L, e}$), making $D_{\perp, i} \gg D_{\perp, e}$.
the ambipolar electric field reverses direction to pull ions inward and push electrons outward:

$$D_{A, \perp} = \frac{\mu_{\perp, i} D_{\perp, e} + \mu_{\perp, e} D_{\perp, i}}{\mu_{\perp, i} + \mu_{\perp, e}} \approx 2 D_{\perp, e} \propto \frac{1}{B^2}$$

in magnetized plasmas, cross-field diffusion is constrained by the slower electron rate, scaling as $1/B^2$.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part6_Two_Fluid_Theory_Transport_and_Microinstabilities](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part6_Two_Fluid_Theory_Transport_and_Microinstabilities.html)
- [Braginskii collisional transport and Spitzer resistivity](Braginskii%20collisional%20transport%20and%20Spitzer%20resistivity.html)
- [Guiding center drifts and electric polarization drift](Guiding%20center%20drifts%20and%20electric%20polarization%20drift.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Braginskii%20collisional%20transport%20and%20Spitzer%20resistivity.html" class="backlink-item">Braginskii collisional transport and Spitzer resistivity</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
  </ul>
</div>

