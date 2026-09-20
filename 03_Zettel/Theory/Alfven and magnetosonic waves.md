---
layout: "default"
title: "Alfven and magnetosonic waves"
---
linear perturbations in ideal magnetohydrodynamics ($\rho \frac{\partial \mathbf{v}}{\partial t} = -\nabla P + \frac{(\mathbf{B}\cdot\nabla)\mathbf{B}}{4\pi} - \nabla(B^2/8\pi)$) yield three wave modes:

## 1. alfvén waves (`AlfvenWave.pdf`)

pure transverse shear waves propagating along background magnetic field lines:
- **wave vector**: $\mathbf{k} \parallel \mathbf{B}_0$
- **velocity perturbation**: $\mathbf{v} \perp \mathbf{B}_0$
- **density perturbation**: $\delta\rho = 0$ (incompressible)
- **restoring force**: magnetic tension $\frac{(\mathbf{B}\cdot\nabla)\mathbf{B}}{4\pi}$

phase velocity:

$$\boxed{v_A = \frac{B_0}{\sqrt{4\pi \rho}}}$$

typical ISM value: $v_A \approx 5 - 10\text{ km s}^{-1}$.

## 2. magnetosonic waves (`MagnetosonicWave.pdf`)

compressional modes where thermal gas pressure and magnetic pressure $\nabla(B^2/8\pi)$ act simultaneously:
- **wave vector**: $\mathbf{k} \perp \mathbf{B}_0$
- **perturbation**: $\delta\rho \ne 0, \delta B \ne 0$

phase speeds:
- **fast magnetosonic wave** (gas and magnetic pressure in phase):
  $$\boxed{v_{\text{ms, fast}} = \sqrt{c_s^2 + v_A^2}}$$
- **slow magnetosonic wave** (gas and magnetic pressure out of phase): $v_{\text{ms, slow}} = 0$ for perpendicular propagation.

## see also

- [[Astrophysics_of_the_Interstellar_Medium_MOC]]
- [[Carraro_08_Shocks_Turbulence_and_MHD_Waves]]
- [[Carraro_07_Interstellar_Magnetic_Fields]]



## Linked References

- [[Shear Alfven and magnetosonic wave modes in MHD]]
- [[Astrophysics_of_the_Interstellar_Medium_MOC]]


