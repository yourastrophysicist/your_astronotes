---
layout: "default"
title: "High-contrast direct imaging and extreme adaptive optics"
---
direct imaging spatially resolves photons emitted or reflected by an exoplanet separate from its host star, enabling photometric, astrometric, and spectroscopic characterization of wide-orbit worlds.

## the contrast ratio challenge

the ratio of planet flux to stellar flux is severe:
- **reflected light**: $C = \frac{F_p}{F_\star} = A_g \left(\frac{R_p}{a}\right)^2 \Phi(\alpha) \sim 10^{-9}$ for Jupiter, $\sim 10^{-10}$ for Earth.
- **thermal emission (young systems)**: for young gas giants ($t \sim 10 - 100\text{ Myr}$) retaining heat from gravitational contraction, near-infrared contrast improves dramatically:
  $$C = \frac{F_p}{F_\star} \sim 10^{-4} - 10^{-6} \quad (1 - 5\text{ }\mu\text{m})$$

## planetary cooling tracks: hot-start versus cold-start

1. **hot-start models** (Burrows, Baraffe): assume all gravitational accretion energy is trapped during formation, producing high initial entropy ($S \sim 10 - 12\text{ }k_B/\text{baryon}$), large radii ($R \sim 1.5 - 2 R_{\text{Jup}}$), and high luminosities ($L \sim 10^{-3} L_\odot$).
2. **cold-start models** (Marley, Fortney): core accretion accretion shock radiates away enthalpy, producing low initial entropy ($S \sim 8 - 9\text{ }k_B/\text{baryon}$) and much fainter initial luminosities.

## extreme adaptive optics (ex-ao)

atmospheric turbulence distorts incoming wavefronts over Fried parameter $r_0 \sim 15\text{ cm}$ at timescale $\tau_0 \sim 5\text{ ms}$. Ex-AO systems (SPHERE, GPI, SCExAO) correct phase distortions using:
- pyramid or Shack-Hartmann wavefront sensors operating at kHz rates ($> 1.5\text{ kHz}$).
- deformable mirrors with thousands of actuators ($> 1500 - 4000$ actuators).
- achieving Strehl ratios $S > 90\%$ in H-band ($1.6\text{ }\mu\text{m}$), concentrating starlight into a diffraction-limited Airy core ($1.22 \lambda / D$).

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [07_Direct_Imaging_Physics_and_High_Contrast_Techniques](../../02_Literature/Lectures/Exoplanetary_Astrophysics/07_Direct_Imaging_Physics_and_High_Contrast_Techniques.html)
- [Coronagraphy and angular differential imaging](Coronagraphy%20and%20angular%20differential%20imaging.html)
- [Astrometric exoplanet detection and Gaia astrometry](Astrometric%20exoplanet%20detection%20and%20Gaia%20astrometry.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Astrometric%20exoplanet%20detection%20and%20Gaia%20astrometry.html" class="backlink-item">Astrometric exoplanet detection and Gaia astrometry</a></li>
    <li class="backlink-item-wrap"><a href="Coronagraphy%20and%20angular%20differential%20imaging.html" class="backlink-item">Coronagraphy and angular differential imaging</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

