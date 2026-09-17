---
layout: "default"
title: "jj coupling"
---
{% raw %}
**jj coupling** is the angular-momentum coupling regime for **heavy atoms** ($Z \gtrsim 80$), where spin-orbit interaction dominates over spin-spin and orbit-orbit.

## the construction

for each electron, first couple its own orbital and spin to get its individual total $\vec j_i$:
$$\vec j_i = \vec\ell_i + \vec s_i, \quad j_i = \ell_i \pm 1/2$$

then sum the individual $\vec j_i$ to get the total:
$$\vec J = \sum_i \vec j_i$$

contrast with [Russell-Saunders LS coupling](./Russell-Saunders%20LS%20coupling.html) where you first sum all $\ell$s, then all $s$s, then couple.

## why it differs

- **LS coupling** assumes spin-spin and orbit-orbit dominate over spin-orbit. valid when $Z$ is small.
- **jj coupling** assumes spin-orbit dominates. valid when $Z$ is large, because spin-orbit scales as $\sim Z^4$.

for light atoms ($Z < 30$), LS works. for heavy atoms ($Z > 80$, like Pb, Au, Bi, U), jj works. between these, **intermediate coupling** is the rule and the state is a mixture.

## notation

states in jj coupling are labelled differently:
$$(j_1, j_2, \dots)_J$$
e.g. $(3/2, 1/2)_2$ for two electrons with individual $j = 3/2$ and $j = 1/2$ summing to total $J = 2$.

## selection rules differ

in pure jj, the LS-coupling selection rules ($\Delta L = 0, \pm 1$ and $\Delta S = 0$) **break down**. transitions that would be forbidden in pure LS become allowed (intersystem lines, semi-forbidden lines). the famous example: the **C IV $\lambda 1550$ doublet** in stars and AGN, an intersystem line that gets its strength from spin-orbit mixing.

## astronomical relevance

most stellar spectroscopy is in the LS regime. but a few important cases:
- **Hg, Pb, Bi** in chemically peculiar stars: jj coupling notations.
- **rare-earth elements** (Eu, Gd, etc.) in r-process-enriched stars: intermediate coupling.
- **highly ionised heavy elements** in hot plasmas (X-ray spectroscopy, Fe XXIV, Ni XXV, etc.): jj-like.
- **forbidden transitions** in nebulae: spin-forbidden ($\Delta S \ne 0$) lines like $[OIII]\,\lambda 4363$ are made possible by spin-orbit mixing, a deviation from pure LS.

## see also

- [Russell-Saunders LS coupling](./Russell-Saunders%20LS%20coupling.html)
- [Quantum numbers and atomic states](./Quantum%20numbers%20and%20atomic%20states.html)
- [Atomic term symbols](./Atomic%20term%20symbols.html)
- [Selection rules](./Selection%20rules.html)
- [Forbidden vs permitted vs semiforbidden transitions](./Forbidden%20vs%20permitted%20vs%20semiforbidden%20transitions.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (4)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Forbidden%20vs%20permitted%20vs%20semiforbidden%20transitions.html" class="backlink-item">Forbidden vs permitted vs semiforbidden transitions</a></li>
    <li class="backlink-item-wrap"><a href="./Quantum%20numbers%20and%20atomic%20states.html" class="backlink-item">Quantum numbers and atomic states</a></li>
    <li class="backlink-item-wrap"><a href="./Russell-Saunders%20LS%20coupling.html" class="backlink-item">Russell-Saunders LS coupling</a></li>
  </ul>
</div>
