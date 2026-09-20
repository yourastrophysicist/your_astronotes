---
layout: "default"
title: "Drift-reduced Braginskii equations and vorticity derivation"
---
the drift-reduced Braginskii equations model low-frequency boundary plasma turbulence in tokamaks by filtering out fast compressional Alfvén waves while retaining drift-wave microinstabilities.

## drift ordering

the drift ordering assumes turbulent timescales are much slower than ion cyclotron motion:

$$\frac{d}{dt} \ll \Omega_{ci}, \quad k_\parallel \ll k_\perp, \quad \frac{e \phi}{T_e} \sim \frac{\delta n}{n_0} \sim \frac{\rho_s}{L_\perp}$$

where $\rho_s = c_s / \Omega_{ci}$ is the ion sound gyroradius.

## perpendicular velocity decomposition

expanding the momentum equation order by order in $\epsilon = \omega / \Omega_{ci}$:
1. **leading order ($\mathcal{O}(1)$)**: balance between Lorentz force and pressure gives $E\times B$ drift and diamagnetic drift:
   $$\mathbf{v}_{\perp, s} = \mathbf{v}_E + \mathbf{v}_{*, s} = \frac{\mathbf{B} \times \nabla\phi}{B^2} + \frac{\mathbf{B} \times \nabla p_s}{q_s n_s B^2}$$
2. **first order ($\mathcal{O}(\epsilon)$)**: ion polarization velocity from inertia:
   $$\mathbf{v}_{p, i} = \frac{1}{\Omega_{ci} B} \frac{d}{dt} \nabla_\perp \phi$$

## derivation of the vorticity equation

charge neutrality requires divergence-free current density:

$$\nabla \cdot \mathbf{j} = \nabla_\parallel j_\parallel + \nabla_\perp \cdot \mathbf{j}_\perp = 0$$

substituting $\mathbf{j}_\perp = \mathbf{j}_* + \mathbf{j}_p = \frac{\mathbf{B} \times \nabla p}{B^2} + \rho \frac{d\mathbf{v}_E}{dt}$:

$$\nabla_\perp \cdot \mathbf{j}_* = 2 \left[ \nabla\left(\frac{1}{B}\right) \times \hat{\mathbf{b}} \right] \cdot \nabla p \equiv 2 \mathcal{C}(p)$$

where $\mathcal{C}$ is the magnetic curvature operator.
calculating the divergence of the ion polarization current:

$$\nabla_\perp \cdot \mathbf{j}_p = \nabla_\perp \cdot \left( \frac{\rho}{B^2} \frac{d}{dt} \nabla_\perp \phi \right) \approx \frac{\rho}{B^2} \frac{d}{dt} \nabla_\perp^2 \phi$$

equating terms yields the **drift-reduced vorticity equation**:

$$\frac{\rho}{B^2} \frac{d}{dt} \nabla_\perp^2 \phi = \nabla_\parallel j_\parallel - 2 \mathcal{C}(p)$$

vorticity grows when magnetic curvature drives charge separation that cannot be neutralized by parallel currents along field lines.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part6_Two_Fluid_Theory_Transport_and_Microinstabilities]]
- [[Braginskii collisional transport and Spitzer resistivity]]
- [[Resistive ballooning mode and ion temperature gradient instability]]



## Linked References

- [[Braginskii collisional transport and Spitzer resistivity]]
- [[Resistive ballooning mode and ion temperature gradient instability]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


