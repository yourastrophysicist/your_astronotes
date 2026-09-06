---
layout: default
title: "Partial numerical derivatives"
---

# Partial numerical derivatives

extension of finite differences to functions of many variables. given $f: \mathbb{R}^n \to \mathbb{R}^m$, estimate the gradient $\nabla f$, the Jacobian $J_{ij} = \partial f_i/\partial x_j$, or the Hessian $H_{ij} = \partial^2 f/\partial x_i \partial x_j$ from samples of $f$.

## the gradient

for a scalar function $f(\mathbf{x})$, the gradient is a vector. each component is a 1D derivative:

$$\frac{\partial f}{\partial x_j} \approx \frac{f(\mathbf{x} + h \mathbf{e}_j) - f(\mathbf{x} - h \mathbf{e}_j)}{2h}$$

(central difference, $O(h^2)$). $\mathbf{e}_j$ is the $j$-th standard basis vector. one full gradient costs $2n$ evaluations.

## the Jacobian

for a vector function $\mathbf{f}: \mathbb{R}^n \to \mathbb{R}^m$:

$$J_{ij}(\mathbf{x}) = \frac{\partial f_i}{\partial x_j} \approx \frac{f_i(\mathbf{x} + h \mathbf{e}_j) - f_i(\mathbf{x} - h \mathbf{e}_j)}{2h}$$

build column by column. each column = one perturbed evaluation of the full vector $\mathbf{f}$. total cost: $2n$ evaluations of $\mathbf{f}$.

## python (central differences for the Jacobian)

```python
def numerical_jacobian(f, x, h=1e-5):
    """f: R^n -> R^m. Returns m x n Jacobian via central differences."""
    n = len(x)
    f0 = f(x)
    m = len(f0)
    J = np.zeros((m, n))
    for j in range(n):
        x_plus  = x.copy(); x_plus[j]  += h
        x_minus = x.copy(); x_minus[j] -= h
        J[:, j] = (f(x_plus) - f(x_minus)) / (2 * h)
    return J
```

scipy:
```python
from scipy.optimize import approx_fprime
grad = approx_fprime(x, f, epsilon=1e-8)
```

## the Hessian

for a scalar $f$, the Hessian $H = \nabla\nabla f$ is the matrix of second partials:

$$H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$$

central-difference formulas:

- diagonal $H_{ii}$: 1D second derivative along axis $i$
$$H_{ii} \approx \frac{f(\mathbf{x} + h\mathbf{e}_i) - 2f(\mathbf{x}) + f(\mathbf{x} - h\mathbf{e}_i)}{h^2}$$

- off-diagonal $H_{ij}$: 4-point mixed partial
$$H_{ij} \approx \frac{f(\mathbf{x} + h\mathbf{e}_i + h\mathbf{e}_j) - f(\mathbf{x} + h\mathbf{e}_i - h\mathbf{e}_j) - f(\mathbf{x} - h\mathbf{e}_i + h\mathbf{e}_j) + f(\mathbf{x} - h\mathbf{e}_i - h\mathbf{e}_j)}{4 h^2}$$

cost: $n + n^2/2 + n$ function evaluations for the full $n \times n$ Hessian (roughly $n^2/2$ for the off-diagonals).

## complex-step differentiation, the cancellation-free trick

for analytic $f$, computing the imaginary part of $f$ evaluated at a complex perturbation gives the derivative with no cancellation:

$$\text{Im}[f(x + ih)]/h = f'(x) + O(h^2)$$

since the numerator is one number's imaginary part, no subtraction. so $h$ can be tiny — even $10^{-200}$ — without roundoff blowup. accuracy reaches machine precision.

generalize to partials by perturbing one component at a time complexly:

```python
def complex_step_jacobian(f, x, h=1e-30):
    n = len(x)
    f0 = f(x)
    J = np.zeros((len(f0), n))
    for j in range(n):
        x_pert = x.astype(complex).copy()
        x_pert[j] += 1j * h
        J[:, j] = np.imag(f(x_pert)) / h
    return J
```

caveat: $f$ must accept complex inputs. fine for analytic functions; not always for functions with conditionals (`np.where`, `np.abs`, `np.maximum`).

## automatic differentiation, the right answer

the modern alternative: tools like **jax** or **autograd** compute exact derivatives by tracing the computation graph. no finite-difference error, no choice of $h$, accuracy at machine precision.

```python
import jax.numpy as jnp
from jax import grad, jacfwd, jacrev

def f(x):
    return jnp.sum(jnp.sin(x) ** 2)

dfdx = grad(f)
J = jacfwd(f)
H = jacfwd(grad(f))
```

cost: forward-mode AD costs $\sim n$ evaluations for an $n$-input gradient (similar to finite differences). reverse-mode AD costs *one* evaluation regardless of $n$ — the workhorse of deep learning.

for moderate $n$, AD is usually a 10× speedup over finite differences and machine-precision accurate. **prefer AD whenever it is available**.

## astrophysics applications

- **Newton-Raphson on a system of equations**: Jacobian needed each step
- **maximum-likelihood fitting**: gradient of the log-likelihood for parameter estimation
- **Hessian for parameter uncertainties**: Fisher matrix is the expected Hessian of the log-likelihood; its inverse gives parameter covariances
- **shooting methods for stellar structure**: sensitivities $\partial(\text{boundary residual})/\partial(\text{initial guess})$
- **gravity-wave parameter estimation**: gradient of the matched-filter likelihood

## see also

- [Forward backward and central differences](../../02_Zettel/Theory/Forward backward and central differences.html)
- [Second derivatives](../../02_Zettel/Theory/Second derivatives.html)
- [Newton-Raphson for systems of equations](../../02_Zettel/Theory/Newton-Raphson for systems of equations.html)
- [Roundoff vs truncation balance](../../02_Zettel/Theory/Roundoff vs truncation balance.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
