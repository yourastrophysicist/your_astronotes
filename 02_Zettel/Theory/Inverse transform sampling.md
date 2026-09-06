---
layout: default
title: "Inverse transform sampling"
---

# Inverse transform sampling

the textbook way to draw samples from a distribution $P(x)$ given uniform random numbers and an invertible CDF. it is exact (not approximate, no rejection), and it is what `np.random.exponential`, `np.random.uniform`, and many other built-ins do under the hood.

## the math

let $P(x)$ be a normalized pdf on $[a, b]$ and $F(x) = \int_a^x P(x') dx'$ its CDF. then $F: [a, b] \to [0, 1]$ is monotonically increasing. its inverse $F^{-1}: [0, 1] \to [a, b]$ is well-defined.

**theorem**: if $u \sim U(0, 1)$ then $x = F^{-1}(u)$ has pdf $P$.

**proof**: $\Pr(x \leq x_0) = \Pr(F^{-1}(u) \leq x_0) = \Pr(u \leq F(x_0)) = F(x_0)$, by monotonicity of $F$ and uniformity of $u$. so $x$ has CDF $F$, hence pdf $P$. $\square$

## the recipe

1. write down the pdf $P(x)$ on its domain $[a, b]$, normalized: $\int_a^b P(x)\,dx = 1$
2. compute the CDF $F(x) = \int_a^x P(x') dx'$
3. invert: solve $u = F(x)$ for $x$ as a function of $u$
4. draw $u_i \sim U(0, 1)$ and compute $x_i = F^{-1}(u_i)$

## the standard examples

### exponential

$P(x) = \lambda e^{-\lambda x}$ on $[0, \infty)$.
$F(x) = 1 - e^{-\lambda x}$.
$F^{-1}(u) = -\ln(1 - u)/\lambda$.

so:
```python
x = -np.log(1 - np.random.uniform(size=N)) / lam
# equivalently (since 1 - u is also U(0,1)):
x = -np.log(np.random.uniform(size=N)) / lam
```

### power law $P(x) \propto x^\alpha$ on $[a, b]$

normalization: $C = (\alpha + 1)/(b^{\alpha+1} - a^{\alpha+1})$ (assuming $\alpha \neq -1$).
CDF: $F(x) = (x^{\alpha+1} - a^{\alpha+1})/(b^{\alpha+1} - a^{\alpha+1})$.
inverse: $x = [u(b^{\alpha+1} - a^{\alpha+1}) + a^{\alpha+1}]^{1/(\alpha+1)}$.

for $\alpha = -1$ (i.e. $P(x) \propto 1/x$): $F(x) = \ln(x/a)/\ln(b/a)$, $x = a (b/a)^u$.

this is the **exam template's exercise 2** — $P(s) = C/s$ on $[1\,\rm AU, 1000\,\rm AU]$:
```python
a, b = 1, 1000      # in AU
u = np.random.uniform(size=N)
s = a * (b / a) ** u
```

### Gaussian — the trick

the Gaussian CDF $\Phi(x) = \tfrac12 [1 + \text{erf}(x/\sqrt 2)]$ is not analytically invertible. workaround: use the **Box-Muller transform** instead, which gives two normals from two uniforms via polar trigonometry. see [Box-Muller transform for Gaussian random numbers](../../02_Zettel/Theory/Box-Muller transform for Gaussian random numbers.html).

## general algorithm when CDF is not analytic

if the CDF cannot be inverted analytically:

1. **tabulate**: precompute $F$ on a grid of $x$ values, store $(x_i, F_i)$ as a lookup table
2. **invert by interpolation**: given $u$, find the bracket $F_i \leq u < F_{i+1}$ and linearly interpolate between $x_i$ and $x_{i+1}$

this is a few lines of numpy:

```python
def inverse_sample_tabulated(P, a, b, N_samples, N_grid=10000):
    x_grid = np.linspace(a, b, N_grid)
    pdf = P(x_grid)
    cdf = np.cumsum(pdf) * (b - a) / N_grid
    cdf /= cdf[-1]                           # normalize
    u = np.random.uniform(size=N_samples)
    # invert by interpolation
    return np.interp(u, cdf, x_grid)
```

## verification

after sampling, *always* histogram the samples and overplot the analytic $P(x)$:

```python
samples = inverse_sample(N=10000)
plt.hist(samples, bins=50, density=True, alpha=0.5, label='samples')
xx = np.linspace(a, b, 200)
plt.plot(xx, P(xx), 'r-', label='P(x)')
plt.legend()
```

this is the "did I sample correctly" plot that every exam exercise expects.

## limitations

- **CDF must be invertible** — analytically or via lookup
- **only one variable at a time** — for multivariate distributions, use the conditional / joint factorization, or rejection, or MCMC
- **heavy-tailed distributions** can have numerical trouble: $1 - u$ near 1 has cancellation, use `np.random.uniform()` and apply $-\log$ directly

## scipy production

`scipy.stats.rv_continuous` lets me define an arbitrary continuous distribution and draws from it via the inverse CDF (numerical if not analytic):

```python
from scipy.stats import expon
samples = expon.rvs(scale=1/lam, size=N)
```

## astrophysics applications

- **stellar IMF sampling**: the Salpeter IMF $P(m) \propto m^{-2.35}$ on $[0.1, 100] M_\odot$ is the classic textbook power-law sampling
- **binary orbital periods**: $P(s) \propto 1/s$ (Öpik / Duquennoy & Mayor) — exam template
- **Compton-scattered photon energy**: distribution involves a non-trivial CDF, often tabulated
- **cosmological volumes**: sampling redshifts uniformly in comoving volume, $P(z) \propto dV/dz$
- **ray-tracing through media**: sampling free path lengths from $e^{-\tau}$ distributions

## see also

- [Pseudo-random number generators](../../02_Zettel/Theory/Pseudo-random number generators.html)
- [Box-Muller transform for Gaussian random numbers](../../02_Zettel/Theory/Box-Muller transform for Gaussian random numbers.html)
- [Rejection sampling](../../02_Zettel/Theory/Rejection sampling.html)
- [Importance sampling](../../02_Zettel/Theory/Importance sampling.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
