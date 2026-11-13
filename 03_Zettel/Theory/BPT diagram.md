---
layout: "default"
title: "BPT diagram"
---
the **BPT diagram** (Baldwin, Phillips, Terlevich 1981) is the standard 2D diagnostic plot to classify emission-line galaxies into **star-forming**, **AGN (Seyfert)**, and **LINER** populations using forbidden-line ratios. one of the most-used plots in extragalactic spectroscopy.

## the diagram

axes:
- **y**: $\log\,[OIII]\,\lambda 5007/H\beta$.
- **x**: $\log\,[NII]\,\lambda 6584/H\alpha$.

(or alternatively $[SII]/H\alpha$ on x or $[OI]\,\lambda 6300/H\alpha$ for variant BPTs.)

## the regions

galaxies populate three distinct regions:

### star-forming "main sequence"
a curving locus from low $[OIII]/H\beta$ (low $T_e$, high metallicity) at high $[NII]/H\alpha$ (high N abundance) toward higher $[OIII]/H\beta$ at lower $[NII]/H\alpha$. the locus reflects the **photoionisation by stellar UV** at varying ionisation parameter and metallicity.

shape: characteristic shape because the dominant ionising source is a **soft** ionising spectrum (O stars, $T \sim 30\,000$ to $50\,000$ K).

### AGN (Seyfert)
above and to the right of the SF locus. **harder ionising spectrum** from accreting BH UV/X-ray photons can produce higher [OIII]/H$\beta$ at moderate $[NII]/H\alpha$. Seyfert galaxies cluster here.

### LINER
between SF and AGN, with high $[NII]/H\alpha$ but moderate $[OIII]/H\beta$. **L**ow-**I**onization **N**uclear **E**mission **R**egion. could be:
- weak AGN.
- post-AGB star photoionisation.
- shocks from gas outflows.
- mix of all three.

## the demarcation lines

**Kewley et al. 2001** and **Kauffmann et al. 2003** drew lines on the diagram:
- **Kauffmann line**: empirical upper boundary of SDSS pure-SF galaxies. galaxies above are **composite or AGN**.
- **Kewley line**: theoretical upper boundary of pure-SF photoionisation models. galaxies above are **AGN-dominant**.

between Kauffmann and Kewley: **composite** galaxies, with both SF and AGN contributing.

## why it works

the underlying physics:
- **soft ionising spectrum** (stars): produces a particular set of forbidden-line ratios driven by $U, T_e, Z$.
- **hard ionising spectrum** (AGN): produces higher $[OIII]/H\beta$ at given $[NII]/H\alpha$ because of:
  - additional X-ray heating.
  - higher $T_e$ in NLR than HII regions.
  - harder photons producing more high-ionisation species.

so the BPT separates galaxies by the **shape** of the ionising spectrum, which traces the engine.

## variants

other diagnostic plots use different line ratios:
- **$[SII]/H\alpha$** instead of $[NII]/H\alpha$: similar physics, less metallicity-sensitive.
- **$[OI]/H\alpha$**: cleaner shock indicator (since $[OI]$ is enhanced by shocks).
- **WHAN diagram** (Cid Fernandes 2010): $[NII]/H\alpha$ vs $\log W(H\alpha)$. distinguishes very weak AGN from passive galaxies.

## the limitations

- **only emission-line galaxies**: doesn't classify passive ellipticals or $[OIII]$-weak systems.
- **dust correction**: BPT works on dust-corrected line ratios. uncorrected ratios scatter.
- **integrated spectra**: BPT classification depends on aperture. a galaxy with a SF disk + AGN nucleus may classify differently in central vs outer slits.
- **at high $z$**: BPT shifts because metallicity, $U$, and ionising spectrum hardness all evolve.

## the modern context

BPT classifications are run on $\sim 10^6$ galaxies in SDSS spectroscopic samples. used for:
- **AGN census**: how many galaxies host AGN.
- **galaxy evolution**: how AGN fraction depends on stellar mass, environment.
- **starburst surveys**: identifying pure SF galaxies for SFR studies.

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

![Low-ionization nuclear emission-line region|500](https://commons.wikimedia.org/wiki/Special:FilePath/M104_ngc4594_sombrero_galaxy_hi-res.jpg?width=600)
*Lead figure of the Wikipedia article Low-ionization nuclear emission-line region* ([Commons file page](https://commons.wikimedia.org/wiki/File:M104_ngc4594_sombrero_galaxy_hi-res.jpg), NASA/ESA and The Hubble Heritage Team (STScI/AURA), Public domain, as used on the Wikipedia article [Low-ionization nuclear emission-line region](https://en.wikipedia.org/wiki/Low-ionization_nuclear_emission-line_region))

- **Low-ionization nuclear emission-line region**. "A low-ionization nuclear emission-line region (LINER) is a type of galactic nucleus that is defined by its spectral line emission. The spectra typically include line emission from weakly ionized or neutral atoms, such as O, O+, N+, and S+. Conversely, the spectral line emission from strongly ionized atoms, such as O++, Ne++, and He+, is relatively weak." ([Wikipedia](https://en.wikipedia.org/wiki/Low-ionization_nuclear_emission-line_region))
- **Understanding Galaxy Evolution through Emission Lines**. "We review the use of emission-lines for understanding galaxy evolution, focusing on excitation source, metallicity, ionization parameter, ISM pressure and electron density. We show that the UV, optical and infrared contain complementary diagnostics that can probe the conditions within different nebular ionization zones." ([arXiv:1910.09730](https://arxiv.org/abs/1910.09730))

> Definitions quoted from Wikipedia (CC BY-SA 4.0) and the arXiv abstract. Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Forbidden line diagnostics]]
- [[OIII forbidden lines]]
- [[Forbidden lines]]
- [[Ionisation parameter and ionisation state]]
- [[H II region spectroscopy]]
- [[AGN spectroscopy]]
- [[Galaxy spectroscopy by type]]
- [[Balmer decrement]]
- [[Dust extinction in nebulae]]
- [[Photoionisation balance]]



## Linked References

- [[AGN spectroscopy]]
- [[Forbidden line diagnostics]]
- [[Forbidden lines]]
- [[Galaxy spectroscopy by type]]
- [[Ionisation parameter U]]
- [[Ionisation parameter and ionisation state]]
- [[Ionisation stratification]]
- [[OIII forbidden lines]]
- [[SII forbidden lines]]
- [[Supernova remnant spectroscopy]]
- [[Astronomical_Spectroscopy_MOC]]


