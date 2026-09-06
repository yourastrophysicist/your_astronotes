---
layout: default
title: "Beam power pattern of a radio telescope"
---

# Beam power pattern of a radio telescope

BookAI emphasizes that a radio telescope never sees the sky neutrally. it sees the sky through its beam pattern.

## definition

the beam power pattern $P(\theta,\phi)$ is the normalized angular response of the antenna. the measured antenna temperature is roughly:

$$T_A \propto \int I(\theta,\phi)P(\theta,\phi)\,d\Omega$$

so observation is a weighted integral of sky brightness.

## beam solid angle

$$\Omega_A=\int P(\theta,\phi)\,d\Omega$$

this appears in directivity:

$$D=\frac{4\pi}{\Omega_A}$$

## aperture illumination and Fourier transform

in the Fraunhofer far field, the complex beam is related to aperture illumination by a Fourier transform:

$$E(u,v)=\iint A(x,y)e^{-2\pi i(ux+vy)}dxdy$$

then the power pattern is roughly

$$P(u,v)=|E(u,v)|^2$$

this is the single-dish ancestor of the interferometric Fourier story.

## Gaussian beam approximation

near the main lobe, many radio beams are approximated as Gaussian:

$$P_G(\theta)=\exp\left[-4\ln2\frac{\theta^2}{\theta_{\rm FWHM}^2}\right]$$

for a circular Gaussian:

$$\Omega_G\simeq1.13\theta_{\rm FWHM}^2$$

## Airy pattern

for an ideal circular aperture:

$$P_{\rm Airy}(\theta)\propto\left[\frac{2J_1(x)}{x}\right]^2$$

with

$$x=\frac{\pi D\sin\theta}{\lambda}$$

this produces a central main lobe and rings. the first null gives the familiar resolution scale:

$$\theta\simeq1.22\frac{\lambda}{D}$$

## main beam, sidelobes, error beam

- **main beam**: central lobe, where the target is meant to sit
- **sidelobes**: secondary response, can pick up bright off-axis sources
- **error beam**: response from surface errors, scattering, imperfect optics

sidelobes are dangerous because they can look like real structure after imaging.

## relation to dirty beam

single-dish beam pattern is the PSF of one aperture. in interferometry, incomplete UV coverage produces a synthesized PSF: the [dirty beam](../../../02_Zettel/Theory/interf/Dirty beam and dirty image.md).

both are versions of the same idea: aperture sampling controls image response.

## exam sentence

the beam power pattern is the angular response of the antenna. it weights the sky brightness, determines beam solid angle and directivity, and introduces sidelobes that affect calibration and imaging.

## scientific figure

![antenna_effective_area_gain](../../../assets/images/antenna_effective_area_gain.svg)

reading cue: the antenna beam is the directional weighting of the sky. the same dish that collects power also defines the field of view and sidelobe response.

source: local study diagram generated from $A_{
m eff}=\eta A$ and $G=4\pi A_{
m eff}/\lambda^2$.

## see also

- [Antenna effective area and gain](../../../02_Zettel/Theory/interf/Antenna effective area and gain.md)
- [Point spread function](../../../02_Zettel/Theory/interf/Point spread function.md)
- [Optical transfer function](../../../02_Zettel/Theory/interf/Optical transfer function.md)
- [Dirty beam and dirty image](../../../02_Zettel/Theory/interf/Dirty beam and dirty image.md)
