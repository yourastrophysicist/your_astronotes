---
layout: default
title: "Acceleration equation"
---
## what I'm deriving

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3 p}{c^2}\right) + \frac{\Lambda c^2}{3}$$

the second-order equation for the scale factor. it shows that pressure gravitates, with active gravitational mass density $\rho + 3p/c^2$. it is also called the second Friedmann equation or the Raychaudhuri equation for the Robertson-Walker case.

## conventions and symbols

| symbol | meaning |
|---|---|
| $\rho$ | total mass density of matter and radiation (energy density over $c^2$), without $\Lambda$ |
| $p$ | total pressure of matter and radiation |
| $\Lambda$ | cosmological constant, units of length$^{-2}$ |
| $q$ | deceleration parameter, $q \equiv -\ddot a\,a/\dot a^2$ |

## inputs

1. the Friedmann equation with $\Lambda$, from [[Friedmann equation Newtonian shell]] or [[Friedmann equation General Relativity FLRW]],
$$\dot a^2 = \frac{8\pi G}{3}\rho\, a^2 - k c^2 + \frac{\Lambda c^2}{3}a^2$$
2. the [[Continuity equation cosmology]], $\dot\rho = -3H\left(\rho + p/c^2\right)$.

the only extra assumption is $\dot a \neq 0$, since I divide by it.

## derivation

### step 1 - differentiate Friedmann with respect to $t$

$k$, $\Lambda$, $G$ and $c$ are constants. on the right side $\rho$ and $a$ both depend on $t$, so I use the product rule.

$$2\dot a\,\ddot a = \frac{8\pi G}{3}\left(\dot\rho\, a^2 + 2\rho\, a\,\dot a\right) + \frac{2\Lambda c^2}{3}\,a\,\dot a$$

the term $-kc^2$ has zero derivative, which is why the curvature drops out of the final result.

### step 2 - divide by $2a\dot a$

$$\frac{\ddot a}{a} = \frac{4\pi G}{3}\left(\frac{\dot\rho\, a}{\dot a} + 2\rho\right) + \frac{\Lambda c^2}{3}$$

and $\dot\rho\,a/\dot a = \dot\rho/H$.

### step 3 - eliminate $\dot\rho$ with continuity

$$\frac{\dot\rho}{H} = -3\left(\rho + \frac{p}{c^2}\right)$$

$$\frac{\ddot a}{a} = \frac{4\pi G}{3}\left[-3\rho - \frac{3p}{c^2} + 2\rho\right] + \frac{\Lambda c^2}{3}$$

### step 4 - collect

$$\boxed{\, \frac{\ddot a}{a} = -\frac{4\pi G}{3}\left(\rho + \frac{3 p}{c^2}\right) + \frac{\Lambda c^2}{3} \,}$$

if I prefer to treat $\Lambda$ as a fluid with $\rho_\Lambda = \Lambda c^2/(8\pi G)$ and $p_\Lambda = -\rho_\Lambda c^2$, then $\rho_\Lambda + 3p_\Lambda/c^2 = -2\rho_\Lambda$ and $-\frac{4\pi G}{3}(-2\rho_\Lambda) = \frac{8\pi G}{3}\rho_\Lambda = \frac{\Lambda c^2}{3}$. the two ways of writing it agree.

## the Newtonian version and what it misses

from the shell of [[Friedmann equation Newtonian shell]], substituting $R = ar_0$ and $M = \frac{4\pi}{3}\rho a^3r_0^3$ directly into $\ddot R = -GM/R^2$ gives

$$\frac{\ddot a}{a} = -\frac{4\pi G}{3}\rho$$

this is the boxed equation with $p = 0$ and $\Lambda = 0$. Newtonian gravity has only mass as a source, so the $3p/c^2$ term is absent. the full result needs GR, where it comes from the $00$ component of the trace-reversed field equations, $R_{00} = \frac{8\pi G}{c^4}\left(T_{00} - \frac12 g_{00}T\right)$ with $R_{00} = -3\ddot a/a$.

## what the active gravitational density tells me

with $p = w\rho c^2$ the source is $\rho(1 + 3w)$.

| component | $w$ | $\rho + 3p/c^2$ | effect on $\ddot a$ |
|---|---|---|---|
| matter | $0$ | $\rho_m$ | decelerates |
| radiation | $1/3$ | $2\rho_r$ | decelerates, twice as strongly per unit energy density |
| curvature | none | does not appear | none |
| $\Lambda$ | $-1$ | $-2\rho_\Lambda$ | accelerates |
| any fluid with $w < -1/3$ | | negative | accelerates |

$$\ddot a > 0 \quad\Longleftrightarrow\quad \rho + \frac{3p}{c^2} < 0 \quad\Longleftrightarrow\quad w < -\frac{1}{3}$$

a fluid satisfying the strong energy condition ($\rho + 3p/c^2 \ge 0$) can only decelerate the expansion. with only such fluids $\ddot a < 0$ at all times, so going back in time $a$ must reach zero a finite time ago, less than $1/H_0$. this is the simplest form of the big bang singularity argument.

positive pressure does not push the universe apart. in a homogeneous medium there is no pressure gradient and so no pressure force. pressure enters only as a source of gravity, and there it adds to the attraction.

## the deceleration parameter

$$q \equiv -\frac{\ddot a\, a}{\dot a^2} = -\frac{1}{H^2}\frac{\ddot a}{a}$$

insert the boxed equation with every component (including $\Lambda$) written as a fluid, and use $\Omega_i = 8\pi G\rho_i/(3H^2)$.

$$q = \frac{4\pi G}{3H^2}\sum_i\rho_i(1 + 3w_i) = \frac{1}{2}\sum_i\Omega_i\,(1 + 3w_i)$$

today, with matter, radiation and $\Lambda$,

$$q_0 = \frac{1}{2}\Omega_{m,0} + \Omega_{r,0} - \Omega_{\Lambda,0} \approx \frac{0.315}{2} - 0.685 \approx -0.53$$

negative, so the expansion is accelerating now. acceleration began when $\rho_m = 2\rho_\Lambda$, that is $1 + z_{\rm acc} = (2\Omega_{\Lambda,0}/\Omega_{m,0})^{1/3} \approx 1.63$, $z_{\rm acc} \approx 0.63$. this is earlier than matter-$\Lambda$ equality at $z \approx 0.30$.

## checks

- **dimensions.** each term has units of time$^{-2}$.
- **Einstein-de Sitter.** $a \propto t^{2/3}$ gives $\ddot a/a = -2/(9t^2)$ and $-\frac{4\pi G}{3}\rho = -\frac12H^2 = -\frac12\cdot\frac{4}{9t^2}$. they agree, and $q = 1/2$.
- **radiation.** $a \propto t^{1/2}$ gives $\ddot a/a = -1/(4t^2)$ and $-\frac{4\pi G}{3}2\rho_r = -H^2 = -1/(4t^2)$. $q = 1$.
- **de Sitter.** $a \propto e^{Ht}$ gives $\ddot a/a = H^2 = \Lambda c^2/3$. $q = -1$.
- **static solution.** $\ddot a = 0$ with dust needs $4\pi G\rho = \Lambda c^2$, Einstein's static universe.

## questions I should be ready for

- *why does $k$ not appear?* its term in $\dot a^2$ is a constant and differentiates to zero.
- *is this independent of Friedmann?* no. Friedmann, acceleration and continuity are three equations of which two are independent.
- *why $3p$ and not $p$?* in GR the source of the time-time Ricci component is $T_{00} - \frac12g_{00}T$, which contains $\rho c^2 + 3p$, one $p$ for each spatial direction.
- *can I integrate this back to Friedmann?* yes. multiply by $2a\dot a$, use continuity to write the right side as a total derivative, integrate over $t$. the integration constant is $-kc^2$.

## board summary (60 seconds)

differentiate $\dot a^2 = (8\pi G/3)\rho a^2 - kc^2 + (\Lambda c^2/3)a^2$, get $2\dot a\ddot a = (8\pi G/3)(\dot\rho a^2 + 2\rho a\dot a) + (2\Lambda c^2/3)a\dot a$. divide by $2a\dot a$. substitute $\dot\rho/H = -3(\rho + p/c^2)$. result $\ddot a/a = -(4\pi G/3)(\rho + 3p/c^2) + \Lambda c^2/3$. acceleration needs $w < -1/3$.

## see also

- [[Friedmann equation Newtonian shell]] is the first input.
- [[Continuity equation cosmology]] is the second input.
- [[Hubble law derivation]] uses $q_0$ at second order in $z$.
- [[Slow roll inflation]] is the case $w \approx -1$ in the early universe.
