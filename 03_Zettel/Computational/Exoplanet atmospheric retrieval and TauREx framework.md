---
layout: "default"
title: "Exoplanet atmospheric retrieval and TauREx framework"
---
atmospheric retrieval solves the inverse problem in exoplanet spectroscopy: inferring atmospheric temperatures, chemical abundances, clouds, and surface gravities from observed transit or emission spectra.

## the inverse problem formulation

the forward model $\mathbf{F}(\boldsymbol{\theta})$ maps physical atmospheric parameters $\boldsymbol{\theta}$ (e.g. $T_{\text{iso}}, \log(X_{\text{H}_2\text{O}}), \log(X_{\text{CO}_2}), R_p, P_{\text{cloud}}$) to synthetic observations:

$$\mathbf{y} = \mathbf{F}(\boldsymbol{\theta}) + \boldsymbol{\epsilon}$$

where $\boldsymbol{\epsilon} \sim \mathcal{N}(0, \boldsymbol{\Sigma})$ represents observational noise.
inverting $\mathbf{F}$ is ill-posed and highly non-linear due to line saturation, molecular degeneracies (e.g. cloud top pressure vs trace gas abundance), and instrument binning.

## the taurex 3 architecture

TauREx 3 (Tau Retrieval for Exoplanets, Al-Refaie et al. 2021) is a modular Python retrieval framework structured into specialized components:

1. **planet & star modules**: define stellar spectrum $F_\star(\lambda)$, planet mass $M_p$, base radius $R_0$, and surface gravity $g_p$.
2. **pressure-temperature ($T-P$) profile**:
   - isothermal profile: $T(P) = T_0$.
   - N-point profile: flexible spline interpolation across altitude.
   - Guillot (2010) analytical semi-grey radiative equilibrium profile.
3. **gas / chemistry module**:
   specifies volume mixing ratios (VMRs) $X_i = n_i / n_{\text{tot}}$:
   - constant abundances with height.
   - equilibrium chemistry via ACE / FastChem lookup tables.
4. **opacity calculators**:
   pre-computed cross-sections $\sigma_i(\lambda, T, P)$ from ExoMol, HITRAN, and HITEMP interpolated via correlated-k or line-by-line sampling.
5. **cloud / haze module**:
   gray cloud decks ($P_{\text{top}}$) and Rayleigh scattering hazes ($\sigma(\lambda) = \sigma_0 (\lambda/\lambda_0)^{-\alpha}$).

## bayesian sampling integration

TauREx couples the forward radiative transfer solver to Bayesian inference samplers (`emcee`, `MultiNest`, `PolyChord`), mapping the full multidimensional posterior probability distribution $P(\boldsymbol{\theta} \mid \mathbf{y})$:

$$\ln \mathcal{L}(\boldsymbol{\theta}) = -\frac{1}{2} \sum_{k=1}^{N_{\text{bins}}} \left( \frac{y_k - F_k(\boldsymbol{\theta})}{\sigma_k} \right)^2$$

## see also

- [[Computational_Astrophysics_MOC]]
- [[08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx]]
- [[Atmospheric radiative transfer equation and Voigt profile]]
- [[Nested sampling algorithm and Bayesian evidence computation]]
- [[Exoplanet atmospheric scale height and transmission spectroscopy]]



## Linked References

- [[Atmospheric radiative transfer equation and Voigt profile]]
- [[Deep neural networks and backpropagation for astronomical spectra]]
- [[Nested sampling algorithm and Bayesian evidence computation]]
- [[Exoplanet atmospheric scale height and transmission spectroscopy]]
- [[Computational_Astrophysics_MOC]]


