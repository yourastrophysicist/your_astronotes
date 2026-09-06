---
layout: default
name: Initial-final mass relation IFMR
description: the empirical mapping from progenitor ZAMS mass to white dwarf mass and what it encodes about mass loss
---

# initial-final mass relation ifmr

the initial-final mass relation (IFMR) is the empirical mapping
$$M_{\rm WD} = f(M_{\rm ZAMS})$$
between a star's zero-age main-sequence mass and the mass of the white dwarf it eventually leaves behind. it is one of the central inputs of stellar population synthesis, because it tells you how much mass is locked into compact remnants vs. returned to the interstellar medium by each generation of stars, and therefore how the chemical and dynamical history of the galaxy unfolds.

## what it encodes

most of the mass difference $M_{\rm ZAMS} - M_{\rm WD}$ is lost on the **AGB**, where dust-driven winds strip the envelope, and to a lesser extent on the RGB. so the IFMR is fundamentally a record of integrated mass loss over post-MS evolution. it depends on:

- mass-loss prescription (Reimers, Bloecker, etc.) and its metallicity dependence,
- third dredge-up and hot-bottom burning efficiency on the AGB (these set when the envelope is thin enough to be ejected),
- core-growth rate set by H- and He-shell burning,
- progenitor metallicity (metal-rich winds are typically stronger).

## empirical shape

the relation is approximately monotonic and roughly linear over a wide range:

- $M_{\rm ZAMS} \sim 1\,M_\odot \;\rightarrow\; M_{\rm WD} \sim 0.55\,M_\odot$
- $M_{\rm ZAMS} \sim 2\,M_\odot \;\rightarrow\; M_{\rm WD} \sim 0.65\,M_\odot$
- $M_{\rm ZAMS} \sim 4\,M_\odot \;\rightarrow\; M_{\rm WD} \sim 0.85\,M_\odot$
- $M_{\rm ZAMS} \sim 7\,M_\odot \;\rightarrow\; M_{\rm WD} \sim 1.0\text{-}1.1\,M_\odot$

the cutoff for forming a WD lies near $M_{\rm ZAMS} \sim 8\text{-}10\,M_\odot$. above this, carbon ignition leads either to an O-Ne-Mg WD (see [White dwarf types He CO ONeMg](../../02_Zettel/Theory/White dwarf types He CO ONeMg.md)) or to a core-collapse supernova. below $M_{\rm ZAMS} \sim 0.5\,M_\odot$, the universe is not yet old enough for these stars to have evolved off the main sequence, so the low-mass end is constrained by binary He-WD products rather than single-star evolution.

a particularly relevant fact: the **mean WD mass observed in the field is around $0.6\,M_\odot$**, dominated by progenitors near $1\,M_\odot$, since the IMF heavily weights low masses.

## how it is measured

three main observational handles:

1. **WDs in open clusters** with a well-determined turnoff age. each WD's progenitor mass is the MS mass at the cluster turnoff $M_{\rm TO}(t_{\rm cluster} - t_{\rm cool, WD})$; the WD mass is obtained spectroscopically from the Stark-broadened Balmer lines (see [Spectroscopic determination of log g](../../02_Zettel/Theory/Spectroscopic determination of log g.md)) plus the [White dwarf mass-radius relation](../../02_Zettel/Theory/White dwarf mass-radius relation.md). clusters like the Hyades, Pleiades, NGC 2168, and NGC 6791 are workhorses.

2. **wide WD-MS binaries**. assume coevality, take MS-star age, get progenitor mass.

3. **field WDs** with parallax distances and atmosphere-fitting; less direct but very large statistics from Gaia.

## why the IFMR matters

- it determines the **mean WD mass** as a function of cluster age and metallicity, which feeds into chemical evolution models and into the predicted SN Ia rates (Chandrasekhar-mass progenitors require enough merging mass; see [Chandrasekhar mass limit](../../02_Zettel/Theory/Chandrasekhar mass limit.md)).
- it sets the **lifetime fraction of mass returned to the ISM**, which is dominated by AGB mass loss.
- it is a direct test of post-MS stellar evolution and AGB mass-loss physics.
- it is needed to convert WDCS luminosity functions into ages: cooling time $t_{\rm cool}(L,M)$ depends on WD mass, so a wrong IFMR biases [Age dating from the WD luminosity function](../../02_Zettel/Theory/Age dating from the WD luminosity function.md).

current frontier: the IFMR is not perfectly monotonic. there is some evidence for a kink near $M_{\rm ZAMS} \sim 2\,M_\odot$ at solar metallicity, attributed to carbon-star formation and changes in dredge-up efficiency.

## see also
- [White dwarf overview](../../02_Zettel/Theory/White dwarf overview.md)
- [White dwarf types He CO ONeMg](../../02_Zettel/Theory/White dwarf types He CO ONeMg.md)
- [White dwarf mass-radius relation](../../02_Zettel/Theory/White dwarf mass-radius relation.md)
- [Chandrasekhar mass limit](../../02_Zettel/Theory/Chandrasekhar mass limit.md)
- [Age dating from the WD luminosity function](../../02_Zettel/Theory/Age dating from the WD luminosity function.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
