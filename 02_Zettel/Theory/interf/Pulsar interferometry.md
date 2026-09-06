---
layout: default
title: "Pulsar interferometry"
---

# Pulsar interferometry

pulsars are *the* radio interferometric target par excellence: small ($\sim 10$ km neutron stars), bright ($T_b \sim 10^{30}$ K), and produce *precisely-timed* signals. interferometry of pulsars provides:
- precise positions (mas-level astrometry)
- precise distances (parallax via interferometric astrometry)
- imaging of pulsar wind nebulae
- gravitational-wave detection via timing arrays

## the typical observation

pulsars are observed:
- continuously by single-dish radio telescopes (Parkes, GBT, Effelsberg) for *timing*
- intermittently by VLBI for *astrometry* (precise positions)
- by interferometric arrays for *imaging* of the nebula (PWN) around them

## the astrometry

VLBI of nearby pulsars achieves:
- per-epoch precision: $\sim 0.1$ mas
- proper motion precision: $\sim 0.1$ mas/yr
- parallax precision: $\sim 0.05$ mas

at a typical distance of 1 kpc, parallax = 1 mas, so a $5\%$ measurement is achievable. for the closest pulsars (PSR J0437-4715 at 156 pc, parallax $\sim 6$ mas): VLBI gives $\sim 1\%$ distance precision.

these measurements:
- calibrate pulsar distances (which feed into many other studies)
- constrain pulsar kinematics (where do they come from?)
- enable refined timing models

## pulsar wind nebulae

a pulsar's relativistic wind blows a bubble of energetic plasma, the **pulsar wind nebula** (PWN). examples:
- **the Crab nebula**: most famous PWN, with central pulsar
- **3C 58**, **G21.5-0.9**: synchrotron-emitting PWNe
- **the Vela PWN**: complex jet structure

VLA/MERLIN imaging at cm wavelengths reveals the *internal structure* of PWNe — jets, filaments, knots, shock fronts. tells us about pulsar wind composition, magnetization, and shock physics.

## pulsar timing arrays

a *galactic-scale* interferometer made from precise pulsar timing. detects low-frequency gravitational waves at nHz frequencies. see [Pulsar timing arrays as interferometers](../../../02_Zettel/Theory/interf/Pulsar timing arrays as interferometers.md).

key arrays:
- **NANOGrav**: ~67 pulsars, 15-year dataset
- **EPTA**: ~25 pulsars, ~24-year dataset
- **PPTA**: ~30 pulsars, 18-year dataset
- **InPTA, CPTA**: emerging arrays

joint analyses (2023): $\sim 4-5\sigma$ detection of the GW background, consistent with SMBH-binary mergers throughout cosmic history.

## the special pulsars

### PSR B1913+16 (Hulse-Taylor binary)

a binary pulsar with measured orbital decay matching GR's gravitational-wave-emission prediction. *first* detection of GR's quadrupole formula. Nobel 1993. continuously monitored by VLBI for proper motion and orbital evolution.

### PSR J0737-3039 (the double pulsar)

both components are pulsars. orbital period ~2.5 hours. the cleanest test of GR in a strong-field regime. CHIME, MeerKAT, and FAST observe it intensively.

### PSR B0540-69.3

pulsar in the LMC, observed by VLBI for transverse velocity measurements. tests cosmic-distance-scale assumptions.

### PSR J1909-3744

a millisecond pulsar with extremely stable timing — the "best clock" in the Galaxy. used as the central reference for the NANOGrav PTA.

## the science

pulsar interferometry probes:

### 1. neutron-star physics

precise distances + spin-down rates → magnetic field strengths. PWN imaging → wind composition. all constrain neutron-star equations of state.

### 2. pulsar populations

VLBI distances enable luminosity-distance distributions. tests of pulsar formation rates and beaming fractions.

### 3. galactic kinematics

pulsar proper motions + distances reveal galactic potential. complement Gaia stellar measurements.

### 4. gravitational waves

PTAs are the only instruments sensitive to nHz gravitational waves — the regime where SMBH mergers radiate.

## the future

planned:
- **SKA-Mid** + **SKA-Low**: orders-of-magnitude more pulsar timing baseline
- **FAST** (China, 500m radio dish): the deepest pulsar surveys
- **CHIME** (Canada): wide-field pulsar surveys at low frequencies
- **MeerKAT-PTA**: dedicated pulsar timing array

these will:
- discover thousands more pulsars
- tighten timing precision to ~10 ns
- detect *individual* SMBH binaries within ~10 years
- precisely characterize the GW background

## see also

- [Major radio interferometers](../../../02_Zettel/Theory/interf/Major radio interferometers.md)
- [Very Long Baseline Interferometry VLBI](../../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.md)
- [Pulsar timing arrays as interferometers](../../../02_Zettel/Theory/interf/Pulsar timing arrays as interferometers.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
