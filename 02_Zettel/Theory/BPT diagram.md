---
layout: default
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
- **dust correction**: BPT works on dust-corrected line ratios; uncorrected ratios scatter.
- **integrated spectra**: BPT classification depends on aperture; a galaxy with a SF disk + AGN nucleus may classify differently in central vs outer slits.
- **at high $z$**: BPT shifts because metallicity, $U$, and ionising spectrum hardness all evolve.

## the modern context

BPT classifications are run on $\sim 10^6$ galaxies in SDSS spectroscopic samples. used for:
- **AGN census**: how many galaxies host AGN.
- **galaxy evolution**: how AGN fraction depends on stellar mass, environment.
- **starburst surveys**: identifying pure SF galaxies for SFR studies.

## see also

- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.md)
- [OIII forbidden lines](../../02_Zettel/Theory/OIII forbidden lines.md)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- [Ionisation parameter and ionisation state](../../02_Zettel/Theory/Ionisation parameter and ionisation state.md)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.md)
- [AGN spectroscopy](../../02_Zettel/Theory/AGN spectroscopy.md)
- [Galaxy spectroscopy by type](../../02_Zettel/Theory/Galaxy spectroscopy by type.md)
- [Balmer decrement](../../02_Zettel/Theory/Balmer decrement.md)
- [Dust extinction in nebulae](../../02_Zettel/Theory/Dust extinction in nebulae.md)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.md)
