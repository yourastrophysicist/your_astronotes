---
layout: default
title: "SED fitting basics"
---

**spectral energy distribution (SED) fitting** is the inverse problem: given multi-band photometry (and optionally spectra) of a galaxy, infer its physical parameters: stellar mass $M_*$, SFR, age, metallicity, dust attenuation, redshift.

## the forward model

construct a predicted SED from a parameter set $\theta = (M_*, \tau, Z, A_V, ...)$:
$$f_\lambda^{\rm model}(\theta) = M_*\int_0^t \psi(t', \tau)\, f_\lambda^{\rm SSP}(t - t', Z(t'))\,dt' \cdot e^{-A_\lambda(\theta)/1.086} + f_\lambda^{\rm dust\,emit}(\theta) + f_\lambda^{\rm neb}(\theta)$$

then **observe** through filters:
$$F_X^{\rm model}(\theta) = \int f_\lambda^{\rm model}(\theta) T_X(\lambda)\,d\lambda / \int T_X(\lambda)\,d\lambda$$

with $T_X$ the filter throughput.

## the likelihood

assume Gaussian errors:
$$\ln \mathcal L = -\frac{1}{2}\sum_X \frac{(F_X^{\rm obs} - F_X^{\rm model}(\theta))^2}{\sigma_X^2}$$

posterior is $p(\theta | F^{\rm obs}) \propto \mathcal L(F^{\rm obs} | \theta)\, p(\theta)$ with priors $p(\theta)$ on each parameter.

## the families of fitters

### template-grid (frequentist)
precompute a grid of model SEDs over $(\tau, Z, A_V)$, find the best-fitting redshift and template per source. fast, simple. examples: **EAZY**, **BPZ**, **Le Phare**, **HyperZ**.

mostly used for **photometric redshifts** (see [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.html)).

### Bayesian + MCMC
sample the full posterior over $\theta$. captures parameter degeneracies and uncertainties properly. examples: **Prospector**, **BAGPIPES**, **BEAGLE**, **CIGALE-MCMC**.

slower (minutes to hours per galaxy) but gives full PDFs.

### energy-balance / panchromatic
combine UV, optical, IR data with energy conservation: dust emission in IR equals UV-optical attenuation. examples: **MAGPHYS**, **CIGALE**.

essential for dusty SFGs where $L_{\rm IR} > L_{\rm UV}$.

## the typical parameters and priors

| parameter | typical prior | typical posterior precision |
|---|---|---|
| $M_*$ | log-flat | $0.1$ to $0.3$ dex |
| age $\tau$ | log-flat in $1$ Myr to $t_H$ | $0.3$ to $0.5$ dex |
| $Z$ | log-flat | $\sim 0.3$ dex |
| $A_V$ | flat in $0$ to $3$ | $\sim 0.2$ mag |
| SFR | log-flat | $0.2$ dex (UV+IR), $0.5$ dex (UV only) |

**$M_*$ is the most robust output**, partly thanks to the K-band's stable $\Upsilon$ ([Stellar mass estimation in unresolved populations](../../02_Zettel/Theory/Stellar mass estimation in unresolved populations.html)). age and SFH are much more uncertain because of the [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.html) and dust-age degeneracy.

## the components of a typical SED

a real galaxy SED has several emission components:
1. **stellar continuum**: from SPS templates.
2. **nebular emission lines** (H$\alpha$, $[OIII]$, etc.): from photoionised gas.
3. **nebular continuum**: free-bound + free-free.
4. **dust attenuation** in UV-optical.
5. **dust emission** in mid- and far-IR.
6. **AGN** if present (power-law UV, hot dust mid-IR torus).

a complete fit needs all of these. simplified fits (e.g. "stellar-only" UV-optical) accept biases in derived parameters as the price of speed.

## sanity checks

- recover known properties of nearby galaxies of known type.
- compare different codes (e.g. BAGPIPES vs Prospector vs CIGALE) on the same data; differences quantify systematic uncertainty.
- check posterior shape: bimodality flags a degeneracy.

## see also

- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- [SPS code families](../../02_Zettel/Theory/SPS code families.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
- [Star formation history of a population](../../02_Zettel/Theory/Star formation history of a population.html)
- [Photometric redshifts](../../02_Zettel/Theory/Photometric redshifts.html)
- [Age-metallicity degeneracy](../../02_Zettel/Theory/Age-metallicity degeneracy.html)
- [Stellar mass estimation in unresolved populations](../../02_Zettel/Theory/Stellar mass estimation in unresolved populations.html)
- [Dust attenuation in synthetic populations](../../02_Zettel/Theory/Dust attenuation in synthetic populations.html)
- [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
- [SED fitting for SFH](../../02_Zettel/Theory/SED fitting for SFH.html)
