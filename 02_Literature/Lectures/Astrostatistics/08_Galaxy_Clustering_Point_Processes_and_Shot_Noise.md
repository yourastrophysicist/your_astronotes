---
layout: "default"
title: "08_Galaxy_Clustering_Point_Processes_and_Shot_Noise"
---
# Galaxy Clustering, Point Processes, and Shot Noise

Graduate lecture notes in Astro-Statistics and Cosmology, taught by Prof. Michele Liguori at the University of Padua.
Reference index [[Astro-Statistics_and_Cosmology_MOC]]

---

## Large Scale Structure as a Stochastic Point Process

While the cosmic microwave background represents a continuous, diffuse two-dimensional temperature field, large-scale structure (LSS) observations map the three-dimensional cosmic web through discrete tracers. Galaxy surveys (such as the Sloan Digital Sky Survey, the Dark Energy Spectroscopic Instrument, and the Euclid mission) record the celestial coordinates $(\alpha, \delta)$ and spectroscopic redshifts $z$ of millions of individual galaxies, quasars, and Lyman-alpha absorption systems.

Because galaxies are discrete entities rather than a continuous fluid, the observational data must be formulated mathematically within the framework of stochastic spatial point processes.

Let $\{\boldsymbol{x}_1, \boldsymbol{x}_2, \dots, \boldsymbol{x}_N\}$ denote the three-dimensional spatial coordinates of $N$ observed galaxies residing in an observational survey volume $V$. The microscopic galaxy number density field is represented as a sum of three-dimensional Dirac delta functions

$$n(\boldsymbol{x}) \equiv \sum_{i=1}^N \delta_D(\boldsymbol{x} - \boldsymbol{x}_i)$$

The ensemble expectation value of this microscopic field defines the smooth, continuous expected mean number density

$$\langle n(\boldsymbol{x}) \rangle = \bar{n}(\boldsymbol{x})$$

In an idealized homogeneous universe without selection boundaries, $\bar{n}$ is a constant. In real surveys, $\bar{n}(\boldsymbol{x})$ varies spatially according to the radial selection function (flux limits dropping galaxy counts at high redshift) and angular survey masks (celestial footprints, bright star vetoes, extinction).

---

## The Galaxy Density Contrast and Linear Bias

The primary cosmological observable is not the absolute number density, but the fractional spatial fluctuation about the background mean, known as the galaxy density contrast

$$\delta_g(\boldsymbol{x}) \equiv \frac{n(\boldsymbol{x}) - \bar{n}(\boldsymbol{x})}{\bar{n}(\boldsymbol{x})}$$

By construction, the expectation value of the density contrast vanishes identically across the survey volume

$$\langle \delta_g(\boldsymbol{x}) \rangle = 0$$

Galaxies do not trace the total matter distribution (which is dominated by collisionless cold dark matter) with perfect fidelity. Galaxies form within massive dark matter halos that collapse out of the highest peaks of the primordial density field.

On large, linear cosmological scales ($k \lesssim 0.1 \, h \, \text{Mpc}^{-1}$), this tracer selection is well approximated by the linear galaxy bias relation

$$\delta_g(\boldsymbol{x}) \approx b \, \delta_m(\boldsymbol{x})$$

where $\delta_m(\boldsymbol{x}) \equiv \frac{\rho_m(\boldsymbol{x}) - \bar{\rho}_m}{\bar{\rho}_m}$ is the total matter density contrast, and $b$ is the linear bias parameter. Highly luminous red galaxies inhabit more massive halos and exhibit higher bias ($b \approx 2$), while star-forming emission line galaxies exhibit lower bias ($b \approx 1.2$).

---

## The Spatial Two-Point Correlation Function $\xi(r)$

Under the assumption of statistical homogeneity and isotropy, the two-point spatial clustering of galaxies depends purely on the scalar separation distance $r = \lvert \boldsymbol{x}_1 - \boldsymbol{x}_2\rvert$.

The spatial two-point correlation function $\xi(r)$ is defined as the ensemble covariance of the density contrast field

$$\xi(r) \equiv \langle \delta_g(\boldsymbol{x}) \, \delta_g(\boldsymbol{x} + \boldsymbol{r}) \rangle$$

### Physical Interpretation and Landy-Szalay Estimation

Physically, $\xi(r)$ measures the excess probability, above an unclustered Poisson random distribution, of discovering a galaxy in an infinitesimal volume element $dV_2$ at a distance $r$ from another galaxy residing in volume element $dV_1$

$$dP = \bar{n}^2 \left[ 1 + \xi(r) \right] dV_1 \, dV_2$$
- If $\xi(r) = 0$, galaxies are distributed purely at random without spatial correlations.
- If $\xi(r) > 0$, galaxies cluster attractively, showing positive correlation.
- If $\xi(r) < 0$, galaxies exhibit anticorrelation or avoidance.

In real catalogs with complex survey geometries, edge effects and observational boundaries bias naive pair counts. To eliminate boundary biases, Landy and Szalay (1993) constructed the minimum-variance, unbiased estimator

$$\hat{\xi}_{\text{LS}}(r) = \frac{DD(r) - 2 DR(r) + RR(r)}{RR(r)}$$

where $DD(r)$ is the normalized number of data-data galaxy pairs with separation $r$, $RR(r)$ is the normalized number of random-random pairs drawn from a synthetic catalog matching the exact survey geometry and selection function, and $DR(r)$ is the normalized cross-count of data-random pairs.

---

## The Three-Dimensional Galaxy Power Spectrum $P_g(k)$

In theoretical cosmology, perturbation equations and gravitational growth are diagonal in Fourier space.

Define the Fourier transform of the galaxy density contrast field

$$\delta_g(\boldsymbol{k}) \equiv \int_{\mathbb{R}^3} \delta_g(\boldsymbol{x}) \exp(-i \boldsymbol{k} \cdot \boldsymbol{x}) \, d^3\boldsymbol{x}$$

Statistical homogeneity requires that different Fourier wavevectors $\boldsymbol{k}$ and $\boldsymbol{k}'$ are completely uncorrelated. The two-point covariance in Fourier space is proportional to a three-dimensional Dirac delta function

$$\langle \delta_g(\boldsymbol{k}) \, \delta_g^*(\boldsymbol{k}') \rangle = (2\pi)^3 P_g(\boldsymbol{k}) \, \delta_D(\boldsymbol{k} - \boldsymbol{k}')$$

Statistical isotropy further ensures that the power spectrum depends solely on the scalar wavenumber magnitude $k = \lvert \boldsymbol{k}\rvert$, meaning $P_g(\boldsymbol{k}) = P_g(k)$.

### The Wiener-Khinchin Theorem

The real-space correlation function $\xi(r)$ and the Fourier-space power spectrum $P_g(k)$ form a Fourier transform pair.

Under three-dimensional spherical symmetry, angular integration over the sphere yields the radial transformation

$$P_g(k) = \int_{\mathbb{R}^3} \xi(r) \exp(-i \boldsymbol{k} \cdot \boldsymbol{r}) \, d^3\boldsymbol{r} = 4\pi \int_0^\infty r^2 \xi(r) \frac{\sin(kr)}{kr} \, dr$$

The inverse transformation recovers the real-space correlation function

$$\xi(r) = \frac{1}{(2\pi)^3} \int_{\mathbb{R}^3} P_g(k) \exp(i \boldsymbol{k} \cdot \boldsymbol{r}) \, d^3\boldsymbol{k} = \frac{1}{2\pi^2} \int_0^\infty k^2 P_g(k) \frac{\sin(kr)}{kr} \, dk$$

A prominent physical feature in both functions is the Baryon Acoustic Oscillation (BAO) peak. In $\xi(r)$, the acoustic horizon imprinted at recombination appears as a sharp localized bump at comoving separation $r_s \approx 105 \, h^{-1} \, \text{Mpc} \approx 147 \, \text{Mpc}$. In $P_g(k)$, this localized real-space peak transforms into harmonic oscillatory wiggles across wavenumbers $k \approx 0.05 - 0.25 \, h \, \text{Mpc}^{-1}$, acting as a standard cosmic ruler to map cosmic expansion history.

---

## Discreteness and Poisson Shot Noise

Because an astronomical catalog records discrete galaxies rather than a smooth density fluid, the empirical power spectrum contains an unavoidable discreteness contribution known as Poisson shot noise.

### Derivation of the $1/\bar{n}$ Shot Noise Term

Consider the product of microscopic density fields at two distinct points $\boldsymbol{x}$ and $\boldsymbol{x}'$

$$n(\boldsymbol{x}) n(\boldsymbol{x}') = \left( \sum_{i=1}^N \delta_D(\boldsymbol{x} - \boldsymbol{x}_i) \right) \left( \sum_{j=1}^N \delta_D(\boldsymbol{x}' - \boldsymbol{x}_j) \right) = \sum_{i \neq j} \delta_D(\boldsymbol{x} - \boldsymbol{x}_i) \delta_D(\boldsymbol{x}' - \boldsymbol{x}_j) + \sum_{i=1}^N \delta_D(\boldsymbol{x} - \boldsymbol{x}_i) \delta_D(\boldsymbol{x}' - \boldsymbol{x}_i)$$

In the second sum, the indices match ($i = j$). Because the two spatial coordinates coincide at the location of the same galaxy, $\delta_D(\boldsymbol{x} - \boldsymbol{x}_i) \delta_D(\boldsymbol{x}' - \boldsymbol{x}_i) = \delta_D(\boldsymbol{x} - \boldsymbol{x}') \delta_D(\boldsymbol{x} - \boldsymbol{x}_i)$.

Taking the ensemble average

$$\langle n(\boldsymbol{x}) n(\boldsymbol{x}') \rangle = \left\langle \sum_{i \neq j} \delta_D(\boldsymbol{x} - \boldsymbol{x}_i) \delta_D(\boldsymbol{x}' - \boldsymbol{x}_j) \right\rangle + \left\langle \sum_{i=1}^N \delta_D(\boldsymbol{x} - \boldsymbol{x}_i) \right\rangle \delta_D(\boldsymbol{x} - \boldsymbol{x}')$$

The first term corresponds to pairs of distinct galaxies, governed by the continuous correlation function $\bar{n}^2 [1 + \xi(\lvert\boldsymbol{x} - \boldsymbol{x}'\rvert)]$. The second term is the self-correlation of individual galaxies, equal to $\bar{n} \delta_D(\boldsymbol{x} - \boldsymbol{x}')$.

Therefore, the exact two-point correlation of the microscopic galaxy density is

$$\langle n(\boldsymbol{x}) n(\boldsymbol{x}') \rangle = \bar{n}^2 \left[ 1 + \xi( \vert\boldsymbol{x} - \boldsymbol{x}' \vert) \right] + \bar{n} \, \delta_D(\boldsymbol{x} - \boldsymbol{x}')$$

Expressing this in terms of the empirical density contrast $\delta_{\text{obs}}(\boldsymbol{x}) = \frac{n(\boldsymbol{x}) - \bar{n}}{\bar{n}}$

$$\langle \delta_{\text{obs}}(\boldsymbol{x}) \, \delta_{\text{obs}}(\boldsymbol{x}') \rangle = \xi( \vert\boldsymbol{x} - \boldsymbol{x}' \vert) + \frac{1}{\bar{n}} \, \delta_D(\boldsymbol{x} - \boldsymbol{x}')$$

Fourier transforming both sides to obtain the observed power spectrum $P_{\text{obs}}(k)$

$$P_{\text{obs}}(k) = P_{\text{signal}}(k) + \frac{1}{\bar{n}} = b^2 P_m(k) + \frac{1}{\bar{n}}$$

The three-dimensional Dirac delta function $\delta_D(\boldsymbol{x} - \boldsymbol{x}')$ transforms to a constant, scale-independent white noise floor equal to $1/\bar{n}$.

This fundamental result establishes the two regimes of large-scale structure observation
1. Cosmic Variance Limited Regime ($b^2 P_m(k) \gg 1/\bar{n}$) - galaxy number density is dense, and measurement uncertainty is dominated by sample variance.
2. Shot-Noise Limited Regime ($b^2 P_m(k) \ll 1/\bar{n}$) - galaxy sampling is sparse, and Poisson counting noise obscures the cosmological clustering signal.

---

## The Feldman-Kaiser-Peacock (FKP) Weighting Scheme

In any realistic spectroscopic galaxy survey, the selection function $\bar{n}(\boldsymbol{r})$ is strongly non-uniform, dropping off steeply as redshift $z$ increases.

Feldman, Kaiser, and Peacock (1994) addressed the question of how to assign a spatial weight $w(\boldsymbol{r})$ to each volume element in order to minimize the fractional variance of the estimated power spectrum.

FKP defined the weighted field

$$F(\boldsymbol{r}) \equiv \frac{w(\boldsymbol{r})}{A^{1/2}} \left[ n(\boldsymbol{r}) - \alpha n_s(\boldsymbol{r}) \right]$$

where $n_s(\boldsymbol{r})$ is an unclustered synthetic catalog with number density $\bar{n}_s = \bar{n} / \alpha$, and $A$ is a normalization constant chosen so that $\langle   \vertF(\boldsymbol{k})\vert ^2 \rangle \to P(k)$ on small scales.

By performing a variational minimization of the variance $\frac{\operatorname{Var}(\hat{P}(k))}{P^2(k)}$ with respect to the arbitrary weighting function $w(\boldsymbol{r})$, FKP proved that the optimal spatial weight is

$$w_{\text{FKP}}(\boldsymbol{r}) = \frac{1}{1 + \bar{n}(\boldsymbol{r}) P_0}$$

where $P_0$ is an assumed characteristic power spectrum value at the target physical scale of interest (typically chosen as $P_0 \approx 10^4 \, h^{-3} \, \text{Mpc}^3$ near the BAO scale).

The FKP weight provides an optimal trade-off
- In dense regions where $\bar{n}(\boldsymbol{r}) P_0 \gg 1$, sample variance dominates, and $w_{\text{FKP}}(\boldsymbol{r}) \propto 1/\bar{n}(\boldsymbol{r})$. Each spatial volume element receives equal weight, preventing over-sampled nearby regions from dominating the statistical error.
- In sparse regions where $\bar{n}(\boldsymbol{r}) P_0 \ll 1$, shot noise dominates, and $w_{\text{FKP}}(\boldsymbol{r}) \to 1$. Every observed galaxy receives equal weight, maximizing the signal gathered from distant, hard-to-detect objects.

---

## Redshift Space Distortions (RSD) and Geometric Anisotropy

In spectroscopic surveys, the radial distance to a galaxy is inferred from its observed redshift $z$. However, observed redshifts include not only cosmological Hubble expansion, but also the line-of-sight component of the galaxy peculiar velocity $v_\parallel \equiv \boldsymbol{v} \cdot \hat{\boldsymbol{r}}$ driven by local gravitational potentials

$$c z = H(z) r_\parallel + v_\parallel(\boldsymbol{r})$$

This Doppler displacement maps galaxies from real space into redshift space, distorting the apparent clustering pattern along the line of sight.

Redshift space distortions introduce distinct physical signatures
1. The Kaiser Effect (Large Scales) - galaxies participate in coherent gravitational bulk flows, falling inward toward massive overdensities. This coherent motion compresses structures along the line of sight in redshift space, enhancing clustering power. In linear theory, the redshift-space power spectrum becomes anisotropic

$$P_s(\boldsymbol{k}) = \left( 1 + \beta \mu_{\boldsymbol{k}}^2 \right)^2 P_r(k)$$

where $\mu_{\boldsymbol{k}} \equiv \hat{\boldsymbol{k}} \cdot \hat{\boldsymbol{r}} = \cos\theta$, and $\beta \equiv f / b$ is the redshift space distortion parameter, depending on the linear growth rate $f \equiv \frac{d\ln D}{d\ln a} \approx \Omega_m(z)^{0.55}$. Measuring this quadrupole anisotropy provides a direct test of general relativity.
2. The Finger-of-God Effect (Small Scales) - inside virialized galaxy clusters, random thermal orbital velocities reach $\sim 1000 \, \text{km/s}$. These random velocities smear structures along the line of sight into elongated radial fingers, damping high-$k$ power.

Modeling both linear Kaiser amplification and non-linear Finger-of-God damping is essential for extracting unbiased dark energy and modified gravity parameters from modern large-scale structure catalogs.

---

## Conceptual Connections

- [[Astro-Statistics_and_Cosmology_MOC]] - Master syllabus map of content
- [[06_Fisher_Information_Matrix_Cramer_Rao_Bound_and_Survey_Forecasting]] - Fisher matrix forecasting for galaxy clustering surveys
- [[07_CMB_Power_Spectrum_Likelihood_Analysis_and_Cosmic_Variance]] - Comparison between 2D CMB angular power spectra and 3D galaxy power spectra
- [[09_Bayesian_Hierarchical_Models_for_Type_Ia_Supernovae]] - Point source distance measurements in inhomogeneous universes



## Linked References

- [[Feldman-Kaiser-Peacock optimal weighting for galaxy surveys]]
- [[Galaxy power spectrum and Poisson shot noise]]
- [[Spatial two-point correlation function and Landy-Szalay estimator]]
- [[Astro-Statistics_and_Cosmology_MOC]]


