---
layout: default
title: "Sensitivity and modern revival"
---

# Sensitivity and modern revival of intensity interferometry

after Narrabri shut down in 1972, intensity interferometry was dormant for ~40 years. modern detectors and large arrays (originally built for gamma-ray astronomy) have brought it back, with sensitivity gains that put bright-star imaging within reach.

## the original sensitivity ceiling

Narrabri could measure stars to roughly $V = 2$-$3$ in reasonable observing time (hours per star). below that, photon noise dominated. detector technology in the 1960s — photomultipliers — limited photon-count rates and SNR.

for stars below $V = 6$, integration times became prohibitive (days). this set the original sensitivity ceiling at $\sim 30$ stars accessible total.

## modern detector advances



three detector improvements increase intensity-interferometry sensitivity by $\sim 10$-$100\times$:

### 1. silicon photomultipliers (SiPMs)

solid-state replacements for traditional PMTs. higher quantum efficiency (40% vs 25%), faster response (ns), lower noise. used in modern IACT arrays.

### 2. EMCCDs and CMOS detectors

photon-counting detectors with sub-electron read noise. allow detection of single photons against a low-noise background.

### 3. fiber-coupled photometric chains

simplify the optical paths. modern intensity interferometry can use fiber-fed PMTs/SiPMs at the telescope focus, eliminating optical alignment headaches.

## the IACT advantage

**imaging atmospheric Cherenkov telescopes** (IACTs) were built for gamma-ray astronomy. they need:
- huge dishes (10-20 m) for collecting Cherenkov flashes from atmospheric showers
- fast electronics (ns response)
- arrays of dozens of dishes spread over ~km
- photometric-quality light buckets

these specifications match almost exactly what intensity interferometry needs. so IACT arrays *can do intensity interferometry on the side*, when no Cherenkov flashes are occurring.

current and planned arrays:

| array | telescopes | baselines | status |
|---|---|---|---|
| **VERITAS** | 4 × 12 m | up to 100 m | demonstrated 2018-2020 |
| **HESS** | 5 × 12 m | up to 120 m | tested |
| **MAGIC** | 2 × 17 m | 85 m | tested |
| **CTA** | 100+ telescopes | up to 5 km | planned (2030s) |

CTA's baselines reach 5 km! at 500 nm, that's $\theta \sim \lambda/B = 20$ μas — comparable to EHT's resolution at radio. for bright stars, CTA-IACT-intensity interferometry could be the highest-resolution stellar imaging ever achieved.

## what modern intensity interferometry can do

three classes of targets:

### 1. stellar surface imaging

bright supergiants and giants ($V < 5$): map surface features (spots, hot spots, granulation) at $\sim 10$ μas resolution. comparable to or better than VLTI/CHARA.

example: imaging the surface of Betelgeuse during the "great dimming" of 2019-2020 with sub-mas precision.

### 2. binary stars and orbital studies

resolved binaries with separations $\sim 10$ μas. complement astrometric and radial-velocity studies. dynamical mass determination at the per-cent level.

### 3. limb-darkening and pulsation

precise limb-darkening profiles for hot and cool stars. pulsation amplitudes for Cepheids and Mira variables.

## what it can't do

still limited by sensitivity:

- **faint stars**: $V > 6$ remains hard
- **extragalactic targets**: far too faint
- **high-resolution spectroscopy**: needs very narrow bands, killing photon flux
- **imaging asymmetric sources**: phase information still missing (only $|V|^2$)

so intensity interferometry remains a **bright-star-only** technique, but with *much* more capability than Narrabri had.

## proposals beyond IACT

other modern intensity-interferometry concepts:

- **hybrid mode at large optical telescopes**: use large optical telescopes (e.g. VLT 8m + auxiliary 1.8m) as light buckets for intensity interferometry on the brightest targets
- **dedicated "II" telescope arrays**: small, cheap, photometric-grade dishes spread over a square km. proposed but not yet funded
- **space-based II**: enormous baselines (Earth-Moon!) for ultra-high-resolution stellar imaging. concepts proposed for the 2040s

## what this teaches us

three lessons from the modern revival:

1. **dormant techniques can be reborn** when supporting technology catches up. HBT's idea was sound; it just needed faster electronics
2. **synergies matter**: IACT arrays primarily for gamma rays, secondary use for II — both communities benefit
3. **bright-star science is still rich**: even 50 years after Narrabri, we don't have detailed surface images of most bright stars. CTA-II will fill that gap

## see also

- [Intensity interferometry concept](../../02_Zettel/Theory/interf/Intensity interferometry concept.md)
- [Hanbury Brown Twiss effect](../../02_Zettel/Theory/interf/Hanbury Brown Twiss effect.md)
- [Narrabri stellar interferometer](../../02_Zettel/Theory/interf/Narrabri stellar interferometer.md)
- [Why intensity interferometry escapes atmospheric phase](../../02_Zettel/Theory/interf/Why intensity interferometry escapes atmospheric phase.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
