---
layout: "default"
title: "IMF from cluster luminosity functions"
name: "IMF from cluster luminosity functions"
description: "converting observed N(M_V) into N(M) via the M-L relation, with HST and JWST extending counts to substellar masses"
---
{% raw %}
how do we measure the [stellar mass function](./Stellar%20mass%20function%20xi%28M%29.html) in a real cluster? we never observe stellar mass directly: we observe brightness. the conversion proceeds in three steps:

1. measure the **luminosity function** (LF), $\Phi(M_V) = dN/dM_V$, by counting stars in magnitude bins,
2. apply a theoretical or empirical **mass-luminosity relation** $M = M(L)$ from Stellar evolution tracks for the cluster's age and [metallicity](./Stellar%20populations%20I%20II%20III.html),
3. use the chain rule:

$$\xi(M) = \frac{dN}{dM} = \Phi(M_V) \, \left\lvert \frac{dM_V}{dM} \right\rvert.$$

the jacobian $\lvert dM_V/dM\rvert$ is the local slope of the [M-L relation](./Mass-luminosity%20relation.html) on the MS.

**why this is hard at low mass**

the M-L relation flattens as $M \to 0.1\,M_\odot$: a small change in mass produces a large change in luminosity (or, equivalently, $\lvert dM_V/dM\rvert$ becomes large). this means:

- a small intrinsic spread in mass produces a large spread in $M_V$,
- many low-mass stars accumulate near a "bunching" magnitude,
- the LF develops a peak at $M_V \approx 11\text{--}12$ in V-band that is **not** a peak in the mass function.

a careful analyst must therefore not confuse the LF peak (artefact of the M-L jacobian) with a peak of the true [mass function](./Stellar%20mass%20function%20xi%28M%29.html). converting through the jacobian removes the artefact and reveals the underlying $\xi(M)$.

the situation reverses at very low mass ($M \lesssim 0.1\,M_\odot$): hydrogen-burning stars merge into the substellar regime, the M-L relation steepens dramatically, and a single-band LF becomes degenerate. multi-band photometry helps break the degeneracy.

**HST and JWST extending the reach**

- pre-HST: ground-based photometry barely reached $0.3\,M_\odot$ in nearby GCs,
- HST/ACS and WFC3: deep photometry of nearby GCs (NGC 6397, NGC 6752, M4) reaches $\sim 0.1\,M_\odot$, the H-burning limit,
- [JWST](./JWST%20and%20the%20first%20stars.html) NIRCam: extends to $\sim 0.05\,M_\odot$ and into the substellar/brown-dwarf regime in nearby clusters and the Magellanic clouds.

**field-vs-cluster comparison**

in young open clusters (e.g. orion, NGC 6611), the LF is close to the [IMF](./Initial%20vs%20present-day%20mass%20function.html) because relaxation has not yet altered the population. in old [GCs](./Globular%20Clusters.html), the observed LF is strongly modified by mass segregation and evaporation, so the inferred IMF requires forward modelling.

a useful complement is to fit the cluster LF jointly with [CMD](./Color-magnitude%20diagrams%20of%20clusters.html) features (turnoff, [RGB](./Red%20giant%20branch%20RGB.html) tip, [SGB](./Subgiant%20branch%20SGB.html) luminosity) which constrain age and metallicity simultaneously, fixing $M_V(M)$ self-consistently.

**uncertainties**

- M-L relation uncertainties (especially at low mass; differences between models reach $\sim 0.05\,M_\odot$),
- [unresolved binaries](./Cluster%20binary%20fraction%20methods.html) inflate the LF at $\sim 0.75$ mag above the single-star ridge and bias the inferred $\xi(M)$,
- Differential reddening smears the LF,
- crowding-induced incompleteness at the faint end (corrected with artificial-star tests).

modern best results give cluster IMFs consistent with [chabrier](./Salpeter%20Kroupa%20Chabrier%20IMFs.html) above $0.1\,M_\odot$, with hints of cluster-to-cluster variations at the $\sim 10\text{--}20\%$ level on the low-mass slope.

## see also
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [Stellar mass function xi(M)](./Stellar%20mass%20function%20xi%28M%29.html)
- [Initial vs present-day mass function](./Initial%20vs%20present-day%20mass%20function.html)
- [Salpeter Kroupa Chabrier IMFs](./Salpeter%20Kroupa%20Chabrier%20IMFs.html)
- [Single stellar population SSP](./Single%20stellar%20population%20SSP.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Initial%20vs%20present-day%20mass%20function.html" class="backlink-item">Initial vs present-day mass function</a></li>
    <li class="backlink-item-wrap"><a href="./Salpeter%20Kroupa%20Chabrier%20IMFs.html" class="backlink-item">Salpeter Kroupa Chabrier IMFs</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20mass%20function%20xi%28M%29.html" class="backlink-item">Stellar mass function xi(M)</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>
