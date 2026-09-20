---
layout: "default"
title: "Stellar population synthesis"
---
**stellar population synthesis (SPS)** is the theoretical and computational forward-modeling technique used to interpret the integrated light of unresolved stellar systems. Because individual stars cannot be resolved in distant galaxies, their spectral energy distributions (SEDs) must be synthesized from fundamental stellar evolution theory: isochrone grids, stellar atmospheric libraries, and an assumed initial mass function.

---

### mathematical formulation

the fundamental building block of all synthesis models is the **single stellar population (SSP)**: a coeval, chemically homogeneous ensemble of stars formed in an instantaneous burst at $t = 0$ with initial metallicity $Z$.

the monochromatic luminosity of an SSP of age $\tau$ and initial metallicity $Z$ normalized to total initial formed mass $M_0 = 1\,M_\odot$ is:

$$L_\lambda^{\rm SSP}(\tau, Z) = \int_{M_{\rm min}}^{M_{\rm max}(\tau)} f_\lambda(M, \tau, Z)\,\xi(M)\,dM + \sum_{j} L_{\lambda, j}^{\rm post-MS}(\tau, Z)$$

where:
- $\xi(M) = dN/dM$ is the **initial mass function (IMF)** normalized to $\int M\xi(M)\,dM = 1\,M_\odot$.
- $f_\lambda(M, \tau, Z)$ is the synthetic or empirical stellar spectrum corresponding to a star of initial mass $M$ at age $\tau$, whose effective temperature $T_{\rm eff}$, surface gravity $\log g$, and bolometric luminosity $L_{\rm bol}$ are dictated by stellar evolutionary tracks or isochrones.
- $M_{\rm max}(\tau)$ is the maximum surviving stellar mass still on the main sequence (the turn-off mass $M_{\rm TO}$).
- The summation accounts for short-lived post-main sequence phases (RGB tip, core helium burning / horizontal branch, AGB, and planetary nebulae).

a composite stellar population (**CSP**), representing a realistic galaxy with an extended **star formation history (SFH)** $\psi(t)$ and chemical enrichment history $Z(t)$, is computed as a convolution over the SSP basis:

$$L_\lambda^{\rm gal}(t) = \int_0^t \psi(t - \tau)\,L_\lambda^{\rm SSP}(\tau, Z(\tau))\,d\tau$$

when including **interstellar dust attenuation** and **nebular emission**, the emergent flux observed at luminosity distance $d_L$ and redshift $z$ becomes:

$$F_\nu^{\rm obs}(\nu_{\rm obs}) = \frac{1+z}{4\pi d_L^2} \left[ L_{\nu_{\rm rest}}^{\rm gal}(t) \cdot 10^{-0.4\,A_{\nu_{\rm rest}}} + L_{\nu_{\rm rest}}^{\rm neb}(t) \right]_{\nu_{\rm rest} = \nu_{\rm obs}(1+z)}$$

---

### core ingredients of SPS models

any SPS code relies on four interdependent modular components:

```
[ Stellar Evolution (Isochrones) ]  --> (T_eff, log g, L_bol)
                                            |
[ Stellar Spectral Libraries ]     -->  f_lambda(T_eff, log g, Z)
                                            |
[ Initial Mass Function (IMF) ]    -->  dN/dM weighting
                                            |
                                            v
                                 [ SSP Grid L_lambda(tau, Z) ]
                                            |
[ SFH psi(t) + Chemical Z(t) ]   -->  Convolution
                                            |
[ Dust Attenuation + Nebular ]    -->  Emergent Galaxy SED
```

1. **stellar evolutionary tracks and isochrones**:
   - map initial mass $M$ and age $\tau$ into physical surface parameters $(T_{\rm eff}, \log g, L_{\rm bol})$.
   - major grids: **Padova / PARSEC** (Bressan et al. 2012), **MIST / MESA** (Choi et al. 2016), **BaSTI** (Pietrinferni et al. 2004), and **Geneva** (Ekström et al. 2012; including rotation).
   - critical uncertainties: convective core overshooting, mass-loss rates on the RGB and AGB, rotational mixing, and boundary conditions of stellar interiors.

2. **stellar atmospheric spectral libraries**:
   - convert physical parameters $(T_{\rm eff}, \log g, Z)$ into monochromatic flux $f_\lambda$.
   - **empirical libraries**: observed spectra of real Milky Way stars (e.g., **STELIB** $R \approx 2000$, **MILES** $R \approx 2000$, **Indo-U.S.**, **X-shooter**). Advantage: contains real, unapproximated stellar physics and molecular lines. Disadvantage: biased to solar-neighborhood abundance ratios ($[\alpha/\mathrm{Fe}] \approx 0$ at solar $Z$) and incomplete coverage in $T_{\rm eff}$–$\log g$ parameter space.
   - **synthetic libraries**: calculated from model atmospheres and radiative transfer codes (e.g., **Kurucz / ATLAS9**, **PHOENIX**, **MARCS**). Advantage: arbitrary chemical compositions, coverage of rare extreme phases, infinite spectral resolution. Disadvantage: incomplete atomic/molecular line lists, 1D LTE approximations.

3. **the initial mass function (IMF)**:
   - dictates the relative number of stars across mass: Salpeter ($\alpha = 2.35$), Kroupa, or Chabrier.
   - massive stars ($M \gtrsim 8\,M_\odot$) dominate the UV continuum and ionizing flux ($Q \propto M^{3.5}$).
   - low-mass stars ($M \lesssim 0.8\,M_\odot$) contribute negligible light at young ages but dominate the total surviving stellar mass $M_*$ and NIR light in old systems.

4. **thermally pulsing AGB (TP-AGB) phase**:
   - during the TP-AGB phase ($\tau \sim 0.2\text{--}2$ Gyr), stars undergo thermal helium shell pulses and third dredge-up.
   - highly luminous in the near-infrared (NIR $J, H, K$ bands).
   - models using the fuel consumption theorem (Maraston 2005) assign up to $80\%$ of NIR light to TP-AGB stars, whereas Padova-based models (BC03, PARSEC) predict a lower contribution. This creates a factor $\sim 2$ systematic discrepancy in derived stellar masses for galaxies at $z \sim 1\text{--}3$.

5. **nebular emission (lines + continuum)**:
   - young, massive O/B stars emit hydrogen-ionizing photons ($h\nu \ge 13.6$ eV) at rate $Q(\mathrm{H}^0) = \int_{\nu_0}^\infty (L_\nu / h\nu) d\nu$.
   - under Case B recombination, this produces strong nebular continuum (free-free, free-bound, two-photon) and recombination/collisionally-excited emission lines ($\mathrm{H}\alpha$, $\mathrm{H}\beta$, $[\mathrm{O\,III}]$, $[\mathrm{O\,II}]$, $[\mathrm{N\,II}]$).
   - integrated into SPS via photoionization codes like **CLOUDY** or **MAPPINGS** (e.g., Starburst99, FSPS, BPASS).

---

### spectral evolution of an SSP

an instantaneous burst evolves across distinct, chronologically ordered regimes:

| age $\tau$ | dominant stars | diagnostic spectral features | physical regime |
|---|---|---|---|
| $< 10$ Myr | O and early B stars ($M > 20\,M_\odot$) | Flat UV continuum, strong He II, P-Cygni wind features, high $Q(\mathrm{H}^0)$ | Extreme ionizing output, H II regions |
| $10\text{--}100$ Myr | Late B and early A stars | UV continuum fades, Wolf-Rayet features vanish, core He-burning supergiants appear | Post-starburst phase |
| $100\text{--}1000$ Myr | A and F main-sequence stars | **Balmer break** ($3646$ Å) peaks, strong high-order Balmer absorption lines ($\mathrm{H}\delta, \mathrm{H}\gamma$) | A-star dominated ("E+A" / post-starburst) |
| $1\text{--}2$ Gyr | Turn-off near $M \sim 1.5\text{--}2\,M_\odot$, TP-AGB | NIR peak in $JHK$, molecular bands ($\mathrm{C}_2$, $\mathrm{CN}$, $\mathrm{TiO}$), carbon stars | Intermediate-age population |
| $> 2$ Gyr | G, K, M dwarfs + RGB / Red Clump / HB | **$4000$ Å break** ($D_n4000$) strongly developed, metal lines ($\mathrm{Mg}_b$, Fe5270, Ca II H+K) | Old, quiescent population |

---

### diagnostic approaches: lick indices vs full SED fitting

two primary methodologies are employed to compare models to observational data:

1. **lick/IDS absorption line indices**:
   - measures pseudo-equivalent widths of targeted stellar absorption features within defined bandpasses.
   - pairs an age-sensitive Balmer index ($\mathrm{H}\beta$, $\mathrm{H}\delta_A$, $\mathrm{H}\gamma_A$) against a metallicity-sensitive composite index ($[\mathrm{MgFe}]' = \sqrt{\mathrm{Mg}_b (0.72\,\mathrm{Fe5270} + 0.28\,\mathrm{Fe5335})}$).
   - decouples the **age-metallicity degeneracy** and directly measures $[\alpha/\mathrm{Fe}]$ overabundance in early-type galaxies.
2. **full spectrum / broadband SED fitting**:
   - fits photometric fluxes from UV to far-IR or pixel-by-pixel spectroscopy against SPS grids.
   - infers simultaneous posterior probability distributions for $M_*$, SFR, age, metallicity $Z$, and dust optical depth $A_V$ (e.g., via MCMC or nested sampling).

---

### systematic uncertainties

- **binary stellar interactions**: standard SPS codes traditionally assume single-star evolution. Incorporating mass transfer, common envelope phases, and mergers (e.g., **BPASS**) prolongs the production of ionizing photons up to $\sim 100$ Myr, suppresses the required SFR, and alters Wolf-Rayet populations.
- **chemical abundance patterns ($[\alpha/\mathrm{Fe}]$)**: stars in massive ellipticals are enriched in $\alpha$-elements ($[\alpha/\mathrm{Fe}] > 0$) due to rapid star formation quenched before Type Ia SNe exploded. Fitting these galaxies with solar-scaled empirical libraries causes biased ages and metallicities.
- **dust-geometry degeneracies**: the spatial distribution of dust relative to young vs old stars (Charlot & Fall 2000 two-component model) heavily modulates the inferred UV slope $\beta$ and stellar mass.

---

## see also

- [[Observational_Astrophysics_MOC]]
- [[Stellar_Astrophysics_MOC]]
- [[Single stellar population SSP]]
- [[SPS code families]]
- [[Lick indices]]
- [[Age-metallicity degeneracy]]
- [[SED fitting basics]]
- [[Initial mass function]]
- [[Star formation history of a population]]
- [[Dust attenuation in synthetic populations]]
- [[Stellar mass estimation in unresolved populations]]
- [[Age estimation in unresolved populations]]
- [[SFR tracers from population synthesis]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_sps-01.png](../../assets/images/obs_sps-01.png)
*Lecture 7: Stellar Population Synthesis (SPS) (Prof. Paolo Cassata).*

![obs_sps-02.png](../../assets/images/obs_sps-02.png)
*The forward problem of population synthesis: convolving star formation and chemical history.*

![obs_sps-03.png](../../assets/images/obs_sps-03.png)
*Master convolution equation: L_lambda(t) = int_0^t psi(t - tau) * L_lambda,SSP(tau, Z(t - tau)) d tau.*

![obs_sps-04.png](../../assets/images/obs_sps-04.png)
*Resolved stellar populations (CMD analysis) vs unresolved populations (integrated SED).*

![obs_sps-05.png](../../assets/images/obs_sps-05.png)
*Spectral energy distribution (SED) features: 4000 A break (D_4000) and Balmer break (3646 A).*

![obs_sps-06.png](../../assets/images/obs_sps-06.png)
*D_4000 as age and metallicity diagnostic in early-type galaxies.*

![obs_sps-07.png](../../assets/images/obs_sps-07.png)
*Balmer break strength in post-starburst (A-type star dominated) galaxies.*

![obs_sps-08.png](../../assets/images/obs_sps-08.png)
*UV continuum slope beta (f_lambda proportional to lambda^beta) as tracer of dust and young stars.*

![obs_sps-09.png](../../assets/images/obs_sps-09.png)
*Optical-to-NIR color evolution as stars age along the isochrones.*

![obs_sps-10.png](../../assets/images/obs_sps-10.png)
*Mass return fraction R(t): gas returned to ISM via stellar winds and supernovae (~30-40%).*

![obs_sps-11.png](../../assets/images/obs_sps-11.png)
*Remnant mass fraction in white dwarfs, neutron stars, and black holes.*

![obs_sps-12.png](../../assets/images/obs_sps-12.png)
*Panchromatic galaxy SED: stellar continuum, dust absorption, nebular emission lines, FIR emission.*



## Linked References

- [[Age estimation in unresolved populations]]
- [[Age-metallicity degeneracy]]
- [[Alpha-Fe enhancement]]
- [[Chemical evolution of galaxies]]
- [[Dust attenuation and extinction curves]]
- [[Dust attenuation in synthetic populations]]
- [[Galaxy spectroscopy by type]]
- [[Initial mass function]]
- [[Lick indices]]
- [[Metallicity and chemical evolution]]
- [[Photometric redshifts]]
- [[SED fitting basics]]
- [[SED fitting for SFH]]
- [[SFH from resolved CMDs]]
- [[SPS code families]]
- [[Single stellar population SSP]]
- [[Star formation history of a population]]
- [[Star formation history parametrizations]]
- [[Stellar mass estimation in unresolved populations]]
- [[Why hot massive stars dominate luminosity]]
- [[Observational_Astrophysics_MOC]]
- [[Observational_Cosmology_MOC]]


