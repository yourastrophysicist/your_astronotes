---
layout: default
title: "Speckle imaging algorithms"
---

# Speckle imaging algorithms

algorithms that recover *full* (amplitude + phase) image information from speckle data. unlike basic Labeyrie speckle interferometry (which gives only $|\tilde O|^2$), these recover an actual image, including asymmetries.

## why we need them

basic speckle interferometry recovers $|\tilde O|^2$, the autocorrelation. it's blind to the source's *parity* — a source and its mirror image have identical autocorrelations. so asymmetric sources cannot be uniquely reconstructed.

we need techniques that preserve phase. two main approaches:

### Knox-Thompson (cross-spectrum)

introduced by Knox and Thompson (1974). instead of $|\tilde I|^2$, compute the **cross-spectrum**:

$$C(\mathbf u, \mathbf u + \delta\mathbf u) = \langle \tilde I(\mathbf u) \tilde I^*(\mathbf u + \delta\mathbf u) \rangle$$

for small $\delta\mathbf u$, the atmospheric corruptions at $\mathbf u$ and $\mathbf u + \delta\mathbf u$ are *correlated*. averaged over many frames, the cross-spectrum survives the atmospheric noise and contains the **phase difference** of the source between $\mathbf u$ and $\mathbf u + \delta\mathbf u$:

$$\arg C(\mathbf u, \mathbf u + \delta\mathbf u) \approx \phi_O(\mathbf u + \delta\mathbf u) - \phi_O(\mathbf u)$$

integrating these phase differences across the (u, v) plane recovers $\phi_O(\mathbf u)$ — the source phase — modulo a global piston.

combined with $|\tilde O|^2$ from basic speckle interferometry, we have $\tilde O(\mathbf u) = |\tilde O(\mathbf u)| e^{i\phi_O(\mathbf u)}$, fully reconstructing the image.

### triple correlation / bispectrum

introduced by Lohmann, Weigelt, and Wirnitzer (1983). compute the **bispectrum**:

$$B(\mathbf u, \mathbf v) = \langle \tilde I(\mathbf u) \tilde I(\mathbf v) \tilde I^*(\mathbf u + \mathbf v) \rangle$$

this is the third-order spatial spectrum. atmospheric phases cancel (just like in [closure phase](../../../02_Zettel/Theory/interf/Phase closure.md)), so the bispectrum is *unbiased* by atmospheric noise.

the bispectrum encodes the source phase up to a global piston. modern algorithms (BSMEM, SQUEEZE) reconstruct images directly from bispectra.

triple correlation is the *time-domain* equivalent of the bispectrum, computing the same information as a third-order autocorrelation in image space.

## comparison

| feature | Knox-Thompson | bispectrum |
|---|---|---|
| order | 2nd (cross-spectrum) | 3rd |
| phase recovery | local differences | full closure |
| SNR per frame | better at low SNR | better at high SNR |
| computational cost | $O(N^4)$ | $O(N^6)$ |
| historical | 1974 | 1983 |
| in modern use | less common | dominant |

bispectrum is more rigorous and now standard. Knox-Thompson is mostly historical but pedagogically useful.

## the spectral version: spectral speckle masking

extension to spectroscopic data. take many short-exposure spectra (rather than images), compute their bispectrum at each spectral channel. recover diffraction-limited spatial information *and* spectral resolution simultaneously.

used for:
- imaging molecular bands of Wolf-Rayet stars
- mapping kinematics of resolved stars (rotation, pulsation)
- AGN host-galaxy surface-brightness profiles

## modern revival

speckle imaging algorithms saw a revival in the 2010s for:
- **lucky imaging** at amateur and small-professional telescopes
- **GeoMounting and GreenFlash** code packages for fast imaging
- **kernel-phase imaging**: similar bispectrum-like quantities computed from AO-corrected pupil images

even with AO, residual seeing motivates these techniques. they are part of every high-resolution imaging pipeline.

## the imaging procedure

1. take many short-exposure frames
2. for each frame, compute $\tilde I_n(\mathbf u)$
3. accumulate $\langle |\tilde I|^2 \rangle$ (for amplitude)
4. accumulate the bispectrum $B(\mathbf u, \mathbf v)$ (for phase)
5. divide $|\tilde I|^2$ by the speckle transfer function (calibrated)
6. recover $|\tilde O(\mathbf u)|$ from amplitude
7. recover $\phi_O(\mathbf u)$ from bispectrum (using a phase-recovery algorithm)
8. inverse FT $\tilde O = |\tilde O| e^{i\phi_O}$ → image

steps 4 and 7 are the computationally intense parts. modern packages handle this in seconds for typical datasets.

## see also

- [Speckle interferometry](../../../02_Zettel/Theory/interf/Speckle interferometry.md)
- [Theory of speckle interferometry](../../../02_Zettel/Theory/interf/Theory of speckle interferometry.md)
- [Aperture masking](../../../02_Zettel/Theory/interf/Aperture masking.md)
- [Bispectrum and triple correlation](../../../02_Zettel/Theory/interf/Bispectrum and triple correlation.md)
- [Phase closure](../../../02_Zettel/Theory/interf/Phase closure.md)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.md)
