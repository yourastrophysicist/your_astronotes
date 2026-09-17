---
layout: "default"
title: "Transit Depth and Ingress-Egress Timescales"
---
{% raw %}
# Transit Depth and Ingress-Egress Timescales

The light curve of a transiting exoplanet encodes the physical dimensions of the planet and star through its depth and characteristic contact timescales.

## Contact Points
Four contact points define the transit progression:
1. **$t_1$ (First Contact)**: outer edge of planet first touches outer edge of stellar disk.
2. **$t_2$ (Second Contact)**: planet is completely interior to the stellar disk (end of ingress).
3. **$t_3$ (Third Contact)**: leading edge of planet reaches the opposite stellar limb (start of egress).
4. **$t_4$ (Fourth Contact)**: trailing edge of planet completely leaves the stellar disk.

## Geometric Transit Depth $\delta$
In the absence of limb darkening, the fractional flux drop equals the ratio of projected surface areas:
$$\delta = \frac{\Delta F}{F_\star} = \left( \frac{R_p}{R_\star} \right)^2 = r_p^2$$
Limb darkening deepens the central portion of the transit, causing the true central depth to exceed $r_p^2$ for central crossings.

## Transit Duration Equations (Seager & Mall?n-Ornelas 2003)

### Total Duration $T_{14} = t_4 - t_1$:
$$T_{14} = \frac{P}{\pi} \arcsin\left( \frac{R_\star}{a} \frac{\sqrt{(1 + r_p)^2 - b^2}}{\sin i} \right) \approx \frac{P}{\pi} \frac{R_\star}{a} \sqrt{(1 + r_p)^2 - b^2}$$

### Flat-Bottom Duration $T_{23} = t_3 - t_2$:
$$T_{23} = \frac{P}{\pi} \arcsin\left( \frac{R_\star}{a} \frac{\sqrt{(1 - r_p)^2 - b^2}}{\sin i} \right) \approx \frac{P}{\pi} \frac{R_\star}{a} \sqrt{(1 - r_p)^2 - b^2}$$

### Ingress / Egress Duration $T_{12} = T_{34} = \frac{1}{2}(T_{14} - T_{23})$:
$$T_{12} \approx \frac{P}{\pi} \frac{R_\star}{a} \frac{2 r_p}{\sqrt{1 - b^2}}$$
- High-precision measurement of $T_{12}$ directly constrains the impact parameter $b$ and planetary radius $r_p$.

## Related Notes
- [Exoplanet Transit Geometry and Impact Parameter](./Exoplanet%20Transit%20Geometry%20and%20Impact%20Parameter.html)
- [Stellar Limb Darkening Laws](./Stellar%20Limb%20Darkening%20Laws.html)
- [Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Exoplanet%20Transit%20Geometry%20and%20Impact%20Parameter.html" class="backlink-item">Exoplanet Transit Geometry and Impact Parameter</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2011%20-%20Transit%20Geometry%20and%20Analytical%20Light%20Curve%20Modeling.html" class="backlink-item">Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Piotto%2001%20-%20Exoplanet%20Detection%20and%20Demographics.html" class="backlink-item">Piotto 01 - Exoplanet Detection and Demographics</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Piotto%2002%20-%20Atmospheric%20Characterization%20and%20Transit%20Spectroscopy.html" class="backlink-item">Piotto 02 - Atmospheric Characterization and Transit Spectroscopy</a></li>
  </ul>
</div>
