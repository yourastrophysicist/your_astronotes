---
layout: "default"
title: "Fisher information matrix and Cramer-Rao bound"
---
# Fisher information matrix and Cramer-Rao bound

The Fisher Information Matrix (FIM) quantifies the amount of information an observable random variable conveys regarding an unknown parameter vector. In cosmology, the FIM is the central mathematical engine for experimental design, forecasting error ellipses of future surveys, and establishing theoretical precision limits.

## The Score Function and Fisher Information

Let $y$ be data generated from a probability distribution $p(y \mid \theta)$ conditioned on parameters $\theta = (\theta_1, \dots, \theta_k)^T$. The **score function** $S(\theta)$ is the gradient of the log-likelihood:
$$S(\theta) \equiv \nabla_\theta \ln p(y \mid \theta)$$

The expected value of the score function vanishes identically:
$$\mathbb{E}[S(\theta)] = \int \left( \nabla_\theta \ln p(y \mid \theta) \right) p(y \mid \theta) \, dy = \int \nabla_\theta p(y \mid \theta) \, dy = \nabla_\theta \int p(y \mid \theta) \, dy = \nabla_\theta (1) = 0$$

The **Fisher Information Matrix** $F \in \mathbb{R}^{k \times k}$ is defined as the covariance matrix of the score function:
$$F_{ij} \equiv \mathbb{E}\left[ S_i(\theta) S_j(\theta) \right] = \mathbb{E}\left[ \frac{\partial \ln p(y \mid \theta)}{\partial \theta_i} \frac{\partial \ln p(y \mid \theta)}{\partial \theta_j} \right]$$

Differentiating the identity $\mathbb{E}[S_i] = 0$ reveals the equivalent curvature formulation:
$$F_{ij} = -\mathbb{E}\left[ \frac{\partial^2 \ln p(y \mid \theta)}{\partial \theta_i \partial \theta_j} \right]$$

The Fisher information measures the expected curvature of the log-likelihood surface around the true parameter value: sharp peaks correspond to abundant information and tiny parameter errors.

## The Cramér-Rao Inequality

The Cramér-Rao bound establishes the fundamental physical limit on the precision of any unbiased estimator $\hat{\theta}(y)$ ($\mathbb{E}[\hat{\theta}] = \theta$).

For any unbiased scalar estimator $\hat{\theta}_i$:
$$\text{Var}(\hat{\theta}_i) \ge (F^{-1})_{ii}$$

In matrix form, the difference between the covariance matrix of any unbiased estimator and the inverse Fisher matrix is positive semi-definite:
$$\text{Cov}(\hat{\theta}) - F^{-1} \ge 0$$

An estimator that saturates the bound ($\text{Cov}(\hat{\theta}) = F^{-1}$) is termed **efficient**.

## Gaussian Likelihoods and the Tegmark Formula

For a multivariate Gaussian dataset $y \sim \mathcal{N}(\mu(\theta), \Sigma(\theta))$ where both the mean vector $\mu$ and covariance matrix $\Sigma$ depend on cosmological parameters, Tegmark et al. (1997) derived the exact Fisher matrix:
$$F_{ij} = \frac{\partial \mu^T}{\partial \theta_i} \Sigma^{-1} \frac{\partial \mu}{\partial \theta_j} + \frac{1}{2} \text{Tr}\left( \Sigma^{-1} \frac{\partial \Sigma}{\partial \theta_i} \Sigma^{-1} \frac{\partial \Sigma}{\partial \theta_j} \right)$$

- **First term (mean variation)**: Dominates in galaxy redshift surveys and Type Ia supernova distance ladders, where parameters shift the expected signal.
- **Second term (covariance variation)**: Dominates in CMB power spectrum analysis and cosmic shear surveys, where cosmological parameters alter the fluctuation spectrum and covariance of the Gaussian random field.

## See Also
- [[Astro-Statistics_and_Cosmology_MOC]]
- [[06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting]]
- [[Marginalized versus conditional parameter errors in Fisher forecasting]]
- [[Bernstein-von Mises theorem and Bayesian asymptotics]]



## Linked References

- [[Bernstein-von Mises theorem and Bayesian asymptotics]]
- [[Exact CMB Wishart likelihood and Gaussian high-multipole limit]]
- [[Generalized least squares and correlated measurement errors]]
- [[Marginalized versus conditional parameter errors in Fisher forecasting]]
- [[Maximum likelihood versus maximum a posteriori estimation]]
- [[Transformation group invariance and Jeffreys prior]]
- [[Astro-Statistics_and_Cosmology_MOC]]


