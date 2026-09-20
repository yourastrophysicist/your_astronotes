---
layout: "default"
title: "Multivariate Gaussian conditioning and marginalization"
---
# Multivariate Gaussian conditioning and marginalization

The multivariate Gaussian distribution is the analytic workhorse of astro-statistics. Its defining property is that both marginalization and conditioning can be computed in closed algebraic form via block matrix operations and Schur complements.

## Partitioned Gaussian System

Let a joint vector $x \in \mathbb{R}^{n+m}$ follow a multivariate normal distribution partitioned into components $x_1 \in \mathbb{R}^n$ and $x_2 \in \mathbb{R}^m$:
$$x = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} \sim \mathcal{N}\left( \begin{pmatrix} \mu_1 \\ \mu_2 \end{pmatrix}, \begin{pmatrix} \Sigma_{11} & \Sigma_{12} \\ \Sigma_{21} & \Sigma_{22} \end{pmatrix} \right)$$
where $\Sigma_{21} = \Sigma_{12}^T$. The precision matrix (inverse covariance) is similarly partitioned:
$$\Lambda \equiv \Sigma^{-1} = \begin{pmatrix} \Lambda_{11} & \Lambda_{12} \\ \Lambda_{21} & \Lambda_{22} \end{pmatrix}$$

## Marginalization (Projecting Out Latent Variables)

The marginal distribution of $x_1$ integrates over all possible realizations of $x_2$:
$$p(x_1) = \int_{\mathbb{R}^m} p(x_1, x_2) \, dx_2$$

In covariance parameterization, marginalization corresponds simply to selecting the corresponding sub-block:
$$x_1 \sim \mathcal{N}(\mu_1, \Sigma_{11})$$

In precision parameterization, evaluating this integral requires completing the square, which yields the Schur complement of $\Lambda_{22}$:
$$\Sigma_{11}^{-1} = \Lambda_{11} - \Lambda_{12} \Lambda_{22}^{-1} \Lambda_{21}$$

Marginalization inflates uncertainty: $\Sigma_{11} \ge (\Lambda_{11})^{-1}$ in the positive semidefinite ordering.

## Conditioning (Freezing Observed Subsets)

The conditional distribution of $x_1$ given a known measurement $x_2 = a$ evaluates the slice along the joint density:
$$p(x_1 \mid x_2 = a) = \frac{p(x_1, x_2 = a)}{p(x_2 = a)}$$

The conditional distribution is itself a multivariate Gaussian:
$$x_1 \mid (x_2 = a) \sim \mathcal{N}(\mu_{1\lvert 2}, \Sigma_{1\rvert2})$$

where the conditional mean and conditional covariance are given by:
$$\mu_{1\mid2} = \mu_1 + \Sigma_{12} \Sigma_{22}^{-1} (a - \mu_2)$$
$$\Sigma_{1\mid2} = \Sigma_{11} - \Sigma_{12} \Sigma_{22}^{-1} \Sigma_{21}$$

In precision parameterization, the conditional precision is strikingly simple:
$$\Sigma_{1\mid2}^{-1} = \Lambda_{11}$$

Conditioning suppresses uncertainty: $\Sigma_{1\mid2} \le \Sigma_{11}$, with equality if and only if $x_1$ and $x_2$ are uncorrelated ($\Sigma_{12} = 0$).

## Cosmological Applications
- **Wiener filtering**: Optimal reconstruction of the primordial cosmological density field from sparse, noisy galaxy redshift surveys.
- **Constrained Gaussian realizations**: Generating simulated CMB or cosmic web initial conditions conditioned on matching local structure (such as the Virgo cluster and the Local Group).
- **Gaussian Process regression**: Conditioning a non-parametric function distribution on observational flux measurements.

## See Also
- [[Astro-Statistics_and_Cosmology_MOC]]
- [[03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models]]
- [[Generalized least squares and correlated measurement errors]]
- [[Gaussian Process Regression in Light Curve Detrending]]



## Linked References

- [[Bayesian hierarchical modeling for Type Ia supernovae]]
- [[Generalized least squares and correlated measurement errors]]
- [[Marginalized versus conditional parameter errors in Fisher forecasting]]
- [[Principle of maximum entropy in prior assignment]]
- [[Astro-Statistics_and_Cosmology_MOC]]


