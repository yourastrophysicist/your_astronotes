---
layout: default
title: "Importance sampling"
---

# Importance sampling

a variance-reduction trick for Monte Carlo integration. instead of sampling uniformly and weighting equally, sample from a distribution $g(x)$ that mimics $f(x)$ and weight by $f/g$. when $g$ is well-chosen the variance can drop by orders of magnitude.

## the math

rewrite the integral:
$$I = \int_a^b f(x) dx = \int_a^b \frac{f(x)}{g(x)} g(x) dx = \mathbb{E}_{x \sim g}\!\left[\frac{f(x)}{g(x)}\right]$$

where $g(x)$ is any non-negative function on $[a, b]$ that integrates to 1 (a normalized pdf) and is non-zero wherever $f$ is. estimate the expectation by drawing $N$ samples from $g$:

$$\hat I_{\rm IS} = \frac{1}{N} \sum_{i=1}^N \frac{f(x_i)}{g(x_i)}, \quad x_i \sim g$$

## why it reduces variance

the variance of the estimator is
$$\text{Var}(\hat I_{\rm IS}) = \frac{1}{N}\left[\int \frac{f^2(x)}{g(x)} dx - I^2\right]$$

minimized when $g \propto |f|$ (the optimal $g^*(x) = |f(x)|/\int|f|$ gives variance zero if $f \geq 0$). in practice we cannot reach the optimum (we would need to know $\int f$ to normalize $g^*$), but a $g$ that *roughly* tracks $f$ already reduces variance dramatically.

## when the variance gets *worse*

if $g$ is small where $f$ is large, the ratio $f/g$ has heavy tails, and rare large samples dominate. variance can blow up — possibly even infinite if $\int f^2/g$ diverges.

**rule of thumb**: $g$ must have at least the tail behavior of $f$, never thinner. if $f$ is Gaussian and $g$ is also Gaussian but narrower, the importance sampler is broken.

## python implementation

```python
def importance_sample(f, g_sampler, g_pdf, N):
    """f: integrand. g_sampler: returns N samples from g. g_pdf: g(x)."""
    x = g_sampler(N)
    weights = f(x) / g_pdf(x)
    return np.mean(weights), np.std(weights) / np.sqrt(N)
```

## an example: the standard MC vs IS comparison

integrate $f(x) = e^{-x^2/2}$ over $[0, 5]$.

- **uniform MC** on $[0, 5]$: most samples land in regions where $f$ is tiny (e.g. $x = 4$, where $f \approx 3 \times 10^{-4}$). variance of $f$ over the uniform distribution is large
- **importance sampling** with $g(x) \propto e^{-x^2/2}$ on $[0, 5]$ (truncated Gaussian): every sample lands where $f$ matters. $f/g$ is constant, variance is zero

the speedup factor is the ratio of variances, often $10^2$ to $10^4$ in practical problems.

## astrophysics use cases

- **rare event simulations**: simulating mergers in dense star clusters, where the merger channel is statistically rare. sample the merger channel preferentially, weight back
- **importance-weighted Bayesian inference**: when a posterior is concentrated in a small region of parameter space, sample from the prior weighted by the likelihood (IS = posterior weighting)
- **direct detection rate integrals**: dark matter cross sections involve integrals over the velocity distribution where the high-velocity tail dominates
- **radiative transfer Monte Carlo**: sample photons preferentially from the regions and directions that matter for the observed spectrum

## connection to other sampling methods

- **inverse transform sampling** is importance sampling with $g = f$ exactly, so weights are 1. this is what we do whenever we can invert the CDF
- **rejection sampling** uses an envelope $M g(x) \geq f(x)$ and accepts/rejects. importance sampling weights instead. neither dominates the other; rejection has a sharper probabilistic interpretation, IS has a smoother estimator
- **Markov-chain Monte Carlo (MCMC)** is sequential importance sampling, where the proposal $g$ at step $i$ depends on the position at step $i-1$

## the "effective sample size" diagnostic

after IS, not all weighted samples are equally informative. the effective sample size is

$$N_{\rm eff} = \frac{(\sum w_i)^2}{\sum w_i^2}$$

if a few samples dominate the weights, $N_{\rm eff} \ll N$ and the estimator has effectively used few samples. always check $N_{\rm eff}/N$; if it is < 0.1, the choice of $g$ is bad.

## see also

- [Monte Carlo integration mean value method](../../02_Zettel/Theory/Monte Carlo integration mean value method.html)
- [Inverse transform sampling](../../02_Zettel/Theory/Inverse transform sampling.html)
- [Rejection sampling](../../02_Zettel/Theory/Rejection sampling.html)
- [Multidimensional Monte Carlo integration](../../02_Zettel/Theory/Multidimensional Monte Carlo integration.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
