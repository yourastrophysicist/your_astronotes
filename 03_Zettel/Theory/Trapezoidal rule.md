---
layout: "default"
title: "Trapezoidal rule"
---
{% raw %}
# Trapezoidal rule

the simplest non-trivial quadrature rule. given samples of $f$ at points $x_0 < x_1 < \cdots < x_N$ in $[a, b]$, approximate $\int_a^b f(x)\,dx$ as the sum of trapezoid areas under the piecewise-linear interpolant.

## the formula

for equispaced points with $x_i = a + ih$, $h = (b - a)/N$, $f_i = f(x_i)$:

$$\int_a^b f(x)\,dx \approx h \left[\tfrac{1}{2} f_0 + \sum_{i=1}^{N-1} f_i + \tfrac{1}{2} f_N\right]$$

the endpoints get half-weight because each interior point is the right endpoint of one trapezoid and the left endpoint of the next, while the boundary points are only on one trapezoid.

## the geometric picture

each trapezoid has area $h \cdot (f_i + f_{i+1})/2$. add them all:

$$\int \approx \sum_{i=0}^{N-1} \frac{h(f_i + f_{i+1})}{2} = \frac{h}{2}(f_0 + 2f_1 + 2f_2 + \cdots + 2f_{N-1} + f_N)$$

which is the formula above.

## error

for a smooth $f$:

$$\text{error} = -\frac{(b - a)\, h^2}{12} f''(\xi)$$

for some $\xi \in [a, b]$. the trapezoidal rule is **second-order accurate**: doubling the number of points cuts the error by a factor of 4.

## when trapezoidal is the right rule

- **smooth integrand** with bounded second derivative
- **periodic integrand** integrated over a full period: trapezoidal is *spectrally* accurate (error decays faster than any polynomial in $h$)! this is why FFT-based integration uses periodic sampling
- **simplicity** matters more than peak accuracy

## when something else is better

- **Simpson's rule** ($O(h^4)$) is almost always better for the same number of points if the integrand is smooth
- **Gauss-Legendre quadrature** is much better for analytic integrands and small numbers of points
- **Monte Carlo** for high-dimensional integrals or noisy/random integrands

## python implementation

```python
def trapezoid(f, a, b, N):
    x = np.linspace(a, b, N + 1)
    y = f(x)
    h = (b - a) / N
    return h * (0.5 * y[0] + np.sum(y[1:-1]) + 0.5 * y[-1])
```

equivalent (numpy built-in):

```python
np.trapz(y, x)        # also np.trapezoid in newer numpy
```

scipy:

```python
from scipy.integrate import trapezoid
trapezoid(y, x)
```

## convergence verification

for any new integrand, doubling the number of points should reduce the error by ~4. if it does not, either:
- the integrand is not smooth enough (has a discontinuity, kink, or singularity)
- the formula is implemented incorrectly
- I am beyond the roundoff floor (~$10^{-15}$ relative)

```python
errs = []
Ns = [10, 20, 40, 80, 160]
for N in Ns:
    errs.append(abs(trapezoid(f, a, b, N) - exact))
plt.loglog(Ns, errs)
# slope should be -2 (since error ~ h^2 = (b-a)^2/N^2)
```

## adaptive trapezoidal

Romberg integration: combine trapezoidal estimates at different step sizes via Richardson extrapolation. each level cancels the next-leading-order error, giving $O(h^{2k})$ at level $k$. converges much faster than vanilla trapezoidal for smooth integrands.

## astrophysics use cases

- **Friedmann integration**: $D_L(z) = (1+z) \int_0^z dz'/E(z')$ for cosmological distances. smooth, low-dimension, trapezoidal works
- **stellar luminosity**: $L = \int_0^R 4\pi r^2 \epsilon(r)\,dr$ from a stellar structure code
- **photon flux from a spectrum**: $\int F_\nu d\nu$ over an observation band
- **column density**: $N = \int n(z) dz$ along a line of sight

## see also

- [Simpson's rule](./Simpson%27s%20rule.html)
- [Trapezoidal rule error estimate](./Trapezoidal%20rule%20error%20estimate.html)
- [Monte Carlo integration mean value method](./Monte%20Carlo%20integration%20mean%20value%20method.html)
- [Truncation error and order of accuracy](./Truncation%20error%20and%20order%20of%20accuracy.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Built-in%20scipy%20integrators.html" class="backlink-item">Built-in scipy integrators</a></li>
    <li class="backlink-item-wrap"><a href="./Linear%20interpolation.html" class="backlink-item">Linear interpolation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Monte%20Carlo%20integration%20mean%20value%20method.html" class="backlink-item">Monte Carlo integration mean value method</a></li>
    <li class="backlink-item-wrap"><a href="./Multidimensional%20Monte%20Carlo%20integration.html" class="backlink-item">Multidimensional Monte Carlo integration</a></li>
    <li class="backlink-item-wrap"><a href="./Simpson%27s%20rule.html" class="backlink-item">Simpson's rule</a></li>
    <li class="backlink-item-wrap"><a href="./Trapezoidal%20rule%20error%20estimate.html" class="backlink-item">Trapezoidal rule error estimate</a></li>
    <li class="backlink-item-wrap"><a href="./Truncation%20error%20and%20order%20of%20accuracy.html" class="backlink-item">Truncation error and order of accuracy</a></li>
  </ul>
</div>
