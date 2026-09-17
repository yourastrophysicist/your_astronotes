---
layout: "default"
title: "Bernstein-von Mises theorem and Bayesian asymptotics"
---
{% raw %}
# Bernstein-von Mises theorem and Bayesian asymptotics

The Bernstein-von Mises (BvM) theorem, often termed the Bayesian Central Limit Theorem, forms the foundational bridge reconciling Bayesian and frequentist asymptotics in regular statistical models. It states that under mild regularity conditions, as the sample size $N \to \infty$, the posterior probability distribution $p(\theta|D)$ converges in total variation distance to a multivariate Gaussian distribution centered at the maximum likelihood estimate $\hat{\theta}_{\rm MLE}$, with covariance matrix given by the inverse Fisher Information Matrix.

## Formal Statement

Let $D = \{x_1, x_2, \dots, x_N\}$ be independent and identically distributed observations drawn from a true distribution $p(x|\theta_0)$. If:
1. The parameter space $\Theta \subseteq \mathbb{R}^k$ is open and contains $\theta_0$.
2. The log-likelihood $\ell_N(\theta) = \sum_{i=1}^N \ln p(x_i|\theta)$ is twice continuously differentiable in a neighborhood of $\theta_0$.
3. The Fisher information per observation $I(\theta_0) = -\mathbb{E}\left[\nabla^2 \ln p(x|\theta_0)\right]$ is positive definite.
4. The prior $p(\theta)$ is continuous and strictly positive at $\theta_0$ ($p(\theta_0) > 0$).

Then the posterior distribution satisfies:
$$\lim_{N\to\infty} \left\| p(\theta|D) - \mathcal{N}\left( \hat{\theta}_{\rm MLE}, F_N^{-1} \right) \right\|_{\rm TV} = 0$$
where $F_N = N I(\theta_0)$ is the total Fisher Information Matrix, and $\|\cdot\|_{\rm TV}$ denotes total variation distance.

## Taylor Expansion Proof Sketch

Expanding the log-posterior around the MLE $\hat{\theta}$:
$$\ln p(\theta|D) = \ln p(D|\hat{\theta}) + \nabla_\theta \ln p(D|\hat{\theta})^T (\theta - \hat{\theta}) + \frac{1}{2}(\theta - \hat{\theta})^T \left[\nabla_\theta^2 \ln p(D|\hat{\theta})\right] (\theta - \hat{\theta}) + \ln p(\hat{\theta}) + \mathcal{O}(\|\theta - \hat{\theta}\|^3)$$

By definition of the MLE, the first-order gradient vanishes: $\nabla_\theta \ln p(D|\hat{\theta}) = 0$.

By the Strong Law of Large Numbers, the observed information matrix converges to the Fisher information:
$$-\frac{1}{N}\nabla_\theta^2 \ln p(D|\hat{\theta}) \xrightarrow{\text{a.s.}} I(\theta_0)$$

The prior term $\ln p(\hat{\theta})$ is constant with respect to $\theta$ and scales as $\mathcal{O}(1)$, while the curvature term scales as $\mathcal{O}(N)$. Exponentiating both sides:
$$p(\theta|D) \propto \exp\left[ -\frac{1}{2} (\theta - \hat{\theta})^T F_N (\theta - \hat{\theta}) \right]$$

## Astrophysical Consequences

1. **Prior wash-out**: Provided the prior does not assign exact zero probability to the truth, the choice of prior becomes irrelevant for large cosmological surveys (e.g. Planck, SDSS, Euclid).
2. **Equivalence of credible and confidence intervals**: In the asymptotic regime, a $1-\alpha$ Bayesian credible region centered on $\hat{\theta}$ coincides exactly with the frequentist $1-\alpha$ Neyman confidence interval.
3. **Breakdown regimes**: The theorem fails in singular models (e.g. vanishing amplitudes at boundary $A=0$), non-identifiable parameters, infinite-dimensional nonparametric inference, and small sample regimes (such as rare gravitational wave events or early exoplanet direct imaging).

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals](../../02_Literature/Lectures/Astrostatistics/02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals.html)
- [Fisher information matrix and Cramer-Rao bound](./Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html)
- [Frequentist confidence intervals versus Bayesian credible regions](./Frequentist%20confidence%20intervals%20versus%20Bayesian%20credible%20regions.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html" class="backlink-item">Fisher information matrix and Cramer-Rao bound</a></li>
    <li class="backlink-item-wrap"><a href="./Maximum%20likelihood%20versus%20maximum%20a%20posteriori%20estimation.html" class="backlink-item">Maximum likelihood versus maximum a posteriori estimation</a></li>
  </ul>
</div>
