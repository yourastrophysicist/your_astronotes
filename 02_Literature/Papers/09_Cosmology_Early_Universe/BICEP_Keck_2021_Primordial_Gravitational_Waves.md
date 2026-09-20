---
layout: "default"
title: "BICEP/Keck Collaboration / Ade et al. (2021) — Improved Constraints on Primordial Gravitational Waves"
---
## Metadata
- **Authors**: BICEP/Keck Collaboration (P. A. R. Ade et al.)
- **Year**: 2021
- **arXiv ID**: [arXiv:2110.00483](https://arxiv.org/abs/2110.00483)
- **ADS Bibcode**: `2021PhRvL.127o1301A`
- **Journal**: *PRL*, 127, 151301 (paper title: "BICEP/Keck XIII: Improved Constraints on Primordial Gravitational Waves using Planck, WMAP, and BICEP/Keck Observations through the 2018 Observing Season")
- **Sub-field**: astro-ph.CO
- **Key Observatory / Code**: BICEP2/Keck Array/BICEP3 (South Pole CMB polarimeters), combined with Planck and WMAP

---

## Executive Summary
Combining BICEP2, Keck Array, and BICEP3 CMB polarization data through the 2018 observing season with Planck and WMAP data (to model and subtract polarized Galactic dust and synchrotron foregrounds), the BICEP/Keck collaboration places the tightest constraint to date on the primordial tensor-to-scalar ratio: $r_{0.05}<0.036$ at 95% confidence. This result excludes the simplest large-field inflationary models (e.g. quadratic and linear inflaton potentials) that predict $r\gtrsim0.05$–$0.1$, while remaining consistent with small-field and plateau-type models (e.g. Starobinsky $R^2$ inflation) that predict $r\ll0.01$.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: primordial tensor perturbations (gravitational waves) generated during inflation (see [[Baumann_2009_TASI_Lectures_on_Inflation]]) imprint a unique, parity-odd **B-mode** polarization pattern on the CMB at degree angular scales — distinct from the parity-even **E-mode** pattern sourced by both scalar density perturbations and (at smaller scales) gravitational lensing of E-modes into B-modes — making degree-scale B-mode polarization the most direct observational probe of primordial gravitational waves.

**CMB polarization decomposition**: the linear polarization field is decomposed into E-mode and B-mode components via its curl-free and divergence-free parts respectively,
$$E(\hat n) \pm iB(\hat n) = -\sum_{\ell m}\left[a_{\ell m}^E \pm i a_{\ell m}^B\right] {}_{\pm2}Y_{\ell m}(\hat n)$$
with the key physical distinction that scalar (density) perturbations produce **only** E-modes at linear order, while tensor (gravitational-wave) perturbations produce **both** E- and B-modes — so a primordial B-mode detection at degree scales, after removing the lensing-induced B-mode contamination, is a smoking-gun signature of primordial tensor modes.

**BB power spectrum decomposition**, the observable fit jointly for the lensing and primordial (inflationary) contributions plus Galactic foreground dust and synchrotron emission:
$$C_\ell^{BB,\rm obs} = r\,C_\ell^{BB,\rm prim}(r=1) + A_L\,C_\ell^{BB,\rm lens} + C_\ell^{BB,\rm dust} + C_\ell^{BB,\rm sync} + N_\ell$$
where $A_L$ is a lensing-amplitude nuisance parameter (consistent with the Planck-measured value), and the multi-frequency BICEP/Keck+Planck+WMAP dataset spectrally separates the CMB signal from polarized Galactic dust (which has a distinct frequency scaling, rising toward higher frequency) and synchrotron emission (falling toward higher frequency).

**Resulting constraint**:
$$\boxed{\, r_{0.05} < 0.036 \quad (95\%\ \mathrm{CL}) \,}$$
evaluated at pivot scale $k=0.05\,\mathrm{Mpc}^{-1}$, with no statistically significant detection of a primordial B-mode signal — a pure upper limit.

**Asymptotic checks**: as more multi-frequency data are added and foreground removal improves, the statistical uncertainty on $r$ shrinks; in the hypothetical limit of perfect foreground removal and cosmic-variance-limited sensitivity, next-generation experiments (CMB-S4) could push the reachable sensitivity to $\sigma(r)\sim10^{-3}$, enough to either detect or further constrain even the smallest-$r$ theoretically favored inflation models; in the null-detection limit realized here, the constraint translates (via $r=16\epsilon$) directly into an upper bound on the inflationary slow-roll parameter $\epsilon$ and hence on the energy scale of inflation, $V^{1/4}\lesssim1.7\times10^{16}\,\mathrm{GeV}\,(r/0.036)^{1/4}$.

---

## Observational Data & Methodology
- **Target / Sample**: a low-foreground patch of southern sky ("BICEP field") optimized for minimal Galactic dust contamination.
- **Instrument Setup**: BICEP2, Keck Array, and BICEP3 — small-aperture, cryogenically cooled polarimeters at 95, 150, and 220/230 GHz, sited at the South Pole for exceptionally dry, stable atmospheric conditions.
- **Reduction & Detrending Pipeline**: multi-frequency component separation jointly fitting CMB, dust, and synchrotron templates, cross-checked against independent Planck and WMAP frequency channels to control foreground-modeling systematics.

---

## Critical Findings & Scientific Impact
1. Delivers the strongest direct observational constraint on inflationary gravitational waves to date, ruling out the historically simplest inflaton potentials.
2. Demonstrates that multi-frequency component separation, rather than raw polarization sensitivity alone, is now the dominant lever for improving $r$ constraints — Galactic foregrounds, not instrumental noise, are the primary systematic-error floor.
3. Open problem: distinguishing a genuine primordial B-mode signal from residual foreground or lensing systematics at the level of $r\sim0.001$–$0.01$ (the range favored by many remaining viable inflation models) requires next-generation experiments with substantially more frequency channels and sky coverage (CMB-S4, LiteBIRD).

---

## Vault Cross-References
- Core Theory: [[Tensor perturbations and primordial gravitational waves]], [[Tensor-to-scalar ratio r and inflation energy scale]]
- Related: [[Baumann_2009_TASI_Lectures_on_Inflation]], [[Consistency relation of single-field slow-roll inflation]]
- Map of Content: [[Cosmology_of_the_Early_Universe_MOC]]
