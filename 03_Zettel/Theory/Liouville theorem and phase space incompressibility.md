---
layout: "default"
title: "Liouville theorem and phase space incompressibility"
---
the foundational starting point of kinetic theory describes an isolated ensemble of $N$ classical particles whose evolution is governed by Hamilton's canonical equations of motion.

## phase space flow and incompressibility

in the $6N$-dimensional phase space $\Gamma = (\mathbf{q}_1, \dots, \mathbf{q}_N, \mathbf{p}_1, \dots, \mathbf{p}_N)$, the microscopic state of the entire system is represented by a single point moving with phase space velocity:

$$\mathbf{V} = (\dot{\mathbf{q}}_1, \dots, \dot{\mathbf{q}}_N, \dot{\mathbf{p}}_1, \dots, \dot{\mathbf{p}}_N) = \left(\frac{\partial H}{\partial \mathbf{p}_1}, \dots, -\frac{\partial H}{\partial \mathbf{q}_1}, \dots\right)$$

the phase space divergence of this velocity field vanishes identically:

$$\nabla_\Gamma \cdot \mathbf{V} = \sum_{i=1}^N \left[ \frac{\partial}{\partial \mathbf{q}_i} \cdot \left(\frac{\partial H}{\partial \mathbf{p}_i}\right) + \frac{\partial}{\partial \mathbf{p}_i} \cdot \left(-\frac{\partial H}{\partial \mathbf{q}_i}\right) \right] = \sum_{i=1}^N \left[ \frac{\partial^2 H}{\partial \mathbf{q}_i \partial \mathbf{p}_i} - \frac{\partial^2 H}{\partial \mathbf{p}_i \partial \mathbf{q}_i} \right] = 0$$

because the phase space velocity field is divergence-free, the Hamiltonian flow behaves as an incompressible fluid.

## the liouville equation

defining the $N$-particle probability distribution function $f_N(\mathbf{q}_1, \dots, \mathbf{p}_N, t)$ such that $\int f_N d\Gamma = 1$, conservation of total probability yields:

$$\frac{\partial f_N}{\partial t} + \nabla_\Gamma \cdot (f_N \mathbf{V}) = 0$$

expanding the divergence and using $\nabla_\Gamma \cdot \mathbf{V} = 0$:

$$\frac{d f_N}{dt} = \frac{\partial f_N}{\partial t} + \sum_{i=1}^N \left( \dot{\mathbf{q}}_i \cdot \frac{\partial f_N}{\partial \mathbf{q}_i} + \dot{\mathbf{p}}_i \cdot \frac{\partial f_N}{\partial \mathbf{p}_i} \right) = \frac{\partial f_N}{\partial t} + \{f_N, H\} = 0$$

the convective derivative along a phase trajectory is strictly zero. the local density of ensemble points in $\Gamma$-space remains constant in time.

## see also

- [Fluid_and_Plasma_Dynamics_MOC](../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html)
- [Part1_Kinetic_Foundations_and_Fluid_Equations](../../02_Literature/Lectures/Fluid_and_Plasma_Dynamics/Part1_Kinetic_Foundations_and_Fluid_Equations.html)
- [BBGKY hierarchy and Boltzmann collision operator](BBGKY%20hierarchy%20and%20Boltzmann%20collision%20operator.html)
- [Boltzmann H-theorem and Maxwellian distribution](Boltzmann%20H-theorem%20and%20Maxwellian%20distribution.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="BBGKY%20hierarchy%20and%20Boltzmann%20collision%20operator.html" class="backlink-item">BBGKY hierarchy and Boltzmann collision operator</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fluid_and_Plasma_Dynamics_MOC.html" class="backlink-item">Fluid_and_Plasma_Dynamics_MOC</a></li>
  </ul>
</div>

