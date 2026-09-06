---
layout: default
title: "N-body with Euler vs midpoint vs leapfrog"
---

# N-body with Euler vs midpoint vs leapfrog

the canonical demonstration in computational astrophysics: integrate a Kepler orbit (or a 3-body system) for many periods with three different schemes and look at the resulting trajectories and energies. shows in one picture why symplectic integrators are essential for long-time gravitational dynamics.

## the three schemes side by side

for the equation $\ddot{\mathbf{r}} = \mathbf{a}(\mathbf{r})$ with $\mathbf{a} = -GM\hat{\mathbf{r}}/r^2$ (Kepler):

**Euler** (1st order, *not* symplectic):
$$\mathbf{r}_{n+1} = \mathbf{r}_n + h \mathbf{v}_n$$
$$\mathbf{v}_{n+1} = \mathbf{v}_n + h \mathbf{a}(\mathbf{r}_n)$$

**Midpoint** (RK2, 2nd order, *not* symplectic):
$$\mathbf{r}_{n+1/2} = \mathbf{r}_n + \tfrac{h}{2} \mathbf{v}_n$$
$$\mathbf{v}_{n+1/2} = \mathbf{v}_n + \tfrac{h}{2} \mathbf{a}(\mathbf{r}_n)$$
$$\mathbf{r}_{n+1} = \mathbf{r}_n + h \mathbf{v}_{n+1/2}$$
$$\mathbf{v}_{n+1} = \mathbf{v}_n + h \mathbf{a}(\mathbf{r}_{n+1/2})$$

**Leapfrog** (DKD form, 2nd order, **symplectic**):
$$\mathbf{r}_{n+1/2} = \mathbf{r}_n + \tfrac{h}{2} \mathbf{v}_n$$
$$\mathbf{v}_{n+1} = \mathbf{v}_n + h \mathbf{a}(\mathbf{r}_{n+1/2})$$
$$\mathbf{r}_{n+1} = \mathbf{r}_{n+1/2} + \tfrac{h}{2} \mathbf{v}_{n+1}$$

note the structural similarity between midpoint and leapfrog. the *sequence of operations* is what makes leapfrog symplectic and midpoint not. specifically: leapfrog updates $\mathbf{v}$ using $\mathbf{a}$ at the half-step *position*, then uses the *new* $\mathbf{v}$ to advance $\mathbf{r}$. midpoint uses the *original* $\mathbf{v}_n$ to advance $\mathbf{r}$ to $t + h$.

## the energy curves

plot $E(t)/E_0 - 1$ for a Kepler orbit, fixed $h$, 100 orbital periods:

- **Euler**: exponential growth, $\Delta E/E$ reaches ~1 after a few orbits. orbit spirals outward
- **midpoint**: linear drift in $\Delta E/E$, reaching ~0.01 after 100 orbits at moderate $h$. orbit slowly precesses and grows
- **leapfrog**: bounded oscillation in $\Delta E/E$ at amplitude ~$10^{-5}$ for $h = T/100$. orbit closes on itself, no drift even for $10^6$ orbits

this is *the* standard plot every computational astrophysics course ends with. it teaches:
1. higher-order methods are not enough; structure preservation matters
2. for long-time Hamiltonian integration, **symplectic > order**

## the python comparison code

```python
def kepler_acceleration(r, GM=1.0):
    return -GM * r / np.linalg.norm(r)**3

def integrate_kepler(scheme, T_total, h, r0, v0):
    n_steps = int(T_total / h)
    r = np.zeros((n_steps + 1, 2)); r[0] = r0
    v = np.zeros((n_steps + 1, 2)); v[0] = v0
    for i in range(n_steps):
        r[i+1], v[i+1] = scheme(r[i], v[i], h)
    return r, v

def euler_step(r, v, h):
    a = kepler_acceleration(r)
    return r + h*v, v + h*a

def midpoint_step(r, v, h):
    a = kepler_acceleration(r)
    r_half = r + 0.5*h*v
    v_half = v + 0.5*h*a
    a_half = kepler_acceleration(r_half)
    return r + h*v_half, v + h*a_half

def leapfrog_step(r, v, h):
    r_half = r + 0.5*h*v
    a_half = kepler_acceleration(r_half)
    v_new = v + h*a_half
    r_new = r_half + 0.5*h*v_new
    return r_new, v_new
```

initial condition for a circular orbit at radius 1: $\mathbf{r}_0 = (1, 0)$, $\mathbf{v}_0 = (0, 1)$. period $T = 2\pi$.

## the diagnostic plot

```python
fig, axes = plt.subplots(2, 3, figsize=(15, 8))
schemes = [('Euler', euler_step), ('Midpoint', midpoint_step), ('Leapfrog', leapfrog_step)]
for i, (name, scheme) in enumerate(schemes):
    r, v = integrate_kepler(scheme, T_total=100*2*np.pi, h=0.01, r0=[1,0], v0=[0,1])
    
    # orbit
    axes[0, i].plot(r[:, 0], r[:, 1], lw=0.5)
    axes[0, i].set_aspect('equal'); axes[0, i].set_title(name)
    
    # energy
    E = 0.5 * np.sum(v**2, axis=1) - 1.0/np.linalg.norm(r, axis=1)
    axes[1, i].plot(np.abs((E - E[0])/E[0]))
    axes[1, i].set_yscale('log')
    axes[1, i].set_xlabel('step'); axes[1, i].set_ylabel('|ΔE/E|')

plt.tight_layout()
```

expected:
- Euler orbit spirals out, energy grows exponentially
- midpoint orbit precesses but stays bounded, energy creeps linearly
- leapfrog orbit is closed, energy oscillates with bounded amplitude

## the moral

for a *gravitational* (Hamiltonian) system, symplectic integrators are not optional — they are what makes long-time integration meaningful. for short integrations (a few orbital periods), any decent scheme works. for long integrations (cosmological simulations, planetary system stability over Gyr), only symplectic schemes are trusted.

the cost of leapfrog is the same as midpoint (one acceleration per step). there is no reason *not* to use leapfrog for any second-order Hamiltonian system unless the problem requires higher order, in which case use [Fourth-order Hermite predictor-corrector](../../02_Zettel/Theory/Fourth-order Hermite predictor-corrector.md) or higher-order symplectic schemes (Forest-Ruth, Yoshida).

## the exam connection

the exam template's exercise 4 (Pythagorean three-body) asks for **midpoint** integration. this is *deliberate*: the midpoint scheme will show a non-trivial energy drift, which is the diagnostic the question is testing. if I integrated the same problem with leapfrog, $|\Delta E/E|$ would be much smaller — a different answer.

so for the exam, the question's choice of integrator is part of the problem. follow what is asked.

## see also

- [Euler method](../../02_Zettel/Theory/Euler method.md)
- [Runge-Kutta 2 midpoint method](../../02_Zettel/Theory/Runge-Kutta 2 midpoint method.md)
- [Leapfrog integrator](../../02_Zettel/Theory/Leapfrog integrator.md)
- [Astrophysical N-body problem formulation](../../02_Zettel/Theory/Astrophysical N-body problem formulation.md)
- [Energy conservation as a diagnostic](../../02_Zettel/Theory/Energy conservation as a diagnostic.md)
- [The Pythagorean three-body problem](../../02_Zettel/Theory/The Pythagorean three-body problem.md)
- [Mathematical_Numerical_Methods_MOC](../../00_Atlas/Mathematical_Numerical_Methods_MOC.md)
