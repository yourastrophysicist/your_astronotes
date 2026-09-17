---
layout: "default"
title: "Schmidt-Kennicutt law"
---
{% raw %}
# schmidt-kennicutt law

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the relation

local star formation rate surface density is a power law in gas surface density:

$$\Sigma_{SFR} = A\, \Sigma_{\text{gas}}^N$$

with $N \approx 1.4$ (Kennicutt 1998), $A$ depending on units. above a threshold $\Sigma_{\text{gas, thresh}} \sim 10\, M_\odot\, \text{pc}^{-2}$ (atomic + molecular), star formation switches on; below, it is heavily suppressed.

equivalently, the SFR per unit gas mass is $\sim$ constant per *free-fall time* of the gas, so $\Sigma_{SFR} \propto \Sigma_{\text{gas}}/t_{\text{ff}}$. since $t_{\text{ff}} \propto \rho^{-1/2} \propto \Sigma_{\text{gas}}^{-1/2}$ in self-gravitating disks, this gives $\Sigma_{SFR} \propto \Sigma_{\text{gas}}^{1.5}$, close to the observed slope.

## who measured it

- **Schmidt 1959**: $\Sigma_{SFR} \propto \rho^N$ with $N \approx 2$, from young stars in the milky way.
- **Kennicutt 1998**, ApJ 498, 541: galaxy-averaged version using H$\alpha$ for SFR and CO + HI for gas, sample of nearby spirals + circumnuclear starbursts. fixed slope at $1.4$.
- **Bigiel et al. 2008**: spatially resolved, $\sim$ kpc scales. found $N \approx 1$ on molecular gas alone, $N$ much steeper if HI-dominated.

## why it matters

it sets the local conversion of gas to stars, which is the input to every galaxy formation model. it is the closest thing to a "fundamental law" of star formation, and it works across $\sim 5$ orders of magnitude in $\Sigma_{\text{gas}}$ (from outer disks to ULIRG starbursts).

depletion time interpretation: $t_{\text{depl}} = \Sigma_{\text{gas}}/\Sigma_{SFR} \approx 2\, \text{Gyr}$ for normal spirals, $\sim 100\,\text{Myr}$ for ULIRGs. so the law also encodes the *efficiency* of star formation per gas reservoir.

## the high-z extension

the Schmidt-Kennicutt law extends with similar slope to $z \sim 3$ (Genzel 2010, Daddi 2010), with **two sequences**:

- normal MS galaxies on the local SK relation
- starbursts (mergers, sub-mm galaxies) on a parallel sequence with $\sim 4 \times$ shorter depletion time

this matches the bimodality seen in the [Galaxy main sequence of star formation](./Galaxy%20main%20sequence%20of%20star%20formation.html).

## connections

- main-sequence picture: [Galaxy main sequence of star formation](./Galaxy%20main%20sequence%20of%20star%20formation.html)
- gas accretion / feedback: [Halo gravity suppression of galaxy formation](./Halo%20gravity%20suppression%20of%20galaxy%20formation.html)
- spirals' dynamics: [Tully-Fisher relation](./Tully-Fisher%20relation.html)
- aggregate consequence: [Cosmic star formation history](./Cosmic%20star%20formation%20history.html)

## key references

- Schmidt 1959, ApJ 129, 243 (the original)
- Kennicutt 1998, ApJ 498, 541 (the canonical galaxy-averaged version)
- Bigiel et al. 2008 (resolved Schmidt-Kennicutt)
- Kennicutt & Evans 2012 ARAA

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![kennicutt1998_SFR_Halpha.png](../../assets/images/kennicutt1998_SFR_Halpha.png)
*Star formation rate surface density vs gas surface density from Kennicutt (1998).*

![kennicutt1998_SFR_density.png](../../assets/images/kennicutt1998_SFR_density.png)
*The Kennicutt-Schmidt Law: Sigma_SFR proportional to Sigma_gas^N with N = 1.4 +/- 0.15.*

![gal_ism-01.png](../../assets/images/gal_ism-01.png)
*Lecture 10: The Interstellar Medium of Galaxies (Prof. Alessandro Pizzella).*

![gal_ism-02.png](../../assets/images/gal_ism-02.png)
*Total gas surface density Sigma_gas = Sigma_HI + Sigma_H2.*

![gal_ism-03.png](../../assets/images/gal_ism-03.png)
*Depletion timescale t_dep = Sigma_gas / Sigma_SFR ~ 1-2 Gyr in normal spirals.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_ism-04.png](../../assets/images/gal_ism-04.png)

![gal_ism-05.png](../../assets/images/gal_ism-05.png)

![gal_ism-06.png](../../assets/images/gal_ism-06.png)

![gal_ism-07.png](../../assets/images/gal_ism-07.png)

![gal_ism-08.png](../../assets/images/gal_ism-08.png)

![gal_ism-09.png](../../assets/images/gal_ism-09.png)

![gal_ism-10.png](../../assets/images/gal_ism-10.png)

![gal_ism-11.png](../../assets/images/gal_ism-11.png)

![gal_ism-12.png](../../assets/images/gal_ism-12.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Fundamental%20plane%20of%20ellipticals.html" class="backlink-item">Fundamental plane of ellipticals</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20main%20sequence%20of%20star%20formation.html" class="backlink-item">Galaxy main sequence of star formation</a></li>
    <li class="backlink-item-wrap"><a href="./Magorrian%20relation.html" class="backlink-item">Magorrian relation</a></li>
    <li class="backlink-item-wrap"><a href="./Molecular%20clouds.html" class="backlink-item">Molecular clouds</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html" class="backlink-item">Pablo_03_Star_formation_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Tully-Fisher%20relation.html" class="backlink-item">Tully-Fisher relation</a></li>
  </ul>
</div>
