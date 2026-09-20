---
layout: "default"
title: "Full Well Capacity and Charge Saturation"
---
# Full Well Capacity and Charge Saturation

Full well capacity defines the maximum quantity of photo-electrons an individual pixel's electrostatic potential well can collect before non-linear charge loss, recombination, or blooming occurs.

## Physical Limits of the Potential Well
The maximum collected charge $Q_{\text{max}}$ in a MOS capacitor is determined by oxide capacitance $C_{\text{ox}}$, pixel surface area $A_{\text{pix}}$, and gate voltage swing:
$$N_{\text{well}} \approx \frac{C_{\text{ox}} A_{\text{pix}} (V_{\text{high}} - V_{\text{low}})}{q}$$
- Typical scientific CCDs: $N_{\text{well}} \sim 100,000 - 200,000\, e^-$.
- In ADU units: $\text{Well}_{\text{ADU}} = N_{\text{well}} / g$.

## Regimes of Detector Response
1. **Linear Regime** ($< 70?80\%$ of full well): photo-charge collection is strictly proportional to incident flux ($R^2 > 0.9999$).
2. **Non-Linear Regime** ($80?95\%$ of full well): electrostatic repulsion from accumulated electrons lowers the potential barrier, causing collection efficiency to drop.
3. **Saturation and Blooming** ($> 100\%$ of full well): the potential well flattens completely. Excess electrons spill over channel stop barriers along columns, producing vertical saturation streaks and destroying photometric integrity.

## Rule for High-Precision Photometry
Peak stellar pixel counts must never exceed the non-linear limit (typically $\sim 40,000?45,000\text{ ADU}$ for 16-bit ADCs with full scale 65,535 ADU).

## Related Notes
- [[Piotto 03 - Semiconductor Physics and CCD Detector Fundamentals]]
- [[Piotto 04 - CCD Photometry and Noise Characterization]]
- [[Flat Field Frame and Pixel Response Non-Uniformity]]



## Linked References

- [[Flat Field Frame and Pixel Response Non-Uniformity]]
- [[Astrophysics_Laboratory_2_MOC]]


