---
layout: "default"
title: "Survey resources for Obs Astro"
---
{% raw %}
a quick reference to the major sky surveys cited in Obs Astrophysics, what they cover, and what each is used for. essential context for any modern observational claim.

## optical, ground-based

### SDSS (Sloan Digital Sky Survey)
- area: $14\,000$ deg$^2$ (north Galactic cap + stripe 82 + smaller).
- bands: $u, g, r, i, z$ (AB).
- depth: $r \sim 22.2$ ($5\sigma$ point source).
- spectroscopy: $\sim 4 \times 10^6$ galaxy redshifts, $\sim 10^6$ stellar spectra, $\sim 10^5$ quasars.
- main use: photometric redshifts, galaxy clustering, SDSS-DR catalogs.

### Pan-STARRS (PS1)
- area: $30\,000$ deg$^2$ (north of $-30°$).
- bands: $g, r, i, z, y$ (Pan-STARRS native; AB).
- depth: $r \sim 23$ stack.
- main use: northern multi-band photometry, transient detection.

### DECam Legacy Surveys (DECaLS, BASS, MzLS)
- area: $14\,000$ deg$^2$ for DESI footprint.
- bands: $g, r, z$ (DECam) + WISE.
- depth: $r \sim 23.4$.
- main use: DESI target selection.

### Vera Rubin Observatory LSST (planned)
- area: $18\,000$ deg$^2$, $\sim 800$ visits/field over 10 yr.
- bands: $u, g, r, i, z, y$.
- depth: stacked $r \sim 27.5$.
- main use: time-domain astronomy, dark-energy survey, transient alerts.

## optical, space-based

### HST
- area: small fields (CANDELS $\sim 0.2$ deg$^2$, COSMOS $\sim 1.7$ deg$^2$).
- bands: F275W to F814W (UVIS), F098M to F160W (IR).
- depth: $H \sim 27$ in deep fields.
- main use: galaxy morphology, Cepheid distances, deep extragalactic.

### Gaia
- area: all-sky.
- bands: $G$, $G_{BP}$, $G_{RP}$.
- depth: $G \sim 21$.
- main use: parallaxes, proper motions, $\sim 10^9$ stars to $10\,\mu$as precision.

### Euclid (launched 2023)
- area: $14\,000$ deg$^2$ (wide), $40$ deg$^2$ (deep).
- bands: $VIS$ broadband ($550$ to $900$ nm) + Y, J, H NIR.
- main use: weak lensing, galaxy clustering for cosmology.

### Roman (launching ~2027)
- area: hundreds of deg$^2$.
- bands: NIR ($1$ to $2\,\mu$m).
- main use: SN Ia cosmology, microlensing, NIR survey.

## NIR

### 2MASS
- area: all-sky.
- bands: J, H, K$_s$.
- depth: $K \sim 14.5$.
- main use: NIR Galactic survey, basic NIR photometry of nearby galaxies.

### UKIDSS, VHS (UK + ESO NIR surveys)
- area: significant portions of sky.
- depth: deeper than 2MASS by $\sim 5$ mag.
- main use: high-$z$ galaxy / quasar searches.

## mid-IR + far-IR

### WISE / NEOWISE
- area: all-sky, repeated.
- bands: $W1$ ($3.4\,\mu$m), $W2$ ($4.6\,\mu$m), $W3$ ($12\,\mu$m), $W4$ ($22\,\mu$m).
- main use: stellar mass at $z \sim 0$, AGN selection.

### Spitzer (now retired)
- IRAC ($3.6$ to $8\,\mu$m) and MIPS ($24$ to $160\,\mu$m).
- main use: deep IR photometry pre-JWST.

### Herschel (retired)
- PACS ($60$ to $200\,\mu$m), SPIRE ($250$ to $500\,\mu$m).
- main use: dust SEDs, far-IR LFs, the cosmic IR background.

### JWST
- NIRCam (broadband NIR), MIRI ($5$ to $25\,\mu$m).
- main use: high-$z$ galaxies ($z \sim 6$ to $20$), exoplanet atmospheres, NIR resolved imaging.

## sub-mm and radio

### ALMA
- mm + sub-mm imaging and spectroscopy.
- resolution: $0.01''$ to $1''$.
- main use: dust SEDs, molecular line imaging, dusty high-$z$ SFGs.

### VLA / SKA
- cm to dm radio.
- main use: synchrotron, free-free, HI 21 cm.

## X-ray and gamma

### Chandra
- $0.5$ to $8$ keV imaging spectroscopy.
- main use: clusters, AGN, SNRs.

### XMM-Newton
- soft X-ray, larger collecting area than Chandra.
- main use: AGN and cluster spectroscopy.

### eROSITA (eROSITA-DE)
- all-sky soft X-ray.
- main use: AGN census, cluster cosmology.

### Fermi LAT
- gamma-ray ($> 100$ MeV).

## the role for Obs Astro

for the exam: know **at least one** survey for each band (SDSS optical, 2MASS NIR, WISE mid-IR, Herschel far-IR, ALMA sub-mm, VLA radio, Chandra X-ray) and what it is best at.

for SFR, galaxy SEDs, distance methods, photometric redshifts, the relevant data come from cross-matching multiple surveys above.

## see also

- [Photometric standard stars](./Photometric%20standard%20stars.html)
- [Filter systems and bandpasses](./Filter%20systems%20and%20bandpasses.html)
- [Magnitudes and photometric systems](./Magnitudes%20and%20photometric%20systems.html)
- [Atmospheric transparency windows](interf/Atmospheric%20transparency%20windows.html)
- [Observational_Astrophysics_MOC](../../04_Atlas/Observational_Astrophysics_MOC.html)
- [Lab_High-Energy_MOC](../../04_Atlas/Lab_High-Energy_MOC.html)
- [Observational_Cosmology_MOC](../../04_Atlas/Observational_Cosmology_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Deep-field%20surveys.html" class="backlink-item">Deep-field surveys</a></li>
    <li class="backlink-item-wrap"><a href="./Integral-field%20spectroscopy%20IFU.html" class="backlink-item">Integral-field spectroscopy IFU</a></li>
    <li class="backlink-item-wrap"><a href="./Multi-object%20spectroscopy%20MOS.html" class="backlink-item">Multi-object spectroscopy MOS</a></li>
    <li class="backlink-item-wrap"><a href="./Photometric%20standard%20stars.html" class="backlink-item">Photometric standard stars</a></li>
    <li class="backlink-item-wrap"><a href="./Python%20and%20IRAF%20tools%20for%20photometry.html" class="backlink-item">Python and IRAF tools for photometry</a></li>
    <li class="backlink-item-wrap"><a href="./SDSS%20overview.html" class="backlink-item">SDSS overview</a></li>
    <li class="backlink-item-wrap"><a href="./Spectrograph%20types.html" class="backlink-item">Spectrograph types</a></li>
  </ul>
</div>
