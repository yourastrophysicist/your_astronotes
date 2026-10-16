---
layout: default
title: "Cosmological redshift derivation"
---
## what I'm deriving

$$1 + z \equiv \frac{\lambda_o}{\lambda_e} = \frac{a(t_o)}{a(t_e)}$$

the observed redshift of a comoving source equals the ratio of the scale factor at observation to the scale factor at emission. with $a(t_o) = a_0 = 1$ this reads $1 + z = 1/a(t_e)$.

## conventions and symbols

| symbol | meaning |
|---|---|
| $t_e$, $t_o$ | cosmic time of emission and of observation |
| $\chi$ | comoving radial distance between source and observer, constant in time |
| $\delta t_e$, $\delta t_o$ | time between two consecutive wave crests at the source and at the observer |
| $\nu = 1/\delta t$, $\lambda = c\,\delta t$ | frequency and wavelength measured locally by a comoving observer |
| $z$ | redshift, defined by $1 + z = \lambda_o/\lambda_e = \nu_e/\nu_o$ |

## assumptions

1. spacetime is described by the [[Robertson-Walker metric derivation]].
2. source and observer are both comoving, so their coordinate $\chi$ is fixed. peculiar velocities are ignored.
3. light travels on null geodesics, $ds^2 = 0$.
4. the wave period is much shorter than the expansion time, $\delta t \ll 1/H$. for optical light $\delta t \sim 10^{-15}$ s against $1/H_0 \sim 4 \times 10^{17}$ s.

## derivation

### step 1 - the radial null geodesic

put the observer at the origin. by isotropy a photon aimed at the origin keeps $\theta$ and $\phi$ fixed, so $d\Omega = 0$. the metric in the $\chi$ form with $ds^2 = 0$ gives

$$0 = -c^2 dt^2 + a^2(t)\, d\chi^2 \quad\Rightarrow\quad c\, dt = \pm\, a(t)\, d\chi$$

the photon moves toward the origin, so $\chi$ decreases as $t$ increases and I take the minus sign, $c\,dt = -a(t)\, d\chi$.

### step 2 - integrate along the path

separate variables and integrate. the left side is integrated over $t$ from $t_e$ to $t_o$, the right side over $\chi$ from the source position $\chi$ down to $0$.

$$\int_{t_e}^{t_o} \frac{c\, dt}{a(t)} = -\int_{\chi}^{0} d\chi' = \chi$$

the right-hand side is a property of the source and observer only. it does not depend on which photon I follow.

### step 3 - write the same equation for the next crest

crest 1 leaves at $t_e$ and arrives at $t_o$. crest 2 leaves at $t_e + \delta t_e$ and arrives at $t_o + \delta t_o$. since $\chi$ is the same for both,

$$\int_{t_e}^{t_o} \frac{c\, dt}{a(t)} = \int_{t_e + \delta t_e}^{t_o + \delta t_o} \frac{c\, dt}{a(t)}$$

### step 4 - subtract, exactly

split both integrals at the common interior interval $[t_e + \delta t_e,\ t_o]$.

$$\int_{t_e}^{t_e+\delta t_e} \frac{dt}{a} + \int_{t_e + \delta t_e}^{t_o} \frac{dt}{a} = \int_{t_e + \delta t_e}^{t_o} \frac{dt}{a} + \int_{t_o}^{t_o+\delta t_o} \frac{dt}{a}$$

the middle pieces cancel and I am left with an exact statement.

$$\int_{t_e}^{t_e+\delta t_e} \frac{dt}{a(t)} = \int_{t_o}^{t_o+\delta t_o} \frac{dt}{a(t)}$$

### step 5 - use the smallness of the period

over one period the scale factor changes by a fractional amount $H\,\delta t \sim 10^{-33}$, so $a(t)$ can be taken out of each integral (mean value theorem, with corrections of relative order $H\delta t$).

$$\frac{\delta t_e}{a(t_e)} = \frac{\delta t_o}{a(t_o)}$$

the quantity $\delta t / a$ is conserved along the light ray.

### step 6 - translate to wavelength

each comoving observer measures $\lambda = c\, \delta t$ with their own proper time, which is cosmic time. therefore

$$\frac{\lambda_o}{\lambda_e} = \frac{\delta t_o}{\delta t_e} = \frac{a(t_o)}{a(t_e)}$$

$$\boxed{\, 1 + z = \frac{a(t_o)}{a(t_e)} = \frac{1}{a(t_e)} \,}$$

## second derivation, from the geodesic equation

this route shows that the momentum of any freely moving particle redshifts, not only that of a wave.

for a photon with four-momentum $p^\mu = dx^\mu/d\lambda$ (units with $c = 1$ in this section) the time component of the geodesic equation is

$$\frac{dp^0}{d\lambda} + \Gamma^0_{ij}\, p^i p^j = 0, \qquad \Gamma^0_{ij} = \frac{\dot a}{a}\, g_{ij}$$

the null condition $g_{\mu\nu}p^\mu p^\nu = 0$ gives $g_{ij}p^i p^j = (p^0)^2 \equiv E^2$. so

$$\frac{dE}{d\lambda} = -\frac{\dot a}{a}E^2$$

and since $dt/d\lambda = p^0 = E$, dividing gives

$$\frac{dE}{dt} = -\frac{\dot a}{a}\,E \quad\Rightarrow\quad E \propto \frac{1}{a}$$

with $E = h\nu$ this is the same law. for a massive particle the same steps give physical momentum $p \propto 1/a$, which is why peculiar velocities decay.

## checks

- **static universe.** $a$ constant gives $z = 0$.
- **expanding universe.** $a(t_o) > a(t_e)$ gives $z > 0$. a contracting one would give a blueshift.
- **time dilation.** step 5 applies to any two signals, not only crests. any process of duration $\Delta t_e$ at the source is seen to last $\Delta t_o = (1 + z)\Delta t_e$. supernova Ia light curves show exactly this stretch.
- **small distance.** for a nearby source $a(t_e) \approx 1 - H_0(t_o - t_e)$, so $z \approx H_0 d/c$, the result of [[Hubble law derivation]].

## why this is not a Doppler shift

nothing in the derivation refers to a velocity. the redshift depends only on the two values of $a$, and not on $\dot a$ at emission or reception or on the history in between. at $z > 1$ a special-relativistic reading $z \approx v/c$ would need $v > c$. only for $z \ll 1$ does the result reduce to $cz \approx v$ with $v = H_0 d$, and there the Doppler picture is a valid local approximation.

## consequence for the photon energy density

each photon has $E_\gamma = h\nu \propto 1/a$ and the photon number density dilutes as $n_\gamma \propto a^{-3}$. so $\rho_\gamma c^2 = n_\gamma E_\gamma \propto a^{-4}$, the same law that [[Continuity equation cosmology]] gives for $w = 1/3$. a blackbody stays a blackbody with $T \propto 1/a$, because the occupation number depends on $h\nu/k_B T$ and both scale the same way.

## questions I should be ready for

- *what exactly is integrated in step 2?* the integrand is $c/a(t)$, the variable is $t$, and the limits are the emission and observation times. the result is the comoving distance.
- *why do both crests have the same $\chi$?* source and observer are comoving, and $\chi$ is a comoving label.
- *what is neglected in step 5?* the change of $a$ during one wave period, a relative error of order $H\,\delta t$.
- *is $z$ additive along a path?* no. $(1 + z)$ is multiplicative. $1 + z_{\rm total} = (1 + z_1)(1 + z_2)$.

## board summary (60 seconds)

radial null geodesic, $c\,dt = -a\,d\chi$, so $\int_{t_e}^{t_o} c\,dt/a = \chi$. same $\chi$ for the next crest. subtract the two integrals, the overlap cancels, leaving $\delta t_e/a(t_e) = \delta t_o/a(t_o)$. with $\lambda = c\,\delta t$ this is $1 + z = a_o/a_e$.

## see also

- [[Robertson-Walker metric derivation]] is the geometry used here.
- [[Hubble law derivation]] expands this result at low $z$.
- [[Cosmological distances derivation]] uses $1 + z$ in $d_L$ and $d_A$.
