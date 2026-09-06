---
layout: default
title: "Eigenspectra and spectral types"
---

# eigenspectra and spectral types

up: [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md) · [PCA spectral classification of galaxies](../../02_Zettel/Theory/PCA spectral classification of galaxies.md)

## the method

Principal Component Analysis (PCA) applied to galaxy spectra (Connolly et al. 1995, Madgwick et al. 2002 on 2dFGRS) compresses a multi-thousand-pixel spectrum into a linear combination of orthogonal eigenspectra:

$$f(\lambda) = \mu(\lambda) + \sum_{i=1}^k a_i e_i(\lambda)$$

where $\mu(\lambda)$ is the mean spectrum of the sample, $e_i(\lambda)$ are the eigenvectors of the sample covariance matrix, and $a_i$ are the expansion coefficients.

## physical interpretation of the principal components

- **first eigenspectrum $e_1(\lambda)$**: represents the broad continuum slope and the strength of the $4000\text{ \AA}$ break ($D_n 4000$). high positive $a_1$ corresponds to early-type, passive, red stellar populations; negative $a_1$ corresponds to blue, star-forming galaxies.
- **second eigenspectrum $e_2(\lambda)$**: isolates the nebular emission lines ($[\text{O II}] \lambda 3727$, $\text{H}\beta$, $[\text{O III}] \lambda 5007$, $\text{H}\alpha$) relative to the Balmer absorption lines. it separates actively star-forming galaxies from post-starburst (E+A / K+A) galaxies.
- **higher components ($e_3, e_4$)**: capture residual dust reddening, metallicity variations, and peculiar emission features.

## the madgwick eta parameter

Madgwick et al. 2002 defined a one-dimensional spectral parameter $\eta$:

$$\eta \equiv a_1 \cos \theta + a_2 \sin \theta$$

with $\theta \approx 26.1^\circ$. $\eta$ correlates directly with the current-to-past average star formation rate ($\text{SFR}/\langle\text{SFR}\rangle$), providing an objective classification of galaxies along a continuous sequence from passive ellipticals (Type 1, $\eta < -1.4$) to starbursts (Type 4, $\eta > 3.5$).

## connections

- parent: [PCA spectral classification of galaxies](../../02_Zettel/Theory/PCA spectral classification of galaxies.md)
- application: [Galaxy SED fitting](../../02_Zettel/Theory/Galaxy SED fitting.md), [Color bimodality of galaxies](../../02_Zettel/Theory/Color bimodality of galaxies.md)
- survey context: [SDSS overview](../../02_Zettel/Theory/SDSS overview.md), [Surveys to remember](../../02_Zettel/Theory/Surveys to remember.md)
