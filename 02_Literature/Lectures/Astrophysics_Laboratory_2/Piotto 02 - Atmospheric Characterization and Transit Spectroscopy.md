---
layout: "default"
title: "Piotto 02 - Atmospheric Characterization and Transit Spectroscopy"
---
# Piotto 02 — Atmospheric Characterization and Transit Spectroscopy

*Astrophysics Laboratory 2, Prof. Giampaolo Piotto (Lecture 07/10/2025)*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## The Transit Geometry for Atmospheric Probing

Exoplanetary atmospheres are investigated by observing systems at three distinct orbital phases:
1. **Primary Transit (Transmission Spectroscopy)**: starlight filters through the planetary atmospheric annulus.
2. **Secondary Eclipse / Occultation (Emission Spectroscopy)**: the planet passes behind the host star, revealing day-side thermal emission and reflected light.
3. **Orbital Phase Curves**: monitoring flux throughout the entire orbit reveals day-night temperature contrasts and atmospheric circulation regimes.

$$\text{Primary Transit (starlight through atmosphere)} \longleftrightarrow \text{Secondary Eclipse (day-side occultation)}$$

---

## Transmission Spectroscopy

During primary transit, the effective planetary radius $R_p(\lambda)$ varies with wavelength due to wavelength-dependent atmospheric opacity $\kappa(\lambda)$:
$$\delta(\lambda) = \frac{\Delta F(\lambda)}{F_\star(\lambda)} = \frac{R_p(\lambda)^2}{R_\star^2}$$

### Atmospheric Scale Height
The vertical density structure of an isothermal atmosphere follows the hydrostatic equation:
$$\rho(z) = \rho_0 \exp\left( -\frac{z}{H} \right)$$
where $H$ is the pressure scale height:
$$H = \frac{k_B T_{\text{eq}}}{\mu g_p} = \frac{k_B T_{\text{eq}} R_p^2}{\mu G M_p}$$
- $T_{\text{eq}}$: planetary equilibrium temperature
- $\mu$: mean molecular weight ($\,\sim 2.3\text{ amu}$ for $H_2/He$ atmospheres; $\,\sim 18?44\text{ amu}$ for water/metal-rich atmospheres)
- $g_p$: planetary surface gravity

### Transmission Signal Amplitude
The effective thickness of the atmosphere across an absorption feature spanning $N_H$ scale heights (typically $N_H \sim 3?5$) produces a differential transit depth:
$$\Delta \delta_{\text{atm}} \approx \frac{2 R_p (N_H H)}{R_\star^2} \approx \frac{2 N_H R_p k_B T_{\text{eq}}}{\mu g_p R_\star^2}$$
- Favorable targets: high equilibrium temperature $T_{\text{eq}}$, low mean molecular weight $\mu$, low surface gravity $g_p$, small host star $R_\star$ (M dwarfs).
- Key spectral signatures:
	- Alkali metal lines: neutral Sodium (Na I doublet at 589 nm) and Potassium (K I doublet at 770 nm) with pressure-broadened wings
	- Molecular bands: $H_2O$ (1.15, 1.4, 1.9 $\mu$m), $CH_4, CO, CO_2$
	- Rayleigh scattering slope: cross section $\sigma(\lambda) \propto \lambda^{-4}$ causing increased transit depth toward blue wavelengths
	- Clouds and hazes: grey opacities that mute molecular absorption features into flat spectra

---

## Secondary Eclipse and Phase Curves

During secondary eclipse, the observed flux drops from $F_\star + F_p$ to $F_\star$. The eclipse depth gives the planet-to-star flux ratio:
$$\frac{\Delta F_{\text{ecl}}}{F_\star} = \frac{F_p}{F_\star} = \left( \frac{R_p}{R_\star} \right)^2 \frac{B_\lambda(T_{\text{day}})}{B_\lambda(T_\star)} + A_g \left( \frac{R_p}{a} \right)^2$$
- In the infrared, thermal emission dominates, enabling direct measurement of day-side brightness temperature and atmospheric temperature-pressure ($T-P$) profiles (thermal inversions).
- Optical secondary eclipses yield the geometric albedo $A_g$.

Continuous phase curve monitoring measures the longitudinal brightness distribution:
- Phase amplitude: day-to-night temperature contrast $\Delta T = T_{\text{day}} - T_{\text{night}}$
- Phase offset: eastward shift of the hottest point relative to the substellar point, driven by equatorial superrotating jet winds

---

## The Rossiter-McLaughlin (RM) Effect

When a transiting planet crosses a rotating stellar disk, it sequentially blocks blueshifted (approaching) and redshifted (receding) stellar surface elements.

$$\text{Ingress blocks approaching limb} \to \text{apparent redshift in stellar spectrum}$$
$$\text{Egress blocks receding limb} \to \text{apparent blueshift in stellar spectrum}$$

The resulting radial velocity anomaly enables measurement of the **projected spin-orbit alignment angle** $\lambda$:
- Aligned systems ($\lambda \approx 0^\circ$): symmetric redshift-then-blueshift profile (disk migration).
- Misaligned or retrograde systems ($\lambda \approx 180^\circ$): reversed RM curve, indicating dynamic scattering or Kozai-Lidov mechanisms during planetary migration.

---

## Habitable Zones and Biosignatures

The circumstellar habitable zone (HZ) is the orbital annulus where liquid water can remain stable on a rocky planet surface (Kasting et al. 1993; Kopparapu et al. 2013):
- Inner edge: runaway greenhouse limit ($F_{\text{eff}} \sim 1.05 F_\oplus$)
- Outer edge: maximum greenhouse limit ($F_{\text{eff}} \sim 0.35 F_\oplus$, where $CO_2$ condenses)

Atmospheric Biosignatures:
- Atmospheric chemical disequilibrium: simultaneous presence of reducing species ($CH_4$) and oxidizing species ($O_2 / O_3$) driven by biological flux
- Red edge: surface reflectance signature from photosynthetic vegetation

---

## Related Notes
- [Piotto 01 - Exoplanet Detection and Demographics](./Piotto%2001%20-%20Exoplanet%20Detection%20and%20Demographics.html)
- [Stellar Limb Darkening Laws](../../../03_Zettel/Theory/Stellar%20Limb%20Darkening%20Laws.html)
- [Transit Depth and Ingress-Egress Timescales](../../../03_Zettel/Theory/Transit%20Depth%20and%20Ingress-Egress%20Timescales.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
  </ul>
</div>

