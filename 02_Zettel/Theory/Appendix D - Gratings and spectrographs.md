---
layout: default
title: "Appendix D - Gratings and spectrographs"
---

## Diffraction grating

A **diffraction grating** is a surface with many equally-spaced grooves (or slits)
	separated by a distance $d$ called the **grating constant**

When light hits the grating, each groove acts as a secondary source
	and the waves interfere constructively only in specific directions

The **grating equation** is:
$$d(\sin i + \sin \vartheta) = m\lambda$$

where
	$i$ is the angle of incidence (measured from the normal)
	$\vartheta$ is the angle of diffraction
	$m$ is the **diffraction order** (integer: $0, \pm1, \pm2, \ldots$)
	$\lambda$ is the wavelength

For $m = 0$: specular reflection (no dispersion)
For $m \neq 0$: different wavelengths are diffracted at different angles

![](https://upload.wikimedia.org/wikipedia/commons/0/07/Diffraction_Grating_Equation.svg)
<font color="#bfbfbf">Geometry of diffraction at a grating. The path difference between rays scattered from adjacent grooves determines the condition for constructive interference, giving the grating equation $d(\sin i + \sin\vartheta) = m\lambda$.</font>

---

## Angular dispersion

Differentiating the grating equation at fixed $i$:
$$d \cos\vartheta \, d\vartheta = m \, d\lambda$$

The **angular dispersion** is:
$$\frac{d\vartheta}{d\lambda} = \frac{m}{d \cos\vartheta}$$

A larger order $m$ or a smaller grating constant $d$ gives higher angular dispersion
	meaning wavelengths are more spread out

---

## Resolving power

The **resolving power** $R$ quantifies the ability to distinguish two nearby wavelengths $\lambda$ and $\lambda + \Delta\lambda$:
$$R = \frac{\lambda}{\Delta\lambda} = mN$$

where
	$m$ is the diffraction order
	$N$ is the **total number of grooves** illuminated

To achieve high resolving power:
	use high diffraction order $m$
	illuminate as many grooves as possible (large $N$)

---

## Blazed gratings

A standard grating wastes light by spreading it across many orders
	a **blazed grating** has grooves cut at a specific angle (the **blaze angle** $\gamma$)
		to concentrate the diffracted light into a specific order

The **blaze wavelength** $\lambda_b$ is the wavelength at which efficiency is maximized:
$$\lambda_b = \frac{2d \sin\gamma}{m}$$

where $\gamma$ is the blaze angle
	most of the light is concentrated near $\lambda_b$
		making blazed gratings much more efficient than flat-groove gratings

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Blazed_grating.svg/500px-Blazed_grating.svg.png)
<font color="#bfbfbf">Cross-section of a blazed grating. The grooves are cut at the blaze angle $\gamma$ so that the specular reflection direction from the groove face coincides with the desired diffraction order, concentrating most of the diffracted light near the blaze wavelength $\lambda_b$.</font>

---

## Spectrograph

A **spectrograph** is an instrument that disperses light into a spectrum and records it

Basic layout:
	**collimator**: collimates the diverging beam from the entrance slit
	**grating**: disperses the collimated beam
	**camera lens**: focuses the dispersed beam onto the detector

The entrance **slit** defines the spectral resolution by limiting the beam width
	the image of the slit at each wavelength falls at a different position on the detector

The **reciprocal linear dispersion** gives the wavelength range per unit length on the detector:
$$\frac{d\lambda}{dx} = \frac{d\cos\vartheta}{m f_{cam}}$$

where $f_{cam}$ is the focal length of the camera lens

---

## X-ray gratings

In X-ray astronomy, gratings are used in **transmission** or **reflection** geometry
	(see [X-ray diffraction grating](../../02_Zettel/Theory/X-ray diffraction grating.html) for details specific to instruments like Chandra HETGS and XMM RGS)
