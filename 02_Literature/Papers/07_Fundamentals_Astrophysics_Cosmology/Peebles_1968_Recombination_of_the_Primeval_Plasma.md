---
layout: "default"
title: "Peebles (1968) — Recombination of the Primeval Plasma"
---
## Metadata
- **Authors**: P. J. E. Peebles
- **Year**: 1968
- **arXiv ID**: none (pre-arXiv era)
- **ADS Bibcode**: `1968ApJ...153....1P`
- **Journal**: *ApJ*, 153, 1
- **Sub-field**: astro-ph.CO
- **Key Observatory / Code**: analytic/numerical solution of the coupled ionization-rate and Friedmann equations

---

## Executive Summary
Peebles derives the first quantitative, non-equilibrium treatment of hydrogen recombination in the expanding early universe, showing that recombination departs significantly from the instantaneous Saha (thermal-equilibrium) prediction because the direct recombination-to-ground-state channel is self-defeating: each such recombination emits a Lyman-continuum photon energetic enough to immediately re-ionize a neighboring neutral atom. The dominant net recombination pathway is instead recombination to an excited state followed by radiative cascade, with the two-photon $2s\to1s$ decay (forbidden as a single-photon transition) acting as the bottleneck that ultimately allows the universe to complete recombination. The resulting residual ionization fraction, frozen in at $\sim2\times10^{-3}$–$2\times10^{-4}$ depending on cosmological parameters, sets the electron-scattering optical depth that shapes the detailed CMB anisotropy spectrum.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: local thermal and chemical equilibrium (LTE) between hydrogen, protons, electrons, and photons, described by the **Saha equation** (see [[Saha equation and recombination]]), breaks down once the recombination rate becomes too slow to track the equilibrium ionization fraction as the universe expands and cools — recombination must instead be followed via a rate (Boltzmann) equation.

**Saha equilibrium ionization fraction** (the naive, equilibrium baseline):
$$\frac{n_p n_e}{n_H} = \left(\frac{m_e k_B T}{2\pi\hbar^2}\right)^{3/2}\exp\left(-\frac{\chi_H}{k_B T}\right)$$
where $\chi_H = 13.6\,\mathrm{eV}$ is the hydrogen ionization energy — this equation alone predicts recombination completing near $T\sim4000$ K, but Peebles shows the *actual* free-electron fraction $x_e(t)$ freezes out above this equilibrium value because the recombination rate cannot keep pace with the Hubble expansion rate at late times.

**Peebles rate equation**, tracking the free-electron fraction $x_e \equiv n_e/n_H$ through the competing effects of direct recombination (net of photoionization, which is self-limiting via the recycling of ground-state recombination photons) and the $2s$-$1s$ two-photon decay bottleneck:
$$\frac{dx_e}{dt} = -C\left[\alpha_B n_H x_e^2 - \beta_B(1-x_e)e^{-h\nu_{2s1s}/k_BT}\right]$$
where:
- $\alpha_B$ is the "Case B" recombination coefficient (recombination to all levels *except* directly to the ground state, since ground-state recombinations are immediately reversed by their own emitted photon)
- $\beta_B$ is the corresponding photoionization rate from excited states, related to $\alpha_B$ by detailed balance
- $C$ is the **Peebles $C$-factor**, the probability that an atom in the $2s$ or $2p$ state decays to the ground state (via the two-photon $2s\to1s$ transition or via a Lyman-$\alpha$ photon that redshifts out of resonance before being reabsorbed) before being photoionized again:
$$C = \frac{\Lambda_{2s,1s} + \Lambda_{\mathrm{Ly}\alpha}}{\Lambda_{2s,1s} + \Lambda_{\mathrm{Ly}\alpha} + \beta_B}$$
with $\Lambda_{2s,1s}\approx8.23\,\mathrm{s^{-1}}$ the two-photon decay rate.

**Asymptotic regimes**:
- Early times ($T\gg4000$ K): recombination and photoionization rates both far exceed $H(t)$, $x_e$ tracks the Saha equilibrium value essentially exactly.
- Recombination epoch ($T\sim3000$–$4000$ K): the recombination rate becomes comparable to $H(t)$; $x_e$ begins to lag behind (exceed) the Saha prediction, and the finite-rate two-photon bottleneck becomes the limiting step.
- Late times ($T\ll3000$ K): $H(t)$ dominates over the (now very slow, since $n_H$ has diluted with expansion) recombination rate, and $x_e$ **freezes out** at a small residual value rather than reaching $x_e\to0$ — this frozen-in residual ionization fraction is what determines the detailed shape (not just the overall existence) of the CMB last-scattering surface.

---

## Observational Data & Methodology
- **Target / Sample**: theoretical/numerical calculation; the resulting recombination history is now tested indirectly through its imprint on the precisely measured CMB temperature and polarization power spectra (COBE, WMAP, Planck).
- **Instrument Setup**: N/A — analytic/numerical rate-equation integration.
- **Reduction & Detrending Pipeline**: modern CMB codes (`RECFAST`, `CosmoRec`, `HyRec`) solve refined versions of the Peebles rate equation including additional atomic-physics corrections, feeding the resulting $x_e(z)$ history directly into Boltzmann codes (`CAMB`, `CLASS`) used to fit Planck-era cosmological parameters (see [[Planck_Collaboration_2020_Cosmological_Parameters]]).

---

## Critical Findings & Scientific Impact
1. Established the non-equilibrium, rate-limited character of cosmological recombination — a qualitatively different physical picture from the naive instantaneous-Saha assumption, and essential for correctly predicting the CMB last-scattering surface thickness.
2. The two-photon $2s\to1s$ decay bottleneck identified here remains the central rate-limiting atomic process in every modern recombination code.
3. Open problem at the time, later resolved: higher-order atomic physics corrections (excited hydrogen level populations beyond a simple few-level model, helium recombination feedback) needed for the sub-percent precision required by Planck-era CMB analysis — addressed by `RECFAST` (Seager, Sasselov & Scott 1999) and subsequent refinements.

---

## Vault Cross-References
- Core Theory: [[Saha equation and recombination]], [[Photon decoupling and CMB]], [[Recombination]]
- Related: [[CMB - discovery and blackbody spectrum]]
- Map of Content: [[Fundamentals_Astrophysics_Cosmology_MOC]], [[Observational_Cosmology_MOC]]
