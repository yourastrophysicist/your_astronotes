---
layout: default
title: "Collisional pressure broadening"
---

**collisional broadening** (also called pressure broadening) is the line broadening caused by perturbations from neighbouring particles passing nearby during the photon-emission process. produces a Lorentzian line profile.

## the physical picture

an atom in an excited state radiates over a finite time $\sim 1/A_{ul}$. during this time, neighbouring particles (electrons, ions, neutrals) pass close enough that their fields perturb the atom's energy levels, modulating the emitted frequency.

if collisions are frequent compared to the radiative timescale, each "burst" of radiation is shorter, by the energy-time uncertainty relation. shorter bursts $\to$ broader line.

mathematically: the perturbation truncates the radiation phase, giving a line profile:
$$\phi_{\rm coll}(\nu) = \frac{1}{\pi}\,\frac{\gamma_{\rm coll}/2}{(\nu - \nu_0)^2 + (\gamma_{\rm coll}/2)^2}$$

a Lorentzian, with the **collisional damping constant** $\gamma_{\rm coll}$.

## scaling with density

$\gamma_{\rm coll} \propto n$, the perturber density. so collisional broadening grows with pressure.

quantitatively, for an atom interacting with neutral perturbers via van der Waals forces:
$$\gamma_{\rm vdW} = C_6^{2/5} v^{3/5} n$$
with $C_6$ the van der Waals coefficient and $v$ the relative speed.

for ionic perturbers (Stark broadening of H), see [Stark broadening](../../02_Zettel/Theory/Stark broadening.md).

## astronomical examples

### dwarfs vs giants

for the same $T_{\rm eff}$, a **dwarf** has higher gas pressure (and density) than a **giant** because dwarfs are smaller and gravity is stronger. so dwarf lines have stronger collisional broadening, hence wider Lorentzian wings:

| line | dwarf | giant |
|---|---|---|
| Na I D | wide deep wings | narrow core |
| Mg I b-triplet | strong wings | sharp lines |
| H Balmer | very strong Stark wings | narrow, deep |
| Ca II H + K | extensive wings | sharp |

this is the **physical basis of luminosity classes** ([MK luminosity classes](../../02_Zettel/Theory/MK luminosity classes.md)). at fixed $T$, dwarfs have stronger pressure-broadened wings; giants have narrower lines.

### Balmer lines in OB stars

at $T \gtrsim 10\,000$ K, the dominant pressure broadening of H lines is **Stark broadening** by free electrons (not van der Waals). the line wings extend tens of Å. width-vs-$T$ allows discriminating O vs B stars.

### exoplanet atmospheres

at high gas pressure (deep atmospheric layers), molecular lines are pressure-broadened. modelling this is critical for transit spectroscopy.

## numerical comparison

at solar photosphere ($T = 6000$ K, $n_e \sim 10^{14}$ cm$^{-3}$):
- thermal Doppler width: $\sim 3$ km/s = $\Delta\lambda \sim 0.05$ Å.
- collisional width: $\gamma_{\rm coll} \sim 10^9$ Hz $\to \Delta\lambda \sim 0.001$ Å at line center.

so at the line core, **Doppler dominates**. but in the wings (where $\phi \propto 1/(\nu-\nu_0)^2$), **collisional Lorentzian wings dominate** because they fall off much more slowly than the Gaussian.

so a typical stellar absorption line has a **Gaussian core + Lorentzian wings** = Voigt profile.

## the damping parameter

defined as $a = \Gamma/(4\pi\Delta\nu_D)$, the ratio of total Lorentzian (natural + collisional) width to Doppler width. controls where the line transitions from Gaussian to Lorentzian behaviour:
- $a \ll 1$: pure Gaussian core, weak Lorentzian wings.
- $a \sim 1$: comparable, true Voigt regime.
- $a \gg 1$: Lorentzian dominates throughout.

## see also

- [Natural broadening Lorentzian](../../02_Zettel/Theory/Natural broadening Lorentzian.md)
- [Stark broadening](../../02_Zettel/Theory/Stark broadening.md)
- [Line profile function phi nu](../../02_Zettel/Theory/Line profile function phi nu.md)
- [Voigt profile](../../02_Zettel/Theory/Voigt profile.md)
- [Damping wings](../../02_Zettel/Theory/Damping wings.md)
- [Thermal Doppler broadening](../../02_Zettel/Theory/Thermal Doppler broadening.md)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.md)
- [MK luminosity classes](../../02_Zettel/Theory/MK luminosity classes.md)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.md)
