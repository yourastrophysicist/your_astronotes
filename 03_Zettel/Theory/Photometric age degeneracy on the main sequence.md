---
layout: "default"
title: "Photometric age degeneracy on the main sequence"
---
broad-band photometry tells you a star's luminosity and effective temperature. on the main sequence those two numbers barely change while the star ages, so photometry cannot read the clock. once the star leaves the main sequence the isochrones fan out and age becomes measurable. this is why isochrone ages for dwarfs are poor and for subgiants are good.

## core physical intuition

* **mass and radius** are fixed almost directly by $L$ and $T_\mathrm{eff}$ (stefan-boltzmann gives $R$; the mass-luminosity relation gives $M$). photometry plus a parallax measures these well.
* **age** is the *interior* clock: how much central hydrogen has been burned. on the main sequence the surface responds very slowly to this, so isochrones of different ages lie almost on top of each other in the $T_\mathrm{eff}$–$L$ plane.
* past the [[Main sequence turn-off as age indicator\|turnoff]] the star crosses the [[Subgiant branch SGB]] quickly and at a luminosity that depends strongly on mass, hence on age. isochrones spread apart and the same photometric error maps to a much smaller age error.

## numbers from LACHESIS

76 asteroseismic benchmark stars, split at $R = 1.5\,R_\odot$:

| | MS dwarfs ($N=44$) | subgiants ($N=32$) |
| :--- | :--- | :--- |
| median abs. age error | 37% | 19% |
| age bias | ~5% | ~8% |
| median mass error | 4.7% | 5.5% |
| median radius error | 1.2% | 1.4% |



the age error roughly halves past the turnoff while mass and radius do not care. the headline "30% age scatter" is therefore an average over two very different regimes.

two further signatures of the degeneracy:

* a spectroscopic [Fe/H] prior tightens the age posterior (median width 45.6% → 28.0%) but does **not** improve accuracy (24.7% → 22.2%, $p = 0.16$). metallicity knowledge is not what limits the age.
* in injection tests the recovered ages are biased young by 16–22% *even when the generating model is inside the ensemble*, and a single-grid fit shows the same bias. it is a property of unevolved stars, not of the averaging.

## practical rule

trust an isochrone age much more for an evolved star than for a dwarf. for dwarfs the age is floor-limited, and you need a different clock: asteroseismology, gyrochronology, activity, lithium, or cluster membership.

this is distinct from the [[Age-metallicity degeneracy]], where age and [Fe/H] trade off against each other in colour. here even perfect metallicity knowledge leaves the age poorly constrained.

## see also

- [[Stellar_Astrophysics_MOC]]
- [[Isochrones and isochrone fitting]]
- [[Main sequence on the CMD]]
- [[Stellar evolution timescales]]
- [[Stellar model grid systematics and the inter-grid floor]]
- [[Asteroseismic and eclipsing binary benchmark stars]]
- source: 2610.01931-astro.ph
