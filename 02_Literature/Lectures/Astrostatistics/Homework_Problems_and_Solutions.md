---
layout: "default"
title: "Homework_Problems_and_Solutions"
---
# Astrostatistics Homework Problems and Complete Solutions

Graduate problem set solutions in Astro-Statistics and Cosmology, taught by Prof. Michele Liguori at the University of Padua.
Reference index [[Astro-Statistics_and_Cosmology_MOC]]

---

## Problem 1. Sequential Bayesian Updating in Coin Tossing

### Statement
Consider the coin tossing example discussed in the first lecture. Simulate 1000 tosses of the coin, setting the true probability of heads to $H = 0.3$. Consider a uniform prior on $H$ and update the posterior at each toss. Plot the resulting posterior after 1, 50, 100, 300, 700, and 1000 tosses. Repeat the simulated experiment by setting a Gaussian prior centered at $H = 0.5$, with standard deviation $\sigma = 0.1$.
Do both posteriors converge to a similar distribution in the end? What does that mean? Which posterior converges faster and why?

### Analytical Solution
Let $H \in [0, 1]$ denote the unknown bias of the coin. In a sequence of $N$ independent tosses resulting in $k$ heads and $N - k$ tails, the likelihood is given by the Binomial distribution

$$\mathcal{L}(H) \propto H^k (1 - H)^{N - k}$$

Under a uniform prior $\pi(H) = \mathcal{U}(0, 1) = \operatorname{Beta}(1, 1)$, the posterior is an exact Beta distribution

$$p(H \mid k, N) = \operatorname{Beta}(k + 1, \, N - k + 1) = \frac{(N + 1)!}{k! (N - k)!} H^k (1 - H)^{N - k}$$

The posterior mean is $\langle H \rangle = \frac{k + 1}{N + 2}$, and its variance is $\operatorname{Var}(H) = \frac{(k + 1)(N - k + 1)}{(N + 2)^2 (N + 3)} \approx \frac{H(1 - H)}{N}$.

Under an informative Gaussian prior truncated to $[0, 1]$, $\pi(H) \propto \exp\left( -\frac{(H - 0.5)^2}{2(0.1)^2} \right)$, the posterior is

$$p(H \mid k, N) \propto H^k (1 - H)^{N - k} \exp\left( -\frac{(H - 0.5)^2}{0.02} \right)$$

As $N \to 1000$, the likelihood term dominates both posteriors. By the Bernstein-von Mises theorem, the log-likelihood grows as $\mathcal{O}(N)$, whereas the prior contributes an $\mathcal{O}(1)$ term. Both posteriors converge to an identical Gaussian distribution centered at the true value $H = 0.3$ with standard deviation $\sigma_N = \sqrt{\frac{0.3 \times 0.7}{1000}} \approx 0.0145$.

Convergence speed comparison
- In the early regime ($N \lesssim 50$), the uniform prior tracks the empirical data faster because it imposes no opposing bias.
- The Gaussian prior initially pulls the posterior toward $H = 0.5$. Because the true value is $H = 0.3$, the Gaussian prior represents an incorrect prior belief, requiring more data samples to overcome the initial prior pull.

### Python Implementation
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import beta, norm

np.random.seed(42)
true_H = 0.3
N_total = 1000
checkpoints = [1, 50, 100, 300, 700, 1000]

tosses = np.random.binomial(1, true_H, size=N_total)
h_grid = np.linspace(0, 1, 1000)

fig, axes = plt.subplots(2, 3, figsize=(14, 8), sharex=True)
axes = axes.flatten()

cumulative_k = np.cumsum(tosses)

for idx, n in enumerate(checkpoints):
    k = cumulative_k[n - 1]
    
    post_unif = beta.pdf(h_grid, k + 1, n - k + 1)
    
    log_lik = k * np.log(np.clip(h_grid, 1e-12, 1)) + (n - k) * np.log(np.clip(1 - h_grid, 1e-12, 1))
    log_prior_gauss = -0.5 * ((h_grid - 0.5) / 0.1)**2
    post_gauss = np.exp(log_lik + log_prior_gauss - np.max(log_lik + log_prior_gauss))
    post_gauss /= np.trapz(post_gauss, h_grid)
    
    ax = axes[idx]
    ax.plot(h_grid, post_unif, label="Uniform Prior", color="blue", lw=2)
    ax.plot(h_grid, post_gauss, label="Gaussian Prior", color="crimson", lw=2, ls="--")
    ax.axvline(true_H, color="black", ls=":", label="True H=0.3")
    ax.set_title(f"N = {n} Tosses (k = {k})")
    ax.grid(alpha=0.3)
    if idx == 0:
        ax.legend(loc="upper right")

plt.tight_layout()
plt.show()
```

---

## Problem 2. Politician Credibility and Sequential Testimony

### Statement
Politician A makes a statement about proposition $S$ you knew nothing about before. Assume your starting prior on $S$ is uniform with $0.5$ probability of $S$ being true or false. Update your probability of $S$ being true knowing that you trust Mr. A to tell the truth with probability $P(A_T) = 4/5$.
At this point Mr. B, another politician, declares that he agrees with Mr. A on $S$ being true. You trust Mr. B much less, and believe that the probability of him lying is $P(B_L) = 3/4$.
What is your final degree of belief in proposition $S$?

### Analytical Solution
Let $S \in \{T, F\}$ denote the truth of the proposition, with prior $P(S = T) = P(S = F) = 0.5$.

First update (Politician A asserts $S = T$).
Let $E_A$ denote the event that Politician A declares $S = T$.
Politician A tells the truth with probability $P(A_T) = 4/5 = 0.8$.
- If $S = T$, A speaks the truth when asserting $T$, so $P(E_A \mid S = T) = P(A_T) = 0.8$.
- If $S = F$, A lies when asserting $T$, so $P(E_A \mid S = F) = 1 - P(A_T) = 0.2$.

By Bayes' theorem

$$P(S = T \mid E_A) = \frac{P(E_A \mid S = T) P(S = T)}{P(E_A \mid S = T) P(S = T) + P(E_A \mid S = F) P(S = F)} = \frac{0.8 \times 0.5}{(0.8 \times 0.5) + (0.2 \times 0.5)} = \frac{0.4}{0.4 + 0.1} = \frac{4}{5} = 0.8$$

Second update (Politician B also asserts $S = T$).
Now $P(S = T)$ from the first stage acts as the prior for the second observation $E_B$.
Politician B lies with probability $P(B_L) = 3/4 = 0.75$. Therefore, Politician B tells the truth with probability $P(B_T) = 1 - 0.75 = 0.25$.
Assuming B's declaration is conditionally independent of A given the true state of $S$
- If $S = T$, B speaks the truth when asserting $T$, so $P(E_B \mid S = T) = P(B_T) = 0.25$.
- If $S = F$, B lies when asserting $T$, so $P(E_B \mid S = F) = P(B_L) = 0.75$.

Applying Bayes' theorem

$$P(S = T \mid E_A, E_B) = \frac{P(E_B \mid S = T) P(S = T \mid E_A)}{P(E_B \mid S = T) P(S = T \mid E_A) + P(E_B \mid S = F) P(S = F \mid E_A)}$$

Substitute the numerical values

$$P(S = T \mid E_A, E_B) = \frac{0.25 \times 0.8}{(0.25 \times 0.8) + (0.75 \times 0.2)} = \frac{0.20}{0.20 + 0.15} = \frac{0.20}{0.35} = \frac{4}{7} \approx 0.5714$$

Conclusion. Because Politician B is habitual in lying ($75\%$ lie rate), his agreement with Politician A actually decreases our belief in proposition $S$ from $0.80$ down to $0.5714$.

---

## Problem 3. Disease Screening and the Base Rate Fallacy

### Statement
You test positive for a dangerous disease named "Bacillum Bayesianum" (BB). You know that the general incidence of BB in the population is $1\%$. Moreover, you know that your test has a false negative rate of $5\%$ (you have BB but test negative) and a false positive rate of $5\%$ (you do not have BB but test positive).
What is the probability that you have actually contracted BB?

### Analytical Solution
Define the events
- $D$ - patient has contracted Bacillum Bayesianum.
- $\bar{D}$ - patient does not have the disease.
- $+$ - test yields a positive result.
- $-$ - test yields a negative result.

Known probabilities
- Population prevalence (base rate) - $P(D) = 0.01 \implies P(\bar{D}) = 0.99$.
- False negative rate - $P(- \mid D) = 0.05 \implies$ Test sensitivity $P(+ \mid D) = 1 - 0.05 = 0.95$.
- False positive rate - $P(+ \mid \bar{D}) = 0.05 \implies$ Test specificity $P(- \mid \bar{D}) = 1 - 0.05 = 0.95$.

Applying Bayes' theorem

$$P(D \mid +) = \frac{P(+ \mid D) P(D)}{P(+ \mid D) P(D) + P(+ \mid \bar{D}) P(\bar{D})}$$

Substitute the numerical values

$$P(D \mid +) = \frac{0.95 \times 0.01}{(0.95 \times 0.01) + (0.05 \times 0.99)} = \frac{0.0095}{0.0095 + 0.0495} = \frac{0.0095}{0.0590} = \frac{95}{590} = \frac{19}{118} \approx 0.1610$$

Conclusion. Despite a test accuracy of $95\%$, the probability of actually having the disease given a positive test is only approximately $16.1\%$. The rare base rate ($1\%$) means false positives outnumber true positives by more than five to one.

---

## Problem 4. Characteristic Function of a Multivariate Gaussian

### Statement
The characteristic function of a probability distribution $p(\boldsymbol{x})$ is defined as $\phi(\boldsymbol{k}) \equiv \langle \exp(i \boldsymbol{k}^T \boldsymbol{x}) \rangle = \int \exp(i \boldsymbol{k}^T \boldsymbol{x}) p(\boldsymbol{x}) d^n\boldsymbol{x}$.
Show that for a multivariate Gaussian distribution $\mathcal{N}(\boldsymbol{\mu}, \boldsymbol{C})$, the characteristic function is

$$\phi(\boldsymbol{k}) = \exp\left( i \boldsymbol{\mu}^T \boldsymbol{k} - \frac{1}{2} \boldsymbol{k}^T \boldsymbol{C} \boldsymbol{k} \right)$$

Prove this in two distinct ways
1. By completing the square in the integrand.
2. By performing an orthogonal rotation to diagonalize the covariance matrix.

### Analytical Solution

Method 1 (Completing the Square).
Let $\boldsymbol{y} = \boldsymbol{x} - \boldsymbol{\mu}$, so $\boldsymbol{x} = \boldsymbol{y} + \boldsymbol{\mu}$ and $d^n\boldsymbol{x} = d^n\boldsymbol{y}$

$$\phi(\boldsymbol{k}) = \frac{\exp(i \boldsymbol{k}^T \boldsymbol{\mu})}{(2\pi)^{n/2} \sqrt{\det \boldsymbol{C}}} \int \exp\left( i \boldsymbol{k}^T \boldsymbol{y} - \frac{1}{2} \boldsymbol{y}^T \boldsymbol{C}^{-1} \boldsymbol{y} \right) d^n\boldsymbol{y}$$

Combine the exponents into $-\frac{1}{2} \left[ \boldsymbol{y}^T \boldsymbol{C}^{-1} \boldsymbol{y} - 2i \boldsymbol{k}^T \boldsymbol{y} \right]$.
Introduce $\boldsymbol{z} = \boldsymbol{y} - i \boldsymbol{C} \boldsymbol{k}$. Expanding the quadratic form

$$\boldsymbol{z}^T \boldsymbol{C}^{-1} \boldsymbol{z} = (\boldsymbol{y} - i \boldsymbol{C} \boldsymbol{k})^T \boldsymbol{C}^{-1} (\boldsymbol{y} - i \boldsymbol{C} \boldsymbol{k}) = \boldsymbol{y}^T \boldsymbol{C}^{-1} \boldsymbol{y} - 2i \boldsymbol{k}^T \boldsymbol{y} - \boldsymbol{k}^T \boldsymbol{C} \boldsymbol{k}$$

Rearranging gives

$$i \boldsymbol{k}^T \boldsymbol{y} - \frac{1}{2} \boldsymbol{y}^T \boldsymbol{C}^{-1} \boldsymbol{y} = -\frac{1}{2} \boldsymbol{z}^T \boldsymbol{C}^{-1} \boldsymbol{z} - \frac{1}{2} \boldsymbol{k}^T \boldsymbol{C} \boldsymbol{k}$$

Factoring the $\boldsymbol{k}$-dependent constant out of the integral

$$\phi(\boldsymbol{k}) = \exp\left( i \boldsymbol{\mu}^T \boldsymbol{k} - \frac{1}{2} \boldsymbol{k}^T \boldsymbol{C} \boldsymbol{k} \right) \left[ \frac{1}{(2\pi)^{n/2} \sqrt{\det \boldsymbol{C}}} \int_{\mathbb{R}^n} \exp\left( -\frac{1}{2} \boldsymbol{z}^T \boldsymbol{C}^{-1} \boldsymbol{z} \right) d^n\boldsymbol{z} \right]$$

The integral inside the brackets is the normalization of a Gaussian density, evaluating identically to 1. This completes the first proof.

Method 2 (Orthogonal Diagonalization).
Because $\boldsymbol{C}$ is real and symmetric, there exists an orthogonal matrix $\boldsymbol{O}$ such that $\boldsymbol{O}^T \boldsymbol{O} = \boldsymbol{I}$ and $\boldsymbol{C} = \boldsymbol{O} \boldsymbol{\Lambda} \boldsymbol{O}^T$, where $\boldsymbol{\Lambda} = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$.
Define the rotated coordinates $\boldsymbol{u} = \boldsymbol{O}^T (\boldsymbol{x} - \boldsymbol{\mu})$. The Jacobian is $\lvert \det \boldsymbol{O}\rvert = 1$.
The quadratic form becomes $(\boldsymbol{x} - \boldsymbol{\mu})^T \boldsymbol{C}^{-1} (\boldsymbol{x} - \boldsymbol{\mu}) = \boldsymbol{u}^T \boldsymbol{\Lambda}^{-1} \boldsymbol{u} = \sum_{j=1}^n \frac{u_j^2}{\lambda_j}$.
Define rotated wavevectors $\boldsymbol{q} = \boldsymbol{O}^T \boldsymbol{k}$, so $\boldsymbol{k}^T (\boldsymbol{x} - \boldsymbol{\mu}) = \boldsymbol{q}^T \boldsymbol{u} = \sum_{j=1}^n q_j u_j$.
The $n$-dimensional integral factorizes into $n$ independent 1D integrals

$$\phi(\boldsymbol{k}) = \exp(i \boldsymbol{k}^T \boldsymbol{\mu}) \prod_{j=1}^n \left[ \frac{1}{\sqrt{2\pi \lambda_j}} \int_{-\infty}^\infty \exp\left( i q_j u_j - \frac{u_j^2}{2\lambda_j} \right) du_j \right]$$

Completing the square in each 1D integral yields $\exp\left( -\frac{1}{2} \lambda_j q_j^2 \right)$.
Recombining the product

$$\prod_{j=1}^n \exp\left( -\frac{1}{2} \lambda_j q_j^2 \right) = \exp\left( -\frac{1}{2} \boldsymbol{q}^T \boldsymbol{\Lambda} \boldsymbol{q} \right) = \exp\left( -\frac{1}{2} \boldsymbol{k}^T \boldsymbol{O} \boldsymbol{\Lambda} \boldsymbol{O}^T \boldsymbol{k} \right) = \exp\left( -\frac{1}{2} \boldsymbol{k}^T \boldsymbol{C} \boldsymbol{k} \right)$$

Combining with $\exp(i \boldsymbol{k}^T \boldsymbol{\mu})$ establishes the result.

---

## Problem 5. Moment Generation via the Characteristic Function

### Statement
Show how the characteristic function generates moments via differentiation

$$\langle x_{\alpha_1} \dots x_{\alpha_m} \rangle = \left. \frac{\partial^m \phi(\boldsymbol{k})}{\partial (i k_{\alpha_1}) \dots \partial (i k_{\alpha_m})} \right\rvert_{\boldsymbol{k} = \mathbf{0}}$$

Apply this to $\mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$ to find its mean and covariance.

### Analytical Solution
The characteristic function is $\phi(\boldsymbol{k}) = \int e^{i \boldsymbol{k}^T \boldsymbol{x}} p(\boldsymbol{x}) d^n\boldsymbol{x}$.
Differentiating with respect to $i k_\alpha$ pulls down one factor of $x_\alpha$ inside the expectation value

$$\frac{\partial \phi(\boldsymbol{k})}{\partial (i k_\alpha)} = \int x_\alpha e^{i \boldsymbol{k}^T \boldsymbol{x}} p(\boldsymbol{x}) d^n\boldsymbol{x}$$

Evaluating at $\boldsymbol{k} = \mathbf{0}$ yields $\langle x_\alpha \rangle$.

For the multivariate Gaussian, $\phi(\boldsymbol{k}) = \exp\left( i \sum_\gamma \mu_\gamma k_\gamma - \frac{1}{2} \sum_{\gamma, \delta} \Sigma_{\gamma\delta} k_\gamma k_\delta \right)$.

First derivative (Mean)

$$\frac{\partial \phi(\boldsymbol{k})}{\partial k_\alpha} = \left[ i \mu_\alpha - \sum_\delta \Sigma_{\alpha\delta} k_\delta \right] \phi(\boldsymbol{k})$$

Dividing by $i$ and evaluating at $\boldsymbol{k} = \mathbf{0}$

$$\langle x_\alpha \rangle = \left. \frac{1}{i} \frac{\partial \phi}{\partial k_\alpha} \right\rvert_{\boldsymbol{k} = \mathbf{0}} = \frac{1}{i} (i \mu_\alpha) \phi(\mathbf{0}) = \mu_\alpha$$

Second derivative (Covariance)

$$\frac{\partial^2 \phi(\boldsymbol{k})}{\partial k_\alpha \partial k_\beta} = -\Sigma_{\alpha\beta} \phi(\boldsymbol{k}) + \left[ i \mu_\alpha - \sum_\delta \Sigma_{\alpha\delta} k_\delta \right] \left[ i \mu_\beta - \sum_\gamma \Sigma_{\beta\gamma} k_\gamma \right] \phi(\boldsymbol{k})$$

Dividing by $i^2 = -1$ and evaluating at $\boldsymbol{k} = \mathbf{0}$

$$\langle x_\alpha x_\beta \rangle = -\left[ -\Sigma_{\alpha\beta} - \mu_\alpha \mu_\beta \right] = \Sigma_{\alpha\beta} + \mu_\alpha \mu_\beta$$

The covariance matrix is $\operatorname{Cov}(x_\alpha, x_\beta) = \langle x_\alpha x_\beta \rangle - \langle x_\alpha \rangle \langle x_\beta \rangle = \Sigma_{\alpha\beta}$.

---

## Problem 6. Gaussian Nature of the Characteristic Function

### Statement
Show that the characteristic function of a multivariate Gaussian $\mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$ is another unnormalized multivariate Gaussian.

### Analytical Solution
The characteristic function is

$$\phi(\boldsymbol{k}) = \exp\left( i \boldsymbol{\mu}^T \boldsymbol{k} - \frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} \right)$$

To show that this is a Gaussian in wavevector space $\boldsymbol{k}$, complete the square in the exponent

$$-\frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} + i \boldsymbol{\mu}^T \boldsymbol{k} = -\frac{1}{2} \left[ \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} - 2i \boldsymbol{\mu}^T \boldsymbol{k} \right]$$

Let $\boldsymbol{k}_0 \equiv i \boldsymbol{\Sigma}^{-1} \boldsymbol{\mu}$. Then

$$(\boldsymbol{k} - \boldsymbol{k}_0)^T \boldsymbol{\Sigma} (\boldsymbol{k} - \boldsymbol{k}_0) = \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} - 2 \boldsymbol{k}_0^T \boldsymbol{\Sigma} \boldsymbol{k} + \boldsymbol{k}_0^T \boldsymbol{\Sigma} \boldsymbol{k}_0 = \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} - 2i \boldsymbol{\mu}^T \boldsymbol{k} - \boldsymbol{\mu}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{\mu}$$

Therefore

$$-\frac{1}{2} \boldsymbol{k}^T \boldsymbol{\Sigma} \boldsymbol{k} + i \boldsymbol{\mu}^T \boldsymbol{k} = -\frac{1}{2} (\boldsymbol{k} - i \boldsymbol{\Sigma}^{-1} \boldsymbol{\mu})^T \boldsymbol{\Sigma} (\boldsymbol{k} - i \boldsymbol{\Sigma}^{-1} \boldsymbol{\mu}) - \frac{1}{2} \boldsymbol{\mu}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{\mu}$$

Exponentiating

$$\phi(\boldsymbol{k}) = \exp\left( -\frac{1}{2} \boldsymbol{\mu}^T \boldsymbol{\Sigma}^{-1} \boldsymbol{\mu} \right) \exp\left( -\frac{1}{2} (\boldsymbol{k} - \boldsymbol{k}_0)^T \boldsymbol{\Sigma} (\boldsymbol{k} - \boldsymbol{k}_0) \right)$$

This is an unnormalized complex multivariate Gaussian distribution centered at $\boldsymbol{k}_0 = i \boldsymbol{\Sigma}^{-1} \boldsymbol{\mu}$ with covariance matrix given by $\boldsymbol{\Sigma}^{-1}$.

---

## Problem 7. Bivariate Gaussian Marginalization, Conditioning, and Sampling

### Statement
Consider a bivariate Gaussian $\mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$ with $\boldsymbol{\mu} = (-4, 2)^T$ and covariance elements $\Sigma_{11} = 1.44$, $\Sigma_{22} = 0.81$, $\Sigma_{12} = \Sigma_{21} = -0.702$.
1. Compute the $95\%$ credible intervals for each parameter after marginalizing over the other.
2. Compute how these boundaries change if we fix (condition on) the other parameter at its mean.
3. Re-obtain the boundaries via Monte Carlo sampling using three algorithms coded from scratch
   - Cholesky decomposition.
   - Metropolis-Hastings sampling.
   - Gibbs sampling.

### Analytical Solution
Given
- $\mu_1 = -4$, $\sigma_1 = \sqrt{1.44} = 1.2$.
- $\mu_2 = 2$, $\sigma_2 = \sqrt{0.81} = 0.9$.
- Correlation coefficient $\rho = \frac{-0.702}{1.2 \times 0.9} = \frac{-0.702}{1.08} = -0.65$.

Marginalized $95\%$ credible intervals ($z_{0.975} = 1.95996 \approx 1.96$)
- For $X_1$ - $\mu_1 \pm 1.96 \sigma_1 = -4 \pm 1.96(1.2) = [-6.352, \, -1.648]$.
- For $X_2$ - $\mu_2 \pm 1.96 \sigma_2 = 2 \pm 1.96(0.9) = [0.236, \, 3.764]$.

Conditional $95\%$ credible intervals fixed at the mean ($X_2 = \mu_2 = 2$, $X_1 = \mu_1 = -4$)
- Conditioning $X_1 \mid X_2 = 2$
  $\mu_{1\mid2} = \mu_1 + \frac{\Sigma_{12}}{\Sigma_{22}}(X_2 - \mu_2) = -4 + 0 = -4$.
  $\sigma_{1\mid2}^2 = \Sigma_{11} - \frac{\Sigma_{12}^2}{\Sigma_{22}} = 1.44 - \frac{(-0.702)^2}{0.81} = 1.44 - 0.6084 = 0.8316 \implies \sigma_{1\mid2} \approx 0.9119$.
  $95\%$ interval for $X_1 \mid X_2$ is $-4 \pm 1.96(0.9119) = [-5.787, \, -2.213]$.
- Conditioning $X_2 \mid X_1 = -4$
  $\mu_{2\mid1} = \mu_2 + \frac{\Sigma_{21}}{\Sigma_{11}}(X_1 - \mu_1) = 2 + 0 = 2$.
  $\sigma_{2\mid1}^2 = \Sigma_{22} - \frac{\Sigma_{12}^2}{\Sigma_{11}} = 0.81 - \frac{(-0.702)^2}{1.44} = 0.81 - 0.342225 = 0.467775 \implies \sigma_{2\mid1} \approx 0.6839$.
  $95\%$ interval for $X_2 \mid X_1$ is $2 \pm 1.96(0.6839) = [0.659, \, 3.341]$.

Notice that conditioning significantly tightens the credible intervals due to the correlation $\rho = -0.65$.

### Python Implementation of Sampling Algorithms
```python
import numpy as np

mu = np.array([-4.0, 2.0])
cov = np.array([[1.44, -0.702],
                [-0.702, 0.81]])
inv_cov = np.linalg.inv(cov)
N_samples = 100000

# Method A: Cholesky Decomposition
L = np.linalg.cholesky(cov)
z = np.random.normal(0, 1, size=(2, N_samples))
samples_cholesky = (mu[:, None] + L @ z).T

# Method B: Metropolis-Hastings
def log_posterior(x):
    diff = x - mu
    return -0.5 * diff @ inv_cov @ diff

samples_mh = np.zeros((N_samples, 2))
current_x = np.array([0.0, 0.0])
current_logp = log_posterior(current_x)
prop_scale = 1.2
accepted = 0

for t in range(N_samples):
    candidate = current_x + np.random.normal(0, prop_scale, size=2)
    cand_logp = log_posterior(candidate)
    if np.log(np.random.uniform(0, 1)) < cand_logp - current_logp:
        current_x = candidate
        current_logp = cand_logp
        accepted += 1
    samples_mh[t] = current_x

# Method C: Gibbs Sampling
samples_gibbs = np.zeros((N_samples, 2))
x1_cur, x2_cur = 0.0, 0.0
sig1_cond = np.sqrt(1.44 - (-0.702)**2 / 0.81)
sig2_cond = np.sqrt(0.81 - (-0.702)**2 / 1.44)

for t in range(N_samples):
    # Update x1 given x2
    mu1_cond = -4.0 + (-0.702 / 0.81) * (x2_cur - 2.0)
    x1_cur = np.random.normal(mu1_cond, sig1_cond)
    # Update x2 given x1
    mu2_cond = 2.0 + (-0.702 / 1.44) * (x1_cur - (-4.0))
    x2_cur = np.random.normal(mu2_cond, sig2_cond)
    samples_gibbs[t] = [x1_cur, x2_cur]

print("Marginal 95% intervals from Cholesky:")
print("X1:", np.percentile(samples_cholesky[:, 0], [2.5, 97.5]))
print("X2:", np.percentile(samples_cholesky[:, 1], [2.5, 97.5]))
```

---

## Problem 8. Template Fitting via Chi-Squared Maximization

### Statement
We consider a data vector $\vec{d}$ of length $N$. We want to fit the data using a linear combination of $M$ templates $\vec{t}_i$ with unknown amplitudes $\vec{A}$, where $\langle \vec{d} \rangle = \sum_{i=1}^M A_i \vec{t}_i \equiv \vec{A}^T \boldsymbol{T}$.
Assuming Gaussian distributed data with covariance $\boldsymbol{C}$, find the best-fit amplitude vector $\vec{A}$ by minimizing the chi-squared statistic

$$\chi^2 = (\vec{d} - \boldsymbol{T}^T \vec{A})^T \boldsymbol{C}^{-1} (\vec{d} - \boldsymbol{T}^T \vec{A})$$

### Analytical Solution
Let $\boldsymbol{T}$ be the $M \times N$ template matrix whose rows are the templates $\vec{t}_i^T$. Then $\boldsymbol{T}^T$ is an $N \times M$ matrix, and the model vector is $\boldsymbol{T}^T \vec{A}$.

Expand the chi-squared scalar

$$\chi^2(\vec{A}) = \vec{d}^T \boldsymbol{C}^{-1} \vec{d} - 2 \vec{A}^T \boldsymbol{T} \boldsymbol{C}^{-1} \vec{d} + \vec{A}^T (\boldsymbol{T} \boldsymbol{C}^{-1} \boldsymbol{T}^T) \vec{A}$$

Take the vector gradient with respect to $\vec{A}$

$$\nabla_{\vec{A}} \chi^2 = -2 \boldsymbol{T} \boldsymbol{C}^{-1} \vec{d} + 2 (\boldsymbol{T} \boldsymbol{C}^{-1} \boldsymbol{T}^T) \vec{A}$$

Setting the gradient to zero for the minimum

$$(\boldsymbol{T} \boldsymbol{C}^{-1} \boldsymbol{T}^T) \hat{\vec{A}} = \boldsymbol{T} \boldsymbol{C}^{-1} \vec{d}$$

Multiplying by the inverse of the $M \times M$ curvature matrix yields the estimator

$$\hat{\vec{A}} = (\boldsymbol{T} \boldsymbol{C}^{-1} \boldsymbol{T}^T)^{-1} \boldsymbol{T} \boldsymbol{C}^{-1} \vec{d}$$

The covariance matrix of the estimated amplitudes is

$$\operatorname{Cov}(\hat{\vec{A}}) = (\boldsymbol{T} \boldsymbol{C}^{-1} \boldsymbol{T}^T)^{-1}$$

---

## Problem 9. Linear Regression as a Maximum A Posteriori Problem

### Statement
Consider dataset $\boldsymbol{d} = (d_1, \dots, d_N)$ measured at positions $x_i$, with $\langle d_i \rangle = \omega x_i + b$. Noise is Gaussian and uncorrelated with variance $\sigma^2$. Find the MAP estimate of parameters $\omega, b$ and their covariance matrix assuming a uniform prior.

### Analytical Solution
This is a special case of Problem 8 with $M = 2$ templates and diagonal covariance $\boldsymbol{C} = \sigma^2 \boldsymbol{I}$.
The parameter vector is $\vec{A} = (\omega, b)^T$.
The template matrix is $\boldsymbol{T} = \begin{pmatrix} x_1 & x_2 & \dots & x_N \\ 1 & 1 & \dots & 1 \end{pmatrix}$.

The design matrix product is

$$\boldsymbol{T} \boldsymbol{T}^T = \begin{pmatrix} \sum x_i^2 & \sum x_i \\ \sum x_i & N \end{pmatrix}$$

The right-hand projection vector is

$$\boldsymbol{T} \vec{d} = \begin{pmatrix} \sum x_i d_i \\ \sum d_i \end{pmatrix}$$

The determinant of $\boldsymbol{T} \boldsymbol{T}^T$ is $\Delta = N \sum x_i^2 - (\sum x_i)^2 = N \sum (x_i - \bar{x})^2$.

Inverting the $2 \times 2$ matrix

$$(\boldsymbol{T} \boldsymbol{T}^T)^{-1} = \frac{1}{\Delta} \begin{pmatrix} N & -\sum x_i \\ -\sum x_i & \sum x_i^2 \end{pmatrix}$$

Computing $\hat{\vec{A}} = (\boldsymbol{T} \boldsymbol{T}^T)^{-1} \boldsymbol{T} \vec{d}$ yields the classical ordinary least squares formulas

$$\hat{\omega} = \frac{N \sum x_i d_i - (\sum x_i)(\sum d_i)}{N \sum x_i^2 - (\sum x_i)^2} = \frac{\sum (x_i - \bar{x})(d_i - \bar{d})}{\sum (x_i - \bar{x})^2}$$

$$\hat{b} = \bar{d} - \hat{\omega} \bar{x}$$

The parameter covariance matrix is

$$\operatorname{Cov}(\hat{\omega}, \hat{b}) = \sigma^2 (\boldsymbol{T} \boldsymbol{T}^T)^{-1} = \frac{\sigma^2}{\sum (x_i - \bar{x})^2} \begin{pmatrix} 1 & -\bar{x} \\ -\bar{x} & \frac{1}{N}\sum x_i^2 \end{pmatrix}$$

---

## Problem 10. Regularized Linear Regression (LASSO and Ridge)

### Statement
Consider data $d_i = \beta_0 + \sum_{j=1}^p \beta_j x_{ij} + \epsilon_i$ with independent Gaussian noise $\epsilon_i \sim \mathcal{N}(0, \sigma^2)$. The residual sum of squares is $\operatorname{RSS} \equiv \sum_{i=1}^n (d_i - \beta_0 - \sum_{j=1}^p \beta_j x_{ij})^2$.
Show that
1. An independent Laplace prior $p(\beta_j) = \frac{1}{2b}\exp(- \mid \beta_j \mid /b)$ leads to LASSO regression with $L_1$ penalty $\frac{2\sigma^2}{b} \sum_{j=1}^p \lvert \beta_j\rvert$.
2. An independent Gaussian prior $p(\beta_j) = \mathcal{N}(0, c)$ leads to Ridge regression with $L_2$ penalty $\frac{\sigma^2}{c} \sum_{j=1}^p \beta_j^2$.

### Analytical Solution
The log-likelihood for $n$ independent Gaussian measurements is

$$\ln \mathcal{L}(\boldsymbol{\beta}) = -\frac{n}{2}\ln(2\pi\sigma^2) - \frac{1}{2\sigma^2} \operatorname{RSS}$$

The MAP estimator maximizes $\ln p(\boldsymbol{\beta} \mid \boldsymbol{d}) = \ln \mathcal{L}(\boldsymbol{\beta}) + \ln \pi(\boldsymbol{\beta})$.
Equivalently, it minimizes $-2\sigma^2 \ln p(\boldsymbol{\beta} \mid \boldsymbol{d}) = \operatorname{RSS} - 2\sigma^2 \ln \pi(\boldsymbol{\beta})$.

Part (a) Laplace Prior (LASSO).
The joint prior is $\pi(\boldsymbol{\beta}) = \prod_{j=1}^p \frac{1}{2b} \exp\left( -\frac{\lvert \beta_j\rvert}{b} \right)$.
Taking the natural logarithm

$$\ln \pi(\boldsymbol{\beta}) = -p \ln(2b) - \frac{1}{b} \sum_{j=1}^p \lvert \beta_j\rvert$$

Substitute into the objective function

$$-2\sigma^2 \ln p(\boldsymbol{\beta} \mid \boldsymbol{d}) = \operatorname{RSS} - 2\sigma^2 \left[ -p\ln(2b) - \frac{1}{b}\sum_{j=1}^p \lvert \beta_j\rvert \right] = \operatorname{RSS} + \frac{2\sigma^2}{b} \sum_{j=1}^p \lvert \beta_j\rvert + \text{const}$$

Minimizing this expression proves that

$$\hat{\boldsymbol{\beta}}_{\text{MAP}} = \operatorname{argmin}_{\boldsymbol{\beta}} \left[ \operatorname{RSS} + \frac{2\sigma^2}{b} \sum_{j=1}^p \lvert \beta_j\rvert \right]$$

Part (b) Gaussian Prior (Ridge).
The joint prior is $\pi(\boldsymbol{\beta}) = \prod_{j=1}^p \frac{1}{\sqrt{2\pi c}} \exp\left( -\frac{\beta_j^2}{2c} \right)$.
Taking the natural logarithm

$$\ln \pi(\boldsymbol{\beta}) = -\frac{p}{2}\ln(2\pi c) - \frac{1}{2c} \sum_{j=1}^p \beta_j^2$$

Substitute into the objective function

$$-2\sigma^2 \ln p(\boldsymbol{\beta} \mid \boldsymbol{d}) = \operatorname{RSS} - 2\sigma^2 \left[ -\frac{p}{2}\ln(2\pi c) - \frac{1}{2c} \sum_{j=1}^p \beta_j^2 \right] = \operatorname{RSS} + \frac{\sigma^2}{c} \sum_{j=1}^p \beta_j^2 + \text{const}$$

Minimizing this expression proves that

$$\hat{\boldsymbol{\beta}}_{\text{MAP}} = \operatorname{argmin}_{\boldsymbol{\beta}} \left[ \operatorname{RSS} + \frac{\sigma^2}{c} \sum_{j=1}^p \beta_j^2 \right]$$

---

## Problem 11. Analytical Marginalization over an Amplitude Parameter

### Statement
Consider the likelihood $\mathcal{L}(\Theta, \boldsymbol{x}) = \frac{1}{(2\pi)^{N/2} \sqrt{\det \boldsymbol{C}}} \exp\left( -\frac{1}{2}(\boldsymbol{x} - A\bar{\boldsymbol{x}})^T \boldsymbol{C}^{-1} (\boldsymbol{x} - A\bar{\boldsymbol{x}}) \right)$, where $\bar{\boldsymbol{x}}(\Theta)$ is the theoretical expectation with amplitude set to $A = 1$.
Marginalize over $A$ assuming an improper uniform prior $p(A) = 1$.

### Analytical Solution
The marginalized likelihood is

$$\mathcal{L}_{\text{marg}}(\Theta, \boldsymbol{x}) = \int_{-\infty}^\infty \mathcal{L}(\Theta, \boldsymbol{x}) \, dA = \frac{1}{(2\pi)^{N/2} \sqrt{\det \boldsymbol{C}}} \int_{-\infty}^\infty \exp\left( -\frac{1}{2} Q(A) \right) dA$$

Expand the quadratic form $Q(A)$ in powers of $A$

$$Q(A) = (\boldsymbol{x} - A\bar{\boldsymbol{x}})^T \boldsymbol{C}^{-1} (\boldsymbol{x} - A\bar{\boldsymbol{x}}) = A^2 (\bar{\boldsymbol{x}}^T \boldsymbol{C}^{-1} \bar{\boldsymbol{x}}) - 2A (\bar{\boldsymbol{x}}^T \boldsymbol{C}^{-1} \boldsymbol{x}) + \boldsymbol{x}^T \boldsymbol{C}^{-1} \boldsymbol{x}$$

Define scalar coefficients $\alpha \equiv \bar{\boldsymbol{x}}^T \boldsymbol{C}^{-1} \bar{\boldsymbol{x}}$ and $\beta \equiv \bar{\boldsymbol{x}}^T \boldsymbol{C}^{-1} \boldsymbol{x}$.
Complete the square in $A$

$$Q(A) = \alpha \left( A - \frac{\beta}{\alpha} \right)^2 + \boldsymbol{x}^T \boldsymbol{C}^{-1} \boldsymbol{x} - \frac{\beta^2}{\alpha}$$

The integral over $A$ is a standard 1D Gaussian integral

$$\int_{-\infty}^\infty \exp\left( -\frac{\alpha}{2} \left( A - \frac{\beta}{\alpha} \right)^2 \right) dA = \sqrt{\frac{2\pi}{\alpha}} = \sqrt{\frac{2\pi}{\bar{\boldsymbol{x}}^T \boldsymbol{C}^{-1} \bar{\boldsymbol{x}}}}$$

Multiplying by the remaining exponential factor and prefactors

$$\mathcal{L}_{\text{marg}}(\Theta, \boldsymbol{x}) = \frac{1}{(2\pi)^{(N-1)/2} \sqrt{\det \boldsymbol{C} \cdot (\bar{\boldsymbol{x}}^T \boldsymbol{C}^{-1} \bar{\boldsymbol{x}})}} \exp\left( -\frac{1}{2} \left[ \boldsymbol{x}^T \boldsymbol{C}^{-1} \boldsymbol{x} - \frac{(\bar{\boldsymbol{x}}^T \boldsymbol{C}^{-1} \boldsymbol{x})^2}{\bar{\boldsymbol{x}}^T \boldsymbol{C}^{-1} \bar{\boldsymbol{x}}} \right] \right)$$

This exact analytic marginalization is used in cosmic microwave background and gravitational wave analyses to eliminate unknown absolute calibration factors.

---

## Problem 12. Bayesian Spectral Analysis and the Lomb-Scargle Periodogram

### Statement
You observe an evenly spaced time series $D = \{d_1, \dots, d_N\}$ at times $t_i$ ($t_{i+1} - t_i = \Delta$).
Model $d_i = B_1 \cos(\omega t_i) + B_2 \sin(\omega t_i) + n_i$, with independent Gaussian noise $n_i \sim \mathcal{N}(0, \sigma^2)$.
1. Show that the likelihood can be written as $\mathcal{L} \propto \exp\left( -\frac{Q}{2\sigma^2} \right)$ with $Q = N \overline{d^2} - 2[B_1 R(\omega) + B_2 I(\omega)] + B_1^2 c + B_2^2 s$.
2. Show that $s$ and $c$ are well approximated as $\omega$-independent constants in the high-frequency limit.
3. Marginalize over amplitudes $B_1, B_2$ under uniform priors to find the marginalized posterior $P(\omega \mid D)$.
4. Show that the MAP estimate of $\omega$ maximizes the discrete Fourier power spectrum (periodogram) $C(\omega) = \frac{2}{N} \lvert \sum_k d_k e^{-i\omega t_k}\rvert^2$.

### Analytical Solution

Part 1. Derivation of Quadratic Form $Q$.
Because noise is independent Gaussian, the likelihood is

$$\mathcal{L} = (2\pi\sigma^2)^{-N/2} \exp\left( -\frac{1}{2\sigma^2} \sum_{i=1}^N [d_i - B_1 \cos(\omega t_i) - B_2 \sin(\omega t_i)]^2 \right)$$

Expanding the squared bracket

$$\sum_{i=1}^N \left[ d_i^2 - 2 d_i (B_1 \cos\omega t_i + B_2 \sin\omega t_i) + B_1^2 \cos^2\omega t_i + B_2^2 \sin^2\omega t_i + 2 B_1 B_2 \cos\omega t_i \sin\omega t_i \right]$$

Define
- $N \overline{d^2} \equiv \sum_{i=1}^N d_i^2$
- $R(\omega) \equiv \sum_{i=1}^N d_i \cos(\omega t_i)$
- $I(\omega) \equiv \sum_{i=1}^N d_i \sin(\omega t_i)$
- $c \equiv \sum_{i=1}^N \cos^2(\omega t_i)$
- $s \equiv \sum_{i=1}^N \sin^2(\omega t_i)$
- Cross-term $\sum_{i=1}^N \cos(\omega t_i)\sin(\omega t_i) = \frac{1}{2} \sum_{i=1}^N \sin(2\omega t_i)$.

In the high-frequency limit ($\omega \gg 2\pi / (N\Delta)$), the sinusoidal oscillations oscillate rapidly across the observation window, causing the cross-term sum to average to zero.
This yields the desired expression

$$Q = N \overline{d^2} - 2 [B_1 R(\omega) + B_2 I(\omega)] + B_1^2 c + B_2^2 s$$

Part 2. Constancy of $c$ and $s$.
Using trigonometric identities $\cos^2\theta = \frac{1 + \cos 2\theta}{2}$ and $\sin^2\theta = \frac{1 - \cos 2\theta}{2}$

$$c = \sum_{i=1}^N \left( \frac{1 + \cos(2\omega t_i)}{2} \right) = \frac{N}{2} + \frac{1}{2} \sum_{i=1}^N \cos(2\omega t_i)$$

$$s = \sum_{i=1}^N \left( \frac{1 - \cos(2\omega t_i)}{2} \right) = \frac{N}{2} - \frac{1}{2} \sum_{i=1}^N \cos(2\omega t_i)$$

For $N \gg 1$ and high frequency, the sum $\sum_{i=1}^N \cos(2\omega t_i)$ is bounded by $\mathcal{O}(1/\sin(\omega\Delta))$, which is negligible compared to $N$.
Therefore, to leading order

$$c \approx \frac{N}{2} \qquad \text{and} \qquad s \approx \frac{N}{2}$$

Both are $\omega$-independent constants.

Part 3. Marginalization over Amplitudes $B_1$ and $B_2$.
Assuming uniform priors $\pi(B_1, B_2, \omega) \propto \pi(\omega)$, the marginalized posterior for $\omega$ is

$$p(\omega \mid D) \propto \pi(\omega) \int_{-\infty}^\infty dB_1 \int_{-\infty}^\infty dB_2 \exp\left( -\frac{Q}{2\sigma^2} \right)$$

Because the cross-term vanished, the double integral factorizes into two decoupled Gaussian integrals

$$\int_{-\infty}^\infty \exp\left( -\frac{c B_1^2 - 2 B_1 R(\omega)}{2\sigma^2} \right) dB_1 = \sqrt{\frac{2\pi\sigma^2}{c}} \exp\left( \frac{R^2(\omega)}{2\sigma^2 c} \right)$$

$$\int_{-\infty}^\infty \exp\left( -\frac{s B_2^2 - 2 B_2 I(\omega)}{2\sigma^2} \right) dB_2 = \sqrt{\frac{2\pi\sigma^2}{s}} \exp\left( \frac{I^2(\omega)}{2\sigma^2 s} \right)$$

Combining terms and noting that $\exp\left(-\frac{N\overline{d^2}}{2\sigma^2}\right)$ is independent of $\omega$

$$p(\omega \mid D) \propto \frac{1}{\sqrt{c s}} \exp\left( \frac{\frac{R^2(\omega)}{c} + \frac{I^2(\omega)}{s}}{2\sigma^2} \right)$$

Part 4. Connection to Discrete Fourier Transform and Periodogram.
Substitute $c \approx s \approx N/2$ into the exponent

$$\frac{R^2(\omega)}{c} + \frac{I^2(\omega)}{s} \approx \frac{R^2(\omega) + I^2(\omega)}{N/2} = \frac{2}{N} \left[ R^2(\omega) + I^2(\omega) \right]$$

Now write down the complex Discrete Fourier Transform of the dataset

$$\sum_{k=1}^N d_k \exp(-i \omega t_k) = \sum_{k=1}^N d_k \cos(\omega t_k) - i \sum_{k=1}^N d_k \sin(\omega t_k) = R(\omega) - i I(\omega)$$

The modulus squared is

$$\left\lvert \sum_{k=1}^N d_k \exp(-i \omega t_k) \right\rvert^2 = R^2(\omega) + I^2(\omega)$$

Therefore, the periodogram $C(\omega)$ is identically

$$C(\omega) \equiv \frac{2}{N} \left\lvert \sum_{k=1}^N d_k \exp(-i \omega t_k) \right\rvert^2 = \frac{R^2(\omega)}{c} + \frac{I^2(\omega)}{s}$$

The marginalized posterior for $\omega$ simplifies to

$$p(\omega \mid D) \propto \exp\left( \frac{C(\omega)}{2\sigma^2} \right)$$

Because the exponential is a strictly monotonically increasing function, the Maximum A Posteriori (MAP) estimate of the frequency $\hat{\omega}$ corresponds precisely to the frequency that maximizes the Schuster periodogram / power spectral density $C(\omega)$.

Summary of assumptions
1. Stationary sinusoidal signal with single dominant frequency.
2. Additive, stationary, uncorrelated Gaussian noise of known variance $\sigma^2$.
3. Uniform uninformative priors on amplitudes $B_1, B_2$ and frequency $\omega$.
4. High-frequency regime ($\omega \gg 2\pi / T_{\text{total}}$) and dense sampling, ensuring cross-terms vanish and $s \approx c \approx N/2$.

Condition for equivalence to least squares fitting
The MAP frequency coincides with standard least squares fitting whenever the noise is Gaussian, uncorrelated, and homoscedastic, and the amplitudes are linear parameters.

---

## Conceptual Connections

- [[Astro-Statistics_and_Cosmology_MOC]] - Master syllabus map of content
- [[01_Plausible_Reasoning_Cox_Theorem_and_Bayesian_Foundations]] - Foundational rules for Problems 1, 2, and 3
- [[03_Multivariate_Gaussians_Marginalization_Conditioning_and_Linear_Models]] - Theory for Problems 4, 5, 6, 7, 8, and 9
- [[05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics]] - MCMC sampling implementations for Problem 7
- [[10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy]] - Regularization priors for Problem 10



## Linked References

- [[Astro-Statistics_and_Cosmology_MOC]]


