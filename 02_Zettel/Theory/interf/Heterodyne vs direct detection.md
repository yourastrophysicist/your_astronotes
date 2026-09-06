---
layout: default
title: "Heterodyne vs direct detection"
---

# Heterodyne vs direct detection

two fundamentally different ways to combine the signals from interferometer telescopes. **heterodyne** mixes the signal with a local oscillator to bring it down to a manageable frequency where it can be recorded and correlated electronically. **direct detection** combines the actual electromagnetic waves at a beam combiner. radio uses heterodyne (mostly); optical/IR uses direct detection.

## heterodyne (the radio approach)

at each antenna, the incoming radio signal at frequency $\nu_{\rm RF}$ is mixed with a local oscillator (LO) at $\nu_{\rm LO}$. the resulting signal at the **intermediate frequency**

$$\nu_{\rm IF} = \nu_{\rm RF} - \nu_{\rm LO}$$

is at much lower frequency, easy to amplify, digitize, and record. the **phase information of the incoming signal is preserved** in the IF signal (modulo a shift by $\nu_{\rm LO} \cdot t$).

so: each antenna independently produces a digital data stream at IF that can be transferred (via cables, fiber, or satellite link) to a central correlator. the correlator multiplies the signals from pairs of antennas and time-averages — this is the **visibility**.

key feature: **antennas can be arbitrarily far apart**. for VLBI, antennas on different continents record their data with atomic-clock timing, then ship the data to a central correlator (or process online via cloud-connected facilities).

## direct detection (the optical approach)

at optical/IR wavelengths, $\nu \sim 10^{14}$-$10^{15}$ Hz. no electronic local oscillator can run that fast — the technology simply does not exist for stable, low-noise oscillators above $\sim 10^{12}$ Hz.

so optical interferometers must combine the *actual electromagnetic waves* at a beam combiner. light from each telescope travels through a real optical path (fiber, free space, evacuated tube) to a central facility, where the beams overlap on a beam combiner (a half-silvered mirror or fiber coupler) and the resulting interference pattern is detected.

key constraints:

- **path length matching**: the optical paths from each telescope to the combiner must be equalized to within the **coherence length** ($\sim 10$-100 μm at optical). delay lines (movable mirrors on tracks) make this happen
- **mechanical stability**: vibrations, thermal drifts, refractive-index changes — all corrupt the path
- **distance limits**: the longer the optical path from telescope to combiner, the more difficult. baselines $\gtrsim 1$ km would require very long beam tunnels and become impractical

so optical interferometry maxes out at baselines of a few hundred meters. radio interferometry has Earth-diameter baselines.

## why heterodyne dominates radio

three reasons:

1. **lower frequency = easier electronics**: at GHz, transistors and amplifiers work. at THz, they don't
2. **digitization preserves phase**: once the signal is digital, you can correlate baselines via numerical multiplication. no analog beam combiner needed
3. **logistically scalable**: you can ship hard drives between continents (the original VLBI), or stream data over fiber for real-time correlation

## why direct detection is the only optical option

three reasons:

1. **no LO at optical frequencies**: physics doesn't allow it (yet)
2. **photon-counting regime**: at low light levels, every photon is precious. heterodyne mixing introduces extra noise (the "quantum limit" $h\nu/k_B$, equivalent to a system temperature $\sim 10^4$ K at optical wavelengths). direct detection is photon-noise-limited; heterodyne would be hopeless
3. **bandwidth**: optical sources have $\Delta\nu \sim 10^{14}$ Hz of *useful* bandwidth. heterodyne at optical wavelengths could only sample $\sim 10^9$ Hz of that, throwing away most of the photons

## the boundary: sub-mm/THz

between radio and optical there is the sub-mm and THz regime where the choice gets interesting:

- **ALMA Band 3 (100 GHz)**: heterodyne with cryogenic SIS mixers. quantum-limited noise temperature $\sim h\nu/k_B = 5$ K, achievable in practice ~10x worse
- **ALMA Band 10 (1 THz)**: heterodyne becomes increasingly hard. SIS mixers near their physical limit
- **far-IR space (Herschel, SOFIA)**: heterodyne at low THz, direct detection at higher frequencies

THz astronomy is a crossover regime where direct detection (bolometers, MKIDs) competes with heterodyne (HEB mixers). recent advances in superconducting detectors are tipping the balance toward direct detection.

## the role of LO stability

heterodyne requires an LO that is *phase-coherent* across all antennas. for connected arrays (VLA, ALMA), a single H-maser feeds all antennas via fiber. for VLBI, each station has its own atomic clock; phase coherence is achieved via post-correlation calibration.

the precision needed: $\sim 1$ part in $10^{14}$ for VLBI (atomic clock level). achievable with hydrogen masers; not achievable with quartz oscillators.

## the implications for the (u, v) plane

both approaches measure the same complex visibility $\mathcal V(\mathbf u)$. the difference is in *which baselines are accessible*:

- **heterodyne (radio)**: arbitrarily long baselines, intercontinental
- **direct (optical)**: limited by the longest beam path you can build, $\sim 100$-300 m

so optical interferometers operate at *much shorter baselines* than radio, which is partially compensated by the *much shorter wavelengths*. for $\theta_{\rm res} = \lambda/B$:

- VLTI K-band: $\lambda = 2 \mu$m, $B = 130$ m → $\theta = 3$ mas
- VLA L-band: $\lambda = 21$ cm, $B = 36$ km → $\theta = 1.2''$
- EHT 230 GHz: $\lambda = 1.3$ mm, $B = 10000$ km → $\theta = 25 \mu$as

EHT achieves the highest resolution by combining the best of both worlds: short wavelengths *and* long baselines.

## BookAI expansion

BookAI gives the actual downconversion algebra. heterodyne mixing uses:

$$\cos a\cos b=\frac{1}{2}[\cos(a-b)+\cos(a+b)]$$

with

$$a=2\pi\nu_{\rm RF}t,\qquad b=2\pi\nu_{\rm LO}t$$

so the mixer produces both sum and difference frequencies:

$$\frac{1}{2}\cos 2\pi(\nu_{\rm RF}-\nu_{\rm LO})t+\frac{1}{2}\cos 2\pi(\nu_{\rm RF}+\nu_{\rm LO})t$$

filtering keeps the intermediate frequency:

$$\nu_{\rm IF}=|\nu_{\rm RF}-\nu_{\rm LO}|$$

this also introduces the idea of **sidebands**: both upper and lower sky frequencies can map into the same IF unless the receiver selects or calibrates them. the phase is preserved only if the LO is stable, which is why connected arrays distribute coherent references and VLBI uses hydrogen masers.

see [Downconversion of signals in radio interferometers](../../../02_Zettel/Theory/interf/Downconversion of signals in radio interferometers.md) for the full BookAI version.

## scientific figure

![downconversion_mixer_if](../../../assets/images/downconversion_mixer_if.svg)

reading cue: radio interferometry can preserve phase electronically because heterodyne detection moves the signal down to a manageable frequency. optical interferometry usually has to combine the light itself before detection.

source: local study diagram generated from the heterodyne identity.

## see also

- [Aperture synthesis principle](../../../02_Zettel/Theory/interf/Aperture synthesis principle.md)
- [Radio astronomy basics](../../../02_Zettel/Theory/interf/Radio astronomy basics.md)
- [Radio interferometer architecture](../../../02_Zettel/Theory/interf/Radio interferometer architecture.md)
- [Components of a modern interferometer](../../../02_Zettel/Theory/interf/Components of a modern interferometer.md)
- [VLTI Very Large Telescope Interferometer](../../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
