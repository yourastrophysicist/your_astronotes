---
layout: "default"
title: "Reversed Field Pinch physics and RFX-mod experiment"
name: "Reversed Field Pinch physics and RFX-mod experiment"
description: "Bessel function model, pinch parameter, self-reversal of axial magnetic field, and the RFX-mod2 fusion facility in Padova"
---
{% raw %}
the Reversed Field Pinch (RFP) is an alternative magnetic confinement concept where the toroidal magnetic field spontaneously reverses direction near the plasma edge through turbulent dynamo relaxation.

## the bessel function model (bfm)

according to Taylor's relaxation theory, the equilibrium satisfies $\nabla \times \mathbf{B} = \mu \mathbf{B}$ with $\mu = \text{const}$. in a periodic cylinder of radius $a$, the exact solution is:

$$B_z(r) = B_0 J_0(\mu r), \quad B_\theta(r) = B_0 J_1(\mu r), \quad B_r = 0$$

where $J_0$ and $J_1$ are Bessel functions of the first kind.

## spontaneous field reversal

defining the **pinch parameter** $\Theta$ and **field reversal parameter** $F$:

$$\Theta \equiv \frac{B_\theta(a)}{\langle B_z \rangle} = \frac{\mu a}{2}, \quad F \equiv \frac{B_z(a)}{\langle B_z \rangle} = \frac{\Theta J_0(2\Theta)}{J_1(2\Theta)}$$

the first zero of $J_0(x)$ occurs at $x = 2.405$. therefore, whenever the current is driven high enough such that:

$$\mu a > 2.405 \iff \Theta > 1.2$$

$B_z(a)$ becomes negative: the axial magnetic field spontaneously reverses at the boundary.

## the rfx-mod and rfx-mod2 experiments (padova)

Consorzio RFX in Padova hosts one of the world's leading RFP experiments:
- **RFX-mod**: major radius $R = 2.0\text{ m}$, minor radius $a = 0.46\text{ m}$, plasma current $I_p \le 2\text{ MA}$.
- **Quasi-Single Helicity (QSH)**: at high currents ($I_p > 1\text{ MA}$), the chaotic turbulent spectrum condenses into a single dominant helical mode ($m=1, n=-7$), forming a coherent internal transport barrier with significantly enhanced energy confinement.
- **RFX-mod2**: major machine upgrade bringing the active conducting shell closer to the plasma boundary to suppress resistive wall modes (RWM) and edge magnetic chaos.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part8_Reconnection_Relaxation_and_Dynamo_Theory](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part8_Reconnection_Relaxation_and_Dynamo_Theory.html)
- [Woltjer helicity conservation and Taylor plasma relaxation](./Woltjer%20helicity%20conservation%20and%20Taylor%20plasma%20relaxation.html)
- [Tokamak magnetic topology and neoclassical banana orbits](./Tokamak%20magnetic%20topology%20and%20neoclassical%20banana%20orbits.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Woltjer%20helicity%20conservation%20and%20Taylor%20plasma%20relaxation.html" class="backlink-item">Woltjer helicity conservation and Taylor plasma relaxation</a></li>
  </ul>
</div>
