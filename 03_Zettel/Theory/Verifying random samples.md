---
layout: "default"
title: "Verifying random samples"
---
# Verifying random samples

after generating $N$ samples from a putative distribution $P(x)$, **always verify** that they actually follow $P$. the verification has saved me countless wrong-answer bugs (off-by-one in the CDF, wrong normalization, missing log scale).

## the canonical plot: histogram + analytic curve

```python
samples = my_sampler(N=10000)
plt.hist(samples, bins=50, density=True, alpha=0.5, label='samples')

xx = np.linspace(samples.min(), samples.max(), 300)
plt.plot(xx, P(xx), 'r-', linewidth=2, label='P(x)')
plt.legend()
```

`density=True` normalizes the histogram to a pdf, so it is directly comparable with $P$. the two curves should overlap; if they do not, either the sampler or $P$ is wrong.

for distributions on $[0, \infty)$ with heavy tails, use a **log-spaced histogram and log axes**:

```python
plt.hist(samples, bins=np.logspace(np.log10(a), np.log10(b), 50), density=True)
plt.xscale('log'); plt.yscale('log')
```

## the Q-Q plot (quantile-quantile)

even better than histograms for catching tail discrepancies. plot the sample quantiles against the theoretical quantiles:

```python
from scipy import stats

stats.probplot(samples, dist='norm', plot=plt)
```

a perfect match falls on the diagonal. systematic deviations indicate distribution mismatch.

for arbitrary $P$:

```python
emp_q = np.sort(samples)
theo_q = np.array([scipy.stats.distribution.ppf((i + 0.5)/N) for i in range(N)])
plt.plot(theo_q, emp_q, '.')
plt.plot([min, max], [min, max], 'k-')
```

## the Kolmogorov-Smirnov test

a quantitative answer to "are these samples consistent with $P$?":

```python
from scipy import stats

D, p_value = stats.kstest(samples, 'norm')        # for a Gaussian test
# or
D, p_value = stats.kstest(samples, lambda x: my_cdf(x))   # custom CDF
```

$D$ is the maximum vertical distance between the empirical CDF and the theoretical CDF. small $D$ (or large $p$-value) = good fit. typical thresholds:

- $p > 0.05$: cannot reject the hypothesis that samples come from $P$
- $p < 0.01$: significant evidence the samples do *not* come from $P$

## checking moments

cheap and easy: compute the mean and variance of the samples and compare to the analytic moments of $P$:

```python
print(f"sample mean: {np.mean(samples):.4f}, expected: {expected_mean:.4f}")
print(f"sample std:  {np.std(samples):.4f}, expected: {expected_std:.4f}")
```

if the mean is off, the distribution is wrong (or my "expected" formula is wrong). if the variance is off, similarly. these are cheap sanity checks that often catch off-by-one errors.

higher moments (skewness, kurtosis) are more sensitive to tail behavior:

```python
print(f"sample skew: {scipy.stats.skew(samples):.4f}")
print(f"sample kurt: {scipy.stats.kurtosis(samples):.4f}")
```

## the bin choice

histogram comparison is sensitive to bin choice. rules of thumb:

- **Sturges**: $K = 1 + \log_2 N$ bins. conservative
- **Scott**: $h = 3.5 \sigma N^{-1/3}$ bin width
- **Freedman-Diaconis**: $h = 2\, \text{IQR}\, N^{-1/3}$. robust to outliers

numpy: `np.histogram(samples, bins='auto')` picks something sensible.

for visual comparison purposes, $\sim 50$ bins for $N = 10^4$, $\sim 100$ for $N = 10^5$ are reasonable defaults.

## how the exam wants this

a typical exam exercise (template exercise 2):
> Using the inverse random sampling, draw 1e6 random number from the distribution $P(s) = C/s$ where $s$ goes from $s_{\rm min} = 1$ AU to $s_{\rm max} = 1000$ AU. Plot a histogram of your random numbers and compare it with the expected distribution $P(s)$.

the **comparison plot is the deliverable**. it is what gets graded. the steps:

1. generate the samples
2. compute the analytic $P(s)$ on a fine grid
3. histogram the samples (log-spaced bins, density=True)
4. overplot the analytic curve
5. log axes
6. legend, labels, title, save

if the two curves visually agree, full credit. if they disagree, even partial work shows up in the plot. if the plot is missing, no credit even if the code is right.

## diagnostic table for the exam

| symptom | likely cause |
|---|---|
| histogram offset from analytic | wrong domain limits in CDF |
| histogram peaks too high | normalization missing or wrong (not density=True?) |
| histogram peaks too low | normalization missing or wrong |
| missing tails | sampling cuts off at wrong $u$ values |
| histogram clearly *different shape* | wrong CDF inversion or wrong analytic |
| two curves agree everywhere | I am done |

## see also

- [Inverse transform sampling](Inverse%20transform%20sampling.html)
- [Rejection sampling](Rejection%20sampling.html)
- [Box-Muller transform for Gaussian random numbers](Box-Muller%20transform%20for%20Gaussian%20random%20numbers.html)
- [Goodness of fit and chi-squared](Goodness%20of%20fit%20and%20chi-squared.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Hint%20-%20TODO%202.2%20Logarithmic%20Binning%20for%20Inverse%20Sampling.html" class="backlink-item">Hint - TODO 2.2 Logarithmic Binning for Inverse Sampling</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>

