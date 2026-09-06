---
layout: default
title: "Bulirsch-Stoer extrapolation"
---

# Bulirsch-Stoer extrapolation

a high-accuracy ODE integrator that uses [Modified midpoint method](../../02_Zettel/Theory/Modified midpoint method.md) at multiple step sizes, then Richardson-extrapolates to $h = 0$. for *very smooth* integrands and high precision targets, it can outperform RK4 by orders of magnitude — ten or more digits of accuracy with a few dozen function evaluations.

## the idea

the modified midpoint method's error expansion is purely in even powers of $h$:

$$T(h) = T(0) + a_1 h^2 + a_2 h^4 + a_3 h^6 + \cdots$$

run modified midpoint at $h_1, h_2, h_3, \ldots$ (decreasing), giving estimates $T(h_1), T(h_2), \ldots$. then **fit a polynomial in $h^2$** through the points and extrapolate to $h = 0$. the more steps in the table, the higher the order of the extrapolation, and the better the estimate.

## the algorithm

for one macrostep from $t$ to $t + H$:

1. integrate from $t$ to $t + H$ using modified midpoint with $n_1, n_2, n_3, \ldots$ substeps (typical sequence: $n_k = 2k$, so $h_k = H/(2k)$)
2. build a triangular extrapolation table $T_{k,j}$ via Neville's formula:
$$T_{k,0} = \text{modified midpoint at } n_k \text{ substeps}$$
$$T_{k,j} = T_{k,j-1} + \frac{T_{k,j-1} - T_{k-1,j-1}}{(h_{k-j}/h_k)^2 - 1}$$
3. continue adding rows until the diagonal $T_{k,k}$ converges to the desired tolerance
4. the final $T_{k,k}$ is the result for this macrostep, accurate to order $2k$

## adaptive macrostep size

the algorithm uses adaptivity at the macrostep level (not the substep level): if the table converges quickly with small $k$, increase $H$ for the next macrostep. if it requires many rows or fails to converge, decrease $H$.

this is what makes it efficient: smooth regions get large $H$ with few rows of the table; rough regions get small $H$.

## python (sketch)

```python
def bulirsch_stoer_step(f, y, t, H, tol=1e-10):
    n_seq = [2, 4, 6, 8, 12, 16, 24, 32, 48, 64]
    T = []                                                # extrapolation table
    for k, n in enumerate(n_seq):
        T_k0 = modified_midpoint(f, y, t, H, n)
        T_row = [T_k0]
        h_k_sq = (H / n)**2
        for j in range(1, k + 1):
            h_kj_sq = (H / n_seq[k - j])**2
            T_row.append(T_row[-1] + (T_row[-1] - T[-1][j-1]) /
                         ((h_kj_sq / h_k_sq) - 1))
        T.append(T_row)
        if k > 0 and np.max(np.abs(T[-1][-1] - T[-2][-1])) < tol:
            return T[-1][-1]
    return T[-1][-1]                                       # didn't converge
```

real implementations (`scipy.integrate.solve_ivp` with method `'BS'` if available, or in older codes `odeint` with `Bulirsch-Stoer`) include sophisticated step-size control and recovery from failed steps.

## strengths

- **highest accuracy per function evaluation** for smooth problems; routinely produces 10-15 digit answers
- **adaptive**: efficiently handles regions where the solution is smooth at large $H$, shrinks $H$ where needed
- **Richardson extrapolation** is mathematically elegant and clean

## weaknesses

- **only works for smooth integrands**: if there is a discontinuity, kink, or sharp feature in the interval, the polynomial extrapolation fails and the table doesn't converge
- **expensive per macrostep** if many rows are needed
- **not symplectic**: for long-time Hamiltonian integration, leapfrog still wins on energy conservation
- **complex to implement correctly**: the failure-recovery logic is intricate

## when to use Bulirsch-Stoer

- **smooth ODEs**: orbital motion in Keplerian or near-Keplerian regimes, no encounters
- **need very high accuracy**: $\Delta E/E < 10^{-12}$ for example
- **expensive force evaluations**: each call to $\mathbf{f}$ is slow, so trading more arithmetic per call for fewer calls is a win

example: the Voyager spacecraft trajectory was integrated for the original mission planning using Bulirsch-Stoer for the smooth interplanetary phases.

## when to use something else

- **close encounters or shocks**: Bulirsch-Stoer's macrostep keeps trying to reach $H$ in one piece, fails repeatedly. switch to RK45 with adaptive substeps or a Hermite scheme with collision detection
- **stiff ODEs**: use BDF or Radau (implicit methods)
- **long-time Hamiltonian dynamics**: leapfrog or symplectic schemes
- **just exploring**: RK45 (`solve_ivp`) is simpler and good enough for most situations

## astrophysics use cases

- **planetary ephemeris computations** (smooth, high accuracy needed)
- **interplanetary spacecraft trajectories** in cruise phase
- **secular evolution of orbital elements** under perturbations
- **stellar evolution computations** with smooth thermodynamic histories

## see also

- [Modified midpoint method](../../02_Zettel/Theory/Modified midpoint method.md)
- [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.md)
- [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.md)
- [Adaptive step size control](../../02_Zettel/Theory/Adaptive step size control.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
