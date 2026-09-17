---
layout: "default"
title: "Hund's rules"
---
{% raw %}
**Hund's rules** identify the **ground-state term** among all the LS-allowed terms of an electron configuration. valid in Russell-Saunders coupling for atoms with partially filled shells. an exam staple.

## the three rules in order

apply in this order, breaking ties at each step:

1. **highest $S$** (highest multiplicity). spins want to be parallel to minimise electron-electron repulsion (exchange interaction).
2. **highest $L$** (given the chosen $S$). orbital angular momenta want to be parallel; orbits with same direction are spatially correlated, reducing repulsion.
3. **lowest $J$ for less-than-half-filled shells**, **highest $J$ for more-than-half-filled**. spin-orbit coupling sign flips at half-filling.

formal statement of rule 3:
- shell less than half-filled: $J = |L - S|$.
- shell exactly half-filled: $J = S$ (since $L = 0$ in this case for a half-filled shell of equivalent electrons).
- shell more than half-filled: $J = L + S$.

## worked examples

### carbon $1s^2 2s^2 2p^2$

allowed terms from $2p^2$ (equivalent electrons): $^1S, ^1D, ^3P$.
- highest $S$: triplet $\to ^3P$.
- $L = 1$, $S = 1$, so $J = 0, 1, 2$ are sublevels.
- $2p^2$ is less than half-filled (2 of 6) $\to$ ground state is $J = |L - S| = 0$.
- **ground**: $^3P_0$.

### nitrogen $2p^3$

allowed terms: $^4S, ^2D, ^2P$.
- highest $S$: $^4S$.
- $L = 0$, $S = 3/2$, $J = 3/2$ only.
- $2p^3$ is exactly half-filled.
- **ground**: $^4S_{3/2}$.

### oxygen $2p^4$

same allowed terms as $2p^2$ (hole-particle duality): $^1S, ^1D, ^3P$.
- highest $S$: $^3P$.
- shell more than half ($4$ of $6$) $\to$ $J = L + S = 2$.
- **ground**: $^3P_2$.

### iron-peak elements

iron $3d^6 4s^2$: ground $^5D_4$ ($d^6$ more than half-filled $\to J = L+S$). $S = 2$, $L = 2$. essential for stellar abundances.

## why these rules

physical origins:
1. **parallel spins** minimise overlap (Pauli) and so reduce Coulomb repulsion. exchange energy is negative for parallel spins.
2. **aligned $L$** correlates electron motion in the orbital, again reducing average repulsion.
3. **spin-orbit sign** depends on the sign of $\langle \vec L \cdot \vec S\rangle$, which flips for shells more than half-filled (equivalent to a hole spin).

## scope and limitations

- valid for **ground state** only. excited terms can violate the rules.
- valid in **LS coupling**. for jj or intermediate, more careful analysis needed.
- the predicted ground term is usually correct for $Z < 30$. for heavier atoms intermediate coupling can shift it.

## see also

- [Russell-Saunders LS coupling](./Russell-Saunders%20LS%20coupling.html)
- [Atomic term symbols](./Atomic%20term%20symbols.html)
- [Quantum numbers and atomic states](./Quantum%20numbers%20and%20atomic%20states.html)
- [Equivalent vs nonequivalent electrons](./Equivalent%20vs%20nonequivalent%20electrons.html)
- [Selection rules](./Selection%20rules.html)
- [Statistical weight g](./Statistical%20weight%20g.html)
- [Pauli principle and electron configurations](./Pauli%20principle%20and%20electron%20configurations.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Atomic%20term%20symbols.html" class="backlink-item">Atomic term symbols</a></li>
    <li class="backlink-item-wrap"><a href="./Energy%20level%20diagrams%20Grotrian.html" class="backlink-item">Energy level diagrams Grotrian</a></li>
    <li class="backlink-item-wrap"><a href="./Equivalent%20vs%20nonequivalent%20electrons.html" class="backlink-item">Equivalent vs nonequivalent electrons</a></li>
    <li class="backlink-item-wrap"><a href="./Pauli%20principle%20and%20electron%20configurations.html" class="backlink-item">Pauli principle and electron configurations</a></li>
    <li class="backlink-item-wrap"><a href="./Quantum%20numbers%20and%20atomic%20states.html" class="backlink-item">Quantum numbers and atomic states</a></li>
    <li class="backlink-item-wrap"><a href="./Russell-Saunders%20LS%20coupling.html" class="backlink-item">Russell-Saunders LS coupling</a></li>
    <li class="backlink-item-wrap"><a href="./Statistical%20weight%20g.html" class="backlink-item">Statistical weight g</a></li>
  </ul>
</div>
