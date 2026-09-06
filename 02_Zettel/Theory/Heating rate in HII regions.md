---
layout: default
title: "Heating rate in HII regions"
---

in a photoionised nebula, **heating** comes from photoelectrons released during ionisation that share their excess kinetic energy with the local electron population. determines the equilibrium $T_e$ alongside cooling.

## the formula

for hydrogen photoionisation, each ionising photon of energy $h\nu$ leaves behind a photoelectron with kinetic energy $E = h\nu - \chi_H$. averaged over the spectrum:
$$\langle E\rangle = \int (h\nu - \chi_H)\,F_\nu/h\nu\,\sigma_\nu\,d\nu / \int F_\nu/h\nu\,\sigma_\nu\,d\nu$$

per unit volume, the heating rate is:
$$G \approx n_H\,\Gamma\,\langle E\rangle\quad\text{erg cm}^{-3}\,\text{s}^{-1}$$

(approximating; full formula has integrals over $\nu$ above threshold and over species).

equivalently, $G = n_H \int_{\nu_0}^\infty F_\nu/h\nu\,\sigma_\nu\,(h\nu - \chi)\,d\nu$.

## the average photoelectron energy

depends on the **hardness** of the ionising spectrum:
- **hot O star** ($T = 40\,000$ K): $\langle E\rangle \sim 4$ to $5$ eV.
- **cooler B star**: $\langle E\rangle \sim 1$ to $2$ eV.
- **AGN** (hard spectrum extending into X-ray): $\langle E\rangle \sim 10$ to $100$ eV.
- **very hot WR or PN central star**: $\langle E\rangle \sim 5$ to $10$ eV.

so AGN-illuminated gas heats much harder than typical star-forming HII regions.

## the heating rate scaling

for typical HII region conditions:
$G \sim n_e n_p \cdot \alpha_B \cdot \langle E\rangle$

(once recombination balances photoionisation, the rate of heat injection equals recombination rate × average energy per recombination). so:
$G \sim n_e^2 \cdot 2.6 \times 10^{-13} \cdot \langle E\rangle$

at $n_e = 100$ cm$^{-3}$, $\langle E\rangle = 4$ eV:
$G \sim 10^4 \cdot 2.6 \times 10^{-13} \cdot 6.4 \times 10^{-12}\,\text{erg/cm}^3/\text{s} \sim 1.7 \times 10^{-20}\,\text{erg/cm}^3/\text{s}$

## additional heating sources

beyond hydrogen photoionisation:
- **He I, He II photoionisation**: for very hot sources.
- **dust photoelectric heating**: UV photons absorbed by dust eject hot electrons (PDR mechanism). dominant in PDRs and partially ionised regions.
- **cosmic-ray ionisation**: small but ubiquitous.
- **magnetic / wave heating**: relevant in chromospheres.
- **X-ray heating**: AGN.

## balance with cooling

heating is balanced by **cooling** ([Cooling rate in HII regions](../../02_Zettel/Theory/Cooling rate in HII regions.md)) at the equilibrium $T_e$:
$$G(T_e) = L(T_e)$$

solving gives the local $T_e$. for typical HII regions, $T_e \approx 7000$ to $14\,000$ K.

## the relation to ionisation parameter

heating rate per atom $\propto U$. so high-$U$ regions are "hotter" in the sense of more energy per atom available, but the equilibrium $T_e$ doesn't follow this trivially because cooling also scales with abundances and $T_e$.

**low-metallicity** gas has weaker forbidden-line cooling, so equilibrium $T_e$ rises. famous: in metal-poor galaxies, $T_e \sim 15\,000$ to $20\,000$ K (vs $\sim 8000$ K at solar metallicity), making the $[OIII]\,\lambda 4363$ line easier to detect.

## see also

- [Cooling rate in HII regions](../../02_Zettel/Theory/Cooling rate in HII regions.md)
- [Equilibrium temperature](../../02_Zettel/Theory/Equilibrium temperature.md)
- [Cooling curve](../../02_Zettel/Theory/Cooling curve.md)
- [Photoionization rate](../../02_Zettel/Theory/Photoionization rate.md)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.md)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.md)
- Strömgren sphere
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.md)
