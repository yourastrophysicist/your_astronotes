---
layout: "default"
title: "TESS Target Pixel Files and Custom Aperture Masks"
---
{% raw %}
# TESS Target Pixel Files and Custom Aperture Masks

Target Pixel Files (TPFs) are cut-out postage stamps of CCD pixel arrays centered on stars observed by the TESS spacecraft, stored as multi-extension FITS binary tables across sequential cadences.

## Data Structure
- `TIME`: Barycentric TESS Julian Date ($BTJD = BJD - 2457000$).
- `FLUX`: calibrated 2D pixel image arrays ($e^- / \text{s}$).
- `FLUX_ERR`: $1\sigma$ measurement uncertainty per pixel.
- `QUALITY`: 32-bit spacecraft event bitmask.

## Pipeline Aperture Mask vs Custom Threshold Mask
- **SPOC Pipeline Mask**: bit value 2 in Extension 2. Optimized for automated survey operations; often suboptimal for crowded fields or high-precision exoplanet transit work.
- **Custom Aperture Mask**:
	- Created by computing the temporal median frame across valid cadences (`QUALITY == 0`).
	- Setting an intensity threshold (e.g., all pixels exceeding $3\sigma$ above background):
```python
import numpy as np

median_frame = np.nanmedian(flux[quality == 0], axis=0)
threshold = np.nanpercentile(median_frame, 85)
custom_mask = median_frame > threshold
```
- Custom masks prevent flux contamination from nearby background stars within the large $21\text{ arcsec/pixel}$ TESS plate scale.

## Related Notes
- [Malavolta 08 - TESS Mission Architecture and Target Pixel Files](../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2008%20-%20TESS%20Mission%20Architecture%20and%20Target%20Pixel%20Files.html)
- [TESS SAP vs PDCSAP Flux and Cotrending Basis Vectors](./TESS%20SAP%20vs%20PDCSAP%20Flux%20and%20Cotrending%20Basis%20Vectors.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_Laboratory_2_MOC.html" class="backlink-item">Astrophysics_Laboratory_2_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../Activities/Laboratory%20Exercise%20-%20TESS%20Target%20Pixel%20Extraction%20and%20Filtering.html" class="backlink-item">Laboratory Exercise - TESS Target Pixel Extraction and Filtering</a></li>
    <li class="backlink-item-wrap"><a href="../../02_Literature/Lectures/Astrophysics_Laboratory_2/Malavolta%2008%20-%20TESS%20Mission%20Architecture%20and%20Target%20Pixel%20Files.html" class="backlink-item">Malavolta 08 - TESS Mission Architecture and Target Pixel Files</a></li>
  </ul>
</div>
