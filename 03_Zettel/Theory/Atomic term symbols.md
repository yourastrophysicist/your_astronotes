---
layout: "default"
title: "Atomic term symbols"
---
{% raw %}
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

the **electric dipole selection rule** requires $\Delta p = \text{change}$, i.e. odd $\to$ even or vice versa. if both states have the same parity, the transition is **parity-forbidden** at electric dipole. it can still proceed at magnetic dipole or electric quadrupole, $\sim 10^5$ to $10^8$ times weaker. these are the **forbidden lines** of nebular spectroscopy ([Forbidden lines](./Forbidden%20lines.html)).

the famous $[OIII]\,\lambda 4959, 5007$ Å lines arise from a parity-forbidden transition $^3P^e \to {^1\!}D^e$, both even, so E1 is forbidden but M1 is allowed.

## see also

- [Quantum numbers and atomic states](./Quantum%20numbers%20and%20atomic%20states.html)
- [Russell-Saunders LS coupling](./Russell-Saunders%20LS%20coupling.html)
- [Hund's rules](./Hund%27s%20rules.html)
- [Selection rules](./Selection%20rules.html)
- [Statistical weight g](./Statistical%20weight%20g.html)
- [Forbidden vs permitted vs semiforbidden transitions](./Forbidden%20vs%20permitted%20vs%20semiforbidden%20transitions.html)
- [Forbidden lines](./Forbidden%20lines.html)
- Energy level diagrams Grötrian
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (18)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Calcium%20and%20CaII%20H%2BK.html" class="backlink-item">Calcium and CaII H+K</a></li>
    <li class="backlink-item-wrap"><a href="./Energy%20level%20diagrams%20Grotrian.html" class="backlink-item">Energy level diagrams Grotrian</a></li>
    <li class="backlink-item-wrap"><a href="./Equivalent%20vs%20nonequivalent%20electrons.html" class="backlink-item">Equivalent vs nonequivalent electrons</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20lines.html" class="backlink-item">Forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20vs%20permitted%20vs%20semiforbidden%20transitions.html" class="backlink-item">Forbidden vs permitted vs semiforbidden transitions</a></li>
    <li class="backlink-item-wrap"><a href="./Helium%20energy%20levels.html" class="backlink-item">Helium energy levels</a></li>
    <li class="backlink-item-wrap"><a href="./Hund%27s%20rules.html" class="backlink-item">Hund's rules</a></li>
    <li class="backlink-item-wrap"><a href="./Hydrogen%20spectral%20series.html" class="backlink-item">Hydrogen spectral series</a></li>
    <li class="backlink-item-wrap"><a href="./Magnesium%20and%20alkali%20earths.html" class="backlink-item">Magnesium and alkali earths</a></li>
    <li class="backlink-item-wrap"><a href="./OIII%20forbidden%20lines.html" class="backlink-item">OIII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./Pauli%20principle%20and%20electron%20configurations.html" class="backlink-item">Pauli principle and electron configurations</a></li>
    <li class="backlink-item-wrap"><a href="./Quantum%20numbers%20and%20atomic%20states.html" class="backlink-item">Quantum numbers and atomic states</a></li>
    <li class="backlink-item-wrap"><a href="./Russell-Saunders%20LS%20coupling.html" class="backlink-item">Russell-Saunders LS coupling</a></li>
    <li class="backlink-item-wrap"><a href="./Selection%20rules.html" class="backlink-item">Selection rules</a></li>
    <li class="backlink-item-wrap"><a href="./Sodium%20and%20alkalis.html" class="backlink-item">Sodium and alkalis</a></li>
    <li class="backlink-item-wrap"><a href="./Statistical%20weight%20g.html" class="backlink-item">Statistical weight g</a></li>
    <li class="backlink-item-wrap"><a href="./jj%20coupling.html" class="backlink-item">jj coupling</a></li>
  </ul>
</div>
