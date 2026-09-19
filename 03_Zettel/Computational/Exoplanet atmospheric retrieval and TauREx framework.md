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

- [Computational_Astrophysics_MOC](../../04_Atlas/Computational_Astrophysics_MOC.html)
- [08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx](../../02_Literature/Lectures/Computational_Astrophysics/08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx.html)
- [Atmospheric radiative transfer equation and Voigt profile](Atmospheric%20radiative%20transfer%20equation%20and%20Voigt%20profile.html)
- [Nested sampling algorithm and Bayesian evidence computation](Nested%20sampling%20algorithm%20and%20Bayesian%20evidence%20computation.html)
- [Exoplanet atmospheric scale height and transmission spectroscopy](../Theory/Exoplanet%20atmospheric%20scale%20height%20and%20transmission%20spectroscopy.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Atmospheric%20radiative%20transfer%20equation%20and%20Voigt%20profile.html" class="backlink-item">Atmospheric radiative transfer equation and Voigt profile</a></li>
    <li class="backlink-item-wrap"><a href="Deep%20neural%20networks%20and%20backpropagation%20for%20astronomical%20spectra.html" class="backlink-item">Deep neural networks and backpropagation for astronomical spectra</a></li>
    <li class="backlink-item-wrap"><a href="Nested%20sampling%20algorithm%20and%20Bayesian%20evidence%20computation.html" class="backlink-item">Nested sampling algorithm and Bayesian evidence computation</a></li>
    <li class="backlink-item-wrap"><a href="../Theory/Exoplanet%20atmospheric%20scale%20height%20and%20transmission%20spectroscopy.html" class="backlink-item">Exoplanet atmospheric scale height and transmission spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
  </ul>
</div>

