---
layout: default
title: "Plane waves and Huygens principle"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> *every point on a wavefront acts as a secondary source, allowing us to build up complex wave propagation from simple spherical wavelets*

---

## core physical intuition

When light travels through space, we can imagine the wavefront (the surface of constant phase) as a collection of tiny, secondary sources. According to Huygens' principle, each of these points emits its own spherical wavelet. The new wavefront at any later time is simply the envelope of all these overlapping secondary wavelets.
<img src="{{ "/assets/images/Plane_Wave_3D_Animation_300x216_255Colors%201.gif" | relative_url }}" alt="Animation of a 3D plane wave. Each color represents a different phase of the wave." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

This simple geometric idea perfectly explains why light doesn't just travel in straight rays but bends around obstacles (diffraction). In the context of a plane wave, all the points on a flat wavefront emit wavelets that constructively interfere in the forward direction to maintain the flat shape. When a plane wave hits a telescope array, Huygens' principle guarantees that each separated aperture is sampling a localized portion of that same, continuous wavefront.

<img src="{{ "/assets/images/Lens_and_wavefronts.gif" | relative_url }}" alt="Wavefronts change shape after going through a lens " class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" /> 


---

## key derivation & equations

A plane wave propagating in a uniform medium is described by the electric field equation:

$$ E(\mathbf{r}, t) = E_0 e^{i(\mathbf{k} \cdot \mathbf{r} - \omega t)} $$

where:
- $E_0$ is the amplitude
- $\mathbf{k}$ is the wave vector (pointing in the direction of propagation, with magnitude $|\mathbf{k}| = 2\pi/\lambda$)
- $\mathbf{r}$ is the position vector
- $\omega$ is the angular frequency ($\omega = 2\pi\nu$)
- $t$ is time

Huygens' construction mathematically underpins the Fresnel-Kirchhoff diffraction formula, where the field at a point $P$ is given by an integral over the aperture surface $S$:

$$ U(P) \propto \iint_S U(\mathbf{r'}) \frac{e^{ik|\mathbf{r}-\mathbf{r'}|}}{|\mathbf{r}-\mathbf{r'}|} \, dS $$

---

## astrophysical context

This principle is the bedrock of interferometry. When starlight arrives at Earth after traveling light-years, it is effectively a plane wave. Because every point on that plane wave is part of the same coherent phase front (Huygens' secondary sources), we can collect chunks of it with widely separated telescopes. By combining the light from these different apertures, we can allow the secondary wavelets to interfere, recreating the original wavefront's properties as if we had one giant telescope mirror.

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
* related zettels: [Light waves and the EM spectrum](../../02_Zettel/Theory/interf/Light waves and the EM spectrum.html), [Superposition and interference](../../02_Zettel/Theory/interf/Superposition and interference.html), [Fraunhofer diffraction](../../02_Zettel/Theory/interf/Fraunhofer diffraction.html)
