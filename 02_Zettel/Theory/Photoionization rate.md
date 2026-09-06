---
layout: default
title: "Photoionization rate"
---

in a photoionised gas, the rate at which atoms are ionised by absorbing photons is the **photoionisation rate** $\Gamma$. central to nebular and IGM physics.

## the formula

per atom in level $i$:
$$\Gamma_i = \int_{\nu_0}^\infty \frac{4\pi J_\nu}{h\nu}\,\sigma_\nu\,d\nu$$

units: s$^{-1}$. with:
- $J_\nu$ = mean intensity (erg s$^{-1}$ cm$^{-2}$ Hz$^{-1}$ sr$^{-1}$).
- $\sigma_\nu$ = bound-free cross section (cm$^2$).
- $\nu_0$ = threshold frequency, $h\nu_0 = \chi_i$, the binding energy.

interpretation: ionisations per unit time = (photon density at frequency $\nu$ above threshold) × (cross section) × $c$, summed over all frequencies above threshold.

## the bound-free cross section

for hydrogenic atoms, near threshold:
$$\sigma_\nu \approx 6.3 \times 10^{-18}\,\text{cm}^2\,(\nu_0/\nu)^3\quad\text{above threshold}$$

so $\sigma$ decreases as $\nu^{-3}$ above threshold. the cross section is highest right at threshold, then falls off.

threshold cross section for H I:
$$\sigma_0(H) = 6.3 \times 10^{-18}\,\text{cm}^2$$

other species: $\sigma_0(He I) \approx 7.4 \times 10^{-18}$ cm$^2$, $\sigma_0(He II) \approx 1.6 \times 10^{-18}$ cm$^2$, etc. tabulated in atomic data libraries (Verner & Yakovlev 1995).

## numerical scaling

an HII region around an O5 star with $Q_{H,\rm ion} = 10^{49}$ photons/s, at distance $r = 1$ pc:
$$\Gamma \sim \frac{Q\,\bar\sigma}{4\pi r^2\,\bar h\nu} \sim \frac{10^{49} \cdot 6 \times 10^{-18}}{(4\pi)(3 \times 10^{18})^2 \cdot 2 \times 10^{-11}}$$
$\sim 0.03$ s$^{-1}$.

so a neutral H atom in the Strömgren sphere lives only $\sim 30$ seconds before being ionised again. very fast, so the equilibrium is well-established.

## photon-rate vs energy-rate forms

equivalent forms:
$$\Gamma = \int_{\nu_0}^\infty \frac{F_\nu}{h\nu}\,\sigma_\nu\,d\nu$$
where $F_\nu$ is the flux density. integrating $F_\nu/h\nu$ over $\nu$ above threshold gives the **photon-rate**.

if instead you want energy injection per ionisation, weight by $(h\nu - \chi)$:
$$G_{\rm phot} = n_X \int_{\nu_0}^\infty F_\nu\,\sigma_\nu\,(h\nu - \chi)/h\nu\,d\nu$$

this enters the **heating rate** of an HII region.

## relation to the ionisation parameter

at distance $r$ from a source of ionising photons:
$$\Gamma \approx Q \bar\sigma c/(4\pi r^2 c) = $ Q\bar\sigma/(4\pi r^2)$$

dimensional combination with $n_H$ density:
$$U \equiv \frac{Q}{4\pi r^2 n_H c}$$
the **dimensionless ionisation parameter**. controls the ionisation state of the gas. high $U$ = high $\Gamma/n_H$ = highly ionised. low $U$ = mostly neutral.

## see also

- [Collisional ionisation rate](../../02_Zettel/Theory/Collisional ionisation rate.md)
- [Recombination rate](../../02_Zettel/Theory/Recombination rate.md)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.md)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.md)
- Strömgren sphere
- [Photoelectric absorption](../../02_Zettel/Theory/Photoelectric absorption.md)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.md)
