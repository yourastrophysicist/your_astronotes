---
layout: default
title: "IR SFR tracer"
---

# IR SFR tracer

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.md)

## the principle

young massive stars produce most of their luminosity in the UV. in any galaxy with non-trivial dust, a large fraction of that UV is absorbed by interstellar dust grains and re-emitted as thermal FIR in the $10$–$1000\,\mu$m range. so integrating *all* the re-emitted IR recovers the bolometric UV that was absorbed.

define the total IR luminosity:

$$L_{\text{TIR}} \equiv \int_{8 \mu\text{m}}^{1000 \mu\text{m}} L_\nu\, d\nu$$

and Kennicutt 1998 gives the calibration:

$$\text{SFR}\;[M_\odot/\text{yr}] = 4.5 \times 10^{-44}\, L_{\text{TIR}}\;[\text{erg}/\text{s}]$$

valid for a fully obscured, continuous starburst with Salpeter IMF over $0.1$–$100\,M_\odot$.

## why this is the gold standard

- **extinction-immune by construction**: the absorbed photons *are* the tracer. an IR-only measurement is independent of dust column density
- covers the entire bolometric budget of a dusty starburst
- Pablo uses his own Pérez-González 2006 SED-fitting of M81 to illustrate the decomposition into stellar + PAH + cold dust (big-grain $T \sim 20$ K) + warm dust ($T \sim 50$–$70$ K)

## ingredients and caveats

- requires *sampling* the full FIR SED. a single photometric point is not enough because the SED peak shifts with dust temperature: warmer galaxies peak at $\sim 60\,\mu$m, cooler at $\sim 150\,\mu$m
- templates (Chary-Elbaz 2001, Dale-Helou 2002, Draine & Li 2007, Rieke 2009, Magdis 2012) convert one or two photometric points into $L_{\text{TIR}}$
- **AGN contamination**: a buried AGN heats dust to hot ($> 200$ K) and spikes the MIR (3–30 μm). Decomposition via Donley 2012 colour cuts, X-ray cross-match, or SED fitting (CIGALE, MAGPHYS)
- **cirrus contamination**: low-$z$ galaxies have a diffuse "cirrus" dust component heated by the old stellar population, not by SF. contributes at low SFR and causes TIR to *overestimate* SFR in quiescent systems

## only UV-obscured SF

strictly, TIR only counts the UV that was *absorbed*. in a galaxy where significant UV escapes unextincted, SFR(TIR) underestimates total SFR. the solution is the "hybrid" UV + IR tracer:

$$\text{SFR}_{\text{total}} = \text{SFR}(\text{UV, observed}) + \text{SFR}(\text{TIR})$$

this additive recipe (Bell 2005, Kennicutt 2009) is the best single-galaxy SFR in the literature.

## sensitivity issues at high z

- FIR is hard: Spitzer MIPS ($24\,\mu$m) individually detected galaxies to $z \sim 2$
- Herschel (PACS + SPIRE) pushed to $z \sim 3$
- ALMA now detects dust continuum out to $z = 7$–$8$ at $850\,\mu$m; single-band fit plus modified blackbody is the standard procedure

## connections

- the partner: [UV SFR tracer](../../02_Zettel/Theory/UV SFR tracer.md)
- replacement without FIR: [UV slope and IRX-beta relation](../../02_Zettel/Theory/UV slope and IRX-beta relation.md)
- extreme IR-bright objects: [LIRGs ULIRGs HyLIRGs](../../02_Zettel/Theory/LIRGs ULIRGs HyLIRGs.md)
- comparison: [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.md)
- integral: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)

## key references

- Kennicutt 1998 ARAA
- Pérez-González et al. 2006 ApJ (M81 SED)
- Draine & Li 2007 ApJ 657, 810 (dust emission model)
- Magdis et al. 2012
- Casey et al. 2014 (dust SED review)
