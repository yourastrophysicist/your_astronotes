---
layout: "default"
title: "Equivalent vs nonequivalent electrons"
---
{% raw %}
a subtle but important distinction in working out the allowed terms of an atomic configuration.

## definitions

- **nonequivalent electrons**: electrons in different $(n, \ell)$ orbitals. Pauli exclusion places no constraint between them; all $(L, S)$ combinations are allowed.
- **equivalent electrons**: electrons in the **same** $(n, \ell)$ orbital. Pauli exclusion forbids two electrons with the same $(m_\ell, s)$, restricting the allowed terms.

## counting microstates

for $n_e$ equivalent electrons in a shell of capacity $t = 2(2\ell+1)$, the number of allowed microstates is
$$N_{\rm states} = \binom{t}{n_e} = \frac{t!}{n_e!(t - n_e)!}$$

each microstate has specific values of $M_L = \sum m_{\ell,i}$ and $M_S = \sum m_{s,i}$. the allowed $(L, S)$ terms are then the unique values of $(M_L, M_S)$ that organise into proper terms.

## the $np^2$ example

two equivalent $p$ electrons. capacity $t = 6$, $n_e = 2$, $N = 15$ microstates.

after listing all and grouping into terms, the allowed terms are:
$$np^2: \quad ^3P, ^1D, ^1S$$
totalling $9 + 5 + 1 = 15$ states. 

these are the terms of carbon ground configuration. by [Hund's rules](./Hund%27s%20rules.html), $^3P$ is the ground term.

## the $np^3$ example

three equivalent $p$ electrons, $N = 20$ microstates.

allowed terms:
$$np^3: \quad ^4S, ^2D, ^2P$$
totalling $4 + 10 + 6 = 20$. 

ground state: $^4S_{3/2}$ (nitrogen).

## the $np^4$ example (= $np^2$ holes)

four equivalent $p$ electrons. by **particle-hole symmetry**, $np^4$ has the same allowed terms as $np^2$ (since two empty orbitals have the same coupling structure as two filled ones):
$$np^4: \quad ^3P, ^1D, ^1S$$
ground: $^3P_2$ (oxygen, since shell more than half-filled).

## why nonequivalent electrons are easier

for nonequivalent electrons in different orbitals, all combinations of $L$ and $S$ are independently allowed; you just compute the vectorial sum. example: $1s^1\,2p^1$ has $L = 1$ from the $p$ electron, $S = 0$ or $1$ from spin coupling, giving $^1P$ and $^3P$ terms (4 + 12 = 16 microstates, all allowed).

## Slater's procedure (general)

for any configuration with both equivalent and nonequivalent groups:
1. compute the allowed terms within each equivalent-electron subset separately.
2. couple the resulting terms vectorially with the nonequivalent groups.
3. the combinatorial count must match the binomial product.

textbooks (Cowan, *Theory of Atomic Structure*; Condon-Shortley) tabulate the allowed-terms tables for $\ell^n$ configurations up to filled shells.

## see also

- [Quantum numbers and atomic states](./Quantum%20numbers%20and%20atomic%20states.html)
- [Atomic term symbols](./Atomic%20term%20symbols.html)
- [Hund's rules](./Hund%27s%20rules.html)
- [Russell-Saunders LS coupling](./Russell-Saunders%20LS%20coupling.html)
- [Pauli principle and electron configurations](./Pauli%20principle%20and%20electron%20configurations.html)
- [Statistical weight g](./Statistical%20weight%20g.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Hund%27s%20rules.html" class="backlink-item">Hund's rules</a></li>
    <li class="backlink-item-wrap"><a href="./OIII%20forbidden%20lines.html" class="backlink-item">OIII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./SII%20forbidden%20lines.html" class="backlink-item">SII forbidden lines</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20ne%20diagnostics.html" class="backlink-item">Spectroscopic ne diagnostics</a></li>
  </ul>
</div>
