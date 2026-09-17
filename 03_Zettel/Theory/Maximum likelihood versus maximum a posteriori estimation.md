---
layout: "default"
title: "Maximum likelihood versus maximum a posteriori estimation"
---
{% raw %}
# Maximum likelihood versus maximum a posteriori estimation

In inverse problems where a continuous parameter vector $\theta \in \mathbb{R}^k$ produces observable data $D$, point estimation seeks a representative single vector $\hat{\theta}$. The two central point estimators in astrophysical inference are the Maximum Likelihood Estimator (MLE) and the Maximum A Posteriori (MAP) estimator.

## Maximum Likelihood Estimation (MLE)

The likelihood function $L(\theta) \equiv p(D|\theta)$ evaluates the probability of obtaining the observed dataset $D$ under varying parameter values $\theta$. The MLE chooses the parameter values that maximize this sampling probability:
$$\hat{\theta}_{\rm MLE} \equiv \arg\max_\theta p(D|\theta) = \arg\max_\theta \ln p(D|\theta)$$

Setting the gradient of the log-likelihood (the score function $S(\theta)$) to zero yields the likelihood equations:
$$S(\theta) \equiv \nabla_\theta \ln p(D|\theta) = 0$$

### Properties of the MLE
1. **Asymptotic unbiasedness**: As sample size $N \to \infty$, $\mathbb{E}[\hat{\theta}_{\rm MLE}] \to \theta_{\rm true}$.
2. **Asymptotic efficiency**: The asymptotic covariance attains the Cramér-Rao lower bound, $\text{Cov}(\hat{\theta}_{\rm MLE}) \to F^{-1}$, where $F$ is the Fisher Information Matrix.
3. **Invariance under reparametrization**: If $\psi = g(\theta)$ is a one-to-one transformation, then $\hat{\psi}_{\rm MLE} = g(\hat{\theta}_{\rm MLE})$.
4. **Failure modes**: For finite sample sizes or pathological likelihood surfaces (e.g. multimodal distributions or edges of physical parameter space), the MLE can be severely biased and overestimate signal significance.

## Maximum A Posteriori Estimation (MAP)

The MAP estimator incorporates prior information $p(\theta)$ via Bayes' theorem:
$$p(\theta|D) = \frac{p(D|\theta) p(\theta)}{p(D)}$$
$$\hat{\theta}_{\rm MAP} \equiv \arg\max_\theta p(\theta|D) = \arg\max_\theta \left[ \ln p(D|\theta) + \ln p(\theta) \right]$$

Setting the posterior gradient to zero:
$$\nabla_\theta \ln p(D|\theta) + \nabla_\theta \ln p(\theta) = 0$$

### Decision-Theoretic Foundation
Under decision theory with a 0-1 loss function $L(\theta, \hat{\theta}) = -\delta(\theta - \hat{\theta})$, the MAP estimator minimizes the expected posterior loss.

### Properties and Caveats
1. **Regularization**: The prior term $\ln p(\theta)$ acts as a natural regularizer, penalizing unphysical parameter regimes (e.g. negative masses or negative flux).
2. **Lack of reparametrization invariance**: Because probability density transforms with a Jacobian $|J| = |\det(\partial \theta / \partial \psi)|$, the mode of $p(\psi|D)$ does not generally equal $g(\hat{\theta}_{\rm MAP})$.
3. **Asymptotic convergence**: In the limit of infinite informative data ($N \to \infty$), the likelihood gradient scales as $\mathcal{O}(N)$ while the prior gradient remains $\mathcal{O}(1)$, causing $\hat{\theta}_{\rm MAP} \to \hat{\theta}_{\rm MLE}$ by the Bernstein-von Mises theorem.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals](../../02_Literature/Lectures/Astrostatistics/02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals.html)
- [Bernstein-von Mises theorem and Bayesian asymptotics](./Bernstein-von%20Mises%20theorem%20and%20Bayesian%20asymptotics.html)
- [Fisher information matrix and Cramer-Rao bound](./Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Cox%20theorem%20and%20probability%20as%20extended%20logic.html" class="backlink-item">Cox theorem and probability as extended logic</a></li>
  </ul>
</div>
