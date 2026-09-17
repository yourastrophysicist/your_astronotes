---
layout: "default"
title: "Eigenspectra and spectral types"
---
{% raw %}
# eigenspectra and spectral types

up: [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html) · [PCA spectral classification of galaxies](./PCA%20spectral%20classification%20of%20galaxies.html)

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

- parent: [PCA spectral classification of galaxies](./PCA%20spectral%20classification%20of%20galaxies.html)
- application: [Galaxy SED fitting](./Galaxy%20SED%20fitting.html), [Color bimodality of galaxies](./Color%20bimodality%20of%20galaxies.html)
- survey context: [SDSS overview](./SDSS%20overview.html), [Surveys to remember](./Surveys%20to%20remember.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_pca-06.png](../../assets/images/gal_pca-06.png)
*Reconstruction of galaxy spectra using linear combination of first few eigenspectra.*

![gal_pca-07.png](../../assets/images/gal_pca-07.png)
*The spectral parameter eta = a1 * cos theta + a2 * sin theta (2dFGRS classification).*

![gal_pca-08.png](../../assets/images/gal_pca-08.png)
*Physical mapping: eta < -1.4 (passive early-types), -1.4 < eta < 1.1 (intermediate spirals), eta > 1.1 (starbursts).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_pca-17.png](../../assets/images/gal_pca-17.png)

![gal_pca-18.png](../../assets/images/gal_pca-18.png)

![gal_pca-19.png](../../assets/images/gal_pca-19.png)

![gal_pca-20.png](../../assets/images/gal_pca-20.png)

![gal_pca-21.png](../../assets/images/gal_pca-21.png)

![gal_pca-22.png](../../assets/images/gal_pca-22.png)

![gal_pca-23.png](../../assets/images/gal_pca-23.png)

![gal_pca-24.png](../../assets/images/gal_pca-24.png)

![gal_pca-25.png](../../assets/images/gal_pca-25.png)

![gal_pca-26.png](../../assets/images/gal_pca-26.png)

![gal_pca-27.png](../../assets/images/gal_pca-27.png)

![gal_pca-28.png](../../assets/images/gal_pca-28.png)

![gal_pca-29.png](../../assets/images/gal_pca-29.png)

![gal_pca-30.png](../../assets/images/gal_pca-30.png)

![gal_pca-31.png](../../assets/images/gal_pca-31.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (2)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Quenching%20and%20passive%20galaxies%20at%20high%20z.html" class="backlink-item">Quenching and passive galaxies at high z</a></li>
  </ul>
</div>
