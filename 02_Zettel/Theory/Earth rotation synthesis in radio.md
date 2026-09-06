---
layout: default
title: "Earth rotation synthesis in radio"
---

# Earth rotation synthesis in radio

at radio wavelengths, Earth-rotation aperture synthesis works extraordinarily well. the long coherence times, atmospheric stability, and electronic correlation all favor the technique. the standard radio observation is an 8-12 hour track with full Earth-rotation (u, v) filling.

## why radio is well-matched

three factors:

### 1. long coherence time

at cm wavelengths, atmospheric phase varies on minute-to-hour timescales (vs ms at optical). so a single visibility integration of 1-10 seconds is well within the coherence time. consecutive integrations carry meaningful (u, v) samples.

### 2. atmospheric stability over hours

while atmospheric phase varies, it is calibrated out by phase-referencing to nearby calibrators. the *systematic* bias is removed; the *random* bias is small enough to integrate over hours. so 8-12 hour tracks accumulate clean (u, v) samples without phase blowup.

### 3. electronic correlation

since the correlator runs in real time on digitized streams, every second of integration contributes a new visibility sample. unlike optical (where each integration requires the optical paths to be matched), there is no "downtime" between integrations.

## the typical observation

![Earth rotation synthesis: celestial source motion sweeping elliptical sampling tracks across the (u, v) Fourier plane over a 12-hour track.](Earth_rotation_synthesis_in_radio.svg)


a typical VLA observation:

```
Hour 0-1:    setup, slew to flux calibrator, observe
Hour 1-2:    bandpass calibrator
Hour 2-3:    flux calibrator (final)
Hour 3-11:   science target with phase calibrator every 5 min
Hour 11-12:  final flux calibrator
```

over the 8-hour science block, each baseline traces a substantial arc in the (u, v) plane. with 27 antennas (351 baselines) and ~ thousands of seconds of integration per baseline arc, the (u, v) plane is filled densely.

## the resulting (u, v) coverage

at 21 cm wavelength, VLA-A configuration:
- $B_{\max} \sim 36$ km → $u_{\max} \sim 1.7 \times 10^5$ wavelengths
- 27 baselines × ~$10^4$ seconds → $\sim 10^6$ visibility samples
- (u, v) plane is well-filled with arcs spanning multiple orders of magnitude

resulting dirty beam: tight central lobe with low sidelobes. CLEAN deconvolution recovers high-fidelity images.

## the advantage over optical

three:

### 1. dense (u, v) coverage

radio fill the (u, v) plane more uniformly than optical due to longer integrations. this means radio dirty beams have lower sidelobes than optical dirty beams.

### 2. ease of imaging

radio imaging is fundamentally more straightforward: dirty image → CLEAN → done. optical imaging often requires elaborate combination of closure phases, parametric models, and Bayesian methods.

### 3. survey power

a single radio observation can image many sources in a wide field simultaneously. the field of view is set by the *primary beam* ($\theta \sim \lambda/D_{\rm dish}$). VLA at 21 cm has 30' primary beam containing thousands of sources.

## the (u, v) ellipse formulae for radio

the basic equations are the same as for any aperture synthesis:

at hour angle $H$ and declination $\delta$:
$$u = (B_x \sin H + B_y \cos H)/\lambda$$
$$v = (-B_x \sin\delta \cos H + B_y \sin\delta \sin H + B_z \cos\delta)/\lambda$$

at radio, $\lambda$ is large so $(u, v)$ values are small in absolute terms. but baselines $B$ can be enormous. for VLA-A at 21 cm: $B/\lambda \sim 10^5$, so $(u, v) \sim 10^5$ at the longest baselines.

## the wide-bandwidth bonus

modern radio correlators handle wide bandwidths (1-8 GHz). different frequency channels see *different* spatial frequencies for the same baseline (since $u = B/\lambda$ scales with $\lambda$). so a single observation can fill (u, v) at *many spatial frequencies* simultaneously — multi-frequency synthesis.

this gives even denser effective (u, v) coverage at the cost of slightly more complex source-spectrum modeling.

## the issue: zero-spacing flux

even with great (u, v) coverage, the *zero-spacing* (single-dish flux) is *never* sampled by an interferometer. so extended emission with characteristic scales larger than the longest baseline is "resolved out."

solution: combine interferometric data with a *single-dish* total-power measurement. ALMA does this routinely: total-power maps from the 12m total-power antennas combined with interferometric data from the 12m + 7m arrays.

## see also

- [The (u, v) plane](../../02_Zettel/Theory/interf/The (u, v) plane.md)
- [Earth-rotation aperture synthesis](../../02_Zettel/Theory/interf/Earth-rotation aperture synthesis.md)
- [Connected element interferometer](../../02_Zettel/Theory/interf/Connected element interferometer.md)
- [Optimal array geometry](../../02_Zettel/Theory/interf/Optimal array geometry.md)
- [CLEAN algorithm](../../02_Zettel/Theory/interf/CLEAN algorithm.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
