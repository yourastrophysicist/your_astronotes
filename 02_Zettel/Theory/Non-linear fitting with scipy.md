---
layout: default
title: "Non-linear fitting with scipy"
---

# Non-linear fitting with scipy

when the model has parameters appearing *nonlinearly*, linear LSQ does not apply. instead, iterative algorithms — usually Levenberg-Marquardt — minimize $\chi^2$ in parameter space. `scipy.optimize.curve_fit` is the standard tool.

## the problem

minimize
$$\chi^2(\boldsymbol\theta) = \sum_{i=1}^N \frac{(y_i - f(x_i; \boldsymbol\theta))^2}{\sigma_i^2}$$

over the parameters $\boldsymbol\theta$ when $f$ depends nonlinearly on $\boldsymbol\theta$. examples:
- $f = A e^{-\lambda x}$
- $f = A \sin(\omega x + \phi) + C$
- $f = A/(1 + (x/x_0)^\alpha)$

## the algorithm: Levenberg-Marquardt

a hybrid of Gauss-Newton (good when close to the minimum) and steepest descent (good when far). at each iteration:

1. linearize $f$ around the current $\boldsymbol\theta_k$
2. solve the linear LSQ problem for the update $\Delta\boldsymbol\theta$
3. dampen the update: $\boldsymbol\theta_{k+1} = \boldsymbol\theta_k + \Delta\boldsymbol\theta / (1 + \lambda)$
4. if the new $\chi^2$ improved: decrease $\lambda$ (move toward Gauss-Newton, larger steps)
5. if it got worse: increase $\lambda$ (move toward steepest descent, smaller steps)

iterates to convergence in 5-20 steps for well-behaved problems, more for ill-conditioned or many-parameter ones.

## scipy.optimize.curve_fit

```python
from scipy.optimize import curve_fit

def model(x, A, lam, C):
    return A * np.exp(-lam * x) + C

popt, pcov = curve_fit(model, x_data, y_data,
                       p0=[1.0, 0.5, 0.0],          # initial guess
                       sigma=sigma_y,                # measurement errors
                       absolute_sigma=True,          # treat sigma as real
                       bounds=([0, 0, -np.inf], [np.inf, np.inf, np.inf]))

print(popt)                    # best-fit parameters
sigma_p = np.sqrt(np.diag(pcov))    # parameter uncertainties
```

key arguments:

- **`p0`**: initial guess. **critical** — bad guesses cause divergence or convergence to wrong minima. for any real fit, start with a good guess from physics intuition or a simpler fit
- **`sigma`**: per-point uncertainty. without it, every point is weighted equally
- **`absolute_sigma=True`**: trust `sigma` as absolute. without this, scipy rescales by $\chi^2_\nu$, which can hide model problems
- **`bounds`**: tuple of (lower, upper) per parameter; LM with bounds uses a trust-region reflective algorithm
- **`maxfev`**: maximum number of function evaluations (default 800 × number of parameters)

## scipy.optimize.least_squares

a more flexible alternative. takes a *residual function* $\mathbf{r}(\boldsymbol\theta) = \mathbf{y} - \mathbf{f}(\boldsymbol\theta)$ and minimizes $\|\mathbf{r}\|^2$:

```python
from scipy.optimize import least_squares

def residuals(theta, x, y, sigma):
    return (y - model(x, *theta)) / sigma

result = least_squares(residuals, x0=[1.0, 0.5, 0.0], args=(x_data, y_data, sigma_y),
                       method='trf',           # 'trf', 'dogbox', 'lm'
                       jac='2-point',          # or analytic function
                       loss='linear',          # 'linear', 'soft_l1', 'huber', 'cauchy'
                       bounds=([0, 0, -np.inf], [np.inf, np.inf, np.inf]))

popt = result.x
J = result.jac
cov = np.linalg.inv(J.T @ J) * (result.fun**2).sum() / (len(y_data) - len(popt))
```

advantages over `curve_fit`:
- **robust loss functions** for outlier-resistant fitting (`'soft_l1'`, `'huber'`, `'cauchy'`)
- **explicit access to Jacobian and residuals** for diagnostics
- **bound-constrained** by default

## providing an analytic Jacobian

dramatically speeds up convergence if I have the analytic derivatives:

```python
def model(x, A, lam, C):
    return A * np.exp(-lam * x) + C

def jacobian(x, A, lam, C):
    e = np.exp(-lam * x)
    return np.column_stack([e, -A * x * e, np.ones_like(x)])

popt, pcov = curve_fit(model, x, y, p0=p0, jac=jacobian)
```

## diagnostics after the fit

1. **residual plot**: should look like noise. if there is structure, the model is wrong
2. **$\chi^2_\nu$**: should be ~1 for a good fit with correctly-stated errors
3. **parameter correlations**: from the off-diagonal of `pcov`. high correlations indicate parameter degeneracy (the data does not constrain them independently)
4. **profile likelihood**: vary one parameter, fit the others, check that $\chi^2$ has a clean minimum

## common pitfalls

- **bad initial guess**: LM is local. start near the right answer. for a Gaussian fit, start with $\mu = $ data mean, $\sigma = $ data std, $A = $ data height
- **flat $\chi^2$ landscape**: data does not constrain the parameter. either get more data or fix the parameter
- **multimodal $\chi^2$**: multiple local minima. LM will find the nearest, may not be the global. use a global optimizer first (`scipy.optimize.differential_evolution`), then refine with LM
- **scaling**: parameters with very different magnitudes ($A \sim 10^6$, $\lambda \sim 10^{-3}$) cause conditioning problems. rescale to dimensionless

## astrophysics use cases

- **stellar light-curve fits**: limb-darkening transit shapes, radial-velocity Keplerian models
- **spectral line fits**: Gaussian or Voigt profiles
- **Hubble diagram fits**: SN Ia distance moduli vs redshift
- **rotation curve models**: NFW + disk + bulge components
- **CMB power spectrum cosmology**: high-dim non-linear in $\Omega_m, \Omega_\Lambda, \ldots$ (typically MCMC, not LM, but LM gives starting points)

## when to escalate beyond LM

- **many parameters with strong correlations**: use MCMC (`emcee`, `dynesty`)
- **complicated likelihood (non-Gaussian)**: use MCMC or nested sampling
- **discrete parameters**: LM cannot handle integers; use specialized algorithms

## see also

- [Linear least squares](../../02_Zettel/Theory/Linear least squares.html)
- [Weighted least squares](../../02_Zettel/Theory/Weighted least squares.html)
- [General linear least squares](../../02_Zettel/Theory/General linear least squares.html)
- [Goodness of fit and chi-squared](../../02_Zettel/Theory/Goodness of fit and chi-squared.html)
- [Newton-Raphson method](../../02_Zettel/Theory/Newton-Raphson method.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
