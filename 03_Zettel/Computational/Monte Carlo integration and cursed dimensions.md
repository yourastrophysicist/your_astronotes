---
layout: "default"
title: "Monte Carlo integration and cursed dimensions"
---
{% raw %}
# Monte Carlo integration and cursed dimensions

Numerical integration of high-dimensional probability densities is the computational bottleneck of Bayesian inference in cosmology. Standard deterministic quadrature grids collapse due to the curse of dimensionality, making Monte Carlo methods mandatory.

## The Curse of Dimensionality in Numerical Quadrature

Consider evaluating an integral over a $D$-dimensional hypercube $[0, 1]^D$:
$$I = \int_{[0, 1]^D} f(x) \, d^D x$$

Using a deterministic 1D grid rule (such as Simpson's or Gauss-Legendre quadrature) with $n$ points per coordinate axis requires $N = n^D$ total evaluations:
- In $D = 1$: $n = 10 \implies N = 10$ points.
- In $D = 6$ ($\Lambda\text{CDM}$ baseline): $n = 10 \implies N = 10^6$ points.
- In $D = 20$ (systematics, nuisance parameters, dark energy): $n = 10 \implies N = 10^{20}$ points (uncomputable).

The deterministic error scaling in $D$ dimensions for an integration rule of order $r$ decays as:
$$\text{Error}_{\rm Det} \propto N^{-r/D}$$

As dimension $D$ increases, convergence grinds to a complete halt.

## Monte Carlo Integration

Monte Carlo integration replaces deterministic grids with independent and identically distributed random samples drawn from a sampling density $p(x)$:
$$I = \int f(x) \, dx = \int \frac{f(x)}{p(x)} p(x) \, dx = \mathbb{E}_p\left[ \frac{f(X)}{p(X)} \right]$$

The Monte Carlo estimator $\hat{I}_N$ from $N$ samples $x_1, \dots, x_N \sim p(x)$ is:
$$\hat{I}_N = \frac{1}{N} \sum_{i=1}^N \frac{f(x_i)}{p(x_i)}$$

### Error Convergence and Dimensional Immunity
By the Central Limit Theorem:
$$\hat{I}_N \xrightarrow{d} \mathcal{N}\left( I, \frac{\sigma_f^2}{N} \right)$$
$$\text{Error}_{\rm MC} = \frac{\sigma_f}{\sqrt{N}} \propto N^{-1/2}$$

Crucially, the convergence rate $N^{-1/2}$ is completely independent of the dimension $D$.

## Importance Sampling and Variance Reduction

The sample variance $\sigma_f^2 = \text{Var}_p[f(X)/p(X)]$ determines the precision. The optimal sampling density $p^*(x)$ that minimizes variance to zero is:
$$p^*(x) = \frac{\lvert f(x)\rvert}{\int \lvert f(x')\rvert \, dx'}$$

Importance sampling chooses an analytical proposal $q(x)$ that closely matches the shape and tails of $\lvert f(x)\rvert$, concentrating samples where the integrand has support and dramatically reducing the variance of cosmological observables.

## See Also
- [Astro-Statistics_and_Cosmology_MOC](../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html)
- [05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics](../../02_Literature/Lectures/Astrostatistics/05_Monte_Carlo_Metropolis_Hastings_and_MCMC_Convergence_Diagnostics.html)
- [Metropolis-Hastings algorithm and detailed balance](../Theory/Metropolis-Hastings%20algorithm%20and%20detailed%20balance.html)
- [Parallel computing architectures and Amdahl scaling laws](./Parallel%20computing%20architectures%20and%20Amdahl%20scaling%20laws.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
  </ul>
</div>
