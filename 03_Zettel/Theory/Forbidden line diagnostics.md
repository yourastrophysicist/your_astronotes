---
layout: "default"
title: "Forbidden line diagnostics"
---
{% raw %}
a quick-reference toolkit for using forbidden-line ratios to measure plasma conditions: $T_e$, $n_e$, ionisation state, abundances. the everyday workhorse of nebular spectroscopy.

## temperature diagnostics

ratio of two lines from **different upper levels of the same ion** with very different excitation energies. the Boltzmann factor doesn't cancel.

| ratio | sensitive range |
|---|---|
| $[OIII]\,\lambda 4363/(\lambda 4959 + 5007)$ | $T_e = 5000$ to $25\,000$ K |
| $[NII]\,\lambda 5755/(\lambda 6548 + 6584)$ | $T_e = 5000$ to $20\,000$ K |
| $[OII]\,\lambda 7320, 7330/(\lambda 3726, 3729)$ | similar |
| $[SIII]\,\lambda 6312/(\lambda 9069, 9532)$ | similar |

best for HII regions and PNe at $T_e \sim 10^4$ K. see [OIII forbidden lines](./OIII%20forbidden%20lines.html) for the canonical case.

## density diagnostics

ratio of two lines from **different upper levels of the same multiplet** with similar excitation but different $A$. the Boltzmann factor cancels.

| ratio | sensitive range |
|---|---|
| $[SII]\,\lambda 6716/\lambda 6731$ | $n_e = 10^2$ to $10^4$ cm$^{-3}$ |
| $[OII]\,\lambda 3729/3726$ | $n_e = 10^2$ to $10^4$ cm$^{-3}$ |
| $[ArIV]\,\lambda 4711/\lambda 4740$ | $n_e = 10^3$ to $10^5$ |
| $[NeIV]\,\lambda 2422/\lambda 2425$ | $n_e = 10^4$ to $10^6$ |

best for typical HII regions and PNe. see [SII forbidden lines](./SII%20forbidden%20lines.html).

## ionisation diagnostics

ratio of two lines from **different ionisation stages of the same element**, isolating the ionisation balance.

| ratio | what it traces |
|---|---|
| $[OIII]\,\lambda 5007/[OII]\,\lambda 3727$ | ionisation parameter $U$, hardness of radiation |
| $[NII]/[OIII]$ | metallicity at fixed $U$ |
| $[OIII]\,\lambda 5007/H\beta$ | ionisation + temperature combined |
| $[OII]/H\beta$ | low-ionisation tracer, less abundant gas |

these enter the **BPT diagram** for AGN classification. see [BPT diagram](./BPT%20diagram.html).

## abundance diagnostics

once $T_e$ and $n_e$ are known, the **direct method** for abundances:
$$\frac{n(O^{2+})}{n(H^+)} \approx \frac{F([OIII]\,\lambda 5007)}{F(H\beta)}\cdot\frac{j(H\beta)/n_p^2}{j(\lambda 5007)/n_e\,n_{O^{2+}}}$$

cross-multiply with line emissivities at known $T_e, n_e$. apply ionisation correction factors (ICFs) to account for unobserved ionisation stages.

modern: software like PyNeb (Luridiana et al. 2015) automates this.

**strong-line methods**: when $\lambda 4363$ is undetected, use empirical or theoretical calibrations of $R_{23} = ([OII] + [OIII])/H\beta$, $N2 = [NII]/H\alpha$, $O3N2 = ([OIII]/H\beta)/([NII]/H\alpha)$, etc. less precise than direct method.

## a typical analysis flow

for a spectrum of an HII region:

1. measure line fluxes: $H\alpha, H\beta, [OIII]\,4959, 5007, 4363, [SII]\,6716, 6731, [NII]\,6548, 6584, [OII]\,3727, ...$
2. **dust correction**: from $H\alpha/H\beta$ via [Balmer decrement](./Balmer%20decrement.html).
3. **density**: from $[SII]\,\lambda 6716/6731$.
4. **temperature**: from $[OIII]\,\lambda 4363/(\lambda 4959+5007)$.
5. **ionisation**: from $[OIII]/[OII]$.
6. **abundances**: direct method using $T_e, n_e$.
7. **classify**: BPT diagram for star-forming vs AGN.

a complete analysis takes a few iterations (since $T_e$ and $n_e$ are coupled), typically converged in $\sim 3$ steps.

## see also

- [Forbidden lines](./Forbidden%20lines.html)
- [OIII forbidden lines](./OIII%20forbidden%20lines.html)
- [SII forbidden lines](./SII%20forbidden%20lines.html)
- [Critical density](./Critical%20density.html)
- [Two-level atom](./Two-level%20atom.html)
- [Statistical equilibrium equations](./Statistical%20equilibrium%20equations.html)
- [BPT diagram](./BPT%20diagram.html)
- [Balmer decrement](./Balmer%20decrement.html)
- [Spectroscopic Te diagnostics](./Spectroscopic%20Te%20diagnostics.html)
- [Spectroscopic ne diagnostics](./Spectroscopic%20ne%20diagnostics.html)
- [Dust extinction in nebulae](./Dust%20extinction%20in%20nebulae.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (21)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./AGN%20spectroscopy.html" class="backlink-item">AGN spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./BPT%20diagram.html" class="backlink-item">BPT diagram</a></li>
    <li class="backlink-item-wrap"><a href="./Collisional%20excitation%20rate.html" class="backlink-item">Collisional excitation rate</a></li>
    <li class="backlink-item-wrap"><a href="./Cooling%20rate%20in%20HII%20regions.html" class="backlink-item">Cooling rate in HII regions</a></li>
    <li class="backlink-item-wrap"><a href="./Critical%20density.html" class="backlink-item">Critical density</a></li>
    <li class="backlink-item-wrap"><a href="./Dust%20extinction%20in%20nebulae.html" class="backlink-item">Dust extinction in nebulae</a></li>
    <li class="backlink-item-wrap"><a href="./Equilibrium%20temperature.html" class="backlink-item">Equilibrium temperature</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20lines.html" class="backlink-item">Forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20vs%20permitted%20vs%20semiforbidden%20transitions.html" class="backlink-item">Forbidden vs permitted vs semiforbidden transitions</a></li>
    <li class="backlink-item-wrap"><a href="./H%20II%20region%20spectroscopy.html" class="backlink-item">H II region spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Heating%20rate%20in%20HII%20regions.html" class="backlink-item">Heating rate in HII regions</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20parameter%20U.html" class="backlink-item">Ionisation parameter U</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20parameter%20and%20ionisation%20state.html" class="backlink-item">Ionisation parameter and ionisation state</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20stratification.html" class="backlink-item">Ionisation stratification</a></li>
    <li class="backlink-item-wrap"><a href="./OIII%20forbidden%20lines.html" class="backlink-item">OIII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./SII%20forbidden%20lines.html" class="backlink-item">SII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./Selection%20rules.html" class="backlink-item">Selection rules</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20Te%20diagnostics.html" class="backlink-item">Spectroscopic Te diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20ne%20diagnostics.html" class="backlink-item">Spectroscopic ne diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="./Two-level%20atom.html" class="backlink-item">Two-level atom</a></li>
  </ul>
</div>
