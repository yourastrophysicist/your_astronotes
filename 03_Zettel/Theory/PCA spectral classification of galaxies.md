---
layout: "default"
title: "PCA spectral classification of galaxies"
---
{% raw %}
**principal component analysis (PCA)** decomposes a set of galaxy spectra into orthogonal **eigenspectra** that capture the dominant variations across the population. used by Connolly 1995 + Madgwick 2002 + others to classify galaxies spectroscopically + provide compact spectral parametrisations.

## the technique

start with a large sample of galaxy spectra ($N$ spectra, each with $M$ wavelength channels). build the data matrix $X$ ($N \times M$). compute the covariance matrix + diagonalise:
$$X = U\,\Sigma\,V^T$$

with $U$ = eigenvectors of $XX^T$ (the **PC scores**, one per spectrum), $V$ = eigenvectors of $X^TX$ (the **eigenspectra**), $\Sigma$ = singular values (variance contributions).

each galaxy spectrum is then approximated by a linear combination of a few eigenspectra:
$$\text{spectrum}_i \approx \sum_{k=1}^K c_{ik}\,\text{eigenspectrum}_k$$

with $K$ much smaller than $M$ (typically $K = 3$ to $10$).

## the eigenspectra of galaxies

for SDSS galaxy spectra (Connolly + collaborators):
- **eigenspectrum 1**: average spectrum, dominated by stellar continuum + Balmer absorption.
- **eigenspectrum 2**: emission-line component (Balmer + forbidden lines).
- **eigenspectrum 3**: difference between old + young stellar populations.
- **higher eigenspectra**: dust, AGN signatures, etc.

so the **first 2-3 eigenvectors capture $\sim 90\%$** of all spectral variance across the galaxy population.

## the PC1-PC2 plane

plotting PC1 vs PC2 for galaxies:
- one branch: **passive ellipticals** with strong Ca II + Mg b absorption + no emission.
- another branch: **star-forming spirals** with $H\alpha$, $[OIII]$ emission.
- intermediate: **transitional** (post-starburst, green-valley galaxies).

so PCA naturally separates galaxy types into a continuum, alternative to Hubble-sequence visual classification.

## the spectral types

Madgwick 2002 used PCA on 2dF galaxy spectra to define **spectral types** $\eta$:
- $\eta = -1$: passive (early-type, no emission).
- $\eta = 0$: weak emission (S0/Sa).
- $\eta = +1$: moderate emission (Sb).
- $\eta = +2$: strong emission (Sc/Sd, starburst).

so $\eta$ is a continuous spectral classifier, alternative to morphology.

## the advantages

- **objective**: fixed by the data, not by visual inspection.
- **compact**: $K = 3$ to $10$ numbers describe each galaxy.
- **fast**: linear algebra, scales to millions of galaxies.
- **no assumed model**: doesn't pre-suppose particular SSPs or templates.

## the limitations

- **interpretation** is not always clear: each PC is a mathematical eigenvector, not necessarily a physical type.
- **non-linear** spectral variations (e.g. emission-line ratios) are poorly captured.
- **dust + redshift** corrections must be applied beforehand.

modern alternatives: **non-negative matrix factorisation (NMF)**, **t-SNE / UMAP** for visualisation, **autoencoders** for representation learning.

## the connection to other classifications

PCA spectral classification correlates with:
- **morphology**: passive ellipticals (PC1 high, PC2 low) match Hubble E + S0.
- **color**: red galaxies have PC1 high, blue galaxies PC1 low.
- **environment**: cluster cores have PC1-high galaxies (passive ellipticals).
- **mass**: more massive galaxies tend to be passive.

so PCA captures the same astrophysics as morphology + color, in a different basis.

## see also

- [Galaxy spectroscopy by type](./Galaxy%20spectroscopy%20by%20type.html)
- [Color bimodality of galaxies](./Color%20bimodality%20of%20galaxies.html)
- [Red sequence and blue cloud](./Red%20sequence%20and%20blue%20cloud.html)
- [Hubble morphological sequence](./Hubble%20morphological%20sequence.html)
- [CAS galaxy classification](./CAS%20galaxy%20classification.html)
- [Stellar population synthesis](./Stellar%20population%20synthesis.html)
- [SDSS overview](./SDSS%20overview.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![madgwick2002_PCA_a.png](../../assets/images/madgwick2002_PCA_a.png)
*First two principal components (eigenspectra PC1 and PC2) from Madgwick et al. (2002).*

![madgwick2002_PCA_b.png](../../assets/images/madgwick2002_PCA_b.png)
*Spectral classification parameter eta defined from PC1 and PC2 plane (Madgwick et al. 2002).*

![gal_pca-01.png](../../assets/images/gal_pca-01.png)
*Lecture 4: Principal Component Analysis (PCA) of Galaxy Spectra (Prof. Alessandro Pizzella).*

![gal_pca-02.png](../../assets/images/gal_pca-02.png)
*Dimensionality reduction: transforming high-dimensional spectra into orthogonal eigenspectra.*

![gal_pca-03.png](../../assets/images/gal_pca-03.png)
*Covariance matrix of galaxy fluxes across rest-frame wavelengths.*

![gal_pca-04.png](../../assets/images/gal_pca-04.png)
*First principal component (PC1): overall continuum slope and mean stellar population age.*

![gal_pca-05.png](../../assets/images/gal_pca-05.png)
*Second principal component (PC2): emission lines (H-alpha, [OII], [OIII]) tracing instantaneous SFR.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

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
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Eigenspectra%20and%20spectral%20types.html" class="backlink-item">Eigenspectra and spectral types</a></li>
  </ul>
</div>
