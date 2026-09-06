---
layout: default
name: Differential reddening maps
description: technique for mapping spatial variations in interstellar reddening across a star cluster field using cluster member ridge offsets, developed by Milone et al. 2012
---

**differential reddening (DR)** is the spatial variation in interstellar reddening $E(B-V)$ across a star cluster field, caused by patchy dust distribution along the line of sight. it artificially broadens cluster sequences (MS, RGB, HB) on the CMD and can mimic [multiple populations](../../02_Zettel/Theory/Multiple populations in GCs discovery.md) or metallicity spreads. a high-resolution DR map allows correction.

## the Milone et al. 2012 method

the standard DR-mapping technique was developed by **Milone et al. 2012, A&A 540, A16** and is now used routinely in cluster CMD analysis. it works as follows:

### step 1: define a fiducial CMD ridge

select a clean cluster region (e.g., the MS in a single small subfield) + identify cluster members via PM or membership probability. fit a smooth fiducial line (median ridge) through the MS or RGB locus on the CMD.

### step 2: compute per-star CMD offsets

for each cluster member star at position $(x, y)$, measure its perpendicular displacement from the fiducial line in the direction of the **reddening vector**. the displacement is interpreted as a local extra reddening:

$$\Delta E(B-V)(x, y) = \frac{\Delta_{\rm offset}}{R_V}$$

(see [Interstellar reddening and the reddening vector](../../02_Zettel/Theory/Interstellar reddening and the reddening vector.md) for the geometry).

### step 3: interpolate spatial map

bin the cluster field into a $30 \times 30$ to $100 \times 100$ pixel grid, take the median $\Delta E(B-V)$ in each bin, smooth with a Gaussian kernel of $\sim 1$"-$10$" depending on dust structure scale.

### step 4: correct the photometry

for every star in the field (cluster member + non-member), apply $A_\lambda(\Delta E(B-V))$ to its photometry.

## applications

the technique has been applied to:

- **NGC 6791, NGC 6528, NGC 6553, M22, M2, $\omega$ Cen** — many MW GCs with substantial DR.
- **Baade Window** (Lagioia et al. 2014, ApJ 782, 50) — bulge field with NGC 6528 as DR tracer; high-resolution map across $\sim 4'$ HST/ACS field.
- **young LMC clusters** with eMSTOs to disentangle DR from rotation effects.
- **inner halo / disc fields** through dust lanes.

## results: typical DR amplitudes

typical $\sigma_{E(B-V)}$ across a single GC field:

| cluster | $\langle E(B-V) \rangle$ | $\sigma_{E(B-V)}$ |
|---|---|---|
| NGC 6791 (open) | 0.15 | 0.02 |
| NGC 6528 (bulge GC) | 0.55 | 0.06 |
| Baade Window | 0.5 | 0.1 |
| Liller 1 (bulge inner) | 3 | 0.3 |
| dust-free outer halo (e.g., NGC 5466) | 0.01 | $< 0.01$ |

the worst DR fields are inner-Galactic (bulge + bulge GCs), reaching $\sigma \sim 0.3$ across $\sim 1$' fields. without correction, this broadens the MS by $\sim 0.5$ mag, completely obscuring chromosome map signals.

## why this matters for multiple populations

in a typical inner-bulge GC, raw photometry shows an MS broadened by DR + intrinsic MP signal both at $\sim 0.05$-$0.15$ mag level. only after DR correction does the MP signature become visible. critically:

- without DR map, an apparent MS split could be a dust artifact;
- with DR map, the residual split is physical (He variations, light-element variations).

this is why Milone's DR mapping is a **prerequisite** for chromosome map construction in inner-Galactic clusters.

## limitations + caveats

- **resolution limit**: DR maps cannot probe scales smaller than the cluster member spacing in projection ($\sim$ a few arcsec for typical GCs);
- **isotropic assumption**: assumes $A_\lambda$ ratios are constant across the field; breaks down in dense regions where $R_V$ varies;
- **cluster ridge depends on age + metallicity**: poor cluster ridges (sparse, contaminated, eMSTO) give noisy DR maps;
- **non-cluster background field stars**: their CMD positions also depend on DR but their physical CMD locus is unknown.

modern variants use Gaia-based field stars + RC stars + multiple stars per pixel for finer resolution.

## reference papers

- **Milone et al. 2012, A&A 540, A16** — original technique using CMD offsets.
- **Lagioia et al. 2014, ApJ 782, 50** — high-resolution Baade Window map via NGC 6528.
- **Schlegel, Finkbeiner, Davis 1998 (SFD)** — full-sky DR map at $\sim 6'$ resolution.
- **Schlafly & Finkbeiner 2011** — recalibrated SFD.
- **Cardelli, Clayton, Mathis 1989** — extinction law underlying the corrections.
- **Bonatto et al. 2012** — alternative DR mapping via RC stars.

## see also

- [Effects of differential reddening on CMD analysis](../../02_Zettel/Theory/Effects of differential reddening on CMD analysis.md)
- [Interstellar reddening and the reddening vector](../../02_Zettel/Theory/Interstellar reddening and the reddening vector.md)
- [Extinction law and Rv](../../02_Zettel/Theory/Extinction law and Rv.md)
- [Bulge CMD complications](../../02_Zettel/Theory/Bulge CMD complications.md)
- [Photometric chromosome maps](../../02_Zettel/Theory/Photometric chromosome maps.md)
- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
