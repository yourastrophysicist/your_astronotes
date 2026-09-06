---
layout: default
title: "Event Horizon Telescope EHT"
---

# Event Horizon Telescope (EHT)

a global mm-wave VLBI array assembled to image the event-horizon-scale shadows of supermassive black holes. **first-ever images** of M87's central black hole (April 2019) and Sgr A* (May 2022). the highest-resolution astronomical instrument ever built — $\sim 25$ μas at 230 GHz, comparable to *resolving a CD on the Moon*.

## the telescope-of-telescopes

EHT is a *VLBI campaign* — not a single facility, but a network of mm-wave radio telescopes acting in unison for a few days each year:

- **ALMA** (Atacama, Chile): the most sensitive station, providing crucial calibration
- **APEX** (Atacama, Chile): adjacent to ALMA, similar capability
- **JCMT** (Mauna Kea, Hawaii): 15m dish, K-correlator
- **SMA** (Mauna Kea, Hawaii): 8-element array used in coherent mode
- **LMT** (Sierra Negra, Mexico): 50m dish
- **IRAM 30m** (Pico Veleta, Spain): largest single-dish in the array
- **SMT** (Mt. Graham, Arizona): smaller dish
- **SPT** (South Pole): provides longest baselines

baselines span 8000-13000 km, comparable to Earth's diameter. resolution at 230 GHz: $\theta = \lambda/B = 1.3$ mm $/13000$ km $= 25$ μas.

## the science

### M87 (April 2019)

the image: a *bright ring* of size ~42 μas, with a dark central depression. the ring is the photon sphere — the radius at which light can orbit the black hole. the dark center is the "shadow" cast by the event horizon.

the ring diameter and asymmetry consistent with **a 6.5 × 10⁹ M_⊙ black hole** at distance 16.8 Mpc, in agreement with prior gas-dynamical and stellar-dynamical mass estimates.

### Sgr A* (May 2022)

the image: a smaller bright ring, ~50 μas (Sgr A* is closer than M87). the ring diameter consistent with $\sim 4.3 \times 10^6$ M_⊙ at 8 kpc — agreeing with prior dynamical estimates from S-star orbits.

both images:
- demonstrate that GR predictions for the photon-orbit geometry match observation
- rule out exotic alternatives to standard GR black holes (boson stars, fuzzballs, naked singularities) at the mas-scale
- enable further tests of strong-field GR (orbit-precision Schwarzschild radius, magnetic-field geometry)

## the technical challenges

EHT is hard because:

### 1. millimeter atmosphere

at 230 GHz, atmospheric water absorption is severe. only the highest, driest sites work (Atacama, South Pole, Pico Veleta). atmospheric phase changes on timescales of seconds.

### 2. global timing

each station has its own H-maser. clocks must be cross-calibrated to picosecond precision. before each observation, GPS-based clock comparisons are made; after each observation, clock data is uploaded for offline alignment.

### 3. data volume

EHT 2017 observation: 8 stations × 8 GHz × 32 hours → 5 PB of raw data. shipped on hundreds of hard drives to central correlators (Bonn, Haystack). correlation took weeks.

### 4. imaging algorithms

EHT (u, v) coverage is sparse — only $N(N-1)/2 = 28$ baselines for $N = 8$ stations. plus elliptical Earth-rotation tracks fill in gaps. but the resulting dirty beam has very high sidelobes — making image reconstruction difficult.

three methods used in parallel for cross-validation:
- **CLEAN** (traditional): iterative deconvolution
- **MEM** (maximum entropy): Bayesian regularization
- **eht-imaging** (regularized maximum likelihood): modern Bayesian framework with smoothness priors
- **Bayesian** (DMC, others): full posterior on image and parameters

all three methods give similar M87 images, supporting the conclusion.

## the validation

EHT 2019 paper had hundreds of authors and rigorous validation:
- multiple imaging methods (CLEAN, MEM, RML)
- multiple model fits (geometric models, GRMHD simulations)
- cross-checks against independent calibrators
- consistency between two consecutive observation epochs

the M87 result has been independently verified by analyzing the 2018 data with different code. the Sgr A* result similarly.

## the future

### ngEHT

next-generation EHT, planned 2030s:
- additional stations (Greenland, Africa, additional sites)
- higher frequency (345 GHz)
- improved (u, v) coverage → better imaging
- monitoring time variability of accretion flows

### space-based VLBI extension

proposals to add a space-based station to EHT, providing baselines beyond Earth diameter. could push resolution to $\sim 1$ μas, enabling time-resolved imaging of black-hole accretion at event-horizon scales.

## the legacy

EHT has:
- delivered the *first images* of black-hole shadows
- pushed VLBI to its physical limits
- developed modern Bayesian imaging algorithms now used across radio astronomy
- shown that *bold collaborative astronomy* can produce results that no single facility could

it is a model for future high-resolution astronomy facilities.

## scientific figures

![eht_planet_scale_array_eso1907j](../../../assets/images/eht_planet_scale_array_eso1907j.jpg)

reading cue: the EHT is a planet-scale VLBI array. the telescope is not one dish; it is Earth-sized Fourier sampling at 1.3 mm.

![eht_m87_eso1907a](../../../assets/images/eht_m87_eso1907a.jpg)

reading cue: this is the famous M87* ring/shadow reconstruction. it is the science payoff of sparse global $(u,v)$ coverage plus careful calibration and imaging.

source: ESO/EHT images eso1907j and eso1907a.

## see also

- [Very Long Baseline Interferometry VLBI](../../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)
- [AGN and supermassive black holes](../../../02_Zettel/Theory/interf/AGN and supermassive black holes.html)
- [Galactic Center Sgr A and S-stars](../../../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html)
- [Major radio interferometers](../../../02_Zettel/Theory/interf/Major radio interferometers.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
