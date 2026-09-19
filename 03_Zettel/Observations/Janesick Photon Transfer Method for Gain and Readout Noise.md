---
layout: "default"
title: "Janesick Photon Transfer Method for Gain and Readout Noise"
---
# Janesick Photon Transfer Method for Gain and Readout Noise

The Janesick Photon Transfer Curve (PTC) technique measures the analog-to-digital converter gain $g$ ($e^-/\text{ADU}$) and electronic readout noise $\sigma_{\text{RON}}$ without requiring external laboratory calibration standards, relying entirely on the Poisson statistics of photons.

## Mathematical Formulation
In physical units of electrons ($e^-$), photo-charge generation follows Poisson counting statistics:
$$\text{Var}(S [e^-]) = \langle S [e^-] \rangle$$
Signals in ADU are related to physical electrons via gain $g$:
$$S [e^-] = g \cdot S [\text{ADU}]$$
$$\text{Var}(S [e^-]) = g^2 \cdot \text{Var}(S [\text{ADU}])$$

Equating the two expressions:
$$g^2 \cdot \text{Var}(S [\text{ADU}]) = g \cdot \langle S [\text{ADU}] \rangle \implies \text{Var}(S [\text{ADU}]) = \frac{\langle S [\text{ADU}] \rangle}{g}$$

Including additive electronic readout noise variance $\sigma_{\text{RON, ADU}}^2$:
$$\text{Var}_{\text{total}}[\text{ADU}] = \frac{\langle S [\text{ADU}] \rangle}{g} + \sigma_{\text{RON, ADU}}^2$$

## Two-Frame Difference Method
To eliminate spatial pixel response non-uniformity (PRNU), two flat frames ($F_1, F_2$) are acquired at identical exposure levels:
1. Difference image: $\Delta F(x, y) = F_1(x, y) - F_2(x, y)$.
2. Fixed pattern PRNU cancels identically:
$$\sigma_{\Delta F}^2 = \text{Var}(F_1 - F_2) = 2 \, \text{Var}_{\text{total}}[\text{ADU}] = \frac{2 \bar{F} [\text{ADU}]}{g} + 2 \sigma_{\text{RON, ADU}}^2$$
where $\bar{F} = \frac{1}{2}(\text{median}(F_1) + \text{median}(F_2)) - \text{median}(\text{MasterBias})$.

Solving explicitly for gain:
$$g = \frac{2 \bar{F} [\text{ADU}]}{\sigma_{\Delta F}^2 - 2 \sigma_{\text{RON, ADU}}^2} \quad [e^- / \text{ADU}]$$
Readout noise in electrons:
$$\sigma_{\text{RON}} [e^-] = g \cdot \sigma_{\text{RON, ADU}}$$

## Related Notes
- [CCD Readout Noise and Output Amplifier](CCD%20Readout%20Noise%20and%20Output%20Amplifier.html)
- [Bias Frame and Electronic Offset](Bias%20Frame%20and%20Electronic%20Offset.html)
- [Malavolta 01 - Bias Analysis and Detector Calibration](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2001%20-%20Bias%20Analysis%20and%20Detector%20Calibration.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Bias%20Frame%20Calibration%20and%20RON%20Measurement.html" class="backlink-item">Laboratory Exercise - Bias Frame Calibration and RON Measurement</a></li>
    <li class="backlink-item-wrap"><a href="CCD%20Readout%20Noise%20and%20Output%20Amplifier.html" class="backlink-item">CCD Readout Noise and Output Amplifier</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

