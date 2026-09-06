---
layout: default
title: "Seeing Effect"
---

**Seeing** is the blurring and twinkling of astronomical images
	caused by turbulent mixing of air cells with different temperatures and densities
		which refract light by slightly different amounts
			the result is that the wavefront of starlight arrives at the telescope already distorted

It is very important not to confuse **seeing** with **transparency**:
	poor seeing blurs the image but brightness remains approximately constant
	poor transparency dims the star but blurring is largely unaffected

---

## Physical origin: Kolmogorov turbulence

The Earth's atmosphere is not uniform
	temperature gradients drive convection, creating **eddies** of different sizes
		each eddy acts like a weak lens with a slightly different refractive index

The **Kolmogorov turbulence model** describes how the variance of the refractive index scales with separation $r$:
$$D_n(r) = C_n^2 r^{2/3}$$

where $C_n^2$ is the **refractive index structure constant** — a measure of turbulence strength
	typical values: $C_n^2 \sim 10^{-16}$ cm$^{-2/3}$ at good sites

---

## Fried parameter

The key parameter is the **Fried parameter** $r_0$:
	the telescope aperture diameter over which the atmosphere introduces **one radian** of rms wavefront error
$$r_0 = 0.185 \lambda^{6/5} \left(\cos z \int C_n^2(h) \, dh\right)^{-3/5}$$

where
	$\lambda$ is the wavelength
	$z$ is the zenith angle
	the integral is over altitude $h$

Typical values:
	$r_0 \approx 10$ cm at visible wavelengths ($\lambda = 500$ nm) at a good site
	$r_0$ scales as $\lambda^{6/5}$: seeing improves at longer wavelengths

**Key implication**: if the telescope aperture $D > r_0$, the angular resolution is **not** the diffraction limit $\theta = 1.22\lambda/D$
	instead it is limited by the seeing disk:
$$\theta_{seeing} \approx \frac{\lambda}{r_0} \approx 0.5'' - 2''$$

---

## Seeing disk

When the atmosphere scrambles the wavefront,
	the image of a point source is spread into a **seeing disk** (or "seeing blob")
		with a roughly Gaussian profile and FWHM:
$$\text{FWHM}_{seeing} \approx 0.98 \frac{\lambda}{r_0}$$

The seeing disk is **much larger** than the diffraction limit for large telescopes:
	an 8-m telescope has a diffraction limit of $\theta_{diff} \approx 0.016''$ at $\lambda = 500$ nm
	but the seeing disk is $\sim 0.5''$ — a factor of 30 worse

This is why the Hubble Space Telescope achieves $\theta \approx 0.05''$ while a ground-based 8-m telescope sees $\sim 0.5''$
	the seeing limit applies even to very large apertures

---

## Short-time vs long-time exposure

For **short exposures** (milliseconds):
	the wavefront is "frozen" by the atmosphere
		the image breaks up into many **speckles**, each approximately diffraction-limited
		their pattern changes on the coherence timescale $t_0 \approx r_0 / v_{wind} \sim 10$–$50$ ms

For **long exposures** (typical observations):
	all the speckle positions are averaged
		the result is the smooth seeing disk with FWHM $\sim \lambda/r_0$

---

## Effect of aperture size

For a **small aperture** ($D < r_0 \sim 10$ cm):
	the telescope samples roughly a flat wavefront
		the image is diffraction-limited but also wanders (**image motion**)
			because the atmospheric tilt is not averaged out

For a **large aperture** ($D \gg r_0$):
	many turbulent cells fill the aperture
		the image is a smeared, broad seeing disk
			but twinkling (scintillation) is reduced because the fluctuations average out

<img src="{{ "/assets/images/Pasted%20image%2020260405102456.png" | relative_url }}" alt="Seeing and Aperture Effect" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
<font color="#bfbfbf">Image of a point source through telescopes of different aperture. Small apertures see image motion; large apertures see a broad seeing disk. Space telescopes (no atmosphere) achieve the diffraction limit.</font>

---

## Solutions

### Adaptive optics

**Adaptive optics (AO)** corrects the wavefront in real time:
	a **wavefront sensor** measures the distortion (using a bright star or laser guide star)
	a **deformable mirror** with hundreds of actuators applies the conjugate correction
	at a rate faster than $1/t_0 \sim 10$–$100$ Hz

Result: AO systems on 8–10 m telescopes recover $\sim 50\%$–$90\%$ of diffraction-limited resolution in the near-infrared

### Space telescopes

The only complete solution to seeing is operating **above the atmosphere**
	the Hubble Space Telescope achieves $\approx 0.05''$ resolution in the UV/optical
		with no seeing limitation at all

For X-ray observatories (Chandra, XMM-Newton), seeing is irrelevant:
	**X-rays are completely absorbed** by the atmosphere before reaching the ground
		all X-ray telescopes are in space
			and their resolution is limited by mirror figure errors, roughness, and aberrations — not seeing

---

## Scintillation (twinkling)

Turbulence also causes rapid fluctuations in the **brightness** of a star — **scintillation**
	produced by rapid variations in the air density along the line of sight
		acting as a lens that alternately focuses and defocuses starlight

The scintillation index (relative variance in intensity) scales as:
$$\sigma_I^2 / I^2 \propto D^{-4/3} (\cos z)^{-3} \int C_n^2(h) h^2 \, dh$$

Scintillation is worse for:
	small apertures (large apertures average it out)
	objects near the horizon (large $z$)
	shorter wavelengths

---

## Summary table

| Condition | Image width | Brightness |
|---|---|---|
| Perfect (diffraction limit) | $\theta = 1.22\lambda/D$ | Stable |
| Poor seeing | $\theta \approx \lambda/r_0 \gg \lambda/D$ | Approximately stable |
| Poor transparency (clouds) | Approximately diffraction-limited | Dimmed |
| High scintillation | Approximately $\lambda/r_0$ | Rapidly variable |
