---
layout: "default"
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

see [SII forbidden lines](SII%20forbidden%20lines.html).

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

- [Forbidden line diagnostics](Forbidden%20line%20diagnostics.html)
- [Spectroscopic Te diagnostics](Spectroscopic%20Te%20diagnostics.html)
- [SII forbidden lines](SII%20forbidden%20lines.html)
- [Critical density](Critical%20density.html)
- [Two-level atom](Two-level%20atom.html)
- [Equivalent vs nonequivalent electrons](Equivalent%20vs%20nonequivalent%20electrons.html)
- [Ionisation parameter U](Ionisation%20parameter%20U.html)
- [H II region spectroscopy](H%20II%20region%20spectroscopy.html)
- [Planetary nebula spectroscopy](Planetary%20nebula%20spectroscopy.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Critical%20density.html" class="backlink-item">Critical density</a></li>
    <li class="backlink-item-wrap"><a href="Forbidden%20line%20diagnostics.html" class="backlink-item">Forbidden line diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Forbidden%20lines.html" class="backlink-item">Forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="Ionisation%20parameter%20and%20ionisation%20state.html" class="backlink-item">Ionisation parameter and ionisation state</a></li>
    <li class="backlink-item-wrap"><a href="SII%20forbidden%20lines.html" class="backlink-item">SII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20Te%20diagnostics.html" class="backlink-item">Spectroscopic Te diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Two-level%20atom.html" class="backlink-item">Two-level atom</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

