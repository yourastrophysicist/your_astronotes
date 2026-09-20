---
layout: "default"
title: "Metropolis-Hastings Algorithm"
---
# Metropolis-Hastings Algorithm

The Metropolis-Hastings algorithm is the foundational Markov Chain Monte Carlo (MCMC) technique for generating samples from a target probability distribution $p(\boldsymbol{\theta})$.

## The Markov Chain Concept
A sequence of random states $\boldsymbol{\theta}_0, \boldsymbol{\theta}_1, \dots, \boldsymbol{\theta}_N$ where the transition probability to state $\boldsymbol{\theta}_{t+1}$ depends strictly on the current state $\boldsymbol{\theta}_t$:
$$p(\boldsymbol{\theta}_{t+1} \mid \boldsymbol{\theta}_t, \dots, \boldsymbol{\theta}_0) = T(\boldsymbol{\theta}_{t+1} \mid \boldsymbol{\theta}_t)$$

## Algorithm Protocol
1. Start at arbitrary initial position $\boldsymbol{\theta}_0$.
2. At step $t$, draw a candidate state $\boldsymbol{\theta}'$ from a proposal distribution $q(\boldsymbol{\theta}' \mid \boldsymbol{\theta}_t)$ (e.g., Gaussian random walk centered on $\boldsymbol{\theta}_t$).
3. Compute the **acceptance probability** $\alpha$:
$$\alpha(\boldsymbol{\theta}_t, \boldsymbol{\theta}') = \min\left( 1, \frac{p(\boldsymbol{\theta}') \, q(\boldsymbol{\theta}_t \mid \boldsymbol{\theta}')}{p(\boldsymbol{\theta}_t) \, q(\boldsymbol{\theta}' \mid \boldsymbol{\theta}_t)} \right)$$
4. Draw uniform random number $u \sim U(0, 1)$:
	- If $u \le \alpha$: accept candidate, set $\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}'$.
	- If $u > \alpha$: reject candidate, set $\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t$.

## Detailed Balance Condition
The acceptance rule guarantees detailed balance:
$$p(\boldsymbol{\theta}) T(\boldsymbol{\theta}' \mid \boldsymbol{\theta}) = p(\boldsymbol{\theta}') T(\boldsymbol{\theta} \mid \boldsymbol{\theta}')$$
ensuring that the unique stationary equilibrium distribution of the Markov chain converges exactly to $p(\boldsymbol{\theta})$.

## Related Notes
- [[Goodman-Weare Affine Invariant Ensemble Sampler]]
- [[Affine-Invariant Ensemble MCMC with emcee]]
- [[Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling]]



## Linked References

- [[Affine-Invariant Ensemble MCMC with emcee]]
- [[Goodman-Weare Affine Invariant Ensemble Sampler]]
- [[Astrophysics_Laboratory_2_MOC]]


