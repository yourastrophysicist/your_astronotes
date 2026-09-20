---
layout: "default"
title: "Stellar kinematics measurements"
tags: ""
---
# Stellar Kinematics Measurements

Stellar kinematics measurements constitute the primary empirical methodology for mapping the internal velocity fields, velocity dispersion tensors, and line-of-sight velocity distributions (LOSVD) of stars in early-type galaxies and spiral bulges. Because stars represent a collisionless system governed by the Collisionless Boltzmann Equation, extracting stellar kinematics provides the direct dynamical input required to solve the Jeans equations, construct Schwarzschild orbit-superposition models, measure central supermassive black hole masses, and quantify the radial distribution of dark matter halos. Modern stellar kinematics relies on pixel-space penalized maximum likelihood fitting, exemplified by the Penalized Pixel-Fitting (pPXF) method developed by Cappellari and Emsellem (2004).

---

## 1. Mathematical Formulation of the Optimization Problem

In astronomical spectroscopy, a galaxy spectrum $G(x)$ is sampled linearly in logarithmic wavelength space, defined by the variable $x \equiv \ln \lambda$. On a logarithmic wavelength scale, a Doppler velocity shift $v \ll c$ transforms into a constant coordinate translation.

### Doppler Shift on Logarithmic Coordinates
Consider an absorption feature at rest-frame wavelength $\lambda_0$ shifted to observed wavelength $\lambda$. By the Doppler formula -
$$\lambda = \lambda_0 \left( 1 + \frac{v}{c} \right)$$
Taking the natural logarithm of both sides -
$$\ln \lambda = \ln \lambda_0 + \ln \left( 1 + \frac{v}{c} \right)$$
Using the first-order Taylor expansion for $v \ll c$ where $\ln(1 + \epsilon) \approx \epsilon$ -
$$x \equiv \ln \lambda \approx \ln \lambda_0 + \frac{v}{c} = x_0 + \frac{v}{c}$$
Therefore, a Doppler shift corresponds to a constant uniform translation $\Delta x = v/c$. The observed galaxy spectrum $G(x)$ is mathematically modeled as the convolution of a composite intrinsic stellar template spectrum $T(x)$ with the galaxy Line-of-Sight Velocity Distribution $\mathcal{L}(v)$, plus low-order polynomial adjustments -
$$M(x) = \left[ \sum_{k=1}^K w_k T_k(x) \right] \ast \mathcal{L}\left( c \, x \right) \cdot \sum_{l=0}^L a_l P_l(x) + \sum_{m=0}^M b_m Q_m(x)$$
where -
- $T_k(x)$ are high-resolution empirical stellar library spectra (e.g. MILES, ELODIE, Indo-US) convolved to match the instrumental resolution of the spectrograph.
- $w_k \ge 0$ are non-negative weights representing the optimal linear combination of stellar templates, eliminating the classic template mismatch problem.
- $\ast$ denotes continuous one-dimensional mathematical convolution.
- $P_l(x)$ are multiplicative Legendre polynomials of order $L$ (typically $L \sim 3 - 6$), which adjust for interstellar dust reddening, flux calibration errors, and atmospheric transmission variations.
- $Q_m(x)$ are additive Legendre polynomials of order $M$ (typically $M \sim 3 - 6$), which account for diffuse night-sky emission residuals, scattered light, and continuum AGN contributions.

---

## 2. Gauss-Hermite Expansion of the LOSVD

While idealized stellar systems in virial equilibrium with isotropic velocity distributions produce approximately Gaussian line-of-sight velocity profiles, real galaxies exhibit substantial deviations caused by orbital anisotropy, embedded rotating stellar disks, kinematically decoupled cores, and asymmetric drift. The LOSVD $\mathcal{L}(v)$ is parameterized using a Gauss-Hermite series expansion, introduced by Gerhard (1993) and van der Marel and Franx (1993).

### Mathematical Definition
$$\mathcal{L}(v) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{y^2}{2}\right) \left[ 1 + \sum_{m=3}^M h_m H_m(y) \right]$$
where the dimensionless normalized velocity coordinate $y$ is defined as -
$$y \equiv \frac{v - V}{\sigma}$$
Here $V$ is the mean radial line-of-sight velocity and $\sigma$ is the line-of-sight velocity dispersion.

### Explicit Hermite Polynomial Formulations
The functions $H_m(y)$ are the standard orthogonal Hermite polynomials normalized such that -
$$\int_{-\infty}^{+\infty} \frac{1}{\sqrt{2\pi}} \exp\left(-\frac{y^2}{2}\right) H_m(y) H_n(y) \, dy = \delta_{mn}$$
The explicit expressions for the lowest-order Hermite polynomials are -
$$H_0(y) = 1$$
$$H_1(y) = y$$
$$H_2(y) = \frac{1}{\sqrt{2}} (y^2 - 1)$$
$$H_3(y) = \frac{1}{\sqrt{6}} (2\sqrt{2}y^3 - 3\sqrt{2}y)$$
$$H_4(y) = \frac{1}{\sqrt{24}} (4y^4 - 12y^2 + 3)$$

### Step-by-Step Calculus Derivation - Orthogonality and Moments
Let us explicitly demonstrate why the summation starts at $m = 3$, omitting $H_1(y)$ and $H_2(y)$.
1. Consider the integral of the Gaussian weight function -
   $$I_0 = \int_{-\infty}^{+\infty} \frac{1}{\sqrt{2\pi}} e^{-y^2/2} \, dy = 1$$
2. Evaluate the first moment of the unperturbed Gaussian -
   $$\langle y 
angle = \int_{-\infty}^{+\infty} y \frac{e^{-y^2/2}}{\sqrt{2\pi}} \, dy = 0$$
   because the integrand is strictly antisymmetric with respect to $y = 0$. By setting the centroid of the Gaussian to $V$, the mean velocity of the profile is already captured. Thus, $h_1 \equiv 0$.
3. Evaluate the second moment of the unperturbed Gaussian -
   $$\langle y^2 
angle = \int_{-\infty}^{+\infty} y^2 \frac{e^{-y^2/2}}{\sqrt{2\pi}} \, dy = \left[ -y \frac{e^{-y^2/2}}{\sqrt{2\pi}} \right]_{-\infty}^{+\infty} + \int_{-\infty}^{+\infty} \frac{e^{-y^2/2}}{\sqrt{2\pi}} \, dy = 0 + 1 = 1$$
   Since $\langle y^2 
angle = 1$, the variance is already completely specified by $\sigma^2$. Therefore, the coefficient of $H_2(y) = \frac{1}{\sqrt{2}}(y^2 - 1)$ must vanish ($h_2 \equiv 0$).
4. Physical interpretation of $h_3$ (Skewness) -
   $H_3(y)$ is an odd function ($H_3(-y) = -H_3(y)$). The coefficient $h_3$ quantifies asymmetric deviations from a Gaussian. A positive $h_3 > 0$ indicates a tail towards velocities higher than $V$, whereas $h_3 < 0$ indicates a tail towards lower velocities.
5. Physical interpretation of $h_4$ (Kurtosis) -
   $H_4(y)$ is an even function ($H_4(-y) = H_4(y)$). The coefficient $h_4$ quantifies symmetric deviations from a Gaussian.
   - If $h_4 > 0$ (leptokurtic), the profile has a pointed triangular peak and broader wings than a Gaussian. In stellar dynamics, this indicates predominantly radial stellar orbits ($\sigma_r > \sigma_\theta$).
   - If $h_4 < 0$ (platykurtic), the profile is flat-topped or boxy. In stellar dynamics, this indicates predominantly tangential or circular orbits ($\sigma_\theta > \sigma_r$).

---

## 3. Penalized Likelihood and the pPXF Algorithm

When fitting observational spectra with low to moderate signal-to-noise ratio ($S/N \lesssim 30$), unconstrained non-linear least squares minimization experiences severe degeneracies between $\sigma$ and $h_4$, as well as between $V$ and $h_3$. Noise spikes in the spectrum can artificially drive $h_3$ and $h_4$ to unphysical extreme values.

### The Objective Function with Regularization
To resolve this instability, Cappellari and Emsellem (2004) introduced a penalty term to the classic $\chi^2$ statistic -
$$\chi_{\mathrm{pen}}^2 = \chi^2 \left( 1 + \lambda^2 \mathcal{P} \right)$$
where the standard goodness-of-fit statistic $\chi^2$ across $N$ spectral pixels is -
$$\chi^2 = \sum_{n=1}^N \left( \frac{G(x_n) - M(x_n)}{\Delta G(x_n)} \right)^2$$
and the penalty function $\mathcal{P}$ penalizes excursions of the Gauss-Hermite coefficients away from zero -
$$\mathcal{P} = \sum_{m=3}^M h_m^2 = h_3^2 + h_4^2 + \dots + h_M^2$$
The parameter $\lambda$ is an adjustable penalty factor.
- When the data has high signal-to-noise ratio ($S/N \gg 50$), the $\chi^2$ term dominates completely, allowing the data to freely determine non-zero values for $h_3$ and $h_4$.
- When the signal-to-noise ratio is poor ($S/N \lesssim 15$), the penalty term pulls $h_3 \to 0$ and $h_4 \to 0$, gracefully defaulting the fitted LOSVD to a stable, well-constrained Gaussian ($V, \sigma$) without inflating the uncertainties.

---

## 4. Observational Methodologies and Error Control

### Voronoi 2D Adaptive Spatial Binning
In integral field spectroscopy (IFS, e.g. SAURON, ATLAS3D, CALIFA, MUSE, SAMI), the surface brightness of a galaxy drops precipitously with increasing radius. In the outer regions, individual spaxels have inadequate signal-to-noise ratios ($S/N < 5$). To extract reliable stellar kinematics, the 2D spaxels are spatially co-added using Voronoi 2D adaptive binning (Cappellari and Copin 2003) to achieve a uniform target $S/N$ (typically $S/N \approx 40$ per bin across the entire field of view).

### Instrumental Resolution Correction
The observed spectral line width $\sigma_{\mathrm{obs}}$ is a quadratic convolution of the intrinsic stellar velocity dispersion $\sigma_*$ and the spectrograph Line Spread Function (LSF) $\sigma_{\mathrm{inst}}$ -
$$\sigma_{\mathrm{obs}}^2 \approx \sigma_*^2 + \sigma_{\mathrm{inst}}^2$$
In pPXF, this correction is performed rigorously by convolving the high-resolution template spectra with the difference kernel $\Delta \sigma_{\mathrm{LSF}} = \sqrt{\sigma_{\mathrm{inst}}^2 - \sigma_{\mathrm{temp}}^2}$ before fitting.

### Template Mismatch Mitigation
If a single stellar template of incorrect spectral type or metallicity is used, differences in absorption line equivalent widths (such as the Mg b triplet or Fe lines) mimic velocity dispersion broadening or non-Gaussian wings. By solving a non-negative linear least-squares subproblem for stellar template weights $w_k \ge 0$ at every non-linear iteration step of $(V, \sigma, h_3, h_4)$, pPXF constructs an optimal composite stellar population template that simultaneously matches the true stellar mixture.

---

## 5. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - pPXF Pixel-Fitting Spectrum and Residuals
```text
  Relative Flux F_lambda
   3.0 +----------------------------------------------------------------+
       |                                                                |
   2.5 |     Galaxy Spectrum G(lambda) [Grey dots]                      |
       |     pPXF Best-Fit Model M(lambda) [Solid line]                 |
   2.0 |         H-beta       Mg b triplet         Fe 5270   Fe 5335    |
       |         (Masked)      |     |             |         |          |
   1.5 |          \            |     |             |         |          |
       |           |           |  |  |             |         |          |
   1.0 |           v           v  v  v             v         v          |
       |  /\      /\_         /\_/\_/\            /\_       /\_         |
   0.5 | /  \    /   \       /        \          /   \     /   \        |
       |/    \__/     \_____/          \________/     \___/     \_______|
   0.0 +----------------------------------------------------------------+
  Res  | - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -|
  Fit  | ^/\_v_/\_/\_v_/\_v_/\_/\_v_/\_v_/\_/\_v_/\_v_/\_/\_v_/\_v_/\_  | Residuals Delta G
       +----------------------------------------------------------------+
      4800          4900          5000          5100          5200     5300
                               Wavelength lambda [Angstroms]
```

### Diagram 2 - LOSVD Gauss-Hermite Perturbations
```text
  L(v) Probability Density
   0.5 +----------------------------------------------------------------+
       |                           ^                                    |
   0.4 |                          / \                                  |
       |                         /   \                                 |
   0.3 |                        /     \     --- Standard Gaussian      |
       |                       /   |   \    ... h3 > 0 (Asymmetric)    |
   0.2 |             . . .    /    |    \   === h4 > 0 (Leptokurtic)   |
       |           .         /     |     \                             |
   0.1 |         .          /      |      \                            |
       |       .           /       |       \=                          |
   0.0 +------------------+--------+--------+---------------------------+
      -3                  -1       0        +1                          +3
                          Normalized Velocity y = (v - V) / sigma
```

### Diagram 3 - Fast-Rotator Kinematic Radial Profiles
```text
  Velocity V [km/s]                      Velocity Dispersion sigma [km/s]
  +150 |       /````````````             250 | \                        /
       |      /                              |  \                      /
     0 |-----+------ (v_sys)                 150 |   \________________/
       |    /                                    |
  -150 |___/                                  50 +-----------------------
       +--------------------                     +-----------------------
       -Re         0        +Re                  -Re         0        +Re
            Radius R                                  Radius R

  Skewness h3                            Kurtosis h4
  +0.1 | \                               +0.1 |    /       |  \                                   |   /     0.0 |---\--------- (Anti-correlated)   0.0 |--/----\------------------
       |    \                                 | /        -0.1 |     \                           -0.1 |/        \________________
       +--------------------                  +-----------------------
       -Re         0        +Re               -Re         0        +Re
            Radius R                               Radius R
```

---

## 6. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"How do we extract stellar kinematics from galaxy absorption spectra, and what do the Gauss-Hermite parameters tell us about the underlying dynamics?"*

1. **State the fundamental physical setup** -
   - Write on the board - *"Stars are collisionless. Their collective spectral features are Doppler-shifted and broadened by the Line-of-Sight Velocity Distribution $\mathcal{L}(v)$."*
   - State clearly - *"We map the galaxy spectrum on a logarithmic wavelength scale $x = \ln \lambda$. In this coordinate system, the Doppler shift $\lambda = \lambda_0(1 + v/c)$ becomes a constant translation $\Delta x = v/c$. The observed galaxy spectrum is therefore a convolution of stellar templates with $\mathcal{L}(v)$."*

2. **Write the pPXF model equation** -
   - Write on the board -
     $$M(x) = \left[ \sum w_k T_k(x) \right] \ast \mathcal{L}(c x) \cdot P(x) + Q(x)$$
   - Explain - *"We use an optimal non-negative linear combination of dozens of stellar library spectra $T_k$ to avoid template mismatch, and include multiplicative polynomials $P(x)$ for dust/calibration and additive polynomials $Q(x)$ for sky residuals."*

3. **Expand the LOSVD into Gauss-Hermite polynomials** -
   - Write on the board -
     $$\mathcal{L}(v) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left( -\frac{y^2}{2} \right) \left[ 1 + h_3 H_3(y) + h_4 H_4(y) \right]$$
     where $y = (v - V)/\sigma$.
   - Explain why $h_1 = h_2 = 0$ - *"By definition, $V$ and $\sigma$ absorb the mean and the variance of the distribution, so the expansion begins strictly at $m = 3$."*

4. **Interpret the physical meaning of $h_3$ and $h_4$** -
   - Draw the LOSVD sketches.
   - Explain - *"The coefficient $h_3$ measures skewness. In disk galaxies, $h_3$ is anti-correlated with mean velocity $V$ ($h_3 \cdot V < 0$) because the line of sight integrates through an exponential disk, producing a tail pointing back toward the systemic velocity."*
   - Explain - *"The coefficient $h_4$ measures kurtosis. A positive $h_4 > 0$ indicates a peaked profile with broad wings, typical of radial orbital anisotropy ($\sigma_r > \sigma_\theta$). A negative $h_4 < 0$ indicates a flat-topped profile, typical of tangential orbital anisotropy or an embedded cold disk seen face-on."*

5. **Explain the necessity of the penalty term** -
   - Write on the board - $\chi_{\mathrm{pen}}^2 = \chi^2 (1 + \lambda^2 \sum h_m^2)$.
   - Conclude - *"At low signal-to-noise ratios, unconstrained fits suffer from severe degeneracies between $\sigma$ and $h_4$. The penalty forces the solution toward a pure Gaussian unless the spectral data robustly demand non-Gaussian higher moments."*

---

## 7. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part IV - Stellar Dynamics and Kinematic Tracers, pages 25-28).
  - `kinematics_1-1.pdf` (Stellar kinematics, cross-correlation, Fourier quotient, and Gauss-Hermite expansion, pages 1-24).
  - `cappellari2002_kinematics.pdf` (Stellar kinematics of early-type galaxies, pages 1-12).
- **Seminal Literature** -
  - Cappellari, M., and Emsellem, E. (2004, PASP, 116, 138) - *Parametric Recovery of Line-of-Sight Velocity Distributions with Penalized Pixel-Fitting*.
  - Cappellari, M., and Copin, Y. (2003, MNRAS, 342, 345) - *Adaptive spatial binning of integral-field spectroscopic data with Voronoi tessellation*.
  - Gerhard, O. E. (1993, MNRAS, 265, 213) - *Line-of-sight velocity profiles in spherical galaxies*.
  - van der Marel, R. P., and Franx, M. (1993, ApJ, 407, 525) - *A New Method for Investigating the Velocity Distributions of Stars in Elliptical Galaxies*.
- **Standard Textbooks** -
  - Binney, J., and Merrifield, M. (1998), *Galactic Astronomy*, Princeton University Press, Chapter 11 - Stellar Kinematics in Elliptical Galaxies (pages 670-685).
  - Mo, H., van den Bosch, F., and White, S. (2010), *Galaxy Formation and Evolution*, Cambridge University Press, Chapter 13 - Kinematics of Stellar Systems (pages 540-548).

---

## 8. Related Knowledge Base Notes

- [[LOSVD]] - Mathematical definition and moments of the Line-of-Sight Velocity Distribution.
- [[Fundamental plane of ellipticals]] - The 3D empirical scaling relation between $R_e$, $\sigma$, and $\langle I \rangle_e$.
- [[Stellar dynamics SMBH masses]] - Dynamical modeling using the Jeans equations and Schwarzschild orbit superposition.
- [[Ionized gas kinematics]] - Gas kinematics as a complementary tracer of circular velocity and potential.
- [[M sigma relation]] - The tight co-evolution relation between central SMBH mass and stellar velocity dispersion.



## Linked References

- [[Datacube redshift measurement]]
- [[Integral-field spectroscopy IFU]]
- [[Ionized gas kinematics]]
- [[MUSE datacubes]]
- [[MaNGA survey]]
- [[Mass-radius and mass-velocity relations]]
- [[Proper motion and stellar kinematics]]
- [[Rotation curves]]
- [[Stellar dynamics SMBH masses]]
- [[Astrophysics_of_Galaxies_MOC]]


