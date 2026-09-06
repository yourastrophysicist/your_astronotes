---
layout: default
title: "Processes of photon-matter interaction"
---

Photons are detected by being stopped in matter and producing a signal
	the interaction between photons and matter occurs through **three main processes**
		each dominant in a different energy range

Understanding which process dominates determines:
	how detectors work (photoelectric → CCD, Compton → scintillator, pair → tracker)
	how telescopes work (photoelectric absorption → grazing incidence mirrors, Compton → thick shielding fails)
	what limits observational sensitivity

---

## The three processes

### 1. Photoelectric absorption
Dominant at **low energies** ($E \lesssim$ few hundred keV, depending on $Z$)

A photon is **completely absorbed** by a bound electron
	the electron is ejected with kinetic energy $E_{kin} = E_{ph} - E_{bind}$
	the cross section: $\sigma_{ph} \propto Z^{4-5} / E^3$

Read more: [Photoelectric absorption](../../02_Zettel/Theory/Photoelectric absorption.md)

### 2. Compton scattering
Dominant at **intermediate energies** ($\sim 100~\text{keV}$–$30~\text{MeV}$, depending on $Z$)

A photon **scatters** off a (nearly free) electron
	part of the photon energy is transferred to the electron
	the photon continues at reduced energy and changed direction

Read more: [Compton scattering and pair production](../../02_Zettel/Theory/Compton scattering and pair production.md)

### 3. Pair production
Dominant at **high energies** ($E > 1.022~\text{MeV} = 2m_ec^2$, significant above $\sim 4~\text{MeV}$)

A photon **converts** into an electron-positron pair in the nuclear Coulomb field
	the cross section grows with $\ln(E/m_ec^2)$ and with $Z^2$

Read more: [Compton scattering and pair production](../../02_Zettel/Theory/Compton scattering and pair production.md)

---

## Attenuation of X-rays in matter

All three processes remove photons from a beam
	the total removal rate is described by the **linear attenuation coefficient** $\mu$ ($\text{cm}^{-1}$):
$$\mu = \sigma_{total} \cdot n_{atoms}$$

$$\sigma_{total} = \sigma_{ph} + \sigma_C + \sigma_{pp}$$

A beam of initial intensity $I_0$ passing through thickness $x$ of material is attenuated as:
$$I(x) = I_0 \, e^{-\mu x}$$

The **mean free path** $\lambda$ is the average distance before an interaction:
$$\lambda = \frac{1}{\mu}$$

---

## Domain diagram: which process dominates?

The dominant process at a given photon energy $E$ and absorber atomic number $Z$ is determined by comparing the three cross sections:

![Screenshot 2026-04-07 at 01.22.49](../../assets/images/Screenshot 2026-04-07 at 01.22.49.png)
<font color="#bfbfbf">Dominant photon-matter interaction regimes as a function of photon energy $E$ and absorber atomic number $Z$. The solid lines show where $\sigma_{ph} = \sigma_C$ (left boundary) and $\sigma_C = \sigma_{pp}$ (right boundary). Below the left line: photoelectric dominates. Between the lines: Compton dominates. Above the right line: pair production dominates.</font>

Key boundaries (for the boundary $\sigma_{ph} = \sigma_C$):
	for low-$Z$ material (e.g. water, $Z \approx 7$): transition at $E \approx 30~\text{keV}$
	for high-$Z$ material (e.g. lead, $Z = 82$): transition at $E \approx 1~\text{MeV}$

---

## Practical consequences

### For detectors:
- **Silicon CCD** ($Z_{Si} = 14$, X-ray energies 0.1–15 keV): dominated by photoelectric absorption → each photon deposits all its energy → spectral resolution possible
- **NaI scintillator** (hard X-ray): Compton plus photoelectric → detects through both
- **Pair telescope (Fermi LAT)**: pair production → positron + electron tracks reconstructed in a silicon tracker

### For telescope mirrors (grazing incidence):
- **Absorption** by the mirror is controlled by $\beta$ (imaginary part of refractive index), which is tied to $\sigma_{ph}$
- **Scattering** (reflection) exploits total external reflection just below $\theta_c$
- Above $\theta_c$: photons refract into the mirror and are absorbed → hard energy cutoff in $A_{eff}(E)$

### For column density corrections (ISM absorption):
- The ISM between source and observer absorbs X-rays through photoelectric absorption
- The column density $N_H$ (hydrogen atoms cm$^{-2}$) parameterizes the total absorption
- $F_{obs}(E) = F_{int}(E) \cdot e^{-\sigma(E) N_H}$ — see [Luminosity and Flux for -Instrumentations](../../02_Zettel/Theory/Luminosity and Flux for -Instrumentations.md)

---

## Summary table

| Process | Energy range | $\sigma$ dependence | Detector application |
|---|---|---|---|
| Photoelectric | $E \lesssim$ few $\times 100$ keV | $\propto Z^{4-5}/E^3$ | CCD, proportional counter |
| Compton | $\sim 100$ keV–$30$ MeV | Klein-Nishina, decreases with $E$ | Scintillator, Compton telescope |
| Pair production | $E > 1.022$ MeV (important $> 4$ MeV) | Grows as $Z^2 \ln E$ | Pair telescope (Fermi LAT) |
