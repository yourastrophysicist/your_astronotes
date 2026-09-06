---
layout: default
title: "Radiative Processes"
---

**Radiative processes** are the physical mechanisms by which high-energy sources emit X-ray and gamma-ray radiation
	understanding them is the bridge between what we detect (counts, spectra, light curves)
		and what is physically happening (temperature, magnetic field, particle energies, geometry)

The key question:
	*what is producing the photons?*

---

## The Larmor formula: radiation from accelerated charges

The root of all classical electromagnetic radiation is the **Larmor formula**:
	any **accelerating charged particle** emits radiation

Non-relativistic (Larmor):
$$P = \frac{2q^2}{3c^3}|\ddot{\vec{r}}|^2 = \frac{2q^2}{3c^3}a^2$$

Relativistic generalization:
$$P = \frac{2q^2\gamma^4}{3c^4}\left(a_\perp^2 + \gamma^2 a_\parallel^2\right)$$

where $a_\perp$ and $a_\parallel$ are acceleration components perpendicular and parallel to the velocity
	the $\gamma^4$ enhancement means relativistic particles radiate far more powerfully

---

## Three main mechanisms in high-energy astrophysics

### 1. Thermal Bremsstrahlung → [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html)
Free electrons decelerated in the electric field of ions in a **hot plasma**
	spectrum: flat below $h\nu \sim k_BT$, exponential cutoff above
	dominant mechanism in: **galaxy clusters**, hot stellar coronae, supernova remnants at low energies

Key observable: the cutoff energy gives the plasma temperature directly
$$h\nu_{cutoff} \approx k_B T_e$$

### 2. Synchrotron radiation → [Synchroton](../../02_Zettel/Theory/Synchroton.html)
Relativistic electrons ($\gamma \gg 1$) spiraling in a **magnetic field** $B$
	each electron emits a peaked spectrum at the critical frequency:
$$\nu_c \propto \gamma^2 \frac{qB}{m_ec}$$

For a power-law electron distribution $N(\gamma) \propto \gamma^{-s}$, the synchrotron spectrum is a power law:
$$f_\nu \propto \nu^{-\alpha} \qquad \alpha = \frac{s-1}{2}$$

Dominant mechanism in: **supernova remnants, pulsar wind nebulae, AGN jets, radio galaxies**

### 3. Inverse Compton scattering → [Compton and Inverse Compton](../../02_Zettel/Theory/Compton and Inverse Compton.html)
Relativistic electrons ($\gamma \gg 1$) scatter **low-energy photons** up to high energies
	energy boost: $E_f \approx \gamma^2 E_i$
	power: $P_{IC}/P_{syn} = U_{ph}/U_B$ (photon vs magnetic energy density)

Dominant mechanism in: **AGN coronae** (hard X-ray power law), **galaxy clusters** (Sunyaev-Zel'dovich effect), IC halos of radio galaxies

---

## Particle distributions

Most of the above mechanisms involve a **power-law distribution** of particle energies:
$$N(\mathcal{E}) \propto \mathcal{E}^{-s} \qquad \text{(or } N(\gamma) \propto \gamma^{-s}\text{)}$$

This is not a coincidence:
	**diffusive shock acceleration** (Fermi I process) at strong shocks naturally produces $s \approx 2$
	this directly predicts a synchrotron spectral index $\alpha = (s-1)/2 = 0.5$
		which matches observations of supernova remnants and AGN jets remarkably well

---

## Distinguishing mechanisms by their spectra

| Mechanism | Spectral shape | Characteristic feature |
|---|---|---|
| Thermal Bremsstrahlung | Flat + exponential cutoff | Cutoff at $h\nu \sim k_BT$ |
| Synchrotron | Power law $\nu^{-\alpha}$ | Spectral breaks from cooling |
| Inverse Compton | Power law (often same $\alpha$) | IC hump at $\gamma^2 \nu_{input}$ |
| Blackbody | $B_\nu(T)$ | Sharp Wien tail |
| Line emission | Narrow peaks | At specific atomic energies (e.g. Fe K$\alpha$ at $6.4$ keV) |

---

## Subtopics

- [Bremsstrahlung](../../02_Zettel/Theory/Bremsstrahlung.html) — thermal free-free emission, clusters, plasma temperature
- [Synchroton](../../02_Zettel/Theory/Synchroton.html) — magnetic radiation, power-law spectra, cooling breaks
- [Compton and Inverse Compton](../../02_Zettel/Theory/Compton and Inverse Compton.html) — Compton, Thomson, IC power, Comptonization, y-parameter
- [Accretion onto compact objects](../../02_Zettel/Theory/Accretion onto compact objects.html) — where all this radiation comes from in compact sources
