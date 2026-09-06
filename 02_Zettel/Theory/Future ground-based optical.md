---
layout: default
title: "Future ground-based optical"
---

# Future ground-based optical interferometers

planned and proposed instruments that push optical/IR interferometry to higher resolution, longer baselines, and broader science.

## the planned instruments

### CHARA/MIRC-X / MYSTIC upgrades

continuous improvements to CHARA's existing instruments:
- **MIRC-X enhanced** (2024+): better fringe-tracking, higher SNR
- **MYSTIC K-band imaging**: complementary to MIRC-X H-band
- **CHARA AO** (in progress): adaptive optics at each 1m telescope

these extend CHARA's reach to fainter targets and improve image fidelity.

### VLTI / GRAVITY+

major upgrade to VLTI's GRAVITY instrument (2024-2026):
- **laser guide stars** at all 4 UTs → fainter targets accessible
- **wider isoplanatic angle** with multi-conjugate AO → more guide-star options
- **astrometric precision** improved to ~10 μas
- enables AGN BLR studies of fainter AGN, more S-cluster monitoring

### MATISSE upgrades

VLTI's mid-IR instrument:
- improved detectors (more sensitive, less noise)
- higher spectral resolution modes
- combined operation with GRAVITY

### LBTI continuing operations

ongoing operations of LBT's interferometric mode:
- HOSTS exo-zodi survey continues
- new instrument concepts being prototyped

## the larger ambitions

![39-meter European Extremely Large Telescope (ELT), pushing ground-based optical resolution with advanced adaptive optics.](Future_ground-based_optical.jpg)


### proposed Carlina hypertelescope

Antoine Labeyrie's hypertelescope concept (see [Hypertelescope](../../02_Zettel/Theory/interf/Hypertelescope.html)). a sparse array on a parabolic surface with cable-suspended focus. proposed since the 1990s, prototype tested at Caussols. full-scale never built.

still pursued conceptually for sub-mas direct imaging at AU scales (resolved exo-Earths around nearby stars).

### OVLA (Optical Very Large Array)

an array of 50+ small telescopes spread over $\sim 1$ km, with pupil densification at the focus. concept for direct-imaging-class sparse-aperture interferometry. ground-based, long-term.

never funded. mostly conceptual now.

### OHANA (Optical Hawaiian Array of Nanoradian Astronomy)

connect the Mauna Kea telescopes (Keck, Subaru, CFHT, Gemini, IRTF) with single-mode fibers as a coherent interferometer. baselines $\sim$ 800 m, all sharing the same atmospheric column.

prototype tested between Keck telescopes. larger version proposed but not funded.

## the ELT-class single telescopes

while not interferometers, the upcoming Extremely Large Telescopes (ELT, GMT, TMT) push the "single-aperture diffraction-limited" frontier:
- **ESO ELT** (39m): first-light 2028
- **GMT** (25m): first-light 2030s
- **TMT** (30m): planned but contested site

with extreme AO, they reach $\theta = \lambda/D \sim 13$ mas at K. comparable to medium-baseline VLTI but with much larger collecting area.

## the synergy with single-aperture

modern observers increasingly *combine* interferometric and ELT observations:
- VLTI + ELT for resolved AGN structures (different scales)
- CHARA + ELT for stellar surface imaging at multiple wavelengths
- nulling + coronagraphy for high-contrast imaging

this synergy is the future of high-angular-resolution astronomy.

## the limits and challenges

three challenges for ground-based interferometry:

### 1. atmospheric phase

even with AO, the atmosphere limits effective baselines to $\sim r_0 \cdot$ (factor of AO improvement). beyond a few hundred meters, ground-based interferometry struggles.

### 2. infrastructure

long baselines need long beam tunnels (vacuum or controlled atmosphere). beyond $\sim 1$ km, the engineering becomes prohibitive.

### 3. sensitivity

every additional mirror/fiber in the optical chain costs photons. modern instruments are at $\sim 5-10\%$ end-to-end throughput. faint targets are challenging.

these motivate space-based alternatives.

## see also

- [VLTI Very Large Telescope Interferometer](../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.html)
- [CHARA array](../../02_Zettel/Theory/interf/CHARA array.html)
- [Hypertelescope](../../02_Zettel/Theory/interf/Hypertelescope.html)
- [Future space-based](../../02_Zettel/Theory/interf/Future space-based.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
