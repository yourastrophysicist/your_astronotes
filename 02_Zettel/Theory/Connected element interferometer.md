---
layout: default
title: "Connected element interferometer"
---

# Connected element interferometer

a radio interferometer in which all antennas share a single common local oscillator and a centralized correlator, with signals brought in by cable or fiber. examples: VLA, ALMA, MeerKAT, ATCA, GMRT. baselines limited to ~100 km by signal-transport infrastructure.

## the architecture

- **central LO**: a hydrogen maser or rubidium clock at a central facility distributes a phase-locked LO to every antenna via fiber-optic cables
- **central correlator**: signals from all antennas come back to the central facility for real-time correlation
- **synchronized clocks**: every antenna's data stream is timestamped with the same master clock

result: phase coherence is maintained across all antennas automatically. no post-correlation phase calibration needed for atmospheric stability — only for source-position tracking.

## the advantages

![Connected-element radio array linked by cables, waveguides, or fiber optics for real-time signal distribution to a central correlator.](Connected_element_interferometer.jpg)


three:

### 1. real-time imaging

with phase-locked LO and centralized correlation, images can be produced *during the observation*. essential for time-critical observations (transient sources) and for online quality control.

### 2. low post-correlation overhead

the correlator output is already calibrated to the array's instrumental phase. only source-related calibration (atmosphere, gain) is needed in the post-correlation pipeline.

### 3. baseline range and configurations

most CEIs are *configurable*: antennas can be moved between stations to change baselines. VLA cycles through A, B, C, D configurations every few months. ALMA has 10+ configurations. this lets one array serve different science (long-baseline imaging, short-baseline mapping, etc.).

## the limits

three:

### 1. signal transport over cable

at high frequency (e.g. ALMA 230 GHz), signals attenuate severely in cables. so each antenna does the LO mixing locally and only the IF (which is at a manageable few GHz) is transported to the central facility. but even IF over fiber has limits — typically 100-300 km maximum.

### 2. reconfiguration logistics

moving 50+ antennas physically is non-trivial. ALMA reconfigures take ~weeks of downtime. designs that minimize reconfiguration (more telescopes at fixed positions) trade reconfigurability for quicker startup.

### 3. atmospheric phase

even with locked LOs, the atmospheric phase corruption is identical to optical interferometry — though slower at radio wavelengths. CEIs at mm wavelengths still need atmospheric phase tracking (water vapor radiometers, fast switching).

## examples

### VLA (Karl G. Jansky Very Large Array)

- 27 antennas, 25 m diameter each
- New Mexico, USA
- baselines 35 m to 36 km (A configuration)
- frequency: 1-50 GHz
- workhorse of cm-wave radio astronomy since 1980, upgraded as JVLA in 2010s

### ALMA (Atacama Large Millimeter/submillimeter Array)

- 50 12m + 12 7m + 4 12m total-power antennas
- Atacama, Chile (5000 m altitude)
- baselines 15 m to 16 km
- frequency: 84-950 GHz (ALMA Bands 1-10)
- preeminent mm-wave observatory since 2013

### MeerKAT

- 64 13.5m antennas
- Karoo, South Africa
- baselines up to 8 km
- frequency: 0.58-1.67 GHz
- dedicated to deep extragalactic surveys, pulsar timing

### ATCA (Australia Telescope Compact Array)

- 6 22m antennas
- New South Wales, Australia
- baselines up to 6 km
- frequency: 1-100 GHz

## the calibration recipe

at a CEI:

1. **before observation**: bandpass calibrator (a strong, flat-spectrum source) flatten the frequency response
2. **start of observation**: flux calibrator (typically the planet Mars, an asteroid, or a known quasar) sets the absolute flux scale
3. **during observation**: phase calibrator (a compact source within ~5° of target) observed every 5-15 minutes to track atmospheric/instrumental phase
4. **end of observation**: another flux calibrator for verification

modern CASA pipelines automate all of this. observers see calibrated visibilities and flagged-bad-data products.

## the science niche

CEIs do *most* radio science:
- **continuum imaging**: AGN, supernova remnants, HII regions, pulsars
- **spectral-line imaging**: HI 21cm in galaxies, CO in molecular clouds, recombination lines
- **polarimetry**: magnetic-field studies of galaxies, AGN
- **transient monitoring**: GW counterparts, fast radio bursts
- **deep surveys**: searches for primordial galaxies, pulsars

VLBI takes over when baselines longer than $\sim 100$ km are needed (AGN cores, pulsar timing).

## the future

planned CEIs:
- **ngVLA** (next-generation VLA): 200+ antennas in the US Southwest, baselines to ~9000 km (with VLBI links). early-2030s
- **SKA-Mid**: 197 antennas in South Africa, baselines to 150 km. early-2030s
- **SKA-Low**: 130000 dipole antennas at Western Australia, baselines to 65 km. early-2030s

these will dwarf current CEIs in sensitivity and survey speed.

## see also

- [Radio interferometer architecture](../../02_Zettel/Theory/interf/Radio interferometer architecture.html)
- [Very Long Baseline Interferometry VLBI](../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)
- [Earth rotation synthesis in radio](../../02_Zettel/Theory/interf/Earth rotation synthesis in radio.html)
- [Major radio interferometers](../../02_Zettel/Theory/interf/Major radio interferometers.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
