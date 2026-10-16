---
layout: default
title: "Hubble law derivation"
---
## what I'm deriving

three statements that are all called "Hubble's law" and should be kept apart.

1. the exact velocity-distance law for proper distance at fixed cosmic time,
$$v_p(t) = H(t)\, d_p(t)$$
2. the observable low-redshift law,
$$c z \approx H_0\, d \qquad (z \ll 1)$$
3. its second-order extension, which carries the deceleration parameter,
$$d_L = \frac{c}{H_0}\left[z + \frac{1}{2}(1 - q_0)\, z^2 + \mathcal O(z^3)\right]$$

## conventions and symbols

| symbol | meaning |
|---|---|
| $d_p(t) = a(t)\chi$ | proper distance at cosmic time $t$ to a source at comoving distance $\chi$ |
| $H_0 = \dot a/a$ at $t_0$ | Hubble constant |
| $q_0 = -\ddot a\, a/\dot a^2$ at $t_0$ | deceleration parameter, positive for a decelerating universe |
| $\tau = t_0 - t_e$ | lookback time, positive |
| $d_C$ | comoving distance, equal to $\chi$ with $a_0 = 1$ |
| $d_L$ | luminosity distance, $d_L = (1 + z)\, d_C$ in a flat universe |

normalisation $a(t_0) = 1$ throughout.

## part 1 - the exact law $v = H d$

### step 1 - proper distance

at a fixed cosmic time $t$ ($dt = 0$) and along a radial line ($d\Omega = 0$) the [[Robertson-Walker metric derivation]] gives $ds = a(t)\, d\chi$. integrating over $\chi$ from $0$ to the source,

$$d_p(t) = a(t)\, \chi$$

### step 2 - differentiate with respect to $t$

the source is comoving, so $\dot\chi = 0$.

$$v_p \equiv \frac{d\, d_p}{dt} = \dot a\, \chi = \frac{\dot a}{a}\, a\chi$$

$$\boxed{\, v_p(t) = H(t)\, d_p(t) \,}$$

this is exact at every distance and every time. it is the only velocity field compatible with homogeneity and isotropy, because a law $\vec v = f(t)\,\vec r$ keeps the same form when seen from any other comoving point, $\vec v - \vec v_1 = f(t)(\vec r - \vec r_1)$.

$v_p$ exceeds $c$ beyond the Hubble radius $d_H = c/H$. there is no conflict with relativity, since $v_p$ is the rate of change of a distance defined on a constant-time slice and not a velocity measured in any single inertial frame.

neither $d_p$ nor $v_p$ is directly observable. what I measure is a redshift and a flux or an angle. parts 2 and 3 connect to those.

## part 2 - expanding $a(t)$ around today

### step 3 - Taylor series of the scale factor

assuming $a(t)$ is at least twice differentiable at $t_0$,

$$a(t) = a(t_0) + \dot a(t_0)(t - t_0) + \frac{1}{2}\ddot a(t_0)(t - t_0)^2 + \cdots$$

with $a(t_0) = 1$, $\dot a(t_0) = H_0$ and $\ddot a(t_0) = -q_0 H_0^2$ (definition of $q_0$),

$$a(t) = 1 + H_0 (t - t_0) - \frac{1}{2} q_0 H_0^2 (t - t_0)^2 + \cdots$$

at the emission time $t - t_0 = -\tau$.

$$a(t_e) = 1 - H_0\tau - \frac{1}{2} q_0 H_0^2 \tau^2 + \cdots$$

### step 4 - redshift as a series in $\tau$

from [[Cosmological redshift derivation]], $1 + z = 1/a(t_e)$. use $(1 - \epsilon)^{-1} = 1 + \epsilon + \epsilon^2 + \cdots$ with $\epsilon = H_0\tau + \frac12 q_0 H_0^2\tau^2$, keeping terms up to $\tau^2$.

$$1 + z = 1 + H_0\tau + \frac{1}{2}q_0 H_0^2\tau^2 + H_0^2\tau^2 + \cdots$$

$$z = H_0 \tau + \left(1 + \frac{q_0}{2}\right) H_0^2 \tau^2 + \cdots$$

### step 5 - invert the series

write $H_0\tau = z + \beta z^2$ and substitute into step 4.

$$z = (z + \beta z^2) + \left(1 + \frac{q_0}{2}\right) z^2 + \mathcal O(z^3) \quad\Rightarrow\quad \beta = -\left(1 + \frac{q_0}{2}\right)$$

$$H_0\tau = z - \left(1 + \frac{q_0}{2}\right) z^2 + \cdots$$

### step 6 - comoving distance as a series

the comoving distance is $d_C = \int_{t_e}^{t_0} c\, dt/a(t)$. the integrand to first order is $1/a = 1 + H_0(t_0 - t) + \cdots$. change variable to $\tau' = t_0 - t$, which runs from $0$ to $\tau$.

$$d_C = c\int_0^{\tau}\left(1 + H_0\tau' + \cdots\right) d\tau' = c\tau + \frac{1}{2} c H_0 \tau^2 + \cdots$$

the second term is easy to forget. $d_C$ is not $c\tau$ beyond first order, because the distance already covered by the photon keeps stretching.

substitute step 5, keeping $z^2$.

$$\frac{H_0 d_C}{c} = z - \left(1 + \frac{q_0}{2}\right)z^2 + \frac{1}{2}z^2 = z - \frac{1}{2}(1 + q_0)\, z^2 + \cdots$$

### step 7 - luminosity distance

for negligible curvature $d_L = (1 + z)\, d_C$ (see [[Cosmological distances derivation]]). curvature corrections to $S_k(\chi)$ start at order $\chi^3$ and do not affect the $z^2$ term.

$$\frac{H_0 d_L}{c} = (1 + z)\left[z - \frac{1}{2}(1 + q_0) z^2\right] = z + z^2 - \frac{1}{2}(1 + q_0) z^2 + \cdots$$

$$\boxed{\, d_L = \frac{c}{H_0}\left[z + \frac{1}{2}(1 - q_0)\, z^2 + \cdots\right] \,}$$

similarly $d_A = d_C/(1 + z) = (c/H_0)\left[z - \frac12(3 + q_0)z^2 + \cdots\right]$.

### step 8 - the leading term

at first order every distance measure agrees, $d_p = d_C = d_L = d_A = d$, and

$$\boxed{\, c z \approx H_0\, d \qquad (z \ll 1) \,}$$

## checks

- **dimensions.** $c/H_0$ is a length, about $4450$ Mpc for $h = 0.674$.
- **empty universe.** with $\rho = 0$ and $k<0$ the scale factor is linear in time, $q_0 = 0$, and $d_L = (c/H_0)(z + z^2/2)$, which is the known exact Milne result expanded to second order.
- **Einstein-de Sitter.** $q_0 = 1/2$ gives $d_L = (c/H_0)(z + z^2/4)$. the exact formula $d_L = (2c/H_0)(1 + z)\left[1 - (1 + z)^{-1/2}\right]$ expands to the same thing.
- **sign of the effect.** smaller $q_0$ means larger $d_L$ at fixed $z$, so sources look fainter. this is how the 1998 supernova results showed $q_0 < 0$.

## the physical content of $q_0$

from the [[Acceleration equation]], with $\Lambda$ treated as a fluid with $w = -1$,

$$q_0 = \frac{1}{2}\sum_i \Omega_{i,0}(1 + 3w_i) = \frac{1}{2}\Omega_{m,0} + \Omega_{r,0} - \Omega_{\Lambda,0} \approx -0.53$$

for $\Omega_{m,0} = 0.315$ and $\Omega_{\Lambda,0} = 0.685$.

## historical and observational note

Hubble (1929) found a linear relation between velocity and distance for about two dozen galaxies with Cepheid-based distances, after Lemaitre (1927) had derived it from the expanding solution. the value of $H_0$ is still disputed, $67.4 \pm 0.5$ km s$^{-1}$ Mpc$^{-1}$ from the CMB against about $73$ from the local distance ladder.

at low $z$ peculiar velocities of a few hundred km/s contaminate $cz$, so the law is tested cleanly only beyond roughly $50$ Mpc.

## questions I should be ready for

- *is $v = H d$ exact or approximate?* exact for proper distance and its time derivative. approximate as a relation between the observables $z$ and $d_L$.
- *why does $d_C$ get the extra $\frac12 cH_0\tau^2$?* because the integrand is $c/a(t)$ and $1/a > 1$ in the past.
- *where does curvature enter?* at order $z^3$, through $S_k(\chi)$ and through the third derivative of $a$ (the jerk).
- *does $v > c$ violate relativity?* no, see part 1.

## board summary (60 seconds)

$d_p = a\chi$, so $\dot d_p = \dot a\chi = H d_p$, exact. for observables expand $a(t_e) = 1 - H_0\tau - \frac12 q_0H_0^2\tau^2$, invert $1 + z = 1/a$ to get $H_0\tau = z - (1 + q_0/2)z^2$. integrate $c/a$ to get $d_C = c\tau + \frac12 cH_0\tau^2 = (c/H_0)[z - \frac12(1 + q_0)z^2]$. multiply by $(1 + z)$. result $d_L = (c/H_0)[z + \frac12(1 - q_0)z^2]$.

## see also

- [[Cosmological redshift derivation]] for $1 + z = a_0/a_e$.
- [[Cosmological distances derivation]] for the exact $d_L(z)$ at any $z$.
- [[Acceleration equation]] for the physical content of $q_0$.
