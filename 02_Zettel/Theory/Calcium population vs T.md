---
layout: default
title: "Calcium population vs T"
---

Ca has $\chi_{\rm CaI} = 6.11$ eV and $\chi_{\rm CaII} = 11.87$ eV, intermediate values. consequence: Ca II lines (especially the famous H + K at $3934, 3968$ Å) dominate stellar spectra in the largest temperature range of any species.

## Ca II H + K population

Ca II ground state is $4s^1\,^2S_{1/2}$, just like an alkali. the H + K resonance lines come from the ground, so the lower-level Boltzmann factor is $1$.

so the line strength is just $f_{\rm CaII}(T)$, the fraction of Ca in the singly-ionised stage.

at low $T$: most Ca is neutral $\to$ small $f_{\rm CaII}$, weak H + K.
at intermediate $T$: most Ca is $\rm Ca^+$, $f_{\rm CaII} \approx 1$, **maximum H + K strength**.
at high $T$: $\rm Ca^+$ ionises to $\rm Ca^{2+}$, $f_{\rm CaII}$ drops, H + K weakens.

the singly ionised regime is broad because $\chi_{\rm CaI}$ is small (easy to remove first electron) but $\chi_{\rm CaII}$ is much larger (hard to remove second). so a wide $T$ range keeps Ca in the $\rm Ca^+$ state.

## benchmark values

at typical $n_e$:
- $T = 3500$ K (M5): mostly Ca I, $f_{\rm CaII} \sim 0.1$.
- $T = 5800$ K (Sun, G2): $f_{\rm CaII} \approx 0.95$, **H + K dominant**.
- $T = 8000$ K (F0): $f_{\rm CaII} \approx 0.9$.
- $T = 10\,000$ K (A0): $f_{\rm CaII} \approx 0.7$.
- $T = 15\,000$ K (B5): $f_{\rm CaII}$ falls; Ca$^{2+}$ takes over.
- $T > 25\,000$ K: very little Ca II.

so Ca II H + K are strong from M through early A, peaking around G-K. the broadest temperature range of any species.

## the user's plot

`~/Documents/2/spectroscopy/Plots-20260501/CaKH_pop_T.png` shows the characteristic broad plateau, very different from the narrower bell curves of H I or Na I.

`CaKH_stelle.png` shows Ca II H + K in stars of various types, illustrating the maintained strength across G, F, K.

## why Ca II is so prominent in galaxy spectra

galaxy integrated light is dominated by **G and K stars** (most numerous in the IMF, longest MS lifetime). these stars all have very strong Ca II H + K. so old galaxy spectra show massive H + K absorption, contributing to the **$4000$ Å break** ([Calcium and CaII H+K](../../02_Zettel/Theory/Calcium and CaII H+K.md)).

so Ca II H + K are simultaneously:
- a **stellar temperature thermometer** in F-G-K dwarfs (line shape changes).
- a **luminosity discriminator** via line wings (pressure broadening differs between dwarfs and giants).
- a **galaxy redshift indicator** (the most-used absorption feature in $z \sim 0$ to $1$ surveys).
- a **velocity dispersion measurement tool** (line width = stellar kinematic dispersion in galaxies).

## the Ca II IR triplet

Ca II also has a strong NIR triplet at $8498, 8542, 8662$ Å from $3\,^2D \to 4\,^2P^o$. similar $T$ behaviour to H + K. preferred for galaxy velocity dispersions in the NIR clean continuum window.

## see also

- [Calcium and CaII H+K](../../02_Zettel/Theory/Calcium and CaII H+K.md)
- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.md)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md)
- [Population of excited levels](../../02_Zettel/Theory/Population of excited levels.md)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.md)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.md)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.md)
