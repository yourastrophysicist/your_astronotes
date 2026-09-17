---
layout: "default"
title: "Russell-Saunders LS coupling"
---
{% raw %}
**Russell-Saunders coupling** (or **LS coupling**) is the angular-momentum coupling scheme valid when spin-spin and orbit-orbit interactions dominate over spin-orbit. for light atoms ($Z \lesssim 30$) this is the right framework, and it's how astronomical spectra are usually described.

## the construction

for a multi-electron atom in LS coupling:
1. **add up orbital angular momenta**: $\vec L = \sum_i \vec\ell_i$.
2. **add up spins**: $\vec S = \sum_i \vec s_i$.
3. **then couple** $\vec L$ and $\vec S$ to give total: $\vec J = \vec L + \vec S$.

allowed total values:
- $L$: integer between $|\ell_1 - \ell_2|$ and $\ell_1 + \ell_2$, for two electrons. for more, iterate.
- $S$: half-integer or integer, between $|s_1 - s_2|$ and $s_1 + s_2$. for $n$ electrons, $S \in \{0, 1, 2, \dots\}$ if $n$ even, $\{1/2, 3/2, \dots\}$ if odd.
- $J$: integer or half-integer, between $|L - S|$ and $L + S$.

each combination of $(L, S)$ is called a **term**; each combination of $(L, S, J)$ is a **multiplet sublevel** (often just called a "level").

## notation: term symbols

the term symbol is
$$n^{(2S+1)}L_J^{p}$$
- **$n$**: principal quantum number of the active electron.
- **$2S+1$**: multiplicity. $S = 0 \to 1$ (singlet), $S = 1/2 \to 2$ (doublet), $S = 1 \to 3$ (triplet).
- **$L$**: capital letter, S, P, D, F, G, ... for $L = 0, 1, 2, 3, 4, \dots$.
- **$J$**: subscript, the total angular momentum.
- **$p$**: parity, $e$ (even, $(-1)^{\sum\ell_i} = +1$) or $o$ (odd).

example: $2\,^3P_2^o$ means principal $n = 2$, multiplicity $3$ (so $S = 1$), $L = 1$, $J = 2$, odd parity.

## fine structure

a single $(L, S)$ term splits into $r = \min(2S+1, 2L+1)$ sublevels by spin-orbit interaction. the energy splitting is **fine structure**, typically $\sim 10^{-3}$ to $10^{-1}$ eV.

example: the $^2P$ term of Na has $J = 1/2$ and $J = 3/2$, the famous **D-doublet** at $5895.94$ Å and $5889.95$ Å, separated by $\sim 6$ Å.

## Hund's rules for the ground state

among all terms allowed by an electron configuration, the lowest-energy one (the ground state) is selected by:
1. highest $S$.
2. then highest $L$.
3. then $J = |L - S|$ if shell less than half-filled, $J = L + S$ if more than half-filled.

so for $C$ ($2p^2$): possible terms $^3P, ^1D, ^1S$. highest $S = 1$ $\to$ $^3P$. shell less than half $\to$ $J = 0$. ground state $^3P_0$.

see [Hund's rules](./Hund%27s%20rules.html) for the full statement.

## when LS coupling breaks down

for heavy atoms ($Z \gtrsim 80$), spin-orbit becomes comparable to or larger than spin-spin and orbit-orbit. in this case, individual $\vec j_i$ couple first:
$$\vec j_i = \vec\ell_i + \vec s_i$$
then $\vec J = \sum_i \vec j_i$. this is **jj coupling** ([jj coupling](./jj%20coupling.html)).

intermediate-coupling cases are common in mid-$Z$ elements (Fe-peak elements in stars), where neither LS nor jj is strictly valid; the state is a quantum-mechanical mixture.

## see also

- [Quantum numbers and atomic states](./Quantum%20numbers%20and%20atomic%20states.html)
- [jj coupling](./jj%20coupling.html)
- [Atomic term symbols](./Atomic%20term%20symbols.html)
- [Hund's rules](./Hund%27s%20rules.html)
- [Selection rules](./Selection%20rules.html)
- [Statistical weight g](./Statistical%20weight%20g.html)
- [Hydrogen spectral series](./Hydrogen%20spectral%20series.html)
- [Helium energy levels](./Helium%20energy%20levels.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Atomic%20term%20symbols.html" class="backlink-item">Atomic term symbols</a></li>
    <li class="backlink-item-wrap"><a href="./Equivalent%20vs%20nonequivalent%20electrons.html" class="backlink-item">Equivalent vs nonequivalent electrons</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20vs%20permitted%20vs%20semiforbidden%20transitions.html" class="backlink-item">Forbidden vs permitted vs semiforbidden transitions</a></li>
    <li class="backlink-item-wrap"><a href="./Helium%20energy%20levels.html" class="backlink-item">Helium energy levels</a></li>
    <li class="backlink-item-wrap"><a href="./Hund%27s%20rules.html" class="backlink-item">Hund's rules</a></li>
    <li class="backlink-item-wrap"><a href="./Quantum%20numbers%20and%20atomic%20states.html" class="backlink-item">Quantum numbers and atomic states</a></li>
    <li class="backlink-item-wrap"><a href="./Selection%20rules.html" class="backlink-item">Selection rules</a></li>
    <li class="backlink-item-wrap"><a href="./Statistical%20weight%20g.html" class="backlink-item">Statistical weight g</a></li>
    <li class="backlink-item-wrap"><a href="./jj%20coupling.html" class="backlink-item">jj coupling</a></li>
  </ul>
</div>
