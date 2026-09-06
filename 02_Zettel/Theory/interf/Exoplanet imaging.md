---
layout: default
title: "Exoplanet imaging"
---

# Exoplanet imaging

direct interferometric / coronagraphic detection of light from exoplanets. extremely difficult because of the contrast (~$10^{-6}$ to $10^{-10}$ between planet and star) and small angular separation (~mas). a small but rapidly growing field with significant interferometric contributions.

## the challenge

a typical exoplanet:
- contrast: $10^{-9}$ for a Jupiter at L-band, $10^{-10}$ for an Earth-twin
- separation: 1-100 mas for nearby systems
- both sub-Airy-diameter for typical telescopes

only specialized high-contrast techniques can image planets directly.

## the observation modes

three approaches:

### 1. coronagraphic imaging

block the star with a coronagraph, look for off-axis light. dominant for nearby, bright stars.

instruments: SPHERE, GPI, MagAO-X, JWST/NIRCam coronagraph.

### 2. nulling interferometry

destructive interference suppresses on-axis starlight. better contrast for warm dust + planets at $\sim$ 1 AU.

instruments: LBTI, KIN (decommissioned).

### 3. interferometric direct astrometry

GRAVITY-style precise position measurements of stellar companions. detects planets at 0.1-100 AU around nearby stars.

instruments: VLTI/GRAVITY+.

## the major detections

### beta Pic b (LBTI 2014)

the giant planet around beta Pictoris was directly imaged at L-band by LBTI. orbital characterization at sub-mas precision.

### HR 8799 system

four directly-imaged planets in a multi-planet system (~70 light-years). studied by SPHERE, GPI, and KECK at multiple wavelengths.

### Proxima Centauri b

a 1.3 Earth-mass planet at the habitable zone of the closest star to the Sun. detected via radial velocity; not yet directly imaged. proxima b is the prime target for future direct-imaging missions.

### TRAPPIST-1 system

seven Earth-sized planets around an M dwarf at 12 pc. characterized via transit photometry; *some* of the planets have been directly imaged in their reflected light (inner planets, moderate contrast). atmospheric spectroscopy with JWST.

## the contrast targets

| target | typical contrast | typical separation | technique |
|---|---|---|---|
| hot Jupiter (10⁸ year) | $10^{-7}$ | 100 mas | LBTI nulling |
| cold Jupiter | $10^{-9}$ | 100-1000 mas | SPHERE coronagraph |
| Earth-twin | $10^{-10}$ | 50-100 mas | future space mission |
| brown dwarf | $10^{-5}$ | 100-1000 mas | NACO, GPI |

## the future

planned and proposed:

### Roman Space Telescope (2027)

space-based coronagraph capable of $10^{-9}$ contrast. designed to image cool Jupiters around nearby F/G/K stars.

### Habex / LUVOIR concepts

future flagship missions with $10^{-10}$ contrast goals — Earth-twin imaging.

### LIFE (Large Interferometer For Exoplanets)

space-based formation-flying nuller (4 telescopes) for mid-IR characterization of exo-Earths. proposed for ~2040.

### Extremely Large Telescopes (ELT, GMT, TMT)

ground-based 30-40m telescopes with extreme AO + coronagraphs. could image cool Jupiters at $10^{-8}$ from the ground.

## the spectroscopy challenge

direct imaging gives the *position* and *flux* of a planet. for atmospheric characterization, we need *spectra*. integral-field spectrographs (SPHERE-IFS, GPI) and JWST/NIRSpec produce planet spectra at moderate resolution.

interferometric instruments (VLTI/GRAVITY) have shown they can measure exoplanet *spectra* at much higher sensitivity than coronagraphs alone. the future is combined imaging + spectroscopy.

## the broader science

exoplanet imaging has produced (selectively):
- **first direct images** of giant planets (beta Pic b, HR 8799, etc.)
- **atmospheric absorption** features in exoplanet spectra (water, methane, CO2)
- **orbital architecture** of multi-planet systems (HR 8799)
- **tracking of mass-loss** from young giants

these complement transit observations (which give bulk planet density) and radial velocity (which gives masses) for a complete picture.

## see also

- [Coronagraphy](../../../02_Zettel/Theory/interf/Coronagraphy.md)
- [Nulling interferometry](../../../02_Zettel/Theory/interf/Nulling interferometry.md)
- [VLTI Very Large Telescope Interferometer](../../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
