---
layout: default
title: "Baumann_reference"
---

Daniel Baumann, *Cosmology* (Part III Mathematical Tripos, Cambridge), the lecture notes I keep open whenever Bartolo's slides skip a derivation. it is rigorous but readable, and it is what the course expects me to read alongside the slides.

up-to-date version on his website: [www.damtp.cam.ac.uk/user/db275/cosmology.pdf](http://www.damtp.cam.ac.uk/user/db275/cosmology.pdf)

starred sections (*) are non-examinable; boxed text contains technical details that can be skipped on a first reading.

notation: natural units $c = \hbar \equiv 1$, metric signature $(+ - - -)$ (opposite of GR course), Einstein summation, Greek indices $\mu,\nu = 0..3$, latin indices $i,j = 1..3$.

![bbnTOC](../../assets/images/bbnTOC)

---

## structure of the book

### Part I — The Homogeneous Universe

**chapter 1 — Geometry and Dynamics**
- 1.1 Geometry: metric, symmetric three-spaces (flat / spherical / hyperbolic), Robertson-Walker metric — *the cleanest derivation of FRW I know of*. central reference for 03_Zettel/Theory/Robertson-Walker metric.
- 1.2 Kinematics: geodesics, redshift, distances — supplements 03_Zettel/Theory/Cosmological distances and [Hubble law derivation low-z](../../02_Zettel/Theory/Hubble law derivation low-z.html).
- 1.3 Dynamics: matter sources, spacetime curvature, **Friedmann equations** — parallel to [Newtonian Friedmann derivation](../../02_Zettel/Theory/Newtonian Friedmann derivation.html) and Friedmann equations with Λ but with the full GR treatment.

**chapter 2 — Inflation**
- 2.1 The Horizon Problem: light, horizons, growing Hubble sphere, why the CMB is so uniform
- 2.2 A Shrinking Hubble Sphere: solving the horizon problem, Hubble radius vs particle horizon, conditions for inflation
- 2.3 Physics of Inflation: scalar field dynamics, slow-roll inflation, reheating
the textbook source for [Inflation overview](../../02_Zettel/Theory/Inflation overview.html), [Inflaton scalar field dynamics](../../02_Zettel/Theory/Inflaton scalar field dynamics.html), [Old vs new vs chaotic inflation, slow-roll](../../02_Zettel/Theory/Old vs new vs chaotic inflation, slow-roll.html).

**chapter 3 — Thermal History**
- 3.1 The Hot Big Bang: local thermal equilibrium, decoupling and freeze-out, brief history of the universe
- 3.2 Equilibrium: equilibrium thermodynamics, densities and pressure, conservation of entropy, neutrino decoupling, electron-positron annihilation, cosmic neutrino background
- 3.3 Beyond Equilibrium: **Boltzmann equation, dark matter relics, recombination, Big Bang nucleosynthesis**

> *my Boltzmann-centric treatment of BBN and recombination was heavily inspired by Dodelson's chapter 3.* — Baumann

this is the rigorous companion to [BBN_overview](../../02_Zettel/Theory/BBN_overview.html), [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.html), Dark matter relics — WIMP miracle, and [Boltzmann equation in cosmology](../../02_Zettel/Theory/Boltzmann equation in cosmology.html).

### Part II — The Inhomogeneous Universe

**chapter 4 — Cosmological Perturbation Theory**
- 4.1 Newtonian: perturbed fluid eqs, Jeans' instability, dark matter inside Hubble — supplements [Linear evolution of perturbations in expanding universe](../../02_Zettel/Theory/Linear evolution of perturbations in expanding universe.html) and [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.html)
- 4.2 Relativistic: perturbed spacetime, perturbed matter, linearized evolution
- 4.3 Conserved curvature perturbation, comoving curvature perturbation, conservation law

**chapter 5 — Structure Formation**
- 5.1 Initial conditions: superhorizon limit, radiation-to-matter transition
- 5.2 Evolution of fluctuations: gravitational potential, radiation, dark matter, baryons
parallel to [Growth factor D(z)](../../02_Zettel/Theory/Growth factor D(z).md) and the structure-formation block.

**chapter 6 — Initial Conditions from Inflation**
- 6.1 From quantum to classical
- 6.2 Classical oscillators (Mukhanov-Sasaki equation)
- 6.3 Quantum oscillators (canonical quantization, vacuum choice, zero-point fluctuations)
- 6.4 Quantum fluctuations in de Sitter space
- 6.5 Primordial perturbations from inflation (curvature perturbations, gravitational waves)
- 6.6 Observations (matter power spectrum, CMB anisotropies)

### Part III — Problems and Solutions

four problem sets with full solutions:
1. Geometry and Dynamics
2. Inflation and Thermal History
3. Structure Formation
4. Initial Conditions from Inflation

useful for exam practice — closer to the level Bartolo expects than the "Cosmic Perspective" textbook.

---

## further reading Baumann recommends

- **Dodelson**, *Modern Cosmology* — same level as Baumann, Boltzmann-centric
- **Peter & Uzan**, *Primordial Cosmology* — recent, lots of useful reference material
- **Kolb & Turner**, *The Early Universe* — still the standard for thermal history
- **Weinberg**, *Cosmology* — when in doubt about rigor

---

## how I use this in practice

- when the slides assert a Friedmann equation without derivation → Baumann §1.3
- when neutrino decoupling and the $(11/4)^{1/3}$ factor come up in BBN → Baumann §3.2.4 + §3.2.5
- when I need the Boltzmann equation explicitly written out → Baumann §3.3.1
- when I need the Saha equation derived → Baumann §3.3.3
- when slow-roll parameters appear without context → Baumann §2.3.2

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.html)
- [BBN_overview](../../02_Zettel/Theory/BBN_overview.html)
