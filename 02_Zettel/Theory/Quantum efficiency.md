---
layout: default
title: "Quantum efficiency"
---

The **quantum efficiency** (QE) of a CCD is the fraction of incident photons that are successfully **detected and converted to a measurable charge**:
$$QE = \frac{\text{number of detected photons}}{\text{number of incident photons}}$$

It is a function of photon energy (or wavelength) and describes the **fundamental sensitivity** of the detector

---

## Absorption length in silicon

The key physical parameter is the **absorption length** $\ell_{abs}(E)$:
	the depth at which a fraction $1 - e^{-1} \approx 63\%$ of incident photons have been absorbed

For silicon, $\ell_{abs}$ depends strongly on energy:
	at $E \sim 0.1~\text{keV}$: $\ell_{abs} \sim 10$ nm — photons absorbed in the surface dead layers
	at $E \sim 1~\text{keV}$: $\ell_{abs} \sim 1~\mu$m — absorbed in the active region
	at $E \sim 10~\text{keV}$: $\ell_{abs} \sim 100~\mu$m — may pass through the depletion region without being absorbed

<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.51.24.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.51.24" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
<font color="#bfbfbf">Absorption length in silicon as a function of X-ray photon energy. At very low energies photons are absorbed in the dead layer; at high energies they may penetrate through the active depletion region.</font>

---

## X-ray QE: two competing effects

The QE in X-rays is determined by two competing effects that work in opposite directions:

### Transmission through dead layers
Before reaching the active depletion region, X-ray photons must pass through:
	the optical blocking filter (Al or plastic)
	gate structures (SiO$_2$, polysilicon)
	field-free silicon layers

The transmission through all dead layers (combined thickness $t$):
$$T(E) = \prod_i e^{-\mu_i(E) t_i}$$

where $\mu_i(E) = \sigma_{ph}(E) \cdot n_i$ is the linear absorption coefficient of material $i$

At **low energies**: absorption in dead layers is strong → $T \to 0$ → QE drops sharply below $\sim 0.3~\text{keV}$
At **high energies**: dead layers become transparent → $T \to 1$

### Absorption in the depletion region
Once past the dead layers, photons must be absorbed in the **active depletion region** of depth $d$:
$$A(E) = 1 - e^{-\mu_{Si}(E) \cdot d}$$

At **low energies**: $\mu_{Si}$ is large → $A \approx 1$ → most photons are absorbed — good QE
At **high energies**: $\mu_{Si}$ decreases → $A \to 0$ → photons pass through without being absorbed — QE drops

---

## QE formula (X-ray CCDs)

Combining transmission and absorption:
$$QE(E) = T(E) \cdot A(E) = \left(\prod_i e^{-\mu_i t_i}\right) \cdot \left(1 - e^{-\mu_{Si} d}\right)$$

This gives a peaked curve with:
	a **low-energy edge** (set by dead layers and filter)
	a **peak** at intermediate energies ($\sim 0.5$–$5$ keV)
	a **high-energy roll-off** (set by depletion depth)

**Absorption edges**: the cross section $\sigma_{ph}(E)$ has discontinuities at atomic edge energies
	these show up as sharp features in the QE curve (e.g. Si K-edge at $1.84~\text{keV}$, O K-edge at $0.54~\text{keV}$)

<img src="{{ "/assets/images/Screenshot%202026-04-07%20at%2001.53.12.png" | relative_url }}" alt="Screenshot 2026-04-07 at 01.53.12" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />
<font color="#bfbfbf">QE curve of an X-ray CCD. The low-energy cutoff is set by absorption in the optical blocking filter; the high-energy rolloff by finite depletion depth. Absorption edges of Si and O are visible.</font>

---

## CCD types and their QE

### Front-side illuminated (FSI) / thick CCD
~300 $\mu$m thick, photons enter from the **gate side**
	gates and oxide layers absorb soft photons before they reach the depletion region
		result: poor QE at low energies ($< 0.5~\text{keV}$), peak QE $\approx 40$–$50\%$
	benefit: simple fabrication, robust

### Back-side illuminated (BSI) / thinned CCD
~15–20 $\mu$m thick, photons enter from the **back** (no gates in the way)
	with an anti-reflection coating: QE up to $90$–$95\%$ in the soft band
	thinning reduces dead layer absorption dramatically
	drawback: thin silicon means poor absorption at high energies ($> 5~\text{keV}$)
	also susceptible to **fringing** in the red/near-IR (interference within the thin silicon layer)

### Deep-depleted CCD
Back-side illuminated but with depletion depth $d \sim 50$–$100~\mu$m
	better high-energy response and reduced fringing

---

## Optical blocking filter

CCDs are sensitive to optical and UV photons ($\sim 2$–$4~\text{eV}$)
	but X-ray observatories are not pointing at UV-bright sources
		the detector must be protected from **stray optical light** which would fill the depletion wells

**Optical blocking filters** consist of:
	a thin Al layer ($\sim 40$–$80$ nm)
	sometimes a polyimide (plastic) substrate

Effect on X-ray QE:
	negligible at $E > 1~\text{keV}$ (the filter is thin and transparent)
	reduces QE by $> 50\%$ at $E < 0.3~\text{keV}$ (Al K-edge at $1.56~\text{keV}$ creates a dip)

---

## Summary

| Effect | Low E behavior | High E behavior |
|---|---|---|
| Dead-layer absorption | $T(E) \to 0$ (QE drops) | $T(E) \to 1$ (no effect) |
| Depletion absorption | $A(E) \to 1$ (good QE) | $A(E) \to 0$ (QE drops) |
| Optical filter | Strong absorption | Transparent |
| Net QE | Low | Low |
| **Peak QE**: intermediate energies $\sim 0.5$–$5$ keV
