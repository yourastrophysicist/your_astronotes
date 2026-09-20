---
layout: "default"
title: "WDCS vs MSTO ages comparison"
---
# wdcs vs msto ages comparison

dating a stellar population using the white dwarf cooling sequence (WDCS) and using the main-sequence turnoff (MSTO) rests on completely different stellar physics. the WDCS reflects degenerate cooling (electron degeneracy pressure, conductive opacities, ion crystallisation; see [[White dwarf cooling theory]]), while the MSTO reflects nuclear hydrogen burning timescales for stars of about a solar mass (see [[Color-magnitude diagrams of clusters]] and [[HR diagram]]). they are sensitive to different things.

## the two clocks

**MSTO age:**
- the position of the turnoff in the CMD depends strongly on metallicity. ![L06_p19_isochrones_metallicity.png](../../assets/images/L06_p19_isochrones_metallicity.png) at fixed age, [Fe/H] from $-2$ to $+0.5$ shifts the turnoff colour by $\sim 1$ mag.
- accurate ages require accurate spectroscopic [Fe/H] (see [[Spectroscopic determination of metallicity]]) and reddening (see [[Effects of differential reddening on CMD analysis]]).
- subject to systematic uncertainties from convective core overshooting, helium abundance, and isochrone calibration.

**WDCS age:**
- the position of the cooling sequence in the CMD is **almost insensitive to metallicity**. metal-poor (NGC 6397, [Fe/H] $\sim -2.1$) and metal-rich (47 Tuc, [Fe/H] $\sim -0.7$) clusters have WDCS at nearly identical absolute magnitudes and colours, despite very different MS positions.
- depends on WD masses through the [[Initial-final mass relation IFMR]] and on atmosphere physics (especially [[WDCS turn to blue and CIA]] at the faint end).
- requires very deep, very nearby photometry; only a handful of GCs accessible.

so the two methods are nearly orthogonal in their systematics. agreement is a strong consistency test.

## case 1: NGC 6397 (textbook agreement)

Hansen et al. (2007) found $t_{\rm WDCS} = 11.47 \pm 0.47$ Gyr, while the MSTO gives $t_{\rm MSTO} = 11.6 \pm 1.0$ Gyr. the two methods agree to within $\sim 0.2$ Gyr. this is a clean validation of both, and underpins much of modern globular cluster cosmochronology.

## case 2: 47 Tuc (metal-rich GC, younger by 2 Gyr)

a comparison of the deep WDCS LFs of 47 Tuc and NGC 6397, scaled to the same distance and reddening, shows that **47 Tuc is about 2 Gyr younger** than NGC 6397. ![L06_p17_WDCS_47Tuc.png](../../assets/images/L06_p17_WDCS_47Tuc.png) this fits a picture in which the metal-rich (inner-halo / disk) clusters formed later than the metal-poor (outer-halo) clusters, consistent with rapid chemical enrichment in the inner Galaxy followed by prolonged accretion of metal-poor outer-halo clusters from dwarf-galaxy progenitors. ![L06_p21_age_FeH_relation.png](../../assets/images/L06_p21_age_FeH_relation.png)

## case 3: NGC 6791 (the strange case)

the open cluster NGC 6791 ([Fe/H] $\sim +0.4$, age $\sim 8$ Gyr from the MSTO; Bedin et al. 2008) showed an early WDCS age of only **2.5 Gyr** (Bedin et al. 2005). this looked like a 5 Gyr discrepancy and was a major challenge to stellar evolution. proposed explanations:

1. **a population of helium-core WDs** (Hansen 2005). if mass loss on the RGB is severe enough to skip the helium flash, the cluster produces $\sim 0.5\,M_\odot$ pure-He WDs that cool more slowly than CO WDs, biasing the LF bright. NGC 6791 does have an unusually populated extreme HB consistent with strong RGB mass loss.

2. **WD+WD binaries**. deeper HST reached a second peak in the WDCS LF (Bedin et al. 2009). the LF was reproduced by a model in which $\sim 34\%$ of the WDs are in unresolved double-WD systems, brightening them by up to $0.75$ mag. with this binary correction the WDCS age comes out consistent with the MSTO age. the double LF peak is just the binary sequence parallel to the single-WD sequence.

NGC 6791 is now seen as a striking demonstration of what binaries do to the WDCS, not as a failure of stellar evolution.

## summary

|method|strong points|sensitive to|
|-|-|-|
|MSTO|works at any distance, well-developed isochrones|[Fe/H], reddening, He, overshooting|
|WDCS|nearly metallicity-free, independent physics|nearby only, IFMR, atmosphere physics, binaries|

the two together provide robust, cross-validated ages of the oldest stellar populations, and any disagreement is itself astrophysically informative.

## see also
- [[Age dating from the WD luminosity function]]
- [[White dwarf cooling theory]]
- [[Initial-final mass relation IFMR]]
- [[WDCS turn to blue and CIA]]
- [[Color-magnitude diagrams of clusters]]
- [[HR diagram]]
- [[Stellar_Astrophysics_MOC]]



## Linked References

- [[Age dating from the WD luminosity function]]
- [[White dwarf cooling sequence on the CMD]]
- [[White dwarf cooling theory]]
- [[White dwarf types He CO ONeMg]]
- [[Stellar_Astrophysics_MOC]]


