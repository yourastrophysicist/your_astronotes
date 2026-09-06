---
layout: default
title: "Speckle interferometry"
---

# Speckle interferometry

the technique that pushed *single-aperture* telescopes past the seeing limit before AO was practical. take many short-exposure images that "freeze" atmospheric turbulence, compute the autocorrelation of each, average — and recover the diffraction-limited spatial-frequency information of the source.

invented by Antoine Labeyrie (1970). a precursor to AO and a still-useful technique today for multiple-star measurements and bright-source imaging.

## the problem

a long-exposure image of a star through the atmosphere has FWHM $\sim \lambda/r_0$ — far worse than the diffraction limit $\lambda/D$. standard imaging is *seeing-limited*.

but a short-exposure image (faster than $\tau_0$) freezes the atmosphere into one *instantaneous configuration*. the image is not a smooth blob — it's a **speckle pattern** of bright and dark spots, each speckle the size of $\lambda/D$ (the diffraction limit).

so the speckles *do* carry diffraction-limited information. the trick is to extract it.

## the math

a single speckle frame is the image of the source convolved with a *single-frame PSF* (a speckle pattern):
$$I_{\rm speckle}(\mathbf l) = O(\mathbf l) * S(\mathbf l)$$

with $O$ the true source, $S$ the speckle PSF. the speckle PSF $S$ is *random* — different from frame to frame. but it has a *statistical* structure: in the spatial-frequency domain, it has power up to the diffraction-limit cutoff $u_{\max} = D/\lambda$.

now compute the *autocorrelation* of the speckle frame:
$$A(\mathbf l) = I_{\rm speckle} \star I_{\rm speckle}$$

(where $\star$ is autocorrelation). in Fourier space:
$$|\tilde I_{\rm speckle}|^2 = |\tilde O|^2 \cdot |\tilde S|^2$$

average over many frames:
$$\langle |\tilde I_{\rm speckle}|^2 \rangle = |\tilde O|^2 \cdot \langle |\tilde S|^2 \rangle$$

the average of $|\tilde S|^2$ is the **speckle transfer function**. it has *non-zero* response up to the full diffraction-limit cutoff $u_{\max}$ — unlike the long-exposure transfer function, which dies away at $r_0/\lambda$.

so by averaging $|\tilde I|^2$ over many speckle frames, we recover $|\tilde O|^2$ — the *power spectrum* of the source — at all spatial frequencies up to the diffraction limit.

## the speckle transfer function

derived by Labeyrie:
$$\langle |\tilde S(\mathbf u)|^2 \rangle = T_{\rm long}(\mathbf u) + T_{\rm speckle}(\mathbf u)$$

with:
- $T_{\rm long}(\mathbf u)$: low-spatial-frequency content from long-exposure averaging (cuts off at $u \sim r_0/\lambda$)
- $T_{\rm speckle}(\mathbf u)$: high-spatial-frequency content from individual speckles (extends to $u \sim D/\lambda$)

so the whole spatial frequency range is sampled, with diminishing efficiency toward the diffraction limit.

## what speckle interferometry tells us

it gives the **modulus** $|\tilde O|^2$ at every spatial frequency. equivalently: the **autocorrelation** $A_O = O \star O$.

for symmetric sources (binary stars with equal magnitudes, uniform disks):
- $A_O$ uniquely determines $O$
- speckle interferometry → $|\tilde O|$ → $O$ via inverse FT

for asymmetric sources, $|\tilde O|$ alone is *not enough* — phase information is needed for full reconstruction. speckle interferometry recovers the *symmetric part* of the source.

for more complete recovery, use Knox-Thompson or [triple-correlation](../../../02_Zettel/Theory/interf/Bispectrum and triple correlation.html) methods, which preserve some phase information.

## the practical procedure

1. take many short-exposure (10-30 ms) frames of the target through a narrow-band filter
2. for each frame, compute its FFT, then $|\tilde I|^2$
3. average over all frames
4. divide by the speckle transfer function (calibrated from a reference unresolved star)
5. inverse-FT to get the autocorrelation $A_O$
6. for binaries, fit two delta-function model: $A_O$ has three peaks (central + two off-center)

a typical observation: 1000 short-exposure frames → diffraction-limited information.

## the strengths

three:
1. **simple, robust**: just take short exposures, no specialized hardware needed beyond a fast camera
2. **works on bright targets**: nearly all the photons go into the diffraction-limited measurement
3. **no AO required**: ideal for the era before AO matured

historical importance: Labeyrie 1974 used speckle interferometry to measure the orbital separations of dozens of binary stars, decades before AO was capable.

## the limits

- **bright sources only**: 100+ photons per frame per speckle needed for SNR. limits to $K \sim 10$ or so on 4m telescopes
- **only $|\tilde O|^2$**: phase information lost in plain Labeyrie
- **slow accumulation**: 1000 frames take ~30 seconds, AO can correct in 1 ms

these limits motivated AO and modern interferometric techniques.

## modern relevance

speckle interferometry is still used for:
- **binary star measurements**: dense surveys of separations and orbits
- **brown dwarf companions** to nearby stars
- **young stellar object multiplicity**: speckle imaging of forming systems
- **occultation timing**: differential speckle photometry

instruments: PISCO at Mt. Wilson, the Andor speckle camera at WIYN, NESSI at Gemini. surveys producing hundreds of binary detections per year.

## see also

- [Theory of speckle interferometry](../../../02_Zettel/Theory/interf/Theory of speckle interferometry.html)
- [Aperture masking](../../../02_Zettel/Theory/interf/Aperture masking.html)
- [Speckle imaging algorithms](../../../02_Zettel/Theory/interf/Speckle imaging algorithms.html)
- [Bispectrum and triple correlation](../../../02_Zettel/Theory/interf/Bispectrum and triple correlation.html)
- [Adaptive optics](../../../02_Zettel/Theory/interf/Adaptive optics.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
