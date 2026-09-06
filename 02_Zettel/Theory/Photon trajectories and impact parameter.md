---
layout: default
title: "Photon trajectories and impact parameter"
---

photon (null) geodesics in Schwarzschild are characterised by a single dimensionless parameter, the **impact parameter** $b = L/E$. determines whether a photon scatters, captures, or asymptotes to the photon sphere.

## the impact parameter

for a photon coming from infinity along a straight line that would pass at perpendicular distance $b$ from the BH, the conserved quantities are:
$$E = (1 - 2GM/r)\dot t, \qquad L = r^2\dot\phi$$
$$b \equiv L/E$$

at infinity, this is just the geometric distance of closest approach in the asymptotic flat spacetime.

## the orbit equation

for null geodesics, $g_{\mu\nu}\dot x^\mu \dot x^\nu = 0$:
$$\left(\frac{du}{d\phi}\right)^2 = \frac{1}{b^2} - u^2(1 - 2GMu)$$

with $u = 1/r$. taking the derivative once more:
$$\frac{d^2 u}{d\phi^2} + u = 3GM u^2$$

the right side is the GR correction; without it (Newtonian), we'd have a Kepler-like ellipse.

## three regimes

depending on $b$:

### $b > b_{\rm crit}$: scattering
photon comes in, reaches a minimum radius, escapes back to infinity. deflection angle:
$$\Delta\phi - \pi = \frac{4GM}{b}\quad\text{at large } b$$
the famous **light deflection by gravity**. for the Sun, $b \sim R_\odot$: $\Delta\phi \approx 1.75''$, the Eddington 1919 result.

### $b = b_{\rm crit} = 3\sqrt{3}\,GM$: critical
photon asymptotes to the photon sphere at $r = 3GM$, orbiting indefinitely. the boundary between scattering and capture.

### $b < b_{\rm crit}$: capture
photon falls into the BH. no escape.

## the deflection formula

at large impact parameter ($b \gg GM$), the deflection angle is:
$$\Delta\phi \approx \frac{4GM}{b}$$

doubled compared to the Newtonian "photon-as-particle" calculation, which gives $2GM/b$. this **factor of 2** is a famous tension: Einstein's first 1911 paper (using only $g_{tt}$) got the Newtonian result; the full 1915 GR calculation got the doubled answer; Eddington's 1919 measurement confirmed the GR value.

physical reason: GR's deflection has equal contributions from $g_{tt}$ (gravitational time dilation) and $g_{rr}$ (spatial curvature). Newtonian gravity has only the former.

## numerical examples

at the solar limb ($b = R_\odot \approx 7\times 10^5$ km):
$$\Delta\phi = \frac{4 \cdot 1.5\,\text{km}}{7\times 10^5\,\text{km}} \approx 8.5\times 10^{-6}\,\text{rad} \approx 1.75''$$

at the Sgr A$^\star$ photon sphere ($b \sim 5\sqrt{3}\,GM$):
$$\Delta\phi \approx 2\pi/(\sqrt{3}/3) \approx 3.6\pi$$

so a photon orbits $\sim 2$ times before escaping. this produces the **bright ring** in EHT images.

## see also

- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.md)
- [Schwarzschild effective potential](../../02_Zettel/Theory/Schwarzschild effective potential.md)
- [Photon sphere](../../02_Zettel/Theory/Photon sphere.md)
- [Light deflection](../../02_Zettel/Theory/Light deflection.md)
- [Effective potential approach](../../02_Zettel/Theory/Effective potential approach.md)
- Q14 - photon trajectory and impact parameter
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 6 - Black Holes](../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.md)
