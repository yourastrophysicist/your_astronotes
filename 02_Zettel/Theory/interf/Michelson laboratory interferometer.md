---
layout: default
title: "Michelson laboratory interferometer"
---

# Michelson laboratory interferometer

the original amplitude-division interferometer, invented by Albert Michelson in the 1880s. **a beam splitter, two mirrors, and a detector**. one of the most influential instruments in the history of physics: it disproved the luminiferous aether (Michelson-Morley 1887), defined the metre for decades, and is the architectural basis of LIGO.

distinct from the **Michelson stellar interferometer** (1920) which uses extended optical paths to measure stellar diameters. they share a name and a inventor, but the laboratory version is amplitude-division while the stellar version is wavefront-division.

## the optical setup

a coherent source illuminates a 50/50 beam splitter. the splitter sends:
- 50% of the light to *mirror M₁* along arm 1
- 50% of the light to *mirror M₂* along arm 2

each mirror reflects the light back to the beam splitter, where the two beams recombine and exit toward a detector. one output goes to the detector; the other returns toward the source.

the OPD is determined by the *difference* of the round-trip distances:
$$\Lambda = 2 (\ell_1 - \ell_2)$$

(factor of 2 because each beam goes to its mirror and back.)

if one mirror is movable, sweeping its position by $\Delta x$ scans the OPD by $2\Delta x$. fringes pass at the detector. counting fringes: each one corresponds to $\Delta x = \lambda/2$.

## the compensating plate

the beam splitter's substrate (typically glass) introduces a small extra OPL into one arm but not the other. the *compensating plate*: an identical piece of glass placed in the *unfavoured* arm to equalize the OPL contributions. without it, the white-light fringe is shifted from the geometric zero, and the device can't easily find true zero OPD.

## the white-light fringe

with a broadband source (white light), fringes are only visible when $\Lambda$ is small ($|\Lambda| < \ell_c$ = coherence length). at exactly $\Lambda = 0$, all wavelengths interfere constructively → strong central fringe.

scanning the mirror through this region: a pattern of perhaps 5-10 visible fringes, with maximum brightness at the geometric zero. this is the **white-light fringe**, and it provides:
- an absolute zero of OPD
- a powerful tool for distance measurement: count fringes from white-light to determine relative position

## the historical significance

three landmarks:

### 1. Michelson-Morley experiment (1887)

Michelson and Morley used this device to search for the *aether wind* — Earth's motion through the supposed luminiferous aether should produce a tiny OPD shift between two perpendicular arms.

result: **null** — no aether wind detected. one of the most famous null results in physics.

led directly to:
- Lorentz contraction (ad-hoc fix)
- Einstein's special relativity (1905)

### 2. defining the metre (1960-1983)

from 1960 to 1983, the legal definition of the metre was 1 650 763.73 wavelengths of a specific Kr-86 line. this could be measured to very high precision with a Michelson interferometer.

(replaced in 1983 by the c-based definition, which is more fundamental but uses laser interferometry too.)

### 3. LIGO

the Laser Interferometer Gravitational-wave Observatory (LIGO) is a 4-km Michelson interferometer with Fabry-Perot cavities in each arm. it detects gravitational waves at strain $h \sim 10^{-21}$, corresponding to a path length change of $\sim 10^{-18}$ m on a 4-km arm.

first detection: GW150914 in September 2015. Nobel Prize 2017.

every gravitational-wave detector in the world (LIGO, Virgo, KAGRA) is a Michelson interferometer with optical refinements.

## the FTIR spectrometer

a Michelson interferometer with a *broadband* source acts as a **Fourier transform spectrometer**:
- scan the OPD over a wide range
- record intensity at the detector vs OPD
- the result is the *autocorrelation* of the source's wave amplitude
- Fourier transform → the spectrum

FTIR (Fourier-Transform InfraRed) spectroscopy is the dominant IR spectroscopy technique in chemistry. faster and more accurate than dispersive spectrometers for many applications.

## the energy-conservation puzzle

a 50/50 beam splitter on the input would naively give 50/50 on the output ports. but constructive interference at one output gives 100%, while destructive gives 0%.

resolution: there are *two* output ports (the detector port and the back-toward-source port). when the detector sees constructive, the back port sees destructive, and vice versa. *energy is conserved across the two ports*, and one port at a time can have 100% or 0%.

this is why pure Michelson is sometimes called "wasteful": half the light goes back toward the source. the [Mach-Zehnder interferometer](../../../02_Zettel/Theory/interf/Mach-Zehnder interferometer.html) uses *both* outputs and is more efficient for some applications.

## the modern variants

- **stabilized Michelson**: feedback-locked to the white-light fringe for sub-nm stability
- **Twyman-Green**: a Michelson with a flat reference and a test surface, used for optical-element testing
- **Fizeau interferometer**: a Michelson where both reflective surfaces are visible together (used in optical-shop testing)
- **LIGO-style Michelson with Fabry-Perot cavities**: 4-km arms with mirrors with R > 0.999, multiple round trips per detection

each takes the basic Michelson geometry and adapts it for a specific measurement.

## the comparison with stellar Michelson

| feature | Michelson lab | Michelson stellar |
|---|---|---|
| year | 1880s | 1920 |
| beam-splitting | half-silvered mirror | wavefront division (two outer mirrors) |
| arms | two mutually perpendicular | two beams from outer mirrors via inner ones |
| application | metrology, FTIR, GW detection | stellar diameter measurement |
| variable | mirror position | source angular size |
| modern descendant | LIGO | VLTI, CHARA |

both are called "Michelson interferometer" and both share the inventor, but they are *different physical devices*.

## see also

- [Amplitude-division interferometers](../../../02_Zettel/Theory/Amplitude-division interferometers.html)
- [Beam splitter physics](../../../02_Zettel/Theory/interf/Beam splitter physics.html)
- [Mach-Zehnder interferometer](../../../02_Zettel/Theory/interf/Mach-Zehnder interferometer.html)
- [Michelson stellar interferometer](../../../02_Zettel/Theory/interf/Michelson stellar interferometer.html)
- [Optical path difference OPD](../../../02_Zettel/Theory/interf/Optical path difference OPD.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
