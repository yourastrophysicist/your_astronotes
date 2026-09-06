---
layout: default
title: "Systems of ODEs and higher-order ODEs"
---

# Systems of ODEs and higher-order ODEs

every higher-order ODE is equivalent to a first-order *system*. and every system is what numerical integrators expect. converting between them is the first step of any nontrivial integration problem.

## the conversion: higher-order → first-order system

given a single second-order ODE
$$\ddot y = f(y, \dot y, t)$$

introduce $v = \dot y$ as a new variable. then I have a 2D system:

$$\dot y = v$$
$$\dot v = f(y, v, t)$$

state vector: $\mathbf{Y} = (y, v)^T$. the right-hand side function for an integrator:

$$\dot{\mathbf{Y}} = \mathbf{F}(\mathbf{Y}, t) = (v, f(y, v, t))^T$$

I now apply Euler, RK4, or anything else to this 2D vector.

## third- and higher-order ODEs

same idea. a $k$-th order ODE becomes a $k$-D first-order system by introducing $k - 1$ new variables for the lower derivatives. for $\dddot y = f(y, \dot y, \ddot y, t)$:

$$\mathbf{Y} = (y, v, a)^T, \quad \dot v = a, \quad \dot a = f(y, v, a, t)$$

a $k$-th order ODE in $n$ variables becomes a $kn$-D first-order system.

## the harmonic oscillator example

$\ddot x + \omega^2 x = 0$ (a unit-mass harmonic oscillator).

state: $(x, v)$ with $v = \dot x$. system:
$$\dot x = v$$
$$\dot v = -\omega^2 x$$

python:
```python
def rhs_oscillator(state, t, omega=1.0):
    x, v = state
    return np.array([v, -omega**2 * x])

# integrate
state = np.array([1.0, 0.0])     # x=1, v=0
for i in range(N):
    state = rk4_step(rhs_oscillator, state, t, h)
    t += h
```

## N-body system

for $N$ particles in 3D, each with position $\mathbf{r}_i$ and velocity $\mathbf{v}_i$, the second-order ODEs are
$$\ddot{\mathbf{r}}_i = \mathbf{a}_i(\mathbf{r}_1, \ldots, \mathbf{r}_N)$$

state: $(\mathbf{r}_1, \ldots, \mathbf{r}_N, \mathbf{v}_1, \ldots, \mathbf{v}_N)$, total dimension $6N$. system:

$$\dot{\mathbf{r}}_i = \mathbf{v}_i$$
$$\dot{\mathbf{v}}_i = \mathbf{a}_i$$

python (flat state vector for `scipy.integrate.solve_ivp`):

```python
def rhs_nbody(t, y, masses):
    N = len(masses)
    r = y[:3*N].reshape(N, 3)
    v = y[3*N:].reshape(N, 3)
    a = compute_acceleration(r, masses)
    return np.concatenate([v.flatten(), a.flatten()])
```

## the generic recipe

every problem with second-order time evolution (Newton's law, Schrödinger equation, wave equation) becomes a first-order system after one variable substitution. the substitution is mechanical; once made, every numerical method applies.

## stiff systems

a system is **stiff** if the equations have widely separated timescales: some variables evolve fast, others slow. the integrator's stability requires resolving the *fastest* timescale, but the *interesting* dynamics is on the slow one. ratio: many orders of magnitude.

example: chemical reaction networks where forward and backward rates differ by $10^{10}$. or stellar atmosphere temperature profiles with both radiative and conductive transport.

stiff systems require **implicit** integrators (BDF, Radau in scipy) — explicit methods waste enormous effort on the fast modes that don't matter.

## Hamiltonian structure

if the system comes from a Hamiltonian $H(\mathbf{q}, \mathbf{p})$, the equations of motion are

$$\dot{\mathbf{q}} = \partial H/\partial \mathbf{p}, \quad \dot{\mathbf{p}} = -\partial H/\partial \mathbf{q}$$

these have **symplectic** structure that should be preserved by the integrator. use [leapfrog](../../02_Zettel/Theory/Leapfrog integrator.md) or symplectic RK schemes, not generic RK4. see also [Energy conservation as a diagnostic](../../02_Zettel/Theory/Energy conservation as a diagnostic.md).

## boundary conditions

a system of $k$ first-order ODEs needs $k$ initial conditions to specify a unique solution (initial value problem) — typically values of all components at $t_0$.

if instead the conditions are split: some at $t_0$, some at $t_f$ → boundary value problem (BVP). use [shooting](../../02_Zettel/Theory/Shooting method.md) or `scipy.integrate.solve_bvp`.

## the python convention

`scipy.integrate.solve_ivp` expects `f(t, y)` where `y` is a 1D state vector. if my problem has natural matrix structure (positions and velocities of $N$ particles), I flatten:

```python
y_flat = np.concatenate([r.flatten(), v.flatten()])
sol = solve_ivp(rhs_flat, (t0, tf), y_flat, ...)
r_history = sol.y[:3*N].reshape(N, 3, len(sol.t))
v_history = sol.y[3*N:].reshape(N, 3, len(sol.t))
```

## see also

- [Euler method](../../02_Zettel/Theory/Euler method.md)
- [Runge-Kutta 4 method](../../02_Zettel/Theory/Runge-Kutta 4 method.md)
- [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.md)
- [Astrophysical N-body problem formulation](../../02_Zettel/Theory/Astrophysical N-body problem formulation.md)
- [Built-in scipy integrators](../../02_Zettel/Theory/Built-in scipy integrators.md)
- [Initial value vs boundary value problems](../../02_Zettel/Theory/Initial value vs boundary value problems.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
