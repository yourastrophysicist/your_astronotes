---
layout: default
title: "Geodesic deviation"
---

the **geodesic deviation equation** is the GR formulation of **tidal force**: it tells you how the separation between two nearby free-falling observers evolves due to the curvature of spacetime.

## the setup

consider two infinitesimally separated geodesics with the same affine parameter, separated by a vector $\xi^\mu$ (the **deviation vector**). the geodesics' four-velocities are $u^\mu$.

the **second covariant derivative of the deviation along the geodesic** is:
$$\boxed{\, \frac{D^2\xi^\mu}{D\tau^2} = -R^\mu{}_{\nu\rho\sigma}u^\nu u^\rho \xi^\sigma \,}$$

so the relative acceleration of two free-falling test particles is given by Riemann acting on their separation. **curvature = tidal force** in the most direct sense.

## physical interpretation

in flat spacetime ($R = 0$): two parallel geodesics stay parallel. no relative acceleration.

in curved spacetime: parallel geodesics initially can diverge or converge. the "tidal effect."

example: two test particles falling toward Earth side by side. Earth's gravity pulls them slightly toward each other (since both fall toward the centre). the convergence rate is the tidal force, encoded in Earth's Riemann tensor.

example: a test ring of particles in free fall through a region with a passing gravitational wave gets stretched in one direction and squeezed in the perpendicular direction (the "+" and "×" patterns). the tidal force from the GW is captured by $R_{0i0j}$, which oscillates in time.

## the Newtonian analog

in Newtonian gravity, the relative acceleration of two nearby falling particles separated by $\xi^i$ is:
$$\ddot \xi^i = -\partial_i \partial_j \Phi\,\xi^j$$
with $\Phi$ the Newtonian potential.

so the **Newtonian tidal tensor** is $\partial_i \partial_j \Phi$. in GR, this generalises to $R^\mu{}_{0\nu 0}$ (in the local rest frame of $u$), which reduces to $\partial_i \partial_j \Phi$ in the weak-field, slow-motion limit.

## the operational definition of curvature

the geodesic deviation equation is the **physical operational definition** of curvature:

> "spacetime is curved when nearby free-falling observers experience relative acceleration."

this is **not** something coordinate-dependent or subjective. the relative motion of nearby test particles is invariant. and it's controlled by Riemann.

## the LIGO effect

gravitational waves passing through a free-falling array of test masses produce time-varying separations:
$$\Delta L/L \sim h_{\rm GW}$$
with $h_{\rm GW}$ the wave amplitude. for typical astrophysical sources, $h \sim 10^{-21}$, requiring laser interferometers with arm lengths of km to detect $\Delta L \sim 10^{-18}$ m.

this is **directly geodesic deviation**: the test masses are in free fall, and the GW imposes oscillating tidal forces via $R_{0i0j}$.

## see also

- [Riemann tensor](../../02_Zettel/Theory/Riemann tensor.md)
- [Geodesic equation](../../02_Zettel/Theory/Geodesic equation.md)
- [Ricci tensor and scalar](../../02_Zettel/Theory/Ricci tensor and scalar.md)
- [Newtonian limit of GR](../../02_Zettel/Theory/Newtonian limit of GR.md)
- [Geodesic deviation under a GW](../../02_Zettel/Theory/Geodesic deviation under a GW.md)
- [Plus and cross polarizations](../../02_Zettel/Theory/Plus and cross polarizations.md)
- [Schwarzschild effective potential](../../02_Zettel/Theory/Schwarzschild effective potential.md)
- Q17 - Riemann R_0x0x for a TT plane wave
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 4 - Spacetime Curvature](../../01_Literature/Book/Baumann GR/Ch 4 - Spacetime Curvature.md)
- [Ch 8 - Gravitational Waves](../../01_Literature/Book/Baumann GR/Ch 8 - Gravitational Waves.md)
