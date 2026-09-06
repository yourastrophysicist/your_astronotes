---
layout: default
title: "Photometric standard stars"
---

photometric standard stars are sources with **precisely calibrated magnitudes** in well-defined photometric systems. they are the practical anchor of every photometric measurement: by observing them at the same airmass and through the same instrument, you tie your science target's flux to an absolute scale.

## the role of standards

every science image needs two corrections:
1. **atmospheric extinction**: $k(\lambda) X$ subtracted (see [Atmospheric extinction](../../02_Zettel/Theory/interf/Atmospheric extinction.html)).
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

- [Atmospheric extinction](../../02_Zettel/Theory/interf/Atmospheric extinction.html)
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.html)
- [Filter systems and bandpasses](../../02_Zettel/Theory/Filter systems and bandpasses.html)
- [Color indices](../../02_Zettel/Theory/Color indices.html)
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.html)
- [CCD calibration steps](../../02_Zettel/Theory/CCD calibration steps.html)
- [Survey resources for Obs Astro](../../02_Zettel/Theory/Survey resources for Obs Astro.html)
