---
layout: "default"
title: "Polynomial fitting"
---
{% raw %}
# Polynomial fitting

a special case of [general linear LSQ](./General%20linear%20least%20squares.html) with $\phi_k(x) = x^k$. fit a polynomial of degree $M$ through $N$ data points, $N > M$, in the least-squares sense.

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

1. **Runge phenomenon**: a high-degree polynomial through equispaced data oscillates wildly between points. see [Runge phenomenon](./Runge%20phenomenon.html)
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

## see also

- [Linear least squares](./Linear%20least%20squares.html)
- [General linear least squares](./General%20linear%20least%20squares.html)
- [Weighted least squares](./Weighted%20least%20squares.html)
- [Goodness of fit and chi-squared](./Goodness%20of%20fit%20and%20chi-squared.html)
- [Runge phenomenon](./Runge%20phenomenon.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Fitting%20practical%20recipe.html" class="backlink-item">Fitting practical recipe</a></li>
    <li class="backlink-item-wrap"><a href="./General%20linear%20least%20squares.html" class="backlink-item">General linear least squares</a></li>
    <li class="backlink-item-wrap"><a href="./Linear%20least%20squares.html" class="backlink-item">Linear least squares</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>
