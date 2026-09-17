---
layout: "default"
title: "09_Bayesian_Inference_and_Parameter_Estimation"
---
{% raw %}
# Lesson 09 – Bayesian Inference and Parameter Estimation

*Computational Astrophysics, Prof. Tiziano Zingales*  
*Index: [Computational_Astrophysics_MOC](../../../04_Atlas/Computational_Astrophysics_MOC.html)*

---

## The Statistical Foundations: Frequentist vs. Bayesian Inference

Modern observational astrophysics confronts problems of incomplete information, non-Gaussian noise, parameter degeneracies, and low signal-to-noise ratios. The interpretation of probabilities bifurcates into two distinct mathematical paradigms:

```
+-----------------------------------------------------------------------------------------+
|                               STATISTICAL INTERPRETATIONS                               |
+--------------------------+--------------------------------------------------------------+
| Paradigm                 | Definition of Probability P(A)                               |
+--------------------------+--------------------------------------------------------------+
| Frequentist              | Long-run relative frequency of event A across an infinite   |
|                          | sequence of identical, independent hypothetical repetitions. |
|                          | Parameters \theta are fixed unknown constants; data D vary.   |
+--------------------------+--------------------------------------------------------------+
| Bayesian                 | Degree of belief or plausibility in proposition A conditional|
| (Cox, Jaynes, Jeffreys)  | on state of information I. Probability applies directly to   |
|                          | physical parameters \theta; data D are fixed observations.    |
+--------------------------+--------------------------------------------------------------+
```

Because astronomers observe a single unique realization of the universe and cannot rerun exoplanet transits under identical stellar activity states, **Bayesian inference provides the natural framework for inverse problems**.

---

## Bayes' Theorem for Continuous Parameter Spaces

Let $\mathbf{D} \in \mathbb{R}^N$ denote an observed astrophysical dataset (e.g., spectrophotometric transit depths $\delta_\lambda$) and $\boldsymbol{\theta} \in \mathbb{R}^M$ denote the vector of physical model parameters (e.g., planetary radius $R_p$, atmospheric temperature $T$, molecular abundances $\ln \chi_i$) within a physical hypothesis model $\mathcal{M}$.

Bayes' Theorem follows directly from the product rule of probability:

$$P(\boldsymbol{\theta} | \mathbf{D}, \mathcal{M}) = \frac{P(\mathbf{D} | \boldsymbol{\theta}, \mathcal{M}) \, P(\boldsymbol{\theta} | \mathcal{M})}{P(\mathbf{D} | \mathcal{M})} = \frac{\mathcal{L}(\boldsymbol{\theta}) \, \pi(\boldsymbol{\theta})}{\mathcal{Z}}$$

```
                                      Likelihood L(\theta) ─── What the data say
                                                │
       Posterior P(\theta | D) = ───────────────┴─────────────── * Prior \pi(\theta) ─── What we knew before
                                      Bayesian Evidence Z
                                                │
                                    Normalizing constant over all \theta
```

### Components of the Theorem
1. **Prior Probability $\pi(\boldsymbol{\theta}) \equiv P(\boldsymbol{\theta} | \mathcal{M})$**:
   Quantifies the state of physical knowledge regarding $\boldsymbol{\theta}$ prior to incorporating current dataset $\mathbf{D}$ (e.g., stellar radius from Gaia parallax, or positive bounds on gas mixing ratios).
2. **Likelihood Function $\mathcal{L}(\boldsymbol{\theta}) \equiv P(\mathbf{D} | \boldsymbol{\theta}, \mathcal{M})$**:
   The probability of observing the empirical dataset $\mathbf{D}$ given a specific realization of model parameters $\boldsymbol{\theta}$. For independent Gaussian observational uncertainties $\sigma_k$:
   $$\mathcal{L}(\boldsymbol{\theta}) = \prod_{k=1}^K \frac{1}{\sqrt{2\pi \sigma_k^2}} \exp\left( -\frac{[y_k - f_k(\boldsymbol{\theta})]^2}{2\sigma_k^2} \right)$$
   $$\ln \mathcal{L}(\boldsymbol{\theta}) = -\frac{1}{2} \sum_{k=1}^K \left[ \frac{[y_k - f_k(\boldsymbol{\theta})]^2}{\sigma_k^2} + \ln(2\pi \sigma_k^2) \right] = -\frac{1}{2} \chi^2(\boldsymbol{\theta}) + \text{const}$$
3. **Posterior Probability $P(\boldsymbol{\theta} | \mathbf{D}, \mathcal{M})$**:
   The joint probability distribution of physical parameters updated by the observational data.
4. **Marginal Likelihood (Bayesian Evidence) $\mathcal{Z} \equiv P(\mathbf{D} | \mathcal{M})$**:
   The multidimensional integral normalizing the posterior over the entire prior volume:
   $$\mathcal{Z} = \int_{\Omega_{\boldsymbol{\theta}}} \mathcal{L}(\boldsymbol{\theta}) \pi(\boldsymbol{\theta}) \, d^M\boldsymbol{\theta}$$

---

## Analytical Conjugate Models: The Binomial-Beta System

When the prior and posterior belong to the same probability distribution family, the prior is termed **conjugate** to the likelihood.

Consider $n$ Bernoulli trials resulting in $k$ successes (e.g., detecting $k$ transits in $n$ observed stellar orbits):
- **Binomial Likelihood**:
  $$P(k | n, p) = \binom{n}{k} p^k (1 - p)^{n - k}$$
- **Beta Prior**:
  $$\pi(p | \alpha, \beta) = \frac{1}{\text{B}(\alpha, \beta)} p^{\alpha - 1} (1 - p)^{\beta - 1}$$
  where $\text{B}(\alpha, \beta) = \int_0^1 u^{\alpha - 1} (1 - u)^{\beta - 1} du = \frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha + \beta)}$ is the Beta function.

### Exact Posterior Update
Multiplying prior by likelihood:

$$P(p | k, n, \alpha, \beta) \propto p^k (1 - p)^{n - k} \cdot p^{\alpha - 1} (1 - p)^{\beta - 1} = p^{(\alpha + k) - 1} (1 - p)^{(\beta + n - k) - 1}$$

The posterior is identically a Beta distribution with updated parameters:

$$P(p | k, n, \alpha, \beta) = \text{Beta}(p | \alpha + k, \, \beta + n - k)$$

```
Prior: Beta(\alpha, \beta)  ───[Observation: k successes in n trials]───►  Posterior: Beta(\alpha + k, \beta + n - k)
```

### Prior Choices and Information States
- **Uniform Flat Prior**: $\text{Beta}(1, 1)$, assigning equal probability across $p \in [0, 1]$.
- **Jeffreys Prior (Invariance)**: $\text{Beta}(0.5, 0.5)$, invariant under reparameterization.
- **Haldane Prior**: $\text{Beta}(0.001, 0.001)$, maximally uninformative U-shaped prior concentrating mass near boundaries.
- **Informative Prior**: $\text{Beta}(20, 30)$, encoding prior empirical measurements.

### Point Estimators and Credible Intervals
1. **Posterior Mean**:
   $$\mathbb{E}[p | k, n] = \int_0^1 p \, P(p | k, n) \, dp = \frac{\alpha + k}{\alpha + \beta + n}$$
   As $n \to \infty$, $\mathbb{E}[p] \to \frac{k}{n}$, recovering the Frequentist Maximum Likelihood Estimator (MLE).
2. **Maximum A Posteriori (MAP)**:
   The mode of the posterior distribution:
   $$p_{\text{MAP}} = \frac{\alpha + k - 1}{\alpha + \beta + n - 2} \quad (\text{for } \alpha+k > 1, \beta+n-k > 1)$$
3. **Highest Posterior Density (HPD / HDI) Interval**:
   A $100(1 - \alpha)\%$ HDI encompasses the narrowest parameter credible region such that every point inside possesses higher posterior density than any point outside:
   $$\int_{\text{HDI}} P(\boldsymbol{\theta} | \mathbf{D}) d\boldsymbol{\theta} = 1 - \alpha$$

---

## Bayesian Model Selection and the Bayes Factor

In exoplanet atmospheric science, researchers must determine whether an observational spectrum warrants the inclusion of a physical ingredient (e.g., does the spectrum contain statistical evidence for water vapor $\text{H}_2\text{O}$, or is it explained by a featureless gray cloud deck?).

```
Model 1 (\mathcal{M}_1): Atmosphere with H2O, CO2, and Clouds   ───► Evidence Z_1 = \int L_1(\theta_1) \pi(\theta_1) d\theta_1
Model 2 (\mathcal{M}_2): Flat Cloudy Atmosphere (No Molecules)  ───► Evidence Z_2 = \int L_2(\theta_2) \pi(\theta_2) d\theta_2
```

The relative plausibility of two competing models $\mathcal{M}_1$ and $\mathcal{M}_2$ given data $\mathbf{D}$ is evaluated via **Posterior Odds**:

$$\frac{P(\mathcal{M}_1 | \mathbf{D})}{P(\mathcal{M}_2 | \mathbf{D})} = \frac{P(\mathbf{D} | \mathcal{M}_1)}{P(\mathbf{D} | \mathcal{M}_2)} \times \frac{P(\mathcal{M}_1)}{P(\mathcal{M}_2)} = \mathcal{B}_{12} \times \frac{P(\mathcal{M}_1)}{P(\mathcal{M}_2)}$$

where $\mathcal{B}_{12} \equiv \frac{\mathcal{Z}_1}{\mathcal{Z}_2}$ is the **Bayes Factor** (ratio of marginal likelihoods).

### Occam's Razor in the Bayesian Evidence
The marginal likelihood naturally incorporates Occam's razor without requiring arbitrary parameter penalty formulas (unlike AIC or BIC):

$$\mathcal{Z} = \int \mathcal{L}(\boldsymbol{\theta}) \pi(\boldsymbol{\theta}) d\boldsymbol{\theta} \approx \mathcal{L}_{\max} \times \frac{\Delta \theta_{\text{posterior}}}{\Delta \theta_{\text{prior}}}$$

A model with excessive unnecessary parameters spreads its prior mass over an enormous volume $\Delta \theta_{\text{prior}}$, penalizing the integral $\mathcal{Z}$ unless the data provide overwhelming likelihood support $\mathcal{L}_{\max}$.

### Interpretation Scale (Lee & Wagenmakers 2014; Kass & Raftery 1995)
| Bayes Factor $\mathcal{B}_{12}$ | $\ln \mathcal{B}_{12}$ | Qualitative Strength of Evidence |
| :--- | :--- | :--- |
| $> 100$ | $> 4.6$ | Decisive evidence in favor of $\mathcal{M}_1$ |
| $10 - 100$ | $2.3 - 4.6$ | Strong evidence in favor of $\mathcal{M}_1$ |
| $3 - 10$ | $1.1 - 2.3$ | Moderate evidence in favor of $\mathcal{M}_1$ |
| $1 - 3$ | $0.0 - 1.1$ | Anecdotal / Weak evidence in favor of $\mathcal{M}_1$ |
| $1/3 - 1$ | $-1.1 - 0.0$ | Anecdotal / Weak evidence in favor of $\mathcal{M}_2$ |
| $1/10 - 1/3$ | $-2.3 - -1.1$ | Moderate evidence in favor of $\mathcal{M}_2$ |
| $< 1/10$ | $< -2.3$ | Strong evidence in favor of $\mathcal{M}_2$ |

---

## High-Dimensional Sampling Challenges in Astronomy

For simple 1D or 2D analytical models, $\mathcal{Z}$ can be integrated using quadrature. However, exoplanet atmospheric retrieval involves $M \approx 10 - 30$ parameters (temperatures, chemical mixing ratios, cloud pressures, scattering slopes).

Standard numerical quadrature scaling:
- Grid evaluation with $K$ bins per dimension requires $K^M$ forward model evaluations.
- For $K = 100$ and $M = 15$: $100^{15} = 10^{30}$ evaluations. At $1\text{ ms}$ per forward model, this requires $10^{19}\text{ years}$.

To sample these parameter spaces:
1. **Markov Chain Monte Carlo (MCMC)**: Generates samples distributed asymptotically according to the posterior $P(\boldsymbol{\theta} | \mathbf{D})$. Highly effective for parameter estimation, but incapable of evaluating the evidence $\mathcal{Z}$ accurately because MCMC chains spend negligible time sampling low-likelihood prior regions.
2. **Nested Sampling (Skilling 2004)**: Specifically designed to compute the evidence $\mathcal{Z}$ directly while generating posterior samples as a secondary product.

---

## Related Notes
- [05_Machine_Learning_Foundations_and_Regression_Models](./05_Machine_Learning_Foundations_and_Regression_Models.html)
- [07_Atmospheric_Radiative_Transfer_and_Line_Profiles](./07_Atmospheric_Radiative_Transfer_and_Line_Profiles.html)
- [08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx](./08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx.html)
- [10_Nested_Sampling_and_Evidence_Computation](./10_Nested_Sampling_and_Evidence_Computation.html)
- [Affine-Invariant Ensemble MCMC with emcee](../../../03_Zettel/Computational/Affine-Invariant%20Ensemble%20MCMC%20with%20emcee.html)
- [MCMC Convergence Diagnostics and Autocorrelation Analysis](../../../03_Zettel/Computational/MCMC%20Convergence%20Diagnostics%20and%20Autocorrelation%20Analysis.html)
- [Marginalized Posterior Distributions and Corner Plots](../../../03_Zettel/Computational/Marginalized%20Posterior%20Distributions%20and%20Corner%20Plots.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./05_Machine_Learning_Foundations_and_Regression_Models.html" class="backlink-item">05_Machine_Learning_Foundations_and_Regression_Models</a></li>
    <li class="backlink-item-wrap"><a href="./07_Atmospheric_Radiative_Transfer_and_Line_Profiles.html" class="backlink-item">07_Atmospheric_Radiative_Transfer_and_Line_Profiles</a></li>
    <li class="backlink-item-wrap"><a href="./08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx.html" class="backlink-item">08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx</a></li>
    <li class="backlink-item-wrap"><a href="./10_Nested_Sampling_and_Evidence_Computation.html" class="backlink-item">10_Nested_Sampling_and_Evidence_Computation</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
  </ul>
</div>
