---
layout: "default"
title: "Fundamental plane of ellipticals"
---
{% raw %}
# fundamental plane of ellipticals

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the relation

elliptical galaxies live on a thin two-dimensional surface in the three-dimensional space of $(\log R_e, \log \sigma_o, \log \langle I \rangle_e)$:

$$\boxed{\,R_e \propto \sigma_o^{1.4}\, \langle I \rangle_e^{-0.9}\,}$$

where:

- $R_e$ = effective (half-light) radius
- $\sigma_o$ = central stellar velocity dispersion
- $\langle I \rangle_e$ = mean surface brightness within $R_e$

the scatter perpendicular to the plane is $\sim 0.07$ dex in $R_e$. it is one of the tightest scaling relations in extragalactic astronomy.

## why it exists (the virial argument)

ellipticals are pressure-supported equilibrium systems. virial theorem in homologous form:

$$M \propto \sigma^2\, R / G$$

combine with the definition of mean surface brightness, $L \propto \langle I \rangle_e R_e^2$, and the mass-to-light ratio $\Upsilon = M/L$:

$$R_e \propto \sigma^2\, \langle I \rangle_e^{-1}\, \Upsilon^{-1}$$

if $\Upsilon$ were constant, the exponents would be $(2, -1)$. observed exponents are $(1.4, -0.9)$. the **tilt** of the FP from the virial expectation is the famous $\Upsilon$ trend: $\Upsilon \propto M^{0.2}$, more massive ellipticals have larger mass-to-light. this likely reflects a combination of stellar population (slightly older / more metal rich at high mass) and IMF variation.

## what it gives us

three uses:

1. **distance indicator**: with $\sigma_o$ and $\langle I \rangle_e$ measured, the FP gives $R_e$ in physical units. comparing to angular size gives $d_A$. this was used as a $H_0$ probe (e.g. Jorgensen 1996).
2. **structural diagnostic**: deviations from the FP point to recent merger remnants (slightly above) or mass-segregated dwarfs (off entirely).
3. **scaling-relations sanity check**: any galaxy formation model must reproduce the FP slope and tilt.

## related projections

- **Faber-Jackson** ($L \propto \sigma^4$): a 2D projection of the FP, dropping $\langle I \rangle_e$.
- **Kormendy relation** ($\mu_e \propto \log R_e$): another 2D projection.

## connections

- size-luminosity context: [Galaxy size-luminosity relation](./Galaxy%20size-luminosity%20relation.html)
- spirals' analogue: [Tully-Fisher relation](./Tully-Fisher%20relation.html)
- gas physics analogue: [Schmidt-Kennicutt law](./Schmidt-Kennicutt%20law.html)
- BH analogue: [Magorrian relation](./Magorrian%20relation.html)
- main star-formation analogue: [Galaxy main sequence of star formation](./Galaxy%20main%20sequence%20of%20star%20formation.html)

## key references

- Djorgovski & Davis 1987, Dressler et al. 1987 (the discovery papers)
- Bender, Burstein, Faber 1992 ($\kappa$-space view)
- Jorgensen, Franx, Kjaergaard 1996 (Coma cluster FP)

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_dist-43.png](../../assets/images/obs_dist-43.png)
*Faber-Jackson relation: L proportional to sigma^4 for elliptical galaxies.*

![obs_dist-44.png](../../assets/images/obs_dist-44.png)
*Fundamental Plane: log R_e = alpha log sigma + beta log <I>_e + gamma.*

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_srs-04.png](../../assets/images/gal_srs-04.png)
*The Fundamental Plane (Djorgovski & Davis 1987; Dressler et al. 1987).*

![gal_srs-05.png](../../assets/images/gal_srs-05.png)
*Three-dimensional parameter space: log R_e = a * log sigma_0 + b * log <I>_e + c.*

![gal_srs-06.png](../../assets/images/gal_srs-06.png)
*Observed coefficients: a ~ 1.2-1.4, b ~ -0.8 to -0.9 (tilt of the Fundamental Plane).*

![gal_srs-07.png](../../assets/images/gal_srs-07.png)
*Tilt explanation: systematic variation of stellar M/L with galaxy mass (M/L proportional to M^0.2) and non-homology.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_srs-16.png](../../assets/images/gal_srs-16.png)

![gal_srs-17.png](../../assets/images/gal_srs-17.png)

![gal_srs-18.png](../../assets/images/gal_srs-18.png)

![gal_srs-19.png](../../assets/images/gal_srs-19.png)

![gal_srs-20.png](../../assets/images/gal_srs-20.png)

![gal_srs-21.png](../../assets/images/gal_srs-21.png)

![gal_srs-22.png](../../assets/images/gal_srs-22.png)

![gal_srs-23.png](../../assets/images/gal_srs-23.png)

![gal_srs-24.png](../../assets/images/gal_srs-24.png)

![gal_srs-25.png](../../assets/images/gal_srs-25.png)

![gal_srs-26.png](../../assets/images/gal_srs-26.png)

![gal_srs-27.png](../../assets/images/gal_srs-27.png)

![gal_srs-28.png](../../assets/images/gal_srs-28.png)

![gal_srs-29.png](../../assets/images/gal_srs-29.png)

![gal_srs-30.png](../../assets/images/gal_srs-30.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (14)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Faber-Jackson%20relation.html" class="backlink-item">Faber-Jackson relation</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20main%20sequence%20of%20star%20formation.html" class="backlink-item">Galaxy main sequence of star formation</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20size-luminosity%20relation.html" class="backlink-item">Galaxy size-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="./Kormendy%20relation.html" class="backlink-item">Kormendy relation</a></li>
    <li class="backlink-item-wrap"><a href="./LOSVD.html" class="backlink-item">LOSVD</a></li>
    <li class="backlink-item-wrap"><a href="./Magorrian%20relation.html" class="backlink-item">Magorrian relation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Astrophysics_MOC.html" class="backlink-item">Observational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Peculiar%20velocities%20of%20galaxies%20and%20structures.html" class="backlink-item">Peculiar velocities of galaxies and structures</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20kinematics%20measurements.html" class="backlink-item">Stellar kinematics measurements</a></li>
    <li class="backlink-item-wrap"><a href="./Tully-Fisher%20relation.html" class="backlink-item">Tully-Fisher relation</a></li>
    <li class="backlink-item-wrap"><a href="./Velocity%20dispersion%20from%20line%20width.html" class="backlink-item">Velocity dispersion from line width</a></li>
  </ul>
</div>
