---
layout: "default"
title: "ALMA Partnership (2015) — The 2014 ALMA Long Baseline Campaign: First Results Toward HL Tau"
---
## Metadata
- **Authors**: ALMA Partnership (C. L. Brogan et al.)
- **Year**: 2015
- **arXiv ID**: [arXiv:1503.02649](https://arxiv.org/abs/1503.02649)
- **ADS Bibcode**: `2015ApJ...808L...3A`
- **Journal**: *ApJL*, 808, L3
- **Sub-field**: astro-ph.EP / astro-ph.IM
- **Key Observatory / Code**: ALMA Band 6 (1.3 mm) long-baseline ($\sim15$ km) science-verification continuum imaging

---

## Executive Summary
As the flagship science-verification result of ALMA's newly commissioned long-baseline capability, this paper presents a $\sim35$ milli-arcsecond ($\sim5$ AU at the source distance of $\sim140$ pc) resolution 1.3 mm continuum image of the protoplanetary disk around the young star HL Tau. The image reveals a system of concentric bright rings separated by multiple dark, partially or fully depleted gaps — the first unambiguous, spatially resolved evidence for substructure in the millimeter-dust distribution of a protoplanetary disk at an age of only $\sim1$ Myr, immediately interpreted as signposts of ongoing or completed planet formation (gap-opening by embedded protoplanets) and/or other disk physics (dust sintering lines, snow lines, secular gravitational instabilities).

---

## Key Equations & Theoretical Framework
**Fundamental postulate**: aperture-synthesis imaging (see [[Van Cittert-Zernike Theorem]]) of thermal dust continuum emission, optically thin at millimeter wavelengths over most of the disk, tracing the surface density of mm-sized dust grains.

**Angular resolution** achieved by the long-baseline array, set by the maximum projected baseline $B_{\max}\approx15$ km at $\lambda=1.3$ mm:
$$\theta_{\mathrm{res}} \approx \frac{\lambda}{B_{\max}} \approx 35\,\mathrm{mas}$$
corresponding to a physical resolution at the source distance $d\approx140$ pc of
$$\Delta x = \theta_{\mathrm{res}}\, d \approx 5\,\mathrm{AU}$$

**Optically thin dust continuum flux**, relating the observed millimeter surface brightness to the dust surface density $\Sigma_{\mathrm{dust}}(r)$:
$$F_\nu(r) \approx \Sigma_{\mathrm{dust}}(r)\,\kappa_\nu\, B_\nu[T_{\mathrm{dust}}(r)]$$
where $\kappa_\nu$ is the dust mass absorption coefficient at frequency $\nu$ and $B_\nu[T_{\mathrm{dust}}(r)]$ is the Planck function at the local dust temperature — dark gaps in the image therefore indicate either a genuine depletion of $\Sigma_{\mathrm{dust}}(r)$ or a localized drop in $\kappa_\nu$/$T_{\mathrm{dust}}$ (e.g. at an ice line where grain properties change abruptly).

**Gap-opening mass estimate**, using the standard planet-disk torque balance (see [[Planetary Migration Type I and Type II]]) to translate an observed gap width $\Delta r$ into a minimum embedded planet mass $M_p$, via the disk scale height $h=H/r$ and the thermal-to-Hill-radius criterion:
$$\frac{\Delta r}{r} \sim \left(\frac{M_p}{3M_*}\right)^{1/3} \quad \text{(Hill-radius gap-clearing criterion, order-of-magnitude)}$$
where $M_*$ is the stellar mass — applied to the observed ring/gap locations, this suggests candidate planet masses ranging from sub-Neptune to super-Jupiter scales at different disk radii, depending on the assumed disk viscosity and gap-opening criterion adopted in follow-up hydrodynamic modeling.

**Asymptotic checks**: for $\Delta r/r\to 0$ (no detectable gap), $M_p\to 0$ — consistent with a smooth disk with no embedded perturber; for very wide, deep gaps, the simple Hill-criterion scaling breaks down and full 2D/3D hydrodynamic simulations (with disk viscosity $\alpha$ as in [[Shakura_Sunyaev_1973_Thin_Accretion_Disk_Theory]]) are required to self-consistently relate gap depth/width to planet mass and disk turbulence.

---

## Observational Data & Methodology
- **Target / Sample**: HL Tau, a $\sim1$ Myr old Class II/early Class III T Tauri star in the Taurus star-forming region, distance $\approx140$ pc.
- **Instrument Setup**: ALMA Band 6 (1.3 mm) continuum, long-baseline configuration with baselines up to $\sim15$ km, achieving $\sim35$ mas resolution — an order of magnitude improvement over prior sub-mm disk imaging.
- **Reduction & Detrending Pipeline**: standard interferometric calibration (bandpass, gain, flux) followed by CLEAN deconvolution (see [[Aperture synthesis principle]]) to remove the dirty-beam sidelobe pattern and recover the restored ring/gap structure.

---

## Critical Findings & Scientific Impact
1. Resolved (at the time) seven concentric bright rings separated by dark gaps in the HL Tau disk — the sharpest direct image yet obtained of protoplanetary disk substructure, immediately reproduced and cited as a benchmark result across planet-formation theory.
2. Provided strong motivation for the subsequent Disk Substructures at High Angular Resolution Project (DSHARP) ALMA large program, which found similar ringed/gapped substructure to be common (not unique to HL Tau) among protoplanetary disks.
3. Open problem: whether each gap is caused by an embedded (as yet undetected) planet, or by disk physics unrelated to planet formation (dust sintering, dead zones, snow lines, or secular/gravitational instabilities), remains actively debated and is a primary driver of ongoing high-resolution multi-wavelength and kinematic (CO gas) follow-up.

---

## Vault Cross-References
- Core Theory: [[Protoplanetary disk evolution and core accretion paradigm]], [[Planetary Migration Type I and Type II]]
- Related: [[Aperture synthesis principle]], [[Van Cittert-Zernike Theorem]]
- Map of Content: [[Astronomical_Interferometry_MOC]], [[Exoplanetary_Astrophysics_MOC]]
