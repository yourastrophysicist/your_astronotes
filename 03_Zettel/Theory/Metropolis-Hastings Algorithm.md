---
layout: "default"
title: "Metropolis-Hastings Algorithm"
---
{% raw %}
# Metropolis-Hastings Algorithm

The Metropolis-Hastings algorithm is the foundational Markov Chain Monte Carlo (MCMC) technique for generating samples from a target probability distribution $p(\boldsymbol{\theta})$.

## The Markov Chain Concept
A sequence of random states $\boldsymbol{\theta}_0, \boldsymbol{\theta}_1, \dots, \boldsymbol{\theta}_N$ where the transition probability to state $\boldsymbol{\theta}_{t+1}$ depends strictly on the current state $\boldsymbol{\theta}_t$:
$$p(\boldsymbol{\theta}_{t+1} | \boldsymbol{\theta}_t, \dots, \boldsymbol{\theta}_0) = T(\boldsymbol{\theta}_{t+1} | \boldsymbol{\theta}_t)$$

## Algorithm Protocol
1. Start at arbitrary initial position $\boldsymbol{\theta}_0$.
2. At step $t$, draw a candidate state $\boldsymbol{\theta}'$ from a proposal distribution $q(\boldsymbol{\theta}' | \boldsymbol{\theta}_t)$ (e.g., Gaussian random walk centered on $\boldsymbol{\theta}_t$).
3. Compute the **acceptance probability** $\alpha$:
$$\alpha(\boldsymbol{\theta}_t, \boldsymbol{\theta}') = \min\left( 1, \frac{p(\boldsymbol{\theta}') \, q(\boldsymbol{\theta}_t | \boldsymbol{\theta}')}{p(\boldsymbol{\theta}_t) \, q(\boldsymbol{\theta}' | \boldsymbol{\theta}_t)} \right)$$
4. Draw uniform random number $u \sim U(0, 1)$:
	- If $u \le \alpha$: accept candidate, set $\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}'$.
	- If $u > \alpha$: reject candidate, set $\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t$.

## Detailed Balance Condition
The acceptance rule guarantees detailed balance:
$$p(\boldsymbol{\theta}) T(\boldsymbol{\theta}' | \boldsymbol{\theta}) = p(\boldsymbol{\theta}') T(\boldsymbol{\theta} | \boldsymbol{\theta}')$$
ensuring that the unique stationary equilibrium distribution of the Markov chain converges exactly to $p(\boldsymbol{\theta})$.

## Related Notes
- [Goodman-Weare Affine Invariant Ensemble Sampler](./Goodman-Weare%20Affine%20Invariant%20Ensemble%20Sampler.html)
- [Affine-Invariant Ensemble MCMC with emcee](../Computational/Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html)
- [Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2013%20-%20Bayesian%20Statistics%20and%20Markov%20Chain%20Monte%20Carlo%20Sampling.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Computational/Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html" class="backlink-item">Affine-Invariant Ensemble MCMC with emcee</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Goodman-Weare%20Affine%20Invariant%20Ensemble%20Sampler.html" class="backlink-item">Goodman-Weare Affine Invariant Ensemble Sampler</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2013%20-%20Bayesian%20Statistics%20and%20Markov%20Chain%20Monte%20Carlo%20Sampling.html" class="backlink-item">Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling</a></li>
  </ul>
</div>
