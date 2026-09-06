---
layout: default
name: Main sequence turn-off as age indicator
description: why the TO is the cleanest age clock for resolved clusters, and how isochrones encode the age dependence
---

the **main-sequence turn-off** is the bluest, brightest point on the cluster's main sequence in the CMD, the locus where stars have just exhausted central hydrogen and start the brief journey across the subgiant branch toward the giant branch. it is the single most precise *resolved* age indicator known.

the underlying logic is the MS lifetime relation
$$ \tau_\mathrm{MS}(M) \approx 10 \, (M/M_\odot)^{-2.5} \, \mathrm{Gyr}. $$
inverting,
$$ M_\mathrm{TO}(t) \approx (t / 10\,\mathrm{Gyr})^{-1/2.5} \, M_\odot $$
so that for a coeval cluster of age $t$, the star currently leaving the MS has mass $M_\mathrm{TO}(t)$. plugging in:

- $t = 1$ Gyr $\rightarrow M_\mathrm{TO} \approx 2.5 \, M_\odot$ (early A on the TO)
- $t = 4$ Gyr $\rightarrow M_\mathrm{TO} \approx 1.36 \, M_\odot$ (late F)
- $t = 10$ Gyr $\rightarrow M_\mathrm{TO} \approx 1.00 \, M_\odot$ (early G, sun-like)
- $t = 13$ Gyr $\rightarrow M_\mathrm{TO} \approx 0.85 \, M_\odot$ (mid G to early K, GC value)

the TO mass therefore drops monotonically with age. on the CMD this manifests as the TO point sliding *redder and fainter* with increasing age along the locus of points $(\mathrm{colour}_\mathrm{TO}(t), V_\mathrm{TO}(t))$ that an isochrone traces out. the magnitude of the shift depends on metallicity but at $[\mathrm{Fe}/\mathrm{H}] \sim -1.5$ a typical sensitivity is $\Delta V_\mathrm{TO} / \Delta \log t \approx 1.4$ mag per dex, or roughly $0.1$ mag per Gyr at old ages.

practical fitting strategies fall into three families.

(1) **vertical methods**: measure the absolute TO magnitude $M_V^\mathrm{TO}$ and compare to isochrones. this requires an independent distance modulus, otherwise age and distance are degenerate. the TO is reasonably well-defined as the bluest point on the MS, but in practice the MS-TO transition is gradual and the bluest-point measurement is noisy; modern work uses the *brightness* of the TO at a fixed $\Delta(B-V)$ from the unevolved MS, or the magnitude difference $\Delta V_\mathrm{TO}^\mathrm{HB}$ between TO and horizontal branch which removes the distance dependence.

(2) **horizontal methods** (chaboyer 1995): the colour difference $\delta(B-V)$ between the TO and the base of the RGB at fixed magnitude is age-sensitive but reddening-insensitive (since reddening shifts both TO and RGB by the same colour amount). this is the workhorse for relative ages between GCs.

(3) **isochrone-fitting**: a full chi-square fit of model isochrones to the entire CMD, simultaneously solving for $(t, [\mathrm{Fe}/\mathrm{H}], (m-M)_0, E(B-V))$, with priors on $[\mathrm{Fe}/\mathrm{H}]$ from spectroscopy and on $(m-M)_0$ from gaia parallax or RR Lyrae (see [Isochrones and isochrone fitting](../../02_Zettel/Theory/Isochrones and isochrone fitting.md)).

precision and pitfalls. with HST or JWST photometry the TO can be located to $\sim 0.05$ mag, which translates to a relative-age precision of $\sim 5\%$ between GCs, or $\sim 0.5$ Gyr at $10$ Gyr (marin-franch et al. 2009). absolute ages are limited by *systematic* uncertainties: the assumed He abundance $Y$ (helium-rich populations have brighter, redder TOs at fixed age, mimicking older ages by $\sim 1$ Gyr per $\Delta Y = 0.04$); the CNO and alpha enhancement mixture, which affects opacities and the TO morphology; convective core overshooting, which extends MS lifetimes and lowers $M_\mathrm{TO}$ at fixed age; and the reddening law, which moves the TO colour. realistic absolute ages for GCs are accurate to $\sim 1$ Gyr, with the oldest milky way GCs (NGC 6397, M92, M30) clustering at $12.5 \pm 0.5$ Gyr.

a critical degeneracy: ages and metallicities are partially anti-correlated in TO photometry, because metal-rich isochrones at younger ages have similar TO colours and magnitudes to metal-poor isochrones at older ages (the [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.md)). resolved CMDs break this degeneracy via the *RGB slope* and *HB morphology*, which respond differently to age and to $[\mathrm{Fe}/\mathrm{H}]$, but only if the photometry is deep and clean.

the TO is also the foundation of the cluster age from main sequence turn-off derivation that places GC ages within a Gyr of the WMAP/Planck $\Lambda$CDM age of the universe, providing a cosmologically meaningful lower limit $t_0 > 12$ Gyr from stellar physics alone.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
- [Main sequence on the CMD](../../02_Zettel/Theory/Main sequence on the CMD.md)
- [Subgiant branch SGB](../../02_Zettel/Theory/Subgiant branch SGB.md)
- [Isochrones and isochrone fitting](../../02_Zettel/Theory/Isochrones and isochrone fitting.md)
- Cluster age from main sequence turn-off
- [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.md)
