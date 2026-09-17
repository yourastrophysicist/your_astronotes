---
layout: "default"
title: "Effects of differential reddening on CMD analysis"
name: "Effects of differential reddening on CMD analysis"
description: "how spatially-varying interstellar reddening artificially broadens cluster sequences on the CMD, mimicking metallicity spreads and multiple populations, and must be corrected before MP analysis"
---
{% raw %}
**differential reddening (DR)** is one of the dominant sources of systematic error in resolved cluster CMD analysis. it broadens main sequence + RGB + HB ridges and can mimic real physical phenomena (metallicity spread, [multiple populations](./Multiple%20populations%20in%20GCs%20discovery.html), [eMSTO](./Extended%20main%20sequence%20turn-off%20eMSTO.html)). diagnosing + correcting DR is critical before any chromosome-map analysis.

## the basic effect

each star sits at a specific spatial position $(x, y)$ in the cluster field. the line-of-sight column density of dust varies on $\sim 1$"-$10$"-$1$' scales, so different stars see different reddening:

$$E(B-V)_i = \langle E(B-V) \rangle + \delta_i$$

with $\delta_i$ ranging from $-3\sigma$ to $+3\sigma$. each star's CMD position is shifted along the [reddening vector](./Interstellar%20reddening%20and%20the%20reddening%20vector.html) by an amount proportional to $\delta_i$.

result: the cluster MS, RGB, HB on the CMD become **broadened** vertically + horizontally along the reddening vector.

## what DR mimics

| mimicked phenomenon | DR signature | distinguishing feature |
|---|---|---|
| metallicity spread | broadens RGB + MS | DR shift along reddening vector, NOT iso-metallicity locus |
| [multiple populations](./Multiple%20populations%20in%20GCs%20discovery.html) | broadens MS + RGB | DR has spatial coherence; MPs are independent of position |
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

[Photometric chromosome maps](./Photometric%20chromosome%20maps.html) rely on UV photometry where dust extinction is strongest. the chromosome-map axes:

- $\Delta_{F275W,F814W}$ (vertical, He-sensitive)
- $\Delta_{C\,F275W,F336W,F438W}$ (horizontal, N-sensitive)

both depend on UV photometry that is most affected by extinction. for a GC with $\sigma_{E(B-V)} = 0.05$:
- typical chromosome-map axis spread from DR alone $\sim 0.05$ mag;
- typical real 1G-2G separation $\sim 0.10$-$0.20$ mag.

so DR contributes $\sim 25$-$50\%$ of chromosome map width if uncorrected. correcting DR sharpens the chromosome map dramatically and reveals the underlying 1G + 2G discreteness.

## the inner Galactic context

DR is severe in:
- bulge + bulge GCs (NGC 6528, NGC 6553, Liller 1, Terzan 5);
- inner halo + disc fields ($\lvert b\rvert < 10^\circ$);
- young LMC + SMC clusters near the Magellanic Stream + 30 Doradus.

in these fields, even a tight CMD ridge has DR-induced scatter $\sigma \sim 0.05$-$0.15$ mag. without DR mapping (see [Differential reddening maps](./Differential%20reddening%20maps.html)), no chromosome map is publishable.

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

- [Differential reddening maps](./Differential%20reddening%20maps.html)
- [Interstellar reddening and the reddening vector](./Interstellar%20reddening%20and%20the%20reddening%20vector.html)
- [Extinction law and Rv](./Extinction%20law%20and%20Rv.html)
- [Bulge CMD complications](./Bulge%20CMD%20complications.html)
- [Photometric chromosome maps](./Photometric%20chromosome%20maps.html)
- [Multiple populations in GCs discovery](./Multiple%20populations%20in%20GCs%20discovery.html)
- [Color-magnitude diagrams of clusters](./Color-magnitude%20diagrams%20of%20clusters.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Bulge%20CMD%20complications.html" class="backlink-item">Bulge CMD complications</a></li>
    <li class="backlink-item-wrap"><a href="./Differential%20reddening%20maps.html" class="backlink-item">Differential reddening maps</a></li>
    <li class="backlink-item-wrap"><a href="./Element%20abundance%20patterns.html" class="backlink-item">Element abundance patterns</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20determination%20of%20Teff.html" class="backlink-item">Spectroscopic determination of Teff</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./The%20Galactic%20Bulge.html" class="backlink-item">The Galactic Bulge</a></li>
    <li class="backlink-item-wrap"><a href="./WDCS%20vs%20MSTO%20ages%20comparison.html" class="backlink-item">WDCS vs MSTO ages comparison</a></li>
  </ul>
</div>
