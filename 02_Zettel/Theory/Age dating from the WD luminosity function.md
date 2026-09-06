---
layout: default
name: Age dating from the WD luminosity function
description: using the truncation of the WD cooling sequence as an independent stellar-population chronometer, with NGC 6397 as the canonical case
---

# age dating from the wd luminosity function

a simple stellar population produces white dwarfs continuously: every star massive enough to have evolved off the MS by now is sitting on the cooling sequence somewhere. because all WDs cool monotonically, the **luminosity function (LF)** of the WDCS contains a complete history of star formation in that population. the key feature is the **faint truncation**: the oldest WDs are also the dimmest, and the LF cuts off at a luminosity corresponding to the cooling time of the oldest WDs. that truncation luminosity is a direct age indicator.

## the method

the procedure (originating with Hansen et al. 2007 for NGC 6397) is:

1. obtain a deep CMD reaching well below the bottom of the WDCS in a nearby cluster. this requires HST or comparable resolution because WDs are very faint (faint absolute magnitudes around $M_{F606W} \sim 15$).
2. clean the CMD with proper motions to remove field-star contamination and identify the cluster WDCS.
3. construct the cluster-WD luminosity function in F814W or F606W.
4. compare with synthetic LFs from stellar evolution + WD cooling models (Mestel cooling plus crystallisation, plus realistic atmospheres handling [WDCS turn to blue and CIA](../../02_Zettel/Theory/WDCS turn to blue and CIA.html)) at different ages.
5. the age that best matches the **position of the LF peak and the faint cutoff** is the WDCS age.

## NGC 6397: the textbook case

NGC 6397 is a metal-poor halo globular cluster ([Fe/H] $\approx -2.1$) and sits close enough that HST/ACS can reach its faint WDs. ![L06_p13_NGC6397_WDage](../../assets/images/L06_p13_NGC6397_WDage.png) Hansen et al. (2007) found
$$t_{\rm WDCS} = 11.47 \pm 0.47\;\text{Gyr},$$
in striking agreement with the main-sequence turnoff age $t_{\rm MSTO} = 11.6 \pm 1.0$ Gyr. the agreement, derived from completely different stellar physics (degenerate cooling on one side, hydrogen burning and convective core overshooting on the other), is a strong validation of both methods.

## age sensitivity

the WDCS LF is increasingly age-sensitive at old ages: the cooling slows ($t_{\rm cool} \propto L^{-5/7}$, see [White dwarf cooling theory](../../02_Zettel/Theory/White dwarf cooling theory.html)), so the same age difference produces a larger luminosity gap as ages grow. quantitative estimates from simulations (Cassisi):
- at 12-13 Gyr, $\Delta(F606W) \sim 0.1$ mag / Gyr
- at 2-3 Gyr, $\Delta(F606W) \sim 0.4$ mag / Gyr.

at old ages, this is comparable to the sensitivity of the [HR diagram](../../02_Zettel/Theory/HR diagram.html) main-sequence turnoff position itself.

## advantages

- nearly **metallicity-independent**. the position of the WDCS in the CMD shifts very little with [Fe/H], unlike the MS turnoff which is highly metallicity-dependent (see [Spectroscopic determination of metallicity](../../02_Zettel/Theory/Spectroscopic determination of metallicity.html) and [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)).
- **independent stellar physics** from the MSTO. degenerate matter, conductive opacities, ion crystallisation; nothing to do with H burning, convection, or overshooting. agreement between the two ages is therefore a real cross-check.

## limitations

- WDs are faint, so reaching the truncation requires nearby clusters. only a handful of GCs (47 Tuc, NGC 6397, M4) and a few open clusters (NGC 6791, NGC 188) have published WDCS ages.
- WD masses depend on the IFMR (see [Initial-final mass relation IFMR](../../02_Zettel/Theory/Initial-final mass relation IFMR.html)); errors there feed into the cooling time.
- pollution by Unresolved binary stars (WD+WD pairs in particular) produces double peaks in the LF, as in NGC 6791, and must be modelled (see [WDCS vs MSTO ages comparison](../../02_Zettel/Theory/WDCS vs MSTO ages comparison.html)).

## see also
- [White dwarf cooling theory](../../02_Zettel/Theory/White dwarf cooling theory.html)
- [WDCS turn to blue and CIA](../../02_Zettel/Theory/WDCS turn to blue and CIA.html)
- [WDCS vs MSTO ages comparison](../../02_Zettel/Theory/WDCS vs MSTO ages comparison.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Initial-final mass relation IFMR](../../02_Zettel/Theory/Initial-final mass relation IFMR.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
