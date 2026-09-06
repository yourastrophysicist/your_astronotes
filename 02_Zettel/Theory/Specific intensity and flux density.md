---
layout: default
title: "Specific intensity and flux density"
---

# Specific intensity and flux density

BookAI starts the radio side by slowing down the language of radiation. before any antenna or correlator, I need to know what quantity the sky actually has.

## specific intensity

specific intensity is the most local description of radiation:

$$I_\nu = \frac{dE}{dA\,dt\,d\nu\,d\Omega}$$

read it as: energy per collecting area, per time, per frequency interval, per solid angle.

units:

$$\mathrm{W\,m^{-2}\,Hz^{-1}\,sr^{-1}}$$

physical meaning: $I_\nu$ is the brightness of the sky in a particular direction. it is not yet integrated over the whole source.

an important property in empty space: specific intensity is conserved along a ray. this is why it is such a fundamental quantity in radiative transfer.

## flux density

flux density is what I get after integrating brightness over source solid angle:

$$S_\nu = \int I_\nu\,d\Omega$$

units:

$$\mathrm{W\,m^{-2}\,Hz^{-1}}$$

radio astronomers use the Jansky:

$$1\,\mathrm{Jy}=10^{-26}\,\mathrm{W\,m^{-2}\,Hz^{-1}}$$

so:

- $I_\nu$ = brightness per direction
- $S_\nu$ = total received source flux per frequency

## the telescope beam enters immediately

real telescopes do not integrate over the source in an abstract way. they weight the sky by their beam:

$$T_A \propto \int I(\theta,\phi)P(\theta,\phi)\,d\Omega$$

where $P$ is the beam power pattern. this is why [Beam power pattern of a radio telescope](../../02_Zettel/Theory/interf/Beam power pattern of a radio telescope.html) matters before imaging.

## connection to brightness temperature

in the Rayleigh-Jeans limit,

$$I_\nu = \frac{2kT_b\nu^2}{c^2}$$

so

$$T_b = \frac{c^2}{2k\nu^2}I_\nu$$

if the source fills the beam, brightness temperature is directly connected to the measured antenna temperature. if the source is unresolved, beam dilution matters.

## why this matters for interferometry

an interferometer does not directly measure $I_\nu(l,m)$. it measures Fourier components of it:

$$\mathcal V(u,v)=\iint I(l,m)e^{-2\pi i(ul+vm)}dl\,dm$$

so $I_\nu$ is the object we want, visibility is the thing we measure, and imaging is the bridge back.

## exam sentence

specific intensity is the directional brightness of the sky, while flux density is that brightness integrated over solid angle. interferometry ultimately reconstructs the sky brightness distribution from visibility samples.

## scientific figure

<img src="{{ "/assets/images/specific_intensity_flux_beam.svg" | relative_url }}" alt="specific_intensity_flux_beam" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: $I_\nu$ lives on the sky direction by direction; $S_\nu$ is what I get after integrating brightness through the telescope beam. this is why flux density always quietly depends on the beam/source geometry.

source: local study diagram generated from $S_\nu=\int I_\nu P\,d\Omega$.

## see also

- [Radio astronomy basics](../../02_Zettel/Theory/interf/Radio astronomy basics.html)
- [Beam power pattern of a radio telescope](../../02_Zettel/Theory/interf/Beam power pattern of a radio telescope.html)
- [Van Cittert-Zernike theorem](../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.html)
- [Interferometry equation sheet](../../02_Zettel/Theory/interf/Interferometry equation sheet.html)
