---
layout: default
title: "Radial infall"
---

the simplest geodesic in Schwarzschild: a particle dropped from rest at infinity, falling radially toward the BH. exactly solvable, gives the famous **cycloid solution**.

## the setup

equatorial radial geodesic, $L = 0$, $\dot\theta = \dot\phi = 0$. for a particle dropped from rest at infinity, $E = 1$ (rest energy at infinity in $c = 1$ units).

effective potential gives:
$$\dot r^2 = E^2 - V_{\rm eff} = 1 - \left(1 - \frac{2GM}{r}\right) = \frac{2GM}{r}$$

so:
$$\dot r = -\sqrt{2GM/r}$$
(negative for infall.)

## the proper time to fall

proper time from $r$ to $r = 0$:
$$\tau = -\int_r^0 \frac{dr'}{\sqrt{2GM/r'}} = \frac{1}{\sqrt{2GM}}\int_0^r r'^{1/2}\,dr' = \frac{2}{3\sqrt{2GM}}\,r^{3/2}$$

equivalently:
$$\boxed{\, \tau(r) = \frac{r^{3/2}}{(2GM)^{1/2}}\cdot\frac{2}{3} \,}$$

at $r = 2GM$ (horizon): $\tau = \frac{2}{3} \cdot 2GM = \tfrac{4GM}{3}$ from start.
at $r = 0$ (singularity): finite proper time.

## the cycloid

substituting $r = (2GM)(1 - \cos\eta)/2 = GM(1 - \cos\eta)$:
$$\tau = (2GM/2)(\eta - \sin\eta) = GM(\eta - \sin\eta)$$

so:
$$r = GM(1 - \cos\eta), \quad \tau = GM(\eta - \sin\eta)$$

a **cycloid** in the $(\tau, r)$ plane: classical Newtonian-like solution preserved in GR for radial free fall.

## coordinate time vs proper time

the coordinate time $t$ for the same infall:
$$t = \int \frac{dt}{dr}\,dr$$

from $E = (1 - 2GM/r)\dot t = 1$, so $\dot t = (1 - 2GM/r)^{-1}$. then:
$$\frac{dt}{dr} = \frac{\dot t}{\dot r} = -\frac{1}{(1 - 2GM/r)\sqrt{2GM/r}}$$

near $r \to 2GM$, $1 - 2GM/r \to 0$, so $dt/dr \to \infty$. integrating:
$$t \to \infty\quad\text{as } r \to 2GM$$

so in coordinate time (the "infinity observer's" clock), the infall takes **infinite time** to reach the horizon. the object appears to **freeze** at the horizon, infinitely redshifted.

## the contrast: proper vs coordinate

| frame | time to horizon | what they see |
|---|---|---|
| infalling observer | finite proper time | crosses smoothly, continues to $r = 0$ |
| outside observer | infinite coordinate time | object asymptotes to horizon, freezes, redshifts to invisibility |

both descriptions are correct. the difference is the time slicing.

## the time to singularity

from the horizon to $r = 0$ in proper time:
$$\Delta\tau = GM(\pi - \eta_{\rm horizon}) - GM(\sin\pi - \sin\eta_{\rm horizon})$$

with $\cos\eta_{\rm horizon} = -1$ (i.e. $r = 2GM$), $\eta_{\rm horizon} = \pi$. so $\Delta\tau = GM\pi$ from horizon to singularity.

total time from $r = \infty$ ($\eta = 0$) to $r = 0$ ($\eta = \pi$): $\tau_{\rm tot} = GM(\pi - 0) = GM\pi$ in $c = 1$ units.

quantitative: for a Sun-mass BH ($GM \sim 5\,\mu$s in time units), $\tau_{\rm horizon-to-singularity} \approx 15\,\mu$s. a millisecond, in human terms. for a supermassive BH like Sgr A$^\star$ ($M = 4\times 10^6\,M_\odot$), $\tau \sim 20$ s.

## see also

- [Schwarzschild metric](../../02_Zettel/Theory/Schwarzschild metric.md)
- [Schwarzschild horizon](../../02_Zettel/Theory/Schwarzschild horizon.md)
- [Schwarzschild effective potential](../../02_Zettel/Theory/Schwarzschild effective potential.md)
- [Geodesic equation](../../02_Zettel/Theory/Geodesic equation.md)
- Q13 - radial infall and proper time
- [General_Relativity_MOC](../../00_Atlas/General_Relativity_MOC.md)
- [Ch 6 - Black Holes](../../01_Literature/Book/Baumann GR/Ch 6 - Black Holes.md)
