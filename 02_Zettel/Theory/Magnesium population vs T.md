---
layout: default
title: "Magnesium population vs T"
---

Mg has $\chi_{\rm MgI} = 7.65$ eV (modest) and $\chi_{\rm MgII} = 15$ eV. Mg I lines (notably the b-triplet at $\sim 5170$ Å) appear in cool to intermediate stars; Mg II h+k at UV $2800$ Å in hotter ones.

## Mg I b-triplet

lower level of b-triplet is $3\,^3S_1$ at $2.7$ eV above ground (it's an excited triplet). so the line strength scales as
$$f(T) = f_{\rm MgI}(T) \cdot e^{-2.7/k_BT}\,g/Z$$

Boltzmann factor needs $T$ high enough to populate $3\,^3S$, but Saha needs $T$ low enough to keep Mg neutral.

peak: $T \sim 5000$ K (G stars, including Sun). Mg I b is strongest in solar-type stars.

at lower $T$ ($M$ stars): the $3\,^3S$ level is too far above ground to be appreciably populated (Boltzmann suppresses), so Mg I b weakens despite full neutrality.

at higher $T$ ($A$ stars): Saha ionises away the neutral Mg, lines weaken.

## Mg II h+k

Mg II ground is $3s^1$, just like H or alkalis. h+k transitions $3p \to 3s$:
- **k**: $\lambda 2796$ Å.
- **h**: $\lambda 2803$ Å.

these are **resonance lines** of Mg II (from the ground), so accessible to any photon at those wavelengths. very strong in:
- A and F stars in the UV.
- ISM along QSO sight lines (Mg II absorbers at $z \sim 0.5$ to $2$).
- AGN broad-line regions.
- chromospheres of cool stars (emission cores).

peak strength as Mg II in stellar populations: $T \sim 8000$ to $10\,000$ K (A0), where Saha favours singly ionised.

## the user's plot

`~/Documents/2/spectroscopy/Plots-20260501/MgI_pop_T.png` shows Mg I as a bell curve peaked at $\sim 5000$ K.

`MgI_stelle.png` shows Mg I b in actual stellar spectra of various types, demonstrating the peak at G.

## see also

- [Magnesium and alkali earths](../../02_Zettel/Theory/Magnesium and alkali earths.html)
- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.html)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html)
- [Population of excited levels](../../02_Zettel/Theory/Population of excited levels.html)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.html)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.html)
