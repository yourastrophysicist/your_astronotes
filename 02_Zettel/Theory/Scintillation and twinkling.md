---
layout: default
title: "Scintillation and twinkling"
---

# Scintillation and twinkling

the **amplitude** fluctuations of starlight caused by atmospheric turbulence — the visible "twinkling" of stars to the naked eye. distinct from phase fluctuations (which cause seeing). for interferometry, scintillation is usually a small effect compared to phase, but it sets a noise floor for high-precision photometry and contributes to fringe-tracking errors.

## the physics

turbulent eddies act as weak *lenses* that focus or defocus rays. light passing through a converging patch is concentrated; light through a diverging patch is dispersed. on the ground, the resulting illumination pattern has bright and dark patches — **scintillation patterns** — that move with the wind.

at a fixed pupil point, these passing patches produce time-varying intensity = the **twinkle**.

## why scintillation requires height

 
if turbulence were right at the telescope (ground-layer only), the rays would be deflected but the *intensity* would not yet have changed (no propagation distance). it is the *propagation* from the turbulence layer down to the ground (height $z$) that converts phase fluctuations into amplitude fluctuations.

quantitatively, the **Fresnel scale**:
$$r_F = \sqrt{\lambda z}$$

is the natural diffraction scale over which a phase fluctuation evolves into amplitude. for $z = 10$ km and $\lambda = 500$ nm: $r_F \sim 7$ cm.

so:
- aperture $D \ll r_F$ (small apertures, small ground patches): scintillation is strong
- aperture $D \gg r_F$: scintillation averages over many bright/dark patches, intensity is more stable

planet appearance vs star: planets have angular sizes large enough that scintillation patches average over the disk. stars are point-like and twinkle. the physical principle is the same; the spatial averaging differs.

## the scintillation index

quantify scintillation by the relative variance of intensity:

$$\sigma_I^2 = \frac{\langle (I - \langle I \rangle)^2 \rangle}{\langle I \rangle^2}$$

for **weak scintillation** (small phase variance):
$$\sigma_I^2 \approx 19.2 \, \lambda^{-7/6} \int C_n^2(z) \, z^{5/6} \, dz$$

scaling: $\sigma_I^2 \propto \lambda^{-7/6}$, slightly stronger at shorter wavelengths.

## the wavelength scaling (continued)

the *fractional* intensity fluctuations scale as $\lambda^{-7/6}$, i.e. *worse at shorter wavelengths*. visible light scintillates more than IR.

contrast with seeing, which scales as $\lambda^{-1/5}$. seeing is *less* wavelength-dependent than scintillation.

## the airmass scaling

scintillation depends on $z^{5/6}$ in the integral. at high airmass, the path goes through more atmosphere at higher altitude (larger effective $z$). so scintillation gets worse near the horizon — the visible "twinkle" of low stars is much stronger than near zenith.

## scintillation timescales

scintillation patterns advect with the wind, so the temporal scale is

$$\tau_{\rm scint} \sim r_F/v_{\rm wind} \sim 1$$ ms or so

i.e. several Hz to kHz. faster than the typical AO loop and faster than most photometric integrations.

## observable consequences

- **photometric noise**: short-exposure photometry from the ground is limited by scintillation. for an 8m telescope at airmass 1, $\sigma_I \sim 0.1\%$ in 1 minute is the typical floor — limits exoplanet transit photometry, asteroseismology
- **transit photometry**: scintillation noise dominates exoplanet photometry from the ground. some space-based motivations
- **interferometric fringes**: scintillation at each telescope modulates the photon flux, contributing to fringe SNR fluctuations. usually a small effect compared to phase

## mitigation

three approaches:

### 1. larger aperture

if $D \gg r_F$, the aperture averages over many bright/dark patches. scintillation $\sim D^{-7/6}$ for large $D$. an 8m telescope has $\sim 10\times$ less scintillation than a 1m at 500 nm.

### 2. observe at zenith

scintillation $\propto (\sec z)^{n}$ for some $n > 1$. always observe at low airmass when scintillation is the limiting noise.

### 3. conjugate-pupil photometry

an AO-corrected telescope can place a small aperture at a *re-imaged pupil plane*, where scintillation patterns are concentrated. by aperture-matching, intensity variations are reduced.

### 4. space

go above the atmosphere. HST and Gaia don't twinkle.

## historical / cultural

twinkling of stars has been observed since antiquity. the wave-optical explanation came in the 19th century. precise quantitative theory developed in the mid-20th century by Tatarski, Roddier, and Fried, parallel to the AO development.

planets famously do not twinkle (much). the difference is primary education's introduction to scintillation: planets are extended sources averaging over the patches; stars are point sources and feel the full effect.

## see also

- [Atmospheric turbulence overview](../../02_Zettel/Theory/interf/Atmospheric turbulence overview.md)
- [Kolmogorov turbulence](../../02_Zettel/Theory/interf/Kolmogorov turbulence.md)
- [Fried parameter $r_0$](../../02_Zettel/Theory/interf/Fried parameter $r_0$.md)
- [Adaptive optics](../../02_Zettel/Theory/interf/Adaptive optics.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
