---
layout: "default"
title: "Cosmology_of_the_Early_Universe_MOC"
---
# Cosmology of the Early Universe — Map of Content

> **Master Year 2 Semester 1** | **A.Y. 2026/2027** (Pre-class compilation from 2024–2026 materials)  
> **Lecturer**: **Prof. Nicola Bartolo** (Department of Physics and Astronomy "G. Galilei", Office 236, bartolo@pd.infn.it)  
> **Schedule**:  
> • Wednesday 10:30 – 12:30 (**Aula LUF2 [Aule di Via Luzzatti]**)  
> • Friday 10:30 – 12:30 (**Aula P1C [Edificio Ricci Curbastro]**)  
> **Timetable Dashboard**: Master Year 2 Semester 1 Timetable  
> **Literature Compendium**: [[Course_Overview_and_Syllabus]] | [[Bartolo_Exam_Exercises_and_Applications_Guide]]

---

## Course Overview & Structural Spine

The standard Hot Big Bang cosmology describes the expansion, thermal history, and nucleosynthesis of the universe with remarkable empirical success. However, it completely breaks down when tasked with explaining its own initial conditions:
$$\text{Why is the CMB temperature uniform across } 40{,}000 \text{ causally disconnected patches?}$$
$$\text{Why is the spatial geometry flat to one part in } 10^{60} \text{ at the Planck era?}$$
$$\text{Why are there no massive Grand Unified Theory (GUT) magnetic monopoles?}$$
$$\text{What generated the initial seed density fluctuations that collapsed into galaxies?}$$

This course builds the theoretical physics of the primordial universe operating prior to the radiation era ($t < 10^{-32}\text{ s}$). It weaves General Relativity, quantum field theory in curved spacetime, and high energy particle theory into a unified framework.

The physical chain of the early universe follows this progression:
$$\text{de Sitter acceleration} \to \text{inflaton slow roll} \to \text{quantum zero-point fluctuations} \to \text{horizon exit} \to \text{freeze-out as classical curvature perturbations} \to \text{reheating} \to \text{baryogenesis} \to \text{freeze-out of relics} \to \text{hot Big Bang}$$

---

## Block 1 — The Homogeneous Universe and Shortcomings of the Standard Big Bang

Before perturbing the universe, we establish the classical FLRW backdrop and trace the physical breakdowns that force an inflationary epoch.

* Lecture Synthesis: [[Part1_Standard_Big_Bang_and_Shortcomings]]
* Relevant Course PDFs: `Blocco_1.pdf`, `Notes_on_Early_Universe-34 (1).pdf` (pp. 11–38)

Key Zettels & Derivations:
* [[FLRW metric]] — Homogeneous, isotropic line element in cosmic time $t$ and conformal time $\tau$.
* [[Friedmann equations]] — Background dynamics, continuity equation, energy density scaling $\rho(a) \propto a^{-3(1+w)}$.
* [[Horizon problem and causal structure]] — Particle horizon vs event horizon vs Hubble radius; physical horizon at recombination subtends $\theta_H \approx 1^\circ$ on the CMB sky ($\sim 40{,}000$ causally disconnected domains).
* [[Flatness problem and dynamical attractor]] — Curvature evolution equation $\frac{d\Omega_k}{d\ln a} = \Omega_k\Omega(1+3w)$; unstable repeller in standard cosmology ($\lvert 1-\Omega_{\rm Pl}\rvert < 10^{-60}$) vs stable dynamical attractor during inflation ($\lvert\Omega_k\rvert \propto e^{-2N}$).
* [[Cosmic relics and Kibble mechanism]] — Spontaneous symmetry breaking at $T_{\rm GUT} \sim 10^{16}\text{ GeV}$; topological defect formation; magnetic monopole overclosure catastrophe ($\Omega_{\rm mono} \sim 10^{14}$) and its exponential dilution ($e^{-3N} \sim 10^{-78}$).
* [[Cosmological inflation]] — The kinematics of accelerated expansion ($\ddot{a} > 0 \iff w < -1/3$); shrinking comoving Hubble radius $\frac{d}{dt}(aH)^{-1} < 0$.

---

## Block 2 — Inflaton Kinematics and Scalar Field Dynamics

Accelerated expansion modeled dynamically through a self-interacting real scalar field coupled minimally to gravity.

* Lecture Synthesis: [[Part2_Inflation_Kinematics_Dynamics_and_Models]]
* Relevant Course PDFs: `Blocco2_24_25_new.pdf`, `Blocco8_updated_latest (1) (1).pdf`, `Notes_on_Early_Universe-34 (1).pdf` (pp. 39–50, 71–84)

Key Zettels & Derivations:
* [[Single-field slow-roll inflation dynamics]] — Inflaton action, stress-energy tensor as a perfect fluid, Klein-Gordon equation $\ddot{\phi} + 3H\dot{\phi} + V' = 0$, Hubble friction, slow-roll conditions.
* [[Slow-roll parameters epsilon and eta]] — Hubble parameters $\epsilon = -\dot{H}/H^2$, $\eta = -\ddot{\phi}/(H\dot{\phi})$; potential parameters $\epsilon_V = \frac{M_{\rm Pl}^2}{2}(V'/V)^2$, $\eta_V = M_{\rm Pl}^2(V''/V)$; lowest-order relations $\eta \approx \eta_V - \epsilon_V$, $\dot{\epsilon}/H = 2\epsilon(\epsilon - \eta)$.
* [[Number of e-folds and horizon exit]] — $N(\phi) \approx \frac{1}{M_{\rm Pl}^2}\int_{\phi_{\rm end}}^\phi \frac{V}{V'} d\phi'$; requirement of $N \approx 50 - 60$ e-folds for CMB modes.
* [[Large-field versus small-field inflation models]] — Monomial chaotic inflation ($m^2\phi^2, \lambda\phi^4$) vs hilltop symmetry-breaking models.
* [[Lyth bound and field excursion]] — Relation $\frac{\Delta\phi}{M_{\rm Pl}} \approx \mathcal{O}(1)\sqrt{r/0.01}$; threshold between super-Planckian and sub-Planckian field excursions.
* [[Starobinsky R-squared inflation]] — Modified gravity action $R + R^2/(6M^2)$, conformal frame transformation, asymptotically flat Einstein-frame potential $V_0(1 - e^{-\sqrt{2/3}\phi/M_{\rm Pl}})^2$, predictions $n_s \approx 1 - 2/N$, $r \approx 12/N^2 \approx 0.003$.
* Cosmic no-hair theorem (Wald 1983) and the $\eta$-problem in supergravity/EFT.

---

## Block 3 — Quantum Generation of Cosmological Perturbations

The microphysical mechanism: how microscopic quantum vacuum zero-point fluctuations of the inflaton field freeze out as macroscopic classical density seeds.

* Lecture Synthesis: [[Part3_Quantum_Perturbations_and_Power_Spectra]]
* Relevant Course PDFs: `Blocco3_updated_last (1) 2.pdf`, `Blocco4_updated_last (1) (1).pdf`, `Blocco5_updated_last (1) (1).pdf`, `Notes_on_Early_Universe-34 (1).pdf` (pp. 51–65)

Key Zettels & Derivations:
* [[Quantum fluctuations of the inflaton field]] — Canonical quantization in conformal time, sub-horizon quantum harmonic oscillators vs super-horizon freeze-out.
* [[Sasaki-Mukhanov variable and equation]] — Canonical variable $v = z \mathcal{R} = a[\delta\phi + \frac{\dot{\phi}}{H}\psi]$, master equation $v_k'' + (k^2 - z''/z)v_k = 0$, de Sitter behavior $z''/z \approx 2/\tau^2$.
* [[Bunch-Davies vacuum and mode functions]] — Asymptotic past ultraviolet boundary condition $\lim_{\tau\to-\infty} v_k = \frac{1}{\sqrt{2k}}e^{-ik\tau}$, exact Hankel function solutions $u_k(\tau) = \frac{e^{-ik\tau}}{\sqrt{2k}}(1 - \frac{i}{k\tau})$.
* [[Curvature perturbation R and zeta]] — Comoving curvature perturbation $\mathcal{R}$ and uniform-density curvature perturbation $\zeta$; proof of super-horizon conservation ($d\zeta/dt = 0$ for $k \ll aH$ for adiabatic modes).
* [[Scalar primordial power spectrum and spectral index]] — Dimensionless power spectrum $\mathcal{P}_\mathcal{R}(k) = \frac{1}{24\pi^2 M_{\rm Pl}^4}\frac{V}{\epsilon_V}\big\vert_{k=aH}$; scalar tilt $n_s - 1 \equiv \frac{d\ln\mathcal{P}_\mathcal{R}}{d\ln k} = 2\eta_V - 6\epsilon_V$; Planck 2018 value $n_s = 0.9649 \pm 0.0042$.

---

## Block 4 — Primordial Gravitational Waves and Tensor Modes

Quantum fluctuations of the spacetime geometry: transverse-traceless metric tensor perturbations and the observational search for primordial B-modes.

* Lecture Synthesis: [[Part3_Quantum_Perturbations_and_Power_Spectra]]
* Relevant Course PDFs: `Blocco3_updated_latest_GWs (1) (1).pdf`, `Lecture_XXIII_2023-2024 copy.pdf`, `2112.07961_Tristram_II (1).pdf`, `2208.00188 (1).pdf`

Key Zettels & Derivations:
* [[Tensor perturbations and primordial gravitational waves]] — Metric perturbation $g_{ij} = a^2(\delta_{ij} + h_{ij})$, 2 polarization states ($+, \times$), wave equation $h_k'' + 2\frac{a'}{a}h_k' + k^2 h_k = 0$, tensor power spectrum $\mathcal{P}_T(k) = \frac{2}{\pi^2}\frac{H^2}{M_{\rm Pl}^2}\big\vert_{k=aH} = \frac{2}{3\pi^2}\frac{V}{M_{\rm Pl}^4}\big\vert_{k=aH}$.
* [[Tensor-to-scalar ratio r and inflation energy scale]] — Ratio $r \equiv \mathcal{P}_T/\mathcal{P}_\mathcal{R} = 16\epsilon$; direct determination of the inflation energy scale $V^{1/4} \simeq 1.88 \times 10^{16}\text{ GeV}(r/0.10)^{1/4} \simeq 0.6 \times 10^{16}\text{ GeV}(r/10^{-3})^{1/4}$.
* [[Consistency relation of single-field slow-roll inflation]] — Tensor tilt $n_T = -2\epsilon = -r/8$; testable consistency relation $r = -8 n_T$.
* Observational constraints: Planck 2018 + BICEP/Keck (Tristram et al. 2021) bound $r < 0.032$; future targets (LiteBIRD, CMB-S4) reaching $\sigma(r) \sim 10^{-3}$.

---

## Block 5 — Beyond Standard Single-Field and Primordial Non-Gaussianity

Probing physics beyond the two-point function: bispectrum shapes, non-linear parameters, and quantum field theory in curved spacetime.

* Lecture Synthesis: [[Part4_Advanced_Formalisms_and_Non_Gaussianity]]
* Relevant Course PDFs: `Introduction_in_in_24.pdf`, `Appunti_formalismo_In-In.pdf`, `638979 2.pdf` (Chen 2010), `0506236 (1) 2.pdf` (Weinberg 2005)

Key Zettels & Derivations:
* [[In-In formalism for cosmological correlators]] — Schwinger-Keldysh closed time contour; equal-time vacuum expectation values $\langle \Omega \vert \mathcal{O}(t) \vert \Omega \rangle$; Weinberg master commutator formula; interaction Hamiltonian $H_I(t)$.
* [[Primordial non-Gaussianity and bispectrum shapes]] — 3-point correlation function in Fourier space:
  $$\langle\zeta_{\mathbf{k}_1}\zeta_{\mathbf{k}_2}\zeta_{\mathbf{k}_3}\rangle = (2\pi)^3 \delta^{(3)}(\mathbf{k}_1 + \mathbf{k}_2 + \mathbf{k}_3) B_\zeta(k_1, k_2, k_3)$$
  Non-linearity parameter $f_{\rm NL}$; local shape (squeezed $k_1 \ll k_2 \approx k_3$, multi-field/curvaton), equilateral shape ($k_1 \approx k_2 \approx k_3$, non-canonical kinetic terms $c_s \ll 1$), folded/orthogonal shapes (non-Bunch-Davies vacua).
* [[Maldacena consistency condition]] — Single-field theorem in the squeezed limit: $\lim_{k_1\to 0} \frac{B_\zeta}{P_\zeta(k_1)P_\zeta(k_2)} = -(n_s - 1) \implies f_{\rm NL}^{\rm local} = \frac{5}{12}(1 - n_s) \approx 0.015$; any detection of $\lvert f_{\rm NL}^{\rm local}\rvert \gtrsim 1$ rigorously falsifies all single-field slow-roll models.
* [[Delta-N formalism]] — Separate universe approximation on super-horizon scales ($k \ll aH$); non-linear curvature perturbation $\zeta \approx \delta N = \sum N_{,I}\delta\phi^I + \frac{1}{2}\sum N_{,IJ}\delta\phi^I\delta\phi^J$; computation of $f_{\rm NL}^{\rm local} = \frac{5}{6}\frac{\sum N_{,I}N_{,J}N_{,IJ}}{(\sum N_{,K}^2)^2}$.
* Theories with non-canonical kinetic terms $\mathcal{L}(X, \phi)$: sound speed $c_s^2 = \mathcal{L}_{,X}/(\mathcal{L}_{,X} + 2X\mathcal{L}_{,XX})$ and generation of equilateral non-Gaussianity $f_{\rm NL}^{\rm equil} \sim -1/c_s^2$.

---

## Block 6 — Relativistic Cosmological Perturbation Theory and Gauge Invariance

Rigorous General Relativity perturbation theory: eliminating coordinate artifacts and linearizing Einstein's field equations.

* Lecture Synthesis: [[Part5_GR_Cosmological_Perturbation_Theory]]
* Relevant Course PDFs: `Notes_on_Early_Universe-34 (1).pdf` (Ch. 5), `PhysRevD.22.1882.pdf_Bardeen_paper (1).pdf`

Key Zettels & Derivations:
* [[Cosmological perturbation theory in General Relativity]] — Linearly perturbed line element, 10 degrees of freedom, SVT decomposition into 4 scalars ($\psi, \phi, w, \chi$), 4 vectors ($w_i^\perp, v_i$), and 2 tensors ($h_{ij}$).
* [[Gauge transformations and Bardeen potentials]] — Coordinate transformations $x^\mu \to x^\mu + \xi^\mu$, Lie derivatives, transformation laws for metric potentials; construction of gauge-invariant Bardeen potentials $\Phi$ and $\Psi$; conformal Newtonian (longitudinal) gauge.
* [[Gauge-invariant density perturbation and relativistic Poisson equation]] — 4-velocity normalization $u^\mu u_\mu = -1 \implies v^0 = -\psi$; gauge-invariant comoving-orthogonal energy density perturbation $\epsilon_m = \delta\rho + \rho_0'(v_\parallel + w_\parallel)$; relativistic Poisson equation $\nabla^2\Phi = 4\pi G a^2 \epsilon_m$.

---

## Block 7 — The End of Inflation: Reheating and Preheating

Bridging the cold, empty inflationary state to the thermal bath of the Hot Big Bang.

* Lecture Synthesis: [[Part6_Reheating_Baryogenesis_and_Dark_Matter]]
* Relevant Course PDFs: `Notes_on_Early_Universe-34 (1).pdf` (pp. 85–88)

Key Zettels & Derivations:
* [[Reheating dynamics and thermalization]] — Breakdown of slow roll ($\epsilon \approx 1$); coherent inflaton oscillations in $V(\phi) \approx \frac{1}{2}m^2\phi^2$; effective matter era ($w = 0, a \propto t^{2/3}$); perturbative decay with width $\Gamma_\phi$; thermalization temperature $T_{\rm reh} \approx 0.55 g_*^{-1/4}\sqrt{\Gamma_\phi M_{\rm Pl}}$.
* [[Preheating and parametric resonance]] — Inflaton coupling $\frac{1}{2}g^2\phi^2\chi^2$; mode equation mapped to the Mathieu equation $X_k'' + [A_k - 2q\cos(2\tau)]X_k = 0$; broad parametric resonance ($q \gg 1$); explosive, non-thermal particle creation.

---

## Block 8 — Primordial Relics: Baryogenesis and Dark Matter Production

Origin of matter and dark matter in the primordial plasma.

* Lecture Synthesis: [[Part6_Reheating_Baryogenesis_and_Dark_Matter]]
* Relevant Course PDFs: `Review_Baryogenesis (1) (1).pdf` (Trodden 2004), `DM_production (1).pdf`, `Notes_on_Early_Universe-34 (1).pdf` (pp. 89–122)

Key Zettels & Derivations:
* [[Sakharov conditions for baryogenesis]] — Baryon asymmetry $\eta_B \approx 6.1 \times 10^{-10}$; failure of thermal equilibrium ("annihilation catastrophe", $\eta_B \sim 10^{-18}$); Sakharov's three conditions: $B$ violation, $C$ and $CP$ violation, departure from thermal equilibrium.
* [[Out-of-equilibrium decay baryogenesis and Weinberg model]] — Heavy GUT boson $X$ decay channels; net asymmetry $\Delta B = (r - \bar{r})(B_1 - B_2)$; Boltzmann evolution; decay parameter $K \equiv \frac{\Gamma_X}{2 H(T=M_X)}$; weak washout ($K \ll 1, T_D \sim K^{1/2}M_X$) vs strong washout ($K \gg 1$).
* [[Electroweak sphalerons and leptogenesis]] — Chiral anomaly and non-conservation of $B+L$; sphaleron transitions at $T > 100\text{ GeV}$; $(B-L)$ conservation; thermal leptogenesis via right-handed Majorana neutrino decay ($N_1 \to \ell H$), converted to baryon asymmetry $B = \frac{28}{79}(B-L)$.
* [[Dark matter thermal freeze-out and Lee-Weinberg bound]] — Boltzmann equation $\frac{dn}{dt} + 3Hn = -\langle\sigma v\rangle(n^2 - n_{\rm eq}^2)$; chemical decoupling at $\Gamma_{\rm ann} \sim H$; relic density scaling $\Omega_\chi h^2 \approx \frac{3 \times 10^{-27}\text{ cm}^3/\text{s}}{\langle\sigma v\rangle}$; WIMP miracle; Lee-Weinberg bound $m_\chi \gtrsim 2 - 5\text{ GeV}$.
* [[Hot versus cold dark matter in the early universe]] — Relativistic freeze-out ($T_{\rm fo} \gg m$); neutrino relic density $\Omega_\nu h^2 = \sum m_\nu / 93.14\text{ eV}$; free-streaming scale $\lambda_{\rm fs} \sim 40\text{ Mpc}(30\text{ eV}/m_\nu)$; erasure of small-scale perturbations and top-down structure formation (ruled out by observations).
* [[Non-thermal dark matter relics and axion misalignment]] — QCD axion from Peccei-Quinn mechanism; temperature-dependent mass $m_a(T)$; coherent oscillations starting at $3H(T) \approx m_a(T)$; zero-momentum cold Bose-Einstein condensate with $\Omega_a h^2 \approx 0.12 (10\mu\text{eV}/m_a)^{1.17}\theta_i^2$.

---

## Block 9 — Exercises, Applications, and Oral Exam Preparation

Master problem solving compendium covering all 31 homework problems assigned by Prof. Nicola Bartolo in `Homework_2025_2026.pdf`.

* Comprehensive Problem Guide: [[Bartolo_Exam_Exercises_and_Applications_Guide]]

### Topic mapping for exam review:
1. **Background & Horizon kinematics**: Exercises 1, 2, 3, 4, 8
2. **Flatness dynamics & Attractor proofs**: Exercises 5, 6, 7
3. **Scalar field stress-energy & Klein-Gordon**: Exercises 9, 10, 11, 12
4. **Slow-roll parameters & Model building**: Exercises 13, 14, 15
5. **Perturbation equations & Special functions**: Exercises 16, 17, 18, 19
6. **Observational predictions & Energy scale**: Exercises 20, 22
7. **Phase transitions & Reheating**: Exercises 21, 23
8. **Boltzmann transport & Baryogenesis**: Exercises 24, 25, 26, 27
9. **General Relativity gauge invariance & Poisson equation**: Exercises 28, 29, 30, 31

---

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.CO/gr-qc benchmark papers underlying the inflationary and perturbation-theory formalism above.

- [[Baumann_2009_TASI_Lectures_on_Inflation|Baumann (2009) — TASI Lectures on Inflation]] — slow-roll formalism, scalar/tensor power spectra, $r=16\epsilon$
- [[BICEP_Keck_2021_Primordial_Gravitational_Waves|BICEP/Keck Collaboration (2021) — Improved Constraints on Primordial Gravitational Waves]] — B-mode polarization, $r_{0.05}<0.036$
- [[Mukhanov_Feldman_Brandenberger_1992_Cosmological_Perturbations|Mukhanov, Feldman & Brandenberger (1992) — Theory of Cosmological Perturbations]] — gauge-invariant formalism, the Mukhanov-Sasaki equation

---

## Dynamic Vault Index

```dataview
LIST
FROM "03_Zettel/Theory"
WHERE contains(file.tags, "early-universe") OR contains(file.tags, "inflation") OR contains(parent, "Cosmology_of_the_Early_Universe_MOC")
SORT file.name ASC
```

---

## Cross-Course Vault Connections

* [[Observational_Cosmology_MOC]] — Late-time FLRW geometry, distance ladder, CMB temperature anisotropies, and large-scale structure formation.
* [[General_Relativity_MOC]] — Spacetime curvature, Christoffel symbols, Einstein field equations, and relativistic stress-energy conservation.
* [[Fundamentals_Astrophysics_Cosmology_MOC]] — Thermal history of the universe, Big Bang Nucleosynthesis, and recombination physics.
* [[Astro-Statistics_and_Cosmology_MOC]] — Gaussian random fields, power spectrum estimators, MCMC analysis, and parameter likelihoods.
* Master Year 2 Semester 1 Timetable — Weekly class schedule and semester planning dashboard.


---

## Master Figure Index (Cosmology of the Early Universe)

| Figure ID | Visual Asset Name | Slide / Concept Title | Primary Zettel / Lecture Note Link | Key Theoretical / Cosmological Principle |
| :--- | :--- | :--- | :--- | :--- |
| **CEU-01** | `early_inflation_p02.png` | Slow-Roll Inflaton Potential $V(\phi)$ | [[Part2_Inflation_Kinematics_Dynamics_and_Models]] | Slow-roll conditions $\epsilon \ll 1, \eta \ll 1$ and graceful exit dynamics |
| **CEU-02** | `early_inflation_p08.png` | Comoving Horizon Evolution | [[Part2_Inflation_Kinematics_Dynamics_and_Models]] | Shrinking comoving Hubble horizon $(aH)^{-1}$ solving the horizon and flatness problems |
| **CEU-03** | `early_inflation_p15.png` | Phase Portrait & Slow-Roll Attractor | [[Part2_Inflation_Kinematics_Dynamics_and_Models]] | Universal cosmic no-hair attractor in $(\phi, \dot{\phi})$ phase space |
| **CEU-04** | `early_perturbations_p05.png` | Mukhanov-Sasaki Quantum Mode Evolution | [[Part3_Quantum_Perturbations_and_Power_Spectra]] | Mode oscillation in sub-horizon regime and freezing out on super-Hubble scales |
| **CEU-05** | `early_perturbations_p15.png` | Curvature Perturbation $\mathcal{R}_k$ Conservation | [[Part3_Quantum_Perturbations_and_Power_Spectra]] | Gauge-invariant super-horizon conservation of $\mathcal{R}_k$ for adiabatic modes |
| **CEU-06** | `early_perturbations_p25.png` | Bunch-Davies Vacuum Boundary State | [[Part3_Quantum_Perturbations_and_Power_Spectra]] | Asymptotic Minkowski vacuum condition $v_k(\tau) \to e^{-ik\tau}/\sqrt{2k}$ as $\tau \to -\infty$ |
| **CEU-07** | `early_powerspectrum_p05.png` | Primordial Power Spectrum Tilt $n_s$ | [[Part3_Quantum_Perturbations_and_Power_Spectra]] | Red scalar spectral index $n_s - 1 = 2\eta - 6\epsilon \approx -0.035$ matching Planck |
| **CEU-08** | `early_powerspectrum_p20.png` | Primordial Tensor Spectrum & Ratio $r$ | [[Part3_Quantum_Perturbations_and_Power_Spectra]] | Primordial gravitational waves $\mathcal{P}_t(k) = \frac{2 H^2}{\pi^2 M_{\mathrm{pl}}^2}$ and bound $r < 0.036$ |
| **CEU-09** | `early_inin_p01.png` | In-In Closed Time Path Contour | [[Part4_Advanced_Formalisms_and_Non_Gaussianity]] | Schwinger-Keldysh path contour computing expectation values at fixed time $t$ |
| **CEU-10** | `early_inin_p05.png` | Primordial Bispectrum Triangular Shapes | [[Part4_Advanced_Formalisms_and_Non_Gaussianity]] | Local ($k_1 \ll k_2 \approx k_3$), Equilateral ($k_1 \approx k_2 \approx k_3$), and Folded triangles |
| **CEU-11** | `early_inin_p10.png` | Maldacena Consistency Relation | [[Part4_Advanced_Formalisms_and_Non_Gaussianity]] | Single-field local non-Gaussianity theorem: $f_{\mathrm{NL}}^{\mathrm{local}} = \frac{5}{12}(1 - n_s)$ |
| **CEU-12** | `early_baryo_p02.png` | Preheating via Parametric Resonance | [[Part6_Reheating_Baryogenesis_and_Dark_Matter]] | Inflaton oscillation driving explosive particle creation via Mathieu equation |
| **CEU-13** | `early_baryo_p08.png` | Sakharov Conditions & Baryogenesis | [[Part6_Reheating_Baryogenesis_and_Dark_Matter]] | B-violation, C/CP violation, and out-of-equilibrium decay generating baryon asymmetry |

---

## Professors Nicola Bartolo & Sabino Matarrese Oral Exam Defense Preparation Matrix

| Exam Question | Governing Equation(s) | Blackboard Derivation Flow & Strategy | Professor Trap Points & Pitfalls |
| :--- | :--- | :--- | :--- |
| **1. Quantization of Perturbations and the Mukhanov-Sasaki Equation** | $v_k'' + \left(k^2 - \frac{z''}{z}\right) v_k = 0$<br>$v \equiv a M_{\mathrm{pl}} \sqrt{2\epsilon} \mathcal{R} = z \mathcal{R}$ | 1. Expand the Einstein-Hilbert action coupled to scalar field $\phi$ to second order in perturbations: $S_{(2)} = \frac{1}{2}\int d\tau d^3x [(v')^2 - (\nabla v)^2 + \frac{z''}{z}v^2]$.<br>2. Vary action to derive the Mukhanov-Sasaki equation in conformal time $\tau$.<br>3. In de Sitter background, $a(\tau) = -1/(H\tau)$, show $\frac{z''}{z} \approx \frac{a''}{a} = \frac{2}{\tau^2}$.<br>4. Write exact Hankel function solution and impose the Bunch-Davies vacuum boundary condition $v_k(\tau) \to \frac{1}{\sqrt{2k}} e^{-ik\tau}$ as $\tau \to -\infty$.<br>5. Take the super-horizon limit $k\tau \to 0$ to prove that $\mathcal{R}_k$ freezes out to a constant amplitude.<br>6. Calculate power spectrum $\mathcal{P}_\mathcal{R}(k) = \frac{k^3}{2\pi^2} |\mathcal{R}_k|^2 = \frac{H^2}{8\pi^2 M_{\mathrm{pl}}^2 \epsilon}$. | **Trap**: Confusing conformal time $\tau \in (-\infty, 0)$ with cosmic time $t$; forgetting that $z \propto \dot{\phi}$, meaning perturbations cannot freeze out if inflation does not end ($\dot{\phi} = 0$). |
| **2. Tensor Modes, Primordial Gravitational Waves, and the Lyth Bound** | $\mathcal{P}_t(k) = \frac{2 H^2}{\pi^2 M_{\mathrm{pl}}^2}$<br>$\frac{\Delta \phi}{M_{\mathrm{pl}}} \gtrsim \left(\frac{r}{0.01}\right)^{1/2}$ | 1. Perturb the metric with transverse traceless spatial metric perturbations $h_{ij}$.<br>2. Normalize canonical variable $v_k^s = \frac{a M_{\mathrm{pl}}}{2} h_k^s$ and obtain harmonic oscillator equation with potential $a''/a$.<br>3. Compute tensor power spectrum summing both polarization modes ($+, \times$).<br>4. Define tensor-to-scalar ratio $r \equiv \frac{\mathcal{P}_t}{\mathcal{P}_\mathcal{R}} = 16\epsilon$.<br>5. Integrate field excursion from horizon exit to end of inflation: $\Delta \phi = \int dN \frac{d\phi}{dN} = M_{\mathrm{pl}} \int \sqrt{2\epsilon} dN = M_{\mathrm{pl}} \int \sqrt{\frac{r}{8}} dN$.<br>6. Derive the Lyth bound: proving that detecting $r \ge 0.01$ implies a trans-Planckian field excursion $\Delta \phi > M_{\mathrm{pl}}$. | **Trap**: Using reduced Planck mass $M_{\mathrm{pl}} = (8\pi G)^{-1/2} = 2.4 \times 10^{18}\text{ GeV}$ inconsistently with $G^{-1/2} = 1.2 \times 10^{19}\text{ GeV}$; omitting the factor of 2 for tensor polarizations. |
| **3. In-In Formalism and Maldacena's Non-Gaussianity Consistency Relation** | $f_{\mathrm{NL}}^{\mathrm{local}} = \frac{5}{12}(1 - n_s)$<br>$\langle \mathcal{O}(t) \rangle = \langle 0 \| [\bar{T}e^{i\int H_I}] \mathcal{O} [T e^{-i\int H_I}] \| 0 \rangle$ | 1. Explain why standard in-out S-matrix theory cannot compute cosmological expectation values (we do not measure asymptotic out-states at $t \to +\infty$).<br>2. Formulate the Schwinger-Keldysh in-in closed time contour.<br>3. Define 3-point correlation function (bispectrum) and the non-linearity parameter $f_{\mathrm{NL}}$.<br>4. In the squeezed limit $k_1 \ll k_2 \approx k_3$, show that long mode $\mathcal{R}_{k_1}$ exits the horizon much earlier and freezes, acting as a classical background coordinate rescaling $x' = (1 - \mathcal{R}_L)x$.<br>5. Taylor expand the short-wavelength 2-point function in this rescaled background to prove Maldacena's theorem: $f_{\mathrm{NL}}^{\mathrm{local}} = \frac{5}{12}(1 - n_s)$.<br>6. State the fundamental conclusion: any empirical detection of $f_{\mathrm{NL}}^{\mathrm{local}} \ge 1$ decisively rules out ALL single-field slow-roll inflation models. | **Trap**: Believing single-field inflation can produce observable local non-Gaussianity; confusing local non-Gaussianity with equilateral non-Gaussianity generated by higher-derivative interactions (e.g. DBI inflation). |
| **4. Preheating: Non-Perturbative Explosive Particle Production** | $X_k'' + [A_k - 2q \cos(2mt)] X_k = 0$<br>$q \equiv \frac{g^2 \Phi^2}{4 m^2} \gg 1$ | 1. Model the end of inflation as coherent oscillation of the inflaton condensate $\phi(t) = \Phi(t) \sin(mt)$ around the potential minimum.<br>2. Couple $\phi$ to a scalar matter field $\chi$ via interaction $-\frac{1}{2}g^2 \phi^2 \chi^2$.<br>3. Formulate equation of motion for conformal mode $X_k = a^{3/2} \chi_k$ and rescale time to obtain the Mathieu equation.<br>4. Analyze Floquet theory: show existence of instability bands where mode solutions grow exponentially $X_k \propto e^{\mu_k z}$.<br>5. Distinguish narrow resonance ($q \ll 1$) from broad resonance ($q \gg 1$). In broad resonance, adiabaticity is violated each time $\phi$ passes through zero, creating particles non-thermally in bursts.<br>6. Explain why preheating occurs on timescales orders of magnitude faster than perturbative decay $\Gamma_\phi$. | **Trap**: Assuming reheating can only occur perturbatively via single-particle decays ($\Gamma_\phi$); ignoring non-thermal phase transitions and cosmic string/defect formation during preheating. |

---

## Essential Formulas Quick Sheet (Cosmology of the Early Universe)

- **Slow-Roll Parameters**: $\epsilon \equiv \frac{M_{\mathrm{pl}}^2}{2}\left(\frac{V'}{V}\right)^2$, $\eta \equiv M_{\mathrm{pl}}^2 \frac{V''}{V}$
- **Number of e-folds**: $N = \int_{t}^{t_{\mathrm{end}}} H dt = \int_{\phi_{\mathrm{end}}}^\phi \frac{1}{M_{\mathrm{pl}}\sqrt{2\epsilon}} d\phi \approx 50 - 60$
- **Scalar Power Spectrum**: $\mathcal{P}_\mathcal{R}(k) = \frac{H^2}{8\pi^2 M_{\mathrm{pl}}^2 \epsilon} \Big\vert_{k=aH}$
- **Tensor Power Spectrum**: $\mathcal{P}_t(k) = \frac{2 H^2}{\pi^2 M_{\mathrm{pl}}^2} \Big\vert_{k=aH}$
- **Tensor-to-Scalar Ratio**: $r = 16\epsilon = -8 n_t$
- **Spectral Tilt**: $n_s - 1 = 2\eta - 6\epsilon$
- **Maldacena Local Non-Gaussianity**: $f_{\mathrm{NL}}^{\mathrm{local}} = \frac{5}{12}(1 - n_s)$
- **Lyth Bound**: $\Delta \phi \gtrsim M_{\mathrm{pl}} \sqrt{\frac{r}{8}} N_{\mathrm{eff}}$
