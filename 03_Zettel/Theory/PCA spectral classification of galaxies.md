---
layout: "default"
title: "PCA spectral classification of galaxies"
---
# PCA Spectral Classification of Galaxies

## 1. Mathematical Principles of Spectral PCA

**Principal Component Analysis (PCA)** is an objective, model-independent mathematical technique that reduces the high dimensionality of galaxy spectra ($M \sim 10^3$ to $10^4$ wavelength channels) to a small set of orthogonal basis vectors called **eigenspectra** (Connolly et al. 1995; Folkes et al. 1999; Madgwick et al. 2002).

### Step 1 - Normalization and Matrix Formulation
Consider a flux-calibrated spectroscopic sample of $N$ galaxies, each observed at $M$ rest-frame wavelength bins $\lambda_j$ ($j = 1, \dots, M$). Each galaxy spectrum is represented by a vector $\mathbf{f}_i \in \mathbb{R}^M$.
Normalize each spectrum to unit mean flux across a standard continuum band.

$$\tilde{\mathbf{f}}_i = \frac{\mathbf{f}_i}{\frac{1}{M} \sum_{j=1}^M f_{ij}}$$

Compute the mean spectrum of the entire population.

$$\bar{\mathbf{f}} = \frac{1}{N} \sum_{i=1}^N \tilde{\mathbf{f}}_i$$

Construct the mean-subtracted residual matrix $\Delta X$ of size $N \times M$.

$$\Delta X_{ij} = \tilde{f}_{ij} - \bar{f}_j$$

### Step 2 - Covariance Matrix and Eigenvalue Problem
The sample covariance matrix $C$ of size $M \times M$ is defined by.

$$C = \frac{1}{N} \Delta X^T \Delta X$$

Explicitly, each matrix element is.

$$C_{jk} = \frac{1}{N} \sum_{i=1}^N (\tilde{f}_{ij} - \bar{f}_j)(\tilde{f}_{ik} - \bar{f}_k)$$

Because $C$ is a real symmetric positive semi-definite matrix, it can be diagonalized.

$$C \mathbf{e}_k = \lambda_k \mathbf{e}_k \qquad (k = 1, \dots, M)$$

where.
- $\mathbf{e}_k \in \mathbb{R}^M$ are the orthogonal eigenvectors (the **eigenspectra**)
- $\lambda_k \ge 0$ are the eigenvalues, representing the variance of the galaxy population accounted for by the $k$-th eigenspectrum

Sort the eigenvalues in descending order ($\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_M \ge 0$).

### Step 3 - Spectral Reconstruction and Projection Amplitudes
Any individual galaxy spectrum is reconstructed as a linear combination of the mean spectrum and the first $K$ principal eigenspectra ($K \ll M$, typically $K = 2$ or $3$).

$$\boxed{\mathbf{f}_i \approx \bar{\mathbf{f}} + \sum_{k=1}^K a_{ik} \mathbf{e}_k}$$

The expansion coefficients (the **PC scores** or projection amplitudes) are calculated via the scalar product.

$$a_{ik} = (\tilde{\mathbf{f}}_i - \bar{\mathbf{f}}) \cdot \mathbf{e}_k = \sum_{j=1}^M (\tilde{f}_{ij} - \bar{f}_j) e_{kj}$$

---

## 2. Physical Meaning of the Dominant Eigenspectra

In optical surveys (SDSS and 2dFGRS across $3700\,$\AA\ to $7000\,$\AA), the first two eigenspectra capture more than $85\%$ of the total variance across all galaxy types.

### Eigenspectrum 1 (PC1 - Stellar Age and Metallicity)
- Accounts for approximately $60\%$ to $70\%$ of the total population variance
- Characterized by the overall continuum slope and the $4000\,$\AA\ break ($D_n 4000$)
- Shows prominent stellar absorption lines including Ca II H&K ($\lambda\lambda 3934, 3968$), the G-band ($\lambda 4304$), and Mg b ($\lambda 5175$)
- Positive $a_1$ corresponds to an old, metal-rich, passive stellar population (elliptical galaxies); negative $a_1$ corresponds to a young, blue stellar continuum (late-type spiral disks)

### Eigenspectrum 2 (PC2 - Instantaneous Star Formation and Gas Ionization)
- Accounts for approximately $15\%$ to $20\%$ of the total population variance
- Shows strong emission lines in anti-phase to the continuum break, notably $[O\,II]\,\lambda 3727$, $H\beta\,\lambda 4861$, $[O\,III]\,\lambda 5007$, and $H\alpha\,\lambda 6563$
- Orthogonal to PC1, PC2 directly isolates the presence of warm ionized gas and massive OB stars, quantifying instantaneous star formation rate (SFR)

### Eigenspectrum 3 (PC3 - Post-Starburst and Dust)
- Accounts for approximately $3\%$ to $5\%$ of the variance
- Exhibits strong Balmer absorption lines ($H\delta, H\gamma$) typical of A-type stars without accompanying emission lines
- Diagnostic of post-starburst (E+A or K+A) galaxies where star formation was abruptly truncated $0.5$ to $1.5\,\mathrm{Gyr}$ ago

---

## 3. The 2dFGRS Classification Parameter $\eta$ (Madgwick et al. 2002)

In the two-dimensional space defined by the projection amplitudes $(a_1, a_2)$, galaxies form a continuous sequence tilted with respect to the coordinate axes.
Madgwick et al. (2002) defined a rotated spectral parameter $\eta$ by rotating the coordinate frame by an angle $\theta = -20^\circ$.

$$\boxed{\eta \equiv a_1 \cos(-20^\circ) + a_2 \sin(-20^\circ) \approx 0.940 \, a_1 - 0.342 \, a_2}$$

### Connection to the Birthrate Parameter
The parameter $\eta$ provides an objective, quantitative measurement of the **birthrate parameter** $b$.

$$b \equiv \frac{\mathrm{SFR}}{\langle \mathrm{SFR} \rangle}$$

which represents the ratio of current star formation rate to the past-average star formation rate over the Hubble time.

### The Four Spectral Classes
Based on $\eta$, the 2dFGRS sample is partitioned into four distinct physical types.
- **Type 1 ($\eta < -1.4$)** - Passive early-type galaxies (E and S0). Dominated by old stellar populations, zero nebular emission, $b < 0.1$, $H\alpha$ equivalent width $\mathrm{EW}(H\alpha) < 2\,$\AA.
- **Type 2 ($-1.4 \le \eta < 0.2$)** - Early-type spirals (Sa and Sb). Modest ongoing star formation, weak emission lines, $0.1 \le b < 0.5$.
- **Type 3 ($0.2 \le \eta < 3.5$)** - Late-type spirals (Sc and Sd). Vigorous star formation, prominent emission lines, $0.5 \le b < 1.5$.
- **Type 4 ($\eta \ge 3.5$)** - Starburst galaxies and irregulars. Dominated by recent massive bursts, intense emission lines, $b > 2.0$, $\mathrm{EW}(H\alpha) > 50\,$\AA.

---

## 4. Blackboard Observational Blueprint

When sketching the PCA spectral classification plane on the blackboard.

```text
       a_2 (Emission lines / SFR)
         ^
     1.0 |                * Type 4 (Starbursts)
         |               *
     0.5 |              *   Type 3 (Late Spirals Sc/Sd)
         |             *
     0.0 +============*==============================> a_1 (Continuum slope / Age)
         |           *   Type 2 (Early Spirals Sa/Sb)
    -0.5 |          *
         |         * Type 1 (Passive E/S0)
    -1.0 |        /
         +======-+======-+======-+======-+======-+
        -1.0   -0.5     0.0     0.5     1.0     1.5

         Rotated axis eta = a1*cos(-20 deg) + a2*sin(-20 deg)
         Tilted by theta = -20 degrees relative to horizontal
```

### Key Blackboard Features
- **Horizontal Axis** - Amplitude $a_1$ (PC1), increasing toward older, redder stellar populations
- **Vertical Axis** - Amplitude $a_2$ (PC2), increasing toward higher emission-line equivalent widths
- **Data Sequence** - Continuous diagonal distribution running from bottom-left (Type 1 passive) to top-right (Type 4 starburst)
- **Rotated Coordinate $\eta$** - Draw the tilted axis passing through the centroid at angle $\theta = -20^\circ$
- **Spectral Inset Sketches** - Draw PC1 showing a steep drop at the $4000\,$\AA\ break; draw PC2 showing emission spikes at $[O\,II]\,\lambda 3727$ and $H\alpha\,\lambda 6563$

---

## 5. Textbook and Course Citations

- **Prof. Alessandro Pizzella Course Dispensa**
  - File - `PCA_spectra-1.pdf`
  - Pages 1-20 (mathematical formulation of covariance matrix, eigenvalue solving, and SDSS eigenspectra).
  - File - `Astrophysic_gal_4_PCA-1.pdf`
  - Pages 1-15 (lecture slides on PCA dimensionality reduction, physical interpretations, and spectral types).
- **Student Synthesis Document**
  - File - `Astrophysics_of_Galaxies.tex`
  - Section 8.1 "PCA Spectral Classification", pages 35-37 (mathematical derivation, 2dFGRS $\eta$ definition, and birthrate parameter mapping).
- **Primary Literature References**
  - Connolly, A. J., et al. 1995, AJ, 110, 1071.
  - Madgwick, D. S., et al. 2002, MNRAS, 333, 133.
  - Folkes, S., et al. 1999, MNRAS, 308, 459.

---

## 6. See Also

- [Galaxy spectroscopy by type](Galaxy%20spectroscopy%20by%20type.html)
- [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html)
- [Red sequence and blue cloud](Red%20sequence%20and%20blue%20cloud.html)
- [CAS galaxy classification](CAS%20galaxy%20classification.html)
- [Hubble morphological sequence](Hubble%20morphological%20sequence.html)
- [SDSS overview](SDSS%20overview.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## 7. Astrophysics of Galaxies Figures and Slides (Prof. Alessandro Pizzella)

![madgwick2002_PCA_a.png](../../assets/images/madgwick2002_PCA_a.png)
*First two principal components (eigenspectra PC1 and PC2) from Madgwick et al. (2002).*

![madgwick2002_PCA_b.png](../../assets/images/madgwick2002_PCA_b.png)
*Spectral classification parameter eta defined from PC1 and PC2 plane (Madgwick et al. 2002).*

![gal_pca-01.png](../../assets/images/gal_pca-01.png)
*Lecture 4 - Principal Component Analysis (PCA) of Galaxy Spectra (Prof. Alessandro Pizzella).*

![gal_pca-02.png](../../assets/images/gal_pca-02.png)
*Dimensionality reduction - transforming high-dimensional spectra into orthogonal eigenspectra.*

![gal_pca-03.png](../../assets/images/gal_pca-03.png)
*Covariance matrix of galaxy fluxes across rest-frame wavelengths.*

![gal_pca-04.png](../../assets/images/gal_pca-04.png)
*First principal component (PC1) - overall continuum slope and mean stellar population age.*

![gal_pca-05.png](../../assets/images/gal_pca-05.png)
*Second principal component (PC2) - emission lines (H-alpha, [OII], [OIII]) tracing instantaneous SFR.*

---

## 8. Lecture Slides and Reference Figures (Prof. Alessandro Pizzella)

![gal_pca-06.png](../../assets/images/gal_pca-06.png)

![gal_pca-07.png](../../assets/images/gal_pca-07.png)

![gal_pca-08.png](../../assets/images/gal_pca-08.png)

![gal_pca-09.png](../../assets/images/gal_pca-09.png)

![gal_pca-10.png](../../assets/images/gal_pca-10.png)

![gal_pca-11.png](../../assets/images/gal_pca-11.png)

![gal_pca-12.png](../../assets/images/gal_pca-12.png)

![gal_pca-13.png](../../assets/images/gal_pca-13.png)

![gal_pca-14.png](../../assets/images/gal_pca-14.png)

![gal_pca-15.png](../../assets/images/gal_pca-15.png)

![gal_pca-16.png](../../assets/images/gal_pca-16.png)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="CAS%20galaxy%20classification.html" class="backlink-item">CAS galaxy classification</a></li>
    <li class="backlink-item-wrap"><a href="Color%20bimodality%20of%20galaxies.html" class="backlink-item">Color bimodality of galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Eigenspectra%20and%20spectral%20types.html" class="backlink-item">Eigenspectra and spectral types</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

