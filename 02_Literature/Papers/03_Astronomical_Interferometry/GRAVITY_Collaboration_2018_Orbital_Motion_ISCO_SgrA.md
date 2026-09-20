---
layout: "default"
title: "GRAVITY Collaboration / Abuter et al. (2018) — Detection of Orbital Motions Near the Last Stable Circular Orbit of Sgr A*"
---
## Metadata
- **Authors**: GRAVITY Collaboration (R. Abuter et al.)
- **Year**: 2018
- **arXiv ID**: [arXiv:1810.12641](https://arxiv.org/abs/1810.12641)
- **ADS Bibcode**: `2018A&A...618L..10G`
- **Journal**: *A&A*, 618, L10
- **Sub-field**: astro-ph.HE / astro-ph.IM
- **Key Observatory / Code**: VLTI/GRAVITY four-telescope near-infrared beam combiner

**Provenance note**: the original enrichment brief cited "A&A 615, L15, arXiv:1807.09409" for this "orbital motion near the ISCO" result — that reference is actually the GRAVITY Collaboration's separate S2 gravitational-redshift paper. The correct paper for the hot-spot/ISCO orbital-motion detection, verified here, is A&A 618, L10, arXiv:1810.12641.

---

## Executive Summary
Using the GRAVITY four-telescope beam combiner at the VLTI, the collaboration detected continuous, clockwise-looped astrometric motion of compact "hot spot" centroids during three bright near-infrared flares of Sgr A*, on angular scales of $\sim150\,\mu\mathrm{as}$ over tens of minutes, accompanied by a simultaneous, comparably periodic rotation of the polarization angle. The inferred orbital period ($\sim30$–$45$ minutes) and orbital velocity ($\sim30\%$ of $c$) place the emitting material at a few gravitational radii from Sgr A*, consistent with orbital motion near the innermost stable circular orbit (ISCO) of a black hole of mass $\sim4\times10^6\,M_\odot$ — direct evidence for matter orbiting in the strong-field regime immediately outside the event horizon.

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: geodesic motion of an orbiting emission region in the Kerr metric, combined with the astrometric centroid-tracking capability of phase-referenced long-baseline near-IR interferometry (GRAVITY's dual-field mode), enabling milli-arcsecond to micro-arcsecond relative astrometry.

**Astrometric phase-referencing precision**, the interferometric analogue of centroiding, scales as
$$\sigma_{\theta} \sim \frac{\lambda}{2\pi B}\,\frac{1}{\mathrm{SNR}}$$
where $\lambda$ is the observing wavelength, $B$ the interferometer baseline, and SNR the fringe signal-to-noise ratio — for VLTI baselines ($B\sim100$ m) at $2.2\,\mu\mathrm{m}$, this yields the $\mu$as-level astrometric precision required to trace the sub-milli-arcsecond ($\sim150\,\mu$as) flare centroid loops.

**Keplerian estimate of the orbital radius**, applying Kepler's third law to the inferred period $P$ and enclosed mass $M$ (independently known from long-term S2 and S0-2 orbit monitoring, $M\approx4.0\times10^6\,M_\odot$):
$$r_{\mathrm{orb}} = \left(\frac{GMP^2}{4\pi^2}\right)^{1/3}$$
combined with the **gravitational radius**
$$r_g = \frac{GM}{c^2}$$
gives the orbital radius in horizon-scale units, $r_{\mathrm{orb}}/r_g$; the observed period of $\sim30$–$45$ minutes and inferred orbital speed $v\sim0.3c$ jointly imply $r_{\mathrm{orb}} \sim 6$–$10\,r_g$, consistent with the ISCO radius range
$$r_{\mathrm{ISCO}} = r_g\left\{3+Z_2 \mp \left[(3-Z_1)(3+Z_1+2Z_2)\right]^{1/2}\right\}$$
(see [[Innermost Stable Circular Orbit ISCO]] for the full $Z_1, Z_2$ spin-dependent definitions), which spans $6\,r_g$ (Schwarzschild, non-spinning) down to $1\,r_g$ (extremal, prograde Kerr).

**Relativistic beaming of the observed flux** during the orbital loop, consistent with mildly relativistic orbital speeds:
$$F_{\mathrm{obs}} = \delta^{3}\,F_{\mathrm{int}}, \qquad \delta = \frac{1}{\Gamma(1-\beta\cos\theta_{\mathrm{obs}})}$$
which produces the observed asymmetric brightening as the hot spot's velocity vector swings toward and away from the line of sight during each loop.

**Asymptotic checks**: for $r_{\mathrm{orb}}\gg r_g$ (weak-field/Newtonian limit), orbital velocities would be non-relativistic ($v\ll c$) and no significant beaming or redshift signature would appear — inconsistent with the data, which require the mildly relativistic regime; for $r_{\mathrm{orb}}\to r_{\mathrm{ISCO}}$, orbital stability is marginal, consistent with the flares being transient, decaying phenomena rather than persistent structures.

---

## Observational Data & Methodology
- **Target / Sample**: Sgr A*, the $4\times10^6\,M_\odot$ supermassive black hole at the Galactic Center, observed during three bright NIR flares.
- **Instrument Setup**: VLTI/GRAVITY, combining all four 8.2 m Unit Telescopes in dual-field phase-referencing mode, using the nearby star S2 (then near pericenter) as an astrometric and polarimetric reference.
- **Reduction & Detrending Pipeline**: astrometric centroid fitting to the interferometric closure-phase and differential-phase data (see [[Van Cittert-Zernike Theorem]] and [[Phase closure]] for the underlying formalism) as a function of time during each flare, combined with simultaneous polarimetric angle tracking.

---

## Critical Findings & Scientific Impact
1. First direct astrometric detection of orbital motion in the immediate ($\lesssim10\,r_g$) vicinity of Sgr A*, complementing the EHT's resolved horizon-scale image of the same source (Event Horizon Telescope Collaboration 2022).
2. Constrains the compact flaring region to be consistent with an orbiting hot spot near the ISCO rather than a stationary or purely stochastic emission process.
3. Open problem: the physical origin of the flares (magnetic reconnection events in a MAD-state accretion flow vs. localized turbulent heating) remains under active investigation, motivating continued GRAVITY and EHT multi-wavelength monitoring campaigns.

---

## Vault Cross-References
- Core Theory: [[Galactic Center Sgr A and S-stars]], [[Innermost Stable Circular Orbit ISCO]], [[Kerr Metric Horizon and Ergosphere Geometry]]
- Related: [[Van Cittert-Zernike Theorem]], [[Phase closure]]
- Map of Content: [[Astronomical_Interferometry_MOC]], [[General_Relativity_MOC]], [[Lab_High-Energy_MOC]]
