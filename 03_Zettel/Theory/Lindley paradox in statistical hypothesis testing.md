---
layout: "default"
title: "Lindley paradox in statistical hypothesis testing"
---
# Lindley paradox in statistical hypothesis testing

Lindley's paradox (Lindley 1957) exposes a fundamental divergence between frequentist null-hypothesis significance testing ($p$-values) and Bayesian model comparison (posterior odds or Bayes factors) when evaluating sharp hypotheses with large sample sizes.

## Formal Formulation

Consider testing a sharp point null hypothesis against a continuous alternative:
$$H_0: \theta = \theta_0 \quad \text{versus} \quad H_1: \theta \ne \theta_0$$

Let $D = \{x_1, \dots, x_N\}$ be $N$ independent measurements drawn from a normal distribution with known variance $\sigma^2$:
$$\bar{x} \sim \mathcal{N}\left(\theta, \frac{\sigma^2}{N}\right)$$

Under $H_1$, assign a diffuse prior over the parameter space:
$$\theta \mid H_1 \sim \mathcal{N}(\theta_0, \sigma_0^2)$$
with $\sigma_0 \gg \sigma/\sqrt{N}$.

The standard frequentist test statistic is:
$$z = \frac{\bar{x} - \theta_0}{\sigma / \sqrt{N}}$$

Suppose the sample mean lands at a fixed boundary, say $z = 1.96$, corresponding to a two-sided frequentist $p$-value of $p = 0.05$. A frequentist rejects $H_0$ at the 5% significance level, regardless of sample size $N$.

## Bayesian Evidence Computation

The marginal likelihood under $H_0$ is:
$$p(D \mid H_0) = \frac{1}{\sqrt{2\pi \sigma^2/N}} \exp\left[ -\frac{1}{2} z^2 \right]$$

The marginal likelihood under $H_1$ integrates over the prior:
$$p(D \mid H_1) = \int_{-\infty}^\infty p(D \mid \theta) p(\theta \mid H_1) \, d\theta = \frac{1}{\sqrt{2\pi (\sigma_0^2 + \sigma^2/N)}} \exp\left[ -\frac{1}{2} \frac{(\bar{x} - \theta_0)^2}{\sigma_0^2 + \sigma^2/N} \right]$$

The Bayes factor $B_{01} \equiv p(D \mid H_0) / p(D \mid H_1)$ simplifies to:
$$B_{01} = \sqrt{1 + \frac{N\sigma_0^2}{\sigma^2}} \exp\left[ -\frac{1}{2} \frac{z^2}{1 + \sigma^2 / (N\sigma_0^2)} \right]$$

In the limit $N \to \infty$ with $z$ held fixed (e.g. $z = 1.96$):
$$B_{01} \approx \sqrt{\frac{N\sigma_0^2}{\sigma^2}} \exp\left[ -\frac{z^2}{2} \right] \propto \sqrt{N} \to \infty$$

As $N \to \infty$, the Bayes factor in favor of the null hypothesis grows without bound ($B_{01} \to \infty$), even though the frequentist test rejects $H_0$ with $p = 0.05$.

## Physical Explanation in Cosmology

The source of the paradox lies in how each paradigm penalizes parameter space volume:
1. **The frequentist $p$-value** measures only the tail area under the null hypothesis; as $N$ grows, a fixed $z$ corresponds to an increasingly microscopic deviation $\lvert \bar{x} - \theta_0\rvert \propto 1/\sqrt{N}$.
2. **The Bayesian evidence** incorporates an automatic Occam penalty. Model $H_1$ predicted that the parameter could lie anywhere across a wide swath $\sigma_0$. Finding the observed parameter packed tightly at $\theta_0 \pm \sigma/\sqrt{N}$ constitutes severe evidence against the sprawling flexibility of $H_1$.

In cosmological tests (such as searching for non-zero spatial curvature $\Omega_k \ne 0$ or running of the spectral index $\alpha_s \ne 0$), large datasets can yield small $p$-values that actually support the simpler standard $\Lambda\text{CDM}$ model under Bayesian evidence.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals](../../02_Literature/Lectures/Astrostatistics/04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals.html)
- [Bayesian evidence and model selection](Bayesian%20evidence%20and%20model%20selection.html)
- [Savage-Dickey density ratio for nested model comparison](Savage-Dickey%20density%20ratio%20for%20nested%20model%20comparison.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Bayesian%20evidence%20and%20model%20selection.html" class="backlink-item">Bayesian evidence and model selection</a></li>
    <li class="backlink-item-wrap"><a href="Frequentist%20confidence%20intervals%20versus%20Bayesian%20credible%20regions.html" class="backlink-item">Frequentist confidence intervals versus Bayesian credible regions</a></li>
    <li class="backlink-item-wrap"><a href="Savage-Dickey%20density%20ratio%20for%20nested%20model%20comparison.html" class="backlink-item">Savage-Dickey density ratio for nested model comparison</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>

