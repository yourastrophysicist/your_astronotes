---
layout: "default"
title: "Fields, Molaro & Sarkar (2020) — Big-Bang Nucleosynthesis After Planck"
---
## Metadata
- **Authors**: Brian D. Fields, Paolo Molaro, Subir Sarkar
- **Year**: 2020 (PDG Review of Particle Physics chapter; arXiv preprint 2019)
- **arXiv ID**: [arXiv:1912.01132](https://arxiv.org/abs/1912.01132)
- **ADS Bibcode**: `2020PDG....24....1F` (Particle Data Group review, "Big Bang Nucleosynthesis")
- **Sub-field**: astro-ph.CO
- **Key Observatory / Code**: BBN reaction-network codes cross-checked against Planck CMB baryon density and quasar-absorption D/H measurements

---

## Executive Summary
This Particle Data Group review assesses standard Big Bang Nucleosynthesis (BBN) in light of the final Planck CMB baryon-density measurement, which now fixes the single free parameter of standard BBN — the baryon-to-photon ratio $\eta$ — independently and to sub-percent precision, turning BBN from a two-parameter fit into a genuinely predictive, over-constrained test of early-universe physics. The review finds excellent agreement between the Planck-informed BBN predictions and observed primordial deuterium and helium-4 abundances, but confirms the long-standing "lithium problem": observed $^7\mathrm{Li/H}$ in metal-poor halo stars is a factor of $\sim3$ below the BBN-predicted value, a discrepancy that remains unresolved by any purely astrophysical or nuclear-physics correction proposed to date.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: light-element synthesis proceeds via a coupled nuclear reaction network operating in a radiation-dominated, adiabatically expanding, homogeneous universe, with the reaction rates and the Hubble expansion rate together fixing a "freeze-out" abundance for each species once its production/destruction rate falls below $H(t)$.

**Neutron-to-proton freeze-out**, setting the initial conditions for BBN, governed by the competition between the weak-interaction rate $\Gamma_{n\leftrightarrow p}$ and $H(t)$:
$$\frac{n_n}{n_p}\bigg|_{\mathrm{freeze\text{-}out}} = e^{-Q/k_BT_f}, \qquad Q = (m_n-m_p)c^2 = 1.293\,\mathrm{MeV}$$
with the freeze-out temperature $T_f\sim0.8\,\mathrm{MeV}$ set by $\Gamma_{n\leftrightarrow p}(T_f) \sim H(T_f)$.

**Deuterium bottleneck**: BBN cannot proceed efficiently until the deuterium photodissociation rate drops below the deuterium production rate, occurring once
$$\frac{n_\gamma}{n_b}\,e^{-B_D/k_BT} \sim 1, \qquad B_D = 2.22\,\mathrm{MeV}$$
($B_D$ the deuterium binding energy) — because the photon-to-baryon ratio $n_\gamma/n_b\sim10^9$ is enormous, this "deuterium bottleneck" delays the onset of nucleosynthesis to $T\sim0.07$–$0.09\,\mathrm{MeV}$ ($t\sim180\,\mathrm{s}$), well below the naive binding-energy temperature scale $k_BT\sim B_D$.

**Baryon-to-photon ratio** as the single controlling parameter of standard BBN:
$$\eta \equiv \frac{n_b}{n_\gamma} \quad\Longleftrightarrow\quad \Omega_b h^2 = 273.9\,\eta_{10}, \qquad \eta_{10}\equiv10^{10}\eta$$
Planck's CMB-derived $\Omega_bh^2 = 0.02237\pm0.00015$ (see [[Planck_Collaboration_2020_Cosmological_Parameters]]) fixes $\eta$ to $\sim0.6\%$ precision, leaving the light-element abundance *predictions* $Y_p(\mathrm{^4He})$, $\mathrm{D/H}$, $\mathrm{^7Li/H}$ as parameter-free outputs of the reaction network, testable against observation with no remaining free parameter in the standard model.

**Asymptotic checks**: for $\eta\to0$ (baryon-poor limit), essentially no deuterium bottleneck delay occurs but nuclear reaction rates (which scale with baryon density squared) vanish, freezing out almost all synthesis at deuterium — predicting a universe with high D/H and low $^4$He, contrary to observation; for $\eta$ at the observed value, the bottleneck delay is calibrated precisely enough that essentially all available neutrons are burned into $^4$He (the most tightly bound light nucleus) by the time nucleosynthesis ends, explaining why $Y_p$ is comparatively insensitive to $\eta$ while D/H is highly sensitive — the physical basis for using deuterium as the most precise baryometer among the light elements.

---

## Observational Data & Methodology
- **Target / Sample**: primordial deuterium from high-resolution quasar absorption-line spectroscopy of metal-poor damped Lyman-$\alpha$ systems; primordial helium from metal-poor extragalactic HII regions; primordial lithium from old, metal-poor Galactic halo (Population II) dwarf stars.
- **Instrument Setup**: high-resolution echelle spectroscopy (quasar sightlines) and stellar spectroscopy (halo dwarfs).
- **Reduction & Detrending Pipeline**: extrapolation of each observed abundance back to zero metallicity to remove the effects of subsequent stellar nucleosynthesis and Galactic chemical evolution, isolating the primordial BBN yield.

---

## Critical Findings & Scientific Impact
1. Confirms BBN as a precision, over-constrained test of early-universe physics: with $\eta$ fixed externally by Planck, the predicted D/H and $Y_p$ match observations to within their respective uncertainties, providing strong support for the standard radiation content and expansion history of the universe back to $t\sim1$ s.
2. Reconfirms the persistent factor-of-$\sim3$ lithium problem, the most significant unresolved discrepancy in precision cosmology's concordance picture.
3. Open problem: proposed resolutions to the lithium problem (stellar depletion mechanisms, nuclear reaction-rate revisions, or new physics such as decaying particles or time-varying fundamental constants during BBN) each address only part of the discrepancy, and no consensus resolution exists.

---

## Vault Cross-References
- Core Theory: [[Big Bang nucleosynthesis]], [[BBN_concordance_with_CMB]]
- Related: [[Saha equation and recombination]]
- Map of Content: [[Fundamentals_Astrophysics_Cosmology_MOC]], [[Cosmology_of_the_Early_Universe_MOC]]
