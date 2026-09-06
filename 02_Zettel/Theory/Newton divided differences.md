---
layout: default
title: "Newton divided differences"
---

# Newton divided differences

an algebraically equivalent rewriting of [Lagrange's polynomial](../../02_Zettel/Theory/Lagrange polynomial interpolation.md) that has one practical advantage: I can add a new data point without redoing the whole calculation. instead of $O(N)$ extra work for each new point, only $O(N)$ work *total* and only $O(1)$ when adding one more point at the end.

## the form

for data $(x_0, y_0), (x_1, y_1), \ldots, (x_N, y_N)$, the Newton form of the interpolating polynomial is

$$N(x) = a_0 + a_1 (x - x_0) + a_2 (x - x_0)(x - x_1) + \cdots + a_N \prod_{i=0}^{N-1}(x - x_i)$$

the coefficients $a_k$ are **divided differences** of the data:

$$a_k = f[x_0, x_1, \ldots, x_k]$$

with the recursive definition:

$$f[x_i] = y_i$$
$$f[x_i, x_{i+1}, \ldots, x_{i+k}] = \frac{f[x_{i+1}, \ldots, x_{i+k}] - f[x_i, \ldots, x_{i+k-1}]}{x_{i+k} - x_i}$$

## the divided-differences table

build a triangular table:

| $x_i$ | $y_i$ | 1st DD | 2nd DD | 3rd DD |
|---|---|---|---|---|
| $x_0$ | $y_0$ |  |  |  |
|       |       | $f[x_0,x_1]$ |  |  |
| $x_1$ | $y_1$ |  | $f[x_0,x_1,x_2]$ |  |
|       |       | $f[x_1,x_2]$ |  | $f[x_0,x_1,x_2,x_3]$ |
| $x_2$ | $y_2$ |  | $f[x_1,x_2,x_3]$ |  |
|       |       | $f[x_2,x_3]$ |  |  |
| $x_3$ | $y_3$ |  |  |  |

the diagonal coefficients $f[x_0, x_1, \ldots, x_k]$ are the Newton form's coefficients $a_k$.

## python implementation

```python
def divided_differences(x, y):
    N = len(x)
    coef = np.array(y, dtype=float)
    for j in range(1, N):
        for i in range(N - 1, j - 1, -1):
            coef[i] = (coef[i] - coef[i-1]) / (x[i] - x[i-j])
    return coef                       # the Newton form coefficients

def newton_evaluate(coef, x_data, x_query):
    N = len(coef)
    result = coef[N-1]
    for i in range(N - 2, -1, -1):
        result = result * (x_query - x_data[i]) + coef[i]
    return result
```

evaluation is via Horner's-rule-like nesting: multiply, add, multiply, add. each evaluation is $O(N)$, same as Lagrange. the win is in the *construction* and in the *update*.

## the equivalence with Lagrange

the polynomial values are the same:
$$N(x) = L(x) = \text{the unique interpolant of degree} \leq N$$

only the coefficients are arranged differently. Newton's basis is $\{1, (x-x_0), (x-x_0)(x-x_1), \ldots\}$ instead of Lagrange's $\{\ell_0, \ell_1, \ldots, \ell_N\}$.

## adding a new point

add $(x_{N+1}, y_{N+1})$ to the data. with Lagrange, every basis polynomial $\ell_i$ changes — start from scratch. with Newton, the *existing* coefficients $a_0, a_1, \ldots, a_N$ stay the same; I only need to compute one new coefficient $a_{N+1}$ via one more divided difference. extra cost: $O(N)$.

this is the practical advantage when interpolation points arrive incrementally.

## connection to Taylor series

if the points $x_0 \to x_1 \to \cdots$ all coalesce to the same point, the divided differences become *derivatives*:

$$\lim_{x_i \to x_0} f[x_0, x_1, \ldots, x_k] = \frac{f^{(k)}(x_0)}{k!}$$

so Newton's form *is* the Taylor series in the limit. the divided differences are the natural *discrete* analogues of derivatives.

## error formula

same as Lagrange, since the polynomials are equal:

$$f(x) - N(x) = \frac{f^{(N+1)}(\xi)}{(N+1)!} \prod_{i=0}^N (x - x_i)$$

so the same caveats apply: high-degree polynomial interpolation suffers from [Runge phenomenon](../../02_Zettel/Theory/Runge phenomenon.md) at equispaced nodes.

## when to use Newton vs Lagrange

- **adding points incrementally**: Newton wins
- **fixed data set, just want the polynomial**: either works, Newton is slightly less work to construct
- **closed-form analytic answer**: Lagrange is more compact symbolically
- **production interpolation**: neither — use cubic splines

## astrophysics use cases

- **adaptive Richardson extrapolation** (Bulirsch-Stoer): each new substep adds a column to the divided-differences table
- **iteratively refined interpolation** of a tabulated function
- **higher-order finite-difference stencils** can be derived as divided differences

## see also

- [Lagrange polynomial interpolation](../../02_Zettel/Theory/Lagrange polynomial interpolation.md)
- [Linear interpolation](../../02_Zettel/Theory/Linear interpolation.md)
- [Cubic spline interpolation](../../02_Zettel/Theory/Cubic spline interpolation.md)
- [Runge phenomenon](../../02_Zettel/Theory/Runge phenomenon.md)
- [Bulirsch-Stoer extrapolation](../../02_Zettel/Theory/Bulirsch-Stoer extrapolation.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
