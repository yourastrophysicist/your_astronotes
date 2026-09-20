---
layout: "default"
title: "Sedov-Taylor blast wave expansion"
---
the Sedov-Taylor phase governs the adiabatic expansion of a supernova remnant when the swept-up interstellar mass greatly exceeds the ejected mass ($M_{\text{swept}} \gg M_{\text{ej}}$) and radiative cooling is negligible ($t_{\text{cool}} \gg t$).

## dimensional derivation

the shock radius $R_s$ depends only on explosion energy $E_0$, ambient density $\rho_0$, and time $t$:

$$R_s(t) = \xi_0 \left(\frac{E_0}{\rho_0}\right)^{1/5} t^{2/5}$$

where $\xi_0 \approx 1.15$ for a monatomic gas ($\gamma = 5/3$).

## kinematics and post-shock temperature

differentiating $R_s(t)$:

$$v_s(t) = \frac{dR_s}{dt} = \frac{2}{5}\frac{R_s}{t} \propto t^{-3/5}$$

using strong shock jump conditions:

$$T_s(t) = \frac{3}{16}\frac{\mu m_H}{k} v_s^2 \propto t^{-6/5}$$

scaling for $E_0 = 10^{51}\text{ erg}$ and $n_0 = 1\text{ cm}^{-3}$:

$$R_s(t) \approx 0.31 \, t_{\text{yr}}^{2/5}\text{ pc}$$
$$v_s(t) \approx 1.2 \times 10^5 \, t_{\text{yr}}^{-3/5}\text{ km s}^{-1}$$
$$T_s(t) \approx 2.0 \times 10^8 \, t_{\text{yr}}^{-6/5}\text{ K}$$

## transition to the snowplow phase

when $v_s$ drops to $\sim 200\text{ km s}^{-1}$ ($T_s \sim 10^6\text{ K}$), atomic line cooling causes catastrophic radiative energy loss. momentum conservation ($M v_s = \text{const}$) takes over, yielding the **snowplow phase** with $R_s(t) \propto t^{1/4}$.

## see also

- [[Astrophysics_of_the_Interstellar_Medium_MOC]]
- [[Rankine-Hugoniot shock jump conditions]]
- [[Superbubbles galactic chimneys and fountains]]
- [[Carraro_06_Supernovae_and_Hot_Ionized_Medium]]



## Linked References

- [[Helmholtz vortex theorems and baroclinic torque]]
- [[Multi-phase structure of the interstellar medium]]
- [[Rankine-Hugoniot shock jump conditions]]
- [[Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities]]
- [[Superbubbles galactic chimneys and fountains]]
- [[Astrophysics_of_the_Interstellar_Medium_MOC]]


