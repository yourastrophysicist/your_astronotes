---
layout: "default"
title: "Integral-field spectroscopy IFU"
---
# Integral-Field Spectroscopy (IFS / IFU)

Parent [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html) · [Astronomical_Spectroscopy_MOC](../../04_Atlas/Astronomical_Spectroscopy_MOC.html) · [Stellar kinematics measurements](Stellar%20kinematics%20measurements.html)

## 1. Astrophysical Significance & Physical Motivation

Historically, optical and near-infrared spectroscopy of galaxies was conducted using **long-slit spectrographs**, where a 1D spatial slit is placed across a selected axis of the galaxy (typically the major or minor photometric axis). However, long-slit spectroscopy suffers from severe observational limitations:
1. **Slit Alignment Bias**: The kinematic major axis does not necessarily coincide with the photometric major axis in triaxial ellipticals, barred spirals, or systems with kinematically decoupled cores (KDCs).
2. **Missing Azimuthal Information**: Complex 2D velocity fields—including non-circular streaming motions, bar-driven radial inflow, warp precession, and counter-rotating gas/stellar disks—cannot be mapped with a single 1D cut.
3. **Seeing and Slit-Loss Systematics**: Atmospheric seeing variations across 1D exposures produce differential slit losses and artificial kinematic gradients.

**Integral-Field Spectroscopy (IFS)** overcomes all these limitations by delivering a contiguous 3D **datacube** $(x, y, \lambda)$: simultaneously acquiring a complete astronomical spectrum for every spatial resolution element ("spaxel", spatial pixel) across a two-dimensional field of view.

---

## 2. Mathematical Formulation of the 3D Datacube

An IFU observation produces a continuous flux density distribution $F(x, y, \lambda)$ sampled on a discrete 3D voxel grid.

### Spatial and Spectral Convolution
The observed datacube $F_{\rm obs}(x, y, \lambda)$ is related to the true intrinsic sky surface brightness distribution $I(\alpha, \delta, \lambda')$ via a double convolution:

$$F_{\rm obs}(x, y, \lambda) = \int_{\Omega} d\alpha\, d\delta \int_0^\infty d\lambda' \, I(\alpha, \delta, \lambda') \cdot \mathrm{PSF}(x - \alpha, y - \delta; \lambda') \cdot \mathrm{LSF}(\lambda - \lambda'; x, y) + N(x, y, \lambda)$$

where:
- $\mathrm{PSF}(x - \alpha, y - \delta; \lambda')$ is the spatial **Point Spread Function** of the atmosphere and telescope optics (often parameterized as a Moffat or 2D Gaussian profile with $\mathrm{FWHM}_{\rm PSF} \sim 0.6'' - 1.0''$ in seeing-limited mode, or $\sim 0.05'' - 0.1''$ with Adaptive Optics).
- $\mathrm{LSF}(\lambda - \lambda'; x, y)$ is the instrumental **Line Spread Function** characterizing the spectral resolution:
  $$R \equiv \frac{\lambda}{\Delta\lambda_{\rm FWHM}} = \frac{c}{\Delta v_{\rm inst}}$$
  where $\Delta v_{\rm inst} \approx \frac{c}{R \sqrt{8\ln 2}}$ sets the minimum measurable stellar velocity dispersion.
- $N(x, y, \lambda)$ is the total noise variance tensor (Poisson photon shot noise from galaxy + sky background + detector readout noise and dark current).

### 2D Kinematic Moment Maps
By collapsing or fitting the datacube along the spectral coordinate $\lambda$ at each spaxel $(x, y)$, astronomers construct 2D physical maps:
1. **0-th Spectral Moment (Flux Map / Narrow-band Image)**:
   $$F_0(x, y) = \int_{\lambda_1}^{\lambda_2} F(x, y, \lambda) \, d\lambda$$
2. **1-st Spectral Moment (Mean Velocity Field $V(x, y)$)**:
   $$\bar{v}(x, y) = c \frac{\int (\lambda - \lambda_0) F_{\rm line}(x, y, \lambda) \, d\lambda}{\lambda_0 \int F_{\rm line}(x, y, \lambda) \, d\lambda}$$
3. **2-nd Spectral Moment (Velocity Dispersion Map $\sigma(x, y)$)**:
   $$\sigma_{\rm obs}^2(x, y) = c^2 \frac{\int (\lambda - \bar{\lambda})^2 F_{\rm line}(x, y, \lambda) \, d\lambda}{\lambda_0^2 \int F_{\rm line}(x, y, \lambda) \, d\lambda} - \sigma_{\rm inst}^2$$

---

## 3. Optical Architectures: How to Reformat 2D into 1D

Because astronomical CCD and CMOS detectors are planar 2D arrays $(X_{\rm det}, Y_{\rm det})$, a 3D dataset $(x, y, \lambda)$ must be optically reformatted so that dispersion does not cause overlapping spectra. Three principal optical techniques achieve this:

```text
1. Lenslet Array                2. Lenslet + Fibers             3. Image Slicer
  [•][•][•][•] (Microlenses)      [•][•][•][•] (Microlenses)      |/|/|/|/| (Mirrors)
       |                               |                              |
       v (Rotated Focal Plane)         v (Fiber Bundle)               v (Flat Slices)
  .  .  .  .  (Pinpoints)         | | | | | | | |                 ===============
  \  \  \  \  (Dispersed)              |                               |
  ======== (CCD Spectra)               v                               v
                                  ===============                 ===============
                                  (Linear Pseudo-slit)            (Staggered Pseudo-slit)
```

### 1. Lenslet (Microlens) Array
- **Optical Principle**: A 2D array of miniature refractive lenses at the telescope focal plane condenses each spatial spaxel into an isolated micropupil spot. The array is tilted by a small angle $\theta$ relative to the dispersion direction so that spectra dispersed from adjacent pinpoints lie parallel to each other without overlapping.
- **Instruments**: SAURON (WHT), OASIS (CFHT), TIGER, Keck OSIRIS.
- **Pros & Cons**: High throughput (no fiber coupling losses), rigid optical geometry. However, spectra are restricted to very short wavelength ranges ($\Delta\lambda \sim 500\,\text{\AA}$) to avoid spectral overlapping, severely limiting stellar population diagnostics.

### 2. Lenslet Array Coupled to Optical Fibers
- **Optical Principle**: Each microlens focuses light from a spatial patch into an optical fiber core. The fibers are gathered from the 2D focal arrangement and rearranged into a linear 1D **pseudo-slit** at the spectrograph entrance.
- **Instruments**: VLT VIMOS-IFU, SDSS-IV MaNGA, AAT SAMI, CALIFA (PPAK).
- **Pros & Cons**: Allows long, continuous spectra covering the entire optical band ($3600 - 10000\,\text{\AA}$). However, fibers suffer from focal ratio degradation (FRD), internal transmission losses, and spatial undersampling (gaps between circular fiber cores, requiring dithering).

### 3. Image Slicer (Advanced Mirror Slicers)
- **Optical Principle**: A stack of thin, precision spherical/toroidal mirrors slices the 2D field into long narrow strips. Secondary folding and pupil mirrors realign these strips end-to-end into a single continuous 1D pseudo-slit feeding a diffraction grating.
- **Instruments**: **VLT MUSE**, Keck KCWI, **JWST NIRSpec IFU**, JWST MIRI-MRS.
- **Pros & Cons**: Supreme optical throughput (pure reflective optics, no fibers, no chromatic absorption), $100\%$ spatial filling factor, wide simultaneous wavelength coverage. Engineering complexity and fabrication tolerances are extremely demanding.

---

## 4. Adaptive 2D Spatial Binning: The Voronoi Algorithm

In extended galaxies, the stellar surface brightness drops exponentially from the core to the outskirts ($I(R) \propto e^{-R/h}$ or $I(R) \propto e^{-b_n(R/R_e)^{1/n}}$). While central spaxels have $\mathrm{SNR} > 100$, individual outer spaxels frequently fall below $\mathrm{SNR} \sim 2-5$, where stellar absorption lines cannot be fitted reliably.

Naive spatial averaging (such as $N \times N$ rectangular binning or circular radial annuli) destroys spatial resolution in the high-SNR center and washes out 2D non-axisymmetric kinematic features (e.g., bars, kinematically decoupled cores).

### The Voronoi Tessellation Solution (Cappellari & Copin 2003)
The optimal solution is **adaptive 2D Voronoi binning**, which partitions the 2D sky plane into contiguous polygonal cells (Voronoi bins) such that:
1. Every individual bin achieves a user-defined target signal-to-noise ratio:
   $$\mathrm{SNR}_{\rm bin} \equiv \frac{\sum_{i \in \mathrm{bin}} S_i}{\sqrt{\sum_{i \in \mathrm{bin}} \sigma_i^2}} \ge \mathrm{SNR}_{\rm target} \quad (\text{typically } 30 - 50)$$
2. In the bright central regions where single spaxels already satisfy $S_i / \sigma_i \ge \mathrm{SNR}_{\rm target}$, the bin size remains a **single spaxel**, preserving maximum telescope spatial resolution.
3. In the faint outer regions, bins organically expand into larger polygons, pooling photons to meet the SNR threshold without azimuthal smearing.

```text
       Central High Surface Brightness         Outer Low Surface Brightness
       (Single Unbinned Spaxels)              (Large Adaptive Voronoi Bins)
             +---+---+---+                         /-------\
             | . | . | . |                        /    .    \
             +---+---+---+                       /     .     \
             | . | * | . |                      |      *      |
             +---+---+---+                       \     .     /
             | . | . | . |                        \    .    /
             +---+---+---+                         \-------/
             (FWHM Resolved)                      (SNR Preserved >= 40)
```

---

## 5. Kinematic Extraction from IFU Datacubes

Once binned, the spectrum in each Voronoi bin is analyzed to extract line-of-sight stellar kinematics.

### Penalized Pixel-Fitting (pPXF; Cappellari & Emsellem 2004, Cappellari 2017)
The observed galaxy spectrum $G(\ln\lambda)$ is modeled as the convolution of an optimal synthetic stellar template $T(\ln\lambda)$ with the Gauss-Hermite line-of-sight velocity distribution $\mathcal{L}(v)$:

$$G(x) = \sum_{k=1}^K w_k \left[ T_k(x) * \mathcal{L}(c \cdot x) \right] + \sum_{l=0}^L a_l P_l(x)$$

where:
- $w_k \ge 0$ are non-negative weights assigned to an empirical library of single stellar populations (MILES, Indo-U.S., or synthetic SSP models).
- $P_l(x)$ are additive/multiplicative Legendre polynomials correcting for residual continuum flux calibration and interstellar dust extinction.
- $\mathcal{L}(v)$ is parameterized by mean velocity $V$, dispersion $\sigma$, and Gauss-Hermite skewness ($h_3$) and kurtosis ($h_4$):
  $$\mathcal{L}(v) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{y^2}{2}\right) \left[ 1 + h_3 H_3(y) + h_4 H_4(y) \right], \qquad y \equiv \frac{v - V}{\sigma}$$

The fit minimizes a penalized objective function:
$$\chi_{\rm pen}^2 = \chi^2 \left( 1 + \lambda^2 \left[ h_3^2 + h_4^2 \right] \right)$$
The penalty parameter $\lambda$ prevents unphysical runaway values of $h_3$ and $h_4$ in low-SNR spectra, smoothly recovering pure Gaussians when data quality degrades.

### Gas vs. Stellar Kinematics Decoupling
Because IFS covers both stellar absorption lines (e.g., $\mathrm{Ca}\,\mathrm{H\&K}$, $\mathrm{Mg}\,b$, $\mathrm{Fe}\,5270$, $\mathrm{Na}\,\mathrm{D}$) and nebular emission lines ($\mathrm{H}\beta\,\lambda 4861$, $[\mathrm{O}\,\text{III}]\,\lambda\lambda 4959, 5007$, $[\mathrm{N}\,\text{II}]\,\lambda\lambda 6548, 6584$, $\mathrm{H}\alpha\,\lambda 6563$, $[\mathrm{S}\,\text{II}]\,\lambda\lambda 6716, 6731$), simultaneous fitting enables direct comparison:
- **Kinematic Misalignment Angle $\Delta\Psi = |\mathrm{PA}_{\rm phot} - \mathrm{PA}_{\rm kin}|$**: Detects genuine triaxial shapes in ellipticals (Franx et al. 1991).
- **Gas vs. Star Counter-Rotation**: In $\sim 10\%$ of S0 and elliptical galaxies, ionized gas rotates in the exact opposite direction of stars ($\Delta\Psi_{\rm gas-star} \approx 180^\circ$), proving external gas accretion from minor mergers or cosmic filament infall.

---

## 6. Flagship IFU Surveys and Benchmark Facilities

```
+=============================================================================================+
| Facility / Survey | Telescope / Aperture | Sampling & Field of View | Wavelength / Res (R)   |
+=============================================================================================+
| VLT MUSE          | 4 x 8.2 m UTs (ESO)  | 0.2'' spaxels, 1' x 1'   | 4750-9350 A, R~1750-3750|
| Keck KCWI         | 10 m Keck II         | 0.35''-1.4'', 20'' x 33''| 3500-5600 A, R~1000-20000|
| SDSS-IV MaNGA     | 2.5 m Sloan          | 19-127 fiber bundles     | 3600-10300 A, R~2000    |
| SAMI Survey       | 3.9 m AAT (Australia)| 13 hexabundles (61 fibers)| 3700-9500 A, R~1800-4500|
| JWST NIRSpec IFU  | 6.5 m Space (JWST)   | 0.1'' slicers, 3'' x 3'' | 0.6-5.3 um, R~100-2700  |
+=============================================================================================+
```

### Major Physical Breakthroughs Enabled by IFS
1. **The ATLAS-3D Discovery (Emsellem et al. 2011)**: Proved that early-type galaxies are physically divided into **Fast Rotators** ($86\%$, oblate disks with regular stellar rotation and high angular momentum $\lambda_R$) and **Slow Rotators** ($14\%$, massive triaxial systems with no net rotation, kinematically decoupled cores, formed by dry dissipationless major mergers).
2. **Dynamical SMBH Mass Measurements**: Resolving the stellar and gas velocity fields within the black hole gravitational sphere of influence ($r_{\rm infl} = G M_\bullet / \sigma^2$) using Adaptive Optics IFUs (SINFONI, MUSE-AO, NIFS).
3. **Resolving Cosmic Web Filaments**: MUSE ultra-deep exposures directly imaging the fluorescent Ly$\alpha$ emission of the intergalactic medium around high-$z$ quasars.

---

## 7. Textbook & Course References

- **Prof. Alessandro Pizzella Course Dispensa**:
  - File: `dispense_smbh_20_eng.pdf`, Section on Stellar Kinematics and IFU Spectroscopy, pp. 15–22.
  - Slide Set: `gal_bh-15..28` (Stellar dynamics, Gauss-Hermite moments, 2D velocity fields).
- **Mo, van den Bosch & White (2010), *Galaxy Formation and Evolution***:
  - Chapter 2, Section 2.5 "Kinematics of Galaxies", pp. 90–94 (integral field spectroscopy, Gauss-Hermite parametrization).
- **Binney & Merrifield (1998), *Galactic Astronomy***:
  - Chapter 4, Section 4.3 "Elliptical Galaxies", pp. 194–205 (stellar kinematics, line broadening, velocity dispersions).
- **Primary Literature References**:
  - Cappellari, M., & Copin, Y. 2003, MNRAS, 342, 345 (Adaptive 2D Voronoi binning algorithm).
  - Cappellari, M. 2017, MNRAS, 466, 798 (pPXF full spectrum fitting).
  - Emsellem, E., et al. 2011, MNRAS, 414, 888 (The ATLAS-3D project: Fast and Slow rotators).
  - Bacon, R., et al. 2010, Proc. SPIE, 7735, 773508 (The VLT MUSE instrument).

---

## 8. See Also

- [LOSVD](LOSVD.html)
- [Stellar kinematics measurements](Stellar%20kinematics%20measurements.html)
- [MaNGA survey](MaNGA%20survey.html)
- [MUSE datacubes](MUSE%20datacubes.html)
- [Spectrograph types](Spectrograph%20types.html)
- [Velocity dispersion from line width](Velocity%20dispersion%20from%20line%20width.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="LOSVD.html" class="backlink-item">LOSVD</a></li>
    <li class="backlink-item-wrap"><a href="MaNGA%20survey.html" class="backlink-item">MaNGA survey</a></li>
    <li class="backlink-item-wrap"><a href="Multi-object%20spectroscopy%20MOS.html" class="backlink-item">Multi-object spectroscopy MOS</a></li>
    <li class="backlink-item-wrap"><a href="Spectrograph%20design.html" class="backlink-item">Spectrograph design</a></li>
    <li class="backlink-item-wrap"><a href="Spectrograph%20types.html" class="backlink-item">Spectrograph types</a></li>
    <li class="backlink-item-wrap"><a href="Velocity%20dispersion%20from%20line%20width.html" class="backlink-item">Velocity dispersion from line width</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
  </ul>
</div>

