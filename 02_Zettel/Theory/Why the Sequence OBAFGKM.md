---
layout: default
title: "Why the Sequence OBAFGKM"
---

the most famous insight in stellar astrophysics: the OBAFGKM spectral sequence is just a **temperature ladder**, where each spectral type has its line-strength pattern determined by Saha + Boltzmann equilibrium for the dominant species. Cecilia Payne's 1925 PhD thesis cracked this open.

## the empirical pattern

Annie Cannon, working from photographic spectra, ordered stars by line-strength patterns into the famous letter sequence:
$$\text{O} \to \text{B} \to \text{A} \to \text{F} \to \text{G} \to \text{K} \to \text{M}$$
("Oh Be A Fine Girl/Guy Kiss Me", an aid that stuck.)

each class has a recognisable spectrum:
- **O** ($T = 30\,000$ to $50\,000$ K): He II + He I, very weak Balmer, faint metals.
- **B** ($T = 10\,000$ to $30\,000$ K): He I dominant, no He II, growing Balmer.
- **A** ($T = 7500$ to $10\,000$ K): Balmer maximum, weak metals.
- **F** ($T = 6000$ to $7500$ K): Balmer weakening, Ca II appearing.
- **G** ($T = 5200$ to $6000$ K): Ca II strong, Fe lines abundant. (Sun is G2.)
- **K** ($T = 3700$ to $5200$ K): Ca II saturated, Mg b strong, molecular CN appearing.
- **M** ($T < 3700$ K): TiO + VO bands dominate, atomic metals weak.

## why this is just a temperature sequence

Cecilia Payne (1925) showed by applying **Saha equation** + **Boltzmann equation** to the line-forming layer of stellar atmospheres that each species' line strength has a peak at a specific $T$:

| species | line peak | reason |
|---|---|---|
| He II | $T \sim 40\,000$ K (O5) | needs $h\nu > 54$ eV ionising photons |
| He I | $T \sim 22\,000$ K (B2) | excitation $E \sim 20$ eV needs hot environment, no He II yet |
| H I (Balmer) | $T \sim 9500$ K (A0) | need $n = 2$ population, but H not yet ionised |
| Ca II | $T \sim 5000$ K (G2-K) | most Ca singly ionised, ground state populated |
| Fe I, Na I | $T \sim 4000$ K (K) | most Fe, Na neutral; ionisation suppressed |
| TiO bands | $T \lesssim 3500$ K (M) | molecules survive only at low $T$ |

each peak is explained by the same pair of equations, evaluated at different $T$:
- **too cold**: lower-level population is OK but excitation up the species ladder is exponentially suppressed.
- **too hot**: ionisation removes the species.
- **peak**: a specific temperature where both balance.

Payne's revolutionary conclusion: **stars are made overwhelmingly of hydrogen and helium**, with all the visible spectral diversity reflecting only the temperature variation. before her, people thought the spectral sequence reflected variations in chemical composition.

## the visualisation

if you plot **fraction of element X in ionisation state $i$, level $n$** vs $T$, each species traces a bell curve peaked at the corresponding temperature. these curves naturally generate the OBAFGKM ordering when stacked.

the user has plot files at `~/Documents/2/spectroscopy/Plots-20260501/` showing exactly this:
- `HI_pop_T.png`: H I line strength vs $T$, peak at $\sim 10^4$ K.
- `HeI_HeII_pop_T.png`: He I and He II vs $T$, peak at $20\,000$ and $40\,000$ K.
- `MgI_pop_T.png`, `NaI_pop_T.png`, `CaKH_pop_T.png`: each species in turn.

## consequence: $T$ from spectrum

reading a stellar spectrum gives $T_{\rm eff}$ to $\sim 100$ K precision via line-strength patterns, even at low resolution. specific diagnostics:
- He II $\lambda 4686$ / He I $\lambda 4471$: the He ionisation balance, sets $T$ in O stars.
- Balmer line strength: peak indicates A type, declining either way.
- Ca II K / Mg b ratio: G/K transition.
- TiO band depth: indicates M type.

each ratio is a thermometer in the regime where both ions matter. modern stellar atmosphere codes (PHOENIX, MARCS) compute everything self-consistently and recover $T_{\rm eff}, \log g, [Fe/H]$ from a fit.

## see also

- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.html)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html)
- [Population of excited levels](../../02_Zettel/Theory/Population of excited levels.html)
- [Hydrogen population vs T](../../02_Zettel/Theory/Hydrogen population vs T.html)
- [Helium population vs T](../../02_Zettel/Theory/Helium population vs T.html)
- [Sodium population vs T](../../02_Zettel/Theory/Sodium population vs T.html)
- [Magnesium population vs T](../../02_Zettel/Theory/Magnesium population vs T.html)
- [Calcium population vs T](../../02_Zettel/Theory/Calcium population vs T.html)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.html)
- [History of stellar classification](../../02_Zettel/Theory/History of stellar classification.html)
- [MK luminosity classes](../../02_Zettel/Theory/MK luminosity classes.html)
- [Helium energy levels](../../02_Zettel/Theory/Helium energy levels.html)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- [Calcium and CaII H+K](../../02_Zettel/Theory/Calcium and CaII H+K.html)
- [Bolometric correction and effective temperature](../../02_Zettel/Theory/Bolometric correction and effective temperature.html)
