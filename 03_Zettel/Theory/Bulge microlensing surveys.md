---
layout: "default"
title: "Bulge microlensing surveys"
name: "Bulge microlensing surveys"
description: "OGLE+MOA+MACHO microlensing of bulge stars + Bensby et al. 2013/2017 spectroscopy of microlensed dwarfs giving age-metallicity at the bulge MS turn-off"
---
{% raw %}
**microlensing surveys** of the Galactic bulge have been transformative for inner-Galaxy stellar populations. when a foreground star or compact object passes in front of a faint background bulge dwarf, the bulge dwarf can brighten by several magnitudes for hours to days. this **gravitational microlensing** brief brightening makes faint MS turn-off bulge stars accessible to high-resolution spectroscopy.

## the surveys

- **OGLE** (Optical Gravitational Lensing Experiment, 1992-present): Polish-led ground-based long-term photometric monitoring of millions of bulge stars. principal microlensing alert system; also detects exoplanets, RR Lyrae, eclipsing binaries.
- **MACHO** (1992-1999): US-Australian survey toward the LMC + bulge; pioneered statistical microlensing optical depth measurements.
- **EROS** (1990-2002): French survey toward LMC + SMC + bulge; constrained MACHO contribution to dark halo.
- **MOA** (Microlensing Observations in Astrophysics, 1995-present): Japanese-NZ survey, often co-detects events with OGLE.

these surveys have detected $> 20{,}000$ microlensing events toward the bulge, with optical depth $\tau \sim 2 \times 10^{-6}$ along Baade Window sight lines.

## why the bulge is the best microlensing target

- the high stellar density along bulge lines of sight provides many background sources;
- the bar geometry produces a high optical depth for self-lensing within the bulge;
- the proximity ($\sim 8$ kpc) gives reasonable Einstein-ring crossing times ($\sim$ days).

during a microlensing event the bulge MS dwarf can be temporarily as bright as a giant, allowing high-resolution spectroscopy at $S/N \gtrsim 50$ on $8$-$10$ m class telescopes during the peak.

## Bensby et al. 2013 + 2017: age-metallicity from microlensed dwarfs

### method

Bensby et al. obtained high-resolution UVES + FLAMES spectra of $\sim 90$ microlensed bulge dwarfs near the MS turn-off, during peak amplification. from each spectrum they derived:

- $T_{\rm eff}$ from excitation balance of Fe I lines,
- $\log g$ from ionisation balance (Fe I vs Fe II),
- $[{\rm Fe/H}]$ from line abundances,
- $v_{\rm micro}$ from Fe I equivalent width vs reduced equivalent width.

ages were derived from the comparison of observations and stellar isochrones in the $\log g$-$\log T_{\rm eff}$ plane (avoiding the photometric distance + reddening issues).

### the result

![L19_p17_alpha_Fe-17.png](../../assets/images/L19_p17_alpha_Fe-17.png)
*(age-metallicity from microlensed bulge dwarfs; Bensby et al. 2013/2017)*

the age-metallicity diagram shows a striking pattern:

- stars with $[{\rm Fe/H}] < -0.4$ are **old** ($10$-$12$ Gyr) with $[\alpha/{\rm Fe}] > 0$;
- stars with $[{\rm Fe/H}] > -0.4$ span a **wide range of ages** ($1$-$13$ Gyr) with declining $[\alpha/{\rm Fe}]$ at the metal-rich end;
- about $30\%$ of microlensed bulge dwarfs are younger than $\sim 7$ Gyr, with a few stars as young as $\sim 1.5$ Gyr.

this is **direct evidence for a composite bulge**: an old metal-poor component plus an intermediate-age + young metal-rich component.

## comparison with photometry: the discrepancy

the result conflicts with HST CMD analyses (Clarkson et al. 2008, Renzini et al. 2018) which find $\geq 95\%$ of bulge stars are older than $\sim 10$ Gyr.

possible reconciliation:
- microlensing samples a slightly different bulge volume than HST imaging;
- spectroscopy of individual stars detects the young tail more sensitively than photometric isochrone fits;
- a real bimodal age distribution (Bensby 2017): metal-poor old + metal-rich extended SFH;
- systematic differences in age scales between $\log g$-$T_{\rm eff}$ ages and CMD-fit ages.

the issue remains an active research question. see [The Galactic Bulge](./The%20Galactic%20Bulge.html).

## related microlensing science

- exoplanet detection via microlensing of bulge stars (OGLE-2003-BLG-235 = first ground-based microlensing planet);
- search for compact dark matter candidates (MACHOs constrained to be $< 20\%$ of halo);
- structure of the Galactic bar from event rate gradients.

## reference papers

- **Bensby et al. 2013, A&A 549, A147**: ages + abundances of $\sim 60$ microlensed dwarfs.
- **Bensby et al. 2017, A&A 605, A89**: extended sample to $\sim 90$ stars; clearer two-component bulge.
- **Sumi et al. 2003** (MOA), **Udalski 1992** (OGLE).
- **Clarkson et al. 2008**: HST proper-motion bulge CMD age $\sim 11$ Gyr (alternative to microlensing).

## see also

- [The Galactic Bulge](./The%20Galactic%20Bulge.html)
- [Bulge CMD complications](./Bulge%20CMD%20complications.html)
- [Age-metallicity relation of Galactic GCs](./Age-metallicity%20relation%20of%20Galactic%20GCs.html)
- [Atmospheric parameters Teff log g feh vmicro](interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html)
- [Spectroscopic determination of metallicity](./Spectroscopic%20determination%20of%20metallicity.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Bulge%20CMD%20complications.html" class="backlink-item">Bulge CMD complications</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20Astrophysics%20research%20citations%20index.html" class="backlink-item">Stellar Astrophysics research citations index</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./The%20Galactic%20Bulge.html" class="backlink-item">The Galactic Bulge</a></li>
  </ul>
</div>
