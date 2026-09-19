---
layout: "default"
title: "Science Frame Calibration and Variance Propagation"
---
# Science Frame Calibration and Variance Propagation

Astronomical calibration transforms raw telescope frames into normalized, calibrated intensity arrays while propagating variance pixel-by-pixel across every reduction step.

## The Calibration Equation
$$I_{\text{corr}}(x, y) = \frac{I_{\text{raw}}(x, y) - \text{MasterBias}(x, y)}{\text{MasterFlat}_{\text{norm}}(x, y)}$$

## Analytical Error Propagation
Applying multivariate first-order Taylor expansion:
$$\sigma_{I_{\text{corr}}}^2 = \left( \frac{\partial I_{\text{corr}}}{\partial I_{\text{raw}}} \right)^2 \sigma_{\text{raw}}^2 + \left( \frac{\partial I_{\text{corr}}}{\partial B} \right)^2 \sigma_B^2 + \left( \frac{\partial I_{\text{corr}}}{\partial F} \right)^2 \sigma_F^2$$

Evaluating partial derivatives:
$$\frac{\partial I_{\text{corr}}}{\partial I_{\text{raw}}} = \frac{1}{F}, \quad \frac{\partial I_{\text{corr}}}{\partial B} = -\frac{1}{F}, \quad \frac{\partial I_{\text{corr}}}{\partial F} = -\frac{I_{\text{raw}} - B}{F^2}$$

Yields the rigorous variance propagation formula:
$$\sigma_{I_{\text{corr}}}^2(x, y) = \frac{\sigma_{I_{\text{raw}}}^2(x, y) + \sigma_{\text{MasterBias}}^2(x, y)}{\text{MasterFlat}_{\text{norm}}^2(x, y)} + \frac{[I_{\text{raw}}(x, y) - \text{MasterBias}(x, y)]^2 \cdot \sigma_{\text{MasterFlat}_{\text{norm}}}^2(x, y)}{\text{MasterFlat}_{\text{norm}}^4(x, y)}$$

## Component Uncertainties in ADU
1. Raw science variance:
$$\sigma_{I_{\text{raw}}}^2(x, y) = \frac{\max(0, I_{\text{raw}}(x, y) - \text{MasterBias}(x, y))}{g} + \sigma_{\text{RON, ADU}}^2$$
2. Master bias uncertainty (from $N_B$ frames):
$$\sigma_{\text{MasterBias}}(x, y) \approx \frac{1.253}{\sqrt{N_B}} \sigma_{\text{RON, ADU}}$$
3. Normalized master flat uncertainty (from $N_F$ frames):
$$\sigma_{\text{MasterFlat}_{\text{norm}}}(x, y) \approx \frac{1.253}{\sqrt{N_F}} \frac{\sigma_{\text{flat}}(x, y)}{\text{median}(F_{\text{stack}})}$$

## Related Notes
- [Malavolta 03 - Science Frame Correction and Error Propagation](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2003%20-%20Science%20Frame%20Correction%20and%20Error%20Propagation.html)
- [Bias Frame and Electronic Offset](../Observations/Bias%20Frame%20and%20Electronic%20Offset.html)
- [Flat Field Frame and Pixel Response Non-Uniformity](../Observations/Flat%20Field%20Frame%20and%20Pixel%20Response%20Non-Uniformity.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20Science%20Frame%20Reduction%20and%20Error%20Tracking.html" class="backlink-item">Laboratory Exercise - Science Frame Reduction and Error Tracking</a></li>
    <li class="backlink-item-wrap"><a href="Cosmic%20Ray%20Rejection%20via%20Laplacian%20Edge%20Detection.html" class="backlink-item">Cosmic Ray Rejection via Laplacian Edge Detection</a></li>
    <li class="backlink-item-wrap"><a href="Python%20Class%20Architecture%20for%20Astronomical%20Pipelines.html" class="backlink-item">Python Class Architecture for Astronomical Pipelines</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

