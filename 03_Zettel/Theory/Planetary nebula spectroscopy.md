---
layout: "default"
title: "Planetary nebula spectroscopy"
---
{% raw %}
a **planetary nebula (PN)** is the ejected envelope of an intermediate-mass star ($1$ to $8\,M_\odot$) in its post-AGB phase, ionised by the very hot ($T \sim 10^5$ K) central white-dwarf precursor. PN spectra are dominated by very bright forbidden + recombination lines on a faint continuum, and are diagnostically similar to but harder than HII regions.

## the spectral signature

### bright lines
- **[OIII] $\lambda 4959, 5007$**: extremely strong, often **brighter than Hα**. defining feature of PN spectra. $\lambda 5007$ alone can dominate the PN's bolometric output.
- **Hα, Hβ, Hγ, Hδ**: Balmer recombination, similar to HII regions.
- **He I $\lambda 5876$**, **He II $\lambda 4686$**: HeII strong because central stars are very hot ($> 50\,000$ K), unlike most HII regions.
- **[NeIII] $\lambda 3869$**, **[NeV] $\lambda 3426, 3346$** in higher-ionisation PN.
- **[OI] $\lambda 6300, 6364$**: from the neutral envelope around the inner ionised gas.
- **[OII], [NII], [SII], [SIII]**: standard nebular forbidden lines.

### example: M57 (Ring Nebula)
the canonical bright optical PN. spectrum (in `intro_spec.pdf`) shows:
- $[OIII]\,\lambda 5007$ towering above other features.
- bright Balmer (mostly H$\alpha$, H$\beta$).
- moderate He II $\lambda 4686$.
- forbidden lines from many ionisation states.

### faint continuum
recombination + free-free + 2-photon. fainter than HII region continuum because PN are usually less massive (less total gas).

## what you can extract

same diagnostics as HII regions, plus more:

1. **dust extinction** from Balmer decrement.
2. **density** from $[SII]$. PN typically denser than HII regions, $n_e \sim 10^3$ to $10^5$ cm$^{-3}$.
3. **temperature** from $[OIII]\,\lambda 4363/\lambda 5007$. PN typically hotter, $T_e \sim 10^4$ to $1.5 \times 10^4$ K.
4. **abundances** from direct method.
5. **kinematics**: many PN have $v_{\rm exp} \sim 20$ to $40$ km/s, observable as line splittings or P-Cygni profiles.
6. **central star $T$**: from the **Zanstra method** (ratio of HeII to H$\beta$), recovering $T_{\rm Zanstra}$ for the central WD.
7. **PN luminosity functions** in nearby galaxies use the [OIII] $\lambda 5007$ luminosity as a **standard candle**: the bright end of the PN luminosity function is universal at $M \sim -4.7$. used for distance measurements to nearby galaxies.

## the special role of central stars

PN central stars are **hot WD progenitors**, $T = 10^5$ to $2 \times 10^5$ K, $L = 10^3$ to $10^4\,L_\odot$. they ionise the surrounding ejected envelope before fading to faint WD. spectroscopically classified as **PG 1159**, **DA**, **DO**, etc. WD types depending on remaining atmosphere.

## the geometry

PN show diverse morphologies:
- **round** (M57): symmetric ejection.
- **elliptical** (NGC 7027): rotation or asymmetric mass loss.
- **bipolar** (NGC 6537, "Red Spider"): binary-driven.
- **multipolar** (NGC 5189): complex evolution.

IFU spectroscopy (MUSE, KCWI) maps these in 3D, recovering kinematic shells.

## the chemical signature

PN abundances reflect the **AGB nucleosynthesis** of the progenitor:
- **C/O > 1** ("carbon stars"): from third dredge-up convective mixing.
- **N enhancement**: from hot bottom burning in $> 4\,M_\odot$ AGB stars.
- **s-process elements** (Ba, Ce, La): also from AGB nucleosynthesis.

so PN spectra carry the chemical legacy of intermediate-mass star evolution and contribute to Galactic chemical evolution.

## see also

- [H II region spectroscopy](./H%20II%20region%20spectroscopy.html)
- [Forbidden lines](./Forbidden%20lines.html)
- [OIII forbidden lines](./OIII%20forbidden%20lines.html)
- Strömgren sphere
- [Helium energy levels](./Helium%20energy%20levels.html)
- [Stellar evolution timescales](./Stellar%20evolution%20timescales.html)
- [Stellar populations I II III](./Stellar%20populations%20I%20II%20III.html)
- [Recombination continuum](./Recombination%20continuum.html)
- [Photoionisation balance](./Photoionisation%20balance.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Galaxy%20spectroscopy%20by%20type.html" class="backlink-item">Galaxy spectroscopy by type</a></li>
    <li class="backlink-item-wrap"><a href="./Ionisation%20stratification.html" class="backlink-item">Ionisation stratification</a></li>
    <li class="backlink-item-wrap"><a href="./OIII%20forbidden%20lines.html" class="backlink-item">OIII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20ne%20diagnostics.html" class="backlink-item">Spectroscopic ne diagnostics</a></li>
  </ul>
</div>
