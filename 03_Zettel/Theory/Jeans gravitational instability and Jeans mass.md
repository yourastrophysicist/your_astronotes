---
layout: "default"
title: "Jeans gravitational instability and Jeans mass"
---
Sir James Jeans (1902) formulated the fundamental criterion determining when self-gravity overcomes internal thermal gas pressure in an interstellar gas cloud, initiating collapse.

## derivation via perturbed fluid equations

including self-gravity in the linearized fluid equations around a uniform background:

$$\frac{\partial \rho_1}{\partial t} + \rho_0 \nabla \cdot \mathbf{u}_1 = 0$$
$$\rho_0 \frac{\partial \mathbf{u}_1}{\partial t} = -c_s^2 \nabla \rho_1 - \rho_0 \nabla \Phi_1$$
$$\nabla^2 \Phi_1 = 4\pi G \rho_1$$

*(note: invoking the "Jeans swindle", wherein Poisson's equation is applied solely to the first-order perturbation $\Phi_1$, neglecting the background gravitational field $\nabla^2 \Phi_0 = 4\pi G \rho_0$).*

taking the divergence of momentum and eliminating $\nabla \cdot \mathbf{u}_1$ and $\nabla^2 \Phi_1$:

$$\frac{\partial^2 \rho_1}{\partial t^2} - c_s^2 \nabla^2 \rho_1 - 4\pi G \rho_0 \rho_1 = 0$$

## the jeans dispersion relation

inserting a harmonic mode $\rho_1 \propto \exp[i(\mathbf{k} \cdot \mathbf{x} - \omega t)]$:

$$\omega^2 = c_s^2 k^2 - 4\pi G \rho_0$$

- **stable oscillatory acoustic modes**: if $k > k_J$, $\omega^2 > 0$, thermal pressure resists collapse, and acoustic waves propagate.
- **unstable collapsing modes**: if $k < k_J$, $\omega^2 < 0$, yielding purely imaginary frequencies $\omega = \pm i \gamma$ where $\gamma = \sqrt{4\pi G \rho_0 - c_s^2 k^2}$. the perturbation grows exponentially as $e^{\gamma t}$.

## critical jeans parameters

1. **Jeans wavenumber and length**:
   $$k_J = \sqrt{\frac{4\pi G \rho_0}{c_s^2}}, \quad \lambda_J = \frac{2\pi}{k_J} = c_s \sqrt{\frac{\pi}{G \rho_0}}$$

2. **Jeans mass**: the mass enclosed within a sphere of diameter $\lambda_J$:
   $$M_J = \frac{4\pi}{3} \rho_0 \left(\frac{\lambda_J}{2}\right)^3 = \frac{\pi}{6} \frac{c_s^3}{G^{3/2} \rho_0^{1/2}} \propto T^{3/2} \rho_0^{-1/2}$$

in cold giant molecular clouds ($T \sim 10\text{ K}, n \sim 10^4\text{ cm}^{-3}$), $M_J \sim 1 - 5 M_\odot$, matching characteristic protostellar core masses.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part3_Waves_Instabilities_and_Turbulence](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part3_Waves_Instabilities_and_Turbulence.html)
- [Acoustic sound wave propagation in compressible gas](Acoustic%20sound%20wave%20propagation%20in%20compressible%20gas.html)
- [Multi-phase structure of the interstellar medium](Multi-phase%20structure%20of%20the%20interstellar%20medium.html)
- [Catalytic H2 formation on dust grains](Catalytic%20H2%20formation%20on%20dust%20grains.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Acoustic%20sound%20wave%20propagation%20in%20compressible%20gas.html" class="backlink-item">Acoustic sound wave propagation in compressible gas</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
  </ul>
</div>

