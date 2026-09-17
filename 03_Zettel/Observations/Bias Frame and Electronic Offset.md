---
layout: "default"
title: "Bias Frame and Electronic Offset"
---
{% raw %}
# Bias Frame and Electronic Offset

A bias frame is an image acquired with zero seconds exposure time ($t_{\text{exp}} = 0\text{ s}$) with the telescope shutter closed.

## Functional Purpose
1. **Preventing Underflow**: electronic analog-to-digital converters (ADCs) cannot digitize negative voltages. Readout noise fluctuations around zero signal would be clipped at 0 ADU, destroying statistical distributions. A positive baseline voltage offset (pedestal) is injected into the video signal, ensuring all readout values map to positive integers (typically $\sim 500?2000\text{ ADU}$).
2. **Measuring Fixed-Pattern Electronic Structure**: the electronic offset is not strictly uniform across the chip. Column-to-column amplifier differences, clock signal coupling, and voltage gradients produce fixed spatial patterns that must be subtracted from all astronomical exposures.

## Pixel Composition
A raw bias pixel consists of:
$$I_{\text{bias}}(x, y) = \text{Pedestal}_{\text{ADC}} + \text{FixedPattern}(x, y) + \epsilon_{\text{RON}}(x, y)$$
where $\epsilon_{\text{RON}}$ is zero-mean Gaussian electronic readout noise with standard deviation $\sigma_{\text{RON, ADU}}$.

## Creation of the Master Bias
Combining $N$ bias frames via median stacking removes random electronic fluctuations and cosmic ray hits:
$$\text{MasterBias}(x, y) = \text{median}\left( \{ B_k(x, y) \}_{k=1}^N \right)$$
Residual variance of the master bias:
$$\sigma_{\text{MasterBias}}^2 \approx \frac{\pi}{2 N} \sigma_{\text{RON, ADU}}^2 \approx \frac{1.57}{N} \sigma_{\text{RON, ADU}}^2$$
With $N = 30$ frames, the master bias contributes less than $5\%$ to the overall instrumental error budget.

## Related Notes
- [CCD Readout Noise and Output Amplifier](./CCD%20Readout%20Noise%20and%20Output%20Amplifier.html)
- [Malavolta 01 - Bias Analysis and Detector Calibration](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2001%20-%20Bias%20Analysis%20and%20Detector%20Calibration.html)
- [Laboratory Exercise - Bias Frame Calibration and RON Measurement](../Activities/Laboratory%20Exercise%20-%20Bias%20Frame%20Calibration%20and%20RON%20Measurement.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./CCD%20Dark%20Current%20and%20Thermal%20Generation.html" class="backlink-item">CCD Dark Current and Thermal Generation</a></li>
    <li class="backlink-item-wrap"><a href="./CCD%20Readout%20Noise%20and%20Output%20Amplifier.html" class="backlink-item">CCD Readout Noise and Output Amplifier</a></li>
    <li class="backlink-item-wrap"><a href="./Janesick%20Photon%20Transfer%20Method%20for%20Gain%20and%20Readout%20Noise.html" class="backlink-item">Janesick Photon Transfer Method for Gain and Readout Noise</a></li>
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Bias%20Frame%20Calibration%20and%20RON%20Measurement.html" class="backlink-item">Laboratory Exercise - Bias Frame Calibration and RON Measurement</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2001%20-%20Bias%20Analysis%20and%20Detector%20Calibration.html" class="backlink-item">Malavolta 01 - Bias Analysis and Detector Calibration</a></li>
    <li class="backlink-item-wrap"><a href="../Computational/Science%20Frame%20Calibration%20and%20Variance%20Propagation.html" class="backlink-item">Science Frame Calibration and Variance Propagation</a></li>
  </ul>
</div>
