---
layout: default
name: Effects of differential reddening on CMD analysis
description: how spatially-varying interstellar reddening artificially broadens cluster sequences on the CMD, mimicking metallicity spreads and multiple populations, and must be corrected before MP analysis
---

**differential reddening (DR)** is one of the dominant sources of systematic error in resolved cluster CMD analysis. it broadens main sequence + RGB + HB ridges and can mimic real physical phenomena (metallicity spread, [multiple populations](../../02_Zettel/Theory/Multiple populations in GCs discovery.html), [eMSTO](../../02_Zettel/Theory/Extended main sequence turn-off eMSTO.html)). diagnosing + correcting DR is critical before any chromosome-map analysis.

## the basic effect

each star sits at a specific spatial position $(x, y)$ in the cluster field. the line-of-sight column density of dust varies on $\sim 1$"-$10$"-$1$' scales, so different stars see different reddening:

$$E(B-V)_i = \langle E(B-V) \rangle + \delta_i$$

with $\delta_i$ ranging from $-3\sigma$ to $+3\sigma$. each star's CMD position is shifted along the [reddening vector](../../02_Zettel/Theory/Interstellar reddening and the reddening vector.html) by an amount proportional to $\delta_i$.

result: the cluster MS, RGB, HB on the CMD become **broadened** vertically + horizontally along the reddening vector.

## what DR mimics

| mimicked phenomenon | DR signature | distinguishing feature |
|---|---|---|
| metallicity spread | broadens RGB + MS | DR shift along reddening vector, NOT iso-metallicity locus |
| [multiple populations](../../02_Zettel/Theory/Multiple populations in GCs discovery.html) | broadens MS + RGB | DR has spatial coherence; MPs are independent of position |
| age spread | broadens TO | DR also broadens lower MS, age spread should not |
| binary fraction | scatters above MS | DR scatters along reddening vector, not just upward |

so a careful DR analysis can disentangle real cluster physics from dust artifacts.

## the diagnostic test

to determine if a CMD broadening is DR or physical:

1. divide the cluster field into spatial subregions (e.g., $4 \times 4$ grid);
2. construct CMDs in each subregion;
3. measure mean offset of each subregion CMD from the cluster fiducial;
4. plot mean offset vs spatial position.

if offsets correlate with position (and the correlation direction matches the reddening vector), DR is the cause. if no spatial correlation, the broadening is intrinsic.

this test is the **first thing** to do before claiming any chromosome-map split or multiple-population signal in an inner-Galactic cluster.

## the impact on chromosome maps

[Photometric chromosome maps](../../02_Zettel/Theory/Photometric chromosome maps.html) rely on UV photometry where dust extinction is strongest. the chromosome-map axes:

- $\Delta_{F275W,F814W}$ (vertical, He-sensitive)
- $\Delta_{C\,F275W,F336W,F438W}$ (horizontal, N-sensitive)

both depend on UV photometry that is most affected by extinction. for a GC with $\sigma_{E(B-V)} = 0.05$:
- typical chromosome-map axis spread from DR alone $\sim 0.05$ mag;
- typical real 1G-2G separation $\sim 0.10$-$0.20$ mag.

so DR contributes $\sim 25$-$50\%$ of chromosome map width if uncorrected. correcting DR sharpens the chromosome map dramatically and reveals the underlying 1G + 2G discreteness.

## the inner Galactic context

DR is severe in:
- bulge + bulge GCs (NGC 6528, NGC 6553, Liller 1, Terzan 5);
- inner halo + disc fields ($|b| < 10^\circ$);
- young LMC + SMC clusters near the Magellanic Stream + 30 Doradus.

in these fields, even a tight CMD ridge has DR-induced scatter $\sigma \sim 0.05$-$0.15$ mag. without DR mapping (see [Differential reddening maps](../../02_Zettel/Theory/Differential reddening maps.html)), no chromosome map is publishable.

## correction strategies

1. **cluster ridge mapping** (Milone et al. 2012): most-used.
2. **RC star mapping**: red clump stars are standard candles; their dispersion measures DR.
3. **field-star mapping**: Gaia-based reddening from background K-dwarfs (Pan-STARRS, 2MASS).
4. **iterative CMD fitting**: jointly fit cluster physics + DR map.

the choice depends on the field: cluster ridge is best for old, populated GCs; RC mapping for the bulge + intermediate-age clusters; field-star mapping for very sparse clusters.

## why this matters

failing to correct DR has produced spurious "multiple populations" or "age spread" claims in many inner-Galactic clusters since the 1990s. modern Milone-style analysis treats DR correction as **the first step** before any chromosome map or population analysis. it is now standard practice in:

- HST UV Legacy Survey of Galactic GCs (Milone et al. 2017);
- SUMO survey (Bulge ATLAS);
- LMC + SMC cluster analyses;
- Gaia + JWST follow-ups.

## reference papers

- **Milone et al. 2012, A&A 540, A16** — DR mapping technique + applications to 59 GCs.
- **Lagioia et al. 2014, ApJ 782, 50** — high-resolution Baade Window + NGC 6528 map.
- **Cardelli, Clayton, Mathis 1989** — extinction law.
- **Schlegel, Finkbeiner, Davis 1998** — SFD all-sky DR map.
- **Schlafly & Finkbeiner 2011** — recalibrated SFD.
- **Milone et al. 2017, MNRAS 464, 3636** — DR correction as standard step in chromosome map construction.

## see also

- [Differential reddening maps](../../02_Zettel/Theory/Differential reddening maps.html)
- [Interstellar reddening and the reddening vector](../../02_Zettel/Theory/Interstellar reddening and the reddening vector.html)
- [Extinction law and Rv](../../02_Zettel/Theory/Extinction law and Rv.html)
- [Bulge CMD complications](../../02_Zettel/Theory/Bulge CMD complications.html)
- [Photometric chromosome maps](../../02_Zettel/Theory/Photometric chromosome maps.html)
- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
