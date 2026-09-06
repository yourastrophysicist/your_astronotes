---
layout: default
title: "Light waves and the EM spectrum"
---

# Light waves and the EM spectrum

the foundational opening of any interferometry course. light is a transverse electromagnetic wave with two perpendicular oscillating components — electric and magnetic field — both perpendicular to the propagation direction. visible light is one octave of a vast electromagnetic spectrum.

## the wave nature

![The electromagnetic spectrum, showing wavelengths and atmospheric opacity windows utilized across optical/IR and radio interferometry.](Light_waves_and_the_EM_spectrum.svg)


for centuries light was thought of as a stream of particles (Newton's corpuscular theory). but observations of refraction, diffraction, and interference forced the wave theory in the 19th century (Young, Fresnel, Maxwell). interferometry is *the* phenomenon that cannot be explained without the wave picture.

quantum mechanics later restored the particle nature, but for interferometry the *classical* wave description is sufficient and far more practical. each photon "interferes with itself" (Dirac), and at the level of the wave equation everything works.

## the wave characteristics

three constants relate the basic quantities:

$$c = \lambda \nu$$

with:
- $c = 299\,792\,458 \, \text{m/s}$: speed of light *in vacuum*
- $\lambda$: wavelength
- $\nu$: frequency

the speed in a medium with refractive index $n > 1$:
$$v = c/n$$

and the wavelength in that medium:
$$\lambda_n = \lambda/n$$

so red light entering glass slows down and shrinks its wavelength, but its *frequency* stays the same. this is why frequency, not wavelength, is the fundamental quantity for spectroscopy.

## the visible spectrum

human eyes respond to wavelengths from about 380 nm (violet) to 750 nm (red). within this octave:

- violet: 380-450 nm
- blue: 450-490 nm
- green: 490-570 nm
- yellow: 570-590 nm
- orange: 590-620 nm
- red: 620-750 nm

the Sun's photosphere has $T \sim 5800$ K, and its blackbody peaks at $\sim 500$ nm — neatly inside the visible. evolution selected for vision in this band.

## the wider EM spectrum

light is one octave of an enormous range:
- radio (m to km): VLA, ALMA, EHT — interferometric astronomy
- microwave (mm-cm): CMB, ALMA bands 1-3
- infrared (μm): VLTI, JWST, Spitzer
- visible (380-750 nm): CHARA, COAST
- ultraviolet (10-380 nm): GALEX, HST/UVIS
- X-ray (Å): Chandra, XMM-Newton
- gamma-ray (< Å): Fermi, CTA

each band has its own physics, instruments, and engineering. interferometry works wherever the wave nature is preserved by the optics — most usefully at radio (heterodyne detection) and optical/IR (direct detection).

## the wave equation

Maxwell's equations in vacuum reduce to:
$$\nabla^2 \mathbf{E} = \frac{1}{c^2}\frac{\partial^2 \mathbf{E}}{\partial t^2}$$

with the same equation for $\mathbf{B}$. plane-wave solutions:
$$\mathbf{E}(\mathbf{r}, t) = \mathbf{E}_0 \cos(\mathbf{k}\cdot\mathbf{r} - \omega t + \phi_0)$$

with $\mathbf{k}$ the wave vector ($|\mathbf{k}| = 2\pi/\lambda$), $\omega = 2\pi\nu$, and $\phi_0$ an arbitrary phase. **everything in interferometry follows from adding two such waves and squaring the result.**

## the polarization of light

the $\mathbf{E}$ vector can be:
- **linearly polarized**: oscillating in a fixed plane
- **circularly polarized**: rotating at $\omega$
- **elliptically polarized**: a general intermediate case
- **unpolarized**: random fluctuating polarization, like sunlight

polarization matters for interferometry through the Fresnel-Arago laws (see [Fresnel-Arago laws](../../02_Zettel/Theory/interf/Fresnel-Arago laws.md)): only parallel-polarized waves can interfere. perpendicular polarizations cannot form fringes.

## the intensity

the *intensity* (energy flux per unit area) of an EM wave:
$$I = \frac{1}{2} \epsilon_0 c |\mathbf{E}_0|^2$$

what a photodetector measures is intensity, time-averaged over many optical cycles (since detectors cannot follow the $\nu \sim 10^{14}$ Hz oscillations of visible light).

## what the rest of the course will do with this

the next zettels build on light-as-wave by:
- adding two waves (superposition) → interference
- understanding when they add coherently (coherence)
- letting them propagate through apertures (diffraction)
- combining many wave sources from a real astronomical object (Van Cittert-Zernike)

so this zettel is the foundation. after it, every result is one more layer of structure on top of "light is a transverse EM wave with $E = E_0 \cos(\mathbf{k}\cdot\mathbf{r} - \omega t)$."

## see also

- [Plane waves and Huygens principle](../../02_Zettel/Theory/interf/Plane waves and Huygens principle.md)
- [Superposition and interference](../../02_Zettel/Theory/interf/Superposition and interference.md)
- [Electromagnetic waves and photons](../../02_Zettel/Theory/interf/Electromagnetic waves and photons.md)
- [Optical path difference OPD](../../02_Zettel/Theory/interf/Optical path difference OPD.md)
- [Fresnel-Arago laws](../../02_Zettel/Theory/interf/Fresnel-Arago laws.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
