---
layout: "default"
title: "Spectrograph types"
---
{% raw %}
four main families of astronomical spectrograph, each optimised for a different regime: longslit, echelle, multi-object (MOS), and integral-field (IFU). knowing which one to use is half the answer to "how would you measure this object?"

## longslit

the simplest, most common. a long narrow slit lies along the focal plane; everything that falls within the slit is dispersed simultaneously by the grating, producing a 2D image: wavelength along $x$, slit position along $y$.

- **field**: a strip of width $\sim 1''$ to $3''$ and length $\sim 1$ to $10$ arcmin.
- **R**: $\sim 1000$ to $10\,000$ typically.
- **use cases**: single bright targets, point sources at known position; spatially resolved spectroscopy of extended objects (galaxies, planetary nebulae) along the slit.
- **examples**: Boller & Chivens, FOSC (Asiago), DOLORES (TNG), FORS2 (VLT).

best when you have a single target or want to study one cross-section of an extended object.

## echelle

uses **high-density gratings ruled at high blaze angle** ($\theta_B \sim 60°$ to $70°$) operating in **very high orders** ($m \sim 30$ to $100$). high $R$ in a compact instrument because $R = \rho m W$.

cross-disperser (a low-density grating perpendicular) separates the densely overlapping orders so the 2D detector image shows each order as a separate stripe.

- **R**: $\sim 30\,000$ to $200\,000$.
- **use cases**: high-precision radial velocities (exoplanets), stellar abundance analysis (chemical composition to $\sim 0.05$ dex), kinematics of stellar populations.
- **examples**: HARPS, HARPS-N, ESPRESSO, X-shooter (UV-VIS-NIR), HIRES.

cost: complex, expensive, only one target at a time. typical fiber-fed for stability.

## multi-object spectroscopy (MOS)

gets spectra of many targets simultaneously across a field. two main flavours:

- **slit-mask MOS**: a custom-cut mask with multiple short slits at the positions of pre-selected targets. each slit produces a longslit-like spectrum on the detector.
- **fiber-fed MOS**: optical fibers placed at target positions in the focal plane, leading to a row of fibers re-imaged onto a single grating. each fiber = one target.

- **R**: $\sim 1000$ to $5000$ usually, sometimes higher.
- **use cases**: galaxy redshift surveys (SDSS, DESI), cluster spectroscopy, large stellar samples (APOGEE).
- **examples**: SDSS BOSS/eBOSS, DESI, FMOS, 2dF, MOONS, 4MOST.

efficient: $\sim 10^3$ spectra simultaneously. the redshift-survey workhorse.

## integral-field spectroscopy (IFU)

gives a **datacube** $(x, y, \lambda)$: a spectrum at every spatial position in a 2D field. three IFU technologies:

- **lenslet array**: each spatial element is reimaged via a microlens to the spectrograph slit. example: SAURON, OSIRIS.
- **lenslets + fibers**: lenslets concentrate light onto a fiber bundle; fibers reformatted into a single linear pseudoslit. example: VIMOS-IFU, MaNGA, KMOS.
- **image slicer**: a stack of small mirrors slices the 2D field into thin strips; strips are realigned in a single line for the spectrograph. example: MUSE, KCWI, NIRSpec.

- **R**: $\sim 1000$ to $10\,000$ typically.
- **use cases**: kinematics of galaxies, AGN narrow-line regions, planetary nebulae, $z$-mapping of clusters, exoplanet host atmospheres.
- **examples**: MUSE (VLT), KCWI (Keck), MaNGA (SDSS-IV), VIMOS, NIRSpec IFU (JWST).

most powerful for extended sources but complex and heavy on data volume.

## comparison table

| type | targets per pointing | spatial information | typical R |
|---|---|---|---|
| longslit | 1 | strip along slit | $10^3$ to $10^4$ |
| echelle | 1 | none | $3\times 10^4$ to $2\times 10^5$ |
| MOS | $10^2$ to $10^3$ | none per target | $10^3$ to $10^4$ |
| IFU | 1 field | 2D map | $10^3$ to $10^4$ |

each modern observatory has multiple instruments to cover different regimes. a typical PhD-level proposal picks the spectrograph based on (target multiplicity) × (need for $R$) × (need for spatial info) × (wavelength range).

## see also

- [Spectrograph design](./Spectrograph%20design.html)
- [Echelle spectroscopy](./Echelle%20spectroscopy.html)
- [Multi-object spectroscopy MOS](./Multi-object%20spectroscopy%20MOS.html)
- [Integral-field spectroscopy IFU](./Integral-field%20spectroscopy%20IFU.html)
- [Grating equation](./Grating%20equation.html)
- [Dispersion and spectral resolution](./Dispersion%20and%20spectral%20resolution.html)
- [Survey resources for Obs Astro](./Survey%20resources%20for%20Obs%20Astro.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Dispersion%20and%20spectral%20resolution.html" class="backlink-item">Dispersion and spectral resolution</a></li>
    <li class="backlink-item-wrap"><a href="./Echelle%20spectroscopy.html" class="backlink-item">Echelle spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Integral-field%20spectroscopy%20IFU.html" class="backlink-item">Integral-field spectroscopy IFU</a></li>
    <li class="backlink-item-wrap"><a href="./Multi-object%20spectroscopy%20MOS.html" class="backlink-item">Multi-object spectroscopy MOS</a></li>
    <li class="backlink-item-wrap"><a href="./N-slit%20interference%20and%20gratings.html" class="backlink-item">N-slit interference and gratings</a></li>
    <li class="backlink-item-wrap"><a href="./Spectrograph%20design.html" class="backlink-item">Spectrograph design</a></li>
  </ul>
</div>
