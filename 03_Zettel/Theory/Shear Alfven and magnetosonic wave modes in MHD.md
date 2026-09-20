---
layout: "default"
title: "Shear Alfven and magnetosonic wave modes in MHD"
---
linearizing the ideal MHD equations about a uniform background field $\mathbf{B}_0$ reveals three distinct propagating wave modes: one incompressional shear wave and two compressional magnetosonic waves.

## the linearized mhd wave equation

linearizing mass, momentum, induction, and adiabatic energy equations:

$$\rho_0 \frac{\partial^2 \mathbf{u}_1}{\partial t^2} = c_s^2 \rho_0 \nabla(\nabla \cdot \mathbf{u}_1) + \frac{1}{\mu_0} \left[ \nabla \times \nabla \times (\mathbf{u}_1 \times \mathbf{B}_0) \right] \times \mathbf{B}_0$$

for plane wave perturbations $\mathbf{u}_1 \propto \exp[i(\mathbf{k} \cdot \mathbf{x} - \omega t)]$, defining the Alfvén velocity vector $\mathbf{v}_A = \mathbf{B}_0 / \sqrt{\mu_0 \rho_0}$:

$$\omega^2 \mathbf{u}_1 = \left(c_s^2 + v_A^2\right) (\mathbf{k} \cdot \mathbf{u}_1)\mathbf{k} + (\mathbf{k} \cdot \mathbf{v}_A) \left[ (\mathbf{k} \cdot \mathbf{v}_A)\mathbf{u}_1 - (\mathbf{k} \cdot \mathbf{u}_1)\mathbf{v}_A - (\mathbf{v}_A \cdot \mathbf{u}_1)\mathbf{k} \right]$$

## the three propagating modes

orienting coordinates such that $\mathbf{B}_0 = B_0 \hat{\mathbf{z}}$ and $\mathbf{k} = k_\perp \hat{\mathbf{x}} + k_\parallel \hat{\mathbf{z}}$ at angle $\theta$ to the field:

1. **Shear Alfvén wave**:
   velocity perturbation is purely transverse ($u_{1y} \ne 0$, $\mathbf{k} \cdot \mathbf{u}_1 = 0$), producing zero density perturbation ($\rho_1 = 0$):
   $$\omega^2 = k_\parallel^2 v_A^2 = k^2 v_A^2 \cos^2\theta$$
   the restoring force is purely magnetic tension. energy propagates strictly along magnetic field lines at the Alfvén speed $v_A$.

2. **Fast and Slow magnetosonic waves**:
   compressional modes ($\mathbf{k} \cdot \mathbf{u}_1 \ne 0$, $\rho_1 \ne 0$) where both gas pressure and magnetic pressure act as restoring forces:
   $$v_{\text{ph}}^2 = \frac{\omega^2}{k^2} = \frac{1}{2} \left( c_s^2 + v_A^2 \pm \sqrt{(c_s^2 + v_A^2)^2 - 4 c_s^2 v_A^2 \cos^2\theta} \right)$$
   - **Fast mode ($+$)**: gas and magnetic pressure perturbations oscillate in phase ($v_{\text{fast}} \ge \max(c_s, v_A)$).
   - **Slow mode ($-$)**: gas and magnetic pressure perturbations oscillate out of phase ($v_{\text{slow}} \le \min(c_s, v_A)$).

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part7_Magnetohydrodynamics_Equilibrium_and_Waves]]
- [[Alfven and magnetosonic waves]]
- [[Ideal MHD equations and Alfven flux freezing theorem]]



## Linked References

- [[Acoustic sound wave propagation in compressible gas]]
- [[Ideal MHD equations and Alfven flux freezing theorem]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


