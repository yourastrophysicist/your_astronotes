---
layout: "default"
title: "Two-level atom"
---
the simplest non-trivial atomic system: just two levels, ground $1$ and excited $2$, connected by one transition. the **two-level atom** is the toy problem that introduces the concept of **critical density** and the structure of forbidden-line emission.

## the rates

processes connecting the two levels:
- collisional excitation: $1 \to 2$ at rate $n_e q_{12}$.
- collisional de-excitation: $2 \to 1$ at rate $n_e q_{21}$.
- radiative spontaneous decay: $2 \to 1$ at rate $A_{21}$.
- (radiative absorption $1 \to 2$ from local radiation field; usually negligible in optically thin nebulae.)

in steady state, the population of level $2$ is set by **rates in $=$ rates out**:
$$n_1 n_e q_{12} = n_2 (A_{21} + n_e q_{21})$$

## solving for $n_2/n_1$

$$\frac{n_2}{n_1} = \frac{n_e q_{12}}{A_{21} + n_e q_{21}}$$

using detailed balance ($q_{12} = (g_2/g_1) e^{-E_{21}/k_BT_e} q_{21}$):
$$\frac{n_2}{n_1} = \frac{g_2}{g_1}\,e^{-E_{21}/k_BT_e}\,\frac{n_e q_{21}}{A_{21} + n_e q_{21}}$$

the first factor is the Boltzmann ratio (LTE result). the second is a correction from non-LTE.

## the two limits: critical density

define the **critical density**:
$$\boxed{\, n_c \equiv A_{21}/q_{21} \,}$$

then:

### low density ($n_e \ll n_c$)
$A_{21} \gg n_e q_{21}$. the second factor reduces to $n_e q_{21}/A_{21}$. so:
$$\frac{n_2}{n_1} \approx \frac{g_2}{g_1}\,e^{-E_{21}/k_BT_e}\,\frac{n_e}{n_c}$$
**every collisional excitation produces a photon**; line emissivity $\propto n_1 n_e q_{12}$, so $\propto n_e$ at fixed $T$.

### high density ($n_e \gg n_c$)
the second factor approaches $1$. so:
$$\frac{n_2}{n_1} \to \frac{g_2}{g_1}\,e^{-E_{21}/k_BT_e}$$
the Boltzmann ratio (LTE). collisional de-excitation removes excited atoms before they radiate. line emissivity saturates: $\propto A_{21}$, **independent of $n_e$**.

so the line "thermalises" at $n_e \sim n_c$.

## the line emissivity

$$j_\nu = n_2\,A_{21}\,h\nu/(4\pi)\,\phi(\nu)$$

at low $n_e$: $j \propto n_e n_1 \propto n_e^2$ in a fully ionised gas, $\propto e^{-E/k_BT_e}$.
at high $n_e$: $j \propto n_1 A_{21} \propto n_e$, no $e^{-E/k_BT_e}$ in the saturating regime.

## the diagnostic structure

### temperature diagnostics

if I take ratios of two transitions in the same atom with **different energy gaps**, the Boltzmann factor doesn't cancel:
$$\frac{j_1}{j_2} \propto \frac{e^{-E_1/k_BT_e}}{e^{-E_2/k_BT_e}} = e^{-(E_1 - E_2)/k_BT_e}$$
so the ratio is highly sensitive to $T_e$. this is the **temperature diagnostic** used by $[OIII]\,\lambda 4363/(\lambda 4959+5007)$ ([OIII forbidden lines](OIII%20forbidden%20lines.html)).

### density diagnostics

if I take ratios of two transitions from **different upper levels of the same multiplet** with very similar excitation energies but different $A_{21}$ and $q_{21}$, the Boltzmann factor cancels but the $n_e/n_c$ structure differs. this gives a **density diagnostic** like $[SII]\,\lambda 6716/\lambda 6731$ ([SII forbidden lines](SII%20forbidden%20lines.html)).

## why forbidden lines are special

forbidden lines have very small $A_{21}$ ($\sim 10^{-2}$ to $10^0$ s$^{-1}$ vs $10^7$ to $10^9$ for permitted). consequence: very low $n_c \sim 10^2$ to $10^7$ cm$^{-3}$. so in nebular conditions ($n_e \sim 10^2$ to $10^5$ cm$^{-3}$), forbidden lines transition between low and high regimes within the observable density range, making them excellent **density diagnostics**.

permitted lines have $n_c \sim 10^{14}$ cm$^{-3}$, so they're always in the low-$n_e$ regime in real nebulae. their ratios depend mostly on populations, not on $n_e$.

## see also

- [Statistical equilibrium equations](Statistical%20equilibrium%20equations.html)
- [Critical density](Critical%20density.html)
- [Collisional excitation rate](Collisional%20excitation%20rate.html)
- [Forbidden lines](Forbidden%20lines.html)
- [OIII forbidden lines](OIII%20forbidden%20lines.html)
- [SII forbidden lines](SII%20forbidden%20lines.html)
- [Forbidden line diagnostics](Forbidden%20line%20diagnostics.html)
- [Spectroscopic Te diagnostics](Spectroscopic%20Te%20diagnostics.html)
- [Spectroscopic ne diagnostics](Spectroscopic%20ne%20diagnostics.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (15)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Collisional%20excitation%20rate.html" class="backlink-item">Collisional excitation rate</a></li>
    <li class="backlink-item-wrap"><a href="Cooling%20rate%20in%20HII%20regions.html" class="backlink-item">Cooling rate in HII regions</a></li>
    <li class="backlink-item-wrap"><a href="Critical%20density.html" class="backlink-item">Critical density</a></li>
    <li class="backlink-item-wrap"><a href="Dilution%20factor.html" class="backlink-item">Dilution factor</a></li>
    <li class="backlink-item-wrap"><a href="Forbidden%20line%20diagnostics.html" class="backlink-item">Forbidden line diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Forbidden%20lines.html" class="backlink-item">Forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="Local%20thermodynamic%20equilibrium%20LTE.html" class="backlink-item">Local thermodynamic equilibrium LTE</a></li>
    <li class="backlink-item-wrap"><a href="OIII%20forbidden%20lines.html" class="backlink-item">OIII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="Optically%20thin%20recombination%20lines.html" class="backlink-item">Optically thin recombination lines</a></li>
    <li class="backlink-item-wrap"><a href="SII%20forbidden%20lines.html" class="backlink-item">SII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="Source%20function.html" class="backlink-item">Source function</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20Te%20diagnostics.html" class="backlink-item">Spectroscopic Te diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20ne%20diagnostics.html" class="backlink-item">Spectroscopic ne diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="Statistical%20equilibrium%20equations.html" class="backlink-item">Statistical equilibrium equations</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

