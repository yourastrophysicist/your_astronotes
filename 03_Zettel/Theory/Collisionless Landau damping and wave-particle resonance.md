---
layout: "default"
title: "Collisionless Landau damping and wave-particle resonance"
name: "Collisionless Landau damping and wave-particle resonance"
description: "analytic continuation around poles, wave-particle energy exchange, and collisionless damping in Vlasov-Poisson plasmas"
---
{% raw %}
Lev Landau (1946) demonstrated that electrostatic plasma waves in a collisionless plasma damp exponentially in time without any collisional dissipation.

## mathematical formulation via laplace transform

for 1D electrostatic perturbations in an unmagnetized electron plasma with immobile ions, the linearized Vlasov-Poisson system is:

$$\frac{\partial f_1}{\partial t} + v \frac{\partial f_1}{\partial x} - \frac{e}{m} E_1 \frac{\partial f_0}{\partial v} = 0, \quad \frac{\partial E_1}{\partial x} = -4\pi e \int f_1 \, dv$$

solving as an initial-value problem using spatial Fourier transform and temporal Laplace transform:

$$\tilde{E}_k(s) = \frac{N(k, s)}{D(k, s)}$$

where the plasma dielectric function is:

$$D(k, s) = 1 + \frac{\omega_{pe}^2}{k^2} \int_{-\infty}^\infty \frac{\partial f_0 / \partial v}{v - i s / k} \, dv$$

## the landau contour and pole singularity

inverting the Laplace transform requires analytic continuation of $D(k, s)$ into the lower half-plane $\text{Re}(s) < 0$. setting $s = -i\omega$:

$$\lim_{\gamma \to 0} \frac{1}{v - (\omega/k) - i\epsilon} = \mathcal{P} \left( \frac{1}{v - \omega/k} \right) + i\pi \delta\left(v - \frac{\omega}{k}\right)$$

the dielectric function becomes:

$$D(k, \omega) = 1 - \frac{\omega_{pe}^2}{k^2} \mathcal{P} \int \frac{\partial f_0 / \partial v}{v - \omega/k} \, dv - i\pi \frac{\omega_{pe}^2}{k^2} \left. \frac{\partial f_0}{\partial v} \right\rvert_{v = \omega/k}$$

## the landau damping rate

assuming weak damping $\omega = \omega_r + i \gamma_L$ with $\lvert \gamma_L\rvert \ll \omega_r$:

$$\omega_r^2 \approx \omega_{pe}^2 + 3 k^2 v_{\text{th}}^2 \quad \text{(Bohm-Gross)}$$

$$\gamma_L = - \frac{\text{Im}[D(k, \omega_r)]}{\partial \text{Re}[D] / \partial \omega} = \left. \frac{\pi \omega_r \omega_{pe}^2}{2 k^2} \frac{\partial f_0}{\partial v} \right\rvert_{v = \omega_r / k}$$

for a standard Maxwellian distribution, $\partial f_0 / \partial v < 0$ for all $v > 0$, ensuring $\gamma_L < 0$: the wave is damped.

## physical mechanism

particles moving slightly slower than the wave phase velocity ($v \lesssim v_{\text{ph}}$) are accelerated by the electric field and absorb wave energy. particles moving slightly faster ($v \gtrsim v_{\text{ph}}$) are decelerated and surrender energy to the wave. because a Maxwellian has more particles with $v < v_{\text{ph}}$ than $v > v_{\text{ph}}$, net energy transfers from the wave to resonant particles.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part5_Plasma_Kinetics_Gyrokinetics_and_Waves](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part5_Plasma_Kinetics_Gyrokinetics_and_Waves.html)
- [Gyrokinetic ordering and 5D phase space reduction](./Gyrokinetic%20ordering%20and%205D%20phase%20space%20reduction.html)
- [Cold plasma dielectric tensor and Appleton-Hartree dispersion](./Cold%20plasma%20dielectric%20tensor%20and%20Appleton-Hartree%20dispersion.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Gyrokinetic%20ordering%20and%205D%20phase%20space%20reduction.html" class="backlink-item">Gyrokinetic ordering and 5D phase space reduction</a></li>
  </ul>
</div>
