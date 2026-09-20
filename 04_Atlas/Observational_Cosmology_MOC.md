---
layout: "default"
title: "Observational_Cosmology_MOC"
---
# Observational Cosmology — Map of Content

> **Oral Exam Status**: **Deferred to Winter Session (January / February 2027)** (Examiner: Prof. Giulia Rodighiero, approved combination 1-2-5). Formerly scheduled for 25 September 2026. Tracked in Exams autumn 2026 sprint.

A.Y. 2024/2025 — **Prof. Giulia Rodighiero** and **Prof. Paolo Cassata**, with visiting professor **Pablo Pérez-González** and a special lecture on lensing by **Dr. Andrea Enia**.

The central thread of this course is a different question from the high-energy lab — instead of *how do we detect the most violent objects*, here it is:
	**how do we measure the universe itself, and everything inside it, from inside it?**

Every topic connects to this chain:
$$\text{distant source} \to \text{cosmological redshift} \to \text{expanding geometry} \to \text{distance ladder} \to \text{observable (flux, size, spectrum)} \to \text{cosmological parameters}$$

Every observation we make is contaminated by the universe we are trying to measure. The K-correction, the angular-diameter turnover, the surface-brightness $(1+z)^{-4}$ penalty — all of them are the universe leaving fingerprints on its own photons.

---

## Timetable and lecturers

- **24 Feb – 24 Mar** — G. Rodighiero (Chapters 0–1: Friedmann universe, large-scale structure)
- **31 Mar – 3 Apr** — **P. Pérez-González** (visiting, galaxy studies / high-z observations — see below)
- **7–8 Apr** — A. Enia (special lectures on gravitational lensing)
- **14 Apr – 26 May** — P. Cassata (thermal history, CMB, primordial universe, perturbations, structure formation)

Note: in the original syllabus topic 7 ("Primordial Universe, Big Bang, phase transitions, cosmological inflation") was struck through and replaced by **"Detection techniques for protoclusters"**, and a red frame surrounds topics 9–10 (post-recombination IGM and galaxy formation/evolution) — this is the part tied directly to JWST and to Pablo's visit.

---

## Block 0 — The homogeneous Friedmann universe

This is the mathematical spine that everything later hangs off of. Before any real object enters the course, we set the stage: a metric, a scale factor, a redshift, a handful of density parameters.

- [[Cosmological principle]] — homogeneous + isotropic at a given cosmic time; "fundamental observer"
- [[Hubble law]] — $\vec{v} = H_0 \vec{d}$, recession proportional to distance, scale factor $R(t)$
- [[Robertson-Walker metric]] — $ds^2 = dt^2 - \frac{a^2(t)}{c^2}\left[\frac{dr^2}{1-kr^2} + r^2(d\vartheta^2 + \sin^2\vartheta\, d\varphi^2)\right]$, $a(t) \equiv R(t)/R_0$
- [[Curvature parameter k]] — $k=0$ flat, $k=+1$ closed spherical, $k=-1$ open hyperbolic
- [[Comoving vs proper coordinates]] — $d = a(t) \cdot r$, $H_0 = \dot{a}/a|_{t_0} \simeq 70$ km/s/Mpc
- [[Cosmological redshift]] — $(1+z) = a(t_e)^{-1} = \nu_e/\nu_0$; redshift is the ratio of scale factors between emission and reception
- [[Newtonian derivation of Friedmann]] — shell argument, $\ddot{a} = -\frac{4\pi}{3}G\rho_0 a^{-2}$, energy-conservation integral gives $\dot{a}^2 = \frac{8\pi G\rho_0}{3}a^{-1} - kc^2$
- [[Friedmann solutions]] — Milne vacuum ($R\propto t$), Einstein–de Sitter ($a\propto t^{2/3}$), open, closed
- [[GR Friedmann with Lambda|GR Friedmann with Λ]] — Einstein field eqs. $R_{ik} - \tfrac{1}{2}g_{ik}R - g_{ik}\Lambda = \frac{8\pi G}{c^4}T_{ik}$; $T_{ik}$ perfect fluid; $\Lambda$ as vacuum energy $\rho_V$
- [[Density parameters]] — $\Omega_m, \Omega_\Lambda, \Omega_\gamma, \Omega_k$; critical density $\rho_c = 3H_0^2/8\pi G$
- [[Matter vs radiation density scaling]] — $\rho_m \propto a^{-3}$, $\rho_\gamma \propto a^{-4}$, equivalence at $z \sim 3330$, $t \sim 53{,}000$ yr
- [[Curvature-dynamics relation]] — $c^2 k = H_0^2[\Omega_m + \Omega_\Lambda - 1]$, flat iff $\sum\Omega = 1$
- [[Deceleration parameter]] — $q_0 \equiv -\ddot{a}a/\dot{a}^2|_{t_0} = \Omega_m/2 - \Omega_\Lambda$
- [[Time-redshift relation]] — $dt = -\frac{dz}{H_0(1+z)}[(1+z)^2(\Omega_m z + 1) - z\Omega_\Lambda(2+z)]^{-1/2}$
- [[Cosmic look-back time]] — integral out to $z$; extrapolation to $z\to\infty$ gives $t_0 \approx 13.7$ Gyr

---

## Block 1 — Distances in cosmology

Four distances, all equal at low $z$, all different at high $z$. This is where observational cosmology stops being linear algebra and becomes the art of comparing apples to apples across billions of years.

- [[Radial comoving distance]] — $d_M = r(z) = \frac{c}{H_0}\int_0^z [\Omega_m(1+z')^3 + \Omega_\Lambda]^{-1/2}\, dz'$ (flat)
- [[Angular diameter distance]] — $d_A = D/d\vartheta = d_M/(1+z)$; non-monotonic, turns over around $z \sim 1.5$
- [[Luminosity distance]] — $d_L = r(1+z) = d_M(1+z) = d_A(1+z)^2$; two $(1+z)$ factors from photon-energy loss and photon-arrival-rate dilation
- [[Surface brightness dimming]] — $\sigma \propto d_A^2/d_L^2 \propto (1+z)^{-4}$, the brutal penalty on high-$z$ imaging
- [[K-correction]] — the translation between what the source emits at $\nu_e = \nu_0(1+z)$ and what our filter sees at $\nu_0$; magnitudes become $m = M + 5\log d_{L,\text{Mpc}} + 25 + K(z)$
- [[K-correction in optical vs sub-mm]] — in the optical $K(z) > 0$, galaxies look fainter; in sub-mm $K(z) < 0$ because we climb the dust bump, so 850 μm sources stay roughly constant flux from $z\sim1$ to $z\sim10$ (the sub-mm is a window onto the high-$z$ universe)
- [[Supernova Hubble diagram]] — Perlmutter, Riess, Schmidt; SN Ia Type Ia standard candles at $z \sim 0.5$–$1$ are fainter than an empty or matter-only universe predicts → need $\Lambda$; best fit $\Omega_M \approx 0.27$, $\Omega_\Lambda \approx 0.73$

---

## Block 2 — The standard model: ΛCDM

The current best numbers:
$$H_0 \simeq 70~\text{km/s/Mpc}, \quad \Omega_m \simeq 0.3, \quad \Omega_\Lambda \simeq 0.7, \quad \Omega_\gamma \simeq 10^{-3}$$

Three regimes in $a(t)$:
- **Radiation-dominated** until $z \sim 3000$: $a(t) \propto t^{1/2}$
- **Matter-dominated** from recombination until $z \sim 0.7$: $a(t) \propto t^{2/3}$
- **Λ-dominated** from $z \sim 0.7$ onward: $a(t) \propto \exp(\sqrt{\Lambda/3}\, t)$

- [[ΛCDM current parameters]]
- [[Transition epochs]] — matter–radiation equivalence, recombination, onset of Λ
- [[Various models of the universe]] — EdS vs open vs standard — they coincide at small $t$, diverge massively at large $t$

---

## Block 3 — Deviations from homogeneity and gravitational lensing  *(Rodighiero + Enia)*

Once the FLRW backdrop is built, we perturb it.

- [[Gravitational lensing - intro]] *(Dr. A. Enia, 7–8 April)*
- [[Strong vs weak lensing]]
- [[Lensing as a cosmological probe]] — mass mapping, Einstein radius, time delays

---

## Block 4 — Perturbations and peculiar motions *(Cassata, later)*

- [[Cosmological evolution of perturbations in the cosmic fluid]]
- [[Perturbations in an expanding universe]]
- [[Peculiar velocities of galaxies and structures]]
- [[Jeans analysis in expanding universe]]
- [[Growth factor D(z)]]

---

## Block 5 — Thermal history of the universe *(Cassata)*

- [[Brief thermal history]] — from Planck era to recombination
- [[Recombination]] — $z \sim 1100$, drop in free-electron fraction
- [[Decoupling]] — photon mean free path → $\infty$, last scattering surface

---

## Block 6 — The Cosmic Microwave Background *(Cassata)*

- [[CMB - discovery and blackbody spectrum]] — Penzias & Wilson 1965, $T_0 = 2.725$ K
- [[CMB anisotropies]] — dipole, acoustic peaks, $\Delta T/T \sim 10^{-5}$
- [[CMB power spectrum]] — COBE, WMAP, Planck; peaks constrain $\Omega_b h^2$, $\Omega_m h^2$, curvature
- [[Polarization E and B modes]]

---

## Block 7 — Primordial universe  *(Cassata — replaced in this AY by detection techniques for protoclusters)*

- [[Big Bang nucleosynthesis]]
- [[Phase transitions]]
- [[Cosmological inflation]] — Guth, Linde; solves flatness, horizon, monopole problems
- [[Protocluster detection techniques]] — overdensities of Lyα emitters, narrow-band imaging, IR-selected structures, spectroscopic confirmation, the JWST era

---

## Block 8 — Origin and evolution of cosmological structure *(Cassata)*

- [[Linear vs nonlinear regime]]
- [[Spherical collapse]] — $\delta_c \simeq 1.686$
- [[Press-Schechter formalism]] — halo mass function
- [[N-body simulations]] — Millennium, IllustrisTNG

---

## Block 9 — The post-recombination universe, diffuse baryons, IGM *(Cassata)*

- [[Reionization]] — $z \sim 6$–$10$, ionizing photons from first galaxies/quasars
- [[Intergalactic medium]]
- [[Lyman-alpha forest|Lyman-α forest]] — neutral hydrogen along quasar sight lines
- [[Missing baryons]] — WHIM, warm-hot intergalactic medium

---

## Block 10 — Galaxy formation and evolution *(Pablo Pérez-González + Cassata)*

This block is where observational cosmology touches down into actual galaxies and the data Pablo works on.

Pablo's lecture series (31 March – 3 April):

### Lecture 0 — historical introduction
- [[Pablo_01_Introduction_to_galaxy_studies]] — historical arc from Al-Sufi's "small cloud" to JWST

### Lecture 1A — statistical properties of galaxies (lecture overview)
- [[Pablo_02_Statistical_properties_of_galaxies]] — the master overview of this block

#### Distributions of galaxy parameters
- [[Color bimodality of galaxies]] — Baldry 2004 two peaks in $u-r$
- [[Red sequence and blue cloud]] — passive vs star-forming populations
- [[Green valley and quenching tracks]] — Faber 2007 evolutionary arrows
- [[Galaxy color, density and morphology]] — Hogg 2004, Blanton & Moustakas 2009

#### Counts
- [[Galaxy number counts N(m)]] — the Euclidean prediction $N(<m) \propto 10^{0.6 m}$
- [[Differential vs cumulative number counts]] — $dN/dm$ vs $N(<m)$, $dN/dS$
- [[Galaxy counts at different wavelengths]] — Durham compilation, optical to sub-mm
- [[Driver 1998 counts by morphology]] — faint blue galaxy excess

#### Sizes and biases
- [[Galaxy size-luminosity relation]] — $R_e$ vs $M_B$ across galaxy classes
- [[Redshift distribution of flux-limited samples]] — Brinchmann 2008
- [[Malmquist bias]] — flux-limited samples preferentially select luminous sources
- [[Photometric redshifts]] — Benítez 2000 likelihood, 4000 Å break
- [[Photo-z biases and catastrophic outliers]] — Oyaizu 2008, failure modes

#### Luminosity function
- [[Luminosity function definition]] — $dN = \phi(L)\, dL\, dV$
- [[Schechter function]] — $\phi(L) = (\phi^*/L^*)(L/L^*)^\alpha e^{-L/L^*}$
- [[Schechter function in magnitudes]] — the form fit to data
- [[Integrals of the Schechter function]] — number, luminosity, $N(>L^*)$ as Gamma functions
- [[1Vmax estimator]] — Schmidt 1968 non-parametric LF
- [[Schechter K-band luminosity function]] — Smith 2009: $M^*=-23.19$, $\alpha=-0.81$, $\phi^*=0.0166$
- [[Double power-law modified Schechter]] — Pérez-González 2005 bright-end excess at high $z$
- [[LF by morphology and SED]] — Driver 2006, Wolf 2003

#### Mass functions and the halo connection
- [[Stellar mass function]] — Cole 2001, Bell 2003, Pérez-González 2008
- [[Halo mass function vs galaxy mass function]] — the factor-of-six gap
- [[Halo gravity suppression of galaxy formation]] — SN feedback at low mass, AGN feedback at high mass
- [[Stellar-to-halo mass ratio]] — Behroozi 2013 peak at $M_h \sim 10^{12}\,M_\odot$

#### Cosmic histories (integrals over $z$)
- [[Cosmic star formation history]] — Madau-Dickinson plot, peak at $z \sim 2$
- [[Cosmic stellar mass density growth]] — Pérez-González 2008a buildup
- [[SFR and stellar mass density connection]] — $\rho_{SFR} = d\rho_*/dt$

#### Scaling relations
- [[Galaxy main sequence of star formation]] — Rodighiero 2011, Santini 2017
- [[Fundamental plane of ellipticals]] — $R_e \propto \sigma^{1.4} \langle I \rangle_e^{-0.9}$
- [[Tully-Fisher relation]] — $L \propto V_{\text{flat}}^4$
- [[Schmidt-Kennicutt law]] — $\Sigma_{SFR} \propto \Sigma_{\text{gas}}^{1.4}$
- [[Magorrian relation]] — $M_{BH} \approx 10^{-3}\, M_{\text{bulge}}$

### Lecture 1B — star formation in galaxies
- [[Pablo_03_Star_formation_in_galaxies]] — the master overview of this block

#### Definitions and time scales
- [[Star formation rate and sSFR]] — $\psi = dM_*/dt$, sSFR as doubling-time inverse
- [[Star formation history parametrizations]] — SSP, CON, τ, delayed, non-parametric
- [[Galaxy time scales]] — Hubble, dynamical $\sqrt{3\pi/16 G\rho}$, cooling, SF, enrichment, merger
- [[Initial mass function]] — Salpeter 1955 ($\alpha = 2.35$), Kroupa 2001, Chabrier 2003

#### SFR tracers across the spectrum
- [[UV SFR tracer]] — Kennicutt 1998, $1.4 \times 10^{-28} L_\nu$
- [[UV slope and IRX-beta relation]] — Meurer 1999, dust correction without IR
- [[Dust attenuation and extinction curves]] — Calzetti 2000, Cardelli 1989, Charlot & Fall 2000
- [[H-alpha SFR tracer]] — $7.9 \times 10^{-42} L(\text{H}\alpha)$, 10 Myr timescale
- [[Balmer decrement]] — $F(\text{H}\alpha)/F(\text{H}\beta) = 2.86$ for case B
- [[Lyman alpha SFR tracer]] — resonance scattering, Verhamme 2008
- [[OII SFR tracer]] — forbidden, metallicity-dependent, redshift-desert tool
- [[Other SFR tracer lines]] — Pα, [CII] 158 μm, PAHs, radio recombination
- [[X-ray SFR tracer]] — HMXBs + diffuse, Ranalli 2003, metallicity dependence
- [[IR SFR tracer]] — $4.5 \times 10^{-44} L_{\text{TIR}}$, Pérez-González 2006
- [[Radio SFR tracer]] — FIR-radio correlation $q \simeq 2.3$, Murphy 2011
- [[SFR tracer comparison]] — Cardiel 2003, tracer disagreements as diagnostics

#### SFH reconstruction and SPS
- [[SFH from resolved CMDs]] — Local Group, Ferguson 2002, Tolstoy 2009, Harris & Zaritsky 2004
- [[SED fitting for SFH]] — Papovich 2001, Pérez-González 2008, modern codes
- [[Stellar population synthesis]] — BC03, Maraston 2005, FSPS, Starburst99, Lick indices

#### Galaxy classes
- [[Starburst galaxies]] — M82, Wolf-Rayet, BCDs, SSCs, superwinds
- [[Post-starburst galaxies]] — E+A, Balmer absorption, Kriek 2010
- [[LIRGs ULIRGs HyLIRGs]] — IRAS 1983, Sanders & Mirabel 1996, Arp 220
- [[Galaxy mergers and SF]] — $f_m \propto (1+z)^{2-3}$, merger-ULIRG-elliptical sequence

#### Chemical evolution
- [[Chemical evolution of galaxies]] — Tinsley 1979, α/Fe clock, mass-metallicity, yields

### Lecture 1C — nuclear activity and supermassive black holes in galaxies
- [[Pablo_04_Nuclear_activity_in_galaxies]] — the master overview of accretion physics, AGN demographics, and feedback

#### Accretion engines and unified model
- [[AGN taxonomy unified model and feedback]] — Eddington limit, Antonucci-Miller unified model, Magorrian / M-sigma relations, and quasar vs radio mode feedback
- [[AGN and supermassive black holes]] — EHT event-horizon shadows (M87*, Sgr A*), relativistic jets, and GRAVITY BLR kinematics

#### Spectroscopic classification
- [[BPT emission line diagnostic diagram]] — [O III]/Hβ vs [N II]/Hα line ratios, Kewley vs Kauffmann starburst boundaries, Seyferts, and LINERs

### Lecture 1D — galaxies at cosmological distances and cosmic dawn
- [[Pablo_05_Galaxies_at_cosmological_distances]] — the master overview of high-z galaxy selection, JWST discoveries, and structural evolution

#### High-redshift selection and cosmic dawn
- [[High-redshift galaxy selection and Lyman break technique]] — 912 Å photoelectric dropouts (U, B, V dropouts), LAEs, and sub-mm galaxies
- [[Cosmic dawn and high-redshift galaxies with JWST]] — JADES-GS-z14-0 ($z=14.32$), $z > 10$ overabundance puzzle, and Little Red Dots (LRDs)

#### Morphology and SED analysis
- [[Non-parametric galaxy morphology metrics]] — CAS system ($C, A, S$), Gini coefficient ($G$), and $M_{20}$ merger diagnostics
- [[Galaxy SED fitting]] — multi-wavelength photometric redshifts, stellar mass estimation, and star formation history inversion
- [[Galaxy morphology vs physical properties]] — Hubble sequence physical drivers, visual classification, and environmental morphology-density relation

---

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.CO benchmark papers underlying the BAO and weak-lensing techniques above.

- [[Eisenstein_2005_BAO_Detection_SDSS_LRGs|Eisenstein et al. (2005) — BAO Detection in SDSS LRGs]] — first BAO detection, the sound horizon as a standard ruler
- [[DESI_2024_BAO_Cosmological_Constraints|DESI Collaboration (2024) — DESI 2024 VI: BAO Cosmological Constraints]] — multi-redshift BAO, hint of dynamical dark energy ($w_0,w_a$)
- [[Bartelmann_Schneider_2001_Weak_Gravitational_Lensing|Bartelmann & Schneider (2001) — Weak Gravitational Lensing]] — convergence/shear formalism, cosmic shear power spectrum

---

## Appendices and tools

- [[Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback|Cosmology calculator — how to use H0 Ω_m Ω_Λ to get d_L, d_A, t_lookback]]
- [[Surveys to remember]] — 2dFGRS, SDSS, DEEP-2, BOSS, WiggleZ, WFMOS, 4MOST
- [[Space and ground facilities relevant for OC]] — HST, Chandra, XMM, Spitzer, Herschel, JWST, Keck, VLT, Subaru, LBT, GTC, ALMA; upcoming ELT, SKA

---

---

## Dynamic Zettel Index (Dataview)

```dataview
LIST
FROM "03_Zettel/Theory"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.name ASC
```

---

## Master Figure Index (49 Total Images)

Every single publication figure, Planck CMB spectrum, 21cm cosmology plot, quasar Gunn-Peterson spectrum, and lecture slide in `07_Images/Observational_Cosmology/` is cataloged below with direct links and pedagogical context:

| Image Asset | Diagnostic Category & Cosmological Physics | Primary Zettel Note |
|---|---|---|
| `![barkana_loeb_cosmic_evolution.png](../assets/images/barkana_loeb_cosmic_evolution.png)` | Barkana & Loeb reionization timeline, dark matter halo mass threshold, and density fluctuations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![barkana_loeb_halo_mass.png](../assets/images/barkana_loeb_halo_mass.png)` | Barkana & Loeb reionization timeline, dark matter halo mass threshold, and density fluctuations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![barkana_loeb_mass_fluctuations.png](../assets/images/barkana_loeb_mass_fluctuations.png)` | Barkana & Loeb reionization timeline, dark matter halo mass threshold, and density fluctuations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![barkana_loeb_reionization.png](../assets/images/barkana_loeb_reionization.png)` | Barkana & Loeb reionization timeline, dark matter halo mass threshold, and density fluctuations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![becker_GP_spectra.png](../assets/images/becker_GP_spectra.png)` | SDSS $z \sim 6$ quasar absorption spectra, Gunn-Peterson trough, and effective optical depth $\tau_{\rm eff}$ | [[Reionization]] |
| `![becker_GP_trough.png](../assets/images/becker_GP_trough.png)` | SDSS $z \sim 6$ quasar absorption spectra, Gunn-Peterson trough, and effective optical depth $\tau_{\rm eff}$ | [[Reionization]] |
| `![fan_optical_depth.png](../assets/images/fan_optical_depth.png)` | SDSS $z \sim 6$ quasar absorption spectra, Gunn-Peterson trough, and effective optical depth $\tau_{\rm eff}$ | [[Reionization]] |
| `![fan_quasar_spectra.png](../assets/images/fan_quasar_spectra.png)` | SDSS $z \sim 6$ quasar absorption spectra, Gunn-Peterson trough, and effective optical depth $\tau_{\rm eff}$ | [[Reionization]] |
| `![linder_growth_history.png](../assets/images/linder_growth_history.png)` | Linder growth factor $D(z)$ and growth rate parameter $f(z) = \Omega_m(z)^\gamma$ | [[Growth factor D(z)]] |
| `![obscos_lec0_p01.png](../assets/images/obscos_lec0_p01.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Brief thermal history]] |
| `![obscos_lec0_p05.png](../assets/images/obscos_lec0_p05.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Brief thermal history]] |
| `![obscos_lec0_p10.png](../assets/images/obscos_lec0_p10.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Brief thermal history]] |
| `![obscos_lec0_p15.png](../assets/images/obscos_lec0_p15.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Brief thermal history]] |
| `![obscos_lec1a_p02.png](../assets/images/obscos_lec1a_p02.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Matter power spectrum and BAO]] |
| `![obscos_lec1a_p10.png](../assets/images/obscos_lec1a_p10.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Matter power spectrum and BAO]] |
| `![obscos_lec1a_p20.png](../assets/images/obscos_lec1a_p20.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Matter power spectrum and BAO]] |
| `![obscos_lec1a_p30.png](../assets/images/obscos_lec1a_p30.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Matter power spectrum and BAO]] |
| `![obscos_lec1a_p40.png](../assets/images/obscos_lec1a_p40.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Matter power spectrum and BAO]] |
| `![obscos_lec1b_p05.png](../assets/images/obscos_lec1b_p05.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Observational_Cosmology_MOC]] |
| `![obscos_lec1b_p15.png](../assets/images/obscos_lec1b_p15.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Observational_Cosmology_MOC]] |
| `![obscos_lec1b_p25.png](../assets/images/obscos_lec1b_p25.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Observational_Cosmology_MOC]] |
| `![obscos_lec1b_p45.png](../assets/images/obscos_lec1b_p45.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Observational_Cosmology_MOC]] |
| `![obscos_lec1b_p60.png](../assets/images/obscos_lec1b_p60.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Observational_Cosmology_MOC]] |
| `![obscos_lec2_p05.png](../assets/images/obscos_lec2_p05.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[AGN taxonomy unified model and feedback]] |
| `![obscos_lec2_p18.png](../assets/images/obscos_lec2_p18.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[AGN taxonomy unified model and feedback]] |
| `![obscos_lec2_p32.png](../assets/images/obscos_lec2_p32.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[AGN taxonomy unified model and feedback]] |
| `![obscos_lec2_p50.png](../assets/images/obscos_lec2_p50.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[AGN taxonomy unified model and feedback]] |
| `![obscos_lec3_p08.png](../assets/images/obscos_lec3_p08.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![obscos_lec3_p22.png](../assets/images/obscos_lec3_p22.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![obscos_lec3_p40.png](../assets/images/obscos_lec3_p40.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![obscos_lec3_p65.png](../assets/images/obscos_lec3_p65.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![obscos_lec3_p85.png](../assets/images/obscos_lec3_p85.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmic dawn and high-redshift galaxies with JWST]] |
| `![obscos_lesson1_p05.png](../assets/images/obscos_lesson1_p05.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Growth factor D(z)]] |
| `![obscos_lesson1_p15.png](../assets/images/obscos_lesson1_p15.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Growth factor D(z)]] |
| `![obscos_lesson1_p30.png](../assets/images/obscos_lesson1_p30.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Growth factor D(z)]] |
| `![obscos_lesson1_p45.png](../assets/images/obscos_lesson1_p45.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Growth factor D(z)]] |
| `![obscos_lesson2_p10.png](../assets/images/obscos_lesson2_p10.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmological evolution of perturbations in the cosmic fluid]] |
| `![obscos_lesson2_p25.png](../assets/images/obscos_lesson2_p25.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmological evolution of perturbations in the cosmic fluid]] |
| `![obscos_lesson2_p40.png](../assets/images/obscos_lesson2_p40.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmological evolution of perturbations in the cosmic fluid]] |
| `![obscos_lesson2_p55.png](../assets/images/obscos_lesson2_p55.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [[Cosmological evolution of perturbations in the cosmic fluid]] |
| `![planck_TE_spectrum.png](../assets/images/planck_TE_spectrum.png)` | Planck 2018 CMB temperature (TT) or polarization (TE) angular power spectrum | [[CMB power spectrum]] |
| `![planck_TT_spectrum.png](../assets/images/planck_TT_spectrum.png)` | Planck 2018 CMB temperature (TT) or polarization (TE) angular power spectrum | [[CMB power spectrum]] |
| `![pritchard_loeb_21cm_fig1.png](../assets/images/pritchard_loeb_21cm_fig1.png)` | Pritchard & Loeb 21cm hydrogen line brightness temperature $\delta T_b$, spin temperature $T_S$, and cosmic phases | [[Reionization]] |
| `![pritchard_loeb_21cm_phases.png](../assets/images/pritchard_loeb_21cm_phases.png)` | Pritchard & Loeb 21cm hydrogen line brightness temperature $\delta T_b$, spin temperature $T_S$, and cosmic phases | [[Reionization]] |
| `![pritchard_loeb_temperatures.png](../assets/images/pritchard_loeb_temperatures.png)` | Observational cosmology figure, CMB power spectrum, or survey diagnostic | [[Observational_Cosmology_MOC]] |
| `![suzuki_hubble_fig4.png](../assets/images/suzuki_hubble_fig4.png)` | Supernova Cosmology Project Union2.1 SNe Ia Hubble diagram and $(\Omega_m, \Omega_\Lambda)$ confidence contours | [[Supernova Hubble diagram]] |
| `![suzuki_hubble_fig5.png](../assets/images/suzuki_hubble_fig5.png)` | Supernova Cosmology Project Union2.1 SNe Ia Hubble diagram and $(\Omega_m, \Omega_\Lambda)$ confidence contours | [[Supernova Hubble diagram]] |
| `![suzuki_hubble_fig6.png](../assets/images/suzuki_hubble_fig6.png)` | Supernova Cosmology Project Union2.1 SNe Ia Hubble diagram and $(\Omega_m, \Omega_\Lambda)$ confidence contours | [[Supernova Hubble diagram]] |
| `![tegmark_power_spectrum.png](../assets/images/tegmark_power_spectrum.png)` | Tegmark et al. SDSS 3D matter power spectrum $P(k)$ turnover at horizon entry | [[Matter power spectrum and BAO]] |


---

## Professors Matteo Viel & Patricio Vielva Oral Exam Defense Preparation Matrix

### Question 1: Physics of CMB Acoustic Peaks and Parameter Sensitivities
- **Blackboard Prompt**: *Derive the sound horizon $r_s$ at recombination. How do the positions and relative heights of the acoustic peaks in the Planck $D_\ell^{TT}$ spectrum constrain $\Omega_b h^2$, $\Omega_c h^2$, and spatial curvature $\Omega_k$?*
- **Starting Equation**: 
  $$r_s(z_*) = \int_{z_*}^\infty \frac{c_s(z)}{H(z)} dz, \quad c_s(z) = \frac{c}{\sqrt{3\left(1 + \frac{3\rho_b}{4\rho_\gamma}\right)}}$$
- **Derivation & Blackboard Walkthrough**:
  1. Prior to recombination ($z_* \approx 1090$), photons and baryons are tightly coupled by Thomson scattering into a single relativistic fluid, oscillating inside dark matter gravitational potential wells.
  2. The sound speed is $c_s = c/\sqrt{3(1 + R)}$, where $R = 3\rho_b/(4\rho_\gamma) = \frac{31500 \Omega_b h^2}{T_{\rm CMB}/2.7255}(1+z)^{-1}$.
  3. The sound horizon $r_s(z_*)$ is the maximum distance an acoustic sound wave can travel from $t=0$ until photon decoupling: $r_s \approx 144.4 \pm 0.3$ Mpc.
  4. The angular scale observed on the sky today is: $\theta_s = \frac{r_s(z_*)}{D_A(z_*)}$, where $D_A(z_*)$ is the angular diameter distance to the last scattering surface: $D_A(z_*) = \int_0^{z_*} \frac{c dz}{H(z)}$.
  5. The multipole location of the first peak is: $\ell_1 \approx \frac{\pi}{\theta_s} \approx 220$.
  6. **Parameter Sensitivities**:
     - *Spatial Curvature $\Omega_k$*: Governs geodesic geometry. If $\Omega_k < 0$ (closed), geodesics converge, making $\theta_s$ larger, shifting all peaks to lower multipoles $\ell$. Planck measures $\ell_1 = 220.0 \pm 0.5$, constraining $\lvert\Omega_k\rvert < 0.005$ (flat universe).
     - *Baryon Density $\Omega_b h^2$*: Baryons add mass to the fluid without pressure. Increasing $\Omega_b$ deepens potential wells, enhancing compression peaks (odd peaks: 1st, 3rd) relative to rarefaction peaks (2nd peak). The ratio of peak 1 to peak 2 measures $\Omega_b h^2 \approx 0.02237$.
     - *Cold Dark Matter $\Omega_c h^2$*: Governs early matter-radiation equality. Higher $\Omega_c$ moves equality earlier, shortening radiation driving and suppressing the amplitude of all peaks relative to the Sachs-Wolfe plateau.

### Question 2: The Gunn-Peterson Trough and Reionization Optical Depth
- **Blackboard Prompt**: *Derive the Gunn-Peterson optical depth for neutral hydrogen in the intergalactic medium. Why does even a tiny neutral fraction ($x_{\rm HI} \sim 10^{-4}$) produce total absorption in quasar spectra at $z > 6$?*
- **Starting Equation**: 
  $$\tau_{\rm GP} = \int \sigma_\alpha(\nu) n_{\rm HI}(z) \frac{c dt}{dz} dz$$
- **Derivation & Blackboard Walkthrough**:
  1. The resonant cross-section for the Lyman-$\alpha$ transition ($\lambda_0 = 1215.67$ Å) is: $\sigma_\alpha(\nu) = \frac{\pi e^2}{m_e c} f_{12} \phi(\nu)$, where oscillator strength $f_{12} = 0.4162$.
  2. In an expanding universe, photon frequency redshifts as $\nu(z) = \nu_{\rm obs}(1+z)$. In the narrow resonance approximation $\phi(\nu) \approx \delta(\nu - \nu_0)$, changing variables from path length $dl = c dt$ gives:
     $$\tau_{\rm GP} = \frac{\pi e^2 f_{12}}{m_e c} \frac{n_{\rm HI}(z)}{H(z) \nu_0} = \frac{\pi e^2 f_{12} \lambda_0}{m_e c} \frac{n_{\rm HI}(z)}{H(z)}$$
  3. For a high-redshift universe in the matter-dominated regime ($H(z) \approx H_0 \sqrt{\Omega_m}(1+z)^{3/2}$) with total baryon number density $n_H(z) = n_{H,0}(1+z)^3$:
     $$\tau_{\rm GP}(z) \approx 4.9 \times 10^5 \left(\frac{\Omega_b h^2}{0.022}\right) \left(\frac{\Omega_m h^2}{0.14}\right)^{-1/2} \left(\frac{1+z}{7}\right)^{3/2} x_{\rm HI}$$
  4. Notice the prefactor: $\approx 5 \times 10^5$!
  5. For transmission $e^{-\tau}$ to be measurable ($e^{-\tau} > 0.01 \implies \tau < 4.6$), the neutral fraction must be less than $x_{\rm HI} < 10^{-5}$!
  6. Therefore, the observed transmission in quasar spectra at $z < 5.5$ requires the IGM to be ionized to greater than $99.999\%$. The complete blackout observed at $z > 6$ (Becker et al. 2001, Fan et al. 2006) demonstrates that $x_{\rm HI}$ rises above $10^{-4}-10^{-3}$, marking the final percolation boundary of reionization.

### Question 3: Cosmological 21cm Line Radiative Transfer
- **Blackboard Prompt**: *Derive the differential brightness temperature $\delta T_b$ of the 21cm hydrogen hyperfine transition against the CMB. What physical mechanisms couple the spin temperature $T_S$ to the gas kinetic temperature $T_K$ vs CMB temperature $T_\gamma$?*
- **Starting Equation**: 
  $$\delta T_b(\nu) = \frac{T_S - T_\gamma}{1+z} (1 - e^{-\tau_{21}}) \approx \frac{T_S - T_\gamma}{1+z} \tau_{21}$$
- **Derivation & Blackboard Walkthrough**:
  1. The 21cm line arises from the magnetic dipole transition between the singlet ($F=0$) and triplet ($F=1$) states of neutral hydrogen (energy splitting $\Delta E = 5.87 \times 10^{-6}$ eV, $A_{10} = 2.85 \times 10^{-15}\,{\rm s}^{-1}$).\n  2. The spin temperature $T_S$ parameterizes the level population: $\frac{n_1}{n_0} = \frac{g_1}{g_0}e^{-\frac{h\nu_{21}}{k_B T_S}} = 3 e^{-\frac{T_*}{T_S}}$, where $T_* = h\nu_{21}/k_B = 0.068$ K.
  3. In steady state, $T_S$ is a weighted average of radiation temperature $T_\gamma$ and gas kinetic temperature $T_K$:
     $$T_S^{-1} = \frac{T_\gamma^{-1} + x_c T_K^{-1} + x_\alpha T_\alpha^{-1}}{1 + x_c + x_\alpha}$$
     where $x_c$ is the collisional coupling coefficient ($H-H$ and $H-e^-$ collisions) and $x_\alpha$ is the Wouthuysen-Field resonant Ly$\alpha$ scattering coupling.
  4. Regimes of 21cm cosmology:
     - *Dark Ages ($z \sim 30-200$)*: High density $\implies x_c \gg 1 \implies T_S \approx T_K$. Gas expands adiabatically ($T_K \propto (1+z)^2$) faster than CMB ($T_\gamma \propto 1+z$). Hence $T_S < T_\gamma \implies \delta T_b < 0$ (**absorption**).
     - *Cosmic Dawn ($z \sim 15-30$)*: Universe expands, collisions become inefficient ($x_c \to 0$). $T_S \to T_\gamma \implies \delta T_b \approx 0$. Then first stars ignite, emitting Ly$\alpha$ photons that trigger the Wouthuysen-Field effect ($x_\alpha \gg 1$), recoupling $T_S \to T_K$. Since gas is still cold, a deep absorption trough develops (probed by EDGES/HERA).
     - *Epoch of Heating & Reionization ($z \sim 6-15$)*: X-rays from first black holes heat gas so $T_K > T_\gamma \implies T_S > T_\gamma \implies \delta T_b > 0$ (**emission**), until UV photons ionize neutral hydrogen, setting $x_{\rm HI} \to 0$ and terminating the signal.


---

## Essential Observational Cosmology Formulas Quick Sheet

| Quantity / Law | Mathematical Expression | Physical Interpretation & Cosmological Role |
|---|---|---|
| **Sound Horizon at Decoupling** | $r_s(z_*) = \int_{z_*}^\infty \frac{c_s(z)}{H(z)} dz$ | Characteristic acoustic scale imprinted on CMB ($r_s \approx 144.4$ Mpc) |
| **Acoustic Multipole Peak** | $\ell_A = \frac{\pi D_A(z_*)}{r_s(z_*)} \approx 220$ | Spacing of acoustic peaks in CMB angular power spectrum |
| **Gunn-Peterson Optical Depth** | $\tau_{\rm GP}(z) \approx 4.9 \times 10^5 x_{\rm HI} \left(\frac{1+z}{7}\right)^{3/2}$ | Resonant Ly$\alpha$ absorption in diffuse neutral IGM |
| **21cm Brightness Temperature** | $\delta T_b \approx 27 x_{\rm HI} \left(1 - \frac{T_\gamma}{T_S}\right)\left(\frac{1+z}{10}\right)^{1/2}\,{\rm mK}$ | Observable intensity of neutral hydrogen relative to CMB |
| **Linear Growth Factor Equation** | $\ddot{D} + 2H\dot{D} - 4\pi G \bar{\rho}_m D = 0$ | Governs amplitude of linear density perturbations $\delta(z) = D(z)\delta_0$ |
| **Growth Rate Parameter** | $f(z) \equiv \frac{d\ln D}{d\ln a} \approx \Omega_m(z)^{0.55}$ | Relates peculiar velocity field to density perturbations via continuity |
| **Matter-Radiation Turnover** | $k_{\rm eq} = \frac{a_{\rm eq} H_{\rm eq}}{c} \approx 0.015\,h\,{\rm Mpc}^{-1}$ | Peak of the matter power spectrum $P(k)$ at horizon entry at equality |
| **Luminosity Distance** | $d_L(z) = (1+z) c \int_0^z \frac{dz'}{H(z')}$ | Relates intrinsic bolometric luminosity to observed flux |
| **Angular Diameter Distance** | $d_A(z) = \frac{d_L(z)}{(1+z)^2}$ | Etherington reciprocity theorem relating $d_A$ and $d_L$ |
