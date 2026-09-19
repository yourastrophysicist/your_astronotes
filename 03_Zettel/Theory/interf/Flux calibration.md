---
layout: "default"
title: "Flux calibration"
---
to convert a spectrum's $y$ axis from "counts" to "erg/s/cm$^2$/Å" you need a known reference: a **spectrophotometric standard star** whose absolute spectral flux is tabulated.

## the procedure

1. **observe a spectrophotometric standard star** during the same night, through the same instrument, ideally at similar airmass to the science target.
2. **divide the observed standard spectrum by its catalogued flux** to get the **sensitivity function** $S(\lambda)$:
$$S(\lambda) = \frac{F_{\rm cat}(\lambda)}{F_{\rm obs}(\lambda)}$$
units: erg/s/cm$^2$/Å per ADU/s (or per electron/s).
3. **multiply your science spectrum** by $S(\lambda)$ to get the absolute flux of the target.

## the standards

main libraries:
- **CALSPEC** (HST): $\sim 100$ standards with $1\%$ absolute calibration. anchored to white dwarf models. covers $1000$ Å to $30\,\mu$m.
- **Oke 1990** standards: ground-based optical, $3000$ to $10\,000$ Å.
- **STIS-CALSPEC**: HST/STIS spectrophotometry, very high precision.
- **Vega and Sirius**: brightest, used as zero-point references.

## airmass correction

extinction depends on airmass $X$ (see [Atmospheric extinction](Atmospheric%20extinction.html)). standard star and target are often at different airmasses, so:
1. observe the standard at multiple airmasses to determine $k(\lambda)$ on the night.
2. or use a tabulated mean extinction curve for the site.
3. apply Beer-Lambert correction: $F_0(\lambda) = F_{\rm obs}(\lambda) \cdot 10^{0.4 k(\lambda) X}$.

## telluric correction

at NIR wavelengths and in narrow optical bands, **atmospheric absorption lines** (mostly H$_2$O, O$_2$, O$_3$, CO$_2$) eat into the spectrum. correction:
1. observe a hot, fast-rotating featureless star (an A0 V or similar telluric standard) at similar airmass.
2. divide your science spectrum by the telluric standard (after dividing out its known stellar features).
3. or use software that fits an atmospheric model (Molecfit, telfit, TAPAS).

## ground vs space

- **ground-based**: extinction + telluric corrections add $\sim 5$ to $10\%$ uncertainty. typical absolute calibration accuracy: $\sim 5\%$ in optical, $\sim 10\%$ in NIR.
- **HST + JWST**: vacuum, no telluric. CALSPEC calibration gives $1\%$ to $2\%$ absolute precision routinely.

## relative vs absolute flux calibration

for many science cases (line ratios, equivalent widths, redshift identification), only the *shape* of the spectrum matters; the absolute scale cancels out. relative calibration is much easier than absolute:
- divide each spectrum by a smooth low-order polynomial $\to$ continuum-normalised.
- ratios of lines are correctly preserved.

absolute calibration is essential for:
- luminosity / SED measurements.
- line fluxes (e.g. star formation rates from $H\alpha$ luminosity).
- spectrophotometric typing (photo-$z$, classification).

## see also

- [Spectrograph design](../Spectrograph%20design.html)
- [Spectrum reduction pipeline](../Spectrum%20reduction%20pipeline.html)
- [Wavelength calibration](../Wavelength%20calibration.html)
- [Atmospheric extinction](Atmospheric%20extinction.html)
- [Photometric standard stars](../Photometric%20standard%20stars.html)
- [Magnitudes and photometric systems](../Magnitudes%20and%20photometric%20systems.html)
- [Spectral Energy Distribution (SED)](../Spectral%20Energy%20Distribution%20%28SED%29.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (15)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Bandpass%20calibration.html" class="backlink-item">Bandpass calibration</a></li>
    <li class="backlink-item-wrap"><a href="../Calibration%20overview.html" class="backlink-item">Calibration overview</a></li>
    <li class="backlink-item-wrap"><a href="../Flux%20calibration%20in%20radio.html" class="backlink-item">Flux calibration in radio</a></li>
    <li class="backlink-item-wrap"><a href="../Multi-object%20spectroscopy%20MOS.html" class="backlink-item">Multi-object spectroscopy MOS</a></li>
    <li class="backlink-item-wrap"><a href="../Spectrograph%20design.html" class="backlink-item">Spectrograph design</a></li>
    <li class="backlink-item-wrap"><a href="../Spectrum%20reduction%20pipeline.html" class="backlink-item">Spectrum reduction pipeline</a></li>
    <li class="backlink-item-wrap"><a href="../Steps%20in%20radio%20interferometric%20observations.html" class="backlink-item">Steps in radio interferometric observations</a></li>
    <li class="backlink-item-wrap"><a href="../Wavelength%20calibration.html" class="backlink-item">Wavelength calibration</a></li>
    <li class="backlink-item-wrap"><a href="Bandpass%20calibration.html" class="backlink-item">Bandpass calibration</a></li>
    <li class="backlink-item-wrap"><a href="Calibration%20overview.html" class="backlink-item">Calibration overview</a></li>
    <li class="backlink-item-wrap"><a href="Flux%20calibration%20in%20radio.html" class="backlink-item">Flux calibration in radio</a></li>
    <li class="backlink-item-wrap"><a href="Phase%20referencing.html" class="backlink-item">Phase referencing</a></li>
    <li class="backlink-item-wrap"><a href="Steps%20in%20radio%20interferometric%20observations.html" class="backlink-item">Steps in radio interferometric observations</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

