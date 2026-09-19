---
layout: "default"
title: "Galaxy morphology vs physical properties"
tags: ""
---
# Galaxy Morphology versus Physical Properties

Visual galaxy morphology along the Hubble sequence correlates tightly with nearly every fundamental physical, dynamical, and chemical property of galaxies. Rather than being an arbitrary visual taxonomy, the morphological stage parameter $T$ (de Vaucouleurs 1959) traces an underlying continuous physical continuum governed by the angular momentum distribution of the dark matter halo, the cold gas fraction, the star formation efficiency, and the merger history of the system.

---

## 1. The Numerical Morphological Stage Index ($T$)

To enable quantitative statistical correlations, Gérard de Vaucouleurs (1959) assigned integer values to morphological stages along the revised sequence, termed the **$T$-type** -

| Galaxy Morphology | Hubble Type | De Vaucouleurs $T$-Type |
|---|---|---|
| Compact Elliptical / cE | cE | $-6$ |
| Giant Elliptical | E | $-5$ |
| Early Lenticular | S0$^-$ | $-3$ |
| Intermediate Lenticular | S0$^0$ | $-2$ |
| Late Lenticular | S0$^+$ | $-1$ |
| Early Spiral | S0/a | $0$ |
| Spiral | Sa | $+1$ |
| Spiral | Sab | $+2$ |
| Spiral | Sb | $+3$ |
| Spiral | Sbc | $+4$ |
| Spiral | Sc | $+5$ |
| Spiral | Scd | $+6$ |
| Spiral | Sd | $+7$ |
| Very Late Spiral | Sdm | $+8$ |
| Magellanic Spiral | Sm | $+9$ |
| Irregular | Im | $+10$ |

---

## 2. Systematic Scaling Trends with Morphological Stage $T$

Empirical surveys (Roberts and Haynes 1994, Strateva et al. 2001, Blanton and Moustakas 2009) establish tight scaling relations between $T$-type and physical observables -

### 1. Integrated Optical Colors and Mean Stellar Age
Optical colors become monotonically bluer with increasing $T$ -
- Early-type galaxies ($T \le -2$) exhibit red colors - $(B - V) pprox 0.90 \pm 0.05$ and $(u - r) pprox 2.5 \pm 0.15$.
- Late-type galaxies ($T \ge 5$) exhibit blue colors - $(B - V) pprox 0.45 \pm 0.10$ and $(u - r) pprox 1.4 \pm 0.20$.
This color shift reflects the mean age of the stellar population, which drops from $	au_{
m age} > 10$ Gyr in ellipticals down to $	au_{
m age} \sim 1 - 3$ Gyr in late-type spirals.

### 2. Neutral Gas Mass Fraction
The ratio of neutral hydrogen mass to optical luminosity $M_{
m HI} / L_B$ increases by more than two orders of magnitude along the sequence -
- Ellipticals ($T = -5$) - $M_{
m HI} / L_B \lesssim 0.005 \, M_\odot / L_\odot$.
- Sa spirals ($T = 1$) - $M_{
m HI} / L_B pprox 0.10 \, M_\odot / L_\odot$.
- Sc spirals ($T = 5$) - $M_{
m HI} / L_B pprox 0.35 \, M_\odot / L_\odot$.
- Sm/Im irregulars ($T = 9 - 10$) - $M_{
m HI} / L_B pprox 1.0 - 5.0 \, M_\odot / L_\odot$.

### 3. Specific Star Formation Rate (sSFR)
The current star formation rate per unit stellar mass ($	ext{sSFR} \equiv 	ext{SFR} / M_*$) scales directly with gas fraction -
- Ellipticals and S0s - $	ext{sSFR} < 10^{-12} 	ext{ yr}^{-1}$ (quiescent).
- Late spirals and irregulars - $	ext{sSFR} pprox 10^{-10} - 10^{-9} 	ext{ yr}^{-1}$ (doubling stellar mass in a fraction of a Hubble time).

### 4. Sersic Index ($n$) and Concentration Index ($C$)
The light profile of a galaxy reflects its internal dynamical structure -
- Concentration index $C \equiv r_{90} / r_{50}$ (ratio of radii enclosing 90% and 50% of Petrosian flux) drops from $C pprox 3.0 - 3.5$ for $R^{1/4}$ de Vaucouleurs ellipticals down to $C pprox 2.0 - 2.3$ for exponential disks.
- Strateva et al. (2001) established that $C = 2.6$ provides a sharp, objective dividing boundary between bulge-dominated ($C > 2.6$) and disk-dominated ($C < 2.6$) systems.

### 5. Dynamical Support Ratio ($V / \sigma$)
The ratio of ordered circular rotation velocity $V$ to random velocity dispersion $\sigma$ parameterizes kinematic support -
- Giant ellipticals - $V / \sigma \lesssim 0.3$ (anisotropic pressure-supported spheroids).
- Fast-rotator low-mass ellipticals - $V / \sigma \sim 0.5 - 1.0$.
- Spiral disks - $V / \sigma pprox 5 - 20$ (dynamically cold, rotationally supported thin disks).

---

## 3. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - Physical Parameters versus De Vaucouleurs Stage T
```text
  (B - V) Color [mag]                   Neutral Gas Fraction M_HI / L_B [M_sun/L_sun]
  1.0 +-----------------------+         2.0 +-----------------------+
      | \                         |             |                        /  |
  0.8 |  \                        |         1.0 |                       /   |
      |   \                       |             |                      /    |
  0.6 |    \                      |         0.5 |                     /     |
      |     \                     |             |                    /      |
  0.4 |      \                    |         0.1 |          .--------'       |
      |       \__________         |             | --------'                 |
  0.2 +-----------------------+         0.0 +-----------------------+
      -5    0    +5   +10                       -5    0    +5   +10
          T-Stage                                   T-Stage

  Concentration Index C = r90/r50       Kinematic Ratio V / sigma
  3.5 +-----------------------+          20 +-----------------------+
      | \                         |             |                        /  |
  3.0 |  \                        |          15 |                       /   |
  2.6 |---\-------------------| Strateva    10 |                      /    |
  2.3 |    \                      |           5 |            .-------'      |
  2.0 |     \__________           |             |  .--------'               |
      |                           |           0 +-----------------------+
      +-----------------------+                 -5    0    +5   +10
      -5    0    +5   +10                           T-Stage
          T-Stage
```

---

## 4. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"How do physical properties correlate with galaxy morphology along the Hubble sequence?"*

1. **Introduce the de Vaucouleurs $T$-stage index** -
   - Write on the board - $T = -5$ (E), $0$ (S0/a), $+5$ (Sc), $+10$ (Irr).
   - Explain - *"The visual classification translates into a continuous numerical variable that correlates systematically with baryonic mass, gas content, star formation, and kinematic support."*

2. **Sketch the 4 characteristic scaling plots** -
   - Draw $(B-V)$ vs $T$, showing monotonic bluing from $0.9$ to $0.4$.
   - Draw $M_{
m HI}/L_B$ vs $T$, showing the exponential rise in cold gas fraction.
   - Draw concentration index $C = r_{90}/r_{50}$ vs $T$, drawing the Strateva divide at $C = 2.6$.
   - Draw $V/\sigma$ vs $T$, demonstrating the transition from pressure support ($V/\sigma < 0.5$) to rotational support ($V/\sigma \sim 15$).

3. **Conclude with the physical driver** -
   - State clearly - *"These correlations reflect the fundamental cosmic evolution of galaxies - early types assembled their stars rapidly in high-density environments at high redshift and quenched, while late types maintained cold gas accretion and steady disk star formation over the age of the Universe."*

---

## 5. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part I - Galaxy Morphology vs Physical Properties, pages 10-11).
  - `Lecture1_MorphClasification.pdf` (Morphological trends and parameter correlations, pages 20-38).
  - `gal_morph-17..30` (Roberts & Haynes diagrams and parameter distributions).
- **Seminal Literature** -
  - Roberts, M. S., and Haynes, M. P. (1994, ARA&A, 32, 115) - *Physical Parameters along the Hubble Sequence*.
  - Strateva, I., et al. (2001, AJ, 122, 1861) - *Color Separation of Galaxy Types in the Sloan Digital Sky Survey*.
  - Blanton, M. R., and Moustakas, J. (2009, ARA&A, 47, 159) - *Physical Properties and Environments of Nearby Galaxies*.
- **Standard Textbooks** -
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 2 - Observational Facts (pages 59-64).
  - Binney, J., and Merrifield, M. (1998), *Galactic Astronomy*, Princeton University Press, Chapter 4 - Physical Characteristics along the Hubble Sequence (pages 170-180).

---

## 6. Related Knowledge Base Notes

- [Hubble morphological sequence](Hubble%20morphological%20sequence.html) - The classical Hubble tuning fork taxonomic classification.
- [CAS galaxy classification](CAS%20galaxy%20classification.html) - Quantitative non-parametric classification (Concentration, Asymmetry, Smoothness).
- [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html) - The fundamental optical color-magnitude divide.
- [Schmidt-Kennicutt law](Schmidt-Kennicutt%20law.html) - Star formation rate surface density relations.
- [Sersic profile](Sersic%20profile.html) - The master mathematical law describing radial light concentration.

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Dark%20matter%20on%20galactic%20scales.html" class="backlink-item">Dark matter on galactic scales</a></li>
    <li class="backlink-item-wrap"><a href="Galaxies%20in%20the%20local%20universe.html" class="backlink-item">Galaxies in the local universe</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20clusters%20and%20overview%20of%20evolution.html" class="backlink-item">Galaxy clusters and overview of evolution</a></li>
    <li class="backlink-item-wrap"><a href="Hubble%20morphological%20sequence.html" class="backlink-item">Hubble morphological sequence</a></li>
    <li class="backlink-item-wrap"><a href="Non-parametric%20galaxy%20morphology%20metrics.html" class="backlink-item">Non-parametric galaxy morphology metrics</a></li>
    <li class="backlink-item-wrap"><a href="Spectral%20energy%20distributions.html" class="backlink-item">Spectral energy distributions</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html" class="backlink-item">Fundamentals_Astrophysics_Cosmology_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

