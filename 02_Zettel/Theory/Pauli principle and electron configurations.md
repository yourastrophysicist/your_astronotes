---
layout: default
title: "Pauli principle and electron configurations"
---

the **Pauli exclusion principle**: no two electrons in the same atom can have the same set of quantum numbers $(n, \ell, m_\ell, s)$. consequence: each $(n, \ell)$ shell has a maximum capacity of $2(2\ell+1)$ electrons.

## shell capacities

| $\ell$ | letter | max electrons $2(2\ell+1)$ |
|---|---|---|
| 0 | s | 2 |
| 1 | p | 6 |
| 2 | d | 10 |
| 3 | f | 14 |

cumulative shell capacities: $1s$ (2), $2s + 2p$ (8), $3s + 3p$ (8), $3d$ (10), $4s + 4p$ (8), etc.

## the Aufbau order

electrons fill orbitals from lowest energy to highest, following the **Madelung rule** ($n + \ell$ ascending, ties broken by smaller $n$):
$$1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p$$

this is approximate; some elements have anomalies (e.g. Cr is $[Ar] 3d^5 4s^1$, not $3d^4 4s^2$, because half-filled $d$-shell is energetically favourable).

## the configurations of common astronomical species

| element | $Z$ | configuration | ground term |
|---|---|---|---|
| H | 1 | $1s^1$ | $^2S_{1/2}$ |
| He | 2 | $1s^2$ | $^1S_0$ |
| Li | 3 | $[He]\, 2s^1$ | $^2S_{1/2}$ |
| C | 6 | $[He]\, 2s^2 2p^2$ | $^3P_0$ |
| N | 7 | $[He]\, 2s^2 2p^3$ | $^4S_{3/2}$ |
| O | 8 | $[He]\, 2s^2 2p^4$ | $^3P_2$ |
| Na | 11 | $[Ne]\, 3s^1$ | $^2S_{1/2}$ |
| Mg | 12 | $[Ne]\, 3s^2$ | $^1S_0$ |
| Si | 14 | $[Ne]\, 3s^2 3p^2$ | $^3P_0$ |
| S | 16 | $[Ne]\, 3s^2 3p^4$ | $^3P_2$ |
| Ca | 20 | $[Ar]\, 4s^2$ | $^1S_0$ |
| Fe | 26 | $[Ar]\, 3d^6 4s^2$ | $^5D_4$ |

## valence vs core

the **valence** electrons (outermost) determine the spectroscopic behaviour. the **core** (closed shells) provides binding but not spectroscopic structure.

example: Na ground $1s^2 2s^2 2p^6 3s^1$:
- core: $1s^2 2s^2 2p^6$ (Ne-like).
- valence: $3s^1$.
- the spectroscopy is hydrogen-like with $Z_{\rm eff}$ replacing $Z$: a single electron in s, p, d states.

this is why **alkali atoms** (Li, Na, K, Rb, Cs) have spectra that look like H, with the famous D-doublet from $3p \to 3s$ for Na.

## ions and isoelectronic sequences

removing electrons from neutral $Z$ atoms produces ions with simpler valence configurations. when an ion has the same number of electrons as a neutral lower-$Z$ atom, the two are **isoelectronic**:
- He$^+$ has $Z = 2$ and 1 electron, like H.
- C$^{4+}$ has $Z = 6$ and 2 electrons, like He.

isoelectronic ions have the same spectroscopic structure with rescaled energies (roughly $\propto Z_{\rm eff}^2$). useful for predicting unobserved spectra.

## see also

- [Quantum numbers and atomic states](../../02_Zettel/Theory/Quantum numbers and atomic states.html)
- [Atomic term symbols](../../02_Zettel/Theory/Atomic term symbols.html)
- [Hund's rules](../../02_Zettel/Theory/Hund's rules.html)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- [Helium energy levels](../../02_Zettel/Theory/Helium energy levels.html)
- [Sodium and alkalis](../../02_Zettel/Theory/Sodium and alkalis.html)
- [Calcium and CaII H+K](../../02_Zettel/Theory/Calcium and CaII H+K.html)
- [Magnesium and alkali earths](../../02_Zettel/Theory/Magnesium and alkali earths.html)
