---
layout: default
title: "Multidimensional Monte Carlo integration"
---

# Multidimensional Monte Carlo integration

the formula for [mean-value MC](../../02_Zettel/Theory/Monte Carlo integration mean value method.md) generalizes from 1D to any number of dimensions with no change of structure. and crucially, **the convergence rate stays $1/\sqrt{N}$ regardless of dimension**, which is what makes Monte Carlo dominate over deterministic quadrature in high dimensions.

## the formula

for an integral over a $d$-dimensional volume $V$:

$$\int_V f(\mathbf{x}) \, d\mathbf{x} = V \cdot \langle f \rangle = V \cdot \frac{1}{N}\sum_{i=1}^N f(\mathbf{x}_i)$$

with $\mathbf{x}_i$ drawn uniformly from $V$. the error is $V \sigma_f/\sqrt{N}$.

## the dimension-curse breaker

deterministic quadrature with $N$ samples has error scaling as $N^{-p/d}$ for a $p$-th-order rule in $d$ dimensions. so:

- 1D trapezoid ($p = 2$): error $\sim N^{-2}$
- 1D Simpson ($p = 4$): error $\sim N^{-4}$
- 4D trapezoid: error $\sim N^{-1/2}$ — same as MC
- 10D trapezoid: error $\sim N^{-1/5}$ — way worse than MC

so **for $d \geq 4$, Monte Carlo wins** (assuming the integrand has finite variance).

## python implementation

```python
def mc_integrate_box(f, low, high, N, rng=None):
    """f: takes (N, d) array, returns (N,) values. low, high: arrays of length d."""
    rng = rng or np.random.default_rng()
    d = len(low)
    x = rng.uniform(low, high, size=(N, d))
    V = np.prod(np.array(high) - np.array(low))
    f_vals = f(x)
    return V * f_vals.mean(), V * f_vals.std() / np.sqrt(N)
```

example: integrate $\int_0^1 \int_0^1 \int_0^1 \int_0^1 \sin(\pi(x_1 + x_2 + x_3 + x_4)) \, d^4x$:

```python
def f(x):
    return np.sin(np.pi * x.sum(axis=1))

I, err = mc_integrate_box(f, [0, 0, 0, 0], [1, 1, 1, 1], N=10**6)
```

## non-rectangular domains

if the integration region is not a box, embed it in a bounding box and use the **indicator function**:

$$\int_V f \, d\mathbf{x} = \int_{\text{box}} f(\mathbf{x}) \mathbb{1}_{V}(\mathbf{x}) \, d\mathbf{x}$$

then MC samples over the box and zeros out the points outside $V$. equivalent: rejection-sample uniform points from $V$, then average $f$.

efficiency drops by the volume ratio $V / V_{\rm box}$. for a sphere in a 10D box, the volume ratio is tiny (~$10^{-4}$), wasting most samples — switch to importance sampling.

## the curse of dimensionality, finally

for $d = 100$ (a typical Bayesian posterior), the integration volume is a 100D ball. uniform sampling places almost all density in the *corners* of the bounding box, almost none in the regions where $f$ is large. the variance $\sigma_f^2$ is enormous, and even though the convergence rate is $N^{-1/2}$, the *constant* is huge.

this is why pure uniform Monte Carlo is rarely used in serious research for $d > 10$. instead:

- **importance sampling**: weight by a $g(\mathbf{x})$ that mimics $f$
- **Markov Chain Monte Carlo (MCMC)**: walk through the high-density regions
- **nested sampling**: sample shells of equal "likelihood"
- **variational inference**: replace integration with optimization

these are the workhorses of cosmological parameter inference.

## stratified sampling

partition $V$ into $K$ sub-regions, sample $N/K$ points from each, sum. variance reduces by a factor of $K$ compared to uniform sampling, *if* the variance within sub-regions is smaller than overall.

most useful when $f$ is much smoother within each sub-region than across them.

## quasi-Monte Carlo

instead of *random* uniform samples, use a low-discrepancy sequence (Sobol, Halton, Faure). these are deterministic but cover the volume more uniformly than random samples. error scaling: $O(N^{-1} \log^d N)$ — strictly better than MC for moderate $d$.

scipy has `scipy.stats.qmc` for low-discrepancy sampling.

## astrophysics applications

- **Bayesian likelihood marginalization** over nuisance parameters
- **integrals over phase space**: cross sections, rate coefficients
- **integration over the CMB sky** for stacking analyses
- **dust grain dynamics** in turbulent flows: many free parameters
- **N-body parameter studies**: sweeping over initial conditions

## see also

- [Monte Carlo integration mean value method](../../02_Zettel/Theory/Monte Carlo integration mean value method.md)
- [Importance sampling](../../02_Zettel/Theory/Importance sampling.md)
- [Pseudo-random number generators](../../02_Zettel/Theory/Pseudo-random number generators.md)
- [Trapezoidal rule](../../02_Zettel/Theory/Trapezoidal rule.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
