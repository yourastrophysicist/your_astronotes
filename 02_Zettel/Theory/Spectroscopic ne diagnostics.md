---
layout: default
title: "Spectroscopic ne diagnostics"
---

a **density diagnostic** in nebular spectroscopy is a line ratio sensitive to electron density $n_e$. relies on comparing emission from **multiplet sublevels with similar excitation energy but different $A$ values**, hence different critical densities.

## the canonical diagnostics

### $[SII]\,\lambda 6716/\lambda 6731$

the workhorse for $n_e \sim 10^2$ to $10^4$ cm$^{-3}$. doublet of S$^+$ from $^2D_{5/2,3/2} \to ^4S_{3/2}$ with similar excitation but $n_c$ values $\sim 10^3$ and $\sim 10^4$.

| $n_e$ (cm$^{-3}$) | $\lambda 6716/\lambda 6731$ |
|---|---|
| $10$ | $\sim 1.50$ |
| $100$ | $\sim 1.45$ |
| $10^3$ | $\sim 1.05$ |
| $10^4$ | $\sim 0.55$ |
| $10^5$ | $\sim 0.45$ |

see [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.md).

### $[OII]\,\lambda 3729/\lambda 3726$

similar physics for O$^+$. UV doublet, requires UV-capable spectrograph. comparable sensitivity.

### $[NII]\,\lambda 121/\lambda 205\,\mu$m

far-IR fine-structure lines. very low $n_c$, sensitive to densities $< 100$ cm$^{-3}$. used in IR observations (Herschel, ALMA) of dust-obscured systems.

### $[ClIII]\,\lambda 5517/\lambda 5538$

higher density regime, $n_e \sim 10^3$ to $10^5$. used in some PNe.

### $[ArIV]\,\lambda 4711/\lambda 4740$

higher density still, $n_e \sim 10^3$ to $10^6$.

### $[NeIV]\,\lambda 2422/\lambda 2425$

UV doublet, $n_e \sim 10^4$ to $10^6$. used in AGN narrow-line region.

## the high-density regime: AGN BLR

at $n_e > 10^9$ cm$^{-3}$ (AGN broad-line region), forbidden lines are completely suppressed. only **permitted lines** survive, and density is inferred indirectly from continuum + line variability (reverberation mapping).

## the low-density regime: diffuse ISM

$n_e < 1$ cm$^{-3}$. forbidden-line ratios approach the statistical-weight ratio (low-density limit) and saturate. need very low-$n_c$ FIR fine-structure lines to distinguish $n_e \sim 0.01$ from $n_e \sim 1$ cm$^{-3}$.

## practical procedure

1. measure both line fluxes (correct for dust).
2. compute ratio.
3. read $n_e$ off the appropriate diagnostic curve. PyNeb does this for any tabulated diagnostic.

precision: limited by line-flux measurement and instrumental resolution. typical $\pm 0.3$ dex in $n_e$.

## see also

- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.md)
- [Spectroscopic Te diagnostics](../../02_Zettel/Theory/Spectroscopic Te diagnostics.md)
- [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.md)
- [Critical density](../../02_Zettel/Theory/Critical density.md)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.md)
- [Equivalent vs nonequivalent electrons](../../02_Zettel/Theory/Equivalent vs nonequivalent electrons.md)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.md)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.md)
- [Planetary nebula spectroscopy](../../02_Zettel/Theory/Planetary nebula spectroscopy.md)
