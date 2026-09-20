---
layout: "default"
title: "Mukhanov, Feldman & Brandenberger (1992) — Theory of Cosmological Perturbations"
---
## Metadata
- **Authors**: Viatcheslav F. Mukhanov, H. A. Feldman, Robert H. Brandenberger
- **Year**: 1992
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: `1992PhR...215..203M`
- **Journal**: *Physics Reports*, 215, 203
- **Sub-field**: gr-qc / astro-ph.CO
- **Key Observatory / Code**: foundational gauge-invariant perturbation-theory formalism underlying all modern CMB/inflation Boltzmann codes

---

## Executive Summary
This review develops, in fully gauge-invariant form, both the classical and quantum theory of linear cosmological perturbations around an FRW background. Because General Relativity is diffeomorphism-invariant, a naive perturbative split of the metric into background-plus-perturbation is contaminated by unphysical "gauge modes" — coordinate-choice artifacts with no physical content that can masquerade as genuine physical perturbations unless handled carefully. Mukhanov, Feldman & Brandenberger construct a single gauge-invariant variable that unifies the description of scalar metric and matter perturbations across matter-dominated, radiation-dominated, and scalar-field-dominated (inflationary) epochs, and canonically quantize the resulting action to derive the quantum-mechanical origin of the primordial curvature perturbation.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: linearizing the Einstein field equations and the matter stress-energy tensor around a spatially flat FRW background, $g_{\mu\nu} = \bar g_{\mu\nu} + \delta g_{\mu\nu}$, while recognizing that an infinitesimal coordinate transformation $x^\mu\to x^\mu+\xi^\mu$ shifts $\delta g_{\mu\nu}$ by a pure-gauge term $\delta g_{\mu\nu}\to\delta g_{\mu\nu} - \mathcal{L}_\xi \bar g_{\mu\nu}$ — physical perturbations must therefore be constructed from combinations of metric and matter perturbations invariant under this residual gauge freedom.

**The Sasaki-Mukhanov variable**: for a universe dominated by a single scalar field $\phi$ (as in inflation), the unique gauge-invariant combination of the field's perturbation $\delta\phi$ and the metric's scalar perturbation (via the intrinsic curvature perturbation on comoving slices, $\mathcal{R}$) is
$$\boxed{\, u \equiv a\left(\delta\phi + \frac{\dot\phi}{H}\Psi\right) = -z\,\mathcal{R}, \qquad z \equiv \frac{a\dot\phi}{H} \,}$$
(see [[Sasaki-Mukhanov variable and equation]] for the full derivation), where $\Psi$ is the Newtonian-gauge metric potential and $a$ the scale factor — this variable remains well-defined and physically meaningful across gauge choices, unlike $\delta\phi$ or $\Psi$ individually.

**Mukhanov-Sasaki equation of motion**, obtained by varying the quadratic action for scalar perturbations (derived by expanding the Einstein-Hilbert-plus-scalar-field action to second order in perturbations):
$$u_k'' + \left(k^2 - \frac{z''}{z}\right)u_k = 0$$
where primes denote derivatives with respect to conformal time and $k$ is the comoving wavenumber — this is a Schrödinger-like equation with a time-dependent effective potential $z''/z$ set entirely by the background expansion history, making the mode functions $u_k$ amenable to standard quantum-field-theory-in-curved-spacetime quantization (Bunch-Davies vacuum initial conditions deep inside the horizon, $k\gg aH$).

**Curvature perturbation power spectrum**, obtained from the vacuum two-point function of the quantized field $u_k$ evaluated on super-horizon scales ($k\ll aH$, where $u_k$ freezes to a constant amplitude):
$$\mathcal{P}_{\mathcal{R}}(k) = \frac{k^3}{2\pi^2}\left|\frac{u_k}{z}\right|^2\bigg|_{k\ll aH}$$
which, evaluated for the slow-roll inflaton background ($z''/z\approx2a^2H^2$ to leading order), reproduces exactly the scalar power spectrum $\mathcal{P}_s(k)$ quoted in [[Baumann_2009_TASI_Lectures_on_Inflation]].

**Asymptotic checks**: deep inside the horizon ($k\gg aH$, so $k^2\gg z''/z$), the equation reduces to that of a simple harmonic oscillator with time-independent frequency $k$, and the mode function oscillates as a positive-frequency Minkowski-vacuum plane wave — the physically required initial condition; well outside the horizon ($k\ll aH$, so $k^2\ll z''/z$), the $k^2$ term becomes negligible and the equation admits a growing and a decaying solution, with the growing solution's coefficient related to $\mathcal{R}$ freezing to a constant value — the mathematical statement of why super-horizon curvature perturbations are conserved (in the absence of entropy perturbations) until they re-enter the horizon at late times.

---

## Observational Data & Methodology
- **Target / Sample**: purely theoretical/formal development; the resulting gauge-invariant perturbation formalism is the computational backbone of every modern CMB Boltzmann code (`CAMB`, `CLASS`) used to fit Planck and other CMB data.
- **Instrument Setup**: N/A.
- **Reduction & Detrending Pipeline**: N/A — this is the foundational formalism underlying the perturbation-evolution modules of the pipelines referenced in [[Planck_Collaboration_2020_Cosmological_Parameters]].

---

## Critical Findings & Scientific Impact
1. Established the gauge-invariant formalism now universally used for cosmological perturbation theory, resolving decades of ambiguity and confusion caused by gauge-dependent artifacts in earlier (Lifshitz-era) perturbation treatments.
2. The canonical quantization of the Mukhanov-Sasaki variable is the rigorous theoretical basis for the "quantum origin of cosmic structure" claim central to inflationary cosmology.
3. Open problem (largely of formalism scope rather than physical content): extending the single-field gauge-invariant treatment to multi-field inflation introduces additional entropy/isocurvature perturbation modes and non-trivial mode-mixing during and after horizon crossing, an active area of continued theoretical development (see [[Cosmology_of_the_Early_Universe_MOC]] Block 5, primordial non-Gaussianity and multi-field extensions).

---

## Vault Cross-References
- Core Theory: [[Sasaki-Mukhanov variable and equation]], [[Single-field slow-roll inflation dynamics]]
- Related: [[Baumann_2009_TASI_Lectures_on_Inflation]], [[Linear evolution of perturbations in expanding universe]]
- Map of Content: [[Cosmology_of_the_Early_Universe_MOC]]
