---
layout: default
title: "LOSVD"
---

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
- **disk-merger remnant**: large $|h_3|$, often anti-correlated with $v$.
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

- [Velocity dispersion from line width](../../02_Zettel/Theory/Velocity dispersion from line width.md)
- [Stellar kinematics measurements](../../02_Zettel/Theory/Stellar kinematics measurements.md)
- [Stellar v sin i from line shape](../../02_Zettel/Theory/Stellar v sin i from line shape.md)
- [Faber-Jackson relation](../../02_Zettel/Theory/Faber-Jackson relation.md)
- [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.md)
- [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.md)
- [M sigma relation](../../02_Zettel/Theory/M sigma relation.md)
- [MaNGA survey](../../02_Zettel/Theory/MaNGA survey.md)
- [Integral-field spectroscopy IFU](../../02_Zettel/Theory/Integral-field spectroscopy IFU.md)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.md)
