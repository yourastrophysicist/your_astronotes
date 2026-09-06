---
layout: default
title: "Optimal step size for derivatives"
---

# Optimal step size for derivatives

the U-shape of total error vs $h$ has a minimum. this note is the cheat-sheet for what the minimum is for each finite-difference formula.

## the recipe

balance truncation error $\sim C_t h^p$ against roundoff error $\sim C_r \epsilon /h^q$. minimize:

$$E(h) = C_t h^p + \frac{C_r \epsilon}{h^q}$$

$dE/dh = 0$ gives:

$$h_{\rm opt} = \left(\frac{q C_r \epsilon}{p C_t}\right)^{1/(p+q)}$$

for first derivatives, $q = 1$ (one division by $h$). for second derivatives, $q = 2$.

## the table

| formula | order $p$ | $q$ | $h_{\rm opt}$ scaling | $h_{\rm opt}$ value | best error |
|---|---|---|---|---|---|
| forward $f'$ | 1 | 1 | $\epsilon^{1/2}$ | $10^{-8}$ | $10^{-8}$ |
| central $f'$ | 2 | 1 | $\epsilon^{1/3}$ | $10^{-5}$ | $10^{-11}$ |
| 5-pt central $f'$ | 4 | 1 | $\epsilon^{1/5}$ | $10^{-3}$ | $10^{-13}$ |
| central $f''$ | 2 | 2 | $\epsilon^{1/4}$ | $10^{-4}$ | $10^{-8}$ |
| 5-pt central $f''$ | 4 | 2 | $\epsilon^{1/6}$ | $10^{-3}$ | $10^{-10}$ |

(values for $\epsilon \approx 10^{-16}$ in double precision and assuming $|f|, |f^{(p)}| \sim 1$).

## the practical defaults

unless I have measured the optimal $h$ for my specific function, the conventional defaults that scipy and friends use:

- **forward derivative**: $h = 10^{-7}$
- **central derivative**: $h = 10^{-5}$
- **second derivative**: $h = 10^{-4}$

these are not optimal for every function, but they avoid both extreme regimes (truncation-dominated and roundoff-dominated) for typical smooth functions.

## the experimental sweep

if accuracy matters, just *measure* $h_{\rm opt}$ for the specific $f$ I care about. sweep $h$ from $10^0$ to $10^{-15}$ on log-log axes:

```python
hs = np.logspace(-15, 0, 100)
errs = [abs((f(x0 + h) - f(x0 - h))/(2*h) - true_fp) for h in hs]
plt.loglog(hs, errs)
```

the V-shape minimum is where I should set $h$. the minimum width also tells me the *achievable accuracy*: there is no point insisting on more precision than that.

## scaling with $|x|$

if $x$ is large, the *relative* perturbation is what matters. use $h = h_{\rm rel} \cdot |x|$:

$$f'(x) \approx \frac{f(x(1 + h_{\rm rel})) - f(x(1 - h_{\rm rel}))}{2 x h_{\rm rel}}$$

with $h_{\rm rel} \sim \epsilon^{1/3} \sim 10^{-5}$. this avoids the issue where $h \to 0$ relative to $|x|$ for large $x$, eating up significant figures.

a robust compromise:
$$h = h_0 + h_{\rm rel} |x|$$

with $h_0 \sim 10^{-8}$ as a floor for $x \approx 0$.

## when the function evaluation is expensive

if each $f$ call costs minutes (e.g. a numerical simulation), I cannot afford the function-evaluation budget that finite differences require. options:

- **automatic differentiation**: cost ~equal to one $f$ evaluation, exact accuracy
- **complex-step differentiation**: cost $\sim 1$ extra evaluation, near-machine-precision
- **adjoint method**: cost $\sim 2$ evaluations for the full gradient, used in PDE-constrained optimization

for $n$-dimensional gradients, finite differences cost $\sim n$ evaluations. AD's reverse mode costs $\sim 1$ regardless of $n$ — the deep-learning miracle.

## the worst case: noisy $f$

if $f$ is itself noisy (Monte Carlo estimate, simulation output), the "machine epsilon" $\epsilon$ should be replaced by the *noise level* $\sigma$. then:

- forward $f'$: $h_{\rm opt} \sim \sqrt{\sigma}$, error $\sim \sqrt{\sigma}$. for $\sigma = 10^{-3}$ the error is $\sim 10^{-1.5}$ — useless
- the right approach is **smoothing first**, see [Derivatives of noisy data](../../02_Zettel/Theory/Derivatives of noisy data.html)

## see also

- [Forward backward and central differences](../../02_Zettel/Theory/Forward backward and central differences.html)
- [Roundoff vs truncation balance](../../02_Zettel/Theory/Roundoff vs truncation balance.html)
- [Floating point representation and rounding errors](../../02_Zettel/Theory/Floating point representation and rounding errors.html)
- [Derivatives of noisy data](../../02_Zettel/Theory/Derivatives of noisy data.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
