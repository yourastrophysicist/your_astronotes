---
layout: "default"
title: "LOSVD"
---
{% raw %}
the **line-of-sight velocity distribution (LOSVD)** is the distribution of line-of-sight velocities of stars in a galaxy at a given spatial position. it's the key observable for **stellar dynamics**: from it, you extract velocity dispersion + rotation + higher moments + dynamical mass.

## the LOSVD vs spectrum

each star contributes a slightly Doppler-shifted version of its photospheric absorption-line spectrum. the **observed integrated spectrum** of a galaxy is the **convolution** of an unbroadened stellar template with the LOSVD:
$$F_{\rm obs}(\lambda) = F_{\rm template}(\lambda) * \text{LOSVD}(v)$$

(in velocity space). so by fitting the broadened observed lines vs an unbroadened template, you recover the LOSVD.

## the moments

LOSVD usually parametrised by its first moments:
- **$v$**: mean line-of-sight velocity (rotation + bulk motion).
- **$\sigma$**: velocity dispersion (random motion + unresolved rotation).
- **$h_3$**: skewness (Gauss-Hermite expansion). asymmetric tails (e.g. mergers, disks at high inclination).
- **$h_4$**: kurtosis. peaked vs flat distribution.

the **Gauss-Hermite expansion** (van der Marel + Franx 1993):
$$\text{LOSVD}(v) = \frac{e^{-y^2/2}}{\sigma\sqrt{2\pi}}\sum_n h_n H_n(y), \quad y = (v - v_0)/\sigma$$

with $H_n$ Hermite polynomials. $h_3, h_4$ are the **third + fourth Gauss-Hermite coefficients**.

## measuring LOSVD: pPXF

modern technique: **penalised pixel fitting (pPXF)** (Cappellari + Emsellem 2004):
1. fit galaxy spectrum to a linear combination of stellar templates convolved with a parameterised LOSVD.
2. iteratively adjust LOSVD parameters ($v, \sigma, h_3, h_4$) + template weights.
3. penalise high-order moments to avoid overfitting noisy data.

precision: $\sim 5$ to $10$ km/s for bright SDSS galaxies; better for IFU + nearby galaxies.

## the dynamical info

once $v(x, y)$ + $\sigma(x, y)$ + $h_3, h_4$ are mapped across a galaxy:
- **rotation curves**: $v(R)$ along a slit or radial cut.
- **velocity-dispersion maps**: $\sigma(R)$ or 2D maps from IFU.
- **kinematic axes**: identify the rotation axis + offset from the photometric major axis.
- **kinematically distinct cores (KDCs)**: $v$ field changes sign; signature of past mergers.

## the dynamical mass

from $\sigma$ + size:
$$M_{\rm dyn} \sim \frac{R\sigma^2}{G}$$
(virial estimate). more careful: integrate Jeans equation, requiring full LOSVD modelling.

dynamical mass = total mass within radius $R$ = stars + gas + dark matter.

comparing $M_{\rm dyn}$ with $M_*$ from SED fitting: gives $M_{\rm dyn}/M_* \sim 1$ to $5$ for ellipticals (mostly stellar) up to $\sim 10$ to $100$ for dwarf spheroidals (dark-matter-dominated).

## $h_3$ as merger signature

- **simple disk**: nearly Gaussian LOSVD ($h_3 = h_4 = 0$).
- **triaxial elliptical**: small $h_4 \sim 0.05$.
- **disk-merger remnant**: large $\lvert h_3\rvert$, often anti-correlated with $v$.
- **counter-rotating cores** (KDCs): $h_3$ + $v$ change sign in the centre.

so LOSVD higher moments = **archaeology** of past mergers.

## the connection to scaling relations

velocity dispersion $\sigma_v$ enters:
- **Faber-Jackson**: $L \propto \sigma_v^4$ for ellipticals.
- **Fundamental plane**: $R_e \propto \sigma_v^{1.4}\,\langle I\rangle^{-0.9}$.
- **Tully-Fisher**: $L \propto V_{\rm rot}^4$ for spirals.
- **$M_{BH} - \sigma$**: $M_{BH} \propto \sigma^4$ for SMBHs.

all derived from accurate $\sigma$ measurements via LOSVD fitting.

## see also

- [Velocity dispersion from line width](./Velocity%20dispersion%20from%20line%20width.html)
- [Stellar kinematics measurements](./Stellar%20kinematics%20measurements.html)
- [Stellar v sin i from line shape](./Stellar%20v%20sin%20i%20from%20line%20shape.html)
- [Faber-Jackson relation](./Faber-Jackson%20relation.html)
- [Fundamental plane of ellipticals](./Fundamental%20plane%20of%20ellipticals.html)
- [Tully-Fisher relation](./Tully-Fisher%20relation.html)
- [M sigma relation](./M%20sigma%20relation.html)
- [MaNGA survey](./MaNGA%20survey.html)
- [Integral-field spectroscopy IFU](./Integral-field%20spectroscopy%20IFU.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![cappellari2002_kinematics.png](../../assets/images/cappellari2002_kinematics.png)
*Kinematic mapping of line-of-sight velocity distribution (LOSVD) from Cappellari et al. (2002).*

![cappellari2002_kinematics_fig2.png](../../assets/images/cappellari2002_kinematics_fig2.png)
*Gauss-Hermite kinematic moments (v, sigma, h3, h4) across elliptical galaxy centers.*

![gal_bh-01.png](../../assets/images/gal_bh-01.png)
*Line-of-Sight Velocity Distribution (LOSVD) definition: probability density of stellar velocities along line of sight.*
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Dark%20matter%20in%20elliptical%20galaxies.html" class="backlink-item">Dark matter in elliptical galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Faber-Jackson%20relation.html" class="backlink-item">Faber-Jackson relation</a></li>
    <li class="backlink-item-wrap"><a href="./MaNGA%20survey.html" class="backlink-item">MaNGA survey</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20dynamics%20SMBH%20masses.html" class="backlink-item">Stellar dynamics SMBH masses</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20kinematics%20measurements.html" class="backlink-item">Stellar kinematics measurements</a></li>
  </ul>
</div>
