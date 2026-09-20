---
layout: "default"
title: "TESS Target Pixel Files and Custom Aperture Masks"
---
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
- [[Malavolta 08 - TESS Mission Architecture and Target Pixel Files]]
- [[TESS SAP vs PDCSAP Flux and Cotrending Basis Vectors]]



## Linked References

- [[Laboratory Exercise - TESS Target Pixel Extraction and Filtering]]
- [[Astrophysics_Laboratory_2_MOC]]


