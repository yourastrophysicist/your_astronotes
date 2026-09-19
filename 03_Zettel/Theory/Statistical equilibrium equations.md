---
layout: "default"
title: "Statistical equilibrium equations"
---
in non-LTE plasmas (HII regions, planetary nebulae, AGN narrow-line regions), atomic level populations are not given by Boltzmann + Saha. instead they're set by balance of all microscopic rates entering and leaving each level. the **statistical equilibrium (SE) equations** are this balance:

## the equation

for each level $i$:
$$n_i \sum_{j \ne i} R_{ij} = \sum_{j \ne i} n_j R_{ji}$$

where $R_{ij}$ is the transition rate from $i$ to $j$ (sum of all processes: radiative, collisional, recombinations into level $i$ from continuum, ...).

interpretation: in steady state, the total rate of leaving level $i$ equals the total rate of entering level $i$.

at fixed temperature $T_e$ and density $n_e$, this is a **linear system** in $n_i$: solve simultaneously for all levels.

## the rate matrix

practical form: for $K$ levels, the SE matrix is $K \times K$. each row balances populations into / out of one level. one row (the normalisation) is replaced by $\sum n_i = n_{\rm tot}$.

## the rates included

each transition can have multiple physical channels:
- **collisional** (electron-impact): $C_{ij} = n_e q_{ij}(T_e)$.
- **radiative permitted**: $A_{ji}$ for spontaneous emission, $B_{ij} u_\nu$ for absorption + stimulated emission.
- **radiative forbidden** (M1, E2): same form, much smaller $A$.
- **photoionisation / photorecombination**: connecting bound levels to continuum.
- **dielectronic recombination**: in highly ionised plasmas.
- **autoionisation**: relevant in some species.

modern codes (Cloudy, MAPPINGS, MOCASSIN) include all of these and solve the full SE for tens to hundreds of levels per ion.

## simplification: two-level atom

for many practical questions (forbidden line emission, single-doublet ratios), the **two-level atom** approximation (one ground + one excited) gives a useful closed-form solution. see [Two-level atom](Two-level%20atom.html) for the full derivation.

## the LTE limit

if collisions dominate and detailed balance holds, the SE equations reduce to Boltzmann + Saha at $T_e$. this is the LTE limit. away from LTE, populations are set by the radiation field as well as the collision rates.

## why this matters

the line emissivity depends on the **upper-level population**:
$$j_\nu = n_u\,A_{ul}\,h\nu_{ul} \cdot \phi(\nu)/(4\pi)$$

so to predict line strengths in non-LTE, you **must** solve SE rather than just use Boltzmann.

key examples:
- **forbidden lines** in HII regions: $A_{ul}$ is small, so the upper level is depopulated only by collisional de-excitation; SE links the population to $T_e$ and $n_e$.
- **chromospheric lines** in cool stars: radiation pumping competes with collisions; explicit NLTE.
- **stellar wind lines**: photon-driven, strongly NLTE.

## the SE algorithm in nebular codes

most photoionisation codes iterate:
1. assume an initial $T_e(r), n_e(r)$ profile.
2. solve SE for each species at each radius.
3. compute heating + cooling from the resulting line + continuum emission.
4. update $T_e(r)$ to balance heating + cooling.
5. update $n_e(r)$ from charge conservation.
6. iterate until convergence.

this is the photoionisation equilibrium calculation (Cloudy, MAPPINGS V).

## see also

- [Two-level atom](Two-level%20atom.html)
- [Collisional excitation rate](Collisional%20excitation%20rate.html)
- [Critical density](Critical%20density.html)
- [Forbidden lines](Forbidden%20lines.html)
- [Local thermodynamic equilibrium LTE](Local%20thermodynamic%20equilibrium%20LTE.html)
- [Boltzmann equation in spectroscopy](Boltzmann%20equation%20in%20spectroscopy.html)
- [Saha ionisation equation](Saha%20ionisation%20equation.html)
- [Photoionisation balance](Photoionisation%20balance.html)
- [Source function](Source%20function.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Collisional%20excitation%20rate.html" class="backlink-item">Collisional excitation rate</a></li>
    <li class="backlink-item-wrap"><a href="Critical%20density.html" class="backlink-item">Critical density</a></li>
    <li class="backlink-item-wrap"><a href="Dilution%20factor.html" class="backlink-item">Dilution factor</a></li>
    <li class="backlink-item-wrap"><a href="Forbidden%20line%20diagnostics.html" class="backlink-item">Forbidden line diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Local%20thermodynamic%20equilibrium%20LTE.html" class="backlink-item">Local thermodynamic equilibrium LTE</a></li>
    <li class="backlink-item-wrap"><a href="Optically%20thin%20recombination%20lines.html" class="backlink-item">Optically thin recombination lines</a></li>
    <li class="backlink-item-wrap"><a href="Source%20function.html" class="backlink-item">Source function</a></li>
    <li class="backlink-item-wrap"><a href="Two-level%20atom.html" class="backlink-item">Two-level atom</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

