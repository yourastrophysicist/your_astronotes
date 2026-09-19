---
layout: "default"
title: "Likelihood Function for Photometric Time Series"
---
# Likelihood Function for Photometric Time Series

The likelihood function quantifies the probability of observing photometric time series $\boldsymbol{D} = \{ t_i, y_i, \sigma_i \}_{i=1}^N$ given model light curve $m(t_i, \boldsymbol{\theta})$.

## Gaussian Likelihood Formulation
Assuming independent, Gaussian-distributed observational errors:
$$\mathcal{L}(\boldsymbol{\theta} \mid \boldsymbol{D}) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi s_i^2}} \exp\left( -\frac{[y_i - m(t_i, \boldsymbol{\theta})]^2}{2 s_i^2} \right)$$
where $s_i^2 = \sigma_i^2 + \sigma_{\text{jitter}}^2$ incorporates instrumental jitter.

## Log-Likelihood Form
In computation, logarithmic probabilities prevent numerical underflow:
$$\ln \mathcal{L}(\boldsymbol{\theta}) = -\frac{1}{2} \sum_{i=1}^N \left[ \frac{[y_i - m(t_i, \boldsymbol{\theta})]^2}{s_i^2} + \ln(2\pi s_i^2) \right]$$

## Equivalence to Chi-Squared Minimization
When errors $s_i = \sigma_i$ are fixed constants, the second logarithmic term is constant:
$$\ln \mathcal{L}(\boldsymbol{\theta}) = -\frac{1}{2} \chi^2(\boldsymbol{\theta}) + \text{const}$$
Maximizing the log-likelihood is identical to least-squares $\chi^2$ minimization. When jitter parameters are sampled dynamically, the logarithmic penalty term prevents the sampler from arbitrarily inflating error bars.

## Related Notes
- [Bayesian Inference and Bayes Theorem in Astronomy](Bayesian%20Inference%20and%20Bayes%20Theorem%20in%20Astronomy.html)
- [Prior Probability Distributions in Exoplanet Fitting](Prior%20Probability%20Distributions%20in%20Exoplanet%20Fitting.html)
- [Malavolta 12 - Transit Parameter Estimation and Likelihood Optimization](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2012%20-%20Transit%20Parameter%20Estimation%20and%20Likelihood%20Optimization.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Joint%20Transit%20Modeling%20and%20MCMC%20Analysis.html" class="backlink-item">Laboratory Exercise - Joint Transit Modeling and MCMC Analysis</a></li>
    <li class="backlink-item-wrap"><a href="../Computational/Gaussian%20Process%20Regression%20in%20Light%20Curve%20Detrending.html" class="backlink-item">Gaussian Process Regression in Light Curve Detrending</a></li>
    <li class="backlink-item-wrap"><a href="Bayesian%20Inference%20and%20Bayes%20Theorem%20in%20Astronomy.html" class="backlink-item">Bayesian Inference and Bayes Theorem in Astronomy</a></li>
    <li class="backlink-item-wrap"><a href="Prior%20Probability%20Distributions%20in%20Exoplanet%20Fitting.html" class="backlink-item">Prior Probability Distributions in Exoplanet Fitting</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

