---
layout: default
title: "Bisection method"
---

# Bisection method

the bulletproof root finder. given a continuous $f$ that changes sign on $[a, b]$ (i.e. $f(a) f(b) < 0$), there is at least one root in $[a, b]$ by the intermediate value theorem. bisection halves the interval each step until the root is bracketed within tolerance.

## the algorithm

1. start with $[a, b]$ such that $f(a) f(b) < 0$
2. compute $c = (a + b)/2$ and $f(c)$
3. if $f(a) f(c) < 0$, the root is in $[a, c]$: set $b \leftarrow c$. otherwise it is in $[c, b]$: set $a \leftarrow c$
4. repeat until $|b - a| < \epsilon$ (or $|f(c)| < \epsilon$)

## python implementation

```python
def bisection(f, a, b, tol=1e-10, max_iter=1000):
    fa, fb = f(a), f(b)
    if fa * fb > 0:
        raise ValueError("no sign change on [a, b]")
    for k in range(max_iter):
        c = (a + b) / 2
        fc = f(c)
        if abs(fc) < tol or (b - a) < tol:
            return c, k + 1
        if fa * fc < 0:
            b, fb = c, fc
        else:
            a, fa = c, fc
    raise RuntimeError("did not converge")
```

## convergence

the interval halves each step, so after $k$ steps the bracket has width $(b - a)/2^k$. to reach tolerance $\epsilon$:

$$k \geq \log_2\!\left(\frac{b - a}{\epsilon}\right)$$

for $b - a = 1$ and $\epsilon = 10^{-10}$: $k \approx 33$ iterations. for $\epsilon = \epsilon_{\rm machine} \approx 10^{-16}$: $k \approx 53$ — bisection cannot improve faster than this regardless of how clever the function is.

this is **linear convergence** with rate $1/2$. slow compared to Newton-Raphson's quadratic, but **guaranteed** (no convergence test needed if the bracket is valid).

## strengths

- **always converges** if the function is continuous and the bracket has a sign change
- **does not need the derivative**
- **does not blow up** at flat or oscillatory regions of $f$
- **simple to implement** — five lines

## weaknesses

- **slow**: 33 iterations to reach $10^{-10}$, vs ~5 for Newton-Raphson
- **only finds one root** — if there are multiple roots in the bracket, bisection finds *some* root (the one that survives the sign-change tracking) but not all
- **needs a bracket** — must already know two points where $f$ takes opposite signs. for a function I know little about, this can require a separate "search for a sign change" step

## when to use bisection

- **first pass** on a function I do not know well: bisect to a few digits, then switch to Newton for the final digits
- **flat or noisy derivatives**: when $f'(x)$ is small or unreliable, Newton fails and bisection just keeps grinding
- **exam-grade reliability**: if I am writing a script that needs to work and I cannot afford to debug Newton's failure modes, bisection is the safe choice

## the hybrid: Brent's method

`scipy.optimize.brentq` combines bisection (for safety) with inverse quadratic interpolation (for speed). it is *the* default 1D root finder in scipy and what I should use in practice. it has both bisection's guaranteed convergence and Newton-like speed where the function is smooth.

```python
from scipy.optimize import brentq
root = brentq(f, a, b)
```

## astrophysics use cases

- **finding orbital roots**: where does a Keplerian orbit cross a given radius? bisect on $r(t) - r_0 = 0$
- **finding equation-of-state intersections**: opacity = energy generation, given densities and temperatures
- **finding spectral line centers**: derivative of intensity = 0 — bisect or use a smarter method
- **finding cosmological recombination redshift**: $X_e(z) - 0.5 = 0$ from Saha equation
- **inverting a tabulated function**: given $y$, find $x$ such that $f(x) = y$ when $f$ is monotonic but not analytic

## see also

- [Newton-Raphson method](../../02_Zettel/Theory/Newton-Raphson method.md)
- [Relaxation method](../../02_Zettel/Theory/Relaxation method.md)
- [Newton-Raphson for systems of equations](../../02_Zettel/Theory/Newton-Raphson for systems of equations.md)
- [Choosing a root finder](../../02_Zettel/Theory/Choosing a root finder.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
