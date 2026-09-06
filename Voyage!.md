---
layout: default
title: "Voyage!"
---

# Voyage! The Open Astrophysics Vault

Welcome to the open vault for Year 1 Master of Science coursework in Astrophysics and Cosmology at the University of Padua (Università degli Studi di Padova), Italy.

This repository is an interconnected working second brain compiled by Jessica Syafaq Muthmaina. It contains lecture syntheses, mathematical derivations, observational instrumentation notes, and theoretical foundations.

The vault is designed for physics and astrophysics undergraduates, beginning graduate students, and independent learners who want to study the material from first principles rather than skimming slide summaries.

---

## Why This Vault Exists

Graduate physics is dense and non-linear. Linear lecture slides and standard textbooks often hide the connecting tissue between separate disciplines:
* Spherical trigonometry in observational astronomy feeds directly into telescope pointing coordinates.
* Radiative transfer through stellar atmospheres provides the physical boundary conditions for stellar structure equations.
* Differential geometry in general relativity directly sets up the Friedmann equations that describe cosmological expansion.
* Fourier optics in classical physics explains how radio interferometers like ALMA synthesize images from aperture arrays.

Storing this material as an interconnected graph makes those cross-disciplinary connections explicit. You can trace any physical result back to its mathematical foundations and forward to its observational consequences.

---

## The Ten Course Maps (00_Atlas)

The vault is structured around ten central Maps of Content (MOCs) located in `00_Atlas`. Each MOC serves as a comprehensive syllabus and conceptual spine for a full semester course:

1. **[Fundamentals_Astrophysics_Cosmology_MOC](00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)**
   Foundational coordinates, spherical trigonometry, radiative mechanisms, magnitudes, stellar evolution basics, galactic structure, the Hubble law, and the thermal history of the universe.

2. **[General_Relativity_MOC](00_Atlas/General_Relativity_MOC.md)**
   Differential geometry, manifolds, Christoffel symbols, Riemann curvature, Einstein field equations, geodesic motion, the Schwarzschild solution, orbits, and gravitational radiation.

3. **[Stellar_Astrophysics_MOC](00_Atlas/Stellar_Astrophysics_MOC.md)**
   Stellar structure equations, polytropic models, equation of state, nuclear burning cycles, stellar atmospheres, color-magnitude diagrams, and cluster evolution.

4. **[Astrophysics_of_Galaxies_MOC](00_Atlas/Astrophysics_of_Galaxies_MOC.md)**
   Photometric morphology, galactic dynamics, Jeans equations, dark matter halo profiles, stellar population synthesis, and scaling relations.

5. **[Observational_Cosmology_MOC](00_Atlas/Observational_Cosmology_MOC.md)**
   FLRW metric dynamics, cosmological parameters, the cosmic distance ladder, big bang nucleosynthesis, recombination, and the cosmic microwave background.

6. **[Observational_Astrophysics_MOC](00_Atlas/Observational_Astrophysics_MOC.md)**
   Atmospheric extinction and seeing, astronomical detectors (CCDs and infrared arrays), signal-to-noise calculations, photometric calibration, and error analysis.

7. **[Astronomical_Interferometry_MOC](00_Atlas/Astronomical_Interferometry_MOC.md)**
   Coherence theory, the van Cittert-Zernike theorem, aperture synthesis, $uv$-plane coverage, visibility functions, dirty beams, CLEAN algorithms, ALMA, and the VLTI.

8. **[Astronomical_Spectroscopy_MOC](00_Atlas/Astronomical_Spectroscopy_MOC.md)**
   Atomic structure, selection rules, line broadening mechanisms, spectrograph optics, dispersion, resolution, and Doppler kinematic measurements.

9. **[Lab_High-Energy_MOC](00_Atlas/Lab_High-Energy_MOC.md)**
   High-energy radiation processes (synchrotron, inverse Compton, bremsstrahlung), X-ray and gamma-ray optics, scintillation crystals, solid-state detectors, and space missions.

10. **[Mathematical_Numerical_Methods_MOC](00_Atlas/Mathematical_Numerical_Methods_MOC.md)**
    Numerical linear algebra, root-finding, numerical integration, ordinary differential equation solvers (Runge-Kutta, leapfrog), Monte Carlo methods, and Fast Fourier Transforms.

---

## Directory Architecture

The vault uses a modified Zettelkasten structure:

* **`00_Atlas`**
  The top-level Maps of Content listed above. Start here whenever you want to study a specific course.
* **`01_Literature`**
  Reading companions and chapter-by-chapter breakdowns of primary textbooks and reference material, including Daniel Baumann's General Relativity notes and Cambridge Cosmology lecture notes.
* **`02_Zettel`**
  Over 1,000 atomic concept notes. Each note focuses on a single physical mechanism, mathematical definition, or observational effect with explicit backlinks to its parent concepts.
* **`04_Images`**
  Astronomical diagrams, ray-tracing sketches, coordinate geometries, and data plots referenced by the notes.

---

## How to Study with This Vault

Reading through notes passively does not build genuine mathematical or physical intuition. To get real academic value from this archive:

1. **Pick a Course MOC First**
   Do not open the global graph view expecting to learn at random. Open one MOC in `00_Atlas` and read the conceptual chain from start to finish to see the narrative arc.
2. **Derive with Pen and Paper**
   When an atomic note presents an equation, close the note or fold the derivation block. Pick up a pen and work out the algebra on scratch paper. Calculate the metric contractions, check the physical dimensions of each term, and evaluate the limiting cases (such as letting $c \to \infty$ or $r \gg 2M$).
3. **Follow the Backlinks**
   If a concept relies on a definition you have forgotten, click the wiki-link to review that specific atomic note, then return to the main derivation.

---

## Assumed Background

The notes assume standard undergraduate preparation in physics and applied mathematics:
* Multivariable calculus, vector calculus, and ordinary differential equations.
* Linear algebra (matrix diagonalisation, eigenvalues, vector spaces).
* Classical mechanics (Lagrangian and Hamiltonian dynamics).
* Classical electrodynamics (Maxwell equations, electromagnetic waves).
* Basic thermodynamics and statistical mechanics.

---

## Mathematical Conventions

* **Metric Signature**: Mostly $(-, +, +, +)$ following standard modern general relativity literature (Baumann, Carroll, Wald), unless explicitly noted otherwise.
* **Units**: Theoretical cosmology and high-energy notes frequently use natural units where $c = \hbar = k_B = 1$. Observational, instrumentation, and stellar physics notes retain explicit SI or CGS units.
