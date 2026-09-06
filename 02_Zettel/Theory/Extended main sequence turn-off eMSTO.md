---
layout: default
name: Extended main sequence turn-off eMSTO
description: broadened MS turn-off in 1-2 Gyr LMC + SMC + MW clusters, originally interpreted as age spread, now mainly attributed to stellar rotation
---

the **extended main sequence turn-off (eMSTO) phenomenon** is the discovery that intermediate-age ($\sim 1$-$2$ Gyr) star clusters in the LMC + SMC + MW show a broadened MS turn-off region, much wider than expected for a [simple stellar population](../../02_Zettel/Theory/Single stellar population SSP.html) of the same age. the TO width $\Delta V \sim 0.1$-$0.3$ mag is well-resolved with HST + JWST.

<img src="{{ "/assets/images/L18_p05_eMSTO_phenomenon-05.png" | relative_url }}" alt="L18_p05_eMSTO_phenomenon-05" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## the discovery

**Mackey & Broby Nielsen 2007, MNRAS 379, 151** first reported the eMSTO in NGC 1846 (LMC, $\sim 1.5$ Gyr). they noted that the TO region was significantly wider than the photometric uncertainty + binary effects could explain.

**Milone et al. 2009, A&A 497, 755** extended the survey to seven LMC clusters ($\sim 1$-$2$ Gyr) and found eMSTOs in all of them. later studies confirmed the phenomenon is universal in clusters of this age range:
- LMC: NGC 1755, NGC 1783, NGC 1806, NGC 1846, NGC 1850, NGC 1856, NGC 2173, etc.
- SMC: NGC 411, NGC 419, NGC 1751.
- MW: NGC 6791 (debatable, very old + metal-rich).

eMSTOs are **not seen** in old GCs ($> 5$ Gyr) and **not seen** in very young clusters ($< 30$ Myr). the phenomenon is age-restricted to $\sim 100$ Myr - $2$ Gyr.

## the original interpretation: age spread

if the TO width is age-broadening, the implied **age spread** is $\sim 200$-$500$ Myr. this would mean intermediate-age clusters are NOT SSPs but extended-SF systems.

problem with this interpretation:
1. the MS below the TO (M $< M_{\rm TO}$) is **NOT** broadened by an equivalent age spread,
2. there is no observed gas in these clusters today, despite their young age,
3. $\sim 500$ Myr SF would be enormous compared to the cluster's free-fall time + relaxation time.

so age spread alone fails to explain the data.

## the current interpretation: stellar rotation

**Bastian & de Mink 2009, MNRAS 398, L11** proposed that **stellar rotation** broadens the TO via:

1. **gravity darkening** in fast rotators: the equator is cooler than the pole due to centrifugal flattening, lowering effective $T_{\rm eff}$ for stars seen equator-on,
2. **rotational mixing**: brings fresh hydrogen from the radiative envelope to the convective core, prolonging core-H burning + shifting the TO redward + brighter,
3. **inclination effect**: same star looks bluer pole-on or redder equator-on.

quantitative models (Brandt & Huang 2015, ApJ 807, 24) reproduce the observed TO width with rotation rates $v/v_{\rm crit} = 0$ to $0.9$ distributed across the population.

key observation supporting rotation: in NGC 1755, NGC 1850, the upper MS is **bifurcated** into a blue + red sequence (Milone et al. 2018, MNRAS 477, 2640). the blue sequence is identified with slow rotators or merger products, the red sequence with fast rotators ($v_{\rm rot} \sim 200$-$300$ km/s). spectroscopic confirmation: Marino et al. 2018, AJ 156, 116 directly measured $v\sin i$ for stars on the two sequences in NGC 1866.

## age constraint: why only 1-2 Gyr clusters?

at younger ages, all stars are too hot/massive for rotational mixing to differentiate the TO meaningfully. at older ages, most stars are below the rotation-mass threshold ($M < 1.4 M_\odot$ have convective envelopes that brake rotation magnetically). so the eMSTO appears in the narrow age window where MS stars retain significant rotation but are old enough that the broadening is observable.

## connection to multiple populations in old GCs

an active question: **are eMSTO clusters the present-day analogues of what old GCs looked like at $\sim 1$-$2$ Gyr after formation?**

- old GCs show [Na-O anti-correlation](../../02_Zettel/Theory/Multiple populations in GCs discovery.html) + helium spread + chromosome maps;
- young eMSTO clusters do NOT show clear chemical anomalies (yet);
- but eMSTO + young split MS share the structural signature: **a single SSP cannot explain the CMD**.

possible reconciliation: rotation drives eMSTO at young ages, then magnetic braking reduces rotation, but residual chemical anomalies (He, Na, O) accumulated during early SF persist. this would imply the polluter mechanisms operating in old GCs (AGB, FRMS) ALSO operate in young clusters but produce chemical signatures only revealed at later times.

D'Antona et al. 2015 argued that fast rotators may be He-enriched second-generation stars: rotation $\to$ He variation $\to$ CMD broadening with both effects.

## why this matters

eMSTO is one of the **central open problems** of the course:
- it shows that the SSP framework is too simple even for clusters where it should work,
- it ties stellar rotation physics to observable CMD morphology,
- it potentially links young massive clusters to old GCs as a single evolutionary sequence,
- it is a major calibration concern for stellar population synthesis models in extragalactic studies.

## reference papers

- **Mackey & Broby Nielsen 2007, MNRAS 379, 151** — discovery in NGC 1846.
- **Milone et al. 2009, A&A 497, 755** — eMSTO in seven LMC clusters.
- **Bastian & de Mink 2009, MNRAS 398, L11** — rotation hypothesis.
- **Brandt & Huang 2015, ApJ 807, 24** — quantitative rotation models.
- **Niederhofer et al. 2015** — age-spread interpretation revisited.
- **D'Antona et al. 2015, MNRAS 453, 2637** — rotation + He variation.
- **Milone et al. 2018, MNRAS 477, 2640** — split upper MS in NGC 1755 + NGC 1850.
- **Marino et al. 2018, AJ 156, 116** — direct $v\sin i$ measurement in NGC 1866.

## see also

- [Origin of eMSTO age spread or rotation](../../02_Zettel/Theory/Origin of eMSTO age spread or rotation.html)
- [Stellar rotation effects on CMD](../../02_Zettel/Theory/Stellar rotation effects on CMD.html)
- [Splitting of the upper MS in young clusters](../../02_Zettel/Theory/Splitting of the upper MS in young clusters.html)
- [eMSTO and multiple populations connection](../../02_Zettel/Theory/eMSTO and multiple populations connection.html)
- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.html)
- [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
