---
layout: default
title: "CCDs for X-rays"
---

A visible light photon produces a **single electron-hole pair**
	a large number of photons must be captured per pixel
		requiring long exposure times (minutes or hours)

An X-ray photon has enough energy to produce **many electrons and holes**
	through the process of secondary ionization by the primary photoelectron
		in silicon, an average of 1 electron-hole pair is liberated for each:
$$w = 3.68~\text{eV of photon energy absorbed}$$

The number of produced electrons is given by:
$$N_e = \frac{E_{ph}}{w}$$

for example, a $6~\text{keV}$ photon alone liberates **1630 electrons**,
	generating a sufficient signal to be measured
		this means long exposure time per frame is not necessary
			and the detector can be used as a **photon counter**
				with the measured signal charges proportional to the photon energies

No more than **1 photon** must be incident on each pixel in any image frame
	thus typical exposure times are less than a second
		long total exposure times are obtained through co-addition of many short exposures

---

## Photon counting mode

Using the detector in photon counting mode we can get three information:
	**Position**: we can identify which pixel catches the photon
	**Energy**: we can measure the energy of the incoming photon
	**Arrival time**: we can measure when the photon is detected

Counting photons as a function of their energy gives a **low-resolution spectrum**
	using short exposure times allows to measure the **variability** of the source through its light curve

---

## Depletion region and pixel size

The depletion region for X-ray CCDs is on the order of $30$–$300~\mu\text{m}$
	therefore larger than in visible light
		this is necessary to store the larger number of electrons
	these CCDs also have **larger pixels** than those used for visible sources
		to improve the efficiency in collecting charges

---

## Grades
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.52.35.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.52.35" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
A significant fraction of X-ray photons can interact with the material
	depositing energy in **more than one pixel**
		due to secondary ionization
	a multiplet of pixel values is analyzed for each event, typically $3 \times 3$ pixels
	
When the event is limited to a single pixel and no charges are deposited around:
	we have a **perfect single** situation
		the quality of the signal is called **grade 0**
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.52.35.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.52.35" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
Depending on the distribution of charges in the surrounding pixels,
	other grades are defined with an increasing number corresponding to progressively worse situations:
		**Grade 0**: perfect single
		**Grade 1**: S + detached corners
		**Grade 2**: vertical single-sided split + detached corners
		**Grade 3**: left single-sided split + detached corners
		**Grade 4**: right single-sided split + detached corners
		**Grade 5**: single-sided split with touched corners
		**Grade 6**: L shape and square shape + detached corners
		**Grade 7**: everything else

The instrumentation is able to distinguish between
	X-ray photons that produce **simpler and smaller shapes**
		and cosmic rays that cause **more complex structures**

---

## Pile-up

In case of observing extremely bright and compact sources,
	it is difficult to apply sufficiently short exposure times
		to detect just one photon
	more photons are incident on a single pixel and more electrons than expected are produced
		this effect causes an unavoidable extra-charge called **pile-up** condition

---

## Quantum efficiency for X-rays

While in visible light the QE curve is plotted as a function of wavelength,
	in X-rays it is given as a function of **energy**
		it is a combination of two processes:

**Transmission** $T$ through the dead layers (channel stops, gates, oxide layers):
$$T = \Pi \cdot e^{-\mu t}$$

**Absorption** $A$ in the depletion region:
$$A = 1 - e^{-\mu_{Si} \cdot d}$$

where
	$\Pi$ is a normalization factor
	$\mu$ is the linear absorption coefficient
	$t$ is the thickness of the dead layers
	$d$ is the depletion region depth

The transmission $T$ is characterized by **absorption edges** caused by the photoelectric effect
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.53.12.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.53.12" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
CCDs for X-rays are however sensitive to visible photons too
	causing noise and calibration issues
		materials like plastic or aluminum that absorb visible light
			are applied as **optical blocking filters**
				the consequence is a QE slightly lower,
					but at low energies ($< 0.5~\text{keV}$) there can be a $> 50\%$ reduction in efficiency

---

## Energy resolution

The **energy and angular resolution** of an instrument defines its ability
	to discriminate photons of different energy and at different positions

The **energy response function** is the energy distribution of the pulses generated in the detector
	it is not a $\delta$ function but a **Gaussian function** due to errors
		if $\Delta E = \text{FWHM}$ of the response function, the energy resolution is:
$$R = \frac{\Delta E}{E} = \frac{\text{FWHM}}{E_0}$$
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.53.44.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.53.44" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
The FWHM in eV is given by:
$$\text{FWHM} = 2.35w\sqrt{\sigma^2_{RON} + 0.115\frac{E_{ph}}{w}}$$

where
	$\sigma_{RON}$ is the readout noise
	$0.115$ comes from the Fano factor for silicon
	$w = 3.68~\text{eV}$ is the energy per electron-hole pair

The spectral resolution is **higher at lower energies**
<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.54.35.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.54.35" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />