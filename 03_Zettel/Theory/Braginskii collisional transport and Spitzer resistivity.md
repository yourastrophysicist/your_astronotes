---
layout: "default"
title: "Braginskii collisional transport and Spitzer resistivity"
---
S.I. Braginskii (1965) derived the complete closed system of two-fluid equations for electrons and ions in a magnetized collisional plasma using the Landau collision operator.

## inter-species friction and spitzer resistivity

collisional momentum exchange between electrons and ions produces the friction force $\mathbf{R}_{ei} = -\mathbf{R}_{ie}$, composed of relative velocity friction $\mathbf{R}_u$ and thermal force $\mathbf{R}_T$:

$$\mathbf{R}_{ei} = -\frac{m_e n_e}{\tau_e} (\mathbf{u}_e - \mathbf{u}_i) - 0.71 n_e \nabla_\parallel T_e$$

parallel generalized Ohm's law balances electric field against friction:

$$E_\parallel = \eta_\parallel j_\parallel - \frac{0.71}{e} \nabla_\parallel T_e$$

where the **Spitzer resistivity** is:

$$\eta_\parallel = 0.51 \frac{m_e}{n_e e^2 \tau_e} = \frac{m_e^{1/2} e^2 \ln\Lambda}{3 \epsilon_0^2 (2\pi k_B T_e)^{3/2}} \propto T_e^{-3/2}$$

because $\eta \propto T_e^{-3/2}$, a hotter plasma becomes an increasingly perfect electrical conductor.

## extreme anisotropy of thermal conduction

in a strong magnetic field ($\Omega_{ce} \tau_e \gg 1$), electrons gyrate trillions of times between collisions. thermal conduction becomes extremely anisotropic:

$$\mathbf{q}_e = -\kappa_\parallel \nabla_\parallel T_e - \kappa_\perp \nabla_\perp T_e - \kappa_\wedge (\hat{\mathbf{b}} \times \nabla T_e)$$

with parallel conductivity $\kappa_\parallel = 3.16 \frac{n_e T_e \tau_e}{m_e}$, and perpendicular conductivity suppressed by the cyclotron frequency squared:

$$\frac{\kappa_\perp}{\kappa_\parallel} \sim \frac{1}{(\Omega_{ce} \tau_e)^2} \sim 10^{-10} - 10^{-12}$$

heat conducts virtually instantaneously along magnetic flux surfaces while being strictly insulated across surfaces, making magnetic flux surfaces nearly isothermal.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part6_Two_Fluid_Theory_Transport_and_Microinstabilities]]
- [[Drift-reduced Braginskii equations and vorticity derivation]]
- [[Ambipolar diffusion in unmagnetized and magnetized plasmas]]



## Linked References

- [[Ambipolar diffusion in unmagnetized and magnetized plasmas]]
- [[Drift-reduced Braginskii equations and vorticity derivation]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


