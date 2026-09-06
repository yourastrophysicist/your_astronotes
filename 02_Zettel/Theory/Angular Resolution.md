---
layout: default
title: "Angular Resolution"
---

In X-ray telescopes, the **angular resolution** is not defined by the diffraction limit
	at X-ray wavelengths ($\lambda \sim 1$ nm at 1 keV), the diffraction limit for a 1-m aperture is $\sim 0.0003''$
		this is completely negligible — 10,000 times smaller than Chandra's actual resolution

The angular resolution of an X-ray telescope is instead set by **mirror imperfections**
	and is characterized by the **Half Power Diameter (HPD)**, also called the **Half Energy Width (HEW)**

---

## HPD / HEW definition

The HPD is the angular diameter of the circle around the point source image
	that contains **exactly half** (50%) of the total focused energy

Why HPD and not FWHM?
	for an X-ray mirror, the image core may be sharp but the wings extend significantly
	FWHM only measures the core and misses the wing contribution
	HPD is a more honest measure of the total image quality
	it directly tells you what extraction radius captures 50% of the photons

![Screenshot of HPD diagram](../../assets/images/Screenshot of HPD diagram)

### Example comparison
For an azimuthally symmetric mirror shell:
	the FWHM may be small (sharp core)
	but if there are large **axial slope errors** (gradual deviations along the mirror axis)
		most energy is in the wings
		HPD can be much larger than FWHM → FWHM is misleading

---

## Sources of image blur

The blur circle radius $\sigma_{blur}$ of the [Point Spread Function (PSF)](../../02_Zettel/Theory/Point Spread Function (PSF).md) has contributions:
$$\sigma_{blur}^2 = \sigma_{diff}^2 + \sigma_{geom}^2 + \sigma_{rough}^2 + \sigma_{align}^2$$

### Diffraction ($\sigma_{diff}$)
$$\sigma_{diff} \approx 1.22\lambda/D$$
At X-ray energies: $\sigma_{diff} \sim 10^{-4}$–$10^{-3}$ arcsec — **completely negligible**

### Geometric aberrations ($\sigma_{geom}$)
For a [Wolter I](../../02_Zettel/Theory/Wolter Telescope.html) telescope, the on-axis coma and field curvature
	from the formula for the blur circle radius at off-axis angle $\theta$ and graze angle $\alpha$:
$$\sigma_{blur} \simeq 0.2\frac{\tan^2\theta}{\tan\alpha}\left(\frac{L}{f}\right) + 4\tan\theta\tan^2\alpha$$

	first term: spherical aberration and field curvature
	second term: coma from the Wolter I configuration (does not exactly satisfy the Abbe sine condition)

For Chandra at $\theta = 5'$: $\sigma_{blur} \simeq 2.5''$–$4''$

### Mirror roughness ($\sigma_{rough}$)
Sub-nanometer surface irregularities scatter X-rays into a **halo** around the core image
	the scattered fraction increases with energy and with roughness
	mirrors are polished to $\sim 0.3$–$0.5$ nm rms roughness

### Alignment errors ($\sigma_{align}$)
Misalignment between the paraboloid and hyperboloid segments
	introduces asymmetric aberrations
	controlled to $\sim 1$–$10~\mu$m in assembly

---

## Why angular resolution matters

A good angular resolution:
1. Allows detection of faint sources with low background contamination
	- background within the PSF: $N_{bg} \propto HPD^2$
	- SNR for a point source: $SNR \propto A_{eff}/HPD$ in the background-dominated regime — see [Signal-Noise Ratio](../../02_Zettel/Theory/Signal-Noise Ratio.html)

2. Allows resolving multiple nearby sources
	- at $HPD = 0.5''$, two sources $1''$ apart can be separated
	- at $HPD = 14''$, sources $< 30''$ apart are confused

3. Chandra has on average $1~\text{event/keV/year}$ from the background within a $0.3~\text{arcsec}^2$ area (matching its HPD)
	this extraordinarily low background is the key to deep survey sensitivity

---

## Comparison table

| Mission | $A_{eff}$ (cm²) | $E$ (keV) | HPD (arcsec) | $\Delta E$ (keV) |
|---|---|---|---|---|
| Einstein | 200 | 1 | 15 | 0.2–4.5 |
| ROSAT | 400 | 1 | 5 | 0.1–2.4 |
| BeppoSAX | 330 | 1 | 60 | 0.1–10 |
| Chandra | 800 | 1 | 0.5 | 0.1–10 |
| XMM-Newton | 4650 | 1 | 14 | 0.1–12 |
| NuSTAR | 900 | 10 | 60 | 3–79 |

The trade-off is clear:
	**Chandra** optimizes angular resolution at the cost of effective area
	**XMM-Newton** optimizes effective area (spectroscopy, timing) at the cost of angular resolution
	neither is "better" — they are complementary
