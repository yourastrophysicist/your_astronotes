---
layout: "default"
title: "Forbidden line diagnostics of electron temperature and density"
name: "Forbidden line diagnostics of electron temperature and density"
description: "quantum configurations p2 and p3, critical densities, and mathematical ratios for Te and ne determinations"
---
{% raw %}
collisionally excited forbidden lines ([O III], [N II], [O II], [S II]) dominate the radiative cooling of H II regions and serve as optical plasma diagnostics.

## electron temperature diagnostic: [O III] ($p^2$ configuration)

the $p^2$ configuration of $O^{2+}$ yields ground term $^3P$ and metastable states $^1D_2$ ($2.51\text{ eV}$) and $^1S_0$ ($5.36\text{ eV}$). the high excitation threshold of $^1S_0$ makes excitation sensitive to the high-velocity Maxwellian tail.

prof. carraro's equation for the flux ratio:

$$\frac{F(\lambda 4363)}{F(\lambda 4959) + F(\lambda 5007)} = 0.132 \times e^{-32970 / T_e}$$

- auroral line: [O III] $\lambda 4363$ ($^1S_0 \rightarrow ^1D_2$)
- nebular lines: [O III] $\lambda 4959, 5007$ ($^1D_2 \rightarrow ^3P_{1, 2}$) with fixed ratio $I(5007)/I(4959) \approx 2.88$

this ratio measures electron temperature $T_e$ independently of density for $n_e < n_{\text{crit}} \approx 7 \times 10^5\text{ cm}^{-3}$.

## electron density diagnostic: [S II] ($p^3$ configuration)

the $p^3$ configuration of $S^+$ yields ground state $^4S_{3/2}$ and doublet $^2D_{5/2}$ ($1.846\text{ eV}$) and $^2D_{3/2}$ ($1.842\text{ eV}$). having virtually identical excitation energies, their excitation ratio is fixed by statistical weights ($g_2/g_3 = 6/4$). their radiative decay rates differ: $A_{21} = 8.82 \times 10^{-4}\text{ s}^{-1} (\lambda 6731)$ vs $A_{31} = 2.60 \times 10^{-4}\text{ s}^{-1} (\lambda 6717)$.

with $x \equiv 10^{-2} \frac{n_e}{T_e^{1/2}}$:

$$\frac{F(\lambda 6717)}{F(\lambda 6731)} = 1.49 \left(\frac{1 + 3.77 x}{1 + 12.8 x}\right)$$

### limiting cases:
1. **Low-density limit ($n_e \rightarrow 0$)**: collisional de-excitation is negligible; all collisions emit photons:
   $$\frac{F(6717)}{F(6731)} \rightarrow 1.49 \approx \frac{g_2}{g_3} = \frac{6}{4} = 1.50$$
2. **High-density limit ($n_e \rightarrow \infty$)**: collisional de-excitation thermalizes populations to Boltzmann ratio:
   $$\frac{F(6717)}{F(6731)} \rightarrow 1.49 \times \frac{3.77}{12.8} \approx 0.44 \approx \frac{g_3 A_{31}}{g_2 A_{21}}$$

the ratio is a sensitive barometer for $n_e \sim 10^2 - 10^4\text{ cm}^{-3}$. an identical diagnostic applies to [O II] $\lambda 3729 / \lambda 3726$.

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [HII regions and Stromgren sphere physics](./HII%20regions%20and%20Stromgren%20sphere%20physics.html)
- [Primordial helium abundance from HII regions](./Primordial%20helium%20abundance%20from%20HII%20regions.html)
- [Carraro_03_HII_Regions_and_Photoionized_Gas](../../02_Literature/Lectures/Interstellar_Medium/Carraro_03_HII_Regions_and_Photoionized_Gas.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./BPT%20emission%20line%20diagnostic%20diagram.html" class="backlink-item">BPT emission line diagnostic diagram</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Interstellar_Medium/Carraro_03_HII_Regions_and_Photoionized_Gas.html" class="backlink-item">Carraro_03_HII_Regions_and_Photoionized_Gas</a></li>
    <li class="backlink-item-wrap"><a href="./HII%20regions%20and%20Stromgren%20sphere%20physics.html" class="backlink-item">HII regions and Stromgren sphere physics</a></li>
  </ul>
</div>
