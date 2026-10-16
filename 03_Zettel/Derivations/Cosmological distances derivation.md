---
layout: default
title: "Cosmological distances derivation"
---
## what I'm deriving

four distances, each defined by a measurement.

$$d_C(z) = c \int_0^z \frac{dz'}{H(z')}, \qquad d_M = S_k(d_C), \qquad d_A = \frac{d_M}{1 + z}, \qquad d_L = (1 + z)\, d_M$$

and the reciprocity relation $d_L = (1 + z)^2 d_A$. in a flat universe $d_M = d_C$.

## conventions and symbols

| symbol | meaning | defined by |
|---|---|---|
| $d_C$ | line-of-sight comoving distance, equal to $\chi$ | light travel on a null geodesic |
| $d_M$ | transverse comoving distance | the areal coordinate $r = S_k(\chi)$ |
| $d_A$ | angular diameter distance | $d_A \equiv D/\theta$ for an object of proper size $D$ |
| $d_L$ | luminosity distance | $F \equiv L/(4\pi d_L^2)$ |
| $E(z)$ | $H(z)/H_0$ | [[Critical density and density parameters]] |
| $d_H$ | Hubble distance $c/H_0 \approx 4450$ Mpc | |

normalisation $a(t_0) = 1$, so $a = 1/(1 + z)$. $k$ has units of length$^{-2}$ and $S_k$ is defined in [[Robertson-Walker metric derivation]].

## assumptions

1. Robertson-Walker geometry, comoving source and observer.
2. photons move on null geodesics and their number is conserved between source and observer (no absorption or scattering).
3. the source emits isotropically, with bolometric luminosity $L$.

## comoving distance

### step 1 - null geodesic

from [[Cosmological redshift derivation]], a radial photon reaching the origin satisfies

$$\chi = \int_{t_e}^{t_0} \frac{c\, dt}{a(t)}$$

### step 2 - change the integration variable from $t$ to $z$

the map between the two is $1 + z = 1/a(t)$. differentiate with respect to $t$.

$$\frac{dz}{dt} = -\frac{\dot a}{a^2} = -\frac{1}{a}\frac{\dot a}{a} = -(1 + z)\,H \quad\Rightarrow\quad dt = -\frac{dz}{(1 + z)\,H(z)}$$

the limits transform as $t = t_e \to z' = z$ and $t = t_0 \to z' = 0$. the integrand becomes $c/a = c(1 + z')$.

$$\chi = \int_{z}^{0} c\,(1 + z')\left[-\frac{dz'}{(1 + z')H(z')}\right] = c\int_0^z \frac{dz'}{H(z')}$$

the factors of $(1 + z')$ cancel and the minus sign flips the limits.

$$\boxed{\, d_C(z) = c \int_0^z \frac{dz'}{H(z')} = d_H\int_0^z \frac{dz'}{E(z')} \,}$$

$d_C$ is the proper distance to the source measured today along the slice $t = t_0$. the proper distance at emission was $d_C/(1 + z)$.

### step 3 - lookback time, by the same substitution

$$t_0 - t_e = \int_{t_e}^{t_0} dt = \int_0^z \frac{dz'}{(1 + z')\,H(z')}$$

here the $(1 + z')$ does not cancel, which is why $c \times$ (lookback time) is not a distance that appears in any observable.

## transverse comoving distance

two sources at the same $\chi$ separated by a small angle $\delta\theta$ are separated today by the proper length $S_k(\chi)\,\delta\theta$ (the angular part of the metric with $a_0 = 1$). so the comoving distance that converts angles into transverse lengths is

$$d_M = S_k(d_C) = \begin{cases} \dfrac{1}{\sqrt{k}}\sin\left(\sqrt{k}\, d_C\right) & k > 0\\[2mm] d_C & k = 0\\[2mm] \dfrac{1}{\sqrt{|k|}}\sinh\left(\sqrt{|k|}\, d_C\right) & k < 0 \end{cases}$$

in terms of observables $k = -\Omega_{k,0}H_0^2/c^2$, so $\sqrt{|k|} = \sqrt{|\Omega_{k,0}|}/d_H$.

## angular diameter distance

### step 4 - proper size from the metric

an object at redshift $z$ lies perpendicular to the line of sight. its two ends emit photons at the same $t_e$ and the same $\chi$, separated by $\theta$ in angle. set $dt = 0$ and $d\chi = 0$ in the metric.

$$D = a(t_e)\, S_k(\chi)\, \theta$$

the photons then travel on radial geodesics, so the angle between them is preserved and $\theta$ is what I observe.

### step 5 - definition

$$d_A \equiv \frac{D}{\theta} = a(t_e)\, S_k(\chi)$$

$$\boxed{\, d_A(z) = \frac{d_M(z)}{1 + z} \,}$$

$d_A$ is not monotonic. it grows as $d_H z$ at low $z$, peaks near $z \approx 1.6$ in $\Lambda$CDM at about $1750$ Mpc, and then decreases, because $d_M$ saturates while $1/(1 + z)$ keeps falling. an object of fixed size looks larger again beyond the peak. the light was emitted when the object was much closer in proper distance.

## luminosity distance

### step 6 - count photons and energy

the source emits $N$ photons of mean energy $\epsilon_e$ in a proper time $\delta t_e$, so $L = N\epsilon_e/\delta t_e$.

- **geometry.** at $t_0$ these photons lie on a sphere centred on the source that passes through the observer. by homogeneity its areal radius is the same $S_k(\chi)$, and with $a_0 = 1$ its proper area is $4\pi S_k^2(\chi) = 4\pi d_M^2$.
- **energy redshift.** each photon arrives with $\epsilon_o = \epsilon_e/(1 + z)$.
- **arrival rate.** the $N$ photons arrive during $\delta t_o = (1 + z)\,\delta t_e$ (step 5 of the redshift derivation).

### step 7 - flux

$$F = \frac{N\,\epsilon_o}{\delta t_o\; 4\pi d_M^2} = \frac{N\epsilon_e}{\delta t_e}\cdot\frac{1}{(1 + z)^2}\cdot\frac{1}{4\pi d_M^2} = \frac{L}{4\pi\left[(1 + z)\, d_M\right]^2}$$

comparing with the definition $F = L/(4\pi d_L^2)$,

$$\boxed{\, d_L(z) = (1 + z)\, d_M(z) \,}$$

this is bolometric. for a flux in a fixed band a K-correction is needed, because the band samples a different rest-frame wavelength range.

## Etherington reciprocity

dividing the two boxed results,

$$\boxed{\, d_L = (1 + z)^2\, d_A \,}$$

this holds in any metric theory of gravity as long as photons travel on null geodesics and photon number is conserved. it does not use the Friedmann equation, and it does not even need the Robertson-Walker symmetry. a violation would indicate photon loss (dust, exotic physics) and it is tested by comparing supernova $d_L$ with BAO or cluster $d_A$.

a direct consequence is surface brightness dimming. flux scales as $d_L^{-2}$ and solid angle as $d_A^{-2}$, so bolometric surface brightness scales as $(d_A/d_L)^2 = (1 + z)^{-4}$, independent of cosmology (Tolman test).

## distance modulus

$$\mu \equiv m - M = 5 \log_{10}\left(\frac{d_L}{10\ \text{pc}}\right) = 5\log_{10}\left(\frac{d_L}{\text{Mpc}}\right) + 25$$

the plot of $\mu$ against $z$ for standard candles is the Hubble diagram.

## checks

- **low redshift.** $E \to 1$ gives $d_C \approx d_H z$, and all four distances agree with $cz = H_0 d$. the next order is in [[Hubble law derivation]].
- **Einstein-de Sitter.** $E = (1 + z)^{3/2}$ gives $d_C = 2 d_H\left[1 - (1 + z)^{-1/2}\right]$, which tends to the finite value $2d_H$ as $z \to \infty$. that limit is the particle horizon.
- **ordering.** for $z > 0$, $d_A < d_M < d_L$.
- **units.** every boxed expression is a length. $(1 + z)$ factors are dimensionless.

## questions I should be ready for

- *why two factors of $(1 + z)$ in the flux?* one for the energy of each photon and one for the rate at which photons arrive.
- *why is the area $4\pi d_M^2$ and not $4\pi d_C^2$?* the area of a sphere is set by the areal coordinate $r = S_k(\chi)$. it equals $d_C$ only if $k = 0$.
- *why does $d_A$ use $a(t_e)$ and $d_L$ use $a_0$?* the object's size is a proper length at emission. the sphere over which the light is spread is a proper area today.
- *which distance is "the" distance?* none. each is defined by a measurement and they coincide only for $z \ll 1$.
- *what is the particle horizon?* $d_C(z \to \infty)$, the comoving distance light could have travelled since $t = 0$. about $14$ Gpc in $\Lambda$CDM.

## board summary (60 seconds)

null geodesic gives $\chi = \int c\,dt/a$. substitute $dt = -dz/[(1 + z)H]$, the $(1 + z)$ cancels, $d_C = c\int_0^z dz'/H$. transverse distance $d_M = S_k(d_C)$. object size $D = a_e S_k\theta$ so $d_A = d_M/(1 + z)$. flux is $L$ over area $4\pi d_M^2$, with one $(1 + z)$ for photon energy and one for arrival rate, so $d_L = (1 + z)d_M$. hence $d_L = (1 + z)^2 d_A$.

## see also

- [[Robertson-Walker metric derivation]] supplies $S_k(\chi)$.
- [[Cosmological redshift derivation]] supplies the two $(1 + z)$ factors in $d_L$.
- [[Critical density and density parameters]] supplies $H(z)$ in the integral.
- [[Hubble law derivation]] is the low-$z$ expansion.
