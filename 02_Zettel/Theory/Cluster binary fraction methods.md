---
layout: default
name: Cluster binary fraction methods
description: photometric double-MS fitting and radial-velocity surveys for measuring f_binary in clusters
---

how do we actually measure the [binary fraction](../../02_Zettel/Theory/Binary stars in CMD.html) $f_b$ of a star cluster? two complementary families of methods exist, photometric and spectroscopic, and they probe different parts of the binary period and mass-ratio distribution.

**photometric: the double main sequence**

if the cluster CMD is deep and clean enough, unresolved binaries form a strip parallel to and brighter than the Main sequence, reaching $\Delta m \approx 0.75$ mag at $q = 1$. the recipe is:

1. construct a fiducial single-star MS ridge line from the data,
2. simulate a synthetic population of singles + binaries with a chosen [IMF](../../02_Zettel/Theory/Stellar mass function.html) and a mass-ratio distribution $f(q)$,
3. add realistic photometric errors and Differential reddening,
4. compare star counts in the binary strip vs the single-star ridge.

the ratio $N_{\text{binary strip}} / N_{\text{single}}$ gives $f_b$ above some minimum $q_{\text{min}}$ (typically $q > 0.5$, since lower-$q$ pairs sit too close to the MS to be cleanly distinguished). this is the workhorse approach for [Globular Clusters](../../02_Zettel/Theory/Globular Clusters.html) with HST photometry. milone et al. (2012) applied it systematically to a large sample of GCs and found values in the range $f_b \sim 0.05 \text{--} 0.20$ for cluster cores.

caveats: the method is insensitive to (i) low-$q$ binaries, (ii) very wide or very tight binaries with one evolved component, (iii) photometric blends.

**spectroscopic: radial velocity variability**

multi-epoch spectra of cluster members reveal binaries through periodic shifts in Radial velocity. the strategy:

- take $N \gtrsim 5$ epochs spread over months to years,
- compute the RV for each star at each epoch,
- flag stars with RV variations exceeding $n \sigma$ (typically $3 \sigma$) above measurement scatter as binary candidates.

this picks up close binaries with periods up to a few years. the approach is well suited to [Open clusters](../../02_Zettel/Theory/Open clusters.html) and to the brighter [Red giant branch RGB](../../02_Zettel/Theory/Red giant branch RGB.html) of [Globular Clusters](../../02_Zettel/Theory/Globular Clusters.html) (e.g. MUSE surveys of $\omega$ Cen, NGC 3201, NGC 6397). it is the only way to access the orbital period and to confirm [dark-companion binaries](../../02_Zettel/Theory/Hunting BHs via radial velocities.html).

caveats: short-period binaries dominate the detection; long-period (months to years) systems require long baselines; binaries at apastron or with low inclination produce small RV signals.

**typical results**

- old [Globular Clusters](../../02_Zettel/Theory/Globular Clusters.html): $f_b \sim 5\text{--}15\%$ in the core, lower in the cluster outskirts (the opposite of what you might naively expect, but consistent with Mass segregation of binary systems).
- [Open clusters](../../02_Zettel/Theory/Open clusters.html): $f_b \sim 30\text{--}50\%$, similar to the field MS.
- young clusters and PMS regions: $f_b$ can exceed 50% because binaries have not yet been processed dynamically.

the binary fraction is not a single number. it depends on cluster age, density, and the specific period range probed. it controls the rates of [blue straggler](../../02_Zettel/Theory/Blue stragglers in star clusters.html) formation, [CV](../../02_Zettel/Theory/Cataclysmic variables in clusters.html) production, and [MSP](../../02_Zettel/Theory/Millisecond pulsars in GCs.html) recycling, so getting it right matters for the whole exotic-object zoo of GCs.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
- [Binary stars in CMD](../../02_Zettel/Theory/Binary stars in CMD.html)
- [Binary star orbits](../../02_Zettel/Theory/interf/Binary star orbits.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
