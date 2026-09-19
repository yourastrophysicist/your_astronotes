---
layout: "default"
title: "Age dating from the WD luminosity function"
---
# age dating from the wd luminosity function

a simple stellar population produces white dwarfs continuously: every star massive enough to have evolved off the MS by now is sitting on the cooling sequence somewhere. because all WDs cool monotonically, the **luminosity function (LF)** of the WDCS contains a complete history of star formation in that population. the key feature is the **faint truncation**: the oldest WDs are also the dimmest, and the LF cuts off at a luminosity corresponding to the cooling time of the oldest WDs. that truncation luminosity is a direct age indicator.

## the method

the procedure (originating with Hansen et al. 2007 for NGC 6397) is:

1. obtain a deep CMD reaching well below the bottom of the WDCS in a nearby cluster. this requires HST or comparable resolution because WDs are very faint (faint absolute magnitudes around $M_{F606W} \sim 15$).
2. clean the CMD with proper motions to remove field-star contamination and identify the cluster WDCS.
3. construct the cluster-WD luminosity function in F814W or F606W.
4. compare with synthetic LFs from stellar evolution + WD cooling models (Mestel cooling plus crystallisation, plus realistic atmospheres handling [WDCS turn to blue and CIA](WDCS%20turn%20to%20blue%20and%20CIA.html)) at different ages.
5. the age that best matches the **position of the LF peak and the faint cutoff** is the WDCS age.

## NGC 6397: the textbook case

NGC 6397 is a metal-poor halo globular cluster ([Fe/H] $\approx -2.1$) and sits close enough that HST/ACS can reach its faint WDs. ![L06_p13_NGC6397_WDage.png](../../assets/images/L06_p13_NGC6397_WDage.png) Hansen et al. (2007) found
$$t_{\rm WDCS} = 11.47 \pm 0.47\;\text{Gyr},$$
in striking agreement with the main-sequence turnoff age $t_{\rm MSTO} = 11.6 \pm 1.0$ Gyr. the agreement, derived from completely different stellar physics (degenerate cooling on one side, hydrogen burning and convective core overshooting on the other), is a strong validation of both methods.

## age sensitivity

the WDCS LF is increasingly age-sensitive at old ages: the cooling slows ($t_{\rm cool} \propto L^{-5/7}$, see [White dwarf cooling theory](White%20dwarf%20cooling%20theory.html)), so the same age difference produces a larger luminosity gap as ages grow. quantitative estimates from simulations (Cassisi):
- at 12-13 Gyr, $\Delta(F606W) \sim 0.1$ mag / Gyr
- at 2-3 Gyr, $\Delta(F606W) \sim 0.4$ mag / Gyr.

at old ages, this is comparable to the sensitivity of the [HR diagram](HR%20diagram.html) main-sequence turnoff position itself.

## advantages

- nearly **metallicity-independent**. the position of the WDCS in the CMD shifts very little with [Fe/H], unlike the MS turnoff which is highly metallicity-dependent (see [Spectroscopic determination of metallicity](Spectroscopic%20determination%20of%20metallicity.html) and [Color-magnitude diagrams of clusters](Color-magnitude%20diagrams%20of%20clusters.html)).
- **independent stellar physics** from the MSTO. degenerate matter, conductive opacities, ion crystallisation; nothing to do with H burning, convection, or overshooting. agreement between the two ages is therefore a real cross-check.

## limitations

- WDs are faint, so reaching the truncation requires nearby clusters. only a handful of GCs (47 Tuc, NGC 6397, M4) and a few open clusters (NGC 6791, NGC 188) have published WDCS ages.
- WD masses depend on the IFMR (see [Initial-final mass relation IFMR](Initial-final%20mass%20relation%20IFMR.html)); errors there feed into the cooling time.
- pollution by Unresolved binary stars (WD+WD pairs in particular) produces double peaks in the LF, as in NGC 6791, and must be modelled (see [WDCS vs MSTO ages comparison](WDCS%20vs%20MSTO%20ages%20comparison.html)).

## see also
- [White dwarf cooling theory](White%20dwarf%20cooling%20theory.html)
- [WDCS turn to blue and CIA](WDCS%20turn%20to%20blue%20and%20CIA.html)
- [WDCS vs MSTO ages comparison](WDCS%20vs%20MSTO%20ages%20comparison.html)
- [Color-magnitude diagrams of clusters](Color-magnitude%20diagrams%20of%20clusters.html)
- [Initial-final mass relation IFMR](Initial-final%20mass%20relation%20IFMR.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Initial-final%20mass%20relation%20IFMR.html" class="backlink-item">Initial-final mass relation IFMR</a></li>
    <li class="backlink-item-wrap"><a href="WDCS%20turn%20to%20blue%20and%20CIA.html" class="backlink-item">WDCS turn to blue and CIA</a></li>
    <li class="backlink-item-wrap"><a href="WDCS%20vs%20MSTO%20ages%20comparison.html" class="backlink-item">WDCS vs MSTO ages comparison</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20cooling%20sequence%20on%20the%20CMD.html" class="backlink-item">White dwarf cooling sequence on the CMD</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20cooling%20theory.html" class="backlink-item">White dwarf cooling theory</a></li>
    <li class="backlink-item-wrap"><a href="White%20dwarf%20mass-radius%20relation.html" class="backlink-item">White dwarf mass-radius relation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>

