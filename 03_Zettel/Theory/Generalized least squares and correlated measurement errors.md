---
layout: "default"
title: "Generalized least squares and correlated measurement errors"
---
# Generalized least squares and correlated measurement errors

In astrophysical data analysis, linear models frequently relate parameter vectors $\theta \in \mathbb{R}^k$ to an observed data vector $y \in \mathbb{R}^N$ through a design matrix $X \in \mathbb{R}^{N \times k}$:
$$y = X\theta + \epsilon$$
where $\epsilon$ represents observational noise. When noise is correlated across pixels or channels, ordinary least squares fails, necessitating Generalized Least Squares (GLS).

## Noise Model and Likelihood

Let $\epsilon$ follow a zero-mean multivariate normal distribution with a non-diagonal, symmetric positive-definite covariance matrix $\Sigma \in \mathbb{R}^{N \times N}$:
$$\epsilon \sim \mathcal{N}(0, \Sigma)$$

The likelihood function is:
$$p(y \mid \theta, \Sigma) = \frac{1}{(2\pi)^{N/2} \lvert \Sigma\rvert^{1/2}} \exp\left[ -\frac{1}{2} (y - X\theta)^T \Sigma^{-1} (y - X\theta) \right]$$

The log-likelihood defines the generalized chi-squared statistic $\chi^2(\theta)$:
$$\chi^2(\theta) \equiv (y - X\theta)^T \Sigma^{-1} (y - X\theta)$$

## Derivation of the GLS Estimator

Minimizing $\chi^2(\theta)$ requires differentiating with respect to $\theta$:
$$\nabla_\theta \chi^2(\theta) = -2 X^T \Sigma^{-1} (y - X\theta) = 0$$
$$X^T \Sigma^{-1} X \theta = X^T \Sigma^{-1} y$$

Assuming $X$ has full column rank, $X^T \Sigma^{-1} X$ is invertible. The GLS estimator $\hat{\theta}_{\rm GLS}$ is:
$$\hat{\theta}_{\rm GLS} = \left( X^T \Sigma^{-1} X \right)^{-1} X^T \Sigma^{-1} y$$

## Parameter Covariance and Optimality

By the Gauss-Markov theorem for correlated errors (Aitken's theorem, 1935), $\hat{\theta}_{\rm GLS}$ is the Best Linear Unbiased Estimator (BLUE).

1. **Unbiasedness**:
$$\mathbb{E}[\hat{\theta}_{\rm GLS}] = \left( X^T \Sigma^{-1} X \right)^{-1} X^T \Sigma^{-1} \mathbb{E}[y] = \left( X^T \Sigma^{-1} X \right)^{-1} X^T \Sigma^{-1} X\theta = \theta$$

2. **Covariance matrix**:
$$\text{Cov}(\hat{\theta}_{\rm GLS}) = \mathbb{E}\left[ (\hat{\theta} - \theta)(\hat{\theta} - \theta)^T \right] = \left( X^T \Sigma^{-1} X \right)^{-1} X^T \Sigma^{-1} \Sigma \Sigma^{-1} X \left( X^T \Sigma^{-1} X \right)^{-1} = \left( X^T \Sigma^{-1} X \right)^{-1}$$

The parameter covariance attains the inverse Fisher information matrix, confirming efficiency.

## Numerical Computation via Cholesky Decomposition

Direct inversion of $\Sigma$ is numerically unstable and computationally prohibitive for large datasets ($O(N^3)$). Instead, we compute the Cholesky factorization of the covariance matrix:
$$\Sigma = L L^T$$
where $L$ is a lower triangular matrix. Defining the whitened data $\tilde{y} \equiv L^{-1} y$ and whitened design matrix $\tilde{X} \equiv L^{-1} X$, the model transforms to uncorrelated standard form:
$$\tilde{y} = \tilde{X}\theta + \tilde{\epsilon}, \quad \tilde{\epsilon} \sim \mathcal{N}(0, I_N)$$
$$\hat{\theta}_{\rm GLS} = (\tilde{X}^T \tilde{X})^{-1} \tilde{X}^T \tilde{y}$$

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models](../../02_Literature/Lectures/Astrostatistics/03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models.html)
- [Multivariate Gaussian conditioning and marginalization](Multivariate%20Gaussian%20conditioning%20and%20marginalization.html)
- [Fisher information matrix and Cramer-Rao bound](Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Bayesian%20hierarchical%20modeling%20for%20Type%20Ia%20supernovae.html" class="backlink-item">Bayesian hierarchical modeling for Type Ia supernovae</a></li>
    <li class="backlink-item-wrap"><a href="Multivariate%20Gaussian%20conditioning%20and%20marginalization.html" class="backlink-item">Multivariate Gaussian conditioning and marginalization</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>

