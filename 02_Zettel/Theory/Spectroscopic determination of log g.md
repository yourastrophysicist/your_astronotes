---
layout: default
name: Spectroscopic determination of log g
description: deriving stellar surface gravity from ionisation balance and pressure-broadened wings of strong lines
---

# spectroscopic determination of log g

surface gravity $g = GM/R^2$ controls photospheric pressure: hydrostatic equilibrium gives $P_{\rm gas} \propto g^{2/3}$ and $P_e \propto g^{1/3}$. higher gravity means denser photospheres, more collisions, stronger pressure broadening, and shifted ionisation equilibrium. spectroscopic gravity uses these effects.

## 1. ionisation balance

the [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html) relates the populations of two consecutive ionisation stages of an element to electron pressure $P_e$ (hence to gravity) and temperature:
$$\frac{N_{i+1}\,N_e}{N_i} = \frac{(2\pi m_e k T)^{3/2}}{h^3}\,\frac{2 U_{i+1}}{U_i}\,e^{-\chi_{\rm ion}/kT}.$$
the standard procedure: derive abundances from neutral and singly ionised lines of the same element (commonly Fe I and Fe II) using equivalent widths and the [Curve of growth](../../02_Zettel/Theory/Curve of growth.html). the correct $\log g$ is the one that produces **the same abundance from both species**.

physical intuition for cool stars: in late-type photospheres Fe I is the minority species and Fe II the majority. raising $\log g$ raises $P_e$, which favours recombination of Fe II $\to$ Fe I, increasing Fe I lines slightly while decreasing Fe II lines markedly. ionisation balance is thus a sensitive lever on gravity.

caveats: Fe I is more affected by non-LTE, especially in metal-poor giants, where overionisation can shift the Fe I abundance and bias $\log g$ low by up to $\sim 0.5$ dex. Fe II is more reliable.

## 2. pressure-broadened wings of strong lines

very strong lines (saturated and damped) develop **Lorentzian wings** from collisional broadening (van der Waals for cool stars, Stark for hot stars). the wings sit on the [Curve of growth](../../02_Zettel/Theory/Curve of growth.html) damped regime, where $W \propto \sqrt{\Gamma N}$ and $\Gamma$ scales with collisional rate $\propto n \propto P/T \propto g/T$. fitting the wing shape against model spectra gives $\log g$ directly.

classic gravity diagnostics:

- **Mg I b triplet** at 5167-5183 Å: dominant pressure-broadened lines in FGK dwarfs.
- **Ca I 6162** and other strong neutral metal lines.
- **H Balmer wings** (H$\alpha$ wings for hot stars; in dwarfs H$\beta$ and H$\gamma$ are usable).
- **Ca II H & K** in solar-type and metal-rich stars.

for white dwarfs, Stark-broadened H Balmer lines give $\log g$ to $\sim 0.05$ dex, since the wings sit on extreme damping at $\log g \sim 8$.

## 3. asteroseismic gravity

scaling relations from solar-like oscillations give
$$g \propto \nu_{\rm max}\sqrt{T_{\rm eff}}$$
to $\sim 0.05$ dex precision, calibrated against the sun. with Kepler/TESS this is now the gold standard for FGK giants and dwarfs.

## 4. parallax + photometry (the "Gaia gravity")

if distance is known (Gaia parallax) and $T_{\rm eff}$ is known, one computes the radius from Stefan-Boltzmann, and combining with a model-based mass from isochrones gives $\log g$ directly. this is largely independent of the spectroscopic line analysis.

## why log g matters

$\log g$ separates dwarfs from giants of the same $T_{\rm eff}$ in the [HR diagram](../../02_Zettel/Theory/HR diagram.html). it sets line-broadening systematics that propagate into all abundance work. for white dwarfs, $\log g$ together with the [White dwarf mass-radius relation](../../02_Zettel/Theory/White dwarf mass-radius relation.html) yields the mass.

## typical precision

- ionisation balance: 0.1-1.0 dex (sensitive to non-LTE, S/N, and Fe II line count).
- strong-line wings: 0.1-0.3 dex.
- asteroseismic: 0.02-0.05 dex.

## see also
- [Atmospheric parameters Teff log g feh vmicro](../../02_Zettel/Theory/interf/Atmospheric parameters Teff log g feh vmicro.html)
- [Spectroscopic determination of Teff](../../02_Zettel/Theory/Spectroscopic determination of Teff.html)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html)
- [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.html)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.html)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.html)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.html)
- [White dwarf mass-radius relation](../../02_Zettel/Theory/White dwarf mass-radius relation.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
