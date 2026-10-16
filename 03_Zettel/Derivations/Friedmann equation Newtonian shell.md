---
layout: default
title: "Friedmann equation Newtonian shell"
---
## what I'm deriving

$$H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2}$$

the first-order dynamical equation for the scale factor, sourced by the mass density of the contents of the universe.

the three places that need to be explicit are marked **(rigor point)** below.

## conventions and symbols

| symbol | meaning | units |
|---|---|---|
| $R(t)$ | physical (proper) radius of a chosen spherical shell | length |
| $r_0$ | comoving radius of that shell, fixed in time, equal to $R(t_0)$ | length |
| $a(t)$ | scale factor, $R(t) = a(t)\, r_0$, with $a(t_0) = 1$ | dimensionless |
| $\rho(t)$ | uniform mass density | mass / length$^3$ |
| $M$ | mass enclosed by the shell | mass |
| $m$ | test mass sitting on the shell | mass |
| $E$ | total mechanical energy of the test mass | energy |
| $\mathcal E \equiv E/m$ | specific energy, energy per unit mass | velocity$^2$ |
| $k$ | curvature constant | length$^{-2}$ |

a dot is always a derivative with respect to cosmic time $t$ at fixed $r_0$.

## assumptions

1. **homogeneity and isotropy.** $\rho$ depends on $t$ only, and the velocity field is the Hubble flow $\vec v = H(t)\,\vec r$, the only one that looks the same from every comoving point.
2. **Newtonian gravity is valid inside the sphere.** this needs $R \ll c/H$ (velocities $HR \ll c$) and weak fields $GM/(Rc^2) \ll 1$. both hold for a small enough sphere.
3. **pressureless matter.** $p \ll \rho c^2$, so there are no pressure forces and pressure does not gravitate.
4. **only the interior mass acts.** in Newtonian gravity this is the shell theorem, valid for a spherically symmetric exterior. for an infinite uniform medium the Newtonian force is ambiguous, and the honest justification is Birkhoff's theorem in GR, which guarantees that the spacetime inside a spherical cavity cut out of a spherically symmetric distribution is flat.
5. **no shell crossing.** shells keep their order, so the mass inside a given comoving shell is constant.

## derivation with complete mathematical rigor

### step 1 - equation of motion from Newton's second law

take a sphere of physical radius $R(t)$ centred on an arbitrary origin and a test particle of mass $m$ on its surface. the enclosed mass is

$$M = \frac{4\pi}{3}\rho(t)\,R(t)^3$$

by assumption 5, $dM/dt = 0$, which is the statement $\rho(t) R(t)^3 = $ constant. Newton's second law in the radial direction, with the force pointing inward, gives

$$m \ddot R(t) = - \frac{G M m}{R(t)^2} \quad\Longrightarrow\quad \ddot R(t) = - \frac{G M}{R(t)^2}$$

the test mass $m$ cancels (equivalence principle), so the motion is the same for any particle on the shell.

### step 2 - integrating once **(rigor point 1, what object is integrated)**

the equation is second order in time and its right-hand side depends on $R$, not on $t$ explicitly. I cannot integrate it over $t$ directly. the standard device is to multiply both sides by the velocity $\dot R \equiv dR/dt$, which turns each side into a total time derivative.

$$\dot R\, \ddot R = - \frac{GM}{R^2}\, \dot R$$

- left-hand side. by the chain rule $\dfrac{d}{dt}\left(\dfrac12\dot R^2\right) = \dot R\,\ddot R$.
- right-hand side. by the chain rule $\dfrac{d}{dt}\left(\dfrac{GM}{R}\right) = -\dfrac{GM}{R^2}\dot R$, and here I use that $M$ is constant in time.

so the equation of motion is equivalent to

$$\frac{d}{dt}\left[ \frac{1}{2} \dot R^2 - \frac{GM}{R} \right] = 0$$

now I integrate both sides over time from an initial epoch $t_i$ to $t$. the integrand is the total time derivative of the bracket, the integration variable is $t$, and by the fundamental theorem of calculus

$$\int_{t_i}^{t} \frac{d}{dt'}\left[ \frac{1}{2} \dot R(t')^2 - \frac{GM}{R(t')} \right] dt' = \left[ \frac{1}{2} \dot R^2 - \frac{GM}{R} \right]_{t_i}^{t} = 0$$

the bracket has the same value at all times. I call that value $\mathcal E$.

$$\frac{1}{2} \dot R^2 - \frac{GM}{R} = \mathcal{E} \equiv \frac{E}{m} = \text{constant in time}$$

this is conservation of mechanical energy per unit mass, kinetic plus gravitational potential. $\mathcal E$ is the integration constant, fixed by the initial conditions $\mathcal E = \frac12\dot R(t_i)^2 - GM/R(t_i)$. it is constant in time for a given shell and may still differ from shell to shell.

equivalently, in differential language, $\dot R\,\ddot R\,dt = \dot R\, d\dot R = d\left(\frac12\dot R^2\right)$ and $-(GM/R^2)\dot R\, dt = -(GM/R^2)\,dR = d(GM/R)$. the left side is integrated over $\dot R$ and the right side over $R$.

### step 3 - comoving coordinates **(rigor point 2, when to substitute $R = a r_0$)**

I substitute after the first integral is established.

- $r_0$ is the fixed comoving label of the shell, $dr_0/dt = 0$.
- $R(t) = a(t)\, r_0$.
- differentiating with respect to $t$ gives $\dot R(t) = \dot a(t)\, r_0$.
- the enclosed mass is $M = \dfrac{4\pi}{3}\rho(t)\, a(t)^3 r_0^3$.

substituting into the energy equation,

$$\frac{1}{2} \dot a^2 r_0^2 - \frac{G}{a r_0}\cdot\frac{4\pi}{3}\rho\, a^3 r_0^3 = \mathcal{E}$$

$$\frac{1}{2} \dot a^2 r_0^2 - \frac{4\pi G}{3}\rho\, a^2 r_0^2 = \mathcal{E}$$

a remark on $M$. $M$ is constant in time, but once written as $\frac{4\pi}{3}\rho a^3 r_0^3$ it contains the two time-dependent functions $\rho(t)$ and $a(t)$ whose product $\rho a^3$ is constant. that is why I had to do the integration with $M$ and only then express $M$ through $\rho$.

**what happens if I substitute before integrating.** putting $R = a r_0$ and $M = \frac{4\pi}{3}\rho a^3 r_0^3$ straight into $\ddot R = -GM/R^2$ gives

$$\ddot a\, r_0 = -\frac{4\pi G}{3}\rho\, a\, r_0 \quad\Longrightarrow\quad \frac{\ddot a}{a} = -\frac{4\pi G}{3}\rho$$

which is the [[Acceleration equation]] for dust. to get from there to Friedmann I must multiply by $2a\dot a$ and use $\rho = \rho_0 a^{-3}$ (the [[Continuity equation cosmology]] for $p = 0$).

$$2\dot a\ddot a = -\frac{8\pi G}{3}\rho_0\frac{\dot a}{a^2} \quad\Longrightarrow\quad \frac{d}{dt}\left(\dot a^2\right) = \frac{d}{dt}\left(\frac{8\pi G}{3}\frac{\rho_0}{a}\right) \quad\Longrightarrow\quad \dot a^2 = \frac{8\pi G}{3}\rho a^2 + \text{const}$$

both orders agree. the energy route is shorter because mass conservation is already built into $M = $ constant.

### step 4 - isolating $H^2$ and the origin of $k$ **(rigor point 3)**

divide the energy equation by $\frac12 a^2 r_0^2$.

$$\left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho + \frac{2\mathcal{E}}{r_0^2\, a^2}$$

now inspect the dependence of each term on the shell label $r_0$.

- $\left(\dot a/a\right)^2 = H^2(t)$ depends on $t$ only. by assumption 1 every shell shares the same $a(t)$.
- $\frac{8\pi G}{3}\rho(t)$ depends on $t$ only.
- therefore $2\mathcal E/(r_0^2 a^2)$ cannot depend on $r_0$ either. since $a$ is a function of $t$ only, the combination $2\mathcal E/r_0^2$ must be the same number for every shell.

and from step 2, $\mathcal E$ does not depend on $t$. so $2\mathcal E(r_0)/r_0^2$ depends on neither $t$ nor $r_0$. it is a true constant of the model, with units of velocity$^2$/length$^2$. I name it

$$\frac{2\mathcal{E}(r_0)}{r_0^2} \equiv -k c^2 \qquad\Longleftrightarrow\qquad \mathcal{E}(r_0) = -\frac{1}{2}k c^2 r_0^2$$

the factor $c^2$ is inserted so that $k$ has units of length$^{-2}$, and the minus sign so that bound shells ($\mathcal E < 0$) have $k > 0$. the energy of each shell grows as $r_0^2$, as it should, because both $\frac12\dot R^2 = \frac12 H^2 R^2$ and $GM/R = \frac{4\pi G}{3}\rho R^2$ are proportional to $R^2$.

$$\boxed{\, \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2} \,}$$

## checks

- **dimensions.** $G\rho$ has units of time$^{-2}$. $kc^2/a^2$ has units length$^{-2}\times$ velocity$^2 = $ time$^{-2}$.
- **$k = 0$ with dust.** $\rho = \rho_0 a^{-3}$ gives $\dot a^2 = (8\pi G\rho_0/3)/a$, so $a^{1/2}da = H_0\, dt$ and $a = (3H_0t/2)^{2/3}$. this is Einstein-de Sitter, $H = 2/(3t)$.
- **$a \to 0$.** the density term scales as $a^{-3}$ and the curvature term as $a^{-2}$, so curvature is always negligible early on.
- **$a \to \infty$.** for $k < 0$, $\dot a \to \sqrt{|k|}\,c$, a coasting expansion. for $k > 0$ the right side vanishes at $a_{\max} = 8\pi G\rho_0/(3kc^2)$ and the expansion turns around.
- **escape velocity reading.** $k = 0$ means $\dot R^2 = 2GM/R$, every shell moves at exactly its escape speed.

## why this $k$ is the same $k$ as in the metric

| energy | $k$ | Newtonian fate (dust, no $\Lambda$) | geometry in GR |
|---|---|---|---|
| $\mathcal E < 0$ | $k > 0$ | bound, reaches $a_{\max}$, recollapses | closed, $S^3$ |
| $\mathcal E = 0$ | $k = 0$ | marginally bound, $\dot a \to 0$ as $a \to \infty$ | flat |
| $\mathcal E > 0$ | $k < 0$ | unbound, $\dot a \to \sqrt{\lvert k\rvert}\,c$ | open, $H^3$ |

the Newtonian argument only shows that a constant with these units exists. it cannot tell me that the constant is the spatial curvature. that identification comes from the Einstein equations applied to the [[Robertson-Walker metric derivation]], see [[Friedmann equation General Relativity FLRW]], which give exactly this equation with $k$ the curvature constant of the 3-space.

## why the Newtonian derivation works, and what it misses

it works because

1. the interior of a spherical region evolves independently of the exterior (Birkhoff).
2. for a small sphere all velocities are non-relativistic and the field is weak.
3. for dust, pressure plays no role.

and the result is exact in GR for dust even though the derivation is local, because by homogeneity one small sphere knows everything about $a(t)$.

it does not capture

- pressure as a source of gravity, $\rho \to \rho + 3p/c^2$ in the [[Acceleration equation]].
- radiation, where $p = \rho c^2/3$. the Friedmann equation keeps the same form with $\rho$ the total energy density over $c^2$, but the justification is then GR. in the Newtonian picture the enclosed "mass" is no longer conserved, $d(\rho c^2 V) = -p\,dV$.
- the cosmological constant, which has no Newtonian origin.
- the meaning of $k$ as curvature.

## adding $\Lambda$

$$H^2 = \frac{8\pi G}{3}\rho - \frac{k c^2}{a^2} + \frac{\Lambda c^2}{3}$$

equivalently $\Lambda$ is a fluid with $\rho_\Lambda = \Lambda c^2/(8\pi G)$ and $w = -1$. in the Newtonian language it is an extra repulsive force per unit mass $+\frac{\Lambda c^2}{3}R$, with potential $-\frac{\Lambda c^2}{6}R^2$.

## questions I should be ready for

- *you said "integrate both sides". integrate what, over what?* after multiplying by $\dot R$, both sides are total time derivatives. I integrate $\frac{d}{dt}\left[\frac12\dot R^2 - GM/R\right]$ over $t$. the result is the bracket itself equal to a constant.
- *why multiply by $\dot R$?* it is the integrating factor that turns $\ddot R$ into $\frac{d}{dt}(\frac12\dot R^2)$ and $R^{-2}\dot R$ into $-\frac{d}{dt}(R^{-1})$.
- *why is $M$ constant if $\rho$ changes?* the shell is comoving and no matter crosses it. $\rho \propto a^{-3}$ exactly compensates $R^3 \propto a^3$.
- *where does $k$ come from?* it is the integration constant of the first integral, rescaled by $r_0^2$. homogeneity forces $\mathcal E \propto r_0^2$.
- *is $k$ dimensionless?* not in this convention. with $a_0 = 1$, $k$ has units of length$^{-2}$. rescaling $r_0$ and $a$ can set $k$ to $\pm1$ or $0$ at the price of a dimensional $a$.
- *does the result depend on the choice of origin?* no. the Hubble flow is the same seen from any comoving point, and the equation contains no reference to the origin or to $r_0$.

## board summary (60 seconds)

shell of radius $R$, enclosed mass $M$ constant. $\ddot R = -GM/R^2$. multiply by $\dot R$, recognise $\frac{d}{dt}[\frac12\dot R^2 - GM/R] = 0$, integrate over $t$, get $\frac12\dot R^2 - GM/R = \mathcal E$. only now put $R = a r_0$, $M = \frac{4\pi}{3}\rho a^3r_0^3$. divide by $\frac12a^2r_0^2$. left side and density term depend on $t$ only, so $2\mathcal E/r_0^2 \equiv -kc^2$ is a universal constant. $H^2 = (8\pi G/3)\rho - kc^2/a^2$.

## see also

- [[Continuity equation cosmology]] gives $\rho(a)$, needed to integrate Friedmann.
- [[Acceleration equation]] is the time derivative of Friedmann combined with continuity.
- [[Critical density and density parameters]] divides Friedmann by $H^2$.
- [[Friedmann equation General Relativity FLRW]] is the full derivation from the field equations.
