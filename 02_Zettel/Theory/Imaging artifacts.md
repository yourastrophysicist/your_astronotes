---
layout: default
title: "Imaging artifacts"
---

# Imaging artifacts

the visual signatures of imperfect interferometric data, calibration, or deconvolution. recognizing artifacts is half of interpreting an interferometric image. each artifact has a distinct cause and a specific fix.

## the common artifacts

### sidelobes

caused by: incomplete (u, v) coverage. each true source produces a *dirty* response that includes both the source itself and its sidelobe pattern.

look like: ridges, rings, or X-shaped patterns radiating outward from bright sources. each ring is at a regular distance from the source.

fix: longer integration (better Earth-rotation coverage), CLEAN deconvolution, or use of a "clean beam" rather than dirty beam.

### "negative bowls"

caused by: missing zero-spacing flux (the array doesn't measure the source's total flux). the inversion of the (u, v) data assumes total flux is constant, but at the largest scales there's nothing to constrain it.

look like: extended negative regions surrounding bright extended emission. the image goes below zero in a ring around the source.

fix: combine with single-dish total-power measurement (ALMA's ACA or zero-spacing interferometers do this routinely).

### "ringing"

caused by: sharp truncation of the (u, v) plane at the longest baseline. produces oscillating Gibbs-like artifacts at all spatial frequencies.

look like: concentric rings or oscillating patterns at the outer edges of compact sources.

fix: tapering the (u, v) plane (down-weighting the longest baselines), use of multi-scale CLEAN.

### primary-beam attenuation

caused by: the antenna's primary beam falls off away from pointing center. sources at the edge of the field appear dimmer than they should be.

look like: a gradient across the image, with sources fading toward the edges.

fix: divide the image by the primary beam pattern (post-imaging), or use mosaicking to combine multiple pointings.

### faceting errors

caused by: the inverse FFT of (u, v) data assumes a flat sky over the field of view. for very wide fields, this is wrong.

look like: distorted structure in the outer regions of the image.

fix: use a wide-field imaging mode (CASA's `tclean` with `gridder='wproject'` or similar).

### overcleaned images

caused by: CLEAN run for too many iterations, picking up noise as "clean components."

look like: a mottled, "staticky" appearance of the image with many small spurious sources scattered around.

fix: stop CLEAN earlier; use a noise-threshold stopping criterion; mask CLEAN to the actual source region.

### undercleaned images

caused by: CLEAN run for too few iterations, leaving residual sidelobes.

look like: clear sidelobe patterns, especially around bright sources.

fix: more CLEAN iterations.

### bright-source contamination

caused by: a bright source elsewhere in the field has its sidelobes overlapping with the science target.

look like: residual ringing or excess noise near the science target, even after CLEAN.

fix: include the bright source in the CLEAN model; mask it explicitly; or move the pointing center.

### radio-frequency interference (RFI)

caused by: terrestrial signals contaminating data (cell phones, GPS, etc.).

look like: streaks, lines, or spotty contamination in specific frequency channels.

fix: pre-imaging flagging of RFI-contaminated channels with AOFlagger or CASA's `flagdata`.

### atmospheric phase residual

caused by: poor phase calibration leaves residual phase errors that decorrelate the image at high spatial frequencies.

look like: blurring of compact sources, especially at high frequencies.

fix: better phase calibration (more frequent calibrator visits, self-calibration, water vapor radiometer corrections).

## diagnosing artifacts

<img src="{{ "/assets/images/Imaging_artifacts.svg" | relative_url }}" alt="Diffraction Airy pattern showing concentric sidelobes that produce imaging artifacts when sampling is incomplete." class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />


three diagnostic plots:

1. **dirty image**: shows raw (u, v)-inversion artifacts (sidelobes, ringing). compare to expected dirty beam
2. **residual image after CLEAN**: should look like noise. structured residuals indicate problems
3. **(u, v) plot**: shows where (u, v) coverage is bad. correlates with image artifacts

## prevention

best practices:
- adequate (u, v) coverage from the start (proper integration time, configurations)
- careful calibration (bandpass + flux + phase)
- conservative CLEAN (gain ~ 0.1, mask, stop at noise floor)
- combine with single-dish data for extended emission
- visualize at every step

## see also

- [CLEAN algorithm](../../02_Zettel/Theory/interf/CLEAN algorithm.html)
- [Calibration overview](../../02_Zettel/Theory/interf/Calibration overview.html)
- [Dirty beam and dirty image](../../02_Zettel/Theory/interf/Dirty beam and dirty image.html)
- [Self-calibration](../../02_Zettel/Theory/interf/Self-calibration.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
