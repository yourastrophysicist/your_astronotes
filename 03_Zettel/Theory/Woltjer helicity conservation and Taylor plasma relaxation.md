---
layout: "default"
title: "Woltjer helicity conservation and Taylor plasma relaxation"
---
magnetic helicity measures the topological linkage, twist, and kinking of magnetic flux tubes.

## woltjer's theorems (1958)

Lodewijk Woltjer established the fundamental variational properties of magnetic helicity:

$$K = \int_V \mathbf{A} \cdot \mathbf{B} \, d^3x$$

where $\mathbf{B} = \nabla \times \mathbf{A}$.

1. **Woltjer's First Theorem**: in ideal MHD with perfectly conducting boundaries ($\mathbf{B} \cdot \hat{\mathbf{n}} = 0$), magnetic helicity $K$ is gauge-invariant and strictly conserved in time:
   $$\frac{dK}{dt} = -2 \int_V \mathbf{E} \cdot \mathbf{B} \, d^3x = 0$$
2. **Woltjer's Second Theorem**: the state of minimum magnetic energy $\mathcal{W} = \int \frac{B^2}{2\mu_0} d^3x$ for a given global helicity $K$ is a linear (force-free) Beltrami field:
   $$\nabla \times \mathbf{B} = \mu \mathbf{B}$$
   where $\mu = \text{const}$ is the Lagrange multiplier.

## taylor's plasma relaxation hypothesis (1974)

J.B. Taylor recognized that in weakly resistive, turbulent plasmas ($S \gg 1$), local flux tubes reconnect violently, destroying individual flux surface invariants.

however, the dissipation rates of magnetic energy and helicity scale differently with wavenumber:
$$\frac{d\mathcal{W}}{dt} = -\frac{\eta}{\mu_0^2} \int \lvert \nabla \times \mathbf{B}\rvert^2 \, d^3x \sim -\eta k^2$$
$$\frac{dK}{dt} = -2 \frac{\eta}{\mu_0} \int \mathbf{B} \cdot (\nabla \times \mathbf{B}) \, d^3x \sim -\eta k$$

because reconnection concentrates turbulent fluctuations at small scales ($k \gg 1$), **energy dissipates rapidly while total global helicity $K$ decays negligibly**.

the plasma undergoes selective decay, relaxing toward the minimum energy state compatible with its initial global helicity: a linear force-free equilibrium $\nabla \times \mathbf{B} = \mu \mathbf{B}$.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part8_Reconnection_Relaxation_and_Dynamo_Theory](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part8_Reconnection_Relaxation_and_Dynamo_Theory.html)
- [Reversed Field Pinch physics and RFX-mod experiment](Reversed%20Field%20Pinch%20physics%20and%20RFX-mod%20experiment.html)
- [Sweet-Parker magnetic reconnection and Lundquist number](Sweet-Parker%20magnetic%20reconnection%20and%20Lundquist%20number.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Reversed%20Field%20Pinch%20physics%20and%20RFX-mod%20experiment.html" class="backlink-item">Reversed Field Pinch physics and RFX-mod experiment</a></li>
    <li class="backlink-item-wrap"><a href="Sweet-Parker%20magnetic%20reconnection%20and%20Lundquist%20number.html" class="backlink-item">Sweet-Parker magnetic reconnection and Lundquist number</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
  </ul>
</div>

