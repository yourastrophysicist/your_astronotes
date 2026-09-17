---
layout: "default"
title: "CHARA array"
---
{% raw %}
# CHARA array

the **Center for High Angular Resolution Astronomy** array on Mt. Wilson, California. six 1m telescopes, baselines 33m to 330m, the workhorse for stellar surface imaging at sub-mas resolution. operated by Georgia State University since 2002.

## the architecture

- **6 × 1m telescopes** in a Y-shape configuration
- baselines: 33-331 m, covering all directions in the (u, v) plane
- delay lines: 6 cat's-eye delay lines in air-conditioned vacuum tunnels
- beam combiners: multiple instruments (CLASSIC, MIRC, MIRC-X, MYSTIC, JouFLU, PAVO)
- tip-tilt corrections at each telescope (no high-order AO)

## why six telescopes

with $N = 6$ telescopes:
- $N(N-1)/2 = 15$ unique baselines simultaneously
- $(N-1)(N-2)/2 = 10$ closure phases simultaneously
- $N(N-3)/2 = 9$ closure amplitudes simultaneously

this is enough simultaneous information for **direct image reconstruction** of moderately-complex sources. CHARA is *the* facility for resolved-stellar-surface imaging because it has both the resolution (long baselines) and the (u, v) coverage to make images.

## the science instruments

### CLASSIC (formerly the original combiner)

two-beam visible-band combiner. now mostly historical; replaced by MIRC-X.

### MIRC (Michigan Infra-Red Combiner) and MIRC-X

H-band ($\lambda = 1.65$ μm) and J-band ($\lambda = 1.25$ μm) image-plane combiner. all six beams combined simultaneously.

flagship science: stellar surface imaging:
- Altair: oblateness from rapid rotation
- Vega: pole-on view, gravity darkening
- Betelgeuse: surface features, "hot spots" or large convective cells
- Algol triple: orbital geometry of the eclipsing system

MIRC-X spectral resolution: low (R = 30-200) with prism, high (R = 1000-4000) with grism.

### MYSTIC

K-band combiner (newer instrument, since ~2020). similar to MIRC-X but at K. extends imaging to cooler stars.

### PAVO

PAlomar testbed-Visible-band combiner. visible-light operations, complementary to IR instruments. high spectral resolution.

### JouFLU

simpler 4-beam combiner used for fast surveys and binary detection.

## the resolution

at H-band ($\lambda = 1.65$ μm) on a 330m baseline:
$$\theta = \lambda/B = 1.65 \, \mu\text{m}/(330 \, \text{m}) = 5 \times 10^{-9}$$ rad $= 1.0$ mas

so CHARA achieves *sub-milliarcsecond* angular resolution — the highest resolution of any optical interferometer.

at K-band: $\theta = 1.4$ mas at maximum baseline.

## the science legacy

CHARA has produced (a sample):

- **Imaging Altair's surface** (Monnier et al. 2007): oblateness, gravity darkening due to rotation
- **Imaging Vega pole-on** (Monnier et al. 2012): pole-on view, dust ring detection
- **Altair pulsation** (Le Bouquin et al. 2018): direct detection of acoustic modes
- **Imaging Betelgeuse during great dimming** (2020): surface variability, dust formation
- **Diameters and effective temperatures** of hundreds of stars: precision $T_{\rm eff}$ scale anchored by CHARA
- **Binary star orbits**: dozens of dynamical mass measurements

these are *direct images*, not just visibility curves. CHARA's combination of long baselines and many telescopes makes it unique.

## the limits

three:

### 1. small dishes

each 1m telescope collects much less light than a VLTI UT. CHARA targets are limited to bright stars, $H \lesssim 8$.

### 2. no AO

CHARA doesn't have AO at each telescope (only tip-tilt). so each 1m aperture is "seeing-limited" — but $r_0 \sim 60$ cm at K, so a 1m dish is mostly within $r_0$. less of an issue than for an 8m without AO.

### 3. no thermal IR

CHARA operates at H, K, and visible; no thermal-IR coverage. for thermal sources (warm dust, mass-loss envelopes), VLTI/MATISSE is the better instrument.

## the future: CHARA upgrades

ongoing improvements:
- better detectors at all instruments
- improved fringe-tracking sensitivity
- adaptive optics retrofitted to a few telescopes (in progress)
- extended baselines proposed (but limited by Mt. Wilson terrain)

## comparison with VLTI

CHARA is the resolution king; VLTI is the sensitivity king. they are complementary instruments:

| feature | CHARA | VLTI |
|---|---|---|
| max resolution | 0.4 mas (H-band) | 3 mas (K-band) |
| sensitivity | $H \sim 8$ | $K \sim 12$ |
| (u, v) coverage | 6 simultaneous baselines | 6 baselines |
| imaging fidelity | excellent (many baselines) | good |
| science niche | stellar surface imaging | faint-target astrometry |

modern interferometric science papers often combine CHARA's high-resolution images with VLTI's precise astrometry.

## see also

- [Components of a modern interferometer](./Components%20of%20a%20modern%20interferometer.html)
- [VLTI Very Large Telescope Interferometer](./VLTI%20Very%20Large%20Telescope%20Interferometer.html)
- [Stellar surface imaging](./Stellar%20surface%20imaging.html)
- [Stellar diameters and limb darkening](./Stellar%20diameters%20and%20limb%20darkening.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (22)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="../Beam%20combiners.html" class="backlink-item">Beam combiners</a></li>
    <li class="backlink-item-wrap"><a href="./Binary%20star%20orbits.html" class="backlink-item">Binary star orbits</a></li>
    <li class="backlink-item-wrap"><a href="../Binary%20star%20orbits.html" class="backlink-item">Binary star orbits</a></li>
    <li class="backlink-item-wrap"><a href="./COAST%20Cambridge%20Optical%20Aperture%20Synthesis%20Telescope.html" class="backlink-item">COAST Cambridge Optical Aperture Synthesis Telescope</a></li>
    <li class="backlink-item-wrap"><a href="../COAST%20Cambridge%20Optical%20Aperture%20Synthesis%20Telescope.html" class="backlink-item">COAST Cambridge Optical Aperture Synthesis Telescope</a></li>
    <li class="backlink-item-wrap"><a href="./Components%20of%20a%20modern%20interferometer.html" class="backlink-item">Components of a modern interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Components%20of%20a%20modern%20interferometer.html" class="backlink-item">Components of a modern interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Future%20ground-based%20optical.html" class="backlink-item">Future ground-based optical</a></li>
    <li class="backlink-item-wrap"><a href="./Future%20ground-based%20optical.html" class="backlink-item">Future ground-based optical</a></li>
    <li class="backlink-item-wrap"><a href="./Large%20Binocular%20Telescope%20LBT.html" class="backlink-item">Large Binocular Telescope LBT</a></li>
    <li class="backlink-item-wrap"><a href="../Large%20Binocular%20Telescope%20LBT.html" class="backlink-item">Large Binocular Telescope LBT</a></li>
    <li class="backlink-item-wrap"><a href="../NPOI%20Navy%20Prototype%20Optical%20Interferometer.html" class="backlink-item">NPOI Navy Prototype Optical Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./NPOI%20Navy%20Prototype%20Optical%20Interferometer.html" class="backlink-item">NPOI Navy Prototype Optical Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./Pulsating%20stars%20and%20Mira%20variables.html" class="backlink-item">Pulsating stars and Mira variables</a></li>
    <li class="backlink-item-wrap"><a href="../Pulsating%20stars%20and%20Mira%20variables.html" class="backlink-item">Pulsating stars and Mira variables</a></li>
    <li class="backlink-item-wrap"><a href="../Stellar%20diameters%20and%20limb%20darkening.html" class="backlink-item">Stellar diameters and limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20diameters%20and%20limb%20darkening.html" class="backlink-item">Stellar diameters and limb darkening</a></li>
    <li class="backlink-item-wrap"><a href="../Stellar%20surface%20imaging.html" class="backlink-item">Stellar surface imaging</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20surface%20imaging.html" class="backlink-item">Stellar surface imaging</a></li>
    <li class="backlink-item-wrap"><a href="./VLTI%20Very%20Large%20Telescope%20Interferometer.html" class="backlink-item">VLTI Very Large Telescope Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../VLTI%20Very%20Large%20Telescope%20Interferometer.html" class="backlink-item">VLTI Very Large Telescope Interferometer</a></li>
  </ul>
</div>
