---
layout: default
title: "Helium energy levels"
---

helium has two electrons; their spins can be antiparallel (singlet, $S = 0$, **parahelium**) or parallel (triplet, $S = 1$, **orthohelium**). these are essentially **two decoupled Grötrian diagrams** because intersystem transitions are spin-forbidden.

## the ground state

$1s^2$, $L = 0$, $S = 0$, $J = 0$ $\to$ $1\,^1S_0^e$. statistical weight $g = 1$. the only possible ground state (Pauli forces antiparallel spins for two equivalent $1s$ electrons).

orthohelium has no $1s^2$ analogue: with $S = 1$ both spins parallel, you need two distinct orbitals. lowest orthohelium state is $1s^1 2s^1$, term $2\,^3S_1^e$, **metastable** (forbidden to ground at E1 since same parity, but at $19.82$ eV above ground).

## excited states

| configuration | terms |
|---|---|
| $1s^1 2s^1$ | $2\,^1S_0^e$ (parahelium) and $2\,^3S_1^e$ (orthohelium) |
| $1s^1 2p^1$ | $2\,^1P_1^o$ and $2\,^3P_{0,1,2}^o$ |
| $1s^1 3s^1$ | $3\,^1S_0^e$ and $3\,^3S_1^e$ |
| $1s^1 3p^1$ | $3\,^1P_1^o$ and $3\,^3P_{0,1,2}^o$ |
| $1s^1 3d^1$ | $3\,^1D_2^e$ and $3\,^3D_{1,2,3}^e$ |

## the famous lines

| line | transition | $\lambda$ (Å) | system |
|---|---|---|---|
| He I $\lambda 5876$ (D3) | $3\,^3D \to 2\,^3P^o$ | 5875.6 | triplet |
| He I $\lambda 6678$ | $3\,^1D \to 2\,^1P^o$ | 6678.2 | singlet |
| He I $\lambda 4471$ | $4\,^3D \to 2\,^3P^o$ | 4471.5 | triplet |
| He I $\lambda 4922$ | $4\,^1D \to 2\,^1P^o$ | 4921.9 | singlet |
| He I $\lambda 4026$ | $5\,^3D \to 2\,^3P^o$ | 4026.2 | triplet |
| He I $\lambda 5048$ | $4\,^1S \to 2\,^1P^o$ | 5047.7 | singlet |

He I lines are diagnostic of stellar temperature in B and O stars and of ionisation state in HII regions and AGN.

## He II (singly ionised)

He$^+$ has one electron, hydrogenic with $Z = 2$. all energy levels are $4\times$ those of H (since $E \propto Z^2/n^2$). Pickering series ($n_{\rm lower} = 4$, $n_{\rm upper} = 5, 6, 7, ...$) lies in the optical because the higher $Z^2$ moves the Brackett series of "He II" into visible.

key transitions:
- **He II $\lambda 1640$**: $3 \to 2$, UV. signature of very hot ionising sources.
- **He II $\lambda 4686$**: $4 \to 3$, optical. seen in O stars, WR stars, AGN broad-line regions, planetary nebulae with hot central stars. requires ionising photons of $h\nu > 54.4$ eV.

## why this matters

helium is the **second-most abundant element**, $\sim 24\%$ by mass in stars. its line strengths trace temperature:
- **He I lines** appear in B stars, peak at B2 ($T \sim 22\,000$ K).
- **He II lines** appear in O stars, peak at O5 ($T \sim 40\,000$ K).
- both absent in cooler stars (A and later) because no excitation at low $T$.
- both absent in hottest stars (Wolf-Rayet) because all helium is fully ionised; only He III continuum.

so the He I / He II ratio is a temperature thermometer for early-type stars. plus, He I and He II emission diagnose AGN (Seyfert) and hot evolved stars (PN central stars, sdO).

## see also

- [Quantum numbers and atomic states](../../02_Zettel/Theory/Quantum numbers and atomic states.html)
- [Atomic term symbols](../../02_Zettel/Theory/Atomic term symbols.html)
- [Russell-Saunders LS coupling](../../02_Zettel/Theory/Russell-Saunders LS coupling.html)
- [Selection rules](../../02_Zettel/Theory/Selection rules.html)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- Energy level diagrams Grötrian
- [Helium population vs T](../../02_Zettel/Theory/Helium population vs T.html)
- [Why the Sequence OBAFGKM](../../02_Zettel/Theory/Why the Sequence OBAFGKM.html)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.html)
