---
layout: "default"
title: "Exposure Time Smearing in Transit Photometry"
---
# Exposure Time Smearing in Transit Photometry

Finite exposure integration times cause transit light curves to deform systematically, averaging flux across rapidly changing orbital phases.

## The Mathematical Mechanism
A detector integrating over duration $T_{\text{exp}}$ records the mean flux:
$$\bar{F}(t) = \frac{1}{T_{\text{exp}}} \int_{t - T_{\text{exp}}/2}^{t + T_{\text{exp}}/2} F(t') \, dt'$$
When $T_{\text{exp}}$ is comparable to the ingress or egress duration $T_{12}$ (e.g., 30-minute Kepler long cadence or 2-minute / 10-minute TESS FFIs):
- Ingress and egress slopes are smoothed out, appearing shallower.
- The transit depth at the center can be attenuated if flat-bottom duration $T_{23} < T_{\text{exp}}$.
- If uncorrected, fitting point-evaluated models to time-averaged data leads to severe systematic errors in $r_p$, $a/R_\star$, and $i$.

## Numerical Resampling (Kipping 2010)
In transit modeling packages (`batman`, `PyTransit`), finite exposure integration is evaluated via Gaussian quadrature or Simpson numerical integration over $N_{\text{sub}}$ sub-samples per cadence:
$$\bar{F}(t_i) \approx \sum_{k=1}^{N_{\text{sub}}} w_k \, F\left( t_i - \frac{T_{\text{exp}}}{2} + \frac{k - 0.5}{N_{\text{sub}}} T_{\text{exp}} \right)$$
Typically, $N_{\text{sub}} = 5?7$ sub-samples completely eliminates exposure smearing bias.

## Related Notes
- [[Transit Modeling with batman]]
- [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]]



## Linked References

- [[Transit Modeling with batman]]
- [[Astrophysics_Laboratory_2_MOC]]


