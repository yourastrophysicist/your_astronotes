---
layout: default
title: "Adaptive optics"
---

# Adaptive optics

the technique that *undoes* atmospheric distortion in real time, restoring near-diffraction-limited resolution to ground-based telescopes. measure the wavefront, deform a mirror to compensate, do it 1000 times a second. AO is the technology that made VLTI/CHARA/GRAVITY-class optical interferometry practical.

## the loop

a closed-loop AO system has three components:

1. **wavefront sensor**: measures the residual wavefront error using light from the science target or a guide star
2. **deformable mirror**: actively reshapes its surface to apply the *opposite* of the measured distortion
3. **real-time computer**: processes WFS data, computes mirror commands, applies them — all faster than the atmosphere evolves

the loop runs at $\sim 1$ kHz. the residual wavefront error after correction is much smaller than the input distortion → much sharper images.

## the Strehl ratio

![Adaptive optics control loop: wavefront sensor measures atmospheric distortion and deforms a flexible mirror in real time to restore sharpness.](Adaptive_optics.gif)


quantifies AO performance. ratio of the peak intensity in the corrected PSF to that of an ideal diffraction-limited PSF:

$$S = e^{-\sigma_\phi^2}$$

(Maréchal approximation). $\sigma_\phi^2$ is the residual phase variance. for $\sigma_\phi = 1$ rad, $S = 0.37$. for $\sigma_\phi = 0.5$ rad, $S = 0.78$.

typical AO performance:
- visible (V band) AO: $S = 0.05$-$0.15$ — partial correction
- H-band AO: $S = 0.2$-$0.5$
- K-band AO: $S = 0.4$-$0.8$ — near diffraction-limited core

so AO works progressively better at longer wavelengths (because the same physical wavefront error becomes a smaller fraction of $\lambda$).

## the residual halo

even with AO, only a fraction of light goes into the diffraction-limited core. the rest forms a *halo* around the core, structured by the residual atmospheric power spectrum.

$$\text{PSF}_{\rm AO} = S \cdot \text{Airy disk} + (1 - S) \cdot \text{halo}$$

the halo limits high-contrast imaging: at K-band with $S = 0.5$, half the light is in the halo, contaminating any nearby faint companion you might want to detect.

**extreme AO** (XAO): aim for $S > 0.9$ to dramatically reduce the halo. used for direct exoplanet imaging (SPHERE on VLT, GPI on Gemini).

## guide stars

AO needs a bright reference star to measure the wavefront in real time. requirements:

- **bright enough**: typically $V < 13$-15 for visible WFS, or $K < 9$-11 for IR WFS
- **within isoplanatic patch**: $\theta_0 \sim 2''$ at V, $\sim 15''$ at K
- **point source**: ideally unresolved

natural guide stars: limited sky coverage. ~1% of sky has a suitable bright NGS at visible.

**laser guide stars** (LGS): shine a sodium-line laser ($\lambda = 589$ nm) at the mesospheric sodium layer (~90 km altitude). atoms re-emit, creating an artificial star for the WFS.

LGS extends sky coverage to ~50% but has limitations:
- doesn't measure tip-tilt (the bulk image motion); a faint NGS still needed for tilt
- "cone effect": the laser beam doesn't sample the full atmospheric column above the science target

## interferometry-specific AO

at each interferometer telescope, AO restores the wavefront within the aperture. without AO:
- the effective collecting aperture is $\sim r_0^2$ (small)
- only $\sim 1\%$ of the flux reaches the central diffraction-limited spot

with AO at each telescope:
- the full aperture works coherently
- baselines beyond $r_0$ become useful
- the **fringe contrast** is preserved

VLTI's 8m UTs all have NAOS or MACAO adaptive optics. without AO, they would contribute as effective 60-cm telescopes at K-band — a $\sim 200\times$ loss of collecting area.

## the AO error budget

Strehl is degraded by several independent error sources, each contributing variance $\sigma^2_i$:

- **fitting error**: finite number of DM actuators can't reproduce all wavefront shapes. $\sigma^2 \sim (d/r_0)^{5/3}$ where $d$ is actuator spacing
- **temporal error**: AO loop has finite bandwidth. $\sigma^2 \sim (\tau/\tau_0)^{5/3}$
- **noise on the WFS**: faint guide stars give noisy WFS measurements. $\sigma^2 \sim 1/\text{SNR}^2$
- **anisoplanatism**: science target offset from guide star by $\theta > 0$. $\sigma^2 \sim (\theta/\theta_0)^{5/3}$
- **non-common-path errors**: aberrations between WFS and science camera that AO can't see

total: $\sigma^2_{\rm total} = \sum \sigma^2_i$. Strehl $= e^{-\sigma^2_{\rm total}}$. designing an AO system is partitioning the error budget.

## extreme adaptive optics

push everything: thousands of actuators, kHz loops, very bright NGS, careful control of all other errors. Strehl > 0.9 in H/K band achievable.

instruments: SPHERE/IRDIS (VLT), GPI (Gemini), MagAO-X (Magellan), SCExAO (Subaru). primarily for exoplanet imaging.

## ground-layer AO

if turbulence is concentrated in the ground layer, multiple guide stars can map the ground-layer wavefront and a ground-conjugated DM can correct it over a wide field of view. **GLAO** instruments (Gemini's GLAO mode, the future Vera Rubin/LSST GLAO proposal) achieve Strehl < 0.5 but over a 1' field — useful for survey work.

## multi-conjugate AO

multiple guide stars + multiple DMs at different altitudes. each DM corrects its conjugate atmospheric layer. result: AO over a wider field than classical single-conjugate AO.

instruments: Gemini MCAO, ESO's MAD, MAVIS (planned), MORFEO (ELT first-light AO).

## the future: AO with extremely large telescopes

ELTs (E-ELT, GMT, TMT) all have AO baked into their first-light instruments. with 30-40m apertures and 6000+ actuator DMs, near-diffraction-limited performance at H-band over arcminute fields. Strehl > 0.5 at K, > 0.3 at H, low at visible.

ELTs are interferometers in disguise: their adaptive secondaries make them optically equivalent to a 30m diffraction-limited single dish, complementing the angular resolution that VLTI achieves with sparse aperture synthesis.

## see also

- [Atmospheric turbulence overview](../../02_Zettel/Theory/interf/Atmospheric turbulence overview.html)
- [Wavefront sensors](../../02_Zettel/Theory/interf/Wavefront sensors.html)
- [Deformable mirrors and tip-tilt](../../02_Zettel/Theory/interf/Deformable mirrors and tip-tilt.html)
- [Guide stars and laser guide stars](../../02_Zettel/Theory/interf/Guide stars and laser guide stars.html)
- [Fried parameter $r_0$](../../02_Zettel/Theory/interf/Fried parameter $r_0$.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
