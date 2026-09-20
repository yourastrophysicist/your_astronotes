---
layout: "default"
title: "Exact CMB Wishart likelihood and Gaussian high-multipole limit"
---
# Exact CMB Wishart likelihood and Gaussian high-multipole limit

Constructing the exact statistical likelihood function for Cosmic Microwave Background (CMB) power spectra requires accounting for the transition between the low-$\ell$ non-Gaussian regime and the high-$\ell$ Central Limit Theorem Gaussian limit.

## Low Multipoles: The Exact Inverted Wishart Distribution

At large angular scales ($\ell \le 30$), the number of degrees of freedom $2\ell + 1$ is small, and the distribution of the empirical estimator $\hat{C}_\ell$ is non-Gaussian.

Because each $a_{\ell m}$ is a Gaussian random variable with variance $C_\ell$, the sum:
$$(2\ell + 1) \frac{\hat{C}_\ell}{C_\ell} = \sum_{m=-\ell}^\ell \frac{\lvert a_{\ell m}\rvert^2}{C_\ell} \sim \chi^2_{2\ell+1}$$
follows a chi-squared distribution with $\nu = 2\ell + 1$ degrees of freedom.

The probability density of the observed data $\hat{C}_\ell$ given the theoretical model $C_\ell$ is:
$$p(\hat{C}_\ell \mid C_\ell) = \frac{1}{2^{\frac{2\ell+1}{2}} \Gamma\left(\frac{2\ell+1}{2}\right)} \left( \frac{2\ell+1}{C_\ell} \right)^{\frac{2\ell+1}{2}} \hat{C}_\ell^{\frac{2\ell-1}{2}} \exp\left[ -\frac{(2\ell+1)\hat{C}_\ell}{2 C_\ell} \right]$$

Taking $-2\ln p(\hat{C}_\ell \mid C_\ell)$ and dropping parameter-independent constants yields the exact **Wishart log-likelihood**:
$$-2\ln \mathcal{L}_\ell(C_\ell) = (2\ell + 1) \left[ \frac{\hat{C}_\ell}{C_\ell} + \ln C_\ell \right]$$

Summing over uncoupled multipoles:
$$-2\ln \mathcal{L}_{\rm low-\ell} = \sum_{\ell=2}^{\ell_{\rm max}} (2\ell + 1) \left[ \frac{\hat{C}_\ell}{C_\ell} + \ln C_\ell \right]$$

Notice that this likelihood is strictly asymmetric: fluctuations with $\hat{C}_\ell \ll C_\ell$ are penalized much less severely than $\hat{C}_\ell \gg C_\ell$.

## High Multipoles: Central Limit Theorem and Gaussian Form

For high multipoles ($\ell \ge 30$), $2\ell + 1 \ge 61$. By the Central Limit Theorem, the sum of independent squares converges to a Gaussian distribution:
$$\hat{C}_\ell \sim \mathcal{N}\left( C_\ell, \frac{2}{2\ell+1} C_\ell^2 \right)$$

The log-likelihood approaches the standard chi-squared form:
$$-2\ln \mathcal{L}_{\rm high-\ell} \approx \sum_\ell \frac{(\hat{C}_\ell - C_\ell)^2}{\text{Var}(\hat{C}_\ell)}$$

## Joint Multi-Field Covariance Matrix

In real cosmological pipelines (Planck, ACT, SPT), temperature ($T$) and E-mode polarization ($E$) are measured simultaneously. At each $\ell$, the empirical covariance matrix is:
$$\hat{\mathbf{C}}_\ell = \begin{pmatrix} \hat{C}_\ell^{TT} & \hat{C}_\ell^{TE} \\ \hat{C}_\ell^{TE} & \hat{C}_\ell^{EE} \end{pmatrix}$$

The joint probability density follows an exact 2-dimensional Wishart distribution:
$$-2\ln \mathcal{L}_\ell = (2\ell+1) \left[ \text{Tr}\left( \hat{\mathbf{C}}_\ell \mathbf{C}_\ell^{-1} \right) + \ln \det \mathbf{C}_\ell \right]$$

## See Also
- [[Astro-Statistics_and_Cosmology_MOC]]
- [[07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance]]
- [[CMB angular power spectrum estimator and cosmic variance]]
- [[Fisher information matrix and Cramer-Rao bound]]



## Linked References

- [[CMB angular power spectrum estimator and cosmic variance]]
- [[Astro-Statistics_and_Cosmology_MOC]]


