---
layout: default
title: "Energy level diagrams Grotrian"
---

a **Grötrian diagram** plots the energy levels of an atom (vertical axis: energy in eV or cm$^{-1}$) along with the allowed transitions between them (lines connecting levels). named after Walter Grotrian who developed the standard format in the 1920s.

## reading a Grötrian diagram

each diagram has:
- **horizontal columns**: each column groups levels by $L$ value (e.g. all $S$ on the left, $P$ next, $D$ next).
- **separation by spin**: typically singlets in one half-page, triplets in the other (for atoms with multiple $S$).
- **vertical axis**: energy, with ground state at $0$ and ionisation limit at the top.
- **lines connecting levels**: each represents an allowed transition, labeled by its wavelength.
- **fine structure**: $J$-sublevels appear as closely-spaced horizontal bars within each $LS$ term.

## why this is useful

the Grötrian diagram makes **at a glance**:
- which transitions are allowed (lines drawn) vs forbidden (often omitted).
- the relative energies of levels, which sets the wavelengths of transitions via $\lambda = hc/\Delta E$.
- the structure of singlet vs triplet states (e.g. para- vs ortho-helium).
- the role of the ionisation limit and resonance lines.

## hydrogen Grötrian

for H, all $LS$ terms with the same $n$ have nearly the same energy (only one electron, no shielding). so the Grötrian is essentially a stack of $n = 1, 2, 3, \dots$ levels:
- **Lyman series** ($n \to 1$): UV ($\lambda \le 1216$ Å).
- **Balmer series** ($n \to 2$): optical (H$\alpha$, H$\beta$, H$\gamma$, ...).
- **Paschen series** ($n \to 3$): NIR.
- **Brackett series** ($n \to 4$): NIR.

formula: Rydberg-Ritz $\Delta E_{nm} = R_H(1/n^2 - 1/m^2)$, $R_H = 13.6$ eV.

## helium Grötrian

He has two electrons, with two distinct spin systems:
- **parahelium** (singlet, $S = 0$): $1\,^1S$, $2\,^1S$, $2\,^1P$, ....
- **orthohelium** (triplet, $S = 1$): $2\,^3S$, $2\,^3P$, $3\,^3S$, ....

between para and ortho, $\Delta S = 1$ so transitions are spin-forbidden (intersystem). singlet and triplet manifolds are essentially **decoupled** in the Grötrian, each acting like a separate atom.

key transitions:
- He I $\lambda 5876$ (D3): triplet, $3\,^3D \to 2\,^3P^o$.
- He I $\lambda 6678$: singlet, $3\,^1D \to 2\,^1P^o$.
- He II $\lambda 4686$: hydrogenic, $4 \to 3$, second-most ionised so deep in the diagram.

## sodium and the alkali D-doublet

Na ground $3\,^2S_{1/2}$. first excited state $3\,^2P_{1/2,3/2}$, split by spin-orbit. the $3p \to 3s$ transition gives the famous **D-doublet**:
- D$_2$: $3\,^2P_{3/2} \to 3\,^2S_{1/2}$, $\lambda = 5889.95$ Å.
- D$_1$: $3\,^2P_{1/2} \to 3\,^2S_{1/2}$, $\lambda = 5895.94$ Å.

## CI, NI, OI Grötrian diagrams

from the lecture notes (Ciroi 2019-2020, Fig 1.1 to 1.3):
- **CI** $2p^2$: ground $^3P_0$ at $0$ cm$^{-1}$, $^3P_1$ at $16$, $^3P_2$ at $43$, $^1D_2$ at $10\,193$, $^1S_0$ at $21\,648$.
- **NI** $2p^3$: ground $^4S_{3/2}$, then $^2D$ around $19\,200$, $^2P$ around $28\,800$ cm$^{-1}$.
- **OI** $2p^4$: ground $^3P_2$, $^3P_1, ^3P_0$ at $158, 227$, $^1D_2$ at $15\,868$, $^1S_0$ at $33\,793$.

energy conversion: $1$ eV = $8065.54$ cm$^{-1}$, or $\lambda$(Å) $= 12398.42 / E$(eV).

## see also

- [Quantum numbers and atomic states](../../02_Zettel/Theory/Quantum numbers and atomic states.md)
- [Atomic term symbols](../../02_Zettel/Theory/Atomic term symbols.md)
- [Hund's rules](../../02_Zettel/Theory/Hund's rules.md)
- [Selection rules](../../02_Zettel/Theory/Selection rules.md)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.md)
- [Helium energy levels](../../02_Zettel/Theory/Helium energy levels.md)
- [Sodium and alkalis](../../02_Zettel/Theory/Sodium and alkalis.md)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- [Rydberg-Ritz formula](../../02_Zettel/Theory/Rydberg-Ritz formula.md)
