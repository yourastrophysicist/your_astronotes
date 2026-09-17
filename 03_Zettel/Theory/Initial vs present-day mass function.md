---
layout: "default"
title: "Initial vs present-day mass function"
name: "Initial vs present-day mass function"
description: "how stellar evolution and dynamical evaporation transform the IMF into the observed PDMF in old clusters"
---
{% raw %}
what we observe today in a star cluster is not the [IMF](./Salpeter%20Kroupa%20Chabrier%20IMFs.html) but the **present-day mass function** (PDMF). two physical processes connect the two, and both leave clear fingerprints in the observed [CMD](./Color-magnitude%20diagrams%20of%20clusters.html) and [luminosity function](./IMF%20from%20cluster%20luminosity%20functions.html).

**process 1: stellar evolution**

stars more massive than the MSTO mass $M_{\text{TO}}(t)$ have completed core hydrogen burning and left the MS. for an old [globular cluster](./Globular%20Clusters.html) of age $t \approx 12\,\text{Gyr}$, $M_{\text{TO}} \approx 0.8\,M_\odot$. so the PDMF on the MS is truncated:

$$\xi_{\text{PDMF, MS}}(M) = \xi_{\text{IMF}}(M) \quad \text{for}\,\, M < M_{\text{TO}}(t),$$

with all higher-mass stars now WDs (for $M_{\text{ZAMS}} \lesssim 8\,M_\odot$), NSs (for $M_{\text{ZAMS}} \sim 8\text{--}25\,M_\odot$), or [BHs](./Black%20holes%20in%20globular%20clusters.html) (for $M_{\text{ZAMS}} \gtrsim 25\,M_\odot$). the dark remnant population is dynamically present but mostly invisible. recovering the IMF therefore requires knowing the initial-final mass relation for compact remnants.

**process 2: dynamical evaporation**

a [GC](./Globular%20Clusters.html) is a self-gravitating system slowly losing stars through:

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

- **mass loss and mass transfer in binaries**: a [binary](./Binary%20stars%20in%20CMD.html) processed through CE may lose substantial mass, shifting the system's mass relative to its initial value.
- **stellar mergers** in dense cores produce [BSS](./Blue%20stragglers%20in%20star%20clusters.html) that sit above the MSTO, an "above-PDMF" tail.
- **escapers**: stars that have already left the cluster do not contribute to the PDMF but were part of the IMF.

**implication**

never quote a "directly measured IMF" from an old cluster without modelling. open clusters younger than their relaxation time ($\lesssim 100\,\text{Myr}$) preserve the IMF reasonably well; old GCs do not. the most reliable IMFs come from young embedded clusters and OB associations not yet dynamically processed.

## see also
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [Stellar mass function xi(M)](./Stellar%20mass%20function%20xi%28M%29.html)
- [Salpeter Kroupa Chabrier IMFs](./Salpeter%20Kroupa%20Chabrier%20IMFs.html)
- [IMF from cluster luminosity functions](./IMF%20from%20cluster%20luminosity%20functions.html)
- [Single stellar population SSP](./Single%20stellar%20population%20SSP.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./IMF%20from%20cluster%20luminosity%20functions.html" class="backlink-item">IMF from cluster luminosity functions</a></li>
    <li class="backlink-item-wrap"><a href="./Initial%20mass%20function.html" class="backlink-item">Initial mass function</a></li>
    <li class="backlink-item-wrap"><a href="./Salpeter%20Kroupa%20Chabrier%20IMFs.html" class="backlink-item">Salpeter Kroupa Chabrier IMFs</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20mass%20function%20xi%28M%29.html" class="backlink-item">Stellar mass function xi(M)</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>
