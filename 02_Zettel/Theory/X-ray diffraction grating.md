---
layout: default
title: "X-ray diffraction grating"
---

Contrary to visible light, in X-ray astronomy it is possible to obtain a spectrum with a detector
	because we can **distinguish photons by energy**
		but to have a spectrum with **high resolution**, gratings are needed
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.59.06.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.59.06" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

X-ray Diffraction Gratings (XrDG) are placed at the **exit aperture** of a focusing optic,
	that is in the focused beam
		because of the grazing incidence in X-ray optics,
			spectrographs must be **slit-less**
				and they work effectively only with **point-like sources**
	the angular size of the source determines the spectral resolution:
		the angular resolution of the instrument directly affects the spectral resolution

---

## Transmission grating

Typical transmission gratings are made by a periodic nanostructure
	consisting of finely spaced parallel gold bars supported on a thin plastic membrane
		example: **HETGS** on board of Chandra

If $i$ is the angle of incidence and $\theta$ is the dispersion angle,
	the grating equation is:
$$d(\sin\theta - \sin i) = m\lambda$$

where
	$\lambda$ is the wavelength
	$m$ is the spectral order
	$d$ is the period

If $\Delta i$ is the angular resolution of the telescope,
	the diffracted beam will have an angular spread $\Delta\theta = \Delta i$
		$\Delta\theta$ is related to the wavelength width $\Delta\lambda$ by:
$$d(\sin\theta - \sin i) = m\Delta\lambda = \frac{d}{m}\cos\theta~\Delta\theta$$

For small angles ($\sin\theta \approx \theta$, $\sin i \approx i$), the resolving power is:
$$R = \frac{\lambda}{\Delta\lambda} = \frac{\tan\theta}{\Delta\theta} \approx \frac{\theta}{\Delta\theta}$$

To increase $R$ it is necessary to:
	decrease $d$ or decrease $m$
		or use a telescope with a **higher angular resolution**

---

## Reflection grating

Reflection gratings are made of a thin silicon carbide (SiC) substrate
	covered with a gold coating
		example: **RGS** on board of XMM-Newton

Because of the grazing incidence,
	angles are measured **from the surface** of the grating,
		not from the normal to the grating
			therefore the equation is:
$$d(\cos\theta - \cos i) = m\lambda$$

For a given angular resolution $\Delta i$,
	the wavelength resolution is:
$$\Delta\lambda = \frac{d}{m}\sin i~\Delta i$$

and the resolving power is:
$$R = \frac{\lambda}{\Delta\lambda} = \frac{\cos\theta - \cos i}{\sin i~\Delta i}$$

This formula shows that it is possible to improve the resolving power
	through a **higher resolution telescope** or through a **smaller incidence angle**

---

## Rowland circle
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.59.39.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.59.39" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
Gratings are placed in a **converging beam** instead of a parallel beam
	the consequence is that both the incidence and dispersion angle
		vary across the grating
	the way to solve the problem is by **curving the grating**,
		or alternatively producing gratings with variable periodicity across its surface

The best solution is the **Rowland circle**:
	a circle of radius $R$ that lies tangent to a concave curved diffraction grating of radius $2R$
		the groove density is constant when projected on the plane tangent to the grating

<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.59.39.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.59.39" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
---

## Instruments

**Chandra HETGS** (transmission):
	made by 192 grating facets (MEG)
		covers $0.4$–$5~\text{keV}$ (about $31$–$2.5~\mathring{A}$)
			with a resolution of $0.023~\mathring{A}$
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2002.00.36.png" | relative_url }}" alt="Screenshot 2026-04-07 at 02.00.36" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

**XMM-Newton RGS** (reflection):
	made by 182 identical gratings blazed at $15~\mathring{A}$
		covers $5$–$35~\mathring{A}$
			with a resolution of about $0.06~\mathring{A}$
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2002.00.58.png" | relative_url }}" alt="Screenshot 2026-04-07 at 02.00.58" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />