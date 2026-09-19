---
layout: "default"
title: "Spectroscopic determination of log g"
---
# spectroscopic determination of log g

surface gravity $g = GM/R^2$ controls photospheric pressure: hydrostatic equilibrium gives $P_{\rm gas} \propto g^{2/3}$ and $P_e \propto g^{1/3}$. higher gravity means denser photospheres, more collisions, stronger pressure broadening, and shifted ionisation equilibrium. spectroscopic gravity uses these effects.

## 1. ionisation balance

the [Saha ionisation equation](Saha%20ionisation%20equation.html) relates the populations of two consecutive ionisation stages of an element to electron pressure $P_e$ (hence to gravity) and temperature:
$$\frac{N_{i+1}\,N_e}{N_i} = \frac{(2\pi m_e k T)^{3/2}}{h^3}\,\frac{2 U_{i+1}}{U_i}\,e^{-\chi_{\rm ion}/kT}.$$
the standard procedure: derive abundances from neutral and singly ionised lines of the same element (commonly Fe I and Fe II) using equivalent widths and the [Curve of growth](Curve%20of%20growth.html). the correct $\log g$ is the one that produces **the same abundance from both species**.

physical intuition for cool stars: in late-type photospheres Fe I is the minority species and Fe II the majority. raising $\log g$ raises $P_e$, which favours recombination of Fe II $\to$ Fe I, increasing Fe I lines slightly while decreasing Fe II lines markedly. ionisation balance is thus a sensitive lever on gravity.

caveats: Fe I is more affected by non-LTE, especially in metal-poor giants, where overionisation can shift the Fe I abundance and bias $\log g$ low by up to $\sim 0.5$ dex. Fe II is more reliable.

## 2. pressure-broadened wings of strong lines

very strong lines (saturated and damped) develop **Lorentzian wings** from collisional broadening (van der Waals for cool stars, Stark for hot stars). the wings sit on the [Curve of growth](Curve%20of%20growth.html) damped regime, where $W \propto \sqrt{\Gamma N}$ and $\Gamma$ scales with collisional rate $\propto n \propto P/T \propto g/T$. fitting the wing shape against model spectra gives $\log g$ directly.

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

$\log g$ separates dwarfs from giants of the same $T_{\rm eff}$ in the [HR diagram](HR%20diagram.html). it sets line-broadening systematics that propagate into all abundance work. for white dwarfs, $\log g$ together with the [White dwarf mass-radius relation](White%20dwarf%20mass-radius%20relation.html) yields the mass.

## typical precision

- ionisation balance: 0.1-1.0 dex (sensitive to non-LTE, S/N, and Fe II line count).
- strong-line wings: 0.1-0.3 dex.
- asteroseismic: 0.02-0.05 dex.

## see also
- [Atmospheric parameters Teff log g feh vmicro](interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html)
- [Spectroscopic determination of Teff](Spectroscopic%20determination%20of%20Teff.html)
- [Saha ionisation equation](Saha%20ionisation%20equation.html)
- [Saha equation and recombination](Saha%20equation%20and%20recombination.html)
- [Curve of growth](Curve%20of%20growth.html)
- [Equivalent width](Equivalent%20width.html)
- [Stellar atmosphere structure](Stellar%20atmosphere%20structure.html)
- [Local thermodynamic equilibrium LTE](Local%20thermodynamic%20equilibrium%20LTE.html)
- [White dwarf mass-radius relation](White%20dwarf%20mass-radius%20relation.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html" class="backlink-item">Atmospheric parameters Teff log g feh vmicro</a></li>
    <li class="backlink-item-wrap"><a href="Initial-final%20mass%20relation%20IFMR.html" class="backlink-item">Initial-final mass relation IFMR</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20Teff.html" class="backlink-item">Spectroscopic determination of Teff</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20metallicity.html" class="backlink-item">Spectroscopic determination of metallicity</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20spectral%20types%20OBAFGKM.html" class="backlink-item">Stellar spectral types OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20mass-radius%20relation.html" class="backlink-item">White dwarf mass-radius relation</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20overview.html" class="backlink-item">White dwarf overview</a></li>
    <li class="backlink-item-wrap"><a href="interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html" class="backlink-item">Atmospheric parameters Teff log g feh vmicro</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>

