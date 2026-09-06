---
layout: default
title: "Wavefront-division interferometers"
---

# Wavefront-division interferometers

a class of interferometers where the original wavefront is **spatially divided** — different *parts* of the same wavefront are sent along different optical paths, then recombined. all four classical examples — Young, Fresnel double mirror, Fresnel biprism, Lloyd mirror — produce two virtual coherent sources from a single primary source.

contrast with [Amplitude-division interferometers](../../../02_Zettel/Theory/Amplitude-division interferometers.md), where the same wavefront is *partially reflected and transmitted*, creating two beams of reduced amplitude that travel different paths.

## the four classical examples

### 1. Young's double slit (1801)

the original. a single source illuminates a screen with two narrow slits. each slit, by Huygens' principle, becomes a secondary source. the two slits act as **two coherent virtual sources** $S_1, S_2$ separated by distance $d$.

at a detection screen far away, the two paths $r_1, r_2$ from each slit to the observation point produce an OPD $\Lambda \approx d\sin\theta \approx d\theta$. fringes spaced $\lambda L/d$ on a screen at distance $L$.

see [Young experiment as a stellar interferometer](../../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.md).

### 2. Fresnel double mirror

two flat mirrors meeting at a small angle $\alpha \ll 1$ (typically a few minutes of arc). a point source illuminates both mirrors. the reflections produce two **virtual images** $S_1', S_2'$ of the source, separated by distance $d \approx 2 a \sin\alpha$ where $a$ is the source distance.

these virtual sources are *coherent* (because they come from the same physical source) and produce Young-like fringes on a screen.

see [Fresnel double mirror](../../../02_Zettel/Theory/interf/Fresnel double mirror.md).

### 3. Fresnel biprism

a thin glass prism with two refracting surfaces meeting at an apex angle slightly less than 180°. a point source on the axis sends light through both halves of the prism, refracted slightly differently. the result: two **virtual sources** $S_1', S_2'$ separated by a small distance.

simpler than the double mirror to align (no critical alignment of two separate elements). produces Young-like fringes.

see [Fresnel biprism](../../../02_Zettel/Theory/interf/Fresnel biprism.md).

### 4. Lloyd's mirror

the simplest of all. a single grazing-incidence mirror near a point source. light reflected off the mirror appears to come from a **mirror-image virtual source** below the mirror's plane. the original source and its mirror image act as two coherent sources.

unique feature: the reflection introduces a $\pi$ phase shift (because reflection at a denser medium flips the phase). this means the *bright* and *dark* fringes are **swapped** compared to the geometric expectation. at zero OPD (the mirror's plane), there is a *dark* fringe rather than a bright one — a classic indicator of phase reflection.

see [Lloyd mirror](../../../02_Zettel/Theory/interf/Lloyd mirror.md).

## what they all have in common

three features unify all four:

### 1. one source, two virtual sources

each device takes a single physical source and creates two coherent secondary sources $S_1, S_2$. these are *images* (real or virtual) of the original.

### 2. coherence guaranteed

because both secondary sources come from the *same* original light, they are automatically coherent — same wave, same phase relationship. *temporal* coherence depends on the source bandwidth, but *spatial* coherence between the two virtual sources is absolute.

### 3. fringes are hyperboloids

the locus of constant OPD between $S_1$ and $S_2$ is a hyperboloid of revolution with foci at $S_1$ and $S_2$. on a viewing screen, this intersects to give the characteristic fringe geometry.

## what they're good for

historically: demonstrating wave optics, measuring wavelength, demonstrating coherence concepts.

modern: still pedagogically central. *Young's experiment* is the conceptual model for every astronomical interferometer (each telescope is a "slit"). modern variants:
- aperture-masking interferometry: a mask over a single telescope's primary creates many "slits"
- the lateral-shearing interferometer for wavefront analysis
- two-aperture stellar interferometers (Michelson 1920, GI2T) follow the same Young pattern

## the link to astronomy

a Young's-style interferometer with $d \to B$ (baseline of an array) and incoming starlight gives the simplest stellar interferometer:
- two telescopes act like the two slits
- light arrives as a (nearly) plane wave from a distant source
- combining the two beams produces fringes whose visibility encodes the source structure

this is the deep connection: **astronomical interferometry is wavefront-division writ large**, with multi-meter to multi-kilometer "slits."

## comparison with amplitude division

| feature | wavefront-division | amplitude-division |
|---|---|---|
| how light is split | spatially | partial reflection |
| number of virtual sources | 2 | 2+ (depending on number of reflections) |
| photon efficiency | uses all the light from the chosen patches | each split costs ≥ 50% in single-pass |
| coherence requirements | source must be small enough | bandwidth limits OPD range |
| classical examples | Young, Fresnel, Lloyd | Michelson, Mach-Zehnder, Fabry-Perot |
| astronomical use | stellar interferometry (CHARA, VLTI) | rare in astronomy |

amplitude division is dominant in lab metrology and quantum optics. wavefront division is dominant in astronomy.

## see also

- [Amplitude-division interferometers](../../../02_Zettel/Theory/Amplitude-division interferometers.md)
- [Young experiment as a stellar interferometer](../../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.md)
- [Fresnel double mirror](../../../02_Zettel/Theory/interf/Fresnel double mirror.md)
- [Fresnel biprism](../../../02_Zettel/Theory/interf/Fresnel biprism.md)
- [Lloyd mirror](../../../02_Zettel/Theory/interf/Lloyd mirror.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
