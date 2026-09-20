---
layout: "default"
title: "Marquardt (1963) — An Algorithm for Least-Squares Estimation of Nonlinear Parameters"
---
## Metadata
- **Authors**: Donald W. Marquardt
- **Year**: 1963
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: N/A (applied mathematics journal, not ADS-indexed)
- **Journal**: *SIAM Journal on Applied Mathematics*, 11, 431
- **Sub-field**: astro-ph.IM / math.NA
- **Key Observatory / Code**: foundational nonlinear-least-squares optimization algorithm, implemented in `scipy.optimize.curve_fit`, MINPACK, and essentially every nonlinear model-fitting library used in astrophysics

---

## Executive Summary
Marquardt combines two previously separate approaches to nonlinear least-squares minimization — the slow-but-globally-convergent method of steepest (gradient) descent, and the fast-but-only-locally-convergent Gauss-Newton method — into a single algorithm that smoothly interpolates between them via a single tunable damping parameter, adaptively adjusted at each iteration based on whether the current step improves the fit. This **Levenberg-Marquardt algorithm** (extending Levenberg's 1944 formulation) became, and remains today, the default method for nonlinear least-squares curve fitting across essentially all quantitative sciences, including the vast majority of astrophysical model-fitting applications (transit light curves, spectral line fitting, orbit fitting) that are not performed via full Bayesian MCMC.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: given a model $f(\vec x;\vec p)$ with parameters $\vec p$ and data $\{(\vec x_i,y_i)\}$ with measurement uncertainties $\sigma_i$, minimize the $\chi^2$ merit function
$$\chi^2(\vec p) = \sum_i \left(\frac{y_i - f(x_i;\vec p)}{\sigma_i}\right)^2$$
via iterative parameter updates, using local linearization of $f$ around the current parameter estimate.

**Gauss-Newton step**: linearizing $f$ to first order in a parameter perturbation $\Delta\vec p$ and minimizing the resulting linear-least-squares problem gives the normal-equations update
$$\left(J^TJ\right)\Delta\vec p = J^T\left(\vec y - f(\vec p)\right)$$
where $J_{ij}=\partial f(x_i)/\partial p_j$ is the Jacobian of the model with respect to its parameters — this converges very rapidly (quadratically) near the true minimum, but can diverge or oscillate wildly far from it, since it discards the curvature information neglected by the linear approximation.

**Steepest-descent step**: alternatively, simply stepping along the negative gradient of $\chi^2$,
$$\Delta\vec p \propto -\nabla\chi^2 = J^T\left(\vec y-f(\vec p)\right)$$
converges reliably (monotonically decreasing $\chi^2$) from far from the minimum, but becomes extremely slow to converge once near it, since it does not exploit the local curvature structure of $\chi^2(\vec p)$.

**Levenberg-Marquardt combined update**:
$$\boxed{\, \left(J^TJ + \lambda\,\mathrm{diag}(J^TJ)\right)\Delta\vec p = J^T\left(\vec y - f(\vec p)\right) \,}$$
where $\lambda$ is an adaptively tuned damping parameter:
- for $\lambda\to0$, the update reduces exactly to the Gauss-Newton step (fast convergence near the minimum)
- for $\lambda\to\infty$, the update reduces to a small step along the (rescaled) steepest-descent direction (robust, if slow, convergence far from the minimum)

At each iteration, $\lambda$ is decreased if the proposed step improves $\chi^2$ (moving the algorithm toward Gauss-Newton behavior as the fit approaches the minimum) and increased if the step worsens $\chi^2$ (falling back toward the more robust steepest-descent behavior) — this adaptive damping is the core innovation that makes the combined method both fast (near the minimum) and robust (far from it), outperforming either pure method individually across essentially all practical nonlinear fitting problems.

**Parameter uncertainty estimation**: at convergence, the covariance matrix of the fitted parameters is approximated from the local curvature of $\chi^2$,
$$\mathrm{Cov}(\vec p) \approx \left(J^TJ\right)^{-1}$$
(up to an overall scaling by the reduced $\chi^2$ if the quoted measurement uncertainties $\sigma_i$ are not independently trusted at face value) — the standard basis for reporting parameter error bars from a least-squares fit.

**Asymptotic checks**: sufficiently close to the true minimum, where the model is well-approximated as linear in its parameters over the relevant uncertainty scale, $\lambda\to0$ and the method achieves the full quadratic convergence rate of Gauss-Newton; far from the minimum, in the regime where the linear (Gauss-Newton) approximation would otherwise cause the iteration to diverge, the large-$\lambda$ steepest-descent-like behavior guarantees $\chi^2$ decreases monotonically at every accepted step, at the cost of speed — the algorithm's adaptivity is precisely the mechanism by which it need not sacrifice one property for the other.

---

## Observational Data & Methodology
- **Target / Sample**: N/A — general-purpose numerical optimization algorithm.
- **Instrument Setup**: N/A.
- **Reduction & Detrending Pipeline**: N/A directly, but Levenberg-Marquardt (via MINPACK/`scipy.optimize.curve_fit` or `lmfit`) is the default first-pass fitting method throughout this vault's transit-modeling, spectral-line-fitting, and orbit-fitting workflows, typically used to obtain an initial best-fit and covariance estimate before more expensive MCMC posterior sampling (see [[Affine-Invariant Ensemble MCMC with emcee]]).

---

## Critical Findings & Scientific Impact
1. Provided the algorithmic combination (adaptive damping between Gauss-Newton and steepest descent) that made nonlinear least-squares fitting both fast and numerically robust in practice, rather than requiring problem-specific tuning of a single fixed method.
2. Became embedded in essentially every widely used scientific computing library (MINPACK in Fortran, `scipy.optimize.curve_fit` in Python), making it the de facto standard first-pass nonlinear fitting tool across all of quantitative astrophysics.
3. Open problem (an inherent limitation, not specific to this algorithm): Levenberg-Marquardt finds only a single local minimum of $\chi^2$ and provides no direct information about multimodal posteriors, parameter degeneracies, or non-Gaussian uncertainty distributions — precisely the limitations that motivate MCMC and nested-sampling approaches (see [[Nested sampling algorithm and Bayesian evidence computation]]) for problems where these effects matter.

---

## Vault Cross-References
- Core Theory: [[Linear least squares]], [[General linear least squares]], [[Generalized least squares and correlated measurement errors]]
- Related: [[Affine-Invariant Ensemble MCMC with emcee]], [[QR decomposition]]
- Map of Content: [[Mathematical_Numerical_Methods_MOC]], [[Astro-Statistics_and_Cosmology_MOC]]
