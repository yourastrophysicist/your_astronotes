---
layout: "default"
title: "Photometric standard stars"
---
photometric standard stars are sources with **precisely calibrated magnitudes** in well-defined photometric systems. they are the practical anchor of every photometric measurement: by observing them at the same airmass and through the same instrument, you tie your science target's flux to an absolute scale.

## the role of standards

every science image needs two corrections:
1. **atmospheric extinction**: $k(\lambda) X$ subtracted (see [Atmospheric extinction](interf/Atmospheric%20extinction.html)).
2. **instrumental zeropoint**: the offset $Z$ in $m = -2.5\log_{10}(F_{\rm src}) + Z$.

both come from observations of standard stars during the night.

procedure:
1. observe several standards at different airmasses through the same filter as the science target.
2. fit Bouguer line: extracts $k(\lambda)$ and the zeropoint at $X = 0$.
3. apply correction to every science target.

## the major standard catalogues

### Landolt fields (Johnson-Cousins)

Arlo Landolt's catalogues (1983, 1992, 2009) provide UBVRI photometry for stars at several declinations near the celestial equator. precision $\sim 0.005$ mag per star, with hundreds of stars per field.

still the most-used Johnson-Cousins standards for moderate-aperture telescopes.

### Stetson photometric standards

Peter Stetson's catalogues extend Landolt to fainter magnitudes ($V$ to $\sim 18$ to $20$) and broader sky coverage. used by ground-based imaging surveys.

### SDSS standards (ugriz)

the SDSS photometric system is calibrated against $\sim 100$ standard stars whose magnitudes are derived from spectrophotometric F-stars (BD+17 4708 anchor). entire SDSS photometric catalog (2.5\% absolute calibration) is itself a deep secondary standard system.

### Pan-STARRS PS1

billion stars with $\sim 0.005$ mag photometric precision in $grizy$. now the de facto secondary standard for the northern sky.

### Gaia DR3 BP and RP

billion stars with broadband BP, RP, G photometry to $\sim 0.001$ mag for bright stars. now the most reliable all-sky absolute calibration available for any survey.

### CALSPEC (HST)

spectrophotometric standards used by HST for absolute calibration. $\sim 100$ stars with $\sim 1\%$ flux calibration in $1$ to $30\,\mu$m. anchored to white dwarfs whose models are nearly first-principles.

## what makes a good standard

- **bright but not saturating**: $V \approx 8$ to $14$ for a 1-m telescope.
- **non-variable**: stable to $\sim 0.001$ mag over years.
- **isolated**: no contaminating neighbours within the typical aperture.
- **well-characterised SED**: precise color terms; usually FGK main-sequence stars or white dwarfs.

variability check: photometric standards are routinely re-observed and any source showing $\Delta m > 0.01$ mag is dropped.

## the practical workflow

a typical photometric night:
1. observe 5 to 10 Landolt standards spaced over $X = 1$ to $2$ at the start and end of the night.
2. observe science targets in between.
3. fit Bouguer lines per filter.
4. apply $k(\lambda)$ and zeropoints to science.

this gives **absolute** photometry (tied to the standard system) with $\sim 0.01$ to $0.03$ mag precision, on a photometric night.

on non-photometric nights (varying clouds), use **differential** photometry: science target and a nearby comparison star at similar airmass. the differential magnitude is unaffected by extinction variations.

## see also

- [Atmospheric extinction](interf/Atmospheric%20extinction.html)
- [Magnitudes and photometric systems](Magnitudes%20and%20photometric%20systems.html)
- [Filter systems and bandpasses](Filter%20systems%20and%20bandpasses.html)
- [Color indices](Color%20indices.html)
- [Aperture photometry](Aperture%20photometry.html)
- [CCD calibration steps](CCD%20calibration%20steps.html)
- [Survey resources for Obs Astro](Survey%20resources%20for%20Obs%20Astro.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Atmospheric%20extinction.html" class="backlink-item">Atmospheric extinction</a></li>
    <li class="backlink-item-wrap"><a href="Filter%20systems%20and%20bandpasses.html" class="backlink-item">Filter systems and bandpasses</a></li>
    <li class="backlink-item-wrap"><a href="Flux%20calibration.html" class="backlink-item">Flux calibration</a></li>
    <li class="backlink-item-wrap"><a href="PSF%20photometry.html" class="backlink-item">PSF photometry</a></li>
    <li class="backlink-item-wrap"><a href="Photometric%20system%20conversion%20and%20color%20terms.html" class="backlink-item">Photometric system conversion and color terms</a></li>
    <li class="backlink-item-wrap"><a href="Python%20and%20IRAF%20tools%20for%20photometry.html" class="backlink-item">Python and IRAF tools for photometry</a></li>
    <li class="backlink-item-wrap"><a href="Survey%20resources%20for%20Obs%20Astro.html" class="backlink-item">Survey resources for Obs Astro</a></li>
    <li class="backlink-item-wrap"><a href="interf/Atmospheric%20extinction.html" class="backlink-item">Atmospheric extinction</a></li>
    <li class="backlink-item-wrap"><a href="interf/Flux%20calibration.html" class="backlink-item">Flux calibration</a></li>
  </ul>
</div>

