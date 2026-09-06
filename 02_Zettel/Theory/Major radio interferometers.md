---
layout: default
title: "Major radio interferometers"
---

# Major radio interferometers

a survey of the world's major radio interferometers, organized by frequency band and use case. each has its own science niche, set by location, frequency coverage, and array configuration.

## cm-wave (1-50 GHz)

### Karl G. Jansky VLA (US National Radio Astronomy Observatory)

- New Mexico, USA
- 27 × 25m antennas, Y-configuration
- baselines: 35 m (D config) to 36 km (A config)
- frequency: 1-50 GHz
- highly cited workhorse of cm-wave astronomy

### MeerKAT (South Africa)

- Karoo, South Africa
- 64 × 13.5m antennas
- baselines to 8 km
- frequency: 0.58-1.7 GHz
- precursor / pathfinder for SKA-Mid; specialized in deep extragalactic surveys, HI 21cm, pulsar timing

### ATCA (Australia Telescope Compact Array)

- Narrabri, Australia
- 6 × 22m antennas
- baselines to 6 km
- frequency: 1-100 GHz
- southern-hemisphere workhorse, complementary to VLA

### GMRT (Giant Metrewave Radio Telescope)

- Pune, India
- 30 × 45m antennas
- baselines to 25 km
- frequency: 0.05-1.6 GHz (low-frequency!)
- preeminent low-frequency interferometer; HI surveys, pulsar studies, Galactic emission

### MERLIN (Multi-Element Radio Linked Interferometer Network)

- UK + Ireland
- 7 antennas linked by fiber
- baselines to 217 km
- frequency: 1-25 GHz
- "intermediate" baselines between VLA and EVN

### LOFAR (Low Frequency Array)

- Netherlands + European partners
- 38 stations, each with 96 dipoles → effectively 38 × ~50m equivalent
- baselines to 1900 km
- frequency: 30-240 MHz (very low!)
- Galactic surveys, redshifted HI 21cm, pulsar timing

## mm-wave (30-1000 GHz)

![Atacama Large Millimeter/submillimeter Array (ALMA): 66 reconfigurable high-precision radio antennas at 5000 m altitude.](Major_radio_interferometers.jpg)


### ALMA (Atacama Large Millimeter Array)

- Atacama, Chile (5000 m altitude)
- 50 × 12m + 12 × 7m + 4 × 12m total-power
- baselines: 15 m (compact) to 16 km (extended)
- frequency: 84-950 GHz (10 ALMA bands)
- premier mm-wave observatory, transformative for galaxy formation, planet formation, AGN

### NOEMA (NOrthern Extended Millimeter Array)

- Plateau de Bure, France
- 12 × 15m antennas
- baselines to 1700 m
- frequency: 70-373 GHz
- European competitor to ALMA, complementary in northern declination

### SMA (Submillimeter Array)

- Mauna Kea, Hawaii
- 8 × 6m antennas
- baselines: 16 m to 508 m
- frequency: 180-700 GHz
- pathfinder for ALMA, still scientifically active

## VLBI (intercontinental)

### EVN (European VLBI Network)

- 25+ antennas across Europe + global partners
- baselines to 10000 km
- frequency: 1-50 GHz
- intercontinental imaging at mas resolution

### VLBA (Very Long Baseline Array)

- 10 × 25m antennas across US
- baselines 200-8000 km
- frequency: 1-90 GHz
- workhorse for AGN imaging, masers, pulsar VLBI

### EHT (Event Horizon Telescope)

- 8 mm-wave telescopes globally
- baselines ~8000-13000 km
- frequency: 230 GHz, 345 GHz
- ultra-high-resolution imaging of M87 and Sgr A* black holes

## the future (planned)

### SKA (Square Kilometre Array)

two phases, two locations:
- **SKA-Mid**: South Africa, 197 dishes (15m), baselines to 150 km, 0.35-15.4 GHz
- **SKA-Low**: Western Australia, 131000 dipole antennas in 512 stations, baselines to 65 km, 50-350 MHz

construction underway 2020s-2030s. designed for:
- deep HI 21cm cosmology
- transient surveys (FRBs, GW counterparts)
- pulsar timing for gravitational-wave background
- deep deep continuum surveys

### ngVLA (Next-Generation Very Large Array)

- US Southwest, ~263 antennas
- baselines to 9000 km (with VLBI links)
- frequency: 1.2-116 GHz
- NRAO's mid-frequency successor to VLA, planned 2030s

### Lunar far-side concepts

- in radio quiet zone of lunar far side
- baselines to many km
- low-frequency observations otherwise impossible
- mostly conceptual

## the comparison

| array | $B_{\max}$ | $\theta_{\rm res}$ at 5 GHz | sensitivity | freq range |
|---|---|---|---|---|
| VLA | 36 km | 0.06" | high | 1-50 GHz |
| ALMA | 16 km | 0.04" (230 GHz) | very high | 84-950 GHz |
| MeerKAT | 8 km | 0.4" | very high | 0.6-1.7 GHz |
| EVN | 10000 km | 1 mas | high | 1-50 GHz |
| EHT | 10000 km | 25 μas (230 GHz) | moderate | 230-345 GHz |
| SKA-Mid | 150 km | 0.05" | very high | 0.35-15.4 GHz |

## see also

- [Connected element interferometer](../../02_Zettel/Theory/interf/Connected element interferometer.html)
- [Very Long Baseline Interferometry VLBI](../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)
- [Event Horizon Telescope EHT](../../02_Zettel/Theory/interf/Event Horizon Telescope EHT.html)
- [Earth rotation synthesis in radio](../../02_Zettel/Theory/interf/Earth rotation synthesis in radio.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
