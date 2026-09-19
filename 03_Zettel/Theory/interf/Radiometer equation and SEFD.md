---
layout: "default"
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

![07_Images/Interferometry/radiometer_noise_scaling.png](../../../assets/images/radiometer_noise_scaling.png)

reading cue: the painful but important memory: sensitivity improves only as the square root of bandwidth and time. to improve RMS by 10, I need 100 times more independent samples.

source: local plot generated from $\sigma\propto1/\sqrt{\Delta\nu t}$.

## see also

- [Antenna effective area and gain](Antenna%20effective%20area%20and%20gain.html)
- [Radio astronomy basics](Radio%20astronomy%20basics.html)
- [ALMA exposure time calculator and sensitivity](ALMA%20exposure%20time%20calculator%20and%20sensitivity.html)
- [Interferometry equation sheet](Interferometry%20equation%20sheet.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (12)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../ALMA%20exposure%20time%20calculator%20and%20sensitivity.html" class="backlink-item">ALMA exposure time calculator and sensitivity</a></li>
    <li class="backlink-item-wrap"><a href="../Antenna%20effective%20area%20and%20gain.html" class="backlink-item">Antenna effective area and gain</a></li>
    <li class="backlink-item-wrap"><a href="../Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Photon%20noise%20and%20statistics.html" class="backlink-item">Photon noise and statistics</a></li>
    <li class="backlink-item-wrap"><a href="../Radio%20astronomy%20basics.html" class="backlink-item">Radio astronomy basics</a></li>
    <li class="backlink-item-wrap"><a href="../Radio%20interferometer%20architecture.html" class="backlink-item">Radio interferometer architecture</a></li>
    <li class="backlink-item-wrap"><a href="ALMA%20exposure%20time%20calculator%20and%20sensitivity.html" class="backlink-item">ALMA exposure time calculator and sensitivity</a></li>
    <li class="backlink-item-wrap"><a href="Antenna%20effective%20area%20and%20gain.html" class="backlink-item">Antenna effective area and gain</a></li>
    <li class="backlink-item-wrap"><a href="Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="Radio%20astronomy%20basics.html" class="backlink-item">Radio astronomy basics</a></li>
    <li class="backlink-item-wrap"><a href="Radio%20interferometer%20architecture.html" class="backlink-item">Radio interferometer architecture</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
  </ul>
</div>

