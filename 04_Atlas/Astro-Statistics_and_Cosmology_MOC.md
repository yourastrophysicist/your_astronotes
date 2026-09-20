---
layout: "default"
title: "Astro-Statistics_and_Cosmology_MOC"
---
# Astro-Statistics and Cosmology - Map of Content

Graduate course in Astro-Statistics and Cosmology  
Master in Astrophysics and Cosmology, Year 2 Semester 1, A.Y. 2026/2027  
Lecturer Prof. Michele Liguori, Department of Physics and Astronomy, University of Padua  
Schedule Monday 12.30 - 14.30 and Wednesday 12.30 - 14.30  
Classroom Aula P1C, Edificio Ricci Curbastro  
Timetable Dashboard Master Year 2 Semester 1 Timetable and Exams autumn 2026 sprint  

---

## Course Overview and Methodological Framework

Astro-Statistics and Cosmology focuses on modern statistical inference, probability theory, data analysis methodologies, and quantitative information extraction applied to large-scale cosmological surveys. The course spans foundational epistemology, computational algorithms, and concrete cosmological data analysis across the Cosmic Microwave Background, large-scale galaxy distributions, and Type Ia supernovae.

Observational cosmology inhabits a unique statistical regime. Because we observe a single realization of the universe, standard frequentist ensembles of repeated experiments are conceptually limited. The course develops Bayesian inference as an extension of formal logic under uncertainty, equips us with modern computational Markov Chain Monte Carlo machinery, and provides the mathematical formalism for experimental design and survey forecasting.

---

## The Four Thematic Pillars

### Pillar 1. Bayesian Foundations and Mathematical Formulations
Probability as plausible reasoning (Cox theorem), deductive logic boundaries, Bayes' theorem, likelihood construction under Gaussian noise, parameter estimation, Maximum A Posteriori (MAP) and Maximum Likelihood (MLE) estimators, asymptotic convergence (Bernstein-von Mises theorem), and credible regions versus frequentist confidence intervals.

### Pillar 2. High-Dimensional Computation and Sampling
Curse of dimensionality in cosmological parameter spaces, Monte Carlo integration, rejection and importance sampling, Markov Chain Monte Carlo (MCMC), Metropolis-Hastings transition kernels, Gibbs sampling, proposal tuning, and convergence diagnostics including autocorrelation length, effective sample size, and Gelman-Rubin statistics.

### Pillar 3. Information Theory, Priors, and Model Selection
The Fisher Information Matrix, score functions, Cramér-Rao inequality bounds, Minimum Variance Unbiased Estimators, conditional versus marginalized forecast errors, survey optimization and Dark Energy Figures of Merit. Construction of objective priors via symmetry transformation groups, Jeffreys invariant prior, and the Principle of Maximum Entropy. Formal model selection, Bayesian evidence, Laplace approximation, Occam factors, and the Savage-Dickey density ratio for nested cosmological models.

### Pillar 4. Cosmological Applications and Real Surveys
Stochastic analysis of cosmic fields. The Cosmic Microwave Background angular power spectrum $C_\ell$, spherical harmonic decomposition, cosmic variance limits, sky masking, and exact inverted Wishart likelihoods. Large scale structure as a point process, 3D galaxy power spectrum $P(k)$, Poisson shot noise $1/\bar{n}$, optimal FKP weighting, and redshift space distortions. Bayesian Hierarchical Models for Type Ia supernovae, resolving selection effects, heteroscedastic covariances, and Malmquist bias via analytical marginalization over latent variables.

---

## Master Lecture Notes

1. [[01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations|Lecture 01: Plausible Reasoning, Cox's Theorem & Bayesian Foundations]]
   Deductive logic limitations, Cox postulates, derivation of product and sum rules, structure of Bayes' theorem, frequentist versus Bayesian paradigms, recursive updating.

2. [[02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals|Lecture 02: Parameter Estimation, Gaussian Noise & Credible Intervals]]
   Generative noise models, Gaussian likelihoods, MLE and MAP estimators, Bernstein-von Mises theorem, scalar Gaussian updating, equal-tailed and Highest Posterior Density (HPD) credible intervals.

3. [[03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models|Lecture 03: Multivariate Gaussians, Marginalization & Linear Models]]
   Multivariate Gaussian properties, Schur complement block matrix algebra, proofs of marginalization and conditioning, generalized least squares linear models, dual characteristic functions.

4. [[04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals|Lecture 04: Frequentist vs Bayesian Inference & Confidence Intervals]]
   Sampling distributions, estimator bias and variance, Neyman confidence interval coverage, the stopping rule paradox, violation of the Likelihood Principle, physical boundary traps, Lindley's paradox.

5. [[05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics|Lecture 05: Monte Carlo, Metropolis-Hastings & MCMC Diagnostics]]
   High-dimensional integration challenges, Monte Carlo error scaling, Markov chains, detailed balance, Metropolis-Hastings algorithm, Gibbs sampling, proposal tuning, trace plots, autocorrelation time, effective sample size, Gelman-Rubin diagnostic.

6. [[06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting|Lecture 06: Fisher Information Matrix, Cramer-Rao Bound & Forecasting]]
   Score function, Fisher information matrix derivation, Cramér-Rao bound, conditional versus marginalized errors, Tegmark Gaussian formula, Dark Energy Task Force Figure of Merit, multi-probe combination.

7. [[07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance|Lecture 07: CMB Power Spectrum Likelihood Analysis & Cosmic Variance]]
   Recombination physics, spherical harmonic decomposition, statistical isotropy, unbiased $C_\ell$ estimator, exact cosmic variance derivation, sky masking and Knox formula, exact Wishart likelihood and high-$\ell$ Gaussian limit.

8. [[08_Galaxy_Clustering_Point_Processes_and_Shot_Noise|Lecture 08: Galaxy Clustering, Point Processes & Shot Noise]]
   LSS point process formalism, density contrast, linear bias, two-point correlation function $\xi(r)$, Landy-Szalay estimator, 3D power spectrum $P(k)$, exact proof of $1/\bar{n}$ Poisson shot noise, optimal FKP weighting, Kaiser and Finger-of-God redshift space distortions.

9. [[09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae|Lecture 09: Bayesian Hierarchical Models for Type Ia Supernovae]]
   SNIa standardizable candles, Tripp standardization, classical chi-squared failure modes, three-level hierarchical model, Directed Acyclic Graph, analytical marginalization over latent variables, debiasing Malmquist selection effects.

10. [[10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy|Lecture 10: Prior Assignment, Invariance & Maximum Entropy]]
    Objective versus subjective priors, failure of Laplace's indifference, translation invariance for location parameters, scale invariance for scale parameters, proof of coordinate invariance for Jeffreys prior, Principle of Maximum Entropy via Lagrange multipliers.

11. [[11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio|Lecture 11: Model Selection, Bayesian Evidence & Savage-Dickey Ratio]]
    Model comparison framework, Bayes factors, Jeffreys scale, Bayesian evidence as automatic Occam razor, Laplace approximation and Occam factor derivation, complete step-by-step mathematical proof of the Savage-Dickey density ratio.

---

## Conceptual Zettelkasten Index

Modular atomic reference notes synthesized across the four thematic pillars:

### Pillar 1: Bayesian Foundations and Gaussian Inference (`03_Zettel/Theory/`)
- [[Cox theorem and probability as extended logic]] - Deductive boundaries, Cox desiderata, functional equations, and derivation of product and sum rules
- [[Maximum likelihood versus maximum a posteriori estimation]] - Likelihood principle, score function, loss functions, and asymptotic optimality
- [[Bernstein-von Mises theorem and Bayesian asymptotics]] - Convergence of posterior to Gaussian, information dominance, and prior wash-out
- [[Multivariate Gaussian conditioning and marginalization]] - Partitioned covariances, Schur complements, and block matrix algebra
- [[Generalized least squares and correlated measurement errors]] - Cholesky factorization, weight matrix, and Aitken BLUE theorem
- [[Frequentist confidence intervals versus Bayesian credible regions]] - Neyman coverage construction, stopping rule paradox, and HPD regions
- [[Lindley paradox in statistical hypothesis testing]] - Point null hypotheses, p-values versus Bayes factors with increasing sample size

### Pillar 2: High-Dimensional Computation and Sampling (`03_Zettel/`)
- [[Monte Carlo integration and cursed dimensions]] - Deterministic quadrature failure, $N^{-1/2}$ convergence rate, and importance sampling
- [[Metropolis-Hastings algorithm and detailed balance]] - Proposal distribution, acceptance probability, reversibility, and normalization cancellation
- [[Gibbs sampling and conditional state transitions]] - Exact sampling from full conditionals, zero-rejection property, and Commander CMB map-making
- [[MCMC convergence diagnostics and Gelman-Rubin statistic]] - Integrated autocorrelation time $\tau$, effective sample size $N_{\rm eff}$, and potential scale reduction factor $\hat{R}$

### Pillar 3: Information Theory, Priors, and Model Selection (`03_Zettel/Theory/`)
- [[Fisher information matrix and Cramer-Rao bound]] - Score variance, log-likelihood curvature, efficiency, and Tegmark Gaussian formula
- [[Marginalized versus conditional parameter errors in Fisher forecasting]] - Inverse Fisher sub-matrices, parameter degradation factor, and cosmological degeneracies
- [[Transformation group invariance and Jeffreys prior]] - Location and scale invariance, Fisher matrix determinant, and coordinate invariance proof
- [[Principle of maximum entropy in prior assignment]] - Shannon-Jaynes information entropy, Lagrange multiplier constraint optimization, and Gaussian derivation
- [[Bayesian evidence and model selection]] - Marginal likelihood integral, Laplace approximation, Occam factor, and Jeffreys scale
- [[Savage-Dickey density ratio for nested model comparison]] - Analytical Bayes factor shortcut from a single MCMC chain of the unconstrained model

### Pillar 4: Cosmological Applications and Large-Scale Structure (`03_Zettel/Theory/`)
- [[CMB angular power spectrum estimator and cosmic variance]] - Spherical harmonic coefficients $a_{\ell m}$, statistical isotropy, $(2\ell+1)$ degrees of freedom, and cosmic variance limit
- [[Exact CMB Wishart likelihood and Gaussian high-multipole limit]] - Inverted Wishart distribution at low multipoles, chi-squared transition, and multi-field polarization covariance
- [[Spatial two-point correlation function and Landy-Szalay estimator]] - Point processes, normalized pair counts $DD, DR, RR$, and first-order variance cancellation
- [[Galaxy power spectrum and Poisson shot noise]] - Wiener-Khinchin theorem, discrete particle sampling, and the $1/\bar{n}$ shot noise floor
- [[Feldman-Kaiser-Peacock optimal weighting for galaxy surveys]] - Calculus of variations minimization, dense versus sparse survey limits, and BAO weighting
- [[Bayesian hierarchical modeling for Type Ia supernovae]] - Directed Acyclic Graph, latent true distance modulus, Tripp standardization marginalization, and Malmquist bias correction

---

## Course Exercises and Problem Sets

- [[Homework_Problems_and_Solutions|Homework Problems & Solutions]]
  Complete analytical solutions and Python algorithms for all twelve course homework problem sets
  - Problem 1 - Coin tossing simulation with uniform versus Gaussian priors, asymptotic convergence.
  - Problem 2 - Politician testimony credibility updating under lying probabilities.
  - Problem 3 - Bacillum Bayesianum medical screening and base rate fallacy.
  - Problem 4 - Proof of multivariate Gaussian characteristic function via two methods.
  - Problem 5 - Moment generation via characteristic function differentiation.
  - Problem 6 - Characteristic function of multivariate Gaussian as an unnormalized Gaussian.
  - Problem 7 - Bivariate Gaussian marginalization versus conditioning, with Cholesky, Metropolis-Hastings, and Gibbs sampling Python code.
  - Problem 8 - Template fitting and chi-squared minimization.
  - Problem 9 - Linear regression as a MAP problem with parameter covariance.
  - Problem 10 - Regularized regression, showing Laplace prior yields LASSO and Gaussian prior yields Ridge.
  - Problem 11 - Analytical marginalization of an amplitude parameter in Gaussian likelihoods.
  - Problem 12 - Bayesian spectral analysis, high-frequency limit, analytical amplitude marginalization, and derivation of the Lomb-Scargle periodogram.

---

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.IM/stat.ME benchmark papers underlying the Bayesian inference and GP-regression methodology above.

- [[Trotta_2008_Bayes_in_the_Sky|Trotta (2008) — Bayes in the Sky]] — Bayesian evidence, Bayes factors, the Bayesian Occam's razor
- [[Speagle_2020_dynesty_Nested_Sampling|Speagle (2020) — dynesty Dynamic Nested Sampling]] — adaptive live-point allocation for evidence + posterior estimation
- [[Aigrain_Foreman-Mackey_2023_GP_Regression_Time_Series|Aigrain & Foreman-Mackey (2023) — GP Regression for Astronomical Time Series]] — kernel choice, the joint-vs-sequential-fitting caution

---

## Cross-Course Connections and Synapses

- [[Cosmology_of_the_Early_Universe_MOC|Early Universe Cosmology MOC]] - Primordial inflationary perturbation spectrum $P_\mathcal{R}(k)$, scalar spectral index $n_s$, tensor-to-scalar ratio $r$, and primordial non-Gaussianity $f_{\text{NL}}$.
- [[Observational_Cosmology_MOC|Observational Cosmology MOC]] - Observational distance ladder, Cepheids, galaxy redshift catalogs, gravitational lensing, and cosmic shear bandpowers.
- [[Mathematical_Numerical_Methods_MOC|Mathematical & Numerical Methods MOC]] - Numerical linear algebra, Cholesky decomposition, eigenvalue problems, and optimization algorithms.
- [[Bayesian Inference and Bayes Theorem in Astronomy]] - Foundational zettel on Bayesian inverse problems in astrophysical settings.


---

## Master Figure Index (Astro-Statistics and Cosmology)

| Figure ID | Visual Asset Name | Slide / Concept Title | Primary Zettel / Lecture Note Link | Key Physical / Statistical Principle |
| :--- | :--- | :--- | :--- | :--- |
| **AST-01** | `astrostat_liguori_p02.png` | Cox Theorem & Plausible Reasoning | [[01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations|Lecture 01: Plausible Reasoning, Cox's Theorem & Bayesian Foundations]] | Product and sum rules uniquely derived from consistency axioms |
| **AST-02** | `astrostat_liguori_p10.png` | Parameter Estimation & Credible Intervals | [[02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals|Lecture 02: Parameter Estimation, Gaussian Noise & Credible Intervals]] | Quadratic log-likelihood under Gaussian noise; $68.3\%$ and $95.4\%$ volume intervals |
| **AST-03** | `astrostat_liguori_p18.png` | Metropolis-Hastings MCMC Sampling | [[05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics|Lecture 05: Monte Carlo, Metropolis-Hastings & MCMC Diagnostics]] | Proposal transitions, acceptance probability, and Gelman-Rubin $\hat{R} < 1.05$ |
| **AST-04** | `astrostat_liguori_p25.png` | Fisher Matrix & Survey Forecasting | [[06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting|Lecture 06: Fisher Information Matrix, Cramer-Rao Bound & Forecasting]] | Cramér-Rao bound $\sigma(\theta_i) \ge \sqrt{(F^{-1})_{ii}}$ and degeneracy ellipses |
| **AST-05** | `astrostat_bhm_p01.png` | BHM DAG for Type Ia Supernovae | [[09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae|Lecture 09: Bayesian Hierarchical Models for Type Ia Supernovae]] | Decoupling cosmological parameters from latent distances and intrinsic scatter |
| **AST-06** | `astrostat_bhm_p03.png` | Supernova Distance Marginalization | [[09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae|Lecture 09: Bayesian Hierarchical Models for Type Ia Supernovae]] | Unbiased cosmological parameter recovery eliminating Malmquist selection bias |
| **AST-07** | `astrostat_model_p01.png` | Bayesian Evidence & Occam Factor | [[11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio|Lecture 11: Model Selection, Bayesian Evidence & Savage-Dickey Ratio]] | Prior volume spreading penalty $\Delta\theta_{\mathrm{post}}/\Delta\theta_{\mathrm{prior}} \ll 1$ |
| **AST-08** | `astrostat_model_p02.png` | Savage-Dickey Density Ratio | [[11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio|Lecture 11: Model Selection, Bayesian Evidence & Savage-Dickey Ratio]] | Exact Bayes factor for nested models $B_{01} = P(\omega_0|D, M_1)/\pi(\omega_0|M_1)$ |
| **AST-09** | `astrostat_model_p04.png` | Jeffreys Scale of Model Evidence | [[11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio|Lecture 11: Model Selection, Bayesian Evidence & Savage-Dickey Ratio]] | Calibration scale for $\ln B_{01}$: decisive evidence threshold $\ln B > 5.0$ |

---

## Professor Michele Liguori Oral Exam Defense Preparation Matrix

| Exam Question | Governing Equation(s) | Blackboard Derivation Flow & Strategy | Professor Trap Points & Pitfalls |
| :--- | :--- | :--- | :--- |
| **1. Cox Theorem and the Foundation of Bayesian Inference** | $P(A \cap B \| I) = P(A \| B, I) P(B \| I)$<br>$P(A \| I) + P(\neg A \| I) = 1$ | 1. State Jaynes-Cox desiderata: real number representation of plausibility, qualitative correspondence to common sense, and internal consistency.<br>2. Use associativity of boolean conjunction $(A \wedge B) \wedge C = A \wedge (B \wedge C)$ to formulate Abel's functional equation for plausibility function $F(F(x,y), z) = F(x, F(y,z))$.<br>3. Show that any monotonic transformation maps plausibility onto standard probability theory.<br>4. Prove Bayes' theorem as a trivial corollary of commutativity of boolean conjunction. | **Trap**: Confusing degrees of belief with frequentist limiting frequencies; claiming Cox's theorem is a physical law rather than an axiomatic consistency theorem. |
| **2. Fisher Information Matrix and Cramér-Rao Bound** | $F_{ij} = -\left\langle \frac{\partial^2 \ln \mathcal{L}}{\partial \theta_i \partial \theta_j} \right\rangle$<br>$\sigma(\theta_i) \ge \sqrt{(F^{-1})_{ii}}$ | 1. Define score function $S_i = \frac{\partial \ln \mathcal{L}}{\partial \theta_i}$ and show $\langle S_i \rangle = 0$.<br>2. Prove equivalence between Hessian of log-likelihood and variance of score: $\langle S_i S_j \rangle = -\langle \partial_i \partial_j \ln \mathcal{L} \rangle = F_{ij}$.<br>3. Apply Cauchy-Schwarz inequality to $\operatorname{Cov}(\hat{\theta}_i, S_j)$ for an unbiased estimator to derive the Cramér-Rao bound.<br>4. Derive Fisher matrix for Gaussian data: $F_{ij} = \frac{1}{2}\operatorname{Tr}[C^{-1} C_{,i} C^{-1} C_{,j}] + \mu_{,i}^T C^{-1} \mu_{,j}$.<br>5. Graph marginal vs conditional ellipses. | **Trap**: Inverting individual diagonal elements $1/\sqrt{F_{ii}}$ instead of inverting the full matrix $(F^{-1})_{ii}$ to obtain marginalized errors. Neglecting parameter degeneracies. |
| **3. Hierarchical Bayesian Modeling (BHM) for SNe Ia** | $P(\theta, \{\mu_i\}, \sigma_{\mathrm{int}} \| D) \propto$<br>$\prod_i P(m_i \| \mu_i) P(\mu_i \| z_i, \theta) \pi(\theta)$ | 1. Draw the Directed Acyclic Graph (DAG) separating hyperparameters, latent true distances $\mu_i$, and noisy measurements $(m_i, x_{1,i}, c_i)$.<br>2. Formulate the marginal likelihood integrating out individual latent distances analytically under Gaussian assumptions.<br>3. Explain why naive weighted $\chi^2$ minimization suffers from Malmquist bias (flux-limited sample truncation).<br>4. Demonstrate how incorporating intrinsic dispersion $\sigma_{\mathrm{int}}$ as an inferential parameter prevents underestimating cosmological uncertainties on $w$ and $\Omega_m$. | **Trap**: Setting intrinsic dispersion $\sigma_{\mathrm{int}} = 0$ or placing it outside the likelihood normalization, which biases the dark energy equation of state $w$. |
| **4. Savage-Dickey Density Ratio for Nested Hypotheses** | $B_{01} \equiv \frac{P(D \| M_0)}{P(D \| M_1)} = \frac{P(\omega_0 \| D, M_1)}{\pi(\omega_0 \| M_1)}$ | 1. Define nested models where $M_0$ fixes parameter $\omega = \omega_0$ while $M_1$ allows $\omega$ to vary freely.<br>2. Express marginal likelihood (evidence) under $M_1$: $\mathcal{Z}_1 = \int d\theta d\omega P(D \| \theta, \omega) \pi(\theta, \omega)$.<br>3. Assume separable prior $\pi(\theta, \omega \| M_1) = \pi(\theta \| \omega, M_1) \pi(\omega \| M_1)$ with $\pi(\theta \| \omega_0, M_1) = \pi(\theta \| M_0)$.<br>4. Apply Bayes' theorem to write posterior $P(\omega \| D, M_1)$ and evaluate at $\omega = \omega_0$, yielding the exact density ratio.<br>5. Explain the Occam factor: why an unnecessarily flexible model is penalized if the data do not require it. | **Trap**: Forgetting the prior separability condition; failing to evaluate the posterior at the nested value $\omega_0$; confusing $B_{01}$ with posterior odds (ignoring prior model odds). |

---

## Essential Formulas Quick Sheet (Astro-Statistics)

- **Bayes' Theorem**: $P(\theta \mid D, I) = \frac{\mathcal{L}(D \mid \theta) \pi(\theta)}{\mathcal{Z}}$ where $\mathcal{Z} = \int \mathcal{L}(D \mid \theta) \pi(\theta) d^N\theta$
- **Fisher Information Matrix**: $F_{ij} = \frac{1}{2} \operatorname{Tr}\left[C^{-1} \frac{\partial C}{\partial \theta_i} C^{-1} \frac{\partial C}{\partial \theta_j}\right] + \frac{\partial \boldsymbol{\mu}^T}{\partial \theta_i} C^{-1} \frac{\partial \boldsymbol{\mu}}{\partial \theta_j}$
- **Cramér-Rao Inequality**: $\operatorname{Var}(\hat{\theta}_i) \ge (F^{-1})_{ii}$ (marginalized), $\operatorname{Var}(\hat{\theta}_i \mid \theta_{j \ne i}) \ge \frac{1}{F_{ii}}$ (conditional)
- **Metropolis-Hastings Acceptance**: $\alpha(\theta \to \theta^*) = \min\left(1, \frac{\mathcal{L}(D\mid\theta^*) \pi(\theta^*) q(\theta\mid\theta^*)}{\mathcal{L}(D\mid\theta) \pi(\theta) q(\theta^*\mid\theta)}\right)$
- **Gelman-Rubin Convergence**: $\hat{R} = \sqrt{\frac{W + \frac{1}{N}(B - W)}{W}} \to 1.0$ (convergence achieved when $\hat{R} < 1.05$)
- **Savage-Dickey Ratio**: $B_{01} = \left.\frac{P(\omega \mid D, M_1)}{\pi(\omega \mid M_1)}\right\vert_{\omega = \omega_0}$
