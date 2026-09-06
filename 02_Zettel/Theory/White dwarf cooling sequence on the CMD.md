---
layout: default
name: White dwarf cooling sequence on the CMD
description: the white dwarf cooling sequence appears as a faint, blue-to-red sequence below the main sequence on a CMD, used as an independent age clock that complements the main sequence turn-off
---

the **white dwarf cooling sequence (WDCS)** is the locus of [white dwarfs](../../02_Zettel/Theory/White dwarf overview.html) on a [color-magnitude diagram](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html). it appears below the main sequence at faint magnitudes, extending $\sim 5$-$8$ mag from $M_V \sim 10$ (newly formed hot WDs) to $M_V \sim 16$-$18$ (oldest cooled WDs). because WDs evolve by simple **passive cooling**, the WDCS provides an **independent age clock** that complements the main sequence turn-off.

<img src="{{ "/assets/images/L06_p05_stellar_evolution_CMD-05.png" | relative_url }}" alt="L06_p05_stellar_evolution_CMD-05" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## location on the CMD

a typical CMD of a globular cluster shows the WDCS as a faint, blueward-curving sequence:

- WDs start out **hot + bright** (top of WDCS, $M_V \sim 10$, blue colors);
- they cool monotonically along a near-vertical track in pure-cooling models;
- at $T_{\rm eff} < 5000$ K, hydrogen-rich atmospheres turn **bluer** again due to **collision-induced absorption (CIA)** of H$_2$ in the IR;
- the WDCS thus has a characteristic **hook** at faint magnitudes (see [WDCS turn to blue and CIA](../../02_Zettel/Theory/WDCS turn to blue and CIA.html)).

<img src="{{ "/assets/images/L06_p07_WD_blueturn-07.png" | relative_url }}" alt="L06_p07_WD_blueturn-07" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## age dating from the WDCS luminosity function

the most powerful use of the WDCS is to date a cluster from the **luminosity function (LF)** of WDs. the procedure:

1. construct $N(L)$ vs $L$ for cluster WDs in $\sim 0.5$ mag bins;
2. compare to theoretical predictions from WD cooling models at various ages;
3. the location of the cutoff peak (oldest WDs) gives the cluster age.

this method is independent of the main sequence turn-off age (which depends on stellar interior physics) and provides a powerful cross-check.

<img src="{{ "/assets/images/L06_p13_NGC6397_WDage-13.png" | relative_url }}" alt="L06_p13_NGC6397_WDage-13" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## NGC 6397: the calibration cluster

**Hansen et al. 2007, ApJ 671, 380** applied this to NGC 6397 using HST/ACS deep photometry. the result:

$$t_{\rm WDCS} = 11.47 \pm 0.47 \text{ Gyr}$$

compared to the main-sequence turn-off age:

$$t_{\rm MSTO} = 11.6 \pm 1.0 \text{ Gyr}$$

the agreement is excellent + within the uncertainties. this is one of the **triumphs of stellar physics**: two completely independent age techniques (nuclear burnout vs passive cooling) give consistent ages.

## comparison with the MSTO age

| feature | MSTO age | WDCS age |
|---|---|---|
| sensitivity to age | $\sim 0.1$ mag/Gyr at old ages | $\sim 0.4$ mag/Gyr at $\sim 2$-$3$ Gyr (better young), $\sim 0.1$ mag at old |
| sensitivity to metallicity | strong (more metal $\to$ redder TO) | weak |
| sensitivity to distance | moderate | moderate |
| photometric depth | bright stars, easier | very faint, requires HST + nearby clusters |
| systematic uncertainties | atomic + nuclear cross-sections | EOS at high density, crystallisation onset |

so the two methods are **complementary**, with different systematic errors. agreement between them gives confidence in absolute cluster ages.

<img src="{{ "/assets/images/L06_p21_age_FeH_relation-21.png" | relative_url }}" alt="L06_p21_age_FeH_relation-21" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## practical observational challenges

constructing the WDCS in a globular cluster is observationally extreme:

- WDs are intrinsically **very faint** ($M_V \sim 13$-$16$);
- only **nearby clusters** ($d < 5$ kpc) allow WD photometry to the LF cutoff;
- crowding limits the field; HST-ACS or JWST-NIRCam needed;
- $\sim$ years of integration time for the deepest fields.

clusters with published WDCS ages: NGC 6397, NGC 6791, M4, NGC 6752, 47 Tuc.

<img src="{{ "/assets/images/L06_p17_WDCS_47Tuc-17.png" | relative_url }}" alt="L06_p17_WDCS_47Tuc-17" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## the metallicity advantage

a critical advantage of the WDCS: **the position of the WD cooling sequence in the CMD does not depend on the cluster metallicity** (Milone 2026, Lecture 6a). this is because the WD has shed its envelope and the core composition (CO) is insensitive to the original stellar metallicity. in contrast, the MSTO colour is strongly affected by [Fe/H] via line blanketing + opacity, creating the [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.html).

this independence makes the WDCS especially powerful for comparing relative ages of clusters with different metallicities. comparison of NGC 6397 ([Fe/H] $\sim -2.1$, metal-poor) and 47 Tuc ([Fe/H] $\sim -0.7$, metal-rich) reveals that **47 Tuc is $\sim 2$ Gyr younger** than NGC 6397 — a result directly readable from the WD LF cutoff positions, without needing to disentangle metallicity effects.

## the strange case of NGC 6791

**NGC 6791** is an old, very metal-rich open cluster ($[{\rm Fe/H}] \sim +0.3$, age $\sim 8$-$9$ Gyr from MSTO) that posed a major puzzle for WDCS dating:

1. **Bedin et al. 2005**: the first deep WDCS luminosity function suggested an age of only $\sim 2.5$ Gyr from the LF cutoff position — **grossly inconsistent** with the $\sim 8$ Gyr MSTO age. this implied either the WD cooling theory or MSTO theory was incorrect. a major challenge for stellar evolution.

2. **Bedin et al. 2008a**: deeper HST observations revealed a **second, unexpected peak** in the WDCS luminosity function. the LF was bimodal, not consistent with a single WD cooling sequence. one proposed explanation: a population of **pure-helium white dwarfs** alongside the standard CO WDs.

3. **Bedin et al. 2009**: the resolution came from recognising that **NGC 6791 hosts a large binary fraction** ($f_{\rm bin} \approx 0.32 \pm 0.03$). about 34% of WDs are in **WD-WD binary systems**. the combined luminosity of two faint WDs mimics a single brighter WD, producing the second peak in the LF. when the binary fraction is properly modelled, the WDCS age becomes consistent with the MSTO age.

this case study is a beautiful illustration of how unresolved binaries can corrupt CMD analyses — a recurring theme across stellar astrophysics ([Binary stars in CMD](../../02_Zettel/Theory/Binary stars in CMD.html)).

## why this matters

the WDCS age is the strongest single argument that:
- the universe is at least $\sim 13$ Gyr old;
- our understanding of stellar evolution is robust at the 5-10% level;
- cluster ages can be cross-validated by independent methods.

it also provides a key constraint on the early Galactic formation: GC ages tell us when the inner Galaxy assembled, with WDCS providing an independent check.

## reference papers

- **Hansen et al. 2007, ApJ 671, 380** — NGC 6397 WDCS age.
- **Mestel 1952** — original WD cooling theory.
- **Salaris & Cassisi 2006** — comprehensive review of WD cooling.
- **Bedin et al. 2005** — NGC 6791 WDCS age discrepancy.
- **Bedin et al. 2008a** — discovery of bimodal WD LF in NGC 6791.
- **Bedin et al. 2009** — WD-WD binary resolution to the NGC 6791 puzzle ($f_{\rm bin} \approx 34\%$).
- **Tremblay et al. 2019** — modern review of WD physics + ages.
- **Cassisi (private comm.)** — simulated WD cooling sequences (used as reference in lectures).

## see also

- [White dwarf overview](../../02_Zettel/Theory/White dwarf overview.html)
- [White dwarf cooling theory](../../02_Zettel/Theory/White dwarf cooling theory.html)
- [White dwarf types He CO ONeMg](../../02_Zettel/Theory/White dwarf types He CO ONeMg.html)
- [Chandrasekhar mass limit](../../02_Zettel/Theory/Chandrasekhar mass limit.html)
- [White dwarf mass-radius relation](../../02_Zettel/Theory/White dwarf mass-radius relation.html)
- [WDCS turn to blue and CIA](../../02_Zettel/Theory/WDCS turn to blue and CIA.html)
- [Age dating from the WD luminosity function](../../02_Zettel/Theory/Age dating from the WD luminosity function.html)
- [WDCS vs MSTO ages comparison](../../02_Zettel/Theory/WDCS vs MSTO ages comparison.html)
- [Initial-final mass relation IFMR](../../02_Zettel/Theory/Initial-final mass relation IFMR.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
