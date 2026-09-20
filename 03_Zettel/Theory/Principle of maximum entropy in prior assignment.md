---
layout: "default"
title: "Principle of maximum entropy in prior assignment"
---
# Principle of maximum entropy in prior assignment

The Principle of Maximum Entropy (MaxEnt), formulated by Edwin T. Jaynes (1957), provides a mathematically constructive foundation for prior assignment when partial information is available in the form of expected values or testable constraints. It states that the probability distribution that best represents the current state of knowledge is the one with the largest information entropy.

## Information Entropy

For a continuous parameter space $\theta$ with base measure $m(\theta)$, the Shannon-Jaynes information entropy is:
$$S[p] = -\int p(\theta) \ln\left( \frac{p(\theta)}{m(\theta)} \right) d\theta$$

Maximizing entropy maximizes missing information, ensuring that the assigned prior makes no unstated, arbitrary assumptions beyond the specified constraints.

## Mathematical Derivation via Lagrange Multipliers

Suppose our knowledge consists of $M$ expectation values of physical functions $f_k(\theta)$:
$$\mathbb{E}[f_k(\theta)] = \int f_k(\theta) p(\theta) \, d\theta = C_k, \quad k = 1, \dots, M$$
along with the normalization condition $\int p(\theta) \, d\theta = 1$.

We construct the Lagrangian:
$$\mathcal{L}[p] = -\int p(\theta) \ln p(\theta) \, d\theta - \lambda_0 \left( \int p(\theta) \, d\theta - 1 \right) - \sum_{k=1}^M \lambda_k \left( \int f_k(\theta) p(\theta) \, d\theta - C_k \right)$$

Taking the functional derivative with respect to $p(\theta)$ and setting it to zero:
$$\frac{\delta \mathcal{L}}{\delta p(\theta)} = -\ln p(\theta) - 1 - \lambda_0 - \sum_{k=1}^M \lambda_k f_k(\theta) = 0$$

Solving for the optimal probability distribution:
$$p^*(\theta) = \frac{1}{Z} \exp\left[ -\sum_{k=1}^M \lambda_k f_k(\theta) \right]$$
where the partition function $Z$ enforces normalization:
$$Z(\lambda_1, \dots, \lambda_M) = \int \exp\left[ -\sum_{k=1}^M \lambda_k f_k(\theta) \right] d\theta$$

The Lagrange multipliers $\lambda_k$ are determined by solving the system of equations:
$$-\frac{\partial \ln Z}{\partial \lambda_k} = C_k$$

## Canonical Distributions Derived from MaxEnt

1. **No constraints on $[a, b]$** (only normalization):
$$p^*(\theta) = \frac{1}{b - a} \quad (\text{Uniform distribution})$$

2. **Known mean $\mu$ on $[0, \infty)$**:
$$p^*(x) = \frac{1}{\mu} e^{-x/\mu} \quad (\text{Exponential distribution})$$

3. **Known mean $\mu$ and variance $\sigma^2$ on $(-\infty, \infty)$**:
$$p^*(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left[ -\frac{(x-\mu)^2}{2\sigma^2} \right] \quad (\text{Gaussian distribution})$$

The Gaussian distribution is the unique maximum entropy distribution for any process with specified mean and finite variance, explaining why observational noise in astronomy is so universally Gaussian.

## See Also
- [[Astro-Statistics_and_Cosmology_MOC]]
- [[10_Prior_Assignment_Transformation_Invariance_and_Maximum_Entropy]]
- [[Transformation group invariance and Jeffreys prior]]
- [[Multivariate Gaussian conditioning and marginalization]]



## Linked References

- [[Transformation group invariance and Jeffreys prior]]
- [[Astro-Statistics_and_Cosmology_MOC]]


