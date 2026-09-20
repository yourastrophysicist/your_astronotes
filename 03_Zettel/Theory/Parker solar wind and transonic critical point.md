---
layout: "default"
title: "Parker solar wind and transonic critical point"
---
Eugene Parker (1958) demonstrated that a static, isothermal stellar corona leads to non-zero asymptotic pressure at infinity ($p_\infty \sim 10^{-4}\text{ dyn cm}^{-2} \gg p_{\text{ISM}} \sim 10^{-13}\text{ dyn cm}^{-2}$), proving that the solar corona cannot be in hydrostatic equilibrium and must expand continuously as a supersonic wind.

## mathematical derivation

for a steady ($\partial/\partial t = 0$), spherically symmetric, isothermal ($c_s = \sqrt{k_B T / \mu m_p} = \text{const}$) flow:

1. **mass continuity**:
   $$\dot{M} = 4\pi r^2 \rho v = \text{const} \implies \frac{1}{\rho}\frac{d\rho}{dr} + \frac{1}{v}\frac{dv}{dr} + \frac{2}{r} = 0$$

2. **radial momentum conservation**:
   $$v \frac{dv}{dr} = -\frac{1}{\rho}\frac{dp}{dr} - \frac{G M_\odot}{r^2} = -\frac{c_s^2}{\rho}\frac{d\rho}{dr} - \frac{G M_\odot}{r^2}$$

substituting $d\rho / dr$ from continuity into the momentum equation yields Parker's wind equation:

$$\left( v - \frac{c_s^2}{v} \right) \frac{dv}{dr} = \frac{2 c_s^2}{r} - \frac{G M_\odot}{r^2} = \frac{2 c_s^2}{r} \left( 1 - \frac{r_c}{r} \right)$$

where the **critical transonic radius** is defined by:

$$r_c = \frac{G M_\odot}{2 c_s^2}$$

## the transonic de laval nozzle topology

at $r = r_c$, the right-hand side vanishes. to maintain a smooth, single-valued velocity profile $dv/dr > 0$, the left-hand side factor must also vanish simultaneously:

$$v(r_c) = c_s$$

the gravitational field acts as a convergent-divergent de Laval nozzle:
- for $r < r_c$: subsonic expansion ($v < c_s$), acceleration driven by thermal pressure gradients against gravity.
- at $r = r_c$: sonic transition ($v = c_s$).
- for $r > r_c$: supersonic expansion ($v > c_s$), where geometric divergence ($2 c_s^2 / r$) dominates gravity, continuously accelerating the wind toward an asymptotic terminal speed:
  $$v(r) \sim 2 c_s \sqrt{\ln(r/r_c)}$$

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part2_Incompressible_and_Viscous_Flows]]
- [[Line-driven stellar winds and P-Cygni profiles]]
- [[Hagen-Poiseuille pipe flow and viscous dissipation]]



## Linked References

- [[Fluid_and_Plasma_Dynamics_MOC]]


