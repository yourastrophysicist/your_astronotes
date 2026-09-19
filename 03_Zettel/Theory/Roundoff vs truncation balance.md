---
layout: "default"
title: "Roundoff vs truncation balance"
---
# Roundoff vs truncation balance

every finite-difference computation has two errors that fight each other as I shrink the step size $h$. truncation error vanishes as $h \to 0$; roundoff error *grows*. there is an optimal $h$ that minimizes their sum, and going smaller than that *hurts* the answer.

## the two errors

- **truncation error**: the cost of approximating a continuous limit by a finite step. for a $p$-th-order method, truncation $\sim C h^p$ with $C$ depending on derivatives of the function
- **roundoff error**: the cost of finite floating-point precision. comes from cancellation in the numerator of finite differences: subtracting two nearly-equal numbers leaves a result with fewer significant digits

## the U-shaped error

for forward difference $f'(x) \approx [f(x+h) - f(x)]/h$:

- truncation: $\sim \tfrac{h}{2} \lvert f''(x)\rvert$
- roundoff: $\sim \epsilon \lvert f(x)\rvert/h$ (where $\epsilon \sim 10^{-16}$ is machine epsilon)

total:
$$E(h) \sim \frac{h \lvert f''\rvert}{2} + \frac{\epsilon \lvert f\rvert}{h}$$

minimum at $dE/dh = 0$:
$$h_{\rm opt} \sim \sqrt{\frac{2\epsilon \lvert f\rvert}{\lvert f''\rvert}} \approx \sqrt\epsilon \approx 10^{-8}$$

minimum error:
$$E_{\min} \sim \sqrt{\epsilon \lvert f\rvert \lvert f''\rvert} \approx 10^{-8}$$

so the **best forward-difference accuracy is only $\sim 10^{-8}$**, not the $10^{-16}$ of double precision. **going smaller than $h \sim 10^{-8}$ makes the answer *worse*.**

## the table for derivative formulas

| method | order $p$ | $h_{\rm opt}$ scaling | $h_{\rm opt}$ value | best error |
|---|---|---|---|---|
| forward 1st deriv | 1 | $\epsilon^{1/2}$ | $\sim 10^{-8}$ | $\sim 10^{-8}$ |
| central 1st deriv | 2 | $\epsilon^{1/3}$ | $\sim 10^{-5}$ | $\sim 10^{-11}$ |
| 5-pt central 1st deriv | 4 | $\epsilon^{1/5}$ | $\sim 10^{-3}$ | $\sim 10^{-13}$ |
| central 2nd deriv | 2 | $\epsilon^{1/4}$ | $\sim 10^{-4}$ | $\sim 10^{-8}$ (note: poor) |

each higher order pushes $h_{\rm opt}$ larger and the achievable error smaller. but **second derivatives are intrinsically worse** because the cancellation in the numerator is fiercer (three near-equal terms instead of two).

## the experimental verification

the standard demo: pick a known function, sweep $h$ from $10^0$ down to $10^{-15}$, plot $\lvert f'_{\rm numerical}(x_0) - f'_{\rm true}(x_0)\rvert$ vs $h$ on log-log axes. expected:

- left side (large $h$): linear with slope $p$ (truncation regime)
- right side (small $h$): linear with slope $-1$ (roundoff regime)
- minimum at $h_{\rm opt}$, the classical "V" shape

```python
import numpy as np
import matplotlib.pyplot as plt
f = np.exp; fp = np.exp
x0 = 1.0
hs = np.logspace(-15, 0, 100)
errs = [abs((f(x0 + h) - f(x0))/h - fp(x0)) for h in hs]
plt.loglog(hs, errs); plt.xlabel('h'); plt.ylabel('|error|')
```

## why this matters in real code

- when computing a Jacobian by finite differences for Newton's method, the natural choice $h = 10^{-3}$ is in the truncation regime; $h = 10^{-5}$ is closer to optimal for central differences
- when implementing finite-difference PDE solvers, the spatial $\Delta x$ cannot be made arbitrarily small without roundoff blowup
- when verifying convergence of an algorithm by halving the step, eventually the roundoff floor is reached and further refinement *increases* error

## the escape: arbitrary precision

`mpmath` and `decimal` give arbitrary-precision arithmetic at the cost of much slower computation. for cases where finite-difference accuracy must beat $10^{-13}$, this is the only path. rare in practice.

## the better escape: complex-step differentiation

a clever trick for derivatives. compute $\text{Im}[f(x + ih)]/h$ for tiny $h$. the imaginary part has no roundoff cancellation problem because nothing is subtracted:

$$f(x + ih) = f(x) + ih f'(x) - \tfrac{h^2}{2} f''(x) - \cdots$$

so $\text{Im}[f(x + ih)]/h = f'(x) - \tfrac{h^2}{6} f'''(x) + \cdots = f'(x) + O(h^2)$.

with no cancellation, $h$ can be arbitrarily small, and accuracy approaches machine precision. the catch: $f$ must accept complex inputs (true for most analytical functions but not all).

## the right rule of thumb

unless I have measured the optimal $h$ for my specific function:

- forward derivative: $h = 10^{-7}$ to $10^{-8}$
- central derivative: $h = 10^{-5}$ to $10^{-6}$
- second derivative: $h = 10^{-4}$ to $10^{-5}$

these are the conventional defaults in `scipy.optimize.approx_fprime` and `scipy.differentiate.derivative`.

## see also

- [Floating point representation and rounding errors](Floating%20point%20representation%20and%20rounding%20errors.html)
- [Truncation error and order of accuracy](Truncation%20error%20and%20order%20of%20accuracy.html)
- [Forward backward and central differences](Forward%20backward%20and%20central%20differences.html)
- [Optimal step size for derivatives](Optimal%20step%20size%20for%20derivatives.html)
- [Mathematical_Numerical_Methods_MOC](../../04_Atlas/Mathematical_Numerical_Methods_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Floating%20point%20representation%20and%20rounding%20errors.html" class="backlink-item">Floating point representation and rounding errors</a></li>
    <li class="backlink-item-wrap"><a href="Forward%20backward%20and%20central%20differences.html" class="backlink-item">Forward backward and central differences</a></li>
    <li class="backlink-item-wrap"><a href="Optimal%20step%20size%20for%20derivatives.html" class="backlink-item">Optimal step size for derivatives</a></li>
    <li class="backlink-item-wrap"><a href="Partial%20numerical%20derivatives.html" class="backlink-item">Partial numerical derivatives</a></li>
    <li class="backlink-item-wrap"><a href="Second%20derivatives.html" class="backlink-item">Second derivatives</a></li>
    <li class="backlink-item-wrap"><a href="Truncation%20error%20and%20order%20of%20accuracy.html" class="backlink-item">Truncation error and order of accuracy</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
  </ul>
</div>

