---
layout: default
title: "Point Spread Function (PSF)"
---

The **Point Spread Function (PSF)** is the response of an imaging system to a point source
	it describes the distribution of intensity in the focal plane for an ideal point source at infinity
		in practice, the PSF encodes all sources of blurring: diffraction, aberrations, detector effects

Every extended source image can be written as a **convolution** of the true sky with the PSF:
$$I_{obs}(\vec{r}) = I_{true}(\vec{r}) \otimes \text{PSF}(\vec{r})$$

understanding the PSF is essential for:
	measuring the brightness of point sources (aperture photometry)
	separating overlapping sources (deblending)
	fitting spectral models that depend on source position
	identifying extended emission around compact sources

---

## PSF for a perfect circular aperture: the Airy function

For a circular aperture of diameter $D$ at wavelength $\lambda$, the PSF is the **Airy pattern**:
$$\text{PSF}(\theta) = \left[\frac{2J_1(\pi D\theta/\lambda)}{\pi D\theta/\lambda}\right]^2$$

Properties:
	central disk (Airy disk) radius: $\theta_{Airy} = 1.22\lambda/D$ — see [Rayleigh criterion](../../02_Zettel/Theory/Rayleigh criterion.md)
	central disk contains $\sim 84\%$ of total energy
	surrounded by diffraction rings with decreasing intensity

---

## PSF descriptors

Because the PSF of a real telescope is not a perfect Airy function,
	several different **metrics** are used to characterize it:

### FWHM (Full Width at Half Maximum)
The angular diameter where the PSF drops to half its peak value
	simple to measure but sensitive to the core shape
	not very useful for X-ray telescopes where mirror imperfections create extended wings

### HPD / HEW (Half Power Diameter / Half Energy Width)
The angular diameter of the circle that **contains 50% of the total encircled energy**
	preferred for X-ray telescopes — see [Angular Resolution](../../02_Zettel/Theory/Angular Resolution.md)
	more robust to extended wings and complex PSF shapes than FWHM
	for Chandra: HPD $\approx 0.5''$; for XMM-Newton: HPD $\approx 14''$

### Encircled Energy Fraction (EEF)
The fraction of total energy within an angular radius $\theta$:
$$EEF(\theta) = \frac{\int_0^\theta I(\theta') \theta' d\theta'}{\int_0^\infty I(\theta') \theta' d\theta'}$$

HPD is defined by $EEF(\theta_{HPD}/2) = 0.5$

---

## PSF in X-ray telescopes

For [Wolter I](../../02_Zettel/Theory/Wolter Telescope.md) telescopes, the PSF is **not** set by diffraction
	at X-ray wavelengths ($\lambda \sim 0.1$–$10$ nm), the diffraction limit is $\ll 0.01''$ for any reasonable aperture
		the PSF is dominated entirely by **geometric and manufacturing imperfections**

The total blur circle:
$$\sigma_{blur}^2 = \sigma_{diff}^2 + \sigma_{geom}^2 + \sigma_{rough}^2 + \sigma_{align}^2$$

Contributions to the PSF:
	**Figure errors** $\sigma_{geom}$: deviations of the mirror surface from the ideal paraboloid/hyperboloid shape
	**Micro-roughness** $\sigma_{rough}$: sub-nm surface roughness scatters X-rays into a halo
	**Alignment errors** $\sigma_{align}$: misalignment between the paraboloid and hyperboloid segments
	**Diffraction** $\sigma_{diff}$: completely negligible compared to the above

### On-axis vs off-axis
The PSF is best **on-axis** and degrades off-axis as coma and field curvature increase
	for Chandra: HPD $\approx 0.5''$ on-axis, $\approx 4''$ at $5'$ off-axis

---

## PSF and background rejection

A narrower PSF concentrates the source photons in fewer pixels
	the background within the PSF circle scales as $\Omega_{PSF} \propto \text{HPD}^2$
		the signal-to-noise ratio for a point source scales as:
$$SNR \propto \frac{A_{eff}}{\text{HPD}} \cdot \sqrt{t}$$

this is why Chandra (HPD $0.5''$) is ideal for faint sources in crowded fields
	while XMM-Newton (HPD $14''$, but 7× larger $A_{eff}$) is better for spectroscopy of bright sources

---

## PSF in gratings and spectroscopy

For [X-ray gratings](../../02_Zettel/Theory/X-ray diffraction grating.md), the PSF of the telescope directly determines the **spectral resolving power**:
$$R = \frac{\lambda}{\Delta\lambda} = \frac{\tan\theta}{\Delta\theta}$$

where $\Delta\theta$ comes from the PSF angular width
	a telescope with a sharper PSF gives higher spectral resolution with the same grating
		this is why Chandra's HETGS achieves higher resolution than XMM-Newton's RGS for the same grating design
