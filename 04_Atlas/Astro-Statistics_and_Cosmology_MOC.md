---
layout: "default"
title: "Astro-Statistics_and_Cosmology_MOC"
---
{% raw %}
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

1. [01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations](../02_Literature/Lectures/Astrostatistics/01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations.html)
   Deductive logic limitations, Cox postulates, derivation of product and sum rules, structure of Bayes' theorem, frequentist versus Bayesian paradigms, recursive updating.

2. [02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals](../02_Literature/Lectures/Astrostatistics/02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals.html)
   Generative noise models, Gaussian likelihoods, MLE and MAP estimators, Bernstein-von Mises theorem, scalar Gaussian updating, equal-tailed and Highest Posterior Density (HPD) credible intervals.

3. [03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models](../02_Literature/Lectures/Astrostatistics/03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models.html)
   Multivariate Gaussian properties, Schur complement block matrix algebra, proofs of marginalization and conditioning, generalized least squares linear models, dual characteristic functions.

4. [04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals](../02_Literature/Lectures/Astrostatistics/04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals.html)
   Sampling distributions, estimator bias and variance, Neyman confidence interval coverage, the stopping rule paradox, violation of the Likelihood Principle, physical boundary traps, Lindley's paradox.

5. [05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics](../02_Literature/Lectures/Astrostatistics/05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics.html)
   High-dimensional integration challenges, Monte Carlo error scaling, Markov chains, detailed balance, Metropolis-Hastings algorithm, Gibbs sampling, proposal tuning, trace plots, autocorrelation time, effective sample size, Gelman-Rubin diagnostic.

6. [06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting](../02_Literature/Lectures/Astrostatistics/06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting.html)
   Score function, Fisher information matrix derivation, Cramér-Rao bound, conditional versus marginalized errors, Tegmark Gaussian formula, Dark Energy Task Force Figure of Merit, multi-probe combination.

7. [07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance](../02_Literature/Lectures/Astrostatistics/07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance.html)
   Recombination physics, spherical harmonic decomposition, statistical isotropy, unbiased $C_\ell$ estimator, exact cosmic variance derivation, sky masking and Knox formula, exact Wishart likelihood and high-$\ell$ Gaussian limit.

8. [08_Galaxy_Clustering_Point_Processes_and_Shot_Noise](../02_Literature/Lectures/Astrostatistics/08_Galaxy_Clustering_Point_Processes_and_Shot_Noise.html)
   LSS point process formalism, density contrast, linear bias, two-point correlation function $\xi(r)$, Landy-Szalay estimator, 3D power spectrum $P(k)$, exact proof of $1/\bar{n}$ Poisson shot noise, optimal FKP weighting, Kaiser and Finger-of-God redshift space distortions.

9. [09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae](../02_Literature/Lectures/Astrostatistics/09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae.html)
   SNIa standardizable candles, Tripp standardization, classical chi-squared failure modes, three-level hierarchical model, Directed Acyclic Graph, analytical marginalization over latent variables, debiasing Malmquist selection effects.

10. [10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy](../02_Literature/Lectures/Astrostatistics/10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy.html)
    Objective versus subjective priors, failure of Laplace's indifference, translation invariance for location parameters, scale invariance for scale parameters, proof of coordinate invariance for Jeffreys prior, Principle of Maximum Entropy via Lagrange multipliers.

11. [11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio](../02_Literature/Lectures/Astrostatistics/11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio.html)
    Model comparison framework, Bayes factors, Jeffreys scale, Bayesian evidence as automatic Occam razor, Laplace approximation and Occam factor derivation, complete step-by-step mathematical proof of the Savage-Dickey density ratio.

---

## Conceptual Zettelkasten Index

Modular atomic reference notes synthesized across the four thematic pillars:

### Pillar 1: Bayesian Foundations and Gaussian Inference (`03_Zettel/Theory/`)
- [Cox theorem and probability as extended logic](../03_Zettel/Theory/Cox%20theorem%20and%20probability%20as%20extended%20logic.html) - Deductive boundaries, Cox desiderata, functional equations, and derivation of product and sum rules
- [Maximum likelihood versus maximum a posteriori estimation](../03_Zettel/Theory/Maximum%20likelihood%20versus%20maximum%20a%20posteriori%20estimation.html) - Likelihood principle, score function, loss functions, and asymptotic optimality
- [Bernstein-von Mises theorem and Bayesian asymptotics](../03_Zettel/Theory/Bernstein-von%20Mises%20theorem%20and%20Bayesian%20asymptotics.html) - Convergence of posterior to Gaussian, information dominance, and prior wash-out
- [Multivariate Gaussian conditioning and marginalization](../03_Zettel/Theory/Multivariate%20Gaussian%20conditioning%20and%20marginalization.html) - Partitioned covariances, Schur complements, and block matrix algebra
- [Generalized least squares and correlated measurement errors](../03_Zettel/Theory/Generalized%20least%20squares%20and%20correlated%20measurement%20errors.html) - Cholesky factorization, weight matrix, and Aitken BLUE theorem
- [Frequentist confidence intervals versus Bayesian credible regions](../03_Zettel/Theory/Frequentist%20confidence%20intervals%20versus%20Bayesian%20credible%20regions.html) - Neyman coverage construction, stopping rule paradox, and HPD regions
- [Lindley paradox in statistical hypothesis testing](../03_Zettel/Theory/Lindley%20paradox%20in%20statistical%20hypothesis%20testing.html) - Point null hypotheses, p-values versus Bayes factors with increasing sample size

### Pillar 2: High-Dimensional Computation and Sampling (`03_Zettel/`)
- [Monte Carlo integration and cursed dimensions](../03_Zettel/Computational/Monte%20Carlo%20integration%20and%20cursed%20dimensions.html) - Deterministic quadrature failure, $N^{-1/2}$ convergence rate, and importance sampling
- [Metropolis-Hastings algorithm and detailed balance](../03_Zettel/Theory/Metropolis-Hastings%20algorithm%20and%20detailed%20balance.html) - Proposal distribution, acceptance probability, reversibility, and normalization cancellation
- [Gibbs sampling and conditional state transitions](../03_Zettel/Theory/Gibbs%20sampling%20and%20conditional%20state%20transitions.html) - Exact sampling from full conditionals, zero-rejection property, and Commander CMB map-making
- [MCMC convergence diagnostics and Gelman-Rubin statistic](../03_Zettel/Theory/MCMC%20convergence%20diagnostics%20and%20Gelman-Rubin%20statistic.html) - Integrated autocorrelation time $\tau$, effective sample size $N_{\rm eff}$, and potential scale reduction factor $\hat{R}$

### Pillar 3: Information Theory, Priors, and Model Selection (`03_Zettel/Theory/`)
- [Fisher information matrix and Cramer-Rao bound](../03_Zettel/Theory/Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html) - Score variance, log-likelihood curvature, efficiency, and Tegmark Gaussian formula
- [Marginalized versus conditional parameter errors in Fisher forecasting](../03_Zettel/Theory/Marginalized%20versus%20conditional%20parameter%20errors%20in%20Fisher%20forecasting.html) - Inverse Fisher sub-matrices, parameter degradation factor, and cosmological degeneracies
- [Transformation group invariance and Jeffreys prior](../03_Zettel/Theory/Transformation%20group%20invariance%20and%20Jeffreys%20prior.html) - Location and scale invariance, Fisher matrix determinant, and coordinate invariance proof
- [Principle of maximum entropy in prior assignment](../03_Zettel/Theory/Principle%20of%20maximum%20entropy%20in%20prior%20assignment.html) - Shannon-Jaynes information entropy, Lagrange multiplier constraint optimization, and Gaussian derivation
- [Bayesian evidence and model selection](../03_Zettel/Theory/Bayesian%20evidence%20and%20model%20selection.html) - Marginal likelihood integral, Laplace approximation, Occam factor, and Jeffreys scale
- [Savage-Dickey density ratio for nested model comparison](../03_Zettel/Theory/Savage-Dickey%20density%20ratio%20for%20nested%20model%20comparison.html) - Analytical Bayes factor shortcut from a single MCMC chain of the unconstrained model

### Pillar 4: Cosmological Applications and Large-Scale Structure (`03_Zettel/Theory/`)
- [CMB angular power spectrum estimator and cosmic variance](../03_Zettel/Theory/CMB%20angular%20power%20spectrum%20estimator%20and%20cosmic%20variance.html) - Spherical harmonic coefficients $a_{\ell m}$, statistical isotropy, $(2\ell+1)$ degrees of freedom, and cosmic variance limit
- [Exact CMB Wishart likelihood and Gaussian high-multipole limit](../03_Zettel/Theory/Exact%20CMB%20Wishart%20likelihood%20and%20Gaussian%20high-multipole%20limit.html) - Inverted Wishart distribution at low multipoles, chi-squared transition, and multi-field polarization covariance
- [Spatial two-point correlation function and Landy-Szalay estimator](../03_Zettel/Theory/Spatial%20two-point%20correlation%20function%20and%20Landy-Szalay%20estimator.html) - Point processes, normalized pair counts $DD, DR, RR$, and first-order variance cancellation
- [Galaxy power spectrum and Poisson shot noise](../03_Zettel/Theory/Galaxy%20power%20spectrum%20and%20Poisson%20shot%20noise.html) - Wiener-Khinchin theorem, discrete particle sampling, and the $1/\bar{n}$ shot noise floor
- [Feldman-Kaiser-Peacock optimal weighting for galaxy surveys](../03_Zettel/Theory/Feldman-Kaiser-Peacock%20optimal%20weighting%20for%20galaxy%20surveys.html) - Calculus of variations minimization, dense versus sparse survey limits, and BAO weighting
- [Bayesian hierarchical modeling for Type Ia supernovae](../03_Zettel/Theory/Bayesian%20hierarchical%20modeling%20for%20Type%20Ia%20supernovae.html) - Directed Acyclic Graph, latent true distance modulus, Tripp standardization marginalization, and Malmquist bias correction

---

## Course Exercises and Problem Sets

- [Homework_Problems_and_Solutions](../02_Literature/Lectures/Astrostatistics/Homework_Problems_and_Solutions.html)
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

## Cross-Course Connections and Synapses

- [Cosmology_of_the_Early_Universe_MOC](./Cosmology_of_the_Early_Universe_MOC.html) - Primordial inflationary perturbation spectrum $P_\mathcal{R}(k)$, scalar spectral index $n_s$, tensor-to-scalar ratio $r$, and primordial non-Gaussianity $f_{\text{NL}}$.
- [Observational_Cosmology_MOC](./Observational_Cosmology_MOC.html) - Observational distance ladder, Cepheids, galaxy redshift catalogs, gravitational lensing, and cosmic shear bandpowers.
- [Mathematical_Numerical_Methods_MOC](./Mathematical_Numerical_Methods_MOC.html) - Numerical linear algebra, Cholesky decomposition, eigenvalue problems, and optimization algorithms.
- [Bayesian Inference and Bayes Theorem in Astronomy](../03_Zettel/Theory/Bayesian%20Inference%20and%20Bayes%20Theorem%20in%20Astronomy.html) - Foundational zettel on Bayesian inverse problems in astrophysical settings.


---

## Master Figure Index (Astro-Statistics and Cosmology)

| Figure ID | Visual Asset Name | Slide / Concept Title | Primary Zettel / Lecture Note Link | Key Physical / Statistical Principle |
| :--- | :--- | :--- | :--- | :--- |
| **AST-01** | `astrostat_liguori_p02.png` | Cox Theorem & Plausible Reasoning | [01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations](../02_Literature/Lectures/Astrostatistics/01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations.html) | Product and sum rules uniquely derived from consistency axioms |
| **AST-02** | `astrostat_liguori_p10.png` | Parameter Estimation & Credible Intervals | [02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals](../02_Literature/Lectures/Astrostatistics/02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals.html) | Quadratic log-likelihood under Gaussian noise; $68.3\%$ and $95.4\%$ volume intervals |
| **AST-03** | `astrostat_liguori_p18.png` | Metropolis-Hastings MCMC Sampling | [05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics](../02_Literature/Lectures/Astrostatistics/05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics.html) | Proposal transitions, acceptance probability, and Gelman-Rubin $\hat{R} < 1.05$ |
| **AST-04** | `astrostat_liguori_p25.png` | Fisher Matrix & Survey Forecasting | [06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting](../02_Literature/Lectures/Astrostatistics/06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting.html) | Cramér-Rao bound $\sigma(\theta_i) \ge \sqrt{(F^{-1})_{ii}}$ and degeneracy ellipses |
| **AST-05** | `astrostat_bhm_p01.png` | BHM DAG for Type Ia Supernovae | [09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae](../02_Literature/Lectures/Astrostatistics/09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae.html) | Decoupling cosmological parameters from latent distances and intrinsic scatter |
| **AST-06** | `astrostat_bhm_p03.png` | Supernova Distance Marginalization | [09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae](../02_Literature/Lectures/Astrostatistics/09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae.html) | Unbiased cosmological parameter recovery eliminating Malmquist selection bias |
| **AST-07** | `astrostat_model_p01.png` | Bayesian Evidence & Occam Factor | [11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio](../02_Literature/Lectures/Astrostatistics/11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio.html) | Prior volume spreading penalty $\Delta\theta_{\mathrm{post}}/\Delta\theta_{\mathrm{prior}} \ll 1$ |
| **AST-08** | `astrostat_model_p02.png` | Savage-Dickey Density Ratio | [11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio](../02_Literature/Lectures/Astrostatistics/11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio.html) | Exact Bayes factor for nested models $B_{01} = P(\omega_0|D, M_1)/\pi(\omega_0|M_1)$ |
| **AST-09** | `astrostat_model_p04.png` | Jeffreys Scale of Model Evidence | [11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio](../02_Literature/Lectures/Astrostatistics/11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio.html) | Calibration scale for $\ln B_{01}$: decisive evidence threshold $\ln B > 5.0$ |

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
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (38)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations.html" class="backlink-item">01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals.html" class="backlink-item">02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models.html" class="backlink-item">03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models</a></li>
    <li class="backlink-item-wrap"><a href="./04_Atlas.html" class="backlink-item">04_Atlas</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals.html" class="backlink-item">04_Frequentist_vs_Bayesian_Inference_and_Confidence_Intervals</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics.html" class="backlink-item">05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting.html" class="backlink-item">06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance.html" class="backlink-item">07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/08_Galaxy_Clustering_Point_Processes_and_Shot_Noise.html" class="backlink-item">08_Galaxy_Clustering_Point_Processes_and_Shot_Noise</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae.html" class="backlink-item">09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy.html" class="backlink-item">10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio.html" class="backlink-item">11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Bayesian%20evidence%20and%20model%20selection.html" class="backlink-item">Bayesian evidence and model selection</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Bayesian%20hierarchical%20modeling%20for%20Type%20Ia%20supernovae.html" class="backlink-item">Bayesian hierarchical modeling for Type Ia supernovae</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Bernstein-von%20Mises%20theorem%20and%20Bayesian%20asymptotics.html" class="backlink-item">Bernstein-von Mises theorem and Bayesian asymptotics</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/CMB%20angular%20power%20spectrum%20estimator%20and%20cosmic%20variance.html" class="backlink-item">CMB angular power spectrum estimator and cosmic variance</a></li>
    <li class="backlink-item-wrap"><a href="./Computational_Astrophysics_MOC.html" class="backlink-item">Computational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cox%20theorem%20and%20probability%20as%20extended%20logic.html" class="backlink-item">Cox theorem and probability as extended logic</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Exact%20CMB%20Wishart%20likelihood%20and%20Gaussian%20high-multipole%20limit.html" class="backlink-item">Exact CMB Wishart likelihood and Gaussian high-multipole limit</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Feldman-Kaiser-Peacock%20optimal%20weighting%20for%20galaxy%20surveys.html" class="backlink-item">Feldman-Kaiser-Peacock optimal weighting for galaxy surveys</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Fisher%20information%20matrix%20and%20Cramer-Rao%20bound.html" class="backlink-item">Fisher information matrix and Cramer-Rao bound</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Frequentist%20confidence%20intervals%20versus%20Bayesian%20credible%20regions.html" class="backlink-item">Frequentist confidence intervals versus Bayesian credible regions</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Galaxy%20power%20spectrum%20and%20Poisson%20shot%20noise.html" class="backlink-item">Galaxy power spectrum and Poisson shot noise</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Generalized%20least%20squares%20and%20correlated%20measurement%20errors.html" class="backlink-item">Generalized least squares and correlated measurement errors</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Gibbs%20sampling%20and%20conditional%20state%20transitions.html" class="backlink-item">Gibbs sampling and conditional state transitions</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Astrostatistics/Homework_Problems_and_Solutions.html" class="backlink-item">Homework_Problems_and_Solutions</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Lindley%20paradox%20in%20statistical%20hypothesis%20testing.html" class="backlink-item">Lindley paradox in statistical hypothesis testing</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/MCMC%20convergence%20diagnostics%20and%20Gelman-Rubin%20statistic.html" class="backlink-item">MCMC convergence diagnostics and Gelman-Rubin statistic</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Marginalized%20versus%20conditional%20parameter%20errors%20in%20Fisher%20forecasting.html" class="backlink-item">Marginalized versus conditional parameter errors in Fisher forecasting</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Maximum%20likelihood%20versus%20maximum%20a%20posteriori%20estimation.html" class="backlink-item">Maximum likelihood versus maximum a posteriori estimation</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Metropolis-Hastings%20algorithm%20and%20detailed%20balance.html" class="backlink-item">Metropolis-Hastings algorithm and detailed balance</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Computational/Monte%20Carlo%20integration%20and%20cursed%20dimensions.html" class="backlink-item">Monte Carlo integration and cursed dimensions</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Multivariate%20Gaussian%20conditioning%20and%20marginalization.html" class="backlink-item">Multivariate Gaussian conditioning and marginalization</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Principle%20of%20maximum%20entropy%20in%20prior%20assignment.html" class="backlink-item">Principle of maximum entropy in prior assignment</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Savage-Dickey%20density%20ratio%20for%20nested%20model%20comparison.html" class="backlink-item">Savage-Dickey density ratio for nested model comparison</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Spatial%20two-point%20correlation%20function%20and%20Landy-Szalay%20estimator.html" class="backlink-item">Spatial two-point correlation function and Landy-Szalay estimator</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Transformation%20group%20invariance%20and%20Jeffreys%20prior.html" class="backlink-item">Transformation group invariance and Jeffreys prior</a></li>
  </ul>
</div>
