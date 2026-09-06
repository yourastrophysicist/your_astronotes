---
layout: default
title: "General linear least squares"
---

# General linear least squares

generalization of [simple linear LSQ](../../02_Zettel/Theory/Linear least squares.md) to fitting models that are linear in the parameters but use *arbitrary* basis functions of the independent variable. the workhorse for fitting any function that can be written as a sum of known shapes.

## the model

$$y(x) = \sum_{k=0}^{M-1} \theta_k \phi_k(x)$$

with **known** basis functions $\phi_k(x)$ and **unknown** parameters $\theta_k$ to fit. examples of allowed models:

- $\phi_k(x) = x^k$: polynomial fitting
- $\phi_k(x) = e^{i k\omega t}$: harmonic decomposition (Fourier series)
- $\phi_k(x) = \sin(k\pi x/L)$: Fourier sine series
- $\phi_k(x) = e^{-(x - x_k)^2/2\sigma^2}$: Gaussian basis
- $\phi_k(x) = $ orthogonal polynomials (Legendre, Chebyshev, Hermite)
- $\phi_k(x) = $ output of a precomputed simulation grid

note that $\phi_k$ themselves can be highly non-linear in $x$; the *linearity* refers only to how the parameters enter.

## what is *not* linear LSQ

models with parameters appearing nonlinearly:

- $y = A e^{-\lambda x}$: nonlinear in $\lambda$
- $y = A \sin(\omega x + \phi)$: nonlinear in $\omega$ and $\phi$
- $y = a/(1 + b x)$: nonlinear in $b$

these need [nonlinear LSQ](../../02_Zettel/Theory/Non-linear fitting with scipy.md) (Levenberg-Marquardt etc.).

## the design matrix

stack the basis functions evaluated at each data point into a matrix:

$$A_{ik} = \phi_k(x_i)$$

shape $(N, M)$ where $N$ = data points, $M$ = parameters. then the model is

$$\mathbf{y} = A \boldsymbol\theta + \boldsymbol\epsilon$$

with $\boldsymbol\epsilon$ the noise.

minimize $\chi^2 = \|\mathbf{y} - A\boldsymbol\theta\|^2$. setting the gradient to zero:

$$A^T A \boldsymbol\theta = A^T \mathbf{y}$$

(the **normal equations**). solve for $\boldsymbol\theta$. an $M \times M$ linear system.

## python implementation

```python
def general_lstsq(x, y, basis_funcs):
    """basis_funcs: list of callables, each phi_k(x). Returns theta."""
    A = np.column_stack([phi(x) for phi in basis_funcs])
    theta, residuals, rank, sv = np.linalg.lstsq(A, y, rcond=None)
    return theta
```

`np.linalg.lstsq` uses SVD internally, more numerically stable than the raw normal equations.

## with weights

if data points have errors $\sigma_i$, weight them:

```python
A_w = A / sigma[:, None]
y_w = y / sigma
theta = np.linalg.lstsq(A_w, y_w, rcond=None)[0]
```

equivalent to weighted least squares with $W = \text{diag}(1/\sigma^2)$. see [Weighted least squares](../../02_Zettel/Theory/Weighted least squares.md).

## parameter covariance

if the noise is Gaussian with the stated $\sigma_i$, the parameter covariance is

$$\text{Cov}(\boldsymbol\theta) = (A_w^T A_w)^{-1}$$

(with weighting). diagonal entries give parameter variances; off-diagonal give correlations.

```python
cov = np.linalg.inv(A_w.T @ A_w)
sigma_theta = np.sqrt(np.diag(cov))
```

## an example: fitting harmonic content

a time series of an exoplanet host star showing radial-velocity oscillations from multiple planets. fit

$$v(t) = a_0 + \sum_{k=1}^K [b_k \cos(\omega_k t) + c_k \sin(\omega_k t)]$$

with known frequencies $\omega_k$ from a periodogram analysis. each $b_k$ and $c_k$ enters linearly. design matrix:

$$A = (\mathbf{1}\,|\,\cos\omega_1 t\,|\,\sin\omega_1 t\,|\,\cos\omega_2 t\,|\,\sin\omega_2 t\,|\,\ldots)$$

solve, recover the amplitudes and phases of each harmonic.

## why one would use a non-trivial basis

three reasons:

1. **physically motivated**: the data should be a sum of known physical components (multiple gaussian emission lines, multi-component blackbody)
2. **better-conditioned**: orthogonal polynomials give a better-conditioned matrix than $\{1, x, x^2, x^3, \ldots\}$, especially for high-degree fits
3. **easier interpretation**: each $\theta_k$ has a meaningful identity (line strength of feature $k$, harmonic amplitude $k$)

## numerical conditioning

for polynomial fitting on $[0, L]$, the design matrix with $\phi_k(x) = x^k$ is the **Vandermonde matrix**, which becomes very ill-conditioned for $L \neq 1$. fix:

1. **rescale** $x$ to $[-1, 1]$ before fitting
2. **use orthogonal polynomials** (Chebyshev, Legendre) as the basis
3. **fit using `np.polynomial.Polynomial.fit`**, which handles the scaling automatically

## astrophysics applications

- **continuum subtraction**: fit a smooth polynomial to line-free regions, subtract
- **detrending**: remove instrumental drifts modeled as polynomials in time
- **spectral line decomposition**: sum of Gaussians at known central wavelengths
- **PSF fitting**: model an image as a sum of pre-computed PSF templates
- **photometric calibration**: relate measured fluxes to standard fluxes via a linear color term

## see also

- [Linear least squares](../../02_Zettel/Theory/Linear least squares.md)
- [Weighted least squares](../../02_Zettel/Theory/Weighted least squares.md)
- [Polynomial fitting](../../02_Zettel/Theory/Polynomial fitting.md)
- [Goodness of fit and chi-squared](../../02_Zettel/Theory/Goodness of fit and chi-squared.md)
- [Non-linear fitting with scipy](../../02_Zettel/Theory/Non-linear fitting with scipy.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
