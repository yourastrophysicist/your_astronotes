---
layout: default
title: "Math Numerical Methods equation sheet"
---

# Math Numerical Methods equation sheet

a fast-lookup reference for everything I might need on the exam. organized by problem class. each entry: formula, when to use, complexity.

## floating point

- machine epsilon: $\epsilon \approx 2.22 \times 10^{-16}$ (double precision)
- range: $\sim 10^{-308}$ to $\sim 10^{308}$
- $h_{\rm opt}$ for forward derivative: $\sqrt\epsilon \approx 10^{-8}$
- $h_{\rm opt}$ for central derivative: $\epsilon^{1/3} \approx 10^{-5}$
- $h_{\rm opt}$ for second derivative central: $\epsilon^{1/4} \approx 10^{-4}$

## linear systems $A\mathbf{x} = \mathbf{b}$

- **Gauss elimination**: $O(N^3)$, in-place row reduction + back substitution
- **partial pivoting**: swap row $k$ with the one having max $|A_{ik}|$ in column $k$, $i \geq k$
- **LU**: $A = LU$, factor once $O(N^3)$, solve per RHS $O(N^2)$
- **Gauss-Seidel**: iterative, $O(N^2)$ per step, converges for diagonally dominant or SPD $A$
- **scipy**: `np.linalg.solve(A, b)`, `np.linalg.lstsq` (rectangular)

## eigenvalues

- **power iteration**: $\mathbf{v}_{k+1} = A\mathbf{v}_k / \|A\mathbf{v}_k\|$, finds dominant eigenvalue
- **QR algorithm**: $A_k = Q_k R_k$, $A_{k+1} = R_k Q_k$, converges to diagonal
- **scipy**: `np.linalg.eigh(A)` for symmetric, `np.linalg.eig(A)` general

## root finding

- **bisection**: bracket-halve, $\log_2(1/\epsilon)$ iterations, bulletproof
- **Newton-Raphson**: $x_{n+1} = x_n - f(x_n)/f'(x_n)$, quadratic convergence
- **secant**: Newton with $f'$ replaced by finite difference, golden-ratio convergence ($\phi \approx 1.618$)
- **scipy**: `scipy.optimize.brentq` (bracketed), `newton` (open)

## numerical derivatives

- **forward**: $f'(x) \approx (f(x+h) - f(x))/h$, $O(h)$
- **central**: $f'(x) \approx (f(x+h) - f(x-h))/(2h)$, $O(h^2)$
- **second**: $f''(x) \approx (f(x+h) - 2f(x) + f(x-h))/h^2$, $O(h^2)$
- **5-point central**: $f'(x) \approx (-f(x+2h) + 8f(x+h) - 8f(x-h) + f(x-2h))/(12h)$, $O(h^4)$

## numerical integration

- **trapezoidal**: $\int_a^b f \approx h(\tfrac12 f_0 + \sum_{i=1}^{N-1} f_i + \tfrac12 f_N)$, error $O(h^2)$
- **Simpson 1/3** (needs even $N$): $\int_a^b f \approx \tfrac{h}{3}(f_0 + 4 f_1 + 2 f_2 + 4 f_3 + \cdots + f_N)$, error $O(h^4)$
- **Monte Carlo (mean value)**: $I \approx (b-a)\langle f \rangle$, error $\sigma_f (b-a)/\sqrt{N}$
- **importance sampling**: $I = \mathbb{E}_{x\sim g}[f/g]$, optimal $g \propto |f|$
- **scipy**: `np.trapz`, `scipy.integrate.simps`, `scipy.integrate.quad` (adaptive)

## random number sampling

- **inverse transform**: $x = F^{-1}(u)$ with $u \sim U(0,1)$
  - exponential: $x = -\ln u/\lambda$
  - power law $P(x) \propto x^\alpha$: $x = [u(b^{\alpha+1} - a^{\alpha+1}) + a^{\alpha+1}]^{1/(\alpha+1)}$
  - $P(x) \propto 1/x$ on $[a, b]$: $x = a (b/a)^u$
- **Box-Muller**: $z_1 = \sqrt{-2\ln u_1}\cos(2\pi u_2)$, $z_2 = \sqrt{-2\ln u_1}\sin(2\pi u_2)$
- **rejection**: bound $P(x) \leq P_{\max}$, draw $x \sim U(a, b)$, $y \sim U(0, P_{\max})$, accept if $y \leq P(x)$
- **numpy**: `rng = np.random.default_rng(seed)`, `rng.uniform`, `rng.normal`, `rng.exponential`

## ODE integrators

- **Euler**: $y_{n+1} = y_n + h f(y_n, t_n)$, $O(h)$, terrible for orbits
- **midpoint (RK2)**: $k_1 = f(y_n, t_n)$, $k_2 = f(y_n + (h/2)k_1, t_n + h/2)$, $y_{n+1} = y_n + h k_2$, $O(h^2)$
- **RK4**: weighted $\tfrac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$, $O(h^4)$
- **leapfrog (DKD)**: $r_{1/2} = r + (h/2)v$, $v' = v + h\,a(r_{1/2})$, $r' = r_{1/2} + (h/2)v'$, symplectic
- **scipy**: `solve_ivp(f, (t0, tf), y0, method='RK45', rtol=1e-8)`

## N-body force

$$\mathbf{a}_i = -G \sum_{j \neq i} m_j \frac{\mathbf{r}_i - \mathbf{r}_j}{(|\mathbf{r}_i - \mathbf{r}_j|^2 + \epsilon^2)^{3/2}}$$

energy: $E = \tfrac12 \sum m_i v_i^2 - G \sum_{i<j} m_i m_j/|\mathbf{r}_i - \mathbf{r}_j|$

## interpolation

- **linear**: $y = y_0 + (y_1 - y_0)(x - x_0)/(x_1 - x_0)$, $O(h^2)$
- **Lagrange**: $L(x) = \sum_i y_i \prod_{j\neq i} (x - x_j)/(x_i - x_j)$
- **cubic spline**: piecewise cubic, $C^2$ continuous, $O(h^4)$
- **scipy**: `np.interp`, `scipy.interpolate.CubicSpline`, `scipy.interpolate.RegularGridInterpolator`

## fitting

- **linear LSQ**: $\boldsymbol\theta = (A^T A)^{-1} A^T \mathbf{y}$ (use QR or `np.linalg.lstsq` in practice)
- **chi-squared**: $\chi^2 = \sum (y_i - f_i)^2/\sigma_i^2$, expected $\chi^2/\nu \approx 1$ for good fit
- **error on parameters**: $\text{Cov}(\boldsymbol\theta) = \hat\sigma^2 (A^T A)^{-1}$ with $\hat\sigma^2 = \chi^2_{\min}/(N - M)$
- **scipy**: `np.linalg.lstsq`, `scipy.optimize.curve_fit` (non-linear)

## Fourier

- **DFT**: $X_k = \sum_n x_n e^{-2\pi i kn/N}$, $O(N^2)$ direct
- **FFT**: same answer, $O(N \log N)$, requires $N$ power of 2 ideally
- **Nyquist**: $f_{\rm Nyq} = 1/(2\Delta t)$
- **Parseval**: $\sum |x_n|^2 = (1/N) \sum |X_k|^2$
- **numpy**: `np.fft.fft`, `np.fft.rfft` (real input), `np.fft.fftfreq`

## key python idioms

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import integrate, optimize, interpolate, fft, stats

rng = np.random.default_rng(42)

# read data
data = np.loadtxt("file.txt", skiprows=1)
M1, M2 = data[:, 3], data[:, 4]

# scatter
plt.scatter(M1, M2, s=2, alpha=0.5)
plt.xlabel("$M_1$ [$M_\\odot$]"); plt.ylabel("$M_2$ [$M_\\odot$]")
plt.savefig("scatter.pdf")

# 2D histogram
plt.hist2d(M1, M2, bins=50, cmap='viridis'); plt.colorbar()

# basic stats
print(f"M1: mean = {M1.mean():.3f}, std = {M1.std():.3f}")

# inverse sampling P(s) propto 1/s on [a, b]
u = rng.uniform(size=N)
s = a * (b/a)**u

# rejection sampling
N_target = 10000
samples = []
while len(samples) < N_target:
    x = rng.uniform(a, b, 2*N_target)
    y = rng.uniform(0, P_max, 2*N_target)
    samples.extend(x[y <= P(x)])
samples = np.array(samples[:N_target])

# Monte Carlo integration
x = rng.uniform(a, b, N)
I = (b - a) * f(x).mean()
err = (b - a) * f(x).std() / np.sqrt(N)

# midpoint integrator for an ODE
def step(y, t, h, f):
    k1 = f(y, t)
    k2 = f(y + 0.5*h*k1, t + 0.5*h)
    return y + h*k2
```

## see also

- [Math Numerical Methods course intro](../../02_Zettel/Theory/Math Numerical Methods course intro.html)
- [Numerical problem solving workflow](../../02_Zettel/Theory/Numerical problem solving workflow.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)