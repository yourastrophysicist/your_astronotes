---
layout: "default"
title: "Baumann (2009) — TASI Lectures on Inflation"
---
## Metadata
- **Authors**: Daniel Baumann
- **Year**: 2009
- **arXiv ID**: [arXiv:0907.5424](https://arxiv.org/abs/0907.5424)
- **ADS Bibcode**: `2009arXiv0907.5424B`
- **Sub-field**: astro-ph.CO / gr-qc / hep-th
- **Key Observatory / Code**: pedagogical review; theoretical framework tested against Planck and BICEP/Keck CMB constraints

---

## Executive Summary
Baumann's lecture notes present the complete pedagogical derivation of inflationary cosmology: the horizon and flatness problems of standard hot Big Bang cosmology, how a period of quasi-de Sitter accelerated expansion solves them, and the full calculation transforming microscopic quantum vacuum fluctuations of the inflaton field into the macroscopic, nearly scale-invariant primordial scalar and tensor power spectra that seed all subsequent cosmic structure and the CMB anisotropies. The lectures close by mapping these theoretical predictions onto their observational signatures (the scalar spectral index $n_s$ and tensor-to-scalar ratio $r$) and inflation's connections to fundamental (string-theoretic) physics.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: a period of accelerated expansion, $\ddot a>0$, driven by a scalar field (the inflaton) $\phi$ slowly rolling down a sufficiently flat potential $V(\phi)$, satisfying the Klein-Gordon equation in an FRW background:
$$\ddot\phi + 3H\dot\phi + V'(\phi) = 0, \qquad H^2 = \frac{8\pi G}{3}\left[\frac{1}{2}\dot\phi^2+V(\phi)\right]$$

**Slow-roll parameters**, quantifying the flatness of the potential required to sustain a sufficiently long accelerated-expansion phase:
$$\epsilon \equiv \frac{M_{\rm Pl}^2}{2}\left(\frac{V'}{V}\right)^2, \qquad \eta \equiv M_{\rm Pl}^2\frac{V''}{V}$$
where $M_{\rm Pl}=(8\pi G)^{-1/2}$ is the reduced Planck mass — inflation proceeds ($\ddot a>0$) as long as $\epsilon<1$, and the slow-roll approximation (neglecting $\ddot\phi$ in the equation of motion) is self-consistent as long as both $\epsilon,|\eta|\ll1$.

**Number of e-folds**, the logarithmic expansion accumulated during inflation, required to be $N\gtrsim60$ to solve the horizon/flatness problems:
$$N = \int_{t}^{t_{\rm end}}H\,dt' \approx \int_{\phi_{\rm end}}^{\phi}\frac{V}{M_{\rm Pl}^2V'}\,d\phi'$$

**Primordial scalar power spectrum**, from the quantized vacuum fluctuations of the inflaton (equivalently, the Sasaki-Mukhanov variable, see [[Sasaki-Mukhanov variable and equation]]) stretched to super-horizon scales and frozen in as classical curvature perturbations:
$$\mathcal{P}_s(k) = \frac{1}{24\pi^2M_{\rm Pl}^4}\frac{V}{\epsilon}\bigg|_{k=aH}$$
evaluated at horizon crossing ($k=aH$) for each comoving mode $k$.

**Primordial tensor power spectrum**, from the analogous quantization of the transverse-traceless graviton modes (see [[Tensor perturbations and primordial gravitational waves]]):
$$\mathcal{P}_t(k) = \frac{2}{3\pi^2}\frac{V}{M_{\rm Pl}^4}\bigg|_{k=aH}$$

**Tensor-to-scalar ratio**, the key single-field-inflation consistency relation connecting an observable ratio directly to the slow-roll parameter $\epsilon$:
$$\boxed{\, r \equiv \frac{\mathcal{P}_t}{\mathcal{P}_s} = 16\epsilon \,}$$

**Scalar spectral index and its running**, from the mild $k$-dependence of $\mathcal{P}_s(k)$ as different modes cross the horizon at slightly different values of $\epsilon,\eta$:
$$n_s - 1 \equiv \frac{d\ln\mathcal{P}_s}{d\ln k} = 2\eta - 6\epsilon$$

**Asymptotic checks**: for $\epsilon\to0$ at fixed $\eta$, $r\to0$ (undetectably small tensor modes) while $n_s-1\to2\eta$ remains finite — a generic feature of small-field inflation models; for models with $\epsilon\sim\mathcal{O}(0.01)$ (large-field/chaotic inflation), $r\sim\mathcal{O}(0.1)$ is potentially detectable — precisely the regime now excluded at $r<0.036$ by BICEP/Keck (see [[BICEP_Keck_2021_Primordial_Gravitational_Waves]]), ruling out the simplest large-field models such as $V\propto\phi^2$.

---

## Observational Data & Methodology
- **Target / Sample**: pedagogical/theoretical review; observational tests come from CMB temperature, E-mode, and B-mode polarization power spectra (Planck, BICEP/Keck, forthcoming CMB-S4).
- **Instrument Setup**: N/A (lecture notes); the observational program is CMB polarimetry at degree angular scales.
- **Reduction & Detrending Pipeline**: N/A (theoretical framework); observational constraints on $(n_s, r)$ are obtained via CMB power-spectrum likelihood analysis as in [[Planck_Collaboration_2020_Cosmological_Parameters]].

---

## Critical Findings & Scientific Impact
1. Provides the field-standard pedagogical derivation connecting inflaton potential shape to observable CMB statistics, the framework against which every subsequent inflationary model is tested.
2. The consistency relation $r=16\epsilon$ (single-field slow-roll) is itself a falsifiable prediction: a future joint measurement of $r$ and the running of $n_s$ inconsistent with single-field predictions would point to multi-field or non-slow-roll inflationary dynamics.
3. Open problem: the overall energy scale of inflation, and whether the inflaton has any connection to known (or string-theoretic) fundamental physics, remains unconstrained beyond the upper bound on $r$ — the central open question motivating next-generation CMB B-mode experiments.

---

## Vault Cross-References
- Core Theory: [[Single-field slow-roll inflation dynamics]], [[Slow-roll parameters epsilon and eta]], [[Consistency relation of single-field slow-roll inflation]], [[Sasaki-Mukhanov variable and equation]]
- Related: [[Tensor perturbations and primordial gravitational waves]], [[Tensor-to-scalar ratio r and inflation energy scale]]
- Map of Content: [[Cosmology_of_the_Early_Universe_MOC]]
