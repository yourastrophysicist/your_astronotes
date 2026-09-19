---
layout: "default"
title: "Goodness of fit and chi-squared"
---
# Goodness of fit and chi-squared

after fitting a model to data, the question is *how good is the fit?* the standard answer is the chi-squared statistic and the associated reduced chi-squared.

## the chi-squared statistic

for $N$ data points $y_i$ with errors $\sigma_i$, fit by a model $f(x_i; \boldsymbol\theta)$ with $M$ parameters:

$$\chi^2 = \sum_{i=1}^N \frac{(y_i - f(x_i; \boldsymbol\theta))^2}{\sigma_i^2}$$

the **best-fit** parameters minimize $\chi^2$. for a linear model this is equivalent to weighted least squares.

## the reduced chi-squared

divide by the number of **degrees of freedom**, $\nu = N - M$:

$$\chi^2_\nu = \chi^2/\nu$$

interpretation:
- **$\chi^2_\nu \approx 1$**: the fit is consistent with the data within the stated errors
- **$\chi^2_\nu \gg 1$**: model is bad, *or* errors $\sigma_i$ are underestimated
- **$\chi^2_\nu \ll 1$**: model overfits, *or* errors are overestimated

a value far from 1 doesn't tell me which of "model wrong" vs "errors wrong" is happening. that needs additional diagnostics: residual plots, comparison with alternative models, calibration data.

## why $\chi^2_\nu \approx 1$ for a good fit

each term $(y_i - f_i)^2/\sigma_i^2$ is the squared standardized residual. if the model is correct and the errors are gaussian with the stated $\sigma_i$, each squared residual has expectation 1. fitting $M$ parameters reduces the effective number of independent residuals from $N$ to $N - M$, so $\langle \chi^2 \rangle = N - M = \nu$, hence $\langle \chi^2_\nu \rangle = 1$.

the precise statistical statement: $\chi^2$ from a correctly-modeled linear fit is drawn from the **chi-squared distribution with $\nu$ degrees of freedom**, mean $\nu$, variance $2\nu$. so the typical fluctuation of $\chi^2_\nu$ is $\sqrt{2/\nu}$.

## p-value

quantify "is $\chi^2$ reasonable" via the survival function of the chi-squared distribution:

$$p = \int_{\chi^2_{\rm obs}}^\infty f_{\chi^2_\nu}(x)\, dx$$

interpretation:
- $p \in [0.05, 0.95]$: fit is statistically OK
- $p < 0.05$: bad fit (too much scatter, model wrong, or errors too small)
- $p > 0.95$: suspiciously good fit (overfit, or errors too large)

```python
from scipy.stats import chi2
p = 1 - chi2.cdf(chi2_obs, df=nu)
```

## confidence intervals on parameters

assuming the model is approximately linear in parameters near the best fit, the covariance of the parameters is

$$\text{Cov}(\boldsymbol\theta) = (J^T W J)^{-1}$$

where $J_{ij} = \partial f_i/\partial \theta_j$ and $W_{ii} = 1/\sigma_i^2$. for a linear model, $J = A$ is just the design matrix.

confidence regions:
- $\Delta\chi^2 = 1$ from minimum: 1$\sigma$ for one parameter (marginalizing over others)
- $\Delta\chi^2 = 2.30$: 1$\sigma$ joint for 2 parameters
- $\Delta\chi^2 = 3.53$: 1$\sigma$ joint for 3 parameters

these come from the chi-squared distribution at the relevant number of degrees of freedom.

## astrophysics-specific subtleties

### errors that are wrong

if the fit gives $\chi^2_\nu = 5$, the data are scattering by $\sqrt{5} \approx 2.2\times$ more than the stated errors. two possibilities:

1. **the errors are right but the model is bad**: try a more flexible model. residual plot will show systematic structure
2. **the errors are wrong**: the data might be fine, but $\sigma_i$ underestimates the true noise. inflate errors by $\sqrt{\chi^2_\nu}$ and re-fit. parameter uncertainties grow accordingly

distinguishing these: residual plot. if residuals are random (no structure, no trend), errors are wrong. if residuals show a curve or oscillation, model is wrong.

### outliers

a few points contributing huge $\chi^2$ each can dominate the statistic. classical $\chi^2$ is *very sensitive* to outliers because of the squared dependence. options:

- **iterative sigma clipping**: drop points beyond, say, 3$\sigma$, refit, repeat
- **robust loss functions**: replace squared by Huber loss or similar, which are linear far from zero
- **investigate the outlier**: is it a real physical thing (a transient, a flare) or a measurement glitch

### correlated errors

the formula above assumes uncorrelated errors. if the data has correlated noise (e.g. CMB pixel-pixel covariance), use the full covariance matrix:

$$\chi^2 = (\mathbf{y} - \mathbf{f})^T C^{-1} (\mathbf{y} - \mathbf{f})$$

where $C$ is the data covariance matrix. ignoring correlations underestimates the parameter uncertainties.

## python

```python
from scipy.optimize import curve_fit
from scipy.stats import chi2

def f(x, a, b):
    return a * np.exp(-b * x)

popt, pcov = curve_fit(f, x, y, sigma=sigma, absolute_sigma=True, p0=[1, 0.1])
y_fit = f(x, *popt)

residuals = (y - y_fit) / sigma
chi2_obs = np.sum(residuals**2)
nu = len(y) - len(popt)
chi2_red = chi2_obs / nu
p_value = 1 - chi2.cdf(chi2_obs, df=nu)
print(f"χ²={chi2_obs:.2f}, χ²/ν={chi2_red:.2f}, p={p_value:.3f}")

# parameter uncertainties
perr = np.sqrt(np.diag(pcov))
print(f"a = {popt[0]:.3f} ± {perr[0]:.3f}")
```

`absolute_sigma=True` is critical: tells curve_fit to trust the input errors and *not* rescale them based on the residuals. without it, the parameter uncertainties get inflated by $\sqrt{\chi^2_\nu}$ automatically (which can be wrong).

## see also

- [Linear least squares](Linear%20least%20squares.html)
- [Weighted least squares](Weighted%20least%20squares.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Fitting%20practical%20recipe.html" class="backlink-item">Fitting practical recipe</a></li>
    <li class="backlink-item-wrap"><a href="General%20linear%20least%20squares.html" class="backlink-item">General linear least squares</a></li>
    <li class="backlink-item-wrap"><a href="Linear%20least%20squares.html" class="backlink-item">Linear least squares</a></li>
    <li class="backlink-item-wrap"><a href="Non-linear%20fitting%20with%20scipy.html" class="backlink-item">Non-linear fitting with scipy</a></li>
    <li class="backlink-item-wrap"><a href="Polynomial%20fitting.html" class="backlink-item">Polynomial fitting</a></li>
    <li class="backlink-item-wrap"><a href="Verifying%20random%20samples.html" class="backlink-item">Verifying random samples</a></li>
    <li class="backlink-item-wrap"><a href="Weighted%20least%20squares.html" class="backlink-item">Weighted least squares</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>

