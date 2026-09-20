---
layout: "default"
title: "Computational_Astrophysics_MOC"
---
# Computational Astrophysics — Map of Content

> **Master Year 2 Semester 1** | **A.Y. 2026/2027**  
> **Lecturer**: **Prof. Tiziano Zingales** (`tiziano.zingales@unipd.it`, Room # 01-016)  
> **Teaching Assistants**: Bartolomeo Bottazzi Baldi, Riccardo Simonetto  
> **Schedule**:  
> • Tuesday 12:30 – 14:15 (**Aula P1C [Edificio Ricci Curbastro]**) — Lezione / Theory  
> • Friday 09:00 – 10:30 (**LabP104 [Edificio Ricci Curbastro]**) — Laboratorio / Computational Practice  
> **Timetable Dashboard**: Master Year 2 Semester 1 Timetable | Exams autumn 2026 sprint

---

## Course Overview

Computational Astrophysics introduces the numerical techniques, statistical inverse methods, and high-performance computing (HPC) workflows required to model and interpret astrophysical systems—with a focused application on exoplanetary detection and atmospheric characterization.

The curriculum balances algorithmic theory with collaborative scientific software engineering:
1. **Scientific Software Infrastructure**: Building containerized, version-controlled Python packages (`daneel`) following PEP standards.
2. **Exoplanetary Dynamics & Transits**: Keplerian orbital mechanics, transit geometry, Mandel & Agol analytical formulations, and stellar limb darkening.
3. **Machine Learning & Deep Learning**: Linear basis function models, regularized regression, Fisher's discriminant, Random Forests, Multi-Layer Perceptrons, backpropagation, CNNs, and Generative Adversarial Networks (GANs).
4. **Atmospheric Radiative Transfer**: Equations of radiative transfer, line broadening profiles (Lorentz, Doppler, Voigt), and plane-parallel atmospheres.
5. **Atmospheric Retrieval Frameworks**: Solving the non-linear inverse problem in spectroscopy with TauREx 3.
6. **Bayesian Statistics & Evidence Computation**: Conjugate models, MCMC sampling, and John Skilling's Nested Sampling (MultiNest, PolyChord).
7. **High-Performance Distributed Computing**: Flynn's taxonomy, Amdahl's Law, OpenMPI / `mpi4py` distributed memory programming, and CloudVeneto OpenStack deployment.

---

## Complete Lecture & Laboratory Notes

### Pillar I: Scientific Software Engineering & Environment
- [[00_Course_Overview_and_Computational_Laboratories]] — Simulations as astrophysical laboratories, course roadmap, and grading policy.
- [[01_Linux_Containers_and_Docker_Architecture]] — Virtualization vs. containerization, Docker daemon, multi-layer Dockerfiles, bind mounts, and headless Jupyter.
- [[02_Version_Control_with_Git_and_GitLab]] — Distributed version control DAG, staging area, branching models, 3-way merges vs. rebasing, and GitLab workflows.
- [[03_Modular_Python_Software_Architecture_and_Packaging]] — Module namespaces, `pyproject.toml`, editable installs (`pip -e .`), Sphinx documentation, and testing.

### Pillar II: Exoplanet Mechanics & Transit Photometry
- [[04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits]] — Exoplanet detection methods, 3D Keplerian orbits, RV semi-amplitude, Mandel & Agol (2002) transit geometry, and Seager & Mallén-Ornelas stellar density inversion.

### Pillar III: Machine Learning & Deep Learning Foundations
- [[05_Machine_Learning_Foundations_and_Regression_Models]] — Supervised learning, linear basis models (polynomial, Gaussian, sigmoidal), OLS normal equations, Ridge/Lasso regularization, SGD, and Random Forests.
- [[06_Deep_Learning_Architectures_and_Optimization]] — Perceptrons, Multi-Layer Perceptrons, activation functions, backpropagation derivation, CNN convolution/pooling layers, and Zingales & Waldmann (2018) GAN exoplanet spectral generators.

### Pillar IV: Atmospheric Physics, Inverse Modeling, & HPC
- [[07_Atmospheric_Radiative_Transfer_and_Line_Profiles]] — Specific intensity, blackbody laws, Rayleigh vs. Mie scattering, line broadening (Lorentz, Doppler, Voigt), Beer-Lambert extinction, and plane-parallel Schwarzschild RTE.
- [[08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx]] — Transmission and emission spectroscopy, slant optical depth, $T(P)$ profiles, and hands-on TauREx 3 configuration (`.par`).
- [[09_Bayesian_Inference_and_Parameter_Estimation]] — Frequentist vs. Bayesian paradigms, Bayes' theorem, Beta conjugate priors, posterior updating, and Bayes Factors for model comparison.
- [[10_Nested_Sampling_and_Evidence_Computation]] — The typical set problem, Skilling's 1D prior mass transformation, live points, prior shrinkage statistics, evidence accumulation, and MultiNest/PolyChord algorithms.
- [[11_Parallel_Computing_Architectures_and_HPC_Scaling]] — Serial vs. parallel computing, Flynn's taxonomy, Shared vs. Distributed memory, Amdahl's Law (strong scaling limit), and Gustafson's Law (weak scaling).
- [[12_MPI_Distributed_Memory_Programming_with_Python]] — SPMD paradigm, `mpi4py` buffers vs. pickled objects, point-to-point non-blocking communication (`Isend`/`Irecv`), collective reductions, and domain decomposition.
- [[13_CloudVeneto_HPC_Infrastructure_and_OpenStack_Deployment]] — CloudVeneto OpenStack architecture, SSH ProxyJump routing, local port forwarding, and remote VS Code development.

---

## Examination Structure & Grading (0 – 35 Scale)

$$\text{Final Grade} = \text{Score}_A + \text{Score}_B + \text{Score}_C$$

- **Part A: Laboratory Exercises (Mandatory)**: Development of group Python package (`daneel`) across two milestone deadlines:
  - *Module 1*: Machine learning tools for light curves and transit detection (Mid-November).
  - *Module 2*: Atmospheric modeling and TauREx integration (Mid-December).
  - *Scoring*: 5–7 points (on-time submission) / 1–3 points (late submission before exam).
- **Part B: Project Report**: A concise scientific paper ($\le 10$ pages) detailing research project results, submitted $\ge 3$ days prior to exam (1–3 points).
- **Part C: Final Oral Exam**: 10-minute scientific project presentation, followed by technical questions on algorithms, code architecture, and physical theory (1–25 points; negative scoring possible down to $-25$).
- *Honours*: Scores $> 30$ pass *con lode*.

---

## Conceptual Zettelkasten Index (`03_Zettel/Computational/`)

### Scientific Software Infrastructure
- [[Linux containers and Docker architecture in astrophysics]] — Virtualization vs containerization, namespaces, cgroups, and HPC Apptainer/Singularity.
- [[Distributed version control DAG and GitLab workflows]] — Git DAG object store (blobs, trees, commits), 3-way merges vs rebasing, and CI/CD pipelines.
- [[Modular Python packaging and scientific software architecture]] — PEP 517/621 `pyproject.toml`, editable installs (`pip -e .`), and object-oriented design.
- [[Python Class Architecture for Astronomical Pipelines]] — Clean inheritance, dataclasses, and vectorized pipeline modules.

### Machine Learning & Surrogate Emulators
- [[Supervised regression basis models and regularization]] — Linear basis expansion, OLS normal equations, Ridge L2 shrinkage, and Lasso L1 feature selection.
- [[Deep neural networks and backpropagation for astronomical spectra]] — Multi-layer perceptrons, backpropagation chain rule, CNN light curve vetting, and GAN spectral emulators.

### Atmospheric Physics & Inverse Modeling
- [[Atmospheric radiative transfer equation and Voigt profile]] — Specific intensity, plane-parallel Schwarzschild RTE, Doppler/Lorentz broadening, and Voigt convolution.
- [[Exoplanet atmospheric retrieval and TauREx framework]] — Non-linear inverse modeling, atmospheric parameterization, and Bayesian parameter sampling.
- [[Transit Modeling with batman]] — Mandel & Agol analytical transit light curve evaluation.
- [[Limb Darkening Computation with ldtk]] — Stellar atmosphere models and limb darkening coefficients.

### Bayesian Inference, Sampling & HPC
- [[Nested sampling algorithm and Bayesian evidence computation]] — Skilling 1D prior mass transformation, live points, prior shrinkage, MultiNest, and PolyChord.
- [[Affine-Invariant Ensemble MCMC with emcee]] — Goodman & Weare stretch-move ensemble sampling.
- [[MCMC Convergence Diagnostics and Autocorrelation Analysis]] — Gelman-Rubin $\hat{R}$, integrated autocorrelation time $\tau$, and burn-in trimming.
- [[Marginalized Posterior Distributions and Corner Plots]] — Multidimensional posterior visualization and credible contours.
- [[Parallel computing architectures and Amdahl scaling laws]] — Flynn taxonomy, shared vs distributed memory, Amdahl strong scaling, and Gustafson weak scaling.
- [[MPI distributed memory programming with mpi4py]] — SPMD execution model, non-blocking `Isend`/`Irecv`, collective operations, and buffer protocols.
- [[CloudVeneto HPC OpenStack infrastructure and remote clusters]] — OpenStack cloud architecture, SSH ProxyJump bastions, port forwarding, and remote VS Code.

### Related Master Courses
- [[Astro-Statistics_and_Cosmology_MOC]] — Bayesian foundations, Cox's theorem, Fisher matrices, and Markov Chain Monte Carlo.
- [[Astrophysics_Laboratory_2_MOC]] — CCD detector calibration, aperture photometry, detrending, and TESS time series analysis.
- [[Exoplanetary_Astrophysics_MOC]] — Exoplanet formation, migration, interior structures, and planetary atmospheres.
- [[Fluid_and_Plasma_Dynamics_MOC]] — Hydrodynamics, accretion disks, and astrophysical fluid instabilities.


---

## Literature & Primary Sources

Canonical and modern arXiv astro-ph.IM benchmark papers underlying the simulation-code architecture above.

- [[Springel_2005_GADGET-2_Cosmological_Simulation_Code|Springel (2005) — The Cosmological Simulation Code GADGET-2]] — Tree-PM gravity, SPH hydrodynamics
- [[Springel_2010_AREPO_Moving_Mesh_Code|Springel (2010) — AREPO Moving-Mesh Hydrodynamics]] — Voronoi moving mesh, Galilean invariance
- [[Pillepich_2018_IllustrisTNG_Simulations|Pillepich et al. (2018) — First Results from IllustrisTNG]] — kinetic-mode AGN feedback, stellar-to-halo-mass relation

---

## Master Figure Index (Computational Astrophysics)

| Figure ID | Visual Asset Name | Slide / Concept Title | Primary Zettel / Lecture Note Link | Key Numerical / Algorithmic Principle |
| :--- | :--- | :--- | :--- | :--- |
| **COMP-01** | `comp_exo_p05.png` | Kepler Solver & Anomaly Conversions | [[04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits]] | Newton-Raphson iteration solving transcendental equation $M = E - e \sin E$ |
| **COMP-02** | `comp_exo_p15.png` | Star-Planet Occultation Geometry | [[04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits]] | Projected center separation $z = d/R_*$ and circular disc overlap domains |
| **COMP-03** | `comp_exo_p25.png` | Analytical vs Numerical Transit Accuracy | [[04_Exoplanet_Demographics_Orbital_Mechanics_and_Transits]] | Mandel & Agol elliptic integral precision benchmarks against 2D ray tracing |
| **COMP-04** | `comp_ml_p05.png` | Ridge ($L_2$) and Lasso ($L_1$) Regularization | [[05_Machine_Learning_Foundations_and_Regression_Models]] | $L_1$ diamond contours driving feature sparsity vs $L_2$ circular weight shrinkage |
| **COMP-05** | `comp_ml_p20.png` | Bias-Variance Tradeoff & Cross-Validation | [[05_Machine_Learning_Foundations_and_Regression_Models]] | Optimal model complexity selection via K-fold cross-validation loss minima |
| **COMP-06** | `comp_ml_p35.png` | Deep Backpropagation & CNN Architectures | [[06_Deep_Learning_Architectures_and_Optimization]] | Reverse-mode automatic differentiation computing $\partial \mathcal{L} / \partial W_{ij}$ |
| **COMP-07** | `comp_radtrans_p05.png` | Plane-Parallel Radiative Transfer Solver | [[07_Atmospheric_Radiative_Transfer_and_Line_Profiles]] | Formal solution $I_\nu(\tau) = I_\nu(0)e^{-\tau} + \int S_\nu e^{-(\tau-t)} dt$ |
| **COMP-08** | `comp_radtrans_p18.png` | Voigt Spectral Line Absorption Profile | [[07_Atmospheric_Radiative_Transfer_and_Line_Profiles]] | Convolution of Gaussian thermal core with Lorentzian damping wings |
| **COMP-09** | `comp_radtrans_p30.png` | Multi-Layer Optical Depth Discretization | [[07_Atmospheric_Radiative_Transfer_and_Line_Profiles]] | Layer-by-layer cross-section summation across vertical atmospheric columns |
| **COMP-10** | `comp_retrieval_p05.png` | TauREx 3 Retrieval Architecture Flowchart | [[08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx]] | Forward model coupling $P-T$ profiles, molecular opacities, and MCMC sampler |
| **COMP-11** | `comp_retrieval_p15.png` | Synthetic Transmission Spectrum Modeling | [[08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx]] | Molecular spectral signatures ($\mathrm{H_2O, CH_4, CO, CO_2}$) modulated by scale height |
| **COMP-12** | `comp_retrieval_p25.png` | Atmospheric Retrieval Posterior Corner Plot | [[08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx]] | Parameter correlations between temperature $T_{\mathrm{iso}}$ and gas mixing ratios |
| **COMP-13** | `comp_nestedsamp_p10.png` | Skilling Prior Volume Mapping | [[10_Nested_Sampling_and_Evidence_Computation]] | Transforming multi-D parameter integral to 1D scalar volume $X \in [0, 1]$ |
| **COMP-14** | `comp_nestedsamp_p30.png` | Live Point Iso-Likelihood Contraction | [[10_Nested_Sampling_and_Evidence_Computation]] | Stochastic volume compression $\langle \ln X_i \rangle = -i / N_{\mathrm{live}}$ |
| **COMP-15** | `comp_nestedsamp_p50.png` | MultiNest Ellipsoidal Clustering | [[10_Nested_Sampling_and_Evidence_Computation]] | Multi-modal decomposition isolating disjoint posterior modes efficiently |
| **COMP-16** | `comp_mpi_p05.png` | Distributed MPI Communication Topologies | [[12_MPI_Distributed_Memory_Programming_with_Python]] | Point-to-point non-blocking vs collective `Bcast` and `Reduce` in `mpi4py` |
| **COMP-17** | `comp_mpi_p15.png` | Amdahl's Law and Parallel Scaling Limits | [[12_MPI_Distributed_Memory_Programming_with_Python]] | Strong scaling speedup asymptote $S(N) \to 1/(1-p)$ on CloudVeneto clusters |

---

## Professor Tiziano Zingales Oral Exam Defense Preparation Matrix

| Exam Question | Governing Equation(s) | Blackboard Derivation Flow & Strategy | Professor Trap Points & Pitfalls |
| :--- | :--- | :--- | :--- |
| **1. Nested Sampling Algorithm and Evidence Calculation** | $\mathcal{Z} = \int \mathcal{L}(\theta) \pi(\theta) d\theta = \int_0^1 \mathcal{L}(X) dX$<br>$X(\lambda) = \int_{\mathcal{L}(\theta) > \lambda} \pi(\theta) d\theta$ | 1. State the limitation of standard MCMC in calculating Bayesian evidence $\mathcal{Z}$ (requires normalized harmonic mean which has infinite variance).<br>2. Define Skilling's 1D prior volume mapping $X \in [0, 1]$.<br>3. Walk through algorithm: initialize $N_{\mathrm{live}}$ points from prior; find lowest likelihood $\mathcal{L}_{\mathrm{min}}$; shrink volume $\langle X_i \rangle = \exp(-i/N_{\mathrm{live}})$; replace with sample from prior having $\mathcal{L} > \mathcal{L}_{\mathrm{min}}$.<br>4. Compute evidence trapezoidal sum $\mathcal{Z} = \sum \mathcal{L}_i w_i$ with $w_i = \frac{1}{2}(X_{i-1} - X_{i+1})$.<br>5. Explain stopping criterion: $\mathcal{L}_{\mathrm{max}} X_i < \epsilon \mathcal{Z}$. | **Trap**: Confusing evidence calculation with posterior parameter sampling; failing to explain how MultiNest performs ellipsoidal clustering to sample multi-modal posteriors. |
| **2. Exoplanet Atmospheric Transmission Retrieval in TauREx 3** | $\Delta \delta(\lambda) \approx \frac{2 R_p n H}{R_*^2}$<br>$H = \frac{k_B T}{\mu g}$ | 1. Formulate the non-linear inverse problem: observed transmission spectrum $\mathbf{d} \to$ atmospheric forward model $\mathbf{F}(\boldsymbol{\theta})$.<br>2. Structure forward model: hydrostatic equilibrium $\frac{dP}{dz} = -\rho g \to$ vertical $P-T$ profile parametrization $\to$ chemical equilibrium / molecular opacities $\kappa_\nu(P, T) \to$ formal radiative transfer.<br>3. Derive transmission chord optical depth $\tau_\lambda(b) = 2 \int_0^\infty \kappa_\lambda(r) \frac{r dr}{\sqrt{r^2 - b^2}}$.<br>4. Explain scale height modulation: why transit depth increases logarithmically with absorption cross-section $\sigma(\lambda)$.<br>5. Connect forward model to nested sampler (MultiNest) to retrieve gas abundances. | **Trap**: Neglecting the strong degeneracy between reference radius $R_0$ and atmospheric base pressure $P_0$; omitting collision-induced absorption ($\mathrm{H_2}-\mathrm{H_2}, \mathrm{H_2}-\mathrm{He}$). |
| **3. Parallel Computing with `mpi4py` and Amdahl's Law** | $S(N) = \frac{1}{(1-p) + \frac{p}{N}}$<br>$\lim_{N \to \infty} S(N) = \frac{1}{1-p}$ | 1. Present Flynn's taxonomy (focusing on MIMD distributed memory architectures).<br>2. Derive Amdahl's law for strong scaling: show that if $5\%$ of code is strictly serial ($p = 0.95$), maximum possible speedup on an infinite number of processors is $S \le 20$.<br>3. Contrast with Gustafson's law for weak scaling ($S(N) = N - (1-p)(N-1)$).<br>4. Write on the blackboard the core `mpi4py` distributed pattern: `MPI.COMM_WORLD`, `comm.Get_rank()`, `comm.Get_size()`, `comm.Scatterv`, and `comm.Allreduce`.<br>5. Explain non-blocking communications (`MPI.Isend`, `MPI.Irecv`) to overlap computation and network communication. | **Trap**: Causing deadlocks by using blocking synchronous `Send`/`Recv` in ring configurations; ignoring communication latency overhead when decomposing small grid sizes. |
| **4. Regularized Machine Learning: Ridge ($L_2$) vs Lasso ($L_1$)** | $\mathcal{L}_{\mathrm{Ridge}} = \|\mathbf{y} - X\mathbf{w}\|^2 + \lambda \|\mathbf{w}\|_2^2$<br>$\mathcal{L}_{\mathrm{Lasso}} = \|\mathbf{y} - X\mathbf{w}\|^2 + \lambda \|\mathbf{w}\|_1$ | 1. Formulate linear regression and ordinary least-squares normal equations $\mathbf{w} = (X^T X)^{-1} X^T \mathbf{y}$.<br>2. Add $L_2$ regularization: solve analytically $\mathbf{w}_{\mathrm{Ridge}} = (X^T X + \lambda I)^{-1} X^T \mathbf{y}$, showing how $\lambda I$ guarantees matrix invertibility.<br>3. Add $L_1$ regularization: draw the geometric contours of the quadratic loss function intersecting the $L_1$ diamond ($|w_1| + |w_2| \le C$) vs $L_2$ sphere ($w_1^2 + w_2^2 \le C$).<br>4. Prove geometrically why $L_1$ corners force non-essential weights to exact zero, performing automatic sparse feature selection. | **Trap**: Claiming Lasso has an analytical closed-form solution (it requires coordinate descent or subgradient optimization); failing to standardize input features prior to regularized fitting. |

---

## Essential Formulas Quick Sheet (Computational Astrophysics)

- **Kepler's Equation**: $M = E - e \sin E$ solved via $E_{n+1} = E_n - \frac{E_n - e \sin E_n - M}{1 - e \cos E_n}$
- **True Anomaly**: $\tan\left(\frac{\nu}{2}\right) = \sqrt{\frac{1+e}{1-e}} \tan\left(\frac{E}{2}\right)$
- **Nested Sampling Evidence**: $\mathcal{Z} = \sum_{i=1}^M \mathcal{L}_i w_i$ with $w_i = \frac{1}{2}(X_{i-1} - X_{i+1})$
- **Prior Volume Contraction**: $X_i = e^{-i / N_{\mathrm{live}}}$
- **Amdahl's Law Speedup**: $S(N) = \frac{1}{(1-p) + p/N}$
- **Voigt Profile**: $H(a, u) = \frac{a}{\pi} \int_{-\infty}^\infty \frac{e^{-y^2}}{(u-y)^2 + a^2} dy$
