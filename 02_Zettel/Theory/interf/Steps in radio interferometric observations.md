---
layout: default
title: "Steps in radio interferometric observations"
---

# Steps in radio interferometric observations

BookAI has a practical chapter on the observing workflow. this belongs in the same mental box as calibration: a science-ready image begins before the telescope observes.

## the full workflow

1. define the science goal
2. choose interferometer and configuration
3. estimate resolution and sensitivity
4. choose observing frequency and correlator setup
5. select calibrators
6. write/submit observing proposal
7. build scheduling block
8. acquire target and calibrator data
9. inspect and flag raw data
10. calibrate
11. apply calibration to target
12. Fourier invert to dirty image
13. deconvolve
14. self-calibrate if possible
15. final imaging and science interpretation

## define science goal

ask:

- continuum or spectral line?
- required angular resolution?
- required sensitivity?
- field of view?
- polarization needed?
- time variability important?

## choose array configuration

maximum baseline sets resolution:

$$\theta\sim\frac{\lambda}{B_{\max}}$$

minimum baseline sets recoverable large angular scale:

$$\theta_{\rm LAS}\sim\frac{\lambda}{B_{\min}}$$

## estimate sensitivity

use the interferometric radiometer equation:

$$\sigma\simeq\frac{\mathrm{SEFD}}{\sqrt{N_{\rm ant}(N_{\rm ant}-1)\Delta\nu t}}$$

## calibrators

- flux calibrator: absolute brightness scale
- bandpass calibrator: frequency response
- phase calibrator: time-variable phase/gain
- polarization calibrator: leakage and angle, if needed

## scheduling block

a typical loop:

```text
flux/bandpass calibrator -> phase calibrator -> target -> phase calibrator -> target -> ...
```

phase calibrator visits track atmosphere and instrumental drift.

## raw data inspection and flagging

remove:

- RFI
- bad antennas
- bad weather intervals
- shadowed antennas
- bad channels
- correlator problems

## imaging and analysis

after calibration:

$$I_{\rm dirty}=I_{\rm true}*B_{\rm dirty}$$

then deconvolve with CLEAN/multiscale CLEAN/MEM/regularized methods. if the target is bright enough, self-calibration improves gains using the target itself.

## exam sentence

a radio interferometric observation is designed around science requirements, translated into resolution and sensitivity, observed with calibrators, then processed by flagging, calibration, Fourier inversion, deconvolution, and interpretation.

## scientific figure

<img src="{{ "/assets/images/radio_observing_workflow.svg" | relative_url }}" alt="radio_observing_workflow" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

reading cue: an interferometric observation is a chain of decisions and corrections, not a single exposure. the trustworthy image appears only after setup, calibration, flagging, imaging, and validation agree.

source: local workflow diagram generated from the standard radio-reduction sequence.

## see also

- [Calibration overview](../../../02_Zettel/Theory/interf/Calibration overview.html)
- [Bandpass calibration](../../../02_Zettel/Theory/interf/Bandpass calibration.html)
- [Flux calibration](../../../02_Zettel/Theory/interf/Flux calibration.html)
- [Phase referencing](../../../02_Zettel/Theory/interf/Phase referencing.html)
- [Self-calibration](../../../02_Zettel/Theory/interf/Self-calibration.html)
- [CLEAN algorithm](../../../02_Zettel/Theory/interf/CLEAN algorithm.html)
