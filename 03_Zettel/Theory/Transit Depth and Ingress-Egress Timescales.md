---
layout: "default"
title: "Transit Depth and Ingress-Egress Timescales"
---
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
- [[Exoplanet Transit Geometry and Impact Parameter]]
- [[Stellar Limb Darkening Laws]]
- [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]]



## Linked References

- [[Exoplanet Transit Geometry and Impact Parameter]]
- [[Astrophysics_Laboratory_2_MOC]]


