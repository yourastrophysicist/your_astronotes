---
layout: default
title: "Bragg Reflection"
---

At high photon energies (typically $E \gtrsim 10~\text{keV}$),
	the critical angle for total external reflection becomes extremely small:
		$\theta_c \propto \sqrt{\rho}/E \to < 0.1°$

At such shallow angles:
	the effective collecting area per mirror shell $\propto \theta_c^2 \propto 1/E^2$ → **vanishes**
	even high-$Z$ coatings like gold or iridium cannot maintain reflection

The solution for hard X-ray focusing telescopes is **multilayer Bragg reflection**:
	instead of relying on total external reflection,
		they use **constructive interference** between reflections from many thin layers

---

## Physical principle

A **multilayer coating** consists of alternating layers of high-$Z$ and low-$Z$ materials
	each with different electron density and refractive index
		examples:
			W/Si (tungsten/silicon): $\rho_W = 19.3~\text{g cm}^{-3}$, $\rho_{Si} = 2.3~\text{g cm}^{-3}$
			Pt/C (platinum/carbon): optimized for higher energies
			Ni/C (nickel/carbon): used for $\sim 10$–$50~\text{keV}$

Each interface reflects a small fraction of the incident X-ray beam
	when the reflections from successive interfaces **add in phase** (constructive interference):
		the total reflected amplitude can be large even though each individual reflection is tiny

---

## Bragg's law and the modified form

The condition for constructive interference between reflections from adjacent layer pairs (period $d_M$) is:
$$m\lambda = 2d_M \sin\theta$$

This is the **standard Bragg law** (analogous to crystal diffraction)

However, within each layer, the photons propagate with refractive index $n = 1 - \delta$
	this changes the wavelength inside the material
		the **modified Bragg equation** corrects for refraction:
$$\boxed{m\lambda = 2d_M \sin\theta \sqrt{1 - \frac{2\delta}{\sin^2\theta}}}$$

where
	$\delta$ is the **period-averaged** real decrement of the refractive index
	$d_M$ is the bilayer period (thickness of one high-$Z$ + one low-$Z$ pair)
	$\theta$ is the grazing angle
	$m$ is the order of reflection

The correction factor $\sqrt{1 - 2\delta/\sin^2\theta}$ is significant at small $\theta$
	it shifts the peak reflection to slightly different angles than the naive Bragg formula predicts

<img src="{{ "/assets/images/Pasted%20image%2020260406205703.png" | relative_url }}" alt="Pasted image 20260406205703" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
<font color="#bfbfbf">Bragg reflection geometry: parallel rays reflecting from successive layer interfaces interfere constructively when the path difference $\Delta = 2d_M\sin\theta$ equals an integer multiple of the wavelength.</font>

---

## Multilayer stack structure

A typical hard X-ray mirror multilayer consists of **hundreds of bilayer pairs**, each only a few nm thick:
	$d_M \sim 2$–$10$ nm (adjusted for the target energy range)
	total stack thickness: $\sim 0.5$–$2~\mu$m

The number of pairs $N_{pairs}$ and the layer thickness ratio (e.g. $\Gamma = d_{W}/d_M$) are free parameters
	optimized using simulation to **maximize reflectivity** over a target energy band
		a broader energy band requires a **depth-graded multilayer**: $d_M$ varies with depth through the stack

<img src="{{ "/assets/images/Pasted%20image%2020260406210339.png" | relative_url }}" alt="Focusing Multilayer Reflection" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
<font color="#bfbfbf">Schematic of X-ray reflection by a multilayer mirror. Hundreds of alternating high-Z/low-Z layer pairs produce constructive interference, giving significant reflectivity at energies where single-layer grazing incidence would fail.</font>

---

## NuSTAR: the first hard X-ray focusing telescope

The **Nuclear Spectroscopic Telescope Array (NuSTAR)**, launched 2012, is the first telescope to focus X-rays above $10~\text{keV}$

Key specs:
	energy range: $3$–$79~\text{keV}$ (using Pt/C and W/Si multilayers)
	mirror: depth-graded multilayer on conical Wolter I approximation shells
	focal length: $10.15~\text{m}$ (extended mast needed for such a long focal length)
	HPD: $\sim 60''$ (limited by multilayer deposition uniformity)

Without multilayer Bragg mirrors, hard X-ray astronomy above $10~\text{keV}$ was only possible with coded masks (INTEGRAL/IBIS, Swift/BAT) — no focusing, much worse sensitivity

---

## Comparison: grazing incidence vs multilayer

| Property | Single-layer grazing incidence | Multilayer Bragg |
|---|---|---|
| Energy range | $0.1$–$10~\text{keV}$ | $10$–$80+~\text{keV}$ |
| Mechanism | Total external reflection | Constructive interference |
| Bandwidth | Broad (continuum) | Narrower (peaked at design energy) |
| Missions | Chandra, XMM-Newton, ROSAT | NuSTAR, eROSITA (partial) |

---

## Connection to Bragg diffraction in crystals

The same physics — Bragg diffraction — is used in **X-ray crystal spectrometers**:
	crystal planes act as the periodic layer structure
	different wavelengths are diffracted at different angles → natural spectrometer
		used in solar X-ray spectrometers and some lab instruments
			but not in modern large-area X-ray telescopes (replaced by gratings for spectroscopy)
