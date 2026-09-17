---
layout: "default"
title: "MCMC convergence diagnostics and Gelman-Rubin statistic"
---
{% raw %}
# MCMC convergence diagnostics and Gelman-Rubin statistic

Because Markov Chain Monte Carlo (MCMC) samples are inherently serially correlated and start from arbitrary initial locations, rigorous diagnostic criteria are required to determine when burn-in has ended and samples accurately represent the stationary posterior distribution.

## Autocorrelation Time and Effective Sample Size

For a scalar chain $\theta^{(1)}, \theta^{(2)}, \dots, \theta^{(N)}$, the autocovariance at lag $k$ is:
$$\gamma(k) = \frac{1}{N-k}\sum_{i=1}^{N-k} \left(\theta^{(i)} - \bar{\theta}\right)\left(\theta^{(i+k)} - \bar{\theta}\right)$$

The autocorrelation function is $\rho(k) = \gamma(k) / \gamma(0)$. The integrated autocorrelation time $\tau$ measures the number of steps required to obtain an independent sample:
$$\tau = 1 + 2\sum_{k=1}^\infty \rho(k)$$

The **Effective Sample Size** ($N_{\rm eff}$) indicates the equivalent number of independent draws:
$$N_{\rm eff} = \frac{N}{\tau}$$

In high-precision cosmological parameter estimation (e.g. Planck or DES), chains should satisfy $N \ge 50\tau$ to reliably compute credible intervals.

## The Gelman-Rubin Diagnostic ($\hat{R}$)

The Gelman-Rubin statistic (Gelman & Rubin 1992) compares variance within individual chains against variance across multiple independent chains started from widely dispersed points in parameter space.

Let $M$ independent chains of length $N$ be run simultaneously. Let $\theta_{m, n}$ denote the $n$-th sample of chain $m$.

1. **Mean of chain $m$**: $\bar{\theta}_m = \frac{1}{N}\sum_{n=1}^N \theta_{m, n}$
2. **Global mean**: $\bar{\theta}_{\bullet} = \frac{1}{M}\sum_{m=1}^M \bar{\theta}_m$
3. **Between-chain variance ($B$)**:
$$\frac{B}{N} = \frac{1}{M-1}\sum_{m=1}^M (\bar{\theta}_m - \bar{\theta}_{\bullet})^2$$
4. **Within-chain variance ($W$)**:
$$s_m^2 = \frac{1}{N-1}\sum_{n=1}^N (\theta_{m, n} - \bar{\theta}_m)^2$$
$$W = \frac{1}{M}\sum_{m=1}^M s_m^2$$

5. **Pooled marginal posterior variance estimate ($\widehat{\text{Var}}(\theta|D)$)**:
$$\widehat{\text{Var}}(\theta|D) = \frac{N-1}{N} W + \frac{1}{N} B$$

The potential scale reduction factor $\hat{R}$ is defined as:
$$\hat{R} = \sqrt{\frac{\widehat{\text{Var}}(\theta|D)}{W}} = \sqrt{\frac{N-1}{N} + \frac{1}{N}\frac{B}{W}}$$

### Convergence Threshold
- If the chains have converged and mixed thoroughly, the between-chain variance matches the within-chain variance ($B/N \to 0$), and $\hat{R} \to 1.0$.
- A standard convergence threshold in modern cosmological analysis is $\hat{R} < 1.01$ (or at minimum $\hat{R} < 1.05$) across all monitored cosmological and nuisance parameters.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics](../../02_Literature/Lectures/Astrostatistics/05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics.html)
- [Metropolis-Hastings algorithm and detailed balance](./Metropolis-Hastings%20algorithm%20and%20detailed%20balance.html)
- [Gibbs sampling and conditional state transitions](./Gibbs%20sampling%20and%20conditional%20state%20transitions.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Gibbs%20sampling%20and%20conditional%20state%20transitions.html" class="backlink-item">Gibbs sampling and conditional state transitions</a></li>
    <li class="backlink-item-wrap"><a href="./Metropolis-Hastings%20algorithm%20and%20detailed%20balance.html" class="backlink-item">Metropolis-Hastings algorithm and detailed balance</a></li>
  </ul>
</div>
