---
layout: default
title: "Nulling interferometry"
---

# Nulling interferometry

a technique for *suppressing* the bright on-axis source while preserving off-axis emission. used for direct exoplanet detection, exo-zodiacal dust imaging, and high-contrast imaging around nearby stars. invented conceptually by Bracewell (1978).

## the principle

an ordinary interferometer combines beams *constructively* on-axis: the path lengths are matched, fringes appear at the source, and a bright source produces a bright signal.

a **nuller** introduces a $\pi$ phase shift in one arm, so the on-axis beams combine *destructively*. the on-axis source is suppressed by orders of magnitude. but at off-axis positions where the path differences differ from $\pi$, light is *not* fully canceled — emission survives.

result: the bright central source is "nulled out" while faint surrounding features (companions, dust) are preserved.

## the math

<img src="{{ "/assets/images/Nulling_interferometry.jpg" | relative_url }}" alt="Nulling interferometry: introducing a \pi phase shift to destructively cancel bright central starlight while resolving faint companions." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


for a two-aperture nuller at baseline $B$, the response to an off-axis source at angle $\theta$ has transmission:

$$T(\theta) = \sin^2(\pi B \theta/\lambda)$$

at $\theta = 0$ (on-axis): $T = 0$. perfect null.
at $\theta = \lambda/(2B)$: $T = 1$. full transmission.
at intermediate angles: transmission varies smoothly.

so the nuller has a *transmission map* on the sky that suppresses the central region while preserving outer regions.

## the typical contrast

a *perfect* nuller would suppress the on-axis source by infinity. real nullers are limited by:
- imperfect path-length matching (residual phase mismatch ~ μm out of mm)
- imperfect amplitude matching between arms
- spectral bandwidth (fringes wash out at large path differences)
- atmospheric phase fluctuations

practical contrast: $10^4$-$10^5$ is achievable. for finding planets at $10^{-9}$ contrast, this is far from enough — but it's a powerful first step that other techniques (coronagraphy) can build on.

## the typical instrument

three components:

### 1. precision delay control

path lengths must match to within $\lambda/100$ (about $10$ nm at K-band). the delay-line piezo provides this fine control, fed by a fringe-tracking sensor.

### 2. amplitude balancing

the two arms must transmit equal amplitudes. an imbalance reduces the null depth. real systems use amplitude modulators.

### 3. broadband nulling

the $\pi$ phase shift must be achromatic — uniform across the bandwidth. simple beam-splitter nullers work only at narrow bandwidth. **achromatic nullers** use either:
- chromatic phase modulators (work across a wide band)
- pupil rotation (Bracewell's original design)
- four-quadrant phase plates

## the major instruments

### Keck Interferometer Nulling (KIN)

operated 2002-2012. nulling at L-band (3.5 μm), $10^4$ contrast. used for:
- exo-zodiacal dust imaging (LBT used this technique)
- searching for planet/companion candidates

### LBTI Nulling (NOMIC, LMIRcam)

current. uses LBT's twin 8m mirrors for nulling at N-band (8-13 μm). $10^4$ contrast. applied to:
- HOSTS exo-zodi survey: searches for warm dust around nearby stars (predictor of habitable-zone conditions)
- imaging Kepler-like systems

### Darwin and Terrestrial Planet Finder (TPF)

space-based proposed missions (2000s) for nulling interferometry. not realized due to budget cuts. but the concepts informed:
- formation-flying nuller designs
- multi-aperture nullers (4-element Bracewell)

## the Bracewell concept

Bracewell's (1978) idea: a *space-based* two-element nuller could detect Earth-mass planets around nearby stars. on-axis null suppresses the star ~$10^9$ contrast; off-axis transmission peaks at planet-orbit positions.

modern realization: **TPF/Darwin proposals** of the 2000s. would have used $\sim 50$m baselines, $\sim 10^7$ contrast, dedicated mission to image Earth-like exoplanets.

never realized, but the idea continues to inspire new mission concepts (LIFE consortium in Europe, HabEx in the US).

## the future

nulling interferometry is poised for:
- **JWST + ELT** combinations: ground-based nullers integrated with space telescopes
- **LIFE concept**: a next-generation Bracewell-style space mission for exoplanet imaging
- **kernel-phase nulling**: software-based nulling using AO-corrected images

## see also

- [Bracewell nuller](../../02_Zettel/Theory/interf/Bracewell nuller.html)
- [Coronagraphy](../../02_Zettel/Theory/interf/Coronagraphy.html)
- [Apodization](../../02_Zettel/Theory/interf/Apodization.html)
- [Hypertelescope](../../02_Zettel/Theory/interf/Hypertelescope.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
