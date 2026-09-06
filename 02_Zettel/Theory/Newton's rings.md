---
layout: default
title: "Newton's rings"
---

# Newton's rings

the most famous example of [Fringes of equal thickness](../../02_Zettel/Theory/interf/Fringes of equal thickness.html): concentric circular interference fringes in the air gap between a curved lens and a flat reference. observed by Newton, predicted (correctly!) by Hooke before him, and definitively explained by Young and Fresnel in the early 1800s.

historically: the experiment that *should have* convinced Newton of the wave nature of light (it didn't; he persisted with corpuscular theory).

## the geometry

![Newton's rings: interference pattern created by the air film of variable thickness between a convex lens and a flat glass plate.](Newton_s_rings.jpeg)


place a plano-convex lens (typically with curvature radius $R$ of order meters) on top of a precision-flat reference glass. the air gap between them has thickness:

$$d(r) = \frac{r^2}{2R}$$

(parabolic, for $r \ll R$). where $r$ is the distance from the contact point.

illuminate from above with a normal-incidence monochromatic light. the partial reflection from the top of the air gap (lens-air interface) interferes with the reflection from the bottom (air-flat interface).

## the fringe pattern

the OPD at radius $r$:
$$\Lambda(r) = 2 d(r) = \frac{r^2}{R}$$

(using $\cos\theta_t \approx 1$ for near-normal incidence).

with one of the reflections being a $\pi$-phase shift (air-to-glass at the bottom interface), the *bright* fringes occur at:
$$2d(r) = (m + 1/2) \lambda \implies r_m = \sqrt{(m + 1/2) R \lambda}$$

so the bright rings have radii proportional to $\sqrt m$ — they get closer together at larger radii. the central spot at $r = 0$ is *dark* (because of the $\pi$ phase shift and zero geometric OPD).

## the wavelength-measurement trick

count the radii of the bright rings, and you can solve for $\lambda$:
$$\lambda = \frac{r_m^2}{(m + 1/2) R}$$

for $R = 2$ m and $\lambda = 500$ nm: $r_1 \sim 1.2$ mm; the radii are $\sim$ mm-scale, easily measured with a ruler.

historically: this was a primary way to measure wavelengths of light in the 19th century.

## the central dark spot

the central spot ($r = 0$) is *dark*. this surprised Newton, because he expected zero OPD to give a bright spot.

resolution: the $\pi$ phase shift on reflection at the bottom of the air gap (going from air to glass) makes the two reflected waves $\pi$ out of phase even at zero OPD. so dark.

this is one of the cleanest demonstrations of the *half-wavelength reflection rule*: when light reflects from a denser medium, it picks up a $\pi$ phase shift. (Sound waves don't do this, which is why a Newton's-rings analog using sound shows a bright central spot.)

## the historical context

- **Hooke** (1660s): observed colored rings between a lens and flat, attributed them correctly to the air gap
- **Newton** (1672): performed the experiment systematically, attributed the rings to "fits of easy reflection" — a crude wave-particle hybrid theory
- **Young** (1801): correctly explained as interference
- **Fresnel** (1819): full mathematical treatment

so Newton named them but didn't understand them. the irony is preserved in the name.

## the modern use

Newton's rings are still used as a diagnostic in optical-shop testing:
- contact a test optic with a reference flat (or vice versa)
- count the rings to gauge surface quality
- a "good" lens has 0-2 rings of departure from the reference

the modern descendant is **phase-shifting Fizeau interferometry** — much more sensitive, but the basic geometry is the same.

## the soap-bubble color analog

a soap bubble's iridescent colors are Newton's rings in *white light*: at each thickness, the wavelength corresponding to constructive interference is *visible*. as the bubble drains and gets thinner, the visible color changes from red to blue. then it goes black just before bursting, when $d \ll \lambda$.

## see also

- [Fringes of equal thickness](../../02_Zettel/Theory/interf/Fringes of equal thickness.html)
- [Fringes of equal inclination](../../02_Zettel/Theory/interf/Fringes of equal inclination.html)
- [Optical path difference OPD](../../02_Zettel/Theory/interf/Optical path difference OPD.html)
- [Amplitude-division interferometers](../../02_Zettel/Theory/Amplitude-division interferometers.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
