---
layout: default
title: "Fitting practical recipe"
---

# Fitting practical recipe

every fitting problem follows the same eight-step procedure. departing from this checklist is how I get bad fits.

## the steps

### 1. plot the data first

before writing any fit code, plot the data with error bars (if available). look at:
- shape (linear, exponential, Gaussian, periodic, multi-component?)
- range of $x$ and $y$
- outliers (single-point excursions)
- error-bar scaling (constant, growing, or shrinking?)

if I cannot recognize the shape from the plot, no fit will save me. pick a different model or ask what physics expects.

### 2. choose a model

driven by physics where possible:

- decay process → exponential
- harmonic oscillation → sinusoid
- bell curve → Gaussian
- rotation curve → NFW + disk
- Hubble diagram → cosmological distance modulus

if no physical model is obvious, use a flexible parametric form (low-degree polynomial) or non-parametric (spline, GP) instead of overfitting with a high-degree polynomial.

### 3. center and scale

shift $x$ to have zero mean and unit standard deviation:

$$\tilde x = (x - \bar x)/\sigma_x$$

fit in $\tilde x$, then transform back. avoids ill-conditioning. for power-law data, take $\log x$ and $\log y$.

### 4. choose linear vs nonlinear LSQ

- model linear in parameters → [Linear least squares](../../02_Zettel/Theory/Linear least squares.md) (closed-form solution)
- model nonlinear in parameters → [scipy.optimize.curve_fit](../../02_Zettel/Theory/Non-linear fitting with scipy.md) or `least_squares`

if the model can be **linearized** by a transformation (e.g. $y = A e^{-\lambda x} \to \log y = \log A - \lambda x$), do it — much faster and more stable. but check that the transformation respects the noise structure (homoscedastic on the linear scale becomes heteroscedastic on the log scale, and vice versa).

### 5. provide a good initial guess

for nonlinear LSQ, $\boldsymbol\theta_0$ matters. heuristics:

- **Gaussian fit**: $\mu_0 = $ data argmax, $\sigma_0 = $ FWHM/2.35, $A_0 = $ data max
- **exponential decay**: $\lambda_0 = -\ln(y_{\rm late}/y_{\rm early})/(x_{\rm late} - x_{\rm early})$, $A_0 = y_{\rm early}$
- **sinusoid**: $\omega_0$ from FFT peak, $A_0 = $ amplitude, $\phi_0$ from phase of FFT peak

if `curve_fit` fails to converge from a "reasonable" guess, the problem is usually a missing factor of $2\pi$, a sign convention, or a bug in the model function.

### 6. fit with the right weighting

if I have per-point errors $\sigma_i$:

```python
popt, pcov = curve_fit(model, x, y, sigma=sigma, absolute_sigma=True)
```

`absolute_sigma=True` is *almost always* what I want. without it, scipy rescales the parameter uncertainties by $\sqrt{\chi^2_\nu}$, which silently hides bad fits.

if I have no per-point errors, leave `sigma=None` (treats all points as equally precise) and check the resulting $\chi^2_\nu$.

### 7. inspect the result

three plots, always:

```python
fig, axes = plt.subplots(2, 1, sharex=True, figsize=(8, 8))

# data + fit
axes[0].errorbar(x, y, yerr=sigma, fmt='o', label='data')
xx = np.linspace(x.min(), x.max(), 200)
axes[0].plot(xx, model(xx, *popt), 'r-', label='fit')
axes[0].legend()

# residuals
res = (y - model(x, *popt)) / sigma
axes[1].errorbar(x, res, yerr=1, fmt='o')
axes[1].axhline(0, color='k', alpha=0.5)
axes[1].set_ylabel('(y - model)/σ')
axes[1].set_xlabel('x')
```

residuals should look like white noise around zero. structure (curve, oscillation, drift) means **wrong model**. funnel shape means **wrong error scaling**. clusters of outliers mean **bad data points** or **wrong likelihood**.

### 8. report parameters with uncertainties

```python
sigma_theta = np.sqrt(np.diag(pcov))
print(f"A = {popt[0]:.4f} ± {sigma_theta[0]:.4f}")
print(f"λ = {popt[1]:.4f} ± {sigma_theta[1]:.4f}")
chi2 = np.sum(((y - model(x, *popt))/sigma)**2)
nu = len(y) - len(popt)
print(f"χ² = {chi2:.2f}, ν = {nu}, χ²/ν = {chi2/nu:.2f}")
```

never report a parameter without its uncertainty. the uncertainty determines what conclusions are warranted.

## the things to never do

1. **fit without plotting**: I will get a number but no idea if it is meaningful
2. **report 6 digits when the uncertainty allows for 2**: dishonest, misleading
3. **extrapolate beyond the data range** in the final report
4. **trust a fit with $\chi^2_\nu \neq 1$ blindly**: investigate why
5. **fit $N + 1$ parameters to $N$ data points**: zero degrees of freedom, no test of the model
6. **iterate sigma-clipping aggressively without a justification**: leads to "successful" fits that are biased

## the worked example pattern (for the exam)

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

# 1. load data, plot
data = np.loadtxt("data.txt")
x, y, sigma = data.T
plt.errorbar(x, y, yerr=sigma, fmt='o')

# 2. choose model, define
def model(x, A, lam, C):
    return A * np.exp(-lam * x) + C

# 3-5. center, choose method, initial guess
p0 = [y[0] - y[-1], 0.1, y[-1]]

# 6. fit
popt, pcov = curve_fit(model, x, y, p0=p0, sigma=sigma, absolute_sigma=True)

# 7. inspect
xx = np.linspace(x.min(), x.max(), 200)
plt.plot(xx, model(xx, *popt), 'r-')
res = (y - model(x, *popt)) / sigma
print(f"χ²/ν = {np.sum(res**2)/(len(y) - 3):.2f}")

# 8. report
sigma_p = np.sqrt(np.diag(pcov))
for name, val, err in zip(['A', 'λ', 'C'], popt, sigma_p):
    print(f"{name} = {val:.4g} ± {err:.4g}")
```

## see also

- [Linear least squares](../../02_Zettel/Theory/Linear least squares.md)
- [Weighted least squares](../../02_Zettel/Theory/Weighted least squares.md)
- [General linear least squares](../../02_Zettel/Theory/General linear least squares.md)
- [Polynomial fitting](../../02_Zettel/Theory/Polynomial fitting.md)
- [Non-linear fitting with scipy](../../02_Zettel/Theory/Non-linear fitting with scipy.md)
- [Goodness of fit and chi-squared](../../02_Zettel/Theory/Goodness of fit and chi-squared.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
