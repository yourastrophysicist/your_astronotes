---
layout: "default"
title: "Luminosity function definition"
---
{% raw %}
# luminosity function definition

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## what it is

the **galaxy luminosity function (LF)** $\phi(L)$ is the number of galaxies per unit luminosity per unit comoving volume:

$$dN = \phi(L)\, dL\, dV$$

units of $\phi$: $\text{Mpc}^{-3}\, L_\odot^{-1}$, or in magnitudes $\text{Mpc}^{-3}\, \text{mag}^{-1}$.

## why it is the central object

the LF is what every galaxy survey wants to measure. all the other 1-D statistics are projections or integrals of it:

- $N(L) = \int \phi(L)\, dL\, dV$ across a survey volume gives the [Galaxy number counts N(m)](./Galaxy%20number%20counts%20N%28m%29.html)
- $\rho_L = \int L\, \phi(L)\, dL$ is the **luminosity density**, the total light per unit volume
- $\rho_{SFR} = \int (\text{SFR}/L)\, L\, \phi(L)\, dL$ is the [Cosmic star formation history](./Cosmic%20star%20formation%20history.html)
- $\rho_* = \int (M_*/L)\, L\, \phi(L)\, dL$ is the cosmic stellar mass density

so once you have $\phi(L, z)$ in slices of $z$, you have most of extragalactic statistics.

## the three things you specify

every LF measurement specifies:

1. **band**: $\phi_K(L)$ vs $\phi_B(L)$ vs $\phi_{1500\,\text{Å}}(L)$ are very different objects. K-band traces stellar mass, FUV traces unobscured SFR, IR traces obscured SFR.
2. **redshift slice**: $\phi(L, z_1 < z < z_2)$. the LF evolves.
3. **sample**: split by morphology, color, environment, or sample-wide. each gives a different LF (see [LF by morphology and SED](./LF%20by%20morphology%20and%20SED.html)).

## the magnitude form

since absolute magnitude is the working unit in the optical:

$$\phi(M)\, dM = \phi(L)\, dL$$

with $M = -2.5 \log_{10}(L / L_0)$. so $dL/dM = -0.4 \ln 10\, L$, and

$$\phi(M) = 0.4 \ln 10 \cdot L \cdot \phi(L)$$

(absolute value taken; the minus sign just orients $M$ vs $L$).

## the normalization

$\int \phi(L)\, dL$ is the **total galaxy number density**. this integral is *divergent at the faint end* if the LF has $\alpha < -1$ (which most measured LFs do at low $L$). that means *the integrated number is dominated by the faintest galaxies you can detect*, and the answer depends on your low-$L$ cutoff.

luminosity density $\int L\, \phi(L)\, dL$ converges if the slope is shallower than $-2$ at the faint end (universally true).

## connections

- the parametric form: [Schechter function](./Schechter%20function.html)
- estimator: [1Vmax estimator](./1Vmax%20estimator.html)
- mass version: [Stellar mass function](./Stellar%20mass%20function.html)
- integrals over $z$: [Cosmic star formation history](./Cosmic%20star%20formation%20history.html)

## key references

- Schechter 1976, ApJ 203, 297
- Felten 1977 (LF formalism)
- Binggeli, Sandage, Tammann 1988 ARAA

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_lf1-01.png](../../assets/images/gal_lf1-01.png)
*Lecture 1: The Galaxy Luminosity Function (Prof. Alessandro Pizzella).*

![gal_lf1-02.png](../../assets/images/gal_lf1-02.png)
*Luminosity function definition: Phi(L) dL = number density of galaxies in interval [L, L+dL].*

![gal_lf1-03.png](../../assets/images/gal_lf1-03.png)
*Differential vs cumulative luminosity function.*

![gal_lf1-04.png](../../assets/images/gal_lf1-04.png)
*Volume element and selection effects in magnitude-limited surveys (V_max method).*

![gal_lf1-05.png](../../assets/images/gal_lf1-05.png)
*Malmquist bias: intrinsically brighter galaxies detected over much larger cosmic volumes.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_lf1-06.png](../../assets/images/gal_lf1-06.png)

![gal_lf1-07.png](../../assets/images/gal_lf1-07.png)

![gal_lf1-08.png](../../assets/images/gal_lf1-08.png)

![gal_lf1-09.png](../../assets/images/gal_lf1-09.png)

![gal_lf1-10.png](../../assets/images/gal_lf1-10.png)

![gal_lf1-11.png](../../assets/images/gal_lf1-11.png)

![gal_lf1-12.png](../../assets/images/gal_lf1-12.png)

![gal_lf1-13.png](../../assets/images/gal_lf1-13.png)

![gal_lf1-14.png](../../assets/images/gal_lf1-14.png)

![gal_lf1-15.png](../../assets/images/gal_lf1-15.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./1Vmax%20estimator.html" class="backlink-item">1Vmax estimator</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20color%2C%20density%20and%20morphology.html" class="backlink-item">Galaxy color, density and morphology</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Redshift%20distribution%20of%20flux-limited%20samples.html" class="backlink-item">Redshift distribution of flux-limited samples</a></li>
    <li class="backlink-item-wrap"><a href="./Schechter%20function.html" class="backlink-item">Schechter function</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20mass%20function.html" class="backlink-item">Stellar mass function</a></li>
  </ul>
</div>
