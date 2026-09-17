---
layout: "default"
title: "Sedov-Taylor blast wave expansion"
name: "Sedov-Taylor blast wave expansion"
description: "self-similar adiabatic supernova remnant dynamics, energy conservation, dimensional derivation, and shock deceleration"
---
{% raw %}
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

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Rankine-Hugoniot shock jump conditions](./Rankine-Hugoniot%20shock%20jump%20conditions.html)
- [Superbubbles galactic chimneys and fountains](./Superbubbles%20galactic%20chimneys%20and%20fountains.html)
- [Carraro_06_Supernovae_and_Hot_Ionized_Medium](../../02_Literature/Lectures/Interstellar_Medium/Carraro_06_Supernovae_and_Hot_Ionized_Medium.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Interstellar_Medium/Carraro_06_Supernovae_and_Hot_Ionized_Medium.html" class="backlink-item">Carraro_06_Supernovae_and_Hot_Ionized_Medium</a></li>
    <li class="backlink-item-wrap"><a href="./Helmholtz%20vortex%20theorems%20and%20baroclinic%20torque.html" class="backlink-item">Helmholtz vortex theorems and baroclinic torque</a></li>
    <li class="backlink-item-wrap"><a href="./Multi-phase%20structure%20of%20the%20interstellar%20medium.html" class="backlink-item">Multi-phase structure of the interstellar medium</a></li>
    <li class="backlink-item-wrap"><a href="./Rankine-Hugoniot%20shock%20jump%20conditions.html" class="backlink-item">Rankine-Hugoniot shock jump conditions</a></li>
    <li class="backlink-item-wrap"><a href="./Rayleigh-Taylor%20and%20Kelvin-Helmholtz%20hydrodynamic%20instabilities.html" class="backlink-item">Rayleigh-Taylor and Kelvin-Helmholtz hydrodynamic instabilities</a></li>
    <li class="backlink-item-wrap"><a href="./Superbubbles%20galactic%20chimneys%20and%20fountains.html" class="backlink-item">Superbubbles galactic chimneys and fountains</a></li>
  </ul>
</div>
