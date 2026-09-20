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
- [[Malavolta 03 - Science Frame Correction and Error Propagation]]
- [[Bias Frame and Electronic Offset]]
- [[Flat Field Frame and Pixel Response Non-Uniformity]]



## Linked References

- [[Laboratory Exercise - Science Frame Reduction and Error Tracking]]
- [[Cosmic Ray Rejection via Laplacian Edge Detection]]
- [[Python Class Architecture for Astronomical Pipelines]]
- [[Astrophysics_Laboratory_2_MOC]]


