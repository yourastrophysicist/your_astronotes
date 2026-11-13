---
layout: "default"
title: "Comoving vs proper coordinates"
---
in cosmology, two distance concepts coexist: **comoving** (fixed, "co-moving with the cosmic flow") and **proper** (instantaneous physical distance). distinguishing them is essential for any cosmological calculation.

## the definitions

write the FLRW metric as $ds^2 = -dt^2 + a(t)^2\,\gamma_{ij}\,dx^i\,dx^j$ with comoving coordinates $x^i$ and scale factor $a(t)$.

- **comoving coordinate** $x^i$: a label that **doesn't change** as the universe expands. galaxies in the smooth Hubble flow stay at fixed $x^i$.
- **proper distance** $d_p(t) = a(t)\,r$: the **instantaneous physical distance**. grows with $a(t)$.

so two galaxies at fixed comoving separation $\Delta x = r$ have proper separation $a(t)\,r$ today, smaller in the past, larger in the future.

## the Hubble flow

a galaxy at fixed comoving coordinate $x^i$ has proper distance $d = a(t)\,x$. its proper-distance time derivative:
$$\dot d = \dot a(t)\,x = \frac{\dot a}{a}\cdot d = H(t)\,d$$

this is **Hubble's law** $\dot d = Hd$ with the Hubble parameter $H = \dot a/a$. so the Hubble flow is just the natural motion of comoving galaxies due to expansion.

at the present, $\dot d = H_0\,d$. at earlier times, $H$ was bigger (rapid expansion).

## peculiar velocity

galaxies don't only follow the Hubble flow. they also have **peculiar velocities** $v_{\rm pec}$ relative to the local Hubble flow. observed velocity is:
$$v_{\rm obs} = H_0\,d + v_{\rm pec}$$

typical $v_{\rm pec} \sim 300$ km/s in nearby clusters, up to $\sim 600$ km/s for Virgo infall. for $z \lesssim 0.01$, peculiar velocity dominates and Hubble distance becomes unreliable.

at high $z$, $H_0 d \gg v_{\rm pec}$ and the Hubble law approximation works well.

## comoving volume

if a region has comoving radius $r$, its **comoving volume** $V_c = (4\pi/3)r^3$ is constant. its **proper volume** at time $t$ is $V_p = a(t)^3\,V_c$.

so number density of conserved objects (e.g. galaxies, conserved baryons in the smooth Hubble flow) scales as:
$$n(t) = N_{\rm in\,V_c}/V_p = N/(a^3 V_c) \propto a^{-3}$$

so number density of conserved species dilutes as $a^{-3}$, just from volume. this is what gives matter $\rho_m \propto a^{-3}$ in the Friedmann equations.

## comoving distance vs proper distance vs angular diameter distance

at high $z$, the situation gets richer. several distance concepts diverge:
- **comoving distance** $d_C(z) = c\int_0^z dz'/H(z')$. coordinate distance scaled to today's units.
- **proper distance at emission** $d_C/(1+z)$: physical distance "back then."
- **proper distance today** $d_C$: same as above × $(1+z)$.
- **angular diameter distance** $d_A = d_C/(1+z)$.
- **luminosity distance** $d_L = d_C(1+z)$.

at low $z$ all coincide. at high $z$ they diverge dramatically. see 03_Zettel/Theory/Cosmological distances.

## worked example

a galaxy at comoving distance 3.3 Gpc ($z = 1$). when the light left it, the proper distance was $3.3/2 = 1.65$ Gpc. today it is 3.3 Gpc, and it recedes at $H_0d = 67.4 \times 3300 = 222\,000$ km/s, $0.74\,c$.

## where it goes wrong

- comoving distances do not change in a perfect Hubble flow. proper distances do.
- bound objects like galaxies do not expand with the universe.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Comoving and proper distances**. "In standard cosmology, comoving distance and proper distance (or physical distance) are two closely related distance measures used by cosmologists to define distances between objects. Comoving distance factors out the expansion of the universe, giving a distance that does not change in time except due to local factors, such as the motion of a galaxy within a cluster." ([Wikipedia](https://en.wikipedia.org/wiki/Comoving_and_proper_distances))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[FLRW metric]]
- [[Hubble law]]
- 03_Zettel/Theory/Cosmological distances
- [[Radial comoving distance]]
- [[Angular diameter distance]]
- [[Luminosity distance]]
- [[Cosmological redshift]]
- [[Peculiar velocities of galaxies and structures]]
- [[Observational_Cosmology_MOC]]



## Linked References

- [[Cosmological redshift]]
- [[Peculiar velocities of galaxies and structures]]
- [[Radial comoving distance]]
- [[Observational_Cosmology_MOC]]


