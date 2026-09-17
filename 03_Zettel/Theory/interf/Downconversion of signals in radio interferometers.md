---
layout: "default"
title: "Downconversion of signals in radio interferometers"
---
{% raw %}
# Downconversion of signals in radio interferometers

BookAI gives downconversion its own chapter because it is the step that makes radio interferometry technically possible. the sky signal arrives at high radio frequency, but the electronics prefer a lower intermediate frequency.

## why downconversion is needed

astronomical radio signals may arrive at tens, hundreds, or thousands of GHz. directly amplifying, transporting, digitizing, and correlating such high-frequency signals is difficult.

so the receiver translates the signal to an intermediate frequency (IF), while preserving the phase information needed for interferometry.

## heterodyne mixing

mix the radio-frequency signal with a stable local oscillator.

use the identity:

$$\cos a\cos b=\frac{1}{2}[\cos(a-b)+\cos(a+b)]$$

let

$$a=2\pi\nu_{\rm RF}t,\qquad b=2\pi\nu_{\rm LO}t$$

then:

$$\cos(2\pi\nu_{\rm RF}t)\cos(2\pi\nu_{\rm LO}t)$$

$$=\frac{1}{2}\cos 2\pi(\nu_{\rm RF}-\nu_{\rm LO})t + \frac{1}{2}\cos 2\pi(\nu_{\rm RF}+\nu_{\rm LO})t$$

filter the unwanted term. the useful intermediate frequency is:

$$\nu_{\rm IF}=|\nu_{\rm RF}-\nu_{\rm LO}|$$

## phase preservation

if the local oscillator is stable, the phase of the astronomical signal is preserved up to a known phase shift. this is essential because visibility phase contains source position/asymmetry information.

## sidebands

mixing creates upper and lower sidebands. if not separated, emission from different sky frequencies can overlap in the IF. sideband selection or calibration is therefore part of receiver design.

## downconversion in an interferometer

pipeline:

1. antenna receives RF signal from the sky
2. low-noise amplifier boosts it
3. mixer multiplies it with LO
4. IF is selected by filtering
5. IF is amplified and digitized
6. digitized signal goes to the correlator

## role of LO stability

connected arrays distribute a coherent LO or clock reference. VLBI stations use hydrogen masers. if LO phase drifts differently at each antenna, visibility phase is corrupted.

## relation to optical direct detection

radio can downconvert and record voltages. optical interferometry usually cannot; optical/IR systems must physically combine beams before detection. this is the core difference in [Heterodyne vs direct detection](./Heterodyne%20vs%20direct%20detection.html).

## exam sentence

downconversion uses heterodyne mixing with a local oscillator to move a high-frequency sky signal to a lower intermediate frequency while preserving phase, making digitization and correlation possible.

## scientific figure

![07_Images/Interferometry/downconversion_mixer_if.svg](../../../assets/images/downconversion_mixer_if.svg)

reading cue: the mixer multiplies the sky signal by a local oscillator. after filtering, the difference frequency is the intermediate frequency, which keeps the phase information but is easier to amplify and digitize.

source: local study diagram generated from the heterodyne identity.

## see also

- [Heterodyne vs direct detection](./Heterodyne%20vs%20direct%20detection.html)
- [Radio interferometer architecture](./Radio%20interferometer%20architecture.html)
- [Two-element correlator](./Two-element%20correlator.html)
- [Digitization quantization and timing in radio interferometry](./Digitization%20quantization%20and%20timing%20in%20radio%20interferometry.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Digitization%20quantization%20and%20timing%20in%20radio%20interferometry.html" class="backlink-item">Digitization quantization and timing in radio interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Digitization%20quantization%20and%20timing%20in%20radio%20interferometry.html" class="backlink-item">Digitization quantization and timing in radio interferometry</a></li>
    <li class="backlink-item-wrap"><a href="./Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="../Figure%20bank%20-%20interferometry.html" class="backlink-item">Figure bank - interferometry</a></li>
    <li class="backlink-item-wrap"><a href="./Heterodyne%20vs%20direct%20detection.html" class="backlink-item">Heterodyne vs direct detection</a></li>
    <li class="backlink-item-wrap"><a href="./Radio%20interferometer%20architecture.html" class="backlink-item">Radio interferometer architecture</a></li>
    <li class="backlink-item-wrap"><a href="../Radio%20interferometer%20architecture.html" class="backlink-item">Radio interferometer architecture</a></li>
    <li class="backlink-item-wrap"><a href="../Two-element%20correlator.html" class="backlink-item">Two-element correlator</a></li>
  </ul>
</div>
