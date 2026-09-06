---
layout: default
title: "Radio interferometer architecture"
---

# Radio interferometer architecture

the typical signal chain of a radio interferometer, from sky to image. very different from optical: signals are voltages, can be heterodyne-mixed, recorded, and correlated electronically. this enables Earth-baseline arrays and post-correlation calibration.

## the chain

```
SOURCE →
  ANTENNA →
  RECEIVER (LNA, mixer, IF amplifier) →
  DIGITIZER (ADC) →
  CORRELATOR (multiply pairs of streams, integrate) →
  CALIBRATOR (apply gain/phase corrections) →
  IMAGER (CLEAN, deconvolve)
```

each stage is its own engineering art.

## antenna

a parabolic dish (mostly) that focuses the radio waves onto the feed horn at the focus. typical:

- **VLA**: 25 m diameter parabolic, alt-az mount
- **ALMA**: 12 m or 7 m diameter, on a transporter for reconfiguration
- **SKA**: 15 m (SKA-Mid) parabolic + 4 m square SKA-Low patch-antennas
- **EHT stations**: range from 10 m (SMT, Mt. Graham) to 30 m (IRAM 30m)

each dish has a primary beam (the antenna's diffraction pattern, $\sim \lambda/D$) which sets the field of view of the interferometer.

## receiver

a critical low-noise amplifier (LNA), often cooled to cryogenic temperatures. amplifies the weak radio signal by ~10$^7$ to ~10$^{10}$ before any further electronics. typical: HEMT amplifiers at cm wavelengths, SIS mixers at mm.

after LNA: a mixer converts the radio frequency (RF) to an intermediate frequency (IF) by mixing with a local oscillator (LO). e.g. RF = 230 GHz, LO = 230 GHz - 8 GHz = 222 GHz, IF = 8 GHz. the IF can be amplified and digitized with conventional electronics.

## digitizer

an ADC samples the IF signal at 2× the bandwidth (Nyquist). typical ALMA: 2 GHz bandwidth → 4 GS/s ADC. modern arrays (SKA-Low) digitize 100 MHz patches per ADC.

## correlator

multiplies signals from pairs of antennas and time-averages. this is where the interferometric information emerges. for $N$ antennas, $N(N-1)/2$ pair-multiplications per spectral channel.

modern correlators are FPGA- or GPU-based. ALMA's correlator handles 64 antennas × 8 GHz × 4 polarizations → ~5 PB/day raw data. data are reduced to ~100 GB/day visibility products.

## delay tracking

a critical correlator function. as the Earth rotates, the geometric delay between any two antennas changes. the correlator must subtract this expected delay before multiplication, otherwise the visibility decorrelates.

ALMA's correlator implements geometric delay tracking with picosecond precision.

## bandpass and gain calibration

after correlation, raw visibilities are calibrated:

- **bandpass calibrator**: a strong source whose flux is constant across the band, used to flatten the receiver's frequency response per antenna
- **flux calibrator**: a known absolute-flux source (typically Mars, an asteroid, or a quasar with measured spectrum), used to anchor the absolute scale
- **phase calibrator**: a nearby compact source whose true position is known, used to track atmospheric and instrumental phase shifts

these are observed periodically during a science observation (every few minutes).

## the signal chain advantage

key advantage over optical: **the signal is digital**. each antenna's data can be:
- recorded and transferred (VLBI: hard drives shipped between continents)
- played back through different correlators (offline reprocessing)
- correlated with simulated signals (model-based imaging)
- combined with optical-fiber-linked stations (e.g. the global VLBI Standard)

so radio interferometry has *flexibility* that optical does not. observations can be reanalyzed years later with new algorithms.

## the special architectures

### connected element interferometer

all antennas share a common LO (delivered via fiber or cabling). examples: VLA, ALMA, MeerKAT.

advantages:
- LO phase is automatically coherent across the array
- minimal post-correlation calibration
- real-time correlation possible

disadvantages:
- baseline limited by cabling/fiber length (typically <100 km)

### VLBI (very long baseline interferometry)

each station has its own LO (a hydrogen maser). signals are recorded with atomic-clock timing. correlation happens *post-hoc* at a central correlator.

advantages:
- baselines can be intercontinental
- arbitrarily long baselines from Earth-based stations

disadvantages:
- need atomic clocks at every station (expensive)
- post-correlation phase calibration (harder)
- data volumes are huge

## BookAI expansion

BookAI breaks the radio signal chain into a more explicit sequence:

```text
incoming EM wave -> dish -> feed -> polarization split -> LNA -> mixer/LO -> IF -> digitizer -> time stamp -> delay compensation -> correlator -> visibility
```

three details are worth keeping separate in my head:

1. **front end**: collect and amplify the weak signal before later electronics add too much noise.
2. **frequency conversion**: use a local oscillator to move the signal to an intermediate frequency while preserving phase.
3. **synchronization**: apply clock and geometric-delay corrections so the same wavefront is aligned before correlation.

geometric delay:

$$\tau_g=\frac{\mathbf B\cdot\mathbf s}{c}$$

BookAI's version is a good reminder that radio interferometry is not just "many dishes". it is a phase-preserving electronics machine.

see also [Downconversion of signals in radio interferometers](../../../02_Zettel/Theory/interf/Downconversion of signals in radio interferometers.html), [Digitization quantization and timing in radio interferometry](../../../02_Zettel/Theory/interf/Digitization quantization and timing in radio interferometry.html), and [Radiometer equation and SEFD](../../../02_Zettel/Theory/interf/Radiometer equation and SEFD.html).

## scientific figures

<img src="{{ "/assets/images/alma_signal_path_official.gif" | relative_url }}" alt="alma_signal_path_official" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: ALMA's official signal path shows the whole radio chain: antenna collection, cold front end, back-end digitization, fiber transmission, and central correlation.

<img src="{{ "/assets/images/radio_interferometer_signal_chain.svg" | relative_url }}" alt="radio_interferometer_signal_chain" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

source: first figure from ALMA Observatory, "How ALMA Works"; second figure is a local study diagram of the same conceptual chain.

## see also

- [Radio astronomy basics](../../../02_Zettel/Theory/interf/Radio astronomy basics.html)
- [Two-element correlator](../../../02_Zettel/Theory/interf/Two-element correlator.html)
- [Connected element interferometer](../../../02_Zettel/Theory/interf/Connected element interferometer.html)
- [Very Long Baseline Interferometry VLBI](../../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)
- [Earth rotation synthesis in radio](../../../02_Zettel/Theory/interf/Earth rotation synthesis in radio.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
