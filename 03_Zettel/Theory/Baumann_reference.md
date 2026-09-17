---
layout: "default"
title: "Baumann_reference"
---
{% raw %}
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
- 1.2 Kinematics: geodesics, redshift, distances — supplements 03_Zettel/Theory/Cosmological distances and [Hubble law derivation low-z](./Hubble%20law%20derivation%20low-z.html).
- 1.3 Dynamics: matter sources, spacetime curvature, **Friedmann equations** — parallel to [Newtonian Friedmann derivation](./Newtonian%20Friedmann%20derivation.html) and Friedmann equations with Λ but with the full GR treatment.

**chapter 2 — Inflation**
- 2.1 The Horizon Problem: light, horizons, growing Hubble sphere, why the CMB is so uniform
- 2.2 A Shrinking Hubble Sphere: solving the horizon problem, Hubble radius vs particle horizon, conditions for inflation
- 2.3 Physics of Inflation: scalar field dynamics, slow-roll inflation, reheating
the textbook source for [Inflation overview](./Inflation%20overview.html), [Inflaton scalar field dynamics](./Inflaton%20scalar%20field%20dynamics.html), [Old vs new vs chaotic inflation, slow-roll](./Old%20vs%20new%20vs%20chaotic%20inflation%2C%20slow-roll.html).

**chapter 3 — Thermal History**
- 3.1 The Hot Big Bang: local thermal equilibrium, decoupling and freeze-out, brief history of the universe
- 3.2 Equilibrium: equilibrium thermodynamics, densities and pressure, conservation of entropy, neutrino decoupling, electron-positron annihilation, cosmic neutrino background
- 3.3 Beyond Equilibrium: **Boltzmann equation, dark matter relics, recombination, Big Bang nucleosynthesis**

> *my Boltzmann-centric treatment of BBN and recombination was heavily inspired by Dodelson's chapter 3.* — Baumann

this is the rigorous companion to [BBN_overview](./BBN_overview.html), [Saha equation and recombination](./Saha%20equation%20and%20recombination.html), Dark matter relics — WIMP miracle, and [Boltzmann equation in cosmology](./Boltzmann%20equation%20in%20cosmology.html).

### Part II — The Inhomogeneous Universe

**chapter 4 — Cosmological Perturbation Theory**
- 4.1 Newtonian: perturbed fluid eqs, Jeans' instability, dark matter inside Hubble — supplements [Linear evolution of perturbations in expanding universe](./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html) and [Jeans analysis in expanding universe](./Jeans%20analysis%20in%20expanding%20universe.html)
- 4.2 Relativistic: perturbed spacetime, perturbed matter, linearized evolution
- 4.3 Conserved curvature perturbation, comoving curvature perturbation, conservation law

**chapter 5 — Structure Formation**
- 5.1 Initial conditions: superhorizon limit, radiation-to-matter transition
- 5.2 Evolution of fluctuations: gravitational potential, radiation, dark matter, baryons
parallel to [Growth factor D(z)](./Growth%20factor%20D%28z%29.html) and the structure-formation block.

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

- [Fundamentals_Astrophysics_Cosmology_MOC](../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Cosmic_inventory_overview](./Cosmic_inventory_overview.html)
- [BBN_overview](./BBN_overview.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (21)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./BBN_overview.html" class="backlink-item">BBN_overview</a></li>
    <li class="backlink-item-wrap"><a href="./Boltzmann%20equation%20in%20cosmology.html" class="backlink-item">Boltzmann equation in cosmology</a></li>
    <li class="backlink-item-wrap"><a href="./Brief%20thermal%20history.html" class="backlink-item">Brief thermal history</a></li>
    <li class="backlink-item-wrap"><a href="./CMB%20Spectral%20Distortions%20-%20What%20They%20Are%20and%20Where%20They%20Come%20From.html" class="backlink-item">CMB Spectral Distortions - What They Are and Where They Come From</a></li>
    <li class="backlink-item-wrap"><a href="./Conservation%20of%20entropy%20in%20a%20comoving%20volume.html" class="backlink-item">Conservation of entropy in a comoving volume</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmic_inventory_overview.html" class="backlink-item">Cosmic_inventory_overview</a></li>
    <li class="backlink-item-wrap"><a href="./Dark%20matter%20relics%20-%20WIMP%20miracle.html" class="backlink-item">Dark matter relics - WIMP miracle</a></li>
    <li class="backlink-item-wrap"><a href="./Decoupling%20and%20freeze-out.html" class="backlink-item">Decoupling and freeze-out</a></li>
    <li class="backlink-item-wrap"><a href="./Friedmann%20equations%20with%20Lambda.html" class="backlink-item">Friedmann equations with Lambda</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Fundamentals_course_intro.html" class="backlink-item">Fundamentals_course_intro</a></li>
    <li class="backlink-item-wrap"><a href="./Inflation%20overview.html" class="backlink-item">Inflation overview</a></li>
    <li class="backlink-item-wrap"><a href="./Inflaton%20scalar%20field%20dynamics.html" class="backlink-item">Inflaton scalar field dynamics</a></li>
    <li class="backlink-item-wrap"><a href="./Linear%20evolution%20of%20perturbations%20in%20expanding%20universe.html" class="backlink-item">Linear evolution of perturbations in expanding universe</a></li>
    <li class="backlink-item-wrap"><a href="./Matter%20power%20spectrum%20and%20BAO.html" class="backlink-item">Matter power spectrum and BAO</a></li>
    <li class="backlink-item-wrap"><a href="./Newtonian%20Friedmann%20derivation.html" class="backlink-item">Newtonian Friedmann derivation</a></li>
    <li class="backlink-item-wrap"><a href="./Old%20vs%20new%20vs%20chaotic%20inflation%2C%20slow-roll.html" class="backlink-item">Old vs new vs chaotic inflation, slow-roll</a></li>
    <li class="backlink-item-wrap"><a href="./Robertson-Walker%20metric.html" class="backlink-item">Robertson-Walker metric</a></li>
    <li class="backlink-item-wrap"><a href="./Saha%20equation%20and%20recombination.html" class="backlink-item">Saha equation and recombination</a></li>
    <li class="backlink-item-wrap"><a href="./Standard%20model%20problems.html" class="backlink-item">Standard model problems</a></li>
    <li class="backlink-item-wrap"><a href="./Thermal%20equilibrium%20in%20the%20early%20universe.html" class="backlink-item">Thermal equilibrium in the early universe</a></li>
  </ul>
</div>
