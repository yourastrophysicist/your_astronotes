---
layout: "default"
title: "Trumpler discovery of interstellar extinction"
---
in 1930, Robert J. Trumpler published a landmark study (*Lick Observatory Bulletin*, 14, 154) providing the first empirical proof of interstellar dust.

## the method

Trumpler observed 100 open star clusters in the Galactic plane, measuring:
1. **photometric distance ($d_L$)**: from spectral classification, apparent magnitudes, and the inverse-square law:
   $$d_L = \sqrt{\frac{L}{4\pi F}} \implies (m - M)_0 = 5 \log_{10} d_L - 5$$
2. **angular diameter distance ($d_D$)**: from measured angular diameter $\theta$, assuming open clusters have roughly constant linear diameter $D$:
   $$d_D = \frac{D}{\theta}$$

## the discrepancy

for nearby clusters ($d < 1\text{ kpc}$), $d_L \approx d_D$. for distant clusters, $d_L$ grew systematically faster than $d_D$:

$$\frac{d_L}{d_D} > 1 \quad \text{increasing with distance}$$

assuming transparency would require distant clusters to physically expand. Trumpler proved that interstellar space is filled with dust that absorbs and scatters light:

$$(m - M)_V = 5 \log_{10} d - 5 + A_V$$

correcting for photographic extinction $A_{\text{pg}} \approx 0.7\text{ mag kpc}^{-1}$ restored a constant mean physical diameter ($D \approx 4.4\text{ pc}$) for all clusters across the Milky Way.

## see also

- [Astrophysics_of_the_Interstellar_Medium_MOC](../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html)
- [Cardelli-Clayton-Mathis CCM extinction law](Cardelli-Clayton-Mathis%20CCM%20extinction%20law.html)
- [Interstellar reddening and the reddening vector](Interstellar%20reddening%20and%20the%20reddening%20vector.html)
- [Carraro_05_Interstellar_Dust_and_Extinction](../../02_Literature/Lectures/Interstellar_Medium/Carraro_05_Interstellar_Dust_and_Extinction.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Cardelli-Clayton-Mathis%20CCM%20extinction%20law.html" class="backlink-item">Cardelli-Clayton-Mathis CCM extinction law</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
  </ul>
</div>

