---
layout: "default"
title: "Single stellar population SSP"
name: "Single stellar population SSP"
description: "The fundamental building block of stellar population synthesis, defined by an instantaneous burst of coeval stars sharing initial chemical composition and evolving along isochrones."
---
{% raw %}
a **single stellar population (SSP)** is an idealized assembly of coeval stars formed instantaneously at $t = 0$ from gas of uniform chemical composition. It represents the elementary "basis function" of **stellar population synthesis (SPS)**: any complex star formation history in an unresolved galaxy can be synthesized by integrating a linear combination of SSPs over time and metallicity.

---

### physical definition

an SSP is governed by three fundamental parameters:
1. **age** $\tau$: the elapsed time since the star formation burst.
2. **chemical composition**: initial metallicity $Z$ (or $[\mathrm{Fe}/\mathrm{H}]$ and $[\alpha/\mathrm{Fe}]$), helium abundance $Y$.
3. **initial mass function (IMF)**: $\xi(M) = dN/dM$, specifying the birth distribution of stellar masses.

once these parameters are fixed, the subsequent evolution of the population is uniquely determined by stellar evolution along **isochrones** in the Hertzsprung-Russell diagram $(T_{\rm eff}, \log g, L_{\rm bol})$.

---

### mathematical construction

the monochromatic luminosity of an SSP of age $\tau$ and initial formed mass $M_0$ is given by integrating over all stars that remain alive at that age:

$$L_\lambda^{\rm SSP}(\tau, Z) = M_0 \int_{M_{\rm min}}^{M_{\rm max}(\tau)} \xi(M)\, f_\lambda(M, \tau, Z)\, dM + L_{\lambda, \rm post-MS}^{\rm SSP}(\tau, Z)$$

where:
- $f_\lambda(M, \tau, Z)$ is the spectral energy distribution of an individual star of initial mass $M$ at evolutionary age $\tau$.
- $M_{\rm min} \approx 0.08\,M_\odot$ is the hydrogen-burning limit.
- $M_{\rm max}(\tau)$ is the **turn-off mass** ($M_{\rm TO} \approx (t_{\rm MS} / 10\,{\rm Gyr})^{-0.4}\,M_\odot$), above which stars have completed their main-sequence lifespans.
- $L_{\lambda, \rm post-MS}^{\rm SSP}$ integrates luminous post-main sequence evolutionary phases (RGB, Red Clump / horizontal branch, AGB, TP-AGB, and white dwarfs).

---

### stellar mass loss and return fraction

stars do not retain their initial birth mass. High-mass stars explode as core-collapse supernovae, and intermediate-mass stars expel their envelopes during the AGB phase, returning processed gas to the interstellar medium (ISM).

the surviving stellar mass $M_*(\tau)$ at age $\tau$ is:

$$M_*(\tau) = M_0 \left[ 1 - R(\tau) \right]$$

where $R(\tau)$ is the **returned mass fraction**:
- for a standard Chabrier (2003) or Kroupa (2001) IMF, $R(\tau) \approx 0.30$ at $\tau = 100$ Myr, reaching $R(\tau) \approx 0.40\text{--}0.45$ by $\tau = 10$ Gyr.
- for a Salpeter (1955) IMF with its excess of low-mass stars, $R(\tau) \approx 0.28\text{--}0.32$ at 10 Gyr.
- accounting for $R(\tau)$ is essential when distinguishing between **formed stellar mass** $M_{\rm form} \equiv \int \psi(t) dt$ and **current surviving stellar mass** $M_*$.

---

### spectral evolution across cosmic time

as an SSP ages, the turn-off moves toward lower masses, causing the integrated light to undergo severe dimming and progressive reddening:

| age $\tau$ | turn-off mass $M_{\rm TO}$ | dominant luminous phase | key spectral diagnostics | representative astrophysical object |
|---|---|---|---|---|
| $1\text{--}5$ Myr | $\sim 40\text{--}60\,M_\odot$ | O and early B dwarfs / supergiants | Intense Lyman continuum ($h\nu \ge 13.6$ eV), P-Cygni UV lines ($\mathrm{C\,IV}$, $\mathrm{Si\,IV}$), flat UV continuum | Young H II regions, intense starbursts |
| $10\text{--}50$ Myr | $\sim 8\text{--}15\,M_\odot$ | Late B and early A stars, red supergiants (RSG) | Vanishing ionizing flux, optical metal lines emerge, RSG NIR molecular bands | Young open clusters, post-starburst regions |
| $100\text{--}800$ Myr | $\sim 2\text{--}5\,M_\odot$ | A-type main-sequence stars | **Balmer break** at $3646$ Å reaches maximum strength; deep Balmer absorption lines ($\mathrm{H}\delta, \mathrm{H}\gamma$) | "E+A" / post-starburst galaxies |
| $1\text{--}2$ Gyr | $\sim 1.5\text{--}2\,M_\odot$ | Intermediate-mass AGB / **TP-AGB** | Strong NIR continuum peak ($1.6\,\mu\mathrm{m}$ $H$-band bump), carbon-star molecular features | Intermediate-age Magellanic Cloud clusters |
| $> 3$ Gyr | $\le 1.1\,M_\odot$ | Red giant branch (RGB), Horizontal branch, G/K dwarfs | **$4000$ Å break** ($D_n4000 \gtrsim 1.7$), deep metal absorption ($\mathrm{Ca\,II\ H+K}$, $\mathrm{Mg}_b$, $\mathrm{Fe5270}$) | Globular clusters, giant elliptical galaxies |

---

### evolution of mass-to-light ratio $\Upsilon$

the bolometric and bandpass luminosity of an SSP drops sharply with age, whereas mass decreases only modestly:

$$\Upsilon_\lambda(\tau) \equiv \frac{M_*(\tau)}{L_\lambda(\tau)}$$

- **optical bands ($U, B, V$)**: $\Upsilon_V$ increases by more than a factor of $\sim 100$ between $10$ Myr and $10$ Gyr ($\Upsilon_V \propto \tau^{0.7\text{--}0.9}$). Optical light is completely dominated by the youngest stellar generation present.
- **near-infrared ($K$-band, $2.2\,\mu\mathrm{m}$)**: in old populations ($\tau \gtrsim 2$ Gyr), $L_K$ is dominated by the light of low-mass red giant branch stars, whose luminosity density tracks the total surviving stellar mass. $\Upsilon_K$ varies by less than $\sim 30\%$ over the age range $2\text{--}10$ Gyr, making NIR photometry the most robust tracer of galaxy stellar mass.

---

### composite stellar populations (CSPs)

real galaxies undergo extended star formation histories $\psi(t)$ and progressive chemical enrichment $Z(t)$. The integrated composite SED is computed as a continuous convolution over the single stellar population library:

$$L_\lambda^{\rm CSP}(t) = \int_0^t \psi(t - \tau)\,L_\lambda^{\rm SSP}(\tau, Z(\tau))\,d\tau$$

---

## see also

- [Observational_Astrophysics_MOC](../../04_Atlas/Observational_Astrophysics_MOC.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [Stellar population synthesis](./Stellar%20population%20synthesis.html)
- [SPS code families](./SPS%20code%20families.html)
- [Initial mass function](./Initial%20mass%20function.html)
- [Stellar populations I II III](./Stellar%20populations%20I%20II%20III.html)
- [Color-magnitude diagrams of clusters](./Color-magnitude%20diagrams%20of%20clusters.html)
- [Cluster ages from CMD turnoff](./Cluster%20ages%20from%20CMD%20turnoff.html)
- [Lick indices](./Lick%20indices.html)
- [Age-metallicity degeneracy](./Age-metallicity%20degeneracy.html)
- [Star formation history of a population](./Star%20formation%20history%20of%20a%20population.html)
- [Mass-luminosity relation](./Mass-luminosity%20relation.html)
- [Stellar mass estimation in unresolved populations](./Stellar%20mass%20estimation%20in%20unresolved%20populations.html)

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_sps-13.png](../../assets/images/obs_sps-13.png)
*Simple Stellar Population (SSP): single coeval generation of stars with uniform metallicity.*

![obs_sps-14.png](../../assets/images/obs_sps-14.png)
*Mathematical SSP definition: L_lambda,SSP(t, Z) = int_M_min^M_max(t) L_lambda(M, t, Z) * xi(M) dM.*

![obs_sps-15.png](../../assets/images/obs_sps-15.png)
*Three fundamental pillars of an SSP model: Isochrone grid, Stellar spectral library, IMF.*

![obs_sps-16.png](../../assets/images/obs_sps-16.png)
*Theoretical stellar atmospheres (Kurucz ATLAS9, MARCS) vs empirical libraries (MILES, ELODIE).*

![obs_sps-17.png](../../assets/images/obs_sps-17.png)
*Empirical library advantages (real stellar physics, accurate line profiles) and limitations (solar neighborhood bias).*

![obs_sps-18.png](../../assets/images/obs_sps-18.png)
*Evolution of SSP spectrum from 1 Myr to 14 Gyr.*
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (38)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Age%20estimation%20in%20unresolved%20populations.html" class="backlink-item">Age estimation in unresolved populations</a></li>
    <li class="backlink-item-wrap"><a href="./Age-metallicity%20degeneracy.html" class="backlink-item">Age-metallicity degeneracy</a></li>
    <li class="backlink-item-wrap"><a href="./Age-metallicity%20relation%20of%20Galactic%20GCs.html" class="backlink-item">Age-metallicity relation of Galactic GCs</a></li>
    <li class="backlink-item-wrap"><a href="./Asymptotic%20giant%20branch%20AGB.html" class="backlink-item">Asymptotic giant branch AGB</a></li>
    <li class="backlink-item-wrap"><a href="./Binary%20stars%20in%20CMD.html" class="backlink-item">Binary stars in CMD</a></li>
    <li class="backlink-item-wrap"><a href="./Blue%20stragglers%20in%20star%20clusters.html" class="backlink-item">Blue stragglers in star clusters</a></li>
    <li class="backlink-item-wrap"><a href="./CMD%20constraints%20on%20disk%20vs%20halo%20populations.html" class="backlink-item">CMD constraints on disk vs halo populations</a></li>
    <li class="backlink-item-wrap"><a href="./Calcium%20and%20CaII%20H%2BK.html" class="backlink-item">Calcium and CaII H+K</a></li>
    <li class="backlink-item-wrap"><a href="./Calcium%20population%20vs%20T.html" class="backlink-item">Calcium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="./Dust%20attenuation%20in%20synthetic%20populations.html" class="backlink-item">Dust attenuation in synthetic populations</a></li>
    <li class="backlink-item-wrap"><a href="./Early-type%20galaxy%20stellar%20populations.html" class="backlink-item">Early-type galaxy stellar populations</a></li>
    <li class="backlink-item-wrap"><a href="./Extended%20main%20sequence%20turn-off%20eMSTO.html" class="backlink-item">Extended main sequence turn-off eMSTO</a></li>
    <li class="backlink-item-wrap"><a href="./Extragalactic%20star%20clusters.html" class="backlink-item">Extragalactic star clusters</a></li>
    <li class="backlink-item-wrap"><a href="./Globular%20clusters%20as%20SSP%20laboratories.html" class="backlink-item">Globular clusters as SSP laboratories</a></li>
    <li class="backlink-item-wrap"><a href="./H-alpha%20SFR%20tracer.html" class="backlink-item">H-alpha SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="./IMF%20from%20cluster%20luminosity%20functions.html" class="backlink-item">IMF from cluster luminosity functions</a></li>
    <li class="backlink-item-wrap"><a href="./Initial%20mass%20function.html" class="backlink-item">Initial mass function</a></li>
    <li class="backlink-item-wrap"><a href="./Initial%20vs%20present-day%20mass%20function.html" class="backlink-item">Initial vs present-day mass function</a></li>
    <li class="backlink-item-wrap"><a href="./Interstellar%20reddening%20and%20the%20reddening%20vector.html" class="backlink-item">Interstellar reddening and the reddening vector</a></li>
    <li class="backlink-item-wrap"><a href="./Isochrones%20and%20isochrone%20fitting.html" class="backlink-item">Isochrones and isochrone fitting</a></li>
    <li class="backlink-item-wrap"><a href="./Lick%20indices.html" class="backlink-item">Lick indices</a></li>
    <li class="backlink-item-wrap"><a href="./Mass-luminosity%20relation.html" class="backlink-item">Mass-luminosity relation</a></li>
    <li class="backlink-item-wrap"><a href="./Metallicity%20and%20chemical%20evolution.html" class="backlink-item">Metallicity and chemical evolution</a></li>
    <li class="backlink-item-wrap"><a href="./Multiple%20populations%20in%20GCs%20discovery.html" class="backlink-item">Multiple populations in GCs discovery</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Astrophysics_MOC.html" class="backlink-item">Observational_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Open%20clusters%20as%20young%20SSP%20laboratories.html" class="backlink-item">Open clusters as young SSP laboratories</a></li>
    <li class="backlink-item-wrap"><a href="./Photometric%20redshifts.html" class="backlink-item">Photometric redshifts</a></li>
    <li class="backlink-item-wrap"><a href="./Resolved%20vs%20unresolved%20stellar%20populations.html" class="backlink-item">Resolved vs unresolved stellar populations</a></li>
    <li class="backlink-item-wrap"><a href="./SED%20fitting%20basics.html" class="backlink-item">SED fitting basics</a></li>
    <li class="backlink-item-wrap"><a href="./SPS%20code%20families.html" class="backlink-item">SPS code families</a></li>
    <li class="backlink-item-wrap"><a href="./Star%20cluster%20types.html" class="backlink-item">Star cluster types</a></li>
    <li class="backlink-item-wrap"><a href="./Star%20formation%20history%20of%20a%20population.html" class="backlink-item">Star formation history of a population</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20evolutionary%20phases%20on%20the%20CMD.html" class="backlink-item">Stellar evolutionary phases on the CMD</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20mass%20estimation%20in%20unresolved%20populations.html" class="backlink-item">Stellar mass estimation in unresolved populations</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20mass%20function%20xi%28M%29.html" class="backlink-item">Stellar mass function xi(M)</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20population%20synthesis.html" class="backlink-item">Stellar population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Thermal%20continuum%20from%20stellar%20photosphere.html" class="backlink-item">Thermal continuum from stellar photosphere</a></li>
  </ul>
</div>
