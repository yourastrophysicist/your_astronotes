---
layout: "default"
title: "H-alpha SFR tracer"
name: "H-alpha SFR tracer"
description: "Nearly instantaneous star formation rate tracer measuring Case B hydrogen recombination emission powered by Lyman-continuum photons from massive O stars."
---
{% raw %}
the **$\mathrm{H}\alpha$ recombination line** ($\lambda_{\rm rest} = 6562.8$ Å in air, $n = 3 \to 2$) is the premier nebular emission tracer of recent, unobscured-to-moderately obscured star formation. Because ionizing Lyman-continuum photons are emitted almost exclusively by the most massive, short-lived stars ($M \gtrsim 15\text{--}20\,M_\odot$), $\mathrm{H}\alpha$ probes star formation on timescales of $\tau \lesssim 10$ Myr—an order of magnitude shorter than the ultraviolet continuum.

---

### physical mechanism: photoionization and case B recombination

1. **production of ionizing photons**:
   very massive stars (spectral types O3 through O9) emit copious extreme-UV photons with energy above the hydrogen ionization threshold ($h\nu \ge 13.6$ eV, $\lambda \le 912$ Å) at a rate:
   $$Q(\mathrm{H}^0) = \int_{\nu_0}^\infty \frac{L_\nu}{h\nu}\,d\nu \quad [\mathrm{photons\,s^{-1}}]$$
   because $Q(\mathrm{H}^0) \propto M^{3.5\text{--}4.0}$ and main-sequence lifespans of O stars are only $3\text{--}10$ Myr, $Q(\mathrm{H}^0)$ responds virtually instantaneously to changes in the star formation rate.

2. **Case B nebular recombination**:
   in ionization-bounded H II regions, the gas is optically thick to Lyman lines ($\tau_{\mathrm{Ly}\alpha} \gg 1$). Resonant scattering traps Lyman photons until they degrade via two-photon decay or cascade into the Balmer series (**Baker & Menzel Case B**). In steady-state photoionization equilibrium, the total ionization rate equals the Case B recombination rate:
   $$Q(\mathrm{H}^0)(1 - f_{\rm esc}) = \alpha_B(T_e)\,n_e\,n_p\,V$$
   where $\alpha_B(T_e)$ is the Case B recombination coefficient and $f_{\rm esc} \approx 0\text{--}0.05$ is the escape fraction of ionizing photons.

3. **$\mathrm{H}\alpha$ emission line luminosity**:
   the resulting $\mathrm{H}\alpha$ line luminosity is directly proportional to the ionizing photon rate:
   $$L(\mathrm{H}\alpha) = \frac{\alpha_{\mathrm{H}\alpha}^{\rm eff}(T_e)}{\alpha_B(T_e)}\,h\nu_{\mathrm{H}\alpha}\,(1 - f_{\rm esc})\,Q(\mathrm{H}^0)$$
   for typical nebular conditions ($T_e = 10^4$ K, $n_e = 100\,\mathrm{cm^{-3}}$), $\frac{\alpha_{\mathrm{H}\alpha}^{\rm eff}}{\alpha_B} \approx 0.45$, yielding:
   $$L(\mathrm{H}\alpha) \approx 1.36 \times 10^{-12}\,Q(\mathrm{H}^0)\quad [\mathrm{erg}]$$

---

### standard calibrations

calibrations are computed via stellar population synthesis models (e.g., Starburst99) assuming continuous star formation for $t > 10$ Myr and solar metallicity:

#### Salpeter (1955) IMF ($0.1\text{--}100\,M_\odot$):
$$\mathrm{SFR}_{\mathrm{H}\alpha} [M_\odot/\mathrm{yr}] = 7.9 \times 10^{-42}\,L(\mathrm{H}\alpha)\,[\mathrm{erg\,s^{-1}}] \quad (\text{Kennicutt 1998})$$

#### Chabrier (2003) IMF:
$$\mathrm{SFR}_{\mathrm{H}\alpha} [M_\odot/\mathrm{yr}] = 4.4 \times 10^{-42}\,L(\mathrm{H}\alpha)\,[\mathrm{erg\,s^{-1}}] \quad (\text{Hao et al. 2011; Kennicutt \& Evans 2012})$$

the conversion between IMFs is:
$$\mathrm{SFR}_{\rm Chabrier} = \frac{\mathrm{SFR}_{\rm Salpeter}}{1.80} = \mathrm{SFR}_{\rm Salpeter} \times 10^{-0.25}$$

---

### required observational corrections

to recover the true, intrinsic $\mathrm{H}\alpha$ star formation rate from raw telescope observations, four essential corrections must be applied:

1. **dust attenuation via the balmer decrement**:
   differential dust reddening attenuates $\mathrm{H}\beta$ ($\lambda = 4861$ Å) more strongly than $\mathrm{H}\alpha$ ($\lambda = 6563$ Å). The color excess $E(B-V)_{\rm neb}$ of the ionized gas is derived from the observed Balmer decrement:
   $$E(B-V)_{\rm neb} = \frac{2.5}{k(\mathrm{H}\beta) - k(\mathrm{H}\alpha)} \log_{10} \left[ \frac{(\mathrm{H}\alpha / \mathrm{H}\beta)_{\rm obs}}{(\mathrm{H}\alpha / \mathrm{H}\beta)_{\rm intrinsic}} \right]$$
   where $(\mathrm{H}\alpha / \mathrm{H}\beta)_{\rm intrinsic} = 2.86$ for Case B at $T_e = 10^4$ K. For a Cardelli extinction curve ($k(\mathrm{H}\beta) - k(\mathrm{H}\alpha) \approx 1.16$), the attenuation at $\mathrm{H}\alpha$ is $A_{\mathrm{H}\alpha} \approx 2.5\,E(B-V)_{\rm neb}$.
2. **underlying stellar absorption**:
   stellar atmospheres of intermediate-age stars (especially A-type stars) produce intrinsic Balmer absorption troughs beneath the nebular emission lines ($\mathrm{EW}_{\rm abs} \sim 2\text{--}5$ Å). Failure to subtract stellar absorption causes severe underestimation of $\mathrm{H}\alpha$ emission in low-equivalent-width systems.
3. **$[\mathrm{N\,II}]\,\lambda\lambda 6548, 6583$ contamination**:
   in narrow-band photometric imaging surveys, the $[\mathrm{N\,II}]$ doublet is blended with $\mathrm{H}\alpha$. The $[\mathrm{N\,II}]/\mathrm{H}\alpha$ flux ratio correlates with gas-phase metallicity ($[\mathrm{N\,II}]/\mathrm{H}\alpha \approx 0.1\text{--}0.5$) and must be removed via spectroscopic calibration.
4. **active galactic nucleus (AGN) contamination**:
   shocks and hard ionizing radiation from an active nucleus produce non-stellar Balmer emission. Galaxies must be classified via the **BPT diagram** ($[\mathrm{O\,III}]/\mathrm{H}\beta$ vs $[\mathrm{N\,II}]/\mathrm{H}\alpha$) to isolate pure star formation.

---

### high-redshift observations: the JWST revolution

because $\mathrm{H}\alpha$ shifts into the near-infrared at $z > 0.4$ (and into the mid-infrared at $z > 2.5$), ground-based optical surveys were historically unable to measure $\mathrm{H}\alpha$ across the peak epoch of cosmic star formation ($z \sim 1\text{--}3$). With **JWST NIRSpec and NIRCam grisms**, $\mathrm{H}\alpha$ is now routinely measured out to $z \sim 7$, transforming our understanding of high-redshift starbursts and reionization-era ionizing photon production.

---

## see also

- [Observational_Astrophysics_MOC](../../04_Atlas/Observational_Astrophysics_MOC.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
- [SFR tracers from population synthesis](./SFR%20tracers%20from%20population%20synthesis.html)
- [UV SFR tracer](./UV%20SFR%20tracer.html)
- [IR SFR tracer](./IR%20SFR%20tracer.html)
- [Dust attenuation in synthetic populations](./Dust%20attenuation%20in%20synthetic%20populations.html)
- [Initial mass function](./Initial%20mass%20function.html)
- [Single stellar population SSP](./Single%20stellar%20population%20SSP.html)
- [SPS code families](./SPS%20code%20families.html)
- [Star formation history of a population](./Star%20formation%20history%20of%20a%20population.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (26)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Balmer%20decrement.html" class="backlink-item">Balmer decrement</a></li>
    <li class="backlink-item-wrap"><a href="./Case%20A%20vs%20Case%20B%20recombination.html" class="backlink-item">Case A vs Case B recombination</a></li>
    <li class="backlink-item-wrap"><a href="./Dust%20attenuation%20and%20extinction%20curves.html" class="backlink-item">Dust attenuation and extinction curves</a></li>
    <li class="backlink-item-wrap"><a href="./Dust%20attenuation%20in%20synthetic%20populations.html" class="backlink-item">Dust attenuation in synthetic populations</a></li>
    <li class="backlink-item-wrap"><a href="./Dust%20extinction%20in%20nebulae.html" class="backlink-item">Dust extinction in nebulae</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20time%20scales.html" class="backlink-item">Galaxy time scales</a></li>
    <li class="backlink-item-wrap"><a href="./H%20II%20region%20spectroscopy.html" class="backlink-item">H II region spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Hydrogen%20spectral%20series.html" class="backlink-item">Hydrogen spectral series</a></li>
    <li class="backlink-item-wrap"><a href="./IR%20SFR%20tracer.html" class="backlink-item">IR SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="./Initial%20mass%20function.html" class="backlink-item">Initial mass function</a></li>
    <li class="backlink-item-wrap"><a href="./Lyman%20alpha%20SFR%20tracer.html" class="backlink-item">Lyman alpha SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="./Madau%20plot.html" class="backlink-item">Madau plot</a></li>
    <li class="backlink-item-wrap"><a href="./OII%20SFR%20tracer.html" class="backlink-item">OII SFR tracer</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Optically%20thin%20recombination%20lines.html" class="backlink-item">Optically thin recombination lines</a></li>
    <li class="backlink-item-wrap"><a href="./Other%20SFR%20tracer%20lines.html" class="backlink-item">Other SFR tracer lines</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html" class="backlink-item">Pablo_03_Star_formation_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_04_Nuclear_activity_in_galaxies.html" class="backlink-item">Pablo_04_Nuclear_activity_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Recombination%20line%20emissivity.html" class="backlink-item">Recombination line emissivity</a></li>
    <li class="backlink-item-wrap"><a href="./Rydberg-Ritz%20formula.html" class="backlink-item">Rydberg-Ritz formula</a></li>
    <li class="backlink-item-wrap"><a href="./SFR%20tracer%20comparison.html" class="backlink-item">SFR tracer comparison</a></li>
    <li class="backlink-item-wrap"><a href="./SFR%20tracers%20from%20population%20synthesis.html" class="backlink-item">SFR tracers from population synthesis</a></li>
    <li class="backlink-item-wrap"><a href="./SPS%20code%20families.html" class="backlink-item">SPS code families</a></li>
    <li class="backlink-item-wrap"><a href="./Star%20formation%20history%20parametrizations.html" class="backlink-item">Star formation history parametrizations</a></li>
    <li class="backlink-item-wrap"><a href="./Star%20formation%20rate%20and%20sSFR.html" class="backlink-item">Star formation rate and sSFR</a></li>
    <li class="backlink-item-wrap"><a href="./UV%20SFR%20tracer.html" class="backlink-item">UV SFR tracer</a></li>
  </ul>
</div>
