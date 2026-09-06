---
layout: default
title: "Decoupling"
---

**decoupling** is the moment a particle species stops interacting with the rest of the cosmic plasma. its distribution **freezes** at that moment + free-streams thereafter. happens for different species at different epochs. for **photons**, decoupling at $z \sim 1100$ produces the CMB.

(companion: [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md) + [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.md).)

## the criterion

a species **decouples** when its interaction rate $\Gamma$ falls below the Hubble expansion rate $H$:
$$\Gamma(t) < H(t)$$

before this: many interactions per Hubble time, equilibrium maintained.
after: no interactions, free streaming.

## photon decoupling

photons interact with free electrons via Thomson scattering:
$$\Gamma_\gamma = n_e\,\sigma_T\,c$$

with $n_e$ free-electron density + $\sigma_T = 6.65 \times 10^{-25}$ cm$^2$.

while $X_e \sim 1$ (full ionisation), $n_e$ is high + $\Gamma \gg H$. tightly coupled.

once recombination depletes $n_e$ by $\sim 10^4$ (electrons bound in atoms), $\Gamma$ drops below $H$. photons decouple.

happens around $z \sim 1100$, $T \sim 0.26$ eV.

## photon free streaming

after decoupling:
- mean free path $\to \infty$.
- distribution **frozen** at recombination temperature.
- redshifted as photons traverse expanding universe.
- observed today as the **CMB** at $T_0 = 2.725$ K.

so the CMB is a **fossil** of the last scattering moment.

## neutrino decoupling

neutrinos decouple much earlier. at $T \sim 1$ MeV ($z \sim 10^{10}$, $t \sim 1$ s):
$$\Gamma_\nu = n\sigma_W c \propto G_F^2 T^5$$

(with $G_F$ Fermi constant). $\Gamma_\nu$ falls faster than $H \propto T^2$ in radiation era. crossover at $T \sim 1$ MeV.

after decoupling, neutrinos free-stream. cosmic neutrino background (CνB) remains, predicted at $T_\nu = (4/11)^{1/3} T_\gamma \approx 1.95$ K today.

(the $(4/11)^{1/3}$ comes from $e^\pm$ annihilation reheating photons but not neutrinos. see Q19 - radiation universe.)

## dark matter decoupling

cold dark matter (WIMP-like) decouples when Boltzmann-suppressed annihilations stop:
$$\Gamma_\chi = n_\chi\langle\sigma v\rangle$$

happens at $T \sim m_\chi/20$ (Boltzmann suppression). leaves a **relic abundance**:
$$\Omega_\chi h^2 \sim 0.1 \cdot (3 \times 10^{-26}\,\text{cm}^3/\text{s})/\langle\sigma v\rangle$$

the **WIMP miracle**: weak-scale cross sections give the right relic. partial of the original motivation for WIMP dark matter, though direct-detection experiments have ruled out much of the parameter space.

see Dark matter relics — WIMP miracle.

## the universal pattern

every species in the cosmic plasma:
1. **interacts strongly + thermally** when $\Gamma \gg H$.
2. **decouples** when $\Gamma$ falls below $H$.
3. **free-streams** thereafter.
4. **redshifts** with the expansion.

so the universe has a **history of decouplings**:
- top quark decouples at $T \sim 100$ GeV.
- bottom quark at $\sim 5$ GeV.
- W/Z at $\sim 80$ GeV.
- charm at $\sim 1$ GeV.
- QCD transition at $\sim 200$ MeV.
- $\pi$ at $\sim 100$ MeV.
- neutrinos at $\sim 1$ MeV.
- $e^\pm$ annihilation at $\sim 0.5$ MeV.
- nucleons at much earlier (BBN at $\sim 1$ MeV).
- photons at $\sim 0.26$ eV.

each leaves a frozen relic abundance, observable today (CMB, $C\nu B$, dark matter halos, etc.).

## see also

- [Photon decoupling and CMB](../../02_Zettel/Theory/Photon decoupling and CMB.md)
- [Decoupling and freeze-out](../../02_Zettel/Theory/Decoupling and freeze-out.md)
- [Recombination](../../02_Zettel/Theory/Recombination.md)
- [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.md)
- [Brief thermal history](../../02_Zettel/Theory/Brief thermal history.md)
- [Transition epochs](../../02_Zettel/Theory/Transition epochs.md)
- CMB — discovery and blackbody spectrum
- Dark matter relics — WIMP miracle
- [Cosmic_inventory_neutrinos](../../02_Zettel/Theory/Cosmic_inventory_neutrinos.md)
- Q19 - radiation universe
- [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.md)
