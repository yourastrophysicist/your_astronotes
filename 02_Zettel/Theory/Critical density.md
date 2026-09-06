---
layout: default
title: "Critical density"
---

the **critical density** $n_c$ is the electron density at which collisional de-excitation balances spontaneous radiative decay for a given upper level. above $n_c$, the line saturates; below, it tracks $n_e$ linearly.

## the definition

$$\boxed{\, n_c \equiv \frac{A_{ul}}{q_{ul}(T_e)} \,}$$

with $A_{ul}$ the radiative decay rate (s$^{-1}$) and $q_{ul}$ the collisional de-excitation coefficient (cm$^3$ s$^{-1}$). units: cm$^{-3}$.

$n_c$ depends weakly on $T_e$ via $q_{ul}$. typical $T_e = 10^4$ K is the canonical value.

## the regimes

### $n_e \ll n_c$
collisional de-excitation negligible. every excitation produces a photon. emissivity $\propto n_e$.

### $n_e \gg n_c$
collisional de-excitation dominates. excited atoms are de-excited before radiating. emissivity saturates.

so $n_c$ marks the transition where the line "thermalises" and stops responding to density.

## values for common nebular forbidden lines

| line | $n_c$ at $T_e = 10^4$ K (cm$^{-3}$) |
|---|---|
| $[CII]\,\lambda 158\,\mu$m | $3 \times 10^3$ |
| $[OIII]\,\lambda 88\,\mu$m | $5 \times 10^2$ |
| $[OIII]\,\lambda 5007$ Å | $\sim 7 \times 10^5$ |
| $[OIII]\,\lambda 4363$ Å | $\sim 3 \times 10^7$ (much higher) |
| $[OII]\,\lambda 3727$ doublet | $\sim 5 \times 10^3$ |
| $[NII]\,\lambda 6584$ | $\sim 10^5$ |
| $[SII]\,\lambda 6716$ | $\sim 10^3$ |
| $[SII]\,\lambda 6731$ | $\sim 10^4$ |

note **$[OIII]\,\lambda 4363$ has a much higher $n_c$** than $\lambda 5007$, because the upper level (much higher in energy) has a faster $A$ rate.

## consequence: density diagnostic ratios

a pair of lines from **different upper levels** of the same multiplet, with **different $n_c$**, gives a density-sensitive ratio. classic examples:

### $[SII]$ doublet ratio
$\lambda 6716$ ($n_c \sim 10^3$) and $\lambda 6731$ ($n_c \sim 10^4$).
- at $n_e \ll 10^3$: ratio $\sim 1.5$ (statistical-weight ratio, both lines in low-$n_e$ regime).
- at $n_e \gtrsim 10^4$: ratio $\sim 0.4$ (one line saturates first).
- transition: monotonic over $10^2 < n_e < 10^4$ cm$^{-3}$, useful diagnostic.

### $[OII]\,\lambda 3729/3726$ ratio
similar physics with $\lambda 3729$ ($n_c \sim 10^3$) and $\lambda 3726$ ($n_c \sim 10^4$).

## consequence: temperature diagnostic ratios

a pair of lines from **different upper levels** of the same ion, with very different excitation energies $\Delta E$, gives a temperature-sensitive ratio:

### $[OIII]\,\lambda 4363/(\lambda 4959+5007)$
$\lambda 4363$ from upper level $^1S_0$ (energy $\sim 5.4$ eV).
$\lambda 4959, 5007$ from upper level $^1D_2$ (energy $\sim 2.5$ eV).
ratio $\propto e^{-(5.4-2.5)/k_BT_e} = e^{-2.9/k_BT_e}$, very $T_e$-sensitive.

practical: at $T_e = 8000$ K, ratio $\sim 0.005$. at $T_e = 15\,000$ K, ratio $\sim 0.05$, factor $10$ change. the standard nebular thermometer.

caveat: $\lambda 4363$ has high $n_c$ ($\sim 3 \times 10^7$), so at high $n_e$ it saturates differently from the other two. modern analyses include the density correction.

## why forbidden lines have low $n_c$

because $A_{ul}$ is small for forbidden transitions ($10^{-2}$ to $10^0$ s$^{-1}$ vs $10^7$ to $10^9$ for permitted). so collisional de-excitation can compete at modest $n_e$.

permitted lines have $n_c \sim 10^{13}$ cm$^{-3}$ or higher; in nebular conditions they're always in low-density regime, so their populations are set entirely by ionisation balance, not by collisional vs radiative balance.

## see also

- [Two-level atom](../../02_Zettel/Theory/Two-level atom.md)
- [Statistical equilibrium equations](../../02_Zettel/Theory/Statistical equilibrium equations.md)
- [Collisional excitation rate](../../02_Zettel/Theory/Collisional excitation rate.md)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.md)
- [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.md)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.md)
- [Spectroscopic ne diagnostics](../../02_Zettel/Theory/Spectroscopic ne diagnostics.md)
- [Spectroscopic Te diagnostics](../../02_Zettel/Theory/Spectroscopic Te diagnostics.md)
