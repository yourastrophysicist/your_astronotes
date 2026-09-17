---
layout: "default"
title: "07_Direct_Imaging_Physics_and_High_Contrast_Techniques"
---
{% raw %}
# Lesson 07 – Direct Imaging I: Physics and High-Contrast Techniques

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 28/10/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## The Direct Imaging Challenge: Contrast and Resolution

Direct imaging spatially resolves the photons emitted or reflected by an exoplanet separate from its host star. It is the primary technique for probing wide-orbit architectures ($a \gtrsim 5 - 100\text{ AU}$) and directly capturing atmospheric spectra without transit geometry.

```
                         THE ANGULAR RESOLUTION & CONTRAST REGIME
          Contrast F_p / F_*
             ▲
   10^-4  ───┼─────────────────────────────────────────────
             │      Young Self-Luminous Gas Giants (Thermal IR, 1.5 - 5 um)
   10^-6  ───┼      [SPHERE, GPI, JWST NIRCam]
             │
   10^-8  ───┼─────────────────────────────────────────────
             │      Mature Gas Giants (Reflected Optical)
   10^-10 ───┼      Mature Terrestrial / Earth-Analogs (Optical, 0.5 um)
             │      [Future Space Platforms: HWO, Roman CGI]
             └──────┬──────────────────────┬───────────────> Angular Separation
                   0.1" (Inner Working)   1.0"
```

### Contrast Ratio Formulations
The difficulty of direct imaging stems from the immense planet-to-star flux ratio (contrast):

1. **Reflected Light Regime (Mature / Cold Planets)**:
   $$\frac{F_p}{F_\star} = A_g \left( \frac{R_p}{a} \right)^2 \Phi(\alpha)$$
   where:
   - $A_g$: Geometric albedo ($A_g \approx 0.3-0.5$ for gas giants; $A_g \approx 0.3$ for Earth).
   - $a$: Planet-star orbital separation.
   - $\Phi(\alpha)$: Phase function at phase angle $\alpha$.
   - For an Earth-Sun analog ($a = 1\text{ AU}, R_p = 1 R_\oplus$) viewed at quadrature ($\Phi = 1/\pi$):
     $$\frac{F_p}{F_\star} \approx 0.3 \left( \frac{6371\text{ km}}{1.496 \times 10^8\text{ km}} \right)^2 \frac{1}{\pi} \sim 1.7 \times 10^{-10} \quad (\Delta m \approx 24.5\text{ mag})$$
   - For a Jupiter-Sun analog ($a = 5.2\text{ AU}, R_p = 1 R_J$):
     $$\frac{F_p}{F_\star} \approx 10^{-9} \quad (\Delta m \approx 22.5\text{ mag})$$

2. **Thermal Emission Regime (Young / Hot Planets)**:
   Young gas giants retain the residual thermal energy from their initial gravitational collapse. For an effective temperature $T_{\text{eff}} \approx 600 - 2000\text{ K}$, thermal emission vastly exceeds reflected starlight. Approximating both bodies as blackbodies:
   $$\frac{F_p(\lambda)}{F_\star(\lambda)} = \left( \frac{R_p}{R_\star} \right)^2 \frac{B_\lambda(T_{\text{eff}, p})}{B_\lambda(T_{\text{eff}, \star})}$$
   By Wien's displacement law, a $1000\text{ K}$ giant planet peaks in the near/mid-infrared:
   $$\lambda_{\text{peak}} \approx \frac{2898\ \mu\text{m K}}{T} \approx 1.5 - 4.8\ \mu\text{m} \quad (J, H, K, L\text{ bands})$$
   In this infrared window, contrast drops to **$10^{-4} - 10^{-6}$**, making ground-based detection possible with 8-meter class telescopes.

---

## Planetary Evolutionary Cooling Tracks: Hot Start vs Cold Start

Because mass cannot be measured dynamically from a single image, masses of directly imaged planets are inferred by comparing their measured luminosity $L_p$ and age with theoretical cooling tracks:

```
                  EVOLUTIONARY COOLING MODELS: log(L / L_Sun) vs AGE
   log(L / L_Sun)
      ▲
  -3  │       Hot-Start Models (Baraffe, Burrows)
      │       [Unshocked spherical collapse: high initial entropy]
  -4  │         ╲
      │          ╲
  -5  │           ╲─────────────── Cold-Start Models (Marley, Fortney)
      │            ╲               [Accretion shock radiates entropy away: low initial L]
  -6  │             ╲───────────────
      │
      └───────┬───────────────┬───────────────┬───────────────> Age
            1 Myr           10 Myr         100 Myr          1 Gyr
```

1. **Hot-Start Models (Baraffe et al., Burrows et al.)**:
   - Assume idealized spherical collapse where the accreted gas is processed through negligible or inefficient radiative shocks.
   - Primordial entropy remains high ($S \sim 9.5 - 11.0\ k_B / \text{baryon}$), resulting in a hot, inflated planet with high early luminosity.
2. **Cold-Start Models (Marley et al. 2007)**:
   - Assume core-accretion formation where gas passing through the accretion shock at the core surface efficiently radiates away its kinetic energy.
   - Planets begin with lower initial entropy ($S \sim 8.0 - 9.0\ k_B / \text{baryon}$), lower temperatures, and luminosities up to $2-3$ orders of magnitude fainter during the first $10-100\text{ Myr}$.
3. **Warm-Start Models (Spiegel & Burrows 2012)**:
   - Intermediate parameter space where shock radiative efficiency varies with accretion rate and core mass.

---

## High-Contrast Imaging Technologies

Spatially resolving a faint companion at an angular separation $\theta \sim 0.1'' - 1.0''$ requires suppressing the overwhelming diffraction halo and atmospheric speckles of the host star.

### 1. Extreme Adaptive Optics (Ex-AO)
Ground-based atmospheric turbulence induces wavefront phase distortions characterized by Fried's parameter $r_0$ ($\approx 15-20\text{ cm}$ in visible; $\approx 1\text{ m}$ in K-band). Ex-AO systems utilize:
- High-order deformable mirrors (DMs) with $1000 - 4000$ actuators.
- High-speed wavefront sensors (Pyramid or Shack-Hartmann) operating at loop speeds $\ge 1.5 - 3\text{ kHz}$.
- Delivers Strehl ratios $S > 85-90\%$ in the H-band ($1.6\ \mu\text{m}$), concentrating starlight into a clean diffraction core.

### 2. Coronagraphic Architectures
Coronagraphs reject coherent on-axis starlight while transmitting off-axis planetary flux:
- **Classical Lyot Coronagraph**: An opaque focal-plane mask (FPM) blocks the central star core; an undersized downstream pupil stop (**Lyot stop**) intercepts the bright diffracted light rings produced at the telescope entrance pupil edges.
- **Apodized Pupil Lyot Coronagraph (APLC)**: Employs a grayscale pupil transmission mask (apodizer) prior to the FPM, optimizing diffraction rejection for centrally obscured pupils (e.g. VLT, Keck).
- **Vector Vortex Coronagraph (VVC)**: Uses a phase mask with a phase singularity $e^{i l \theta}$ ($l = 2, 4$), driving all on-axis light outside the geometric pupil.

```
                      CLASSICAL LYOT CORONAGRAPH OPTICAL TRAIN
 Entrance       Focal Plane           Lyot Stop          Re-imaged
  Pupil            Mask              Pupil Plane        Focal Plane
   │                │                     │                  │
  ┌┴┐              ┌┴┐                   ┌┴┐                ┌┴┐
  │ │ ──[Lens]──>  │●│ Focal-Plane ──>   │█│ Blocks edge──> │●│ Star canceled;
  └┬┘              └┬┘ Mask blocks       └┬┘ diffraction    └┬┘ Planet visible
   │                │  central star       │  rings           │
```

---

## Post-Processing Speckle Suppression Algorithms

Quasi-static optical aberrations in the telescope optics create a persistent pattern of "speckles" that mimic planetary point sources:

### 1. Angular Differential Imaging (ADI; Marois et al. 2006)
- The telescope's field derotator is turned off, operating in **pupil-tracking mode**.
- The telescope pupil, diffraction spiders, and instrumental aberrations remain strictly static on the detector, while the astrophysical sky field (and any true companion) rotates over time due to Earth's diurnal rotation.
- A median reference image representing the stellar PSF is subtracted from each frame before de-rotating and co-adding the sequence.

### 2. Spectral Differential Imaging (SDI)
- Exploits sharp molecular absorption features in cool planetary atmospheres—specifically the strong methane ($CH_4$) absorption band at $1.6\ \mu\text{m}$ ($H$-band).
- Two simultaneous images are captured at adjacent wavelengths: $\lambda_1 = 1.58\ \mu\text{m}$ (continuum; planet is bright) and $\lambda_2 = 1.62\ \mu\text{m}$ (methane absorption; planet is dark).
- Scaling and subtracting the two frames cancels the stellar speckles, leaving the planetary signal.

---

## Landmark Discoveries in Direct Imaging

1. **2M1207 b (Chauvin et al. 2004, ESO VLT/NACO)**:
   - First directly imaged planetary-mass companion ($M \approx 4 - 5 M_J$).
   - Orbits a young ($8\text{ Myr}$) brown dwarf ($M_\star \approx 25 M_J$) in the TW Hydrae association at a projected separation of $46\text{ AU}$.
2. **HR 8799 b, c, d, e (Marois et al. 2008, 2010; Keck/Gemini)**:
   - Benchmark quadruple planetary system orbiting an A5V star ($M_\star \approx 1.5 M_\odot$, age $\approx 30-40\text{ Myr}$).
   - Four giant planets ($M \approx 5 - 7 M_J$) at projected separations of $15, 27, 43,$ and $68\text{ AU}$, locked in a $1:2:4:8$ mean-motion resonance.
3. **$\beta$ Pictoris b (Lagrange et al. 2009, 2010; VLT/NACO)**:
   - Young giant planet ($M \approx 9 - 11 M_J, T_{\text{eff}} \approx 1700\text{ K}$) orbiting at $a \approx 9\text{ AU}$ ($P \approx 21\text{ yr}$) inside the warped debris disk of the young ($20\text{ Myr}$) star $\beta$ Pictoris.
4. **Fomalhaut b Controversy (Kalas et al. 2008)**:
   - Detected in optical HST data at the inner edge of Fomalhaut's dust belt, but undetected in the thermal infrared by Spitzer and JWST.
   - Orbital expansion and gradual fading confirmed it was not a massive planet, but rather a transient, expanding debris cloud produced by the catastrophic collision of two large icy planetesimals.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [06_Timing_Methods_and_Pulsar_Planets](./06_Timing_Methods_and_Pulsar_Planets.html)
- Next Lecture: [08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies](./08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies.html)
- Related Notes: [Adaptive optics overview](../../../03_Zettel/Theory/interf/Adaptive%20optics%20overview.html) | [Apodization](../../../03_Zettel/Theory/interf/Apodization.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./06_Timing_Methods_and_Pulsar_Planets.html" class="backlink-item">06_Timing_Methods_and_Pulsar_Planets</a></li>
    <li class="backlink-item-wrap"><a href="./08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies.html" class="backlink-item">08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/High-contrast%20direct%20imaging%20and%20extreme%20adaptive%20optics.html" class="backlink-item">High-contrast direct imaging and extreme adaptive optics</a></li>
  </ul>
</div>
