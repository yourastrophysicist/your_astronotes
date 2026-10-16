---
layout: default
title: "Continuity equation cosmology"
---
## what I'm deriving

$$\dot\rho + 3 H \left(\rho + \frac{p}{c^2}\right) = 0$$

and its solution for a constant equation-of-state parameter $w$,

$$\rho(a) = \rho_0\, a^{-3(1+w)}$$

## conventions and symbols

| symbol | meaning | units |
|---|---|---|
| $\rho$ | mass density equivalent of the total energy density, $\rho = \varepsilon/c^2$ | mass / length$^3$ |
| $p$ | isotropic pressure | energy / length$^3$ |
| $V$ | physical volume of a comoving region, $V = V_0\, a^3$ | length$^3$ |
| $U = \rho c^2 V$ | total energy in that region, rest mass included | energy |
| $w$ | $p/(\rho c^2)$ | dimensionless |

$a(t_0) = 1$ and $\rho_0 = \rho(t_0)$.

## assumptions

1. the contents are a perfect fluid, described by $\rho$ and $p$ alone (no viscosity, no heat conduction).
2. homogeneity. there are no temperature gradients, so no heat flows across the boundary of any comoving region and $\delta Q = 0$.
3. the expansion is quasi-static compared with the microscopic interaction time, so the fluid passes through equilibrium states and the process is reversible, $dS = 0$.
4. the fluid does not exchange energy with any other component. if there are several non-interacting fluids the equation holds for each one separately.

## derivation from the first law

### step 1 - first law for a comoving region

$$dU = \delta Q - p\, dV = -p\, dV$$

### step 2 - insert $U$ and $V$

$U = \rho c^2 V_0 a^3$ and $V = V_0 a^3$. the constant $V_0$ cancels.

$$d\left(\rho c^2 a^3\right) + p\, d\left(a^3\right) = 0$$

### step 3 - take the time derivative

everything depends on $t$ only. product rule on the first term, chain rule on the second.

$$c^2\left(\dot\rho\, a^3 + 3\rho\, a^2\dot a\right) + 3 p\, a^2\dot a = 0$$

### step 4 - divide by $c^2 a^3$

$$\dot\rho + 3\frac{\dot a}{a}\rho + 3\frac{\dot a}{a}\frac{p}{c^2} = 0$$

$$\boxed{\, \dot\rho + 3 H \left(\rho + \frac{p}{c^2}\right) = 0 \,}$$

the two terms have a clear reading. $3H\rho$ is dilution by the growing volume. $3Hp/c^2$ is the energy lost to $p\,dV$ work done by the region on its surroundings.

## derivation from the two Friedmann equations

this shows the equation is not independent of the other two.

start from [[Friedmann equation Newtonian shell]] multiplied by $a^2$, $\dot a^2 = \frac{8\pi G}{3}\rho a^2 - kc^2$. differentiate with respect to $t$.

$$2\dot a\ddot a = \frac{8\pi G}{3}\left(\dot\rho a^2 + 2\rho a\dot a\right)$$

insert the [[Acceleration equation]] $\ddot a = -\frac{4\pi G}{3}\left(\rho + 3p/c^2\right)a$ on the left.

$$-\frac{8\pi G}{3}\left(\rho + \frac{3p}{c^2}\right)a\dot a = \frac{8\pi G}{3}\left(\dot\rho a^2 + 2\rho a\dot a\right)$$

divide by $\frac{8\pi G}{3}a^2$ and collect.

$$\dot\rho + 3\frac{\dot a}{a}\left(\rho + \frac{p}{c^2}\right) = 0$$

any two of (Friedmann, acceleration, continuity) imply the third, as long as $\dot a \neq 0$. in GR this redundancy is the contracted Bianchi identity $\nabla_\mu G^{\mu\nu} = 0$, which forces $\nabla_\mu T^{\mu\nu} = 0$. the $\nu = 0$ component on the Robertson-Walker background is this equation, worked out in [[Friedmann equation General Relativity FLRW]].

## solving for $\rho(a)$

### step 5 - equation of state

set $p = w\rho c^2$ with $w$ constant.

$$\dot\rho = -3(1 + w)\frac{\dot a}{a}\rho$$

### step 6 - separate variables

divide by $\rho$ and multiply by $dt$. the left side is integrated over $\rho$ from $\rho_0$ to $\rho$, the right side over $a$ from $1$ to $a$.

$$\int_{\rho_0}^{\rho}\frac{d\rho'}{\rho'} = -3(1 + w)\int_{1}^{a}\frac{da'}{a'}$$

$$\ln\frac{\rho}{\rho_0} = -3(1 + w)\ln a$$

$$\boxed{\, \rho(a) = \rho_0\, a^{-3(1+w)} = \rho_0\,(1 + z)^{3(1+w)} \,}$$

if $w$ depends on $a$ the same steps give $\rho = \rho_0\exp\left[-3\int_1^a (1 + w(a'))\,da'/a'\right]$.

## the canonical cases

| component | $w$ | $\rho(a)$ | physical reason |
|---|---|---|---|
| matter (dust) | $0$ | $a^{-3}$ | number of particles conserved, volume grows as $a^3$ |
| radiation | $1/3$ | $a^{-4}$ | volume dilution times the redshift of each quantum, $E \propto 1/a$ |
| cosmological constant | $-1$ | constant | energy density of the vacuum |
| curvature term | $-1/3$ | $a^{-2}$ | bookkeeping only, it is not a fluid |
| stiff fluid, kinetic scalar | $+1$ | $a^{-6}$ | see [[Slow roll inflation]] |

because the exponents differ, the components dominate in a fixed order as $a$ grows, radiation first, then matter, then curvature if present, then $\Lambda$.

## why $w = 1/3$ for radiation and $w \approx 0$ for matter

for a gas of particles with momentum $\vec p$ and energy $E$, kinetic theory gives $p_{\rm pressure} = \frac13 n\langle |\vec p|\, v\rangle$ and $\rho c^2 = n\langle E\rangle$. for photons $v = c$ and $E = |\vec p|c$, so $p = \frac13\rho c^2$. for non-relativistic particles $p = n k_B T$ and $\rho c^2 \approx n m c^2$, so $w = k_BT/(mc^2) \ll 1$.

## why $w = -1$ for the vacuum

a Lorentz-invariant vacuum has no preferred four-velocity, so its stress tensor can only be proportional to the metric, $T^{\mu\nu}_{\rm vac} = -\rho_{\rm vac}c^2\, g^{\mu\nu}$. comparing with the perfect fluid form $T^{\mu\nu} = (\rho + p/c^2)u^\mu u^\nu + p\,g^{\mu\nu}$, the $u^\mu u^\nu$ term must vanish, so $p = -\rho c^2$. then continuity gives $\dot\rho_\Lambda = 0$.

from the first law, $dU = -p\,dV$ with $U = \rho c^2V$ and $\rho$ constant needs $\rho c^2\, dV = -p\, dV$, the same conclusion. negative pressure means the region gains energy as it expands.

## checks

- **dimensions.** $p/c^2$ is a mass density. $H\rho$ has units of density per time.
- **$p = 0$.** $d(\rho a^3)/dt = 0$, ordinary conservation of mass.
- **static universe.** $H = 0$ gives $\dot\rho = 0$.
- **Newtonian limit.** the Newtonian fluid continuity equation $\partial_t\rho + \nabla\cdot(\rho\vec v) = 0$ with $\vec v = H\vec r$ gives $\dot\rho + 3H\rho = 0$. the pressure term is relativistic, it comes from the energy equivalent of $p\,dV$ work.

## questions I should be ready for

- *is energy conserved in an expanding universe?* locally yes, $\nabla_\mu T^{\mu\nu} = 0$. the energy inside a comoving volume is not constant when $p \neq 0$. for radiation $U \propto a^{-1}$. there is no global conserved energy because the Robertson-Walker spacetime has no timelike Killing vector.
- *what is the expanding region doing work on?* on the neighbouring regions. by homogeneity there is no net pressure force (no gradient), but the $p\,dV$ bookkeeping of energy still applies.
- *why adiabatic?* homogeneity forbids heat flow. it is also reversible if the fluid stays in equilibrium, see [[Entropy conservation cosmology]].
- *does the equation hold for the sum or for each fluid?* for the sum always. for each fluid separately only if they do not exchange energy.

## board summary (60 seconds)

first law on a comoving volume with $\delta Q = 0$, $d(\rho c^2a^3) + p\,d(a^3) = 0$. differentiate, divide by $c^2a^3$, get $\dot\rho + 3H(\rho + p/c^2) = 0$. with $p = w\rho c^2$ separate variables, $d\rho/\rho = -3(1 + w)\,da/a$, integrate, $\rho \propto a^{-3(1+w)}$. matter $a^{-3}$, radiation $a^{-4}$, $\Lambda$ constant.

## see also

- [[Friedmann equation Newtonian shell]] is the dynamical equation that $\rho(a)$ feeds.
- [[Acceleration equation]] follows from Friedmann and continuity.
- [[Critical density and density parameters]] uses $\rho(a)$ to write $H(z)$.
- [[Entropy conservation cosmology]] is the same first law read as $dS = 0$.
