---
layout: default
title: "Schwarzschild metric"
---

the **Schwarzschild metric** describes the spacetime outside a non-rotating, spherically-symmetric mass $M$. it's the simplest non-trivial vacuum solution of Einstein's equations (Schwarzschild 1916) and the model for stars, planets, and non-rotating black holes.

## the metric

$$\boxed{\, ds^2 = -\left(1 - \frac{2GM}{r}\right)dt^2 + \left(1 - \frac{2GM}{r}\right)^{-1}dr^2 + r^2 d\Omega^2 \,}$$

with $d\Omega^2 = d\theta^2 + \sin^2\theta\,d\phi^2$, the round-2-sphere metric. signature $(-, +, +, +)$.

setting $r_s = 2GM$ (the **Schwarzschild radius**), the coefficient becomes $1 - r_s/r$.

## key features

- **asymptotically flat**: at $r \to \infty$, $g \to \eta$ (Minkowski).
- **two killing vectors**: $\partial_t$ (static) and $\partial_\phi$ (axisymmetric, plus full sphere of rotations).
- **vacuum**: $R_{\mu\nu} = 0$ for $r > 0$.
- **two special radii**: $r = 0$ (true singularity) and $r = 2GM$ (event horizon, coordinate singularity).

## the assumptions (Birkhoff theorem)

Schwarzschild is the **unique** spherically-symmetric vacuum solution. **Birkhoff's theorem**: any spherically symmetric vacuum solution is asymptotically flat, static, and Schwarzschild. so a pulsating spherical star produces no GW outside it; the exterior is Schwarzschild at all times.

## physical predictions (all confirmed)

1. **gravitational redshift**: a photon climbing out of the gravitational well has its frequency reduced by factor $\sqrt{1 - 2GM/r_{\rm emit}}/\sqrt{1 - 2GM/r_{\rm obs}}$. measured in the Pound-Rebka experiment 1959 + GPS satellites + Mercury surface.
2. **perihelion precession** of Mercury: $43''$/century, the missing piece in Newtonian theory.
3. **light deflection**: $1.75''$ at the solar limb. confirmed by Eddington 1919.
4. **innermost stable circular orbit (ISCO)** at $r = 6GM$. inner edge of accretion disks; observable.
5. **photon sphere** at $r = 3GM$. unstable circular photon orbit; the bright ring in EHT images.
6. **event horizon** at $r = 2GM$. one-way membrane.

## limits

at large $r$: the metric reduces to flat plus a small Newtonian-potential perturbation, $g_{00} \approx -(1 + 2\Phi/c^2)$ with $\Phi = -GM/r$. this is how Schwarzschild reproduces Newtonian gravity in the weak-field limit.

at $r = 2GM$: the **horizon**. a one-way membrane, not a singularity (Riemann tensor is finite there). coordinate change to Eddington-Finkelstein or Kruskal removes the apparent singularity.

at $r = 0$: a **true curvature singularity**. Kretschmann scalar $R_{\mu\nu\rho\sigma}R^{\mu\nu\rho\sigma} = 48 G^2 M^2/r^6 \to \infty$. spacetime ends.

## scales

for typical objects (with $r_s = 2GM$):
- **Sun**: $r_s = 2.95$ km. solar surface at $7\times 10^5$ km, so we're far from BH regime.
- **Earth**: $r_s = 8.87$ mm.
- **stellar BH** ($10\,M_\odot$): $r_s = 30$ km.
- **galactic centre BH** (Sgr A$^\star$, $4 \times 10^6\,M_\odot$): $r_s = 1.2 \times 10^7$ km, slightly bigger than the Sun.
- **supermassive BH** (e.g. M87, $6.5\times 10^9\,M_\odot$): $r_s = 2 \times 10^{10}$ km, ~$120$ AU.

## see also

- [Birkhoff theorem](../../02_Zettel/Theory/Birkhoff theorem.html)
- [Schwarzschild Christoffels](../../02_Zettel/Theory/Schwarzschild Christoffels.html)
- [Schwarzschild horizon](../../02_Zettel/Theory/Schwarzschild horizon.html)
- [Schwarzschild effective potential](../../02_Zettel/Theory/Schwarzschild effective potential.html)
- [Circular orbits in Schwarzschild](../../02_Zettel/Theory/Circular orbits in Schwarzschild.html)
- [Photon sphere](../../02_Zettel/Theory/Photon sphere.html)
- [Radial infall](../../02_Zettel/Theory/Radial infall.html)
- [Photon trajectories and impact parameter](../../02_Zettel/Theory/Photon trajectories and impact parameter.html)
- [Perihelion precession](../../02_Zettel/Theory/Perihelion precession.html)
- [Light deflection](../../02_Zettel/Theory/Light deflection.html)
- [Eddington-Finkelstein and Kruskal](../../02_Zettel/Theory/Eddington-Finkelstein and Kruskal.html)
- Q11 - selected Schwarzschild Christoffels
- Q12 - circular orbits and orbital frequency
- Q13 - radial infall and proper time
- Q14 - photon trajectory and impact parameter
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.html)
- [Ch 5 - The Einstein Equation](../../01_Literature/Book/Baumann GR/Ch 5 - The Einstein Equation.html)
- [Ch 6 - Black Holes](../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.html)
