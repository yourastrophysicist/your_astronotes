---
layout: "default"
title: "IR SFR tracer"
name: "IR SFR tracer"
description: "Dust-obscured star formation rate tracer measuring the thermal far-infrared re-radiation of starlight absorbed by interstellar dust grains."
---
{% raw %}
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

- [Observational_Astrophysics_MOC](../../04_Atlas/Observational_Astrophysics_MOC.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [SFR tracers from population synthesis](./SFR%20tracers%20from%20population%20synthesis.html)
- [UV SFR tracer](./UV%20SFR%20tracer.html)
- [H-alpha SFR tracer](./H-alpha%20SFR%20tracer.html)
- [Dust attenuation in synthetic populations](./Dust%20attenuation%20in%20synthetic%20populations.html)
- [SED fitting basics](./SED%20fitting%20basics.html)
- [Initial mass function](./Initial%20mass%20function.html)
- [Star formation history of a population](./Star%20formation%20history%20of%20a%20population.html)
- [Stellar mass estimation in unresolved populations](./Stellar%20mass%20estimation%20in%20unresolved%20populations.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (20)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Dust%20attenuation%20and%20extinction%20curves.html" class="backlink-item">Dust attenuation and extinction curves</a></li>
    <li class="backlink-item-wrap"><a href="./Dust%20attenuation%20in%20synthetic%20populations.html" class="backlink-item">Dust attenuation in synthetic populations</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20time%20scales.html" class="backlink-item">Galaxy time scales</a></li>
    <li class="backlink-item-wrap"><a href="./H-alpha%20SFR%20tracer.html" class="backlink-item">H-alpha SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="./K-correction%20in%20optical%20vs%20sub-mm.html" class="backlink-item">K-correction in optical vs sub-mm</a></li>
    <li class="backlink-item-wrap"><a href="./LIRGs%20ULIRGs%20HyLIRGs.html" class="backlink-item">LIRGs ULIRGs HyLIRGs</a></li>
    <li class="backlink-item-wrap"><a href="./Madau%20plot.html" class="backlink-item">Madau plot</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Other%20SFR%20tracer%20lines.html" class="backlink-item">Other SFR tracer lines</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html" class="backlink-item">Pablo_03_Star_formation_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Radio%20SFR%20tracer.html" class="backlink-item">Radio SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="./SED%20fitting%20for%20SFH.html" class="backlink-item">SED fitting for SFH</a></li>
    <li class="backlink-item-wrap"><a href="./SFR%20tracer%20comparison.html" class="backlink-item">SFR tracer comparison</a></li>
    <li class="backlink-item-wrap"><a href="./SFR%20tracers%20from%20population%20synthesis.html" class="backlink-item">SFR tracers from population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="./Star%20formation%20history%20parametrizations.html" class="backlink-item">Star formation history parametrizations</a></li>
    <li class="backlink-item-wrap"><a href="./Star%20formation%20rate%20and%20sSFR.html" class="backlink-item">Star formation rate and sSFR</a></li>
    <li class="backlink-item-wrap"><a href="./UV%20SFR%20tracer.html" class="backlink-item">UV SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="./UV%20slope%20and%20IRX-beta%20relation.html" class="backlink-item">UV slope and IRX-beta relation</a></li>
    <li class="backlink-item-wrap"><a href="./Why%20hot%20massive%20stars%20dominate%20luminosity.html" class="backlink-item">Why hot massive stars dominate luminosity</a></li>
    <li class="backlink-item-wrap"><a href="./X-ray%20SFR%20tracer.html" class="backlink-item">X-ray SFR tracer</a></li>
  </ul>
</div>
