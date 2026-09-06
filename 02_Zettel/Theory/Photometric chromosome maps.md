---
layout: default
name: Photometric chromosome maps
description: Milone's two-pseudo-color diagram from HST UV+optical photometry that cleanly separates 1G and 2G stars in nearly every GC, the central tool of modern multiple-population studies
---

the chromosome map is the diagnostic plot of multiple populations + Milone's signature contribution to the field. introduced by milone et al. 2015 + refined into a survey-wide instrument by milone et al. 2017 (the HST UV Legacy Survey of GCs, ApJ 836:14, with piotto, marino, bedin, anderson, brown, cassisi + collaborators). it takes a CMD + a color-color diagram + folds them into a single 2D plot whose two axes orthogonally separate populations by helium + nitrogen.

<img src="{{ "/assets/images/L17_p30_chromosome_map_classic-30.png" | relative_url }}" alt="L17_p30_chromosome_map_classic-30" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
*classic chromosome map from Milone et al. 2017: 1G stars cluster around (0,0); 2G stars displaced upward + leftward.*

<img src="{{ "/assets/images/L15_p05_chromosome_map_intro-05.png" | relative_url }}" alt="L15_p05_chromosome_map_intro-05" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

## construction

the chromosome map is built from five HST passbands: F275W (NUV), F336W (U), F438W (~B), F606W (V), F814W (I). it uses two pseudo-colors:

**vertical axis** (sensitive to He + light elements globally):
$$\Delta_{F275W,\, F814W}$$
defined as the rectified, dereddened color of each star in $F275W - F814W$ relative to the fiducial RGB (or MS). long baseline → strong sensitivity to $T_\text{eff}$ shifts induced by He enhancement.

**horizontal axis** (sensitive to N via NH+CN, anti-correlated with O via OH):
$$\Delta_{C\,F275W,\, F336W,\, F438W} \equiv (F275W - F336W) - (F336W - F438W)$$
this is a "magic triplet" pseudo-color centered on the OH (F275W), NH (F336W), + CN+CH (F438W) absorption regions. it is essentially a high-contrast nitrogen index. N-rich 2G stars have stronger NH absorption + weaker OH/CH, shifting them along this axis.

each star is plotted in $(\Delta_C, \Delta_{F275W,F814W})$ + the cluster's populations appear as compact knots or elongated streams.

## what the map shows

for a typical [Type I GC](../../02_Zettel/Theory/Type I and Type II GCs.html):
- a **1G clump** at $\Delta_C \approx 0$, near the bottom of the He axis: primordial composition
- a **2G stream** extending to higher $\Delta_C$ + higher $\Delta_{F275W,F814W}$: enhanced N + He
- the 2G is often itself substructured, with discrete sub-populations 2Ga, 2Gb (sometimes more)

the populations are typically **discrete** rather than smoothly continuous: distinct knots are visible in clusters like NGC 6752, NGC 2808, NGC 6121 (M4). this discreteness is itself a constraint on polluter models, since it suggests either episodic accretion of polluter ejecta or quantized dilution levels.

from Milone et al. 2015 (ApJ 808, 51), the chemical definition:
- **1G stars** display chemical abundances comparable to those of **field stars** with the same metallicity: normal Na, O, C, N, Mg, He.
- **2G stars** display anomalous abundances: enhanced Na, N, He; depleted O, C, Mg. these are the products of hot proton-capture nucleosynthesis in a previous polluter generation.

the 2G fraction $N_{2G}/N_\text{tot}$ is read directly off the map. it averages ~65% across the survey + correlates strongly with cluster mass (see [Mass dependence of multiple populations](../../02_Zettel/Theory/Mass dependence of multiple populations.html)).

## why two axes + not one

historically Na-O was the diagnostic, but it requires expensive high-resolution spectroscopy on bright giants. the chromosome map's power is that it works **photometrically**, on every star down to several mag below the MS turn-off, in clusters out to ~50 kpc, including some in M31 + the Magellanic Clouds.

the orthogonality of the axes matters. ΔF275W,F814W tracks He primarily because of the long baseline + the structural effect of He on stellar atmospheres ([Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.html)). ΔC isolates nitrogen via molecular absorption. a star can be N-rich without being He-rich (modest 2G) or both (extreme 2G), + the map separates these cases. this lets milone's group identify substructure within the 2G + define discrete populations 2Ga, 2Gb, 2Gc.

## the HST UV Legacy Survey of GCs

milone, piotto et al. 2017 published chromosome maps for 57 galactic GCs from a coordinated HST treasury program. key results:

1. **multiple populations are universal** in massive GCs: every cluster with $M > 10^{4.5}\, M_\odot$ shows a chromosome map split
2. **Type I vs Type II classification**: ~83% of clusters are Type I (single 1G + 2G); ~17% are Type II with additional structure on a parallel + redder sequence indicating Fe + s-process variations
3. **2G fraction scales with cluster mass**: $N_{2G}/N_\text{tot} \approx 0.4 + 0.1 \log_{10}(M / 10^5 M_\odot)$ approximately
4. **maximum He spread $\Delta Y_\text{max}$ scales with mass**: more massive clusters host more extreme He-enhanced sub-populations
5. **internal kinematics differ**: 2G is centrally concentrated + dynamically cooler in many clusters

## using the map for individual clusters

for a given cluster, the chromosome map is the basis for:
- counting sub-populations + defining their boundaries
- spectroscopic follow-up: select 1G + 2G targets cleanly for FLAMES / MUSE / MIKE confirmation
- constraining polluter models: discrete vs continuous distribution, He spread, N spread
- studying spatial + kinematic differences between populations using gaia or HST proper motions
- finding [Type II GCs](../../02_Zettel/Theory/Type I and Type II GCs.html) (NGC 1851, M22, M2, NGC 6934, $\omega$ Cen)

## extensions

milone et al. 2018 + marino et al. 2019 extended the chromosome map to:
- include F410M (replacing F438W where available) for sharper N sensitivity
- add JWST NIRCam filters for clusters with high reddening (e.g. terzan 5, liller 1, bulge GCs)
- map populations on the [Asymptotic giant branch AGB](../../02_Zettel/Theory/Asymptotic giant branch AGB.html) + HB, where He effects are amplified

the chromosome map is also being applied to extragalactic GCs (LMC, SMC, M31) via HST + JWST, confirming MPs are universal in old massive clusters across galaxies.

## reference papers

- **Milone et al. 2015, ApJ 808, 51** — first chromosome maps (NGC 2808).
- **Milone et al. 2015, MNRAS 455, 3009** — refined chromosome map construction.
- **Milone et al. 2017, MNRAS 464, 3636** — HST UV Legacy Survey: chromosome maps for $\sim 57$ GCs, Type I/II classification.
- **Marino, Milone et al. 2019** — chemical patterns on chromosome maps: spectroscopic validation of photometric populations.

## why it is the centerpiece of modern GC astrophysics

before the chromosome map, multiple populations were a complicated patchwork of spectroscopic anti-correlations, MS splits, + HB anomalies that were hard to compare cluster-to-cluster. the chromosome map is a single picture that compresses all of this into one diagnostic. it made the field quantitative + cluster-comparable, + it is the entry point for almost every current investigation of GC formation + evolution.

## see also

- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.html)
- [Na O anticorrelation](../../02_Zettel/Theory/Na O anticorrelation.html)
- [CN CH MgAl anticorrelations](../../02_Zettel/Theory/CN CH MgAl anticorrelations.html)
- [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.html)
- [Type I and Type II GCs](../../02_Zettel/Theory/Type I and Type II GCs.html)
- [Mass dependence of multiple populations](../../02_Zettel/Theory/Mass dependence of multiple populations.html)
- [Polluter scenarios for second-generation GC stars](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.html)
- [GC formation models with MPs](../../02_Zettel/Theory/GC formation models with MPs.html)
- [Multiple populations in extragalactic GCs](../../02_Zettel/Theory/Multiple populations in extragalactic GCs.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
