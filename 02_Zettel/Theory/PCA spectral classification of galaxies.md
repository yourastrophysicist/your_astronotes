---
layout: default
title: "PCA spectral classification of galaxies"
---

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

- [Galaxy spectroscopy by type](../../02_Zettel/Theory/Galaxy spectroscopy by type.html)
- [Color bimodality of galaxies](../../02_Zettel/Theory/Color bimodality of galaxies.html)
- [Red sequence and blue cloud](../../02_Zettel/Theory/Red sequence and blue cloud.html)
- [Hubble morphological sequence](../../02_Zettel/Theory/Hubble morphological sequence.html)
- [CAS galaxy classification](../../02_Zettel/Theory/CAS galaxy classification.html)
- [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- [SDSS overview](../../02_Zettel/Theory/SDSS overview.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
