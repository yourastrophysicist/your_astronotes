---
layout: "default"
title: "Gibbs sampling and conditional state transitions"
---
# Gibbs sampling and conditional state transitions

Gibbs sampling (Geman & Geman 1984) is a special case of the Metropolis-Hastings algorithm where parameters are updated iteratively by sampling directly from their full univariate conditional distributions. Because proposal draws match the exact conditional posteriors, the acceptance probability is identically unity ($\alpha = 1$).

## The Algorithm

Let $\theta = (\theta_1, \theta_2, \dots, \theta_k)^T$ be a $k$-dimensional parameter vector. At step $t+1$, the algorithm updates each coordinate sequentially while conditioning on the most recent values of all other coordinates:

$$\theta_1^{(t+1)} \sim p\left(\theta_1 \,\middle \mid \, \theta_2^{(t)}, \theta_3^{(t)}, \dots, \theta_k^{(t)}, D\right)$$
$$\theta_2^{(t+1)} \sim p\left(\theta_2 \,\middle \mid \, \theta_1^{(t+1)}, \theta_3^{(t)}, \dots, \theta_k^{(t)}, D\right)$$
$$\vdots$$
$$\theta_j^{(t+1)} \sim p\left(\theta_j \,\middle \mid \, \theta_{<j}^{(t+1)}, \theta_{>j}^{(t)}, D\right)$$
$$\vdots$$
$$\theta_k^{(t+1)} \sim p\left(\theta_k \,\middle \mid \, \theta_1^{(t+1)}, \dots, \theta_{k-1}^{(t+1)}, D\right)$$

## Proof as a Special Case of Metropolis-Hastings

Consider updating component $\theta_j$ from $\theta = (\theta_j, \theta_{-j})$ to $\theta' = (\theta_j', \theta_{-j})$. The proposal distribution proposes along coordinate $j$ according to the exact conditional distribution:
$$q(\theta' \mid \theta) = p(\theta_j' \mid \theta_{-j}, D)$$

The reverse proposal is:
$$q(\theta \mid \theta') = p(\theta_j \mid \theta_{-j}, D)$$

Evaluating the Metropolis-Hastings acceptance ratio:
$$\alpha(\theta, \theta') = \min\left( 1, \frac{p(\theta' \mid D) q(\theta \mid \theta')}{p(\theta \mid D) q(\theta' \mid \theta)} \right)$$

Decomposing the joint posteriors via the product rule $p(\theta \mid D) = p(\theta_j \mid \theta_{-j}, D) p(\theta_{-j} \mid D)$:
$$\frac{p(\theta' \mid D) q(\theta \mid \theta')}{p(\theta \mid D) q(\theta' \mid \theta)} = \frac{\left[ p(\theta_j' \mid \theta_{-j}, D) p(\theta_{-j} \mid D) \right] \cdot p(\theta_j \mid \theta_{-j}, D)}{\left[ p(\theta_j \mid \theta_{-j}, D) p(\theta_{-j} \mid D) \right] \cdot p(\theta_j' \mid \theta_{-j}, D)} = 1$$

Therefore:
$$\alpha(\theta, \theta') = \min(1, 1) = 1$$

Every proposed move in Gibbs sampling is accepted without rejection.

## Cosmological Applications
- **CMB Map Making and Component Separation**: The Commander framework decomposes foreground emission (synchrotron, dust, free-free) and CMB temperature maps using multi-frequency Gibbs sampling.
- **Large-Scale Structure Reconstruction**: Iteratively drawing cosmic velocity fields and density contrast fields from galaxy redshift catalogs.
- **Hierarchical Models**: Alternating between updating latent individual supernova distances and global cosmological parameters ($\Omega_m, w$).

## See Also
- [[Astro-Statistics_and_Cosmology_MOC]]
- [[05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics]]
- [[Metropolis-Hastings algorithm and detailed balance]]
- [[MCMC convergence diagnostics and Gelman-Rubin statistic]]



## Linked References

- [[MCMC convergence diagnostics and Gelman-Rubin statistic]]
- [[Metropolis-Hastings algorithm and detailed balance]]
- [[Astro-Statistics_and_Cosmology_MOC]]


