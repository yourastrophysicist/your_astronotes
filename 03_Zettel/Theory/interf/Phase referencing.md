---
layout: "default"
title: "Phase referencing"
---
{% raw %}
# Phase referencing

the standard radio technique for tracking atmospheric and instrumental phase drift during an observation. observe a nearby compact calibrator periodically, transfer the measured phase to the science target. simple in principle, requires care in practice.

## the principle

at radio wavelengths, atmospheric phase varies on timescales of seconds (mm) to hours (cm). the *exact* phase at any instant cannot be predicted; it must be measured.

procedure:
1. observe the science target for $\sim$ 5-10 min
2. observe a phase calibrator (compact source within ~5°) for $\sim$ 1-2 min
3. assume the calibrator's true position is known
4. measure the calibrator's *observed* phase
5. compute the phase error: $\Delta\phi = \phi_{\rm meas} - \phi_{\rm expected}$
6. apply $-\Delta\phi$ to all the target visibilities since the last calibrator observation
7. switch back to target, repeat

a typical observing pattern is `target target target target calibrator target target target target calibrator ...` with the cycle time set by the atmospheric coherence time.

## the cycle time

for a given frequency band:
- **cm**: 10-30 min cycle (slow atmosphere)
- **mm**: 1-5 min cycle (fast atmosphere)
- **VLBI at high frequency**: 30 sec - 2 min cycle

the cycle time is a tradeoff: longer cycle = more time on target, but worse phase tracking. modern observations use **fast switching** between target and calibrator at mm wavelengths.

## the calibrator selection

a good phase calibrator:
- **compact**: unresolved by the array (so visibility amplitude is constant)
- **bright**: high SNR per integration ($\sim 100 \sigma$ in 1 minute)
- **close to target**: within $\theta_0$ (isoplanatic angle, typically a few degrees at radio)
- **with measured position**: known to better than $\sim 0.01$ arcsec

NRAO and ESO maintain databases of vetted calibrators for each band. selecting requires balancing brightness vs proximity.

## the isoplanatic angle at radio

at cm wavelengths, the radio-isoplanatic angle is typically $\sim 5°$. so phase calibrators within 5° of the target work well. at mm, the patch is smaller — typically $\sim 1°$ — so closer calibrators are needed, and there are fewer to choose from.

## limits and breakdowns

when phase referencing struggles:
- **no nearby calibrator**: forced to use a more distant one, with reduced isoplanatic-correction quality
- **sparse arrays**: not enough baselines to measure phase well per integration. solutions: longer integrations on calibrator, or self-calibration
- **stationary clouds**: convective cells over the array don't move much, so different antennas see different phases that don't switch

## the self-calibration alternative

if the science target is bright enough to detect on individual baselines:
- skip phase referencing entirely
- run self-calibration on the target itself
- iterate the model + phase solution

self-cal can recover phase information *better* than phase-referencing for bright targets, since the source itself has full SNR. but for faint targets where individual baselines aren't detectable per integration, phase referencing is the only option.

modern radio practice: phase referencing for setup, then self-calibration to refine.

## the dual-feed approach (mm-wave)

at ALMA, more sophisticated phase referencing uses **water vapor radiometers** at each antenna. these continuously monitor the atmospheric water column, providing a *real-time* phase correction even between phase-cal observations.

this is "fast atmospheric phase correction" and dramatically improves the phase stability between calibrator visits.

## the precision

with good phase referencing:
- 21 cm: ~1° rms phase error per minute
- mm: ~5° rms (worse atmosphere)
- VLBI: ~10° rms (worse still)

these correspond to position errors of $\sim$ mas at cm, $\sim$ arcsec at mm, $\sim$ tens of mas at VLBI. for sub-mas astrometry, even tighter constraints are needed (and additional techniques like gated VLBI, multi-frequency referencing).

## see also

- [Calibration overview](./Calibration%20overview.html)
- [Self-calibration](./Self-calibration.html)
- [Bandpass calibration](./Bandpass%20calibration.html)
- [Flux calibration](./Flux%20calibration.html)
- [The phase problem in interferometry](./The%20phase%20problem%20in%20interferometry.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (11)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Bandpass%20calibration.html" class="backlink-item">Bandpass calibration</a></li>
    <li class="backlink-item-wrap"><a href="../Bandpass%20calibration.html" class="backlink-item">Bandpass calibration</a></li>
    <li class="backlink-item-wrap"><a href="../Calibration%20overview.html" class="backlink-item">Calibration overview</a></li>
    <li class="backlink-item-wrap"><a href="./Calibration%20overview.html" class="backlink-item">Calibration overview</a></li>
    <li class="backlink-item-wrap"><a href="../Flux%20calibration%20in%20radio.html" class="backlink-item">Flux calibration in radio</a></li>
    <li class="backlink-item-wrap"><a href="./Flux%20calibration%20in%20radio.html" class="backlink-item">Flux calibration in radio</a></li>
    <li class="backlink-item-wrap"><a href="./Self-calibration.html" class="backlink-item">Self-calibration</a></li>
    <li class="backlink-item-wrap"><a href="../Self-calibration.html" class="backlink-item">Self-calibration</a></li>
    <li class="backlink-item-wrap"><a href="../Steps%20in%20radio%20interferometric%20observations.html" class="backlink-item">Steps in radio interferometric observations</a></li>
    <li class="backlink-item-wrap"><a href="./Steps%20in%20radio%20interferometric%20observations.html" class="backlink-item">Steps in radio interferometric observations</a></li>
  </ul>
</div>
