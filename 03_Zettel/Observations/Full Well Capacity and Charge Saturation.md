---
layout: "default"
title: "Full Well Capacity and Charge Saturation"
---
{% raw %}
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
- [Piotto 03 - Semiconductor Physics and CCD Detector Fundamentals](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Piotto%2003%20-%20Semiconductor%20Physics%20and%20CCD%20Detector%20Fundamentals.html)
- [Piotto 04 - CCD Photometry and Noise Characterization](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Piotto%2004%20-%20CCD%20Photometry%20and%20Noise%20Characterization.html)
- [Flat Field Frame and Pixel Response Non-Uniformity](./Flat%20Field%20Frame%20and%20Pixel%20Response%20Non-Uniformity.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Flat%20Field%20Frame%20and%20Pixel%20Response%20Non-Uniformity.html" class="backlink-item">Flat Field Frame and Pixel Response Non-Uniformity</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2002%20-%20Flat%20Field%20Analysis%20and%20Sensitivity%20Mapping.html" class="backlink-item">Malavolta 02 - Flat Field Analysis and Sensitivity Mapping</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Piotto%2003%20-%20Semiconductor%20Physics%20and%20CCD%20Detector%20Fundamentals.html" class="backlink-item">Piotto 03 - Semiconductor Physics and CCD Detector Fundamentals</a></li>
  </ul>
</div>
