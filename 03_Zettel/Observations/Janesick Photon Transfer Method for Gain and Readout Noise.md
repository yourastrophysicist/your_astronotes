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
- [[CCD Readout Noise and Output Amplifier]]
- [[Bias Frame and Electronic Offset]]
- [[Malavolta 01 - Bias Analysis and Detector Calibration]]



## Linked References

- [[Laboratory Exercise - Bias Frame Calibration and RON Measurement]]
- [[CCD Readout Noise and Output Amplifier]]
- [[Astrophysics_Laboratory_2_MOC]]


