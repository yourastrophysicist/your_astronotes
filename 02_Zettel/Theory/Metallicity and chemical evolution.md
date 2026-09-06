---
layout: default
title: "Metallicity and chemical evolution"
---

**metallicity** is the abundance of elements heavier than helium in a star. it tells me about the chemical environment in which the star was born, which in turn encodes the **enrichment history** of the host galaxy.

## the definition

logarithmic ratio relative to solar:
$$[Fe/H] \equiv \log_{10}\!\left(\frac{N_{Fe}/N_H}{(N_{Fe}/N_H)_\odot}\right)$$

so $[Fe/H] = 0$ is solar, $[Fe/H] = -1$ is $1/10$ solar, $[Fe/H] = -3$ is $1/1000$ solar (extremely metal-poor).

other useful ratios:
$$[\alpha/Fe] \equiv \log_{10}\!\left(\frac{N_\alpha/N_{Fe}}{(N_\alpha/N_{Fe})_\odot}\right)$$
where $\alpha$ refers to $\alpha$-elements (O, Ne, Mg, Si, S, Ca, Ti) made primarily by core-collapse supernovae.

## the $\alpha$/Fe clock

stars trace the **timescale of star formation** because:
- **core-collapse SNe** (Type II): die within $\sim 30$ Myr. produce $\alpha$-elements + small Fe.
- **Type Ia SNe**: from white-dwarf accretion or mergers, delay time $\sim 10^9$ yr from formation. produce mostly Fe.

so a star formed early (before Type Ia kicked in) has high $[\alpha/Fe]$. a star formed late, after Type Ia enriched the ISM, has lower $[\alpha/Fe]$. the "**knee**" in $[\alpha/Fe]$ vs $[Fe/H]$ marks the transition.

| population | $[Fe/H]$ | $[\alpha/Fe]$ | star-formation timescale |
|---|---|---|---|
| Galactic halo | $-3$ to $-1$ | high ($+0.3$ to $+0.5$) | very fast SF in early Universe |
| thick disk | $-0.7$ to $0$ | intermediate | moderate timescale |
| thin disk | $-0.3$ to $+0.4$ | low ($\sim 0$) | slow, ongoing SF |
| dwarf galaxy | $-3$ to $-1$ | low (turns over fast) | very inefficient SF |

so two stars at the same $[Fe/H]$ but different $[\alpha/Fe]$ tell different stories of where they came from.

## the mass-metallicity relation

larger galaxies are more metal-rich, because gravity retains more SN ejecta:
$$12 + \log(O/H) \propto \log M_*$$
in the modern universe (Tremonti 2004, Andrews & Martini 2013). high-$z$ versions show evolution: galaxies of fixed mass were less metal-rich at $z > 1$, consistent with chemical enrichment over cosmic time.

## yields and the simple closed-box model

the simplest chemical evolution model: a closed box (no inflow or outflow), instantaneous recycling of stellar yields. then:
$$Z(t) = -y\,\ln(\mu_{\rm gas}(t))$$
with $y$ the integrated yield per stellar generation and $\mu_{\rm gas}$ the gas-to-total-baryon ratio.

predicts:
- **G-dwarf problem**: closed-box predicts more very-metal-poor stars in the solar neighbourhood than observed. fix: the Galaxy did **not** form as a closed box; it had infall of fresh gas to dilute. evidence for the **infall model**.

modern chemical evolution: open-box models with infall, outflow, and IMF-weighted yields (Tinsley 1980, Matteucci, Pagel).

## metallicity in distance ladder

every standard candle has some metallicity dependence:
- **Cepheid PL**: small, $\sim 0.1$ mag/dex.
- **TRGB**: small, $\sim 0.05$ mag/dex.
- **RR Lyrae**: significant, $\sim 0.2$ mag/dex.
- **SN Ia Phillips**: subtle, partially absorbed in light-curve fits.

ignoring metallicity introduces systematic errors of $\sim 0.05$ to $0.5$ mag in distance modulus. always include the term in modern fits.

## see also

- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.md)
- [Chemical evolution of galaxies](../../02_Zettel/Theory/Chemical evolution of galaxies.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [Stellar nucleosynthesis](../../02_Zettel/Theory/Stellar nucleosynthesis.md)
- [Cluster ages from CMD turnoff](../../02_Zettel/Theory/Cluster ages from CMD turnoff.md)
- [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md)
- [Cepheid period-luminosity relation](../../02_Zettel/Theory/Cepheid period-luminosity relation.md)
- [TRGB tip of the red giant branch](../../02_Zettel/Theory/TRGB tip of the red giant branch.md)
