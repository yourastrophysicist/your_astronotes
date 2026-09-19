---
layout: "default"
title: "Statistical weight g"
---
the **statistical weight** $g$ of a level is its degeneracy: the number of microscopic states with the same energy. used in Boltzmann + Saha equations to weight populations.

## per multiplet sublevel ($J$)

a given $(L, S, J)$ sublevel has degeneracy:
$$g_J = 2J + 1$$
because $m_J$ takes $2J + 1$ values from $-J$ to $+J$.

## per term ($L, S$)

summing over all $J$ within an $LS$ term:
$$g_{LS} = (2L+1)(2S+1)$$

derivation: $\sum_{J = \lvert L-S\rvert}^{L+S}(2J+1)$. the algebra collapses to $(2L+1)(2S+1)$.

## per shell of given $(n, \ell)$ in a hydrogenic atom

each $(n, \ell)$ holds at most $2(2\ell+1)$ electrons. sum over all $\ell$ for given $n$:
$$g_n = \sum_{\ell=0}^{n-1} 2(2\ell+1) = 2n^2$$
the well-known $2, 8, 18, 32, \dots$ shell capacities.

## how $g$ enters Boltzmann

the Boltzmann distribution between two levels in the same ion:
$$\frac{n_i}{n_j} = \frac{g_i}{g_j}\,e^{-(E_i - E_j)/k_BT}$$
the $g_i/g_j$ factor accounts for level degeneracy. high-$J$ sublevels have proportionally more population just from counting.

## how $g$ enters Saha

between adjacent ionisation stages:
$$\frac{n_{i+1} n_e}{n_i} = \frac{2 g_{i+1}}{g_i}\,\left(\frac{2\pi m_e k_B T}{h^2}\right)^{3/2}\,e^{-\chi/k_BT}$$
the factor of $2$ in the numerator is the spin degeneracy of the free electron. $g_i$ and $g_{i+1}$ are the partition functions of the two ion stages.

## examples

- **H I ground**: $1\,^2S_{1/2}^e$, $g = 2J+1 = 2$.
- **H I $n = 2$**: total $g = 2n^2 = 8$. the level has $2\,^2S_{1/2}^e$ ($g = 2$) and $2\,^2P_{1/2}^o$ ($g = 2$) and $2\,^2P_{3/2}^o$ ($g = 4$), summing to $8$.
- **He I ground**: $1\,^1S_0^e$, $g = 1$.
- **C I ground**: $^3P_0$, $g = 1$ (only $J = 0$ sublevel).
- **Na I ground**: $3\,^2S_{1/2}^e$, $g = 2$.

## partition function

generalisation that includes all populated levels at temperature $T$:
$$Z(T) = \sum_i g_i\,e^{-E_i/k_BT}$$

at low $T$, $Z \approx g_{\rm ground}$ (only ground populated). at high $T$, more excited levels contribute. used in Saha when many levels are populated; tabulated in atomic-data libraries (NIST ASD, VALD).

## see also

- [Atomic term symbols](Atomic%20term%20symbols.html)
- [Quantum numbers and atomic states](Quantum%20numbers%20and%20atomic%20states.html)
- [Russell-Saunders LS coupling](Russell-Saunders%20LS%20coupling.html)
- [Hund's rules](Hund%27s%20rules.html)
- [Boltzmann equation in spectroscopy](Boltzmann%20equation%20in%20spectroscopy.html)
- [Saha ionisation equation](Saha%20ionisation%20equation.html)
- [Partition function](Partition%20function.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (10)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Absorption%20coefficient%20and%20oscillator%20strength.html" class="backlink-item">Absorption coefficient and oscillator strength</a></li>
    <li class="backlink-item-wrap"><a href="Atomic%20term%20symbols.html" class="backlink-item">Atomic term symbols</a></li>
    <li class="backlink-item-wrap"><a href="Boltzmann%20equation%20in%20spectroscopy.html" class="backlink-item">Boltzmann equation in spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="Equivalent%20vs%20nonequivalent%20electrons.html" class="backlink-item">Equivalent vs nonequivalent electrons</a></li>
    <li class="backlink-item-wrap"><a href="Hund%27s%20rules.html" class="backlink-item">Hund's rules</a></li>
    <li class="backlink-item-wrap"><a href="Partition%20function.html" class="backlink-item">Partition function</a></li>
    <li class="backlink-item-wrap"><a href="Quantum%20numbers%20and%20atomic%20states.html" class="backlink-item">Quantum numbers and atomic states</a></li>
    <li class="backlink-item-wrap"><a href="Russell-Saunders%20LS%20coupling.html" class="backlink-item">Russell-Saunders LS coupling</a></li>
    <li class="backlink-item-wrap"><a href="Saha%20ionisation%20equation.html" class="backlink-item">Saha ionisation equation</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

