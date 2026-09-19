---
layout: "default"
title: "Goodman-Weare Affine Invariant Ensemble Sampler"
---
# Goodman-Weare Affine Invariant Ensemble Sampler

The Goodman & Weare (2010) affine-invariant ensemble sampler is an MCMC algorithm designed to sample anisotropic, highly degenerate probability distributions without requiring proposal tuning.

## The Affine Invariance Principle
An algorithm is **affine invariant** if its sampling performance is completely unchanged under any linear coordinate transformation:
$$\boldsymbol{y} = \boldsymbol{A} \boldsymbol{x} + \boldsymbol{b}$$
While standard random-walk Metropolis-Hastings fails when parameters are tightly correlated (requiring small step sizes to avoid rejection), an affine-invariant sampler performs equally well on spherical and narrow, highly correlated probability distributions.

## Walker Ensemble Dynamics
Instead of a single Markov chain, an ensemble of $K$ interdependent walkers $\boldsymbol{S} = \{ \boldsymbol{X}_1, \dots, \boldsymbol{X}_K \}$ ($K \ge 2 \times N_{\text{dim}}$) evolves simultaneously.

### The Stretch Move
To update walker $\boldsymbol{X}_k$:
1. Select another walker $\boldsymbol{X}_j$ ($j \ne k$) uniformly at random from the remaining $K-1$ walkers.
2. Propose candidate position along the line connecting the two walkers:
$$\boldsymbol{X}_k' = \boldsymbol{X}_j + Z (\boldsymbol{X}_k - \boldsymbol{X}_j)$$
where $Z$ is a scalar drawn from the probability density:
$$g(z) = \frac{1}{2 (\sqrt{a} - 1/\sqrt{a})} \frac{1}{\sqrt{z}} \quad \text{for } z \in \left[ \frac{1}{a}, a \right] \quad (a = 2.0)$$
3. Accept candidate with probability:
$$\alpha = \min\left( 1, Z^{N_{\text{dim}}-1} \frac{p(\boldsymbol{X}_k')}{p(\boldsymbol{X}_k)} \right)$$

Because the proposal scale is automatically determined by the distance between existing walkers, the ensemble contracts and expands dynamically to match the geometry of the posterior.

## Related Notes
- [Metropolis-Hastings Algorithm](Metropolis-Hastings%20Algorithm.html)
- [Affine-Invariant Ensemble MCMC with emcee](../Computational/Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html)
- [Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2013%20-%20Bayesian%20Statistics%20and%20Markov%20Chain%20Monte%20Carlo%20Sampling.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Computational/Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html" class="backlink-item">Affine-Invariant Ensemble MCMC with emcee</a></li>
    <li class="backlink-item-wrap"><a href="Metropolis-Hastings%20Algorithm.html" class="backlink-item">Metropolis-Hastings Algorithm</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

