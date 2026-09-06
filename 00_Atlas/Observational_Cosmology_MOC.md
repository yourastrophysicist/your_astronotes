---
layout: default
title: "Observational_Cosmology_MOC"
---

# Observational Cosmology  -  Map of Content

A.Y. 2024/2025  -  **Prof. Giulia Rodighiero** and **Prof. Paolo Cassata**, with visiting professor **Pablo Pérez-González** and a special lecture on lensing by **Dr. Andrea Enia**.

The central thread of this course is a different question from the high-energy lab  -  instead of *how do we detect the most violent objects*, here it is:
	**how do we measure the universe itself, and everything inside it, from inside it?**

Every topic connects to this chain:
$$\text{distant source} \to \text{cosmological redshift} \to \text{expanding geometry} \to \text{distance ladder} \to \text{observable (flux, size, spectrum)} \to \text{cosmological parameters}$$

Every observation we make is contaminated by the universe we are trying to measure. The K-correction, the angular-diameter turnover, the surface-brightness $(1+z)^{-4}$ penalty  -  all of them are the universe leaving fingerprints on its own photons.

---

## Timetable and lecturers

- **24 Feb  -  24 Mar**  -  G. Rodighiero (Chapters 0 - 1: Friedmann universe, large-scale structure)
- **31 Mar  -  3 Apr**  -  **P. Pérez-González** (visiting, galaxy studies / high-z observations  -  see below)
- **7 - 8 Apr**  -  A. Enia (special lectures on gravitational lensing)
- **14 Apr  -  26 May**  -  P. Cassata (thermal history, CMB, primordial universe, perturbations, structure formation)

Note: in the original syllabus topic 7 ("Primordial Universe, Big Bang, phase transitions, cosmological inflation") was struck through and replaced by **"Detection techniques for protoclusters"**, and a red frame surrounds topics 9 - 10 (post-recombination IGM and galaxy formation/evolution)  -  this is the part tied directly to JWST and to Pablo's visit.

---

## Block 0  -  The homogeneous Friedmann universe

This is the mathematical spine that everything later hangs off of. Before any real object enters the course, we set the stage: a metric, a scale factor, a redshift, a handful of density parameters.

- [Cosmological principle](../02_Zettel/Theory/Cosmological principle.html)  -  homogeneous + isotropic at a given cosmic time; "fundamental observer"
- [Hubble law](../02_Zettel/Theory/Hubble law.html)  -  $\vec{v} = H_0 \vec{d}$, recession proportional to distance, scale factor $R(t)$
- [Robertson-Walker metric](../02_Zettel/Theory/Robertson-Walker metric.html)  -  $ds^2 = dt^2 - \frac{a^2(t)}{c^2}\left[\frac{dr^2}{1-kr^2} + r^2(d\vartheta^2 + \sin^2\vartheta\, d\varphi^2)\right]$, $a(t) \equiv R(t)/R_0$
- [Curvature parameter k](../02_Zettel/Theory/Curvature parameter k.html)  -  $k=0$ flat, $k=+1$ closed spherical, $k=-1$ open hyperbolic
- [Comoving vs proper coordinates](../02_Zettel/Theory/Comoving vs proper coordinates.html)  -  $d = a(t) \cdot r$, $H_0 = \dot{a}/a|_{t_0} \simeq 70$ km/s/Mpc
- [Cosmological redshift](../02_Zettel/Theory/Cosmological redshift.html)  -  $(1+z) = a(t_e)^{-1} = \nu_e/\nu_0$; redshift is the ratio of scale factors between emission and reception
- [Newtonian derivation of Friedmann](../02_Zettel/Theory/Newtonian derivation of Friedmann.html)  -  shell argument, $\ddot{a} = -\frac{4\pi}{3}G\rho_0 a^{-2}$, energy-conservation integral gives $\dot{a}^2 = \frac{8\pi G\rho_0}{3}a^{-1} - kc^2$
- [Friedmann solutions](../02_Zettel/Theory/Friedmann solutions.html)  -  Milne vacuum ($R\propto t$), Einstein - de Sitter ($a\propto t^{2/3}$), open, closed
- [GR Friedmann with Λ](../02_Zettel/Theory/GR Friedmann with Lambda.html)  -  Einstein field eqs. $R_{ik} - \tfrac{1}{2}g_{ik}R - g_{ik}\Lambda = \frac{8\pi G}{c^4}T_{ik}$; $T_{ik}$ perfect fluid; $\Lambda$ as vacuum energy $\rho_V$
- [Density parameters](../02_Zettel/Theory/Density parameters.html)  -  $\Omega_m, \Omega_\Lambda, \Omega_\gamma, \Omega_k$; critical density $\rho_c = 3H_0^2/8\pi G$
- [Matter vs radiation density scaling](../02_Zettel/Theory/Matter vs radiation density scaling.html)  -  $\rho_m \propto a^{-3}$, $\rho_\gamma \propto a^{-4}$, equivalence at $z \sim 3330$, $t \sim 53{,}000$ yr
- [Curvature-dynamics relation](../02_Zettel/Theory/Curvature-dynamics relation.html)  -  $c^2 k = H_0^2[\Omega_m + \Omega_\Lambda - 1]$, flat iff $\sum\Omega = 1$
- [Deceleration parameter](../02_Zettel/Theory/Deceleration parameter.html)  -  $q_0 \equiv -\ddot{a}a/\dot{a}^2|_{t_0} = \Omega_m/2 - \Omega_\Lambda$
- [Time-redshift relation](../02_Zettel/Theory/Time-redshift relation.html)  -  $dt = -\frac{dz}{H_0(1+z)}[(1+z)^2(\Omega_m z + 1) - z\Omega_\Lambda(2+z)]^{-1/2}$
- [Cosmic look-back time](../02_Zettel/Theory/Cosmic look-back time.html)  -  integral out to $z$; extrapolation to $z\to\infty$ gives $t_0 \approx 13.7$ Gyr

---

## Block 1  -  Distances in cosmology

Four distances, all equal at low $z$, all different at high $z$. This is where observational cosmology stops being linear algebra and becomes the art of comparing apples to apples across billions of years.

- [Radial comoving distance](../02_Zettel/Theory/Radial comoving distance.html)  -  $d_M = r(z) = \frac{c}{H_0}\int_0^z [\Omega_m(1+z')^3 + \Omega_\Lambda]^{-1/2}\, dz'$ (flat)
- [Angular diameter distance](../02_Zettel/Theory/Angular diameter distance.html)  -  $d_A = D/d\vartheta = d_M/(1+z)$; non-monotonic, turns over around $z \sim 1.5$
- [Luminosity distance](../02_Zettel/Theory/Luminosity distance.html)  -  $d_L = r(1+z) = d_M(1+z) = d_A(1+z)^2$; two $(1+z)$ factors from photon-energy loss and photon-arrival-rate dilation
- [Surface brightness dimming](../02_Zettel/Theory/Surface brightness dimming.html)  -  $\sigma \propto d_A^2/d_L^2 \propto (1+z)^{-4}$, the brutal penalty on high-$z$ imaging
- [K-correction](../02_Zettel/Theory/K-correction.html)  -  the translation between what the source emits at $\nu_e = \nu_0(1+z)$ and what our filter sees at $\nu_0$; magnitudes become $m = M + 5\log d_{L,\text{Mpc}} + 25 + K(z)$
- [K-correction in optical vs sub-mm](../02_Zettel/Theory/K-correction in optical vs sub-mm.html)  -  in the optical $K(z) > 0$, galaxies look fainter; in sub-mm $K(z) < 0$ because we climb the dust bump, so 850 μm sources stay roughly constant flux from $z\sim1$ to $z\sim10$ (the sub-mm is a window onto the high-$z$ universe)
- [Supernova Hubble diagram](../02_Zettel/Theory/Supernova Hubble diagram.html)  -  Perlmutter, Riess, Schmidt; SN Ia Type Ia standard candles at $z \sim 0.5$ - $1$ are fainter than an empty or matter-only universe predicts → need $\Lambda$; best fit $\Omega_M \approx 0.27$, $\Omega_\Lambda \approx 0.73$

---

## Block 2  -  The standard model: ΛCDM

The current best numbers:
$$H_0 \simeq 70~\text{km/s/Mpc}, \quad \Omega_m \simeq 0.3, \quad \Omega_\Lambda \simeq 0.7, \quad \Omega_\gamma \simeq 10^{-3}$$

Three regimes in $a(t)$:
- **Radiation-dominated** until $z \sim 3000$: $a(t) \propto t^{1/2}$
- **Matter-dominated** from recombination until $z \sim 0.7$: $a(t) \propto t^{2/3}$
- **Λ-dominated** from $z \sim 0.7$ onward: $a(t) \propto \exp(\sqrt{\Lambda/3}\, t)$

- [ΛCDM current parameters](../02_Zettel/Theory/ΛCDM current parameters.html)
- [Transition epochs](../02_Zettel/Theory/Transition epochs.html)  -  matter - radiation equivalence, recombination, onset of Λ
- [Various models of the universe](../02_Zettel/Theory/Various models of the universe.html)  -  EdS vs open vs standard  -  they coincide at small $t$, diverge massively at large $t$

---

## Block 3  -  Deviations from homogeneity and gravitational lensing  *(Rodighiero + Enia)*

Once the FLRW backdrop is built, we perturb it.

- [Gravitational lensing - intro](../02_Zettel/Theory/Gravitational lensing - intro.html) *(Dr. A. Enia, 7 - 8 April)*
- [Strong vs weak lensing](../02_Zettel/Theory/Strong vs weak lensing.html)
- [Lensing as a cosmological probe](../02_Zettel/Theory/Lensing as a cosmological probe.html)  -  mass mapping, Einstein radius, time delays

---

## Block 4  -  Perturbations and peculiar motions *(Cassata, later)*

- [Cosmological evolution of perturbations in the cosmic fluid](../02_Zettel/Theory/Cosmological evolution of perturbations in the cosmic fluid.html)
- [Perturbations in an expanding universe](../02_Zettel/Theory/Perturbations in an expanding universe.html)
- [Peculiar velocities of galaxies and structures](../02_Zettel/Theory/Peculiar velocities of galaxies and structures.html)
- [Jeans analysis in expanding universe](../02_Zettel/Theory/Jeans analysis in expanding universe.html)
- [Growth factor D(z)](../02_Zettel/Theory/Growth factor D(z).md)

---

## Block 5  -  Thermal history of the universe *(Cassata)*

- [Brief thermal history](../02_Zettel/Theory/Brief thermal history.html)  -  from Planck era to recombination
- [Recombination](../02_Zettel/Theory/Recombination.html)  -  $z \sim 1100$, drop in free-electron fraction
- [Decoupling](../02_Zettel/Theory/Decoupling.html)  -  photon mean free path → $\infty$, last scattering surface

---

## Block 6  -  The Cosmic Microwave Background *(Cassata)*

- [CMB - discovery and blackbody spectrum](../02_Zettel/Theory/CMB - discovery and blackbody spectrum.html)  -  Penzias & Wilson 1965, $T_0 = 2.725$ K
- [CMB anisotropies](../02_Zettel/Theory/CMB anisotropies.html)  -  dipole, acoustic peaks, $\Delta T/T \sim 10^{-5}$
- [CMB power spectrum](../02_Zettel/Theory/CMB power spectrum.html)  -  COBE, WMAP, Planck; peaks constrain $\Omega_b h^2$, $\Omega_m h^2$, curvature
- [Polarization E and B modes](../02_Zettel/Theory/Polarization E and B modes.html)

---

## Block 7  -  Primordial universe  *(Cassata  -  replaced in this AY by detection techniques for protoclusters)*

- [Big Bang nucleosynthesis](../02_Zettel/Theory/Big Bang nucleosynthesis.html)
- [Phase transitions](../02_Zettel/Theory/interf/Phase transitions.html)
- [Cosmological inflation](../02_Zettel/Theory/Cosmological inflation.html)  -  Guth, Linde; solves flatness, horizon, monopole problems
- [Protocluster detection techniques](../02_Zettel/Theory/Protocluster detection techniques.html)  -  overdensities of Lyα emitters, narrow-band imaging, IR-selected structures, spectroscopic confirmation, the JWST era

---

## Block 8  -  Origin and evolution of cosmological structure *(Cassata)*

- [Linear vs nonlinear regime](../02_Zettel/Theory/Linear vs nonlinear regime.html)
- [Spherical collapse](../02_Zettel/Theory/Spherical collapse.html)  -  $\delta_c \simeq 1.686$
- [Press-Schechter formalism](../02_Zettel/Theory/Press-Schechter formalism.html)  -  halo mass function
- [N-body simulations](../02_Zettel/Theory/N-body simulations.html)  -  Millennium, IllustrisTNG

---

## Block 9  -  The post-recombination universe, diffuse baryons, IGM *(Cassata)*

- [Reionization](../02_Zettel/Theory/Reionization.html)  -  $z \sim 6$ - $10$, ionizing photons from first galaxies/quasars
- [Intergalactic medium](../02_Zettel/Theory/Intergalactic medium.html)
- [Lyman-α forest](../02_Zettel/Theory/Lyman-alpha forest.html)  -  neutral hydrogen along quasar sight lines
- [Missing baryons](../02_Zettel/Theory/Missing baryons.html)  -  WHIM, warm-hot intergalactic medium

---

## Block 10  -  Galaxy formation and evolution *(Pablo Pérez-González + Cassata)*

This block is where observational cosmology touches down into actual galaxies and the data Pablo works on.

Pablo's lecture series (31 March  -  3 April):

### Lecture 0  -  historical introduction
- [Pablo_01_Introduction_to_galaxy_studies](../01_Literature/Lectures/Observational_Cosmology/Pablo_01_Introduction_to_galaxy_studies.html)  -  historical arc from Al-Sufi's "small cloud" to JWST

### Lecture 1A  -  statistical properties of galaxies (lecture overview)
- [Pablo_02_Statistical_properties_of_galaxies](../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)  -  the master overview of this block

#### Distributions of galaxy parameters
- [Color bimodality of galaxies](../02_Zettel/Theory/Color bimodality of galaxies.html)  -  Baldry 2004 two peaks in $u-r$
- [Red sequence and blue cloud](../02_Zettel/Theory/Red sequence and blue cloud.html)  -  passive vs star-forming populations
- [Green valley and quenching tracks](../02_Zettel/Theory/Green valley and quenching tracks.html)  -  Faber 2007 evolutionary arrows
- [Galaxy color, density and morphology](../02_Zettel/Theory/Galaxy color, density and morphology.html)  -  Hogg 2004, Blanton & Moustakas 2009

#### Counts
- [Galaxy number counts N(m)](../02_Zettel/Theory/Galaxy number counts N(m).md)  -  the Euclidean prediction $N(<m) \propto 10^{0.6 m}$
- [Differential vs cumulative number counts](../02_Zettel/Theory/Differential vs cumulative number counts.html)  -  $dN/dm$ vs $N(<m)$, $dN/dS$
- [Galaxy counts at different wavelengths](../02_Zettel/Theory/Galaxy counts at different wavelengths.html)  -  Durham compilation, optical to sub-mm
- [Driver 1998 counts by morphology](../02_Zettel/Theory/Driver 1998 counts by morphology.html)  -  faint blue galaxy excess

#### Sizes and biases
- [Galaxy size-luminosity relation](../02_Zettel/Theory/Galaxy size-luminosity relation.html)  -  $R_e$ vs $M_B$ across galaxy classes
- [Redshift distribution of flux-limited samples](../02_Zettel/Theory/Redshift distribution of flux-limited samples.html)  -  Brinchmann 2008
- [Malmquist bias](../02_Zettel/Theory/Malmquist bias.html)  -  flux-limited samples preferentially select luminous sources
- [Photometric redshifts](../02_Zettel/Theory/Photometric redshifts.html)  -  Benítez 2000 likelihood, 4000 Å break
- [Photo-z biases and catastrophic outliers](../02_Zettel/Theory/Photo-z biases and catastrophic outliers.html)  -  Oyaizu 2008, failure modes

#### Luminosity function
- [Luminosity function definition](../02_Zettel/Theory/Luminosity function definition.html)  -  $dN = \phi(L)\, dL\, dV$
- [Schechter function](../02_Zettel/Theory/Schechter function.html)  -  $\phi(L) = (\phi^*/L^*)(L/L^*)^\alpha e^{-L/L^*}$
- [Schechter function in magnitudes](../02_Zettel/Theory/Schechter function in magnitudes.html)  -  the form fit to data
- [Integrals of the Schechter function](../02_Zettel/Theory/Integrals of the Schechter function.html)  -  number, luminosity, $N(>L^*)$ as Gamma functions
- [1Vmax estimator](../02_Zettel/Theory/1Vmax estimator.html)  -  Schmidt 1968 non-parametric LF
- [Schechter K-band luminosity function](../02_Zettel/Theory/Schechter K-band luminosity function.html)  -  Smith 2009: $M^*=-23.19$, $\alpha=-0.81$, $\phi^*=0.0166$
- [Double power-law modified Schechter](../02_Zettel/Theory/Double power-law modified Schechter.html)  -  Pérez-González 2005 bright-end excess at high $z$
- [LF by morphology and SED](../02_Zettel/Theory/LF by morphology and SED.html)  -  Driver 2006, Wolf 2003

#### Mass functions and the halo connection
- [Stellar mass function](../02_Zettel/Theory/Stellar mass function.html)  -  Cole 2001, Bell 2003, Pérez-González 2008
- [Halo mass function vs galaxy mass function](../02_Zettel/Theory/Halo mass function vs galaxy mass function.html)  -  the factor-of-six gap
- [Halo gravity suppression of galaxy formation](../02_Zettel/Theory/Halo gravity suppression of galaxy formation.html)  -  SN feedback at low mass, AGN feedback at high mass
- [Stellar-to-halo mass ratio](../02_Zettel/Theory/Stellar-to-halo mass ratio.html)  -  Behroozi 2013 peak at $M_h \sim 10^{12}\,M_\odot$

#### Cosmic histories (integrals over $z$)
- [Cosmic star formation history](../02_Zettel/Theory/Cosmic star formation history.html)  -  Madau-Dickinson plot, peak at $z \sim 2$
- [Cosmic stellar mass density growth](../02_Zettel/Theory/Cosmic stellar mass density growth.html)  -  Pérez-González 2008a buildup
- [SFR and stellar mass density connection](../02_Zettel/Theory/SFR and stellar mass density connection.html)  -  $\rho_{SFR} = d\rho_*/dt$

#### Scaling relations
- [Galaxy main sequence of star formation](../02_Zettel/Theory/Galaxy main sequence of star formation.html)  -  Rodighiero 2011, Santini 2017
- [Fundamental plane of ellipticals](../02_Zettel/Theory/Fundamental plane of ellipticals.html)  -  $R_e \propto \sigma^{1.4} \langle I \rangle_e^{-0.9}$
- [Tully-Fisher relation](../02_Zettel/Theory/Tully-Fisher relation.html)  -  $L \propto V_{\text{flat}}^4$
- [Schmidt-Kennicutt law](../02_Zettel/Theory/Schmidt-Kennicutt law.html)  -  $\Sigma_{SFR} \propto \Sigma_{\text{gas}}^{1.4}$
- [Magorrian relation](../02_Zettel/Theory/Magorrian relation.html)  -  $M_{BH} \approx 10^{-3}\, M_{\text{bulge}}$

### Lecture 1B  -  star formation in galaxies
- [Pablo_03_Star_formation_in_galaxies](../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)  -  the master overview of this block

#### Definitions and time scales
- [Star formation rate and sSFR](../02_Zettel/Theory/Star formation rate and sSFR.html)  -  $\psi = dM_*/dt$, sSFR as doubling-time inverse
- [Star formation history parametrizations](../02_Zettel/Theory/Star formation history parametrizations.html)  -  SSP, CON, τ, delayed, non-parametric
- [Galaxy time scales](../02_Zettel/Theory/Galaxy time scales.html)  -  Hubble, dynamical $\sqrt{3\pi/16 G\rho}$, cooling, SF, enrichment, merger
- [Initial mass function](../02_Zettel/Theory/Initial mass function.html)  -  Salpeter 1955 ($\alpha = 2.35$), Kroupa 2001, Chabrier 2003

#### SFR tracers across the spectrum
- [UV SFR tracer](../02_Zettel/Theory/UV SFR tracer.html)  -  Kennicutt 1998, $1.4 \times 10^{-28} L_\nu$
- [UV slope and IRX-beta relation](../02_Zettel/Theory/UV slope and IRX-beta relation.html)  -  Meurer 1999, dust correction without IR
- [Dust attenuation and extinction curves](../02_Zettel/Theory/Dust attenuation and extinction curves.html)  -  Calzetti 2000, Cardelli 1989, Charlot & Fall 2000
- [H-alpha SFR tracer](../02_Zettel/Theory/H-alpha SFR tracer.html)  -  $7.9 \times 10^{-42} L(\text{H}\alpha)$, 10 Myr timescale
- [Balmer decrement](../02_Zettel/Theory/Balmer decrement.html)  -  $F(\text{H}\alpha)/F(\text{H}\beta) = 2.86$ for case B
- [Lyman alpha SFR tracer](../02_Zettel/Theory/Lyman alpha SFR tracer.html)  -  resonance scattering, Verhamme 2008
- [OII SFR tracer](../02_Zettel/Theory/OII SFR tracer.html)  -  forbidden, metallicity-dependent, redshift-desert tool
- [Other SFR tracer lines](../02_Zettel/Theory/Other SFR tracer lines.html)  -  Pα, [CII] 158 μm, PAHs, radio recombination
- [X-ray SFR tracer](../02_Zettel/Theory/X-ray SFR tracer.html)  -  HMXBs + diffuse, Ranalli 2003, metallicity dependence
- [IR SFR tracer](../02_Zettel/Theory/IR SFR tracer.html)  -  $4.5 \times 10^{-44} L_{\text{TIR}}$, Pérez-González 2006
- [Radio SFR tracer](../02_Zettel/Theory/Radio SFR tracer.html)  -  FIR-radio correlation $q \simeq 2.3$, Murphy 2011
- [SFR tracer comparison](../02_Zettel/Theory/SFR tracer comparison.html)  -  Cardiel 2003, tracer disagreements as diagnostics

#### SFH reconstruction and SPS
- [SFH from resolved CMDs](../02_Zettel/Theory/SFH from resolved CMDs.html)  -  Local Group, Ferguson 2002, Tolstoy 2009, Harris & Zaritsky 2004
- [SED fitting for SFH](../02_Zettel/Theory/SED fitting for SFH.html)  -  Papovich 2001, Pérez-González 2008, modern codes
- [Stellar population synthesis](../02_Zettel/Theory/Stellar population synthesis.html)  -  BC03, Maraston 2005, FSPS, Starburst99, Lick indices

#### Galaxy classes
- [Starburst galaxies](../02_Zettel/Theory/Starburst galaxies.html)  -  M82, Wolf-Rayet, BCDs, SSCs, superwinds
- [Post-starburst galaxies](../02_Zettel/Theory/Post-starburst galaxies.html)  -  E+A, Balmer absorption, Kriek 2010
- [LIRGs ULIRGs HyLIRGs](../02_Zettel/Theory/LIRGs ULIRGs HyLIRGs.html)  -  IRAS 1983, Sanders & Mirabel 1996, Arp 220
- [Galaxy mergers and SF](../02_Zettel/Theory/Galaxy mergers and SF.html)  -  $f_m \propto (1+z)^{2-3}$, merger-ULIRG-elliptical sequence

#### Chemical evolution
- [Chemical evolution of galaxies](../02_Zettel/Theory/Chemical evolution of galaxies.html)  -  Tinsley 1979, α/Fe clock, mass-metallicity, yields

### Future Pablo lectures (placeholders)
- [Galaxy morphology and classification](../02_Zettel/Theory/Galaxy morphology vs physical properties.html)  -  Hubble tuning fork and beyond
- [Galaxy SEDs and photometric redshifts](../02_Zettel/Theory/Galaxy SED fitting.html)
- [High-z galaxies with JWST](../02_Zettel/Theory/High-z galaxies with JWST.html)  -  the JADES, CEERS, COSMOS-Web fields; surprising abundance of bright $z \gtrsim 10$ galaxies
- [Quenching and passive galaxies at high z](../02_Zettel/Theory/Quenching and passive galaxies at high z.html)

---

## Appendices and tools

- [Cosmology calculator  -  how to use H0 Ω_m Ω_Λ to get d_L, d_A, t_lookback](../02_Zettel/Theory/Cosmology calculator - how to use H0 Omega_m Omega_Lambda to get dL dA t_lookback.html)
- [Surveys to remember](../02_Zettel/Theory/Surveys to remember.html)  -  2dFGRS, SDSS, DEEP-2, BOSS, WiggleZ, WFMOS, 4MOST
- [Space and ground facilities relevant for OC](../02_Zettel/Theory/Space and ground facilities relevant for OC.html)  -  HST, Chandra, XMM, Spitzer, Herschel, JWST, Keck, VLT, Subaru, LBT, GTC, ALMA; upcoming ELT, SKA

---

---

## Dynamic Zettel Index (Dataview)

```dataview
LIST
FROM "03_Zettel/Theory"
WHERE contains(file.outlinks, this.file.link) OR contains(file.inlinks, this.file.link)
SORT file.name ASC
```