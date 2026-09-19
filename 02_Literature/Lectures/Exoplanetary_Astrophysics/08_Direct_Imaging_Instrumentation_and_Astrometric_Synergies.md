---
layout: "default"
title: "08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies"
---
# Lesson 08 – Direct Imaging II: Instrumentation and Astrometric Synergies

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 03/11/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## State-of-the-Art Extreme Adaptive Optics Facilities

To overcome atmospheric seeing and optical aberrations, 8-meter class observatories deployed second-generation instruments dedicated to high-contrast coronagraphy and integral field spectroscopy.

```
                           THE ESO VLT/SPHERE ARCHITECTURE
                           ┌─────────────────────────────┐
                           │      VLT UT3 Nasmyth        │
                           └──────────────┬──────────────┘
                                          │
                           ┌──────────────▼──────────────┐
                           │   SAXO Extreme AO System    │
                           │   - 41x41 Actuator DM       │
                           │   - 1.2 kHz Frame Rate      │
                           │   - Spatial Filtering       │
                           └──────────────┬──────────────┘
                                          │
                  ┌───────────────────────┼───────────────────────┐
                  │ Dichroic Beam Splitter│ Dichroic Beam Splitter│
                  ▼                       ▼                       ▼
            ┌───────────┐           ┌───────────┐           ┌───────────┐
            │   IRDIS   │           │    IFS    │           │  ZIMPOL   │
            │ Near-IR   │           │ Integral  │           │ Optical   │
            │ Dual-Band │           │ Field     │           │ Polarim.  │
            │ Imager &  │           │ Spectrog. │           │ Imaging   │
            │ Spectrog. │           │ (Y-J, Y-H)│           │ (<30 mas) │
            └───────────┘           └───────────┘           └───────────┘
```

### SPHERE (Spectro-Polarimetric High-contrast Exoplanet Research @ VLT)
Installed at the UT3 Nasmyth focus of the ESO Very Large Telescope (Paranal):
- **Wavefront Control (SAXO)**: 41×41 actuator deformable mirror (1377 active actuators) running at $1.2\text{ kHz}$, delivering Strehl ratios $S > 90\%$ in the $H$-band ($1.6\ \mu\text{m}$).
- **IRDIS Subsystem**: Dual-band imager covering $0.95 - 2.32\ \mu\text{m}$. Operates in Dual-Band Imaging (DBI) across adjacent molecular absorption pairs (e.g., $K1/K2$ or $H2/H3$), Dual-Polarization Imaging (DPI), and Long-Slit Spectroscopy (LSS; $R \sim 50-350$).
- **IFS Subsystem**: Integral Field Spectrograph sampling a $1.7'' \times 1.7''$ field of view. Produces 38 monochromatic image slices simultaneously across $Y-J$ ($0.95 - 1.35\ \mu\text{m}, R \sim 50$) or $Y-H$ ($0.95 - 1.65\ \mu\text{m}, R \sim 30$).
- **ZIMPOL Subsystem**: Zurich Imaging Polarimeter operating in the visible ($0.5 - 0.9\ \mu\text{m}$) down to $< 30\text{ mas}$ angular resolution. Highly sensitive to polarized scattered light from circumstellar dust and debris disks.

### Complementary Instruments
- **GPI (Gemini Planet Imager)**: Deployed on Gemini South; 4096-actuator MEMS deformable mirror with an Apodized Pupil Lyot Coronagraph (APLC) and near-IR IFS.
- **SHARK-VIS & SHARK-NIR**: Commissioned on the Large Binocular Telescope (LBT, Mt. Graham, Arizona). Exploits the adaptive secondary mirrors (ASM) and binocular baseline for high angular resolution imaging in visible and near-IR wavelengths.

---

## Protoplanetary Systems and Accreting Protoplanets: PDS 70

Direct imaging offers the only empirical window into active planet formation within circumstellar transition disks:

```
                            PDS 70 PROTOPLANETARY SYSTEM
                       Outer Transition Dust Disk (R ~ 54 AU)
                            ╭──────────────────────╮
                           ╱                        ╲
                          │    ● PDS 70 c            │
                          │      a = 30.2 AU         │
                          │      Circumplanetary     │
                          │      Disk (CPD)          │
                          │                          │
                          │      ● PDS 70 b          │
                          │        a = 22 AU         │
                          │        Active H-alpha    │
                          │        Accretion         │
                           ╲                        ╱
                            ╰──────────────────────╯
                                    K7V Star
```

### The PDS 70 Benchmark (Keppler et al. 2018, Müller et al. 2018, Mesa et al. 2019)
- **Host Star**: K7 dwarf in Upper Centaurus-Lupus, age $\approx 5.4\text{ Myr}$, distance $d = 113\text{ pc}$.
- **PDS 70 b**: First unambiguous detection of an actively accreting protoplanet embedded inside a cleared circumstellar disk gap:
  $$M_b \approx 5 - 9 M_{\text{Jup}}, \quad a \approx 22\text{ AU}, \quad P \approx 123.6\text{ yr}$$
  Detected in $H\alpha$ emission ($656\text{ nm}$) with MUSE@VLT and MagAO-X, indicating active magnetospheric accretion shocks.
- **PDS 70 c**: Second companion detected near the outer edge of the gap:
  $$M_c \approx 4.4 M_{\text{Jup}}, \quad a \approx 30.2\text{ AU}, \quad P \approx 191.6\text{ yr}$$
  Orbiting in a near $2:1$ mean-motion resonance with PDS 70 b. ALMA submillimeter observations resolved a **circumplanetary disk (CPD)** around PDS 70 c containing $\approx 0.03 M_\oplus$ of dust, confirming the theoretical site of satellite (exomoon) formation.

---

## Proper Motion Anomaly (PMa): Astrometric Synergies

Direct imaging blind surveys suffer from low detection rates ($\lesssim 1-2\%$) because wide-separation giant planets are intrinsically rare. Targeted searches resolve this bottleneck by exploiting **Proper Motion Anomalies (PMa)**:

```
                      PROPER MOTION ANOMALY (PMa) VECTORS
                          
                 Hipparcos Epoch (~1991.25)
                          ●──────────────────>  mu_Hip
                           ╲
                            ╲  Long-term Mean Vector
                             ╲  mu_HG (24.75 yr baseline)
                              ▼
                              ●──────────────────>  mu_Gaia
                             Gaia Epoch (~2016.0)
 
      Anomalous Acceleration: Delta mu = mu_Gaia - mu_HG =/= 0  ==> Unseen Perturber!
```

### Mathematical Principle
By cross-calibrating the **Hipparcos** catalog (epoch $T_{\text{Hip}} \approx 1991.25$) and **Gaia DR3** (epoch $T_{\text{Gaia}} \approx 2016.0$), astronomers construct three proper motion vectors:
1. Short-term instantaneous proper motion at 1991.25: $\boldsymbol{\mu}_{\text{Hip}}$
2. Short-term instantaneous proper motion at 2016.0: $\boldsymbol{\mu}_{\text{Gaia}}$
3. Long-term mean positional difference vector over $\Delta T \approx 24.75\text{ yr}$:
   $$\boldsymbol{\mu}_{\text{HG}} = \frac{\mathbf{x}_{\text{Gaia}} - \mathbf{x}_{\text{Hip}}}{T_{\text{Gaia}} - T_{\text{Hip}}}$$

### Detecting Massive Companions
For an isolated, unperturbed single star, all three vectors are identical within measurement errors: $\boldsymbol{\mu}_{\text{Hip}} = \boldsymbol{\mu}_{\text{Gaia}} = \boldsymbol{\mu}_{\text{HG}}$.

If an unseen substellar companion orbits the star with an orbital period comparable to or longer than the 25-year baseline, the star's velocity vector changes. The difference vector:

$$\Delta \boldsymbol{\mu} = \boldsymbol{\mu}_{\text{Gaia}} - \boldsymbol{\mu}_{\text{HG}}$$

represents a direct measurement of the **instantaneous reflex acceleration** of the host star:

$$\mathbf{a}_\star \approx \frac{\Delta \boldsymbol{\mu} \cdot d}{\Delta t}$$

- Stars exhibiting significant proper motion anomalies ($\Delta \mu / \sigma > 3$) are flagged as high-priority imaging targets.
- This technique has vastly increased direct imaging discovery yields (e.g., discovery of **$\theta$ Cyg B**, **HD 33632 Ab**).

---

## Future High-Contrast Observatories

```
Future Contrast vs Inner Working Angle (IWA) Regimes:
Contrast
   ▲
10^-6 │  SPHERE / GPI (VLT/Gemini)
      │
10^-8 │           ELT / HARMONI / MICADO (Ground 39m)
      │           [Reflected light giants, thermal sub-Neptunes]
      │
10^-10│                       Habitable Worlds Observatory (HWO)
      │                       [Reflected light Earth-analogs in HZ]
      └─────────┬─────────────┬─────────────┬─────────────> Separation
              10 mas        50 mas        200 mas
```

1. **Extremely Large Telescope (ELT, 39m, ESO)**:
   - First-generation instruments: **MICADO** (near-IR high-resolution camera) and **HARMONI** (optical/NIR integral field spectrograph).
   - Dedicated second-generation instrument: **PCS** (Planetary Camera and Spectrograph), aiming for contrast $\sim 10^{-8} - 10^{-9}$ at an inner working angle of $10-20\text{ mas}$, enabling direct imaging of temperate rocky planets around nearby M dwarfs (e.g. Proxima Centauri b).
2. **Nancy Grace Roman Space Telescope (CGI, 2027)**:
   - **Coronagraph Instrument (CGI)**: Space-based technology demonstration of active wavefront control with two 2000-actuator deformable mirrors, achieving raw contrasts of $10^{-8} - 10^{-9}$ in optical reflected light.
3. **Habitable Worlds Observatory (HWO, NASA 2040s)**:
   - $6$-meter optical/UV/NIR space telescope featuring an advanced coronagraph with $10^{-10}$ starlight suppression.
   - Purpose: Direct imaging and spectroscopic characterization of $\ge 25$ habitable-zone Earth analogs to search for atmospheric biosignature gases ($O_2, O_3, H_2O, CH_4$).

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [07_Direct_Imaging_Physics_and_High_Contrast_Techniques](./07_Direct_Imaging_Physics_and_High_Contrast_Techniques.html)
- Next Lecture: [09_Astrometric_Detection_and_Gaia_Capabilities](./09_Astrometric_Detection_and_Gaia_Capabilities.html)
- Related Notes: [Adaptive optics](../../../03_Zettel/Theory/interf/Adaptive%20optics.html) | Exoplanetary atmospheres and transmission spectroscopy

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Coronagraphy%20and%20angular%20differential%20imaging.html" class="backlink-item">Coronagraphy and angular differential imaging</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

