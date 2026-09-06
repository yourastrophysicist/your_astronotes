---
layout: default
title: "Photon noise and statistics"
---

# Photon noise and statistics

light arrives in *photons*. for thermal/laser/astronomical sources, photons are statistically independent (modulo small bunching corrections), giving Poisson counting statistics. this sets the **fundamental noise floor** of every photon-counting interferometric measurement.

## Poisson statistics

photons arriving at a detector form a Poisson process: the number $N$ in a fixed time $\tau$ has

$$P(N) = \frac{\langle N \rangle^N e^{-\langle N \rangle}}{N!}$$

with mean $\langle N \rangle$ and **variance equal to the mean**:

$$\sigma_N^2 = \langle N \rangle$$

$$\sigma_N/\langle N \rangle = 1/\sqrt{\langle N \rangle}$$

so the relative noise is $1/\sqrt{N}$. doubling the integration time halves the noise (in fractional terms).

## photon flux from physical units

for a source with monochromatic flux density $F_\nu$ at frequency $\nu$, observed through a telescope of effective area $A_{\rm eff}$ in bandwidth $\Delta\nu$:

$$\dot N_{\rm photon} = \frac{F_\nu \, A_{\rm eff} \, \Delta\nu}{h\nu} \cdot \eta_{\rm QE}$$

where $\eta_{\rm QE}$ is the detector quantum efficiency. for a star of $V = 10$, broadband filter, 8m telescope, $\eta_{\rm QE} = 0.5$: $\dot N \sim 10^7$ photons/s. for $V = 20$: $\sim 10^4$ photons/s. for $V = 25$: $\sim 100$ photons/s.

## photon noise on visibility

an interferometer measures the visibility from the contrast of fringes. if I detect $N$ photons total, the *signal* is $V \cdot N$ (the modulation depth) and the *noise* is $\sqrt N$. so the SNR is

$$\text{SNR}(V) \sim V \sqrt N$$

required $N$ for a given SNR target:

$$N \sim \left(\frac{\text{SNR}}{V}\right)^2$$

for $V = 0.5, \text{SNR} = 10$: need $N \sim 400$ photons.
for $V = 0.05$ (a barely-resolved source), SNR = 5: need $N \sim 10^4$ photons per visibility measurement.

so faint or strongly-resolved sources require *much* more integration time, since each measurement is photon-noise dominated.

## the photon-counting regime vs the wave regime

at optical frequencies, $h\nu \sim 1$ eV $\gg k_B T_{\rm room} = 0.025$ eV. the detector sees individual photons, with thermal noise much smaller than photon noise. **photon-counting regime**.

at radio frequencies, $h\nu \sim 10^{-5}$ eV $\ll k_B T_{\rm sys} \sim$ tens of K. the detector sees a *continuous* electromagnetic signal, with thermal noise dominant. **wave/thermal regime**.

at sub-mm/IR, transitioning. ALMA at 100 GHz: $h\nu \sim 4 \times 10^{-4}$ eV, $T_{\rm rec} \sim 30$ K → thermal-noise-dominated. ALMA at 850 GHz: $h\nu \sim 4 \times 10^{-3}$ eV, $T_{\rm rec} \sim 100$ K → still thermal but closer to photon-noise level.

## radiometer equation (the radio analogue)

for a thermal noise-dominated radio receiver, the rms noise temperature in a single visibility integration:

$$\sigma_T = \frac{T_{\rm sys}}{\sqrt{\Delta\nu \, \tau}}$$

with $T_{\rm sys}$ the system temperature (dominated by atmosphere + receiver), $\Delta\nu$ bandwidth, $\tau$ integration time.

scaled to flux:
$$\sigma_S = \frac{2 k_B T_{\rm sys}}{A_{\rm eff} \sqrt{\Delta\nu \, \tau}}$$

this is the **radiometer equation** of radio astronomy. plays the same role as the Poisson formula at optical wavelengths.

## why photon noise hurts interferometry more than imaging

a single-aperture imager collects *all* the light from a source onto one pixel. an interferometer **modulates the signal in fringes**, with a modulation amplitude $V$ that is typically small for partially-resolved sources. only the modulated part carries the visibility information.

so an interferometer needs $\sim 1/V^2$ times more photons than a comparable-area imager. for $V = 0.1$, that's $100\times$ more time on source for the same SNR. this is the *fundamental* sensitivity penalty of interferometry.

## the bispectrum noise advantage

closure quantities (bispectrum, closure phase, closure amplitude) have *better* SNR per photon than individual visibilities, because they cancel out the leading-order calibration noise. for very-faint sources where calibrators are not bright enough to phase-track, the bispectrum is the only viable observable.

## photon bunching (the HBT signal)

for thermal light (chaotic statistics), photons are slightly **bunched**: the probability of detecting two photons in coincidence is slightly higher than for a Poisson process with the same average. this is the **Hanbury Brown-Twiss effect**, and it is the basis of intensity interferometry.

the second-order coherence function:
$$g^{(2)}(\tau) = \frac{\langle I(t) I(t+\tau)\rangle}{\langle I(t)\rangle^2}$$

for thermal light: $g^{(2)}(0) = 2$ (excess bunching). for laser: $g^{(2)}(0) = 1$ (Poisson, no bunching). for single-photon antibunched: $g^{(2)}(0) = 0$.

stellar interferometry is in the thermal regime, so HBT bunching is detectable in principle. it is what enables intensity interferometry to measure stellar diameters without requiring fringe-stable optics.

## practical mitigation strategies

three ways to reduce photon noise impact:

1. **integrate longer**: $\sigma \propto 1/\sqrt N$. doubling $\tau$ improves by $\sqrt 2$
2. **larger aperture**: $\dot N \propto A$. but interferometric resolution is set by $B$, not $A$
3. **reduce contributing background**: narrow-band filters reduce sky background; cool optics reduce thermal photon noise

for radio: (1) plus reducing $T_{\rm sys}$ via cryogenics.

## see also

- [Electromagnetic waves and photons](../../../02_Zettel/Theory/interf/Electromagnetic waves and photons.md)
- [Coherence function and visibility](../../../02_Zettel/Theory/interf/Coherence function and visibility.md)
- [Intensity interferometry concept](../../../02_Zettel/Theory/interf/Intensity interferometry concept.md)
- [Hanbury Brown Twiss effect](../../../02_Zettel/Theory/interf/Hanbury Brown Twiss effect.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
