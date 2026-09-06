---
layout: default
title: "ngVLA Next Generation VLA"
---

# ngVLA (Next Generation VLA)

NRAO's mid-frequency successor to the JVLA. ~263 antennas across the US Southwest, with VLBI links extending baselines to 9000 km. complementary to SKA at higher frequencies. planned for 2030s.

## the architecture

- **214 antennas** of 18m diameter at the core array (~120 km baselines)
- **30 antennas** at intermediate baselines (~1000 km)
- **19 antennas** at intercontinental sites for VLBI extension (up to 9000 km)
- frequency: 1.2-116 GHz (very wide!)

so ngVLA spans cm to mm. higher frequencies than SKA-Mid; lower than ALMA's mm range.

## the science goals

<img src="{{ "/assets/images/ngVLA_Next_Generation_VLA.jpg" | relative_url }}" alt="The Karl G. Jansky Very Large Array (VLA) in New Mexico, serving as the foundation for the Next Generation VLA (ngVLA)." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


complementary to SKA:

### 1. molecular astronomy at cm

3-50 GHz observations of cool dust + molecules in galaxies. ALMA does this at 100+ GHz; ngVLA bridges to lower frequencies.

### 2. high-resolution surveys

cm-wavelength surveys of galaxies, AGN, supernova remnants at sub-arcsec resolution.

### 3. pulsar searches and timing

mid-frequency pulsar surveys complementary to SKA-Low's lower frequencies.

### 4. stellar science

cm-wavelength observations of stellar coronae, masers, Sun.

### 5. transient monitoring

real-time monitoring of GW counterparts, FRBs, AGN flares.

### 6. precision astrometry

VLBI-extended baselines provide $\sim 0.1$ mas astrometry for stars and pulsars across the sky.

## the comparison with SKA-Mid

| feature | ngVLA | SKA-Mid |
|---|---|---|
| location | US Southwest | South Africa |
| frequency | 1.2-116 GHz | 0.35-15.4 GHz |
| antenna size | 18m | 15m |
| number of antennas | ~263 | ~197 + MeerKAT 64 |
| max baseline | 9000 km (VLBI) | 150 km |
| max resolution | μas (with VLBI) | 0.1" |
| sensitivity | very high | very high |
| timing | start construction ~2027 | start construction ~2025 |

both are major investments; both are designed for different science.

## the relationship to existing VLA

ngVLA is the *successor* to JVLA. when ngVLA comes online in the 2030s, JVLA will be retained for some time but eventually replaced. data archives will be merged for continuity.

ngVLA improves on JVLA by:
- 10× more sensitivity
- better (u, v) coverage (more antennas)
- baselines extended to 9000 km via VLBI
- broader frequency coverage

## the technical challenges

three:

### 1. dish design

new 18m antennas optimized for both surveys and high-frequency operations. mass production needed (~263 dishes).

### 2. broad-band feeds

cover 1.2 to 116 GHz — nearly two orders of magnitude. requires 5+ separate feeds per dish. complex receiver chain.

### 3. correlator scale

handling 263 antennas × 100 GHz bandwidth × multiple polarizations: enormous data rates. solution: GPU/FPGA-based correlator, exabyte-scale archive.

## the schedule

planned construction:
- **2024**: design completion
- **2026-2030**: site preparation and antenna construction
- **2030-2032**: science verification
- **2032+**: full operations

likely the *last* major NRAO instrument before SKA-2 era (mid-2040s).

## the science legacy expected

by ~2040, ngVLA + SKA + ALMA together will have:
- mapped neutral hydrogen across the universe
- detected $\sim 10^4$ MSPs for PTA work
- monitored AGN at all frequencies for variability
- discovered $\sim 10^4$ FRBs
- characterized magnetic fields throughout the cosmic web
- detected $10^5$ planetary systems via radio signatures

a transformative era for radio astronomy.

## see also

- [Major radio interferometers](../../02_Zettel/Theory/interf/Major radio interferometers.html)
- [The Square Kilometre Array SKA](../../02_Zettel/Theory/interf/The Square Kilometre Array SKA.html)
- [Very Long Baseline Interferometry VLBI](../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
