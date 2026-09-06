---
layout: default
title: "Digitization quantization and timing in radio interferometry"
---

# Digitization quantization and timing in radio interferometry

after downconversion, the signal becomes a manageable intermediate-frequency voltage. BookAI then follows it through digitization, quantization, clocking, and delay compensation.

## digitization

an analog-to-digital converter samples the voltage stream. the sampling rate must be high enough for the processed bandwidth.

conceptually:

$$\text{larger bandwidth} \Rightarrow \text{faster sampling} \Rightarrow \text{larger data rate}$$

## quantization

quantization maps continuous voltage values to discrete digital levels. fewer bits reduce data volume but introduce quantization loss. more bits preserve amplitude information but demand more storage and processing.

old/simple correlators may use very few bits; modern systems choose a compromise between precision and data rate.

## digital data stream

a modern radio interferometer stores or transports data by:

- antenna
- polarization
- frequency band
- time sample
- clock reference

this is what lets radio arrays correlate signals after collection.

## time stamping

interferometry is phase-sensitive, so the correlator must know when each sample was received. timing errors become phase errors.

VLBI needs especially precise time stamping because antennas are not connected by a common real-time cable.

## geometric delay

for baseline $\mathbf B$ and source direction $\mathbf s$:

$$\tau_g=\frac{\mathbf B\cdot\mathbf s}{c}$$

this delay changes as Earth rotates. the correlator must remove it before averaging.

## reference clocks

connected arrays use shared clock/LO systems. VLBI stations use independent atomic clocks, commonly hydrogen masers.

clock stability must be high enough that phase does not wander significantly during integration.

## why timing matters physically

if the delay is wrong by more than a small fraction of the coherence time, the correlated signal washes out. this is decorrelation.

## exam sentence

digitization turns the IF voltage into a digital stream, quantization controls precision, and time stamping/delay correction align the same wavefront at different antennas so the correlator can measure a visibility.

## scientific figure

<img src="{{ "/assets/images/digitization_quantization_sampling.svg" | relative_url }}" alt="digitization_quantization_sampling" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: after downconversion, the interferometer turns voltages into timed digital samples. the correlator can only compare antennas correctly if sampling, quantization, and timing are controlled.

source: local study diagram generated from a sampled and quantized voltage model.

## see also

- [Downconversion of signals in radio interferometers](../../../02_Zettel/Theory/interf/Downconversion of signals in radio interferometers.html)
- [Two-element correlator](../../../02_Zettel/Theory/interf/Two-element correlator.html)
- [Very Long Baseline Interferometry VLBI](../../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)
- [Radio interferometer architecture](../../../02_Zettel/Theory/interf/Radio interferometer architecture.html)
