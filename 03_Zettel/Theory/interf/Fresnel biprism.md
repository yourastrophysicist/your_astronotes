---
layout: "default"
title: "Fresnel biprism"
---
{% raw %}
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
- broadband source: fringes within the central few orders, washing out at large $\lvert m\rvert$
- extended source: visibility decreases as the source angular size grows

## see also

- [Wavefront-division interferometers](./Wavefront-division%20interferometers.html)
- [Fresnel double mirror](./Fresnel%20double%20mirror.html)
- [Lloyd mirror](./Lloyd%20mirror.html)
- [Young experiment as a stellar interferometer](./Young%20experiment%20as%20a%20stellar%20interferometer.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Fresnel%20double%20mirror.html" class="backlink-item">Fresnel double mirror</a></li>
    <li class="backlink-item-wrap"><a href="../Fresnel%20double%20mirror.html" class="backlink-item">Fresnel double mirror</a></li>
    <li class="backlink-item-wrap"><a href="../Lloyd%20mirror.html" class="backlink-item">Lloyd mirror</a></li>
    <li class="backlink-item-wrap"><a href="./Lloyd%20mirror.html" class="backlink-item">Lloyd mirror</a></li>
    <li class="backlink-item-wrap"><a href="./Wavefront-division%20interferometers.html" class="backlink-item">Wavefront-division interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../Wavefront-division%20interferometers.html" class="backlink-item">Wavefront-division interferometers</a></li>
  </ul>
</div>
