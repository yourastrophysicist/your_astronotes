---
layout: "default"
title: "Affine-Invariant Ensemble MCMC with emcee"
---
{% raw %}
# Affine-Invariant Ensemble MCMC with emcee

The `emcee` package (Foreman-Mackey et al. 2013) is a pure-Python implementation of the Goodman & Weare (2010) affine-invariant ensemble sampler for Markov Chain Monte Carlo (MCMC).

## Mathematical Architecture
Standard MCMC algorithms (e.g., random-walk Metropolis-Hastings) require careful tuning of proposal covariance matrices and perform poorly when parameters are strongly correlated.

The ensemble sampler deploys an ensemble of $K$ interdependent walkers $\boldsymbol{S} = \{ \boldsymbol{X}_1, \dots, \boldsymbol{X}_K \}$.
- **Stretch Move**: to update walker $k$, another walker $j \ne k$ is selected at random from the ensemble. The proposed position is:
$$\boldsymbol{X}_k' = \boldsymbol{X}_j + Z (\boldsymbol{X}_k - \boldsymbol{X}_j)$$
where $Z$ is drawn from the probability density:
$$g(z) \propto \frac{1}{\sqrt{z}} \quad \text{for } z \in \left[ \frac{1}{a}, a \right] \quad (a = 2.0)$$
- **Acceptance Probability**:
$$\alpha = \min\left( 1, Z^{N-1} \frac{p(\boldsymbol{X}_k')}{p(\boldsymbol{X}_k)} \right)$$
Because the proposal moves along vectors defined by the walker distribution itself, the sampler automatically adapts to narrow, elongated parameter correlations without requiring proposal tuning.

## Related Notes
- [Goodman-Weare Affine Invariant Ensemble Sampler](../Theory/Goodman-Weare%20Affine%20Invariant%20Ensemble%20Sampler.html)
- [Metropolis-Hastings Algorithm](../Theory/Metropolis-Hastings%20Algorithm.html)
- [MCMC Convergence Diagnostics and Autocorrelation Analysis](./MCMC%20Convergence%20Diagnostics%20and%20Autocorrelation%20Analysis.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Computational_Astrophysics/09_Bayesian_Inference_and_Parameter_Estimation.html" class="backlink-item">09_Bayesian_Inference_and_Parameter_Estimation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../Theory/Goodman-Weare%20Affine%20Invariant%20Ensemble%20Sampler.html" class="backlink-item">Goodman-Weare Affine Invariant Ensemble Sampler</a></li>
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Joint%20Transit%20Modeling%20and%20MCMC%20Analysis.html" class="backlink-item">Laboratory Exercise - Joint Transit Modeling and MCMC Analysis</a></li>
    <li class="backlink-item-wrap"><a href="./MCMC%20Convergence%20Diagnostics%20and%20Autocorrelation%20Analysis.html" class="backlink-item">MCMC Convergence Diagnostics and Autocorrelation Analysis</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2013%20-%20Bayesian%20Statistics%20and%20Markov%20Chain%20Monte%20Carlo%20Sampling.html" class="backlink-item">Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling</a></li>
    <li class="backlink-item-wrap"><a href="./Marginalized%20Posterior%20Distributions%20and%20Corner%20Plots.html" class="backlink-item">Marginalized Posterior Distributions and Corner Plots</a></li>
    <li class="backlink-item-wrap"><a href="../Theory/Metropolis-Hastings%20Algorithm.html" class="backlink-item">Metropolis-Hastings Algorithm</a></li>
    <li class="backlink-item-wrap"><a href="./Nested%20sampling%20algorithm%20and%20Bayesian%20evidence%20computation.html" class="backlink-item">Nested sampling algorithm and Bayesian evidence computation</a></li>
  </ul>
</div>
