---
layout: "default"
title: "Red sequence and blue cloud"
tags: ""
---
# Red Sequence and Blue Cloud

In the optical color-magnitude diagram (CMD) and color-stellar mass plane, the extragalactic population segregates into two distinct, fundamentally different regimes - the Red Sequence and the Blue Cloud. This color bimodality, discovered conclusively in wide-field digital surveys such as the Sloan Digital Sky Survey (SDSS; Strateva et al. 2001, Baldry et al. 2004) and the Two-Degree Field Galaxy Redshift Survey (2dFGRS), demonstrates that galaxies do not occupy a continuous spectrum of star-forming states. Instead, galaxies naturally partition into passively evolving early-type systems (red sequence) and actively star-forming late-type disks (blue cloud), separated by an underdense transition zone known as the Green Valley.

---

## 1. Mathematical Decomposition of the Color-Magnitude Diagram

In an optical color-magnitude diagram plotting color $C \equiv (u - r)$ versus absolute magnitude $M_r$, the total number density distribution of galaxies at fixed absolute magnitude $M_r$ is mathematically modeled as the sum of two distinct Gaussian distributions (Baldry et al. 2004) -
$$P(C \mid M_r) = rac{f_{
m red}}{\sqrt{2\pi}\sigma_{
m red}} \exp\left[ -rac{(C - \mu_{
m red}(M_r))^2}{2\sigma_{
m red}^2} 
ight] + rac{f_{
m blue}}{\sqrt{2\pi}\sigma_{
m blue}} \exp\left[ -rac{(C - \mu_{
m blue}(M_r))^2}{2\sigma_{
m blue}^2} 
ight]$$
where -
- $f_{
m red}(M_r)$ and $f_{
m blue}(M_r)$ are the relative fractions of red and blue galaxies, satisfying $f_{
m red} + f_{
m blue} = 1$.
- $\mu_{
m red}(M_r)$ and $\mu_{
m blue}(M_r)$ represent the mean color ridges as linear functions of absolute magnitude.
- $\sigma_{
m red} pprox 0.12 - 0.15$ mag and $\sigma_{
m blue} pprox 0.25 - 0.35$ mag are the intrinsic dispersions in color.

### The Strateva et al. (2001) Boundary
Analyzing the color distribution of 147,000 SDSS galaxies, Strateva et al. (2001) demonstrated that the distribution of $(u - r)$ exhibits a prominent local minimum at -
$$(u - r)_{
m divide} = 2.22 	ext{ mag}$$
Galaxies with $(u - r) > 2.22$ are predominantly early-type galaxies (ellipticals and S0s), while galaxies with $(u - r) < 2.22$ are predominantly late-type spirals and irregulars.

---

## 2. Astrophysical Properties of the Red Sequence

The Red Sequence forms a narrow, linear locus in the CMD extending across bright absolute magnitudes ($M_r \lesssim -20$).

### Key Characteristics
1. **Passively Evolving Stellar Populations** - Composed of old stars ($	au_{
m age} \gtrsim 8 - 12$ Gyr) with negligible current star formation ($	ext{sSFR} \lesssim 10^{-12} 	ext{ yr}^{-1}$). Spectra feature strong metal absorption lines (Ca II H and K, Mg b, Fe 5270) and prominent 4000 \AA\ breaks ($D_n 4000 > 1.8$), with no detectable Balmer emission lines.
2. **Morphological Uniformity** - Spheroidal, bulge-dominated galaxies (E and S0) characterized by high Sersic indices ($n \gtrsim 3 - 4$) and high concentration indices ($C \equiv r_{90}/r_{50} > 2.6$).
3. **The Color-Magnitude Slope and Mass-Metallicity Relation** - The red sequence is not horizontal; it exhibits a systematic negative slope -
   $$rac{d(u - r)}{dM_r} pprox -0.08 	ext{ mag mag}^{-1}$$
   More luminous (more massive) early-type galaxies are systematically redder. This trend is driven almost entirely by metallicity rather than stellar age. Massive galaxies have deeper gravitational potential wells that efficiently retain supernova ejecta against galactic winds, achieving higher stellar metallicities ($[Z/H] > 0$) that induce strong line blanketing in the blue and ultraviolet.

---

## 3. Astrophysical Properties of the Blue Cloud

The Blue Cloud forms a broad, diffuse sequence occupying fainter and intermediate luminosities.

### Key Characteristics
1. **Active Ongoing Star Formation** - Contains young stellar populations dominated by hot, short-lived O and B stars ($M > 8 M_\odot$) that emit intense ultraviolet continuum flux and ionize surrounding hydrogen gas, producing prominent optical emission lines ($	ext{H}lpha$, $	ext{H}eta$, $[	ext{O III}]$, $[	ext{O II}]$).
2. **High Cold Gas Fractions** - Maintained by large reservoirs of atomic (H I) and molecular ($	ext{H}_2$) gas ($M_{
m gas} / M_* \sim 0.2 - 2.0$).
3. **Internal Dust Extinction** - The intrinsic color dispersion of the blue cloud ($\sigma_{
m blue} \sim 0.3$ mag) is substantially broader than that of the red sequence due to inclination-dependent dust attenuation. Edge-on spiral disks experience significant reddening, shifting them toward the red sequence even while actively star-forming.

---

## 4. The Transition Mass Scale

The relative fraction of galaxies residing in the red sequence versus the blue cloud shifts dramatically across a characteristic transition stellar mass -
$$M_{*, 
m trans} pprox 3 	imes 10^{10} M_\odot \quad (M_r pprox -20.5 	ext{ mag})$$
- For $M_* < M_{*, 
m trans}$, galaxies are overwhelmingly low-density, gas-rich, star-forming blue disks.
- For $M_* > M_{*, 
m trans}$, the population becomes overwhelmingly red, quiescent, concentrated spheroids.
This empirical boundary corresponds to a fundamental cosmological dark matter halo virial mass threshold $M_{
m halo} pprox 10^{12} M_\odot$. In halos below this threshold, cold gas accretes unimpeded along cosmic filaments (cold accretion mode), feeding steady star formation. In halos exceeding $10^{12} M_\odot$, infalling gas undergoes stable shock heating to the virial temperature ($T_{
m vir} \sim 10^6$ K), establishing a hot quasi-static halo where cooling is suppressed by radio-mode AGN feedback.

---

## 5. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - The Galaxy Color-Magnitude Diagram (CMD)
```text
  Optical Color (u - r) [mag]
   3.0 +----------------------------------------------------------------+
       |                                                                |
   2.5 |     RED SEQUENCE (Passive E/S0)       ..........               |
       |       \...............................          ..             |
       |        \                                          ..           |
   2.2 |---------\-------------------------------------------*----------| u-r = 2.22 Boundary
       |          \  GREEN VALLEY (Quenching Transition)      \         |
       |           \                                           \ Dust   |
   1.8 |            \        BLUE CLOUD (Star-Forming Disks)    v Vector|
       |             \         -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - |
   1.4 |              \ -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - |
       |                -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - |
   1.0 +----------------------------------------------------------------+
      -16         -18         -20         -22         -24
                          Absolute Magnitude M_r [mag] (Brighter -->)
  Key Features -
  - Red Sequence slope - d(u-r)/dM_r ~ -0.08 mag/mag (mass-metallicity relation).
  - Strateva dividing line at u-r = 2.22 mag.
  - Green Valley represents short transition timescale (tau ~ 1-1.5 Gyr).
```

---

## 6. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"Describe the color bimodality of galaxies, the properties of the red sequence and blue cloud, and the physical origin of the divide."*

1. **Draw the Color-Magnitude Diagram on the board** -
   - Plot $(u - r)$ on the vertical axis and $M_r$ on the horizontal axis.
   - Sketch the tight, slightly inclined Red Sequence at $(u - r) \sim 2.5$ and the broad Blue Cloud at $(u - r) \sim 1.4$.
   - Draw the dashed horizontal boundary at $(u - r) = 2.22$.

2. **Explain the physical drivers of each population** -
   - State clearly - *"The red sequence consists of passively evolving ellipticals and S0s. Its narrow dispersion reflects old stellar ages ($> 8$ Gyr), while its slope is driven by a mass-metallicity relation where deeper potentials retain more metals. The blue cloud consists of gas-rich spirals whose blue light is dominated by young OB stars."*

3. **Formulate the double Gaussian decomposition** -
   - Write on the board - $P(C \mid M_r) = f_{
m red} G_{
m red} + f_{
m blue} G_{
m blue}$.
   - Note that Baldry et al. (2004) derived independent Schechter luminosity functions for both components.

4. **Identify the cosmological transition mass** -
   - Write - $M_* \sim 3 	imes 10^{10} M_\odot$ corresponding to halo mass $M_{
m halo} \sim 10^{12} M_\odot$.
   - Conclude - *"Below this halo mass, gas accretes in cold filaments, sustaining the blue cloud. Above $10^{12} M_\odot$, the gas shock-heats to virial temperatures and AGN feedback halts cooling, quenching star formation and driving galaxies onto the red sequence."*

---

## 7. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part I - Galaxy Populations and Bimodality, pages 12-15).
  - `dispense_LF1_1_eng-1.pdf` (Color distributions, bimodality boundaries, pages 21-27).
  - `baldry2004_CMD.png`, `baldry2004_LF_color.png`, `strateva2001_bimodality.png`.
- **Seminal Literature** -
  - Strateva, I., et al. (2001, AJ, 122, 1861) - *Color Separation of Galaxy Types in the Sloan Digital Sky Survey*.
  - Baldry, I. K., et al. (2004, ApJ, 600, 681) - *Quantifying the Bimodal Color-Magnitude Distribution of Galaxies*.
  - Bell, E. F., et al. (2004, ApJ, 608, 752) - *Nearly Half of the Most Massive Galaxies Have Been Built Up since z = 1*.
- **Standard Textbooks** -
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 2 - Statistical Properties of Galaxies (pages 86-88).

---

## 8. Related Knowledge Base Notes

- [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html) - Comprehensive statistical decomposition and luminosity functions of the two families.
- [Green valley and quenching tracks](Green%20valley%20and%20quenching%20tracks.html) - Evolutionary paths and physical mechanisms driving galaxies across the valley.
- [Galaxy color, density and morphology](Galaxy%20color%2C%20density%20and%20morphology.html) - Dressler morphology-density relation and environmental quenching in clusters.
- [SDSS overview](SDSS%20overview.html) - Technical design and photometric filters of the Sloan Digital Sky Survey.
- [Faber-Jackson relation](Faber-Jackson%20relation.html) - Dynamical scaling relation for red sequence early-type galaxies.

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (11)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Color%20bimodality%20of%20galaxies.html" class="backlink-item">Color bimodality of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Color%20indices.html" class="backlink-item">Color indices</a></li>
    <li class="backlink-item-wrap"><a href="Eigenspectra%20and%20spectral%20types.html" class="backlink-item">Eigenspectra and spectral types</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20color%2C%20density%20and%20morphology.html" class="backlink-item">Galaxy color, density and morphology</a></li>
    <li class="backlink-item-wrap"><a href="Galaxy%20main%20sequence%20of%20star%20formation.html" class="backlink-item">Galaxy main sequence of star formation</a></li>
    <li class="backlink-item-wrap"><a href="Green%20valley%20and%20quenching%20tracks.html" class="backlink-item">Green valley and quenching tracks</a></li>
    <li class="backlink-item-wrap"><a href="PCA%20spectral%20classification%20of%20galaxies.html" class="backlink-item">PCA spectral classification of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Post-starburst%20galaxies.html" class="backlink-item">Post-starburst galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Quenching%20and%20passive%20galaxies%20at%20high%20z.html" class="backlink-item">Quenching and passive galaxies at high z</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Observational_Cosmology_MOC.html" class="backlink-item">Observational_Cosmology_MOC</a></li>
  </ul>
</div>

