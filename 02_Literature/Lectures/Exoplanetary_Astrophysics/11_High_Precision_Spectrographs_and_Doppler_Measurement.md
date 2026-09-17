---
layout: "default"
title: "11_High_Precision_Spectrographs_and_Doppler_Measurement"
---
{% raw %}
# Lesson 11 – Radial Velocity II: High-Precision Spectrographs

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 17/11/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## The Doppler Measurement Threshold and Precision Milestones

Detecting an Earth-mass planet in the habitable zone of a solar-type star ($K \sim 9\text{ cm s}^{-1}$) demands an instrumental measurement stability of $\sigma_{\text{RV}} \lesssim 10\text{ cm s}^{-1}$ sustained over years:

```
                  CHRONOLOGICAL EVOLUTION OF DOPPLER PRECISION
 Precision (m/s)
    ▲
 10 │  ELODIE (1993, OHP 1.93m) -> Discovered 51 Peg b (sigma ~ 10 m/s)
    │  CORALIE (1998, Euler 1.2m; sigma ~ 3-5 m/s)
  1 │  HARPS (2003, ESO 3.6m; sigma ~ 0.5 - 1.0 m/s)
    │  HARPS-N (2012, TNG 3.6m; sigma ~ 0.5 - 0.8 m/s)
0.1 │  ESPRESSO (2018, ESO VLT 4x8.2m; sigma ~ 0.1 m/s = 10 cm/s)
    └─────────────────────────────────────────────────────────────────> Year
```

### The Sub-Atomic Detector Shift Challenge
Consider a high-resolution echelle spectrograph with resolving power $R = \frac{\lambda}{\Delta \lambda} \approx 115,000$ and a typical CCD detector with physical pixel pitch $\Delta x_{\text{pix}} = 15\ \mu\text{m}$.
- A single detector pixel spans a velocity width of:
  $$\Delta v_{\text{pix}} = \frac{c}{R \cdot n_{\text{samp}}} \approx \frac{3 \times 10^8\text{ m s}^{-1}}{115,000 \times 3.2} \approx 815\text{ m s}^{-1}\text{ pixel}^{-1}$$
- To measure an Earth-reflex signal ($K = 0.09\text{ m s}^{-1}$), the physical displacement of the spectrum on the silicon detector is:
  $$\Delta x = \Delta x_{\text{pix}} \cdot \frac{K}{\Delta v_{\text{pix}}} = 1.5 \times 10^{-5}\text{ m} \cdot \frac{0.09}{815} \approx 1.6 \times 10^{-9}\text{ m} = 1.6\text{ nm}$$
- For a $10\text{ cm s}^{-1}$ precision threshold, the required centroid shift corresponds to **$\approx 10^{-4}$ of a pixel**—equivalent to the physical diameter of a few silicon lattice atoms.

---

## Environmental Stabilization and Systematic Drift Sources

Because physical shifts of nanometers mimic planetary signals, high-precision spectrographs must eliminate all environmental instabilities:

```
                            ENVIRONMENTAL SENSITIVITIES
 ┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
 │ Physical Variable         │ Induced Velocity Shift    │ Engineering Requirement  │
 ├───────────────────────────┼───────────────────────────┼───────────────────────────┤
 │ Atmospheric Pressure (P)  │ ~ 300 m/s per 1 mbar      │ High Vacuum (< 10^-5 mbar)│
 │ Temperature (T)           │ ~ 100 m/s per 1 K         │ Active Control (< 0.001 K)│
 │ Telescope Guiding / Point │ ~ 10 - 50 m/s per arcsec  │ Fiber Double Scrambling   │
 └───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

### 1. Refractive Index of Air ($\Delta P$)
The wavelength of light in air is $\lambda_{\text{air}} = \lambda_{\text{vac}} / n_{\text{air}}$. The refractive index of air depends on barometric pressure according to the Edlén formula:

$$\frac{\partial n_{\text{air}}}{\partial P} \approx 2.7 \times 10^{-7}\text{ mbar}^{-1} \implies \frac{\Delta v}{c} = \frac{\Delta n}{n} \implies \Delta v \approx 80 - 100\text{ m s}^{-1}\text{ mbar}^{-1}$$

A weather-induced barometric change of only $1\text{ mbar}$ produces an apparent Doppler shift three orders of magnitude larger than an Earth analog. Consequently, spectrographs like HARPS and ESPRESSO operate within high-vacuum stainless steel vessels maintained at:

$$P < 10^{-5}\text{ mbar}$$

### 2. Thermal Expansion ($\Delta T$)
Thermal expansion of the heavy optical bench and the diffraction grating alters the grating groove spacing $d$:

$$\frac{\Delta \lambda}{\lambda} = \frac{\Delta d}{d} = \alpha_{\text{thermal}} \Delta T$$

For standard structural steel ($\alpha_{\text{thermal}} \approx 1.2 \times 10^{-5}\text{ K}^{-1}$), a temperature shift of $1\text{ K}$ shifts the spectrum by $\Delta v = c \cdot \alpha_{\text{thermal}} \approx 3600\text{ m s}^{-1}$. Stable operation requires multi-layered thermal shielding:

$$\Delta T < 0.001\text{ K} \quad (\le 1\text{ mK})$$

---

## Optical Fiber Feeding and Image Scrambling

Direct slit spectrographs mounted on telescope Cassegrain foci suffer from optical path variations: atmospheric seeing, telescope tracking errors, and guiding jitter move the stellar PSF across the slit, shifting the spectral illumination centroid by dozens of $\text{m s}^{-1}$.

```
                          OPTICAL FIBER DOUBLE SCRAMBLING
 Telescope Focus                                                 Spectrograph Collimator
        │                                                                   ▲
        ▼                                                                   │
   ┌─────────┐   Near-Field   ┌───────────────┐   Far-Field    ┌────────┐   │
   │ Fiber A │───────────────>│ Inverting     │───────────────>│Fiber B │───┘
   │ (Input) │                │ Double Lenses │                │(Output)│
   └─────────┘                └───────────────┘                └────────┘
   Non-uniform illumination   Exchanges Near-Field & Far-Field Uniform illumination
```

### Mechanics of Scrambling
1. **Circular Optical Fibers**: Provide azimuthal scrambling, transforming a non-uniform stellar PSF into a symmetric, azimuthally uniform illumination pattern.
2. **Double Scrambler**: An optical relay consisting of two identical micro-lenses placed between two fiber segments. The optical train maps the **near-field** (the spatial intensity distribution at the exit face of Fiber A) into the **far-field** (the angular pupil distribution entering Fiber B), and vice-versa.
3. **Octagonal Fibers**: Modern systems (HARPS-N, ESPRESSO) incorporate octagonal cross-section fibers, which break the cylindrical symmetry of internal reflections, delivering scrambling efficiencies exceeding $99.9\%$.

---

## The ESPRESSO Spectrograph Architecture @ ESO VLT

ESPRESSO (Echelle SPectrograph for Rocky Exoplanets and Stable Spectroscopic Observations) represents the state-of-the-art facility for ultra-high-precision Doppler spectroscopy:

```
                          ESPRESSO 4-UT COMBINER MODES
 VLT UT1 (8.2m) ──┐
 VLT UT2 (8.2m) ──┼──> Front-End Optical Coudé Trains ──> Dual-Fiber Feed ──> ESPRESSO Vacuum Tank
 VLT UT3 (8.2m) ──┤                                                          (Underground Bunker)
 VLT UT4 (8.2m) ──┘
 Resolving Modes:
 - Single-UT High Resolution (HR): R ~ 140,000 (1 UT, 8.2m)
 - Single-UT Ultra-High Resolution (UHR): R ~ 220,000 (1 UT, 8.2m)
 - 4-UT Combined Medium Resolution (MR): R ~ 70,000 (Simultaneous 16m equivalent aperture)
```

### Key Technical Specifications
- **Location**: Subterranean Combined-Coudé laboratory beneath the VLT Paranal platform.
- **Wavelength Coverage**: Complete optical spectrum from $380\text{ nm}$ to $788\text{ nm}$ in a single exposure.
- **Detector Array**: Mosaic of two $9k \times 4k$ CCD detectors ($10\ \mu\text{m}$ pitch) with custom curvature to correct field astigmatism.
- **Radial Velocity Performance**: Demonstrates on-sky short-term repeatability $< 10\text{ cm s}^{-1}$ and long-term instrument drift stability $< 20\text{ cm s}^{-1}$.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [10_Radial_Velocity_Foundations_and_Keplerian_Orbits](./10_Radial_Velocity_Foundations_and_Keplerian_Orbits.html)
- Next Lecture: [12_AI_and_Machine_Learning_in_Exoplanet_Science](./12_AI_and_Machine_Learning_in_Exoplanet_Science.html)
- Related Notes: Exoplanet detection techniques | Radial velocity method and Keplerian orbits
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./10_Radial_Velocity_Foundations_and_Keplerian_Orbits.html" class="backlink-item">10_Radial_Velocity_Foundations_and_Keplerian_Orbits</a></li>
    <li class="backlink-item-wrap"><a href="./12_AI_and_Machine_Learning_in_Exoplanet_Science.html" class="backlink-item">12_AI_and_Machine_Learning_in_Exoplanet_Science</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/High-precision%20spectrographs%20and%20laser%20frequency%20combs.html" class="backlink-item">High-precision spectrographs and laser frequency combs</a></li>
  </ul>
</div>
