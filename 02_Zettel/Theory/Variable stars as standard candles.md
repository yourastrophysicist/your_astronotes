---
layout: default
title: "Variable stars as standard candles"
---

certain pulsating variable stars have intrinsic luminosities that are predictable from their pulsation properties (period, light-curve shape). they are the **primary standard candles** that bridge the gap from parallax-known nearby stars out to galaxies tens of Mpc away.

## the three main families

### Cepheid variables

classical Cepheids are massive ($M \gtrsim 5\,M_\odot$) yellow supergiants, pulsating in radial mode with periods $1$ to $50$ days. they obey the **Leavitt period-luminosity relation**:
$$M_V = a + b\,\log_{10}P(\text{days})$$

calibration (HST + Gaia + Wesenheit relations): $b \approx -2.78$, $a \approx -1.35$ in V; brighter and tighter in the near-IR (Wesenheit indices). intrinsic dispersion: $\sim 0.1$ mag in NIR Wesenheit, $\sim 0.3$ mag in V.

range: $\sim 30$ Mpc with HST; pushes to $\sim 100$ Mpc with JWST.

calibrators: Galactic Cepheids with Gaia parallaxes; SMC and LMC Cepheids with eclipsing-binary geometric distances. see [Cepheid period-luminosity relation](../../02_Zettel/Theory/Cepheid period-luminosity relation.html).

### RR Lyrae

old, low-mass ($\sim 0.5$ to $0.7\,M_\odot$) horizontal-branch pulsators with periods $\sim 0.5$ days. nearly fixed absolute magnitude:
$$M_V \approx +0.5$$
with a mild metallicity dependence:
$$M_V \approx 0.21\,[Fe/H] + 0.95$$
(Caputo 2000 calibration, similar from various groups). intrinsic scatter $\sim 0.1$ mag.

range: $\sim 100$ kpc, useful for resolved Galactic halo and Local Group galaxies (LMC, SMC, Sgr dwarf).

found in old populations (globular clusters, halo). complementary to Cepheids, which trace young populations. RR Lyrae give independent distances to globular clusters and halo, where Cepheids are absent.

### Mira variables

late-type AGB stars with very long periods ($100$ to $1000$ days), red, pulsating with $\Delta V \sim 5$ mag. obey a period-luminosity relation in the NIR (where they are bright and dust is low):
$$M_K \approx -4.0\,\log_{10} P + 1.0$$
(approximate). intrinsic scatter $\sim 0.5$ mag.

range: $\sim 30$ Mpc in NIR. used as alternatives to Cepheids in dust-heavy regions and old populations. JWST is opening Miras as a major candle family.

## the calibration ladder

each family is calibrated against parallax in two steps:
1. **Galactic** examples with Gaia DR3 parallaxes anchor the absolute relation.
2. **LMC/SMC** examples (with their own geometric eclipsing-binary distances of $1\%$ precision; Pietrzyński et al. 2019) provide a high-statistics zero-point.

then the relation is applied to extragalactic targets where individual variable stars can be detected and measured.

## why pulsating stars

stars pulsate when there is a positive **κ-mechanism** in their envelopes: regions of partial ionisation where opacity rises with compression, trapping radiation and driving pulsation. the period $P$ depends on the dynamical timescale, which in turn depends on the mean density:
$$P \propto \rho^{-1/2}$$

since $\rho \propto M/R^3$ and $L \propto R^2 T^4$, the period correlates with luminosity at fixed effective temperature. this is the physical origin of the Leavitt PL relation.

## checks against each other

modern best practice: cross-check Cepheid + TRGB + Mira distances to the same galaxy. agreement at $\lesssim 0.05$ mag confirms systematic stability; disagreement signals a problem (dust, metallicity, blending). the ongoing $H_0$ tension is partly about whether Cepheid distances are systematically high vs TRGB.

## see also

- [Cepheid period-luminosity relation](../../02_Zettel/Theory/Cepheid period-luminosity relation.html)
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.html)
- [TRGB tip of the red giant branch](../../02_Zettel/Theory/TRGB tip of the red giant branch.html)
- [Cepheids and supernovae](../../02_Zettel/Theory/Cepheids and supernovae.html)
- [Type Ia supernovae as standard candles](../../02_Zettel/Theory/Type Ia supernovae as standard candles.html)
- [Annual stellar parallax](../../02_Zettel/Theory/Annual stellar parallax.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
