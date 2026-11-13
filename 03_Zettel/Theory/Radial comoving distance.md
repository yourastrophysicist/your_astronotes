---
layout: "default"
title: "Radial comoving distance"
---
the **radial comoving distance** $d_C(z)$ is the line-of-sight integral $c\int dz'/H(z')$. it's the most fundamental cosmological distance: every other distance ($d_L$, $d_A$) is built from it.

## the formula

$$\boxed{\, d_C(z) = c\int_0^z \frac{dz'}{H(z')} \,}$$

with $H(z') = H_0\sqrt{\Omega_m(1+z')^3 + \Omega_r(1+z')^4 + \Omega_\Lambda + \Omega_k(1+z')^2}$.

units: Mpc, or equivalently in $h^{-1}$ Mpc with $h = H_0/100$ km/s/Mpc.

## what it represents

$d_C$ is the comoving distance to a source at redshift $z$. it's the **"current" distance**, scaled to $a(t_0) = 1$. galaxies in the Hubble flow have constant $d_C$. their proper distance grows as $a(t)$.

at low $z$: $d_C \approx cz/H_0$, the Hubble distance. Hubble flow recovered.
at high $z$: $d_C$ depends on the cosmological model via the $H(z)$ integral. probes $\Omega_m, \Omega_\Lambda$, etc.

## benchmark values in $\Lambda$CDM

with $H_0 = 67.4$ km/s/Mpc, $\Omega_m = 0.31$, $\Omega_\Lambda = 0.69$:

| $z$ | $d_C$ (Mpc) |
|---|---|
| 0.1 | 437 |
| 0.5 | 1.94 Gpc |
| 1.0 | 3.32 Gpc |
| 2.0 | 5.18 Gpc |
| 3.0 | 6.39 Gpc |
| 5.0 | 7.85 Gpc |
| 10.0 | 9.41 Gpc |
| 1100 (recombination) | 14.0 Gpc |

at $z = \infty$, $d_C$ approaches the **particle horizon** $\sim 14.4$ Gpc.

## relation to other distances

with spatial curvature parameter $k = 0$ (flat universe, our case):
- **comoving distance**: $d_C(z)$ as above.
- **luminosity distance**: $d_L(z) = d_C(z)(1+z)$.
- **angular diameter distance**: $d_A(z) = d_C(z)/(1+z)$.
- **proper distance now**: $d_C(z)$.
- **proper distance at emission**: $d_C(z)/(1+z) = d_A(z)$.

so $d_L \cdot d_A = d_C^2$, and $d_L = d_A(1+z)^2$, the **Etherington reciprocity** relation.

for non-flat universes, replace $d_C$ in $d_L, d_A$ with the **transverse comoving distance** $d_M$, which absorbs the curvature corrections.

## the derivation from the metric

I start from the Robertson-Walker line element with the radial coordinate $\chi$:

$$ds^2 = c^2 dt^2 - a^2(t)\left[d\chi^2 + S_k^2(\chi)\, d\Omega^2\right]$$

with $S_k(\chi) = \sin\chi,\ \chi,\ \sinh\chi$ for $k = +1, 0, -1$ in units of the curvature radius. a photon that reaches me travels on a radial null path, $ds = 0$ and $d\Omega = 0$, so

$$c\,dt = -a(t)\, d\chi$$

the minus sign is there because $\chi$ decreases as $t$ increases along the incoming ray. integrating from emission to today:

$$\chi = c\int_{t_e}^{t_0} \frac{dt}{a(t)}$$

now I change variable from $t$ to $z$. with $a_0 = 1$, $1 + z = 1/a$, so

$$dz = -\frac{\dot a}{a^2}\, dt = -(1+z)\, H\, dt \quad\Longrightarrow\quad dt = -\frac{dz}{(1+z)\,H(z)}$$

substituting, the factor $1/a = 1 + z$ cancels the $(1+z)$ in the denominator:

$$d_C \equiv \chi = c\int_0^z \frac{dz'}{H(z')}$$

three things are worth saying out loud. the integral is over the photon path, not over a snapshot. the result is a **coordinate** distance, constant for objects in the Hubble flow. and all the cosmology enters through $H(z)$ alone.

## with curvature - the transverse comoving distance

the radial distance $d_C$ is the same for every $k$. what changes is the area of the sphere through the source, $4\pi d_M^2$, with

$$d_M = \begin{cases} \dfrac{c}{H_0\sqrt{\Omega_k}}\,\sinh\!\left(\sqrt{\Omega_k}\,\dfrac{H_0 d_C}{c}\right) & \Omega_k > 0 \\[2ex] d_C & \Omega_k = 0 \\[1ex] \dfrac{c}{H_0\sqrt{\lvert\Omega_k\rvert}}\,\sin\!\left(\sqrt{\lvert\Omega_k\rvert}\,\dfrac{H_0 d_C}{c}\right) & \Omega_k < 0 \end{cases}$$

it is $d_M$, not $d_C$, that enters $d_L = (1+z)\,d_M$ and $d_A = d_M/(1+z)$.

## closed forms I can check by hand

- **Einstein-de Sitter** ($\Omega_m = 1$): $H = H_0(1+z)^{3/2}$, so

$$d_C = \frac{2c}{H_0}\left[1 - \frac{1}{\sqrt{1+z}}\right]$$

and the horizon is $2c/H_0$ as $z \to \infty$.

- **low redshift**, any model: expanding $1/H(z)$ around $z = 0$,

$$d_C \simeq \frac{c}{H_0}\left[z - \frac{1 + q_0}{2}\, z^2 + \dots\right]$$

- **worked check**: $c/H_0 = 299\,792/67.4 \approx 4448$ Mpc. at $z = 0.1$ with $q_0 = -0.53$ the bracket is $0.1 - 0.235 \times 0.01 = 0.0977$, so $d_C \approx 434$ Mpc. the full integral gives 437 Mpc.

## where it goes wrong

- using $d_C$ in the inverse-square law. the flux needs $d_L$.
- forgetting that the Hubble law $v = H_0 d$ is exact for the proper distance today, which equals $d_C$, at any $z$, while $v = cz$ is only the low-$z$ limit.
- quoting distances without saying which $H_0$ was used. writing them in $h^{-1}$ Mpc avoids the problem.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Comoving and proper distances**. "In standard cosmology, comoving distance and proper distance (or physical distance) are two closely related distance measures used by cosmologists to define distances between objects. Comoving distance factors out the expansion of the universe, giving a distance that does not change in time except due to local factors, such as the motion of a galaxy within a cluster." ([Wikipedia](https://en.wikipedia.org/wiki/Comoving_and_proper_distances))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- 03_Zettel/Theory/Cosmological distances
- [[Comoving vs proper coordinates]]
- [[Angular diameter distance]]
- [[Luminosity distance]]
- [[FLRW metric]]
- [[Friedmann equations]]
- [[Hubble law]]
- [[Time-redshift relation]]
- [[Observational_Cosmology_MOC]]



## Linked References

- [[Angular diameter distance]]
- [[Comoving vs proper coordinates]]
- [[Cosmological redshift]]
- [[Distance ladder derivations]]
- [[Galaxy number counts N(m)]]
- [[Luminosity distance]]
- [[Surface brightness dimming]]
- [[Time-redshift relation]]
- [[Observational_Cosmology_MOC]]


