---
layout: "default"
title: "Curve of Growth in Stellar Photometry"
---
# Curve of Growth in Stellar Photometry

A Curve of Growth in aperture photometry plots the measured enclosed stellar flux $F(r)$ and signal-to-noise ratio $\text{SNR}(r)$ as a function of increasing synthetic aperture radius $r$.

## Diagnostic Construction
1. Centroid $(x_c, y_c)$ is determined via 2D Gaussian fitting.
2. Net flux $F(r)$ is measured across a range of radii:
$$r_k = k \cdot \Delta r, \quad k = 1, \dots, K \quad (0.5 \times \text{FWHM} \le r \le 5.0 \times \text{FWHM})$$
3. The curve exhibits three distinct regions:
	- **Steep Core Rise**: $r \le 1.0 \times \text{FWHM}$, dominated by the bright Gaussian central core of the PSF.
	- **Asymptotic Plateau**: $r \sim 2.5 - 3.5 \times \text{FWHM}$, where enclosed flux reaches $> 99\%$ of total stellar emission.
	- **Noise-Dominated Tail**: $r > 4.0 \times \text{FWHM}$, where added sky background noise accumulates without contributing stellar signal.

## Aperture Correction
When an optimal small aperture $r_{\text{opt}}$ is used to maximize SNR on faint stars, a fraction of stellar flux in the PSF wings is lost. The **aperture correction** $\Delta m_{\text{ap}}$ is determined from bright, isolated stars in the field:
$$\Delta m_{\text{ap}} = -2.5 \log_{10}\left( \frac{F(r_{\text{large}})}{F(r_{\text{opt}})} \right)$$
Subtracting $\Delta m_{\text{ap}}$ brings small-aperture magnitudes onto the absolute total photometric scale.

## Related Notes
- [Aperture Photometry and Optimal Aperture Selection](Aperture%20Photometry%20and%20Optimal%20Aperture%20Selection.html)
- [Malavolta 05 - Local Background Subtraction and Aperture Photometry](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2005%20-%20Local%20Background%20Subtraction%20and%20Aperture%20Photometry.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Star%20Centroiding%20and%20Aperture%20Photometry%20Pipeline.html" class="backlink-item">Laboratory Exercise - Star Centroiding and Aperture Photometry Pipeline</a></li>
    <li class="backlink-item-wrap"><a href="Aperture%20Photometry%20and%20Optimal%20Aperture%20Selection.html" class="backlink-item">Aperture Photometry and Optimal Aperture Selection</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

