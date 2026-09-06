---
layout: default
name: Initial vs present-day mass function
description: how stellar evolution and dynamical evaporation transform the IMF into the observed PDMF in old clusters
---

what we observe today in a star cluster is not the [IMF](../../02_Zettel/Theory/Salpeter Kroupa Chabrier IMFs.md) but the **present-day mass function** (PDMF). two physical processes connect the two, and both leave clear fingerprints in the observed [CMD](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md) and [luminosity function](../../02_Zettel/Theory/IMF from cluster luminosity functions.md).

**process 1: stellar evolution**

stars more massive than the MSTO mass $M_{\text{TO}}(t)$ have completed core hydrogen burning and left the MS. for an old [globular cluster](../../02_Zettel/Theory/Globular Clusters.md) of age $t \approx 12\,\text{Gyr}$, $M_{\text{TO}} \approx 0.8\,M_\odot$. so the PDMF on the MS is truncated:

$$\xi_{\text{PDMF, MS}}(M) = \xi_{\text{IMF}}(M) \quad \text{for}\,\, M < M_{\text{TO}}(t),$$

with all higher-mass stars now WDs (for $M_{\text{ZAMS}} \lesssim 8\,M_\odot$), NSs (for $M_{\text{ZAMS}} \sim 8\text{--}25\,M_\odot$), or [BHs](../../02_Zettel/Theory/Black holes in globular clusters.md) (for $M_{\text{ZAMS}} \gtrsim 25\,M_\odot$). the dark remnant population is dynamically present but mostly invisible. recovering the IMF therefore requires knowing the initial-final mass relation for compact remnants.

**process 2: dynamical evaporation**

a [GC](../../02_Zettel/Theory/Globular Clusters.md) is a self-gravitating system slowly losing stars through:

- two-body relaxation pushing stars onto unbound orbits,
- the galactic tidal field stripping stars from the outskirts,
- evaporation of high-velocity stars (tidal evaporation).

Mass segregation from two-body relaxation makes the high-mass stars sink to the centre while low-mass stars diffuse outward. the outermost stars (preferentially low-mass) are the most easily lost. the consequence:

> the PDMF of an old, dynamically evolved cluster is **flatter at low mass** than its IMF.

this is opposite to what naive stellar-evolution intuition suggests (which would only flatten at high mass). the low-mass flattening of the PDMF is the dynamical signature of cluster evolution.

**concrete example**

for $\omega$ Cen, NGC 6397, NGC 6752, deep HST luminosity functions show:

- IMF (inferred): broadly chabrier-like or kroupa-like, slope $\Gamma \sim -0.3$ in the log at $M \sim 0.2\,M_\odot$,
- PDMF (observed in cluster core): much flatter, with the low-mass turnover **suppressed** or absent.

the flatter the PDMF at low mass, the more dynamically evolved the cluster. de marchi et al. (2007) used this to rank GCs by dynamical age, finding a strong correlation with relaxation time $t_{\text{rh}}$.

**other modifications**

- **mass loss and mass transfer in binaries**: a [binary](../../02_Zettel/Theory/Binary stars in CMD.md) processed through CE may lose substantial mass, shifting the system's mass relative to its initial value.
- **stellar mergers** in dense cores produce [BSS](../../02_Zettel/Theory/Blue stragglers in star clusters.md) that sit above the MSTO, an "above-PDMF" tail.
- **escapers**: stars that have already left the cluster do not contribute to the PDMF but were part of the IMF.

**implication**

never quote a "directly measured IMF" from an old cluster without modelling. open clusters younger than their relaxation time ($\lesssim 100\,\text{Myr}$) preserve the IMF reasonably well; old GCs do not. the most reliable IMFs come from young embedded clusters and OB associations not yet dynamically processed.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
- [Stellar mass function xi(M)](../../02_Zettel/Theory/Stellar mass function xi(M).md)
- [Salpeter Kroupa Chabrier IMFs](../../02_Zettel/Theory/Salpeter Kroupa Chabrier IMFs.md)
- [IMF from cluster luminosity functions](../../02_Zettel/Theory/IMF from cluster luminosity functions.md)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.md)
