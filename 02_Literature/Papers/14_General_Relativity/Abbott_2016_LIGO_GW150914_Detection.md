---
layout: "default"
title: "Abbott et al. / LIGO & Virgo Collaborations (2016) — Observation of Gravitational Waves from a Binary Black Hole Merger"
---
## Metadata
- **Authors**: B. P. Abbott et al. (LIGO Scientific Collaboration and Virgo Collaboration)
- **Year**: 2016
- **arXiv ID**: [arXiv:1602.03837](https://arxiv.org/abs/1602.03837)
- **ADS Bibcode**: `2016PhRvL.116f1102A`
- **Journal**: *PRL*, 116, 061102
- **Sub-field**: gr-qc / astro-ph.HE
- **Key Observatory / Code**: Advanced LIGO (Hanford + Livingston interferometers)

---

## Executive Summary
This paper reports the first direct detection of gravitational waves: a transient signal, designated GW150914, observed simultaneously by both Advanced LIGO detectors on 2015 September 14, with a matched-filter signal-to-noise ratio of 24 and a significance exceeding $5.1\sigma$. The signal's characteristic frequency sweep (35 to 250 Hz over $\sim0.2$ s) and waveform morphology match the numerical-relativity-predicted inspiral, merger, and ringdown of two black holes of $\sim36$ and $\sim29\,M_\odot$ coalescing into a single $\sim62\,M_\odot$ remnant, with $\sim3\,M_\odot c^2$ radiated as gravitational-wave energy — providing simultaneously the first direct detection of gravitational waves, the first direct observation of a binary black hole system, and the first direct evidence that binary black holes merge within the age of the universe.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: linearized general relativity predicts that any time-varying, non-spherically-symmetric mass-energy distribution radiates gravitational waves, described (in the weak-field, far-field limit) by the transverse-traceless metric perturbation $h_{\mu\nu}$ satisfying the wave equation sourced by the second time derivative of the system's mass quadrupole moment (see [[Quadrupole formula]]):
$$h_{jk}^{TT} = \frac{2G}{c^4 D}\ddot{Q}_{jk}^{TT}(t-D/c)$$
where $D$ is the distance to the source and $Q_{jk}$ the reduced mass quadrupole moment.

**Inspiral frequency evolution**, from the leading-order (quadrupole) gravitational-wave energy-loss formula applied to a compact binary in a slowly shrinking, quasi-circular orbit, giving the characteristic "chirp" — frequency increasing as the orbit decays:
$$\dot{f}_{\rm GW} = \frac{96}{5}\pi^{8/3}\left(\frac{G\mathcal{M}}{c^3}\right)^{5/3}f_{\rm GW}^{11/3}$$
where $\mathcal{M} = (m_1m_2)^{3/5}/(m_1+m_2)^{1/5}$ is the **chirp mass** — the single combination of the two component masses directly measurable from the observed frequency sweep rate alone, independent of the details of either component mass individually.

**Merger and ringdown**: as the orbital separation approaches the ISCO scale (see [[Bardeen_Press_Teukolsky_1972_Rotating_Black_Holes]]), the post-Newtonian inspiral approximation breaks down and the system enters a fully non-linear merger phase, requiring numerical-relativity simulation to predict; the resulting single remnant black hole then "rings down," radiating its remaining asphericity as exponentially damped quasinormal-mode oscillations at a frequency and damping time set purely by the remnant's mass and spin — a direct observational test of the Kerr "no-hair" structure of the remnant.

**Total radiated energy**, obtained by integrating the gravitational-wave luminosity over the observed waveform and comparing initial and final system masses:
$$E_{\rm rad}c^2 = (m_1+m_2)c^2 - M_{\rm f}c^2 \approx 3\,M_\odot c^2$$
peaking at a gravitational-wave luminosity $L_{\rm GW}\sim200\,M_\odot c^2/{\rm s}$ at merger — for a brief instant, exceeding the electromagnetic luminosity of the entire observable universe.

**Asymptotic checks**: at large orbital separation (early inspiral), the post-Newtonian chirp formula above is highly accurate, since the compact objects' relative velocity remains $v/c\ll1$; as the objects approach merger ($v/c\to$ a substantial fraction of unity), post-Newtonian expansion terms of increasingly high order are required, and ultimately full numerical relativity is needed — the excellent agreement between the observed GW150914 waveform and numerical-relativity templates across this entire regime, from early inspiral through ringdown, constitutes a stringent, multi-regime test of general relativity in the previously untested strong-field, highly dynamical regime.

---

## Observational Data & Methodology
- **Target / Sample**: GW150914, a binary black hole merger at luminosity distance $\sim410$ Mpc.
- **Instrument Setup**: two 4 km Advanced LIGO Michelson-type laser interferometers (Hanford, WA and Livingston, LA), each sensitive to strain amplitudes $h\sim10^{-21}$.
- **Reduction & Detrending Pipeline**: matched-filtering against a bank of numerical-relativity-calibrated waveform templates spanning the compact-binary parameter space, combined with independent burst (model-agnostic) detection pipelines for cross-validation, and coincidence analysis between the two geographically separated detectors to reject non-astrophysical noise transients.

---

## Critical Findings & Scientific Impact
1. First direct detection of gravitational waves, confirming a century-old prediction of general relativity and opening an entirely new observational channel (gravitational-wave astronomy) complementary to the electromagnetic spectrum.
2. First direct evidence for the existence of binary stellar-mass black hole systems and their merger within the current age of the universe, immediately constraining models of massive-star binary evolution and dynamical black-hole-binary formation channels.
3. Open problem at the time, since substantially advanced: whether the progenitor black holes formed via isolated massive-binary stellar evolution or dynamical assembly in dense stellar environments (globular clusters, galactic nuclei) remained (and to a significant degree remains) an open question, actively constrained by the growing catalog of subsequent LIGO/Virgo/KAGRA detections and their inferred mass/spin distribution.

---

## Vault Cross-References
- Core Theory: [[Gravitational Wave Quadrupole Formula]], [[Gravitational waves in General Relativity]], [[Quadrupole formula]]
- Related: [[Bardeen_Press_Teukolsky_1972_Rotating_Black_Holes]]
- Map of Content: [[General_Relativity_MOC]]
