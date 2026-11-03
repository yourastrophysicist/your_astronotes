---
layout: "default"
title: "Perihelion precession"
---
a planet orbiting a non-rotating mass in Schwarzschild traces an **almost-elliptical** orbit, but the ellipse slowly **precesses** (rotates) over many orbits. for Mercury orbiting the Sun, the GR contribution is exactly $43''$ per century, the famous historical confirmation of GR.

## the orbit equation

for a timelike geodesic in Schwarzschild equatorial plane, with $u = 1/r$:
$$\frac{d^2 u}{d\phi^2} + u = \frac{GM}{L^2} + 3GM u^2$$

the first term on the right is the standard Newtonian orbit equation (giving Kepler's ellipse). the second term, $3GM u^2$, is the **GR correction**.

## perturbation analysis

write $u = u_0 + u_1$ with $u_0$ the Newtonian Kepler orbit:
$$u_0 = \frac{GM}{L^2}\,(1 + e\cos\phi)$$
($e$ = eccentricity). substitute, keep first-order in $GM/L^2$. the perturbation $u_1$ has a secular term:
$$u_1 \propto \phi\sin\phi$$

absorbing this into a precession of the orbit ($\phi \to \phi - \delta\phi$):
$$\boxed{\, \Delta\phi_{\rm prec}\big\vert_{\rm per\,orbit} = \frac{6\pi GM}{a(1 - e^2)} \,}$$

with $a$ the semi-major axis. equivalent forms: $6\pi GM/p$ with $p = a(1 - e^2)$ the semi-latus rectum, or $6\pi GM/c^2 a (1 - e^2)$ in physical units.

## Mercury

Mercury's orbital parameters:
- $a = 5.79 \times 10^{10}$ m.
- $e = 0.206$.
- orbital period $T = 88$ days.
- orbits per century $= 415$.

GR precession per century:
$$\Delta\phi_{\rm prec, century} = 415 \cdot \frac{6\pi GM_\odot}{a(1 - e^2)c^2}$$

with $GM_\odot/c^2 = 1.476$ km, evaluating:
$$\Delta\phi_{\rm prec, century} \approx 43''$$

exactly the residual unexplained by Newtonian gravity. **the predictive triumph of GR**.

historical context: Le Verrier (1859) established the residual but couldn't explain it. various workarounds (a hypothetical inner planet "Vulcan," modifications to the inverse-square law) all failed. Einstein's calculation in November 1915, completed within days of the final field equations, was the first quantitative confirmation of GR.

## generalisation

for any compact orbit around a Schwarzschild source, the precession per orbit is:
$$\Delta\phi = 6\pi\,\frac{GM}{c^2 a(1 - e^2)}$$

so:
- **larger $a$**: smaller precession (further from BH).
- **smaller $e$**: smaller precession (almost-circular orbit precesses slowly).
- **larger $M$**: bigger effect.

other tests:
- **binary pulsar PSR B1913+16**: precession $4.2°/$year, $\sim 10^5$ times Mercury's. confirms GR to high precision.
- **S-stars at Sgr A$^\star$**: S2 has $a \approx 1000$ AU, $e \approx 0.88$. precession $\sim 12'$/orbit, observed by GRAVITY in 2020.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Apsidal precession|500](https://commons.wikimedia.org/wiki/Special:FilePath/Precessing_Kepler_orbit_280frames_e0.6_smaller.gif?width=600)
*Made by me on 18 January 2008 using Blender. A gradually precessing elliptical orbit, such as might result from a 1/r3 force, as occurs in general relativity* ([Commons file page](https://commons.wikimedia.org/wiki/File:Precessing_Kepler_orbit_280frames_e0.6_smaller.gif), WillowW, CC BY 3.0, as used on the Wikipedia article [Apsidal precession](https://en.wikipedia.org/wiki/Apsidal_precession))

- **Apsidal precession**. "In celestial mechanics, apsidal precession (or apsidal advance) is the precession (gradual rotation) of the line connecting the apsides (line of apsides) of an astronomical body's orbit. The apsides are the orbital points farthest (apoapsis) and closest (periapsis) from its primary body. The apsidal precession is the first time derivative of the argument of periapsis, one of the six main orbital elements of an orbit." ([Wikipedia](https://en.wikipedia.org/wiki/Apsidal_precession))
- **Lecture Notes on General Relativity**. "These notes represent approximately one semester's worth of lectures on introductory general relativity for beginning graduate students in physics. Topics include manifolds, Riemannian geometry, Einstein's equations, and three applications: gravitational radiation, black holes, and cosmology." ([arXiv:gr-qc/9712019](https://arxiv.org/abs/gr-qc/9712019))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Schwarzschild metric]]
- [[Schwarzschild effective potential]]
- [[Effective potential approach]]
- [[Photon trajectories and impact parameter]]
- [[Light deflection]]
- [[General_Relativity_MOC]]
- [[Ch 6 - Black Holes]]



## Linked References

- [[Light deflection]]
- [[Newtonian limit of GR]]
- [[Schwarzschild metric]]
- [[General_Relativity_MOC]]


