---
layout: "default"
title: "Fabian et al. (2009) — Broad Line Emission from Iron K- and L-Shell Transitions in 1H0707-495"
---
## Metadata
- **Authors**: A. C. Fabian, A. Zoghbi, R. C. Ross, P. Uttley, L. C. Gallo, W. N. Brandt, A. J. Blustin, T. Boller, M. D. Caballero-Garcia, J. Larsson, J. M. Miller, G. Miniutti, D. Ponti, R. R. Reis, C. S. Reynolds
- **Year**: 2009
- **arXiv ID**: none indexed on arXiv (Nature publication; see ADS)
- **ADS Bibcode**: `2009Natur.459..540F`
- **Journal**: *Nature*, 459, 540
- **Sub-field**: astro-ph.HE
- **Key Observatory / Code**: *XMM-Newton* EPIC-pn timing-mode spectroscopy

---

## Executive Summary
Fabian et al. report the detection of both broad iron K$\alpha$ ($\sim6.4$ keV, rest-frame) and iron L-shell ($\sim0.7$–$1$ keV) emission features in the narrow-line Seyfert 1 galaxy 1H0707-495, and, crucially, a reverberation time lag of $\sim30$ s between variations in the direct coronal continuum and the corresponding response in the reflected iron-L flux. Because $30$ light-seconds corresponds to only a few gravitational radii ($r_g = GM/c^2$) for this AGN's estimated black-hole mass, the lag directly demonstrates that the X-ray-reflecting material lies within a few $r_g$ of the event horizon of a compact, rapidly spinning black hole — the first direct light-travel-time confirmation of the compact corona/inner-disk reflection geometry inferred from relativistically broadened iron-line profiles alone.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: X-ray reflection off the inner accretion disk imprints fluorescent iron line emission on the illuminating coronal power-law continuum, gravitationally and Doppler-broadened by the strong-field relativistic disk kinematics (special-relativistic Doppler boosting/beaming plus general-relativistic gravitational redshift), following the relativistic line-broadening formalism of Fabian et al. (1989).

**Relativistically broadened line profile** for a ring of disk material at radius $r$ inclined at angle $i$, emitting at rest-frame energy $E_0=6.4$ keV:
$$\frac{dF}{dE} \propto \frac{\left[1 - \frac{r_g}{r}\right]^{1/2}}{\left[1 + \frac{r_g}{r}\right]^{1/2}}\, g(r,\phi,i)^{3+\Gamma}\, \delta\!\left(E - E_0\, g(r,\phi,i)\right)$$
where:
- $g(r,\phi,i)$ is the total (gravitational + Doppler + transverse) redshift/blueshift factor, a function of disk radius $r$, azimuth $\phi$, and inclination $i$
- $\Gamma$ is the photon index of the illuminating power-law continuum, entering through relativistic beaming of the reflected flux
- integrating over the full disk radial range ($r_{\mathrm{in}}$ to $r_{\mathrm{out}}$) and azimuth produces the characteristic double-horned, red-skewed broad iron line profile

**X-ray reverberation lag**: the light-travel-time delay between the direct (power-law) continuum seen by the observer and its echo reflected off the disk,
$$\tau_{\mathrm{rev}} \sim \frac{r_g}{c}\left(1+\cos i\right) = \frac{GM}{c^3}(1+\cos i)$$
where the geometric factor $(1+\cos i)$ accounts for the extra path length light travels down to the disk and back compared to the direct sightline. Measuring $\tau_{\mathrm{rev}}\sim 30$ s and independently estimating $M$ (e.g. from the source's characteristic variability timescale or the $M$–$L_X$ relation) allows a self-consistent solution for the reflecting radius $r/r_g$.

**Asymptotic checks**: as $r\to r_{\mathrm{ISCO}}$ (innermost stable circular orbit, which itself decreases toward $r_g$ for near-extremal spin — see [[Innermost Stable Circular Orbit ISCO]]), the gravitational redshift factor $g\to 0$ and the line profile develops the extended red wing that is the observational hallmark of a compact, high-spin reflecting region; in the limit $r\gg r_g$ (weak-field, Newtonian regime), $g\to 1$ and the line recovers a narrow, symmetric rest-frame profile with negligible reverberation lag — the AGN analogue of a distant, non-relativistic reflector.

---

## Observational Data & Methodology
- **Target / Sample**: 1H0707-495, a rapidly variable, highly accreting narrow-line Seyfert 1 galaxy at $z\approx 0.0411$.
- **Instrument Setup**: *XMM-Newton* EPIC-pn in timing mode (high time resolution, avoiding photon pile-up), multiple long-look observations totaling hundreds of ks.
- **Reduction & Detrending Pipeline**: cross-correlation / frequency-resolved (Fourier lag-frequency spectrum) analysis of the soft-excess (iron L-dominated) band against the hard continuum band, isolating the $\sim30$ s soft lag; systematic checks against instrumental and absorption-based (rather than reflection-based) alternative interpretations of the soft excess.

---

## Critical Findings & Scientific Impact
1. First measurement of an X-ray reverberation lag consistent with light-travel time across a few gravitational radii, providing timing-domain confirmation independent of the spectral-fitting-only evidence for compact, relativistic disk reflection.
2. Directly supports a picture of 1H0707-495 harboring a rapidly spinning black hole with an X-ray corona confined to a very compact region above the inner disk.
3. Open follow-up (Zoghbi et al. 2010, [[Understanding Reverberation Lags in 1H0707-495]] arXiv:1010.3744) refined the lag-frequency spectrum and addressed alternative absorption-dominated interpretations of the soft excess, strengthening the reflection scenario.

---

## Vault Cross-References
- Core Theory: [[Relativistic Iron Line Profiles]], [[Innermost Stable Circular Orbit ISCO]], [[Kerr Metric Horizon and Ergosphere Geometry]]
- Related: [[AGN spectroscopy]], [[AGN and supermassive black holes]]
- Map of Content: [[Lab_High-Energy_MOC]], [[General_Relativity_MOC]]
