---
layout: default
title: "CMB - discovery and blackbody spectrum"
---

the **cosmic microwave background (CMB)** is a near-perfect blackbody at $T_0 = 2.725$ K, observable in every direction on the sky. discovered by **Penzias + Wilson 1965**. one of the three pillars of the Hot Big Bang model.

## the discovery

Arno Penzias + Robert Wilson at Bell Labs were testing a microwave receiver for satellite communications. found an excess noise of $\sim 3.5$ K that they couldn't eliminate (no matter how much they cleaned the antenna of pigeon droppings).

simultaneously, Robert Dicke + Jim Peebles at Princeton were **predicting** a relic microwave radiation from a hot dense early universe (refining George Gamow's 1948 idea). Penzias + Wilson called Dicke; the discovery was published.

Nobel 1978 to Penzias + Wilson.

## the blackbody spectrum

CMB has a **near-perfect blackbody** spectrum. measured with extreme precision by **FIRAS on COBE** (1989-1990):
$$T_0 = 2.7255 \pm 0.0006\,\text{K}$$
$$\Delta I_\nu/I_\nu < 10^{-4}\quad(95\%~\text{CL})$$

so the CMB matches the Planck function to $1$ part in $10^4$. **the most perfect blackbody we have ever observed**.

## the implications

three immediate ones:
1. **the universe was once hot + dense + in equilibrium**, allowing photons to thermalise. Hot Big Bang confirmed.
2. **the universe cooled down via expansion** (FLRW), photons stretched in wavelength as $T \propto 1/a$.
3. **at recombination ($z \sim 1100$, $T \sim 0.26$ eV)**, photons last interacted with matter; they've been freely streaming since.

so the CMB is **the oldest electromagnetic signal** we can detect. its features encode the universe at $z = 1100$.

## the photon density

derived in [Cosmic_inventory_photons_derivation](../../02_Zettel/Theory/Cosmic_inventory_photons_derivation.md):
- $n_\gamma = (2\zeta(3)/\pi^2)(k_BT/\hbar c)^3 \approx 411$ cm$^{-3}$ today.
- $\rho_\gamma = (\pi^2/15)(k_BT)^4/(\hbar c)^3 \approx 4.18 \times 10^{-13}$ erg/cm$^3$.
- $\Omega_{0\gamma} \approx 2.47 \times 10^{-5}\,h^{-2}$.

so today the CMB contributes a tiny fraction of the energy density. but at $z \gtrsim 3400$ (matter-radiation equality), the CMB **dominated** the universe.

## three datasets that confirmed Planck shape

historical measurements over multiple decades of frequency:
- **FIRAS on COBE**: the spectrum measurement, perfect blackbody.
- **DMR on COBE**: the first detection of anisotropies, $1992$, Mather + Smoot Nobel 2006.
- **WMAP** (2001-2010): higher-resolution maps + power spectrum.
- **Planck** (2009-2013): the highest-resolution full-sky map to date, the standard reference.

ground-based + balloon experiments contribute at small angular scales: ACT, SPT, BICEP, etc.

## the spectral distortions

the CMB is **almost** but not exactly a perfect blackbody. predicted small distortions:
- **$\mu$-distortion** $\mu/T \sim 10^{-8}$ from Silk damping at $z = 5\times 10^4$ to $2\times 10^6$.
- **$y$-distortion** $y \sim 10^{-6}$ from late-time SZ + reionization heating.

current limits (FIRAS): $\mu/T < 9\times 10^{-5}$, $y < 1.5\times 10^{-5}$. future spectrometer (PIXIE, Voyage 2050) can reach the standard-model prediction. see CMB Spectral Distortions — What They Are and Where They Come From.

## see also

- [Cosmic_inventory_photons](../../02_Zettel/Theory/Cosmic_inventory_photons.md)
- [Cosmic_inventory_photons_derivation](../../02_Zettel/Theory/Cosmic_inventory_photons_derivation.md)
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md)
- [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.md)
- [CMB anisotropies](../../02_Zettel/Theory/CMB anisotropies.md)
- [CMB power spectrum](../../02_Zettel/Theory/CMB power spectrum.md)
- [Polarization E and B modes](../../02_Zettel/Theory/Polarization E and B modes.md)
- CMB Spectral Distortions — What They Are and Where They Come From
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
