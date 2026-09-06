---
layout: default
title: "Atmospheric transmission"
---

Astronomers studying the Universe from the surface of the Earth have to peer through the atmosphere
	that leads to several undesirable consequences
		which affect different observing windows in different ways

---

## 1. Sky background

Dust and molecules in the atmosphere scatter light from the Moon and Earth's surface
	making the entire sky appear to glow — a **sky background**
The atmosphere itself emits light (airglow, aurora)
	so the sky acts as a noisy source of photons
		making detection of faint targets difficult

---

## 2. Atmospheric extinction

Dust and molecules scatter and absorb light from astronomical objects
	the result is a dimming of the image — **atmospheric extinction**
	the amount of dimming depends on:
		the **airmass**: the column of atmosphere the light traverses, $\propto 1/\cos z$ where $z$ is the zenith angle
		the **local conditions**: humidity, dust, aerosols

The extinction in magnitudes: $\Delta m = k \cdot X$ where $k$ is the extinction coefficient and $X$ is the airmass

---

## 3. Transparency variations

Related to atmospheric extinction, **clouds** absorb and scatter light
	the amount of light received varies with time as clouds drift across the field of view
		from partial attenuation (thin cirrus) to total obscuration (thick cloud)

It is important not to confuse seeing and transparency:
	in **poor seeing**: the image is blurred but brightness is approximately constant
	in **poor transparency**: the light is dimmed but blurring is largely unaffected

---

## 4. Seeing

Turbulence in the atmosphere scrambles the wavefront of starlight
	causing **image blurring** (seeing) and **brightness fluctuations** (scintillation / twinkling)
		see [Seeing Effect](../../02_Zettel/Theory/Seeing Effect.html) for the full treatment including the Fried parameter and Kolmogorov turbulence

The seeing **degrades angular resolution** — for a large aperture telescope the seeing limit is:
$$\theta_{seeing} \approx \frac{\lambda}{r_0} \sim 0.5'' - 2''$$

completely dominating the diffraction limit $\theta = 1.22\lambda/D$ for all ground-based telescopes

---

## 5. Opacity at high energies: the X-ray barrier

Beyond the optical/radio windows, the atmosphere is **opaque** to many forms of radiation

The transmission of the atmosphere as a function of wavelength:

![Transparency of the atmosphere](https://cdn.eso.org/images/screen/atm_opacity.jpg)
Transmission of the Earth's atmosphere as a function of wavelength. Only the optical and radio windows are open from the ground. X-rays (wavelengths $< 10$ nm) are completely blocked.

At X-ray energies:
	photons are absorbed by **photoelectric absorption** by atmospheric atoms (N, O, Ar)
		the cross section $\sigma_{ph} \propto Z^{4-5}/E^3$ — see [Photoelectric absorption](../../02_Zettel/Theory/Photoelectric absorption.html)
			even at $E = 10~\text{keV}$: the optical depth $\tau_{atm} \gg 1$ — **complete opacity**

The atmospheric column density:
$$N_H^{atm} \approx 1.7 \times 10^{25}~\text{cm}^{-2}$$

For comparison, a column density of $10^{22}~\text{cm}^{-2}$ already completely absorbs photons below $\sim 1~\text{keV}$
	so the atmosphere blocks all X-rays below $\sim 100~\text{keV}$ completely
		and even hard X-rays and soft gamma-rays require balloon or rocket altitudes

This means: **all X-ray and gamma-ray observatories must operate from space**

---

## 6. Solutions for different regimes

### Ground-based (optical/radio/near-IR):
**Adaptive optics**: corrects seeing wavefront distortions in real time
		using a wavefront sensor + deformable mirror at 100s of Hz
		achieves near-diffraction-limited resolution in near-IR from 8-m class telescopes
	**High-altitude sites**: Mauna Kea (Hawaii, 4200 m), La Palma (2400 m), Atacama (5000 m)
		less atmosphere → less absorption, less water vapour, less turbulence

### Space-based (X-ray, gamma-ray, UV, part of infrared):
**Low Earth Orbit (LEO)**: Chandra, XMM-Newton, Fermi, NuSTAR
		above almost all atmosphere; orbital period ~90 min
	**L2 Lagrange point**: 1.5 million km from Earth
		thermally stable, shielded from Earth's infrared glow
		used by Herschel, JWST, eROSITA (on SRG)

![Diagram of the five Lagrange points and Webb's position at Lagrange point 2.](https://assets.science.nasa.gov/dynamicimage/assets/science/missions/webb/outreach/migrated/2021/STScI-01HV71YQ7BT2YQRCZ3B383AHCJ.png?w=4000&h=2500&fit=clip&crop=faces%2Cfocalpoint)
<font color="#bfbfbf">The five Lagrange points of the Sun-Earth system. L2 at 1.5 million km from Earth is thermally stable and free from Earth's infrared emission — the preferred location for infrared and UV observatories.</font>

---

## Summary: atmospheric windows

| Window | Wavelength | Energy | Accessible from |
|---|---|---|---|
| Radio | $\gtrsim 1$ mm | $\lesssim 10^{-3}$ eV | Ground |
| Optical | 300–1000 nm | 1–4 eV | Ground |
| Near-IR | 1–5 $\mu$m | 0.25–1 eV | Ground (partially) |
| Far-IR | $> 5~\mu$m | $< 0.25$ eV | Space |
| UV | 10–300 nm | 4–124 eV | Space |
| Soft X-ray | 0.1–10 nm | 0.1–10 keV | Space |
| Hard X-ray | 0.01–0.1 nm | 10–100 keV | Space (balloon possible) |
| Gamma-ray | $< 0.01$ nm | $> 100$ keV | Space |
