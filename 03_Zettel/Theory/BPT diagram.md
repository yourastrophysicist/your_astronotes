---
layout: "default"
title: "BPT diagram"
---
{% raw %}
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

- [Forbidden line diagnostics](./Forbidden%20line%20diagnostics.html)
- [OIII forbidden lines](./OIII%20forbidden%20lines.html)
- [Forbidden lines](./Forbidden%20lines.html)
- [Ionisation parameter and ionisation state](./Ionisation%20parameter%20and%20ionisation%20state.html)
- [H II region spectroscopy](./H%20II%20region%20spectroscopy.html)
- [AGN spectroscopy](./AGN%20spectroscopy.html)
- [Galaxy spectroscopy by type](./Galaxy%20spectroscopy%20by%20type.html)
- [Balmer decrement](./Balmer%20decrement.html)
- [Dust extinction in nebulae](./Dust%20extinction%20in%20nebulae.html)
- [Photoionisation balance](./Photoionisation%20balance.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (14)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./AGN%20spectroscopy.html" class="backlink-item">AGN spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20line%20diagnostics.html" class="backlink-item">Forbidden line diagnostics</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20lines.html" class="backlink-item">Forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20spectroscopy%20by%20type.html" class="backlink-item">Galaxy spectroscopy by type</a></li>
    <li class="backlink-item-wrap"><a href="./H%20II%20region%20spectroscopy.html" class="backlink-item">H II region spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20parameter%20U.html" class="backlink-item">Ionisation parameter U</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20parameter%20and%20ionisation%20state.html" class="backlink-item">Ionisation parameter and ionisation state</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20stratification.html" class="backlink-item">Ionisation stratification</a></li>
    <li class="backlink-item-wrap"><a href="./OIII%20forbidden%20lines.html" class="backlink-item">OIII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Observational_Cosmology/Pablo_04_Nuclear_activity_in_galaxies.html" class="backlink-item">Pablo_04_Nuclear_activity_in_galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./SDSS%20overview.html" class="backlink-item">SDSS overview</a></li>
    <li class="backlink-item-wrap"><a href="./SII%20forbidden%20lines.html" class="backlink-item">SII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./Supernova%20remnant%20spectroscopy.html" class="backlink-item">Supernova remnant spectroscopy</a></li>
  </ul>
</div>
