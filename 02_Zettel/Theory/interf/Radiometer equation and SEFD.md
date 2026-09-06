---
layout: default
title: "Radiometer equation and SEFD"
---

# Radiometer equation and SEFD

BookAI uses the radiometer equation to explain the sensitivity of radio and interferometric observations. the deep idea is simple: random noise averages down as the square root of the number of independent samples.

## single-dish radiometer equation

$$\Delta T\simeq\frac{T_{\rm sys}}{\sqrt{\Delta\nu\,t}}$$

where:

- $T_{\rm sys}$ is the system temperature
- $\Delta\nu$ is bandwidth
- $t$ is integration time

## derivation intuition

number of independent samples:

$$N\sim\Delta\nu t$$

random noise decreases like

$$\sigma\propto\frac{1}{\sqrt{N}}$$

so

$$\sigma\propto\frac{1}{\sqrt{\Delta\nu t}}$$

this is why four times more time gives only two times better noise.

## system temperature

conceptually:

$$T_{\rm sys}=T_{\rm rx}+T_{\rm sky}+T_{\rm atm}+T_{\rm spill}+T_{\rm CMB}+\cdots$$

lowering $T_{\rm sys}$ is why cryogenic low-noise receivers matter.

## SEFD

System Equivalent Flux Density translates temperature noise into flux-density units:

$$\mathrm{SEFD}=\frac{2k_BT_{\rm sys}}{A_{\rm eff}}$$

large $T_{\rm sys}$ worsens sensitivity. large $A_{\rm eff}$ improves it.

## interferometric sensitivity

for an array:

$$\sigma\simeq\frac{\mathrm{SEFD}}{\sqrt{N_{\rm ant}(N_{\rm ant}-1)\Delta\nu t}}$$

sometimes an efficiency factor is included:

$$\sigma\simeq\frac{\mathrm{SEFD}}{\eta\sqrt{N_{\rm ant}(N_{\rm ant}-1)\Delta\nu t}}$$

where $\eta$ includes quantization/correlator/weighting losses.

## ALMA-style worked example from BookAI

use:

- $N_{\rm ant}=43$
- $\Delta\nu=8\times10^9\,\mathrm{Hz}$
- $t=3600\,\mathrm{s}$
- $\mathrm{SEFD}\sim1000\,\mathrm{Jy}$

antenna-pair factor:

$$N(N-1)=43\times42=1806$$

denominator:

$$\sqrt{1806\times8\times10^9\times3600}\simeq7.2\times10^8$$

ideal noise:

$$\sigma\simeq\frac{1000}{7.2\times10^8}\,\mathrm{Jy}\simeq1.4\,\mu\mathrm{Jy}$$

realistic corrections raise this to several $\mu\mathrm{Jy\,beam^{-1}}$.

## ON/OFF measurements

single-dish observations often alternate source and sky. subtracting OFF from ON removes background but combines noise from both measurements, reducing efficiency. interferometry naturally rejects much uncorrelated noise through cross-correlation.

## exam sentence

the radiometer equation says sensitivity improves as $1/\sqrt{\Delta\nu t}$. for interferometers, sensitivity also improves with the number of antenna pairs and is often expressed using SEFD.

## scientific figure

![radiometer_noise_scaling](../../../assets/images/radiometer_noise_scaling.png)

reading cue: the painful but important memory: sensitivity improves only as the square root of bandwidth and time. to improve RMS by 10, I need 100 times more independent samples.

source: local plot generated from $\sigma\propto1/\sqrt{\Delta\nu t}$.

## see also

- [Antenna effective area and gain](../../../02_Zettel/Theory/interf/Antenna effective area and gain.html)
- [Radio astronomy basics](../../../02_Zettel/Theory/interf/Radio astronomy basics.html)
- [ALMA exposure time calculator and sensitivity](../../../02_Zettel/Theory/interf/ALMA exposure time calculator and sensitivity.html)
- [Interferometry equation sheet](../../../02_Zettel/Theory/interf/Interferometry equation sheet.html)
