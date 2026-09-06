---
layout: default
title: "Luminosity and Flux for -Instrumentations"
---

In X-ray astronomy, **luminosity** and **flux** are the two fundamental quantities
	connecting what a source actually emits
		to what an instrument actually measures
			understanding the relationship between them
				is the basis of all X-ray source analysis

---

## Luminosity

**Luminosity** $L$ is the total power emitted by a source
	it is an **intrinsic property** of the source
		independent of the observer's position, distance, or direction

### Spectral (monochromatic) luminosity

The most general definition is the **spectral luminosity** $L_\nu$:
$$L_\nu \equiv \frac{dL}{d\nu} \qquad \left[\text{erg s}^{-1} \text{Hz}^{-1}\right]$$

this is the power emitted per unit frequency interval
	equivalently, one can define the luminosity per unit wavelength $L_\lambda$:
$$L_\lambda \equiv \frac{dL}{d\lambda} \qquad \left[\text{erg s}^{-1} \text{Å}^{-1}\right]$$

the two are related by noting that $\nu\lambda = c$, so $|d\nu| = (c/\lambda^2)|d\lambda|$:
$$L_\nu \, d\nu = L_\lambda \, d\lambda \implies L_\lambda = L_\nu \frac{c}{\lambda^2}$$

### Band luminosity

In X-ray astronomy, we never observe the full spectrum at once
	instruments are sensitive over a finite energy band $[E_1, E_2]$
		the **band luminosity** is therefore:
$$L_{E_1 - E_2} = \int_{E_1}^{E_2} L_E \, dE$$

where $L_E = dL/dE$ is the luminosity per unit energy (related to $L_\nu$ via $E = h\nu$):
$$L_E = h \cdot L_\nu$$

**Standard X-ray bands used in instrumentation:**

| Band | Energy range | Instrument examples |
|---|---|---|
| Soft X-ray ($L_{SX}$) | $0.2$–$2~\text{keV}$ | ROSAT, XMM-Newton EPIC, Chandra ACIS |
| Hard X-ray ($L_{HX}$) | $2$–$10~\text{keV}$ | XMM-Newton EPIC, Chandra ACIS, BeppoSAX |
| Ultra-hard X-ray | $10$–$100~\text{keV}$ | NuSTAR, INTEGRAL IBIS |
| Full X-ray | $0.1$–$100~\text{keV}$ | Multi-mission combination |

### Bolometric luminosity

The **bolometric luminosity** is the total power across all frequencies:
$$L_{bol} = \int_0^{\infty} L_\nu \, d\nu = \int_0^{\infty} L_E \, dE$$

in practice, no single instrument covers the full spectrum
	so $L_{bol}$ requires combining multiple observations across the [Spectral Energy Distribution (SED)](../../02_Zettel/Theory/Spectral Energy Distribution (SED).md)
		or applying a **bolometric correction** $k_{bol}$:
$$L_{bol} = k_{bol} \times L_{band}$$

where $k_{bol}$ depends on the source's spectral shape
	for AGN, typical values range from $k_{bol} \sim 10$ to $\sim 100$ depending on the band used

---

## Flux

**Flux** $F$ is the power received by an observer per unit collecting area
	it is an **extrinsic quantity** — it depends on the distance to the source

### Derivation of the flux–luminosity relation

Consider a source emitting isotropically with luminosity $L$
	at distance $d$, the emitted power is uniformly distributed over a sphere of radius $d$
		the surface area of that sphere is $4\pi d^2$

therefore the power per unit area at distance $d$ is:
$$\boxed{F = \frac{L}{4\pi d^2}} \qquad \left[\text{erg s}^{-1} \text{cm}^{-2}\right]$$

this relation assumes:
	the source is a **point source** (or much smaller than $d$)
	emission is **isotropic**
	the medium between source and observer is **transparent** (no absorption)
	the source and observer are at **non-cosmological** distances (no redshift)

the same relation holds band by band:
$$F_{E_1-E_2} = \frac{L_{E_1-E_2}}{4\pi d^2}$$

### Specific intensity (surface brightness)

When the source is **spatially resolved** — extended on the sky — the relevant quantity is the **specific intensity** $I_\nu$
	also called **surface brightness**

It is defined as the energy flowing per unit time, per unit projected area, per unit solid angle, per unit frequency:
$$I_\nu \equiv \frac{dE}{dA \cos\theta \, dt \, d\nu \, d\Omega} \qquad \left[\text{erg s}^{-1} \text{cm}^{-2} \text{Hz}^{-1} \text{sr}^{-1}\right]$$

where
	$dA$ is the detector area element
	$\theta$ is the angle between the direction of propagation and the normal to $dA$
		the factor $\cos\theta$ accounts for the projected area
	$d\Omega$ is the solid angle element from which radiation arrives

**A fundamental property**: $I_\nu$ is conserved along a ray in vacuum
	this means it does not decrease with distance
		what decreases with distance is the solid angle subtended by a source,
			which for an extended source exactly compensates the $1/d^2$ dilution

### Flux density from specific intensity

The **flux density** $F_\nu$ — the power per unit area per unit frequency — is obtained by integrating $I_\nu$ over all incoming directions:
$$F_\nu = \int_{2\pi} I_\nu \cos\theta \, d\Omega \qquad \left[\text{erg s}^{-1} \text{cm}^{-2} \text{Hz}^{-1}\right]$$

the integral is over the upper hemisphere ($2\pi$ sr) of incoming directions

**For a point source** (unresolved, smaller than the PSF):
	the source subtends a solid angle $\Omega_s \ll$ beam
		$F_\nu \approx I_\nu \cdot \Omega_s$
			where $\Omega_s = \pi R_s^2 / d^2$ is the source's angular solid angle

**For a resolved source** (larger than the PSF):
	$F_\nu$ is obtained by integrating $I_\nu$ over the source's angular extent
		each resolution element contributes independently to the total flux

The total flux is recovered by integrating over frequency:
$$F = \int_0^\infty F_\nu \, d\nu$$

---

## Photon flux and photon intensity

In high-energy astronomy, detectors count **individual photons**
	this is the regime of [CCDs for X-rays](../../02_Zettel/Theory/CCDs for X-rays.html) and proportional counters
		so it is more natural to work with photon quantities rather than energy quantities

### Photon flux

The **photon flux** $f$ is the number of photons per unit time per unit area:
$$f = \int_{E_1}^{E_2} \frac{F_E}{E} \, dE \qquad \left[\text{ph s}^{-1} \text{cm}^{-2}\right]$$

where $F_E / E$ converts energy flux to photon number flux
	(each photon of energy $E$ contributes $1/E$ photons per unit energy)

the **spectral photon flux** (or photon flux density) is:
$$\mathcal{F}(E) = \frac{F_E}{E} = \frac{dF}{E \, dE} \qquad \left[\text{ph s}^{-1} \text{cm}^{-2} \text{keV}^{-1}\right]$$

this is what X-ray spectral fitting software (XSPEC, Sherpa) actually models
	the spectrum is described as a **photon spectrum** $\mathcal{F}(E)$
		not an energy spectrum

### Photon intensity

The **photon intensity** $n_\nu$ is the photon equivalent of $I_\nu$:
$$n_\nu = \frac{I_\nu}{h\nu} \qquad \left[\text{ph s}^{-1} \text{cm}^{-2} \text{Hz}^{-1} \text{sr}^{-1}\right]$$

for the **photon number density per energy**:
$$n(E) = \frac{I_E}{E}$$

<img src="{{ "/assets/images/Screenshot%202026-04-04%20at%2019.34.51.png" | relative_url }}" alt="Screenshot 2026-04-04 at 19.34.51" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## Count rate and the effective area

This is where the instrumentation enters directly.

What an X-ray detector actually measures is not flux — it is a **count rate** $C$
	the number of photons detected per unit time
		in each energy channel of the detector

The connection between the incident photon flux and the observed count rate is through the **effective area** $A_{eff}(E)$:
$$C = \int_{E_1}^{E_2} \mathcal{F}(E) \cdot A_{eff}(E) \, dE \qquad \left[\text{cts s}^{-1}\right]$$

where $A_{eff}(E)$ encodes all the instrumental effects:
$$A_{eff}(E) = A_{geo} \times R_{mirrors}(E) \times QE(E) \times T_{filter}(E)$$

with
	$A_{geo}$: geometric collecting area of the mirror aperture
	$R_{mirrors}(E)$: reflectivity of the grazing incidence mirrors at energy $E$ (see [Grazing incidence](../../02_Zettel/Theory/Grazing incidence.html))
	$QE(E)$: quantum efficiency of the detector (see [Quantum efficiency](../../02_Zettel/Theory/Quantum efficiency.html))
	$T_{filter}(E)$: transmission of optical blocking filters

**Inverting to get flux from counts** requires knowing $\mathcal{F}(E)$:
	this is done by **forward folding** — assuming a spectral model,
		folding it through $A_{eff}(E)$ and the detector response,
			and comparing the predicted counts to the observed counts
				adjusting model parameters until they match

the formal expression is:
$$C(I) = \int_0^\infty \mathcal{F}(E) \cdot R(I, E) \, dE$$

where $R(I, E)$ is the **Redistribution Matrix Function (RMF)**
	the probability that a photon of energy $E$ is detected in channel $I$
		combined with $A_{eff}(E)$ as the **Ancillary Response File (ARF)**

---

## Absorption: observed vs intrinsic flux

Between the source and the detector, photons can be absorbed
	by gas and dust along the line of sight

The **observed (absorbed) flux** is related to the **intrinsic flux** by:
$$F_{obs}(E) = F_{int}(E) \times e^{-\sigma(E) \cdot N_H}$$

where
	$\sigma(E)$ is the **photoelectric absorption cross-section** per hydrogen atom (see [Photoelectric absorption](../../02_Zettel/Theory/Photoelectric absorption.html))
		$\sigma(E) \propto E^{-3}$ at energies above absorption edges
	$N_H$ is the **hydrogen column density** in cm$^{-2}$
		the integrated number of hydrogen atoms along the line of sight

This has a critical consequence for luminosity calculations:
	the flux we measure is always the **absorbed flux**
		to recover the intrinsic luminosity, we must correct for absorption
			by fitting $N_H$ as a free parameter in spectral analysis

The luminosity is then:
$$L = 4\pi d^2 \times F_{int} = 4\pi d^2 \times F_{obs} \times e^{+\sigma(E) N_H}$$

In practice, one separates:
	**Galactic absorption** $N_{H,Gal}$: fixed, from HI surveys (Dickey & Lockman 1990; HI4PI 2016)
	**Intrinsic absorption** $N_{H,int}$: free parameter, local to the source

---

## Cosmological flux and luminosity distance

For sources at cosmological distances (redshift $z > 0$),
	the simple $F = L/4\pi d^2$ requires modification

The relevant distance is the **luminosity distance** $d_L$:
$$d_L = (1+z) \cdot d_C$$

where $d_C$ is the **comoving distance**:
$$d_C = \frac{c}{H_0} \int_0^z \frac{dz'}{\sqrt{\Omega_m(1+z')^3 + \Omega_\Lambda}}$$

so the flux–luminosity relation becomes:
$$F = \frac{L}{4\pi d_L^2}$$

### K-correction

A further complication arises because the observed band $[E_1, E_2]$ at the detector
	corresponds to a **rest-frame band** $[(1+z)E_1,\, (1+z)E_2]$ at the source

This is the **K-correction**
	it accounts for the fact that the spectral shape of the source
		is redshifted relative to the observed band

For a power-law X-ray spectrum $\mathcal{F}(E) \propto E^{-\Gamma}$ (photon index $\Gamma$):
$$K(z) = (1+z)^{2-\Gamma}$$

so the fully corrected luminosity is:
$$L_{E_1-E_2}^{rest} = 4\pi d_L^2 \cdot F_{obs} \cdot K(z)$$

the $K$-correction can be positive or negative depending on $\Gamma$ and $z$:
	for $\Gamma > 2$ (soft spectrum): $K < 1$, source appears brighter in observed band
	for $\Gamma < 2$ (hard spectrum): $K > 1$, source appears fainter in observed band

---

## Energy conversion factor

In practice, X-ray astronomers often convert count rates to fluxes using a
	pre-computed **energy conversion factor (ECF)**:
$$F = \frac{C}{ECF} \qquad \left[\text{erg s}^{-1} \text{cm}^{-2}\right]$$

where the ECF has units of cts s$^{-1}$ per erg s$^{-1}$ cm$^{-2}$

The ECF is computed by simulating the expected count rate for a standard spectral model
	(e.g. a power law with $\Gamma = 1.7$ and Galactic $N_H$)
		it encodes the response of the full instrument
			and is **model-dependent**: changing the assumed spectral shape changes the ECF

For ROSAT, XMM-Newton, and Chandra, ECFs are tabulated for standard models
	they allow rapid flux estimation from count rates
		without full spectral fitting

---

## Hardness ratio

When photon statistics are insufficient for spectral fitting,
	the **hardness ratio** $HR$ provides a crude spectral indicator:
$$HR = \frac{H - S}{H + S}$$

where
	$S$ = count rate in the soft band (e.g. $0.5$–$2~\text{keV}$)
	$H$ = count rate in the hard band (e.g. $2$–$10~\text{keV}$)

$HR$ ranges from $-1$ (purely soft spectrum) to $+1$ (purely hard spectrum)
	it correlates with spectral hardness (photon index $\Gamma$) and absorption ($N_H$):
		high $N_H$ suppresses soft photons $\implies$ harder $HR$
		steep spectrum (large $\Gamma$) $\implies$ softer $HR$

the hardness ratio is used extensively in:
	survey analysis (e.g. XMM Serendipitous Survey, Chandra Source Catalog)
	classification of sources without individual spectral fits
	as a first diagnostic before committing to full spectral modeling

---

## Summary: from source to detector

The full chain connecting intrinsic source luminosity to observed count rate:

$$L_{int}(E) \xrightarrow{~~4\pi d_L^2~~} F_{int}(E) \xrightarrow{~~e^{-\sigma N_H}~~} F_{obs}(E) \xrightarrow{~~K(z)~~} F_{obs}^{band}(E) \xrightarrow{~~A_{eff}(E), R(I,E)~~} C(I)$$

going in reverse — from counts to luminosity — requires:
	knowing the instrument response $A_{eff}(E)$ and $R(I, E)$
	assuming or fitting a spectral model $\mathcal{F}(E)$
	measuring or fixing $N_H$
	knowing the redshift $z$ (and therefore $d_L$)
	applying the K-correction

every step introduces uncertainty
	spectral fitting in X-ray astronomy is the art of inverting this chain
		with as few assumptions as possible
