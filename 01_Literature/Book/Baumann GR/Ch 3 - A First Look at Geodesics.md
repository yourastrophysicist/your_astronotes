---
layout: default
title: "Ch 3 - A First Look at Geodesics"
---

# Baumann Ch 3, A First Look at Geodesics

up: [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.html) · [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html)

*the chapter where the abstract math finally produces real physics. starting from the simplest possible action for a point particle, $S = -m \int d\tau$, we derive the geodesic equation and use it to predict Mercury's $43''$ perihelion precession and Eddington's $1.75''$ light deflection. these are the two predictions that made GR famous.*

---

## the question this chapter is trying to answer

> **given a curved spacetime (i.e., given the metric), what paths do free particles follow?**

in flat space, the answer is "straight lines." Newton's first law: free particles move with constant velocity. in curved space, "straight" is more subtle. a curve can be locally straight everywhere (parallel-transport its own tangent vector) without being globally a straight line in any flat-space sense.

the curves that generalize "straight lines" are called **geodesics**. they are the natural paths of free particles in any spacetime.

three equivalent ways to characterize a geodesic, all of which give the same equation:

1. **extremize the proper time** (length of the worldline)
2. **parallel-transport the tangent vector** along itself
3. **satisfy the geodesic equation** $\ddot x^\mu + \Gamma^\mu{}_{\alpha\beta}\dot x^\alpha \dot x^\beta = 0$

definition 1 is the variational version: geodesics are paths that locally extremize proper time. it makes physical sense: a free particle's worldline is "the most natural" between its endpoints. for timelike geodesics, this is the path of **maximum** proper time (the famous "twin paradox" inversion: the twin who stays behind ages more, because their worldline maximizes proper time, while the accelerating twin's worldline is shorter in proper time).

definition 2 is the geometric version: the tangent vector parallel-transports along the curve. think of a car driving on a curved road: as long as you do not turn the steering wheel, you are tracing a "straight line" of the road, locally. that is what parallel transport of the tangent does. the curve does not "turn off" itself.

definition 3 is the explicit ODE that we actually solve.

---

## 3.1, the action for a point particle

### the simplest possible action

start with a relativistic point particle of mass $m$. what is the simplest Lorentz-scalar action we can write down?

the answer is

$$\boxed{\,S = -m \int d\tau\,}$$

(setting $c = 1$). i can read this as "minus mass times proper time elapsed along the worldline." why this?

- the action must be **Lorentz-invariant**, so all observers calculate the same value
- the only natural invariant scalar along a worldline is **proper time** $\tau$
- the minus sign is convention (so that the action is minimized for the actual path in the non-relativistic limit, matching the Lagrangian $L = T - V$ pattern)
- the factor $m$ makes the action dimensionally correct (units of energy $\times$ time = action)

### sanity check 1, Minkowski limit

in flat Minkowski space with the particle moving at velocity $v$ relative to the lab, $d\tau = \sqrt{1 - v^2}\, dt$, so

$$S = -m \int dt\, \sqrt{1 - v^2}$$

expanding for small $v$:

$$S \approx \int dt\, \left(-m + \tfrac12 m v^2 + \cdots\right)$$

the first term is a constant (the "rest mass energy" $-mc^2$ in natural units, doesn't affect equations of motion). the second term is **the non-relativistic kinetic energy**. so the relativistic action reduces to Newton's free-particle Lagrangian. ✓

### sanity check 2, the equivalence principle is built in

in the weak-field metric $ds^2 = -(1 + 2\Phi)dt^2 + d\vec x^2$, the action becomes

$$S = -m \int dt\, \sqrt{(1 + 2\Phi) - v^2}$$

expanding for small $v$ and small $\Phi$:

$$S \approx \int dt\, \left(-m + \tfrac12 m v^2 - m \Phi + \cdots\right)$$

the first term is constant. the second is kinetic energy. **the third is exactly the gravitational potential energy** $-m\Phi$ from elementary mechanics.

> notice the deep thing: the same factor of $m$ appears in front of *both* the kinetic energy and the potential energy. they come from the **same** factor in the relativistic action. the inertial mass and the gravitational mass are the same thing because they are *literally the same parameter* in $S = -m \int d\tau$. the equivalence principle is not assumed, it is automatic.

---

## 3.2, deriving the geodesic equation

### setting up the variational problem

i want the path that extremizes the action

$$S = -m \int d\lambda\, \sqrt{-g_{\mu\nu} \dot x^\mu \dot x^\nu}$$

(with overdot $= d/d\lambda$, $\lambda$ some parameter along the path). the Euler-Lagrange equation, after some algebra (Baumann does it carefully in the box on page 36-37) and switching to proper time parametrization, gives

$$\boxed{\,\frac{d^2 x^\mu}{d\tau^2} + \Gamma^\mu{}_{\alpha\beta}\, \frac{dx^\alpha}{d\tau}\frac{dx^\beta}{d\tau} = 0\,}$$

with the [Christoffel symbols](../../../02_Zettel/Theory/Christoffel symbols.html) popping out exactly as

$$\Gamma^\mu{}_{\alpha\beta} = \tfrac12 g^{\mu\lambda}(\partial_\alpha g_{\beta\lambda} + \partial_\beta g_{\alpha\lambda} - \partial_\lambda g_{\alpha\beta})$$

> the deep thing: the Christoffel formula is **not assumed**. it is **forced** on us by the requirement that we extremize proper time. so the Christoffel symbols, which seemed arbitrary in chapter 2, are here revealed as the unique combination of metric derivatives that arises in the equation of motion.

### a smarter Lagrangian

the square root in $\sqrt{-g_{\mu\nu}\dot x^\mu \dot x^\nu}$ is annoying to work with. there is a trick: extremizing $G$ is equivalent to extremizing $G^2$, so use the **simpler Lagrangian**

$$\boxed{\,\mathcal{L} = -g_{\mu\nu}\, \frac{dx^\mu}{d\lambda}\frac{dx^\nu}{d\lambda}\,}$$

(no square root). this works for both massive **and massless particles** (you set $\mathcal{L} = -1$ for timelike, $\mathcal{L} = 0$ for null, as the constraint along the geodesic).

> in practice, this is the Lagrangian you should use. write it down for any metric, plug into Euler-Lagrange equations, get the geodesic equation. way faster than going through the Christoffel formula.

### the magic of cyclic coordinates

if a coordinate $x^{\alpha_*}$ does not appear in the metric (it is a **cyclic** or **ignorable** coordinate), then the Lagrangian doesn't depend on $x^{\alpha_*}$ either. by Euler-Lagrange,

$$\frac{d}{d\lambda}\left(\frac{\partial \mathcal{L}}{\partial \dot x^{\alpha_*}}\right) = 0 \quad\Rightarrow\quad p_{\alpha_*} \equiv g_{\alpha_* \nu}\, \frac{dx^\nu}{d\lambda} = \text{const}$$

i.e., **the conjugate momentum is conserved**. this is the GR version of Noether's theorem (a continuous symmetry of the metric implies a conserved quantity along geodesics).

a few examples:

- **Schwarzschild metric** has no $t$ dependence: conserved energy $E = (1 - 2GM/r)\dot t$
- **Schwarzschild metric** has no $\phi$ dependence: conserved angular momentum $L = r^2 \sin^2\theta \dot \phi$
- **FLRW metric** has spatial homogeneity: comoving observers have constant comoving coordinates

> this is why solving geodesics in Schwarzschild does not require touching the geodesic ODE directly. the energy and angular momentum conservation laws, plus the timelike normalization $g_{\mu\nu}\dot x^\mu \dot x^\nu = -1$, give us **three first-order conditions**, more than enough to reduce the 4D problem to a 1D radial problem.

---

## 3.3, the Newtonian limit

we want to check: in the limit of weak fields and slow motion, does the geodesic equation give us back Newton's law $\ddot{\vec x} = -\nabla \Phi$?

### the setup

three conditions:

1. **slow motion**: $|\dot x^i| \ll \dot t$, so spatial velocities are small compared to light speed
2. **weak field**: $g_{\mu\nu} = \eta_{\mu\nu} + h_{\mu\nu}$ with $|h| \ll 1$
3. **static field**: $\partial_0 g_{\mu\nu} = 0$, the field doesn't change in time

### the calculation

with these three conditions, the geodesic equation $\ddot x^\mu + \Gamma^\mu{}_{00}(\dot t)^2 + \cdots = 0$ is dominated by the $\Gamma^\mu{}_{00}$ term (the slow-motion condition kills the others).

at first order in $h$, with $\partial_0 = 0$:

$$\Gamma^i{}_{00} = -\tfrac12 \eta^{ij}\partial_j h_{00}$$

the time component gives $\ddot t = 0$, so $dt/d\tau$ is constant. the spatial components give

$$\frac{d^2 x^i}{dt^2} \approx \tfrac12 \partial^i h_{00}$$

matching this to Newton's $\ddot x^i = -\partial^i \Phi$ requires

$$\boxed{\,h_{00} = -2\Phi\,}$$

so the metric component $g_{00} = -(1 + 2\Phi)$ encodes the Newtonian gravitational potential. this is exactly what i found in Chapter 1 from the equivalence principle alone, but now from a calculation. **the geodesic equation reproduces Newton's law in the appropriate limit**, with the gravitational potential encoded in the metric.

this calculation is exactly what Q9 - weak-field Christoffel Gamma_i_00 asks for.

---

## 3.4, geodesics on Schwarzschild, the master example

### the metric

assuming Birkhoff (proven in [Ch 5 - The Einstein Equation](../../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html)), the spacetime around any spherically symmetric mass $M$ is

$$ds^2 = -\left(1 - \frac{2GM}{r}\right)dt^2 + \left(1 - \frac{2GM}{r}\right)^{-1}dr^2 + r^2(d\theta^2 + \sin^2\theta\,d\phi^2)$$

with $f(r) \equiv 1 - 2GM/r$ for compactness.

### the simpler Lagrangian

$$\mathcal{L} = f \dot t^2 - f^{-1}\dot r^2 - r^2 \dot \theta^2 - r^2\sin^2\theta\, \dot \phi^2$$

(overdots are $d/d\lambda$.)

### conserved quantities

$t$ and $\phi$ are cyclic. Euler-Lagrange gives:

$$E \equiv \tfrac12 \frac{\partial \mathcal{L}}{\partial \dot t} = f \dot t \quad\text{(energy per unit mass)}$$
$$L \equiv -\tfrac12 \frac{\partial \mathcal{L}}{\partial \dot \phi} = r^2 \sin^2\theta\, \dot \phi \quad\text{(angular momentum per unit mass)}$$

both conserved along any geodesic.

### consistency of the equatorial plane

the $\theta$ equation, after some algebra, has $\dot \theta = 0$, $\theta = \pi/2$ as a consistent solution. this makes sense: by the spherical symmetry, any geodesic can be rotated into the equatorial plane. **so we set $\theta = \pi/2$** for the rest of the analysis.

### the radial equation

with $\theta = \pi/2$, the timelike normalization $g_{\mu\nu} \dot x^\mu \dot x^\nu = -\epsilon$ (with $\epsilon = 1$ for timelike, $\epsilon = 0$ for null) becomes

$$-E^2 + \dot r^2 + (1 - 2GM/r)\left(\frac{L^2}{r^2} + \epsilon\right) = 0$$

rearranging into "energy = kinetic + potential" form:

$$\boxed{\,\tfrac12 \dot r^2 + V(r) = \mathcal{E}\,}$$

with $\mathcal{E} \equiv E^2/2$ and the **effective potential**

$$\boxed{\,V(r) = \frac{\epsilon c^2}{2} - \frac{\epsilon GM}{r} + \frac{L^2}{2 r^2} - \frac{L^2 GM}{c^2 r^3}\,}$$

(with $c$ restored.)

let me read this:

- **first term** $\epsilon c^2/2$: rest mass energy (constant)
- **second term** $-\epsilon GM/r$: Newtonian gravitational attraction
- **third term** $L^2/(2r^2)$: centrifugal barrier (the angular momentum trying to fling the particle outward)
- **fourth term** $-L^2 GM/(c^2 r^3)$: **the GR correction**, absent in Newton

the fourth term is what makes Schwarzschild different from Newton at small $r$. at large $r$, all three Newtonian-style terms dominate and you get Keplerian orbits. at small $r$, the GR term takes over, and you get qualitatively new behavior: there is a **maximum** of $V(r)$ that Newton does not have.

### circular orbits

at $V'(r) = 0$:

$$\epsilon GM r^2 - L^2 r + 3 GM L^2 \gamma = 0$$

with $\gamma = 0$ in Newton, $\gamma = 1$ in GR.

**massless particles** ($\epsilon = 0$): solving gives $r_c = 3 GM$. this is the **photon sphere**, an unstable circular photon orbit. unstable because it is at the **maximum** of $V$ (any perturbation sends the photon either spiraling in or escaping out).

**massive particles** ($\epsilon = 1$):

$$r_{c, \pm} = \frac{L^2 \pm \sqrt{L^4 - 12 (GM)^2 L^2}}{2 GM}$$

two solutions: stable at $r_{c, +}$ (minimum of $V$), unstable at $r_{c, -}$ (maximum of $V$). they merge at $L = \sqrt{12}\, GM$, where

$$\boxed{\,r_c = 6 GM \quad\text{(ISCO)}\,}$$

the **innermost stable circular orbit**. for $L < \sqrt{12}\, GM$, no stable circular orbit exists. this matters astrophysically: **ISCO sets the inner edge of accretion disks** around Schwarzschild black holes, hence the $L_{\rm Edd}$-scale luminosity.

these are exactly the calculations in Q12 - circular orbits and orbital frequency.

---

## 3.5, perihelion precession of Mercury

### the orbit equation

re-parametrize the radial equation by $\phi$ instead of $\lambda$, and substitute $u = L^2/(GM r)$. the radial equation becomes

$$\boxed{\,\frac{d^2 u}{d\phi^2} - 1 + u = \alpha u^2, \qquad \alpha \equiv \frac{3 (GM)^2}{L^2} \ll 1\,}$$

the right-hand side is the **GR correction**.

### perturbative solution

Newton: $\alpha = 0$, solution $u_0 = 1 + e \cos \phi$. this is a closed Keplerian ellipse with eccentricity $e$ and period $2\pi$ in $\phi$.

GR: small $\alpha \neq 0$. write $u = u_0 + u_1$ with $u_1 \ll u_0$. plug in:

$$\frac{d^2 u_1}{d\phi^2} + u_1 \approx \alpha u_0^2 = \alpha(1 + e\cos\phi)^2$$

the right-hand side is $\alpha[1 + e^2/2 + 2e\cos\phi + (e^2/2)\cos 2\phi]$. the **resonant** part of the source (the $\cos\phi$ term) drives a secular response: $u_1$ contains a term $\alpha e \phi \sin\phi$ that grows linearly with $\phi$.

added to $u_0$:

$$u = 1 + e\cos\phi + \alpha e \phi \sin\phi \approx 1 + e\cos[(1 - \alpha)\phi]$$

so the orbit closes only after $\phi$ advances by $2\pi/(1 - \alpha) \approx 2\pi(1 + \alpha)$. each orbit, the perihelion advances by

$$\boxed{\,\Delta\phi = 2\pi \alpha = \frac{6\pi (GM)^2}{L^2} = \frac{6\pi GM}{c^2 a (1 - e^2)}\,}$$

(after converting $L^2 \to GM a (1 - e^2)$ for the Newtonian ellipse).

### Mercury

plug in: $GM_\odot/c^2 = 1.48$ km, $a = 5.79 \times 10^{10}$ m, $e = 0.2056$.

$$\Delta\phi_{\rm Mercury} = 5.01 \times 10^{-7}\,\text{rad/orbit} = 0.103''/\text{orbit}$$

with Mercury's $88$-day orbit, that is

$$\boxed{\,\Delta\phi_{\rm Mercury} = 43.0''/\text{century}\,}$$

**exactly the missing $43''$ that no one could explain for fifty years**. this single number, predicted by GR with no free parameters, is one of the cleanest tests of any physical theory.

> the historical importance: when Einstein first computed this in November 1915, he was so excited he wrote to a friend that "for several days, i was beside myself with joyous excitement." it is hard to overstate how astonishing this was. the entire Newton-vs-GR question, debated for years, was settled in one calculation.

---

## 3.6, light deflection

### the orbit equation for photons

same setup but $\epsilon = 0$ (massless). the orbit equation in $u = 1/r$ becomes

$$\frac{d^2 u}{d\phi^2} + u = 3 GM u^2$$

(no $-1$ on the left, because the photon has no rest mass term.)

### perturbative solution

zero-order: $u_0 = (1/b) \sin\phi$, an unbent straight line at impact parameter $b$.

first-order correction:

$$u = \frac{1}{b}\sin\phi + \frac{GM}{2b^2}(3 - 4\cos\phi + \cos 2\phi)$$

the deflection angle of the bent ray, computed at $u = 0$:

$$\boxed{\,\phi_\infty \approx -\frac{4 GM}{b c^2}\,}$$

### the Sun

for light grazing the Sun's limb, $b \approx R_\odot = 7 \times 10^5$ km and $GM_\odot/c^2 \approx 1.5$ km:

$$\phi_\infty \approx 8.6 \times 10^{-6}\,\text{rad} \approx 1.75''$$

confirmed by **Eddington's 1919 solar eclipse expedition**. front-page New York Times headline: "Lights All Askew in the Heavens." Einstein became world-famous overnight.

> the Newton-vs-GR cleverness: the Newtonian-particle calculation (treating light as a massive bullet moving at $c$) gives only $2 GM / (b c^2)$, **half** the GR value. the factor of 2 comes from the fact that light is sensitive to **both** $g_{00}$ and $g_{ij}$ in the metric (whereas a slow particle is mostly sensitive to $g_{00}$). so the bending of light was not just confirming "gravity bends light" (which Newton can do) but specifically confirming the $g_{ij}$ contribution that only GR has.

---

## what to remember from this chapter

if i had to compress chapter 3 into a paragraph for the oral:

> the relativistic action for a point particle is $S = -m \int d\tau$. extremizing this action gives the geodesic equation $\ddot x^\mu + \Gamma^\mu{}_{\alpha\beta}\dot x^\alpha \dot x^\beta = 0$, which reduces to Newton's $\ddot x = -\nabla\Phi$ in the weak-field slow-motion limit, with $h_{00} = -2\Phi$. for a particle in Schwarzschild, the conserved energy $E$ and angular momentum $L$ (from the cyclic coordinates $t$ and $\phi$) reduce the problem to 1D radial motion with effective potential $V(r) = $ Newtonian terms + GR correction $-L^2 GM/(c^2 r^3)$. this gives circular orbits at all $r$ for Newton, but in GR there is an innermost stable circular orbit at $r = 6GM$ (ISCO) and a photon sphere at $r = 3GM$. expanding the orbit equation perturbatively gives the perihelion precession $\Delta\phi = 6\pi GM/[c^2 a(1-e^2)] = 43''$/century for Mercury, and the light deflection $\phi_\infty = 4GM/(bc^2) = 1.75''$ for the Sun. these are the two predictions that confirmed GR.

---

## connections

- [General_Relativity_MOC](../../../00_Atlas/General_Relativity_MOC.html)
- [Baumann GR](../../../01_Literature/Book/Baumann GR/Baumann GR.html)
- [Geodesic equation](../../../02_Zettel/Theory/Geodesic equation.html) · [Schwarzschild metric](../../../02_Zettel/Theory/Schwarzschild metric.html) · [Schwarzschild effective potential](../../../02_Zettel/Theory/Schwarzschild effective potential.html) · [Killing vectors and conserved quantities](../../../02_Zettel/Theory/Killing vectors and conserved quantities.html) · [Newtonian limit of GR](../../../02_Zettel/Theory/Newtonian limit of GR.html)
- [Photon sphere](../../../02_Zettel/Theory/Photon sphere.html) · [Perihelion precession](../../../02_Zettel/Theory/Perihelion precession.html) · [Light deflection](../../../02_Zettel/Theory/Light deflection.html)
- Q9 - weak-field Christoffel Gamma_i_00 · Q12 - circular orbits and orbital frequency · Q13 - radial infall and proper time · Q14 - photon trajectory and impact parameter
- previous: [Ch 2 - Some Differential Geometry](../../../01_Literature/Book/Baumann GR/Ch 2 - Some Differential Geometry.html)
- next: [Ch 4 - Spacetime Curvature](../../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.html)
