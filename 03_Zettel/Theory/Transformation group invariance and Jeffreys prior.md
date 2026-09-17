---
layout: "default"
title: "Transformation group invariance and Jeffreys prior"
---
{% raw %}
# Transformation group invariance and Jeffreys prior

Assigning prior probability distributions $p(\theta)$ when prior knowledge is minimal represents a foundational question in Bayesian statistics. Sir Harold Jeffreys (1939) and Edwin T. Jaynes (1968) demonstrated that objective priors must be derived from the transformation symmetries of the physical model.

## Invariance Under Group Transformations

Let an experiment be described by a model invariant under a continuous Lie group of transformations:
$$\theta' = g(\theta)$$

If a change of variables leaves the underlying physical problem identical, the prior must assign identical probability measures to corresponding regions:
$$p(\theta) \, d\theta = p(\theta') \, d\theta'$$

### 1. Location Parameters (Translation Invariance)
If the model satisfies $p(y|\theta) = f(y - \theta)$, shifting the origin by a constant $c$ leaves the physics unchanged: $y' = y + c \implies \theta' = \theta + c$.
$$p(\theta) \, d\theta = p(\theta + c) \, d(\theta + c) = p(\theta + c) \, d\theta \implies p(\theta) = \text{constant}$$

The uninformative prior for a location parameter (such as systemic velocity or mean coordinate) is the uniform Lebesgue prior:
$$p(\mu) \propto 1$$

### 2. Scale Parameters (Scale Invariance)
If the model satisfies $p(y|\sigma) = \frac{1}{\sigma} f(y / \sigma)$, scaling the coordinate units by $\lambda > 0$ yields $y' = \lambda y \implies \sigma' = \lambda \sigma$.
$$p(\sigma) \, d\sigma = p(\lambda \sigma) \, d(\lambda \sigma) = \lambda p(\lambda \sigma) \, d\sigma \implies p(\sigma) \propto \frac{1}{\sigma}$$

Equivalently, this assigns a uniform prior on the logarithmic scale: $p(\ln \sigma) = \text{constant}$. This is the standard prior for scale parameters (such as noise variance, dispersion, or Hubble constant).

## Jeffreys' General Rule

Jeffreys proposed defining uninformative priors proportional to the square root of the determinant of the Fisher Information Matrix:
$$p_J(\theta) \propto \sqrt{\det F(\theta)}$$

### Proof of Coordinate Transformation Invariance
Consider a smooth reparametrization $\phi = g(\theta)$ with Jacobian matrix $J_{ij} = \frac{\partial \theta_i}{\partial \phi_j}$.

By the chain rule, the score function transforms as:
$$\frac{\partial \ln p(y|\phi)}{\partial \phi_i} = \sum_k \frac{\partial \ln p(y|\theta)}{\partial \theta_k} \frac{\partial \theta_k}{\partial \phi_i} = \sum_k J_{ki} S_k(\theta)$$

The Fisher matrix in the new coordinates $\tilde{F}(\phi)$ satisfies:
$$\tilde{F}(\phi) = J^T F(\theta) J$$

Taking the determinant:
$$\det \tilde{F}(\phi) = \det(J^T) \det F(\theta) \det(J) = (\det J)^2 \det F(\theta)$$
$$\sqrt{\det \tilde{F}(\phi)} = |\det J| \sqrt{\det F(\theta)}$$

Applying the transformation law of probability densities:
$$p_\Phi(\phi) = p_\Theta(\theta) |\det J| = \sqrt{\det F(\theta)} |\det J| = \sqrt{\det \tilde{F}(\phi)}$$

Jeffreys' prior is uniquely invariant under smooth, non-singular reparametrizations of the parameter space.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy](../../02_Literature/Lectures/Astrostatistics/10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy.html)
- [Fisher information matrix and Cramer-Rao bound](./Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html)
- [Principle of maximum entropy in prior assignment](./Principle%20of%20maximum%20entropy%20in%20prior%20assignment.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Principle%20of%20maximum%20entropy%20in%20prior%20assignment.html" class="backlink-item">Principle of maximum entropy in prior assignment</a></li>
  </ul>
</div>
