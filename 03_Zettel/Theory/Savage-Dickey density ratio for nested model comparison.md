---
layout: "default"
title: "Savage-Dickey density ratio for nested model comparison"
---
# Savage-Dickey density ratio for nested model comparison

The Savage-Dickey Density Ratio (SDDR; Dickey 1971) is an exact mathematical shortcut that evaluates the Bayes factor between two nested models using only the parameter samples generated from a single MCMC run of the more complex model, completely bypassing high-dimensional evidence integration.

## Nested Model Framework

Consider two models $M_0$ and $M_1$:
- **Complex model $M_1$**: Parameterized by $(\theta, \omega)$, where $\theta$ are common nuisance/background parameters and $\omega$ is the parameter of interest.
- **Nested base model $M_0$**: A constrained subset of $M_1$ where $\omega$ is fixed to a specific theoretical value $\omega_0$ (e.g. $\Omega_k = 0$, or tensor-to-scalar ratio $r = 0$):
$$p(D \mid \theta, M_0) \equiv p(D \mid \theta, \omega = \omega_0, M_1)$$

Assume the prior in the unrestricted model factorizes at the point of interest:
$$p(\theta, \omega \mid M_1) = p(\theta \mid \omega, M_1) p(\omega \mid M_1)$$
such that $p(\theta \mid \omega = \omega_0, M_1) = p(\theta \mid M_0)$.

## Mathematical Proof

By definition, the Bayes factor comparing $M_0$ to $M_1$ is:
$$B_{01} = \frac{p(D \mid M_0)}{p(D \mid M_1)}$$

Applying Bayes' theorem to the marginal posterior of $\omega$ under model $M_1$:
$$p(\omega \mid D, M_1) = \frac{p(D \mid \omega, M_1) p(\omega \mid M_1)}{p(D \mid M_1)}$$

Evaluating this relation specifically at $\omega = \omega_0$:
$$p(\omega = \omega_0 \mid D, M_1) = \frac{p(D \mid \omega = \omega_0, M_1) p(\omega = \omega_0 \mid M_1)}{p(D \mid M_1)}$$

Recognizing that the marginal likelihood $p(D \mid \omega = \omega_0, M_1)$ integrates over $\theta$:
$$p(D \mid \omega = \omega_0, M_1) = \int p(D \mid \theta, \omega = \omega_0, M_1) p(\theta \mid \omega = \omega_0, M_1) \, d\theta = \int p(D \mid \theta, M_0) p(\theta \mid M_0) \, d\theta = p(D \mid M_0)$$

Substituting $p(D \mid M_0)$ into the expression:
$$p(\omega = \omega_0 \mid D, M_1) = \frac{p(D \mid M_0) p(\omega = \omega_0 \mid M_1)}{p(D \mid M_1)} = B_{01} \cdot p(\omega = \omega_0 \mid M_1)$$

Rearranging yields the Savage-Dickey Density Ratio:
$$B_{01} = \frac{p(\omega = \omega_0 \mid D, M_1)}{p(\omega = \omega_0 \mid M_1)}$$

## Operational Significance

The Bayes factor between two nested models equals the ratio of the marginal posterior density of $\omega$ at $\omega_0$ to the prior density of $\omega$ at $\omega_0$, both evaluated entirely within model $M_1$:
$$B_{01} = \frac{\text{Posterior density at the null value}}{\text{Prior density at the null value}}$$

### Practical Advantages
1. **Computational efficiency**: No need to compute evidence for either model via Nested Sampling or thermodynamic integration; running standard MCMC on $M_1$ suffices.
2. **Intuitive geometry**: If the posterior distribution concentrates around $\omega_0$, the posterior density exceeds the prior density ($p(\omega_0 \mid D) > p(\omega_0)$), yielding $B_{01} > 1$ (evidence favors the simpler model $M_0$).

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio](../../02_Literature/Lectures/Astrostatistics/11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio.html)
- [Bayesian evidence and model selection](Bayesian%20evidence%20and%20model%20selection.html)
- [Lindley paradox in statistical hypothesis testing](Lindley%20paradox%20in%20statistical%20hypothesis%20testing.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Bayesian%20evidence%20and%20model%20selection.html" class="backlink-item">Bayesian evidence and model selection</a></li>
    <li class="backlink-item-wrap"><a href="Lindley%20paradox%20in%20statistical%20hypothesis%20testing.html" class="backlink-item">Lindley paradox in statistical hypothesis testing</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>

