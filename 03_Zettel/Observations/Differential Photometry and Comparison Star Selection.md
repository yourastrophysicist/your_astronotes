---
layout: "default"
title: "Differential Photometry and Comparison Star Selection"
---
# Differential Photometry and Comparison Star Selection

Differential photometry cancels common-mode atmospheric extinction and transparency fluctuations by monitoring the target star relative to non-variable comparison stars observed simultaneously in the same field of view.

## The Mathematical Mechanism
For target star $T$ and comparison star $C$:
$$F_T(t) = F_{T, 0} \cdot T_{\text{atm}}(t) \cdot T_{\text{opt}}(t)$$
$$F_C(t) = F_{C, 0} \cdot T_{\text{atm}}(t) \cdot T_{\text{opt}}(t)$$
Dividing fluxes cancels atmospheric transmission $T_{\text{atm}}(t)$ and telescope transmission $T_{\text{opt}}(t)$:
$$\frac{F_T(t)}{F_C(t)} = \frac{F_{T, 0}}{F_{C, 0}} = \text{constant in the absence of transit}$$

## Artificial Ensemble Star
To reduce photometric noise, an artificial comparison star is built from $M$ reference stars:
$$F_{\text{ens}}(t) = \sum_{j=1}^M w_j \, F_j(t), \quad w_j = \frac{1 / \sigma_j^2}{\sum 1 / \sigma_k^2}$$
Differential light curve:
$$F_{\text{diff}}(t) = \frac{F_{\text{target}}(t)}{F_{\text{ens}}(t)}$$

## Comparison Star Selection Rules
1. **Non-variability**: verified across the observation baseline.
2. **Color match**: similar spectral type and temperature to minimize differential chromatic refraction and second-order airmass color extinction.
3. **Brightness match**: within $0.5?2.0 \times$ target brightness (sufficiently bright to minimize noise, not bright enough to saturate).
4. **Spatial proximity**: close enough to share identical atmospheric seeing and extinction profiles, but outside the target star aperture.

## Related Notes
- [[Airmass and Atmospheric Extinction Correction]]
- [[Malavolta 07 - Differential Photometry and Atmospheric Detrending]]
- [[Laboratory Exercise - Ground-Based Differential Photometry with TASTE]]



## Linked References

- [[Laboratory Exercise - Ground-Based Differential Photometry with TASTE]]
- [[Airmass and Atmospheric Extinction Correction]]
- [[Aperture Photometry and Optimal Aperture Selection]]
- [[Astrophysics_Laboratory_2_MOC]]


