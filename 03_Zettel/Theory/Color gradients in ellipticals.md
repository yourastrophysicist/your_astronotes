---
layout: "default"
title: "Color gradients in ellipticals"
---
# Color gradients in ellipticals

Early-type galaxies (ellipticals and lenticulars) systematically exhibit smooth, radial color gradients across their stellar bodies, becoming progressively bluer with increasing Galactocentric radius. High-precision optical and near-infrared surface photometry (e.g. $U-R, B-R, V-K$) parameterizes these trends via the logarithmic gradient $\nabla_{\rm Color} \equiv \Delta\text{Color} / \Delta\log_{10} r$. Spectrophotometric modeling and integral field spectroscopy (SAURON, ATLAS3D) demonstrate that these color variations are not caused by differences in stellar age (the mean age profile is essentially flat across the galaxy), but are driven almost entirely by negative radial metallicity gradients ($\Delta[Z/H]/\Delta\log r \sim -0.2$ to $-0.4 \text{ dex decade}^{-1}$). The existence and magnitude of these gradients provide a critical fossil record of galaxy formation - classical dissipative monolithic collapse models predict steep metallicity gradients ($\sim -0.5 \text{ to } -1.0$), whereas repeated dissipationless (dry) major mergers dilute gradients via violent relaxation and mixing. The observed intermediate gradients provide compelling empirical support for the modern two-phase assembly paradigm.

---

## 1. Observational Photometry and Gradient Parameterization

### Definition of the Color Gradient
Surface photometry extracts the radial intensity profile in multiple photometric bands within concentric elliptical isophotes. The color gradient in a given color index (e.g. $B - R$) is defined as the slope of the radial color profile with respect to the logarithm of the semi-major axis distance $r$
$$\nabla_{(B - R)} \equiv \frac{d(B - R)}{d\log_{10} r} \approx \frac{\Delta(B - R)}{\Delta\log_{10} r}$$
measured outside the seeing-dominated central core ($r \ge 2''$) out to the effective radius ($r \approx R_e$) or the background noise limit ($r \sim 2 - 3 R_e$).

### Typical Empirical Values
Extensive photometric surveys of nearby early-type galaxies (Peletier et al. 1990; Bender, Burstein & Faber 1993; Tamura & Ohta 2003) establish universal negative gradients
- $\nabla_{(U - R)} \approx -0.16 \pm 0.04 \text{ mag decade}^{-1}$
- $\nabla_{(B - R)} \approx -0.09 \pm 0.02 \text{ mag decade}^{-1}$
- $\nabla_{(V - K)} \approx -0.16 \pm 0.03 \text{ mag decade}^{-1}$

The negative sign indicates that the galaxy center is redder, and the stellar population becomes bluer toward the outskirts. Furthermore, the gradient steepness correlates with the wavelength separation of the filter pair, being largest for color indices that span the $4000$ \AA\ Balmer break (e.g. $U - R$).

---

## 2. Decoupling Age and Metallicity Gradients

Because of Worthey's (1994) age-metallicity degeneracy ($\Delta\log\text{Age} \approx -1.5 \Delta\log Z$), a bluer color at larger radii could theoretically be explained by either
1. An age gradient (outskirts are younger than the center).
2. A metallicity gradient (outskirts are more metal-poor than the center).

### Mathematical Formalism of Multi-Color Decomposition
The total radial color gradient can be expressed as a linear combination of the underlying age and metallicity gradients
$$\nabla_{\rm Color} = \left( \frac{\partial \text{Color}}{\partial \log_{10} t} \right)_{[Z/H]} \nabla_{\rm Age} + \left( \frac{\partial \text{Color}}{\partial [Z/H]} \right)_t \nabla_{[Z/H]}$$
where $\nabla_{\rm Age} \equiv \frac{d\log_{10} t}{d\log_{10} r}$ and $\nabla_{[Z/H]} \equiv \frac{d[Z/H]}{d\log_{10} r}$.
Using optical colors alone, the partial derivatives are highly degenerate. However, by combining optical colors with near-infrared colors (such as $V - K$, which is predominantly sensitive to metallicity through red giant branch temperatures) or with Lick absorption line indices ($H\beta$ and $[MgFe]'$), the degeneracy is cleanly broken.

### Empirical Proof of Flat Age Gradients
Spatially resolved spectroscopy from SAURON, ATLAS3D, and MaNGA demonstrates that
$$\nabla_{\rm Age} \equiv \frac{\Delta\log_{10}(\text{Age})}{\Delta\log_{10} r} \approx 0.00 \pm 0.05 \text{ dex decade}^{-1}$$
The equivalent width of $H\beta$ absorption remains virtually constant from the core out to several effective radii. The mean stellar age at all radii is ancient ($10 - 12$ Gyr).
Consequently, setting $\nabla_{\rm Age} = 0$, the color gradient reduces entirely to
$$\nabla_{\rm Color} = \left( \frac{\partial \text{Color}}{\partial [Z/H]} \right) \nabla_{[Z/H]}$$

### Inferred Metallicity Gradients
Using evolutionary population synthesis models (Bruzual & Charlot 2003)
$$\frac{\partial(B - R)}{\partial [Z/H]} \approx 0.35 \text{ mag dex}^{-1}$$
$$\nabla_{[Z/H]} = \frac{\nabla_{(B - R)}}{\partial(B - R) / \partial [Z/H]} \approx \frac{-0.09}{0.35} \approx -0.26 \text{ dex decade}^{-1}$$
Across the full early-type population, the metallicity gradient spans
$$\nabla_{[Z/H]} \approx -0.20 \text{ to } -0.40 \text{ dex decade}^{-1}$$
Physical consequence - A typical giant elliptical galaxy drops in stellar metallicity by a factor of 2 (from super-solar $[Z/H] \approx +0.3$ in the central core down to sub-solar $[Z/H] \approx -0.2$ to $-0.3$ at $2 R_e$).

---

## 3. Physical Mechanisms and Cosmological Implications

The quantitative value of $\nabla_{[Z/H]}$ serves as a powerful test between competing models of galaxy formation.

```
+========================================================================================+
| Formation Model             | Predicted Metallicity Gradient | Physical Mixing Mechanism |
+========================================================================================+
| 1. Pure Monolithic Collapse | Steep - d[Z/H]/dlog r ~ -0.5 to -1.0 | Dissipative inward gas flow|
| 2. Major Dry Mergers (E+E)  | Flattened - d[Z/H]/dlog r ~ -0.1     | Violent relaxation mixing  |
| 3. Modern Two-Phase Assembly| Intermediate - d[Z/H]/dlog r ~ -0.3  | Dense core + dry accretion |
+========================================================================================+
```

### Model 1 - Pure Monolithic Dissipative Collapse
In Larson's (1974) and Carlberg's (1984) models, an isolated giant gas cloud collapses under self-gravity. Star formation occurs during the collapse, but enriched gas is funneled toward the deepest central potential well by dissipation. Galactic winds terminate star formation earlier in the outer, lower-density regions.
This produces an extremely steep predicted metallicity gradient
$$\nabla_{[Z/H], \rm monolithic} \approx -0.5 \text{ to } -1.0 \text{ dex decade}^{-1}$$
The observed gradients ($-0.2$ to $-0.4$) are significantly shallower than this prediction, ruling out pure monolithic collapse for the majority of massive ellipticals.

### Model 2 - Major Mergers and Violent Relaxation
White (1980) and Barnes (1992) performed N-body simulations of dissipationless (dry) major mergers between two identical early-type galaxies possessing pre-existing metallicity gradients.
During the collision, violent relaxation rearranges stellar orbital energies and redistributes stars across phase space. This orbital mixing systematically flattens pre-existing gradients by approximately a factor of two
$$\nabla_{[Z/H], \rm post-merger} \approx 0.5 \nabla_{[Z/H], \rm pre-merger}$$
Multiple major dry mergers would completely erase radial metallicity gradients ($\nabla_{[Z/H]} \to 0$).

### Model 3 - Modern Two-Phase Assembly Paradigm
The observed intermediate slope ($\nabla_{[Z/H]} \approx -0.3$) is the natural signature of two-phase assembly
1. Phase 1 ($z > 2$) - A gas-rich, dissipative starburst forms the central core ($r < 1$ kpc), producing a steep initial metallicity gradient and a deep potential well.
2. Phase 2 ($z < 2$): The galaxy accretes lower-mass, metal-poor satellite dwarf galaxies via dry minor mergers. The accreted stars are deposited preferentially at large radii ($r > R_e$), naturally creating a sub-solar outer halo while preserving the ancient stellar age and flattening the gradient to its observed value.

---

## 4. Blackboard Blueprint and Observational Graph Literacy

```
             RADIAL SURFACE PHOTOMETRY AND COLOR GRADIENT IN ELLIPTICALS
   mu_B - mu_R (Color mag)
     +1.8 +
          |   (Red Core - [Z/H] ~ +0.3)
     +1.7 +---[ * ]
          |        \
     +1.6 +         \   Linear Gradient - d(B-R)/dlog r ~ -0.10 mag/decade
          |          \
     +1.5 +           \
          |            \
     +1.4 +             \
          |              \
     +1.3 +               \   (Bluer Outskirts - [Z/H] ~ -0.2)
          |                \----------------[ * ]
     +1.2 +
          +===+===========+==============+==============+==============+
             0.1         0.2            0.5            1.0            2.0
                                  Radius r / R_e

             MULTI-COLOR DECOUPLING - (V - K) VS (B - R)
   (V - K) (mag)
     +3.5 +                                    [Age = 12 Gyr]
          |                              .====*=====*=====* [Z/H] = +0.4
     +3.2 +                        .===='    /     /     /
          |                  .===='         /     /     /
     +2.9 +            .===='              /     /     /  [Z/H] = 0.0
          |      .===='                   /     /     /
     +2.6 +====='                        /     /     /
          |                             *=====*=====* [Z/H] = -0.4
     +2.3 +                        [Age = 3 Gyr]
          +===+===========+==============+==============+==============+
             1.2         1.4            1.6            1.8            2.0
                                    (B - R) (mag)
```

### Blackboard Presentation Script for the Oral Examination
1. Draw the radial color profile $\mu_B - \mu_R$ versus $\log(r/R_e)$ on the blackboard. Show that it is linear over the range $0.1 R_e \le r \le 2 R_e$ with a negative slope $\Delta(B-R)/\Delta\log r \approx -0.09$ mag/decade.
2. Emphasize that early-type galaxies are red in the center and become progressively bluer toward the outskirts.
3. Write down the master decomposition equation $\nabla_{\rm Color} = \frac{\partial \text{Color}}{\partial \log t} \nabla_{\rm Age} + \frac{\partial \text{Color}}{\partial [Z/H]} \nabla_{[Z/H]}$.
4. State that spectroscopic IFU observations prove that age gradients are zero ($\nabla_{\rm Age} \approx 0$).
5. Divide the color gradient by $\partial\text{Color}/\partial[Z/H] \approx 0.35$ to derive the true physical metallicity gradient $\nabla_{[Z/H]} \approx -0.25$ to $-0.35$ dex/decade.
6. Compare the three formation theories - monolithic collapse predicts slopes that are too steep ($\sim -0.8$), major mergers predict flat slopes ($\sim 0$), and the two-phase assembly model correctly matches the observed slope of $-0.3$ by depositing low-metallicity satellite stars into the outer envelope.

---

## 5. Exact Textbook and Literature Provenance

- Course Lecture Slides
  - `gal_sre-37..52` - Radial color gradients in early-type galaxies, metallicity versus age drivers, and multi-color diagrams.
- James Binney & Michael Merrifield, *Galactic Astronomy* (1998)
  - Chapter 4 - The Morphology of Galaxies (pages 193-194) - Detailed observational properties of color gradients in ellipticals.
- Houjun Mo, Frank van den Bosch, Simon White, *Galaxy Formation and Evolution* (2010)
  - Chapter 13 - Elliptical Galaxies (pages 628-634) - Metallicity gradients and merging histories.
- Primary Literature
  - Peletier et al. (1990, AJ 100, 1091) - *Color gradients in early-type galaxies*.
  - Tamura & Ohta (2003, AJ 126, 706) - *Color Gradients in Early-Type Galaxies in the Hubble Deep Field North*.
  - Worthey (1994, ApJS 95, 107) - *Comprehensive Stellar Population Models and the Age-Metallicity Degeneracy*.
  - White (1980, MNRAS 191, 1P) - *The flattening of elliptical galaxies by mergers*.

---

## 6. Cross-References and Related Notes

- [[Early-type galaxy stellar populations]] - Lick indices, downsizing, and IMF
- [[Alpha-Fe enhancement]] - Chemical evolution and supernova yields
- [[Fundamental plane of ellipticals]] - Virial scaling and M/L tilt
- [[De Vaucouleurs and exponential profiles]] - Spheroid surface brightness profiles
- [[Astrophysics_of_Galaxies_MOC]] - Master Map of Content for course

---

## 7. Course Slides and Figures

![gal_sre-37.png](../../assets/images/gal_sre-37.png)
*Figure 1 - Radial color profiles across elliptical galaxies in U, B, V, R, I filters.*

![gal_sre-42.png](../../assets/images/gal_sre-42.png)
*Figure 2 - Multi-color diagnostic diagrams separating age and metallicity gradients.*

![gal_sre-48.png](../../assets/images/gal_sre-48.png)
*Figure 3 - Simulation of gradient flattening during major and minor merger encounters.*



## Linked References

- [[Alpha-Fe enhancement]]
- [[Early-type galaxy stellar populations]]
- [[Astrophysics_of_Galaxies_MOC]]


