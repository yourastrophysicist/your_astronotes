---
layout: default
title: "Reverberation mapping"
---

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

- [AGN spectroscopy](../../02_Zettel/Theory/AGN spectroscopy.html)
- [Magorrian relation](../../02_Zettel/Theory/Magorrian relation.html)
- [M sigma relation](../../02_Zettel/Theory/M sigma relation.html)
- [Stellar dynamics SMBH masses](../../02_Zettel/Theory/Stellar dynamics SMBH masses.html)
- [Water maser BH masses](../../02_Zettel/Theory/Water maser BH masses.html)
- [Galactic Center Sgr A and S-stars](../../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
