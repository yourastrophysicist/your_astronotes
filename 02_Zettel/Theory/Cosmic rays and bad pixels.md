---
layout: default
title: "Cosmic rays and bad pixels"
---

two classes of CCD-image artefacts that have to be handled before science: random cosmic-ray hits and persistent bad pixels.

## cosmic rays

high-energy charged particles from solar and Galactic sources, plus secondaries from the atmosphere and material around the telescope. each hit deposits $\sim 10^4$ to $10^5$ electrons in a small cluster (usually $1$ to $5$ pixels) on the CCD.

### rate

at sea level: $\sim 1$ to $2$ events/cm$^2$/min from secondary cosmic rays.
at HST orbit: much higher, especially in the South Atlantic Anomaly (SAA), $\sim 10$ to $100$ events/cm$^2$/min during SAA passages.
at JWST L2: $\sim 5$ to $10$ events/cm$^2$/min, fewer than HST but still significant.

per pixel per minute, the rate is small ($\sim 10^{-4}$). but for a $4 \text{k} \times 4$k CCD over a 600-second exposure, that is $\sim 10^4$ events per frame. roughly $\sim 0.1\%$ of pixels in a single long exposure.

### identification

cosmic-ray hits look distinctly different from real sources:
- **sharp profile**: narrower than the PSF (hits a few pixels, no atmospheric blurring).
- **high amplitude**: typical $\sim 10^4$ electrons per pixel, much higher than the local sky background.
- **sometimes elongated tracks** for inclined high-energy particles.

algorithms:
- **LACOSMIC** (van Dokkum 2001): compares each pixel to a Laplacian-filtered version of the image; pixels much sharper than the PSF are flagged as cosmic rays. astroscrappy in python.
- **multi-frame sigma-clipping**: take several dithered or repeated exposures; per-pixel median rejects outliers. cosmic rays appear in only one frame.

### consequence

if not removed, cosmic rays mimic sources, contaminate aperture photometry, and saturate cosmetic appearance. always run CR rejection before source detection.

## bad pixels

persistent, deterministic defects:
- **hot pixels**: always read out at a high level due to charge generation defects. visible in dark frames as bright outliers.
- **dead/cold pixels**: low quantum efficiency, fail to accumulate signal. visible in flat frames as dark outliers.
- **bad columns**: traps along a column kill charge transfer, leaving a column dark or fringed. typical near the chip edges.
- **charge traps**: pixels that hold and slowly release charge, producing trails behind moving sources.

### identification

- **from darks**: hot pixels show as outlier-bright in the master dark.
- **from flats**: low-QE pixels show as outlier-dark in the master flat.
- **manufacturer's bad-pixel map**: usually ships with the detector.

### handling

create a **bad pixel mask** (BPM): a binary image where 1 = bad, 0 = good. propagate through every step:
- in CCD calibration: replace bad pixels by interpolation from nearest good neighbours.
- in source detection: skip detection at masked pixels.
- in photometry: exclude masked pixels from aperture sums.

modern formats (e.g. FITS images with `MASK` extension, JWST data quality flag arrays) carry per-pixel quality information through the pipeline.

## dithering, the universal antidote

both cosmic rays and bad pixels are mostly mitigated by **dithering**: take multiple exposures with small pointing offsets (a few arcseconds, larger than typical bad-pixel patterns). then:
- bad pixels and CRs land on different sky positions in each frame.
- the median (or sigma-clipped mean) of the registered stack rejects them.

dithering is now standard in every survey from SDSS through Euclid.

## see also

- [CCD calibration steps](../../02_Zettel/Theory/CCD calibration steps.md)
- [CCD basics](../../02_Zettel/Theory/CCD basics.md)
- [CCD readout chain](../../02_Zettel/Theory/CCD readout chain.md)
- [Aperture photometry](../../02_Zettel/Theory/Aperture photometry.md)
- [The CCD equation](../../02_Zettel/Theory/The CCD equation.md)
