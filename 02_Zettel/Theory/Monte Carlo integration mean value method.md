---
layout: default
title: "Monte Carlo integration mean value method"
---

# Monte Carlo integration, mean value method

a randomized algorithm for $\int_a^b f(x) dx$ that does not need a smooth integrand and does not slow down with dimension. the central tool for high-dimensional or noisy integration in astrophysics.

## the idea

the integral
$$I = \int_a^b f(x)\,dx$$
is the average value of $f$ on $[a, b]$ times the interval length. so:

$$I = (b - a) \cdot \langle f \rangle$$

estimate $\langle f \rangle$ by sampling $f$ at $N$ random points $x_1, \ldots, x_N$ drawn uniformly on $[a, b]$:

$$\hat I = (b - a) \cdot \frac{1}{N} \sum_{i=1}^N f(x_i)$$

this is the **mean value Monte Carlo estimator**.

## error and convergence

by the central limit theorem, the variance of the estimator is

$$\text{Var}(\hat I) = \frac{(b - a)^2 \sigma_f^2}{N}$$

where $\sigma_f^2 = \langle f^2 \rangle - \langle f \rangle^2$ is the variance of $f$ over the integration region. so

$$\text{error} \sim (b - a) \cdot \frac{\sigma_f}{\sqrt N}$$

**convergence is $1/\sqrt{N}$** regardless of the smoothness of $f$ and **regardless of the dimension** of the integration domain. this is the key property that makes MC indispensable.

## comparison with trapezoidal

| method | error scaling |
|---|---|
| trapezoidal (1D) | $\sim N^{-2}$ |
| Simpson (1D) | $\sim N^{-4}$ |
| Monte Carlo (any dim) | $\sim N^{-1/2}$ |

in 1D, deterministic rules win easily. in $d$ dimensions, a grid of $N$ points has only $N^{1/d}$ points per axis, so trapezoidal scales as $N^{-2/d}$. Monte Carlo *beats* trapezoidal when $-1/2 > -2/d$, i.e. when $d > 4$.

so for $d \geq 4$, MC is the right choice. for $d \leq 3$, deterministic rules win. for high-$d$ astrophysics integrals (Bayesian likelihoods, phase-space integrals), MC is essential.

## python implementation

```python
def mc_integrate(f, a, b, N, seed=None):
    rng = np.random.default_rng(seed)
    x = rng.uniform(a, b, N)
    return (b - a) * np.mean(f(x)), (b - a) * np.std(f(x)) / np.sqrt(N)

I, err = mc_integrate(lambda x: np.sin(x)*(1-x)**2, 0, np.pi, 10000)
print(f"I = {I:.4f} +/- {err:.4f}")
```

note the **error estimate is part of the output**. unlike deterministic rules, MC gives me a built-in uncertainty.

## the convergence plot (the standard exam diagnostic)

run for $N = 10^3, 10^4, 10^5, 10^6$. plot $|\hat I - I_{\rm exact}|$ vs $N$ on log-log axes. expected slope: $-1/2$.

```python
Ns = [10**i for i in range(2, 7)]
errs = [abs(mc_integrate(f, a, b, N)[0] - exact) for N in Ns]
plt.loglog(Ns, errs, 'o-')
plt.loglog(Ns, errs[0] * (Ns[0] / np.array(Ns))**0.5, 'k--', label='1/√N')
```

## variance reduction techniques

since the error is $\sim \sigma_f/\sqrt{N}$, *reducing $\sigma_f$* reduces the error without increasing $N$. four standard tricks:

1. **importance sampling**: sample from a distribution $g(x)$ that mimics $f(x)$, weight by $f/g$. see [Importance sampling](../../02_Zettel/Theory/Importance sampling.md)
2. **stratified sampling**: divide the domain into sub-regions, sample uniformly within each, combine. reduces variance when $f$ is smoother in pieces than overall
3. **control variates**: compute $\int (f - g) + \int g$ where $\int g$ is known and $f - g$ has lower variance. exam-grade trick
4. **antithetic variates**: pair $x$ with $a + b - x$, use both. exact if $f$ is linear, helpful if $f$ has odd symmetry

## the Pythagorean exam exercise

`exam_template.pdf` exercise 3: $f(x) = \sin(x)(1-x)^2$ on $[0, \pi]$, MC with $N = 10^3, 10^4, 10^5, 10^6$. asked to plot the integral as a function of $N$. expected behavior: each step of $10\times N$ reduces the error by $\sqrt{10} \approx 3.16$.

## multi-dimensional MC

the formula generalizes:
$$\int_V f(\mathbf{x}) d\mathbf{x} = V \cdot \langle f \rangle$$

with $V$ the volume of the domain and $\langle f \rangle$ averaged over uniform samples in $V$.

```python
def mc_integrate_2d(f, x_range, y_range, N):
    rng = np.random.default_rng()
    x = rng.uniform(*x_range, N)
    y = rng.uniform(*y_range, N)
    V = (x_range[1] - x_range[0]) * (y_range[1] - y_range[0])
    return V * np.mean(f(x, y))
```

## astrophysics use cases

- **likelihood marginalization**: $P(\theta_1) = \int P(\theta_1, \theta_2, \ldots) d\theta_2 \cdots$
- **transfer function integration** for radiative transfer
- **rate integrals**: $\int n_1 n_2 \langle \sigma v \rangle f_1(\mathbf{v}_1) f_2(\mathbf{v}_2) d\mathbf{v}_1 d\mathbf{v}_2$
- **phase-space integrals** for cross sections
- **importance sampling** for rare events (e.g. rare supernova progenitor channels)

## see also

- [Importance sampling](../../02_Zettel/Theory/Importance sampling.md)
- [Multidimensional Monte Carlo integration](../../02_Zettel/Theory/Multidimensional Monte Carlo integration.md)
- [Trapezoidal rule](../../02_Zettel/Theory/Trapezoidal rule.md)
- [Pseudo-random number generators](../../02_Zettel/Theory/Pseudo-random number generators.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
