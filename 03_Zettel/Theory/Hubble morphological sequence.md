---
layout: "default"
title: "Hubble morphological sequence"
tags: ""
---
# Hubble Morphological Sequence

The Hubble Morphological Sequence, first formulated by Edwin Hubble (1926, 1936 in *The Realm of the Nebulae*), provides the foundational taxonomic classification scheme for galaxies based on their optical appearance. Arranged diagrammatically as the iconic **Hubble Tuning Fork**, the sequence organizes galaxies into two primary branches - Early-Type Galaxies (ellipticals E0-E7 and lenticulars S0) along the handle, and Late-Type Galaxies (normal spirals Sa-Sd and barred spirals SBa-SBd) along the two prongs, terminating in Irregular galaxies (Irr). Although originally conceived as an empirical visual classification, modern astrophysics demonstrates that the sequence represents a continuous physical progression in stellar kinematics ($V/\sigma$), cold gas content, current star formation activity, and bulge-to-disk ratio ($B/D$).

---

## 1. Mathematical and Morphological Structure of the Sequence

### 1. Elliptical Galaxies (E0 to E7)
Elliptical galaxies appear as smooth, featureless spheroids characterized by elliptical isophotes with no visible disks, dust lanes, or spiral structures.
- **Mathematical Ellipticity** -
  $$\epsilon \equiv 1 - \frac{b}{a}$$
  where $a$ is the semi-major axis and $b$ is the semi-minor axis of the projected elliptical isophote.
- **Hubble Ellipticity Class Number** - The integer index $n$ in the designation $\text{E}n$ is defined by -
  $$n = 10 \, \epsilon = 10 \left( 1 - \frac{b}{a} \right)$$
  rounded to the nearest integer.
  - An E0 galaxy appears circular on the sky ($b/a = 1 \implies n = 0$).
  - An E7 galaxy represents the maximum observed flattening ($b/a = 0.3 \implies n = 7$).
- **The E7 Physical Boundary** - Ellipticals flatter than E7 ($b/a < 0.3$) are dynamically unstable to bending and firehose modes, collapsing into rotating stellar disks. Any galaxy with $b/a < 0.3$ possesses a stellar disk and is classified as a lenticular or spiral galaxy.

### 2. Lenticular Galaxies (S0 and SB0)
Lenticulars occupy the pivotal transitional junction where the tuning fork bifurcates into normal and barred prongs.
- They possess a central bright bulge and an extended, flat, rotating stellar disk.
- Unlike spiral galaxies, lenticular disks are smooth and featureless, exhibiting no spiral arms and negligible cold interstellar gas or active star formation.
- Formally divided into unbarred (S0) and barred (SB0) classes.

### 3. Spiral Galaxies (Sa, Sb, Sc, Sd and SBa, SBb, SBc, SBd)
Spiral galaxies consist of a central spheroidal bulge embedded in a thin, rotating stellar and gaseous disk decorated with spiral arms.
The classification along the sequence from early-type spirals (Sa/SBa) to late-type spirals (Sc/SBc and Sd/SBd) is governed by three coordinated empirical criteria -
1. **Bulge-to-Disk Luminosity Ratio ($B/D$)** -
   - Sa - Dominant bulge ($B/D \sim 0.3 - 0.5$).
   - Sb - Intermediate bulge ($B/D \sim 0.1 - 0.3$).
   - Sc - Small, faint bulge ($B/D \sim 0.05 - 0.1$).
   - Sd/Sm - Bulge is negligible or completely absent ($B/D \approx 0$).
2. **Pitch Angle of Spiral Arms ($\psi$)** - The angle between the tangent to a spiral arm and the local circle of constant radius -
   - Sa - Tightly wound spiral arms ($\psi \approx 5^\circ - 10^\circ$).
   - Sb - Moderately open arms ($\psi \approx 10^\circ - 20^\circ$).
   - Sc/Sd - Very open, unwound spiral arms ($\psi \approx 20^\circ - 35^\circ$).
3. **Resolution of Arms into Substructure** -
   - Sa - Arms are smooth, continuous, and dominated by older disk stars.
   - Sc/Sd - Arms are highly fragmented, knotty, and resolved into bright OB stellar associations, giant H II emission nebulae, and dust filaments.

### 4. Irregular Galaxies (Irr)
Galaxies lacking rotational symmetry, regular spiral arms, or a defined nucleus. Divided into Irr I (asymmetric, gas-rich starbursting systems like the Magellanic Clouds) and Irr II (amorphous, tidally disrupted or interacting systems).

---

## 2. Physical and Dynamical Continuum along the Tuning Fork

The historical terms "early-type" and "late-type" were introduced by Hubble under the speculative hypothesis that galaxies evolved from left to right along the fork. While this evolutionary concept was incorrect, the sequence traces a profound physical continuum in astrophysical and dynamical parameters -

| Physical Property | Early-Type (E / S0) | Intermediate (Sa / Sb) | Late-Type (Sc / Sd / Irr) |
|---|---|---|---|
| Dominant Kinematic Support | Velocity dispersion $\sigma$ (Pressure) | Combined $V$ and $\sigma$ | Circular rotation $V_{\mathrm{rot}}$ (Cold Disk) |
| Kinematic Ratio $V/\sigma$ | $V/\sigma \lesssim 0.5$ | $V/\sigma \sim 2 - 5$ | $V/\sigma \sim 10 - 20$ |
| Sersic Index $n$ | $n \approx 3 - 6$ ($R^{1/4}$ law) | Bulge $n \approx 2 - 4$, Disk $n = 1$ | Pure exponential disk $n \approx 1$ |
| Cold Gas Fraction $M_{\mathrm{HI}}/M_*$ | Negligible ($< 0.01$) | Moderate ($0.05 - 0.20$) | High ($0.30 - 2.0$) |
| Specific SFR ($\text{sSFR}$) | Quiescent ($< 10^{-12} \text{ yr}^{-1}$) | Moderate ($\sim 10^{-10.5} \text{ yr}^{-1}$) | Intense ($\sim 10^{-9.5} \text{ yr}^{-1}$) |
| Optical Color $(B - V)$ | Red ($B - V \approx 0.9$) | Intermediate ($B - V \approx 0.7$) | Blue ($B - V \approx 0.4$) |
| Mean Stellar Age | Old ($> 10$ Gyr) | Intermediate ($\sim 5 - 8$ Gyr) | Young ($\sim 1 - 3$ Gyr) |

---

## 3. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - The Hubble Tuning Fork Classification Scheme
```text
                         /---- Sa -------- Sb -------- Sc -------- Sd ----\
                        /                                                  \
  E0 -- E3 -- E5 -- E7 - S0                                                 Irr
                        \                                                  /
                         \--- SBa ------- SBb ------- SBc ------- SBd ----/

  Parameter Trends (Left to Right) -
  - Bulge-to-Disk Ratio B/D   - High (~0.5 - 1.0) -----------> Low (~0.0)
  - Spiral Arm Pitch Angle psi- Tightly Wound --------------> Open / Unwound
  - Cold Gas Fraction M_HI/M* - Negligible (< 1%) ----------> Dominant (> 50%)
  - Specific Star Formation   - Quiescent (< 10^-12/yr) ----> Active (~10^-9/yr)
  - Kinematic Support V/sigma - Pressure-supported ---------> Rotationally supported
```

---

## 4. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"Draw the Hubble tuning fork, define the quantitative classifications, and explain the underlying physical trends."*

1. **Draw the complete tuning fork on the blackboard** -
   - Draw the handle with E0, E3, E5, E7.
   - Draw the bifurcation at S0/SB0 into the unbarred (Sa, Sb, Sc, Sd) and barred (SBa, SBb, SBc, SBd) prongs, terminating in Irregulars.

2. **Define the quantitative criteria** -
   - Ellipticals - Write $n = 10(1 - b/a)$. State that $n \le 7$ because flatter systems are dynamically unstable to firehose modes.
   - Spirals - State the three criteria - (1) Bulge-to-disk ratio $B/D$, (2) Spiral arm pitch angle $\psi$, (3) Arm resolution into H II regions.

3. **Explain the physical meaning of the sequence** -
   - Emphasize - *"The Hubble sequence is not an evolutionary track, but a continuum of dynamical support and gas content. Moving from left to right, the kinematic ratio $V/\sigma$ increases from $\sim 0.2$ to $\sim 15$, the cold gas fraction increases from $< 1\%$ to over $50\%$, and star formation transitions from quiescent to active."*

---

## 5. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part I - Galaxy Morphology and Classification, pages 4-6).
  - `Lecture1_MorphClasification.pdf` (Hubble classification, de Vaucouleurs extension, pages 1-35).
  - `gal_morph-01..16` (Hubble tuning fork parameters and photographic atlases).
- **Seminal Literature** -
  - Hubble, E. P. (1926, ApJ, 64, 321) - *Extragalactic nebulae*.
  - Hubble, E. P. (1936), *The Realm of the Nebulae*, Yale University Press.
  - de Vaucouleurs, G. (1959, Handbuch der Physik, 53, 275) - *Classification and Morphology of External Galaxies*.
  - Sandage, A. (1961), *The Hubble Atlas of Galaxies*, Carnegie Institution of Washington.
- **Standard Textbooks** -
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 2 - Observational Facts (pages 59-64).
  - Binney, J., and Merrifield, M. (1998), *Galactic Astronomy*, Princeton University Press, Chapter 4 - The Morphology of Galaxies (pages 144-154).

---

## 6. Related Knowledge Base Notes

- [Galaxy morphology vs physical properties](Galaxy%20morphology%20vs%20physical%20properties.html) - Systematic correlations between Hubble type and physical parameters.
- [CAS galaxy classification](CAS%20galaxy%20classification.html) - Quantitative non-parametric morphology (Concentration, Asymmetry, Smoothness).
- [Sersic profile](Sersic%20profile.html) - Analytic surface brightness modeling of spheroids and disks.
- [De Vaucouleurs and exponential profiles](De%20Vaucouleurs%20and%20exponential%20profiles.html) - Classical empirical surface brightness profiles.
- [Galaxy color, density and morphology](Galaxy%20color%2C%20density%20and%20morphology.html) - Dressler morphology-density relation in galaxy clusters.

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="CAS%20galaxy%20classification.html" class="backlink-item">CAS galaxy classification</a></li>
    <li class="backlink-item-wrap"><a href="De%20Vaucouleurs%20and%20exponential%20profiles.html" class="backlink-item">De Vaucouleurs and exponential profiles</a></li>
    <li class="backlink-item-wrap"><a href="Galaxies%20in%20the%20local%20universe.html" class="backlink-item">Galaxies in the local universe</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20clusters%20and%20overview%20of%20evolution.html" class="backlink-item">Galaxy clusters and overview of evolution</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20morphology%20vs%20physical%20properties.html" class="backlink-item">Galaxy morphology vs physical properties</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20spectroscopy%20by%20type.html" class="backlink-item">Galaxy spectroscopy by type</a></li>
    <li class="backlink-item-wrap"><a href="PCA%20spectral%20classification%20of%20galaxies.html" class="backlink-item">PCA spectral classification of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Sersic%20profile.html" class="backlink-item">Sersic profile</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
  </ul>
</div>

