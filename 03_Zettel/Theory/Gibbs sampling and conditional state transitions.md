---
layout: "default"
title: "Gibbs sampling and conditional state transitions"
---
{% raw %}
# Gibbs sampling and conditional state transitions

Gibbs sampling (Geman & Geman 1984) is a special case of the Metropolis-Hastings algorithm where parameters are updated iteratively by sampling directly from their full univariate conditional distributions. Because proposal draws match the exact conditional posteriors, the acceptance probability is identically unity ($\alpha = 1$).

## The Algorithm

Let $\theta = (\theta_1, \theta_2, \dots, \theta_k)^T$ be a $k$-dimensional parameter vector. At step $t+1$, the algorithm updates each coordinate sequentially while conditioning on the most recent values of all other coordinates:

$$\theta_1^{(t+1)} \sim p\left(\theta_1 \,\middle|\, \theta_2^{(t)}, \theta_3^{(t)}, \dots, \theta_k^{(t)}, D\right)$$
$$\theta_2^{(t+1)} \sim p\left(\theta_2 \,\middle|\, \theta_1^{(t+1)}, \theta_3^{(t)}, \dots, \theta_k^{(t)}, D\right)$$
$$\vdots$$
$$\theta_j^{(t+1)} \sim p\left(\theta_j \,\middle|\, \theta_{<j}^{(t+1)}, \theta_{>j}^{(t)}, D\right)$$
$$\vdots$$
$$\theta_k^{(t+1)} \sim p\left(\theta_k \,\middle|\, \theta_1^{(t+1)}, \dots, \theta_{k-1}^{(t+1)}, D\right)$$

## Proof as a Special Case of Metropolis-Hastings

Consider updating component $\theta_j$ from $\theta = (\theta_j, \theta_{-j})$ to $\theta' = (\theta_j', \theta_{-j})$. The proposal distribution proposes along coordinate $j$ according to the exact conditional distribution:
$$q(\theta'|\theta) = p(\theta_j' | \theta_{-j}, D)$$

The reverse proposal is:
$$q(\theta|\theta') = p(\theta_j | \theta_{-j}, D)$$

Evaluating the Metropolis-Hastings acceptance ratio:
$$\alpha(\theta, \theta') = \min\left( 1, \frac{p(\theta'|D) q(\theta|\theta')}{p(\theta|D) q(\theta'|\theta)} \right)$$

Decomposing the joint posteriors via the product rule $p(\theta|D) = p(\theta_j|\theta_{-j}, D) p(\theta_{-j}|D)$:
$$\frac{p(\theta'|D) q(\theta|\theta')}{p(\theta|D) q(\theta'|\theta)} = \frac{\left[ p(\theta_j'|\theta_{-j}, D) p(\theta_{-j}|D) \right] \cdot p(\theta_j|\theta_{-j}, D)}{\left[ p(\theta_j|\theta_{-j}, D) p(\theta_{-j}|D) \right] \cdot p(\theta_j'|\theta_{-j}, D)} = 1$$

Therefore:
$$\alpha(\theta, \theta') = \min(1, 1) = 1$$

Every proposed move in Gibbs sampling is accepted without rejection.

## Cosmological Applications
- **CMB Map Making and Component Separation**: The Commander framework decomposes foreground emission (synchrotron, dust, free-free) and CMB temperature maps using multi-frequency Gibbs sampling.
- **Large-Scale Structure Reconstruction**: Iteratively drawing cosmic velocity fields and density contrast fields from galaxy redshift catalogs.
- **Hierarchical Models**: Alternating between updating latent individual supernova distances and global cosmological parameters ($\Omega_m, w$).

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics](../../02_Literature/Lectures/Astrostatistics/05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics.html)
- [Metropolis-Hastings algorithm and detailed balance](./Metropolis-Hastings%20algorithm%20and%20detailed%20balance.html)
- [MCMC convergence diagnostics and Gelman-Rubin statistic](./MCMC%20convergence%20diagnostics%20and%20Gelman-Rubin%20statistic.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./MCMC%20convergence%20diagnostics%20and%20Gelman-Rubin%20statistic.html" class="backlink-item">MCMC convergence diagnostics and Gelman-Rubin statistic</a></li>
    <li class="backlink-item-wrap"><a href="./Metropolis-Hastings%20algorithm%20and%20detailed%20balance.html" class="backlink-item">Metropolis-Hastings algorithm and detailed balance</a></li>
  </ul>
</div>
