---
layout: "default"
title: "11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio"
---
# Model Selection, Bayesian Evidence, and the Savage-Dickey Ratio

Graduate lecture notes in Astro-Statistics and Cosmology, taught by Prof. Michele Liguori at the University of Padua.
Reference index [[Astro-Statistics_and_Cosmology_MOC]]

---

## Beyond Parameter Estimation - The Problem of Model Selection

In standard parameter estimation, we assume a specific theoretical model $M$ (such as flat $\Lambda\text{CDM}$) and determine the posterior probability distribution of its parameters $\boldsymbol{\theta}$. However, one of the primary goals of modern cosmology is to decide between competing physical paradigms.
- Is the spatial geometry of the universe strictly flat ($\Omega_k = 0$), or is there evidence for spatial curvature ($\Omega_k \neq 0$)?
- Is dark energy a pure cosmological constant ($w = -1$), or does it evolve dynamically ($w(a) = w_0 + w_a(1-a)$)?
- Did primordial perturbations originate from simple single-field slow-roll inflation ($r = 0, f_{\text{NL}} = 0$), or from multifield mechanisms?
- Are cosmic neutrinos massless, or can cosmological data detect the non-zero minimum mass sum ($\sum m_\nu > 0.06 \, \text{eV}$)?

In classical statistics, adding an extra parameter to a model will almost always improve the fit to the data, decreasing the minimum chi-squared $\chi_{\text{min}}^2$. A purely goodness-of-fit criterion will systematically favor over-parameterized models, leading to overfitting.

The Bayesian framework provides a consistent, self-regulating mathematical mechanism for comparing models of differing complexity without requiring arbitrary penalties.

---

## Bayesian Model Comparison and the Bayes Factor

Let $\{M_1, M_2, \dots\}$ denote a discrete set of competing physical models. Each model $M_i$ possesses its own parameter space $\boldsymbol{\theta}_i$ of dimension $D_i$, with a corresponding prior $\pi(\boldsymbol{\theta}_i \mid M_i)$ and likelihood function $\mathcal{L}_i(\boldsymbol{\theta}_i) \equiv p(\boldsymbol{d} \mid \boldsymbol{\theta}_i, M_i)$.

Applying Bayes' theorem at the model level

$$p(M_i \mid \boldsymbol{d}) = \frac{p(\boldsymbol{d} \mid M_i) \, p(M_i)}{p(\boldsymbol{d})}$$

where $p(M_i)$ is the prior probability assigned to model $M_i$, and the denominator is the sum over all considered models $p(\boldsymbol{d}) = \sum_j p(\boldsymbol{d} \mid M_j) p(M_j)$.

When comparing two alternative models $M_1$ and $M_2$, we compute the posterior odds ratio

$$\frac{p(M_1 \mid \boldsymbol{d})}{p(M_2 \mid \boldsymbol{d})} = \frac{p(M_1)}{p(M_2)} \times \frac{p(\boldsymbol{d} \mid M_1)}{p(\boldsymbol{d} \mid M_2)}$$

This master equation states that

$$\text{Posterior Odds} = \text{Prior Odds} \times \text{Bayes Factor } B_{12}$$

The Bayes factor $B_{12}$ is defined as the ratio of marginal likelihoods (Bayesian evidences)

$$B_{12} \equiv \frac{p(\boldsymbol{d} \mid M_1)}{p(\boldsymbol{d} \mid M_2)} = \frac{\mathcal{Z}_1}{\mathcal{Z}_2}$$

If the investigator has no prior theoretical preference between the two models, setting $p(M_1) = p(M_2)$, the posterior odds reduce identically to the Bayes factor.

---

## The Jeffreys Scale for Evaluating Evidence

To interpret the numerical value of the Bayes factor, Harold Jeffreys (1961) proposed an empirical scale, later refined by Trotta (2008) for astrophysical and cosmological contexts.

Evaluating evidence via $\ln B_{12}$
- $\lvert \ln B_{12}\rvert < 1.0$ (odds less than $3:1$) - Inconclusive, barely worth mentioning. The data cannot distinguish between the models.
- $1.0 < \lvert \ln B_{12}\rvert < 2.5$ (odds between $3:1$ and $12:1$) - Weak evidence in favor of the higher-evidence model.
- $2.5 < \lvert \ln B_{12}\rvert < 5.0$ (odds between $12:1$ and $150:1$) - Moderate to substantial evidence.
- $\lvert \ln B_{12}\rvert > 5.0$ (odds exceeding $150:1$) - Strong to decisive evidence.

---

## The Bayesian Evidence as an Automatic Occam's Razor

The Bayesian evidence (or marginal likelihood) $\mathcal{Z}$ for model $M$ is defined as the integral of the likelihood weighted by the prior over the entire parameter space $\Omega_{\boldsymbol{\theta}}$

$$\mathcal{Z} \equiv p(\boldsymbol{d} \mid M) = \int_{\Omega_{\boldsymbol{\theta}}} \mathcal{L}(\boldsymbol{\theta}) \, \pi(\boldsymbol{\theta} \mid M) \, d\boldsymbol{\theta}$$

Notice that the evidence is the average value of the likelihood across the entire prior volume. This mathematical structure embodies an automatic Occam's razor.

Suppose a complex model $M_1$ introduces an additional parameter $\phi$ that varies over a broad prior range $\Delta \phi_{\text{prior}}$. If the true universe is governed by the simpler model $M_0$ (where $\phi = \phi_0$), the likelihood $\mathcal{L}(\phi)$ will be sharply peaked in a narrow band $\Delta \phi_{\text{post}}$ around $\phi_0$ and will be negligible elsewhere across the broad prior domain.

Because the prior is normalized ($\int \pi(\phi) d\phi = 1$), increasing the prior volume $\Delta \phi_{\text{prior}}$ dilutes the prior density $\pi(\phi) \approx 1/\Delta \phi_{\text{prior}}$. Averaging the localized likelihood peak over this vast empty volume drags down the value of the integral $\mathcal{Z}$.

Unless the extra parameter improves the fit by an amount large enough to overcome this volume dilution penalty, the simpler model will yield a higher evidence. Bayesian model comparison naturally penalizes gratuitous complexity without needing arbitrary parameter-counting penalties like the Akaike Information Criterion.

---

## The Laplace Approximation

When the posterior distribution is unimodal and well-behaved, the multidimensional evidence integral can be estimated analytically using the Laplace approximation.

Let $\hat{\boldsymbol{\theta}}$ denote the maximum a posteriori parameter vector, maximizing the numerator $f(\boldsymbol{\theta}) \equiv \mathcal{L}(\boldsymbol{\theta}) \pi(\boldsymbol{\theta})$.

Expand the logarithm $\ln f(\boldsymbol{\theta})$ in a multivariate Taylor series about the peak $\hat{\boldsymbol{\theta}}$

$$\ln f(\boldsymbol{\theta}) \approx \ln f(\hat{\boldsymbol{\theta}}) + \left. \nabla \ln f \right\rvert_{\hat{\boldsymbol{\theta}}} (\boldsymbol{\theta} - \hat{\boldsymbol{\theta}}) - \frac{1}{2} (\boldsymbol{\theta} - \hat{\boldsymbol{\theta}})^T \boldsymbol{H} (\boldsymbol{\theta} - \hat{\boldsymbol{\theta}})$$

Because $\hat{\boldsymbol{\theta}}$ is the mode, the gradient vanishes $\left. \nabla \ln f \right\rvert_{\hat{\boldsymbol{\theta}}} = \mathbf{0}$.

The matrix $\boldsymbol{H}$ is the positive-definite negative Hessian matrix evaluated at the peak

$$H_{ij} = -\left. \frac{\partial^2 \ln [\mathcal{L}(\boldsymbol{\theta}) \pi(\boldsymbol{\theta})]}{\partial \theta_i \, \partial \theta_j} \right\rvert_{\hat{\boldsymbol{\theta}}}$$

Exponentiating this expansion

$$\mathcal{Z} \approx \mathcal{L}(\hat{\boldsymbol{\theta}}) \, \pi(\hat{\boldsymbol{\theta}}) \int_{\mathbb{R}^D} \exp\left( -\frac{1}{2} (\boldsymbol{\theta} - \hat{\boldsymbol{\theta}})^T \boldsymbol{H} (\boldsymbol{\theta} - \hat{\boldsymbol{\theta}}) \right) \, d^D\boldsymbol{\theta}$$

The integral is a standard multivariate Gaussian normalization integral, evaluating to $(2\pi)^{D/2} (\det \boldsymbol{H})^{-1/2}$.

Therefore, the Laplace approximation to the Bayesian evidence is

$$\mathcal{Z} \approx \mathcal{L}(\hat{\boldsymbol{\theta}}) \, \pi(\hat{\boldsymbol{\theta}}) \, (2\pi)^{D/2} (\det \boldsymbol{H})^{-1/2}$$

Taking the natural logarithm

$$\ln \mathcal{Z} \approx \ln \mathcal{L}(\hat{\boldsymbol{\theta}}) + \ln \pi(\hat{\boldsymbol{\theta}}) + \frac{D}{2} \ln(2\pi) - \frac{1}{2} \ln \det \boldsymbol{H}$$

### Derivation of the Occam Factor

To see the Occam factor clearly, consider a single parameter $\theta$. Assume a uniform prior over range $\Delta \theta_{\text{prior}}$, so $\pi(\hat{\theta}) = 1/\Delta \theta_{\text{prior}}$.

The Hessian is the scalar curvature $H = 1/\sigma_{\text{post}}^2$, where $\sigma_{\text{post}}$ is the posterior standard deviation.

The Laplace evidence simplifies to

$$\mathcal{Z} \approx \mathcal{L}_{\text{max}} \times \left( \frac{\sqrt{2\pi} \sigma_{\text{post}}}{\Delta \theta_{\text{prior}}} \right)$$

The ratio

$$\mathcal{O} \equiv \frac{\sqrt{2\pi} \sigma_{\text{post}}}{\Delta \theta_{\text{prior}}} \ll 1$$

is the quantitative Occam factor. It represents the fraction of the prior volume that survives in the posterior. The Occam factor quantifies the price a model pays for opening an extra dimension of parameter space that requires fine-tuning to explain the data.

---

## The Savage-Dickey Density Ratio (SDDR)

Calculating the multidimensional evidence integral $\mathcal{Z}$ using numerical algorithms (such as nested sampling or thermodynamic integration) is computationally demanding.

For nested models, the Savage-Dickey Density Ratio provides an exact mathematical shortcut that computes the Bayes factor directly from the posterior of the extended model, eliminating the need to compute either evidence integral.

### Definition of Nested Cosmological Models

Two models are nested if the simpler model $M_0$ is obtained by fixing one (or more) parameters of the extended model $M_1$ to a constant theoretical value $\omega_0$.
- Example 1 (Cosmic Curvature) - $M_0$ is flat $\Lambda\text{CDM}$ with $\Omega_k = 0$; $M_1$ has spatial curvature $\Omega_k$ free ($\omega_0 = 0$).
- Example 2 (Dark Energy) - $M_0$ is cosmological constant with $w = -1$; $M_1$ has constant equation of state $w$ free ($\omega_0 = -1$).
- Example 3 (Tensor Perturbations) - $M_0$ has tensor-to-scalar ratio $r = 0$; $M_1$ has primordial gravitational wave amplitude $r$ free ($\omega_0 = 0$).

Let $\omega$ denote the extra parameter, and let $\boldsymbol{\psi}$ denote the vector of common shared parameters (such as $\Omega_b h^2, \Omega_c h^2, H_0$).

Under model $M_0$, parameters are $\boldsymbol{\psi}$. Under model $M_1$, parameters are $(\omega, \boldsymbol{\psi})$.

### The Separability Condition on Priors

The Savage-Dickey density ratio requires that under the extended model $M_1$, the prior distribution on the common parameters $\boldsymbol{\psi}$ conditional on $\omega = \omega_0$ matches the prior on $\boldsymbol{\psi}$ under the base model $M_0$

$$\pi(\boldsymbol{\psi} \, \mid \, \omega = \omega_0, M_1) = \pi(\boldsymbol{\psi} \, \mid \, M_0)$$

If the prior factorizes separably under $M_1$ such that $\pi(\omega, \boldsymbol{\psi} \mid M_1) = \pi(\omega \mid M_1) \pi(\boldsymbol{\psi} \mid M_1)$, this condition states that $\pi(\boldsymbol{\psi} \mid M_1) = \pi(\boldsymbol{\psi} \mid M_0)$.

### Complete Step-by-Step Derivation

We carry out the exact mathematical proof following Prof. Liguori's model selection lecture notes.

Step 1. Write down Bayes' theorem for the joint posterior of $(\omega, \boldsymbol{\psi})$ under the extended model $M_1$

$$p(\omega, \boldsymbol{\psi} \mid \boldsymbol{d}, M_1) = \frac{p(\boldsymbol{d} \mid \omega, \boldsymbol{\psi}, M_1) \, \pi(\omega, \boldsymbol{\psi} \mid M_1)}{p(\boldsymbol{d} \mid M_1)}$$

Using the product rule on the joint prior $\pi(\omega, \boldsymbol{\psi} \mid M_1) = \pi(\boldsymbol{\psi} \mid \omega, M_1) \, \pi(\omega \mid M_1)$

$$p(\omega, \boldsymbol{\psi} \mid \boldsymbol{d}, M_1) = \frac{p(\boldsymbol{d} \mid \omega, \boldsymbol{\psi}, M_1) \, \pi(\boldsymbol{\psi} \mid \omega, M_1) \, \pi(\omega \mid M_1)}{p(\boldsymbol{d} \mid M_1)}$$

Step 2. Obtain the one-dimensional marginalized posterior for the extra parameter $\omega$ under model $M_1$ by integrating over all shared parameters $\boldsymbol{\psi}$

$$p(\omega \mid \boldsymbol{d}, M_1) = \int p(\omega, \boldsymbol{\psi} \mid \boldsymbol{d}, M_1) \, d\boldsymbol{\psi}$$

Substitute the expression from Step 1 into this integral

$$p(\omega \mid \boldsymbol{d}, M_1) = \frac{\pi(\omega \mid M_1)}{p(\boldsymbol{d} \mid M_1)} \int p(\boldsymbol{d} \mid \omega, \boldsymbol{\psi}, M_1) \, \pi(\boldsymbol{\psi} \mid \omega, M_1) \, d\boldsymbol{\psi}$$

Step 3. Evaluate this continuous equation at the specific nested point $\omega = \omega_0$

$$p(\omega = \omega_0 \mid \boldsymbol{d}, M_1) = \frac{\pi(\omega = \omega_0 \mid M_1)}{p(\boldsymbol{d} \mid M_1)} \int p(\boldsymbol{d} \mid \omega = \omega_0, \boldsymbol{\psi}, M_1) \, \pi(\boldsymbol{\psi} \mid \omega = \omega_0, M_1) \, d\boldsymbol{\psi}$$

Step 4. Recognize the physical equivalence of the nested models. When $\omega$ is fixed to $\omega_0$, model $M_1$ is physically identical to model $M_0$.

Therefore, the likelihood functions are identical

$$p(\boldsymbol{d} \mid \omega = \omega_0, \boldsymbol{\psi}, M_1) = p(\boldsymbol{d} \mid \boldsymbol{\psi}, M_0)$$

Furthermore, by the prior separability condition, $\pi(\boldsymbol{\psi} \mid \omega = \omega_0, M_1) = \pi(\boldsymbol{\psi} \mid M_0)$.

Substitute these two relations into the integral

$$\int p(\boldsymbol{d} \mid \omega = \omega_0, \boldsymbol{\psi}, M_1) \, \pi(\boldsymbol{\psi} \mid \omega = \omega_0, M_1) \, d\boldsymbol{\psi} = \int p(\boldsymbol{d} \mid \boldsymbol{\psi}, M_0) \, \pi(\boldsymbol{\psi} \mid M_0) \, d\boldsymbol{\psi}$$

Step 5. The integral on the right-hand side is, by definition, the Bayesian evidence (marginal likelihood) of the base model $M_0$

$$\int p(\boldsymbol{d} \mid \boldsymbol{\psi}, M_0) \, \pi(\boldsymbol{\psi} \mid M_0) \, d\boldsymbol{\psi} = p(\boldsymbol{d} \mid M_0) = \mathcal{Z}_0$$

Step 6. Substitute the evidence $\mathcal{Z}_0$ back into the evaluated equation from Step 3

$$p(\omega = \omega_0 \mid \boldsymbol{d}, M_1) = \frac{\pi(\omega = \omega_0 \mid M_1)}{p(\boldsymbol{d} \mid M_1)} \, p(\boldsymbol{d} \mid M_0)$$

Step 7. Divide both sides by $\pi(\omega = \omega_0 \mid M_1)$ and multiply by $p(\boldsymbol{d} \mid M_1) / p(\boldsymbol{d} \mid M_0)$. This isolates the Bayes factor

$$B_{01} \equiv \frac{p(\boldsymbol{d} \mid M_0)}{p(\boldsymbol{d} \mid M_1)} = \frac{p(\omega = \omega_0 \mid \boldsymbol{d}, M_1)}{\pi(\omega = \omega_0 \mid M_1)}$$

This equation is the Savage-Dickey Density Ratio.

### Operational Importance in Cosmological Research

The operational power of the Savage-Dickey ratio cannot be overstated.

To compute the Bayes factor between a base cosmological model $M_0$ and an extended model $M_1$, an investigator does not need to compute two separate, difficult multidimensional evidence integrals.

Instead, the researcher performs standard MCMC sampling of the extended model $M_1$ only. From the resulting MCMC chains, one estimates the one-dimensional marginalized posterior probability density for $\omega$ at the nested value $\omega_0$. Dividing this posterior density by the prior density evaluated at the same point gives the exact Bayes factor $B_{01}$.
- If $p(\omega = \omega_0 \mid \boldsymbol{d}, M_1) > \pi(\omega = \omega_0 \mid M_1)$, the observational data have compressed probability mass toward the nested value $\omega_0$, yielding $B_{01} > 1$. The simpler model $M_0$ is favored.
- If $p(\omega = \omega_0 \mid \boldsymbol{d}, M_1) < \pi(\omega = \omega_0 \mid M_1)$, the data have pushed the posterior away from $\omega_0$ into the extended space, yielding $B_{01} < 1$. The extended model $M_1$ is favored.

---

## Conceptual Connections

- [[Astro-Statistics_and_Cosmology_MOC]] - Master syllabus map of content
- [[01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations]] - Bayesian evidence definition and normalization
- [[04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals]] - Lindley's paradox and the distinction between $p$-values and Bayes factors
- [[05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics]] - Generating the posterior density $p(\omega \mid \boldsymbol{d}, M_1)$ from MCMC chains
- [[10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy]] - Sensitivity of Bayes factors and Occam factors to prior volume specification


## Lecture Visuals & Bayesian Model Selection

![Bayesian Evidence and Occam Penalty](../../../assets/images/astrostat_model_p01.png)
*Figure AST-07: Bayesian Model Selection and the Occam Factor. The marginal likelihood (evidence) $\mathcal{Z} = \int \mathcal{L}(D \mid \theta) \pi(\theta) d\theta$ automatically balances goodness of fit against model complexity. An overparameterized model spreads its prior volume over irrelevant regions, resulting in an Occam penalty factor $\frac{\Delta \theta_{\mathrm{posterior}}}{\Delta \theta_{\mathrm{prior}}} \ll 1$.*

![Savage-Dickey Density Ratio Derivation](../../../assets/images/astrostat_model_p02.png)
*Figure AST-08: The Savage-Dickey Density Ratio for Nested Models. For nested models $M_0: \omega = \omega_0$ vs $M_1: \omega \text{ free}$, the Bayes factor simplifies exactly to the ratio of posterior to prior densities evaluated at the nested point: $B_{01} = \frac{P(\omega_0 \mid D, M_1)}{\pi(\omega_0 \mid M_1)}$, bypassing computationally intractable high-dimensional evidence integrals.*

![Jeffreys Scale of Evidence and Model Comparison](../../../assets/images/astrostat_model_p04.png)
*Figure AST-09: Jeffreys Scale and Interpretation of the Bayes Factor $\ln B_{01}$. In empirical astrophysics, $\ln B > 2.5$ denotes moderate evidence, while $\ln B > 5$ indicates decisive evidence, directly applied to testing flat $\Lambda\mathrm{CDM}$ vs dynamical dark energy $w(a)$ or sterile neutrino extensions.*



## Linked References

- [[Bayesian evidence and model selection]]
- [[Savage-Dickey density ratio for nested model comparison]]
- [[Astro-Statistics_and_Cosmology_MOC]]


