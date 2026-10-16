---
layout: default
title: "Growth factor matter era"
---
## what I'm deriving

in an Einstein-de Sitter universe (flat, matter only, $\Omega_m = 1$) a pressureless density perturbation evolves as

$$\delta(t) = A\, t^{2/3} + B\, t^{-1} \qquad\Longleftrightarrow\qquad \delta(a) = A'\, a + B'\, a^{-3/2}$$

the growing mode is $\delta \propto a$.

## conventions and symbols

| symbol | meaning |
|---|---|
| $\delta$ | matter density contrast of a mode with $k \ll k_J$ |
| $D_+(t)$, $D_-(t)$ | growing and decaying solutions |
| $D(a)$ | linear growth factor, the growing solution with a chosen normalisation |
| $f \equiv d\ln D/d\ln a$ | growth rate |

## inputs

1. the [[Linear perturbation master equation]] with the pressure term dropped ($c_s = 0$ for cold dark matter, or $k \ll k_J$),
$$\ddot\delta + 2H\dot\delta - 4\pi G\bar\rho\,\delta = 0$$
it no longer depends on $k$, so every mode grows at the same rate and the shape of the perturbation in comoving coordinates is preserved.
2. the Einstein-de Sitter background. from [[Friedmann equation Newtonian shell]] with $k = 0$ and $\bar\rho \propto a^{-3}$, $a \propto t^{2/3}$, so
$$H = \frac{\dot a}{a} = \frac{2}{3t}, \qquad H^2 = \frac{8\pi G}{3}\bar\rho$$

## derivation

### step 1 - coefficients as functions of $t$

$$2H = \frac{4}{3t}$$

$$4\pi G\bar\rho = \frac{3}{2}\cdot\frac{8\pi G}{3}\bar\rho = \frac{3}{2}H^2 = \frac{3}{2}\cdot\frac{4}{9t^2} = \frac{2}{3t^2}$$

this also gives the useful result $\bar\rho = 1/(6\pi Gt^2)$.

### step 2 - the equation

$$\ddot\delta + \frac{4}{3t}\dot\delta - \frac{2}{3t^2}\delta = 0$$

each term has the same dimension when $\delta \propto t^n$ (every term scales as $t^{n-2}$). this is an Euler (equidimensional) equation, and power laws solve it.

### step 3 - power-law ansatz

put $\delta = t^n$, so $\dot\delta = nt^{n-1}$ and $\ddot\delta = n(n-1)t^{n-2}$. dividing by $t^{n-2}$,

$$n(n - 1) + \frac{4}{3}n - \frac{2}{3} = 0$$

multiply by $3$.

$$3n^2 + n - 2 = 0 \quad\Longrightarrow\quad (3n - 2)(n + 1) = 0$$

$$n = \frac{2}{3} \qquad\text{or}\qquad n = -1$$

### step 4 - general solution

a second-order linear equation has two independent solutions, and the general solution is their superposition with constants fixed by the initial $\delta$ and $\dot\delta$.

$$\boxed{\, \delta(t) = A\, t^{2/3} + B\, t^{-1} \,}$$

with $a \propto t^{2/3}$, $t^{-1} \propto a^{-3/2}$.

$$\boxed{\, \delta(a) = A'\, a + B'\, a^{-3/2} \,}$$

- **growing mode** $D_+ \propto a \propto t^{2/3}$.
- **decaying mode** $D_- \propto a^{-3/2} \propto t^{-1}$. after the universe expands by a factor of $10$ its relative weight has fallen by $10^{-5/2}$.

## checks

- **substitute back.** for $n = 2/3$, $\frac23\cdot\left(-\frac13\right) + \frac43\cdot\frac23 - \frac23 = -\frac29 + \frac89 - \frac69 = 0$. for $n = -1$, $2 - \frac43 - \frac23 = 0$.
- **the decaying mode is $H(t)$.** $H = 2/(3t) \propto t^{-1}$. this is general. for any background containing only matter, curvature and $\Lambda$, $\delta = H(t)$ solves the equation. it corresponds to shifting the time of the big bang by a constant, which changes the density by $\delta\rho \propto \dot{\bar\rho}$.
- **comparison with a static medium.** there the growth is $e^{t\sqrt{4\pi G\bar\rho}}$. expansion reduces it to a power law for two reasons, the friction term and the dilution of $\bar\rho$.
- **potential.** from the Poisson equation $\nabla^2\phi = 4\pi Ga^2\bar\rho\,\delta \propto a^2\cdot a^{-3}\cdot a$, which is constant. in the matter era the gravitational potential of a growing perturbation does not change. this is why the late-time integrated Sachs-Wolfe effect vanishes in Einstein-de Sitter.
- **peculiar velocity.** from the linearised continuity equation, $\nabla\cdot\vec v = -a\dot\delta = -aHf\,\delta$ with $f = 1$ here.

## how much growth is available

from recombination ($z \approx 1100$) to today the scale factor grows by $1100$. a perturbation growing as $\delta \propto a$ is amplified by about $10^3$ (somewhat less with $\Lambda$). CMB anisotropies show baryon perturbations of order $10^{-5}$ at recombination. that would give $\delta_b \sim 10^{-2}$ today, far below the nonlinear structures observed.

cold dark matter resolves this. it does not couple to photons, so its perturbations start growing at matter-radiation equality ($z \approx 3400$) and before that grow logarithmically ([[Meszaros suppression]]). at recombination $\delta_{\rm dm}$ is already much larger than $\delta_b$, and the baryons then fall into the existing potential wells and catch up, $\delta_b \to \delta_{\rm dm}$.

## beyond Einstein-de Sitter

for matter plus curvature plus $\Lambda$ the source term is $4\pi G\bar\rho_m = \frac32\Omega_m(a)H^2$ and the equation becomes

$$\ddot\delta + 2H\dot\delta - \frac{3}{2}\Omega_m(a)\,H^2\,\delta = 0$$

the decaying solution is $D_- \propto H(a)$ and the growing one is

$$D_+(a) \propto H(a)\int_0^a\frac{da'}{\left[a'H(a')\right]^3}$$

for $H \propto a^{-3/2}$ the integral is $\propto a^{5/2}$ and $D_+ \propto a$, recovering the boxed result.

when $\Lambda$ or negative curvature dominates, $\Omega_m(a) \to 0$, the source switches off while the friction remains, and growth stalls. $D_+$ tends to a constant. a useful fit (Carroll, Press and Turner 1992) is $D(a) = a\,g(a)$ with

$$g \approx \frac{5}{2}\Omega_m\left[\Omega_m^{4/7} - \Omega_\Lambda + \left(1 + \frac{\Omega_m}{2}\right)\left(1 + \frac{\Omega_\Lambda}{70}\right)\right]^{-1}$$

evaluated with $\Omega_m(a)$ and $\Omega_\Lambda(a)$. today $g_0 \approx 0.79$ for $\Omega_{m,0} = 0.315$, so perturbations have grown about $20\%$ less than they would have in Einstein-de Sitter. the growth rate is well approximated by $f \approx \Omega_m(a)^{0.55}$.

## the full timeline

| epoch | behaviour of dark matter perturbations inside the horizon |
|---|---|
| inflation | initial perturbations generated |
| radiation era, $z > 3400$ | nearly frozen, logarithmic growth |
| matter era, $3400 > z \gtrsim 0.5$ | $\delta \propto a$ |
| after recombination, $z < 1100$ | baryons join, $\delta_b \to \delta_{\rm dm}$ |
| $\Lambda$ era, $z \lesssim 0.5$ | growth slows and eventually stops |

## questions I should be ready for

- *why a power law and not an exponential?* the coefficients fall as $1/t$ and $1/t^2$, so the equation is scale-free in $t$.
- *why is the result independent of $k$?* without pressure nothing in the equation refers to a length scale.
- *what fixes $A$ and $B$?* the initial $\delta$ and $\dot\delta$. the decaying mode quickly becomes irrelevant, so perturbations are described by the growing mode alone.
- *what is "linear" here?* $|\delta| \ll 1$. once $\delta \sim 1$ the linear solution is only a label, used in [[Spherical collapse delta_c]].
- *why does growth stop with $\Lambda$?* the expansion accelerates, the friction term stays, and the driving term $\propto\bar\rho_m$ dilutes away.

## board summary (60 seconds)

Einstein-de Sitter, $a \propto t^{2/3}$, $H = 2/(3t)$, $4\pi G\bar\rho = \frac32H^2 = 2/(3t^2)$. master equation with no pressure, $\ddot\delta + (4/3t)\dot\delta - (2/3t^2)\delta = 0$. try $\delta = t^n$, get $3n^2 + n - 2 = 0$, $n = 2/3$ or $-1$. so $\delta = At^{2/3} + Bt^{-1}$, growing mode $\delta \propto a$, decaying mode $\propto a^{-3/2} \propto H$.

## see also

- [[Linear perturbation master equation]] is the input.
- [[Jeans length derivation]] explains the $k \ll k_J$ condition.
- [[Meszaros suppression]] is the radiation-era behaviour.
- [[Spherical collapse delta_c]] uses the linear growing mode as a label for nonlinear collapse.
