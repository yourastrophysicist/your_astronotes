---
layout: default
name: Mass dependence of multiple populations
description: how the 2G fraction, helium spread, + chemical extension scale with cluster mass, with low-mass clusters often single-population + LMC eMSTO clusters reversing the trend
---

multiple populations are not a binary on/off feature. their amplitude scales smoothly with cluster mass: more massive GCs host larger 2G fractions, larger helium spreads, + more extreme chemical anti-correlations. low-mass clusters often show no MPs at all. this scaling is one of the strongest empirical handles on the formation mechanism + a key constraint on [Polluter scenarios for second-generation GC stars](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.md).

## the empirical scaling

milone et al. 2017 + 2020 + carretta et al. quantified several mass-dependent trends:

**2G fraction vs cluster mass**:
$$\frac{N_{2G}}{N_\text{tot}} \approx 0.35 + 0.13\, \log_{10}\!\left(\frac{M}{10^4\, M_\odot}\right)$$
approximately, with scatter. the most massive clusters ($M \gtrsim 10^6\, M_\odot$, $\omega$ Cen, M54, NGC 6388) reach $N_{2G}/N_\text{tot} \sim 0.7$-$0.8$. clusters with $M \lesssim 10^4\, M_\odot$ are often pure 1G.

**maximum He spread vs mass**:
$$\Delta Y_\text{max} \sim 0.02 + 0.04\, \log_{10}\!\left(\frac{M}{10^5\, M_\odot}\right)$$
with $\omega$ Cen, NGC 2808, NGC 6388 at the high end ($\Delta Y \sim 0.12$-$0.15$).

**Na-O extension** (the IQR[O/Na] from carretta et al.) scales similarly with mass.

**Mg-Al extension** scales with mass + with **inverse metallicity**: only massive metal-poor GCs show clear MgAl. NGC 2419, M15, M13 at the extreme; metal-rich 47 Tuc, NGC 6121 at the modest end.

## the mass threshold

below $\sim 10^{4.5}\, M_\odot$ many open + low-mass GCs show **no detectable MPs**. examples:
- ruprecht 106 (galactic GC, $M \sim 10^{4.5}\, M_\odot$): single population, no Na-O, no chromosome map split
- E3, palomar 12, terzan 7: similar
- many young massive open clusters in the milky way (NGC 6791, NGC 6819, M67) show no MPs

bastian + lardo 2018 catalogued these "single-population" clusters + argued the threshold is sharp around $M \sim 10^5\, M_\odot$ at formation. clusters above this mass develop MPs, clusters below do not.

why? possible explanations:
1. **deep potential well needed** to retain polluter ejecta against SN winds + radiation pressure. deeper wells form in more massive proto-clusters, scaling roughly with $\sigma_v^2 \propto M / r$.
2. **runaway collisions** to form a [supermassive star](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.md) require very dense initial conditions, which are realized only in massive proto-clusters
3. **dilution gas reservoir**: more massive clusters can retain larger gas budgets for the second-generation star formation event

## the radial + dynamical signatures

within a cluster, 2G stars are typically more **centrally concentrated** than 1G. the natural picture: 2G formed in a dense subcluster from polluter ejecta in the cluster core, while 1G was extended. dynamical evolution mixes them but the imprint persists in the most massive (longest relaxation time) clusters.

dalessandro, ferraro, miocchi + others have measured this radial segregation. some clusters (M15) are still segregated, others (NGC 6362) are fully mixed, providing a relaxation-age estimate.

2G is also dynamically **cooler** than 1G in some clusters (lower velocity dispersion + slight rotation), again consistent with a more compact birth distribution.

## the LMC age trend + reversal

a beautiful complication comes from the LMC + SMC clusters. observations show:
- **young** ($< 2$ Gyr) massive LMC clusters: NO multiple-population N-He chemistry, but **eMSTO** + split MS due to rotation (see [Extended main sequence turn-off eMSTO](../../02_Zettel/Theory/Extended main sequence turn-off eMSTO.md))
- **intermediate** ($2$-$8$ Gyr) LMC clusters: weak or partial N-spread (martocchia, niederhofer, lardo + bastian)
- **old** ($> 8$ Gyr) LMC clusters: full multiple-population signature, indistinguishable from galactic GCs

this is striking. it suggests MPs may **develop** with age, or alternatively that only old clusters formed under the conditions that produce MPs. the timing is consistent with the hypothesis that MPs require the cluster to be very massive at formation + that present-day low-mass clusters were once more massive but lost mass to tides.

at very young ages ($< 100$ Myr) the eMSTO LMC clusters show split MS due to rotation, not chemistry: this is the rotation regime + does not connect cleanly to the chemical MP signature seen in old GCs (see [eMSTO and multiple populations connection](../../02_Zettel/Theory/eMSTO and multiple populations connection.md)).

## interpretation

the mass dependence is the strongest evidence that MPs are a **cluster-formation phenomenon**, not a stellar evolution phenomenon. it requires:
- a depth of potential well sufficient to retain polluter ejecta
- a high enough density to host runaway collisions or efficient gas mixing
- a cluster lifetime sufficient to undergo multiple SF episodes (~$10$-$100$ Myr)

all of these scale with mass. the cleanest statement: **multiple populations are how massive star clusters form**, + the absence of MPs in low-mass clusters is the absence of those formation conditions, not a stellar phenomenon switch.

## see also

- [Multiple populations in GCs discovery](../../02_Zettel/Theory/Multiple populations in GCs discovery.md)
- [Photometric chromosome maps](../../02_Zettel/Theory/Photometric chromosome maps.md)
- [Helium spread in GCs](../../02_Zettel/Theory/Helium spread in GCs.md)
- [Polluter scenarios for second-generation GC stars](../../02_Zettel/Theory/Polluter scenarios for second-generation GC stars.md)
- [GC formation models with MPs](../../02_Zettel/Theory/GC formation models with MPs.md)
- [Type I and Type II GCs](../../02_Zettel/Theory/Type I and Type II GCs.md)
- [Multiple populations in extragalactic GCs](../../02_Zettel/Theory/Multiple populations in extragalactic GCs.md)
- [Extended main sequence turn-off eMSTO](../../02_Zettel/Theory/Extended main sequence turn-off eMSTO.md)
- [eMSTO and multiple populations connection](../../02_Zettel/Theory/eMSTO and multiple populations connection.md)
- Magellanic Clouds
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
