---
layout: default
title: "Coronagraphy"
---

# Coronagraphy

a complement to nulling interferometry. instead of using *destructive interference* to suppress the central source, **block** the starlight before it reaches the detector with a physical mask. invented by Bernard Lyot (1939) for solar eclipse imaging.

## the principle

place a small opaque mask at the focal plane, exactly where the bright star's image lies. the mask absorbs (or scatters away) the on-axis light. off-axis light (from companions or extended emission) bypasses the mask and reaches the detector.

then: a second optical stop ("Lyot stop") removes residual scattered light that has been redirected by the diffraction at the mask edges.

result: the central star is *suppressed*, while the surrounding area is preserved.

## the math

![Lyot coronagraph layout: focal plane occulting mask and Lyot pupil stop suppressing central starlight diffraction wings.](Coronagraphy.jpg)


unlike nulling, coronagraphy is *non-interferometric* — it suppresses light by absorption, not interference. but the effect is similar: high contrast in a small region.

simple Lyot coronagraph contrast: $\sim 10^3$-$10^4$. modern coronagraphs (apodized, vortex, four-quadrant): $10^7$-$10^9$.

## the standard coronagraph designs

### Lyot

an opaque mask at the focal plane + an undersized pupil stop (Lyot stop). the original design. simple, broadband, $10^3$-$10^4$ contrast.

### apodized Lyot

the focal-plane mask is *apodized* — a smooth transition from opaque to transparent. reduces diffraction at the mask edge. contrast up to $10^6$.

### phase-mask coronagraph (Roddier-Roddier)

the mask is *transparent* but introduces a $\pi$ phase shift over the central region. the resulting destructive interference at the detector suppresses on-axis light. doesn't lose photons, but bandwidth-limited.

### four-quadrant phase mask (Rouan)

four-quadrant mask with alternating $\pi$ phase shifts in adjacent quadrants. produces a "vortex" of destructive interference. contrast $10^7$ at narrow band.

### vortex coronagraph (Mawet)

a *helically-phased* mask (winding $2\pi N$ around the optical axis for charge $N$). produces complete destructive interference for on-axis light. $10^7$-$10^8$ contrast, broadband.

## the inner working angle

a coronagraph cannot fully resolve features close to the star. the **inner working angle (IWA)** is the smallest angular separation at which a companion can be detected. typical:
- Lyot: $\sim 5$-$10\, \lambda/D$
- apodized: $\sim 3$-$5 \, \lambda/D$
- vortex: $\sim 1$-$2 \, \lambda/D$

so a coronagraph can image companions at $\sim 100$ mas around an 8m telescope at K-band, but not features within $\sim 30$ mas.

## the typical instruments

### Hubble's NICMOS

optical-IR coronagraph on HST. $10^4$-$10^5$ contrast. used for exoplanet searches around nearby stars.

### SPHERE on VLT

extreme-AO (XAO) + coronagraph (IRDIS) + integral-field spectrograph (IFS). designed for direct exoplanet imaging. $10^6$-$10^7$ contrast at K-band.

### GPI on Gemini

similar to SPHERE in design. extreme AO + apodized Lyot coronagraph.

### MagAO-X on Magellan

current state-of-the-art XAO + coronagraph. $10^8$-$10^9$ contrast at L-band.

### Roman Coronagraph

space-based coronagraph on the upcoming Nancy Grace Roman Space Telescope (2027 launch). $10^9$ contrast for direct exoplanet imaging.

### HabEx and LUVOIR concepts

future space missions designed for $10^{10}$ contrast (Earth-twin imaging). still in concept phase.

## the engineering challenges

three challenges:

### 1. wavefront control

the AO system in front of the coronagraph must produce a near-perfect wavefront. residual aberrations leak around the mask, contaminating the science region.

extreme AO (Strehl > 0.9) is essential for high-contrast coronagraphy.

### 2. polarization

the mask response depends weakly on polarization. for $10^{10}$ contrast, polarization control is needed.

### 3. mask quality

the mask itself must be near-perfect — sharp edges, exact dimensions. modern micromachined masks reach $10^{10}$ relative precision.

## the synergy with interferometry

coronagraphy and interferometry are complementary:

| feature | coronagraph | nuller |
|---|---|---|
| operating principle | block light at focal plane | destructive interference |
| typical contrast | $10^7$-$10^9$ | $10^4$-$10^7$ |
| inner working angle | $\sim 1$-$5 \lambda/D$ | $\sim \lambda/(2B)$ |
| best wavelength | visible-NIR | mid-IR |
| primary use | direct exoplanet imaging | exo-zodi, planet detection |
| infrastructure | single telescope | multi-telescope array |

modern instruments (SPHERE, MagAO-X) often combine both: a coronagraph at the focus, with the interferometric nulling also possible on additional telescope pairs.

## see also

- [Nulling interferometry](../../02_Zettel/Theory/interf/Nulling interferometry.html)
- [Bracewell nuller](../../02_Zettel/Theory/interf/Bracewell nuller.html)
- [Apodization](../../02_Zettel/Theory/interf/Apodization.html)
- [Adaptive optics](../../02_Zettel/Theory/interf/Adaptive optics.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
