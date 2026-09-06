---
layout: default
title: "Built-in scipy integrators"
---

# Built-in scipy integrators

`scipy.integrate` has the production-grade quadrature and ODE integration tools. for most real work, I use these instead of writing my own. the exam usually asks for "by hand" implementations, but knowing the production version lets me cross-check.

## quadrature (numerical integration of $f(x)$)

### `scipy.integrate.quad`

adaptive Gauss-Kronrod quadrature. handles smooth, singular, and oscillatory integrands. returns the integral and an error estimate:

```python
from scipy.integrate import quad

I, err = quad(lambda x: np.exp(-x**2), 0, 1)
print(f"I = {I:.10f} ± {err:.2e}")
# I = 0.7468241328 ± 8.29e-15
```

handles **infinite limits**:
```python
I, err = quad(lambda x: np.exp(-x**2), 0, np.inf)
# I = 0.886227 (= sqrt(pi)/2)
```

handles **singularities** at endpoints with `points=[c]` to flag them.

### `scipy.integrate.simpson` (or `simps` in older scipy)

Simpson's rule on given samples. needs at least 3 points:

```python
from scipy.integrate import simpson

x = np.linspace(0, 1, 101)
y = np.sin(x)
I = simpson(y, x=x)
```

useful when I have $y$ already computed and just need to integrate, e.g. data from another simulation.

### `scipy.integrate.trapezoid` (or `numpy.trapz`)

same idea but second-order:

```python
I = np.trapz(y, x)        # numpy
I = scipy.integrate.trapezoid(y, x)
```

### `scipy.integrate.dblquad`, `tplquad`, `nquad`

multi-dimensional adaptive quadrature for 2D, 3D, and arbitrary $d$:

```python
from scipy.integrate import dblquad

I, err = dblquad(lambda y, x: np.exp(-x**2 - y**2),
                 0, np.inf, 0, np.inf)
# note: inner function is f(y, x), with y the inner integration
```

beyond 4D, use Monte Carlo (`scipy.integrate.dblquad` becomes prohibitively slow).

## ODEs (initial value problems)

### `scipy.integrate.solve_ivp`

the modern interface, replacing the legacy `odeint`:

```python
from scipy.integrate import solve_ivp

def rhs(t, y):
    return [y[1], -y[0]]            # harmonic oscillator

sol = solve_ivp(rhs, t_span=(0, 100), y0=[1, 0],
                method='RK45',
                rtol=1e-8, atol=1e-10,
                dense_output=True)

# access
sol.t, sol.y                        # internal time grid and solution
sol.sol(t_query)                    # interpolated solution at any t
sol.success                         # True if converged
```

available methods:

- `'RK45'`: Dormand-Prince RK4(5), the default. good for general non-stiff problems
- `'RK23'`: Bogacki-Shampine RK2(3), faster but less accurate
- `'DOP853'`: Dormand-Prince 8(5,3), high-accuracy explicit. great for smooth problems requiring many digits
- `'Radau'`: implicit Runge-Kutta of Radau IIA family, order 5. for stiff problems
- `'BDF'`: variable-order multistep BDF for stiff problems. workhorse for chemical kinetics, plasma physics
- `'LSODA'`: automatically switches between Adams (non-stiff) and BDF (stiff)

choose **stiff methods** (Radau, BDF) when:
- equations have widely separated timescales (factor $\gg 100$ between fastest and slowest mode)
- explicit methods take an absurdly small timestep to stay stable
- diagnostic: explicit method runs forever or blows up

### controlling output

```python
t_eval = np.linspace(0, 10, 100)
sol = solve_ivp(rhs, (0, 10), y0, t_eval=t_eval)
# sol.y is at the requested t_eval points
```

### events (root-finding during integration)

stop or record when a condition is met:

```python
def hit_zero(t, y):
    return y[0]               # event triggers when y[0] crosses 0

hit_zero.terminal = True       # stop integration on event
hit_zero.direction = -1        # only when crossing from + to -

sol = solve_ivp(rhs, (0, 100), [1, 0], events=hit_zero)
# sol.t_events gives the event times
```

useful for finding orbital period, perihelion passage, escape time, etc.

## boundary value problems

### `scipy.integrate.solve_bvp`

```python
from scipy.integrate import solve_bvp

def rhs(x, y):
    return np.vstack([y[1], -y[0]])

def bc(ya, yb):
    return np.array([ya[0] - 0, yb[0] - 1])    # y(0) = 0, y(L) = 1

x = np.linspace(0, np.pi, 5)
y_init = np.zeros((2, x.size))
sol = solve_bvp(rhs, bc, x, y_init)
```

uses collocation, an alternative to [shooting](../../02_Zettel/Theory/Shooting method.html). usually more robust.

## when to roll my own

- **the exam asks for it**: explicitly write the algorithm by hand
- **I need a specific symplectic method** (leapfrog, Hermite) that scipy doesn't ship
- **I need diagnostic information** (energy, momentum) tracked at every step
- **I need to instrument the integration** with custom logic (close-encounter detection, mass loss)

for everything else, use the scipy black box. it has been tested by thousands of users and is faster than anything I will write.

## see also

- [Trapezoidal rule](../../02_Zettel/Theory/Trapezoidal rule.html)
- [Simpson's rule](../../02_Zettel/Theory/Simpson's rule.html)
- [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.html)
- [Adaptive step size control](../../02_Zettel/Theory/Adaptive step size control.html)
- [Shooting method](../../02_Zettel/Theory/Shooting method.html)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.html)
