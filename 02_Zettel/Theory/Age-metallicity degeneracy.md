---
layout: default
title: "Age-metallicity degeneracy"
---

in broadband colors, an **older + metal-poor** stellar population looks similar to a **younger + metal-rich** one. this **age-metallicity degeneracy** is the central nuisance of galaxy SED fitting and stellar population analysis.

## the empirical statement

doubling the age of an SSP shifts its colors by about the same amount as a $0.3$ dex increase in metallicity. quantitatively, **Worthey 1994's $3/2$ rule**:
$$\Delta \log\tau \cdot 1 = \Delta \log Z \cdot 1.5$$

so an SSP twice as old at the same color appears $\sim 0.4$ dex more metal-poor.

## why this happens physically

- **older population**: lower-mass stars dominate, which are cooler and redder. so older = redder.
- **metal-rich population**: more line blanketing in the blue, more flux pushed into the red. so metal-rich = redder.

both push the spectrum redward; both reduce $L/M$. the colors and $\Upsilon$ alone cannot distinguish.

## breaking the degeneracy

several techniques work, in increasing order of demand on the data:

### NIR colors

at $\lambda > 1\,\mu$m, the SSP color is much less metallicity-dependent. so combining optical (e.g. $V - I$) with NIR (e.g. $J - K$) breaks the degeneracy partially.

### Lick indices

Balmer-line indices (H$\beta$, H$\delta$) are primarily age-sensitive; Mg, Fe indices are primarily metallicity-sensitive. plotting one against the other moves age and metallicity along orthogonal tracks. see [Lick indices](../../02_Zettel/Theory/Lick indices.html).

### the $4000$ Å break

$D_n4000$ is age-sensitive but weakly metallicity-dependent. a clean age indicator if metallicity is somewhat constrained.

### resolved stellar populations

if the cluster or galaxy is close enough to resolve individual stars, the **CMD shape** (TO + RGB position + HB morphology) breaks the degeneracy because different stars probe different aspects.

### spectroscopic $[Fe/H]$

direct measurement of metallicity from spectra, especially of individual stars. then age is the only free parameter.

## consequences for galaxy SED fitting

- **stellar mass estimates** are typically robust to a factor $\sim 2$ even with the degeneracy, because $\Upsilon$ depends on the combination differently than colors do (and dust correlates).
- **age estimates** are biased by metallicity priors and vice versa.
- **cluster ages** can shift by $\sim 1$ Gyr depending on the $[Fe/H]$ assumed.
- **galaxy formation timescales** ("downsizing", quenching ages) depend critically on breaking the degeneracy.

modern Bayesian SED fitters (Prospector, BAGPIPES) sample the joint posterior over (age, $Z$, dust, ...) and quote **marginalised** ages with appropriate widened uncertainties, rather than overconfident single-point fits.

## see also

- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- [Lick indices](../../02_Zettel/Theory/Lick indices.html)
- [SED fitting basics](../../02_Zettel/Theory/SED fitting basics.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
- [SPS code families](../../02_Zettel/Theory/SPS code families.html)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.html)
- [Cluster ages from CMD turnoff](../../02_Zettel/Theory/Cluster ages from CMD turnoff.html)
- [Color indices](../../02_Zettel/Theory/Color indices.html)
- [Bolometric correction and effective temperature](../../02_Zettel/Theory/Bolometric correction and effective temperature.html)
