---
layout: "default"
title: "19_CHEOPS_and_PLATO_Missions"
---
{% raw %}
# Lesson 19 – Dedicated Characterization Missions: CHEOPS and PLATO

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 22/12/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## The Transition from Discovery to High-Precision Characterization

While Kepler and TESS were designed as wide-angle discovery surveys to map exoplanetary occurrence, the field's current frontier is **high-precision bulk characterization**: determining the radius $R_p$, mass $M_p$, bulk density $\bar{\rho}_p$, and evolutionary age $\tau_\star$ of individual planets to sub-percent accuracy.

```
                      THE BULK DENSITY CHARACTERIZATION BRIDGE
   Ground RV Surveys (ESPRESSO, HARPS-N) ──┐
   [Measures Mass Mp sin i to < 5%]        │
                                           ├─> Mean Density: rho_p = 3 Mp / (4 pi R_p^3)
   Space Transit Missions (CHEOPS, PLATO)  │   ==> Unlocks Equation of State & Interior Structure!
   [Measures Radius R_p to < 1-2%]         ──┘
```

Without combining high-precision radius ($<2\%$) and mass ($<10\%$), the internal composition of small planets ($R_p \le 2.0 R_\oplus$) remains degenerate among rocky cores, water worlds, and mini-gas envelopes.

---

## CHEOPS: CHaracterizing ExOPlanet Satellite (ESA S1 Mission)

CHEOPS represents the European Space Agency's first Small-class (S1) mission, developed by an international consortium led by the University of Bern with major scientific and optical leadership from INAF and the University of Padova:

```
                            THE CHEOPS SPACECRAFT ARCHITECTURE
                           ┌─────────────────────────────┐
                           │   Sun-Synchronous Orbit     │
                           │   Altitude: ~ 700 km        │
                           └──────────────┬──────────────┘
                                          │
                           ┌──────────────▼──────────────┐
                           │      33 cm Telescope        │
                           │      Ritchey-Chrétien       │
                           └──────────────┬──────────────┘
                                          │
                           ┌──────────────▼──────────────┐
                           │   Deliberately Defocused    │
                           │   PSF (30 arcsec diameter)  │
                           │   Spans ~ 30 pixels         │
                           └──────────────┬──────────────┘
                                          │
                           ┌──────────────▼──────────────┐
                           │ 1k x 1k Back-Illuminated    │
                           │ Frame-Transfer CCD          │
                           └─────────────────────────────┘
```

### 1. Mission Parameters
- **Launch**: December 18, 2019, aboard a Soyuz-Fregat rocket from CSG Kourou.
- **Platform**: Mass $\approx 280\text{ kg}$; 3-axis stabilized platform with star trackers providing $8''$ RMS pointing jitter.
- **Telescope**: 33 cm aperture ($f/8$) Ritchey-Chrétien optical design with a 300 mm primary mirror and a $20'$ circular field of view.

### 2. The Deliberate Defocusing Strategy
Unlike imaging systems that strive for sharp diffraction cores, CHEOPS deliberately defocuses the stellar PSF into a smooth circular disk spanning **$\approx 30\text{ pixels}$ in diameter ($30''$)**:
- **Mitigating Flat-Field Errors**: Spreading starlight across hundreds of pixels averages out intra-pixel sensitivity variations and pixel-to-pixel quantum efficiency variations ($PRNU \sim 0.1\%$).
- **Preventing Saturation**: Enables long exposure times on bright benchmark stars ($V \sim 6 - 12\text{ mag}$) without saturating the CCD potential wells.
- **Photometric Precision**: Delivers an ultra-stable photometric precision of **$\approx 15 - 20\text{ ppm}$ over a 6-hour transit** for $V \approx 9$ stars.

### 3. Core Science Exploitations
- **Targeted Follow-Up**: Pointing at single, pre-selected planetary targets identified by RV surveys (HARPS/ESPRESSO) or TESS mono-transits to catch transits and refine orbital ephemerides.
- **Atmospheric Phase Curves**: Measuring optical planetary phase curves (reflected light and day-night thermal redistribution) to extract geometric albedos and longitudinal brightness maps.
- **TTV Architecture Refinement**: Tracking secular and resonant timing variations across multi-year baselines.

---

## PLATO: PLAnetary Transits and Oscillations of Stars (ESA M3 Mission)

PLATO is the third Medium-class (M3) mission in ESA's Cosmic Vision program:
- **Launch**: 2026/2027 aboard Ariane 6 to the Sun-Earth $L_2$ Lagrange point.
- **Nominal Science Duration**: 4 years nominal (with consumables sized for $>8$ years).

```
                      THE PLATO TRIAD: SIMULTANEOUS PRECISION
               ┌─────────────────────────────────────────────────────┐
               │              PLATO MEASUREMENT ACCURACY             │
               ├─────────────────────────┬───────────────────────────┤
               │ Parameter               │ Required Precision        │
               ├─────────────────────────┼───────────────────────────┤
               │ Planetary Radius (R_p)  │ < 2 - 3%                  │
               │ Planetary Mass (M_p)    │ < 10% (via RV follow-up)  │
               │ Stellar / System Age (t)│ < 10% (via Asteroseismol.)│
               └─────────────────────────┴───────────────────────────┘
```

### Core Science Objective
Detect and characterize **terrestrial exoplanets up to the habitable zone of solar-like (F5–K7) stars**, providing a full bulk inventory (radius, mass, density, and age) of true Earth-Sun analogs.

---

## The PLATO Multi-Telescope Camera Array

A monolithic telescope cannot combine a wide field of view ($>2,000\text{ deg}^2$) with large aperture ($>0.5\text{ m}$) without intolerable geometric aberrations (astigmatism, coma, distortion). PLATO solves this via a segmented, **multi-camera optical array**:

```
                         THE PLATO 26-CAMERA ARCHITECTURE
                                    Optical Bench
                ┌───────────────────────────────────────────────────┐
                │   [C1]  [C2]  [C3]  [C4]  [C5]  [C6]  ── Group 1 │
                │   [C7]  [C8]  [C9]  [C10] [C11] [C12] ── Group 2 │  24 Normal Cameras
                │   [C13] [C14] [C15] [C16] [C17] [C18] ── Group 3 │  (25s Cadence)
                │   [C19] [C20] [C21] [C22] [C23] [C24] ── Group 4 │
                │                                                   │
                │        [Fast Cam 1]        [Fast Cam 2]           │   2 Fast Cameras
                │        (Red Band)          (Blue Band)            │  (2.5s Cadence, V < 8)
                └───────────────────────────────────────────────────┘
```

### Camera Array Specifications
- **24 "Normal" Cameras (NCams)**:
  - 12 cm dioptric refractor telescopes ($f/3$), each feeding a focal plane of 4 CCDs ($4510 \times 4510$ pixels each, $18\ \mu\text{m}$ pitch).
  - Grouped into four sub-arrays of 6 cameras whose lines of sight are tilted by **$9.2^\circ$** from the central instrument pointing axis.
  - Generates an overlapping sky coverage where the central field is monitored by 24 cameras simultaneously, intermediate regions by 18, 12, or 6 cameras.
  - Cadence: $25\text{ seconds}$.
- **2 "Fast" Cameras (FCams)**:
  - Point toward the center; operate in two broad spectral bands (Red and Blue) at a rapid cadence of **$2.5\text{ seconds}$**.
  - Monitor bright benchmark stars ($V \le 8$) and act as the spacecraft's fine guidance sensors (FGS).
- **Total Field of View**: Over **$2,132\text{ deg}^2$** on the sky.
- **Focal Plane Detector Area**: Total of **104 CCDs ($26 \times 4$)**, comprising **$>2.1$ Gigapixels**, making PLATO the largest digital imaging system ever built for space astronomy.

---

## Asteroseismology: Unlocking the Stellar Age and Interior

PLATO's ultra-high photometric precision enables continuous measurement of non-radial p-mode acoustic stellar pulsations:

```
 Stellar Power Spectrum P(nu)
      ▲
      │                      Delta nu (Large Frequency Separation)
      │                     <───────────>
      │            /\            /\            /\
      │           /  \          /  \          /  \
      │          /    \        /    \        /    \
      │      /\ /      \  /\  /      \  /\  /      \
      └─────┴──┴────────┴┴──┴┴────────┴┴──┴┴────────┴────────> Frequency nu
                          nu_max (Frequency of Maximum Power)
```

### Asteroseismic Scaling Relations
1. **Large Frequency Separation ($\Delta \nu$)**:
   The frequency spacing between acoustic modes of consecutive radial orders ($n$) directly probes the stellar mean density:
   $$\Delta \nu \propto \sqrt{\bar{\rho}_\star} \propto \left( \frac{M_\star}{M_\odot} \right)^{1/2} \left( \frac{R_\star}{R_\odot} \right)^{-3/2}$$
2. **Frequency of Maximum Power ($\nu_{\text{max}}$)**:
   Proportional to the acoustic cut-off frequency, scaling directly with surface gravity:
   $$\nu_{\text{max}} \propto \frac{g_\star}{\sqrt{T_{\text{eff}}}} \propto \left( \frac{M_\star}{M_\odot} \right) \left( \frac{R_\star}{R_\odot} \right)^{-2} \left( \frac{T_{\text{eff}}}{T_{\text{eff}, \odot}} \right)^{-1/2}$$
3. **Small Frequency Separation ($\delta \nu_{02}$)**:
   Sensitive to the sound speed gradient in the stellar core, which decreases as hydrogen fuses into helium, providing a direct measurement of the **stellar age**:
   $$\tau_\star \text{ determined to } < 10\% \text{ accuracy}$$

By pairing asteroseismic stellar parameters ($M_\star, R_\star, \tau_\star$) with transit photometry ($R_p/R_\star$) and ESPRESSO radial velocities ($M_p$), PLATO will deliver the first accurately age-dated bulk density measurements for Earth-sized habitable zone planets across the Galaxy.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [18_Space_Transit_Surveys_TTVs_and_Resonances](./18_Space_Transit_Surveys_TTVs_and_Resonances.html)
- Next Lecture: [20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy](./20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy.html)
- Related Notes: Transit photometry and Mandel-Agol formulation | Mass-radius diagram and interior models
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./18_Space_Transit_Surveys_TTVs_and_Resonances.html" class="backlink-item">18_Space_Transit_Surveys_TTVs_and_Resonances</a></li>
    <li class="backlink-item-wrap"><a href="./20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy.html" class="backlink-item">20_Exoplanet_Atmospheres_and_Transmission_Spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Space%20transit%20observatories%20and%20CHEOPS-PLATO%20missions.html" class="backlink-item">Space transit observatories and CHEOPS-PLATO missions</a></li>
  </ul>
</div>
