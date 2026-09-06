---
layout: default
title: "Halo mass function vs galaxy mass function"
---

# halo mass function vs galaxy mass function

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## the comparison plot

overplot, in the same axes:

- the **halo mass function (HMF)** $n(M_h)\, dM_h$, predicted from Press-Schechter or measured in N-body simulations
- the **galaxy stellar mass function (SMF)** $\phi(M_*)\, dM_*$ (see [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md))

to make them comparable, multiply each halo mass by the cosmic baryon fraction $f_b = \Omega_b/\Omega_m \approx 0.16$ to get a "maximum possible stellar mass": $M_{*,\max} = f_b\, M_h$.

even after that correction, the two curves do *not* match. the HMF predicts way more low-mass and way more high-mass systems than the SMF actually contains. the **factor-of-six gap**: at the SMF peak, the actual stellar mass is only $\sim 1/6$ of $f_b\, M_h$.

## what the mismatch looks like

| feature | HMF | SMF | reason |
|---|---|---|---|
| faint-end slope | $\alpha \approx -1.9$ | $\alpha \approx -1.2$ | low-mass halos can not retain gas (SN feedback) |
| knee position | $M_h^* \sim 10^{14}\,M_\odot$ | $M_*^* \sim 6 \times 10^{10}\,M_\odot$ | high-mass halos can not cool (AGN feedback, virial shock) |
| total integrated $M$ | huge | smaller by $\sim 6\times$ at peak | overall inefficiency of star formation |

so the "shape mismatch" is itself a clue: galaxy formation is inefficient *everywhere*, but it is *least* inefficient at one specific halo mass.

## the meeting point

the two curves are *closest* at $M_h \sim 10^{12}\,M_\odot$, which corresponds to $M_* \sim 5 \times 10^{10}\,M_\odot$. this is roughly the milky way's halo mass. it is also the [Stellar-to-halo mass ratio](../../02_Zettel/Theory/Stellar-to-halo mass ratio.md) peak.

## what this implies

galaxy formation is not a passive process where each halo collects baryons and turns them into stars. it is *throttled* by feedback at both ends:

- below $M_h \sim 10^{12}\,M_\odot$: SN winds blow gas out
- above $M_h \sim 10^{12}\,M_\odot$: virial shocks heat infalling gas above the cooling radiation threshold; AGN feedback keeps it hot

at $M_h \sim 10^{12}\,M_\odot$ neither feedback channel dominates and gas can cool, fragment, and form stars efficiently. this is the **golden mass** for galaxy formation.

## what the simulations have to do

modern galaxy formation simulations (IllustrisTNG, EAGLE, SIMBA) tune their feedback subgrid prescriptions to *reproduce* the SMF given the HMF. that is how feedback parameters are calibrated. then the prediction is everything else (color bimodality, scaling relations, scaling of feedback with $z$).

## connections

- mechanism: [Halo gravity suppression of galaxy formation](../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.md)
- the canonical figure: [Stellar-to-halo mass ratio](../../02_Zettel/Theory/Stellar-to-halo mass ratio.md)
- both functions: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md) and (course block 8) Press–Schechter formalism
- big-picture course context: [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md) block 10

## key references

- Press & Schechter 1974 (HMF)
- Sheth & Tormen 1999 (improved HMF)
- Behroozi, Wechsler, Conroy 2013, ApJ 770, 57 (SHMR)
- Wechsler & Tinker 2018 ARAA on galaxy-halo connection
