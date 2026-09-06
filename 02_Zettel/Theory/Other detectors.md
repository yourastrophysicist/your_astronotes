---
layout: default
title: "Other detectors"
---

CCDs dominate optical astronomy but they are not the only detector. for different wavelengths and different applications, other detectors take over. quick survey of the alternatives.

## CMOS sensors

each pixel has its own amplifier (active pixel sensor), enabling very fast readout. modern sCMOS (scientific CMOS) detectors:
- $\sigma_{\rm RN} \sim 1$ to $2$ e$^-$ (lower than typical CCDs).
- frame rates up to kHz.
- larger formats, lower power consumption, no charge transfer (no CTE issues).
- QE comparable to back-illuminated CCDs ($> 80\%$).

competitive with CCDs for fast time-domain science (transits, optical SETI, AO wavefront sensing). examples: Andor Zyla, Hamamatsu ORCA, Pi sCMOS.

## photon-counting detectors

needed when read noise dominates (very faint sources, very few photons per pixel per second, narrow-band imaging).

### EMCCD (electron-multiplying CCD)

CCD with an electron multiplication register: each shifted electron has a small probability of generating an extra electron. amplifying gain $\sim 1000\times$ on-chip suppresses the read noise's impact (effective $\sigma_{\rm RN} < 1$ e$^-$). cost: extra noise factor $\sqrt{2}$ on the source statistics. used in adaptive-optics wavefront sensors and high-speed photometry.

### MCP (microchannel plate)

photon $\to$ photoelectron $\to$ electron cascade in microchannels $\to$ position-encoded readout. true photon counting: each photon recorded individually with $\sim 25\%$ QE. used for UV imaging (HST/COS, GALEX), narrow-band fluorescence, low-flux X-ray.

### MKID (microwave kinetic inductance detector)

cryogenic photon detector using superconducting resonators. each photon shifts the resonator frequency by an amount proportional to photon energy. **energy-resolved**, time-resolved photon counting with $\sim 10\%$ energy resolution in the optical. emerging for time-domain spectroscopy (ARCONS).

### TES (transition edge sensor)

similar concept: superconducting strip, photon energy depopulates Cooper pairs. very high energy resolution, used in X-ray and far-IR.

## NIR detectors (HgCdTe, InSb)

silicon's bandgap (1.12 eV) makes it transparent above $\sim 1.1\,\mu$m. for NIR ($1$ to $5\,\mu$m), use lower-bandgap semiconductors:
- **HgCdTe** (mercury cadmium telluride), bandgap tunable by composition. used in HST WFC3-IR, JWST NIRCam, ground-based Hawaii arrays.
- **InSb** (indium antimonide), $\sim 5\,\mu$m cutoff. used in Spitzer IRAC channels 1-2 and ground-based mid-IR.

read out as **non-destructive** charge integrators (each pixel's charge can be read multiple times during integration, "up the ramp" sampling reduces effective read noise).

## bolometers (sub-mm and mm)

a thermal absorber whose temperature change indicates incident power. used in sub-mm and mm-wave astronomy (BOLOCAM, SCUBA-2, Planck HFI). modern arrays are kilopixel cryogenic bolometer cameras at $\sim 0.1$ K.

## photomultiplier tubes (PMTs)

photon $\to$ photoelectron at the photocathode $\to$ amplified by dynode chain (gain $\sim 10^6$). historical mainstay for photometry from $1950$s to $1990$s before CCDs. now used in:
- very fast time-domain photometry.
- gamma-ray Cherenkov telescopes (HESS, MAGIC, VERITAS, CTA).
- biological luminescence.

## proportional counters and CCDs in X-ray

at X-ray energies ($> 0.1$ keV), each detected photon produces hundreds to thousands of electron-hole pairs proportional to its energy. CCDs (CHANDRA ACIS, XMM EPIC) provide imaging spectroscopy: simultaneous position and energy per photon. proportional counters (RXTE PCA) gave timing + spectroscopy without imaging. see [CCDs for X-rays](../../02_Zettel/Theory/CCDs for X-rays.html).

## photographic plates (historical)

silver-halide emulsion on glass. dominant detector $1880$ to $1980$. low QE ($\sim 1\%$), nonlinear response, but covered enormous areas (Schmidt plates). most major sky surveys before SDSS were photographic.

## summary table

| detector | wavelengths | notes |
|---|---|---|
| CCD | optical, near-UV, X-ray | workhorse, $\eta > 90\%$ |
| sCMOS | optical | fast, low noise, large format |
| EMCCD | optical, narrow-band | photon-counting at modest QE |
| MCP | UV, low-flux optical | true photon counting |
| MKID, TES | optical to far-IR, X-ray | energy-resolving cryogenic |
| HgCdTe, InSb | NIR | bandgap-tuned alternatives |
| bolometer | sub-mm, mm | thermal, cryogenic |
| PMT | optical, gamma (Cherenkov) | fast timing, modest QE |
| photographic | optical | historical only |

## see also

- [CCD basics](../../02_Zettel/Theory/CCD basics.html)
- [CCD detectors and SNR](../../02_Zettel/Theory/CCD detectors and SNR.html)
- [CCDs for X-rays](../../02_Zettel/Theory/CCDs for X-rays.html)
- [Charge-Coupled Device](../../02_Zettel/Theory/Charge-Coupled Device.html)
- [Photoelectric absorption](../../02_Zettel/Theory/Photoelectric absorption.html)
- [Lab_High-Energy_MOC](../../00_Atlas/Lab_High-Energy_MOC.html)
