---
layout: "default"
title: "Prandtl boundary layer theory and Blasius scaling"
name: "Prandtl boundary layer theory and Blasius scaling"
description: "boundary layer thickness scaling, matched asymptotic expansions, and the Blasius self-similar solution over a flat plate"
---
{% raw %}
Ludwig Prandtl (1904) resolved d'Alembert's paradox by recognizing that at high Reynolds numbers ($\text{Re} = U L / \nu \gg 1$), viscous dissipation is confined to a thin layer of thickness $\delta \ll L$ adjacent to solid boundaries.

## dimensional scaling of the boundary layer thickness

inside the boundary layer along a flat plate of length $L$, the convective acceleration scales as $u \partial u / \partial x \sim U^2 / L$, while the viscous diffusion term scales as $\nu \partial^2 u / \partial y^2 \sim \nu U / \delta^2$. balancing inertia and viscosity gives:

$$\frac{U^2}{L} \sim \frac{\nu U}{\delta^2} \implies \frac{\delta}{L} \sim \frac{1}{\sqrt{\text{Re}_L}} \implies \delta(x) \sim \sqrt{\frac{\nu x}{U}}$$

the boundary layer thickness grows parabolically downstream as $\sqrt{x}$.

## the 2d prandtl boundary layer equations

for steady, incompressible flow with no streamwise pressure gradient:

$$\frac{\partial u}{\partial x} + \frac{\partial v}{\partial y} = 0$$
$$u \frac{\partial u}{\partial x} + v \frac{\partial u}{\partial y} = \nu \frac{\partial^2 u}{\partial y^2}$$

with boundary conditions: $u(x, 0) = v(x, 0) = 0$, and $\lim_{y\to\infty} u(x, y) = U_\infty$.

## the blasius self-similar transformation

defining the similarity variable $\eta$ and dimensionless stream function $f(\eta)$:

$$\eta = y \sqrt{\frac{U_\infty}{\nu x}}, \quad \psi(x, y) = \sqrt{\nu x U_\infty} \, f(\eta)$$

such that $u = \partial \psi / \partial y = U_\infty f'(\eta)$ and $v = -\partial \psi / \partial x = \frac{1}{2}\sqrt{\frac{\nu U_\infty}{x}} (\eta f' - f)$. substituting into Prandtl's equation yields the non-linear Blasius ordinary differential equation:

$$2 f''' + f f'' = 0$$

subject to $f(0) = 0$, $f'(0) = 0$, and $f'(\infty) = 1$. numerical integration yields $f''(0) \approx 0.332$, providing the exact skin-friction coefficient:

$$C_f = \frac{\tau_w}{\frac{1}{2}\rho U_\infty^2} = \frac{0.664}{\sqrt{\text{Re}_x}}$$

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part2_Incompressible_and_Viscous_Flows](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part2_Incompressible_and_Viscous_Flows.html)
- [Hagen-Poiseuille pipe flow and viscous dissipation](./Hagen-Poiseuille%20pipe%20flow%20and%20viscous%20dissipation.html)
- [Vorticity dynamics and Kelvin circulation theorem](./Vorticity%20dynamics%20and%20Kelvin%20circulation%20theorem.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Chapman-Enskog%20expansion%20and%20Navier-Stokes%20derivation.html" class="backlink-item">Chapman-Enskog expansion and Navier-Stokes derivation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Hagen-Poiseuille%20pipe%20flow%20and%20viscous%20dissipation.html" class="backlink-item">Hagen-Poiseuille pipe flow and viscous dissipation</a></li>
  </ul>
</div>
