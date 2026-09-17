---
layout: "default"
title: "Catalytic H2 formation on dust grains"
name: "Catalytic H2 formation on dust grains"
description: "surface chemical recombination of hydrogen atoms on dust grains and self-shielding against Lyman-Werner photodissociation"
---
{% raw %}
molecular hydrogen ($H_2$) is the most abundant molecule in the universe and the fundamental fuel for star formation. however, direct gas-phase radiative association:

$$H + H \rightarrow H_2 + h\nu$$

is strictly forbidden because homonuclear $H_2$ lacks a permanent electric dipole moment.

## the grain surface catalytic cycle

interstellar dust grains act as third-body catalysts:
1. a gas-phase neutral H atom collides with and physisorbs onto a cold ($T \sim 10 - 20\text{ K}$) grain surface.
2. the atom migrates across surface sites via quantum mechanical tunneling or thermal hopping.
3. it encounters another adsorbed H atom and recombines into $H_2$.
4. the chemical binding energy ($\Delta E \approx 4.48\text{ eV}$) is released into the grain lattice and molecular internal modes, ejecting the $H_2$ into the gas phase.

the volumetric formation rate is:

$$R_{\text{form}} = \frac{1}{2} n_H v_H n_{\text{dust}} \sigma_{\text{dust}} S(T) \eta \approx 3 \times 10^{-17} n_H n(\text{H}) \quad [\text{cm}^{-3}\text{ s}^{-1}]$$

where $S(T)$ is the sticking coefficient and $\eta$ is the recombination efficiency.

## preservation and self-shielding

interstellar FUV photons ($11.2 - 13.6\text{ eV}$) photodissociate $H_2$ via the two-step Solomon process. once column density exceeds $N(H_2) \sim 10^{14}\text{ cm}^{-2}$, the outer layers become optically thick in the Lyman and Werner absorption lines, shielding the interior from dissociating radiation. this **self-shielding** produces the sharp atomic-to-molecular transition in interstellar clouds.

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Multi-phase structure of the interstellar medium](./Multi-phase%20structure%20of%20the%20interstellar%20medium.html)
- [Carraro_05_Interstellar_Dust_and_Extinction](../../02_Literature/Lectures/Interstellar_Medium/Carraro_05_Interstellar_Dust_and_Extinction.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Interstellar_Medium/Carraro_05_Interstellar_Dust_and_Extinction.html" class="backlink-item">Carraro_05_Interstellar_Dust_and_Extinction</a></li>
    <li class="backlink-item-wrap"><a href="./Jeans%20gravitational%20instability%20and%20Jeans%20mass.html" class="backlink-item">Jeans gravitational instability and Jeans mass</a></li>
  </ul>
</div>
