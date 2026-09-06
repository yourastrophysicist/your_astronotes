---
layout: default
title: "Telescope resolving power"
---

The **resolving power** of a telescope is its ability to distinguish fine angular detail
	to separate two closely spaced point sources
	or to measure the true angular size of a source

This is distinct from **sensitivity** (ability to detect faint sources)
	a telescope can be very sensitive but have poor angular resolution
		or have excellent angular resolution but small collecting area

---

## Diffraction limit

For any aperture of diameter $D$, the minimum resolvable angle is set by **diffraction** of light at the aperture:
$$\boxed{\theta_{min} = 1.22 \frac{\lambda}{D}}$$

This is the **Rayleigh criterion** — see [Rayleigh criterion](../../02_Zettel/Theory/Rayleigh criterion.md) for the full derivation from the Airy pattern

The image of a point source at the focal plane is not a point but the **Airy disk**:
	radius: $r_{Airy} = 1.22 f\lambda/D$ at the focal plane
	contains $\sim 84\%$ of total energy

Examples:
	an eye ($D = 8$ mm) at $\lambda = 550$ nm: $\theta_{min} \approx 17''$
	a 1-m optical telescope: $\theta_{min} \approx 0.14''$ (but seeing-limited to $\sim 0.5''$ from the ground)
	a 1-m X-ray telescope at $\lambda = 1.24$ nm (1 keV): $\theta_{min} \approx 0.0003''$ — diffraction is irrelevant

---

## Plate scale

The angular scale on the focal plane is set by the **plate scale**:
$$S = \frac{1~\text{radian}}{f} = \frac{206265''}{f} \quad [\text{arcsec mm}^{-1}]$$

where $f$ is the focal length in mm

This connects the physical pixel size on the detector to the angular resolution on the sky:
	pixel size $p$ (mm) corresponds to $p \times S$ arcseconds on the sky
	for Chandra: $f \approx 10$ m, $S = 0.492''/$pixel for the ACIS detector (24 $\mu$m pixels)
		this matches the HPD ($0.5''$) so pixels Nyquist-sample the PSF

---

## Limiting factors for different telescope types

### Optical telescopes (ground-based)
Diffraction limit $\ll$ seeing limit
	the resolution is set entirely by **atmospheric [seeing](../../02_Zettel/Theory/Seeing Effect.md)**:
$$\theta_{seeing} \approx \frac{\lambda}{r_0} \sim 0.5''$$

With **adaptive optics (AO)**:
	the deformable mirror corrects the atmospheric wavefront in real time
		near-diffraction-limited resolution achievable in near-IR

### Optical telescopes (space-based)
Limited by **diffraction** (no atmosphere)
	HST: $D = 2.4$ m, $\lambda = 500$ nm → $\theta = 0.057''$
		but limited by **mirror figure errors** to $\approx 0.1''$ in practice (corrected by COSTAR)

### X-ray telescopes (all space-based)
Diffraction is negligible
	resolution limited by **mirror imperfections** (figure errors, roughness, alignment)
	characterized by HPD — see [Angular Resolution](../../02_Zettel/Theory/Angular Resolution.md)
	Chandra HPD = $0.5''$: the best angular resolution in the X-ray sky

---

## The PSF and resolving power

The [Point Spread Function (PSF)](../../02_Zettel/Theory/Point Spread Function (PSF).md) describes the spatial distribution of the image of a point source
	from the PSF, the resolving power metrics are derived:
		**FWHM**: full width at half maximum of the PSF core
		**HPD/HEW**: half-power diameter — see [Angular Resolution](../../02_Zettel/Theory/Angular Resolution.md)
		**EEF**: encircled energy fraction at angular radius $\theta$

For two equally bright point sources to be resolved, their angular separation must exceed $\sim$HPD/2

---

## Resolving power and spectral resolution for gratings

For X-ray **gratings**, the telescope's angular resolution directly limits the **spectral resolving power**:
$$R = \frac{\lambda}{\Delta\lambda} = \frac{\tan\theta}{\Delta\theta} \approx \frac{\theta}{\Delta\theta}$$

where $\Delta\theta$ is set by the PSF width
	sharper PSF → better spectral resolution for the same grating
	this is why Chandra HETGS achieves $R \sim 1000$, while XMM-Newton RGS achieves $R \sim 200$

See [X-ray diffraction grating](../../02_Zettel/Theory/X-ray diffraction grating.md) for full treatment
