---
layout: "default"
title: "Galaxy morphology vs physical properties"
---
{% raw %}
while Edwin Hubble's classification was defined purely on photographic appearance (morphology), extensive quantitative sky surveys (notably the Sloan Digital Sky Survey, SDSS) have proven that a galaxy's morphological type correlates tightly with its underlying **fundamental physical properties**: color, stellar population age, cold gas content, star formation rate, kinematics, and internal dynamics.

![galaxies-17.png](../../assets/images/galaxies-17.png)

---

## the bimodal color distribution: Red Sequence vs Blue Cloud

when hundreds of thousands of galaxies are plotted on a Color-Magnitude Diagram (e.g. optical color $u - r$ or $g - r$ versus absolute magnitude $M_r$), the galaxy population splits cleanly into two distinct bimodalities:

![galaxies-18.png](../../assets/images/galaxies-18.png)

1. **the Red Sequence (Sequenza Rossa)**:
   - narrow, tightly bounded horizontal band of red galaxies ($u - r \gtrsim 2.2$).
   - consists almost exclusively of **early-type galaxies (Ellipticals and S0s)**.
   - **physical state**: "quenched" / passive galaxies; cold gas exhausted or expelled by feedback; negligible star formation; light dominated by old ($> 8-10$ Gyr), metal-rich K and M giants.
   - exhibit negligible internal color gradients.
2. **the Blue Cloud (Nube Blu)**:
   - broad, diffuse distribution of blue galaxies ($u - r \lesssim 1.8$).
   - consists predominantly of **late-type galaxies (Spirals and Irregulars)**.
   - **physical state**: active star formation; rich in cold molecular and atomic gas; light dominated by young, massive, blue O and B stars.
   - exhibit strong negative color gradients (bluer in the outer disk where star formation is active, redder in the old central bulge).
3. **the Green Valley (Valle Verde)**:
   - the underpopulated transition region between the Blue Cloud and Red Sequence.
   - populated by galaxies in the process of **quenching**—shutting down star formation due to gas exhaustion, AGN feedback (supermassive black hole jets), or environmental ram-pressure stripping in clusters.

![galaxies-19.png](../../assets/images/galaxies-19.png)

---

## dynamics: dispersion-supported vs rotation-supported systems

the internal kinematics of galaxies reflect two fundamentally different mechanisms of gravitational support:

![galaxies-20.png](../../assets/images/galaxies-20.png)

### 1. Elliptical Galaxies: Pressure / Dispersion Support
in elliptical galaxies, the inward pull of gravity is balanced by the **random, chaotic motions of stars**:
- parameterized by the central **stellar velocity dispersion** $\sigma$ (typically $\sigma \sim 100 - 350$ km/s).
- ordered rotational velocity $V$ is small compared to random dispersion:
  $$\boxed{\, \frac{V}{\sigma} < 1 \,}$$
- the 3D shape of giant ellipticals is not flattened by rotation, but by anisotropic velocity dispersion tensors ($\sigma_x \neq \sigma_y \neq \sigma_z$), producing triaxial ellipsoidal figures.
- **scaling relation: the Faber-Jackson Relation (1976)**:
  $$\boxed{\, L \propto \sigma^4 \,}$$
  (extended to the two-dimensional **Fundamental Plane**: $\log R_e = a \log \sigma + b \mu_e + c$, expressing the Virial Theorem for self-gravitating stellar systems).

![galaxies-21.png](../../assets/images/galaxies-21.png)

---

### 2. Spiral Galaxies: Rotational Support
in spiral galaxies, stars and gas orbit in an organized, thin disk:
- inward gravitational force is balanced by centrifugal acceleration from rapid **ordered rotation**:
  $$\frac{V^2(R)}{R} = \frac{G M(R)}{R^2}$$
- ordered rotation velocity ($V_{\text{rot}} \approx 150 - 300$ km/s) vastly exceeds the small random velocity dispersion of disk stars ($\sigma_z \sim 15 - 30$ km/s):
  $$\boxed{\, \frac{V_{\text{rot}}}{\sigma} \gg 1 \quad (\sim 10) \,}$$

![galaxies-22.png](../../assets/images/galaxies-22.png)

![galaxies-23.png](../../assets/images/galaxies-23.png)

![galaxies-24.png](../../assets/images/galaxies-24.png)

- **scaling relation: the Tully-Fisher Relation (1977)**:
  for spiral galaxies, total luminosity $L$ correlates tightly with maximum circular rotation speed $V_{\text{max}}$ (measured from 21 cm HI line profile width $W_{20}$):
  $$\boxed{\, L \propto V_{\text{max}}^4 \,}$$
  in magnitudes: $M = -10 \log_{10} V_{\text{max}} + \text{const}$. this provides a powerful secondary distance indicator out to $> 100$ Mpc.

---

## summary of physical trends along the Hubble sequence

![galaxies-25.png](../../assets/images/galaxies-25.png)

moving along the sequence from **Ellipticals (E0) $\to$ Lenticulars (S0) $\to$ Early Spirals (Sa) $\to$ Late Spirals (Sc) $\to$ Irregulars (Irr)**:
1. **Bulge-to-disk ratio ($B/T$)**: decreases monotonically from $1.0$ (pure spheroid) to $0$ (pure disk).
2. **Cold gas fraction ($M_{\text{gas}} / M_*$)**: increases from $< 1\%$ in ellipticals to $> 50\%$ in late-type dwarfs.
3. **Specific Star Formation Rate ($	ext{sSFR} \equiv \text{SFR}/M_*$)**: increases by over two orders of magnitude.
4. **Mean stellar age**: decreases from $> 10$ Gyr to $< 2-3$ Gyr.
5. **Kinematic support**: transitions from pressure support ($V/\sigma < 1$) to rotational support ($V/\sigma \gg 1$).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Galaxies in the local universe](./Galaxies%20in%20the%20local%20universe.html)
- [Hubble morphological sequence](./Hubble%20morphological%20sequence.html)
- [Dark matter on galactic scales](./Dark%20matter%20on%20galactic%20scales.html)
- [Spectral energy distributions](./Spectral%20energy%20distributions.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![strateva2001_concentration.png](../../assets/images/strateva2001_concentration.png)
*Concentration index C = r_90 / r_50 separating early vs late types (Strateva et al. 2001).*

![gal_morph-08.png](../../assets/images/gal_morph-08.png)
*Correlation between morphology and physical properties: color, gas content, star formation rate, stellar kinematics.*

![gal_morph-09.png](../../assets/images/gal_morph-09.png)
*Early-type galaxies: pressure-supported, hot stellar systems, low angular momentum.*

![gal_morph-10.png](../../assets/images/gal_morph-10.png)
*Late-type galaxies: rotationally supported, cold stellar and gas disks, high angular momentum.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_morph-17.png](../../assets/images/gal_morph-17.png)

![gal_morph-18.png](../../assets/images/gal_morph-18.png)

![gal_morph-19.png](../../assets/images/gal_morph-19.png)

![gal_morph-20.png](../../assets/images/gal_morph-20.png)

![gal_morph-21.png](../../assets/images/gal_morph-21.png)

![gal_morph-22.png](../../assets/images/gal_morph-22.png)

![gal_morph-23.png](../../assets/images/gal_morph-23.png)

![gal_morph-24.png](../../assets/images/gal_morph-24.png)

![gal_morph-25.png](../../assets/images/gal_morph-25.png)

![gal_morph-26.png](../../assets/images/gal_morph-26.png)

![gal_morph-27.png](../../assets/images/gal_morph-27.png)

![gal_morph-28.png](../../assets/images/gal_morph-28.png)

![gal_morph-29.png](../../assets/images/gal_morph-29.png)

![gal_morph-30.png](../../assets/images/gal_morph-30.png)

![gal_disk-19.png](../../assets/images/gal_disk-19.png)

![gal_disk-20.png](../../assets/images/gal_disk-20.png)

![gal_disk-21.png](../../assets/images/gal_disk-21.png)

![gal_disk-22.png](../../assets/images/gal_disk-22.png)

![gal_disk-23.png](../../assets/images/gal_disk-23.png)

![gal_disk-24.png](../../assets/images/gal_disk-24.png)

![gal_disk-25.png](../../assets/images/gal_disk-25.png)

![gal_disk-26.png](../../assets/images/gal_disk-26.png)

![gal_disk-27.png](../../assets/images/gal_disk-27.png)

![gal_disk-28.png](../../assets/images/gal_disk-28.png)

![gal_disk-29.png](../../assets/images/gal_disk-29.png)

![gal_disk-30.png](../../assets/images/gal_disk-30.png)

![gal_disk-31.png](../../assets/images/gal_disk-31.png)

![gal_disk-32.png](../../assets/images/gal_disk-32.png)

![gal_disk-33.png](../../assets/images/gal_disk-33.png)

![gal_disk-34.png](../../assets/images/gal_disk-34.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./CAS%20galaxy%20classification.html" class="backlink-item">CAS galaxy classification</a></li>
    <li class="backlink-item-wrap"><a href="./Dark%20matter%20on%20galactic%20scales.html" class="backlink-item">Dark matter on galactic scales</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxies%20in%20the%20local%20universe.html" class="backlink-item">Galaxies in the local universe</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20clusters%20and%20overview%20of%20evolution.html" class="backlink-item">Galaxy clusters and overview of evolution</a></li>
    <li class="backlink-item-wrap"><a href="./Hubble%20morphological%20sequence.html" class="backlink-item">Hubble morphological sequence</a></li>
    <li class="backlink-item-wrap"><a href="./Non-parametric%20galaxy%20morphology%20metrics.html" class="backlink-item">Non-parametric galaxy morphology metrics</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Spectral%20energy%20distributions.html" class="backlink-item">Spectral energy distributions</a></li>
  </ul>
</div>
