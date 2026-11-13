---
layout: "default"
title: "Hubble morphological sequence"
tags: ""
---
# Hubble morphological sequence

the Hubble morphological sequence, first formulated by Edwin Hubble (1926, 1936 in *The Realm of the Nebulae*), provides the taxonomic classification scheme for galaxies based on their optical appearance. arranged diagrammatically as the iconic **Hubble tuning fork**, the sequence organizes galaxies into two primary branches - early-type galaxies (ellipticals E0-E7 and lenticulars S0) along the handle, and late-type galaxies (normal spirals Sa-Sd and barred spirals SBa-SBd) along the two prongs, terminating in irregular galaxies (Irr). although originally conceived as an empirical visual classification, modern astrophysics demonstrates that the sequence represents a continuous physical progression in stellar kinematics ($V/\sigma$), cold gas content, current star formation activity, and bulge-to-disk ratio ($B/D$).

---

## 1. mathematical and morphological structure of the sequence

### 1. elliptical galaxies (E0 to E7)
elliptical galaxies appear as smooth, featureless spheroids characterized by elliptical isophotes with no visible disks, dust lanes, or spiral structures.
- **mathematical ellipticity** -
  $$\epsilon \equiv 1 - \frac{b}{a}$$
  where $a$ is the semi-major axis and $b$ is the semi-minor axis of the projected elliptical isophote.
- **Hubble ellipticity class number** - the integer index $n$ in the designation $\text{E}n$ is defined by -
  $$n = 10 \, \epsilon = 10 \left( 1 - \frac{b}{a} \right)$$
  rounded to the nearest integer.
  - an E0 galaxy appears circular on the sky ($b/a = 1 \implies n = 0$).
  - an E7 galaxy represents the maximum observed flattening ($b/a = 0.3 \implies n = 7$).
- **the E7 physical boundary** - ellipticals flatter than E7 ($b/a < 0.3$) are dynamically unstable to bending and firehose modes, collapsing into rotating stellar disks. any galaxy with $b/a < 0.3$ possesses a stellar disk and is classified as a lenticular or spiral galaxy.

### 2. lenticular galaxies (S0 and SB0)
lenticulars occupy the central transitional junction where the tuning fork bifurcates into normal and barred prongs.
- they possess a central bright bulge and an extended, flat, rotating stellar disk.
- unlike spiral galaxies, lenticular disks are smooth and featureless, exhibiting no spiral arms and negligible cold interstellar gas or active star formation.
- formally divided into unbarred (S0) and barred (SB0) classes.

### 3. spiral galaxies (Sa, Sb, Sc, Sd and SBa, SBb, SBc, SBd)
spiral galaxies consist of a central spheroidal bulge embedded in a thin, rotating stellar and gaseous disk decorated with spiral arms.
the classification along the sequence from early-type spirals (Sa/SBa) to late-type spirals (Sc/SBc and Sd/SBd) is governed by three coordinated empirical criteria -
1. **bulge-to-disk luminosity ratio ($B/D$)** -
   - Sa - dominant bulge ($B/D \sim 0.3 - 0.5$).
   - Sb - intermediate bulge ($B/D \sim 0.1 - 0.3$).
   - Sc - small, faint bulge ($B/D \sim 0.05 - 0.1$).
   - Sd/Sm - bulge is negligible or completely absent ($B/D \approx 0$).
2. **pitch angle of spiral arms ($\psi$)** - the angle between the tangent to a spiral arm and the local circle of constant radius -
   - Sa - tightly wound spiral arms ($\psi \approx 5^\circ - 10^\circ$).
   - Sb - moderately open arms ($\psi \approx 10^\circ - 20^\circ$).
   - Sc/Sd - very open, unwound spiral arms ($\psi \approx 20^\circ - 35^\circ$).
3. **resolution of arms into substructure** -
   - Sa - arms are smooth, continuous, and dominated by older disk stars.
   - Sc/Sd - arms are highly fragmented, knotty, and resolved into bright OB stellar associations, giant H II emission nebulae, and dust filaments.

### 4. irregular galaxies (Irr)
galaxies lacking rotational symmetry, regular spiral arms, or a defined nucleus. divided into Irr I (asymmetric, gas-rich starbursting systems like the Magellanic Clouds) and Irr II (amorphous, tidally disrupted or interacting systems).

---

## 2. physical and dynamical continuum along the tuning fork

the historical terms "early-type" and "late-type" were introduced by Hubble under the speculative hypothesis that galaxies evolved from left to right along the fork. while this evolutionary concept was incorrect, the sequence traces a strong physical continuum in astrophysical and dynamical parameters -

| physical property | early-type (E / S0) | intermediate (Sa / Sb) | late-type (Sc / Sd / Irr) |
|---|---|---|---|
| dominant kinematic support | velocity dispersion $\sigma$ (pressure) | combined $V$ and $\sigma$ | circular rotation $V_{\mathrm{rot}}$ (cold disk) |
| kinematic ratio $V/\sigma$ | $V/\sigma \lesssim 0.5$ | $V/\sigma \sim 2 - 5$ | $V/\sigma \sim 10 - 20$ |
| Sersic index $n$ | $n \approx 3 - 6$ ($R^{1/4}$ law) | bulge $n \approx 2 - 4$, disk $n = 1$ | pure exponential disk $n \approx 1$ |
| cold gas fraction $M_{\mathrm{HI}}/M_*$ | negligible ($< 0.01$) | moderate ($0.05 - 0.20$) | high ($0.30 - 2.0$) |
| specific SFR ($\text{sSFR}$) | quiescent ($< 10^{-12} \text{ yr}^{-1}$) | moderate ($\sim 10^{-10.5} \text{ yr}^{-1}$) | intense ($\sim 10^{-9.5} \text{ yr}^{-1}$) |
| optical color $(B - V)$ | red ($B - V \approx 0.9$) | intermediate ($B - V \approx 0.7$) | blue ($B - V \approx 0.4$) |
| mean stellar age | old ($> 10$ Gyr) | intermediate ($\sim 5 - 8$ Gyr) | young ($\sim 1 - 3$ Gyr) |

---

## 3. observational graph literacy and ASCII blueprints

### diagram 1 - the Hubble tuning fork classification scheme
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

## 4. oral exam blackboard presentation script

when asked by Prof. Pizzella - *"Draw the Hubble tuning fork, define the quantitative classifications, and explain the underlying physical trends."*

1. **draw the complete tuning fork on the blackboard** -
   - draw the handle with E0, E3, E5, E7.
   - draw the bifurcation at S0/SB0 into the unbarred (Sa, Sb, Sc, Sd) and barred (SBa, SBb, SBc, SBd) prongs, terminating in irregulars.

2. **define the quantitative criteria** -
   - ellipticals - write $n = 10(1 - b/a)$. state that $n \le 7$ because flatter systems are dynamically unstable to firehose modes.
   - spirals - state the three criteria - (1) bulge-to-disk ratio $B/D$, (2) spiral arm pitch angle $\psi$, (3) arm resolution into H II regions.

3. **explain the physical meaning of the sequence** -
   - emphasize - *"The Hubble sequence is not an evolutionary track, but a continuum of dynamical support and gas content. Moving from left to right, the kinematic ratio $V/\sigma$ increases from $\sim 0.2$ to $\sim 15$, the cold gas fraction increases from $< 1\%$ to over $50\%$, and star formation transitions from quiescent to active."*

---

## 5. primary course references

- **Prof. Alessandro Pizzella's lecture notes** -
  - `Astrophysics_of_Galaxies.tex` (Part I - Galaxy Morphology and Classification, pages 4-6).
  - `Lecture1_MorphClasification.pdf` (Hubble classification, de Vaucouleurs extension, pages 1-35).
  - `gal_morph-01..16` (Hubble tuning fork parameters and photographic atlases).
- **seminal literature** -
  - Hubble, E. P. (1926, ApJ, 64, 321) - *Extragalactic nebulae*.
  - Hubble, E. P. (1936), *The Realm of the Nebulae*, Yale University Press.
  - de Vaucouleurs, G. (1959, Handbuch der Physik, 53, 275) - *Classification and Morphology of External Galaxies*.
  - Sandage, A. (1961), *The Hubble Atlas of Galaxies*, Carnegie Institution of Washington.
- **standard textbooks** -
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 2 - Observational Facts (pages 59-64).
  - Binney, J., and Merrifield, M. (1998), *Galactic Astronomy*, Princeton University Press, Chapter 4 - The Morphology of Galaxies (pages 144-154).

---

## 6. related knowledge base notes

- [[Galaxy morphology vs physical properties]] - systematic correlations between Hubble type and physical parameters.
- [[CAS galaxy classification]] - quantitative non-parametric morphology (concentration, asymmetry, smoothness).
- [[Sersic profile]] - analytic surface brightness modeling of spheroids and disks.
- [[De Vaucouleurs and exponential profiles]] - classical empirical surface brightness profiles.
- [[Galaxy color, density and morphology]] - Dressler morphology-density relation in galaxy clusters.



## worked example

an elliptical galaxy with axis ratio $b/a = 0.6$ is classified $n = 10(1 - 0.6) = 4$, an E4. the same galaxy seen along its short axis would be an E0. so the class depends on the angle of view, and the true flattening is found only statistically.

## where it goes wrong

- early type and late type do not mean old and young. Hubble's evolutionary guess was wrong, but the names stayed.
- an elliptical with $b/a$ below 0.3 is not seen. flatter systems are disks.
- the class of a galaxy at high redshift is affected by surface brightness dimming and by the change of rest-frame band.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Hubble sequence|500](https://commons.wikimedia.org/wiki/Special:FilePath/Hubble_Tuning_Fork_diagram.svg?width=600)
*Lead figure of the Wikipedia article Hubble sequence* ([Commons file page](https://commons.wikimedia.org/wiki/File:Hubble_Tuning_Fork_diagram.svg), Cosmogoblin, CC0, as used on the Wikipedia article [Hubble sequence](https://en.wikipedia.org/wiki/Hubble_sequence))

- **Hubble sequence**. "The Hubble sequence is a morphological classification scheme for galaxies published by Edwin Hubble in 1926. It is often colloquially known as the Hubble tuning-fork diagram because the shape in which it is traditionally represented resembles a tuning fork. It was invented by John Henry Reynolds and Sir James Jeans." ([Wikipedia](https://en.wikipedia.org/wiki/Hubble_sequence))
- **The Evolution of Galaxy Structure over Cosmic Time**. "I present a comprehensive review of the evolution of galaxy structure in the universe from the first galaxies we can currently observe at z~6 down to galaxies we see in the local universe. I further address how these changes reveal galaxy formation processes that galaxy structural analyses can provide." ([arXiv:1403.2783](https://arxiv.org/abs/1403.2783))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## linked references

- [[CAS galaxy classification]]
- [[De Vaucouleurs and exponential profiles]]
- [[Galaxies in the local universe]]
- [[Galaxy clusters and overview of evolution]]
- [[Galaxy morphology vs physical properties]]
- [[Galaxy spectroscopy by type]]
- [[PCA spectral classification of galaxies]]
- [[Sersic profile]]
- [[Astrophysics_of_Galaxies_MOC]]
- [[Fundamentals_Astrophysics_Cosmology_MOC]]


