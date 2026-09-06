---
layout: default
title: "Selection rules"
---

not every transition between two atomic states is allowed. **selection rules** determine which transitions occur via electric dipole (E1, the strongest), and which require weaker mechanisms (M1, E2, multi-photon). a frequent oral question.

## electric dipole (E1) selection rules

valid in LS coupling, electric dipole approximation:

1. **$\Delta n$**: any value (no restriction).
2. **parity must change**: $e \leftrightarrow o$. equivalently, $\Delta(\sum_i \ell_i) = \pm 1, \pm 3, \dots$.
3. **$\Delta \ell = \pm 1$** for the jumping electron (one-electron jump only).
4. **$\Delta L = 0, \pm 1$** but not $0 \to 0$.
5. **$\Delta J = 0, \pm 1$** but not $0 \to 0$.
6. **$\Delta M_J = 0, \pm 1$** but not $0 \to 0$ if $\Delta J = 0$.
7. **$\Delta S = 0$** (no spin flip; total spin is preserved in LS coupling).

so a permitted E1 transition is one that:
- changes parity.
- changes one electron's $\ell$ by $\pm 1$.
- preserves total spin $S$.
- changes $L$ by $0$ or $\pm 1$ (excluding $0 \to 0$).
- changes $J$ by $0$ or $\pm 1$ (excluding $0 \to 0$).

violations: forbidden lines.

## weaker mechanisms

### magnetic dipole (M1)
$\sim 10^5$ times weaker than E1.
- parity preserved (both states same parity).
- $\Delta L = 0$, $\Delta S = 0$, $\Delta J = 0, \pm 1$.

example: $[OIII]\,\lambda 4959, 5007$ ($^3P_{1,2} \to {^1\!}D_2$): both $^3P$ and $^1D$ are even-parity terms of the $2p^2$ configuration. parity-conserving M1 transition. since $A \sim 0.01\,\text{s}^{-1}$ vs $A \sim 10^8\,\text{s}^{-1}$ for permitted lines, these are **forbidden lines**, observable only at very low densities (no collisional de-excitation).

### electric quadrupole (E2)
$\sim 10^8$ times weaker than E1.
- parity preserved.
- $\Delta L = 0, \pm 1, \pm 2$ but not $0 \to 0$, $1/2 \to 1/2$, $0 \to 1$.
- $\Delta J = 0, \pm 1, \pm 2$ similar restrictions.

example: $[SII]$ doublet, partially M1 and partially E2.

### intersystem (semi-forbidden)
$\Delta S \ne 0$ via spin-orbit mixing of the LS-pure states. allowed when LS coupling is not pure (always the case to some extent in heavy atoms). $\sim 10^2$ to $10^5$ weaker than E1.

example: **C IV $\lambda 1909$** semi-forbidden line in AGN, **N III] $\lambda 1750$** in HII regions.

## why forbidden lines exist in nebulae but not labs

at laboratory densities ($n \sim 10^{19}$ cm$^{-3}$), an excited atom in a forbidden state is collisionally de-excited long before it can radiate (lifetime $\sim 1$ s). so the line is suppressed.

at nebular densities ($n \sim 10^2$ to $10^5$ cm$^{-3}$), collisional de-excitation rate is much smaller than the small radiative rate, so the forbidden-line photon escapes. hence "forbidden" lines are abundant and even **bright** in nebulae.

the **critical density** is $n_c = A_{ul}/q_{ul}$. below $n_c$, line is at full strength; above, it is suppressed. forbidden lines have very low $n_c$ ($\sim 10^4$ to $10^7$ cm$^{-3}$), hence the density-diagnostic role of $[SII]\,\lambda 6716/6731$ ratios.

## practical use on the exam

given a transition specified by initial and final term symbols, check:
1. parity flip? (if yes $\to$ E1 candidate).
2. $\Delta\ell = \pm 1$? (E1 requires single-electron jump).
3. $\Delta L, \Delta S, \Delta J$ within rules?

if any rule is violated, identify whether it's M1 (parity preserved + $\Delta L = 0$), E2 ($\Delta J$ up to $\pm 2$), or intersystem ($\Delta S \ne 0$).

## see also

- [Quantum numbers and atomic states](../../02_Zettel/Theory/Quantum numbers and atomic states.html)
- [Atomic term symbols](../../02_Zettel/Theory/Atomic term symbols.html)
- [Russell-Saunders LS coupling](../../02_Zettel/Theory/Russell-Saunders LS coupling.html)
- [Forbidden vs permitted vs semiforbidden transitions](../../02_Zettel/Theory/Forbidden vs permitted vs semiforbidden transitions.html)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.html)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.html)
- [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.html)
- [Critical density](../../02_Zettel/Theory/Critical density.html)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.html)
