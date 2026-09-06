---
layout: default
title: "Floating point representation and rounding errors"
---

# Floating point representation and rounding errors

a computer cannot store $\pi$. a computer cannot store $1/3$. a computer cannot even store $0.1$. it stores a *finite-precision approximation* of every real number, and the gap between the real number and the stored number is the source of every weird error in numerical code.

## the IEEE 754 double-precision number

modern python floats are 64 bits, IEEE 754 double precision, laid out as:

$$x = (-1)^s \times 1.m \times 2^{e}$$

with **1 sign bit**, **11 exponent bits** (biased: store $e + 1023$), **52 mantissa bits** (the leading $1.$ is implicit). the result:

- relative precision $\epsilon \approx 2.22 \times 10^{-16}$ (the **machine epsilon**, $2^{-52}$)
- range $\sim 10^{-308}$ to $\sim 10^{308}$
- about **15-17 significant decimal digits**

```python
import numpy as np
np.finfo(float).eps      # 2.220446049250313e-16
np.finfo(float).max      # 1.7976931348623157e+308
np.finfo(float).tiny     # 2.2250738585072014e-308
```

## what this means in practice

- **numbers below $10^{-308}$ underflow to 0**. above $10^{308}$ overflow to `inf`. there are also **subnormal** numbers near zero with reduced precision
- **two numbers that differ by less than $\epsilon \cdot \max(|a|, |b|)$ are *the same* float**. this is why `0.1 + 0.2 == 0.3` returns `False` — `0.1` and `0.2` cannot both be exactly represented in binary, and their sum disagrees with `0.3` (also inexact) at the 17th digit

```python
>>> 0.1 + 0.2 == 0.3
False
>>> 0.1 + 0.2
0.30000000000000004
```

- **integer arithmetic is exact for $|n| < 2^{53}$**, then accumulates a 1-bit error per operation

## the three big rounding errors

### 1. catastrophic cancellation

subtracting two nearly-equal numbers leaves only the digits where they disagree. if both have 16 digits and they agree to 13, the result has only 3 reliable digits. this is the most dangerous error because the loss is invisible — the answer looks fine.

example: forward finite difference $f'(x) \approx [f(x+h) - f(x)]/h$ for tiny $h$. the numerator is the cancellation of two nearly-equal values, divided by tiny $h$. result: noise.

mitigation:
- use **central differences** instead of forward where possible
- **rearrange** the formula algebraically: $\sqrt{x+h} - \sqrt{x} = h/(\sqrt{x+h} + \sqrt{x})$, no cancellation in the right form
- choose the **balanced step size** $h \sim \sqrt{\epsilon}$ that minimizes (truncation + roundoff)

### 2. accumulation in long sums

summing $N$ floats, each with error $\sim \epsilon |x_i|$, gives final error $\sim \sqrt{N}\epsilon \langle|x|\rangle$ in the worst case (random) or $\sim N\epsilon$ in the worst-worst case (correlated). for $N = 10^9$ this can be a 1% error.

mitigation:
- **Kahan summation** keeps a running compensation term, error reduced to $O(\epsilon)$ independent of $N$
- numpy's `np.sum` uses pairwise summation, error $O(\epsilon \log N)$ — better than naive but worse than Kahan
- when in doubt, sum smallest-to-largest

### 3. order of operations matters

floating-point arithmetic is *not associative*. $(a + b) + c \neq a + (b + c)$ in general. for `a = 1e20, b = -1e20, c = 1`:

```python
>>> (1e20 + -1e20) + 1
1.0
>>> 1e20 + (-1e20 + 1)
0.0    # the +1 vanished into the 1e20
```

the lesson: when summing terms of wildly different magnitudes, sort first.

## scientific notation and how to think about precision

every float carries an *implicit error* of $\sim \epsilon \cdot |x|$. so a result of `1.234567890123456` should not be reported beyond 15-16 digits, and any computation that produces 20 digits is lying about the last few.

a useful rule of thumb: each **floating-point operation** loses at most one bit of precision. after $N$ operations, expect $\log_2 N$ bits gone, i.e. $\sim N$ for $N$ small but $\sim \log N$ on average. for $N = 10^6$ steps of an ODE: still 13-14 reliable digits. for $N = 10^{10}$: only 10-11. **this is why long-time N-body integrations need symplectic schemes**: they protect the energy from accumulated rounding.

## machine epsilon as a tool

the standard test for "are two floats equal":

```python
def isclose(a, b, rtol=1e-12, atol=1e-15):
    return abs(a - b) <= atol + rtol * abs(b)
```

(or just use `np.isclose`). never use `==` on floats unless I am certain the values came from exact integer-coded sources.

## what overflow and underflow look like in physics code

- **boltzmann factors** $e^{-E/kT}$ at large $E/kT$ underflow to 0 — fine, often correct
- **partition functions** $\sum_i e^{-E_i/kT}$ where one $E_i$ is much smaller than the rest: subtract the minimum first, $\sum_i e^{-(E_i - E_{\min})/kT}$, to avoid both overflow and underflow
- **likelihood functions**: work in log space, $\log P = \sum \log p_i$, never $P = \prod p_i$
- **N-body force computations**: $r^{-3}$ blows up if $r \to 0$, so use a softening $r \to \sqrt{r^2 + \epsilon^2}$

## see also

- [Truncation error and order of accuracy](../../02_Zettel/Theory/Truncation error and order of accuracy.html) — the *other* error type
- [Roundoff vs truncation balance](../../02_Zettel/Theory/Roundoff vs truncation balance.html) — the U-curve, optimal step size
- [Computational complexity and speed](../../02_Zettel/Theory/Computational complexity and speed.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
