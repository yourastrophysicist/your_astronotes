---
layout: "default"
title: "Tully-Fisher relation"
---
{% raw %}
# tully-fisher relation

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the relation

for spiral (rotation-supported) galaxies, the asymptotic flat-part rotation velocity $V_{\text{flat}}$ correlates tightly with the total luminosity:

$$L \propto V_{\text{flat}}^4$$

equivalently $M_B \approx -10 \log V_{\text{flat}} + \text{const}$. observed scatter is $\sim 0.3$ mag in $M_B$.

## why it exists (the virial argument)

a disk galaxy in centrifugal balance: $V^2 = G M / R$. with surface brightness $\langle I \rangle$ roughly constant across galaxies (Freeman 1970), $L \propto R^2$. so $M \propto V^2 R \propto V^2 L^{1/2}$. with $\Upsilon = M/L$ approximately constant, $L^{1/2} \propto V^2$, i.e. $L \propto V^4$.

the slope of $4$ is not magic; it is the virial scaling combined with constant surface brightness and constant $\Upsilon$. small departures from this (Freeman's law not being universal) introduce the scatter.

## the baryonic tully-fisher

if instead of luminosity you use *baryonic mass* (stars + cold gas), the relation tightens and the slope steepens to $\sim 4$ exactly (McGaugh 2000):

$$M_{\text{bar}} \propto V_{\text{flat}}^{4}$$

with sub-0.1 dex scatter. this is one of the cleanest scaling relations in galaxy physics, and it is often taken as a benchmark for $\Lambda$CDM galaxy formation models (e.g. Vogelsberger TNG 2014).

## what it is used for

1. **distance indicator**: measure $V_{\text{flat}}$ from HI line widths (Tully & Fisher 1977 used radio HI), get $L$ from the relation, compare to apparent magnitude → distance modulus → $H_0$. this gave a competitive $H_0$ throughout the 1990s (Sakai 2000).
2. **galaxy formation diagnostic**: the slope, scatter, and zero-point of TF must be reproduced by simulations.
3. **dynamical mass estimator**: $V_{\text{flat}}^2 R$ at the optical edge gives a halo dynamical mass.

## connections

- ellipticals analogue: [Fundamental plane of ellipticals](./Fundamental%20plane%20of%20ellipticals.html)
- size-luminosity context: [Galaxy size-luminosity relation](./Galaxy%20size-luminosity%20relation.html)
- relation to gas/SF: [Schmidt-Kennicutt law](./Schmidt-Kennicutt%20law.html)

## key references

- Tully & Fisher 1977, A&A 54, 661
- McGaugh 2000 (baryonic TF)
- Sakai et al. 2000 (TF as distance indicator)

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_dist-41.png](../../assets/images/obs_dist-41.png)
*Tully-Fisher relation (1977): empirical luminosity vs maximum rotation velocity for spirals.*

![obs_dist-42.png](../../assets/images/obs_dist-42.png)
*Formula: L proportional to V_max^alpha (alpha ~ 3 to 4 depending on passband, steepest in NIR/FIR).*
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (18)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Dark%20matter%20rotation%20curves.html" class="backlink-item">Dark matter rotation curves</a></li>
    <li class="backlink-item-wrap"><a href="./Faber-Jackson%20relation.html" class="backlink-item">Faber-Jackson relation</a></li>
    <li class="backlink-item-wrap"><a href="./Fundamental%20plane%20of%20ellipticals.html" class="backlink-item">Fundamental plane of ellipticals</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20main%20sequence%20of%20star%20formation.html" class="backlink-item">Galaxy main sequence of star formation</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20size-luminosity%20relation.html" class="backlink-item">Galaxy size-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="./Ionized%20gas%20kinematics.html" class="backlink-item">Ionized gas kinematics</a></li>
    <li class="backlink-item-wrap"><a href="./LOSVD.html" class="backlink-item">LOSVD</a></li>
    <li class="backlink-item-wrap"><a href="./MOND.html" class="backlink-item">MOND</a></li>
    <li class="backlink-item-wrap"><a href="./Magorrian%20relation.html" class="backlink-item">Magorrian relation</a></li>
    <li class="backlink-item-wrap"><a href="./Mass-radius%20and%20mass-velocity%20relations.html" class="backlink-item">Mass-radius and mass-velocity relations</a></li>
    <li class="backlink-item-wrap"><a href="./Modified%20gravity%20alternatives.html" class="backlink-item">Modified gravity alternatives</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Astrophysics_MOC.html" class="backlink-item">Observational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Peculiar%20velocities%20of%20galaxies%20and%20structures.html" class="backlink-item">Peculiar velocities of galaxies and structures</a></li>
    <li class="backlink-item-wrap"><a href="./Schmidt-Kennicutt%20law.html" class="backlink-item">Schmidt-Kennicutt law</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20kinematics%20measurements.html" class="backlink-item">Stellar kinematics measurements</a></li>
    <li class="backlink-item-wrap"><a href="./Velocity%20dispersion%20from%20line%20width.html" class="backlink-item">Velocity dispersion from line width</a></li>
  </ul>
</div>
