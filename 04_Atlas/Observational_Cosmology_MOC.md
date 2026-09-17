---
layout: "default"
title: "Observational_Cosmology_MOC"
---
{% raw %}
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

- [Cosmological principle](../03_Zettel/Theory/Cosmological%20principle.html) — homogeneous + isotropic at a given cosmic time; "fundamental observer"
- [Hubble law](../03_Zettel/Theory/Hubble%20law.html) — $\vec{v} = H_0 \vec{d}$, recession proportional to distance, scale factor $R(t)$
- [Robertson-Walker metric](../03_Zettel/Theory/Robertson-Walker%20metric.html) — $ds^2 = dt^2 - \frac{a^2(t)}{c^2}\left[\frac{dr^2}{1-kr^2} + r^2(d\vartheta^2 + \sin^2\vartheta\, d\varphi^2)\right]$, $a(t) \equiv R(t)/R_0$
- [Curvature parameter k](../03_Zettel/Theory/Curvature%20parameter%20k.html) — $k=0$ flat, $k=+1$ closed spherical, $k=-1$ open hyperbolic
- [Comoving vs proper coordinates](../03_Zettel/Theory/Comoving%20vs%20proper%20coordinates.html) — $d = a(t) \cdot r$, $H_0 = \dot{a}/a|_{t_0} \simeq 70$ km/s/Mpc
- [Cosmological redshift](../03_Zettel/Theory/Cosmological%20redshift.html) — $(1+z) = a(t_e)^{-1} = \nu_e/\nu_0$; redshift is the ratio of scale factors between emission and reception
- [Newtonian derivation of Friedmann](../03_Zettel/Theory/Newtonian%20derivation%20of%20Friedmann.html) — shell argument, $\ddot{a} = -\frac{4\pi}{3}G\rho_0 a^{-2}$, energy-conservation integral gives $\dot{a}^2 = \frac{8\pi G\rho_0}{3}a^{-1} - kc^2$
- [Friedmann solutions](../03_Zettel/Theory/Friedmann%20solutions.html) — Milne vacuum ($R\propto t$), Einstein–de Sitter ($a\propto t^{2/3}$), open, closed
- [GR Friedmann with Λ](../03_Zettel/Theory/GR%20Friedmann%20with%20Lambda.html) — Einstein field eqs. $R_{ik} - \tfrac{1}{2}g_{ik}R - g_{ik}\Lambda = \frac{8\pi G}{c^4}T_{ik}$; $T_{ik}$ perfect fluid; $\Lambda$ as vacuum energy $\rho_V$
- [Density parameters](../03_Zettel/Theory/Density%20parameters.html) — $\Omega_m, \Omega_\Lambda, \Omega_\gamma, \Omega_k$; critical density $\rho_c = 3H_0^2/8\pi G$
- [Matter vs radiation density scaling](../03_Zettel/Theory/Matter%20vs%20radiation%20density%20scaling.html) — $\rho_m \propto a^{-3}$, $\rho_\gamma \propto a^{-4}$, equivalence at $z \sim 3330$, $t \sim 53{,}000$ yr
- [Curvature-dynamics relation](../03_Zettel/Theory/Curvature-dynamics%20relation.html) — $c^2 k = H_0^2[\Omega_m + \Omega_\Lambda - 1]$, flat iff $\sum\Omega = 1$
- [Deceleration parameter](../03_Zettel/Theory/Deceleration%20parameter.html) — $q_0 \equiv -\ddot{a}a/\dot{a}^2|_{t_0} = \Omega_m/2 - \Omega_\Lambda$
- [Time-redshift relation](../03_Zettel/Theory/Time-redshift%20relation.html) — $dt = -\frac{dz}{H_0(1+z)}[(1+z)^2(\Omega_m z + 1) - z\Omega_\Lambda(2+z)]^{-1/2}$
- [Cosmic look-back time](../03_Zettel/Theory/Cosmic%20look-back%20time.html) — integral out to $z$; extrapolation to $z\to\infty$ gives $t_0 \approx 13.7$ Gyr

---

## Block 1 — Distances in cosmology

Four distances, all equal at low $z$, all different at high $z$. This is where observational cosmology stops being linear algebra and becomes the art of comparing apples to apples across billions of years.

- [Radial comoving distance](../03_Zettel/Theory/Radial%20comoving%20distance.html) — $d_M = r(z) = \frac{c}{H_0}\int_0^z [\Omega_m(1+z')^3 + \Omega_\Lambda]^{-1/2}\, dz'$ (flat)
- [Angular diameter distance](../03_Zettel/Theory/Angular%20diameter%20distance.html) — $d_A = D/d\vartheta = d_M/(1+z)$; non-monotonic, turns over around $z \sim 1.5$
- [Luminosity distance](../03_Zettel/Theory/Luminosity%20distance.html) — $d_L = r(1+z) = d_M(1+z) = d_A(1+z)^2$; two $(1+z)$ factors from photon-energy loss and photon-arrival-rate dilation
- [Surface brightness dimming](../03_Zettel/Theory/Surface%20brightness%20dimming.html) — $\sigma \propto d_A^2/d_L^2 \propto (1+z)^{-4}$, the brutal penalty on high-$z$ imaging
- [K-correction](../03_Zettel/Theory/K-correction.html) — the translation between what the source emits at $\nu_e = \nu_0(1+z)$ and what our filter sees at $\nu_0$; magnitudes become $m = M + 5\log d_{L,\text{Mpc}} + 25 + K(z)$
- [K-correction in optical vs sub-mm](../03_Zettel/Theory/K-correction%20in%20optical%20vs%20sub-mm.html) — in the optical $K(z) > 0$, galaxies look fainter; in sub-mm $K(z) < 0$ because we climb the dust bump, so 850 μm sources stay roughly constant flux from $z\sim1$ to $z\sim10$ (the sub-mm is a window onto the high-$z$ universe)
- [Supernova Hubble diagram](../03_Zettel/Theory/Supernova%20Hubble%20diagram.html) — Perlmutter, Riess, Schmidt; SN Ia Type Ia standard candles at $z \sim 0.5$–$1$ are fainter than an empty or matter-only universe predicts → need $\Lambda$; best fit $\Omega_M \approx 0.27$, $\Omega_\Lambda \approx 0.73$

---

## Block 2 — The standard model: ΛCDM

The current best numbers:
$$H_0 \simeq 70~\text{km/s/Mpc}, \quad \Omega_m \simeq 0.3, \quad \Omega_\Lambda \simeq 0.7, \quad \Omega_\gamma \simeq 10^{-3}$$

Three regimes in $a(t)$:
- **Radiation-dominated** until $z \sim 3000$: $a(t) \propto t^{1/2}$
- **Matter-dominated** from recombination until $z \sim 0.7$: $a(t) \propto t^{2/3}$
- **Λ-dominated** from $z \sim 0.7$ onward: $a(t) \propto \exp(\sqrt{\Lambda/3}\, t)$

- [ΛCDM current parameters](../03_Zettel/Theory/%CE%9BCDM%20current%20parameters.html)
- [Transition epochs](../03_Zettel/Theory/Transition%20epochs.html) — matter–radiation equivalence, recombination, onset of Λ
- [Various models of the universe](../03_Zettel/Theory/Various%20models%20of%20the%20universe.html) — EdS vs open vs standard — they coincide at small $t$, diverge massively at large $t$

---

## Block 3 — Deviations from homogeneity and gravitational lensing  *(Rodighiero + Enia)*

Once the FLRW backdrop is built, we perturb it.

- [Gravitational lensing - intro](../03_Zettel/Theory/Gravitational%20lensing%20-%20intro.html) *(Dr. A. Enia, 7–8 April)*
- [Strong vs weak lensing](../03_Zettel/Theory/Strong%20vs%20weak%20lensing.html)
- [Lensing as a cosmological probe](../03_Zettel/Theory/Lensing%20as%20a%20cosmological%20probe.html) — mass mapping, Einstein radius, time delays

---

## Block 4 — Perturbations and peculiar motions *(Cassata, later)*

- [Cosmological evolution of perturbations in the cosmic fluid](../03_Zettel/Theory/Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html)
- [Perturbations in an expanding universe](../03_Zettel/Theory/Perturbations%20in%20an%20expanding%20universe.html)
- [Peculiar velocities of galaxies and structures](../03_Zettel/Theory/Peculiar%20velocities%20of%20galaxies%20and%20structures.html)
- [Jeans analysis in expanding universe](../03_Zettel/Theory/Jeans%20analysis%20in%20expanding%20universe.html)
- [Growth factor D(z)](../03_Zettel/Theory/Growth%20factor%20D%28z%29.html)

---

## Block 5 — Thermal history of the universe *(Cassata)*

- [Brief thermal history](../03_Zettel/Theory/Brief%20thermal%20history.html) — from Planck era to recombination
- [Recombination](../03_Zettel/Theory/Recombination.html) — $z \sim 1100$, drop in free-electron fraction
- [Decoupling](../03_Zettel/Theory/Decoupling.html) — photon mean free path → $\infty$, last scattering surface

---

## Block 6 — The Cosmic Microwave Background *(Cassata)*

- [CMB - discovery and blackbody spectrum](../03_Zettel/Theory/CMB%20-%20discovery%20and%20blackbody%20spectrum.html) — Penzias & Wilson 1965, $T_0 = 2.725$ K
- [CMB anisotropies](../03_Zettel/Theory/CMB%20anisotropies.html) — dipole, acoustic peaks, $\Delta T/T \sim 10^{-5}$
- [CMB power spectrum](../03_Zettel/Theory/CMB%20power%20spectrum.html) — COBE, WMAP, Planck; peaks constrain $\Omega_b h^2$, $\Omega_m h^2$, curvature
- [Polarization E and B modes](../03_Zettel/Theory/Polarization%20E%20and%20B%20modes.html)

---

## Block 7 — Primordial universe  *(Cassata — replaced in this AY by detection techniques for protoclusters)*

- [Big Bang nucleosynthesis](../03_Zettel/Theory/Big%20Bang%20nucleosynthesis.html)
- [Phase transitions](../03_Zettel/Theory/interf/Phase%20transitions.html)
- [Cosmological inflation](../03_Zettel/Theory/Cosmological%20inflation.html) — Guth, Linde; solves flatness, horizon, monopole problems
- [Protocluster detection techniques](../03_Zettel/Theory/Protocluster%20detection%20techniques.html) — overdensities of Lyα emitters, narrow-band imaging, IR-selected structures, spectroscopic confirmation, the JWST era

---

## Block 8 — Origin and evolution of cosmological structure *(Cassata)*

- [Linear vs nonlinear regime](../03_Zettel/Theory/Linear%20vs%20nonlinear%20regime.html)
- [Spherical collapse](../03_Zettel/Theory/Spherical%20collapse.html) — $\delta_c \simeq 1.686$
- [Press-Schechter formalism](../03_Zettel/Theory/Press-Schechter%20formalism.html) — halo mass function
- [N-body simulations](../03_Zettel/Theory/N-body%20simulations.html) — Millennium, IllustrisTNG

---

## Block 9 — The post-recombination universe, diffuse baryons, IGM *(Cassata)*

- [Reionization](../03_Zettel/Theory/Reionization.html) — $z \sim 6$–$10$, ionizing photons from first galaxies/quasars
- [Intergalactic medium](../03_Zettel/Theory/Intergalactic%20medium.html)
- [Lyman-α forest](../03_Zettel/Theory/Lyman-alpha%20forest.html) — neutral hydrogen along quasar sight lines
- [Missing baryons](../03_Zettel/Theory/Missing%20baryons.html) — WHIM, warm-hot intergalactic medium

---

## Block 10 — Galaxy formation and evolution *(Pablo Pérez-González + Cassata)*

This block is where observational cosmology touches down into actual galaxies and the data Pablo works on.

Pablo's lecture series (31 March – 3 April):

### Lecture 0 — historical introduction
- [Pablo_01_Introduction_to_galaxy_studies](../02_Literature/Lectures/Observational_Cosmology/Pablo_01_Introduction_to_galaxy_studies.html) — historical arc from Al-Sufi's "small cloud" to JWST

### Lecture 1A — statistical properties of galaxies (lecture overview)
- [Pablo_02_Statistical_properties_of_galaxies](../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html) — the master overview of this block

#### Distributions of galaxy parameters
- [Color bimodality of galaxies](../03_Zettel/Theory/Color%20bimodality%20of%20galaxies.html) — Baldry 2004 two peaks in $u-r$
- [Red sequence and blue cloud](../03_Zettel/Theory/Red%20sequence%20and%20blue%20cloud.html) — passive vs star-forming populations
- [Green valley and quenching tracks](../03_Zettel/Theory/Green%20valley%20and%20quenching%20tracks.html) — Faber 2007 evolutionary arrows
- [Galaxy color, density and morphology](../03_Zettel/Theory/Galaxy%20color%2C%20density%20and%20morphology.html) — Hogg 2004, Blanton & Moustakas 2009

#### Counts
- [Galaxy number counts N(m)](../03_Zettel/Theory/Galaxy%20number%20counts%20N%28m%29.html) — the Euclidean prediction $N(<m) \propto 10^{0.6 m}$
- [Differential vs cumulative number counts](../03_Zettel/Theory/Differential%20vs%20cumulative%20number%20counts.html) — $dN/dm$ vs $N(<m)$, $dN/dS$
- [Galaxy counts at different wavelengths](../03_Zettel/Theory/Galaxy%20counts%20at%20different%20wavelengths.html) — Durham compilation, optical to sub-mm
- [Driver 1998 counts by morphology](../03_Zettel/Theory/Driver%201998%20counts%20by%20morphology.html) — faint blue galaxy excess

#### Sizes and biases
- [Galaxy size-luminosity relation](../03_Zettel/Theory/Galaxy%20size-luminosity%20relation.html) — $R_e$ vs $M_B$ across galaxy classes
- [Redshift distribution of flux-limited samples](../03_Zettel/Theory/Redshift%20distribution%20of%20flux-limited%20samples.html) — Brinchmann 2008
- [Malmquist bias](../03_Zettel/Theory/Malmquist%20bias.html) — flux-limited samples preferentially select luminous sources
- [Photometric redshifts](../03_Zettel/Theory/Photometric%20redshifts.html) — Benítez 2000 likelihood, 4000 Å break
- [Photo-z biases and catastrophic outliers](../03_Zettel/Theory/Photo-z%20biases%20and%20catastrophic%20outliers.html) — Oyaizu 2008, failure modes

#### Luminosity function
- [Luminosity function definition](../03_Zettel/Theory/Luminosity%20function%20definition.html) — $dN = \phi(L)\, dL\, dV$
- [Schechter function](../03_Zettel/Theory/Schechter%20function.html) — $\phi(L) = (\phi^*/L^*)(L/L^*)^\alpha e^{-L/L^*}$
- [Schechter function in magnitudes](../03_Zettel/Theory/Schechter%20function%20in%20magnitudes.html) — the form fit to data
- [Integrals of the Schechter function](../03_Zettel/Theory/Integrals%20of%20the%20Schechter%20function.html) — number, luminosity, $N(>L^*)$ as Gamma functions
- [1Vmax estimator](../03_Zettel/Theory/1Vmax%20estimator.html) — Schmidt 1968 non-parametric LF
- [Schechter K-band luminosity function](../03_Zettel/Theory/Schechter%20K-band%20luminosity%20function.html) — Smith 2009: $M^*=-23.19$, $\alpha=-0.81$, $\phi^*=0.0166$
- [Double power-law modified Schechter](../03_Zettel/Theory/Double%20power-law%20modified%20Schechter.html) — Pérez-González 2005 bright-end excess at high $z$
- [LF by morphology and SED](../03_Zettel/Theory/LF%20by%20morphology%20and%20SED.html) — Driver 2006, Wolf 2003

#### Mass functions and the halo connection
- [Stellar mass function](../03_Zettel/Theory/Stellar%20mass%20function.html) — Cole 2001, Bell 2003, Pérez-González 2008
- [Halo mass function vs galaxy mass function](../03_Zettel/Theory/Halo%20mass%20function%20vs%20galaxy%20mass%20function.html) — the factor-of-six gap
- [Halo gravity suppression of galaxy formation](../03_Zettel/Theory/Halo%20gravity%20suppression%20of%20galaxy%20formation.html) — SN feedback at low mass, AGN feedback at high mass
- [Stellar-to-halo mass ratio](../03_Zettel/Theory/Stellar-to-halo%20mass%20ratio.html) — Behroozi 2013 peak at $M_h \sim 10^{12}\,M_\odot$

#### Cosmic histories (integrals over $z$)
- [Cosmic star formation history](../03_Zettel/Theory/Cosmic%20star%20formation%20history.html) — Madau-Dickinson plot, peak at $z \sim 2$
- [Cosmic stellar mass density growth](../03_Zettel/Theory/Cosmic%20stellar%20mass%20density%20growth.html) — Pérez-González 2008a buildup
- [SFR and stellar mass density connection](../03_Zettel/Theory/SFR%20and%20stellar%20mass%20density%20connection.html) — $\rho_{SFR} = d\rho_*/dt$

#### Scaling relations
- [Galaxy main sequence of star formation](../03_Zettel/Theory/Galaxy%20main%20sequence%20of%20star%20formation.html) — Rodighiero 2011, Santini 2017
- [Fundamental plane of ellipticals](../03_Zettel/Theory/Fundamental%20plane%20of%20ellipticals.html) — $R_e \propto \sigma^{1.4} \langle I \rangle_e^{-0.9}$
- [Tully-Fisher relation](../03_Zettel/Theory/Tully-Fisher%20relation.html) — $L \propto V_{\text{flat}}^4$
- [Schmidt-Kennicutt law](../03_Zettel/Theory/Schmidt-Kennicutt%20law.html) — $\Sigma_{SFR} \propto \Sigma_{\text{gas}}^{1.4}$
- [Magorrian relation](../03_Zettel/Theory/Magorrian%20relation.html) — $M_{BH} \approx 10^{-3}\, M_{\text{bulge}}$

### Lecture 1B — star formation in galaxies
- [Pablo_03_Star_formation_in_galaxies](../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html) — the master overview of this block

#### Definitions and time scales
- [Star formation rate and sSFR](../03_Zettel/Theory/Star%20formation%20rate%20and%20sSFR.html) — $\psi = dM_*/dt$, sSFR as doubling-time inverse
- [Star formation history parametrizations](../03_Zettel/Theory/Star%20formation%20history%20parametrizations.html) — SSP, CON, τ, delayed, non-parametric
- [Galaxy time scales](../03_Zettel/Theory/Galaxy%20time%20scales.html) — Hubble, dynamical $\sqrt{3\pi/16 G\rho}$, cooling, SF, enrichment, merger
- [Initial mass function](../03_Zettel/Theory/Initial%20mass%20function.html) — Salpeter 1955 ($\alpha = 2.35$), Kroupa 2001, Chabrier 2003

#### SFR tracers across the spectrum
- [UV SFR tracer](../03_Zettel/Theory/UV%20SFR%20tracer.html) — Kennicutt 1998, $1.4 \times 10^{-28} L_\nu$
- [UV slope and IRX-beta relation](../03_Zettel/Theory/UV%20slope%20and%20IRX-beta%20relation.html) — Meurer 1999, dust correction without IR
- [Dust attenuation and extinction curves](../03_Zettel/Theory/Dust%20attenuation%20and%20extinction%20curves.html) — Calzetti 2000, Cardelli 1989, Charlot & Fall 2000
- [H-alpha SFR tracer](../03_Zettel/Theory/H-alpha%20SFR%20tracer.html) — $7.9 \times 10^{-42} L(\text{H}\alpha)$, 10 Myr timescale
- [Balmer decrement](../03_Zettel/Theory/Balmer%20decrement.html) — $F(\text{H}\alpha)/F(\text{H}\beta) = 2.86$ for case B
- [Lyman alpha SFR tracer](../03_Zettel/Theory/Lyman%20alpha%20SFR%20tracer.html) — resonance scattering, Verhamme 2008
- [OII SFR tracer](../03_Zettel/Theory/OII%20SFR%20tracer.html) — forbidden, metallicity-dependent, redshift-desert tool
- [Other SFR tracer lines](../03_Zettel/Theory/Other%20SFR%20tracer%20lines.html) — Pα, [CII] 158 μm, PAHs, radio recombination
- [X-ray SFR tracer](../03_Zettel/Theory/X-ray%20SFR%20tracer.html) — HMXBs + diffuse, Ranalli 2003, metallicity dependence
- [IR SFR tracer](../03_Zettel/Theory/IR%20SFR%20tracer.html) — $4.5 \times 10^{-44} L_{\text{TIR}}$, Pérez-González 2006
- [Radio SFR tracer](../03_Zettel/Theory/Radio%20SFR%20tracer.html) — FIR-radio correlation $q \simeq 2.3$, Murphy 2011
- [SFR tracer comparison](../03_Zettel/Theory/SFR%20tracer%20comparison.html) — Cardiel 2003, tracer disagreements as diagnostics

#### SFH reconstruction and SPS
- [SFH from resolved CMDs](../03_Zettel/Theory/SFH%20from%20resolved%20CMDs.html) — Local Group, Ferguson 2002, Tolstoy 2009, Harris & Zaritsky 2004
- [SED fitting for SFH](../03_Zettel/Theory/SED%20fitting%20for%20SFH.html) — Papovich 2001, Pérez-González 2008, modern codes
- [Stellar population synthesis](../03_Zettel/Theory/Stellar%20population%20synthesis.html) — BC03, Maraston 2005, FSPS, Starburst99, Lick indices

#### Galaxy classes
- [Starburst galaxies](../03_Zettel/Theory/Starburst%20galaxies.html) — M82, Wolf-Rayet, BCDs, SSCs, superwinds
- [Post-starburst galaxies](../03_Zettel/Theory/Post-starburst%20galaxies.html) — E+A, Balmer absorption, Kriek 2010
- [LIRGs ULIRGs HyLIRGs](../03_Zettel/Theory/LIRGs%20ULIRGs%20HyLIRGs.html) — IRAS 1983, Sanders & Mirabel 1996, Arp 220
- [Galaxy mergers and SF](../03_Zettel/Theory/Galaxy%20mergers%20and%20SF.html) — $f_m \propto (1+z)^{2-3}$, merger-ULIRG-elliptical sequence

#### Chemical evolution
- [Chemical evolution of galaxies](../03_Zettel/Theory/Chemical%20evolution%20of%20galaxies.html) — Tinsley 1979, α/Fe clock, mass-metallicity, yields

### Lecture 1C — nuclear activity and supermassive black holes in galaxies
- [Pablo_04_Nuclear_activity_in_galaxies](../02_Literature/Lectures/Observational_Cosmology/Pablo_04_Nuclear_activity_in_galaxies.html) — the master overview of accretion physics, AGN demographics, and feedback

#### Accretion engines and unified model
- [AGN taxonomy unified model and feedback](../03_Zettel/Theory/AGN%20taxonomy%20unified%20model%20and%20feedback.html) — Eddington limit, Antonucci-Miller unified model, Magorrian / M-sigma relations, and quasar vs radio mode feedback
- [AGN and supermassive black holes](../03_Zettel/Theory/interf/AGN%20and%20supermassive%20black%20holes.html) — EHT event-horizon shadows (M87*, Sgr A*), relativistic jets, and GRAVITY BLR kinematics

#### Spectroscopic classification
- [BPT emission line diagnostic diagram](../03_Zettel/Theory/BPT%20emission%20line%20diagnostic%20diagram.html) — [O III]/Hβ vs [N II]/Hα line ratios, Kewley vs Kauffmann starburst boundaries, Seyferts, and LINERs

### Lecture 1D — galaxies at cosmological distances and cosmic dawn
- [Pablo_05_Galaxies_at_cosmological_distances](../02_Literature/Lectures/Observational_Cosmology/Pablo_05_Galaxies_at_cosmological_distances.html) — the master overview of high-z galaxy selection, JWST discoveries, and structural evolution

#### High-redshift selection and cosmic dawn
- [High-redshift galaxy selection and Lyman break technique](../03_Zettel/Theory/High-redshift%20galaxy%20selection%20and%20Lyman%20break%20technique.html) — 912 Å photoelectric dropouts (U, B, V dropouts), LAEs, and sub-mm galaxies
- [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) — JADES-GS-z14-0 ($z=14.32$), $z > 10$ overabundance puzzle, and Little Red Dots (LRDs)

#### Morphology and SED analysis
- [Non-parametric galaxy morphology metrics](../03_Zettel/Theory/Non-parametric%20galaxy%20morphology%20metrics.html) — CAS system ($C, A, S$), Gini coefficient ($G$), and $M_{20}$ merger diagnostics
- [Galaxy SED fitting](../03_Zettel/Theory/Galaxy%20SED%20fitting.html) — multi-wavelength photometric redshifts, stellar mass estimation, and star formation history inversion
- [Galaxy morphology vs physical properties](../03_Zettel/Theory/Galaxy%20morphology%20vs%20physical%20properties.html) — Hubble sequence physical drivers, visual classification, and environmental morphology-density relation

---

## Appendices and tools

- [Cosmology calculator — how to use H0 Ω_m Ω_Λ to get d_L, d_A, t_lookback](../03_Zettel/Theory/Cosmology%20calculator%20-%20how%20to%20use%20H0%20Omega_m%20Omega_Lambda%20to%20get%20dL%20dA%20t_lookback.html)
- [Surveys to remember](../03_Zettel/Theory/Surveys%20to%20remember.html) — 2dFGRS, SDSS, DEEP-2, BOSS, WiggleZ, WFMOS, 4MOST
- [Space and ground facilities relevant for OC](../03_Zettel/Theory/Space%20and%20ground%20facilities%20relevant%20for%20OC.html) — HST, Chandra, XMM, Spitzer, Herschel, JWST, Keck, VLT, Subaru, LBT, GTC, ALMA; upcoming ELT, SKA

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
| `![barkana_loeb_cosmic_evolution.png](../assets/images/barkana_loeb_cosmic_evolution.png)` | Barkana & Loeb reionization timeline, dark matter halo mass threshold, and density fluctuations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![barkana_loeb_halo_mass.png](../assets/images/barkana_loeb_halo_mass.png)` | Barkana & Loeb reionization timeline, dark matter halo mass threshold, and density fluctuations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![barkana_loeb_mass_fluctuations.png](../assets/images/barkana_loeb_mass_fluctuations.png)` | Barkana & Loeb reionization timeline, dark matter halo mass threshold, and density fluctuations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![barkana_loeb_reionization.png](../assets/images/barkana_loeb_reionization.png)` | Barkana & Loeb reionization timeline, dark matter halo mass threshold, and density fluctuations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![becker_GP_spectra.png](../assets/images/becker_GP_spectra.png)` | SDSS $z \sim 6$ quasar absorption spectra, Gunn-Peterson trough, and effective optical depth $\tau_{\rm eff}$ | [Reionization](../03_Zettel/Theory/Reionization.html) |
| `![becker_GP_trough.png](../assets/images/becker_GP_trough.png)` | SDSS $z \sim 6$ quasar absorption spectra, Gunn-Peterson trough, and effective optical depth $\tau_{\rm eff}$ | [Reionization](../03_Zettel/Theory/Reionization.html) |
| `![fan_optical_depth.png](../assets/images/fan_optical_depth.png)` | SDSS $z \sim 6$ quasar absorption spectra, Gunn-Peterson trough, and effective optical depth $\tau_{\rm eff}$ | [Reionization](../03_Zettel/Theory/Reionization.html) |
| `![fan_quasar_spectra.png](../assets/images/fan_quasar_spectra.png)` | SDSS $z \sim 6$ quasar absorption spectra, Gunn-Peterson trough, and effective optical depth $\tau_{\rm eff}$ | [Reionization](../03_Zettel/Theory/Reionization.html) |
| `![linder_growth_history.png](../assets/images/linder_growth_history.png)` | Linder growth factor $D(z)$ and growth rate parameter $f(z) = \Omega_m(z)^\gamma$ | [Growth factor D(z)](../03_Zettel/Theory/Growth%20factor%20D%28z%29.html) |
| `![obscos_lec0_p01.png](../assets/images/obscos_lec0_p01.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Brief thermal history](../03_Zettel/Theory/Brief%20thermal%20history.html) |
| `![obscos_lec0_p05.png](../assets/images/obscos_lec0_p05.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Brief thermal history](../03_Zettel/Theory/Brief%20thermal%20history.html) |
| `![obscos_lec0_p10.png](../assets/images/obscos_lec0_p10.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Brief thermal history](../03_Zettel/Theory/Brief%20thermal%20history.html) |
| `![obscos_lec0_p15.png](../assets/images/obscos_lec0_p15.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Brief thermal history](../03_Zettel/Theory/Brief%20thermal%20history.html) |
| `![obscos_lec1a_p02.png](../assets/images/obscos_lec1a_p02.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Matter power spectrum and BAO](../03_Zettel/Theory/Matter%20power%20spectrum%20and%20BAO.html) |
| `![obscos_lec1a_p10.png](../assets/images/obscos_lec1a_p10.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Matter power spectrum and BAO](../03_Zettel/Theory/Matter%20power%20spectrum%20and%20BAO.html) |
| `![obscos_lec1a_p20.png](../assets/images/obscos_lec1a_p20.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Matter power spectrum and BAO](../03_Zettel/Theory/Matter%20power%20spectrum%20and%20BAO.html) |
| `![obscos_lec1a_p30.png](../assets/images/obscos_lec1a_p30.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Matter power spectrum and BAO](../03_Zettel/Theory/Matter%20power%20spectrum%20and%20BAO.html) |
| `![obscos_lec1a_p40.png](../assets/images/obscos_lec1a_p40.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Matter power spectrum and BAO](../03_Zettel/Theory/Matter%20power%20spectrum%20and%20BAO.html) |
| `![obscos_lec1b_p05.png](../assets/images/obscos_lec1b_p05.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Observational_Cosmology_MOC](./Observational_Cosmology_MOC.html) |
| `![obscos_lec1b_p15.png](../assets/images/obscos_lec1b_p15.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Observational_Cosmology_MOC](./Observational_Cosmology_MOC.html) |
| `![obscos_lec1b_p25.png](../assets/images/obscos_lec1b_p25.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Observational_Cosmology_MOC](./Observational_Cosmology_MOC.html) |
| `![obscos_lec1b_p45.png](../assets/images/obscos_lec1b_p45.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Observational_Cosmology_MOC](./Observational_Cosmology_MOC.html) |
| `![obscos_lec1b_p60.png](../assets/images/obscos_lec1b_p60.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Observational_Cosmology_MOC](./Observational_Cosmology_MOC.html) |
| `![obscos_lec2_p05.png](../assets/images/obscos_lec2_p05.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [AGN taxonomy unified model and feedback](../03_Zettel/Theory/AGN%20taxonomy%20unified%20model%20and%20feedback.html) |
| `![obscos_lec2_p18.png](../assets/images/obscos_lec2_p18.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [AGN taxonomy unified model and feedback](../03_Zettel/Theory/AGN%20taxonomy%20unified%20model%20and%20feedback.html) |
| `![obscos_lec2_p32.png](../assets/images/obscos_lec2_p32.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [AGN taxonomy unified model and feedback](../03_Zettel/Theory/AGN%20taxonomy%20unified%20model%20and%20feedback.html) |
| `![obscos_lec2_p50.png](../assets/images/obscos_lec2_p50.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [AGN taxonomy unified model and feedback](../03_Zettel/Theory/AGN%20taxonomy%20unified%20model%20and%20feedback.html) |
| `![obscos_lec3_p08.png](../assets/images/obscos_lec3_p08.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![obscos_lec3_p22.png](../assets/images/obscos_lec3_p22.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![obscos_lec3_p40.png](../assets/images/obscos_lec3_p40.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![obscos_lec3_p65.png](../assets/images/obscos_lec3_p65.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![obscos_lec3_p85.png](../assets/images/obscos_lec3_p85.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmic dawn and high-redshift galaxies with JWST](../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html) |
| `![obscos_lesson1_p05.png](../assets/images/obscos_lesson1_p05.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Growth factor D(z)](../03_Zettel/Theory/Growth%20factor%20D%28z%29.html) |
| `![obscos_lesson1_p15.png](../assets/images/obscos_lesson1_p15.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Growth factor D(z)](../03_Zettel/Theory/Growth%20factor%20D%28z%29.html) |
| `![obscos_lesson1_p30.png](../assets/images/obscos_lesson1_p30.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Growth factor D(z)](../03_Zettel/Theory/Growth%20factor%20D%28z%29.html) |
| `![obscos_lesson1_p45.png](../assets/images/obscos_lesson1_p45.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Growth factor D(z)](../03_Zettel/Theory/Growth%20factor%20D%28z%29.html) |
| `![obscos_lesson2_p10.png](../assets/images/obscos_lesson2_p10.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmological evolution of perturbations in the cosmic fluid](../03_Zettel/Theory/Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html) |
| `![obscos_lesson2_p25.png](../assets/images/obscos_lesson2_p25.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmological evolution of perturbations in the cosmic fluid](../03_Zettel/Theory/Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html) |
| `![obscos_lesson2_p40.png](../assets/images/obscos_lesson2_p40.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmological evolution of perturbations in the cosmic fluid](../03_Zettel/Theory/Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html) |
| `![obscos_lesson2_p55.png](../assets/images/obscos_lesson2_p55.png)` | Padova Observational Cosmology lecture slide: High-z dropouts, BAO standard ruler, or perturbation equations | [Cosmological evolution of perturbations in the cosmic fluid](../03_Zettel/Theory/Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html) |
| `![planck_TE_spectrum.png](../assets/images/planck_TE_spectrum.png)` | Planck 2018 CMB temperature (TT) or polarization (TE) angular power spectrum | [CMB power spectrum](../03_Zettel/Theory/CMB%20power%20spectrum.html) |
| `![planck_TT_spectrum.png](../assets/images/planck_TT_spectrum.png)` | Planck 2018 CMB temperature (TT) or polarization (TE) angular power spectrum | [CMB power spectrum](../03_Zettel/Theory/CMB%20power%20spectrum.html) |
| `![pritchard_loeb_21cm_fig1.png](../assets/images/pritchard_loeb_21cm_fig1.png)` | Pritchard & Loeb 21cm hydrogen line brightness temperature $\delta T_b$, spin temperature $T_S$, and cosmic phases | [Reionization](../03_Zettel/Theory/Reionization.html) |
| `![pritchard_loeb_21cm_phases.png](../assets/images/pritchard_loeb_21cm_phases.png)` | Pritchard & Loeb 21cm hydrogen line brightness temperature $\delta T_b$, spin temperature $T_S$, and cosmic phases | [Reionization](../03_Zettel/Theory/Reionization.html) |
| `![pritchard_loeb_temperatures.png](../assets/images/pritchard_loeb_temperatures.png)` | Observational cosmology figure, CMB power spectrum, or survey diagnostic | [Observational_Cosmology_MOC](./Observational_Cosmology_MOC.html) |
| `![suzuki_hubble_fig4.png](../assets/images/suzuki_hubble_fig4.png)` | Supernova Cosmology Project Union2.1 SNe Ia Hubble diagram and $(\Omega_m, \Omega_\Lambda)$ confidence contours | [Supernova Hubble diagram](../03_Zettel/Theory/Supernova%20Hubble%20diagram.html) |
| `![suzuki_hubble_fig5.png](../assets/images/suzuki_hubble_fig5.png)` | Supernova Cosmology Project Union2.1 SNe Ia Hubble diagram and $(\Omega_m, \Omega_\Lambda)$ confidence contours | [Supernova Hubble diagram](../03_Zettel/Theory/Supernova%20Hubble%20diagram.html) |
| `![suzuki_hubble_fig6.png](../assets/images/suzuki_hubble_fig6.png)` | Supernova Cosmology Project Union2.1 SNe Ia Hubble diagram and $(\Omega_m, \Omega_\Lambda)$ confidence contours | [Supernova Hubble diagram](../03_Zettel/Theory/Supernova%20Hubble%20diagram.html) |
| `![tegmark_power_spectrum.png](../assets/images/tegmark_power_spectrum.png)` | Tegmark et al. SDSS 3D matter power spectrum $P(k)$ turnover at horizon entry | [Matter power spectrum and BAO](../03_Zettel/Theory/Matter%20power%20spectrum%20and%20BAO.html) |


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
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (85)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./04_Atlas.html" class="backlink-item">04_Atlas</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/AGN%20taxonomy%20unified%20model%20and%20feedback.html" class="backlink-item">AGN taxonomy unified model and feedback</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Angular%20diameter%20distance.html" class="backlink-item">Angular diameter distance</a></li>
    <li class="backlink-item-wrap"><a href="./Astro-Statistics_and_Cosmology_MOC.html" class="backlink-item">Astro-Statistics_and_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Astrophysics_of_the_Interstellar_Medium_MOC.html" class="backlink-item">Astrophysics_of_the_Interstellar_Medium_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/BPT%20emission%20line%20diagnostic%20diagram.html" class="backlink-item">BPT emission line diagnostic diagram</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Big%20Bang%20nucleosynthesis.html" class="backlink-item">Big Bang nucleosynthesis</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Brief%20thermal%20history.html" class="backlink-item">Brief thermal history</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/CMB%20-%20discovery%20and%20blackbody%20spectrum.html" class="backlink-item">CMB - discovery and blackbody spectrum</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/CMB%20Spectral%20Distortions%20-%20What%20They%20Are%20and%20Where%20They%20Come%20From.html" class="backlink-item">CMB Spectral Distortions - What They Are and Where They Come From</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/CMB%20anisotropies.html" class="backlink-item">CMB anisotropies</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/CMB%20power%20spectrum.html" class="backlink-item">CMB power spectrum</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Book/Baumann%20GR/Ch%207%20-%20Cosmology.html" class="backlink-item">Ch 7 - Cosmology</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Color%20bimodality%20of%20galaxies.html" class="backlink-item">Color bimodality of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Comoving%20vs%20proper%20coordinates.html" class="backlink-item">Comoving vs proper coordinates</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmic%20dawn%20and%20high-redshift%20galaxies%20with%20JWST.html" class="backlink-item">Cosmic dawn and high-redshift galaxies with JWST</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmic%20look-back%20time.html" class="backlink-item">Cosmic look-back time</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmic_inventory_overview.html" class="backlink-item">Cosmic_inventory_overview</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmological%20distances.html" class="backlink-item">Cosmological distances</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmological%20evolution%20of%20perturbations%20in%20the%20cosmic%20fluid.html" class="backlink-item">Cosmological evolution of perturbations in the cosmic fluid</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmological%20inflation.html" class="backlink-item">Cosmological inflation</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmological%20redshift.html" class="backlink-item">Cosmological redshift</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Cosmology%20calculator%20-%20how%20to%20use%20H0%20Omega_m%20Omega_Lambda%20to%20get%20dL%20dA%20t_lookback.html" class="backlink-item">Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmology_of_the_Early_Universe_MOC.html" class="backlink-item">Cosmology_of_the_Early_Universe_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Curvature-dynamics%20relation.html" class="backlink-item">Curvature-dynamics relation</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Deceleration%20parameter.html" class="backlink-item">Deceleration parameter</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Decoupling.html" class="backlink-item">Decoupling</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Density%20parameters.html" class="backlink-item">Density parameters</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Distance%20ladder%20derivations.html" class="backlink-item">Distance ladder derivations</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Friedmann%20solutions.html" class="backlink-item">Friedmann solutions</a></li>
    <li class="backlink-item-wrap"><a href="./Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/GR%20Friedmann%20with%20Lambda.html" class="backlink-item">GR Friedmann with Lambda</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Galaxies_course_intro.html" class="backlink-item">Galaxies_course_intro</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Galaxy%20clusters%20and%20overview%20of%20evolution.html" class="backlink-item">Galaxy clusters and overview of evolution</a></li>
    <li class="backlink-item-wrap"><a href="./General_Relativity_MOC.html" class="backlink-item">General_Relativity_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Gravitational%20lensing%20-%20intro.html" class="backlink-item">Gravitational lensing - intro</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Halo%20mass%20function%20vs%20galaxy%20mass%20function.html" class="backlink-item">Halo mass function vs galaxy mass function</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/High-redshift%20galaxy%20selection%20and%20Lyman%20break%20technique.html" class="backlink-item">High-redshift galaxy selection and Lyman break technique</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/High-z%20galaxies%20with%20JWST.html" class="backlink-item">High-z galaxies with JWST</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Hubble%20law.html" class="backlink-item">Hubble law</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Intergalactic%20medium.html" class="backlink-item">Intergalactic medium</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/K-correction%20in%20optical%20vs%20sub-mm.html" class="backlink-item">K-correction in optical vs sub-mm</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Lambda%20CDM%20current%20parameters.html" class="backlink-item">Lambda CDM current parameters</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/LambdaCDM%20current%20parameters.html" class="backlink-item">LambdaCDM current parameters</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Lensing%20as%20a%20cosmological%20probe.html" class="backlink-item">Lensing as a cosmological probe</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Linear%20vs%20nonlinear%20regime.html" class="backlink-item">Linear vs nonlinear regime</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Luminosity%20distance.html" class="backlink-item">Luminosity distance</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Lyman-alpha%20forest.html" class="backlink-item">Lyman-alpha forest</a></li>
    <li class="backlink-item-wrap"><a href="./Mathematical_Numerical_Methods_MOC.html" class="backlink-item">Mathematical_Numerical_Methods_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Matter%20vs%20radiation%20density%20scaling.html" class="backlink-item">Matter vs radiation density scaling</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Missing%20baryons.html" class="backlink-item">Missing baryons</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/N-body%20simulations.html" class="backlink-item">N-body simulations</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Newtonian%20derivation%20of%20Friedmann.html" class="backlink-item">Newtonian derivation of Friedmann</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Non-parametric%20galaxy%20morphology%20metrics.html" class="backlink-item">Non-parametric galaxy morphology metrics</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Observational_Cosmology/Pablo_01_Introduction_to_galaxy_studies.html" class="backlink-item">Pablo_01_Introduction_to_galaxy_studies</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html" class="backlink-item">Pablo_02_Statistical_properties_of_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html" class="backlink-item">Pablo_03_Star_formation_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Observational_Cosmology/Pablo_04_Nuclear_activity_in_galaxies.html" class="backlink-item">Pablo_04_Nuclear_activity_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="../02_Literature/Lectures/Observational_Cosmology/Pablo_05_Galaxies_at_cosmological_distances.html" class="backlink-item">Pablo_05_Galaxies_at_cosmological_distances</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Peculiar%20velocities%20of%20galaxies%20and%20structures.html" class="backlink-item">Peculiar velocities of galaxies and structures</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Perturbations%20in%20an%20expanding%20universe.html" class="backlink-item">Perturbations in an expanding universe</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/interf/Phase%20transitions.html" class="backlink-item">Phase transitions</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Phase%20transitions.html" class="backlink-item">Phase transitions</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Polarization%20E%20and%20B%20modes.html" class="backlink-item">Polarization E and B modes</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Press-Schechter%20formalism.html" class="backlink-item">Press-Schechter formalism</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Protocluster%20detection%20techniques.html" class="backlink-item">Protocluster detection techniques</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Quenching%20and%20passive%20galaxies%20at%20high%20z.html" class="backlink-item">Quenching and passive galaxies at high z</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Radial%20comoving%20distance.html" class="backlink-item">Radial comoving distance</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Recombination.html" class="backlink-item">Recombination</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Reionization.html" class="backlink-item">Reionization</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Space%20and%20ground%20facilities%20relevant%20for%20OC.html" class="backlink-item">Space and ground facilities relevant for OC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Stellar-to-halo%20mass%20ratio.html" class="backlink-item">Stellar-to-halo mass ratio</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Strong%20vs%20weak%20lensing.html" class="backlink-item">Strong vs weak lensing</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Supernova%20Hubble%20diagram.html" class="backlink-item">Supernova Hubble diagram</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Surface%20brightness%20dimming.html" class="backlink-item">Surface brightness dimming</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Survey%20resources%20for%20Obs%20Astro.html" class="backlink-item">Survey resources for Obs Astro</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Surveys%20to%20remember.html" class="backlink-item">Surveys to remember</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Time-redshift%20relation.html" class="backlink-item">Time-redshift relation</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Transition%20epochs.html" class="backlink-item">Transition epochs</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/Various%20models%20of%20the%20universe.html" class="backlink-item">Various models of the universe</a></li>
    <li class="backlink-item-wrap"><a href="../03_Zettel/Theory/%CE%9BCDM%20current%20parameters.html" class="backlink-item">ΛCDM current parameters</a></li>
  </ul>
</div>
