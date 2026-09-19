---
layout: "default"
title: "12_AI_and_Machine_Learning_in_Exoplanet_Science"
---
# Lesson 12 – AI and Machine Learning in Exoplanet Science

*Exoplanetary Astrophysics, Prof. Tiziano Zingales (Guest Lecture 18/11/2025)*  
*Index: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)*

---

## Astronomical Big Data and the Computational Bottleneck

Modern astronomy operates in the Petabyte regime. Surveys and facilities such as Gaia ($>1.8\times 10^9$ sources), the Vera C. Rubin Observatory (LSST; $\sim 20\text{ TB night}^{-1}$), the Square Kilometre Array (SKA), and space transit missions (Kepler, TESS, PLATO) produce data volumes where manual human inspection and classical brute-force grid evaluations are mathematically intractable.

In exoplanetary science, machine learning (ML) addresses three specific computational bottlenecks:
1. **Light Curve Classification and Transit Vetting**: Automated filtering of millions of photometric time series to identify sub-per-cent transit signals against stellar variability, instrument systematics, and astrophysical false positives.
2. **Atmospheric Spectral Reconstruction**: Bridging disjoint wavelength bands (e.g., HST WFC3 near-IR and Spitzer photometry) into continuous transmission spectra.
3. **Atmospheric Parameter Retrieval**: Accelerating high-dimensional Bayesian parameter estimation by orders of magnitude relative to traditional forward-model Markov Chain Monte Carlo (MCMC) and Nested Sampling.

---

## Neural Network Architectures in Exoplanet Science

```
                      MACHINE LEARNING ARCHITECTURES IN EXOPLANETOLOGY
 ┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
 │ Architecture              │ Mathematical Mechanism    │ Primary Exoplanet Task    │
 ├───────────────────────────┼───────────────────────────┼───────────────────────────┤
 │ Convolutional Neural Net  │ Shift-invariant local     │ Transit signal detection  │
 │ (CNN)                     │ kernels & feature pooling │ & false-positive vetting  │
 ├───────────────────────────┼───────────────────────────┼───────────────────────────┤
 │ Generative Adversarial    │ Minimax game between      │ Spectral reconstruction & │
 │ Network (GAN)             │ Generator and Discriminator│ inpainting from sparse data│
 ├───────────────────────────┼───────────────────────────┼───────────────────────────┤
 │ Transformer / Attention   │ Multi-head self-attention │ Prior generation for      │
 │ (e.g., Exoformer)         │ Q, K, V matrices          │ rapid atmospheric retrieval│
 └───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

### 1. Convolutional Neural Networks (CNNs) for Transit Vetting
Classical Box-fitting Least Squares (BLS) algorithms produce tens of thousands of threshold crossing events (TCEs), the majority of which are instrumental artifacts, asteroid crossings, or eclipsing binaries.
- **Shallue & Vandenburg (2018)** trained a 1D deep CNN on validated Kepler light curves. The model takes two inputs:
  1. A global phase-folded view (sampling out-of-transit stellar baseline and secondary eclipses).
  2. A localized zoom centered on the primary transit (sampling ingress, egress, and bottom shape).
- **Discovery of Kepler-90 i**: Applying this neural classifier to weak signals missed by automated thresholds led to the discovery of the eighth planet in the Kepler-90 system ($R_p = 1.32 R_\oplus, P = 14.45\text{ d}$), proving neural networks recover faint signals at low signal-to-noise ratios ($\text{SNR} \sim 5-7$).

---

## The Atmospheric Retrieval Problem

In transmission spectroscopy, stellar light filters through the planetary limb during transit. The effective transit radius $R_p(\lambda)$ varies with wavelength due to atomic and molecular absorption cross-sections $\sigma_i(\lambda)$:

$$R_p(\lambda) \approx R_0 + H \ln\left( \frac{\sum_i \sigma_i(\lambda) X_i P_0}{\tau_{\text{eq}}} \sqrt{\frac{2\pi R_0}{H}} \right)$$

where $H = \frac{k_B T_{\text{eq}}}{\mu g}$ is the atmospheric scale height, and $X_i$ is the volume mixing ratio of chemical species ($H_2O, CO, CO_2, CH_4, NH_3$).

```
                      TRADITIONAL BAYESIAN RETRIEVAL BOTTLENECK
 Forward Radiative Transfer Model
 (e.g., TauREx, petitRADTRANS)
          │
          ▼
   Compute 1D Atmosphere: P-T Profile, Opacities, Ray Tracing ──> Synthetic Spectrum
          │
          ▼
   Likelihood Evaluation: ln L(data | params)
          │
          ▼
   MCMC / Nested Sampling Engine: Requires 10^5 to 10^7 evaluations!
   Computation Time: ~ 24 - 72 CPU-hours PER PLANET
```

When scaling to the atmospheric survey of **Ariel (ESA; $\sim 1000$ exoplanet atmospheres)**, standard Bayesian forward-model sampling requires millions of CPU-hours.

---

## Machine Learning Acceleration: GANs and Transformers

### 1. Generative Adversarial Networks (GANs) for Spectral Inpainting
A GAN framework consists of a **Generator ($G$)** and a **Discriminator ($D$)** engaged in a two-player minimax game:

$$\min_G \max_D V(D, G) = \mathbb{E}_{\mathbf{x} \sim p_{\text{data}}} [\log D(\mathbf{x})] + \mathbb{E}_{\mathbf{z} \sim p_{\mathbf{z}}} [\log(1 - D(G(\mathbf{z})))]$$

- **Training Corpus**: $10^7$ synthetic atmospheric spectra computed across parameter grids of equilibrium temperature ($T_{\text{eq}} \in [400, 2500]\text{ K}$), surface gravity ($\log g$), and molecular abundances ($X_{H_2O}, X_{CO_2}, X_{CO}, X_{CH_4}$).
- **Application**: The generator is fed incomplete or band-limited observations (e.g., HST WFC3 data covering only $1.1 - 1.7\ \mu\text{m}$). The network acts as a non-linear spectral reconstructor, recovering the unobserved optical and thermal infrared continuum ($0.5 - 10\ \mu\text{m}$) and predicting bulk parameters without running iterative forward models.

### 2. Transformers for Atmospheric Inference (Exoformer)
Transformers replace recurrence with the **multi-head self-attention mechanism** (Vaswani et al. 2017):

$$\text{Attention}(Q, K, V) = \text{softmax}\left( \frac{QK^T}{\sqrt{d_k}} \right) V$$

- In exoplanetary spectral analysis (**Pagliaro et al. in prep**), the **Exoformer** architecture takes noisy, discrete transmission spectra directly and outputs continuous parameter probability distributions.
- **Informative Prior Injection**: Rather than using uniform or log-uniform priors over vast unconstrained domains, the Transformer predicts tight, accurate prior distributions centered near the true posterior mode.
- **Acceleration**: Feeding these ML-derived informative priors into nested sampling algorithms (e.g., PyMultiNest, Dynesty) achieves convergence **up to $7\times$ faster**, eliminating sampling degeneracies and accelerating large atmospheric surveys.

---

## Methodological Verification and Pitfalls

While neural networks provide immense acceleration, physical interpretation demands rigorous validation:
1. **Out-of-Distribution (OOD) Vulnerability**: A model trained on equilibrium chemistry and solar C/O ratios will fail or produce unphysical posteriors when evaluating exotic chemistries (e.g., high-metallicity steam atmospheres, photochemical tholin hazes).
2. **Posterior Calibration**: Machine learning models often produce overconfident, under-dispersed posterior distributions. Validation against full numerical forward-model MCMC runs is necessary before claiming chemical detections.

---

## Cross-Links & Vault Navigation
- Master Map of Content: [Exoplanetary_Astrophysics_MOC](../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html)
- Previous Lecture: [11_High_Precision_Spectrographs_and_Doppler_Measurement](./11_High_Precision_Spectrographs_and_Doppler_Measurement.html)
- Next Lecture: [13_RV_Wavelength_Calibration_and_Error_Budgets](./13_RV_Wavelength_Calibration_and_Error_Budgets.html)
- Related Notes: [08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx](../Computational_Astrophysics/08_Exoplanet_Atmospheric_Retrieval_Frameworks_and_TauREx.html) | Exoplanetary atmospheres and transmission spectroscopy

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (1)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Exoplanetary_Astrophysics_MOC.html" class="backlink-item">Exoplanetary_Astrophysics_MOC</a></li>
  </ul>
</div>

