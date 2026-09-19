---
layout: "default"
title: "Eigenspectra and spectral types"
tags: ""
---
# Eigenspectra and Objective Spectral Types

Traditional galaxy spectral classification relied on visual inspection of prominent absorption and emission lines, an approach prone to subjective bias and inadequate for modern multi-million galaxy redshift surveys. To achieve an objective, automated, and mathematically rigorous classification, Principal Component Analysis (PCA) is applied to rest-frame optical galaxy spectra (Connolly et al. 1995, Madgwick et al. 2002). By diagonalizing the spectral flux covariance matrix, PCA extracts orthogonal basis vectors known as **eigenspectra**. In the Two-Degree Field Galaxy Redshift Survey (2dFGRS), Madgwick et al. (2002) compressed galaxy spectra into a single continuous parameter $\eta$, which objectively classifies galaxies from passive early-type systems to intense starbursts and correlates directly with the physical star formation birthrate parameter $b$.

---

## 1. Mathematical Formulation of Spectral PCA

Consider a sample of $N$ galaxy spectra, each sampled uniformly across $M$ wavelength pixels $\lambda_j$ ($j = 1, \dots, M$). Let $f_i(\lambda_j)$ be the rest-frame flux of galaxy $i$, normalized such that total flux is unity -
$$\sum_{j=1}^M f_i(\lambda_j) = 1$$
The mean spectrum across the entire ensemble is -
$$\bar{f}(\lambda_j) = \frac{1}{N} \sum_{i=1}^N f_i(\lambda_j)$$

### The Spectral Covariance Matrix
Subtracting the mean spectrum defines the flux perturbation matrix $\Delta f_i(\lambda_j) \equiv f_i(\lambda_j) - \bar{f}(\lambda_j)$. The $M 	imes M$ spectral covariance matrix $\mathbf{C}$ is -
$$C_{jk} = \frac{1}{N} \sum_{i=1}^N \Delta f_i(\lambda_j) \Delta f_i(\lambda_k)$$
Because $\mathbf{C}$ is real and symmetric ($C_{jk} = C_{kj}$), the Spectral Theorem guarantees that it can be diagonalized into $M$ orthogonal eigenvectors $\vec{e}_k$ with non-negative eigenvalues $\lambda_k$ -
$$\mathbf{C} \vec{e}_k = \lambda_k \vec{e}_k$$
$$\vec{e}_j \cdot \vec{e}_k = \sum_{m=1}^M e_j(\lambda_m) e_k(\lambda_m) = \delta_{jk}$$
The eigenvectors $e_k(\lambda)$ are the **eigenspectra**, and the eigenvalues $\lambda_k$ represent the variance accounted for by each component, arranged in descending order ($\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_M$).

### Spectral Expansion and Projection Coefficients
Any galaxy spectrum $f_i(\lambda)$ is expanded exactly as -
$$f_i(\lambda) = \bar{f}(\lambda) + \sum_{k=1}^M a_{ik} e_k(\lambda)$$
where the projection coefficients (eigenspectrum scores) $a_{ik}$ are computed via inner product -
$$a_{ik} = \sum_{j=1}^M \left[ f_i(\lambda_j) - \bar{f}(\lambda_j) 
ight] e_k(\lambda_j)$$

---

## 2. Physical Interpretation of the Primary Eigenspectra

In the 2dFGRS analysis of over 170,000 galaxy spectra in the rest-frame wavelength interval $3700 - 4150$ \AA\ (Madgwick et al. 2002), the first two eigenspectra account for over 61% of the total spectral variance -

### Eigenspectrum 1 ($e_1(\lambda)$, 49.6% of Variance) - Mean Stellar Age
- **Mathematical Form** - A smooth, monotonically sloping continuum curve with a sharp discontinuity across the 4000 \AA\ break ($D_n 4000$).
- **Astrophysical Meaning** - Represents the continuum color and stellar age. A positive coefficient $a_1 > 0$ indicates a red continuum with strong metal absorption lines (Ca II H and K, G-band), characteristic of old, passively evolving stellar populations. A negative $a_1 < 0$ indicates a hot blue continuum dominated by young OB stars.

### Eigenspectrum 2 ($e_2(\lambda)$, 11.6% of Variance) - Current Star Formation
- **Mathematical Form** - Dominated by sharp, narrow nebular emission features, primarily $[\text{O II}]\ \lambda 3727$ and the higher-order Balmer lines ($\text{H}\delta, \text{H}\gamma, \text{H}\beta$), superimposed with opposite sign on stellar absorption profiles.
- **Astrophysical Meaning** - Represents the instantaneous star formation rate. Positive $a_2 > 0$ indicates strong nebular line emission from gas ionized by massive young stars.

---

## 3. The 2dFGRS $\eta$ Parameter and Objective Spectral Types

In a scatter plot of the second principal component $a_2$ versus the first principal component $a_1$, galaxies form a continuous sequence extending from passive early-type galaxies to starburst systems. Because the sequence is inclined relative to the $a_1$ axis, Madgwick et al. (2002) performed an orthogonal coordinate rotation by an angle $	heta \approx -20^\circ$ to define a single master spectral parameter $\eta$ -
$$\eta \equiv a_1 \cos	heta + a_2 \sin	heta = a_1 \cos(-20^\circ) + a_2 \sin(-20^\circ) \approx 0.940 \, a_1 - 0.342 \, a_2$$
The orthogonal coordinate $\zeta \equiv -a_1 \sin	heta + a_2 \cos	heta$ has small intrinsic dispersion and reflects secondary effects such as dust extinction and stellar metallicity.

### The Four Objective Spectral Types
Based on the distribution of $\eta$, galaxies are classified into four discrete, physically motivated spectral types -

| Spectral Class | $\eta$ Range | Dominant Morphology | Physical Characteristics |
|---|---|---|---|
| **Type 1** | $\eta < -1.4$ | Elliptical (E) and Lenticular (S0) | Passive, old stellar populations; zero emission lines; strong Ca II and 4000 \AA\ break. |
| **Type 2** | $-1.4 \le \eta < 1.1$ | Early-type Spirals (Sa / Sb) | Intermediate star formation; weak $[\text{O II}]$ and $\text{H}\alpha$ emission. |
| **Type 3** | $1.1 \le \eta < 3.5$ | Late-type Spirals (Sc / Sd) | Active star formation; prominent Balmer and forbidden emission lines. |
| **Type 4** | $\eta \ge 3.5$ | Starburst Galaxies and Irregulars | Extreme starbursting systems; high emission-line equivalent widths. |

### Correlation with the Birthrate Parameter $b$
The $\eta$ parameter correlates directly with the stellar birthrate parameter $b$, defined as the ratio of current star formation rate to the past-average star formation rate ($b \equiv \text{SFR} / \langle \text{SFR} 
angle_{\mathrm{past}}$) -
$$\ln b \approx 0.74 \, \eta - 0.88$$
- For Type 1 passive galaxies ($\eta < -1.4$), $b \approx 0$, confirming that current star formation is negligible.
- For Type 4 starburst galaxies ($\eta > 3.5$), $b \gg 1$, indicating that the galaxy is producing stars at an order of magnitude above its historical average rate.

---

## 4. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - The PCA Spectral Plane $(a_1, a_2)$ and the Rotated $\eta$ Classification
```text
  Principal Component a_2 (Emission Line Strength)
   +2.0 +----------------------------------------------------------------+
        |                                                                |
   +1.5 |                                      Type 4 (Starburst)        |
        |                                            * * *               |
   +1.0 |                                       * * * * *                |
        |                           Type 3    * * * *                    |
   +0.5 |                         (Late-Type) * *                        |
        |                       * * * * *   /                            |
    0.0 |           Type 2    * * * * *    /                             |
        |         (Early-Type) * * *      /                              |
   -0.5 |               * * *            /  Rotated eta Axis             |
        |    Type 1   * * *             /   (theta = -20 deg)            |
   -1.0 |   (Passive) *                /                                 |
        |     * *                     /                                  |
   -1.5 +----------------------------+-----------------------------------+
       -2.0        -1.0             0.0            +1.0            +2.0
              Principal Component a_1 (Continuum Redness / Age)
```

---

## 5. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"How do we classify galaxy spectra using Principal Component Analysis, and what is the physical meaning of the eigenspectra and the $\eta$ parameter?"*

1. **State the mathematical foundation of spectral PCA** -
   - Write on the board - $C_{jk} = \frac{1}{N} \sum (f_i(\lambda_j) - \bar{f})(f_i(\lambda_k) - \bar{f})$.
   - Explain - *"Diagonalizing the spectral covariance matrix yields orthonormal eigenspectra $e_k(\lambda)$. Any galaxy spectrum is expanded as $f(\lambda) = \bar{f}(\lambda) + \sum a_k e_k(\lambda)$."*

2. **Describe the physical meaning of the first two components** -
   - Explain - *"Eigenspectrum 1 accounts for ~50% of the variance and traces the 4000 \AA\ break and continuum slope, measuring mean stellar age. Eigenspectrum 2 accounts for ~12% of the variance and features emission lines ($[\text{O II}], \text{H}\beta$), measuring current star formation rate."*

3. **Define the $\eta$ parameter on the blackboard** -
   - Write - $\eta \equiv a_1 \cos(-20^\circ) + a_2 \sin(-20^\circ) \approx 0.94 a_1 - 0.34 a_2$.
   - Draw the rotated $(a_1, a_2)$ diagram and indicate the 4 spectral types from Type 1 (passive, $\eta < -1.4$) to Type 4 (starburst, $\eta > 3.5$).
   - Conclude - *"Madgwick et al. proved that $\eta$ maps linearly to $\ln b$, where $b = \text{SFR} / \langle \text{SFR} 
angle_{\mathrm{past}}$, providing a continuous physical clock of galaxy star formation history."*

---

## 6. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part IV - PCA of Spectra, pages 35-37).
  - `PCA_spectra-1.pdf` (Complete reprint of Madgwick et al. 2002, pages 1-14).
  - `gal_pca-01..31` (Eigenspectra decomposition, correlation diagrams, and spectral types).
  - `madgwick2002_PCA_a.png`, `madgwick2002_PCA_b.png`.
- **Seminal Literature** -
  - Madgwick, D. S., et al. (2002, MNRAS, 333, 133) - *The 2dF Galaxy Redshift Survey - spectral types and galaxy environment*.
  - Connolly, A. J., et al. (1995, AJ, 110, 1071) - *Slicing the Redshift Space - Spectral Classification of Galaxies*.
  - Folkes, S., et al. (1999, MNRAS, 308, 459) - *The 2dF Galaxy Redshift Survey - spectral classification and luminosity function*.

---

## 7. Related Knowledge Base Notes

- [PCA spectral classification of galaxies](PCA%20spectral%20classification%20of%20galaxies.html) - Mathematical formalism of covariance diagonalization and eigenspectra.
- [Color bimodality of galaxies](Color%20bimodality%20of%20galaxies.html) - Relationship between spectral types and the optical color bimodality.
- [Red sequence and blue cloud](Red%20sequence%20and%20blue%20cloud.html) - Correspondence between Type 1 spectra and the red sequence.
- [CAS galaxy classification](CAS%20galaxy%20classification.html) - Quantitative morphological classification complementary to PCA spectral types.
- [Galaxy color, density and morphology](Galaxy%20color%2C%20density%20and%20morphology.html) - Environmental variation of spectral types in clusters.

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Quenching%20and%20passive%20galaxies%20at%20high%20z.html" class="backlink-item">Quenching and passive galaxies at high z</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

