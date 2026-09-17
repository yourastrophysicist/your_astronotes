---
layout: "default"
title: "Schechter function"
---
{% raw %}
# schechter function

up: [Pablo_02_Statistical_properties_of_galaxies](../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html) · [Luminosity function definition](./Luminosity%20function%20definition.html)

## the form

Paul Schechter (1976) proposed a three-parameter parametrization of the galaxy LF that has resisted serious revision for fifty years:

$$\boxed{\,\phi(L)\, dL = \frac{\phi^*}{L^*} \left(\frac{L}{L^*}\right)^\alpha \exp\!\left(-\frac{L}{L^*}\right) dL\,}$$

three parameters:

- $\phi^*$: characteristic number density (units $\text{Mpc}^{-3}$), sets the overall normalization
- $L^*$: characteristic luminosity, the "knee" where the function transitions from a power law to an exponential cutoff
- $\alpha$: faint-end slope. for $L \ll L^*$, $\phi(L) \propto L^\alpha$. typically $-2 < \alpha < -1$.

## what each parameter does

- **bright end** ($L \gg L^*$): the exponential $e^{-L/L^*}$ kills the count. there are no galaxies with $L \gg 5 L^*$, this is observed and physical (probably AGN feedback at high mass; see [Halo gravity suppression of galaxy formation](./Halo%20gravity%20suppression%20of%20galaxy%20formation.html)).
- **knee** at $L \sim L^*$: this is where the typical "$L^*$ galaxy" lives. the milky way is roughly $L^*$.
- **faint end** ($L \ll L^*$): $\phi \propto L^\alpha$ with $\alpha < 0$, so number rises toward faint $L$. $\alpha = -1$ is "flat" in $\phi(\log L)$; $\alpha = -1.3$ is a typical optical value; UV / faint dwarf measurements give $\alpha \to -2$.

## why this works

physically, the Schechter form is what you get when you convolve the **halo mass function** (which has a Press-Schechter exponential cutoff at high mass) with a **stellar-to-halo mass ratio** that turns over at high mass (see [Stellar-to-halo mass ratio](./Stellar-to-halo%20mass%20ratio.html)). the *exponential* cutoff in $\phi(L)$ is inherited directly from the halo mass function's exponential.

this also explains why the Schechter form is universal: any LF whose underlying halo population is Press-Schechter will look approximately Schechter, with the parameters depending on the band and redshift.

## typical values, k-band, low z

Smith et al. 2009 from UKIDSS / 2MASS measured the K-band LF locally:

- $M^* = -23.19$ (Vega)
- $\alpha = -0.81$
- $\phi^* = 0.0166\, h^3\, \text{Mpc}^{-3}$

see [Schechter K-band luminosity function](./Schechter%20K-band%20luminosity%20function.html).

## limitations

a single Schechter does not always fit:

- the **faint end** in deep dwarf samples (Local Group, Virgo) often needs a steeper slope $\alpha \to -1.5$ or a separate power-law component.
- the **bright end** at high $z$ shows a power-law tail above $L^*$ (Pérez-González et al. 2005), requiring a [Double power-law modified Schechter](./Double%20power-law%20modified%20Schechter.html) form.
- splitting by morphology, color, or environment gives *different* Schechter parameters per population (see [LF by morphology and SED](./LF%20by%20morphology%20and%20SED.html)).

## connections

- the next-up working forms: [Schechter function in magnitudes](./Schechter%20function%20in%20magnitudes.html), [Integrals of the Schechter function](./Integrals%20of%20the%20Schechter%20function.html)
- estimator: [1Vmax estimator](./1Vmax%20estimator.html)
- canonical numbers: [Schechter K-band luminosity function](./Schechter%20K-band%20luminosity%20function.html)
- bright-end departures: [Double power-law modified Schechter](./Double%20power-law%20modified%20Schechter.html)
- mass version: [Stellar mass function](./Stellar%20mass%20function.html)

## key references

- Schechter 1976, ApJ 203, 297 (the original)
- Press & Schechter 1974 (the halo mass function that motivates the form)
- Smith, Loveday, Cross 2009 (K-band LF)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![blanton2003_LF_rband.png](../../assets/images/blanton2003_LF_rband.png)
*SDSS r-band galaxy luminosity function from Blanton et al. (2003) showing Schechter fit.*

![gal_lf1-06.png](../../assets/images/gal_lf1-06.png)
*Paul Schechter (1976) analytic parameterization of the galaxy luminosity function.*

![gal_lf1-07.png](../../assets/images/gal_lf1-07.png)
*Standard Schechter form: Phi(L) dL = (Phi* / L*) * (L / L*)^alpha * exp(-L / L*) dL.*

![gal_lf1-08.png](../../assets/images/gal_lf1-08.png)
*Physical meaning of parameters: Phi* (normalization), L* (characteristic turnover luminosity), alpha (faint-end slope).*

![gal_lf1-09.png](../../assets/images/gal_lf1-09.png)
*Faint-end power-law behavior for L << L* vs exponential cutoff for L >> L*.*

![gal_lf1-10.png](../../assets/images/gal_lf1-10.png)
*Universal vs environment-dependent Schechter parameters (field vs cluster).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_lf1-16.png](../../assets/images/gal_lf1-16.png)

![gal_lf1-17.png](../../assets/images/gal_lf1-17.png)

![gal_lf1-18.png](../../assets/images/gal_lf1-18.png)

![gal_lf1-19.png](../../assets/images/gal_lf1-19.png)

![gal_lf1-20.png](../../assets/images/gal_lf1-20.png)

![gal_lf1-21.png](../../assets/images/gal_lf1-21.png)

![gal_lf1-22.png](../../assets/images/gal_lf1-22.png)

![gal_lf1-23.png](../../assets/images/gal_lf1-23.png)

![gal_lf1-24.png](../../assets/images/gal_lf1-24.png)

![gal_lf1-25.png](../../assets/images/gal_lf1-25.png)

![gal_lf1-26.png](../../assets/images/gal_lf1-26.png)

![gal_lf1-27.png](../../assets/images/gal_lf1-27.png)

![gal_lf1-28.png](../../assets/images/gal_lf1-28.png)

![gal_lf1-29.png](../../assets/images/gal_lf1-29.png)

![gal_lf1-30.png](../../assets/images/gal_lf1-30.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (16)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./1Vmax%20estimator.html" class="backlink-item">1Vmax estimator</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmic%20star%20formation%20history.html" class="backlink-item">Cosmic star formation history</a></li>
    <li class="backlink-item-wrap"><a href="./Double%20power-law%20modified%20Schechter.html" class="backlink-item">Double power-law modified Schechter</a></li>
    <li class="backlink-item-wrap"><a href="./Integrals%20of%20the%20Schechter%20function.html" class="backlink-item">Integrals of the Schechter function</a></li>
    <li class="backlink-item-wrap"><a href="./LF%20by%20morphology%20and%20SED.html" class="backlink-item">LF by morphology and SED</a></li>
    <li class="backlink-item-wrap"><a href="./Luminosity%20function%20definition.html" class="backlink-item">Luminosity function definition</a></li>
    <li class="backlink-item-wrap"><a href="./Malmquist%20bias.html" class="backlink-item">Malmquist bias</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Press-Schechter%20formalism.html" class="backlink-item">Press-Schechter formalism</a></li>
    <li class="backlink-item-wrap"><a href="./Redshift%20distribution%20of%20flux-limited%20samples.html" class="backlink-item">Redshift distribution of flux-limited samples</a></li>
    <li class="backlink-item-wrap"><a href="./Schechter%20K-band%20luminosity%20function.html" class="backlink-item">Schechter K-band luminosity function</a></li>
    <li class="backlink-item-wrap"><a href="./Schechter%20function%20in%20magnitudes.html" class="backlink-item">Schechter function in magnitudes</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20mass%20function.html" class="backlink-item">Stellar mass function</a></li>
    <li class="backlink-item-wrap"><a href="./UV%20luminosity%20function.html" class="backlink-item">UV luminosity function</a></li>
  </ul>
</div>
