---
layout: default
title: "Linear perturbation master equation"
---
## what I'm deriving

the evolution equation for a Fourier mode of the matter density contrast in an expanding background,

$$\ddot\delta_k + 2 H \dot\delta_k + \left(\frac{c_s^2 k^2}{a^2} - 4\pi G \bar\rho\right)\delta_k = 0$$

three effects appear, namely Hubble friction, pressure support and gravitational instability.

## conventions and symbols

| symbol | meaning |
|---|---|
| $\vec r$ | physical (proper) position |
| $\vec x = \vec r/a(t)$ | comoving position |
| $\rho(\vec r, t)$, $\vec u(\vec r, t)$, $\Phi(\vec r, t)$, $p$ | density, velocity, gravitational potential, pressure of the fluid |
| $\bar\rho(t)$ | background density |
| $\delta \equiv (\rho - \bar\rho)/\bar\rho$ | density contrast |
| $\vec v$ | peculiar velocity, $\vec u = H\vec r + \vec v$ |
| $\phi$ | perturbation of the potential, $\Phi = \bar\Phi + \phi$ |
| $c_s^2 \equiv (\partial p/\partial\rho)_S$ | adiabatic sound speed squared |
| $\vec k$ | comoving wavevector. the physical wavelength is $\lambda = 2\pi a/k$ |

in this file $k$ is a wavenumber. it is not the curvature constant.

## assumptions

1. **Newtonian fluid.** valid for non-relativistic matter on scales well inside the Hubble radius, $\lambda \ll c/H$.
2. **single fluid** with pressure a function of density only (adiabatic perturbations).
3. **linearity.** $|\delta| \ll 1$, and $\vec v$, $\phi$ are first-order small. products of perturbations are dropped.
4. the background is matter with negligible pressure, so $\bar\rho \propto a^{-3}$.

## derivation

### step 1 - fluid equations in physical coordinates

$$\text{continuity} \qquad \frac{\partial\rho}{\partial t}\bigg|_{\vec r} + \nabla_r\cdot(\rho\,\vec u) = 0$$

$$\text{Euler} \qquad \frac{\partial\vec u}{\partial t}\bigg|_{\vec r} + (\vec u\cdot\nabla_r)\,\vec u = -\frac{\nabla_rp}{\rho} - \nabla_r\Phi$$

$$\text{Poisson} \qquad \nabla_r^2\Phi = 4\pi G\rho$$

mass conservation, momentum conservation, and Newtonian gravity.

### step 2 - the background solution

try $\rho = \bar\rho(t)$, $\vec u = H(t)\,\vec r$, $\bar p = \bar p(t)$.

- continuity. $\nabla_r\cdot\vec r = 3$, so $\dot{\bar\rho} + 3H\bar\rho = 0$, which gives $\bar\rho \propto a^{-3}$.
- Poisson. the spherically symmetric solution is $\bar\Phi = \frac{2\pi G}{3}\bar\rho\,r^2$, with $\nabla_r\bar\Phi = \frac{4\pi G}{3}\bar\rho\,\vec r$.
- Euler. $\partial_t(H\vec r) = \dot H\vec r$ and $(H\vec r\cdot\nabla_r)H\vec r = H^2\vec r$. so $(\dot H + H^2)\,\vec r = -\frac{4\pi G}{3}\bar\rho\,\vec r$. since $\dot H + H^2 = \ddot a/a$, this is the [[Acceleration equation]] for dust.

the expanding background is an exact solution of the fluid equations. this matters, because in a static infinite medium there is no consistent unperturbed state and the original Jeans analysis had to ignore that (the Jeans swindle). in the expanding case there is nothing to ignore.

### step 3 - comoving coordinates

set $\vec r = a(t)\,\vec x$. the two derivative operators transform as follows.

- spatial gradient at fixed $t$. $\nabla_r = \dfrac{1}{a}\nabla_x$.
- time derivative. a function $F(\vec r, t)$ can be regarded as a function of $(\vec x, t)$. holding $\vec r$ fixed means $\vec x = \vec r/a$ changes at the rate $\partial_t\vec x|_{\vec r} = -H\vec x$. by the chain rule,

$$\frac{\partial}{\partial t}\bigg|_{\vec r} = \frac{\partial}{\partial t}\bigg|_{\vec x} - H\,\vec x\cdot\nabla_x$$

from now on an overdot means $\partial/\partial t$ at fixed $\vec x$ and $\nabla$ means $\nabla_x$.

a useful consequence. with $\vec u = \dot a\,\vec x + \vec v$, the convective derivative becomes

$$\frac{\partial}{\partial t}\bigg|_{\vec r} + \vec u\cdot\nabla_r = \frac{\partial}{\partial t}\bigg|_{\vec x} - H\vec x\cdot\nabla + \frac{1}{a}(\dot a\vec x + \vec v)\cdot\nabla = \frac{\partial}{\partial t}\bigg|_{\vec x} + \frac{1}{a}\vec v\cdot\nabla$$

the Hubble flow terms cancel. only the peculiar velocity advects in comoving coordinates.

### step 4 - perturb

$$\rho = \bar\rho(t)\,[1 + \delta(\vec x, t)], \qquad \vec u = \dot a\,\vec x + \vec v(\vec x, t), \qquad \Phi = \bar\Phi + \phi(\vec x, t), \qquad p = \bar p + \delta p$$

### step 5 - continuity

write continuity as $\left(\partial_t|_{\vec r} + \vec u\cdot\nabla_r\right)\rho + \rho\,\nabla_r\cdot\vec u = 0$ and use step 3. $\nabla_r\cdot\vec u = \frac1a\nabla\cdot(\dot a\vec x + \vec v) = 3H + \frac1a\nabla\cdot\vec v$.

$$\dot{\bar\rho}(1 + \delta) + \bar\rho\,\dot\delta + \frac{\bar\rho}{a}\vec v\cdot\nabla\delta + \bar\rho(1 + \delta)\left(3H + \frac1a\nabla\cdot\vec v\right) = 0$$

the terms $(\dot{\bar\rho} + 3H\bar\rho)(1 + \delta)$ vanish by the background equation. dividing by $\bar\rho$ leaves the exact result

$$\dot\delta + \frac{1}{a}\nabla\cdot\left[(1 + \delta)\,\vec v\right] = 0$$

and to first order

$$\boxed{\, \dot\delta + \frac{1}{a}\nabla\cdot\vec v = 0 \,} \qquad \text{(C)}$$

### step 6 - Euler

left side, using the convective derivative of step 3 acting on $\vec u = \dot a\vec x + \vec v$.

$$\left(\partial_t + \frac1a\vec v\cdot\nabla\right)(\dot a\,\vec x + \vec v) = \ddot a\,\vec x + \dot{\vec v} + \frac{\dot a}{a}\vec v + \frac1a(\vec v\cdot\nabla)\vec v$$

where $(\vec v\cdot\nabla)\vec x = \vec v$ was used. right side.

$$-\frac{1}{a}\nabla\bar\Phi - \frac{1}{a}\nabla\phi - \frac{1}{a\bar\rho(1 + \delta)}\nabla\delta p$$

the zeroth-order terms, $\ddot a\,\vec x = -\frac1a\nabla\bar\Phi = -\frac{4\pi G}{3}\bar\rho\,a\,\vec x$, cancel by step 2. for the pressure, adiabatic perturbations give $\delta p = c_s^2\,\delta\rho = c_s^2\bar\rho\,\delta$. dropping second-order terms $(\vec v\cdot\nabla)\vec v$ and $\delta\,\nabla\delta$,

$$\boxed{\, \dot{\vec v} + H\vec v = -\frac{1}{a}\nabla\phi - \frac{c_s^2}{a}\nabla\delta \,} \qquad \text{(E)}$$

the term $H\vec v$ says that without forces a peculiar velocity decays as $1/a$.

### step 7 - Poisson

$\nabla_r^2 = a^{-2}\nabla^2$. subtracting the background equation $\nabla_r^2\bar\Phi = 4\pi G\bar\rho$,

$$\boxed{\, \nabla^2\phi = 4\pi G\,a^2\,\bar\rho\,\delta \,} \qquad \text{(P)}$$

this one is exact, since the Poisson equation is linear.

### step 8 - eliminate $\vec v$

from (C), $\nabla\cdot\vec v = -a\,\dot\delta$. differentiate with respect to $t$ at fixed $\vec x$.

$$\nabla\cdot\dot{\vec v} = -\dot a\,\dot\delta - a\,\ddot\delta$$

take the divergence of (E).

$$\nabla\cdot\dot{\vec v} + H\,\nabla\cdot\vec v = -\frac{1}{a}\nabla^2\phi - \frac{c_s^2}{a}\nabla^2\delta$$

substitute the two expressions. on the left, $-\dot a\dot\delta - a\ddot\delta - Ha\dot\delta = -a\ddot\delta - 2\dot a\dot\delta$ since $Ha = \dot a$.

$$-a\,\ddot\delta - 2\dot a\,\dot\delta = -\frac{1}{a}\nabla^2\phi - \frac{c_s^2}{a}\nabla^2\delta$$

divide by $-a$.

$$\ddot\delta + 2H\dot\delta = \frac{1}{a^2}\nabla^2\phi + \frac{c_s^2}{a^2}\nabla^2\delta$$

### step 9 - eliminate $\phi$

insert (P).

$$\ddot\delta + 2H\dot\delta = 4\pi G\bar\rho\,\delta + \frac{c_s^2}{a^2}\nabla^2\delta$$

### step 10 - Fourier transform

the equation is linear with coefficients that depend on $t$ only, so plane waves in $\vec x$ decouple. write

$$\delta(\vec x, t) = \int\frac{d^3k}{(2\pi)^3}\;\delta_{\vec k}(t)\,e^{i\vec k\cdot\vec x}$$

then $\nabla^2 \to -k^2$.

$$\boxed{\, \ddot\delta_k + 2 H \dot\delta_k + \left(\frac{c_s^2 k^2}{a^2} - 4\pi G \bar\rho\right) \delta_k = 0 \,}$$

each comoving mode evolves independently. $k/a$ is the physical wavenumber.

## reading the three terms

1. $2H\dot\delta_k$. Hubble friction. it comes from the $H\vec v$ term in (E) and from $\partial_t(a\dot\delta)$. it turns the exponential growth of a static medium into a power law.
2. $c_s^2k^2/a^2$. pressure. a restoring force, stronger for short wavelengths.
3. $-4\pi G\bar\rho$. self-gravity. destabilising.

the sign of the bracket decides between oscillation and growth, which defines the Jeans scale, see [[Jeans length derivation]].

## checks

- **static limit.** $a = 1$, $H = 0$ gives $\ddot\delta_k = -(c_s^2k^2 - 4\pi G\bar\rho)\delta_k$, the Jeans dispersion relation.
- **no gravity.** $G \to 0$, $H = 0$ gives $\ddot\delta = c_s^2\nabla^2\delta$, the sound wave equation.
- **dimensions.** $c_sk/a$ and $\sqrt{G\bar\rho}$ are both inverse times.
- **vorticity.** only $\nabla\cdot\vec v$ couples to $\delta$. taking the curl of (E) gives $\partial_t(\nabla\times\vec v) = -H\,\nabla\times\vec v$, so vortical modes decay as $1/a$ and do not source density perturbations.

## extensions I should be able to state

- **several components.** if matter perturbations grow in a background that also contains a smooth component (radiation or $\Lambda$), the friction term uses the full $H$ and the source term uses only the clustering matter, $4\pi G\bar\rho_m\delta_m$. this is the starting point of [[Meszaros suppression]].
- **collisionless dark matter.** there is no pressure. the fluid description holds in the linear regime before orbit crossing, with $c_s \to 0$ (velocity dispersion gives a free-streaming scale that plays the role of the Jeans scale).
- **relativistic fluid.** for a fluid with $p = w\rho$ the gravitational term becomes $4\pi G\bar\rho(1 + w)(1 + 3w)$, which is $\frac{32\pi}{3}G\bar\rho$ for radiation.

## limitations

- subhorizon scales only. for $\lambda \gtrsim c/H$ the density contrast depends on the choice of time slicing (gauge) and general-relativistic perturbation theory is needed.
- linear only. it fails when $\delta \sim 1$. beyond that, see [[Spherical collapse delta_c]] or N-body simulations.

## questions I should be ready for

- *where does $2H\dot\delta$ come from?* one $H\dot\delta$ from the decay of peculiar velocities in (E), another from differentiating $\nabla\cdot\vec v = -a\dot\delta$.
- *why is there an $a^2$ in the Poisson equation?* $\nabla_r^2 = a^{-2}\nabla_x^2$.
- *what happens to the zeroth-order terms?* they cancel identically because the Hubble flow solves the unperturbed equations.
- *why can I Fourier transform?* the equation is linear and its coefficients do not depend on $\vec x$.
- *is $k$ physical or comoving?* comoving and constant in time. the physical wavenumber $k/a$ redshifts.

## board summary (60 seconds)

continuity, Euler, Poisson. background $\bar\rho(t)$, $\vec u = H\vec r$, $\bar\Phi = \frac{2\pi G}{3}\bar\rho r^2$. go to $\vec x = \vec r/a$, with $\nabla_r = \nabla_x/a$ and $\partial_t|_r = \partial_t|_x - H\vec x\cdot\nabla_x$. perturb and linearise, (C) $\dot\delta + \nabla\cdot\vec v/a = 0$, (E) $\dot{\vec v} + H\vec v = -\nabla\phi/a - c_s^2\nabla\delta/a$, (P) $\nabla^2\phi = 4\pi Ga^2\bar\rho\delta$. divergence of (E), use (C) for $\nabla\cdot\vec v$, use (P) for $\nabla^2\phi$. Fourier, $\ddot\delta_k + 2H\dot\delta_k + (c_s^2k^2/a^2 - 4\pi G\bar\rho)\delta_k = 0$.

## see also

- [[Jeans length derivation]] sets the balance between gravity and pressure.
- [[Growth factor matter era]] solves the equation for Einstein-de Sitter.
- [[Meszaros suppression]] solves it in the radiation era.
- [[Slow roll inflation]] supplies the initial $\delta_k$.
