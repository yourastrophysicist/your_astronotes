---
layout: default
title: "The phase problem in interferometry"
---

# The phase problem in interferometry

a fundamental headache: the **atmosphere randomizes the visibility phase**. for optical interferometry the corruption is on millisecond timescales; for radio it is on minute-to-hour timescales. either way, raw visibility phases are unusable on long integrations. recovering the phase, despite the atmosphere, is the central technical problem.

## what the phase encodes

the complex visibility:
$$\mathcal V(\mathbf u) = |\mathcal V| e^{i\phi}$$

amplitude $|\mathcal V|$: the fringe contrast. encodes the *shape* and *symmetric structure* of the source.

phase $\phi$: where the fringe is positioned. encodes the *asymmetric* structure — the location of the source on the sky, asymmetries in its brightness distribution.

an image cannot be reconstructed from amplitude alone; the phase carries half the information.

## the atmosphere's effect

at each telescope $i$, the atmospheric path adds a phase $\phi_{\rm atm,i}(t)$ that varies in time. the measured visibility phase between telescopes $i$ and $j$ becomes

$$\phi_{ij,\rm meas} = \phi_{ij,\rm true} + \phi_{\rm atm,i} - \phi_{\rm atm,j} + \phi_{\rm inst,ij}$$

(true visibility phase plus atmospheric path difference plus instrumental gain phase).

if I integrate the visibility for longer than the atmospheric coherence time, the phase wanders across $2\pi$ and the time-averaged complex visibility goes to zero. the *phase* is destroyed.

## why amplitude survives

if the atmosphere randomizes phase but the wave amplitude is preserved, the *time-averaged* visibility has zero phase but the *modulus* is still informative. crucial fact:

$$\langle |\mathcal V| \rangle$$

over short coherence times remains close to the true $|\mathcal V|$ even when the phase is destroyed.

this is why **fringe-tracking** and **bispectrum/closure** methods exist: they preserve information that survives the atmospheric corruption.

## three approaches to recover phase

three established techniques:

### 1. phase referencing (radio)

alternate between the science target (unknown phase) and a *nearby calibrator* (known phase, since it is a point source). the calibrator measures the atmospheric phase, which is then subtracted from the target phase.

works when:
- the calibrator is within the isoplanatic angle (so atmosphere is shared)
- the calibrator can be observed often enough to track atmospheric variations
- typical: switch every few minutes

this is the **standard radio calibration technique**, used by VLA, ALMA, etc.

### 2. phase closure (optical and radio)

the **closure phase** of three baselines is *atmosphere-independent*. add up the three visibility phases of the baselines $i$-$j$, $j$-$k$, $k$-$i$:

$$\Phi_{ijk} = \phi_{ij} + \phi_{jk} + \phi_{ki}$$

each atmospheric phase $\phi_{\rm atm,i}$ appears with opposite signs in two terms (once as part of an "outgoing" baseline, once as part of an "incoming" baseline). they cancel.

result: $\Phi_{ijk}$ depends only on the *true* visibility phases and is preserved through atmospheric noise. this is the **key technique for optical aperture-synthesis imaging**.

closure phase is not a complete substitute for individual phases (3 baselines give 1 closure relation, but I have 3 phases to recover), but combined with closure amplitudes and assumptions about source shape, it lets us reconstruct images. see [Phase closure](../../../02_Zettel/Theory/interf/Phase closure.md).

### 3. self-calibration

iterative bootstrapping: start with a model of the source (e.g. point source), compute predicted visibilities, compare with measured, update gain solutions, redo CLEAN, refine model, iterate.

works when:
- target is bright enough that the source itself has good SNR per baseline
- initial model is reasonable
- atmospheric variations are slow enough to track

self-calibration is the workhorse of modern radio imaging. for optical, fringe trackers + closure phases play similar roles.

## the typical optical procedure

1. **fringe tracking**: a fast, sensitive instrument locks onto the fringe in real time, compensating for atmospheric piston (the bulk phase) on millisecond timescales
2. **closure phase recording**: with three or more telescopes, closure phases are saved alongside visibility amplitudes
3. **image reconstruction**: from amplitudes + closure phases, with regularization (MIRA, SQUEEZE, etc.). more art than science

## the typical radio procedure

1. **phase referencing**: switch to calibrator every minute or two
2. **bandpass calibration**: flatten the frequency response
3. **flux calibration**: anchor to a primary calibrator
4. **self-calibration**: iterative refinement using the source itself
5. **CLEAN deconvolution**: produce final image

## why this is harder at optical

three reasons:

1. **atmospheric coherence time**: $\sim 10$ ms at optical, $\sim 10$ minutes at radio. so optical must do everything 100 times faster
2. **atmospheric coherence length** ($r_0$): $\sim 10$ cm at optical, $\sim 10$ km at radio. so optical baselines are limited unless using AO
3. **photon flux**: optical photon-count rates are limited; the SNR of fringe tracking and closure phase is photon-noise dominated

these three combine: optical fringe trackers must run on milliseconds with limited photons. extreme requirements.

## the modern frontier

GRAVITY (VLTI, since 2016) achieves astrometric precision of $\sim 10$ μas using:
- AO + fringe tracking on a bright guide star
- closure phases on three or four telescopes
- Bayesian image reconstruction

EHT achieves μas-resolution images using:
- atomic-clock referencing across the globe
- post-correlation phase calibration
- Bayesian + CLEAN imaging

both are spectacular demonstrations of how to get around the phase problem.

## see also

- [Phase closure](../../../02_Zettel/Theory/interf/Phase closure.md)
- [Closure amplitude](../../../02_Zettel/Theory/interf/Closure amplitude.md)
- [Self-calibration](../../../02_Zettel/Theory/interf/Self-calibration.md)
- [Adaptive optics](../../../02_Zettel/Theory/interf/Adaptive optics.md)
- [Calibration overview](../../../02_Zettel/Theory/interf/Calibration overview.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
