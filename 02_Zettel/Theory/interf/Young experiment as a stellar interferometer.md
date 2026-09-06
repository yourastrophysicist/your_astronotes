---
layout: default
title: "Young experiment as a stellar interferometer"
---

# Young's experiment as a stellar interferometer

the historical and conceptual bridge between optics and interferometric astronomy. Thomas Young's 1801 two-slit experiment proved light is a wave; **the same setup, applied to starlight, is the simplest possible stellar interferometer**. Hippolyte Fizeau (1868) and Albert Michelson (1920) both realized this. this is the prototype every modern instrument is descended from.

## Young's original setup

a coherent plane wave (sunlight through a pinhole, or a laser today) illuminates two narrow slits separated by $d$. behind the slits, on a screen at distance $L$:
$$\Delta y = \frac{\lambda L}{d}$$
fringe spacing.

at angles $\theta_n = n \lambda/d$, the path difference is $n\lambda$ → constructive interference. at $\theta_n = (n + 1/2)\lambda/d$, destructive interference. bright/dark stripes.

## from screen to sky

reverse the geometry. shine *starlight* on the slits. the slits are now **sub-apertures** of a larger optical system, the screen is replaced by a CCD or eyepiece, and the fringe pattern becomes the data.

the angular resolution of the system (the angular distance over which the fringe phase changes by $\pi$):
$$\theta_{\rm res} = \frac{\lambda}{2d}$$

so doubling the slit separation halves the resolved angle. for $\lambda = 500$ nm and $d = 1$ m: $\theta = 0.05''$. for $d = 100$ m: $\theta = 0.5$ mas.

## what visibility tells us

a *point source* at infinity produces fringes with visibility $V = 1$ (perfect contrast).

an *extended uniform disk* of angular diameter $\theta_d$ produces fringes with reduced visibility:
$$V(d) = \left|\frac{2 J_1(\pi \theta_d d/\lambda)}{\pi \theta_d d/\lambda}\right|$$

the fringe pattern is the *incoherent sum* of fringe patterns from each point on the disk; nearby points produce slightly shifted fringes that wash each other out.

**method**: vary the slit spacing $d$, measure $V(d)$, find the value $d_0$ at which $V$ first hits zero. then $\theta_d \approx 1.22 \lambda/d_0$.

this is **Michelson's method for stellar diameters**. it is also the engine behind every modern optical interferometer's diameter measurement.

## the Stéphan and Michelson experiments

**Édouard Stéphan** (1870s) covered the Marseille telescope's primary mirror with an opaque mask leaving only two small openings, then measured fringes from bright stars. result: *no fringes* with the (small) baselines available — implying stars are unresolved at that resolution. an upper bound on stellar angular diameters was the first scientific result of optical interferometry.

**Albert Michelson** (1920) built a beam-extension on the Mt Wilson 100-inch, with movable mirrors at separations up to 6.1 m. observing **Betelgeuse**, he measured the visibility's first null and reported the diameter:
$$\theta_{\rm Betelgeuse} \approx 0.047''$$
the first direct measurement of any stellar diameter. translates to $R \approx 600 R_\odot$ for a distance of 200 pc — a red supergiant.

## why Young's experiment is "the prototype"

every modern interferometer reduces to a generalized Young's experiment:

| Young feature | modern equivalent |
|---|---|
| two slits | two telescopes |
| slit spacing $d$ | baseline $B$ |
| screen | beam combiner + detector |
| fringe pattern | recorded interferogram |
| visibility | the complex visibility $\mathcal V$ |
| extended source → reduced V | resolved source → V depends on B |

scaling up:
- **two slits** → **two telescopes**: Michelson, COAST, IOTA
- **N slits** → **N telescopes**: VLA, ALMA, VLTI with all 4 UTs, CHARA
- **N slits with phase tracking** → **VLBI, EHT**: globally-distributed antennas

aperture synthesis is just "Young's experiment with many baselines, sampling many spatial frequencies."

## Stéphan's mask, the photo

the Labeyrie textbook reproduces a photograph of Stéphan's mask covering the Marseille telescope (figure 1.1). it is essentially two holes in a sheet of metal — the technological humility of the moment is striking. modern telescopes are vastly more sophisticated, but the *physical principle* of every interferometer goes back to that mask.

## the limit of two slits

two slits sample exactly *one* spatial frequency, $\mathbf u = \mathbf B/\lambda$. they tell you the visibility at that frequency but nothing about the others. so two-element interferometers are useful for measuring the *size* of simple sources (uniform disks, binary separations) but cannot produce images.

for images, you need many baselines covering many spatial frequencies — see [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.html) and [The (u, v) plane](../../../02_Zettel/Theory/interf/The (u, v) plane.md).

## scientific figure

<img src="{{ "/assets/images/young_double_slit_interference.svg" | relative_url }}" alt="young_double_slit_interference" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: the two slits are the baby version of two telescope apertures. the baseline replaces the slit separation, and the fringe contrast becomes the observable that tells me about angular size.

source: local study diagram generated from the standard Young/Fraunhofer geometry, $\Delta=m\lambda$ and $\Delta y\simeq \lambda L/d$.

## see also

- [Plane waves and Huygens principle](../../../02_Zettel/Theory/interf/Plane waves and Huygens principle.html)
- [Superposition and interference](../../../02_Zettel/Theory/interf/Superposition and interference.html)
- [Fringe visibility and contrast](../../../02_Zettel/Theory/interf/Fringe visibility and contrast.html)
- [Michelson stellar interferometer](../../../02_Zettel/Theory/interf/Michelson stellar interferometer.html)
- [Stellar diameters and limb darkening](../../../02_Zettel/Theory/interf/Stellar diameters and limb darkening.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
