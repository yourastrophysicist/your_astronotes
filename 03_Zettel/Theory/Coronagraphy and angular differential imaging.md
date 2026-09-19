---
layout: "default"
title: "Coronagraphy and angular differential imaging"
---
detecting faint planetary companions next to bright host stars requires combining optical coronagraphs to block on-axis starlight with post-processing differential imaging algorithms to eliminate quasi-static speckles.

## coronagraphic architectures

1. **classical Lyot coronagraph**:
   - focal plane mask (FPM): opaque disk of diameter $4 - 6\lambda/D$ blocks the central starlight core.
   - Lyot stop: undersized aperture mask placed in the downstream pupil plane to absorb starlight diffracted into the airy rings by the telescope pupil edge.
2. **apodized pupil lyot coronagraph (APLC)**: introduces continuous pupil apodization to shape the stellar PSF before the focal mask, reaching raw contrasts of $10^{-5} - 10^{-7}$ (used in SPHERE@VLT and GPI@Gemini).
3. **vortex coronagraph**: phase mask applying a phase wrap $e^{i l \theta}$ ($l=2$ or 4) that diffracts all on-axis starlight outside the pupil geometry.

## quasi-static speckles and the noise floor

residual optical aberrations on the telescope mirrors create coherent interference speckles in the focal plane that look identical to real planets and cannot be removed by simple time integration.

## differential imaging techniques

1. **Angular Differential Imaging (ADI)**:
   the telescope rotator is disabled in alt-azimuth mount mode ("pupil tracking"). the instrumental speckle pattern remains fixed with respect to the detector, while the field of view (and any true companion) rotates with the parallactic angle $\theta(t)$:
   $$I_i(\mathbf{x}) = S(\mathbf{x}) + P(\mathcal{R}_{\theta_i}(\mathbf{x}))$$
   constructing a reference PSF via median filtering or Principal Component Analysis (PCA / KLIP algorithm) and subtracting it reveals the companion.
2. **Spectral Differential Imaging (SDI)**:
   bifurcates light across a molecular absorption edge (e.g. the $1.6\text{ }\mu\text{m}$ methane $\text{CH}_4$ bandhead). the planet appears in one filter and disappears in the adjacent filter, while speckle radial scaling follows $\lambda$.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies](../../02_Literature/Lectures/Exoplanetary_Astrophysics/08_Direct_Imaging_Instrumentation_and_Astrometric_Synergies.html)
- [High-contrast direct imaging and extreme adaptive optics](High-contrast%20direct%20imaging%20and%20extreme%20adaptive%20optics.html)
- [Astrometric exoplanet detection and Gaia astrometry](Astrometric%20exoplanet%20detection%20and%20Gaia%20astrometry.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="High-contrast%20direct%20imaging%20and%20extreme%20adaptive%20optics.html" class="backlink-item">High-contrast direct imaging and extreme adaptive optics</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

