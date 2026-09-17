---
layout: "default"
title: "Malavolta 08 - TESS Mission Architecture and Target Pixel Files"
---
{% raw %}
# Malavolta 08 ? TESS Mission Architecture and Target Pixel Files

*Astrophysics Laboratory 2, Prof. Luca Malavolta*  
*Index: [Astrophysics_Laboratory_2_MOC](../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html)*

---

## The TESS Space Mission

The Transiting Exoplanet Survey Satellite (TESS; Ricker et al. 2015) is a NASA Explorer-class space telescope designed to perform an all-sky survey discovering transiting exoplanets around bright, nearby stars ($T < 13.5\text{ mag}$).

### Orbital and Optical Architecture
- **Orbit**: highly elliptical, high-Earth orbit in a $2:1$ orbital resonance with the Moon ($P_{\text{orb}} \approx 13.7\text{ days}$, apogee $\sim 375,000\text{ km}$, perigee $\sim 108,000\text{ km}$). This orbit provides an exceptionally stable thermal environment and unhindered viewing angles, with low radiation outside the Van Allen belts.
- **Instrument Payload**: four wide-field optical cameras ($f/1.4$, $105\text{ mm}$ pupil aperture).
- **Total Field of View**: $24^\circ \times 96^\circ$ strip of the sky, oriented along a line of ecliptic longitude.
- **Detector Array**: each camera contains four back-illuminated $2048 \times 2048$ CCID-80 CCDs (16 total CCDs).
- **Pixel Scale**: $21\text{ arcsec / pixel}$ (large pixel size requires careful deblending of nearby background stars).
- **Observation Sector**: TESS stares at each $24^\circ \times 96^\circ$ sector for two spacecraft orbits ($\sim 27.4\text{ days}$) before repointing.

---

## Target Pixel Files (TPFs)

Rather than transmitting full-frame images at high cadence, TESS collects cut-out "postage stamp" sub-arrays around pre-selected targets of high scientific priority.
- Cadences: 2-minute cadence (standard) and 20-second cadence (fast mode).
- Target Pixel Files (TPF) are multi-extension FITS files containing a stack of images across time:
	- **Extension 0 (Primary HDU)**: spacecraft, camera, CCD, and target metadata.
	- **Extension 1 (Binary Table HDU)**: time-series data table:
		- `TIME`: Barycentric TESS Julian Date ($BTJD = BJD - 2457000$).
		- `TIMECORR`: barycentric light travel time correction.
		- `CADENCENO`: sequential cadence index.
		- `RAW_CNTS`: raw $N \times M$ pixel arrays in counts.
		- `FLUX`: calibrated pixel values in $e^- / \text{s}$.
		- `FLUX_ERR`: $1\sigma$ uncertainty array per pixel.
		- `FLUX_BKG`: local background model per pixel.
		- `QUALITY`: 32-bit spacecraft quality flags.
	- **Extension 2 (Image HDU)**: binary aperture mask defining which pixels belong to the pipeline mask.

---

## Querying and Parsing TPFs with Python

Target Pixel Files are downloaded from the Mikulski Archive for Space Telescopes (MAST) using `astroquery`:

```python
from astroquery.mast import Observations
from astropy.io import fits
import matplotlib.pyplot as plt

# Query MAST for TESS Target Pixel Files
obs_table = Observations.query_criteria(
    target_name='GJ 3470',
    obs_collection='TESS',
    dataproduct_type='timeseries'
)

# Open local downloaded TPF
with fits.open('GJ3470_sector44_tp.fits') as hdu:
    time = hdu[1].data['TIME']
    flux = hdu[1].data['FLUX']
    quality = hdu[1].data['QUALITY']
    aperture_mask = hdu[2].data # pipeline mask bits
```

---

## Custom Aperture Mask Definition

The pipeline aperture mask (bit value 2 in Extension 2) is designed for general star extraction. In crowded fields or for faint targets, a custom aperture mask can be defined using thresholding:

```python
import numpy as np

# Compute median flux image across all uncorrupted cadences
good_cadences = quality == 0
median_image = np.nanmedian(flux[good_cadences], axis=0)

# Custom mask: pixels brighter than 5 times the background noise
custom_mask = median_image > np.nanpercentile(median_image, 85)

# Extract simple aperture photometry light curve
custom_lightcurve = np.nansum(flux[:, custom_mask], axis=1)
```

---

## Related Notes
- [TESS Target Pixel Files and Custom Aperture Masks](../../../03_Zettel/Observations/TESS%20Target%20Pixel%20Files%20and%20Custom%20Aperture%20Masks.html)
- [Malavolta 09 - TESS Light Curve Processing and Systematic Correction](./Malavolta%2009%20-%20TESS%20Light%20Curve%20Processing%20and%20Systematic%20Correction.html)
- [Laboratory Exercise - TESS Target Pixel Extraction and Filtering](../../../03_Zettel/Activities/Laboratory%20Exercise%20-%20TESS%20Target%20Pixel%20Extraction%20and%20Filtering.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Malavolta%2009%20-%20TESS%20Light%20Curve%20Processing%20and%20Systematic%20Correction.html" class="backlink-item">Malavolta 09 - TESS Light Curve Processing and Systematic Correction</a></li>
    <li class="backlink-item-wrap"><a href="../../../03_Zettel/Observations/TESS%20Target%20Pixel%20Files%20and%20Custom%20Aperture%20Masks.html" class="backlink-item">TESS Target Pixel Files and Custom Aperture Masks</a></li>
  </ul>
</div>
