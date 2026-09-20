---
layout: "default"
title: "IR SFR tracer"
---
the **total infrared luminosity** ($L_{\rm TIR}$, integrated over $\lambda = 8\text{--}1000\,\mu\mathrm{m}$) is the primary observational diagnostic of **dust-obscured star formation**. In dusty galaxies—including luminous and ultra-luminous infrared galaxies (LIRGs and ULIRGs)—interstellar dust grains absorb up to $\ge 99\%$ of the ultraviolet and optical radiation emitted by young, massive stars and thermally re-radiate this energy at mid- and far-infrared wavelengths.

---

### physical principle: thermal dust reprocessing

1. **radiative transfer and dust absorption**:
   massive O and B stars ($M \gtrsim 5\,M_\odot$) radiate intensely in the ultraviolet. Because young star-forming complexes remain embedded in dense, dusty molecular birth clouds, refractory grains (silicates, carbonaceous grains, and polycyclic aromatic hydrocarbons [PAHs]) absorb short-wavelength photons with high optical depth ($\tau_{\rm UV} \gg 1$).
2. **thermal equilibrium re-emission**:
   absorbed UV/optical photon energy heats the dust grains to equilibrium temperatures $T_{\rm dust} \sim 20\text{--}60$ K. The grains cool by emitting thermal blackbody radiation modified by dust grain emissivity ($\kappa_\nu \propto \nu^\beta_{\rm dust}$, with $\beta_{\rm dust} \approx 1.5\text{--}2.0$):
   $$L_\nu^{\rm dust} \propto \kappa_\nu B_\nu(T_{\rm dust}) \propto \nu^{\beta_{\rm dust}} \frac{2h\nu^3/c^2}{e^{h\nu / k_B T_{\rm dust}} - 1}$$
   this modified blackbody peaks in the far-infrared between $\lambda \sim 60\,\mu\mathrm{m}$ and $160\,\mu\mathrm{m}$.

---

### standard calibrations

the total infrared luminosity is formally defined as:
$$L_{\rm TIR} \equiv \int_{8\,\mu\mathrm{m}}^{1000\,\mu\mathrm{m}} L_\nu\,d\nu \quad [\mathrm{erg\,s^{-1}}]$$

under the assumption of a dust-enshrouded, continuous starburst of age $10\text{--}100$ Myr, population synthesis models calibrate $L_{\rm TIR}$ directly to star formation rate:

#### Salpeter (1955) IMF ($0.1\text{--}100\,M_\odot$):
$$\mathrm{SFR}_{\rm IR} [M_\odot/\mathrm{yr}] = 4.5 \times 10^{-44}\,L_{\rm TIR}\,[\mathrm{erg\,s^{-1}}] = 1.73 \times 10^{-10}\,L_{\rm TIR}\,[L_\odot] \quad (\text{Kennicutt 1998})$$

#### Chabrier (2003) IMF:
$$\mathrm{SFR}_{\rm IR} [M_\odot/\mathrm{yr}] = 2.8 \times 10^{-44}\,L_{\rm TIR}\,[\mathrm{erg\,s^{-1}}] = 1.09 \times 10^{-10}\,L_{\rm TIR}\,[L_\odot] \quad (\text{Murphy et al. 2011; Kennicutt \& Evans 2012})$$

the conversion between IMFs is:
$$\mathrm{SFR}_{\rm Chabrier} = \frac{\mathrm{SFR}_{\rm Salpeter}}{1.58} = \mathrm{SFR}_{\rm Salpeter} \times 10^{-0.24}$$

---

### spectral energy distribution components

a complete galaxy infrared SED consists of four distinct emission components:
1. **PAH emission features ($3.3, 6.2, 7.7, 8.6, 11.3, 12.7\,\mu\mathrm{m}$)**:
   stochastically heated polycyclic aromatic hydrocarbon molecules in photon-dominated regions (PDRs), excited by single UV photons.
2. **warm dust ($T_{\rm dust} \sim 40\text{--}80$ K)**:
   small and medium grains located in dense H II regions and active star-forming clouds, dominating mid-to-far IR emission ($\sim 24\text{--}70\,\mu\mathrm{m}$).
3. **cold diffuse dust ("cirrus", $T_{\rm dust} \sim 15\text{--}25$ K)**:
   large grains in the diffuse ISM, heated in part by the general interstellar radiation field from **older, evolved stellar populations** rather than current star formation.
4. **hot dust ($T_{\rm dust} > 150\text{--}1000$ K)**:
   emission from dust grains very near an **Active Galactic Nucleus (AGN)** accretion disk, peaking in the rest-frame $3\text{--}20\,\mu\mathrm{m}$ window.

---

### systematic challenges and limitations

- **cirrus heating by old stars**: in early-type galaxies and quiescent spiral disks, up to $30\text{--}50\%$ of $L_{\rm TIR}$ can be powered by non-ionizing optical photons from old red giant branch stars rather than young massive stars, leading to an overestimation of SFR.
- **AGN contamination**: luminous dusty tori in Type 2 AGNs produce strong mid-IR emission that mimics starburst activity. AGN contributions are disentangled using mid-IR color diagnostics (e.g., Donley et al. 2012 *Spitzer* cuts), high-ionization lines ($[\mathrm{Ne\,V}]\,14.3\,\mu\mathrm{m}$), or panchromatic SED decomposition.
- **FIR SED template uncertainty**: at high redshift ($z > 1.5$), observations are often limited to a single photometric band (e.g., Herschel $250\,\mu\mathrm{m}$ or ALMA band 6/7). Inferring $L_{\rm TIR}$ requires assuming a dust temperature $T_{\rm dust}$ and emissivity index $\beta_{\rm dust}$; an error of $\pm 5$ K in $T_{\rm dust}$ shifts the inferred $L_{\rm TIR}$ by a factor of $\sim 2\text{--}3$ due to the Stefan-Boltzmann $T^4$ dependence.

---

### the hybrid UV + IR tracer

in normal star-forming galaxies, dust obscuration is incomplete. Combining the unattenuated observed UV continuum with the thermal IR emission yields the most accurate total star formation rate:

$$\mathrm{SFR}_{\rm tot} = \mathrm{SFR}_{\rm UV,obs} + \mathrm{SFR}_{\rm IR}$$

---

## see also

- [[Observational_Astrophysics_MOC]]
- [[Stellar_Astrophysics_MOC]]
- [[SFR tracers from population synthesis]]
- [[UV SFR tracer]]
- [[H-alpha SFR tracer]]
- [[Dust attenuation in synthetic populations]]
- [[SED fitting basics]]
- [[Initial mass function]]
- [[Star formation history of a population]]
- [[Stellar mass estimation in unresolved populations]]



## Linked References

- [[Dust attenuation and extinction curves]]
- [[Dust attenuation in synthetic populations]]
- [[Galaxy time scales]]
- [[H-alpha SFR tracer]]
- [[K-correction in optical vs sub-mm]]
- [[LIRGs ULIRGs HyLIRGs]]
- [[Other SFR tracer lines]]
- [[Radio SFR tracer]]
- [[SED fitting for SFH]]
- [[SFR tracer comparison]]
- [[SFR tracers from population synthesis]]
- [[Star formation history parametrizations]]
- [[Star formation rate and sSFR]]
- [[UV SFR tracer]]
- [[UV slope and IRX-beta relation]]
- [[Why hot massive stars dominate luminosity]]
- [[X-ray SFR tracer]]
- [[Observational_Cosmology_MOC]]


