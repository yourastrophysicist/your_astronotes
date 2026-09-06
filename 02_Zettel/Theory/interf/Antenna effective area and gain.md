---
layout: default
title: "Antenna effective area and gain"
---

# Antenna effective area and gain

BookAI treats a radio antenna as both a collector and a directional filter. the important quantities are effective area, directivity, gain, and beam solid angle.

## effective area

the geometric area of an antenna is not the same as the useful collecting area. losses from illumination, blockage, surface errors, and spillover reduce it:

$$A_{\rm eff}=\eta A$$

where:

- $A$ is geometric collecting area
- $\eta$ is aperture efficiency
- $A_{\rm eff}$ is effective collecting area

for a circular dish:

$$A=\pi\left(\frac{D}{2}\right)^2$$

## directivity

directivity measures how concentrated the antenna response is on the sky:

$$D=\frac{4\pi}{\Omega_A}$$

where $\Omega_A$ is the antenna beam solid angle.

small beam solid angle means high directivity.

## gain

gain includes efficiency and connects effective area to wavelength:

$$G=\frac{4\pi A_{\rm eff}}{\lambda^2}$$

in decibels:

$$G_{\rm dB}=10\log_{10}G$$

this is useful because antenna gains are large numbers.

## physical interpretation

- effective area asks: how much incoming wave power can I collect?
- directivity asks: how narrow is my directional response?
- gain asks: compared with an isotropic antenna, how strongly do I respond in the main direction?

## relation to sensitivity

larger $A_{\rm eff}$ lowers the System Equivalent Flux Density:

$$\mathrm{SEFD}=\frac{2k_BT_{\rm sys}}{A_{\rm eff}}$$

so more effective area means better sensitivity.

## relation to interferometry

baseline gives resolution:

$$\theta\sim\frac{\lambda}{B}$$

collecting area gives sensitivity. this is why a long baseline without enough collecting area can resolve small scales but still not detect faint emission.

## exam sentence

an antenna's effective area sets how much signal it collects, while its gain/directivity describe how concentrated its response is. in interferometry, baselines set resolution but antenna area and system temperature set sensitivity.

## scientific figure

<img src="{{ "/assets/images/antenna_effective_area_gain.svg" | relative_url }}" alt="antenna_effective_area_gain" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: effective area controls sensitivity, while gain/directivity controls angular response. baseline length gives resolution; collecting area determines whether the resolved signal is detectable.

source: local study diagram generated from standard antenna relations.

## see also

- [Radio astronomy basics](../../../02_Zettel/Theory/interf/Radio astronomy basics.html)
- [Beam power pattern of a radio telescope](../../../02_Zettel/Theory/interf/Beam power pattern of a radio telescope.html)
- [Radiometer equation and SEFD](../../../02_Zettel/Theory/interf/Radiometer equation and SEFD.html)
- [Radio interferometer architecture](../../../02_Zettel/Theory/interf/Radio interferometer architecture.html)
