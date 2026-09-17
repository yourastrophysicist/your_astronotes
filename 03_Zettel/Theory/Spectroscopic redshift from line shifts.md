---
layout: "default"
title: "Spectroscopic redshift from line shifts"
---
{% raw %}
measuring **spectroscopic redshift** is the most robust way to determine a distant object's distance. the line-shift principle is conceptually simple: identify a known emission or absorption line, compare its observed wavelength to its rest wavelength, and read off $z$.

## the formula

$$\boxed{\, z = \frac{\lambda_{\rm obs} - \lambda_{\rm rest}}{\lambda_{\rm rest}} \,}$$

equivalently $\lambda_{\rm obs} = (1 + z) \lambda_{\rm rest}$.

at small $z$, $v \approx cz$ (recession velocity). at high $z$, full FLRW relations apply ([Cosmological redshift](./Cosmological%20redshift.html)).

## the procedure

1. **identify a feature** in the observed spectrum (line or break).
2. **match it** to a known rest-frame template (galaxy, quasar, star).
3. **measure the wavelength shift** $\Delta\lambda$ via centroid fitting or cross-correlation.
4. **compute $z$**.

precision: $\delta z \sim \delta\lambda / \lambda_{\rm rest}$. for $R = 5000$ spectrum, $\delta\lambda \sim 1$ Å, giving $\delta z \sim 2 \times 10^{-4}$ for an optical line.

## the multiple-line cross-check

a **single line** is ambiguous (could be different transitions in different galaxies at different $z$). by **cross-correlating** the entire spectrum with a template galaxy (Tonry & Davis 1979), the result is robust:
- multiple absorption / emission features identified simultaneously.
- relative line spacing checks $z$: lines at different rest wavelengths should all shift by the same factor.

modern redshift codes (RVSAO, redrock, marz) use cross-correlation with a library of templates and quote $z$ + a confidence flag.

## examples by object class

### galaxies
- **strong absorption-line galaxies** (passive ellipticals): Ca II H+K, Mg b, Na D, $4000$ Å break. typical $z$ measured to $\sim 0.001$ from low-res spectra.
- **emission-line galaxies** (star-forming): H$\alpha$, $[OII]\,\lambda 3727$, $[OIII]\,\lambda 5007$. easier to measure than absorption.
- **at high $z$ ($z > 1.5$)**: H$\alpha$ shifts out of optical. use $[OIII]$, $[OII]$, or rest-frame UV (Mg II, Ly$\alpha$).

### quasars
- **broad emission lines**: Ly$\alpha$ (visible at $z > 1.7$), C IV $\lambda 1549$, C III] $\lambda 1909$, Mg II $\lambda 2798$. each gives an independent $z$ estimate.
- **at high $z$ ($z > 5$)**: Ly$\alpha$ is in optical, IGM absorption blueward (Gunn-Peterson trough).

### stars
- **radial velocity** rather than redshift; $v_r = c\Delta\lambda/\lambda_{\rm rest}$. typical $|v_r| \lesssim 100$ km/s for Galactic stars.

## the role of $[OIII]\,\lambda 5007$

uniquely useful at $z = 0.05$ to $1$ because:
- it's the brightest emission line in many star-forming galaxies.
- it's narrow, so $z$ centroid is precise.
- it has a fixed wavelength known to $\sim 0.001$ Å.

so SDSS, DESI, etc. use $[OIII]\,\lambda 5007$ + companions for redshifts of millions of galaxies.

## limits of accuracy

systematic errors that limit precision:
- **wavelength calibration error** (see [Wavelength calibration](./Wavelength%20calibration.html)): typically $\delta\lambda \sim 0.01$ Å in modern echelle, $\sim 0.5$ Å in low-res.
- **line peculiar velocity**: galaxies can have $v_{\rm peculiar} \sim 300$ km/s at low $z$. limits the cosmological-redshift accuracy.
- **profile asymmetry**: many emission lines (especially Ly$\alpha$ at high $z$) are asymmetric due to outflows or absorbers, biasing the centroid.

precision-RV applications (exoplanet detection): $\delta v \sim 0.1$ to $1$ m/s requires $\delta\lambda/\lambda \sim 10^{-9}$, well-controlled echelle spectrograph.

## see also

- [Wavelength calibration](./Wavelength%20calibration.html)
- [Cosmological redshift](./Cosmological%20redshift.html)
- [Hubble's law and cosmological redshift](./Hubble%27s%20law%20and%20cosmological%20redshift.html)
- [Distance ladder derivations](./Distance%20ladder%20derivations.html)
- [Stellar velocity from Doppler shift](./Stellar%20velocity%20from%20Doppler%20shift.html)
- [Hydrogen spectral series](./Hydrogen%20spectral%20series.html)
- [Calcium and CaII H+K](./Calcium%20and%20CaII%20H%2BK.html)
- [Photometric redshifts](./Photometric%20redshifts.html) — cheaper alternative
- [Multi-object spectroscopy MOS](./Multi-object%20spectroscopy%20MOS.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Calcium%20and%20CaII%20H%2BK.html" class="backlink-item">Calcium and CaII H+K</a></li>
    <li class="backlink-item-wrap"><a href="./Cosmological%20redshift.html" class="backlink-item">Cosmological redshift</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20velocity%20from%20Doppler%20shift.html" class="backlink-item">Stellar velocity from Doppler shift</a></li>
    <li class="backlink-item-wrap"><a href="./Wavelength%20calibration.html" class="backlink-item">Wavelength calibration</a></li>
  </ul>
</div>
