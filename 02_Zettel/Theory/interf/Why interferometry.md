---
layout: default
title: "Why interferometry"
---

# Why interferometry

the answer to "why should I care?" — angular resolution sets *what we can see*, and interferometry is the only path to milli-arcsecond and microarcsecond resolutions in practice.

## the diffraction limit

a telescope of diameter $D$ observing at wavelength $\lambda$ has fundamental angular resolution
$$\theta_{\rm diff} = 1.22 \, \frac{\lambda}{D}$$

set by the Airy disk's first null. this is **the best a single aperture can do**, even with perfect optics and no atmosphere.

numerical examples:
- HST ($D = 2.4$ m, $\lambda = 500$ nm): $\theta = 0.052''$
- 8m VLT ($\lambda = 500$ nm): $\theta = 0.016''$
- 30m TMT ($\lambda = 500$ nm): $\theta = 0.004''$
- VLA (single 25m dish, 21 cm): $\theta = 30'$

## the limits of single apertures

three reasons single telescopes plateau in achievable resolution:

1. **physical size**: the largest current optical telescope is 10 m (Keck, GTC). 30-40 m extremely-large telescopes (TMT, ELT) are at the engineering edge. the Sun's disk at 10 pc is $\sim 1$ mas — a 10× larger aperture would still be $\sim 5$ times too small to resolve it
2. **cost**: telescope cost scales steeply with $D$ (between $D^{2.5}$ and $D^3$). doubling $D$ costs 6-8×
3. **atmosphere** (optical only): the atmospheric *seeing* limits ground-based optical resolution to $\sim 0.5''$ even with a 100 m mirror. only space (or AO) gets you the diffraction limit

so single telescopes have plateaued. interferometry is the *only* way forward to higher resolution at any wavelength.

## interferometry's promise

with two telescopes separated by a baseline $B$ and combined coherently, the angular resolution is

$$\theta_{\rm interf} \approx \frac{\lambda}{B}$$

with $B$ much larger than any single $D$. **resolution scales with the separation, not with the aperture size**. this is the key technological advance.

scaling examples for the same wavelength as above ($\lambda = 500$ nm):
- VLTI ($B = 130$ m): $\theta = 0.8$ mas — 65× better than HST
- CHARA ($B = 330$ m): $\theta = 0.3$ mas — 170× better

at radio wavelengths:
- VLA-A ($B = 36$ km, $\lambda = 21$ cm): $\theta = 1.2''$
- EVN ($B = 10000$ km, $\lambda = 5$ cm): $\theta = 1$ mas
- EHT ($B = 13000$ km, $\lambda = 1.3$ mm): $\theta = 20$ μas

interferometry pushes the resolution where physics demands it.

## the science it enables

what becomes accessible at sub-mas resolution:

- **stellar surfaces and rotation**: spots on Betelgeuse, Altair's oblateness, Vega's poles
- **stellar diameters**: Michelson 1920 measured Betelgeuse's diameter at 47 mas using a 6-m baseline interferometer
- **young stellar object disks**: the inner few AU around a forming star, where planet formation begins
- **binary star orbits**: directly imaging the orbit, dynamical masses to 1% precision
- **the Galactic Center**: VLTI/GRAVITY images of S-stars orbiting Sgr A*, testing GR
- **AGN black holes**: EHT's images of M87 and Sgr A* event-horizon-scale shadows
- **exoplanet imaging**: high-contrast direct detection of giant planets

without interferometry, all of this would remain unresolved.

## why both optical and radio

historically these developed separately:

- **radio interferometry** matured first (1950s-1970s, Ryle, Jodrell Bank, NRAO) because radio waves can be electronically heterodyned, recorded, and correlated post-hoc. baselines can be intercontinental (VLBI)
- **optical/IR interferometry** lagged because there are no oscillators at optical frequencies. light must travel down a real beam path, with delay lines compensating for path differences in real time. atmospheric turbulence destroys phase on millisecond timescales

both are now mature. radio routinely produces complete images. optical/IR is increasingly competitive thanks to AO, fringe trackers, and instruments like GRAVITY.

## the price

interferometry is harder than imaging:

- **incomplete (u, v) coverage**: I cannot sample every baseline simultaneously. the dirty image always has sidelobes
- **deconvolution problem**: getting a true image from incomplete Fourier data requires CLEAN, MEM, or modern Bayesian methods
- **atmosphere**: optical interferometry needs phase-stability schemes (closure phase, fringe tracking, AO)
- **calibration**: bandpass, flux, phase, polarization — every step has its own technique
- **sensitivity**: a 100m baseline of two 8m telescopes has the *resolution* of a 100m mirror but the *collecting area* of two 8m mirrors. only marginal sources are detectable

so interferometry buys angular resolution at the cost of complexity and sensitivity. it is the right tool only when you cannot get the answer any other way.

## the philosophical flip

a single telescope produces an image directly. an interferometer produces *Fourier components* of the image, and you reconstruct. this is "indirect imaging" — beautiful, mathematically rich, the entire course is one extended explanation of how it works.

## see also

- [Plane waves and Huygens principle](../../../02_Zettel/Theory/interf/Plane waves and Huygens principle.md)
- [Van Cittert-Zernike theorem](../../../02_Zettel/Theory/interf/Van Cittert-Zernike theorem.md)
- [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
