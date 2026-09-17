---
layout: "default"
title: "Marginalized Posterior Distributions and Corner Plots"
---
{% raw %}
# Marginalized Posterior Distributions and Corner Plots

Posterior probability distributions obtained via MCMC sampling encapsulate full multi-parameter uncertainty, including non-linear correlations and asymmetries.

## Marginalization
The 1D marginalized posterior for parameter $\theta_1$ is obtained by integrating over all other $M-1$ parameters:
$$p(\theta_1 | \boldsymbol{D}) = \int p(\boldsymbol{\theta} | \boldsymbol{D}) \, d\theta_2 \dots d\theta_M$$
In MCMC, this integral is performed simply by building a 1D histogram of the walker chain for $\theta_1$.

## Parameter Extraction from Percentiles
Due to non-linear physical equations, posteriors are often asymmetric. Parameters are reported using percentiles:
- **Median**: 50th percentile ($\theta_{50}$)
- **Lower Error**: $\theta_{50} - \theta_{16}$
- **Upper Error**: $\theta_{84} - \theta_{50}$

$$\theta = \theta_{50} {}_{-\left(\theta_{50} - \theta_{16}\right)}^{+\left(\theta_{84} - \theta_{50}\right)}$$

## Corner Plot Structure
A corner plot (Foreman-Mackey 2016) displays:
- Diagonal: 1D marginalized posterior distributions with $16\%$, $50\%$, $84\%$ quantiles.
- Off-diagonal: 2D joint contour projections displaying parameter degeneracies (e.g., the classic banana-shaped correlation between scaled semi-major axis $a/R_\star$ and inclination $i$).

## Related Notes
- [Affine-Invariant Ensemble MCMC with emcee](./Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html)
- [MCMC Convergence Diagnostics and Autocorrelation Analysis](./MCMC%20Convergence%20Diagnostics%20and%20Autocorrelation%20Analysis.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Computational_Astrophysics/09_Bayesian_Inference_and_Parameter_Estimation.html" class="backlink-item">09_Bayesian_Inference_and_Parameter_Estimation</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Computational_Astrophysics/10_Nested_Sampling_and_Evidence_Computation.html" class="backlink-item">10_Nested_Sampling_and_Evidence_Computation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./MCMC%20Convergence%20Diagnostics%20and%20Autocorrelation%20Analysis.html" class="backlink-item">MCMC Convergence Diagnostics and Autocorrelation Analysis</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2013%20-%20Bayesian%20Statistics%20and%20Markov%20Chain%20Monte%20Carlo%20Sampling.html" class="backlink-item">Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling</a></li>
  </ul>
</div>
