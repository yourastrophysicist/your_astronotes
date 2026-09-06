---
layout: default
title: "Fresnel biprism"
---

# Fresnel biprism

Fresnel's elegant single-element interferometer. a glass prism with a very small apex angle (close to 180°) refracts light from a single source into two slightly-deflected beams that *appear* to come from two distinct virtual sources. those virtual sources interfere at the screen, producing Young-like fringes.

simpler to align than the Fresnel double mirror: just one optical element.

## the geometry

a thin glass biprism has two refracting surfaces meeting at an apex angle slightly less than 180° (i.e. the prism has two halves with very small apex angles $\beta$ each).

a point source $S$ is placed on the axis behind the biprism. light passing through the upper half is refracted slightly downward; light through the lower half is refracted slightly upward.

each half acts like a separate prism, deflecting light by angle $\delta = (n-1)\beta$ where $n$ is the prism's refractive index. so each half produces a virtual image of $S$ shifted by $\Delta = a \delta$ where $a$ is the source-to-prism distance.

the two virtual sources $S_1', S_2'$ are separated by

$$d = 2 a (n-1) \beta$$

producing fringes at the screen with spacing

$$\Delta y = \frac{\lambda L}{d} = \frac{\lambda L}{2 a (n-1) \beta}$$

## the practical advantages

over the double mirror:
- single optical element to align
- automatic stability (no two mirrors to keep at fixed angle)
- compact

over Young's slits:
- no slits → minimal diffraction
- all of the source's light contributes (no slit-aperture loss)

## the historical significance

invented by Fresnel around 1819. demonstrated:
- two-source interference without slits
- a clean test of the wave theory of light
- the equivalence of various interferometric geometries

modern lecture demos sometimes use the biprism for its visual elegance, though Young's slits remain the textbook standard.

## the visibility

same as Young's experiment:
- monochromatic source: full contrast
- broadband source: fringes within the central few orders, washing out at large $|m|$
- extended source: visibility decreases as the source angular size grows

## see also

- [Wavefront-division interferometers](../../../02_Zettel/Theory/interf/Wavefront-division interferometers.md)
- [Fresnel double mirror](../../../02_Zettel/Theory/interf/Fresnel double mirror.md)
- [Lloyd mirror](../../../02_Zettel/Theory/interf/Lloyd mirror.md)
- [Young experiment as a stellar interferometer](../../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
