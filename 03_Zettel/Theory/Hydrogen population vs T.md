---
layout: "default"
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

- [Boltzmann equation in spectroscopy](Boltzmann%20equation%20in%20spectroscopy.html)
- [Saha ionisation equation](Saha%20ionisation%20equation.html)
- [Hydrogen spectral series](Hydrogen%20spectral%20series.html)
- [Helium population vs T](Helium%20population%20vs%20T.html)
- [Population of excited levels](Population%20of%20excited%20levels.html)
- [Why the Sequence OBAFGKM](Why%20the%20Sequence%20OBAFGKM.html)
- [Stellar spectra and spectral classification](Stellar%20spectra%20and%20spectral%20classification.html)
- Energy level diagrams Grötrian

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Boltzmann%20equation%20in%20spectroscopy.html" class="backlink-item">Boltzmann equation in spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="Helium%20population%20vs%20T.html" class="backlink-item">Helium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="History%20of%20stellar%20classification.html" class="backlink-item">History of stellar classification</a></li>
    <li class="backlink-item-wrap"><a href="Hydrogen%20spectral%20series.html" class="backlink-item">Hydrogen spectral series</a></li>
    <li class="backlink-item-wrap"><a href="Population%20of%20excited%20levels.html" class="backlink-item">Population of excited levels</a></li>
    <li class="backlink-item-wrap"><a href="Saha%20ionisation%20equation.html" class="backlink-item">Saha ionisation equation</a></li>
    <li class="backlink-item-wrap"><a href="Why%20the%20Sequence%20OBAFGKM.html" class="backlink-item">Why the Sequence OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

