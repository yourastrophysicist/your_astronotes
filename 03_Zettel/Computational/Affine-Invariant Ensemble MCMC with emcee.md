---
layout: "default"
title: "Affine-Invariant Ensemble MCMC with emcee"
---
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
- [[Goodman-Weare Affine Invariant Ensemble Sampler]]
- [[Metropolis-Hastings Algorithm]]
- [[MCMC Convergence Diagnostics and Autocorrelation Analysis]]



## Linked References

- [[Laboratory Exercise - Joint Transit Modeling and MCMC Analysis]]
- [[MCMC Convergence Diagnostics and Autocorrelation Analysis]]
- [[Marginalized Posterior Distributions and Corner Plots]]
- [[Nested sampling algorithm and Bayesian evidence computation]]
- [[Goodman-Weare Affine Invariant Ensemble Sampler]]
- [[Metropolis-Hastings Algorithm]]
- [[Astrophysics_Laboratory_2_MOC]]
- [[Computational_Astrophysics_MOC]]


