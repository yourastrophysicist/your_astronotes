---
layout: default
title: "Superposition and interference"
type: zettel
created: 2026-08-04
moc:
  - Astronomical_Interferometry_MOC
tags:
  - zettel
  - theory
  - interferometry
---
> *when two coherent waves overlap, their amplitudes add directly, producing a stable pattern of bright and dark fringes that encodes structural information*

---

## core physical intuition

Waves do not bounce off each other like solid objects do; they pass right through one another. The principle of superposition states that the net disturbance at any point in space and time is simply the algebraic sum of the individual wave disturbances. 

![Same double-slit assembly (0.7 mm between slits); in top image, one slit is closed. In the single-slit image, a diffraction pattern (the faint spots on either side of the main band) forms due to the nonzero width of the slit. This diffraction pattern is also seen in the double-slit image, but with many smaller interference fringes.](Pasted%20image%2020260806210503.png) 

When dealing with light, our detectors (like CCDs or the human eye) only measure intensity, which is proportional to the square of the amplitude. If two waves are coherent (they maintain a fixed phase relationship over time), their superposition creates an interference pattern. Instead of a uniform blur of light, you get localized regions where the wave crests align perfectly (constructive interference, bright fringes) and regions where a crest meets a trough (destructive interference, dark fringes). This mapping of phase delays into measurable intensity variations is the entire basis of interferometry.
     x 
---

## key derivation & equations

For two coherent waves with electric fields $E_1$ and $E_2$, the total field is $E_{tot} = E_1 + E_2$. The total intensity $I$ is proportional to the time-averaged square of the field:

$$ I = \langle |E_1 + E_2|^2 \rangle $$

Expanding this yields the fundamental two-wave interference equation:

$$ I = I_1 + I_2 + 2\sqrt{I_1 I_2} \cos(\delta) $$

where:
- $I_1$ and $I_2$ are the intensities of the individual waves
- $\delta$ is the phase difference between the two waves at the point of detection

For Young's double slit setup with slit separation $d$ and observing wavelength $\lambda$, the angular spacing between adjacent bright fringes is:

$$ \Delta\theta = \frac{\lambda}{d} $$

---

## astrophysical context

Young's double slit experiment is literally the prototype for a stellar interferometer. In astronomical interferometry, the "slits" are individual telescope apertures separated by a baseline $d$. By measuring the properties of the resulting interference fringes (specifically their contrast or visibility), we can deduce the angular size and structure of the celestial source, achieving resolutions far beyond what a single telescope could provide.

![VLBI](Pasted%20image%2020260806211247.png)

---

## connections & zettel links

* parent moc: [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
* related zettels: [Young experiment as a stellar interferometer](../../02_Zettel/Theory/interf/Young experiment as a stellar interferometer.md), [Fringe visibility and contrast](../../02_Zettel/Theory/interf/Fringe visibility and contrast.md), [Optical path difference OPD](../../02_Zettel/Theory/interf/Optical path difference OPD.md)
