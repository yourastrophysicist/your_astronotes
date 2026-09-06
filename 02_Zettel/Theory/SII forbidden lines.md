---
layout: default
title: "SII forbidden lines"
---

$[SII]$ forbidden lines are the **workhorse density diagnostic** in photoionised nebulae, sensitive to electron density in the range $n_e \sim 10^2$ to $10^4$ cm$^{-3}$ where most HII regions sit.

## the doublet

singly ionised sulphur S$^+$ has $3p^3$ valence configuration. terms (see [Equivalent vs nonequivalent electrons](../../02_Zettel/Theory/Equivalent vs nonequivalent electrons.html)):
- ground $^4S_{3/2}$.
- $^2D_{5/2}$ and $^2D_{3/2}$, fine-structure split.
- $^2P_{1/2, 3/2}$.

the $[SII]$ doublet:
- **$\lambda 6716.4$ Å**: $^2D_{5/2} \to ^4S_{3/2}$, $A = 2.6 \times 10^{-4}$ s$^{-1}$.
- **$\lambda 6730.8$ Å**: $^2D_{3/2} \to ^4S_{3/2}$, $A = 8.8 \times 10^{-4}$ s$^{-1}$.

the two lines come from **different upper levels** ($J = 5/2$ and $J = 3/2$), with very similar excitation energies ($\sim 1.84$ eV) but different $A$ values.

## why it's a density diagnostic

the two lines have:
- very similar excitation energies $\to$ Boltzmann factor cancels in their ratio (eliminates $T_e$ sensitivity).
- different $A$ values $\to$ different critical densities:
  - $\lambda 6716$: $n_c \approx 10^3$ cm$^{-3}$.
  - $\lambda 6731$: $n_c \approx 10^4$ cm$^{-3}$.

so each line saturates at a different density. the ratio $F(\lambda 6716)/F(\lambda 6731)$ varies over the density range $10^2 \le n_e \le 10^5$ cm$^{-3}$:

| $n_e$ (cm$^{-3}$) | $F(6716)/F(6731)$ |
|---|---|
| $10$ | $\sim 1.50$ |
| $10^2$ | $\sim 1.45$ |
| $10^3$ | $\sim 1.05$ |
| $10^4$ | $\sim 0.55$ |
| $10^5$ | $\sim 0.45$ |

at low $n_e$, both lines in the **low-density regime**: emissivities $\propto n_e \cdot$ (statistical weight)$\cdot$ (excitation rate). ratio is the upper-level statistical-weight ratio.

at high $n_e$, both in the **high-density regime**: emissivities $\propto n \cdot A$. ratio is set by the $A$ values.

between, the ratio drops smoothly from $\sim 1.5$ to $\sim 0.45$. this is the diagnostic curve.

## how to use it

1. measure the integrated flux of both lines.
2. compute the ratio $R = F(\lambda 6716)/F(\lambda 6731)$.
3. read $n_e$ off a tabulated diagnostic curve (Osterbrock & Ferland 2006, table 5.1).
4. for $1.5 > R > 1$: low-density regime, $n_e$ poorly constrained ($< 100$ cm$^{-3}$).
5. for $0.5 < R < 1.5$: density well-constrained.
6. for $R < 0.5$: high-density limit, $n_e > 10^4$ cm$^{-3}$.

## practical issues

- **resolution**: at $R \lesssim 5000$, the doublet is unresolved. need at least $R = 3000$ to separate them at $T_e \sim 10^4$ K thermal Doppler width.
- **sky lines**: the wavelength range often has sky line residuals; careful sky subtraction needed.
- **integration**: for spatially resolved studies, the integrated $[SII]$ flux measures $\int n_e n_S\,dV$, weighted by emissivity.

## comparison with other density diagnostics

| line pair | density range (cm$^{-3}$) |
|---|---|
| $[SII]\,\lambda 6716/6731$ | $10^2$ to $10^4$ |
| $[OII]\,\lambda 3729/3726$ | $10^2$ to $10^4$ (similar physics, in UV) |
| $[CII]\,\lambda 158\,\mu$m / $[OIII]\,\lambda 88\,\mu$m | $10^2$ to $10^4$ (FIR) |
| $[NeIV]\,\lambda 1602/1486$ | $10^4$ to $10^6$ |
| $[ArIV]\,\lambda 4711/4740$ | $10^3$ to $10^5$ |

so $[SII]$ is the most-used because the wavelengths are accessible and the lines are bright in HII regions.

## see also

- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.html)
- [Critical density](../../02_Zettel/Theory/Critical density.html)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.html)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.html)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.html)
- [Spectroscopic ne diagnostics](../../02_Zettel/Theory/Spectroscopic ne diagnostics.html)
- [Equivalent vs nonequivalent electrons](../../02_Zettel/Theory/Equivalent vs nonequivalent electrons.html)
- [Selection rules](../../02_Zettel/Theory/Selection rules.html)
- [BPT diagram](../../02_Zettel/Theory/BPT diagram.html)
