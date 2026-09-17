---
layout: "default"
title: "Cylindrical Z-pinch equilibrium and Bennett relation"
name: "Cylindrical Z-pinch equilibrium and Bennett relation"
description: "magnetostatic radial pressure balance, self-confinement by axial currents, and the exact Bennett current formula"
---
{% raw %}
a Z-pinch is a cylindrical plasma column carrying an axial current $j_z(r)$ that generates an azimuthal magnetic field $B_\theta(r)$, self-pinching and confining the plasma against its internal kinetic pressure.

## radial magnetostatic force balance

in static equilibrium ($\mathbf{u} = 0$), the momentum equation reduces to:

$$\nabla p = \mathbf{j} \times \mathbf{B}$$

in cylindrical symmetry with $\mathbf{j} = j_z(r) \hat{\mathbf{z}}$ and $\mathbf{B} = B_\theta(r) \hat{\boldsymbol{\theta}}$:

$$\frac{dp}{dr} = - j_z B_\theta$$

from Ampère's law, $j_z = \frac{1}{\mu_0 r} \frac{d}{dr}(r B_\theta)$:

$$\frac{dp}{dr} = -\frac{B_\theta}{\mu_0 r} \frac{d}{dr}(r B_\theta) = -\frac{d}{dr}\left(\frac{B_\theta^2}{2\mu_0}\right) - \frac{B_\theta^2}{\mu_0 r}$$

integrating radial force balance shows that plasma pressure is maximum on axis ($r = 0$) and drops to zero at the plasma edge ($r = a$).

## derivation of the bennett relation

Willard Bennett (1934) derived the global current required to hold a cylindrical plasma column in radial equilibrium.

multiplying the force balance equation by $r^2$ and integrating by parts from $r = 0$ to $a$:

$$\int_0^a r^2 \frac{dp}{dr} \, dr = \left[ r^2 p(r) \right]_0^a - 2 \int_0^a r p(r) \, dr = -2 \int_0^a r p(r) \, dr$$

assuming uniform temperatures $T = T_e = T_i$: $\int_0^a 2\pi r p \, dr = N k_B (T_e + T_i)$, where $N = \int_0^a 2\pi r n \, dr$ is the line density (particles per unit length).

evaluating the magnetic integral using Ampère's law gives $\frac{\mu_0 I^2}{8\pi}$. equating kinetic and magnetic terms yields the **Bennett relation**:

$$I^2 = \frac{8\pi}{\mu_0} N k_B (T_e + T_i)$$

the total current $I$ required to confine a given line density $N$ at temperature $T$ depends only on the product $N(T_e + T_i)$, completely independent of the radial column size $a$.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part7_Magnetohydrodynamics_Equilibrium_and_Waves](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part7_Magnetohydrodynamics_Equilibrium_and_Waves.html)
- [Grad-Shafranov equation and axisymmetric tokamak equilibria](./Grad-Shafranov%20equation%20and%20axisymmetric%20tokamak%20equilibria.html)
- [Ideal MHD equations and Alfven flux freezing theorem](./Ideal%20MHD%20equations%20and%20Alfven%20flux%20freezing%20theorem.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Grad-Shafranov%20equation%20and%20axisymmetric%20tokamak%20equilibria.html" class="backlink-item">Grad-Shafranov equation and axisymmetric tokamak equilibria</a></li>
  </ul>
</div>
