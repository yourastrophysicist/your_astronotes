---
layout: "default"
title: "Color bimodality of galaxies"
---
# Color Bimodality of Galaxies

## 1. Empirical Discovery and Phenomenon

In extensive spectroscopic and photometric galaxy surveys such as SDSS and 2dFGRS (Strateva et al. 2001; Blanton et al. 2003; Baldry et al. 2004), the optical color distribution of galaxies does not follow a continuous single peak. Instead, it exhibits a distinct **color bimodality** dividing galaxies into two primary populations.

1. **The Red Sequence** - Composed of passive early-type galaxies (ellipticals and lenticulars S0) featuring old stellar populations, high metal enrichment, low cold-gas fractions, and high central concentration.
2. **The Blue Cloud** - Composed of star-forming late-type galaxies (spirals and irregulars) featuring ongoing star formation, abundant young OB stars, substantial cold gas reservoirs, and exponential disks.
3. **The Green Valley** - An underpopulated intermediate valley separating the two main populations.

---

## 2. Unbroken Mathematical Formulation - Double Gaussian Decomposition

At a fixed absolute magnitude $M_r$, the probability density distribution of galaxy color (such as SDSS $u - r$) is rigorously parameterized as a sum of two Gaussian functions (Baldry et al. 2004).

$$\boxed{p(u - r \mid M_r) = f_{\rm red}(M_r) \, \mathcal{N}(\mu_{\rm red}, \sigma_{\rm red}^2) + \left[1 - f_{\rm red}(M_r)\right] \, \mathcal{N}(\mu_{\rm blue}, \sigma_{\rm blue}^2)}$$

where the Gaussian probability density is.

$$\mathcal{N}(\mu, \sigma^2) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left( -\frac{(u - r - \mu)^2}{2\sigma^2} \right)$$

### Magnitude Dependence of the Peak Colors
The mean color of each sequence varies systematically with galaxy absolute luminosity $M_r$.

$$\mu_{\rm red}(M_r) \approx 2.45 - 0.08 \, (M_r + 20)$$

$$\mu_{\rm blue}(M_r) \approx 1.40 - 0.15 \, (M_r + 20)$$

- The slope of the red sequence ($d(u - r)/dM_r \approx -0.08$) reflects the **mass-metallicity relation**; more luminous ellipticals have deeper potential wells, retain more supernova ejecta, and achieve higher stellar metallicities, which shifts their colors redder via line blanketing.
- The blue cloud exhibits a steeper slope ($d(u - r)/dM_r \approx -0.15$) driven by both metallicity and decreasing specific star formation rate in more massive spirals.

### The Canonical Color and Morphology Delimiters
Statistical analysis by Strateva et al. (2001) established optimal boundary criteria.
- **Color Delimiter** - At $M_r \approx -20$, the minimum of the bimodal distribution sits at.
  $$u - r = 2.22$$
  Galaxies with $u - r > 2.22$ are classified as red sequence; those with $u - r < 2.22$ belong to the blue cloud.
- **Concentration Index Delimiter** - The Petrosian concentration index $C \equiv r_{90} / r_{50}$ (ratio of radii enclosing $90\%$ and $50\%$ of total Petrosian light) provides an orthogonal morphological separation.
  $$C = 2.6$$
  Galaxies with $C > 2.6$ are early-type spheroids (de Vaucouleurs profiles have $C \approx 3.3$); galaxies with $C < 2.6$ are late-type disks (exponential disks have $C \approx 2.3$).

---

## 3. The Characteristic Transition Stellar Mass ($M_* \approx 3 \times 10^{10} M_\odot$)

Kauffmann et al. (2003) and Baldry et al. (2004) identified a fundamental transition mass in the galaxy population.

$$M_{\rm trans} \approx 3 \times 10^{10} \, M_\odot \qquad (M_r \approx -20.5)$$

- **Sub-Transition Regime ($M_* < 3 \times 10^{10} M_\odot$)** - The galaxy census is dominated by the blue cloud. Galaxies have low stellar surface mass densities ($\mu_* < 3 \times 10^8 M_\odot\,\mathrm{kpc}^{-2}$), young mean stellar ages ($< 3\,\mathrm{Gyr}$), low concentrations ($C < 2.6$), and high cold-gas fractions.
- **Super-Transition Regime ($M_* > 3 \times 10^{10} M_\odot$)** - The galaxy census shifts rapidly to the red sequence. Galaxies possess high stellar surface mass densities ($\mu_* > 3 \times 10^8 M_\odot\,\mathrm{kpc}^{-2}$), old stellar populations ($> 8\,\mathrm{Gyr}$), high concentrations ($C > 2.6$), massive spheroidal bulges, and quenched star formation.

---

## 4. Physical Mechanisms - Why Is the Green Valley Underpopulated?

The presence of a clear minimum between the red and blue peaks implies that the transition across the green valley is **rapid** compared to the lifetime of galaxies. The transit timescale through the green valley must satisfy.

$$\tau_{\rm transit} \le 0.5 - 1.0 \, \mathrm{Gyr}$$

whereas galaxies reside in the blue cloud or red sequence for $5$ to $10\,\mathrm{Gyr}$.

Two physical pathways govern galaxy quenching.

### Fast Quenching Channel (Mergers and Quasar Winds)
- Major gas-rich mergers drive rapid gas inflow to the galactic center.
- Triggers a circumnuclear starburst accompanied by luminous AGN accretion.
- Quasar-driven energy and momentum winds sweep out the remaining gas on a dynamical timescale ($\tau \sim 10^8\,\mathrm{yr}$).
- Star formation halts abruptly. OB stars die within $\sim 10^8\,\mathrm{yr}$, shifting the integrated color rapidly across the green valley into the red sequence.

### Slow Quenching Channel (Halo Virial Shock Heating and Strangulation)
- When a host dark matter halo reaches the critical shock-heating threshold.
  $$M_{\rm halo} \approx 10^{12} \, M_\odot$$
  infalling gas is shock-heated at the virial radius to the halo virial temperature ($T_{\rm vir} \sim 10^6\,\mathrm{K}$), terminating cold-flow accretion (Dekel & Birnboim 2006).
- The galaxy cannot replenish its cold interstellar reservoir.
- It consumes its existing cold gas via normal star formation on a depletion timescale.
  $$\tau_{\rm depl} = \frac{M_{\rm gas}}{\mathrm{SFR}} \approx 1.5 - 3.0 \, \mathrm{Gyr}$$
- Star formation fades smoothly, moving the galaxy gradually across the green valley.

---

## 5. Blackboard Observational Blueprint

When sketching the color bimodality diagram on the blackboard.

```text
       u - r
         ^
     3.0 |                               ....... Red Sequence (E/S0)
         |                        ....'''        Slope ~ -0.08
     2.5 |                 ...''''
         |           ...'''
     2.2 + - - - - - - - - - - - - - - - - - - - Green Valley Divider (u - r = 2.22)
         |
     1.5 |                 =================     Blue Cloud (Spirals/Irr)
         |          ======-                      Slope ~ -0.15
     1.0 |   ======-
         |
     0.5 +===============+===============+===============+===============+
        -16             -18             -20             -22             -24
                               Absolute Magnitude M_r

         Bimodal Histogram at Fixed M_r = -20.
         Number
           ^
           |          * (Blue Peak)          * (Red Peak)
           |         / \                    / \
           |        /   \      _           /   \
           |       /     \____/ \_________/     \
           +======+========+===============+=====+=====> u - r
                          1.4             2.2   2.5
```

### Key Blackboard Features
- **Horizontal Axis** - Absolute magnitude $M_r$ from $-16$ to $-24$ (increasing luminosity to the right)
- **Vertical Axis** - Optical color $u - r$ from $0.5$ to $3.0$
- **Red Sequence Line** - Narrow strip at $u - r \approx 2.4 - 2.8$ with shallow slope $-0.08$
- **Blue Cloud Region** - Broader band at $u - r \approx 1.0 - 1.8$ with steeper slope $-0.15$
- **Green Valley Threshold** - Dashed horizontal line at $u - r = 2.22$
- **Luminosity Turnover** - Note that for $M_r < -21$, red sequence galaxies dominate; for $M_r > -19$, blue cloud galaxies dominate

---

## 6. Textbook and Course Citations

- **Prof. Alessandro Pizzella Course Dispensa**
  - File - `dispense_LF1_1_eng-1.pdf`
  - Chapter 3, Section 3.4 "Color Bimodality", pages 24-27 (SDSS double Gaussian fits, red sequence tilt, blue cloud, and green valley definition).
- **Student Synthesis Document**
  - File - `Astrophysics_of_Galaxies.tex`
  - Section 4.2 "Galaxy Color Distributions and Bimodality", pages 12-15 (Strateva delimiter, concentration index criteria, quenching timescales).
- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***
  - File - `Houjun Mo, Frank van den Bosch, Simon White - Galaxy Formation and Evolution (2010, Cambridge University Press) - libgen.li.pdf`
  - Chapter 2, Section 2.4.2 "The Bimodal Color Distribution", pages 86-89 (bimodality physics, transition mass, and halo mass threshold).
- **Primary Literature References**
  - Strateva, I., et al. 2001, AJ, 122, 1861.
  - Baldry, I. K., et al. 2004, ApJ, 600, 681.
  - Kauffmann, G., et al. 2003, MNRAS, 341, 54.

---

## 7. See Also

- [[Red sequence and blue cloud]]
- [[Green valley and quenching tracks]]
- [[PCA spectral classification of galaxies]]
- [[Stellar mass function]]
- [[Galaxy color, density and morphology]]
- [[SDSS overview]]
- [[Astrophysics_of_Galaxies_MOC]]

---

## 8. Astrophysics of Galaxies Figures and Slides (Prof. Alessandro Pizzella)

![baldry2004_LF_color.png](../../assets/images/baldry2004_LF_color.png)
*Separate luminosity functions for red sequence and blue cloud galaxies (Baldry et al. 2004).*

![strateva2001_bimodality.png](../../assets/images/strateva2001_bimodality.png)
*Color bimodality distribution in SDSS u - r from Strateva et al. (2001).*

![gal_lf3-04.png](../../assets/images/gal_lf3-04.png)
*Double Gaussian fitting to color distributions at fixed absolute magnitude.*

![gal_lf3-05.png](../../assets/images/gal_lf3-05.png)
*Transition magnitude - transition from blue-dominated to red-dominated at characteristic mass M* ~ 3 x 10^10 M_Sun.*

---

## 9. Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![gal_lf3-13.png](../../assets/images/gal_lf3-13.png)

![gal_lf3-14.png](../../assets/images/gal_lf3-14.png)

![gal_lf3-15.png](../../assets/images/gal_lf3-15.png)

![gal_lf3-16.png](../../assets/images/gal_lf3-16.png)

![gal_lf3-17.png](../../assets/images/gal_lf3-17.png)

![gal_lf3-18.png](../../assets/images/gal_lf3-18.png)

![gal_lf3-19.png](../../assets/images/gal_lf3-19.png)

![gal_lf3-20.png](../../assets/images/gal_lf3-20.png)

![gal_lf3-21.png](../../assets/images/gal_lf3-21.png)

![gal_lf3-22.png](../../assets/images/gal_lf3-22.png)



## Linked References

- [[Alpha-Fe enhancement]]
- [[CAS galaxy classification]]
- [[Color indices]]
- [[Early-type galaxy stellar populations]]
- [[Eigenspectra and spectral types]]
- [[Galaxy color, density and morphology]]
- [[Galaxy morphology vs physical properties]]
- [[Galaxy spectroscopy by type]]
- [[Green valley and quenching tracks]]
- [[LF by morphology and SED]]
- [[Madau plot]]
- [[PCA spectral classification of galaxies]]
- [[Petrosian radius]]
- [[Quenching and passive galaxies at high z]]
- [[Red sequence and blue cloud]]
- [[SDSS overview]]
- [[Stellar mass function]]
- [[Surveys to remember]]
- [[Astrophysics_of_Galaxies_MOC]]
- [[Observational_Cosmology_MOC]]


