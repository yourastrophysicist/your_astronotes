---
layout: "default"
title: "HII regions and Stromgren sphere physics"
name: "HII regions and Stromgren sphere physics"
description: "photoionization equilibrium, Case B recombination, Stromgren radius derivation, and ionization front structure"
---
{% raw %}
H II regions are photoionized nebulae produced by hot massive stars ($T_{\text{eff}} > 30000\text{ K}$) emitting copious Lyman continuum photons ($h\nu \ge 13.6\text{ eV}$).

## photoionization balance

the total production rate of ionizing photons:

$$Q(H^0) = \int_{\nu_0}^\infty \frac{L_\nu}{h\nu} d\nu \quad [\text{photons s}^{-1}]$$

in steady-state equilibrium, $Q(H^0)$ balances total volume recombinations inside the ionized sphere of radius $R_S$:

$$Q(H^0) = \int_0^{R_S} 4\pi r^2 n_e n_p \alpha_B(T_e) dr = \frac{4}{3}\pi R_S^3 n_H^2 \alpha_B(T_e)$$

using **Case B recombination** (on-the-spot re-absorption of ground-state recombinations, $\alpha_B \approx 2.6 \times 10^{-13}\text{ cm}^3\text{ s}^{-1}$ at $T_e = 10^4\text{ K}$).

## the strömgren radius

$$\boxed{R_S = \left(\frac{3 Q(H^0)}{4\pi n_H^2 \alpha_B(T_e)}\right)^{1/3}}$$

scaling:
- $R_S \propto Q^{1/3} n_H^{-2/3}$
- doubling $Q(H^0)$ increases $R_S$ by $2^{1/3} \approx 1.26$
- doubling density $n_H$ shrinks $R_S$ by $2^{2/3} \approx 1.59$

for an O5 V star ($Q \approx 4 \times 10^{49}\text{ s}^{-1}$) in gas of density $n_H = 100\text{ cm}^{-3}$, $R_S \approx 0.5\text{ pc}$.

## ionization front thickness

the transition shell from ionized to neutral gas has thickness set by the photon mean free path:

$$\Delta R_{\text{IF}} \sim \frac{1}{n_H \sigma_0} \approx \frac{1}{100 \times 6.3 \times 10^{-18}\text{ cm}^2} \approx 1.6 \times 10^{15}\text{ cm} \approx 100\text{ AU} \ll R_S$$

the ionization boundary is a sharp geometric sphere.

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Forbidden line diagnostics of electron temperature and density](./Forbidden%20line%20diagnostics%20of%20electron%20temperature%20and%20density.html)
- [Primordial helium abundance from HII regions](./Primordial%20helium%20abundance%20from%20HII%20regions.html)
- [Carraro_03_HII_Regions_and_Photoionized_Gas](../../02_Literature/Lectures/Interstellar_Medium/Carraro_03_HII_Regions_and_Photoionized_Gas.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20line%20diagnostics%20of%20electron%20temperature%20and%20density.html" class="backlink-item">Forbidden line diagnostics of electron temperature and density</a></li>
    <li class="backlink-item-wrap"><a href="./Multi-phase%20structure%20of%20the%20interstellar%20medium.html" class="backlink-item">Multi-phase structure of the interstellar medium</a></li>
    <li class="backlink-item-wrap"><a href="./Primordial%20helium%20abundance%20from%20HII%20regions.html" class="backlink-item">Primordial helium abundance from HII regions</a></li>
  </ul>
</div>
