---
layout: default
name: UFDG search via deep CMD
description: matched-filter overdensity searches in colour-selected metal-poor stars on resolved photometric surveys to find new ultra-faint dwarfs
---

ultra-faint dwarfs are too sparse to find by eye on imaging data. they are diffuse stellar overdensities of just a few hundred to a few thousand stars spread over $\sim 10$-$30$ arcmin on the sky. detection requires statistical methods on **wide-field, deep, multi-band resolved photometry**. the canonical technique is the **matched filter**.

**matched filter principle** (rockosi et al. 2002, walsh, willman & jerjen 2009, koposov et al. 2008):

1. assume a target population is an old, metal-poor stellar system at some distance modulus $(m-M)_0$. pick a corresponding fiducial CMD: typically an M92-like ($[\text{Fe/H}] \approx -2.3$, $\sim 13$ Gyr) ridgeline plus an RGB and HB.
2. shift this fiducial in distance modulus to a trial value and broaden it by photometric errors to produce a probability density $P(\text{star} | \text{member})$ on the colour-magnitude plane.
3. for each star in the photometric catalogue, compute the **likelihood ratio** $w(\text{colour}, \text{magnitude}) = P(\text{member}) / P(\text{field})$, where $P(\text{field})$ is the local empirical CMD of the surrounding field.
4. weight every star by $w$ and bin spatially. true UFDGs appear as **significant peaks in the weighted star-count map**.
5. scan over $(m-M)_0$ to find the optimal distance.

**why it works**: the field foreground is dominated by main-sequence dwarfs at intermediate distances, blue/red giants at random distances, and unresolved galaxies. a metal-poor old population has a very specific, narrow blue MS and HB locus that does not match the foreground at most distances. the matched filter exploits this structural difference to suppress noise.

**surveys that fed this approach**:

- **SDSS** (2000-2009): drovekoposov et al. and willman et al. searches, $\sim 15$ new UFDGs.
- **DES** (Dark Energy Survey, 2013-2019, 5000 deg$^2$ in the south): bechtol et al. 2015, koposov et al. 2015. found reticulum ii, tucana ii/iii/iv/v, horologium i/ii, eridanus iii, etc.
- **pan-STARRS, ATLAS, HSC, DELVE**: filled in more candidates and pushed to fainter limits.
- **DECaLS / DESI legacy imaging surveys** for further coverage.
- **gaia** (DR2/DR3): not deep enough to hit faint MS, but its astrometry is decisive for **confirmation**: bona fide UFDG members share a coherent proper motion, while foreground contaminants do not.

**confirmation pipeline**: a candidate from imaging is confirmed by

1. **deeper imaging** (HST or 8m-class ground-based) to resolve a clean old MS turnoff and confirm a CMD consistent with a single old metal-poor population.
2. **multi-object spectroscopy** (DEIMOS, M2FS, FLAMES) to measure radial velocities and metallicities of $\sim 10$-$50$ candidate members, demonstrating a cold velocity dispersion ($\sigma_v \sim$ few km/s) and large $[\text{Fe/H}]$ spread.
3. **gaia proper motions** to confirm coherent kinematics and rule out foreground/background.

**what's hard**:

- contamination by tidal streams (members of a stream can produce CMD overdensities indistinguishable at first from a UFDG).
- the GC/UFDG boundary is photometrically ambiguous. structural and kinematic follow-up is required.
- low surface brightness means few stars near the centre; statistical fluctuations can mimic real systems. cross-validation across multiple surveys helps.

**LSST / rubin** will push the matched-filter approach to fainter magnitudes over the entire southern sky and is expected to roughly double the known UFDG census, enabling tests of the milky way satellite luminosity function down to $M_V \sim 0$.

the matched filter is also used in finding tidal streams (helmi streams, sgr stream) and intermediate-age dwarfs. it is one of the workhorse tools of resolved-population galactic archaeology.

see also [Ultra-faint dwarf galaxies definition](../../02_Zettel/Theory/Ultra-faint dwarf galaxies definition.html), [UFDG dark matter content](../../02_Zettel/Theory/UFDG dark matter content.html), [UFDG star formation histories](../../02_Zettel/Theory/UFDG star formation histories.html), [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html), [Halo accretion from dwarf galaxies](../../02_Zettel/Theory/Halo accretion from dwarf galaxies.html), [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
