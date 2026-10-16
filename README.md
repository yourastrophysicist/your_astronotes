---
layout: default
title: "README"
---

# Your AstroNotes

These are my notes from the first year of the Master's in Astrophysics and Cosmology at the University of Padua, Semesters 1 and 2. I wrote them for myself while studying for the exams, and I keep them public because a set of notes that only I can read is not much use to anyone else.

Everything here was put together by one voyager only. There are lecture write-ups, notes on instruments and detectors, a lot of small notes on single ideas that link to each other, and a full set of cosmology derivations worked out step by step, one equation per file.

* Website, [yourastro.space/notes](https://www.yourastro.space/notes/)
* Instagram, [@your.astrophysicist](https://instagram.com/your.astrophysicist)

---

## Why I keep them linked

The courses are taught one at a time, but the physics does not stay in its box. The spherical trigonometry from the first weeks comes back every time a telescope has to point somewhere. The radiative transfer in a stellar atmosphere is what sets the boundary of the stellar structure equations. The geometry from general relativity is where the Friedmann equations come from. The Fourier optics from an old physics course is the whole reason an interferometer can make an image.

So instead of one long document per course, every idea gets its own note and links to the ones it needs. From any result you can go back to the maths behind it, or forward to what you would actually measure.

---

## The courses

There are ten courses, each with its own map in `04_Atlas/`. A map is the best place to start, because it follows the order the course was taught.

### Semester 1

1. **[[Fundamentals_Astrophysics_Cosmology_MOC\|Fundamentals of Astrophysics and Cosmology]]**, Prof. G. Rodighiero and Prof. M. Viel
   Coordinates and spherical trigonometry, radiation, magnitudes, the basics of stellar evolution, the structure of the Galaxy, the Hubble law and the thermal history of the universe.

2. **[[Observational_Astrophysics_MOC\|Observational Astrophysics]]**, Prof. E. Giro and Prof. G. Umbriaco
   What the atmosphere does to light, CCDs and infrared arrays, signal to noise, photometric calibration and how to build an error budget.

3. **[[General_Relativity_MOC\|General Relativity for Astrophysics]]**, Prof. S. Matarrese, with Baumann's Cambridge notes
   Manifolds, Christoffel symbols, the Riemann tensor, the Einstein equations, geodesics, the Schwarzschild solution and gravitational waves.

4. **[[Mathematical_Numerical_Methods_MOC\|Mathematical and Numerical Methods]]**, Prof. M. Mapelli
   Linear algebra on a computer, root finding, numerical integration, Runge-Kutta and symplectic integrators, and Monte Carlo methods.

5. **[[Lab_High-Energy_MOC\|Astrophysics Laboratory 1 (High Energy)]]**, Prof. L. Burderi
   Synchrotron, inverse Compton and bremsstrahlung, grazing incidence X-ray optics, scintillators and solid state detectors.

### Semester 2

6. **[[Astrophysics_of_Galaxies_MOC\|Astrophysics of Galaxies]]**, Prof. A. Moretti
   Galaxy profiles (Sérsic, de Vaucouleurs), stellar dynamics and the Jeans equations, dark matter halos and the scaling relations.

7. **[[Stellar_Astrophysics_MOC\|Stellar Astrophysics]]**, Prof. A. Milone
   The stellar structure equations, polytropes, the equation of state, nuclear burning, stellar atmospheres and stellar populations.

8. **[[Astronomical_Interferometry_MOC\|Astronomical Interferometry]]**, Prof. C. Pernechele
   Spatial coherence and the van Cittert-Zernike theorem, aperture synthesis and the uv plane, visibilities, the dirty beam and CLEAN, ALMA and the VLTI.

9. **[[Observational_Cosmology_MOC\|Observational Cosmology]]**, Prof. M. Viel and Prof. P. Vielva
   The FLRW metric, the cosmological parameters, the distance ladder, big bang nucleosynthesis, recombination and the cosmic microwave background.

10. **[[Astronomical_Spectroscopy_MOC\|Astronomical Spectroscopy]]**, Prof. S. Ciroi
    Atomic structure and selection rules, line broadening, how a spectrograph works, dispersion and resolution, and measuring velocities from Doppler shifts.

---

## What is in the folders

* `04_Atlas/` has the ten course maps and the [[04_Atlas\|main hub]] that links them.
* `02_Literature/` has the lecture write-ups and my notes on the papers each course used.
* `03_Zettel/` has 1,130 short notes, one idea each, linked both ways.
* `03_Zettel/Derivations/` has the 25 derivations of Fundamentals of Astrophysics and Cosmology, from the Robertson-Walker metric to the Press-Schechter mass function, with an [[Fundamentals Derivations\|index]] that puts them in the order you would build them on a board.
* `assets/images/` has the figures, about 2,840 of them, from slides, papers and my own sketches.

---

## How I would use them

Open a course map first and read it in order, so the notes come with their context. When a note has a derivation, do it yourself on paper before reading mine, check the units and look at what happens in the limits. The files in the derivations folder are made for exactly that, each one ends with a few questions and a short summary to redo from memory. When a note mentions something you do not remember, click it, that is what the links are for.

The notes assume the usual bachelor background, so calculus and differential equations, linear algebra, classical mechanics, electromagnetism, thermodynamics and statistical mechanics, and some quantum mechanics.

---

## Mistakes

I am sure there are some. If you find one, or a step that does not follow, please open an [issue](https://github.com/yourastrophysicist/your_astronotes/issues) and tell me.
