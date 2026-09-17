---
layout: "default"
title: "Boltzmann H-theorem and Maxwellian distribution"
name: "Boltzmann H-theorem and Maxwellian distribution"
description: "entropy production, macroscopic irreversibility, and the thermodynamic equilibrium Maxwell-Boltzmann state"
---
{% raw %}
the Boltzmann $H$-theorem demonstrates how time-reversible microscopic dynamics produce macroscopic thermodynamic irreversibility through collisions.

## definition of the H-functional

Boltzmann defined the kinetic $H$-functional as the integral of $f \ln f$ over phase space:

$$H(t) = \int f(\mathbf{v}, t) \ln f(\mathbf{v}, t) \, d^3v$$

which is proportional to the negative of the physical kinetic entropy density: $S = -k_B H$.

## time derivative and proof of monotonicity

differentiating $H(t)$ with respect to time and inserting the Boltzmann collision operator:

$$\frac{dH}{dt} = \int (1 + \ln f) \frac{\partial f}{\partial t} \, d^3v = \int \ln f \, C(f) \, d^3v$$

symmetrizing across the four pre- and post-collision states $(\mathbf{v}, \mathbf{v}_1) \leftrightarrow (\mathbf{v}', \mathbf{v}_1')$ using detailed balance:

$$\frac{dH}{dt} = -\frac{1}{4} \int \int \int \left( f' f'_1 - f f_1 \right) \ln\left( \frac{f' f'_1}{f f_1} \right) g \, \sigma \, d\Omega \, d^3v \, d^3v_1$$

because the algebraic identity $(y - x) \ln(y/x) \ge 0$ holds for all positive $x, y$, the integrand is strictly non-negative:

$$\frac{dH}{dt} \le 0 \implies \frac{dS}{dt} \ge 0$$

entropy never decreases.

## the equilibrium maxwellian distribution

thermal equilibrium requires $dH/dt = 0$, which is satisfied if and only if:

$$\ln f' + \ln f'_1 = \ln f + \ln f_1$$

$\ln f$ must be a linear combination of collision invariants (mass, momentum $\mathbf{v}$, kinetic energy $v^2$). this uniquely specifies the Maxwell-Boltzmann distribution:

$$f_0(\mathbf{v}) = n \left( \frac{m}{2\pi k_B T} \right)^{3/2} \exp\left( -\frac{m \mid \mathbf{v} - \mathbf{u} \mid ^2}{2 k_B T} \right)$$

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part1_Kinetic_Foundations_and_Fluid_Equations](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part1_Kinetic_Foundations_and_Fluid_Equations.html)
- [BBGKY hierarchy and Boltzmann collision operator](./BBGKY%20hierarchy%20and%20Boltzmann%20collision%20operator.html)
- [Chapman-Enskog expansion and Navier-Stokes derivation](./Chapman-Enskog%20expansion%20and%20Navier-Stokes%20derivation.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./BBGKY%20hierarchy%20and%20Boltzmann%20collision%20operator.html" class="backlink-item">BBGKY hierarchy and Boltzmann collision operator</a></li>
    <li class="backlink-item-wrap"><a href="./Chapman-Enskog%20expansion%20and%20Navier-Stokes%20derivation.html" class="backlink-item">Chapman-Enskog expansion and Navier-Stokes derivation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Liouville%20theorem%20and%20phase%20space%20incompressibility.html" class="backlink-item">Liouville theorem and phase space incompressibility</a></li>
  </ul>
</div>
