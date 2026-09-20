---
layout: "default"
title: "Astrophysics_Laboratory_2_MOC"
---
# Astrophysics Laboratory 2 — Map of Content

> **Master Year 2 Semester 1** | **Università degli Studi di Padova**
> **Lecturers**: Prof. Luca Malavolta (36h) & Prof. Giampaolo Piotto (12h)
> **Primary Laboratories**: LabP104 (Edificio Ricci Curbastro) and Aula A (Ex Rizzato)
> **Target Project**: End-to-end exoplanet transit characterization combining TASTE ground-based differential photometry and space-based TESS observations
> **Exam Status**: **Mandatory Winter Session Examination (Jan / Feb 2027)**: Final scientific paper (A&A template) + Oral Defense of data reduction choices, error propagation, and Bayesian MCMC modeling.

---

The core thread of this laboratory course is empirical measurement and inference:
$$\text{exoplanetary transit} \to \text{photons} \to \text{atmosphere / optics} \to \text{CCD detector} \to \text{ADU counts} \to \text{calibration pipeline} \to \text{differential light curve} \to \text{Bayesian MCMC inference} \to \text{planetary parameters}$$

All lecture notes, observational concepts, data reduction scripts, and theoretical derivations are indexed below.

---

## Block 1 — Research Protocol, Unix Workflow, and Scientific Standards

Foundations of scientific data handling, environment configuration, and A&A publication guidelines.

- [[Lesson 00 - Course Overview and Research Methodology]] — course architecture, timeline, oral examination format, and reproducible research standards
- [[Lesson 01 - Linux Environment and Scientific Python Setup]] — Unix terminal, bash scripting, conda environment configuration, and Python scientific stack
- [[Astrophysics Lab 2 Report Specifications and AA Format]] — Astronomy & Astrophysics manuscript guidelines, error budget documentation, code citation, and presentation standards
- [[Laboratory Report Guidelines and Scientific Writing]] — structuring the final report, required figures, parameter tables, and discussion of systematics

---

## Block 2 — Detector Physics and CCD Operation

Physical processes governing charge generation, transfer, readout, and noise in astronomical detectors.

- [[Piotto 03 - Semiconductor Physics and CCD Detector Fundamentals]] — silicon band structure, photoelectric absorption, MOS capacitors, 3-phase charge transfer, and CTE
- [[Piotto 04 - CCD Photometry and Noise Characterization]] — quantum efficiency, cooling mechanisms, ADC gain conversion, and the complete CCD equation
- [[CCD Readout Noise and Output Amplifier]] — output FET electronics, correlated double sampling, reset noise, and $1/f$ noise
- [[CCD Dark Current and Thermal Generation]] — thermal charge generation, Arrhenius relation, and cryo/Peltier cooling
- [[Bias Frame and Electronic Offset]] — zero-exposure signal, baseline ADC offset, and fixed-pattern electronic structure
- [[Flat Field Frame and Pixel Response Non-Uniformity]] — pixel sensitivity variations, dust rings, and optical vignetting
- [[Janesick Photon Transfer Method for Gain and Readout Noise]] — empirical gain ($e^-/\text{ADU}$) and read noise determination via variance-mean regression
- [[Full Well Capacity and Charge Saturation]] — potential well depth, blooming, and detector non-linearity regimes
- [[Quantum Efficiency in Astronomical Detectors]] — front vs back-illuminated chips, anti-reflective coatings, and NIR fringing

---

## Block 3 — Ground-Based CCD Reduction and Calibration Pipeline

Deterministic calibration steps converting raw ADU frames into calibrated photon counts with propagated error arrays.

- [[Malavolta 01 - Bias Analysis and Detector Calibration]] — FITS header structure, bias frame stacking, read noise evaluation, and spatial gradient analysis
- [[Malavolta 02 - Flat Field Analysis and Sensitivity Mapping]] — master flat construction, normalization algorithms, shutter shading, and dome vs twilight flats
- [[Malavolta 03 - Science Frame Correction and Error Propagation]] — algebraic reduction equation, pixel-by-pixel variance tracking, bad pixel masks, and cosmic ray rejection
- [[Science Frame Calibration and Variance Propagation]] — full error propagation formula tracking photon noise, RON, and master frame uncertainties
- [[Cosmic Ray Rejection via Laplacian Edge Detection]] — L.A. Cosmic and Astro-SCRAPPY algorithm for discriminating point sources from high-energy hits
- [[Barycentric Julian Date and Time System Conversions]] — UTC to $BJD_{\text{TDB}}$ time conversions via `jplephem` to eliminate Earth orbit light travel delay
- [[Laboratory Exercise - Bias Frame Calibration and RON Measurement]] — processing the 30-frame bias test dataset to extract master bias and noise statistics
- [[Laboratory Exercise - Flat Field Processing and PRNU Mapping]] — building master flat, evaluating vignetting profiles, and mapping pixel non-uniformity
- [[Laboratory Exercise - Science Frame Reduction and Error Tracking]] — executing the complete calibration sequence on raw scientific frames

---

## Block 4 — Aperture, PSF, and Differential Photometry Pipelines

Extracting stellar fluxes from calibrated science frames and correcting for atmospheric transmission variations.

- [[Malavolta 04 - Stellar Centroiding and Coordinate Tracking]] — star identification via SIMBAD, 1D/2D Gaussian fitting, center-of-mass moments, and drift tracking
- [[Malavolta 05 - Local Background Subtraction and Aperture Photometry]] — circular apertures, sky annuli, sigma-clipped background estimation, and growth curves
- [[Malavolta 06 - Python Class Design for Photometry Pipelines]] — object-oriented software engineering for modular, maintainable data reduction pipelines
- [[Malavolta 07 - Differential Photometry and Atmospheric Detrending]] — atmospheric extinction, comparison star selection, artificial ensemble stars, and light curves
- [[Star Centroiding via Marginal Profiles and 2D Gaussian Fitting]] — mathematical centroiding algorithms and sub-pixel coordinate tracking
- [[Aperture Photometry and Optimal Aperture Selection]] — aperture summation, local sky background subtraction, and SNR optimization
- [[Curve of Growth in Stellar Photometry]] — flux vs aperture radius curves to determine total stellar flux and aperture corrections
- [[Differential Photometry and Comparison Star Selection]] — ensemble weighting algorithms to eliminate atmospheric transparency variations
- [[Airmass and Atmospheric Extinction Correction]] — Bouguer law, plane-parallel atmospheric extinction, and second-order color terms
- [[Python Class Architecture for Astronomical Pipelines]] — design patterns for encapsulating data arrays, error maps, and photometric methods
- [[Laboratory Exercise - Star Centroiding and Aperture Photometry Pipeline]] — measuring stellar centroids and extracting aperture fluxes across observing runs
- [[Laboratory Exercise - Ground-Based Differential Photometry with TASTE]] — constructing differential transit light curves for TASTE observational datasets

---

## Block 5 — Space-Based Photometry and Time-Series Detrending

High-precision space photometry from TESS, target pixel files, and systematic detrending algorithms.

- [[Malavolta 08 - TESS Mission Architecture and Target Pixel Files]] — TESS orbital characteristics, cameras, sectors, MAST queries, and Target Pixel Files (TPF)
- [[Malavolta 09 - TESS Light Curve Processing and Systematic Correction]] — SAP vs PDCSAP flux, Cotrending Basis Vectors (CBVs), and quality flag filtering
- [[Malavolta 10 - Light Curve Filtering and Detrending Techniques]] — stellar activity, cadence-based vs time-window filters, biweight, and transit masking
- [[TESS Target Pixel Files and Custom Aperture Masks]] — pixel data structures, World Coordinate System (WCS) overlay, and custom mask definitions
- [[TESS SAP vs PDCSAP Flux and Cotrending Basis Vectors]] — simple aperture extraction vs systematic trend removal using basis vectors
- [[Running Median and Biweight Light Curve Filters]] — robust location estimators for time series flattening without edge degradation
- [[Savitzky-Golay Filtering for Stellar Time Series]] — local polynomial least-squares filtering and optimal window selection
- [[Gaussian Process Regression in Light Curve Detrending]] — non-parametric covariance modeling (Matérn, Quasi-Periodic, SHO kernels) for stellar activity
- [[Laboratory Exercise - TESS Target Pixel Extraction and Filtering]] — processing TESS TPFs, extracting light curves, and flattening out-of-transit trends

---

## Block 6 — Exoplanet Demographics, Transit Geometry, and Physical Modeling

Physical mechanisms of planetary transits, limb darkening, and analytical light curve computation.

- [[Piotto 01 - Exoplanet Detection and Demographics]] — detection methodologies, transit geometry, radial velocity complementarity, and planetary populations
- [[Piotto 02 - Atmospheric Characterization and Transit Spectroscopy]] — transmission spectroscopy, occultations, phase curves, and Rossiter-McLaughlin effect
- [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]] — transit parameters ($R_p/R_\star, a/R_\star, i, T_0, P$), Mandel & Agol analytical models, and exposure smearing
- [[Exoplanet Transit Geometry and Impact Parameter]] — geometric derivation of impact parameter $b$, inclination $i$, and orbit orientation
- [[Transit Depth and Ingress-Egress Timescales]] — total transit duration $T_{14}$, ingress/egress duration $T_{12}$, and relation to physical parameters
- [[Stellar Limb Darkening Laws]] — linear, quadratic, square-root, and 4-parameter non-linear stellar intensity profiles
- [[Exposure Time Smearing in Transit Photometry]] — finite integration time effects, profile deformation, and Kipping numerical supersampling
- [[Transit Modeling with batman]] — Python implementation of the Mandel & Agol model, parameter structures, and fast light curve generation
- [[Limb Darkening Computation with ldtk]] — synthetic limb darkening calculation via PHOENIX stellar atmosphere grids and filter transmission profiles

---

## Block 7 — Bayesian Parameter Estimation, Likelihood Functions, and MCMC

Statistical parameter inference, Markov Chain Monte Carlo sampling, and convergence diagnostics.

- [[Malavolta 12 - Transit Parameter Estimation and Likelihood Optimization]] — joint likelihood formulation, initial guess optimization, and error scaling
- [[Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling]] — Bayes theorem, prior distributions, emcee affine-invariant sampling, and corner plots
- [[Bayesian Inference and Bayes Theorem in Astronomy]] — posterior probability distribution, prior distributions, likelihood function, and Bayesian evidence
- [[Prior Probability Distributions in Exoplanet Fitting]] — uninformative uniform, log-uniform (Jeffreys), and Gaussian informative priors
- [[Likelihood Function for Photometric Time Series]] — Gaussian likelihood, $\chi^2$ equivalence, and photometric jitter variance terms
- [[Metropolis-Hastings Algorithm]] — proposal distributions, detailed balance, acceptance probability, and Markov chain progression
- [[Goodman-Weare Affine Invariant Ensemble Sampler]] — ensemble walker dynamics, stretch moves, affine invariance, and computational scaling
- [[Affine-Invariant Ensemble MCMC with emcee]] — setting up walkers, log-probability definitions, and sampling execution
- [[MCMC Convergence Diagnostics and Autocorrelation Analysis]] — integrated autocorrelation time $\tau$, burn-in rejection, and Gelman-Rubin $\hat{R}$
- [[Marginalized Posterior Distributions and Corner Plots]] — 1D/2D posterior projections, credible intervals ($16\%, 50\%, 84\%$), and parameter degeneracies
- [[Laboratory Exercise - Joint Transit Modeling and MCMC Analysis]] — simultaneous Bayesian fitting of TASTE ground-based and TESS space-based light curves

---

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.EP / astro-ph.IM benchmark papers underlying the transit modeling, detrending, and limb-darkening techniques above.

- [[Mandel_Agol_2002_Analytic_Transit_Light_Curves|Mandel & Agol (2002) — Analytic Light Curves for Planetary Transit Searches]] — elliptic-integral transit light curve formalism
- [[Foreman-Mackey_2017_Celerite_Scalable_GP|Foreman-Mackey et al. (2017) — Fast and Scalable GP Modeling with celerite]] — $\mathcal{O}(N)$ Gaussian Process regression for light-curve detrending
- [[Kipping_2013_Efficient_Limb_Darkening_Sampling|Kipping (2013) — Efficient, Uninformative Sampling of Limb Darkening Coefficients]] — $(q_1,q_2)$ reparametrization for MCMC limb-darkening priors

---

## Cross-Course Connections

- [[Exoplanetary_Astrophysics_MOC]] — planetary formation, migration, interior structure, and atmospheric dynamics
- [[Observational_Astrophysics_MOC]] — ground-based telescope instrumentation, atmospheric seeing, and optical systems
- [[Lab_High-Energy_MOC]] — X-ray detectors, photon counting, Poisson statistics, and forward folding
- [[Astronomical_Spectroscopy_MOC]] — stellar atmospheric parameters ($T_{\text{eff}}, \log g, [\text{Fe}/\text{H}]$) used to constrain limb darkening
- [[Mathematical_Numerical_Methods_MOC]] — $\chi^2$ minimization, Levenberg-Marquardt, spline interpolation, and Monte Carlo integration


---

## Master Figure Index (Astrophysics Laboratory 2)

| Figure ID | Visual Asset Name | Slide / Concept Title | Primary Zettel / Lecture Note Link | Key Physical / Instrumental Principle |
| :--- | :--- | :--- | :--- | :--- |
| **LAB2-01** | `lab2_lightcurve_p01.png` | TESS Target Pixel File & Aperture Mask | [[Malavolta 09 - TESS Light Curve Processing and Systematic Correction]] | Pixel flux extraction, background subtraction, and crowding metric in 21" pixels |
| **LAB2-02** | `lab2_lightcurve_p02.png` | Raw SAP vs Detrended PDC-SAP Flux | [[Malavolta 09 - TESS Light Curve Processing and Systematic Correction]] | Spacecraft systematic correction, momentum dumps, and thermal flare mitigation |
| **LAB2-03** | `lab2_filter_p01.png` | Spline Filtering & Stellar Detrending | [[Malavolta 10 - Light Curve Filtering and Detrending Techniques]] | Low-frequency stellar variability removal via sigma-clipped iterative splines |
| **LAB2-04** | `lab2_filter_p03.png` | Gaussian Process Regression Filtering | [[Malavolta 10 - Light Curve Filtering and Detrending Techniques]] | Modeling correlated red noise using Matérn-3/2 and Quasi-Periodic kernels |
| **LAB2-05** | `lab2_transit_model_p01.png` | Transit Geometry & Contact Points | [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]] | Orbital inclination $i$, impact parameter $b$, and contact durations $T_{14}, T_{23}$ |
| **LAB2-06** | `lab2_transit_model_p02.png` | Quadratic Stellar Limb Darkening | [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]] | Center-to-limb intensity profile $I(\mu)/I(0) = 1 - u_1(1-\mu) - u_2(1-\mu)^2$ |
| **LAB2-07** | `lab2_transit_model_p03.png` | Mandel & Agol Analytical Evaluation | [[Malavolta 11 - Transit Geometry and Analytical Light Curve Modeling]] | Exact flux occlusion via complete elliptic integrals of 1st, 2nd, and 3rd kind |
| **LAB2-08** | `lab2_transit_fit_p01.png` | Transit Optimization Landscape | [[Malavolta 12 - Transit Parameter Estimation and Likelihood Optimization]] | Least-squares / Levenberg-Marquardt convergence on $\chi^2(R_p/R_*, a/R_*)$ |
| **LAB2-09** | `lab2_transit_fit_p02.png` | Photometric Residuals & Red Noise | [[Malavolta 12 - Transit Parameter Estimation and Likelihood Optimization]] | Autocorrelation function and Durbin-Watson statistic verifying white noise |
| **LAB2-10** | `lab2_mcmc_p02.png` | MCMC Walker Trace Evolution | [[Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling]] | Affine-invariant ensemble sampler chain mixing and burn-in diagnosis |
| **LAB2-11** | `lab2_mcmc_p05.png` | Marginalized Posterior Corner Plot | [[Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling]] | 1D/2D parameter covariances; characteristic degeneracy between $b$ and $a/R_*$ |
| **LAB2-12** | `lab2_mcmc_p08.png` | Posterior Predictive Transit Fit | [[Malavolta 13 - Bayesian Statistics and Markov Chain Monte Carlo Sampling]] | 68% and 95% model confidence envelopes overlaid on ground-based TASTE data |

---

## Professors Luca Malavolta & Giampaolo Piotto Oral Exam Defense Preparation Matrix

| Exam Question | Governing Equation(s) | Blackboard Derivation Flow & Strategy | Professor Trap Points & Pitfalls |
| :--- | :--- | :--- | :--- |
| **1. Contact Times, Transit Geometry, and Stellar Density Inversion** | $b = \frac{a \cos i}{R_*} \frac{1-e^2}{1+e\sin\omega}$<br>$\rho_* = \frac{3\pi}{G P^2} \left(\frac{a}{R_*}\right)^3$ | 1. Draw the projected star-planet disk geometry at 1st ($t_1$), 2nd ($t_2$), 3rd ($t_3$), and 4th ($t_4$) contact.<br>2. Derive total duration $T_{14} = \frac{P}{\pi} \arcsin\left[\frac{R_*}{a} \frac{\sqrt{(1+k)^2 - b^2}}{\sin i}\right]$ where $k = R_p/R_*$.<br>3. Derive flat bottom duration $T_{23} = \frac{P}{\pi} \arcsin\left[\frac{R_*}{a} \frac{\sqrt{(1-k)^2 - b^2}}{\sin i}\right]$.<br>4. Substitute Kepler's third law $a^3 = \frac{G M_* P^2}{4\pi^2}$ into $(a/R_*)^3$ to prove that transit light curves directly measure mean stellar density $\rho_*$ independently of stellar models. | **Trap**: Assuming circular orbits without caveat ($e \ne 0$ dramatically alters contact durations); claiming transit depth is exactly $(R_p/R_*)^2$ without correcting for limb darkening. |
| **2. Mandel & Agol Analytic Formulation and Elliptic Integrals** | $F(z, p) = 1 - \frac{1}{4\Omega} \int \int I(r) dA$<br>$I(\mu) = 1 - u_1(1-\mu) - u_2(1-\mu)^2$ | 1. Define projected normalized separation $z = d/R_*$ and radius ratio $p = R_p/R_*$.<br>2. Divide parameter space into 3 regimes: out of transit ($z > 1+p$), partial occultation ($|1-p| < z \le 1+p$), and complete immersion ($z \le 1-p$).<br>3. For uniform disk ($u_1 = u_2 = 0$), derive area of intersection using geometric circular segment formulas.<br>4. Introduce quadratic limb darkening and show how green's theorem converts surface integral into line integrals evaluated with complete elliptic integrals $\mathcal{K}(k), \mathcal{E}(k), \Pi(n, k)$.<br>5. Explain exposure time smearing and the necessity of supersampling numerical integration. | **Trap**: Failing to account for exposure time smearing in long-cadence observations (e.g. 30-minute Kepler / TESS FFIs), which artificially suppresses transit depth and smears ingress/egress slopes. |
| **3. Correlated Red Noise and Gaussian Process Modeling** | $K_{ij} = k(t_i, t_j) + \sigma_i^2 \delta_{ij}$<br>$\ln \mathcal{L} = -\frac{1}{2}\mathbf{r}^T K^{-1} \mathbf{r} - \frac{1}{2}\ln\|K\| - \frac{N}{2}\ln(2\pi)$ | 1. Define white noise ($\sigma^2 \delta_{ij}$) vs correlated red noise (time-dependent covariance matrix $K_{ij}$).<br>2. Formulate the Matérn-3/2 kernel $k(\tau) = \sigma^2 (1 + \frac{\sqrt{3}\tau}{\rho})\exp(-\frac{\sqrt{3}\tau}{\rho})$ and Quasi-Periodic kernel.<br>3. Write the GP marginal log-likelihood and explain the inversion cost $\mathcal{O}(N^3)$ and $\mathcal{O}(N)$ acceleration via `celerite`.<br>4. Demonstrate how GP hyperparameters $(\sigma, \rho, P_{\mathrm{rot}})$ are simultaneously sampled with physical transit parameters to avoid absorbing the transit signal. | **Trap**: Allowing GP flexibility to overfit and swallow the transit signal; selecting inappropriate prior bounds on the GP correlation length $\rho$. |
| **4. Affine-Invariant MCMC Sampling and Parameter Degeneracies** | $\theta_j(t+1) = \theta_k(t) + Z [\theta_j(t) - \theta_k(t)]$<br>$g(z) \propto \frac{1}{\sqrt{z}}, z \in [1/a, a]$ | 1. Explain why standard Metropolis-Hastings fails in high-dimensional anisotropic parameter spaces.<br>2. Derive the affine-invariance property: invariance under linear transformations $\theta' = A \theta$, enabling efficient sampling of degenerate parameter valleys.<br>3. Detail the ensemble stretch move implemented in `emcee`.<br>4. Discuss the physical degeneracy between impact parameter $b$ and scaled semi-major axis $a/R_*$ (or inclination $i$).<br>5. State convergence criteria: integrated autocorrelation time $\tau_f$ and requirement $N_{\mathrm{steps}} > 50 \tau_f$. | **Trap**: Stopping MCMC before chains have mixed ($N_{\mathrm{steps}} < 10 \tau$); failing to discard the burn-in phase; treating correlated posterior samples as independent points. |

---

## Essential Formulas Quick Sheet (Astrophysics Lab 2)

- **Impact Parameter**: $b = \frac{a \cos i}{R_*} \left(\frac{1-e^2}{1+e\sin\omega}\right)$
- **Transit Depth (approximate)**: $\Delta F \approx \left(\frac{R_p}{R_*}\right)^2$
- **Total Duration**: $T_{14} \approx \frac{P}{\pi} \frac{R_*}{a} \sqrt{(1 + R_p/R_*)^2 - b^2} \frac{1}{\sin i}$
- **Stellar Density**: $\rho_* = \frac{3\pi}{G P^2} \left(\frac{a}{R_*}\right)^3$
- **Quadratic Limb Darkening**: $\frac{I(\mu)}{I(1)} = 1 - u_1(1-\mu) - u_2(1-\mu)^2$ with $\mu = \cos\theta$
- **Autocorrelation Time Convergence**: $N_{\mathrm{samples}} \ge 50 \tau_{\mathrm{int}}$
