---
layout: default
title: "Helium population vs T"
---

helium is harder to excite than hydrogen ($\chi_{HeI} = 24.6$ eV, $\chi_{HeII} = 54.4$ eV), so its line strengths peak at much higher temperatures. the He I and He II lines are the central diagnostics for OB stars.

## the setup

He has two ionisation potentials:
- $\chi_{\rm HeI} = 24.6$ eV (to make He$^+$).
- $\chi_{\rm HeII} = 54.4$ eV (to make He$^{2+}$).

Saha balance gives fractions $f_{\rm HeI}, f_{\rm HeII}, f_{\rm HeIII}$ of He in each stage at temperature $T$ and density $n_e$.

within each stage, Boltzmann gives level populations.

## He I line strength

He I lines come from excited levels of neutral He, e.g. $\lambda 4471$ from $4\,^3D \to 2\,^3P^o$. the lower level $2\,^3P$ is at $\sim 21$ eV above ground.

so in the line-forming layer, $f_{2\,^3P}(T) = f_{\rm HeI} \cdot e^{-21/k_BT} \cdot g_2/Z_{\rm HeI}$.

at low $T$: $e^{-21/k_BT}$ is tiny.
at high $T$ ($> 30\,000$ K): $f_{\rm HeI}$ drops as Saha ionises to He$^+$.

peak: $T \sim 22\,000$ K (B2 stars). quantitatively the maximum line strength of He I $\lambda 4471$ is in B2 V.

## He II line strength

He II lines (singly ionised, hydrogenic) come from levels of He$^+$, e.g. $\lambda 4686$ from $4 \to 3$.
- requires $\chi = 54$ eV photons to make He$^+$ in the first place.
- the higher levels of He$^+$ are at much higher energies (since $E \propto Z^2$, factor of $4$).

so He II lines peak at $T \sim 40\,000$ K (O5 stars).

## comparison with H I

| species | first appears | peak | disappears |
|---|---|---|---|
| H Balmer | F0 | A0 ($\sim 10\,000$ K) | mid-B (ionised) |
| He I | mid-B (~B5) | B2 ($\sim 22\,000$ K) | early O |
| He II | O8 | O5 ($\sim 40\,000$ K) | continues into Wolf-Rayet |

each species "passes the baton" to the next as $T$ increases, exactly because of the matching Saha + Boltzmann balance.

## thermometers in OB stars

since H is essentially fully ionised in OB stars (no Balmer to use), He I / He II line ratios become the temperature thermometers:
- B-star $T$: He I $\lambda 4471$ line strength.
- O-star $T$: He II $\lambda 4686$ / He I $\lambda 4471$.

a direct ratio bypasses the absolute Saha and gives $T$ from line ratios alone, much more robust.

## the user's plots

at `~/Documents/2/spectroscopy/Plots-20260501/`:
- `HeI_HeII_pop_T.png`: combined plot showing He I and He II vs $T$, peaks separated by factor $\sim 2$.
- `HeI_pop_T.png`: He I alone, bell curve peaked at $\sim 22\,000$ K.

both peaks have the characteristic Saha + Boltzmann shape: cold rise, hot fall.

## why para vs ortho doesn't matter for the curves

both singlet (para-) and triplet (ortho-) He I lines come from levels at similar $\sim 20$ eV excitation. their bell curves vs $T$ are essentially the same shape. orthohelium has a slightly more populated $2\,^3S$ level due to its triplet metastability, so He I $\lambda 5876$ (D3) is often slightly stronger than the singlet equivalent.

## see also

- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.html)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html)
- [Helium energy levels](../../02_Zettel/Theory/Helium energy levels.html)
- [Hydrogen population vs T](../../02_Zettel/Theory/Hydrogen population vs T.html)
- [Population of excited levels](../../02_Zettel/Theory/Population of excited levels.html)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.html)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.html)
