---
layout: "default"
title: "Airmass and Atmospheric Extinction Correction"
---
# Airmass and Atmospheric Extinction Correction

Airmass $X$ quantifies the optical path length of starlight through the Earth's atmosphere relative to the path length at the zenith ($z = 0$).

## Plane-Parallel Atmosphere Model
For zenith angles $z < 60^\circ$, a plane-parallel atmosphere provides an accurate approximation:
$$X \approx \sec z = \frac{1}{\cos z}$$
For larger zenith angles ($z > 60^\circ$), atmospheric curvature and refraction require empirical corrections (e.g., Young 1994):
$$X = \frac{1.002432 \cos^2 z + 0.148386 \cos z + 0.0096467}{\cos^3 z + 0.149864 \cos^2 z + 0.0102963 \cos z + 0.000303978}$$

## Atmospheric Extinction (Bouguer Law)
Observed apparent magnitude $m_{\text{obs}}$ increases linearly with airmass $X$:
$$m_{\text{obs}}(\lambda) = m_0(\lambda) + k_\lambda X$$
where:
- $m_0(\lambda)$ is the extra-atmospheric magnitude.
- $k_\lambda$ is the extinction coefficient in magnitudes per airmass.

### Physical Contributions to $k_\lambda$
1. **Rayleigh Scattering**: scattering by $N_2$ and $O_2$ molecules:
$$k_{\text{Rayleigh}}(\lambda) \propto \lambda^{-4}$$
Strongest in UV and blue filters ($k_U \sim 0.5\text{ mag/airmass}$, $k_V \sim 0.15\text{ mag/airmass}$).
2. **Aerosol / Mie Scattering**: scattering by dust, water droplets, and smoke:
$$k_{\text{Aerosol}}(\lambda) \propto \lambda^{-\alpha} \quad (\alpha \sim 1?1.5)$$
3. **Molecular Ozone and Telluric Absorption**: ozone Chappuis band in the visual ($\,\sim 500?700\text{ nm}$); telluric $H_2O$ and $O_2$ absorption bands in the near-IR ($> 700\text{ nm}$).

## Second-Order Chromatic Extinction
Because stellar spectra vary across the filter passband:
$$k_\lambda = k'_\lambda + k''_\lambda (B - V)$$
Stars of different colors attenuate at slightly different rates over the observing night, producing residual curvature in differential light curves that must be detrended via baseline polynomials.

## Related Notes
- [Differential Photometry and Comparison Star Selection](Differential%20Photometry%20and%20Comparison%20Star%20Selection.html)
- [Malavolta 07 - Differential Photometry and Atmospheric Detrending](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2007%20-%20Differential%20Photometry%20and%20Atmospheric%20Detrending.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Ground-Based%20Differential%20Photometry%20with%20TASTE.html" class="backlink-item">Laboratory Exercise - Ground-Based Differential Photometry with TASTE</a></li>
    <li class="backlink-item-wrap"><a href="Differential%20Photometry%20and%20Comparison%20Star%20Selection.html" class="backlink-item">Differential Photometry and Comparison Star Selection</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

