---
layout: "default"
title: "Wavelength calibration"
---
{% raw %}
to convert a spectrum's $x$ axis from "pixels" to "Å" you need a known reference: a **comparison lamp** with bright lines at well-tabulated wavelengths.

## the procedure

1. **expose a comparison lamp** through the same optical path as the science target. typical lamps:
   - **HeAr** (helium + argon): coverage $3500$ to $9000$ Å.
   - **NeAr** (neon + argon): denser line forest in red, $5500$ to $10\,000$ Å.
   - **ThAr** (thorium + argon): standard in echelle for high-$R$ stability ($\sim$ thousand lines per order).
   - **CuAr**, **HgArXe**: specific instruments.
2. **identify lines** in the lamp spectrum: take a published lamp atlas with wavelengths and visually match prominent peaks.
3. **fit a polynomial** $\lambda(x) = \sum a_n x^n$ to the (pixel, wavelength) pairs. typical degree 3 to 5; higher-order needed for echelle covering wide $\lambda$.
4. **apply the polynomial** to convert science target's $x$-axis to wavelengths.
5. **check residuals**: for $R = 1000$, residuals should be $\lesssim 0.5$ Å. for $R = 50\,000$, $\lesssim 0.01$ Å.

## sources of error

- **flexure** between lamp and science exposures: instrument bends slightly under gravity as the telescope tracks. a $\sim 1$ pixel shift over a night is common in moderate-$R$ longslit. lamps must be taken **next to** science exposures in time.
- **temperature drift**: refractive-index variations over the night.
- **wrong line identification**: lamp atlas error, blend rejection.
- **fiber position scrambling** in MOS / IFU: each fiber needs its own calibration, slight differences in $\lambda$ vs pixel.

## strategies

- **stable instruments** (HARPS, ESPRESSO): vacuum-sealed and temperature-controlled to $0.001$ K. flexure negligible.
- **simultaneous calibration** (HARPS, NEID): a separate fiber illuminated by a lamp during science exposure to track drifts.
- **sky lines as wavelength reference**: the night-sky OH lines and $[OI]\,\lambda 5577$ provide secondary wavelength checks. especially useful in NIR where atmospheric features are dense.
- **gas absorption cells**: an iodine cell in the light path imprints absorption lines on the science spectrum, simultaneously calibrating wavelength to $0.1$ m/s precision (HIRES original RV technique).

## radial velocity precision

for radial-velocity measurements, wavelength calibration is the dominant systematic. modern echelles target $0.1$ m/s precision over years (Earth-mass exoplanets in habitable zones). this requires:
- ThAr or laser-frequency-comb (LFC) calibration.
- vacuum-stable spectrograph.
- heavy software pipeline correcting for instrument drift, barycentric motion, telluric absorption.

LFC: a femtosecond laser locked to an atomic clock provides a regular forest of "ruler" lines. used in HARPS, ESPRESSO. the gold standard for high-precision RV.

## see also

- [Spectrograph design](./Spectrograph%20design.html)
- [Spectrum reduction pipeline](./Spectrum%20reduction%20pipeline.html)
- [Flux calibration](interf/Flux%20calibration.html)
- [Echelle spectroscopy](./Echelle%20spectroscopy.html)
- [Stellar velocity from Doppler shift](./Stellar%20velocity%20from%20Doppler%20shift.html)
- [Spectroscopic redshift from line shifts](./Spectroscopic%20redshift%20from%20line%20shifts.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Flux%20calibration.html" class="backlink-item">Flux calibration</a></li>
    <li class="backlink-item-wrap"><a href="interf/Flux%20calibration.html" class="backlink-item">Flux calibration</a></li>
    <li class="backlink-item-wrap"><a href="./Multi-object%20spectroscopy%20MOS.html" class="backlink-item">Multi-object spectroscopy MOS</a></li>
    <li class="backlink-item-wrap"><a href="./Spectrograph%20design.html" class="backlink-item">Spectrograph design</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20redshift%20from%20line%20shifts.html" class="backlink-item">Spectroscopic redshift from line shifts</a></li>
    <li class="backlink-item-wrap"><a href="./Spectrum%20reduction%20pipeline.html" class="backlink-item">Spectrum reduction pipeline</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20velocity%20from%20Doppler%20shift.html" class="backlink-item">Stellar velocity from Doppler shift</a></li>
  </ul>
</div>
