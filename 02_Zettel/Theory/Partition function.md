---
layout: default
title: "Partition function"
---

the **partition function** $Z(T)$ of an ion encodes the total weight of all its bound levels at temperature $T$. enters Saha + Boltzmann implicitly when many levels matter, and is tabulated in atomic-data libraries.

## the definition

$$Z(T) = \sum_k g_k\,e^{-E_k/k_BT}$$

sum over all bound levels $k$ of the ion, with $g_k$ the statistical weight ([Statistical weight g](../../02_Zettel/Theory/Statistical weight g.md)) and $E_k$ the energy above the ground state.

## limits

- at $T \to 0$: only ground populated, $Z \to g_{\rm ground}$.
- at high $T$: many excited levels populated, $Z$ grows.

example: H I at $T = 5800$ K (solar). ground at $0$, $n = 2$ at $10.2$ eV ($e^{-20.4} \sim 10^{-9}$), $n = 3$ at $12.1$ eV (smaller still). so $Z_{\rm HI}(5800) \approx g_1 = 2$ to better than $1\%$.

at $T = 20\,000$ K (B5), $k_BT = 1.7$ eV, $e^{-10.2/1.7} = e^{-6} \approx 0.0025$. now $Z_{\rm HI}(20\,000) \approx 2 + 8 \cdot 0.0025 + ...$, only $\sim 1\%$ correction. partition function is *still* close to $g_1$ because Saha takes over before excited levels matter.

## why it appears in Saha

the Saha equation written rigorously uses partition functions, not bare statistical weights:
$$\frac{n_{i+1} n_e}{n_i} = \frac{2 Z_{i+1}(T)}{Z_i(T)}\left(\frac{2\pi m_e k_BT}{h^2}\right)^{3/2}e^{-\chi/k_BT}$$

at most temperatures, $Z_i \approx g_i^{\rm ground}$ to a few percent (because excitation to high levels costs much more than $k_BT$). but in regimes where many levels are populated (large atoms, very high $T$, or near ionisation thresholds), the full $Z$ matters and is tabulated by Irwin 1981, Halenka & Madej, etc.

## practical truncation

the sum $Z = \sum g_k e^{-E_k/k_BT}$ formally diverges for hydrogenic ions because $g_n = 2n^2$ grows polynomially while $e^{-E_n/k_BT}$ approaches $1$ as $n \to \infty$. physically, the ion is ionised before reaching infinite $n$. the **partition-function regularisation**: truncate the sum at the level where the orbit size exceeds the average ion-ion separation (the "Mihalas" or "Hummer-Mihalas" cutoff, depending on density).

at typical stellar densities, this caps $n$ at $\sim 100$ to $300$, producing a finite $Z$.

## tabulated values

modern stellar-atmosphere codes (ATLAS9, MARCS, PHOENIX) have built-in partition functions from Kurucz or NIST data. for hand calculations, Allen's *Astrophysical Quantities* provides $Z_i(T)$ for common species.

quick-and-dirty: for most species below $T = 10^4$ K, $Z_i \approx g_i^{\rm ground}$ within $\sim 10\%$.

## see also

- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.md)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md)
- [Statistical weight g](../../02_Zettel/Theory/Statistical weight g.md)
- [Population of excited levels](../../02_Zettel/Theory/Population of excited levels.md)
- [Number density and energy density at thermal equilibrium](../../02_Zettel/Theory/Number density and energy density at thermal equilibrium.md) — analogous in cosmological / photon-gas context
