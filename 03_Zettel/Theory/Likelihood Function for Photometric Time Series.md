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
- [[Bayesian Inference and Bayes Theorem in Astronomy]]
- [[Prior Probability Distributions in Exoplanet Fitting]]
- [[Malavolta 12 - Transit Parameter Estimation and Likelihood Optimization]]



## Linked References

- [[Laboratory Exercise - Joint Transit Modeling and MCMC Analysis]]
- [[Gaussian Process Regression in Light Curve Detrending]]
- [[Bayesian Inference and Bayes Theorem in Astronomy]]
- [[Prior Probability Distributions in Exoplanet Fitting]]
- [[Astrophysics_Laboratory_2_MOC]]


