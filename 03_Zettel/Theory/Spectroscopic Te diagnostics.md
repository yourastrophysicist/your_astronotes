---
layout: "default"
title: "Spectroscopic Te diagnostics"
---
a **temperature diagnostic** in nebular spectroscopy is a line ratio sensitive to electron temperature $T_e$. all rely on comparing emission from levels with **different excitation energies**, where the Boltzmann factor doesn't cancel.

## the canonical diagnostics

### $[OIII]\,\lambda 4363/(\lambda 4959 + \lambda 5007)$

the workhorse. $\lambda 4363$ from $^1S_0 \to ^1D_2$ ($\sim 5.4$ eV upper); $\lambda 4959, 5007$ from $^1D_2 \to ^3P_{1, 2}$ ($\sim 2.5$ eV upper). ratio $\propto e^{-2.9/k_BT_e}$ in the low-density limit.

practical: at $T_e = 8000$ K, ratio $\sim 0.005$; at $T_e = 12\,000$ K, $\sim 0.025$; at $T_e = 20\,000$ K, $\sim 0.06$.

caveat: $\lambda 4363$ has high $n_c \sim 3 \times 10^7$ cm$^{-3}$. at $n_e > 10^5$, density correction needed.

see [OIII forbidden lines](OIII%20forbidden%20lines.html) for full discussion.

### $[NII]\,\lambda 5755/(\lambda 6548 + \lambda 6584)$

similar physics for N$^+$. $\lambda 5755$ from a higher upper level. comparable temperature sensitivity, slightly different ionisation regime than $[OIII]$ (since N$^+$ exists at lower ionisation).

### $[OII]\,\lambda 7320, 7330/(\lambda 3726, 3729)$

O$^+$ analogue. accessible to red-sensitive spectrographs.

### $[SIII]\,\lambda 6312/(\lambda 9069 + 9532)$

S$^{2+}$ diagnostic. extends to NIR.

### $[NeIII]\,\lambda 3343/\lambda 3869$

higher-ionisation regime, used in PNe and AGN.

## practical procedure

1. measure both line fluxes (correct for dust via Balmer decrement).
2. compute ratio.
3. apply density correction (small for typical HII region $n_e$).
4. read $T_e$ off a tabulated curve or use PyNeb.

precision: $\pm 500$ to $\pm 1000$ K typically, limited by line-flux measurement uncertainties.

## why this matters

once $T_e$ is known:
- abundances follow from line emissivities.
- ionisation balance can be predicted.
- physical conditions in the nebula are pinned down.

direct $T_e$ method: pioneered by Aller, Peimbert, Stasińska. used today for hundreds of HII regions in galaxies and most well-observed PNe.

## the metallicity connection

$T_e$ is **anti-correlated with metallicity** (since metal-line cooling is the dominant cooling mechanism, see [Equilibrium temperature](Equilibrium%20temperature.html)):
- $\log(O/H) \sim 8.0$ (1/3 solar): $T_e \sim 12\,000$ K.
- $\log(O/H) \sim 8.7$ (solar): $T_e \sim 8500$ K.
- $\log(O/H) \sim 7.5$ (very metal-poor): $T_e \sim 18\,000$ K.

so direct $T_e$ measurement gives metallicity. modern abundance work uses this extensively.

## see also

- [Forbidden line diagnostics](Forbidden%20line%20diagnostics.html)
- [OIII forbidden lines](OIII%20forbidden%20lines.html)
- [SII forbidden lines](SII%20forbidden%20lines.html)
- [Spectroscopic ne diagnostics](Spectroscopic%20ne%20diagnostics.html)
- [Two-level atom](Two-level%20atom.html)
- [Critical density](Critical%20density.html)
- [Cooling rate in HII regions](Cooling%20rate%20in%20HII%20regions.html)
- [Equilibrium temperature](Equilibrium%20temperature.html)
- [Metallicity and chemical evolution](Metallicity%20and%20chemical%20evolution.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Collisional%20excitation%20rate.html" class="backlink-item">Collisional excitation rate</a></li>
    <li class="backlink-item-wrap"><a href="Critical%20density.html" class="backlink-item">Critical density</a></li>
    <li class="backlink-item-wrap"><a href="Equilibrium%20temperature.html" class="backlink-item">Equilibrium temperature</a></li>
    <li class="backlink-item-wrap"><a href="Forbidden%20line%20diagnostics.html" class="backlink-item">Forbidden line diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Forbidden%20lines.html" class="backlink-item">Forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="Ionisation%20parameter%20and%20ionisation%20state.html" class="backlink-item">Ionisation parameter and ionisation state</a></li>
    <li class="backlink-item-wrap"><a href="OIII%20forbidden%20lines.html" class="backlink-item">OIII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20ne%20diagnostics.html" class="backlink-item">Spectroscopic ne diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Two-level%20atom.html" class="backlink-item">Two-level atom</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

