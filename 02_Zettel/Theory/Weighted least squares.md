---
layout: default
title: "Weighted least squares"
---

# Weighted least squares

when data points have different uncertainties $\sigma_i$, the standard $\sum (y_i - f_i)^2$ is the *wrong* objective. each term should be weighted by its precision $1/\sigma_i^2$. the weighted form is the only sane choice for **heteroscedastic** (varying-error) data.

## the math

minimize:

$$\chi^2 = \sum_{i=1}^N \frac{(y_i - f(x_i; \boldsymbol\theta))^2}{\sigma_i^2}$$

equivalent to standard least squares applied to the rescaled data $\tilde y_i = y_i/\sigma_i$ with the rescaled design matrix $\tilde A_{ik} = \phi_k(x_i)/\sigma_i$. the normal equations:

$$A^T W A\, \boldsymbol\theta = A^T W \mathbf{y}$$

with $W$ diagonal, $W_{ii} = 1/\sigma_i^2$.

## why precision-weighting is the right answer

assume Gaussian errors: $y_i = f_i + \epsilon_i$ with $\epsilon_i \sim \mathcal{N}(0, \sigma_i^2)$. the log-likelihood is

$$\ln L = -\tfrac12 \sum \frac{(y_i - f_i)^2}{\sigma_i^2} + \text{const}$$

so maximizing the likelihood = minimizing weighted $\chi^2$. precision weighting is the maximum-likelihood estimator for the parameters.

without weighting, we are *implicitly* assuming all $\sigma_i$ are equal — an assumption that is wrong whenever errors vary across the dataset.

## python implementation

```python
def weighted_lstsq(A, y, sigma):
    """A: (N, M) design matrix. y: (N,) data. sigma: (N,) per-point errors."""
    W_sqrt = 1.0 / sigma
    A_w = A * W_sqrt[:, None]              # row-scale
    y_w = y * W_sqrt
    theta, residuals, rank, sv = np.linalg.lstsq(A_w, y_w, rcond=None)
    cov = np.linalg.inv(A_w.T @ A_w)        # (M, M) parameter covariance
    return theta, cov
```

## with `scipy.optimize.curve_fit`

```python
from scipy.optimize import curve_fit
popt, pcov = curve_fit(f, x, y, sigma=sigma, absolute_sigma=True)
```

`absolute_sigma=True` is **critical**: it tells curve_fit to trust the input $\sigma_i$ and use them as absolute uncertainties. without it, curve_fit rescales the errors based on the fit residuals — which silently changes the meaning of the parameter uncertainties.

set `absolute_sigma=False` (the default!) only when:
- the input $\sigma_i$ are *relative* (correct shape but unknown scale)
- you want the parameter uncertainties to inflate if $\chi^2_\nu > 1$

most physics applications need `absolute_sigma=True` since I do know my error bars.

## error propagation: the parameter covariance

the covariance of the fitted parameters:

$$\text{Cov}(\boldsymbol\theta) = (A^T W A)^{-1}$$

(this assumes $\sigma_i$ are correct; if they are not, multiply by $\chi^2_\nu$). the diagonal gives 1$\sigma$ uncertainties on each $\theta_k$:

$$\delta\theta_k = \sqrt{\text{Cov}_{kk}}$$

off-diagonal gives the correlation between parameters. for a 2D plot:

```python
sigma_theta = np.sqrt(np.diag(pcov))
correlation = pcov[0, 1] / (sigma_theta[0] * sigma_theta[1])
```

## the right way to plot a fit

for each $x$, the fit prediction $f(x; \boldsymbol\theta_{\rm best})$ has its own uncertainty band that depends on $\text{Cov}(\boldsymbol\theta)$. propagate:

$$\text{Var}(f(x)) = \mathbf{j}^T(x)\, \text{Cov}(\boldsymbol\theta)\, \mathbf{j}(x), \quad j_k(x) = \frac{\partial f}{\partial \theta_k}$$

shaded band on the plot at $f \pm 1\sigma$ shows where the fit is well-constrained vs not.

```python
def fit_band(x_query, theta, cov, f, df_dtheta):
    f_val = f(x_query, *theta)
    j = np.array([df_dtheta_k(x_query, *theta) for df_dtheta_k in df_dtheta])
    var = j @ cov @ j
    return f_val, np.sqrt(var)
```

## edge cases

### unknown $\sigma_i$

if I do not have error estimates per point but I know the noise is roughly homoscedastic, set $\sigma_i = 1$ (or any constant). the parameter relative uncertainties are still meaningful, but the absolute scale of $\sigma_\theta$ will be wrong by the unknown noise level.

afterwards, estimate $\sigma$ from the residuals:

$$\hat\sigma^2 = \frac{\sum (y_i - f_i)^2}{N - M}$$

and rescale parameter uncertainties by $\hat\sigma$.

### outliers

a single bad point with overestimated precision (small $\sigma_i$) can *dominate* the fit in WLSQ — the precision weighting amplifies it. always check residuals for outliers and consider sigma-clipping or robust loss functions.

### correlated errors

$W$ should be the inverse covariance matrix, not just the diagonal of inverse variances. for time-series data with correlated noise, this matters significantly:

$$\chi^2 = (\mathbf{y} - \mathbf{f})^T C^{-1} (\mathbf{y} - \mathbf{f})$$

with $C$ the full data covariance matrix. ignoring correlations underestimates parameter uncertainties.

## astrophysics use cases

- **photometric magnitudes** with different exposure times → different $\sigma$
- **CMB power spectrum binning** with bin-dependent error bars
- **spectrum fitting** where pixel noise varies with wavelength (e.g. cosmic-ray flagged pixels have huge $\sigma$)
- **rotation-curve fitting** where outer points have larger velocity errors
- **Hubble diagram with SN Ia**: weighted by per-SN distance modulus uncertainty

## see also

- [Linear least squares](../../02_Zettel/Theory/Linear least squares.md)
- [Goodness of fit and chi-squared](../../02_Zettel/Theory/Goodness of fit and chi-squared.md)
- [General linear least squares](../../02_Zettel/Theory/General linear least squares.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
