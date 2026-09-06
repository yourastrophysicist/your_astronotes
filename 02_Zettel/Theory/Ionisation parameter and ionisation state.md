---
layout: default
title: "Ionisation parameter and ionisation state"
---

a quick-reference summary of how the ionisation parameter $U$ controls the typical ionisation state of a photoionised gas. central to mapping nebular line ratios to physical conditions.

## the chain $U \to$ line ratios

at high $U$:
- many ionising photons per atom $\to$ high ionisation state.
- $[OIII]$ strong, $[OII]$ weak.
- He II $\lambda 4686$ visible if source has hard spectrum.
- $[NeV] \lambda 3426$ in extreme cases (AGN).

at low $U$:
- few ionising photons per atom $\to$ low ionisation state.
- $[OII], [SII]$ dominant.
- He II absent.
- only soft optical lines.

## the diagnostic line ratios

| ratio | $U$-sensitive |
|---|---|
| $[OIII]\,\lambda 5007/[OII]\,\lambda 3727$ | log-linear with $\log U$, slope $\sim 1$ |
| $[OIII]/H\beta$ | weak $U$-sensitivity, also $T_e$-sensitive |
| He II/H$\beta$ | strong if hard spectrum + high $U$ |
| $[NeIII]/[OII]$ | similar to $[OIII]/[OII]$, mid-UV |
| $[NeV]/[NeIII]$ | hardness diagnostic, AGN-specific |

## typical values for different objects

| object | $\log U$ | example line ratios |
|---|---|---|
| diffuse ionised gas | $\sim -4$ | weak $[OIII]$, $[OII]$ dominant |
| typical HII region | $\sim -3$ to $-2$ | $[OIII]/[OII] \sim 1$ to $3$ |
| starburst (low metal) | $\sim -2$ | $[OIII]/[OII] \sim 5$ to $10$, He II weak |
| AGN narrow-line | $\sim -2$ to $-1$ | He II $\lambda 4686$ visible, $[NeV]$ in some |
| AGN broad-line region | $\sim 0$ to $+1$ | continuum-dominated, broadlined recombination |

## the metallicity-$U$ degeneracy

both metallicity and $U$ affect line ratios. they are partially degenerate but separable:
- $R_{23} = ([OII]+[OIII])/H\beta$: primarily metallicity ($Z$).
- $[OIII]/[OII]$: primarily $U$.
- $[NII]/H\alpha$ (N2 index): metallicity + $U$ combined.
- $O3N2 = ([OIII]/H\beta)/([NII]/H\alpha)$: combination, mostly metallicity.

so a 2D plot of two diagnostics (e.g. $[OIII]/[OII]$ vs $R_{23}$) separates $U$ from $Z$.

## the photon-to-gas analogy

useful intuition: $U$ is the dimensionless ratio of (ionising-photon density) to (atom density). exactly analogous to **baryon-to-photon ratio** $\eta$ in cosmology, where $\eta$ controls when ionisation completes during recombination.

at high $U$ in a nebula = high $\eta^{-1}$ = many photons per atom = highly ionised.

## the connection to BPT

the BPT diagram (Baldwin, Phillips, Terlevich 1981) plots:
- y-axis: $\log [OIII]/H\beta$ (combination of $U$ + $T_e$).
- x-axis: $\log [NII]/H\alpha$ (or $[SII]/H\alpha$, $[OI]/H\alpha$; metallicity + $U$).

galaxies form a "main sequence" in this diagram: star-forming galaxies on a curving locus, AGN above and to the right. the separation reflects the harder ionising spectrum of AGN (needs higher $U$ + harder photons to produce the [OIII]/H$\beta$ ratios seen in Seyfert nuclei).

see [BPT diagram](../../02_Zettel/Theory/BPT diagram.html).

## see also

- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.html)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.html)
- Strömgren sphere
- [Ionisation stratification](../../02_Zettel/Theory/Ionisation stratification.html)
- [BPT diagram](../../02_Zettel/Theory/BPT diagram.html)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.html)
- [AGN spectroscopy](../../02_Zettel/Theory/AGN spectroscopy.html)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.html)
- [Spectroscopic Te diagnostics](../../02_Zettel/Theory/Spectroscopic Te diagnostics.html)
- [Spectroscopic ne diagnostics](../../02_Zettel/Theory/Spectroscopic ne diagnostics.html)
