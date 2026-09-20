---
layout: "default"
title: "Sweet-Parker magnetic reconnection and Lundquist number"
---
magnetic reconnection breaks ideal MHD topology at thin current sheets, releasing stored magnetic energy into plasma kinetic energy and heat. P.A. Sweet and E.N. Parker (1957) formulated the classical 2D steady-state reconnection model.

## steady-state current sheet geometry

consider an antiparallel magnetic field $\pm B_{in} \hat{\mathbf{x}}$ converging into a resistive diffusion layer of length $2L$ and thickness $2\delta$ ($\delta \ll L$):
- plasma flows into the layer along $y$ at speed $v_{in}$.
- plasma exhausts along $x$ at speed $v_{out}$.

## matching conservation relations

1. **mass continuity**:
   assuming incompressible flow:
   $$L v_{in} = \delta v_{out}$$

2. **momentum balance**:
   magnetic tension accelerates outflowing plasma to the Alfvén speed based on the upstream magnetic field:
   $$v_{out} \approx v_A = \frac{B_{in}}{\sqrt{\mu_0 \rho}}$$

3. **resistive ohm's law**:
   in steady state, convective flux balances resistive diffusion:
   $$v_{in} B_{in} = \eta j_z = \frac{\eta}{\mu_0} \frac{B_{in}}{\delta} \implies v_{in} = \frac{\eta}{\mu_0 \delta}$$

## the sweet-parker reconnection rate

multiplying the continuity and Ohm's law relations:

$$v_{in}^2 = \left(\frac{\delta}{L} v_{out}\right) \left(\frac{\eta}{\mu_0 \delta}\right) = \frac{\eta}{\mu_0 L} v_A$$

defining the dimensionless **Lundquist number** $S$:

$$S = \frac{\mu_0 L v_A}{\eta}$$

the normalized reconnection rate (Alfvén Mach number) is:

$$\frac{v_{in}}{v_A} = \frac{\delta}{L} = \frac{1}{\sqrt{S}} = S^{-1/2}$$

### the astrophysical reconnection paradox
in solar flares, $S \sim 10^{12} - 10^{14}$, predicting a minuscule reconnection rate $v_{in}/v_A \sim 10^{-6} - 10^{-7}$. solar flares would take months to release their magnetic energy, whereas observationally they erupt in minutes. this discrepancy forced the development of fast Petschek shock reconnection and plasmoid instability chains.

## see also

- [[Fluid_and_Plasma_Dynamics_MOC]]
- [[Part8_Reconnection_Relaxation_and_Dynamo_Theory]]
- [[Ideal MHD equations and Alfven flux freezing theorem]]
- [[Woltjer helicity conservation and Taylor plasma relaxation]]



## Linked References

- [[Ideal MHD equations and Alfven flux freezing theorem]]
- [[Woltjer helicity conservation and Taylor plasma relaxation]]
- [[Fluid_and_Plasma_Dynamics_MOC]]


