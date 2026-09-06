---
layout: default
name: Bulge CMD complications
description: field star contamination + differential reddening + crowding making bulge CMD analysis hard, with HST proper motions + cluster ridge DR maps as the main mitigations
---

reading the CMD of the [Galactic bulge](../../02_Zettel/Theory/The Galactic Bulge.md) is one of the hardest problems in resolved-stellar-population astronomy. the bulge is bright + crowded + dust-obscured + behind the disk, and every standard CMD-fitting assumption gets stressed.

## the four main complications

### 1. foreground disk contamination

the bulge sits behind the Galactic disk. along any sight line, foreground disk MS + RC stars overlay the bulge CMD. specifically:

- disk MS contaminates the bulge MS at slightly bluer colours,
- disk RC contaminates the bulge RC clump,
- only the bulge RGB + bulge TO are relatively clean.

without proper-motion or spectroscopic membership, the bulge MS turn-off (most age-sensitive) is diluted by interlopers.

### 2. differential reddening

bulge sight lines have $A_V \sim 1$-$30$ mag, varying on arcminute scales due to molecular cloud structure. the typical scatter is $\sigma_{E(B-V)} \sim 0.05$-$0.2$ across an HST field. this artificially broadens the MS + RGB and can:

- mimic spread in metallicity,
- mimic spread in age (if interpreted as TO width),
- mimic [multiple populations](../../02_Zettel/Theory/Multiple populations in GCs discovery.md).

correction strategy: use cluster member ridge or RC ridge as an empirical reddening tracer (Lagioia et al. 2014, Milone et al. 2012). the cluster ridge gives a high-resolution $\delta E(B-V)$ map across the field, which is then applied to non-cluster bulge stars.

### 3. extreme crowding

stellar density at the Galactic centre is $> 10^7$ stars/deg$^2$. at HST resolution this means PSF blending begins to matter even with WFC3-UVIS or ACS. JWST/NIRCam improves this in the IR but reddens the colours.

practical effects:
- photometric errors are systematic + non-Gaussian,
- faint blends mimic binaries on the CMD,
- artificial star tests are essential to characterise completeness + photometric scatter.

### 4. distance gradient + bar geometry

the bulge has depth: the front edge is $\sim 7$ kpc, the back edge $\sim 9$ kpc. this $\sim 0.6$ mag distance modulus spread broadens the CMD vertically. the bar tilts the iso-distance surface so that opposite sides of the field are at different $d$.

correction: assume a mean distance + distance dispersion when fitting isochrones, or use bulge RC stars as standard candles to infer distance gradient.

## the standard solution: PM-cleaned, DR-corrected CMD

the workflow that handles complications 1-2 (and partially 3-4) is:

1. multi-epoch HST imaging (e.g., HST WFC3-UVIS, $\sim 5$ year baseline);
2. measure relative proper motions of $\sim 10^4$ stars per field (typical precision $\sim 0.3$ mas/yr per epoch);
3. select bulge members ($\mu_l < -2$ mas/yr or similar cut);
4. use a globular cluster in the field (e.g., NGC 6528) as a reddening tracer;
5. derive a high-resolution differential-reddening map from cluster member offsets in the CMD;
6. apply the DR correction to all stars;
7. fit isochrones to the cleaned + corrected bulge CMD.

this is the workflow used by Clarkson et al. 2008, Lagioia et al. 2014, Renzini et al. 2018.

## what the cleaned CMD looks like

after DR correction + PM cleaning, the bulge field shows a tight RGB, RC, MS, MS turn-off, and SGB. the residual width of the MS is consistent with stellar evolution + measurement noise + a small intrinsic spread in $[{\rm Fe/H}]$, supporting an old + metal-rich population without strong age spread. compare this to the obviously continuous CMD of the bulge (Lagioia et al. 2014) versus the discrete-population CMD of NGC 2808 (Milone et al. 2015): the bulge does NOT show the discrete chromosome-map split that GCs show.

## why this matters for the course

the bulge is the high-metallicity stress test of CMD analysis. mastering the proper-motion + differential-reddening + crowding chain is essential because:

- the same techniques apply to LMC / SMC clusters viewed through dust,
- they apply to GCs in the inner halo (e.g., NGC 6528, NGC 6553),
- they are required for any resolved-population study at $|b| < 10^\circ$.

## reference papers

- **Clarkson et al. 2008, ApJ 684, 1110**: HST PM-cleaned CMD, $\sim 11$ Gyr age, $< 5\%$ stars younger than 5 Gyr.
- **Valenti et al. 2013, A&A 559, A98**: statistical decontamination via reference field subtraction.
- **Lagioia et al. 2014, ApJ 782, 50**: high-resolution differential-reddening map via NGC 6528 cluster ridge.
- **Renzini et al. 2018, ApJ 863, 16**: five-band HST photometry + reddening-free pseudo-colour diagrams.
- **Milone et al. 2012**: differential-reddening map technique applied to GCs.

## see also

- [The Galactic Bulge](../../02_Zettel/Theory/The Galactic Bulge.md)
- [Bulge microlensing surveys](../../02_Zettel/Theory/Bulge microlensing surveys.md)
- [Effects of differential reddening on CMD analysis](../../02_Zettel/Theory/Effects of differential reddening on CMD analysis.md)
- [Differential reddening maps](../../02_Zettel/Theory/Differential reddening maps.md)
- [Interstellar reddening and the reddening vector](../../02_Zettel/Theory/Interstellar reddening and the reddening vector.md)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
