---
layout: default
name: Spectroscopic determination of metallicity
description: deriving [Fe/H] from equivalent widths or spectral synthesis, with attention to LTE and microturbulence
---

# spectroscopic determination of metallicity

the term "metallicity" usually means [Fe/H] (iron-to-hydrogen ratio relative to solar), but spectroscopists ultimately derive abundances of many individual elements. the basic ingredients are: equivalent widths (or full line profiles), atomic data (oscillator strengths, damping constants, excitation potentials), a model atmosphere defined by $T_{\rm eff}$ and $\log g$, and a microturbulence (see [Microturbulence](../../02_Zettel/Theory/Microturbulence.md) and [Atmospheric parameters Teff log g feh vmicro](../../02_Zettel/Theory/interf/Atmospheric parameters Teff log g feh vmicro.md)).

## the general strategy

at any wavelength, the line opacity of a transition $i \to j$ is
$$\kappa_\ell \propto N_i\,f_{ij},$$
where $f_{ij}$ is the oscillator strength. the population $N_i$ depends on the **abundance** $A$ (the total number density of the element relative to hydrogen), the [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md) balance between ionisation stages, and the Boltzmann distribution within a stage. once these are known, the line opacity gives a synthetic line profile (or [Equivalent width](../../02_Zettel/Theory/Equivalent width.md)) for each candidate abundance, and one picks the abundance that matches the observation.

## method 1: equivalent widths

for unblended lines, measure $W_\lambda$ from the spectrum. interpret it via the [Curve of growth](../../02_Zettel/Theory/Curve of growth.md) for that line, given $T_{\rm eff}$, $\log g$, $\xi_t$:

- weak lines: $W \propto A$ (linear regime, cleanest abundance probe).
- saturated lines: $W \propto \sqrt{\log A}$ (avoid; very weak abundance dependence).
- damped lines: $W \propto \sqrt{A}$ (sensitive to $\log g$ and damping, useful for Na, Ca, Mg D-lines).

best practice: use only **weak, unsaturated lines** in the linear regime, and average the abundance from many lines of the same species. Fe is the standard because of the dense Fe I and Fe II line forest.

abundance is then expressed on the "[X/H]" or "12-scale":
$$\log\varepsilon(X) = \log_{10}(N_X/N_H) + 12,\qquad [\text{X/H}] = \log\varepsilon_*(X) - \log\varepsilon_\odot(X).$$

## method 2: spectral synthesis

fit a synthetic spectrum to the observed one, varying [X/H] for each line or species. essential when:

- lines are blended with neighbours (the typical case in cool, metal-rich, or rotating stars).
- molecular features are present (CH G-band for [C/Fe], CN for [N/Fe], OH or [O I] 6300 for oxygen).
- the line lies in a crowded Fe-rich region.

needs a complete and accurate line list (VALD, Kurucz). often combined with $\chi^2$ minimisation over a parameter grid.

## a canonical iterative loop

because [Fe/H] couples to both $T_{\rm eff}$ (excitation balance) and $\log g$ (ionisation balance), one iterates:

1. start with a photometric guess of $T_{\rm eff}, \log g$.
2. compute Fe I and Fe II abundances line by line.
3. demand zero slope of [Fe I/H] vs $\chi_{\rm exc}$ (sets $T_{\rm eff}$, see [Spectroscopic determination of Teff](../../02_Zettel/Theory/Spectroscopic determination of Teff.md)).
4. demand zero slope of [Fe I/H] vs $\log W/\lambda$ (sets $\xi_t$).
5. demand [Fe I/H] = [Fe II/H] (sets $\log g$, see [Spectroscopic determination of log g](../../02_Zettel/Theory/Spectroscopic determination of log g.md)).
6. iterate until self-consistent.

## high-precision relative abundances: solar twins and planet formation

when comparing stars with very similar atmospheric parameters (e.g. solar twins, which have $T_{\rm eff}$, $\log g$, and $[{\rm Fe/H}]$ nearly identical to the Sun), systematic errors from model atmospheres, transition probabilities, and non-LTE effects cancel out. relative precision in spectroscopic abundances can reach **better than 0.01 dex** (Melendez et al. 2009).

this ultra-high precision has revealed subtle chemical signatures of planet formation:
- **refractory depletion in the Sun**: comparing the Sun to a sample of 11 solar twins, refractories (elements with high dust condensation temperatures, like Fe, Ni, Mg, Si, Ca) are systematically underabundant in the Sun by $\sim 0.08$ dex relative to volatiles (elements like C, N, O).
- **the planet-formation signature**: because refractories are the primary ingredients of terrestrial planets and giant planet cores, this depletion suggests that the formation of the Solar System's rocky planets locked up these elements in the protoplanetary disk, preventing them from accreting onto the Sun's surface during the final stages of pre-main sequence evolution. solar twins without rich rocky planetary systems do not show this refractory depletion, making high-precision spectroscopy a potential tool for identifying planet-hosting stars.

similar high-precision differential spectroscopy is critical for:
- identifying multiple populations within globular clusters (e.g. Marino et al. 2009 in M22).
- tracing detailed chemical pathways in the Milky Way halo and bulge.


## non-LTE and 3D corrections

[Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.md) is an approximation. for metal-poor giants, Fe I lines suffer from over-ionisation and yield abundances $\sim 0.1\text{-}0.3$ dex too low; Fe II is more robust. 3D hydrodynamic atmospheres modify the inferred [Fe/H] of the sun by $\sim 0.05$ dex (the Asplund 2009 revision). for high-precision work these corrections are now standard.

## see also
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.md)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.md)
- [Atmospheric parameters Teff log g feh vmicro](../../02_Zettel/Theory/interf/Atmospheric parameters Teff log g feh vmicro.md)
- [Spectroscopic determination of Teff](../../02_Zettel/Theory/Spectroscopic determination of Teff.md)
- [Spectroscopic determination of log g](../../02_Zettel/Theory/Spectroscopic determination of log g.md)
- [Microturbulence](../../02_Zettel/Theory/Microturbulence.md)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.md)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md)
- [Element abundance patterns](../../02_Zettel/Theory/Element abundance patterns.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
