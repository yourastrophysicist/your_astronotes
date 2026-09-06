---
layout: default
title: "Cluster ages from CMD turnoff"
---

the **main-sequence turnoff** in a cluster CMD is the most direct age indicator we have. it works because the MS lifetime is a strong function of stellar mass, and the cluster turnoff is at the mass where MS lifetime equals the cluster age.

## the principle

main-sequence lifetime scales as
$$\tau_{MS} \approx 10^{10}\,\text{yr}\,(M/M_\odot)^{-2.5}$$
(approximate; exponent $\sim -2.5$ to $-3$ depending on mass range).

at any moment, stars with $\tau_{MS}(M) < t$ have already left the MS. the turnoff mass $M_{\rm TO}(t)$ satisfies $\tau_{MS}(M_{\rm TO}) = t$:
$$M_{\rm TO} \approx M_\odot\,(t/10\,\text{Gyr})^{-1/2.5} = M_\odot\,(t/10\,\text{Gyr})^{-0.4}$$

higher-mass stars (more luminous, hotter) have already evolved off; the turnoff is at the most massive star still on the MS.

## the observable

the turnoff is the brightest, bluest point on the cluster MS. its absolute magnitude $M_V^{\rm TO}$ scales with the turnoff mass via the M-L relation:
$$L_{\rm TO} \propto M_{\rm TO}^{3.5}$$

combining:
$$M_V^{\rm TO} \approx M_V^\odot - 2.5 \log_{10}(L_{\rm TO}/L_\odot) \approx +4.83 - 2.5 \log_{10}(M_{\rm TO}/M_\odot)^{3.5}$$

so as $t$ increases, $M_{\rm TO}$ decreases, $L_{\rm TO}$ decreases, and the turnoff becomes fainter and redder.

## age benchmarks

| age (Gyr) | $M_{\rm TO}/M_\odot$ | $M_V^{\rm TO}$ | example |
|---|---|---|---|
| 0.01 | $\sim 8$ | $-3$ | Pleiades is younger; OB stars |
| 0.1 | $\sim 4.5$ | $-1$ | NGC 2362, NGC 6611 |
| 1 | $\sim 1.7$ | $+2$ | NGC 752 |
| 5 | $\sim 1.1$ | $+3.5$ | M67 |
| 10 | $\sim 0.95$ | $+4$ | $\omega$ Cen, oldest open clusters |
| 13 | $\sim 0.85$ | $+4.5$ | oldest globular clusters |

beyond $\sim 13$ Gyr, the turnoff would be at sub-solar masses, but no cluster known is older.

## the procedure

to age a cluster:
1. observe a deep CMD covering well below the turnoff.
2. correct for distance, reddening, and metallicity.
3. compare with a grid of theoretical isochrones (Padova, BaSTI, MIST).
4. find the isochrone whose turnoff matches the observed one.
5. read off the age.

precision: $\sim 10\%$ in age for well-observed globular clusters with Gaia / HST photometry.

## metallicity sensitivity

at fixed turnoff luminosity, lower-$Z$ isochrones are bluer and slightly brighter. so a cluster's age and metallicity are partially **degenerate**: an old metal-rich cluster can mimic a younger metal-poor one.

breaking the degeneracy:
- spectroscopic $[Fe/H]$ from individual stars.
- multi-band photometry (color baselines orthogonal to the age track).
- horizontal-branch morphology (sensitive to $Z$ at fixed age).

## anchoring cosmology

the oldest globular cluster age, $\sim 12.5$ to $13.5$ Gyr, sets a **lower limit on the age of the universe**:
$$t_0 > t_{\rm GC,oldest}$$

modern cosmology gives $t_0 = 13.8$ Gyr, consistent with the oldest globulars at $\sim 13$ Gyr having formed within $\sim 1$ Gyr of the Big Bang. this is one of the cleanest external checks on $\Lambda$CDM.

## see also

- [HR diagram](../../02_Zettel/Theory/HR diagram.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.html)
- [Stellar evolution timescales](../../02_Zettel/Theory/Stellar evolution timescales.html)
- [Mass-luminosity relation](../../02_Zettel/Theory/Mass-luminosity relation.html)
- [Stellar scaling relations](../../02_Zettel/Theory/Stellar scaling relations.html)
- [SFH from resolved CMDs](../../02_Zettel/Theory/SFH from resolved CMDs.html)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html)
