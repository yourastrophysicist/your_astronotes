---
layout: default
title: "Theory of speckle interferometry"
---

# Theory of speckle interferometry

the formal derivation that justifies [Labeyrie's](../../../02_Zettel/Theory/interf/Speckle interferometry.md) technique. shows that the *power spectrum* of speckle frames recovers the *power spectrum* of the source at all spatial frequencies up to the diffraction limit, despite the seeing.

## the model

each short-exposure (instantaneously frozen) speckle image is

$$I_n(\mathbf l) = O(\mathbf l) * S_n(\mathbf l)$$

with $O(\mathbf l)$ the true source brightness and $S_n(\mathbf l)$ the *random* PSF for that frame, governed by the instantaneous atmospheric wavefront. each $S_n$ is different.

in Fourier space:
$$\tilde I_n(\mathbf u) = \tilde O(\mathbf u) \cdot \tilde S_n(\mathbf u)$$

## the speckle transfer function

compute $|\tilde I_n|^2$:
$$|\tilde I_n(\mathbf u)|^2 = |\tilde O(\mathbf u)|^2 \cdot |\tilde S_n(\mathbf u)|^2$$

now average over many frames (over many *instances* of atmospheric turbulence):
$$\langle |\tilde I_n|^2 \rangle = |\tilde O|^2 \cdot \langle |\tilde S_n|^2 \rangle$$

the *speckle transfer function* (STF) is
$$T_{\rm STF}(\mathbf u) = \langle |\tilde S_n(\mathbf u)|^2 \rangle$$

it has *non-zero* response up to the full diffraction-limit cutoff $u_{\max} = D/\lambda$. so $\langle |\tilde I|^2 \rangle$ contains $|\tilde O|^2$ at every spatial frequency the telescope is capable of resolving.

## the explicit STF formula

derived by Labeyrie (1970):

$$T_{\rm STF}(\mathbf u) \approx T_{\rm long-exp}(\mathbf u) + T_{\rm short-exp}(\mathbf u)$$

with:

$$T_{\rm long-exp}(\mathbf u) \propto e^{-3.44 (u \lambda/r_0)^{5/3}}$$

(the seeing-limited transfer function — falls off at $u \sim r_0/\lambda$)

$$T_{\rm short-exp}(\mathbf u) \propto T_{\rm tel}(\mathbf u)/N_{\rm sp}$$

where $T_{\rm tel}$ is the *telescope* OTF (extends to $u_{\max} = D/\lambda$) and $N_{\rm sp} \sim (D/r_0)^2$ is the number of speckles per frame.

the short-exposure term is what makes speckle interferometry work: it has $\sim 1/(D/r_0)^2$ amplitude — small but non-zero — at all spatial frequencies up to diffraction limit. averaging many frames recovers $|\tilde O|^2$ with SNR proportional to $\sqrt{N_{\rm frames}}$.

## the SNR

for $N_f$ frames, $N_{\rm photons}$ photons per frame, $N_{\rm sp}$ speckles:

$$\text{SNR}(|\tilde O|^2) \sim \frac{N_f \cdot N_{\rm photons}^2}{N_{\rm sp}^{1/2}} \cdot \frac{1}{|\tilde O(\mathbf u)|^{-2} - 1}$$

(approximate). main features:
- improves linearly with frame count
- improves quadratically with photons per frame
- gets *worse* as $N_{\rm sp}$ grows ($D/r_0$ ratio)

so speckle interferometry is photon-limited and works best when $D \sim r_0$ (few speckles per frame).

## the calibration

to extract $|\tilde O|^2$, divide $\langle |\tilde I|^2 \rangle$ by the STF:

$$|\tilde O|^2 = \frac{\langle |\tilde I_{\rm target}|^2 \rangle - \text{noise}}{T_{\rm STF}(\mathbf u)}$$

the STF is measured on a *calibrator* — an unresolved bright star observed under the same conditions. since for a calibrator $|\tilde O|^2 = 1$:

$$T_{\rm STF}(\mathbf u) = \langle |\tilde I_{\rm cal}|^2 \rangle$$

so the calibrator's averaged power spectrum *is* the STF. ratio target/calibrator → $|\tilde O|^2$.

## what we can and can't recover

speckle interferometry gives $|\tilde O|^2$ — the *power spectrum* — equivalent to the *autocorrelation* $O \star O$ in image space.

three classes of sources:

### symmetric sources (point-symmetric)

$O \star O$ uniquely determines $O$. so binaries with equal-mag components, uniform disks, symmetric multiple systems are reconstructible from speckle interferometry alone.

### asymmetric sources

$O \star O$ has the same value as $O' \star O'$ for any *parity-flipped* version $O'$. so asymmetric sources have a *parity ambiguity*: speckle interferometry cannot tell left from right.

### complicated multi-component sources

ambiguities multiply. speckle interferometry alone gives a *family* of consistent solutions, not a unique image.

## the resolution limit

speckle interferometry recovers spatial frequencies up to $u_{\max} = D/\lambda$ — the *full diffraction limit* of the telescope. this is the *same* as a perfectly diffraction-limited telescope or AO with Strehl 1.

so for *symmetric* sources, speckle interferometry achieves diffraction-limited resolution. for asymmetric sources, modifications ([triple correlation](../../../02_Zettel/Theory/interf/Bispectrum and triple correlation.md), Knox-Thompson) are needed.

## see also

- [Speckle interferometry](../../../02_Zettel/Theory/interf/Speckle interferometry.md)
- [Aperture masking](../../../02_Zettel/Theory/interf/Aperture masking.md)
- [Speckle imaging algorithms](../../../02_Zettel/Theory/interf/Speckle imaging algorithms.md)
- [Bispectrum and triple correlation](../../../02_Zettel/Theory/interf/Bispectrum and triple correlation.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
