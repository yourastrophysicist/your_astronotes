---
layout: "default"
title: "00_Course_Overview_and_Computational_Laboratories"
---
# Lesson 00 – Course Overview and Computational Laboratories

*Computational Astrophysics, Prof. Tiziano Zingales*  
*Index: [[Computational_Astrophysics_MOC]]*

---

## The Role of Simulations in Modern Astrophysics

Astrophysics is fundamentally an observational rather than an experimental science. Unlike laboratory physics, where experimental conditions can be precisely controlled, altered, and repeated, astrophysics deals with a single observable universe viewed from a single vantage point. Observations are inherently:
1. **Time-limited**: Dynamical timescales of astrophysical systems—such as stellar evolution ($10^6 - 10^{10}\text{ yr}$), galaxy collisions ($10^8 - 10^9\text{ yr}$), or cosmological structure formation ($10^{10}\text{ yr}$)—far exceed human observational baselines.
2. **Biased and flux-limited**: Observational instruments impose strict selection functions, Malmquist bias, atmospheric transmission windows, and detector sensitivity cutoffs.
3. **Projected**: Three-dimensional structures in space are observed projected onto the two-dimensional celestial sphere, often integrated along the line of sight.

Because of these boundaries, **numerical simulations serve as our computational laboratories**. 

```
Physical Theories & Conservation Laws (Hydrodynamics, Gravity, Radiative Transfer)
                                ↓
                 Initial Conditions & Boundary States
                                ↓
               Numerical Discretization & Algorithms
                                ↓
       Synthetic Universe / Forward Model (Simulated Data)
                                ↕
     Confrontation with Observational Datasets (JWST, HST, Kepler, TESS)
```

Numerical simulations bridge the interpretive gap between raw telescope data and fundamental theory by:
- **Testing theoretical models**: Providing numerical solutions to coupled, non-linear partial differential equations where closed-form analytical solutions do not exist.
- **Synthesizing mock observations**: Rendering synthetic images, light curves, and spectra that undergo identical instrumental filtering and noise models as real data, allowing unbiased comparison (e.g., matching IllustrisTNG or FIRE cosmological snapshots to Subaru HSC-SSP or HST galaxy surveys).
- **Probing extreme physical regimes**: Simulating conditions impossible to recreate on Earth, including relativistic core-collapse supernovae, neutron star mergers, and exoplanetary atmospheric chemistry under extreme stellar irradiation.

---

## Course Structure and Syllabus Pillars

The course is divided into three core pedagogical phases, balancing theoretical foundations with software engineering and high-performance computing:

```
[Part 1: AI & Data-Driven Exoplanetary Detection]
  • Exoplanetary demographics, orbital mechanics, and transit geometry
  • Machine learning foundations (Linear basis models, regularization)
  • Deep learning architectures (MLPs, CNNs, optimization dynamics)
  • Automated transit detection from space telescope light curves (Kepler/TESS)
                            ↓
[Part 2: Atmospheric Modeling & Retrieval Frameworks]
  • Atmospheric physics and radiative transfer equation (RTE)
  • Line absorption profiles (Lorentz, Doppler, Voigt) and continuum opacities
  • Forward modeling of planetary atmospheres with TauREx 3
  • Bayesian inverse modeling, MCMC, and Nested Sampling (evidence computation)
                            ↓
[Part 3: High-Performance Computing & Final Science Project]
  • Parallel architectures, Amdahl's Law, and distributed memory systems
  • Message Passing Interface (MPI) implementation with mpi4py
  • CloudVeneto OpenStack HPC infrastructure deployment
  • Final group research project execution and scientific reporting
```

### Logistics and Instruction Team
- **Instructor**: Prof. Tiziano Zingales (`tiziano.zingales@unipd.it`, Department of Physics and Astronomy, Room # 01-016)
- **Teaching Assistants**: Bartolomeo Bottazzi Baldi (`bartolomeo.bottazzibaldi@studenti.unipd.it`), Riccardo Simonetto (`riccardo.simonetto@inaf.it`)
- **Theory Lectures**: Tuesdays 12:30 – 14:15 (Aula P1C, Edificio Ricci Curbastro)
- **Computational Practice (Hands-on Labs)**: Fridays 09:00 – 10:30 (LabP104, Edificio Ricci Curbastro)

---

## Scientific Software Development Workflow

In professional computational astrophysics, practitioners fall along a spectrum:
- **Code Developers**: Construct numerical engines, design core solvers, optimize low-level performance, and maintain software releases.
- **Advanced Users**: Extend existing codes with custom physical modules, write unit tests, debug execution bottlenecks, and adapt software to novel problems.
- **Standard Users**: Configure parameters, execute production runs, and interpret physical outputs.

A central objective of this course is transitioning students from passive code runners to active scientific software developers. The computational hands-on sessions establish a production-grade development workflow:

1. **Self-Consistent Runtime (Docker)**: Every participant develops inside an identical containerized Linux environment containing all compiled libraries, compilers, MPI stacks, and Python dependencies, eliminating environment mismatch between host OS platforms.
2. **Distributed Version Control (Git & GitLab)**: Collaborative code development managed through feature branches, commits, merge requests, code reviews, and remote repositories.
3. **Modular Python Architecture**: Rather than writing disjointed, monolithic scripts, all algorithms are structured into an installable, object-oriented Python package following PEP standards (`pyproject.toml` / `setup.py`), complete with tests and documentation.

### Why Python in Computational Astrophysics?
While extreme-scale hydrodynamic and N-body solvers (e.g., GADGET, FLASH, PLUTO, RAMSES) are written in C, C++, or Fortran to maximize bare-metal performance, Python has become the standard interface for scientific analysis, forward modeling, and statistical retrieval pipelines because:
- **Rapid prototyping cycle**: High-level dynamic syntax allows rapid implementation of physical equations without recompilation overhead.
- **C/C++ and Fortran bridging**: Heavy numerical loops are offloaded to compiled backends (`numpy`, `scipy`, `cython`, C-extensions) while preserving high-level orchestration in Python.
- **Ecosystem maturity**: Seamless integration with specialized libraries:
  - `astropy`: Astronomical coordinate frames, units, and FITS handling
  - `batman`: Analytical Mandel & Agol transit light curve computation
  - `ldtk`: Stellar limb darkening profiles
  - `taurex`: Exoplanet atmospheric radiative transfer and forward modeling
  - `emcee`, `dynesty`, `pymultinest`: Bayesian sampling and evidence evaluation
  - `mpi4py`: OpenMPI bindings for distributed memory cluster execution

---

## Group Development and Examination Structure

Students organize into working groups of 3–4 members. The collaborative group develops a modular Python library across two progressive milestones:
- **Development Module 1 (Mid/Late November)**: Machine learning and regression algorithms applied to light curves and transit detection.
- **Development Module 2 (Mid/Late December)**: Atmospheric modeling, radiative transfer calculation, and retrieval analysis interfacing with TauREx.

### Examination and Grading Scheme
The final exam grade is evaluated on a **35-point scale** (scores $> 30$ receive *30 e lode*):

$$\text{Final Grade} = \text{Score}_A + \text{Score}_B + \text{Score}_C$$

| Component | Description | Scoring Criteria |
| :--- | :--- | :--- |
| **A. Hands-on Module Exercises** | Mandatory submission of the developed Python package repository and laboratory assignments. | • **5 – 7 points**: Submitted within semester deadlines.<br>• **1 – 3 points**: Submitted late before the exam date. |
| **B. Scientific Project Report** | A concise scientific paper/report ($\le 10$ pages) detailing the methodology, numerical results, and physical interpretation of the final research project. Sent with repository link at least 3 days prior to the oral exam. | • **1 – 3 points** |
| **C. Final Oral Examination** | A 10-minute presentation of the final astrophysical project, followed by questions on theoretical concepts, code architecture, algorithmic trade-offs, and exercise implementations. | • **1 – 25 points** (substandard knowledge can incur negative scoring down to $-25$) |

---

## Related Notes
- [[Computational_Astrophysics_MOC]]
- [[01_Linux_Containers_and_Docker_Architecture]]
- [[02_Version_Control_with_Git_and_GitLab]]
- [[03_Modular_Python_Software_Architecture_and_Packaging]]



## Linked References

- [[Computational_Astrophysics_MOC]]


