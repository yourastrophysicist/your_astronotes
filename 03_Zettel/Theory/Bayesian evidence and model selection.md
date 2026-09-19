---
layout: "default"
title: "Bayesian evidence and model selection"
---
# Bayesian evidence and model selection

In Bayesian inference, model selection addresses which physical framework $M_i$ best describes the data $D$, operating at a higher categorical level than parameter estimation within a fixed model. The fundamental quantity governing model comparison is the **Bayesian evidence** (also called marginal likelihood).

## The Evidence Integral

For a model $M$ parameterized by $\theta \in \mathbb{R}^k$, the evidence $p(D \mid M)$ is the normalization constant of Bayes' theorem, computed by integrating the likelihood over the entire prior space:
$$p(D \mid M) = \int_{\Omega_\theta} p(D \mid \theta, M) p(\theta \mid M) \, d\theta$$

Given two competing models $M_1$ and $M_2$, the posterior odds ratio is:
$$\frac{p(M_1 \mid D)}{p(M_2 \mid D)} = \frac{p(D \mid M_1)}{p(D \mid M_2)} \frac{p(M_1)}{p(M_2)} = B_{12} \frac{p(M_1)}{p(M_2)}$$
where $B_{12} \equiv p(D \mid M_1)/p(D \mid M_2)$ is the **Bayes factor**.

## The Jeffreys Scale for Evaluating Evidence

Harold Jeffreys established a standard scale for interpreting the strength of evidence provided by $\ln B_{12}$:

| $\ln B_{12}$ | Odds Ratio $B_{12}$ | Strength of Evidence |
| :--- | :--- | :--- |
| $< 1.0$ | $< 3:1$ | Inconclusive / Barely worth mentioning |
| $1.0 - 2.5$ | $3:1 - 12:1$ | Substantial / Positive |
| $2.5 - 5.0$ | $12:1 - 150:1$ | Strong |
| $> 5.0$ | $> 150:1$ | Decisive |

## The Automatic Occam's Razor via Laplace Approximation

Under the Laplace approximation, expanding the log-likelihood around the best-fit parameter $\hat{\theta}$:
$$p(D \mid \theta, M) \approx p(D \mid \hat{\theta}, M) \exp\left[ -\frac{1}{2} (\theta - \hat{\theta})^T F (\theta - \hat{\theta}) \right]$$
where $F = -\nabla^2 \ln p(D \mid \hat{\theta})$ is the observed Fisher information matrix.

Assuming a uniform prior over a prior volume $\Delta \theta$:
$$p(\theta \mid M) = \frac{1}{\Delta \theta}$$

Evaluating the Gaussian integral yields:
$$p(D \mid M) \approx p(D \mid \hat{\theta}, M) \cdot \frac{(2\pi)^{k/2} (\det F)^{-1/2}}{\Delta \theta} = L_{\rm max} \cdot \Omega_{\rm Occam}$$

The factor $\Omega_{\rm Occam} = \frac{\delta \theta_{\rm posterior}}{\Delta \theta_{\rm prior}} \ll 1$ represents the **Occam factor**.
- A complex model with many free parameters has a vast prior volume $\Delta \theta$.
- Unless the peak likelihood $L_{\rm max}$ improves sufficiently to overcome the volume penalty $(\delta \theta / \Delta \theta)^k$, Bayesian evidence decisively favors the simpler model.

## Cosmological Applications
- Testing flat $\Lambda\text{CDM}$ ($k=0$) versus dynamical dark energy ($w_0, w_a$).
- Testing the number of relativistic neutrino species $N_{\rm eff} = 3.046$ against sterile neutrino hypotheses.
- Determining whether exoplanetary transit data requires circular versus eccentric Keplerian orbits.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio](../../02_Literature/Lectures/Astrostatistics/11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio.html)
- [Savage-Dickey density ratio for nested model comparison](Savage-Dickey%20density%20ratio%20for%20nested%20model%20comparison.html)
- [Lindley paradox in statistical hypothesis testing](Lindley%20paradox%20in%20statistical%20hypothesis%20testing.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Lindley%20paradox%20in%20statistical%20hypothesis%20testing.html" class="backlink-item">Lindley paradox in statistical hypothesis testing</a></li>
    <li class="backlink-item-wrap"><a href="Savage-Dickey%20density%20ratio%20for%20nested%20model%20comparison.html" class="backlink-item">Savage-Dickey density ratio for nested model comparison</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>

