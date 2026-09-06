---
layout: default
title: "Synchrotron continuum"
---

**synchrotron emission** is radiation from relativistic electrons spiralling in a magnetic field. produces a characteristic power-law continuum and is the dominant non-thermal emission mechanism in radio galaxies, AGN jets, supernova remnants, and pulsar wind nebulae.

note: the existing [Synchroton](../../02_Zettel/Theory/Synchroton.html) note in the vault covers this physics in depth. this note focuses on the spectroscopic perspective.

## the spectrum from a power-law electron distribution

a relativistic electron with Lorentz factor $\gamma$ radiates predominantly at the synchrotron frequency:
$$\nu_{\rm sync} \propto \gamma^2 B$$

if the electron energy distribution is a power law $N(E) \propto E^{-p}$, the resulting synchrotron emissivity is also a power law:
$$j_\nu \propto B^{(p+1)/2}\,\nu^{-(p-1)/2}$$

defining the **spectral index** $\alpha = (p-1)/2$:
$$\boxed{\, F_\nu \propto \nu^{-\alpha} \,}$$

typical $p \sim 2$ to $3$, so $\alpha \sim 0.5$ to $1$. radio galaxies have $\alpha \sim 0.7$ on average.

## key spectral features

- **flat-spectrum** ($\alpha < 0.5$): self-absorbed at low frequencies, optically thin emission shows $\alpha \sim 0$. compact regions, blazars.
- **steep-spectrum** ($\alpha > 0.7$): aged electron populations, radiative losses steepen the spectrum.
- **synchrotron self-absorption (SSA)**: at low $\nu$, the emitting electrons absorb the synchrotron radiation. spectrum turns over below a critical frequency, going to $S_\nu \propto \nu^{5/2}$ (Rayleigh-Jeans of the SSA brightness temperature).

## astronomical contexts

### radio galaxies and AGN

powerful synchrotron from jets and lobes. Cygnus A, M87, etc. spectral mapping reveals the electron acceleration history.

### supernova remnants

forward shocks accelerate electrons via diffusive shock acceleration, producing radio synchrotron. used to age SNRs and count their power.

### pulsar wind nebulae

electrons accelerated at the termination shock of the pulsar wind. Crab Nebula is the prototype; $\nu^{-0.3}$ from radio through optical, then steepening to $\nu^{-1.0}$ in X-ray due to radiative cooling.

### BL Lacs and blazars

featureless synchrotron continua from beamed AGN jets. $\alpha \sim 0$ to $0.5$, flat at radio. SED has a characteristic two-bump shape: synchrotron at radio-IR, inverse-Compton at $\gamma$-ray.

### galactic continuum

cosmic-ray electrons in the Galactic magnetic field produce diffuse synchrotron at $\sim 1$ GHz. dominates the Galactic radio sky at low frequencies.

## relation to free-free

both produce smooth power-law continua at radio frequencies, but with different $\alpha$:
- **synchrotron**: $\alpha \sim 0.5$ to $1$ (steeper).
- **free-free**: $\alpha \sim 0.1$ (flatter).

at $\nu \sim 10$ GHz the two are comparable in star-forming galaxies; at higher $\nu$ free-free dominates, at lower $\nu$ synchrotron dominates. this allows separation in multi-frequency radio surveys.

## inverse Compton

high-energy synchrotron-emitting electrons can also up-scatter low-energy photons via **inverse Compton** (see [Compton and Inverse Compton](../../02_Zettel/Theory/Compton and Inverse Compton.html)). produces a second peak in the SED at higher frequencies, often X-ray to TeV $\gamma$-ray. blazars famously show synchrotron + IC two-peak SEDs.

## see also

- [Synchroton](../../02_Zettel/Theory/Synchroton.html) — the comprehensive existing note
- [Free-free continuum](../../02_Zettel/Theory/Free-free continuum.html)
- [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html)
- [Compton and Inverse Compton](../../02_Zettel/Theory/Compton and Inverse Compton.html)
- [Radio SFR tracer](../../02_Zettel/Theory/Radio SFR tracer.html)
- [AGN spectroscopy](../../02_Zettel/Theory/AGN spectroscopy.html)
- [Supernova remnant spectroscopy](../../02_Zettel/Theory/Supernova remnant spectroscopy.html)
