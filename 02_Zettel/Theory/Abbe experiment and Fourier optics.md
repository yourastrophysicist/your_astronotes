---
layout: default
title: "Abbe experiment and Fourier optics"
---

# Abbe experiment and Fourier optics

BookAI includes the Abbe experiment because it shows, before interferometry, that images are made from spatial frequencies.

## the basic idea

Abbe showed that a lens forms an image by collecting diffracted spatial-frequency components from an object. if high spatial frequencies are removed, fine detail disappears.

this is the conceptual ancestor of aperture synthesis.

## periodic object

write a periodic object transmission as a Fourier series:

$$O(x)=\sum_n a_ne^{2\pi i n x/p}$$

where $p$ is the period. the object diffracts light into orders corresponding to these Fourier components.

## lens as Fourier transformer

in the focal plane of a thin lens, the field is proportional to the Fourier transform of the object field:

$$U_f(f_x,f_y)\propto\mathcal F\{U_0(x,y)\}$$

so the focal plane is a spatial-frequency plane.

## image reconstruction

the final image is formed by recombining the spatial frequencies that passed through the aperture. block high frequencies, lose sharp detail. keep more frequencies, recover more structure.

## cutoff spatial frequency

finite aperture limits the highest spatial frequency:

$$f_c\sim\frac{\mathrm{NA}}{\lambda}$$

rough resolution scale:

$$\delta x\sim\frac{\lambda}{2\mathrm{NA}}$$

## OTF and MTF

point spread function (PSF) describes the image of a point. optical transfer function:

$$\mathrm{OTF}=\mathcal F\{\mathrm{PSF}\}$$

modulation transfer function:

$$\mathrm{MTF}=|\mathrm{OTF}|$$

OTF tells which spatial frequencies are transmitted. MTF tells how much contrast survives at each spatial frequency.

## connection to interferometry

single telescope:

- aperture transmits a continuous range of spatial frequencies up to a cutoff
- image is formed directly by the lens/mirror

interferometer:

- separated apertures sample selected spatial frequencies
- image must be reconstructed from visibility samples

## exam sentence

Abbe's experiment shows that image detail is spatial-frequency content. interferometry uses the same Fourier optics idea, but samples spatial frequencies with baselines instead of a filled aperture.

## scientific figure

<img src="{{ "/assets/images/abbe_fourier_optics_orders.svg" | relative_url }}" alt="abbe_fourier_optics_orders" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: this is the optical cousin of aperture synthesis. the object is decomposed into spatial-frequency orders; the lens/aperture decides which orders reach the image.

source: local study diagram generated from the Abbe/Fourier-optics interpretation of image formation.

## see also

- [Fraunhofer diffraction](../../02_Zettel/Theory/interf/Fraunhofer diffraction.html)
- [Optical transfer function](../../02_Zettel/Theory/interf/Optical transfer function.html)
- [Point spread function](../../02_Zettel/Theory/interf/Point spread function.html)
- [Aperture synthesis principle](../../02_Zettel/Theory/interf/Aperture synthesis principle.html)
- [The (u, v) plane](../../02_Zettel/Theory/interf/The (u, v) plane.md)
