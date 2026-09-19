---
layout: "default"
title: "10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy"
---
# Prior Assignment, Transformation Invariance, and Maximum Entropy

Graduate lecture notes in Astro-Statistics and Cosmology, taught by Prof. Michele Liguori at the University of Padua.
Reference index [Astro-Statistics_and_Cosmology_MOC](../../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)

---

## The Problem of Prior Assignment

A central pillar of the Bayesian framework is the prior probability distribution $\pi(\boldsymbol{\theta}) \equiv p(\boldsymbol{\theta} \mid M)$. The prior quantifies the state of knowledge regarding the parameter vector $\boldsymbol{\theta}$ before confronting the observational dataset $\boldsymbol{d}$.

In astronomical practice, two broad paradigms govern the selection of priors
1. Informative Priors - constructed from previous independent empirical observations (for example, using a Gaussian prior on the Hubble constant $H_0 = 73.04 \pm 1.04 \, \text{km/s/Mpc}$ derived from Hubble Space Telescope Cepheid-calibrated supernovae when analyzing cosmic microwave background maps).
2. Uninformative (Objective / Reference) Priors - constructed to represent a state of complete prior ignorance or neutrality, allowing the empirical data to dominate the posterior inference entirely.

The assignment of uninformative priors presents subtle conceptual challenges. A naive approach to representing total ignorance often introduces hidden, unphysical biases.

---

## The Failure of the Principle of Insufficient Reason

The earliest historical attempt to define uninformative priors was formulated by Pierre-Simon Laplace as the Principle of Insufficient Reason (also known as the Principle of Indifference). The principle posits that if there is no known empirical or theoretical reason to prefer any one possible outcome or parameter value over another, all possibilities must be assigned equal probability. For a continuous parameter $\theta \in [a, b]$, this implies a uniform probability density

$$\pi(\theta) = \frac{1}{b - a} = \text{const}$$

While intuitive, this principle suffers from a fatal mathematical flaw. Uniformity is not invariant under non-linear parameter transformations.

Suppose an astrophysicist measures the distance $d$ to a source and assigns a uniform uninformative prior over the range $[d_{\text{min}}, d_{\text{max}}]$

$$\pi_d(d) \propto \text{const}$$

Now consider a colleague who measures the annual parallax $\varpi \equiv 1/d$. By standard conservation of probability mass

$$\pi_\varpi(\varpi) \, \lvert d\varpi\rvert = \pi_d(d) \, \lvert dd\rvert \implies \pi_\varpi(\varpi) = \pi_d\left( \frac{1}{\varpi} \right) \left\lvert \frac{dd}{d\varpi} \right\rvert \propto \frac{1}{\varpi^2}$$

The second researcher, who claims to measure the exact same physical system, finds a highly informative prior proportional to $1/\varpi^2$, strongly favoring small parallaxes.

Because nature does not care which coordinate chart an astronomer uses to write down physical laws, a genuine rule for constructing uninformative priors must produce inferences that are mathematically invariant under arbitrary coordinate reparameterizations.

---

## Transformation Groups and Invariance Principles

E.T. Jaynes (1968) demonstrated that objective priors can be constructed rigorously by identifying the underlying geometric and physical symmetries of the problem. If a physical state of ignorance is invariant under a continuous group of transformations, the corresponding prior distribution must satisfy the same invariance group.

### Location Parameters and Translation Invariance

A parameter $\mu$ is a location parameter if shifting both the data and the parameter by a constant $c$ leaves the sampling distribution invariant

$$p(d + c \, \mid \, \mu + c) = p(d \, \mid \, \mu) \implies p(d \, \mid \, \mu) = f(d - \mu)$$

Physical examples include the celestial coordinates of a point source, the central rest wavelength of a spectral line $\lambda_0$, or the mean background sky noise level.

If an investigator is completely ignorant of the location of the source, translating the coordinate system by an arbitrary spatial displacement $c$ (mapping $\mu' = \mu + c$) cannot alter the state of knowledge.

Conservation of probability requires

$$\pi_\mu(\mu) \, d\mu = \pi_{\mu'}(\mu') \, d\mu'$$

Because the transformation is a pure translation, the Jacobian is unity, $d\mu' = d\mu$. Symmetrical ignorance demands that the functional form of the prior must remain identical, $\pi_{\mu'}(x) = \pi_\mu(x)$. Therefore

$$\pi_\mu(\mu + c) = \pi_\mu(\mu) \quad \text{for all } c$$

The unique continuous solution to this functional equation is a constant

$$\pi(\mu) \propto \text{const}$$

For an unbounded parameter space $\mu \in (-\infty, \infty)$, this produces an improper prior (a prior whose integral over the real line is infinite). An improper prior is mathematically valid in Bayesian inference provided the resulting posterior distribution integrates to a finite value.

### Scale Parameters and Scale Invariance

A parameter $\sigma > 0$ is a scale parameter if stretching or shrinking the scale of the measurement by a positive factor $a > 0$ leaves the sampling distribution invariant

$$p(a d \, \mid \, a \sigma) = \frac{1}{a} p(d \, \mid \, \sigma) \implies p(d \, \mid \, \sigma) = \frac{1}{\sigma} f\left( \frac{d}{\sigma} \right)$$

Physical examples include the standard deviation of instrumental noise $\sigma$, the scale factor of the universe $a(t)$, the Hubble parameter $H_0$, or the decay lifetime of an unstable particle.

Complete ignorance of scale means that changing the measurement units (measuring distances in parsecs versus meters, or frequencies in Hertz versus Megahertz) must not alter the probability assignment.

Let $\sigma' = a \sigma$ for any constant $a > 0$. The transformation differential is $d\sigma' = a \, d\sigma$.

Equating probability mass

$$\pi_\sigma(\sigma) \, d\sigma = \pi_{\sigma'}(\sigma') \, d\sigma' = \pi_\sigma(a\sigma) \, a \, d\sigma$$

Canceling $d\sigma$ gives the functional equation

$$\pi_\sigma(a\sigma) = \frac{1}{a} \pi_\sigma(\sigma)$$

Evaluating this equation at $\sigma = 1$ and letting $a$ vary yields

$$\pi(\sigma) \propto \frac{1}{\sigma}$$

This is the famous Jeffreys prior for scale parameters.

Notice that transforming to the logarithmic variable $\theta \equiv \ln \sigma$

$$\pi_\theta(\theta) \, d\theta = \pi_\sigma(\sigma) \, d\sigma = \left( \frac{1}{\sigma} \right) (\sigma \, d\ln\sigma) = d\theta \implies \pi_\theta(\theta) \propto \text{const}$$

A Jeffreys scale prior is mathematically equivalent to assigning a uniform prior to the logarithm of the parameter. It assigns equal prior probability to every decade of magnitude, giving equal weight to the intervals $[1, 10]$, $[10, 100]$, and $[100, 1000]$.

---

## Jeffreys' General Rule via the Fisher Information Matrix

Harold Jeffreys (1946) proposed a universal mathematical procedure for constructing objective prior distributions directly from the likelihood function.

Jeffreys defined the prior distribution as the square root of the determinant of the Fisher Information Matrix

$$\pi_{\text{J}}(\boldsymbol{\theta}) \propto \sqrt{\det \boldsymbol{F}(\boldsymbol{\theta})}$$

where $\boldsymbol{F}(\boldsymbol{\theta})$ is the Fisher information matrix evaluated at $\boldsymbol{\theta}$

$$F_{ij}(\boldsymbol{\theta}) = -\left\langle \frac{\partial^2 \ln \mathcal{L}(\boldsymbol{\theta})}{\partial \theta_i \, \partial \theta_j} \right\rangle$$

### Proof of Coordinate Transformation Invariance

We prove that Jeffreys' prior is universally invariant under arbitrary smooth, invertible non-linear coordinate reparameterizations $\boldsymbol{\phi} = \boldsymbol{g}(\boldsymbol{\theta})$.

Let $\boldsymbol{J}$ denote the Jacobian matrix of the transformation, with elements $J_{ki} \equiv \frac{\partial \theta_k}{\partial \phi_i}$.

By the chain rule of multivariate calculus, the score vector in the new coordinate system is

$$\frac{\partial \ln \mathcal{L}}{\partial \phi_i} = \sum_{k=1}^M \frac{\partial \theta_k}{\partial \phi_i} \frac{\partial \ln \mathcal{L}}{\partial \theta_k} = \sum_{k=1}^M J_{ki} \frac{\partial \ln \mathcal{L}}{\partial \theta_k}$$

The Fisher information matrix in the $\boldsymbol{\phi}$ coordinate basis is

$$F_{ij}^{(\boldsymbol{\phi})} = \left\langle \left( \frac{\partial \ln \mathcal{L}}{\partial \phi_i} \right) \left( \frac{\partial \ln \mathcal{L}}{\partial \phi_j} \right) \right\rangle = \sum_{k=1}^M \sum_{l=1}^M J_{ki} \left\langle \left( \frac{\partial \ln \mathcal{L}}{\partial \theta_k} \right) \left( \frac{\partial \ln \mathcal{L}}{\partial \theta_l} \right) \right\rangle J_{lj}$$

In compact matrix notation, the Fisher matrix transforms as a covariant tensor of rank 2

$$\boldsymbol{F}^{(\boldsymbol{\phi})} = \boldsymbol{J}^T \boldsymbol{F}^{(\boldsymbol{\theta})} \boldsymbol{J}$$

Taking the determinant of both sides and using $\det(\boldsymbol{A} \boldsymbol{B}) = \det(\boldsymbol{A}) \det(\boldsymbol{B})$

$$\det \boldsymbol{F}^{(\boldsymbol{\phi})} = \det(\boldsymbol{J}^T) \det(\boldsymbol{F}^{(\boldsymbol{\theta})}) \det(\boldsymbol{J}) = [\det \boldsymbol{J}]^2 \det \boldsymbol{F}^{(\boldsymbol{\theta})}$$

Taking the square root of both sides

$$\sqrt{\det \boldsymbol{F}^{(\boldsymbol{\phi})}} = \lvert \det \boldsymbol{J}\rvert \sqrt{\det \boldsymbol{F}^{(\boldsymbol{\theta})}}$$

Now consider the standard transformation rule for probability density functions under coordinate change

$$\pi_{\boldsymbol{\phi}}(\boldsymbol{\phi}) = \pi_{\boldsymbol{\theta}}(\boldsymbol{\theta}(\boldsymbol{\phi})) \, \lvert \det \boldsymbol{J}\rvert$$

Comparing the two expressions demonstrates that $\sqrt{\det \boldsymbol{F}}$ transforms exactly as a probability density function. The state of prior knowledge represented by Jeffreys' rule is completely independent of the choice of coordinate system.

### Examples of Jeffreys Priors

Example 1 (Gaussian Mean). Let $d \sim \mathcal{N}(\mu, \sigma^2)$ with known variance $\sigma^2$. The log-likelihood is $\ln \mathcal{L} = -\frac{1}{2\sigma^2}(d - \mu)^2 + \text{const}$.

The second derivative is $\frac{\partial^2 \ln \mathcal{L}}{\partial \mu^2} = -\frac{1}{\sigma^2}$. The Fisher information is $F = 1/\sigma^2$, which is constant with respect to $\mu$. Therefore

$$\pi(\mu) \propto \sqrt{F} \propto \text{const}$$

recovering the translation-invariant uniform prior.

Example 2 (Gaussian Variance). Let $d \sim \mathcal{N}(0, \sigma^2)$ with unknown scale $\sigma$. The log-likelihood is $\ln \mathcal{L} = -\ln\sigma - \frac{d^2}{2\sigma^2} + \text{const}$.

The score is $\frac{\partial \ln \mathcal{L}}{\partial \sigma} = -\frac{1}{\sigma} + \frac{d^2}{\sigma^3}$. Differentiating again

$$\frac{\partial^2 \ln \mathcal{L}}{\partial \sigma^2} = \frac{1}{\sigma^2} - \frac{3d^2}{\sigma^4}$$

Taking the negative expectation value using $\langle d^2 \rangle = \sigma^2$

$$F(\sigma) = -\left( \frac{1}{\sigma^2} - \frac{3\sigma^2}{\sigma^4} \right) = \frac{2}{\sigma^2}$$

Taking the square root

$$\pi(\sigma) \propto \sqrt{\frac{2}{\sigma^2}} \propto \frac{1}{\sigma}$$

recovering the scale-invariant Jeffreys prior.

---

## The Principle of Maximum Entropy (MaxEnt)

When prior information consists of specific physical constraints (such as known conservation laws, average energy, or non-negative physical domains), transformation group symmetries may be insufficient.

E.T. Jaynes (1957) unified statistical mechanics and Bayesian inference through the Principle of Maximum Entropy (MaxEnt).

The Shannon differential entropy of a continuous probability density $p(x)$ is defined as

$$S[p] \equiv -\int_{\Omega} p(x) \ln\left( \frac{p(x)}{m(x)} \right) \, dx$$

where $m(x)$ is an invariant reference measure.

Entropy measures the amount of uncertainty or missing information contained in a probability distribution. The MaxEnt principle states that among all probability distributions that satisfy a given set of testable physical constraints, one must select the distribution that maximizes the entropy. Any other distribution would implicitly assume extra, unjustified information.

### Mathematical Derivation via Lagrange Multipliers

Suppose our knowledge consists of $M$ known expectation values of physical functions $f_k(x)$

$$\langle f_k(x) \rangle = \int_{\Omega} f_k(x) \, p(x) \, dx = C_k \quad (k = 1, 2, \dots, M)$$

along with the standard probability normalization condition

$$\int_{\Omega} p(x) \, dx = 1$$

To maximize $S[p]$ subject to these constraints, construct the Lagrangian functional with Lagrange multipliers $\lambda_0$ and $\{\lambda_k\}_{k=1}^M$

$$\mathcal{J}[p] = -\int p(x) \ln p(x) \, dx - (\lambda_0 - 1) \left[ \int p(x) \, dx - 1 \right] - \sum_{k=1}^M \lambda_k \left[ \int f_k(x) \, p(x) \, dx - C_k \right]$$

Taking the functional derivative with respect to $p(x)$ and setting it to zero

$$\frac{\delta \mathcal{J}}{\delta p(x)} = -\ln p(x) - 1 - (\lambda_0 - 1) - \sum_{k=1}^M \lambda_k f_k(x) = -\ln p(x) - \lambda_0 - \sum_{k=1}^M \lambda_k f_k(x) = 0$$

Solving for $p(x)$ yields the generalized Boltzmann-Gibbs distribution

$$p(x) = \frac{1}{Z} \exp\left( -\sum_{k=1}^M \lambda_k f_k(x) \right)$$

where the partition function $Z \equiv \exp(\lambda_0)$ ensures normalization

$$Z = \int_{\Omega} \exp\left( -\sum_{k=1}^M \lambda_k f_k(x) \right) \, dx$$

### Fundamental MaxEnt Distributions in Physics

1. Bounded Domain without Constraints - if the parameter is bounded $x \in [a, b]$ with no moment constraints, MaxEnt yields the Uniform distribution $p(x) = \frac{1}{b - a}$.
2. Non-negative Domain with Known Mean - if $x \in [0, \infty)$ and only the average value $\langle x \rangle = \mu$ is known, MaxEnt yields the Exponential distribution

$$p(x) = \frac{1}{\mu} \exp\left( -\frac{x}{\mu} \right)$$

3. Unbounded Domain with Known Mean and Variance - if $x \in (-\infty, \infty)$ and both the mean $\langle x \rangle = \mu$ and variance $\langle (x - \mu)^2 \rangle = \sigma^2$ are known, the constraints are $f_1(x) = x$ and $f_2(x) = (x - \mu)^2$. MaxEnt yields

$$p(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right)$$

This provides the deepest information-theoretic justification for the Gaussian distribution in astrophysics. When an astronomer models measurement noise using a Gaussian with specified variance, they are not merely making a convenient mathematical approximation; they are assuming the uniquely most honest, least committal probability distribution that incorporates the measured variance while remaining completely agnostic about all higher-order moments.

---

## Conceptual Connections

- [Astro-Statistics_and_Cosmology_MOC](../../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html) - Master syllabus map of content
- [01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations](./01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations.html) - Cox theorem and probability foundations
- [02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals](./02_Parameter_Estimation_Gaussian_Noise_and_Credible_Intervals.html) - Impact of informative vs uninformative priors on MAP estimators
- [06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting](./06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting.html) - The Fisher information matrix as the generator of Jeffreys priors
- [11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio](./11_Model_Selection_Bayesian_Evidence_and_Savage_Dickey_Ratio.html) - Sensitivity of Bayesian evidence to prior volume

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Principle%20of%20maximum%20entropy%20in%20prior%20assignment.html" class="backlink-item">Principle of maximum entropy in prior assignment</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Transformation%20group%20invariance%20and%20Jeffreys%20prior.html" class="backlink-item">Transformation group invariance and Jeffreys prior</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>

