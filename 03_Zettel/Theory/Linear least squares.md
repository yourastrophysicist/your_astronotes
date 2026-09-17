---
layout: "default"
title: "Linear least squares"
---
{% raw %}
# Linear least squares

the standard fitting problem. given $N$ data points $(x_i, y_i)$ and a model $y(x) = \sum_k \theta_k \phi_k(x)$ that is **linear in the parameters $\theta_k$** (note: the $\phi_k$ can be highly non-linear functions of $x$), find the $\theta_k$ that minimize the sum of squared residuals:

$$\chi^2(\boldsymbol\theta) = \sum_{i=1}^N \big[y_i - \sum_k \theta_k \phi_k(x_i)\big]^2$$

closed-form solution via linear algebra. the workhorse fitting algorithm.

## the math

let $A$ be the **design matrix** with $A_{ik} = \phi_k(x_i)$ ($N \times M$ where $M$ is the number of parameters). let $\mathbf{y}$ be the data vector. then $\chi^2 = \\lvert \mathbf{y} - A\boldsymbol\theta\\rvert^2$. setting $\partial \chi^2/\partial\theta_k = 0$ gives the **normal equations**:

$$A^T A \boldsymbol\theta = A^T \mathbf{y}$$

solve for $\boldsymbol\theta$. this is a square $M \times M$ linear system, solvable in $O(M^3)$ via Gauss elimination.

## the textbook example: linear fit $y = mx + b$

design matrix has two columns:
$$A = \begin{pmatrix} 1 & x_1 \\ 1 & x_2 \\ \vdots & \vdots \\ 1 & x_N \end{pmatrix}, \quad \boldsymbol\theta = \begin{pmatrix} b \\ m \end{pmatrix}$$

$A^T A$ is $2 \times 2$:
$$A^T A = \begin{pmatrix} N & \sum x_i \\ \sum x_i & \sum x_i^2 \end{pmatrix}, \quad A^T \mathbf{y} = \begin{pmatrix} \sum y_i \\ \sum x_i y_i \end{pmatrix}$$

Cramer's rule gives the closed-form $m$, $b$ that every undergraduate stats course derives.

## why "linear in parameters" matters

the model $y = \theta_1 e^x + \theta_2 \sin x$ is *linear* in $\theta_1, \theta_2$ even though the functions of $x$ are wildly non-linear. linear least squares applies.

the model $y = A e^{-kx}$ is *non-linear* in $k$, so requires non-linear least squares (Levenberg-Marquardt, `scipy.optimize.curve_fit`). but if I take logs, $\log y = \log A - kx$ is linear in $\log A$ and $k$ — this is a common reformulation trick.

## python implementation (educational)

```python
def linear_lstsq(A, y):
    return np.linalg.solve(A.T @ A, A.T @ y)

# linear fit y = m*x + b:
A = np.column_stack([np.ones_like(x), x])
theta = linear_lstsq(A, y)
b, m = theta
```

## production: never form $A^T A$

forming $A^T A$ explicitly **squares the condition number** of the problem. small numerical errors in $A$ become large errors in the solution. instead, use QR decomposition:

$$A = QR, \quad A\boldsymbol\theta = \mathbf{y} \;\Rightarrow\; R\boldsymbol\theta = Q^T \mathbf{y}$$

(triangular solve, well-conditioned).

production code:
```python
theta, residuals, rank, sv = np.linalg.lstsq(A, y, rcond=None)
```

`lstsq` uses SVD internally, which handles rank-deficient and ill-conditioned $A$ gracefully.

## uncertainties on the parameters

the covariance of the fitted parameters (assuming Gaussian uncorrelated errors $\sigma$ on each $y_i$):

$$\text{Cov}(\boldsymbol\theta) = \sigma^2 (A^T A)^{-1}$$

if $\sigma$ is unknown, estimate from the residuals:

$$\hat\sigma^2 = \frac{\chi^2_{\min}}{N - M}$$

where $N - M$ is the number of degrees of freedom (number of data points minus number of parameters).

```python
def linear_fit_with_errors(A, y, sigma=None):
    theta = np.linalg.lstsq(A, y, rcond=None)[0]
    res = y - A @ theta
    if sigma is None:
        sigma2 = np.sum(res**2) / (len(y) - A.shape[1])
    else:
        sigma2 = sigma**2
    cov = sigma2 * np.linalg.inv(A.T @ A)
    return theta, np.sqrt(np.diag(cov)), cov
```

## weighted version

if data points have different uncertainties $\sigma_i$, weight them:

$$\chi^2 = \sum_i \frac{(y_i - \sum_k \theta_k \phi_k(x_i))^2}{\sigma_i^2}$$

equivalent to scaling each row of $A$ and each $y_i$ by $1/\sigma_i$:

$$A_{ik} \to A_{ik}/\sigma_i, \quad y_i \to y_i/\sigma_i$$

then solve as usual. see [Weighted least squares](./Weighted%20least%20squares.html).

## diagnostic: plot residuals

after the fit, plot $y_i - f(x_i)$ vs $x_i$. expectations:
- **scattered around zero**: model is good
- **systematic trend** (residuals curve, oscillate, or have a bias): model is missing something
- **funnel shape** (residuals scale with $\lvert y\rvert$): heteroscedastic noise, need weighted fit
- **outliers**: a few points at >3σ — investigate, decide whether to clip

never trust a fit without looking at the residuals.

## astrophysics use cases

- **linear regression** of any sort: a baseline calibration, a magnitude-color relation, a Tully-Fisher slope
- **polynomial fitting**: $y = \sum_k \theta_k x^k$ is linear LSQ with $\phi_k = x^k$
- **harmonic decomposition**: fit $y = a_0 + \sum_k (a_k \cos k\omega t + b_k \sin k\omega t)$ for periodic phenomena (variable stars, exoplanet transits, pulsars)
- **continuum subtraction in spectra**: fit a smooth polynomial to line-free regions, subtract to isolate emission lines
- **CMB power spectrum fitting**: principle is the same although the parameter space is large

## see also

- [Weighted least squares](./Weighted%20least%20squares.html)
- [General linear least squares](./General%20linear%20least%20squares.html)
- [Polynomial fitting](./Polynomial%20fitting.html)
- [Goodness of fit and chi-squared](./Goodness%20of%20fit%20and%20chi-squared.html)
- [QR decomposition](./QR%20decomposition.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (12)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Derivatives%20of%20noisy%20data.html" class="backlink-item">Derivatives of noisy data</a></li>
    <li class="backlink-item-wrap"><a href="./Fitting%20practical%20recipe.html" class="backlink-item">Fitting practical recipe</a></li>
    <li class="backlink-item-wrap"><a href="./General%20linear%20least%20squares.html" class="backlink-item">General linear least squares</a></li>
    <li class="backlink-item-wrap"><a href="./Goodness%20of%20fit%20and%20chi-squared.html" class="backlink-item">Goodness of fit and chi-squared</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Matrix%20inverse%20via%20linear%20systems.html" class="backlink-item">Matrix inverse via linear systems</a></li>
    <li class="backlink-item-wrap"><a href="./Newton-Raphson%20for%20systems%20of%20equations.html" class="backlink-item">Newton-Raphson for systems of equations</a></li>
    <li class="backlink-item-wrap"><a href="./Non-linear%20fitting%20with%20scipy.html" class="backlink-item">Non-linear fitting with scipy</a></li>
    <li class="backlink-item-wrap"><a href="./Polynomial%20fitting.html" class="backlink-item">Polynomial fitting</a></li>
    <li class="backlink-item-wrap"><a href="./QR%20decomposition.html" class="backlink-item">QR decomposition</a></li>
    <li class="backlink-item-wrap"><a href="./Weighted%20least%20squares.html" class="backlink-item">Weighted least squares</a></li>
    <li class="backlink-item-wrap"><a href="./What%20is%20machine%20learning.html" class="backlink-item">What is machine learning</a></li>
  </ul>
</div>
