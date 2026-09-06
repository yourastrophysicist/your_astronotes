---
layout: default
title: "Cooling curve"
---

the **cooling curve** $\Lambda(T)$ is the cooling rate per particle pair as a function of temperature. plots reveal which physical mechanisms dominate at each $T$ and which features set timescales of cosmic gas processes.

## the definition

$$\Lambda(T) \equiv L(T)/(n_e n_H)\quad\text{erg cm}^3\,\text{s}^{-1}$$

where $L$ is the cooling rate per unit volume. $\Lambda$ has units of erg cm$^3$ s$^{-1}$ and depends on $T$, metallicity, ionisation state, and (for some processes) density.

## the canonical curve

for collisionally ionised plasma at solar metallicity, $\Lambda(T)$ has prominent features:

| $T$ (K) | dominant cooling | features |
|---|---|---|
| $10^4$ | H Ly$\alpha$, [OIII], [OII] | strong Ly$\alpha$ peak |
| $10^5$ | C IV, O VI, N V | UV resonance lines |
| $10^6$ | O VII, Ne VIII, Fe XVII | soft X-ray |
| $10^7$ | Fe XVII to XXIV | iron-L complex peak |
| $10^8$ | free-free continuum | featureless bremsstrahlung |
| $10^9$ | inverse Compton (in CMB) | very weak |

so the $\Lambda(T)$ curve has a complex shape with **peaks** at each ionisation transition and a smooth $T^{1/2}$ free-free background at very high $T$.

modern cooling curves: Sutherland & Dopita 1993, Smith et al. 2008, Schure et al. 2009. tabulated for various metallicities.

## the metallicity dependence

at $T \lesssim 10^7$ K, cooling is dominated by metal lines (forbidden + UV resonance). $\Lambda \propto Z$, so:
- primordial ($Z = 0$): only H Ly$\alpha$ + He cooling. $\Lambda$ cuts off sharply at $T \sim 10^4$ K (below which collisional excitation is too weak).
- solar ($Z = Z_\odot$): full forbidden-line cooling. $\Lambda$ rich with many peaks.
- $Z = 10\,Z_\odot$: super-solar gas (e.g. nuclear regions of starburst galaxies, AGN BLR).

at $T \gtrsim 10^7$ K, free-free dominates and $\Lambda$ becomes nearly metallicity-independent.

## the cooling time

the **cooling timescale** is:
$$t_{\rm cool} = \frac{3 k_B T}{2 n \Lambda(T)}$$
(approximately; full formula has factors).

at $T = 10^4$ K, $n = 100$ cm$^{-3}$, $\Lambda = 10^{-22}$ erg cm$^3$ s$^{-1}$ (solar metallicity):
$t_{\rm cool} \sim 3 \times 10^4$ yr.

at $T = 10^7$ K (cluster ICM), $n \sim 10^{-3}$, $\Lambda \sim 10^{-23}$ erg cm$^3$ s$^{-1}$:
$t_{\rm cool} \sim 10^{10}$ yr (Hubble time!) so cluster cores can cool over the age of the universe (cooling-flow problem).

at $T = 10^8$ K (very hot ICM), $t_{\rm cool}$ even longer.

## the role in galaxy formation

structure formation:
- gas in dark-matter halos shock-heats to virial temperature $T \sim 10^4$ to $10^8$ K.
- if $t_{\rm cool} < t_{\rm Hubble}$, gas cools and forms stars.
- this **cooling threshold** sets the minimum halo mass for galaxy formation:
  - **atomic-line cooling** above $T \sim 10^4$ K: halos with $T_{\rm vir} > 10^4$ K can cool. corresponds to $M_h \gtrsim 10^8\,M_\odot$.
  - **molecular cooling** below $10^4$ K (H$_2$): even smaller halos can cool. relevant for first galaxies at $z \gtrsim 20$.

## the $\Lambda(T)$ scaling at low $T$

below $T \sim 10^3$ K, cooling shifts to:
- molecular hydrogen rotational lines (no electric dipole, weak).
- metal fine-structure lines ([CII] $158\,\mu$m, [OI] $63\,\mu$m).
- dust thermal emission.

these dominate the cold ISM and molecular cloud cooling.

## see also

- [Heating rate in HII regions](../../02_Zettel/Theory/Heating rate in HII regions.html)
- [Cooling rate in HII regions](../../02_Zettel/Theory/Cooling rate in HII regions.html)
- [Equilibrium temperature](../../02_Zettel/Theory/Equilibrium temperature.html)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.html)
- [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html)
- [Photodissociation regions PDRs](../../02_Zettel/Theory/Photodissociation regions PDRs.html)
- [Metallicity and chemical evolution](../../02_Zettel/Theory/Metallicity and chemical evolution.html)
- [Galaxy clusters and overview of evolution](../../02_Zettel/Theory/Galaxy clusters and overview of evolution.html)
- [Compton and Inverse Compton](../../02_Zettel/Theory/Compton and Inverse Compton.html)
