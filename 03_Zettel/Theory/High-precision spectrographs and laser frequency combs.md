---
layout: "default"
title: "High-precision spectrographs and laser frequency combs"
name: "High-precision spectrographs and laser frequency combs"
description: "ultra-stable echelle spectrographs, environmental stabilization, and sub-meter-per-second calibration with laser frequency combs"
---
{% raw %}
detecting Earth-mass exoplanets in the habitable zones of solar-type stars requires radial velocity precision below $10\text{ cm s}^{-1}$, corresponding to tracking sub-nanometer shifts on the detector ($\sim 1/10000$th of a CCD pixel).

## spectrograph architecture and stabilization

high-precision instruments (HARPS, HARPS-N, ESPRESSO, EXPRES) share key design principles:
1. **fiber-fed double scrambling**: circular-to-octagonal optical fibers scramble near-field and far-field illumination, removing guiding errors and telescope pointing fluctuations.
2. **vacuum and thermal encapsulation**: the entire optical bench is housed in a high-vacuum tank ($p < 10^{-5}\text{ mbar}$) temperature-stabilized to $\Delta T < 1\text{ mK}$ to eliminate refractive index variations of air.
3. **cross-dispersed white-pupil echelle design**: grating operating at high blaze angle (R4 echelle) combined with cross-dispersing prisms to cover the full optical spectrum ($380 - 780\text{ nm}$) across dozens of orders.

## wavelength calibration standards

1. **Thorium-Argon (ThAr) lamps**: traditional emission line sources; limited by line blending, uneven spacing, and isotopic aging shifts ($\sim 0.5 - 1\text{ m s}^{-1}$ floor).
2. **Fabry-Pérot etalons**: passive cavities illuminated by white light producing a dense comb of transmission peaks; excellent short-term interpolation but subject to cavity drift.
3. **Laser Frequency Combs (LFC / Astro-Combs)**: mode-locked femtosecond lasers linked to atomic clocks (GPS/Rubidium). output is a series of equally spaced, phase-coherent delta peaks with absolute accuracy $\Delta\nu / \nu < 10^{-11}$:
   $$f_n = f_0 + n f_{\text{rep}}$$
   where $f_{\text{rep}}$ is repetition rate and $f_0$ is carrier-envelope offset frequency, providing an absolute wavelength calibrator enabling ESPRESSO to achieve $< 10\text{ cm s}^{-1}$ repeatability.

## see also

- [Exoplanetary_Astrophysics_MOC](../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- [11_High_Precision_Spectrographs_and_Doppler_Measurement](../../02_Literature/Lectures/Exoplanetary_Astrophysics/11_High_Precision_Spectrographs_and_Doppler_Measurement.html)
- [13_RV_Wavelength_Calibration_and_Error_Budgets](../../02_Literature/Lectures/Exoplanetary_Astrophysics/13_RV_Wavelength_Calibration_and_Error_Budgets.html)
- [Keplerian radial velocity and Doppler semi-amplitude](./Keplerian%20radial%20velocity%20and%20Doppler%20semi-amplitude.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Keplerian%20radial%20velocity%20and%20Doppler%20semi-amplitude.html" class="backlink-item">Keplerian radial velocity and Doppler semi-amplitude</a></li>
  </ul>
</div>
