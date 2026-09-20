---
layout: "default"
title: "SPS code families"
---
modern **stellar population synthesis (SPS) code families** translate theoretical stellar evolution into observable galaxy spectra. Because different codes make distinct physical assumptions regarding isochrone calculations, stellar atmospheric libraries, post-main sequence evolutionary phases (notably the thermally pulsing AGB), and binary interactions, systematic offsets of $\Delta \log M_* \sim 0.1\text{--}0.3$ dex and $\Delta \log \mathrm{SFR} \sim 0.1\text{--}0.2$ dex naturally arise between codes when fitting the exact same galaxy photometry.

---

### the primary SPS code libraries

#### 1. Bruzual & Charlot (BC03 / BC07)
- **architecture**: built on **Padova 1994** stellar evolutionary tracks, combined with empirical stellar libraries (**STELIB** at $R \approx 2000$, and later **MILES** at $R \approx 2000$) supplemented by the theoretical **BaSeL 3.1** library for hot stars and non-solar abundances.
- **evolutionary features**: treats the TP-AGB phase using canonical synthetic stellar evolution tracks.
- **role in astrophysics**: the community "gold standard" workhorse for over two decades; embedded inside classical SED-fitting tools including **FAST**, **MAGPHYS**, **HYPERZ**, and early versions of **CIGALE**.
- **limitations**: Padova isochrones underestimate the NIR luminosity contribution of carbon-rich TP-AGB stars at intermediate ages ($\tau \sim 0.5\text{--}1.5$ Gyr).

#### 2. Maraston (M05 / M11)
- **architecture**: relies on the **fuel consumption theorem** (Renzini & Buzzoni 1986), which calculates post-main sequence luminosities from the total nuclear fuel burned in each phase rather than integrating isochrones.
- **TP-AGB treatment**: heavily calibrates the TP-AGB phase against resolved globular and open star clusters in the Magellanic Clouds. Predicts up to $80\%$ of the bolometric NIR flux ($J, H, K$) is emitted by TP-AGB stars between $\tau \approx 0.2$ and $2$ Gyr.
- **impact**: in the late 2000s, fitting high-redshift ($z \sim 1.5\text{--}3$) galaxies with M05 yielded stellar masses up to a factor of $\sim 2$ lower than BC03, igniting the "TP-AGB controversy." Subsequent Spitzer/Herschel NIR and mid-IR rest-frame measurements showed the true TP-AGB impact lies midway between BC03 and M05.

#### 3. FSPS (Flexible Stellar Population Synthesis; Conroy et al. 2009, 2010)
- **architecture**: a fully modular, highly parameterized Fortran/C library wrapped in Python (`python-fsps`).
- **modularity**: enables the user to independently select:
  - isochrone grids: **MIST** (MESA isochrones, default), **Padova / PARSEC**, or **BaSTI**.
  - stellar libraries: **MILES**, **BaSeL**, or synthetic atmospheres.
  - TP-AGB parameterization: adjustable weight factors for fuel consumption in carbon and oxygen AGB stars.
  - custom dust attenuation curves (Charlot & Fall, Calzetti, Conroy flexible curve).
  - self-consistent nebular emission computed via integrated **CLOUDY** photoionization grids.
- **role in astrophysics**: current state-of-the-art engine powering Bayesian SED-fitting codes such as **Prospector**, **BAGPIPES**, and **BEAGLE**.

#### 4. Starburst99 (Leitherer et al. 1999, 2014)
- **architecture**: purpose-built for **young, massive, starbursting populations** ($\tau \le 100$ Myr).
- **specialized physics**:
  - tracks the production rate of hydrogen and helium ionizing photons: $Q(\mathrm{H}^0)$ ($h\nu \ge 13.6$ eV), $Q(\mathrm{He}^0)$ ($h\nu \ge 24.6$ eV), and $Q(\mathrm{He}^+)$ ($h\nu \ge 54.4$ eV).
  - incorporates **Geneva evolutionary tracks** with stellar rotation, tracking rotational mixing and enhanced mass loss in massive O and B stars.
  - detailed models of **Wolf-Rayet (WR)** stars and non-LTE expanding stellar wind atmospheres (Pauldrach, Hillier).
  - predicts mechanical energy and momentum injection rates ($dE_{\rm mech}/dt$, $dP/dt$) from stellar winds and core-collapse supernovae.
- **role in astrophysics**: the benchmark for calibrating nebular emission lines ($\mathrm{H}\alpha$, $[\mathrm{O\,III}]$), mechanical feedback into the ISM, and UV-based star formation rate tracers.

#### 5. BPASS (Binary Population and Spectral Synthesis; Eldridge & Stanway 2017)
- **architecture**: explicitly incorporates **interacting binary stellar evolution** across a dense grid of initial primary masses, secondary masses, and orbital separations.
- **physical mechanisms**: Roche lobe overflow, mass transfer, common envelope ejection, quasi-homogeneous evolution, and binary mergers.
- **observational impact**:
  - binary mass transfer strips hydrogen envelopes, producing hot helium stars that emit copious ionizing photons long after single O stars have exploded ($\tau \sim 10\text{--}100$ Myr).
  - produces Wolf-Rayet stars without requiring extreme stellar winds.
  - substantially boosts the ratio of ionizing to UV continuum flux at low metallicity ($Z \le 0.1\,Z_\odot$).
- **role in astrophysics**: indispensable for modeling **cosmic reionization**, low-metallicity dwarf galaxies, and early galaxies observed by **JWST** at $z > 6$.

---

### comparative synthesis matrix

| code | primary isochrones | stellar atmospheres | TP-AGB prescription | binary evolution | nebular emission | primary use case |
|---|---|---|---|---|---|---|
| **BC03** | Padova 1994 | STELIB / BaSeL 3.1 / MILES | Synthetic tracks | Single stars | External / optional | General galaxy SED fitting |
| **M05** | Cassisi / Padova | BaSeL / Pickles | Fuel Consumption Theorem | Single stars | External / optional | Intermediate-age NIR tests |
| **FSPS** | MIST / PARSEC / BaSTI | MILES / BaSeL / synthetic | Parametric fuel calibration | Optional | Integrated CLOUDY | Advanced Bayesian SED inference |
| **SB99** | Geneva (with rotation) | Lejeune / Pauldrach / Hillier | N/A ($\tau < 100$ Myr) | Single stars | Integrated CLOUDY | Starbursts, winds, ionizing budget |
| **BPASS** | Custom binary grid | WM-basic / CMFGEN / BaSeL | Track-based | Detailed binaries | Integrated CLOUDY | High-$z$ JWST, reionization, low-$Z$ |

---

### systematic impact on inferred galaxy parameters

when identical photometric catalogs are fit with different SPS codes:
1. **stellar mass ($M_*$)**:
   - M05 yields masses lower by $\sim 0.15\text{--}0.3$ dex relative to BC03 for post-starburst and $z \sim 2$ star-forming systems due to elevated TP-AGB NIR luminosity.
   - BPASS yields slightly lower masses for actively star-forming systems because binary channels provide additional luminosity per unit mass.
2. **star formation rate (SFR)**:
   - standard single-star calibrations (BC03, SB99) require a higher SFR to reproduce observed $\mathrm{H}\alpha$ luminosities compared to BPASS, where binaries maintain ionizing flux out to $50\text{--}100$ Myr.
3. **metallicity ($Z$)**:
   - empirical libraries (MILES) restrict fits to Milky Way solar-scaled $[\alpha/\mathrm{Fe}]$ ratios, artificially skewing metallicity and age fits in massive ellipticals.

---

## see also

- [[Observational_Astrophysics_MOC]]
- [[Stellar_Astrophysics_MOC]]
- [[Stellar population synthesis]]
- [[Single stellar population SSP]]
- [[SED fitting basics]]
- [[Initial mass function]]
- [[Star formation history of a population]]
- [[Stellar mass estimation in unresolved populations]]
- [[Dust attenuation in synthetic populations]]
- [[H-alpha SFR tracer]]
- [[UV SFR tracer]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_sps-19.png](../../assets/images/obs_sps-19.png)
*Comparison of modern SPS codes: Bruzual & Charlot (2003, BC03), Maraston (2005, M05), FSPS (Conroy).*

![obs_sps-20.png](../../assets/images/obs_sps-20.png)
*Treatment of Thermally Pulsing Asymptotic Giant Branch (TP-AGB) stars in SPS models.*

![obs_sps-21.png](../../assets/images/obs_sps-21.png)
*Fuel consumption theorem (Renzini & Buzzoni 1986) in Maraston models.*

![obs_sps-22.png](../../assets/images/obs_sps-22.png)
*Impact of TP-AGB stars on NIR luminosity and derived stellar masses at z ~ 1-2.*

![obs_sps-23.png](../../assets/images/obs_sps-23.png)
*Binary stellar evolution channels: BPASS code (Eldridge et al.) and Wolf-Rayet star production.*

![obs_sps-24.png](../../assets/images/obs_sps-24.png)
*Stellar rotation in models (Geneva tracks) and extended main sequence lifetimes.*



## Linked References

- [[Age-metallicity degeneracy]]
- [[H-alpha SFR tracer]]
- [[Lick indices]]
- [[SED fitting basics]]
- [[SFR tracers from population synthesis]]
- [[Single stellar population SSP]]
- [[Star formation history of a population]]
- [[Stellar mass estimation in unresolved populations]]
- [[Stellar population synthesis]]
- [[Thermal continuum from stellar photosphere]]
- [[Observational_Astrophysics_MOC]]


