---
layout: default
title: "Hydrogen population vs T"
---

how the population of H atoms in a given level changes with temperature, illustrating Saha + Boltzmann competition. the canonical example.

## the setup

H total abundance $n_H$. ionisation balance (Saha):
$$\frac{n_p n_e}{n_{HI}} = \Phi(T)\,e^{-13.6/k_BT}$$
sets $f_{HI}(T) = n_{HI}/n_H$.

within neutral H, level populations (Boltzmann):
$$\frac{n_n}{n_{HI}} = \frac{g_n}{Z_{HI}}\,e^{-E_n/k_BT}$$
with $E_n = -13.6/n^2$ eV (Rydberg). $g_n = 2n^2$.

so the fraction of all H in the $n = 2$ level is:
$$f_{n=2}(T) = f_{HI}(T) \cdot \frac{g_2 e^{-E_2/k_BT}}{Z_{HI}}$$

## the bell curve

at low $T$: $f_{HI} \approx 1$ but $e^{-10.2/k_BT}$ is tiny. very few in $n = 2$.
at high $T$: $e^{-10.2/k_BT} \to 1$ but $f_{HI} \to 0$ (all ionised).
peak: balance between the two, at $T \sim 10^4$ K.

quantitatively, at the typical line-forming photospheric density $n_e \sim 10^{14}$ cm$^{-3}$:
- $T = 5800$ K (Sun): $f_{n=2} \sim 5 \times 10^{-9}$.
- $T = 7500$ K (F0): $\sim 10^{-7}$.
- $T = 10\,000$ K (A0): $\sim 10^{-5}$, the maximum.
- $T = 15\,000$ K (B5): $\sim 10^{-7}$, declining due to ionisation.
- $T = 25\,000$ K (B0): $\sim 10^{-9}$.

so Balmer line strength rises from G to A0, peaks, then falls toward earlier types.

## why A0 and not earlier or later

at $T = 7000$ K the Boltzmann factor $e^{-10.2/k_BT}$ is tiny: not enough atoms are in $n = 2$. at $T = 25\,000$ K Saha has ionised most of the hydrogen.

the maximum of the product $f_{HI} \cdot e^{-E_2/k_BT}$ in solar-photosphere conditions is at $T \approx 9500$ K, with the precise value depending on $n_e$. for higher gravity (smaller stars), the peak shifts to slightly lower $T$ because more pressure means less ionisation at any given $T$; the Balmer lines peak at $\sim$ A2 V instead of A0.

## the Balmer "jump"

at $\lambda < 3646$ Å, photons can ionise hydrogen from $n = 2$ via the bound-free continuum. the **Balmer jump** in stellar continua reflects exactly this: the higher $f_{n=2}$, the deeper the discontinuity. peaks at A0, faint in cooler and hotter stars. an excellent independent thermometer.

## the user's plot

at `~/Documents/2/spectroscopy/Plots-20260501/HI_pop_T.png`. shows $f_{n=2}(T)$ peaking around $10^4$ K, falling off symmetrically. the function is fundamentally Saha $\times$ Boltzmann.

## the punchline

H I lines become **strongest at $T \sim 10\,000$ K** (A-type stars) for a hard physical reason: the temperature where Boltzmann excitation just balances Saha ionisation. this is the central insight of Cecilia Payne 1925 and explains the position of A in the OBAFGKM sequence.

## see also

- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.html)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.html)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- [Helium population vs T](../../02_Zettel/Theory/Helium population vs T.html)
- [Population of excited levels](../../02_Zettel/Theory/Population of excited levels.html)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.html)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.html)
- Energy level diagrams Grötrian
