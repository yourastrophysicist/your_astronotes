---
layout: "default"
title: "Gyrokinetic ordering and 5D phase space reduction"
---
simulating core turbulence in fusion devices via the 6D Vlasov equation is computationally intractable due to the disparity between rapid ion cyclotron gyration ($\sim 10^8\text{ Hz}$) and low-frequency drift wave turbulence ($\sim 10^5\text{ Hz}$). Gyrokinetics averages over the gyrophase, reducing phase space from 6D to 5D.

## the gyrokinetic ordering

defining the small expansion parameter $\epsilon \ll 1$:

$$\frac{\omega}{\Omega_{ci}} \sim \epsilon, \quad \frac{k_\parallel}{k_\perp} \sim \epsilon, \quad \frac{\delta f}{F_0} \sim \frac{e \delta\phi}{T_e} \sim \epsilon, \quad k_\perp \rho_i \sim 1$$

turbulent eddies are highly elongated along magnetic field lines ($k_\parallel \ll k_\perp$), while perpendicular scales are comparable to the ion gyroradius ($k_\perp \rho_i \sim 1$), maintaining finite Larmor radius (FLR) physics.

## gyrocenter coordinate transformation

a near-identity transformation shifts particle coordinates $(\mathbf{r}, \mathbf{v})$ to gyrocenter coordinates $(\mathbf{R}, v_\parallel, \mu, \theta)$:

$$\mathbf{r} = \mathbf{R} + \boldsymbol{\rho}_L(\theta)$$

applying the gyro-averaging operator $\langle \dots \rangle = \frac{1}{2\pi}\oint d\theta$:

$$\langle \delta\phi(\mathbf{r}) \rangle_{\mathbf{R}} = J_0(k_\perp \rho_L) \delta\phi_k e^{i \mathbf{k} \cdot \mathbf{R}}$$

where $J_0$ is the zero-order Bessel function, which mathematically filters out wavelengths smaller than the Larmor radius (FLR effect).

## the 5d gyrokinetic equation

the resulting distribution function $F(t, \mathbf{R}, v_\parallel, \mu)$ evolves in 5-dimensional phase space:

$$\frac{\partial F}{\partial t} + \left( v_\parallel \hat{\mathbf{b}} + \mathbf{v}_{E,\text{gyro}} + \mathbf{v}_D \right) \cdot \nabla_{\mathbf{R}} F - \frac{\mu \nabla_\parallel B + q \nabla_\parallel \langle \delta\phi \rangle}{m} \frac{\partial F}{\partial v_\parallel} = C(F)$$

this formulation powers state-of-the-art Eulerian and Lagrangian plasma turbulence codes such as GENE, GS2, and ORB5.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part5_Plasma_Kinetics_Gyrokinetics_and_Waves](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part5_Plasma_Kinetics_Gyrokinetics_and_Waves.html)
- [Collisionless Landau damping and wave-particle resonance](Collisionless%20Landau%20damping%20and%20wave-particle%20resonance.html)
- [Resistive ballooning mode and ion temperature gradient instability](Resistive%20ballooning%20mode%20and%20ion%20temperature%20gradient%20instability.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Collisionless%20Landau%20damping%20and%20wave-particle%20resonance.html" class="backlink-item">Collisionless Landau damping and wave-particle resonance</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
  </ul>
</div>

