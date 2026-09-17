---
layout: "default"
title: "Cluster binary fraction methods"
name: "Cluster binary fraction methods"
description: "photometric double-MS fitting and radial-velocity surveys for measuring f_binary in clusters"
---
{% raw %}
how do we actually measure the [binary fraction](./Binary%20stars%20in%20CMD.html) $f_b$ of a star cluster? two complementary families of methods exist, photometric and spectroscopic, and they probe different parts of the binary period and mass-ratio distribution.

**photometric: the double main sequence**

if the cluster CMD is deep and clean enough, unresolved binaries form a strip parallel to and brighter than the Main sequence, reaching $\Delta m \approx 0.75$ mag at $q = 1$. the recipe is:

1. construct a fiducial single-star MS ridge line from the data,
2. simulate a synthetic population of singles + binaries with a chosen [IMF](./Stellar%20mass%20function.html) and a mass-ratio distribution $f(q)$,
3. add realistic photometric errors and Differential reddening,
4. compare star counts in the binary strip vs the single-star ridge.

the ratio $N_{\text{binary strip}} / N_{\text{single}}$ gives $f_b$ above some minimum $q_{\text{min}}$ (typically $q > 0.5$, since lower-$q$ pairs sit too close to the MS to be cleanly distinguished). this is the workhorse approach for [Globular Clusters](./Globular%20Clusters.html) with HST photometry. milone et al. (2012) applied it systematically to a large sample of GCs and found values in the range $f_b \sim 0.05 \text{--} 0.20$ for cluster cores.

caveats: the method is insensitive to (i) low-$q$ binaries, (ii) very wide or very tight binaries with one evolved component, (iii) photometric blends.

**spectroscopic: radial velocity variability**

multi-epoch spectra of cluster members reveal binaries through periodic shifts in Radial velocity. the strategy:

- take $N \gtrsim 5$ epochs spread over months to years,
- compute the RV for each star at each epoch,
- flag stars with RV variations exceeding $n \sigma$ (typically $3 \sigma$) above measurement scatter as binary candidates.

this picks up close binaries with periods up to a few years. the approach is well suited to [Open clusters](./Open%20clusters.html) and to the brighter [Red giant branch RGB](./Red%20giant%20branch%20RGB.html) of [Globular Clusters](./Globular%20Clusters.html) (e.g. MUSE surveys of $\omega$ Cen, NGC 3201, NGC 6397). it is the only way to access the orbital period and to confirm [dark-companion binaries](./Hunting%20BHs%20via%20radial%20velocities.html).

caveats: short-period binaries dominate the detection; long-period (months to years) systems require long baselines; binaries at apastron or with low inclination produce small RV signals.

**typical results**

- old [Globular Clusters](./Globular%20Clusters.html): $f_b \sim 5\text{--}15\%$ in the core, lower in the cluster outskirts (the opposite of what you might naively expect, but consistent with Mass segregation of binary systems).
- [Open clusters](./Open%20clusters.html): $f_b \sim 30\text{--}50\%$, similar to the field MS.
- young clusters and PMS regions: $f_b$ can exceed 50% because binaries have not yet been processed dynamically.

the binary fraction is not a single number. it depends on cluster age, density, and the specific period range probed. it controls the rates of [blue straggler](./Blue%20stragglers%20in%20star%20clusters.html) formation, [CV](./Cataclysmic%20variables%20in%20clusters.html) production, and [MSP](./Millisecond%20pulsars%20in%20GCs.html) recycling, so getting it right matters for the whole exotic-object zoo of GCs.

## see also
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [Binary stars in CMD](./Binary%20stars%20in%20CMD.html)
- [Binary star orbits](interf/Binary%20star%20orbits.html)
- [Color-magnitude diagrams of clusters](./Color-magnitude%20diagrams%20of%20clusters.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Binary%20stars%20in%20CMD.html" class="backlink-item">Binary stars in CMD</a></li>
    <li class="backlink-item-wrap"><a href="./Blue%20straggler%20formation%20channels.html" class="backlink-item">Blue straggler formation channels</a></li>
    <li class="backlink-item-wrap"><a href="./Blue%20stragglers%20in%20star%20clusters.html" class="backlink-item">Blue stragglers in star clusters</a></li>
    <li class="backlink-item-wrap"><a href="./Cataclysmic%20variables%20in%20clusters.html" class="backlink-item">Cataclysmic variables in clusters</a></li>
    <li class="backlink-item-wrap"><a href="./IMF%20from%20cluster%20luminosity%20functions.html" class="backlink-item">IMF from cluster luminosity functions</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Yellow%20stragglers%20and%20sub-subgiants.html" class="backlink-item">Yellow stragglers and sub-subgiants</a></li>
  </ul>
</div>
