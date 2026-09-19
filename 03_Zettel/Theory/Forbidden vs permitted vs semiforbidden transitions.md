---
layout: "default"
title: "Forbidden vs permitted vs semiforbidden transitions"
---
a tier list of atomic transitions by their Einstein $A$ coefficients (radiative decay rates), driven by which selection rules they satisfy.

## the three tiers

| type | symbol | typical $A$ rate | naming convention |
|---|---|---|---|
| permitted | E1 | $10^7$ to $10^9$ s$^{-1}$ | bare wavelength: $H\alpha\,\lambda 6563$, He I $\lambda 5876$ |
| semi-forbidden (intersystem) | E1 with $\Delta S \ne 0$ | $10^2$ to $10^5$ s$^{-1}$ | single bracket: $C\,\textsc{iii}]\,\lambda 1909$ |
| forbidden | M1 or E2 | $10^{-5}$ to $10^0$ s$^{-1}$ | square brackets: $[O\,\textsc{iii}]\,\lambda 5007$ |

ratio of total strengths: permitted $\gg$ semi-forbidden $\gg$ forbidden, by factors of $\sim 10^3$ each.

## permitted transitions

satisfy all electric dipole (E1) selection rules:
- parity changes.
- $\Delta\ell = \pm 1$ for the jumping electron.
- $\Delta L = 0, \pm 1$ (not $0\to 0$).
- $\Delta J = 0, \pm 1$ (not $0\to 0$).
- $\Delta S = 0$.

the bulk of stellar absorption / emission spectroscopy is permitted. Balmer lines, He I lines, Na D doublet, all permitted.

## semi-forbidden (intersystem) transitions

violate $\Delta S = 0$ but otherwise satisfy E1 rules. spin-orbit coupling mixes singlet and triplet states slightly, so what looks pure-singlet has a small triplet admixture. transitions between "different" multiplicities then proceed at small but non-zero rate.

notation: square bracket on the right side of the species, e.g.
$$\text{C}\,\textsc{iii}]\,\lambda 1909, \quad \text{N}\,\textsc{iv}]\,\lambda 1486, \quad \text{C}\,\textsc{ii}]\,\lambda 2326$$
(the "]" originally from typewriter notation for "intersystem.")

importance: prominent in the **UV spectra of AGN broad-line regions and starburst galaxies**, where they coexist with strong permitted lines and provide independent diagnostics.

## forbidden transitions

violate parity-change requirement. proceed only by **magnetic dipole** (M1) or **electric quadrupole** (E2), $10^5$ to $10^8$ times weaker than E1.

notation: square brackets on both sides of the species:
$$[\text{O}\,\textsc{iii}]\,\lambda 4959, 5007, \quad [\text{S}\,\textsc{ii}]\,\lambda 6716, 6731, \quad [\text{N}\,\textsc{ii}]\,\lambda 6548, 6584$$

at terrestrial-laboratory densities, forbidden states are collisionally de-excited before they radiate (lifetime $\sim 1$ s vs collision timescale $\sim 10^{-9}$ s). they were dubbed "nebulium" lines for decades until Bowen 1927 identified them as forbidden $[OIII]$ transitions in low-density nebulae.

## why both forbidden and permitted matter

the **two together** give complementary diagnostics:
- **permitted lines** are reliable column-density indicators (always at full strength).
- **forbidden lines** are reliable density indicators (suppressed above $n_c$, so their ratios discriminate $n_e$ over $\sim 10^2$ to $10^7$ cm$^{-3}$).
- **forbidden line ratios from different upper levels of the same ion** (e.g. $[OIII]\,\lambda 4363/(\lambda 4959+5007)$) measure $T_e$.

so the entire framework of nebular diagnostics ($T_e$, $n_e$, abundances) hinges on knowing which lines are permitted, which forbidden, and how each behaves.

## see also

- [Selection rules](Selection%20rules.html)
- [Atomic term symbols](Atomic%20term%20symbols.html)
- [Russell-Saunders LS coupling](Russell-Saunders%20LS%20coupling.html)
- [jj coupling](jj%20coupling.html)
- [Forbidden lines](Forbidden%20lines.html)
- [OIII forbidden lines](OIII%20forbidden%20lines.html)
- [SII forbidden lines](SII%20forbidden%20lines.html)
- [Forbidden line diagnostics](Forbidden%20line%20diagnostics.html)
- [Critical density](Critical%20density.html)

---

### Astronomical Spectroscopy Diagnostic Panels

![spec_theory_p62.png](../../assets/images/spec_theory_p62.png)
*Transition probabilities: E1 permitted ($A_{ki} \sim 10^7-10^9\,{\rm s}^{-1}$), M1 magnetic dipole ($A_{ki} \sim 10^{-2}-10^2\,{\rm s}^{-1}$), and E2 electric quadrupole ($A_{ki} \sim 10^{-4}-10^0\,{\rm s}^{-1}$) forbidden transitions.*

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="AGN%20spectroscopy.html" class="backlink-item">AGN spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="Absorption%20coefficient%20and%20oscillator%20strength.html" class="backlink-item">Absorption coefficient and oscillator strength</a></li>
    <li class="backlink-item-wrap"><a href="Atomic%20term%20symbols.html" class="backlink-item">Atomic term symbols</a></li>
    <li class="backlink-item-wrap"><a href="Forbidden%20lines.html" class="backlink-item">Forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="Selection%20rules.html" class="backlink-item">Selection rules</a></li>
    <li class="backlink-item-wrap"><a href="jj%20coupling.html" class="backlink-item">jj coupling</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

