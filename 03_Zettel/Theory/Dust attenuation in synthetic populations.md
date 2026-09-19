---
layout: "default"
title: "Dust attenuation in synthetic populations"
---
in star-forming galaxies, interstellar dust grains absorb and scatter stellar photons at ultraviolet and optical wavelengths, thermally re-emitting the absorbed energy in the mid- and far-infrared. Correctly modeling **dust attenuation** within stellar population synthesis (SPS) is mandatory for deriving unbiased star formation rates, stellar masses, and evolutionary ages from observed galaxy spectral energy distributions.

---

### attenuation versus extinction: a vital physical distinction

in extragalactic population synthesis, **attenuation** must not be confused with **extinction**:

1. **extinction ($A_\lambda^{\rm ext}$)**:
   - describes a single point source (e.g., an individual star in the Milky Way) viewed through a uniform, foreground "screen" of dust.
   - pure loss mechanism governed by the Beer-Lambert law ($I_\lambda = I_{\lambda, 0}\,e^{-\tau_\lambda}$). Photons scattered out of the line of sight are permanently lost, and no photons are scattered into the beam.
   - quantified by the selective extinction ratio $R_V \equiv A_V / E(B-V) \approx 3.1$ in the diffuse Galactic ISM (Cardelli, Clayton & Mathis 1989).

2. **attenuation ($A_\lambda^{\rm att}$)**:
   - describes an extended system (a galaxy) where millions of stars and multiple dust components are mixed in complex, clumpy geometries.
   - light entering the telescope includes direct starlight, forward-scattered starlight from dust clouds outside the direct line of sight, and varying lines of sight with widely different optical depths.
   - the resulting **effective attenuation curve** is significantly **flatter (grayer)** than an extinction curve because heavily obscured stars are completely extinguished, leaving the emergent flux dominated by lightly obscured stars on the galaxy's outskirts.

---

### primary attenuation prescriptions in SPS

#### 1. Calzetti et al. (2000) starburst attenuation law
derived empirically from ultraviolet and optical spectra of local UV-luminous starburst galaxies:

$$k(\lambda) = \begin{cases} 
2.659\left(-2.156 + \frac{1.509}{\lambda} - \frac{0.198}{\lambda^2} + \frac{0.011}{\lambda^3}\right) + R_V & 0.12\,\mu\mathrm{m} \le \lambda < 0.63\,\mu\mathrm{m} \\ 
2.659\left(-1.857 + \frac{1.040}{\lambda}\right) + R_V & 0.63\,\mu\mathrm{m} \le \lambda \le 2.20\,\mu\mathrm{m} 
\end{cases}$$

where $R_V \equiv A_V / E(B-V) = 4.05 \pm 0.80$.
- **characteristics**: substantially flatter in the UV than Galactic extinction; completely lacks the $2175$ Å carbonaceous absorption bump, likely due to destructive UV radiation fields and complex scattering geometry in intense starbursts.
- **usage**: the community standard for star-forming galaxies across $0 < z < 3$.

#### 2. Charlot & Fall (2000) two-component birth-cloud model
a physically realistic prescription accounting for stellar birth environments and stellar migration:
- **young stars ($\tau < 10$ Myr)**: reside inside dense, natal giant molecular birth clouds. Their light is attenuated by both the birth cloud and the ambient diffuse ISM:
  $$\tau_{\rm young}(\lambda) = \tau_{\rm BC}(\lambda) + \tau_{\rm ISM}(\lambda)$$
- **older stars ($\tau > 10$ Myr)**: have dispersed or migrated out of their birth clouds and are attenuated only by the diffuse interstellar medium:
  $$\tau_{\rm old}(\lambda) = \tau_{\rm ISM}(\lambda)$$
- **effective optical depth power law**:
  $$\tau(\lambda) = \tau_V \left( \frac{\lambda}{5500\text{ Å}} \right)^{-0.7}$$
- **differential nebular-to-stellar extinction**: because hydrogen recombination lines ($\mathrm{H}\alpha, \mathrm{H}\beta$) originate inside H II regions within young birth clouds, nebular lines suffer roughly twice the optical attenuation of the older stellar continuum:
  $$A_V^{\rm neb} \approx 2\,A_V^{\rm stars} \iff E(B-V)_{\rm stars} \approx 0.44\,E(B-V)_{\rm neb}$$

#### 3. Small Magellanic Cloud (SMC) bar extinction
characterized by a very steep, featureless far-UV rise without any $2175$ Å bump. Frequently preferred for low-metallicity dwarf galaxies and pristine high-redshift ($z > 4$) galaxies observed with JWST.

---

### panchromatic dust energy balance

in self-consistent population synthesis (e.g., **MAGPHYS**, **CIGALE**), dust absorption and dust emission are bound by the global energy conservation principle:

$$L_{\rm dust}^{\rm abs} = \int_0^\infty \left(1 - 10^{-0.4\,A_\lambda}\right) L_\lambda^{\rm intrinsic}\,d\lambda \equiv L_{\rm TIR} = \int_{8\,\mu\mathrm{m}}^{1000\,\mu\mathrm{m}} L_\lambda^{\rm dust, emit}\,d\lambda$$

the total energy absorbed by dust at UV, optical, and near-IR wavelengths is set equal to the integrated thermal infrared luminosity ($L_{\rm TIR}$). This eliminates $A_V$ as an unconstrained free parameter when multi-wavelength photometry spanning the optical and far-IR is available.

---

### impact on inferred galaxy parameters

- **star formation rates (SFR)**: uncorrected UV star formation rates in dusty galaxies underestimate the true rate by factors of $10\text{--}100$.
- **stellar mass ($M_*$)**: adopting an overly steep attenuation curve overcorrects optical starlight, artificially inflating the inferred stellar mass by $0.1\text{--}0.3$ dex.
- **age-dust degeneracy**: reddening by dust closely mimics the spectral reddening caused by older stellar ages, requiring UV slopes ($\beta$), Balmer breaks, and thermal IR constraints to decouple.

---

## see also

- [Observational_Astrophysics_MOC](../../04_Atlas/Observational_Astrophysics_MOC.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [SED fitting basics](SED%20fitting%20basics.html)
- [UV SFR tracer](UV%20SFR%20tracer.html)
- [H-alpha SFR tracer](H-alpha%20SFR%20tracer.html)
- [IR SFR tracer](IR%20SFR%20tracer.html)
- [SFR tracers from population synthesis](SFR%20tracers%20from%20population%20synthesis.html)
- [Stellar population synthesis](Stellar%20population%20synthesis.html)
- [Single stellar population SSP](Single%20stellar%20population%20SSP.html)
- [Stellar mass estimation in unresolved populations](Stellar%20mass%20estimation%20in%20unresolved%20populations.html)
- [Age estimation in unresolved populations](Age%20estimation%20in%20unresolved%20populations.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Dust%20extinction%20in%20nebulae.html" class="backlink-item">Dust extinction in nebulae</a></li>
    <li class="backlink-item-wrap"><a href="H-alpha%20SFR%20tracer.html" class="backlink-item">H-alpha SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="IR%20SFR%20tracer.html" class="backlink-item">IR SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="Photometric%20redshifts.html" class="backlink-item">Photometric redshifts</a></li>
    <li class="backlink-item-wrap"><a href="SED%20fitting%20basics.html" class="backlink-item">SED fitting basics</a></li>
    <li class="backlink-item-wrap"><a href="SFR%20tracers%20from%20population%20synthesis.html" class="backlink-item">SFR tracers from population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="SPS%20code%20families.html" class="backlink-item">SPS code families</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20mass%20estimation%20in%20unresolved%20populations.html" class="backlink-item">Stellar mass estimation in unresolved populations</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20population%20synthesis.html" class="backlink-item">Stellar population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="UV%20SFR%20tracer.html" class="backlink-item">UV SFR tracer</a></li>
  </ul>
</div>

