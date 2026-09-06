---
layout: default
title: "Recombination"
---

**cosmological recombination** at $z \sim 1100$ ($T \sim 0.26$ eV) is the moment when free electrons combined with protons to form neutral hydrogen. **the universe became transparent** + the **CMB was released**. one of the three pillars of the Hot Big Bang.

(companion: [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.md) for the detailed Saha analysis + Case B physics; [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md) for the CMB perspective.)

## the setup

before recombination, the universe was a **plasma** of free electrons + protons + photons. photons scattered constantly off free electrons via Thomson scattering. mean free path was tiny; **opaque**.

as the universe expanded, $T$ dropped. eventually, electrons + protons combined to form **neutral H**:
$$e^- + p^+ \to H + \gamma$$

once enough electrons are bound up in atoms, photons stop scattering frequently; mean free path becomes longer than the Hubble radius. **transparent**.

## the temperature: $T \sim 0.26$ eV, not $13.6$

naive expectation: H ionises at $\chi_H = 13.6$ eV, so recombines around $T \sim$ that. but observations + Saha calculations give $T_{\rm rec} \sim 0.26$ eV ($T \sim 3000$ K, $z \sim 1100$).

**why much lower**: there are $\eta^{-1} \sim 10^9$ photons per baryon. even a small fraction in the Wien tail above $13.6$ eV is enough to keep H ionised. you need $T$ to drop until the **Wien tail population is below $\sim n_b$**. that gives $T \sim 0.26$ eV.

quantitative: Saha equation 
$$\frac{n_p n_e}{n_H} = \left(\frac{m_e k_BT}{2\pi\hbar^2}\right)^{3/2}\,e^{-\chi_H/k_BT}$$

solving for ionisation fraction $X_e = n_e/n_b$:
- $T \sim 0.5$ eV: $X_e \sim 0.99$ (still ionised).
- $T \sim 0.30$ eV: $X_e \sim 0.5$.
- $T \sim 0.25$ eV: $X_e \sim 0.1$.
- $T \sim 0.20$ eV: $X_e \sim 0.001$.

so recombination is **rapid** but not instantaneous. happens over $\Delta z \sim 100$ around $z = 1100$.

## the redshift + age

with $T(z) = T_0(1 + z)$ + $T_0 = 2.725$ K $= 2.35 \times 10^{-4}$ eV:
$$z_{\rm rec} = T_{\rm rec}/T_0 - 1 \approx 1100$$

corresponding cosmic age:
$$t_{\rm rec} \approx 380\,000\,\text{yr}$$

(in $\Lambda$CDM).

## the consequences

after recombination:
- **photons free-stream**: their distribution is **frozen** at recombination. observed today as the **CMB** with anisotropies $\Delta T/T \sim 10^{-5}$.
- **baryons fall into dark-matter potentials**: gas can collapse + form structures.
- **the Dark Ages begin**: no luminous sources for $\sim 100$ Myr, until first stars form.

## the last scattering surface

photons we see in the CMB had their **last scattering** at recombination. this defines a 2D **last scattering surface** (LSS) at $z = 1100$.

LSS thickness $\sim 100$ in $z$ units. corresponds to a comoving thickness of $\sim 10$ Mpc.

CMB anisotropies are signs of density perturbations on the LSS: hotter spots = denser regions; colder = under-dense. directly observable.

## the late ionisation history

after recombination at $z = 1100$, the universe stays largely **neutral** until **reionisation** at $z \sim 6$ to $10$, when first stars + AGN reionise the IGM.

so the **electron density** has a U-shape: high before recombination, low between $z = 1100$ + $\sim 10$, then high again after reionisation.

## see also

- [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.md)
- [Decoupling](../../02_Zettel/Theory/Decoupling.md)
- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md)
- CMB — discovery and blackbody spectrum
- [CMB anisotropies](../../02_Zettel/Theory/CMB anisotropies.md)
- [Reionization](../../02_Zettel/Theory/Reionization.md)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.md)
- [Transition epochs](../../02_Zettel/Theory/Transition epochs.md)
- [Case A vs Case B recombination](../../02_Zettel/Theory/Case A vs Case B recombination.md)
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
