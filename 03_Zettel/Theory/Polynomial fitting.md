---
layout: "default"
title: "Polynomial fitting"
---
# Polynomial fitting

a special case of [[General linear least squares\|general linear LSQ]] with $\phi_k(x) = x^k$. fit a polynomial of degree $M$ through $N$ data points, $N > M$, in the least-squares sense.

## the model

$$y(x) = \theta_0 + \theta_1 x + \theta_2 x^2 + \cdots + \theta_M x^M$$

design matrix is the **Vandermonde matrix**:
$$A_{ik} = x_i^k, \quad A = \begin{pmatrix} 1 & x_0 & x_0^2 & \cdots & x_0^M \\ 1 & x_1 & x_1^2 & \cdots & x_1^M \\ \vdots & & & & \vdots \\ 1 & x_{N-1} & x_{N-1}^2 & \cdots & x_{N-1}^M \end{pmatrix}$$

solve $A^T A \boldsymbol\theta = A^T \mathbf{y}$ as usual.

## numpy convenience

```python
# fit a polynomial of degree M
coefs = np.polyfit(x, y, M)        # returns [θ_M, ..., θ_1, θ_0] (highest first)

# evaluate
y_fit = np.polyval(coefs, x)

# modern API (preferred)
from numpy.polynomial import Polynomial
p = Polynomial.fit(x, y, deg=M)
y_fit = p(x)
```

`Polynomial.fit` automatically rescales $x$ to $[-1, 1]$ before fitting, avoiding the conditioning problems of raw Vandermonde matrices.

## numerical conditioning

raw Vandermonde matrices for $x \in [0, 100]$ and $M = 10$ are *terribly* conditioned. condition number can exceed $10^{20}$, far beyond double precision. consequences:

- coefficients have huge errors
- the polynomial may not even pass close to the data
- adding more data does not improve the fit

three fixes:

1. **rescale**: $\tilde x = (x - \bar x)/\sigma_x$ before fitting. the Vandermonde matrix in $\tilde x$ is well-conditioned
2. **use orthogonal polynomials**: $\phi_k = $ Chebyshev or Legendre. the basis is orthogonal in some inner product, design matrix is well-conditioned
3. **let `Polynomial.fit` handle it**: it uses Chebyshev internally and rescales automatically

## the fundamental limitation

high-degree polynomial fits are *bad practice* for two reasons:

1. **Runge phenomenon**: a high-degree polynomial through equispaced data oscillates wildly between points. see [[Runge phenomenon]]
2. **overfitting**: with $M \sim N$, the polynomial passes too close to the data, capturing noise

**rule of thumb**: keep $M \leq 5$ for fitting to data. if you need more flexibility, switch to:
- **piecewise polynomial** (splines): `scipy.interpolate.UnivariateSpline`
- **non-parametric**: Gaussian process regression
- **a parametric physical model** that is linear in parameters but uses physically-motivated basis functions

## degree selection

how to pick $M$? two strategies:

### increase $M$ until the residual stops improving

run with $M = 1, 2, 3, \ldots$ and plot $\chi^2$ or RMSE vs $M$. expect a knee where adding more terms stops helping much. that is the right $M$.

### cross-validation

leave-one-out: fit on $N - 1$ points, predict the left-out one, compute the prediction error. average over all $N$ choices. plot vs $M$; pick $M$ at the minimum. catches overfitting because the model is evaluated on data it did not see during fitting.

```python
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import Pipeline

scores = []
for M in range(1, 10):
    pipe = Pipeline([("poly", PolynomialFeatures(M)), ("lin", LinearRegression())])
    score = cross_val_score(pipe, x.reshape(-1, 1), y, cv=5, scoring='r2').mean()
    scores.append(score)
```

### information criteria (AIC, BIC)

penalize model complexity:

$$\text{AIC} = 2M - 2\ln L_{\max}$$
$$\text{BIC} = M \ln N - 2\ln L_{\max}$$

minimum-AIC or minimum-BIC over $M$ picks a sensible degree.

## what *not* to do

- fit a degree-50 polynomial to 100 data points and call it "good agreement"
- extrapolate a polynomial fit beyond the data range (oscillations explode rapidly)
- use $\phi_k = x^k$ on $x \in [10^3, 10^5]$ without rescaling

## astrophysics applications

- **detrending light curves**: low-degree polynomial in time captures slow instrumental drifts
- **continuum subtraction in spectra**: a polynomial across line-free regions, then evaluate over the lines
- **calibration relations**: magnitude vs color, with $M = 2$ or 3 typically
- **distance modulus fits** to Cepheids
- **CMB pixel-time-stream removal** of detector baselines

most of the time, what I want is a *low-degree* polynomial fit (M = 2-4). higher degrees are usually a signal that I should be using a different model.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Polynomial regression|500](https://commons.wikimedia.org/wiki/Special:FilePath/Polyreg_scheffe.svg?width=600)
*Plot of a cubic polynomial fit using multiple least squares to a simulated data set. Along with the point estimate, a 95% simultaneous confidence band (CB) constructed using Scheffe's method is shown* ([Commons file page](https://commons.wikimedia.org/wiki/File:Polyreg_scheffe.svg), Skbkekas, CC BY 3.0, as used on the Wikipedia article [Polynomial regression](https://en.wikipedia.org/wiki/Polynomial_regression))

- **Polynomial regression**. "In statistics, polynomial regression is a form of regression analysis in which the relationship between the independent variable x and the dependent variable y is modeled as a polynomial in x. Polynomial regression fits a nonlinear relationship between the value of x and the corresponding conditional mean of y, denoted E(y |x)." ([Wikipedia](https://en.wikipedia.org/wiki/Polynomial_regression))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Linear least squares]]
- [[General linear least squares]]
- [[Weighted least squares]]
- [[Goodness of fit and chi-squared]]
- [[Runge phenomenon]]
- [[Mathematical_Numerical_Methods_MOC]]



## Linked References

- [[Fitting practical recipe]]
- [[General linear least squares]]
- [[Linear least squares]]
- [[Mathematical_Numerical_Methods_MOC]]


