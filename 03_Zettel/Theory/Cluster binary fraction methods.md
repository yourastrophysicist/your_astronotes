---
layout: "default"
title: "Cluster binary fraction methods"
---
how do we actually measure the [[Binary stars in CMD|binary fraction]] $f_b$ of a star cluster? two complementary families of methods exist, photometric and spectroscopic, and they probe different parts of the binary period and mass-ratio distribution.

**photometric: the double main sequence**

if the cluster CMD is deep and clean enough, unresolved binaries form a strip parallel to and brighter than the Main sequence, reaching $\Delta m \approx 0.75$ mag at $q = 1$. the recipe is:

1. construct a fiducial single-star MS ridge line from the data,
2. simulate a synthetic population of singles + binaries with a chosen [[Stellar mass function|IMF]] and a mass-ratio distribution $f(q)$,
3. add realistic photometric errors and Differential reddening,
4. compare star counts in the binary strip vs the single-star ridge.

the ratio $N_{\text{binary strip}} / N_{\text{single}}$ gives $f_b$ above some minimum $q_{\text{min}}$ (typically $q > 0.5$, since lower-$q$ pairs sit too close to the MS to be cleanly distinguished). this is the workhorse approach for [[Globular Clusters]] with HST photometry. milone et al. (2012) applied it systematically to a large sample of GCs and found values in the range $f_b \sim 0.05 \text{--} 0.20$ for cluster cores.

caveats: the method is insensitive to (i) low-$q$ binaries, (ii) very wide or very tight binaries with one evolved component, (iii) photometric blends.

**spectroscopic: radial velocity variability**

multi-epoch spectra of cluster members reveal binaries through periodic shifts in Radial velocity. the strategy:

- take $N \gtrsim 5$ epochs spread over months to years,
- compute the RV for each star at each epoch,
- flag stars with RV variations exceeding $n \sigma$ (typically $3 \sigma$) above measurement scatter as binary candidates.

this picks up close binaries with periods up to a few years. the approach is well suited to [[Open clusters]] and to the brighter [[Red giant branch RGB]] of [[Globular Clusters]] (e.g. MUSE surveys of $\omega$ Cen, NGC 3201, NGC 6397). it is the only way to access the orbital period and to confirm [[Hunting BHs via radial velocities|dark-companion binaries]].

caveats: short-period binaries dominate the detection; long-period (months to years) systems require long baselines; binaries at apastron or with low inclination produce small RV signals.

**typical results**

- old [[Globular Clusters]]: $f_b \sim 5\text{--}15\%$ in the core, lower in the cluster outskirts (the opposite of what you might naively expect, but consistent with Mass segregation of binary systems).
- [[Open clusters]]: $f_b \sim 30\text{--}50\%$, similar to the field MS.
- young clusters and PMS regions: $f_b$ can exceed 50% because binaries have not yet been processed dynamically.

the binary fraction is not a single number. it depends on cluster age, density, and the specific period range probed. it controls the rates of [[Blue stragglers in star clusters|blue straggler]] formation, [[Cataclysmic variables in clusters|CV]] production, and [[Millisecond pulsars in GCs|MSP]] recycling, so getting it right matters for the whole exotic-object zoo of GCs.

## see also
- [[Stellar_Astrophysics_MOC]]
- [[Binary stars in CMD]]
- [[Binary star orbits]]
- [[Color-magnitude diagrams of clusters]]



## Linked References

- [[Binary stars in CMD]]
- [[Blue straggler formation channels]]
- [[Blue stragglers in star clusters]]
- [[Cataclysmic variables in clusters]]
- [[IMF from cluster luminosity functions]]
- [[Yellow stragglers and sub-subgiants]]
- [[Stellar_Astrophysics_MOC]]


