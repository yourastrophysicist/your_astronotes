---
layout: default
title: "README"
---

# Your AstroNotes

Welcome to the public archive for the Master of Science coursework in Astrophysics and Cosmology at the University of Padua (Università degli Studi di Padova), Italy, covering Semesters 1, 2, and 3.

This repository is an interconnected working second brain compiled and navigated by one voyager only as an open graduate curriculum reference. It contains lecture syntheses, mathematical derivations, observational instrumentation notes, laboratory reductions, and theoretical foundations.

The vault documents the solo journey of one voyager only through physics, mathematics, and cosmology, open for undergraduates, graduate students, and independent researchers who want to study astrophysical material from first principles.

* **Compiler**: One voyager only
* **Live Website**: [https://yourastrophysicist.github.io/your_astronotes/](https://yourastrophysicist.github.io/your_astronotes/)
* **Instagram**: [@your.astrophysicist](https://instagram.com/your.astrophysicist)
* **GitHub**: [yourastrophysicist/your_astronotes](https://github.com/yourastrophysicist/your_astronotes)

---

## Why This Vault Exists

Graduate physics is dense and non-linear. Lecture slides and textbook chapters often isolate topics that are deeply interconnected:
* Spherical trigonometry in positional astronomy directly informs pointing coordinates, atmospheric airmass calculations, and telescope pointing models.
* Radiative transfer through stellar atmospheres supplies boundary conditions for the differential equations of internal stellar structure.
* Differential geometry in general relativity directly derives the Friedmann acceleration equations that govern cosmological expansion.
* Fourier optics in classical physics explains how radio and optical interferometers synthesize high-resolution images from distributed aperture arrays.

Storing this material as an interconnected graph makes those cross-disciplinary connections explicit. You can trace any physical result back to its mathematical foundations and forward to its observational consequences.

---

## Academic Scope (Semesters 1 – 3)

The vault is structured around seventeen primary lecture courses and laboratory modules organized across Semesters 1 to 3 in 04_Atlas/: Each MOC serves as a comprehensive syllabus and conceptual spine for a semester course:

### Semester 1 (Foundations)
1. **[[Fundamentals_Astrophysics_Cosmology_MOC|Fundamentals of Astrophysics and Cosmology]]** (Prof. G. Rodighiero & Prof. M. Viel)
   Foundational coordinates, spherical trigonometry, radiative mechanisms, magnitudes, stellar evolution basics, galactic structure, Hubble law, and thermal cosmic history.

2. **[[Observational_Astrophysics_MOC|Observational Astrophysics]]** (Prof. E. Giro & Prof. G. Umbriaco)
   Atmospheric extinction and seeing, astronomical detectors (CCDs and infrared arrays), signal-to-noise calculations, photometric calibration, and error budgets.

3. **[[General_Relativity_MOC|General Relativity for Astrophysics]]** (Prof. S. Matarrese & Cambridge Baumann)
   Differential geometry, manifolds, Christoffel symbols, Riemann curvature, Einstein field equations, geodesic motion, Schwarzschild geometry, and gravitational waves.

4. **[[Mathematical_Numerical_Methods_MOC|Mathematical and Numerical Methods]]** (Prof. M. Mapelli)
   Numerical linear algebra, root-finding, numerical integration, ordinary differential equation solvers (Runge-Kutta, symplectic integrators), and Monte Carlo techniques.

5. **[[Lab_High-Energy_MOC|Astrophysics Laboratory 1 (High Energy)]]** (Prof. L. Burderi)
   Non-thermal radiation mechanisms (synchrotron, inverse Compton, relativistic bremsstrahlung), grazing-incidence X-ray optics, scintillation crystals, and solid-state detectors.

### Semester 2 (Stars, Galaxies, and Cosmology)
6. **[[Astrophysics_of_Galaxies_MOC|Astrophysics of Galaxies]]** (Prof. A. Moretti)
   Photometric morphology (Sérsic, de Vaucouleurs), stellar dynamics, Jeans equations, dark matter halo profiles, and galactic scaling relations.

7. **[[Stellar_Astrophysics_MOC|Stellar Astrophysics]]** (Prof. A. Milone)
   Stellar structure equations, polytropic models, equation of state, nuclear fusion cycles, radiative atmospheres, and stellar population synthesis.

8. **[[Astronomical_Interferometry_MOC|Astronomical Interferometry]]** (Prof. C. Pernechele)
   Spatial coherence theory, van Cittert-Zernike theorem, aperture synthesis, uv-plane coverage, visibility functions, dirty beams, CLEAN algorithms, ALMA, and the VLTI.

9. **[[Observational_Cosmology_MOC|Observational Cosmology]]** (Prof. M. Viel & Prof. P. Vielva)
   FLRW metric dynamics, cosmological parameters, cosmic distance ladder, big bang nucleosynthesis, recombination, and the cosmic microwave background.

10. **[[Astronomical_Spectroscopy_MOC|Astronomical Spectroscopy]]** (Prof. S. Ciroi)
    Atomic structure, selection rules, line broadening mechanisms, spectrograph optics, dispersion, resolution, and Doppler kinematic measurements.

### Semester 3 (Advanced Specializations)
11. **[[Exoplanetary_Astrophysics_MOC|Exoplanetary Astrophysics]]** (Prof. G. Piotto)
    Radial velocity detections, transit photometry, exoplanet atmospheres, habitability zones, planetary migration, and space missions (Kepler, TESS, PLATO).

12. **[[Astro-Statistics_and_Cosmology_MOC|Astro-Statistics and Cosmology]]** (Prof. M. Liguori)
    Bayesian inference, parameter estimation, Markov Chain Monte Carlo (MCMC), likelihood analysis, model selection, and cosmological parameter constraints.

13. **[[Astrophysics_Laboratory_2_MOC|Astrophysics Laboratory 2]]** (Prof. L. Malavolta & Prof. G. Piotto)
    High-resolution spectroscopic data reduction, radial velocity measurement pipelines, transit light curve modeling, and instrument characterization.

14. **[[Computational_Astrophysics_MOC|Computational Astrophysics]]** (Prof. T. Zingales)
    Numerical hydrodynamics, N-body particle algorithms, adaptive mesh refinement, parallel computing for astrophysical simulations, and radiative transfer.

15. **[[Cosmology_of_the_Early_Universe_MOC|Cosmology of the Early Universe]]** (Prof. N. Bartolo & Prof. S. Matarrese)
    Cosmic inflation models, generation of primordial perturbations, quantum fluctuations, reheating, baryogenesis, and non-Gaussianities.

16. **[[Fluid_and_Plasma_Dynamics_MOC|Fluid and Plasma Dynamics]]** (Prof. M. Giacomin)
    Navier-Stokes equations, ideal and resistive magnetohydrodynamics (MHD), plasma wave modes, shocks, magnetic reconnection, and turbulence.

17. **[[Astrophysics_of_the_Interstellar_Medium_MOC|Astrophysics of the Interstellar Medium]]** (Prof. G. Carraro)
    Interstellar dust, extinction curves, photoionization physics (H II regions), molecular clouds, cooling functions, and interstellar chemistry.

---

## Directory Architecture

The repository follows a clean modular hierarchy:

* **04_Atlas/**: Seventeen Maps of Content organizing curricula and reading roadmaps, along with the master [[04_Atlas|04_Atlas Hub]].
* **02_Literature/**: Lecture syntheses, course slide transcriptions, and reference literature breakdowns across all courses.
* **03_Zettel/**: Over 1,300 atomic concept notes. Each note focuses on a discrete physical mechanism, mathematical definition, or observational effect with explicit backlinks.
* **assets/images/**: 2,870 astronomical diagrams, ray-tracing sketches, coordinate geometries, and observational plots.

---

## How to Study with This Vault

1. **Start with a Course MOC**: Open an MOC in 04_Atlas/ to see the complete narrative arc of a course rather than reading disconnected concepts.
2. **Work through the Mathematics**: Notes contain step-by-step derivations. Calculate the metric contractions, verify dimensional homogeneity, and evaluate physical limits.
3. **Follow the Cross-Links**: Concepts link bidirectionally. If a derivation references a theorem or detector parameter, click the linked note to inspect its definition.

---

## Assumed Background

The notes assume standard undergraduate preparation in physics and mathematics:
* Multivariable calculus, vector calculus, and ordinary differential equations.
* Linear algebra (matrix decomposition, eigenvalues, spectral theorems).
* Classical mechanics (Lagrangian and Hamiltonian dynamics).
* Classical electrodynamics (Maxwell equations, electromagnetic radiation).
* Thermodynamics and statistical mechanics.
* Introductory quantum mechanics.

---

## Contributing and Errata

If you identify an error in a derivation or have a clarification to suggest, open an issue directly on the [GitHub repository](https://github.com/yourastrophysicist/your_astronotes/issues).
