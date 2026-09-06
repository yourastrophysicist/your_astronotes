---
layout: default
title: "Source function"
---

the **source function** $S_\nu$ is the ratio of emission to absorption coefficient at a given frequency:
$$\boxed{\, S_\nu \equiv j_\nu / \kappa_\nu \,}$$

it has units of intensity (erg s$^{-1}$ cm$^{-2}$ Hz$^{-1}$ sr$^{-1}$), and is the local "thermal" intensity that the gas would radiate if optically thick at that $\nu$. central in the radiative-transfer equation.

## why it appears

the radiative-transfer equation
$$\frac{dI_\nu}{d\tau_\nu} = -I_\nu + S_\nu$$
shows that the intensity relaxes toward $S_\nu$ as $\tau$ grows. equilibrium ($dI/d\tau = 0$): $I_\nu = S_\nu$.

so:
- **at deep optical depths** ($\tau \gg 1$): $I_\nu \approx S_\nu$, dominant emission.
- **near the surface** ($\tau \to 0$): the emergent $I_\nu$ approximately equals $S_\nu(\tau \approx 1)$ (Eddington-Barbier).

## the LTE limit

in **local thermodynamic equilibrium** (LTE), populations follow Boltzmann + Saha at the local $T$, and detailed balance enforces:
$$S_\nu^{\rm LTE} = B_\nu(T) = \frac{2h\nu^3}{c^2}\,\frac{1}{e^{h\nu/k_BT} - 1}$$

so in LTE, $S_\nu$ is the Planck function at the local temperature. this is the most-used assumption for stellar photospheres. valid where collisions are fast enough that populations relax to LTE.

## the non-LTE regime

in **non-LTE** (NLTE), populations don't track local $T$; they are set by the radiation field as well as collisions. then $S_\nu$ is **not** $B_\nu(T)$, and must be computed self-consistently with the populations:
$$S_\nu = \frac{2h\nu^3/c^2}{n_l g_u/(n_u g_l) - 1}$$
in terms of the populations of upper $u$ and lower $l$ levels of the line.

NLTE matters in:
- **stellar chromospheres and coronae** (radiation field decoupled from local $T$).
- **stellar winds** (photoexcitation dominates).
- **HII regions** (radiation rates dominate over collisions for many transitions).
- **galaxy emission lines** (photoionised, far from LTE).

at the cost of more computation, modern atmospheric codes (NLTE versions of TLUSTY, FASTWIND, MARCS-NLTE) solve $S_\nu$ self-consistently.

## scattering

if scattering dominates over absorption, $S_\nu$ is **not** $B_\nu$ even if collisions thermalise populations. for pure scattering:
$$S_\nu = J_\nu = \frac{1}{4\pi}\int I_\nu\,d\Omega$$
the mean intensity. scattering doesn't add or remove energy, just redirects.

partial scattering (continuum + line scattering both present) gives a mixed source function:
$$S_\nu = (1-\omega) B_\nu + \omega J_\nu$$
with $\omega$ the scattering fraction (albedo).

## see also

- [Equation of radiative transfer](../../02_Zettel/Theory/Equation of radiative transfer.md)
- [Optical depth](../../02_Zettel/Theory/Optical depth.md)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.md)
- [Eddington-Barbier approximation](../../02_Zettel/Theory/Eddington-Barbier approximation.md)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.md)
- [Continuum opacity sources](../../02_Zettel/Theory/Continuum opacity sources.md)
- [Boltzmann equation in spectroscopy](../../02_Zettel/Theory/Boltzmann equation in spectroscopy.md)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md)
- [Statistical equilibrium equations](../../02_Zettel/Theory/Statistical equilibrium equations.md)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.md)
