---
layout: "default"
title: "Malavolta 07 - Differential Photometry and Atmospheric Detrending"
---
# Malavolta 07 — Differential Photometry and Atmospheric Detrending

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## Atmospheric Extinction and Airmass

Ground-based photometric observations suffer from atmospheric extinction caused by Rayleigh scattering from molecular nitrogen/oxygen, aerosol scattering, and molecular absorption bands ($H_2O, O_3$).

The attenuation of stellar flux follows the Bouguer law:
$$m_{\text{obs}} = m_0 + k_\lambda X(t)$$
where:
- $k_\lambda$ is the atmospheric extinction coefficient (magnitudes per airmass).
- $X(t) \approx \sec z(t)$ is the optical airmass at zenith angle $z(t)$.

As the target star rises and sets, $X(t)$ changes continuously, causing raw measured stellar fluxes to vary by tenths of a magnitude (10?50%), completely overwhelming millimagnitude ($0.1?1\%$) planetary transit dips.

---

## Principle of Differential Photometry

Differential photometry eliminates common-mode atmospheric extinction and transparency variations by dividing the target star flux $F_{\text{target}}(t)$ by the flux of one or more simultaneously observed, non-variable comparison stars:

$$F_{\text{diff}}(t) = \frac{F_{\text{target}}(t)}{F_{\text{comp}}(t)}$$

Because both target and comparison stars are observed simultaneously through the same atmospheric column and optical path:
$$F_{\text{target}}(t) = F_{0, \text{target}} \cdot T_{\text{atm}}(t) \cdot T_{\text{tel}}(t)$$
$$F_{\text{comp}}(t) = F_{0, \text{comp}} \cdot T_{\text{atm}}(t) \cdot T_{\text{tel}}(t)$$
Taking the ratio cancels atmospheric transmission $T_{\text{atm}}(t)$ and telescope transmission $T_{\text{tel}}(t)$ identically:
$$F_{\text{diff}}(t) = \frac{F_{0, \text{target}}}{F_{0, \text{comp}}}$$

---

## Artificial Ensemble Star Construction

Rather than relying on a single reference star (which may be micro-variable or have lower SNR), an **artificial ensemble reference star** is constructed from a weighted sum of $M$ comparison stars:

$$F_{\text{ens}}(t) = \sum_{j=1}^M w_j \, F_{\text{ref}, j}(t)$$

### Optimal Variance Weighting
Weights are inversely proportional to individual photometric variances:
$$w_j = \frac{1 / \sigma_{\text{ref}, j}^2}{\sum_{k=1}^M 1 / \sigma_{\text{ref}, k}^2}$$
Ensures that brighter, higher-precision comparison stars contribute more weight to the ensemble.

### Differential Flux Ratio
$$F_{\text{diff}}(t) = \frac{F_{\text{target}}(t)}{F_{\text{ens}}(t)}$$
Propagated error:
$$\sigma_{\text{diff}}(t) = F_{\text{diff}}(t) \sqrt{\left( \frac{\sigma_{\text{target}}(t)}{F_{\text{target}}(t)} \right)^2 + \left( \frac{\sigma_{\text{ens}}(t)}{F_{\text{ens}}(t)} \right)^2}$$

---

## Baseline Normalization and Systematic Detrending

Even after differential division, residual out-of-transit trends often persist due to:
- Second-order color extinction (target and reference stars have slightly different spectral types / temperatures).
- Differential flexure and PSF shape changes across the detector field of view.

### Out-of-Transit Baseline Polynomial
The out-of-transit baseline is modeled with a polynomial function of time or airmass:
$$B(t) = c_0 + c_1 t + c_2 t^2$$
$$F_{\text{norm}}(t) = \frac{F_{\text{diff}}(t)}{B(t)}$$

In practice, the polynomial coefficients $\{c_0, c_1, c_2\}$ are fitted simultaneously with transit parameters in the final MCMC likelihood to ensure complete error propagation and prevent biasing the planetary transit depth.

---

## Related Notes
- [Differential Photometry and Comparison Star Selection](../../../03_Zettel/Observations/Differential%20Photometry%20and%20Comparison%20Star%20Selection.html)
- [Airmass and Atmospheric Extinction Correction](../../../03_Zettel/Observations/Airmass%20and%20Atmospheric%20Extinction%20Correction.html)
- [Laboratory Exercise - Ground-Based Differential Photometry with TASTE](../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20Ground-Based%20Differential%20Photometry%20with%20TASTE.html)
- [Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling](./Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20Ground-Based%20Differential%20Photometry%20with%20TASTE.html" class="backlink-item">Laboratory Exercise - Ground-Based Differential Photometry with TASTE</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/Airmass%20and%20Atmospheric%20Extinction%20Correction.html" class="backlink-item">Airmass and Atmospheric Extinction Correction</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/Differential%20Photometry%20and%20Comparison%20Star%20Selection.html" class="backlink-item">Differential Photometry and Comparison Star Selection</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

