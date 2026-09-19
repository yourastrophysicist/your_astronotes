---
layout: "default"
title: "Metropolis-Hastings algorithm and detailed balance"
---
# Metropolis-Hastings algorithm and detailed balance

The Metropolis-Hastings (MH) algorithm (Metropolis et al. 1953, Hastings 1970) generates a sequence of correlated random samples from an unnormalized probability distribution $p(\theta \mid D) \propto p(D \mid \theta)p(\theta)$ by simulating an ergodic Markov chain that has the target distribution as its unique stationary state.

## The Invariant Distribution and Detailed Balance

A Markov chain is defined by a transition probability $T(\theta \to \theta')$. A distribution $\pi(\theta)$ is a stationary (invariant) distribution of the chain if:
$$\pi(\theta') = \int \pi(\theta) T(\theta \to \theta') \, d\theta$$

A sufficient (though not necessary) condition to guarantee stationarity is **detailed balance**, which requires that probability flux between any two states balances identically:
$$\pi(\theta) T(\theta \to \theta') = \pi(\theta') T(\theta' \to \theta)$$

Integrating both sides over $\theta$ demonstrates that detailed balance implies invariance:
$$\int \pi(\theta) T(\theta \to \theta') \, d\theta = \pi(\theta') \int T(\theta' \to \theta) \, d\theta = \pi(\theta') \cdot 1 = \pi(\theta')$$

## Algorithm Construction

The MH algorithm splits the transition into two steps: a proposal step followed by an acceptance/rejection step:
$$T(\theta \to \theta') = q(\theta' \mid \theta) \alpha(\theta, \theta') + \left(1 - r(\theta)\right) \delta(\theta' - \theta)$$
where $q(\theta' \mid \theta)$ is the proposal distribution, $\alpha(\theta, \theta')$ is the acceptance probability, and $r(\theta) = \int q(\phi \mid \theta) \alpha(\theta, \phi) \, d\phi$.

Substituting into the detailed balance condition for $\theta' \ne \theta$:
$$\pi(\theta) q(\theta' \mid \theta) \alpha(\theta, \theta') = \pi(\theta') q(\theta \mid \theta') \alpha(\theta', \theta)$$
$$\frac{\alpha(\theta, \theta')}{\alpha(\theta', \theta)} = \frac{\pi(\theta') q(\theta \mid \theta')}{\pi(\theta) q(\theta' \mid \theta)}$$

Setting $\alpha(\theta', \theta) \le 1$ leads directly to the Metropolis-Hastings acceptance rule:
$$\alpha(\theta, \theta') = \min\left( 1, \frac{\pi(\theta') q(\theta \mid \theta')}{\pi(\theta) q(\theta' \mid \theta)} \right)$$

For symmetric proposals ($q(\theta' \mid \theta) = q(\theta \mid \theta')$), the ratio reduces to the original Metropolis ratio $\pi(\theta') / \pi(\theta)$.

## Normalization Cancellation

The primary practical power of the MH algorithm in Bayesian cosmology is that the normalizing evidence $p(D) = \int p(D \mid \theta)p(\theta)\,d\theta$ cancels identically:
$$\frac{\pi(\theta')}{\pi(\theta)} = \frac{p(D \mid \theta') p(\theta') / p(D)}{p(D \mid \theta) p(\theta) / p(D)} = \frac{p(D \mid \theta') p(\theta')}{p(D \mid \theta) p(\theta)}$$

High-dimensional Bayesian posteriors can thus be mapped without evaluating the intractable evidence integral.

## Proposal Tuning and Acceptance Rates
- **Roberts, Gelman & Gilks (1997) theorem**: For a target Gaussian distribution of dimension $D \to \infty$, the optimal proposal scale yields an acceptance rate of $\alpha \approx 0.234$ (for random-walk Metropolis) and $\alpha \approx 0.44$ for 1D models.
- If proposal variance is too small, $\alpha \to 1$ but the chain moves via slow diffusion ($N_{\rm step} \propto \sigma^{-2}$).
- If proposal variance is too large, proposed points land in low-probability tails, $\alpha \to 0$, and the chain freezes in place.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics](../../02_Literature/Lectures/Astrostatistics/05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics.html)
- [Gibbs sampling and conditional state transitions](Gibbs%20sampling%20and%20conditional%20state%20transitions.html)
- [MCMC convergence diagnostics and Gelman-Rubin statistic](MCMC%20convergence%20diagnostics%20and%20Gelman-Rubin%20statistic.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Computational/Monte%20Carlo%20integration%20and%20cursed%20dimensions.html" class="backlink-item">Monte Carlo integration and cursed dimensions</a></li>
    <li class="backlink-item-wrap"><a href="Gibbs%20sampling%20and%20conditional%20state%20transitions.html" class="backlink-item">Gibbs sampling and conditional state transitions</a></li>
    <li class="backlink-item-wrap"><a href="MCMC%20convergence%20diagnostics%20and%20Gelman-Rubin%20statistic.html" class="backlink-item">MCMC convergence diagnostics and Gelman-Rubin statistic</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>

