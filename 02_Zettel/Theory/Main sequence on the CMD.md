---
layout: default
name: Main sequence on the CMD
description: core hydrogen burning, mass-luminosity relation, lifetime scaling, and the ZAMS-to-TAMS evolution
---

the main sequence is the locus, on the [HR diagram](../../02_Zettel/Theory/HR diagram.html) or its observational CMD counterpart, where stars spend $\sim 90\%$ of their nuclear-burning life. the defining interior physics is *stable core hydrogen burning*: a star burns H to He in its central regions, and the gravitational pressure of the overlying envelope is balanced by the radiation+gas pressure produced by that burning, in hydrostatic and thermal equilibrium.

two regimes split the MS by the dominant nuclear cycle. for $M \lesssim 1.2 \, M_\odot$ (low-mass MS) hydrogen burns mainly via the **pp chain**, with weak temperature dependence ($\epsilon_\mathrm{pp} \propto T^4$ near $T \sim 10^7$ K). low-mass stars therefore have *radiative cores* and a convective envelope (the convection zone deepens at lower mass; below $\sim 0.35 \, M_\odot$ the star is fully convective). for $M \gtrsim 1.2 \, M_\odot$ (intermediate and high mass) the **CNO cycle** dominates, with $\epsilon_\mathrm{CNO} \propto T^{17}$, the steep temperature dependence forcing a *convective core* and a radiative envelope. the convective core stores fresh fuel via mixing and drives the small "hook" feature near the TO at H exhaustion.

the **mass-luminosity relation** along the MS is approximately a broken power law $L \propto M^\alpha$, with $\alpha \approx 4$ for low mass ($0.5 \lesssim M/M_\odot \lesssim 2$, dominated by Kramers opacity and pp burning) and $\alpha \approx 3$ for high mass ($M \gtrsim 10 \, M_\odot$, where electron-scattering opacity and radiation pressure flatten the slope). a useful single-power approximation across the bulk of the MS is $L \propto M^{3.5}$. at the very low end ($M \lesssim 0.5 \, M_\odot$) the slope steepens to $\alpha \sim 2.3$, and at the very high end ($M \gtrsim 50 \, M_\odot$) it flattens further toward $L \propto M$ as the eddington limit is approached.

a quick derivation of the **MS lifetime** scaling. the energy reservoir is the rest-mass equivalent of $\sim 10\%$ of the stellar mass converted at $\sim 0.7\%$ efficiency into radiation: $E_\mathrm{nuc} \sim 0.007 \times 0.1 \times M c^2 \propto M$. the burning rate is $L$. so
$$ \tau_\mathrm{MS} = \frac{E_\mathrm{nuc}}{L} \propto \frac{M}{L} \propto M^{1-\alpha} \approx M^{-2.5} $$
calibrating to the sun's $\tau_\odot \sim 10^{10}$ yr gives the headline relation
$$ \tau_\mathrm{MS} \approx 10 \, (M/M_\odot)^{-2.5} \, \mathrm{Gyr}. $$
a $0.85 \, M_\odot$ star therefore takes $\sim 13$ Gyr to leave the MS, which is exactly the main sequence turn-off mass for the oldest GCs. a $10 \, M_\odot$ star takes only $\sim 30$ Myr; a $50 \, M_\odot$ star $\sim 5$ Myr.

**ZAMS to TAMS.** the **zero-age main sequence** (ZAMS) is the locus of stars at chemical homogeneity with central H mass fraction $X_c = X_0$ (typically $0.7$). as H burns, $X_c$ drops, the mean molecular weight $\mu$ rises, and to maintain hydrostatic equilibrium the core contracts and heats. luminosity and radius therefore *increase* slowly during MS evolution: a star moves *upwards* and *slightly redward* from the ZAMS toward the **terminal-age main sequence** (TAMS) at $X_c = 0$. the TAMS sits about $\sim 0.3$ to $0.7$ mag brighter than the ZAMS in V depending on mass.

on a CMD this slow MS expansion produces a *finite-thickness MS band* rather than a single line: the band's blue edge is the ZAMS, the red edge is the TAMS, the width grows with age until the entire upper MS empties and folds into the main sequence turn-off. for old GCs the band is thin only because the unevolved low-MS stars dominate; the sub-TO part of the MS (within $\sim 1$ mag of the TO) shows the ZAMS-to-TAMS spread clearly.

operational uses on the CMD: **MS fitting** uses the position of an empirical or theoretical ZAMS in colour and magnitude to derive the cluster distance modulus once $[\mathrm{Fe}/\mathrm{H}]$ and reddening are known. **MS width** at fixed magnitude probes binary fraction (a binary sequence sits $\sim 0.75$ mag above the single-star MS) and differential reddening. **MS slope** in different colours probes the assumed photometric system and atmospheres library.

the lower MS ($M \lesssim 0.5 \, M_\odot$) is the longest-lived part of any cluster: even the oldest GCs still have full M-dwarf populations, which makes the lower MS an evolution-free reference for distance and reddening work.

## see also
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.html)
- [HR diagram](../../02_Zettel/Theory/HR diagram.html)
- [Stellar evolutionary phases on the CMD](../../02_Zettel/Theory/Stellar evolutionary phases on the CMD.html)
- [Main sequence turn-off as age indicator](../../02_Zettel/Theory/Main sequence turn-off as age indicator.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- Distance modulus from CMD
