---
layout: default
title: "Two-element correlator"
---

# Two-element correlator

the *fundamental building block* of a radio interferometer. takes the digital voltage streams from two antennas, multiplies them, and time-averages. the time-averaged product is the **complex visibility** at that baseline.

## the math

let $V_1(t)$ and $V_2(t)$ be the voltage time-series at the two antennas after digitization. the *real part* of the visibility is:

$$\text{Re}(\mathcal V) = \langle V_1(t) V_2(t) \rangle$$

(time-averaged product). the *imaginary part* is obtained by phase-shifting one signal by 90° before multiplication:

$$\text{Im}(\mathcal V) = \langle V_1(t) V_2(t - \pi/2) \rangle = \langle V_1(t) \tilde V_2(t) \rangle$$

where $\tilde V_2$ is the Hilbert transform (90° phase-shifted) version of $V_2$.

so the complex visibility:
$$\mathcal V = \langle V_1 V_2 \rangle - i \langle V_1 \tilde V_2 \rangle$$

equivalently: a single complex correlation in the frequency domain.

## connection to the visibility

each $V_i(t)$ is the antenna's response to the source's electromagnetic field $E$:
$$V_i(t) \propto E(\mathbf r_i, t)$$

so the time-averaged product is the field correlation:
$$\langle V_1 V_2 \rangle \propto \langle E^*(\mathbf r_1, t) E(\mathbf r_2, t) \rangle = \Gamma_{12}$$

which is the **mutual coherence function** of [that zettel](../../../02_Zettel/Theory/interf/Coherence function and visibility.md) — equivalently, the visibility.

so the correlator literally computes the visibility.

## the FX correlator vs the XF correlator

two architectures for spectral correlation:

### XF correlator

correlate first, FFT later. for each baseline, compute the time-domain cross-correlation as a function of delay (lag). then FFT each lag spectrum to get spectral channels.

**advantages**: simpler logic, lower data rates inside the correlator
**disadvantages**: poor spectral resolution from short delay windows

### FX correlator

FFT first, correlate later. each antenna's time series is FFT'd to many spectral channels. then for each channel, correlate the spectral coefficients pairwise.

**advantages**: high spectral resolution (millions of channels), efficient for wide bandwidths
**disadvantages**: more complex software, higher data rates

modern correlators (ALMA, JVLA-WIDAR, MeerKAT) are FX. the FX architecture has won.

## delay tracking

before correlation, the correlator must subtract the **geometric delay** between antennas:

$$\tau_{\rm geom}(t) = \mathbf B \cdot \mathbf l/c$$

with $\mathbf B$ the baseline and $\mathbf l$ the source direction. this delay varies on minute timescales as the Earth rotates.

implementation: each antenna's data stream is *advanced* (or delayed) by the correct $\tau_{\rm geom}(t)$ before multiplication. precision needed: $\sim 1/\Delta\nu \sim 1$ ns for GHz-bandwidth observations.

## fringe stopping

after delay tracking, the residual fringe rate (the rate at which the visibility's phase rotates) is stopped by mixing with a "fringe stopping" oscillator. the visibility output is at *zero frequency* — a slowly varying complex number.

this fringe-stopping is in fact part of the LO chain at each antenna (the LO is delay-rate-corrected for the source).

## the integration time

the correlator outputs are integrated for a few seconds before being written to disk. typical ALMA: 6-second integration, ~1 GB/sec output rate.

short integration times are needed for:
- atmospheric phase tracking (avoid losing fringe due to atmospheric drift)
- moving sources (asteroids, comets)
- fringe-rate searches (e.g. pulsar timing)

## the correlator's complexity

for $N$ antennas, $C = N(N-1)/2$ baselines per polarization. for full-Stokes observations, $4 C$ correlations. ALMA at 64 antennas, 4 pols, 7680 channels per band: $\sim 2 \times 10^7$ correlator computations per second. requires high-throughput FPGAs and fast networking.

## the role in the imaging pipeline

correlator output is *the* primary data product of a radio interferometer. raw visibilities undergo:
1. flagging (remove RFI-corrupted samples)
2. calibration (gain, phase, bandpass)
3. weighting (natural, uniform, briggs)
4. inverse FFT to dirty image
5. CLEAN to deconvolved image

every modern radio interferometer builds its operational pipeline around the correlator output format (typically MeasurementSet in CASA).

## BookAI expansion

BookAI writes the correlator as a delayed cross-correlation:

$$R_{ij}(\tau)=\langle V_i(t)V_j^*(t+\tau)\rangle$$

after delay correction, this is the baseline visibility. the reason it works is statistical:

- the source signal is common between antennas after geometric-delay correction
- receiver noise is mostly independent
- multiplication and time averaging keep the correlated part and suppress uncorrelated noise

noise decreases approximately as

$$\sigma\propto\frac{1}{\sqrt{BT}}$$

where $B$ is processed bandwidth and $T$ is averaging time.

BookAI also emphasizes that the correlator output is not an image. it is a table of complex visibilities indexed by baseline, time, frequency channel, and polarization product.

## scientific figure

![radio_interferometer_signal_chain](../../../assets/images/radio_interferometer_signal_chain.svg)

reading cue: the correlator is where two voltage streams become one visibility. the multiplication and time average estimate $R_{ij}(\tau)$, which is the observable behind aperture synthesis.

source: local study diagram generated from the standard radio interferometer signal chain.

## see also

- [Radio interferometer architecture](../../../02_Zettel/Theory/interf/Radio interferometer architecture.md)
- [Heterodyne vs direct detection](../../../02_Zettel/Theory/interf/Heterodyne vs direct detection.md)
- [Coherence function and visibility](../../../02_Zettel/Theory/interf/Coherence function and visibility.md)
- [CLEAN algorithm](../../../02_Zettel/Theory/interf/CLEAN algorithm.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
