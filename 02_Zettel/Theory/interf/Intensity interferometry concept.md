---
layout: default
title: "Intensity interferometry concept"
---

# Intensity interferometry concept

a different beast from amplitude interferometry. correlate the *intensity fluctuations* at two telescopes rather than the wave amplitudes. the resulting "intensity coherence" carries the same source-size information as amplitude visibility, but the technique is much *less* sensitive to atmospheric phase corruption.

## the basic idea

amplitude interferometry: combine $E_1, E_2$ at a beam combiner, observe interference. the visibility is $\langle E_1^* E_2 \rangle$ — sensitive to the wave's **phase relationship** between the two telescopes.

intensity interferometry: separately detect $I_1 = |E_1|^2$ and $I_2 = |E_2|^2$ at each telescope, *electronically* correlate the intensity fluctuations:

$$C_{12} = \langle (I_1 - \langle I_1 \rangle)(I_2 - \langle I_2 \rangle) \rangle$$

this is sensitive to **second-order coherence** — bunching of photons due to thermal-source statistics — not to wave phase.

## why it works

Hanbury Brown and Twiss (1956) showed that for a thermal source (any star), the intensity fluctuations at two separated points are *correlated* with magnitude:

$$\langle \Delta I_1 \Delta I_2 \rangle / \langle I \rangle^2 = |\gamma_{12}|^2$$

where $|\gamma_{12}|$ is the **same complex degree of spatial coherence** as in amplitude interferometry. so the *modulus* (squared) of the visibility is encoded in the intensity correlation.

## the great practical advantage

the intensity correlation is **insensitive to atmospheric phase corruption**. why? because:

1. atmospheric phase is added to $E$, but cancels when computing $I = |E|^2$
2. so each $I_i$ is *not* corrupted by atmospheric phase
3. correlation of two unprotected $I_i$ measurements is then genuine source information

this means intensity interferometry can use *very long baselines* with *non-cohrent* timing. no delay lines needed. no fringe trackers. no atomic clocks across continents.

it can even work on the open ground with two cheap photometric telescopes — provided we can correlate signals fast enough.

## the great practical disadvantage

intensity interferometry has *terrible* sensitivity. it scales with the source intensity *squared* rather than *linearly* (which is the amplitude case). so a source visible at $V = 10$ for amplitude interferometry needs a 100× longer integration time for intensity interferometry to match SNR.

quantitatively: for amplitude interferometry, SNR $\sim V \sqrt{N_{\rm photons}}$. for intensity interferometry, SNR $\sim V^2 \cdot \tau \cdot N_{\rm photons}/\Delta\nu$ where $\Delta\nu$ is the detection bandwidth. typically the latter is much worse.

so intensity interferometry only works for **bright sources**. brightest stars, $V < 6$ or so.

## the Narrabri stellar interferometer

the technique's prime example. **Narrabri** (Australia, 1965-1972) used two parabolic light buckets (each 6.5 m diameter) on a 188-m circular railway track. measurements:

- 32 stellar diameters, with $\sim 1\%$ precision
- the first systematic catalog of stellar angular diameters
- including A-type stars, supergiants, hot stars

Narrabri's results stood for decades; many of its diameters remain the best measurements until recent CHARA-class amplitude interferometers caught up.

## modern revival: IACT arrays

intensity interferometry has been resurrected by **gamma-ray IACT arrays** (Cherenkov telescopes) that already operate as high-throughput optical photon detectors at night when there are no Cherenkov flashes.

- **VERITAS**: tested intensity interferometry as a side-mode in the 2010s, demonstrating sensitivity to bright stars
- **CTA (Cherenkov Telescope Array)**: planning systematic intensity interferometry observations
- **MAGIC**: similar tests

with arrays of ~10-20 large dishes spread over hundreds of meters, modern intensity interferometry can measure stellar diameters of fainter stars and image stellar surfaces.

## the quantum interpretation

at first, HBT correlations were puzzling: why should photons from a thermal source bunch together? the classical wave picture explains it (intensity fluctuations of a coherent superposition), but the *quantum* version is also illuminating.

quantum: for a thermal state of light, the second-order coherence function

$$g^{(2)}(0) = 2$$

(twice the Poisson-process value of 1). this means thermal photons are *more* likely to come in pairs than uncorrelated photons. a single-photon state has $g^{(2)}(0) = 0$ (anti-bunching, never pairs); a coherent (laser) state has $g^{(2)}(0) = 1$.

stellar light is thermal → bunched, $g^{(2)}(0) = 2$. the bunching is what HBT detects. observed across separated telescopes, it preserves spatial coherence information.

## the 1956 controversy

Hanbury Brown and Twiss's 1956 demonstration was *intensely* controversial because many physicists couldn't accept that intensity (rather than wave amplitude) could carry interferometric information. some argued the technique violated quantum mechanics (it doesn't).

resolution: the technique works *both* classically and quantum-mechanically. it measures a real, observable correlation. modern quantum optics built on HBT's effect to develop the entire field of quantum optics.

## what intensity interferometry tells us

since the observable is $|\gamma_{12}|^2$ (squared modulus of visibility), intensity interferometry gives:

- **stellar angular diameters** (the canonical use)
- **surface brightness distributions** (limb darkening, hot spots) for the brightest stars
- **binaries** with separated components

it does *not* give:
- visibility phase (parity ambiguity, like basic speckle interferometry)
- complete imaging without additional priors
- faint-source measurements

## the calibration

intensity interferometers calibrate by measuring an unresolved (or known-diameter) reference star. the "transfer function" of the technique is well-understood.

## see also

- [Hanbury Brown Twiss effect](../../../02_Zettel/Theory/interf/Hanbury Brown Twiss effect.md)
- [Narrabri stellar interferometer](../../../02_Zettel/Theory/interf/Narrabri stellar interferometer.md)
- [Why intensity interferometry escapes atmospheric phase](../../../02_Zettel/Theory/interf/Why intensity interferometry escapes atmospheric phase.md)
- [Sensitivity and modern revival](../../../02_Zettel/Theory/interf/Sensitivity and modern revival.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
