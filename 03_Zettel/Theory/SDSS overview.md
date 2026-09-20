---
layout: "default"
title: "SDSS overview"
tags: ""
---
# Sloan Digital Sky Survey (SDSS) Overview

The Sloan Digital Sky Survey (SDSS) represents the foundational wide-field astronomical survey that established precision statistical galaxy science. Operating primarily from the dedicated 2.5-meter telescope at Apache Point Observatory (APO), New Mexico, SDSS mapped over one-third of the celestial sphere in five optical passbands ($u, g, r, i, z$) and accumulated millions of optical spectra. The resulting datasets established the benchmark empirical foundations for the local galaxy luminosity function, color bimodality, large-scale cosmological clustering, and morphological classifications.

---

## 1. Telescope and Photometric Instrumentation

### The Optical System
- **Telescope Design** - Dedicated 2.5-meter f/5 modified Ritchey-Chrétien altitude-azimuth telescope with a 3-degree wide field of view.
- **Location** - Apache Point Observatory, New Mexico (altitude 2788 m), offering excellent atmospheric transparency and median optical seeing of $\sim 1.4$ arcseconds in the $r$-band.
- **Primary Instrument** - The SDSS imaging camera featured 30 SITe $2048 \times 2048$ pixel charge-coupled devices (CCDs) arranged in 5 columns of 6 rows, plus 22 smaller astrometric and focus chips.

### Time-Delay-and-Integrate (TDI) Drift-Scan Mode
The imaging survey operated in drift-scanning mode. Instead of tracking the sky with stationary exposures, the telescope remained fixed along a great circle while the charge on the CCDs was shifted synchronously at the sidereal rate along the columns.
- Integration time per filter -
  $$t_{\mathrm{int}} = \frac{N_{\mathrm{pix}} \cdot \theta_{\mathrm{pix}}}{\Omega_{\mathrm{sidereal}} \cos \delta} \approx 53.9 \text{ seconds}$$
  where $N_{\mathrm{pix}} = 2048$, pixel scale $\theta_{\mathrm{pix}} = 0.396$ arcsec/pixel, and $\Omega_{\mathrm{sidereal}} = 15.041$ arcsec/s.
- Each scan produces continuous optical stripes across five filters, yielding contiguous multi-color imaging across thousands of square degrees.

---

## 2. The SDSS Five-Band Photometric System (ugriz)

The SDSS filter system was designed to optimize stellar and extragalactic spectral characterization, dividing the optical spectrum from the atmospheric ultraviolet cutoff ($\sim 3000$ \AA) to the silicon CCD cutoff ($\sim 10000$ \AA) into five broad passbands.

### Filter Parameters and Wavelength Coverage
1. **$u$-band** - Effective wavelength $\lambda_{\mathrm{eff}} \approx 3551$ \AA, FWHM $\Delta \lambda \approx 570$ \AA. Positioned below the Balmer jump ($3646$ \AA) and the 4000 \AA\ break ($D_n 4000$), measuring young star formation and hot white dwarfs.
2. **$g$-band** - Effective wavelength $\lambda_{\mathrm{eff}} \approx 4686$ \AA, FWHM $\Delta \lambda \approx 1390$ \AA. Covers blue stellar continuum, spanning the region between the 4000 \AA\ break and $\text{H}\beta$.
3. **$r$-band** - Effective wavelength $\lambda_{\mathrm{eff}} \approx 6165$ \AA, FWHM $\Delta \lambda \approx 1370$ \AA. High throughput filter positioned in low night-sky background. Serves as the primary reference passband for SDSS galaxy targeting and Petrosian photometry.
4. **$i$-band** - Effective wavelength $\lambda_{\mathrm{eff}} \approx 7481$ \AA, FWHM $\Delta \lambda \approx 1530$ \AA. Covers the near-infrared red giant continuum.
5. **$z$-band** - Effective wavelength $\lambda_{\mathrm{eff}} \approx 8931$ \AA, FWHM $\Delta \lambda \approx 950$ \AA. Extends out to the atmospheric water vapor absorption and CCD sensitivity limit.

### Magnitude System Definition
SDSS calibrated photometry on the AB magnitude system (Oke and Gunn 1983), where an object with flat spectral energy distribution per unit frequency $f_\nu$ has zero color -
$$m_{\mathrm{AB}} = -2.5 \log_{10}\left( \frac{f_\nu}{3631 \text{ Jy}} \right) = -2.5 \log_{10} f_\nu - 48.60$$
where $1 \text{ Jy} = 10^{-23} \text{ erg s}^{-1} \text{ cm}^{-2} \text{ Hz}^{-1}$.

---

## 3. Spectroscopic Architecture and Target Selection

### Fiber Spectrographs
SDSS utilized two identical multi-fiber spectrographs fed by optical fibers plugged by hand into pre-drilled aluminum plates positioned at the focal plane.
- **SDSS-I and SDSS-II** - 640 fibers per plate, fiber core diameter $3.0$ arcseconds ($\sim 5.5$ kpc physical aperture at median redshift $z \sim 0.1$).
- **SDSS-III (BOSS) and SDSS-IV (eBOSS)** - 1000 fibers per plate, fiber core diameter $2.0$ arcseconds.
- Spectral coverage - Continuous wavelength range $3800 - 9200$ \AA\ at resolving power $R \equiv \lambda / \Delta \lambda \approx 1800 - 2200$.

### Algorithmic Target Selection Samples
1. **Main Galaxy Sample (MGS)** - Strictly flux-limited galaxy sample defined by Petrosian $r$-band magnitude -
   $$r_{\mathrm{Petro}} \le 17.77 \text{ mag}$$
   with mean surface brightness cut $\mu_{r, 50} \le 24.5 \text{ mag arcsec}^{-2}$. Yielded over 700,000 galaxy spectra with median redshift $z \approx 0.104$, achieving completeness greater than 99 percent across the survey area.
2. **Luminous Red Galaxy (LRG) Sample** - Targeted massive early-type galaxies with prominent 4000 \AA\ breaks up to $z \sim 0.5$ using color-magnitude cuts in the $(g-r)$ versus $(r-i)$ diagram to isolate the redshifted break.
3. **Quasar Survey** - Automated color-color selection in multi-dimensional $u-g, g-r, r-i, i-z$ space to identify point sources with colors deviating from the stellar locus, producing the largest uniform quasar catalog in astronomy ($z = 0.1 - 5.5$).

---

## 4. Mathematical Formulation of the K-Correction

Because galaxies are observed at cosmological redshifts $z > 0$, the light detected in a fixed observer-frame passband $R$ originates from a bluer rest-frame passband $Q$. The conversion between observer-frame apparent magnitude $m_R$ and rest-frame absolute magnitude $M_Q$ is given by -
$$m_R = M_Q + 5 \log_{10}\left( \frac{d_L(z)}{10 \text{ pc}} \right) + K_{QR}(z)$$
where $d_L(z)$ is the luminosity distance.

### Step-by-Step Calculus Derivation
1. The energy flux $F_R$ received through filter $R$ with transmission function $T_R(\lambda)$ (in photon units) is -
   $$F_R = \frac{\int f_\lambda(\lambda_{\mathrm{obs}}) T_R(\lambda_{\mathrm{obs}}) \lambda_{\mathrm{obs}} \, d\lambda_{\mathrm{obs}}}{\int T_R(\lambda_{\mathrm{obs}}) \lambda_{\mathrm{obs}} \, d\lambda_{\mathrm{obs}}}$$
2. By cosmological redshift, observed wavelength is related to emitted rest-frame wavelength by $\lambda_{\mathrm{obs}} = \lambda_{\mathrm{rest}}(1 + z)$. The received flux density is related to the intrinsic luminosity density by -
   $$f_\lambda(\lambda_{\mathrm{obs}}) = \frac{L_\lambda(\lambda_{\mathrm{rest}})}{4\pi d_L^2 (1 + z)}$$
3. Change variable of integration in the numerator from $\lambda_{\mathrm{obs}}$ to $\lambda_{\mathrm{rest}}$ using $d\lambda_{\mathrm{obs}} = (1 + z) \, d\lambda_{\mathrm{rest}}$ -
   $$F_R = \frac{\int \frac{L_\lambda(\lambda_{\mathrm{rest}})}{4\pi d_L^2 (1 + z)} T_R(\lambda_{\mathrm{rest}}(1 + z)) \lambda_{\mathrm{rest}} (1 + z)^2 \, d\lambda_{\mathrm{rest}}}{\int T_R(\lambda) \lambda \, d\lambda}$$
   $$F_R = \frac{1}{4\pi d_L^2} (1 + z) \frac{\int L_\lambda(\lambda) T_R(\lambda(1 + z)) \lambda \, d\lambda}{\int T_R(\lambda) \lambda \, d\lambda}$$
4. Compare this to the rest-frame emission through filter $Q$ at standard distance $10 \text{ pc}$ -
   $$F_Q = \frac{1}{4\pi (10\text{ pc})^2} \frac{\int L_\lambda(\lambda) T_Q(\lambda) \lambda \, d\lambda}{\int T_Q(\lambda) \lambda \, d\lambda}$$
5. Applying the definition of magnitude differences $m_R - M_Q = -2.5 \log_{10}(F_R / F_Q)$ and factoring out the distance modulus $5 \log_{10}(d_L / 10\text{ pc})$, the exact K-correction is -
   $$K_{QR}(z) = -2.5 \log_{10}\left[ (1 + z) \frac{\int L_\lambda(\lambda) T_R(\lambda(1 + z)) \lambda \, d\lambda}{\int T_R(\lambda) \lambda \, d\lambda} \cdot \frac{\int T_Q(\lambda) \lambda \, d\lambda}{\int L_\lambda(\lambda) T_Q(\lambda) \lambda \, d\lambda} \right]$$
In SDSS publications, absolute magnitudes are conventionally K-corrected to rest-frame bands at $z = 0.1$ (denoted $^{0.1}r$ or $^{0.1}g$) to minimize model dependency near the median survey redshift.

---

## 5. Observational Graph Literacy and ASCII Blueprints

### Diagram 1 - SDSS ugriz Filter Response Curves and Spectral Energy Distribution
```text
  Relative Transmission T(lambda)
  1.0 +----------------------------------------------------------------+
      |       u          g            r            i            z      |
  0.8 |     /---\     /-----\     /-----\     /-----\     /-----\    |
      |    /     \   /       \   /       \   /       \   /       \   |
  0.6 |   /       \ /         \ /         \ /         \ /         \  |
      |  /         X           X           X           X           \ |
  0.4 | /         / \         / \         / \         / \         / |
      |/         /   \       /   \       /   \       /   \       /  |
  0.2 |         /     \     /     \     /     \     /     \     /   |
      |        | 4000 A|   |       |   |       |   |       |   |    |
  0.0 +--------+-------+---+-------+---+-------+---+-------+---+----+--+
     3000     3550    4000 4680        6160        7480        8930
                           Wavelength lambda [Angstroms]
```

### Diagram 2 - SDSS Main Galaxy Sample Completeness and Redshift Histogram
```text
  Number of Galaxies dN/dz [x 10^3]
   30 +----------------------------------------------------------------+
      |                           ^                                    |
   25 |                          / \                                  |
      |                         /   \                                 |
   20 |                        /     \                                |
      |                       /   |   \    Median z = 0.104            |
   15 |                      /    |    \                               |
      |                     /     |     \                              |
   10 |                    /      |      \                             |
      |                   /       |       \                            |
    5 |                  /        |        \                           |
      |        ........-/         |         \-..........               |
    0 +-------+---------+---------+----------+----------+--------------+
     0.00      0.04      0.08      0.12       0.16       0.20     0.24
                               Redshift z
```

---

## 6. Oral Exam Blackboard Presentation Script

When asked by Prof. Pizzella - *"What is the SDSS, how did its photometric and spectroscopic systems operate, and how do we compute K-corrections?"*

1. **State the primary survey characteristics** -
   - Write on the board - *"2.5m telescope at Apache Point, 54-CCD drift-scan camera, 5 optical filters ($u, g, r, i, z$), dual multi-fiber spectrographs (640 then 1000 fibers)."*
   - Explain - *"The photometric survey operated in time-delay-and-integrate mode, achieving uniform five-band optical imaging across one-third of the sky. The spectroscopic survey observed a complete flux-limited sample of over 700,000 galaxies at $r_{\mathrm{Petro}} \le 17.77$ mag."*

2. **Describe the filter system and AB magnitudes** -
   - Draw the 5 filter bands.
   - Explain - *"The filters span 3000 to 10000 \AA\ on the AB system ($m_{\mathrm{AB}} = -2.5 \log_{10} f_\nu - 48.60$). The $u$ and $g$ bands bracket the 4000 \AA\ break, enabling robust stellar population diagnostics and photometric redshifts."*

3. **Derive the K-correction on the blackboard** -
   - Write the relation - $m_R = M_Q + 5\log_{10}(d_L/10\text{ pc}) + K_{QR}(z)$.
   - Derive the integral formula showing the redshifting of the galaxy SED through the filter transmission curves.
   - State clearly - *"Because the rest-frame light is shifted into the observer band, the K-correction compensates for the change in effective bandpass width by $(1+z)$ and the shift in rest-frame spectral energy distribution."*

---

## 7. Primary Course References

- **Prof. Alessandro Pizzella's Lecture Notes** -
  - `Astrophysics_of_Galaxies.tex` (Part I - SDSS and Observational Foundations, page 16).
  - `dispense_LF1_1_eng-1.pdf` (SDSS photometric system, targeting, and K-corrections, pages 8-11).
  - `blanton2003_kcorrection.png` (K-correction transformations in SDSS passbands).
- **Seminal Literature** -
  - York, D. G., et al. (2000, AJ, 120, 1579) - *The Sloan Digital Sky Survey - Technical Summary*.
  - Stoughton, C., et al. (2002, AJ, 123, 485) - *Sloan Digital Sky Survey Early Data Release*.
  - Blanton, M. R., et al. (2003, AJ, 125, 2348) - *K-corrections and filter transformations in the Sloan Digital Sky Survey*.
  - Strauss, M. A., et al. (2002, AJ, 124, 1810) - *Spectroscopic Target Selection in the Sloan Digital Sky Survey - The Main Galaxy Sample*.

---

## 8. Related Knowledge Base Notes

- [[Luminosity function definition]] - The $1/V_{\mathrm{max}}$ Schmidt estimator and Malmquist bias in SDSS.
- [[Petrosian radius]] - Petrosian photometric apertures adopted for SDSS galaxy flux measurements.
- [[Color bimodality of galaxies]] - Empirical discovery of the red sequence and blue cloud in SDSS.
- [[Schechter function in magnitudes]] - Parametric luminosity function fits in SDSS $ugriz$ passbands.
- [[CAS galaxy classification]] - Quantitative structural parameters measured for SDSS galaxies.



## Linked References

- [[Color bimodality of galaxies]]
- [[Deep-field surveys]]
- [[Luminosity function definition]]
- [[MaNGA survey]]
- [[PCA spectral classification of galaxies]]
- [[Petrosian radius]]
- [[Red sequence and blue cloud]]
- [[Schechter function in magnitudes]]
- [[Astrophysics_of_Galaxies_MOC]]


