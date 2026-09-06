---
layout: default
title: "Two-photon emission"
---

**two-photon emission** is a slow, forbidden-like decay process where an excited atomic state emits **two photons** simultaneously instead of one. the dominant nebular UV continuum source between the Lyman edge and the Lyman alpha line.

## the H I $2s \to 1s$ case

the H I $2s$ level ($2\,^2S_{1/2}$) is metastable. single-photon decay $2s \to 1s$ would emit a $\lambda 1216$ Å Ly$\alpha$ photon, but this transition is **forbidden** (parity unchanged: both even). decay proceeds via:

$$\boxed{\, 2s \to 1s + 2\gamma \,}$$

two photons emitted with summed energy $h\nu_1 + h\nu_2 = h\nu({\rm Ly}\alpha) = 10.2$ eV. Einstein $A$ for this two-photon decay: $A_{2s \to 1s} \approx 8.23$ s$^{-1}$, the lifetime $\sim 0.12$ s.

## the spectrum

since the two photons share the energy, neither has a fixed wavelength. the spectrum is **broad**, peaking around half the Ly$\alpha$ energy ($\sim 1500$ Å):
$$\phi(y) = \frac{6}{\pi}\,y(1-y)\left[\ln\!\frac{1}{y(1-y)} - 0.4\right]$$

where $y = \nu/\nu_{Ly\alpha}$. integrates to two photons per decay.

## importance in HII regions

in nebulae, the $2s$ level is populated by:
- **direct recombination** from the continuum.
- **collisional excitation** from $1s$.
- **cascade** from higher levels in Case-B recombination.

the $2s$ population then decays via two-photon emission instead of a single-photon Ly$\alpha$ (which is anyway resonance-trapped and rarely escapes directly).

result: a substantial fraction ($\sim 30\%$) of all nebular UV continuum below $1216$ Å is **2-photon continuum**, not free-free or recombination.

## the integrated UV spectrum

between $912$ Å (Lyman edge) and $\sim 4000$ Å, the nebular continuum has three main contributions:
- **Balmer continuum** (recombination to $n = 2$): peaks just shortward of $3646$ Å.
- **Free-free**: smooth, $\propto e^{-h\nu/k_BT_e}$.
- **Two-photon**: broad bump centred near $1500$ Å.

the sum gives the **observed UV continuum** of an HII region, used to predict and interpret continuum emission in star-forming galaxies and to subtract from underlying stellar populations.

## quenching at high $n_e$

at high density ($n_e > 10^4$ cm$^{-3}$), collisional **redistribution** depopulates the $2s$ level:
$$2s + e^- \to 2p + e^- \to 1s + Ly\alpha$$

so high-density nebulae have **reduced** 2-photon continuum and **enhanced** Ly$\alpha$ emission. crossover at $n_e \sim 10^4$ cm$^{-3}$. used as a density discriminator in some contexts.

## astronomical relevance

- **HII regions and PNs**: 2-photon contributes to the UV continuum.
- **AGN narrow-line regions**: similar contribution.
- **Lyman-alpha emitters at high $z$**: 2-photon contributes to the broadband UV continuum, complicating interpretation.
- **quasar spectra**: the "small blue bump" near Mg II $\lambda 2798$ has a contribution from 2-photon.

## see also

- [Recombination continuum](../../02_Zettel/Theory/Recombination continuum.md)
- [Balmer continuum](../../02_Zettel/Theory/Balmer continuum.md)
- [Free-free continuum](../../02_Zettel/Theory/Free-free continuum.md)
- [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.md)
- [Case A vs Case B recombination](../../02_Zettel/Theory/Case A vs Case B recombination.md)
- [Selection rules](../../02_Zettel/Theory/Selection rules.md)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- [H II region spectroscopy](../../02_Zettel/Theory/H II region spectroscopy.md)
