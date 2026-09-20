---
layout: "default"
title: "CAS galaxy classification"
---
# CAS Galaxy Classification

## 1. Quantitative Non-Parametric Morphology

Traditional visual morphological classification (such as the Hubble tuning fork) is subjective, dependent on observer experience, and increasingly unreliable at high redshifts ($z > 0.5$) where cosmological surface brightness dimming ($\propto [1+z]^4$) and morphological bandpass shifting degrade visual details.

The **CAS (Concentration, Asymmetry, Smoothness)** system (Bershady et al. 2000; Conselice 2003) provides an objective, fully automated, non-parametric classification scheme computed directly from digital astronomical images.

---

## 2. Unbroken Mathematical Definitions of the CAS Parameters

### Concentration Index ($C$)
The concentration index measures the degree to which light is concentrated toward the galactic center compared to its outer envelope.

$$\boxed{C = 5 \log_{10}\left( \frac{r_{80}}{r_{20}} \right)}$$

where $r_{80}$ and $r_{20}$ are the curve-of-growth radii enclosing $80\%$ and $20\%$ of the total galaxy light within a standardized aperture (typically the Petrosian radius $r(\eta = 0.2)$ or $1.5 r_{\rm petro}$).
- For an exponential disk profile ($I(r) = I_0 e^{-r/h}$), analytical integration gives.
  $$C \approx 2.7$$
- For a de Vaucouleurs spheroidal profile ($I(r) = I_e 10^{-3.33[(r/r_e)^{1/4}-1]}$), numerical integration yields.
  $$C \approx 5.2$$
- General Sersic profiles show a monotonic rise from $C \approx 2.3$ at $n=0.5$ to $C \approx 5.5$ at $n=6$.
- Observed galaxy populations.
  - Ellipticals and lenticulars - $C \approx 3.8 - 5.0$
  - Early-type spirals (Sa and Sb) - $C \approx 3.0 - 3.8$
  - Late-type spirals (Sc and Sd) - $C \approx 2.5 - 3.0$
  - Dwarf irregulars - $C < 2.5$

### Asymmetry Index ($A$)
The asymmetry index measures the fractional light variance when the galaxy image is rotated by $180^\circ$ about its center.

$$\boxed{A = \frac{\sum_{i,j} |I(i,j) - I_{180}(i,j)|}{2 \sum_{i,j} |I(i,j)|} - B_{180}}$$

where.
- $I(i,j)$ is the flux in pixel $(i,j)$ within the galaxy aperture
- $I_{180}(i,j)$ is the flux at the corresponding pixel in the image rotated by $180^\circ$
- The factor of $2$ in the denominator accounts for the double counting of residuals between original and rotated pixels
- $B_{180}$ is the background noise correction evaluated in a blank sky region of equal pixel area.
  $$B_{180} = \frac{\sum_{i,j} |B(i,j) - B_{180}(i,j)|}{2 \sum_{i,j} |I(i,j)|}$$
  This subtraction ensures that sky background shot noise does not artificially inflate the measured asymmetry.

#### Critical Rule for the Rotation Center
The center of rotation $(x_0, y_0)$ is **NOT** chosen as the photometric centroid or the brightest pixel.
Instead, it is uniquely determined by an iterative optimization algorithm that **minimizes** the value of $A$.

$$\left( \frac{\partial A}{\partial x_0} \right) = 0, \qquad \left( \frac{\partial A}{\partial y_0} \right) = 0$$

Centering on the photometric centroid falsely inflates $A$ for lopsided or interacting galaxies, whereas center minimization guarantees a self-consistent physical measurement.
- Observed galaxy values.
  - Relaxed ellipticals - $A < 0.05$
  - Normal spirals - $A \approx 0.05 - 0.20$
  - Mergers and interacting galaxies - $A > 0.35$

### Smoothness or Clumpiness Index ($S$)
The smoothness (or clumpiness) index measures the fraction of light located in high-frequency, clumpy sub-structures (such as star-forming knots and HII regions) relative to the diffuse background.

$$\boxed{S = \frac{\sum_{i,j} |I(i,j) - I_S(i,j)|}{\sum_{i,j} |I(i,j)|} - B_S}$$

where.
- $I_S(i,j)$ is the galaxy image smoothed by a 2D Gaussian or boxcar filter with a characteristic scale length $\sigma = 0.2 \, r(\eta = 0.2)$
- $B_S$ is the background smoothness correction measured in a blank sky patch.
  $$B_S = \frac{\sum_{i,j} |B(i,j) - B_S(i,j)|}{\sum_{i,j} |I(i,j)|}$$
- To prevent the steep central light profile of bulges from artificially dominating the residual, pixels within the inner radius $r < \sigma$ are masked out of the summation.
- Observed galaxy values.
  - Ellipticals and passive galaxies - $S \le 0.02$
  - Normal spiral disks - $S \approx 0.05 - 0.20$
  - Starburst galaxies - $S > 0.30$

---

## 3. The Morphological Parameter Space and Merger Identification

The three parameters form an orthogonal 3D parameter volume $(C, A, S)$. Projecting into 2D diagrams separates galaxies into distinct morphological classes.

### The Concentration Versus Asymmetry Plane ($C - A$)
- **Top-Left Region (High $C$, Low $A$)** - Occupied exclusively by early-type galaxies (ellipticals and S0).
- **Central Region (Moderate $C$, Moderate $A$)** - Occupied by regular disk galaxies (spiral sequence Sa to Sc).
- **Bottom-Center Region (Low $C$, Moderate $A$)** - Occupied by diffuse dwarf irregulars.
- **Far-Right Region (High $A$)** - Major mergers and collisional galaxies.

### The Major Merger Selection Gate
Conselice (2003) demonstrated that dynamically coalescing major mergers are uniquely selected by the criteria.

$$\boxed{A > 0.35 \qquad \text{and} \qquad A > S}$$

Major mergers exhibit large structural disturbances across both diffuse envelopes and high-frequency knots. This quantitative boundary enables automated identification of galaxy mergers across deep cosmic fields (such as HST CANDELS and JWST COSMOS-Web) up to $z \sim 3$.

---

## 4. Blackboard Observational Blueprint

When sketching the CAS classification diagrams on the blackboard.

```text
       Concentration C
         ^
     5.0 |  [Ellipticals / S0]
         |   High C, Low A
     4.0 |
         |          [Early Spirals Sa/Sb]
     3.0 |
         |                 [Late Spirals Sc/Sd]
     2.0 |  [Dwarf Irr]                               [MAJOR MERGERS]
         |                                             A > 0.35
     1.0 +===============+===============+===============+===============+
         0.0            0.1             0.2             0.3             0.4
                                    Asymmetry A

       Smoothness S
         ^
     0.4 |                    * Starbursts
         |
     0.2 |        * Spirals
         |
     0.0 | * Ellipticals                   [Mergers with A > 0.35 & A > S]
         +===============+===============+===============+===============+
         0.0            0.1             0.2             0.3             0.4
                                    Asymmetry A
```

### Key Blackboard Features
- **Top Panel ($C$ vs $A$)** - Vertical axis $C$ from $1.0$ to $5.5$; horizontal axis $A$ from $0.0$ to $0.5$. Show early-types at top-left ($C \sim 4.5, A \sim 0.03$), spirals descending diagonally, and mergers isolated on the right ($A > 0.35$).
- **Bottom Panel ($S$ vs $A$)** - Vertical axis $S$ from $0.0$ to $0.5$; horizontal axis $A$ from $0.0$ to $0.5$. Highlight the diagonal dividing line $A = S$ and the vertical boundary $A = 0.35$.
- **Background Correction Note** - Explicitly write $B_{180}$ and $B_S$ formulas on the blackboard, emphasizing that sky noise must be subtracted.
- **Centering Rule** - Emphasize that $(x_0, y_0)$ minimizes $A$, which is an exam question favorite.

---

## 5. Textbook and Course Citations

- **Prof. Alessandro Pizzella Course Dispensa**
  - File - `Concentraz_Conselice-1.pdf`
  - Pages 1-25 (complete mathematical definitions of $C$, $A$, and $S$, background subtraction terms, and merger diagnostics).
- **Student Synthesis Document**
  - File - `Astrophysics_of_Galaxies.tex`
  - Section 6.2 "The CAS Morphology System", pages 27-30 (equations for $C$, $A$, $S$, center minimization, Petrosian radius scaling).
- **Primary Literature References**
  - Conselice, C. J. 2003, ApJS, 147, 1.
  - Bershady, M. A., Jangren, A., & Conselice, C. J. 2000, AJ, 119, 2645.
  - Lotz, J. M., Primack, J., & Madau, P. 2004, AJ, 128, 163 (Gini-M20 extension).

---

## 6. See Also

- [[Sersic profile]]
- [[Petrosian radius]]
- [[De Vaucouleurs and exponential profiles]]
- [[Hubble morphological sequence]]
- [[Color bimodality of galaxies]]
- [[PCA spectral classification of galaxies]]
- [[Astrophysics_of_Galaxies_MOC]]

---

## 7. Astrophysics of Galaxies Figures and Slides (Prof. Alessandro Pizzella)

![conselice2003_CAS_diagram.png](../../assets/images/conselice2003_CAS_diagram.png)
*The CAS parameter space from Conselice (2003) - Asymmetry vs Concentration for galaxy types.*

![conselice2003_A_vs_S.png](../../assets/images/conselice2003_A_vs_S.png)
*Asymmetry vs Smoothness/Clumpiness diagram separating normal galaxies from starbursts and mergers.*

![conselice2003_C_vs_type.png](../../assets/images/conselice2003_C_vs_type.png)
*Concentration index C as a function of visually classified Hubble type.*

---

## 8. Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![gal_morph-31.png](../../assets/images/gal_morph-31.png)

![gal_morph-32.png](../../assets/images/gal_morph-32.png)

![gal_morph-33.png](../../assets/images/gal_morph-33.png)

![gal_morph-34.png](../../assets/images/gal_morph-34.png)

![gal_morph-35.png](../../assets/images/gal_morph-35.png)

![gal_morph-36.png](../../assets/images/gal_morph-36.png)

![gal_morph-37.png](../../assets/images/gal_morph-37.png)

![gal_morph-38.png](../../assets/images/gal_morph-38.png)

![gal_morph-39.png](../../assets/images/gal_morph-39.png)



## Linked References

- [[Deep-field surveys]]
- [[Eigenspectra and spectral types]]
- [[Galaxy morphology vs physical properties]]
- [[Hubble morphological sequence]]
- [[PCA spectral classification of galaxies]]
- [[Petrosian radius]]
- [[SDSS overview]]
- [[Sersic profile]]
- [[Astrophysics_of_Galaxies_MOC]]


