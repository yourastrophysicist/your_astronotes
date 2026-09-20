---
layout: "default"
title: "Rankine-Hugoniot shock jump conditions"
---
in the rest frame of a steady 1D shock front, conservation laws relate upstream (pre-shock, index 1) and downstream (post-shock, index 2) states:

$$\rho_1 v_1 = \rho_2 v_2$$
$$P_1 + \rho_1 v_1^2 = P_2 + \rho_2 v_2^2$$
$$\frac{1}{2}v_1^2 + \frac{\gamma}{\gamma - 1}\frac{P_1}{\rho_1} = \frac{1}{2}v_2^2 + \frac{\gamma}{\gamma - 1}\frac{P_2}{\rho_2}$$

## adiabatic strong shocks ($\mathcal{M}_1 \gg 1$)

for an ideal monatomic gas ($\gamma = 5/3$):

$$\frac{\rho_2}{\rho_1} \rightarrow \frac{\gamma + 1}{\gamma - 1} = \frac{5/3 + 1}{5/3 - 1} = 4$$

the maximum compression factor is strictly 4. post-shock temperature:

$$T_2 \approx \frac{3}{16}\frac{\mu m_H}{k} v_1^2$$

## isothermal strong shocks (radiative cooling)

when radiative cooling radiates post-shock thermal energy instantaneously ($T_2 = T_1$):

$$\frac{\rho_2}{\rho_1} = \mathcal{M}_1^2$$

in supersonic molecular cloud collisions ($\mathcal{M}_1 \sim 10 - 20$), isothermal shocks achieve compressions of $\rho_2/\rho_1 \sim 100 - 400$, triggering gravitational collapse.

## see also

- [[Astrophysics_of_the_Interstellar_Medium_MOC]]
- [[Sedov-Taylor blast wave expansion]]
- [[Carraro_08_Shocks_Turbulence_and_MHD_Waves]]



## Linked References

- [[Interstellar turbulence and Kolmogorov cascade]]
- [[Sedov-Taylor blast wave expansion]]
- [[Astrophysics_of_the_Interstellar_Medium_MOC]]


