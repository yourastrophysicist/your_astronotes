---
layout: default
title: "Atomic term symbols"
---

a compact notation for an atomic state, encoding $L$, $S$, $J$, and parity in one symbol.

## the form

$$\boxed{\, n^{(2S+1)}L_J^{p} \,}$$

read as: "principal $n$, multiplicity $(2S+1)$, term letter $L$, total angular momentum subscript $J$, parity superscript $p$."

elements:
- **$n$**: usually omitted unless it is the relevant principal quantum number for the active electron.
- **$2S+1$**: multiplicity, the **upper-left superscript**. $S = 0 \to 1$ (singlet), $1/2 \to 2$ (doublet), $1 \to 3$ (triplet), $3/2 \to 4$ (quartet), etc.
- **$L$**: capital letter encoding $L = 0, 1, 2, 3, 4, \dots$ as **S, P, D, F, G, H, I, K, L, M, ...** (no J, omits "J" because confusable with $J$).
- **$J$**: lower-right subscript, the total angular momentum.
- **$p$**: upper-right superscript. **$o$** for odd parity ($\sum\ell_i$ odd), **$e$** (or sometimes nothing) for even.

## reading examples

- **$1\,^2S_{1/2}^e$**: $n = 1$, $S = 1/2$ (doublet), $L = 0$, $J = 1/2$, even parity. this is the H ground state.
- **$2\,^3P_2^o$**: $n = 2$, $S = 1$ (triplet), $L = 1$, $J = 2$, odd parity. this is one sublevel of $2p$ excited state of He I.
- **$3\,^2P_{3/2}^o$**: $n = 3$, doublet, $L = 1$, $J = 3/2$, odd. this is one of the Na D-line upper levels.
- **$2\,^3P_0^o$, $2\,^3P_1^o$, $2\,^3P_2^o$**: the three sublevels of the $2p^2$ ground term of C I (Hund $J = 0$ is the ground state since $2p^2$ is less than half-filled).

## fine structure

a single $(L, S)$ term has $r$ sublevels labelled by $J$:
- if $L \ge S$: $r = 2S+1$ (multiplicity).
- if $L < S$: $r = 2L+1$.

so a $^3P$ term has $J = 0, 1, 2$ (three sublevels). a $^2D$ term has $J = 3/2, 5/2$. a $^1S$ term has $J = 0$ only (singlet).

## parity

$$p = (-1)^{\sum_i \ell_i}$$

so an odd number of electrons in odd orbitals ($p, f, h, \dots$) gives odd parity. all closed shells are even, so only valence electrons matter.

example: $2p^1 \to L = 1$, parity $(-1)^1 = -1$ $\to$ odd. $2s^1 \to$ even. $2p^2 \to$ even (two odd-orbital electrons cancel).

## why parity matters

the **electric dipole selection rule** requires $\Delta p = \text{change}$, i.e. odd $\to$ even or vice versa. if both states have the same parity, the transition is **parity-forbidden** at electric dipole. it can still proceed at magnetic dipole or electric quadrupole, $\sim 10^5$ to $10^8$ times weaker. these are the **forbidden lines** of nebular spectroscopy ([Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)).

the famous $[OIII]\,\lambda 4959, 5007$ Å lines arise from a parity-forbidden transition $^3P^e \to {^1\!}D^e$, both even, so E1 is forbidden but M1 is allowed.

## see also

- [Quantum numbers and atomic states](../../02_Zettel/Theory/Quantum numbers and atomic states.md)
- [Russell-Saunders LS coupling](../../02_Zettel/Theory/Russell-Saunders LS coupling.md)
- [Hund's rules](../../02_Zettel/Theory/Hund's rules.md)
- [Selection rules](../../02_Zettel/Theory/Selection rules.md)
- [Statistical weight g](../../02_Zettel/Theory/Statistical weight g.md)
- [Forbidden vs permitted vs semiforbidden transitions](../../02_Zettel/Theory/Forbidden vs permitted vs semiforbidden transitions.md)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- Energy level diagrams Grötrian
