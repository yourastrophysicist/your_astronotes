---
layout: default
title: "ALMA exposure time calculator and sensitivity"
---

# ALMA exposure time calculator and sensitivity

BookAI uses the ALMA Exposure Time Calculator as a concrete example of how sensitivity estimates become observing-time estimates.

## what the ETC does

ALMA ETC estimates either:

- RMS sensitivity for a chosen integration time, or
- integration time needed for a desired signal-to-noise ratio.

it includes atmosphere, instrumental performance, array configuration, bandwidth, and weighting.

## core equation

ideal interferometric RMS:

$$\sigma\simeq\frac{\mathrm{SEFD}}{\sqrt{N_{\rm ant}(N_{\rm ant}-1)\Delta\nu t}}$$

with

$$\mathrm{SEFD}=\frac{2k_BT_{\rm sys}}{A_{\rm eff}}$$

## BookAI worked example

continuum observation in Band 6:

- $\nu=230\,\mathrm{GHz}$
- $\Delta\nu=8\times10^9\,\mathrm{Hz}$
- $N_{\rm ant}=43$
- $t=3600\,\mathrm{s}$
- $\mathrm{SEFD}\sim1000\,\mathrm{Jy}$

antenna-pair factor:

$$N(N-1)=43\times42=1806$$

denominator:

$$\sqrt{1806\times8\times10^9\times3600}\simeq7.2\times10^8$$

ideal RMS:

$$\sigma\simeq\frac{1000}{7.2\times10^8}\,\mathrm{Jy}\simeq1.4\,\mu\mathrm{Jy}$$

realistic corrections:

- correlator efficiency
- atmospheric decorrelation
- weighting losses
- calibration imperfections

so a practical RMS might become:

$$\sigma\sim5-10\,\mu\mathrm{Jy\,beam^{-1}}$$

## interpretation

- increasing integration time by 4 lowers noise by 2
- increasing bandwidth helps continuum sensitivity
- atmospheric conditions matter strongly at high frequency
- weighting can trade sensitivity for resolution/sidelobe control

## connection to observing proposals

when writing an ALMA proposal, the ETC is the bridge from science requirement to telescope time. if the source has flux $0.1\,\mathrm{mJy}$ and RMS is $10\,\mu\mathrm{Jy}$, detection is $\sim10\sigma$.

## exam sentence

the ALMA ETC is the interferometric radiometer equation with real-world corrections. it converts system temperature, effective area, bandwidth, time, and number of antennas into image-plane RMS.

## scientific figure

<img src="{{ "/assets/images/radiometer_noise_scaling.png" | relative_url }}" alt="radiometer_noise_scaling" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: the exposure-time calculator is a practical wrapper around this scaling, with real-world corrections for antennas, weather, bandwidth, efficiency, and weighting.

source: local plot generated from the radiometer-equation scaling.

## see also

- [Radiometer equation and SEFD](../../02_Zettel/Theory/interf/Radiometer equation and SEFD.html)
- [Antenna effective area and gain](../../02_Zettel/Theory/interf/Antenna effective area and gain.html)
- [Radio interferometer architecture](../../02_Zettel/Theory/interf/Radio interferometer architecture.html)
- [Steps in radio interferometric observations](../../02_Zettel/Theory/interf/Steps in radio interferometric observations.html)
