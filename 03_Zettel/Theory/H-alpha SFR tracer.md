---
layout: "default"
title: "H-alpha SFR tracer"
---
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

- [[Observational_Astrophysics_MOC]]
- [[Stellar_Astrophysics_MOC]]
- [[SFR tracers from population synthesis]]
- [[UV SFR tracer]]
- [[IR SFR tracer]]
- [[Dust attenuation in synthetic populations]]
- [[Initial mass function]]
- [[Single stellar population SSP]]
- [[SPS code families]]
- [[Star formation history of a population]]



## Linked References

- [[Balmer decrement]]
- [[Case A vs Case B recombination]]
- [[Dust attenuation and extinction curves]]
- [[Dust attenuation in synthetic populations]]
- [[Dust extinction in nebulae]]
- [[Galaxy time scales]]
- [[Hydrogen spectral series]]
- [[IR SFR tracer]]
- [[Initial mass function]]
- [[Lyman alpha SFR tracer]]
- [[OII SFR tracer]]
- [[Optically thin recombination lines]]
- [[Other SFR tracer lines]]
- [[Recombination line emissivity]]
- [[Rydberg-Ritz formula]]
- [[SFR tracer comparison]]
- [[SFR tracers from population synthesis]]
- [[SPS code families]]
- [[Star formation history parametrizations]]
- [[Star formation rate and sSFR]]
- [[UV SFR tracer]]
- [[Observational_Cosmology_MOC]]


