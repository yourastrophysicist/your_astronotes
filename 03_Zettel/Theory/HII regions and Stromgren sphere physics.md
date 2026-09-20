---
layout: "default"
title: "HII regions and Stromgren sphere physics"
---
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

- [[Astrophysics_of_the_Interstellar_Medium_MOC]]
- [[Forbidden line diagnostics of electron temperature and density]]
- [[Primordial helium abundance from HII regions]]
- [[Carraro_03_HII_Regions_and_Photoionized_Gas]]



## Linked References

- [[Forbidden line diagnostics of electron temperature and density]]
- [[Multi-phase structure of the interstellar medium]]
- [[Primordial helium abundance from HII regions]]
- [[Astrophysics_of_the_Interstellar_Medium_MOC]]


