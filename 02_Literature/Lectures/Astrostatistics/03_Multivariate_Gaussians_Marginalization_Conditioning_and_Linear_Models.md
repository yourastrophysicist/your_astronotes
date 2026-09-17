---
layout: "default"
title: "03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models"
---
{% raw %}
# Multivariate Gaussians, Marginalization, Conditioning, and Linear Models

Graduate lecture notes in Astro-Statistics and Cosmology, taught by Prof. Michele Liguori at the University of Padua.
Reference index [Astro-Statistics_and_Cosmology_MOC](../../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)

---

## The Multivariate Gaussian Distribution

The multivariate normal distribution represents the cornerstone of astronomical data analysis and theoretical cosmology. From the primordial Gaussian scalar perturbations generated during cosmic inflation to the instrumental noise profiles of bolometric detectors, multivariate Gaussians provide the exact or leading-order statistical description.

Let $\boldsymbol{x} = (x_1, x_2, \dots, x_D)^T \in \mathbb{R}^D$ be a random vector. The vector follows a multivariate Gaussian distribution, denoted $\boldsymbol{x} \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$, if its probability density function is given by

$$p(\boldsymbol{x}) = \frac{1}{(2\pi)^{D/2} \sqrt{\det \boldsymbol{\Sigma}}} \exp\left( -\frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\boldsymbol{x} - \boldsymbol{\mu}) \right)$$

The distribution is fully characterized by two moments
1. The mean vector $\boldsymbol{\mu} \equiv \langle \boldsymbol{x} \rangle \in \mathbb{R}^D$
2. The covariance matrix $\boldsymbol{\Sigma} \in \mathbb{R}^{D \times D}$, defined element-wise by $\Sigma_{ij} \equiv \langle (x_i - \mu_i)(x_j - \mu_j) \rangle$.

The covariance matrix is symmetric ($\boldsymbol{\Sigma}^T = \boldsymbol{\Sigma}$) and positive-definite ($\boldsymbol{v}^T \boldsymbol{\Sigma} \boldsymbol{v} > 0$ for any non-zero vector $\boldsymbol{v} \in \mathbb{R}^D$).

The inverse of the covariance matrix is the precision matrix (or information matrix), denoted $\boldsymbol{\Lambda} \equiv \boldsymbol{\Sigma}^{-1}$.

---

## Partitioning, Marginalization, and Conditioning

A fundamental reason for the ubiquity of Gaussian models is that marginal distributions and conditional distributions derived from a joint Gaussian remain strictly Gaussian, with closed-form analytic solutions.

Partition the $D$-dimensional vector $\boldsymbol{x}$ into two subvectors $\boldsymbol{x}_1 \in \mathbb{R}^p$ and $\boldsymbol{x}_2 \in \mathbb{R}^q$, where $p + q = D$

$$\boldsymbol{x} = \begin{pmatrix} \boldsymbol{x}_1 \\ \boldsymbol{x}_2 \end{pmatrix}, \qquad \boldsymbol{\mu} = \begin{pmatrix} \boldsymbol{\mu}_1 \\ \boldsymbol{\mu}_2 \end{pmatrix}$$

The covariance matrix and precision matrix are partitioned conformally into block matrices

$$\boldsymbol{\Sigma} = \begin{pmatrix} \boldsymbol{\Sigma}_{11} & \boldsymbol{\Sigma}_{12} \\ \boldsymbol{\Sigma}_{21} & \boldsymbol{\Sigma}_{22} \end{pmatrix}, \qquad \boldsymbol{\Lambda} \equiv \boldsymbol{\Sigma}^{-1} = \begin{pmatrix} \boldsymbol{\Lambda}_{11} & \boldsymbol{\Lambda}_{12} \\ \boldsymbol{\Lambda}_{21} & \boldsymbol{\Lambda}_{22} \end{pmatrix}$$

where $\boldsymbol{\Sigma}_{21} = \boldsymbol{\Sigma}_{12}^T$ and $\boldsymbol{\Lambda}_{21} = \boldsymbol{\Lambda}_{12}^T$.

### The Marginal Distribution

In astronomical problems, we frequently want to eliminate nuisance parameters $\boldsymbol{x}_2$ (such as instrumental calibration zero-points or foreground dust amplitudes) to obtain inferences purely on cosmological parameters $\boldsymbol{x}_1$.

The marginal distribution of $\boldsymbol{x}_1$ is defined by integrating the joint density over all possible values of $\boldsymbol{x}_2$

$$p(\boldsymbol{x}_1) = \int_{\mathbb{R}^q} p(\boldsymbol{x}_1, \boldsymbol{x}_2) \, d\boldsymbol{x}_2$$

To evaluate this integral, expand the quadratic form in terms of the precision blocks

$$(\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{\Lambda} (\boldsymbol{x} - \boldsymbol{\mu}) = (\boldsymbol{x}_1 - \boldsymbol{\mu}_1)^T \boldsymbol{\Lambda}_{11} (\boldsymbol{x}_1 - \boldsymbol{\mu}_1) + 2(\boldsymbol{x}_1 - \boldsymbol{\mu}_1)^T \boldsymbol{\Lambda}_{12} (\boldsymbol{x}_2 - \boldsymbol{\mu}_2) + (\boldsymbol{x}_2 - \boldsymbol{\mu}_2)^T \boldsymbol{\Lambda}_{22} (\boldsymbol{x}_2 - \boldsymbol{\mu}_2)$$

Completing the square with respect to $\boldsymbol{x}_2$

$$(\boldsymbol{x}_2 - \boldsymbol{\mu}_2)^T \boldsymbol{\Lambda}_{22} (\boldsymbol{x}_2 - \boldsymbol{\mu}_2) + 2(\boldsymbol{x}_1 - \boldsymbol{\mu}_1)^T \boldsymbol{\Lambda}_{12} (\boldsymbol{x}_2 - \boldsymbol{\mu}_2) = (\boldsymbol{x}_2 - \boldsymbol{m})^T \boldsymbol{\Lambda}_{22} (\boldsymbol{x}_2 - \boldsymbol{m}) - (\boldsymbol{x}_1 - \boldsymbol{\mu}_1)^T \boldsymbol{\Lambda}_{12} \boldsymbol{\Lambda}_{22}^{-1} \boldsymbol{\Lambda}_{21} (\boldsymbol{x}_1 - \boldsymbol{\mu}_1)$$

where $\boldsymbol{m} = \boldsymbol{\mu}_2 - \boldsymbol{\Lambda}_{22}^{-1} \boldsymbol{\Lambda}_{21} (\boldsymbol{x}_1 - \boldsymbol{\mu}_1)$.

Integrating out $\boldsymbol{x}_2$ consumes the Gaussian integral over $\boldsymbol{x}_2$, contributing $(2\pi)^{q/2} (\det \boldsymbol{\Lambda}_{22})^{-1/2}$, leaving the remaining quadratic form in $\boldsymbol{x}_1$

$$(\boldsymbol{x}_1 - \boldsymbol{\mu}_1)^T (\boldsymbol{\Lambda}_{11} - \boldsymbol{\Lambda}_{12} \boldsymbol{\Lambda}_{22}^{-1} \boldsymbol{\Lambda}_{21}) (\boldsymbol{x}_1 - \boldsymbol{\mu}_1)$$

By the Schur complement inversion theorem for block matrices, the inverse of $\boldsymbol{\Lambda}_{11} - \boldsymbol{\Lambda}_{12} \boldsymbol{\Lambda}_{22}^{-1} \boldsymbol{\Lambda}_{21}$ is simply the block $\boldsymbol{\Sigma}_{11}$ of the original covariance matrix

$$\left( \boldsymbol{\Lambda}_{11} - \boldsymbol{\Lambda}_{12} \boldsymbol{\Lambda}_{22}^{-1} \boldsymbol{\Lambda}_{21} \right)^{-1} = \boldsymbol{\Sigma}_{11}$$

Therefore, the marginal distribution of $\boldsymbol{x}_1$ is an exact multivariate Gaussian

$$p(\boldsymbol{x}_1) = \mathcal{N}\left( \boldsymbol{\mu}_1, \boldsymbol{\Sigma}_{11} \right)$$

This yields a practical rule. To marginalize over a subset of Gaussian variables, one simply extracts the corresponding subvector of the mean and the corresponding diagonal block of the covariance matrix $\boldsymbol{\Sigma}$. No matrix inversions or numerical quadratures are required. Note that this property holds for the covariance matrix $\boldsymbol{\Sigma}$, not for the precision matrix $\boldsymbol{\Lambda}$.

### The Conditional Distribution

Now consider the case where the subvector $\boldsymbol{x}_2$ is directly measured or fixed to a known value $\boldsymbol{x}_2 = \boldsymbol{a}$. The conditional distribution is defined by Bayes' rule

$$p(\boldsymbol{x}_1 | \boldsymbol{x}_2) = \frac{p(\boldsymbol{x}_1, \boldsymbol{x}_2)}{p(\boldsymbol{x}_2)}$$

Carrying out the division of exponential densities yields the conditional distribution

$$p(\boldsymbol{x}_1 | \boldsymbol{x}_2) = \mathcal{N}\left( \boldsymbol{\mu}_{1|2}, \boldsymbol{\Sigma}_{1|2} \right)$$

where the conditional mean vector and conditional covariance matrix are given by

$$\boldsymbol{\mu}_{1|2} = \boldsymbol{\mu}_1 + \boldsymbol{\Sigma}_{12} \boldsymbol{\Sigma}_{22}^{-1} (\boldsymbol{x}_2 - \boldsymbol{\mu}_2)$$

$$\boldsymbol{\Sigma}_{1|2} = \boldsymbol{\Sigma}_{11} - \boldsymbol{\Sigma}_{12} \boldsymbol{\Sigma}_{22}^{-1} \boldsymbol{\Sigma}_{21} = \boldsymbol{\Lambda}_{11}^{-1}$$

### Physical Implications - Marginalizing versus Conditioning

Comparing the marginal covariance $\boldsymbol{\Sigma}_{11}$ and the conditional covariance $\boldsymbol{\Sigma}_{1|2}$ reveals a foundational principle in physical error budgeting.

Because $\boldsymbol{\Sigma}_{22}$ is positive-definite, its inverse $\boldsymbol{\Sigma}_{22}^{-1}$ is also positive-definite. For any non-zero matrix $\boldsymbol{\Sigma}_{12}$, the matrix product $\boldsymbol{\Sigma}_{12} \boldsymbol{\Sigma}_{22}^{-1} \boldsymbol{\Sigma}_{21}$ is positive semi-definite. Consequently

$$\boldsymbol{\Sigma}_{11} - \boldsymbol{\Sigma}_{1|2} = \boldsymbol{\Sigma}_{12} \boldsymbol{\Sigma}_{22}^{-1} \boldsymbol{\Sigma}_{21} \ge 0$$

which implies that for any individual parameter $i$, the conditional variance is strictly less than or equal to the marginal variance

$$\sigma^2(x_i | \boldsymbol{x}_2) \le \sigma^2(x_i)$$

Equality holds if and only if $\boldsymbol{\Sigma}_{12} = \mathbf{0}$, meaning $\boldsymbol{x}_1$ and $\boldsymbol{x}_2$ are statistically independent.

When an astronomer fixes a correlated nuisance parameter to an assumed known value rather than properly marginalizing over its uncertainty, the reported error bars on the primary science parameters are artificially deflated. Marginalization properly broadens the credible regions to reflect genuine physical ignorance of the nuisance sector.

---

## Linear Models and Generalized Least Squares

A wide class of astrophysical observations can be formulated as linear forward models. Suppose we observe a data vector $\boldsymbol{d} \in \mathbb{R}^N$ modeled as a linear combination of $M$ model template vectors (or basis functions) corrupted by additive Gaussian noise $\boldsymbol{n} \sim \mathcal{N}(\mathbf{0}, \boldsymbol{C})$

$$\boldsymbol{d} = \boldsymbol{A} \boldsymbol{\theta} + \boldsymbol{n}$$

Here $\boldsymbol{A} \in \mathbb{R}^{N \times M}$ is the design matrix whose columns contain the template responses, $\boldsymbol{\theta} \in \mathbb{R}^M$ is the unknown amplitude vector, and $\boldsymbol{C} \in \mathbb{R}^{N \times N}$ is the known noise covariance matrix.

Assuming a uniform prior $\pi(\boldsymbol{\theta}) \propto \text{const}$, the posterior distribution over $\boldsymbol{\theta}$ is proportional to the Gaussian likelihood

$$p(\boldsymbol{\theta} | \boldsymbol{d}) \propto \exp\left( -\frac{1}{2} \chi^2(\boldsymbol{\theta}) \right)$$

where the generalized chi-squared function is

$$\chi^2(\boldsymbol{\theta}) = (\boldsymbol{d} - \boldsymbol{A} \boldsymbol{\theta})^T \boldsymbol{C}^{-1} (\boldsymbol{d} - \boldsymbol{A} \boldsymbol{\theta})$$

Expanding this quadratic expression

$$\chi^2(\boldsymbol{\theta}) = \boldsymbol{d}^T \boldsymbol{C}^{-1} \boldsymbol{d} - 2 \boldsymbol{\theta}^T \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{d} + \boldsymbol{\theta}^T (\boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A}) \boldsymbol{\theta}$$

To find the Maximum Likelihood and MAP estimator $\hat{\boldsymbol{\theta}}$, we take the gradient with respect to $\boldsymbol{\theta}$ and set it to zero

$$\nabla_{\boldsymbol{\theta}} \chi^2(\boldsymbol{\theta}) = -2 \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{d} + 2 (\boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A}) \boldsymbol{\theta} = \mathbf{0}$$

Solving for $\boldsymbol{\theta}$ yields the Generalized Least Squares (GLS) estimator

$$\hat{\boldsymbol{\theta}} = \left( \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A} \right)^{-1} \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{d}$$

Because $\boldsymbol{d}$ is a Gaussian random vector, and $\hat{\boldsymbol{\theta}}$ is a linear transformation of $\boldsymbol{d}$, the estimator $\hat{\boldsymbol{\theta}}$ is itself exactly Gaussian distributed.

Its expectation value confirms unbiasedness

$$\langle \hat{\boldsymbol{\theta}} \rangle = \left( \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A} \right)^{-1} \boldsymbol{A}^T \boldsymbol{C}^{-1} \langle \boldsymbol{d} \rangle = \left( \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A} \right)^{-1} \boldsymbol{A}^T \boldsymbol{C}^{-1} (\boldsymbol{A} \boldsymbol{\theta}_{\text{true}}) = \boldsymbol{\theta}_{\text{true}}$$

Its parameter covariance matrix is computed directly

$$\boldsymbol{\Sigma}_{\theta} \equiv \left\langle (\hat{\boldsymbol{\theta}} - \boldsymbol{\theta}_{\text{true}}) (\hat{\boldsymbol{\theta}} - \boldsymbol{\theta}_{\text{true}})^T \right\rangle = \left( \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A} \right)^{-1} \boldsymbol{A}^T \boldsymbol{C}^{-1} \langle \boldsymbol{n} \boldsymbol{n}^T \rangle \boldsymbol{C}^{-1} \boldsymbol{A} \left( \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A} \right)^{-1}$$

Substituting $\langle \boldsymbol{n} \boldsymbol{n}^T \rangle = \boldsymbol{C}$ leads to exact cancellation of the central terms

$$\boldsymbol{\Sigma}_{\theta} = \left( \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A} \right)^{-1}$$

The posterior distribution of the parameters is therefore an exact Gaussian

$$p(\boldsymbol{\theta} | \boldsymbol{d}) = \mathcal{N}\left( \hat{\boldsymbol{\theta}}, \left( \boldsymbol{A}^T \boldsymbol{C}^{-1} \boldsymbol{A} \right)^{-1} \right)$$

This derivation encompasses template fitting for cosmic microwave background foregrounds, pulsar timing analysis, and ordinary linear regression as direct special cases.

---

## The Characteristic Function of a Multivariate Gaussian

The characteristic function $\phi(\boldsymbol{k})$ of a continuous probability distribution $p(\boldsymbol{x})$ is defined as the Fourier transform of the probability density function

$$\phi(\boldsymbol{k}) \equiv \left\langle \exp\left( i \boldsymbol{k}^T \boldsymbol{x} \right) \right\rangle = \int_{\mathbb{R}^D} \exp\left( i \boldsymbol{k}^T \boldsymbol{x} \right) p(\boldsymbol{x}) \, d^D\boldsymbol{x}$$

For a multivariate Gaussian $\boldsymbol{x} \sim \mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$, the characteristic function evaluates to

$$\phi(\boldsymbol{k}) = \exp\left( i \boldsymbol{k}^T \boldsymbol{\mu} - \frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} \right)$$

We demonstrate this fundamental result through two distinct analytical methods.

### Method 1. Completing the Square in the Integrand

Substitute the explicit Gaussian density into the definition

$$\phi(\boldsymbol{k}) = \frac{1}{(2\pi)^{D/2} \sqrt{\det \boldsymbol{\Sigma}}} \int_{\mathbb{R}^D} \exp\left( i \boldsymbol{k}^T \boldsymbol{x} - \frac{1}{2} (\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\boldsymbol{x} - \boldsymbol{\mu}) \right) \, d^D\boldsymbol{x}$$

Shift the integration variable to zero-mean fluctuations $\boldsymbol{y} \equiv \boldsymbol{x} - \boldsymbol{\mu}$, so that $d^D\boldsymbol{x} = d^D\boldsymbol{y}$ and $\boldsymbol{x} = \boldsymbol{y} + \boldsymbol{\mu}$

$$\phi(\boldsymbol{k}) = \exp\left( i \boldsymbol{k}^T \boldsymbol{\mu} \right) \frac{1}{(2\pi)^{D/2} \sqrt{\det \boldsymbol{\Sigma}}} \int_{\mathbb{R}^D} \exp\left( i \boldsymbol{k}^T \boldsymbol{y} - \frac{1}{2} \boldsymbol{y}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{y} \right) \, d^D\boldsymbol{y}$$

Combine the exponents into a single quadratic form in $\boldsymbol{y}$

$$-\frac{1}{2} \boldsymbol{y}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{y} + i \boldsymbol{k}^T \boldsymbol{y} = -\frac{1}{2} \left[ \boldsymbol{y}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{y} - 2 i \boldsymbol{k}^T \boldsymbol{y} \right]$$

Complete the square by introducing $\boldsymbol{z} \equiv \boldsymbol{y} - i \boldsymbol{\Sigma} \boldsymbol{k}$

$$(\boldsymbol{y} - i \boldsymbol{\Sigma} \boldsymbol{k})^T \boldsymbol{\Sigma}^{-1} (\boldsymbol{y} - i \boldsymbol{\Sigma} \boldsymbol{k}) = \boldsymbol{y}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{y} - 2 i \boldsymbol{k}^T \boldsymbol{y} + (i \boldsymbol{k})^T \boldsymbol{\Sigma} (i \boldsymbol{k}) = \boldsymbol{y}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{y} - 2 i \boldsymbol{k}^T \boldsymbol{y} - \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k}$$

Rearranging gives

$$-\frac{1}{2} \boldsymbol{y}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{y} + i \boldsymbol{k}^T \boldsymbol{y} = -\frac{1}{2} \boldsymbol{z}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{z} - \frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k}$$

The term $-\frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k}$ is completely independent of $\boldsymbol{y}$ and factors out of the integral

$$\phi(\boldsymbol{k}) = \exp\left( i \boldsymbol{k}^T \boldsymbol{\mu} - \frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} \right) \left[ \frac{1}{(2\pi)^{D/2} \sqrt{\det \boldsymbol{\Sigma}}} \int_{\mathbb{R}^D} \exp\left( -\frac{1}{2} \boldsymbol{z}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{z} \right) \, d^D\boldsymbol{z} \right]$$

By contour integration along the shifted complex plane, the bracketed term is the normalization integral of a standard Gaussian distribution, which integrates identically to 1. This completes the first proof.

### Method 2. Orthogonal Diagonalization

Because the covariance matrix $\boldsymbol{\Sigma}$ is real and symmetric, it can be diagonalized by an orthogonal transformation matrix $\boldsymbol{O}$ such that $\boldsymbol{O}^T \boldsymbol{O} = \boldsymbol{I}$ and

$$\boldsymbol{\Sigma} = \boldsymbol{O} \boldsymbol{D} \boldsymbol{O}^T$$

where $\boldsymbol{D} = \operatorname{diag}(\lambda_1, \lambda_2, \dots, \lambda_D)$ is the diagonal matrix of positive eigenvalues.

Define the rotated and shifted coordinates $\boldsymbol{u} \equiv \boldsymbol{O}^T (\boldsymbol{x} - \boldsymbol{\mu})$. The Jacobian determinant of an orthogonal transformation is $|\det \boldsymbol{O}| = 1$, so $d^D\boldsymbol{x} = d^D\boldsymbol{u}$.

In these decoupled coordinates, the exponent separates into a sum of $D$ independent 1D terms

$$(\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\boldsymbol{x} - \boldsymbol{\mu}) = \boldsymbol{u}^T \boldsymbol{D}^{-1} \boldsymbol{u} = \sum_{j=1}^D \frac{u_j^2}{\lambda_j}$$

Similarly, express the Fourier exponent using $\boldsymbol{x} - \boldsymbol{\mu} = \boldsymbol{O} \boldsymbol{u}$

$$\boldsymbol{k}^T (\boldsymbol{x} - \boldsymbol{\mu}) = \boldsymbol{k}^T \boldsymbol{O} \boldsymbol{u} = \boldsymbol{q}^T \boldsymbol{u} = \sum_{j=1}^D q_j u_j$$

where $\boldsymbol{q} \equiv \boldsymbol{O}^T \boldsymbol{k}$.

The multidimensional integral factorizes into the product of $D$ independent one-dimensional integrals

$$\phi(\boldsymbol{k}) = \exp\left( i \boldsymbol{k}^T \boldsymbol{\mu} \right) \prod_{j=1}^D \left[ \frac{1}{\sqrt{2\pi \lambda_j}} \int_{-\infty}^\infty \exp\left( i q_j u_j - \frac{u_j^2}{2\lambda_j} \right) \, du_j \right]$$

Completing the square in each 1D integral yields $\exp\left( -\frac{1}{2} \lambda_j q_j^2 \right)$. Recombining the products

$$\prod_{j=1}^D \exp\left( -\frac{1}{2} \lambda_j q_j^2 \right) = \exp\left( -\frac{1}{2} \boldsymbol{q}^T \boldsymbol{D} \boldsymbol{q} \right) = \exp\left( -\frac{1}{2} \boldsymbol{k}^T \boldsymbol{O} \boldsymbol{D} \boldsymbol{O}^T \boldsymbol{k} \right) = \exp\left( -\frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} \right)$$

Combining this with $\exp(i \boldsymbol{k}^T \boldsymbol{\mu})$ recovers the identical result.

### Generating Moments and Unnormalized Gaussian Structure

The characteristic function serves as a moment-generating engine. By differentiating $\phi(\boldsymbol{k})$ with respect to $(-i k_\alpha)$ and evaluating at $\boldsymbol{k} = \mathbf{0}$, arbitrary moments of the distribution are generated

$$\langle x_\alpha \rangle = \left. \frac{\partial \phi(\boldsymbol{k})}{\partial (i k_\alpha)} \right|_{\boldsymbol{k}=\mathbf{0}} = \mu_\alpha$$

$$\langle x_\alpha x_\beta \rangle = \left. \frac{\partial^2 \phi(\boldsymbol{k})}{\partial (i k_\alpha) \partial (i k_\beta)} \right|_{\boldsymbol{k}=\mathbf{0}} = \Sigma_{\alpha\beta} + \mu_\alpha \mu_\beta$$

Notice further that as a mathematical function of the wavevector $\boldsymbol{k}$, the characteristic function

$$\phi(\boldsymbol{k}) = \exp\left( i \boldsymbol{\mu}^T \boldsymbol{k} - \frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} \right)$$

is itself an unnormalized multivariate Gaussian distribution in Fourier space, centered at $\boldsymbol{k}_0 = i \boldsymbol{\Sigma}^{-1} \boldsymbol{\mu}$ with covariance matrix given by $\boldsymbol{\Sigma}^{-1}$. This dual Gaussian property under Fourier transformation underlies Wick's theorem and cosmological perturbation theory.

---

## Conceptual Connections

- [Astro-Statistics_and_Cosmology_MOC](../../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html) - Master syllabus map of content
- [02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals](./02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals.html) - General likelihood and Bayesian error estimation
- [06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting](./06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting.html) - Curvature of Gaussian likelihoods and forecasting
- [07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance](./07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance.html) - Application of Gaussian random fields to CMB temperature maps
- [Homework_Problems_and_Solutions](./Homework_Problems_and_Solutions.html) - Numerical and analytical solutions for Homework problems 4, 5, 6, 7, 8, and 9
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals.html" class="backlink-item">02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals</a></li>
    <li class="backlink-item-wrap"><a href="./05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics.html" class="backlink-item">05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="./06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting.html" class="backlink-item">06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting</a></li>
    <li class="backlink-item-wrap"><a href="./07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance.html" class="backlink-item">07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance</a></li>
    <li class="backlink-item-wrap"><a href="./09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae.html" class="backlink-item">09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Generalized%20least%20squares%20and%20correlated%20measurement%20errors.html" class="backlink-item">Generalized least squares and correlated measurement errors</a></li>
    <li class="backlink-item-wrap"><a href="./Homework_Problems_and_Solutions.html" class="backlink-item">Homework_Problems_and_Solutions</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Multivariate%20Gaussian%20conditioning%20and%20marginalization.html" class="backlink-item">Multivariate Gaussian conditioning and marginalization</a></li>
  </ul>
</div>
