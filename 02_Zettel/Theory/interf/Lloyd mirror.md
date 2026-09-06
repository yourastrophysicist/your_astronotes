---
layout: default
title: "Lloyd mirror"
---

# Lloyd's mirror

the simplest of all classical interferometers. **a single mirror** at grazing incidence, with a point source nearby. the source and its mirror image act as two coherent virtual sources, producing Young-like fringes.

distinctive feature: a **$\pi$ phase shift** introduced by reflection at the mirror reverses the bright/dark fringes compared to the geometric expectation. *the* classical demonstration of the half-wavelength phase change at reflection.

discovered by Humphrey Lloyd around 1834.

## the geometry

a point source $S$ sits a small distance $h$ above a flat mirror. light goes:
- directly from $S$ to a point $P$ on the screen → path 1
- reflects off the mirror, then to $P$ → path 2

path 2 is *equivalent* to a direct path from a virtual source $S'$ which is the mirror image of $S$ (i.e. at distance $h$ *below* the mirror plane). so the system has two effective sources $S, S'$ separated by $2h$.

at the screen, the fringe pattern is identical to Young's two-slit setup with separation $d = 2h$.

## the $\pi$ phase shift twist

reflection at a denser medium (the mirror) introduces a *half-wavelength* path difference, equivalent to a $\pi$ phase shift on the reflected wave.

so when the geometric OPD is zero ($\Lambda = 0$, at the mirror's plane), the *total* phase difference between the two interfering waves is $\pi$, not 0. this means **destructive interference** (a dark fringe) where you'd naively expect a bright fringe.

at the mirror's plane: dark fringe.
at $\Lambda = \lambda/2$: bright fringe.
at $\Lambda = \lambda$: dark fringe.

so all fringes are *swapped* compared to Young's slits. this is the unique experimental signature of Lloyd's mirror.

## why the $\pi$ phase shift?

at a reflection from a higher-refractive-index medium, the reflected wave's phase flips. this is a consequence of:
- continuity of $\mathbf{E}$ at the boundary (Maxwell)
- the boundary condition that the *transmitted* wave's amplitude be continuous
- result: the reflected wave's $\mathbf{E}$ is opposite to the incident at the surface — a $\pi$ phase shift

this is the same physics that gives the dark central spot in Newton's rings and the dark fringe at the edge of a soap-bubble interference pattern.

## the practical setup

Lloyd's mirror is *very* sensitive to:
- mirror flatness (any waviness produces irregular fringes)
- alignment (the source must be very close to the mirror plane)
- source size (must be effectively pinhole, since fringes are fine)

its main use today is as a *teaching demonstration* of the $\pi$ reflection phase. it's not commonly used as a quantitative tool because Young's slits or Fresnel biprism are more controlled.

## the modern version: dipole-mirror interferometers

Lloyd's mirror has a modern descendant: in atomic physics, a "dipole mirror" reflects a beam of atoms. when atoms are reflected, they pick up a phase that can be measured via interference with a direct beam. essentially Lloyd's mirror for matter waves.

## the comparison with Young

| feature | Young | Lloyd |
|---|---|---|
| sources | two slits | source + mirror image |
| separation | physical $d$ | $2h$ |
| reflection? | no | yes, with $\pi$ phase shift |
| central fringe | bright | dark |
| visibility | high | high |
| ease of setup | easy | harder (alignment) |
| demonstration of phase shift | no | yes |

## see also

- [Wavefront-division interferometers](../../../02_Zettel/Theory/interf/Wavefront-division interferometers.md)
- [Young experiment as a stellar interferometer](../../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.md)
- [Fresnel double mirror](../../../02_Zettel/Theory/interf/Fresnel double mirror.md)
- [Fresnel biprism](../../../02_Zettel/Theory/interf/Fresnel biprism.md)
- [Newton's rings](../../../02_Zettel/Theory/interf/Newton's rings.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
