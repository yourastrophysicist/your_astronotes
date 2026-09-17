---
layout: "default"
title: "14_Stellar_Activity_and_Radial_Velocity_Jitter"
---
{% raw %}
# Lesson 14 – Radial Velocity IV: Stellar Activity and RV Jitter

*Exoplanetary Astrophysics, Prof. Giampaolo Piotto (Lecture 25/11/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## The Stellar Noise Floor

While spectrographs like ESPRESSO achieve instrumental precision below $10\text{ cm s}^{-1}$, the stellar photosphere is not a static emitter. Dynamic hydrodynamic and magnetohydrodynamic processes in the stellar atmosphere induce velocity anomalies—collectively termed **astrophysical stellar jitter**—with amplitudes ranging from $0.5\text{ m s}^{-1}$ to $>50\text{ m s}^{-1}$, vastly exceeding the reflex velocity of Earth-mass planets ($K \approx 0.09\text{ m s}^{-1}$).

```
                      ASTROPHYSICAL TIMESCALES OF STELLAR JITTER
 Frequency / Timescale
    ▲
10 yr │  Magnetic Activity Cycles (Maunder-like dynamos)    ~ 2 - 10 m/s
      │
 1 mo │  Rotational Modulation of Spots & Faculae (P_rot)   ~ 1 - 20 m/s
      │
 1 d  │  Supergranulation Networks                          ~ 1 - 2 m/s
      │
 1 hr │  Granulation Convective Turnover                     ~ 0.5 - 2 m/s
      │
 5 min│  p-Mode Acoustic Stellar Oscillations               ~ 0.5 - 2 m/s
      └─────────────────────────────────────────────────────────────────> Velocity Amplitude
```

---

## Physical Mechanisms of Stellar Jitter

### 1. Acoustic p-Mode Oscillations
Turbulent convection in the outer stellar envelope stochastically excites standing acoustic waves (p-modes). For solar-type stars:
- Characteristic timescale: $\tau_{\text{osc}} \approx 5 - 15\text{ minutes}$.
- Velocity amplitude: $\sigma_{\text{osc}} \sim 0.5 - 1.5\text{ m s}^{-1}$.
- **Observational Mitigation**: Individual exposures must be lengthened to $t_{\text{exp}} \approx 15 - 20\text{ minutes}$ (or multiple shorter exposures binned) to integrate over several acoustic cycles, averaging the oscillation velocity to $< 0.1\text{ m s}^{-1}$.

### 2. Granulation and Supergranulation
Convective energy transport produces surface granulation: hot, bright gas ascends at the center of convective cells, radiates energy, cools, and sinks along narrow, dark intergranular lanes:
- **Convective Blueshift**: Because rising granules are hotter ($T_{\text{hot}} > T_{\text{cool}}$) and cover a larger fractional surface area ($\sim 70\%$) than sinking lanes, their blueshifted light dominates the disk-integrated spectrum. In the Sun, this produces a net net convective blueshift of:
  $$v_{\text{conv}} \approx -300\text{ m s}^{-1}$$
- **Granulation Noise**: The stochastic birth, death, and reorganization of granules on timescales of $\sim 10\text{ minutes} - 24\text{ hours}$ produces residual velocity fluctuations of $\sim 1 - 2\text{ m s}^{-1}$.
- **Supergranulation**: Larger horizontal convective cells ($D \sim 30,000\text{ km}$) persisting over $24 - 48\text{ hours}$, contributing $\sim 1\text{ m s}^{-1}$ variations.

### 3. Rotational Modulation: Spots and Faculae
As the star rotates with period $P_{\text{rot}}$, magnetic active regions traverse the visible stellar disk. This induces two distinct Doppler perturbations:

```
                  THE TWO MECHANISMS OF ROTATIONAL JITTER
 1. Rotational Imbalance (Flux Deficit)       2. Suppression of Convective Blueshift
    Approaching Limb    Receding Limb            Normal Surface        Plage / Faculae
      (Blueshifted)      (Redshifted)            Hot rising cells      Suppressed rising
         ┌───┐             ┌───┐                  net blueshift        NO blueshift ==>
         │   │   [Spot]●   │   │                    -300 m/s             Apparent REDSHIFT!
         └───┘             └───┘
    Dark spot breaks line symmetry              DOMINANT EFFECT in quiet stars (Sun):
    ==> Centroid shifts by ~ 0.1 - 1 m/s         Induces Delta v ~ 1 - 5 m/s
```

1. **Flux Imbalance (Photometric Effect)**: A dark starspot on the approaching (blueshifted) limb reduces the blueshifted flux, skewing the disk-integrated absorption line toward the red. As the spot crosses the center and moves to the receding limb, the line skews toward the blue. Amplitude scales with projected equatorial velocity:
   $$\Delta v_{\text{spot}} \propto f_{\text{spot}} \cdot v \sin i$$
2. **Suppression of Convective Blueshift (Magnetic Effect)**:
   In bright faculae and plage regions, intense localized vertical magnetic fields ($B \sim 1-2\text{ kG}$) exert Lorentz forces that inhibit horizontal gas flows, suppressing convective upwelling. The absence of convective blueshift causes the magnetized patch to appear **strongly redshifted** relative to the quiet photosphere.
   - For solar-type stars, **suppression of convective blueshift is the dominant driver of RV jitter**, accounting for $>80\%$ of the total activity amplitude (Meunier et al. 2010, Haywood et al. 2016).

### 4. Long-Term Magnetic Cycles
Stellar dynamos generate cyclical reversals of global magnetic fields (e.g., the 11-year solar Schwabe cycle). The changing ratio of faculae to quiet photosphere modulates convective blueshift suppression, producing apparent velocity shifts of $\sim 2 - 15\text{ m s}^{-1}$ over decadal baselines that mimic long-period giant planets.

---

## Diagnostic Indicators of Stellar Activity

To distinguish true planetary Doppler shifts (which displace the entire stellar atmosphere rigidly without altering spectral line profiles) from stellar activity (which distorts spectral line shapes), astronomers compute dedicated spectroscopic proxies:

```
 Diagnostic Indicator          Spectral Feature                     Physical Mechanism
 ─────────────────────────────────────────────────────────────────────────────────────────────
 log R'_HK                     Ca II H & K cores (393.4, 396.8 nm)   Chromospheric non-thermal heating
 H-alpha Index                 H-alpha core (656.3 nm)               Chromospheric recombination
 CCF FWHM                      Cross-correlation function width      Temperature / velocity dispersion
 Bisector Inverse Slope (BIS)  Asymmetry of CCF line wings vs core   Convective distortion / spots
 ─────────────────────────────────────────────────────────────────────────────────────────────
```

### The CCF Bisector Inverse Slope (BIS)
The bisector of an absorption line (or CCF profile) is the locus of midpoints across the line profile as a function of depth $d$:

$$v_{\text{bis}}(d) = \frac{v_{\text{blue}}(d) + v_{\text{red}}(d)}{2}$$

The **Bisector Inverse Slope (BIS)** measures the velocity difference between the upper and lower halves of the profile (**Queloz et al. 2001**):

$$\text{BIS} = \bar{v}_{\text{top}} (d \in [0.1, 0.4]) - \bar{v}_{\text{bottom}} (d \in [0.6, 0.85])$$

- **True Planet Signal**: The spectral line shifts rigidly without changing shape. BIS remains constant ($\Delta \text{BIS} \approx 0$); no correlation exists between $v_r$ and BIS.
- **Activity-Induced Signal**: The line profile is distorted asymmetrically by spots or faculae. $v_r$ and BIS exhibit a strong linear or anti-correlated relationship:
  $$r(v_r, \text{BIS}) \ne 0 \implies \text{Activity Origin}$$

---

## Statistical and Algorithmic Mitigation Frameworks

```
                      ADVANCED ACTIVITY MITIGATION FRAMEWORKS
 ┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
 │ Framework                 │ Mathematical Strategy     │ Key Literature Reference  │
 ├───────────────────────────┼───────────────────────────┼───────────────────────────┤
 │ Multi-Dimensional GP      │ Shared latent covariance  │ Rajpaul et al. 2015;      │
 │ Regression                │ kernel modeling RV & act. │ Barragán et al. 2022      │
 ├───────────────────────────┼───────────────────────────┼───────────────────────────┤
 │ SCALPELS                  │ PCA on autocorrelation of │ Collier Cameron et al.    │
 │                           │ CCF profiles              │ 2021                      │
 ├───────────────────────────┼───────────────────────────┼───────────────────────────┤
 │ Line-by-Line (LBL)        │ Statistical pruning of    │ Dumusque 2018;            │
 │ Analysis                  │ magnetically active lines │ Cretignier et al. 2020    │
 └───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

### 1. Multi-Dimensional Gaussian Process Framework (Rajpaul et al. 2015)
Models the radial velocity $v_r(t)$ and simultaneous activity proxies (e.g., $\log R'_{HK}(t)$, $\text{BIS}(t)$) as linear combinations of an underlying latent Gaussian process $G(t)$ (representing the projected area of active regions) and its time derivative $\dot{G}(t)$ (representing the rate of change of active regions across the disk):

$$v_r(t) = V_{\text{Keplerian}}(t) + A_1 G(t) + B_1 \dot{G}(t)$$

$$\log R'_{HK}(t) = A_2 G(t)$$

$$\text{BIS}(t) = B_3 \dot{G}(t)$$

The latent function $G(t)$ is parameterized via a **quasi-periodic covariance kernel**:

$$k(t, t') = \eta_1^2 \exp\left( -\frac{(t - t')^2}{2 \eta_2^2} - \frac{2 \sin^2\left( \frac{\pi (t - t')}{\eta_3} \right)}{\eta_4^2} \right)$$

where $\eta_3$ corresponds to the stellar rotation period $P_{\text{rot}}$, and $\eta_2$ represents the active region decay timescale.

### 2. SCALPELS (Collier Cameron et al. 2021)
Applies Principal Component Analysis (PCA) to the autocorrelation function (ACF) of the CCF profile. Because true Doppler reflex shifts produce pure translations of the profile (preserving the ACF invariant), while stellar activity alters the ACF shape, SCALPELS isolates shape-driven velocity perturbations and projects them out of the RV time series.

### 3. Line-by-Line (LBL) RV Extraction (Dumusque 2018, Cretignier et al. 2020)
Instead of co-adding all lines into an omnibus CCF, LBL algorithms measure radial velocities for tens of thousands of individual spectral lines independently. Because lines with high Landé $g$-factors ($g_{\text{eff}} > 1.5$) are highly sensitive to Zeeman splitting in magnetic regions, while low Landé lines ($g_{\text{eff}} \approx 0$) are insensitive, clustering algorithms can isolate magnetically insensitive lines to compute an activity-free stellar velocity.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [13_RV_Wavelength_Calibration_and_Error_Budgets](./13_RV_Wavelength_Calibration_and_Error_Budgets.html)
- Next Lecture: [15_Planetary_Transits_Geometry_and_Rossiter_McLaughlin](./15_Planetary_Transits_Geometry_and_Rossiter_McLaughlin.html)
- Related Notes: [Gaussian Process Regression in Light Curve Detrending](../../../03_Zettel/Computational/Gaussian%20Process%20Regression%20in%20Light%20Curve%20Detrending.html) | [Calcium and CaII H+K](../../../03_Zettel/Theory/Calcium%20and%20CaII%20H%2BK.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./13_RV_Wavelength_Calibration_and_Error_Budgets.html" class="backlink-item">13_RV_Wavelength_Calibration_and_Error_Budgets</a></li>
    <li class="backlink-item-wrap"><a href="./15_Planetary_Transits_Geometry_and_Rossiter_McLaughlin.html" class="backlink-item">15_Planetary_Transits_Geometry_and_Rossiter_McLaughlin</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Theory/Stellar%20activity%20signals%20and%20radial%20velocity%20jitter%20mitigation.html" class="backlink-item">Stellar activity signals and radial velocity jitter mitigation</a></li>
  </ul>
</div>
