---
layout: default
title: "CCD readout"
---

A CCD pixel is based on a **MOS capacitor** (Metal–Oxide–Semiconductor)
	the bottom layer is p-type silicon, topped by an insulator (SiO$_2$), with a metal gate on top
		when a positive voltage is applied to the gate, it repels the holes in the p-type silicon
			and creates a **potential well** — the depletion region — which collects and stores electrons

<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.50.01.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.50.01" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
<font color="#bfbfbf">MOS capacitor structure: metal gate on top, silicon dioxide insulator in the middle, and p-type silicon at the bottom. A positive voltage on the gate creates a potential well that traps electrons produced by ionizing radiation.</font>

---

## 3-phase clocking: charge transfer

A CCD pixel uses **three gates** (electrodes) aligned along the column direction
	the central gate is held at higher positive voltage than the two outer ones
		this creates a potential minimum where charges are held during integration

In the **perpendicular direction**, a strip of insulator called a **channel stop** prevents lateral spreading of charge

### Transfer process (one step)

To move the charges one pixel along the column:
1. Raise the voltage of the adjacent gate to the same level as the central gate → charges spread into both pixels
2. Lower the central gate voltage → charges are pushed entirely into the adjacent pixel
3. The adjacent gate becomes the new "central" gate

Repeating this three-voltage sequence shifts the charge packet by one pixel
	after $N$ shifts, the charge reaches the **serial register** at the edge of the CCD

<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.50.45.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.50.45" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
<font color="#bfbfbf">Three-phase CCD: three gates per pixel with sequentially applied voltages move the charge packet one pixel per clock cycle.</font>

---

## Serial register and amplifier

After the parallel shift (column direction), the charge packet arrives at the **serial register**
	the serial register shifts the charge in the **row direction** (perpendicular)
		one pixel at a time until it reaches the **output node**

At the output node:
	the charge is collected on a small capacitor
	the voltage $V = Q/C$ is measured by an **on-chip amplifier**
		the voltage is proportional to the number of electrons (hence the number of photons and their energy)

The signal is then digitized by an **analog-to-digital converter (ADC)**
	the output is a **digital number (DN or ADU)** proportional to the charge

---

## Readout noise

The on-chip amplifier introduces **readout noise** $\sigma_{RON}$
	it is the dominant noise source for very faint signals
		typical values: $\sigma_{RON} \approx 2$–$10~e^-$ rms for scientific CCDs
			for X-ray CCDs: $\sigma_{RON} \approx 5~e^-$ (e.g. Chandra ACIS, XMM-Newton EPIC-pn)

The signal-to-noise ratio in the **readout-noise dominated regime**:
$$SNR = \frac{N_e}{\sqrt{N_e + \sigma_{RON}^2}} \approx \frac{N_e}{\sigma_{RON}} \quad \text{when } N_e \ll \sigma_{RON}^2$$

For X-ray photons this is rarely the bottleneck:
	a $1~\text{keV}$ photon creates $N_e = 1000/3.68 \approx 272$ electrons
		which is $\gg \sigma_{RON} \sim 5$, so readout noise is negligible

---

## Charge Transfer Efficiency (CTE)

In each pixel-to-pixel transfer, a small fraction of charge $\epsilon$ is **left behind**
	after $N$ transfers, the fraction of charge remaining is:
$$\text{fraction} = (1-\epsilon)^N \approx e^{-\epsilon N}$$

For $\epsilon = 10^{-5}$ and $N = 1000$ transfers:
	fraction retained $\approx e^{-0.01} = 99\%$ — acceptable

**Radiation damage** in space (protons, cosmic rays) creates charge traps that increase $\epsilon$ over time
	this is a significant concern for long-lived X-ray missions
		Chandra and XMM-Newton have shown measurable CTE degradation after years in orbit
			mitigated by cooling the CCD to $-100°$C to reduce trap capture rates

---

## Readout modes for X-ray astronomy

### Full frame mode
The entire CCD is read out between exposures
	frame time: $\sim 2$–$5$ seconds for typical X-ray CCDs
	**risk**: pile-up for bright sources (two photons in same pixel per frame)

### Windowed mode
Only a sub-region of the CCD is read out (fewer rows to shift)
	shorter frame times ($\sim 0.5$ seconds)
	reduces pile-up for moderately bright sources

### Continuous clocking mode (Chandra CC mode)
One spatial dimension is sacrificed to continuous readout
	frame time $\sim 3$ ms → almost no pile-up
	loss: 1D imaging (one axis collapsed onto the spectral axis)

---

## Connection to energy measurement

The total energy measurement chain for an X-ray photon:
$$E_{ph} \xrightarrow{w = 3.68~\text{eV}} N_e = E_{ph}/w \xrightarrow{Q=N_e \cdot e} V = Q/C \xrightarrow{\text{ADC}} \text{DN}$$

The energy resolution (FWHM in eV) is:
$$\text{FWHM} = 2.35w\sqrt{\sigma_{RON}^2 + F \cdot \frac{E_{ph}}{w}}$$

where $F = 0.115$ is the Fano factor for silicon — see [CCDs for X-rays](../../02_Zettel/Theory/CCDs for X-rays.html)
