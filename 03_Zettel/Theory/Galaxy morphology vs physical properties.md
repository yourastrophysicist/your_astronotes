---
layout: "default"
title: "Galaxy morphology vs physical properties"
tags: ""
---
# galaxy morphology versus physical properties

visual galaxy morphology along the Hubble sequence correlates tightly with nearly every fundamental physical, dynamical, and chemical property of galaxies. rather than being an arbitrary visual taxonomy, the morphological stage parameter $T$ (de Vaucouleurs 1959) traces an underlying continuous physical continuum governed by the angular momentum distribution of the dark matter halo, the cold gas fraction, the star formation efficiency, and the merger history of the system.

---

## 1. the numerical morphological stage index ($T$)

to enable quantitative statistical correlations, Gérard de Vaucouleurs (1959) assigned integer values to morphological stages along the revised sequence, termed the **$T$-type** -

| galaxy morphology | Hubble type | de Vaucouleurs $T$-type |
|---|---|---|
| compact elliptical / cE | cE | $-6$ |
| giant elliptical | E | $-5$ |
| early lenticular | S0$^-$ | $-3$ |
| intermediate lenticular | S0$^0$ | $-2$ |
| late lenticular | S0$^+$ | $-1$ |
| early spiral | S0/a | $0$ |
| spiral | Sa | $+1$ |
| spiral | Sab | $+2$ |
| spiral | Sb | $+3$ |
| spiral | Sbc | $+4$ |
| spiral | Sc | $+5$ |
| spiral | Scd | $+6$ |
| spiral | Sd | $+7$ |
| very late spiral | Sdm | $+8$ |
| Magellanic spiral | Sm | $+9$ |
| irregular | Im | $+10$ |

---

## 2. systematic scaling trends with morphological stage $T$

empirical surveys (Roberts and Haynes 1994, Strateva et al. 2001, Blanton and Moustakas 2009) establish tight scaling relations between $T$-type and physical observables -

### 1. integrated optical colors and mean stellar age
optical colors become monotonically bluer with increasing $T$ -
- early-type galaxies ($T \le -2$) exhibit red colors - $(B - V) \approx 0.90 \pm 0.05$ and $(u - r) \approx 2.5 \pm 0.15$.
- late-type galaxies ($T \ge 5$) exhibit blue colors - $(B - V) \approx 0.45 \pm 0.10$ and $(u - r) \approx 1.4 \pm 0.20$.
this color shift reflects the mean age of the stellar population, which drops from $\tau_{\mathrm{age}} > 10$ Gyr in ellipticals down to $\tau_{\mathrm{age}} \sim 1 - 3$ Gyr in late-type spirals.

### 2. neutral gas mass fraction
the ratio of neutral hydrogen mass to optical luminosity $M_{\mathrm{HI}} / L_B$ increases by more than two orders of magnitude along the sequence -
- ellipticals ($T = -5$) - $M_{\mathrm{HI}} / L_B \lesssim 0.005 \, M_\odot / L_\odot$.
- Sa spirals ($T = 1$) - $M_{\mathrm{HI}} / L_B \approx 0.10 \, M_\odot / L_\odot$.
- Sc spirals ($T = 5$) - $M_{\mathrm{HI}} / L_B \approx 0.35 \, M_\odot / L_\odot$.
- Sm/Im irregulars ($T = 9 - 10$) - $M_{\mathrm{HI}} / L_B \approx 1.0 - 5.0 \, M_\odot / L_\odot$.

### 3. specific star formation rate (sSFR)
the current star formation rate per unit stellar mass ($\text{sSFR} \equiv \text{SFR} / M_*$) scales directly with gas fraction -
- ellipticals and S0s - $\text{sSFR} < 10^{-12} \text{ yr}^{-1}$ (quiescent).
- late spirals and irregulars - $\text{sSFR} \approx 10^{-10} - 10^{-9} \text{ yr}^{-1}$ (doubling stellar mass in a fraction of a Hubble time).

### 4. Sersic index ($n$) and concentration index ($C$)
the light profile of a galaxy reflects its internal dynamical structure -
- concentration index $C \equiv r_{90} / r_{50}$ (ratio of radii enclosing 90% and 50% of Petrosian flux) drops from $C \approx 3.0 - 3.5$ for $R^{1/4}$ de Vaucouleurs ellipticals down to $C \approx 2.0 - 2.3$ for exponential disks.
- Strateva et al. (2001) established that $C = 2.6$ provides a sharp, objective dividing boundary between bulge-dominated ($C > 2.6$) and disk-dominated ($C < 2.6$) systems.

### 5. dynamical support ratio ($V / \sigma$)
the ratio of ordered circular rotation velocity $V$ to random velocity dispersion $\sigma$ parameterizes kinematic support -
- giant ellipticals - $V / \sigma \lesssim 0.3$ (anisotropic pressure-supported spheroids).
- fast-rotator low-mass ellipticals - $V / \sigma \sim 0.5 - 1.0$.
- spiral disks - $V / \sigma \approx 5 - 20$ (dynamically cold, rotationally supported thin disks).

---

## 3. observational graph literacy and ASCII blueprints

### diagram 1 - physical parameters versus de Vaucouleurs stage T
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

## 4. oral exam blackboard presentation script

when asked by Prof. Pizzella - *"How do physical properties correlate with galaxy morphology along the Hubble sequence?"*

1. **introduce the de Vaucouleurs $T$-stage index** -
   - write on the board - $T = -5$ (E), $0$ (S0/a), $+5$ (Sc), $+10$ (Irr).
   - explain - *"The visual classification translates into a continuous numerical variable that correlates systematically with baryonic mass, gas content, star formation, and kinematic support."*

2. **sketch the 4 characteristic scaling plots** -
   - draw $(B-V)$ vs $T$, showing monotonic bluing from $0.9$ to $0.4$.
   - draw $M_{\mathrm{HI}}/L_B$ vs $T$, showing the exponential rise in cold gas fraction.
   - draw concentration index $C = r_{90}/r_{50}$ vs $T$, drawing the Strateva divide at $C = 2.6$.
   - draw $V/\sigma$ vs $T$, demonstrating the transition from pressure support ($V/\sigma < 0.5$) to rotational support ($V/\sigma \sim 15$).

3. **conclude with the physical driver** -
   - state clearly - *"These correlations reflect the fundamental cosmic evolution of galaxies - early types assembled their stars rapidly in high-density environments at high redshift and quenched, while late types maintained cold gas accretion and steady disk star formation over the age of the Universe."*

---

## 5. primary course references

- **Prof. Alessandro Pizzella's lecture notes** -
  - `Astrophysics_of_Galaxies.tex` (Part I - Galaxy Morphology vs Physical Properties, pages 10-11).
  - `Lecture1_MorphClasification.pdf` (Morphological trends and parameter correlations, pages 20-38).
  - `gal_morph-17..30` (Roberts & Haynes diagrams and parameter distributions).
- **seminal literature** -
  - Roberts, M. S., and Haynes, M. P. (1994, ARA&A, 32, 115) - *Physical Parameters along the Hubble Sequence*.
  - Strateva, I., et al. (2001, AJ, 122, 1861) - *Color Separation of Galaxy Types in the Sloan Digital Sky Survey*.
  - Blanton, M. R., and Moustakas, J. (2009, ARA&A, 47, 159) - *Physical Properties and Environments of Nearby Galaxies*.
- **standard textbooks** -
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 2 - Observational Facts (pages 59-64).
  - Binney, J., and Merrifield, M. (1998), *Galactic Astronomy*, Princeton University Press, Chapter 4 - Physical Characteristics along the Hubble Sequence (pages 170-180).

---

## 6. related knowledge base notes

- [[Hubble morphological sequence]] - the classical Hubble tuning fork taxonomic classification.
- [[CAS galaxy classification]] - quantitative non-parametric classification (concentration, asymmetry, smoothness).
- [[Color bimodality of galaxies]] - the fundamental optical color-magnitude divide.
- [[Schmidt-Kennicutt law]] - star formation rate surface density relations.
- [[Sersic profile]] - the master mathematical law describing radial light concentration.



## where it goes wrong

- correlation is not cause. ellipticals are red because they stopped forming stars, not because they are round.
- dusty edge-on spirals can be as red as ellipticals.
- the bimodality is clearer in colour than in morphology. many red galaxies have disks.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Galaxy morphological classification|500](https://commons.wikimedia.org/wiki/Special:FilePath/Hubble_Tuning_Fork_diagram.svg?width=600)
*Lead figure of the Wikipedia article Galaxy morphological classification* ([Commons file page](https://commons.wikimedia.org/wiki/File:Hubble_Tuning_Fork_diagram.svg), Cosmogoblin, CC0, as used on the Wikipedia article [Galaxy morphological classification](https://en.wikipedia.org/wiki/Galaxy_morphological_classification))

- **Galaxy morphological classification**. "Galaxy morphological classification is a system used by astronomers to divide galaxies into groups based on their visual appearance, shape, structure, and distribution of light. There are several schemes in use by which galaxies can be classified according to their morphologies, the most famous being the Hubble sequence, devised by Edwin Hubble and later expanded by Gérard de Vaucouleurs and Allan Sandage." ([Wikipedia](https://en.wikipedia.org/wiki/Galaxy_morphological_classification))
- **The Evolution of Galaxy Structure over Cosmic Time**. "I present a comprehensive review of the evolution of galaxy structure in the universe from the first galaxies we can currently observe at z~6 down to galaxies we see in the local universe. I further address how these changes reveal galaxy formation processes that galaxy structural analyses can provide." ([arXiv:1403.2783](https://arxiv.org/abs/1403.2783))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## linked references

- [[Dark matter on galactic scales]]
- [[Galaxies in the local universe]]
- [[Galaxy clusters and overview of evolution]]
- [[Hubble morphological sequence]]
- [[Non-parametric galaxy morphology metrics]]
- [[Spectral energy distributions]]
- [[Astrophysics_of_Galaxies_MOC]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]
- [[Observational_Cosmology_MOC]]


