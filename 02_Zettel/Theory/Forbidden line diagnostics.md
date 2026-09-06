---
layout: default
title: "Forbidden line diagnostics"
---

a quick-reference toolkit for using forbidden-line ratios to measure plasma conditions: $T_e$, $n_e$, ionisation state, abundances. the everyday workhorse of nebular spectroscopy.

## temperature diagnostics

ratio of two lines from **different upper levels of the same ion** with very different excitation energies. the Boltzmann factor doesn't cancel.

| ratio | sensitive range |
|---|---|
| $[OIII]\,\lambda 4363/(\lambda 4959 + 5007)$ | $T_e = 5000$ to $25\,000$ K |
| $[NII]\,\lambda 5755/(\lambda 6548 + 6584)$ | $T_e = 5000$ to $20\,000$ K |
| $[OII]\,\lambda 7320, 7330/(\lambda 3726, 3729)$ | similar |
| $[SIII]\,\lambda 6312/(\lambda 9069, 9532)$ | similar |

best for HII regions and PNe at $T_e \sim 10^4$ K. see [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.md) for the canonical case.

## density diagnostics

ratio of two lines from **different upper levels of the same multiplet** with similar excitation but different $A$. the Boltzmann factor cancels.

| ratio | sensitive range |
|---|---|
| $[SII]\,\lambda 6716/\lambda 6731$ | $n_e = 10^2$ to $10^4$ cm$^{-3}$ |
| $[OII]\,\lambda 3729/3726$ | $n_e = 10^2$ to $10^4$ cm$^{-3}$ |
| $[ArIV]\,\lambda 4711/\lambda 4740$ | $n_e = 10^3$ to $10^5$ |
| $[NeIV]\,\lambda 2422/\lambda 2425$ | $n_e = 10^4$ to $10^6$ |

best for typical HII regions and PNe. see [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.md).

## ionisation diagnostics

ratio of two lines from **different ionisation stages of the same element**, isolating the ionisation balance.

| ratio | what it traces |
|---|---|
| $[OIII]\,\lambda 5007/[OII]\,\lambda 3727$ | ionisation parameter $U$, hardness of radiation |
| $[NII]/[OIII]$ | metallicity at fixed $U$ |
| $[OIII]\,\lambda 5007/H\beta$ | ionisation + temperature combined |
| $[OII]/H\beta$ | low-ionisation tracer, less abundant gas |

these enter the **BPT diagram** for AGN classification. see [BPT diagram](../../02_Zettel/Theory/BPT diagram.md).

## abundance diagnostics

once $T_e$ and $n_e$ are known, the **direct method** for abundances:
$$\frac{n(O^{2+})}{n(H^+)} \approx \frac{F([OIII]\,\lambda 5007)}{F(H\beta)}\cdot\frac{j(H\beta)/n_p^2}{j(\lambda 5007)/n_e\,n_{O^{2+}}}$$

cross-multiply with line emissivities at known $T_e, n_e$. apply ionisation correction factors (ICFs) to account for unobserved ionisation stages.

modern: software like PyNeb (Luridiana et al. 2015) automates this.

**strong-line methods**: when $\lambda 4363$ is undetected, use empirical or theoretical calibrations of $R_{23} = ([OII] + [OIII])/H\beta$, $N2 = [NII]/H\alpha$, $O3N2 = ([OIII]/H\beta)/([NII]/H\alpha)$, etc. less precise than direct method.

## a typical analysis flow

for a spectrum of an HII region:

1. measure line fluxes: $H\alpha, H\beta, [OIII]\,4959, 5007, 4363, [SII]\,6716, 6731, [NII]\,6548, 6584, [OII]\,3727, ...$
2. **dust correction**: from $H\alpha/H\beta$ via [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md).
3. **density**: from $[SII]\,\lambda 6716/6731$.
4. **temperature**: from $[OIII]\,\lambda 4363/(\lambda 4959+5007)$.
5. **ionisation**: from $[OIII]/[OII]$.
6. **abundances**: direct method using $T_e, n_e$.
7. **classify**: BPT diagram for star-forming vs AGN.

a complete analysis takes a few iterations (since $T_e$ and $n_e$ are coupled), typically converged in $\sim 3$ steps.

## see also

- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.md)
- [SII forbidden lines](../../02_Zettel/Theory/SII forbidden lines.md)
- [Critical density](../../02_Zettel/Theory/Critical density.md)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.md)
- [Statistical equilibrium equations](../../02_Zettel/Theory/Statistical equilibrium equations.md)
- [BPT diagram](../../02_Zettel/Theory/BPT diagram.md)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md)
- [Spectroscopic Te diagnostics](../../02_Zettel/Theory/Spectroscopic Te diagnostics.md)
- [Spectroscopic ne diagnostics](../../02_Zettel/Theory/Spectroscopic ne diagnostics.md)
- [Dust extinction in nebulae](../../02_Zettel/Theory/Dust extinction in nebulae.md)
