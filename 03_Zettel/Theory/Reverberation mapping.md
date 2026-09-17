---
layout: "default"
title: "Reverberation mapping"
---
{% raw %}
**reverberation mapping** measures the size of the **broad-line region (BLR)** of an AGN by observing the **time delay** between continuum + emission-line variations. combined with the BLR velocity from line widths, gives a **virial mass estimate** of the SMBH.

## the principle

an AGN's continuum source (the accretion disk near the SMBH) varies on timescales of days to months. the BLR clouds, illuminated by this continuum, **respond** to its variations after a **light-travel delay** $\tau = R_{BLR}/c$.

so:
- **continuum brightens** at $t_0$.
- **emission line brightens** at $t_0 + \tau$ (delay = light-crossing time of BLR).

measure $\tau$ from monitoring data, get $R_{BLR}$.

## the virial mass estimate

once $R_{BLR}$ + line FWHM ($\propto v_{BLR}$) are known:
$$M_{BH} = f\,\frac{R_{BLR}\,v_{BLR}^2}{G}$$

with $f \sim 1$ to $5$ a geometric factor depending on the BLR geometry + viewing angle (calibrated by comparing reverberation-mapped masses with stellar-dynamic masses).

so reverberation mapping gives **virial-theorem masses**: $\sigma$ + size $\to$ mass.

## the procedure

1. **monitor an AGN** at two wavelengths simultaneously: continuum (e.g. $5100$ Å, optical) + emission line (H$\beta$, H$\alpha$, or UV CIV).
2. **multi-epoch spectroscopy** + photometry over months to years.
3. **cross-correlate** continuum + emission-line light curves to find the time delay $\tau$.
4. **measure FWHM** of the broad emission line $\to v_{BLR}$.
5. **compute** $M_{BH} = f R_{BLR} v_{BLR}^2/G$.

precision: $\sim 0.4$ dex per object (factor $\sim 2.5$). dominated by uncertainty in $f$.

## the $R_{BLR}-L$ relation

reverberation mapping of $\sim 100$ AGN reveals:
$$R_{BLR} \propto L_{5100}^{0.5}$$

the **size-luminosity relation** for the BLR. brighter AGN have larger BLRs.

practical use: with this relation calibrated, you can estimate $M_{BH}$ from a **single-epoch spectrum**:
1. measure $L_{5100}$ + line FWHM.
2. infer $R_{BLR}$ from the size-luminosity relation.
3. compute $M_{BH}$.

this **single-epoch virial method** is applied to $\sim 10^5$ quasars (SDSS, SDSS-IV) for statistical SMBH mass estimates.

## the canonical AGN

reverberation-mapped AGN include:
- **NGC 4151**: nearest Seyfert 1, $M_{BH} \sim 5 \times 10^7\,M_\odot$.
- **Mrk 110, Mrk 590**: well-monitored "changing-look" AGN.
- **Arp 151, NGC 5548**: classic reverberation targets.

modern: **AGN STORM** project at HST + ground-based monitoring of NGC 5548 over months gave detailed BLR structure.

## the calibration of $f$

the geometric factor $f$ has been calibrated by:
- **comparison** with stellar-dynamic masses: factor $f \sim 4.3$ (Onken 2004).
- **modelling** specific systems with detailed BLR geometry codes (CARAMEL, MEMECHO).

modern estimates: $f \sim 4.5$ for a typical isotropic random-orbit BLR. larger uncertainty for individual systems.

## why this matters

reverberation mapping is the **basis of the SMBH mass scale** for distant AGN:
- **scaling relations** ($M_{BH}-\sigma$, Magorrian) calibrated locally with stellar dynamics + reverberation.
- **high-$z$ quasars**: only single-epoch virial estimates available; rely on the $R_{BLR}-L$ relation extrapolation.
- **demographics of SMBH growth** since cosmic noon: traced via single-epoch masses on $10^5$ quasars.

## see also

- [AGN spectroscopy](./AGN%20spectroscopy.html)
- [Magorrian relation](./Magorrian%20relation.html)
- [M sigma relation](./M%20sigma%20relation.html)
- [Stellar dynamics SMBH masses](./Stellar%20dynamics%20SMBH%20masses.html)
- [Water maser BH masses](./Water%20maser%20BH%20masses.html)
- [Galactic Center Sgr A and S-stars](interf/Galactic%20Center%20Sgr%20A%20and%20S-stars.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![peterson2004_table.png](../../assets/images/peterson2004_table.png)
*Summary table of AGN reverberation mapping measurements from Peterson et al. (2004).*

![peterson2004_RL.png](../../assets/images/peterson2004_RL.png)
*Broad-Line Region size vs optical luminosity (R_BLR - L relation) from Peterson et al. (2004).*

![bentz2009_RL.png](../../assets/images/bentz2009_RL.png)
*HST recalibration of the R_BLR - L relation by Bentz et al. (2009) correcting for host galaxy starlight.*

![bentz2010_RL.png](../../assets/images/bentz2010_RL.png)
*Refined radius-luminosity relation: R_BLR proportional to L^0.533 (Bentz et al. 2010).*

![bentz2010_velocitydelay.png](../../assets/images/bentz2010_velocitydelay.png)
*Velocity-delay map of Arp 151 showing virialized inflowing gas kinematics (Bentz et al. 2010).*

![gal_bh-09.png](../../assets/images/gal_bh-09.png)
*Reverberation mapping principle: light travel time delay tau = R_BLR / c between continuum and emission lines.*

![gal_bh-10.png](../../assets/images/gal_bh-10.png)
*Virial black hole mass formula: M_BH = f * (c * tau * Delta V^2) / G, where f is the virial factor.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_bh-29.png](../../assets/images/gal_bh-29.png)

![gal_bh-30.png](../../assets/images/gal_bh-30.png)

![gal_bh-31.png](../../assets/images/gal_bh-31.png)

![gal_bh-32.png](../../assets/images/gal_bh-32.png)

![gal_bh-33.png](../../assets/images/gal_bh-33.png)

![gal_bh-34.png](../../assets/images/gal_bh-34.png)

![gal_bh-35.png](../../assets/images/gal_bh-35.png)

![gal_bh-36.png](../../assets/images/gal_bh-36.png)

![gal_bh-37.png](../../assets/images/gal_bh-37.png)

![gal_bh-38.png](../../assets/images/gal_bh-38.png)

![gal_bh-39.png](../../assets/images/gal_bh-39.png)

![gal_bh-40.png](../../assets/images/gal_bh-40.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./M%20sigma%20relation.html" class="backlink-item">M sigma relation</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20dynamics%20SMBH%20masses.html" class="backlink-item">Stellar dynamics SMBH masses</a></li>
    <li class="backlink-item-wrap"><a href="./Water%20maser%20BH%20masses.html" class="backlink-item">Water maser BH masses</a></li>
  </ul>
</div>
