---
layout: "default"
title: "Michelson stellar interferometer"
---
{% raw %}
# Michelson stellar interferometer

the *first* astronomical interferometer to measure stellar diameters. Albert Michelson (1920) built a 6-meter beam-extension on the 100-inch telescope at Mt. Wilson and measured the angular diameter of Betelgeuse. the technique it pioneered — beam combination of light from separated apertures — is the template for every optical interferometer that followed.

## the design

a girder mounted on top of the Mt. Wilson 100-inch (Hooker) telescope, with two flat mirrors at adjustable separations up to 6.1 m. light from a star reflected off the two outer mirrors, traveled inward to two inner mirrors, then down to the telescope's primary, which combined them at the focal plane.

the resulting fringes were visually observed (no electronic detector). by varying the outer-mirror separation $d$, the visibility curve $V(d)$ was measured. the *first null* in $V(d)$ — where fringes disappeared — gave the angular diameter.

## the measurement

target: **Betelgeuse**, the variable red supergiant in Orion.

at $d = 0$ (small effective separation): bright fringes visible.
as $d$ increased: fringes weakened, visibility decreased.
at $d \approx 3.07$ m, fringes vanished — first null of the visibility curve.

using $\theta = 1.22 \lambda/d_{\rm null}$:
$$\theta_{\rm Betelgeuse} = 1.22 \times 575 \, \text{nm} / 3.07 \, \text{m} = 0.047''$$

this was the **first measurement** of any star's angular diameter. previously, all stars were "points" within available resolution. Michelson directly observed that Betelgeuse is resolvable.

at the assumed distance of 200 pc, $\theta = 0.047''$ implies a physical radius

$$R = \theta \cdot d = 4.7 \times 10^{-7} \cdot 200 \, \text{pc} \approx 600 R_\odot$$

confirming Betelgeuse as a red supergiant of physical scale comparable to Saturn's orbit.

## the historical significance

Michelson's measurement was a landmark:

1. **first stellar diameter measured**: confirmed the existence of "giant" stars
2. **first interferometric astronomy**: established the technique that became amplitude interferometry
3. **demonstrated the diffraction limit**: showed that interferometric techniques could push beyond single-aperture resolution

it preceded by 50+ years the renaissance of optical interferometry in the 1980s.

## why it stalled

despite the success, optical interferometry didn't develop further for 50+ years. reasons:

1. **atmospheric phase**: Michelson's setup needed perfect path-length matching. any atmospheric jitter washed out fringes. only *visual* observation of the brightest stars was practical
2. **technology limits**: no AO, no fast detectors, no automated tracking
3. **photon noise**: dim stars couldn't produce detectable fringes within the atmospheric coherence time
4. **WW2 + post-war**: research priorities elsewhere

it took until the 1970s (Labeyrie's first beam-combination experiments) and 1980s (digital correlators, AO) for optical interferometry to revive.

## the elements Michelson invented

despite the simple instrument, all the core elements of modern optical interferometry are present in 1920 Michelson:

- **separated apertures** (two mirrors on a beam) → modern: separated telescopes
- **delay-equalized paths** (the two beams traveled the same total length to the focal plane) → modern: delay lines
- **beam combiner** (the telescope primary did the combining) → modern: dedicated beam combiners
- **fringe detection** (visual fringe observation) → modern: detectors with fringe-tracking algorithms

the modern instruments are vastly more sophisticated, but the *design* is recognizably Michelson's.

## what was missing

three things modern interferometry has that Michelson didn't:

1. **closure phase**: only with three or more telescopes can you cancel atmospheric phase. Michelson had two
2. **active fringe tracking**: real-time tracking of atmospheric phase. Michelson had visual observation only
3. **adaptive optics**: AO at each telescope to flatten the wavefront. Michelson's setup was wavefront-uncorrected

so Michelson's instrument was *open-loop, snapshot, two-element*. modern instruments are *closed-loop, continuous, multi-element*. the increase in capability is enormous.

## subsequent attempts

after Michelson:
- **Anderson at Mt. Wilson** (1920s-1930s): tried to extend the technique, ran into sensitivity issues
- **Pease and Anderson** (1930s): proposed a 50-foot interferometer; never built due to mechanical and atmospheric challenges
- **Hanbury Brown's Narrabri** (1956-1972): different technique (intensity), not amplitude
- **Labeyrie's first interferometers** (1970s): I2T (Interféromètre à 2 Télescopes), then GI2T

GI2T's first results in 1985 represented the modern era of optical amplitude interferometry — 65 years after Michelson's pioneering measurement.

## see also

- [Young experiment as a stellar interferometer](./Young%20experiment%20as%20a%20stellar%20interferometer.html)
- [Components of a modern interferometer](./Components%20of%20a%20modern%20interferometer.html)
- [Stellar diameters and limb darkening](./Stellar%20diameters%20and%20limb%20darkening.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../Amplitude-division%20interferometers.html" class="backlink-item">Amplitude-division interferometers</a></li>
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../DOnofrio%20Exam%20Retake%20-%20Radio%20vs%20Optical%20Physics%20and%20Michelson%20Synthesis.html" class="backlink-item">DOnofrio Exam Retake - Radio vs Optical Physics and Michelson Synthesis</a></li>
    <li class="backlink-item-wrap"><a href="./Diffraction%20patterns%20of%20simple%20apertures.html" class="backlink-item">Diffraction patterns of simple apertures</a></li>
    <li class="backlink-item-wrap"><a href="../Diffraction%20patterns%20of%20simple%20apertures.html" class="backlink-item">Diffraction patterns of simple apertures</a></li>
    <li class="backlink-item-wrap"><a href="../Heterodyne%20vs%20direct%20detection.html" class="backlink-item">Heterodyne vs direct detection</a></li>
    <li class="backlink-item-wrap"><a href="./Michelson%20laboratory%20interferometer.html" class="backlink-item">Michelson laboratory interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Michelson%20laboratory%20interferometer.html" class="backlink-item">Michelson laboratory interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
  </ul>
</div>
