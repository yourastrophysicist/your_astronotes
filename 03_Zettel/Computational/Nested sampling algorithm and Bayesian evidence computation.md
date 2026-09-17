---
layout: "default"
title: "Nested sampling algorithm and Bayesian evidence computation"
name: "Nested sampling algorithm and Bayesian evidence computation"
description: "Skilling 1D prior mass transformation, live points, prior shrinkage, and marginal likelihood evidence computation"
---
{% raw %}
John Skilling (2004) invented **Nested Sampling** to solve the difficult problem of computing the Bayesian evidence (marginal likelihood $\mathcal{Z}$), which standard MCMC algorithms cannot calculate efficiently.

## the bayesian evidence and model selection

in Bayes' theorem:

$$P(\boldsymbol{\theta} \mid D, M) = \frac{\mathcal{L}(\boldsymbol{\theta}) \pi(\boldsymbol{\theta})}{\mathcal{Z}}$$

the Bayesian evidence $\mathcal{Z}$ is the normalisation integral over the entire prior volume:

$$\mathcal{Z} = \int_\Omega \mathcal{L}(\boldsymbol{\theta}) \pi(\boldsymbol{\theta}) \, d^D\boldsymbol{\theta}$$

the evidence allows objective model selection via the Bayes Factor $B_{12} = \mathcal{Z}_1 / \mathcal{Z}_2$, penalizing over-parameterized models (Occam's razor).

## transformation to 1d prior mass

Skilling mapped the multidimensional integral over parameter space $\boldsymbol{\theta}$ into a 1-dimensional integral over the **prior mass** $X$:

$$X(\lambda) = \int_{\mathcal{L}(\boldsymbol{\theta}) > \lambda} \pi(\boldsymbol{\theta}) \, d^D\boldsymbol{\theta}$$

where $X \in [0, 1]$ represents the cumulative prior volume enclosed by the iso-likelihood contour $\mathcal{L}(\boldsymbol{\theta}) = \lambda$.
the evidence becomes a simple 1D integral:

$$\mathcal{Z} = \int_0^1 \mathcal{L}(X) \, dX$$

## the nested sampling algorithm

1. **initialize**: sample $N_{\text{live}}$ active points randomly from the prior $\pi(\boldsymbol{\theta})$, with initial prior mass $X_0 = 1$.
2. **iteration $i$**:
   - find the live point with the lowest likelihood: $\mathcal{L}_i = \min \mathcal{L}(\boldsymbol{\theta})$.
   - record this point and add its contribution to the evidence:
     $$\Delta \mathcal{Z}_i = \mathcal{L}_i \Delta X_i, \quad \Delta X_i = \frac{1}{2}(X_{i-1} - X_{i+1})$$
   - discard the worst point.
   - sample a **new** point from the prior subject to the strict constraint $\mathcal{L}(\boldsymbol{\theta}_{\text{new}}) > \mathcal{L}_i$.
3. **prior shrinkage**:
   at each step, the enclosed prior mass shrinks by an exponential factor:
   $$X_i = t_i X_{i-1}, \quad \langle \ln t_i \rangle = -\frac{1}{N_{\text{live}}} \implies X_i \approx \exp\left(-\frac{i}{N_{\text{live}}}\right)$$
4. **termination**:
   terminate when the remaining live points contribute negligibly to $\mathcal{Z}$ ($\Delta \mathcal{Z} < \text{tol}$).

implemented in state-of-the-art astrophysical packages:
- `MultiNest`: partitions multimodal likelihood surfaces using bounding ellipsoids.
- `PolyChord`: uses slice sampling inside iso-likelihood contours, scaling efficiently to high dimensions ($D > 50$).

## see also

- [Computational_Astrophysics_MOC](../../04_Atlas/Computational_Astrophysics_MOC.html)
- [10_Nested_Sampling_and_Evidence_Computation](../../02_Literature/Lectures/Computational_Astrophysics/10_Nested_Sampling_and_Evidence_Computation.html)
- [Exoplanet atmospheric retrieval and TauREx framework](./Exoplanet%20atmospheric%20retrieval%20and%20TauREx%20framework.html)
- [Affine-Invariant Ensemble MCMC with emcee](./Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Exoplanet%20atmospheric%20retrieval%20and%20TauREx%20framework.html" class="backlink-item">Exoplanet atmospheric retrieval and TauREx framework</a></li>
  </ul>
</div>
