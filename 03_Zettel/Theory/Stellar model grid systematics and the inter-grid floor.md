---
layout: "default"
title: "Stellar model grid systematics and the inter-grid floor"
---
give the same star to two different stellar evolution grids and you get two different masses and ages. this **choice-of-grid systematic** is often as large as the statistical error any one pipeline reports, and a single-grid fit cannot see it at all.

## core physical intuition

stellar evolution codes disagree on input physics that is not settled:

* treatment of convection (mixing length) and convective overshooting
* microscopic diffusion
* rotation
* helium enrichment law and the adopted solar mixture
* opacities and nuclear reaction rates

each of these moves tracks in the [[HR diagram]], so the same observed $(T_\mathrm{eff}, L, [\mathrm{Fe/H}])$ maps to a different $(M, \tau)$. even "[Fe/H]" is not a common language: each grid has its own solar reference and $[\mathrm{Fe/H}] \rightarrow Z$ mapping, so at fixed [Fe/H] the metal mass fraction spans $\sim 0.06$ dex (from $Z = 0.014$ in MIST to $0.016$ in Dartmouth).

## how big is it

literature floors, including input data, code and pipeline differences:

| source | radius | mass | age |
| :--- | :--- | :--- | :--- |
| serenelli et al. 2017 | 1.2–1.6% | 3–4.4% | 12–28% |
| tayar et al. 2022 | — | ~5% | ~20% |

LACHESIS inter-grid scatter (standard deviation of the five grid medians at *fixed input*, median over 76 stars):

| | radius | mass | age |
| :--- | :--- | :--- | :--- |
| inter-grid scatter | ~0.3% | ~1.7% | ~9% |

the LACHESIS numbers sit below the literature floors, and that is expected: swapping only the grid while holding the data, bolometric corrections and pipeline fixed gives a **lower bound** on the model-dependent error. it is also blind to anything all five grids get wrong together.

the scatter is a property of the ensemble, not of one bad grid: dropping any one grid leaves it essentially unchanged.


## no single grid is "the accurate one"

per-grid median age bias against the asteroseismic reference:

| grid | with [Fe/H] prior | without prior |
| :--- | :--- | :--- |
| MIST | +0.2% | −30.9% |
| PARSEC | +4.1% | −19.5% |
| Dartmouth | +10.6% | −3.7% |
| YaPSI | +8.9% | −3.5% |
| BaSTI | +6.3% | +6.8% |



MIST looks perfect with the metallicity prior and is the worst without it, so its near-zero bias is a coincidence. also the asteroseismic reference is itself model-derived, so the zero-point of the bias is not an absolute statement about isochrone ages. the trustworthy quantity is the inter-grid *scatter*.

## what to do about it

* traditional: run several grids, quote the spread as a separate systematic
* Bayesian model averaging: weight each grid by its evidence and marginalise, so the systematic lands inside one posterior. the split between data and model terms is given by the Law of total variance for mixture posteriors

for age the model term is about 11% of the total variance: real, but subdominant to the [[Photometric age degeneracy on the main sequence]].

## astrophysical context

* exoplanet hosts: planet radius and mass inherit the stellar ones, and system age sets the evolutionary context
* galactic archaeology: population ages from field stars
* habitable worlds observatory target lists, where asteroseismic age systematics are already comparable to the formal errors (~10–20%)

## see also

- [[Stellar_Astrophysics_MOC]]
- [[Isochrones and isochrone fitting]]
- [[Equivalent evolutionary phase EEP]]
- [[Age-metallicity degeneracy]]
- [[Asteroseismic and eclipsing binary benchmark stars]]
- source: 2610.01931-astro.ph
