---
layout: default
title: "Why intensity interferometry escapes atmospheric phase"
---

# Why intensity interferometry escapes atmospheric phase

the fundamental advantage of HBT-style intensity interferometry over amplitude interferometry. the atmospheric phase corruption that plagues optical interferometry is **completely irrelevant** for intensity measurements. understanding why is the key insight.

## the math

amplitude interferometry combines the *fields* $E_1, E_2$ from two telescopes:
$$\mathcal V = \langle E_1^* E_2 \rangle$$

at telescope $i$, the *measured* field is the source field times the atmospheric transfer function:
$$E_{i, \rm meas} = E_{i, \rm source} \cdot e^{i\phi_{i, \rm atm}}$$

substituting:
$$\mathcal V_{\rm meas} = \langle E_1^* E_2 \rangle_{\rm source} \cdot e^{-i \phi_{1, \rm atm}} e^{i \phi_{2, \rm atm}} = \mathcal V_{\rm source} \cdot e^{i \Delta\phi_{\rm atm}}$$

the atmospheric phase difference $\Delta\phi_{\rm atm}$ corrupts the visibility. on integration timescales longer than the coherence time, $\Delta\phi_{\rm atm}$ randomizes and the average visibility magnitude is reduced (or zeros out).

## the intensity case

![Immunity of intensity interferometry to atmospheric phase turbulence because wave phases are discarded before signal multiplication.](Why_intensity_interferometry_escapes_atmospheric_phase.png)


now compute the *intensities*:
$$I_i = |E_{i, \rm meas}|^2 = |E_{i, \rm source}|^2 \cdot |e^{i \phi_{i, \rm atm}}|^2 = |E_{i, \rm source}|^2$$

**the atmospheric phase cancels** in $I = |E|^2$. each telescope's intensity is unaffected by atmospheric phase corruption. only the source matters.

so when we compute the intensity correlation:
$$C_{12} = \langle I_1 I_2 \rangle - \langle I_1 \rangle \langle I_2 \rangle$$

the result depends only on source-side properties — specifically, on the modulus squared of the source's spatial coherence:
$$C_{12} \propto |\gamma_{\rm source}^{(1)}(\mathbf B)|^2$$

**the atmosphere is gone**. measuring $C_{12}$ at multiple baselines traces $|\gamma|^2$ vs $\mathbf B$, recovering source structure exactly as amplitude interferometry would, but without phase-stability requirements.

## intuitive picture

think of a bright star. each telescope sees:
- a slowly-varying mean intensity
- rapid fluctuations from photon bunching (spatial coherence) and atmospheric scintillation

the photon-bunching fluctuations are *correlated* between two telescopes within the coherence area; the scintillation fluctuations are *not* (atmosphere is different at the two telescopes).

so when I cross-correlate the intensities, the bunching contribution survives (correlated), the scintillation contribution averages out (uncorrelated). the residual is the bunching-induced HBT signal.

## the key requirement: bandwidth and timing

intensity interferometry doesn't need optical-phase stability, but it *does* need:

1. **time synchronization** between the two telescopes' photon detectors at $\lesssim 1$ ns (so we know which photons were "simultaneous")
2. **bandwidth**: detection electronics must respond on the photon-bunching timescale ($\sim 1/\Delta\nu \sim 10^{-14}$ s for broadband visible light, or $\sim$ ns for a narrow filter)

amplitude interferometry needs optical-path stability at $\lambda$ ($\sim$ μm at optical) and time-of-arrival of photons. intensity interferometry only needs the latter (at much weaker tolerance, ns rather than fs).

## what we sacrifice

intensity interferometry pays a steep price for atmospheric immunity:

### 1. SNR penalty

amplitude interferometry: SNR $\propto V \cdot \sqrt{N_{\rm photons}}$
intensity interferometry: SNR $\propto V^2 \cdot N_{\rm photons}/\sqrt{\Delta\nu \tau}$

for a fully-resolved source ($V = 0.1$): amplitude needs $100\times$ more photons; intensity needs $10000\times$ more. the difference compounds.

so intensity interferometry is restricted to **bright stars** ($V < 6$ or so).

### 2. only $|V|^2$

the intensity correlation gives the *squared modulus* of the visibility. phase information is lost — there's a parity ambiguity, just like basic speckle interferometry.

### 3. broadband detection

to maximize photon throughput, intensity interferometry uses broad spectral filters. this complicates the analysis (different wavelengths have different atmospheres) and limits spectral resolution.

## who wins?

| feature | amplitude interferometry | intensity interferometry |
|---|---|---|
| baselines | up to $\sim$ km (optical) | unlimited |
| sensitivity | better | worse by $\sim V \sqrt{N}$ |
| atmospheric immunity | needs phase tracking | not affected |
| phase information | full (with closure phase) | none |
| typical wavelength | IR | visible |
| applications | galactic objects, AGN, cosmological | bright stars only |

so for bright stars, intensity is competitive (especially at long baselines impossible for amplitude). for faint sources, amplitude wins.

## the modern niche

CTA-class IACT arrays will spread $\sim 100$ telescopes over $\sim 5$ km. the resulting **intensity interferometer baseline range** is:

- minimum: 10s of meters
- maximum: ~5 km

corresponding angular resolution at 500 nm: $\theta \sim \lambda/B \sim 30$ μas at the longest baselines!

this is *better* than VLTI's 1 mas (limited by 130 m baselines) for the brightest stars. so intensity interferometry is poised to give the **highest-resolution stellar surface imaging** for bright targets.

niche secured: bright nearby stars, surface features, hot spots, cool spots.

## see also

- [Intensity interferometry concept](../../02_Zettel/Theory/interf/Intensity interferometry concept.md)
- [Hanbury Brown Twiss effect](../../02_Zettel/Theory/interf/Hanbury Brown Twiss effect.md)
- [Narrabri stellar interferometer](../../02_Zettel/Theory/interf/Narrabri stellar interferometer.md)
- [Sensitivity and modern revival](../../02_Zettel/Theory/interf/Sensitivity and modern revival.md)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.md)
