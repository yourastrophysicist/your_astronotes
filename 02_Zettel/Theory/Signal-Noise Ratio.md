---
layout: default
title: "Signal-Noise Ratio"
---

The **signal-to-noise ratio (SNR)** quantifies how well a source signal can be distinguished from the background noise
	it is the fundamental quantity that determines whether a source is detectable
		and with what precision its properties can be measured

In X-ray astronomy, every detected photon is a **discrete Poisson event**
	the noise is not an instrumental artifact — it is an **irreducible property of the counting process**:
$$\sigma = \sqrt{\lambda} \quad \text{for a Poisson count with mean } \lambda$$

---

## Setup

Define:
	$s$ = source count rate (counts per second from the source only)
	$b$ = background count rate (counts per second from background within the source extraction region)
	$t$ = total exposure time
	$A$ = collecting area (if not already folded into $s$ and $b$)

Total counts detected:
	from source region: $N_{tot} = (s+b)t$, with Poisson uncertainty $\sigma_{tot} = \sqrt{(s+b)t}$
	from background region: $N_{bg} = bt$ (scaled to the same area and exposure)

Net source counts: $N_{src} = N_{tot} - N_{bg} = st$

---

## SNR derivation

The signal is $N_{src} = st$
The noise on $N_{src}$ (from Poisson statistics on $N_{tot}$, assuming $N_{bg}$ is known exactly):
$$\sigma = \sqrt{(s+b)t}$$

Therefore:
$$\boxed{SNR = \frac{st}{\sqrt{(s+b)t}} = \frac{s\sqrt{t}}{\sqrt{s+b}}}$$

---

## Two limiting regimes

### Source-dominated regime: $s \gg b$
$$SNR \approx \frac{st}{\sqrt{st}} = \sqrt{st}$$

The noise is dominated by **Poisson fluctuations of the source photons themselves**
	$SNR \propto \sqrt{s} \cdot \sqrt{t}$
	to double the SNR: need 4× more exposure time

### Background-dominated regime: $s \ll b$
$$SNR \approx \frac{st}{\sqrt{bt}} = s\sqrt{\frac{t}{b}}$$

The noise is dominated by **background photon fluctuations**
	$SNR \propto s/\sqrt{b} \cdot \sqrt{t}$
	to double the SNR: still need 4× more exposure time
	but: reducing the background by 4× (e.g. better angular resolution → smaller extraction radius) doubles SNR for the same exposure

---

## Full formula including detector noise

For real CCDs, the readout noise $\sigma_{RON}$ (electrons rms) and dark current $D$ (electrons per second) add:
$$SNR = \frac{s \cdot t \cdot A \cdot w}{\sqrt{(s+b) \cdot t \cdot A \cdot w + D \cdot t + \sigma_{RON}^2}}$$

where $A$ is the effective area and $w$ accounts for the energy-to-electron conversion
	for X-ray CCDs, $\sigma_{RON} \ll$ photon noise (each X-ray produces $\sim 100$–$10{,}000$ electrons)
		so readout noise is typically negligible in X-ray astronomy

---

## Why angular resolution matters for SNR

For a **point source** observed with extraction radius $\theta_{PSF}$:
	number of background counts in the source region: $b \propto \theta_{PSF}^2 \cdot b_{surf}$ (background surface brightness × area)

In the background-dominated regime:
$$SNR \propto \frac{s}{\sqrt{b}} \propto \frac{s}{\theta_{PSF}} \propto A_{eff} \cdot \frac{1}{HPD}$$

This is why:
	**Chandra** (HPD $0.5''$, $A_{eff} \sim 800$ cm$^2$) excels at faint source detection in crowded fields
	**XMM-Newton** (HPD $14''$, $A_{eff} \sim 4650$ cm$^2$) has 6× more area but 28× larger PSF → similar SNR for bright point sources, but worse for crowded faint sources

---

## Minimum detectable flux

From the background-dominated SNR formula, the **minimum detectable source count rate** for a given $SNR_{min}$, $b$, and $t$ is:
$$s_{min} = \frac{SNR_{min}\sqrt{b}}{\sqrt{t}}$$

Converting to flux via the effective area and energy conversion factor:
$$F_{min} = \frac{s_{min}}{A_{eff} \cdot ECF}$$

This determines the **sensitivity limit** of a mission — the faintest sources it can detect
	for XMM-Newton in a 100 ks observation: $F_{min} \approx 10^{-15}~\text{erg s}^{-1}~\text{cm}^{-2}$ (0.5–2 keV)
