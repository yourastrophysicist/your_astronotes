---
layout: default
title: "Cosmic look-back time"
---

the **look-back time** to a source at redshift $z$ is the difference between the age of the universe today and at the time of emission. answers: "how long ago did this light leave the source?"

## the formula

$$t_{\rm lookback}(z) = t_0 - t(z) = \int_0^z \frac{dz'}{(1+z')H(z')}$$

with $H(z') = H_0\sqrt{\Omega_m(1+z')^3 + \Omega_r(1+z')^4 + \Omega_\Lambda + \Omega_k(1+z')^2}$.

## benchmark values in $\Lambda$CDM

with $H_0 = 67.4$ km/s/Mpc, $\Omega_m = 0.31$, $\Omega_\Lambda = 0.69$:

| $z$ | $t_{\rm lookback}$ |
|---|---|
| 0.1 | 1.3 Gyr |
| 0.5 | 5.2 Gyr |
| 1.0 | 7.9 Gyr |
| 2.0 | 10.5 Gyr |
| 3.0 | 11.5 Gyr |
| 5.0 | 12.5 Gyr |
| 10.0 | 13.3 Gyr |
| 1100 (recombination) | 13.8 Gyr (just below) |

so observing a galaxy at $z = 1$ shows me the galaxy as it was $\sim 8$ Gyr ago. CMB photons travelled for almost the full age of the universe.

## what this means observationally

observing higher-$z$ objects = looking further back in cosmic time. so:
- $z = 0$: present-day galaxies (Local Group, etc).
- $z = 0.5$: galaxies $\sim 5$ Gyr ago. epoch of dark-energy onset, early acceleration.
- $z = 1$ to $3$: **cosmic noon**, peak of cosmic SFR. most stellar mass formed.
- $z = 6$: end of reionisation, first galaxies massively enriching the IGM.
- $z = 10$: protogalaxies, sparse.
- $z = 20$: first stars (Pop III), unobserved directly.
- $z = 1100$: surface of last scattering, the CMB.
- $z \sim 10^9$: BBN, $\sim 3$ minutes after Big Bang.

so cosmology is a **time machine**: each observed redshift maps to a specific epoch.

## the relation to look-back distance

related to comoving distance via $H(z)$. comoving distance $d_C(z) = c\int_0^z dz'/H(z')$. look-back time:
$$t_{\rm lookback}(z) = \int_0^z \frac{dz'}{(1+z')H(z')}$$

so $t_{\rm lookback}$ has an extra $1/(1+z')$ factor compared to $d_C/c$.

at low $z$: $t_{\rm lookback} \approx z/H_0 \approx d/c$. light-travel time.
at high $z$: $t_{\rm lookback}$ saturates at $t_0$, while $d_C$ keeps growing toward the cosmological horizon.

## why ages vary slowly with high $z$

the look-back time at $z = 5$ is $12.5$ Gyr (out of $13.8$). at $z = 10$ it's $13.3$ Gyr. so going from $z = 5$ to $z = 10$ is only $0.8$ Gyr more in look-back. **going to higher $z$ wins less time** as $z$ increases.

physical reason: the universe was compressed in time at early epochs. the first $\sim 1$ Gyr after the Big Bang covers $z = \infty$ down to $z \sim 6$.

## see also

- [Time-redshift relation](../../02_Zettel/Theory/Time-redshift relation.md)
- [FLRW metric](../../02_Zettel/Theory/FLRW metric.md)
- [Friedmann equations](../../02_Zettel/Theory/Friedmann equations.md)
- [Cosmological redshift](../../02_Zettel/Theory/Cosmological redshift.md)
- [Cosmic eras](../../02_Zettel/Theory/Cosmic eras.md)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.md)
- 03_Zettel/Theory/Cosmological distances
- [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
