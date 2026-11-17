---
layout: "default"
title: "jj coupling"
---
**jj coupling** is the angular-momentum coupling regime for **heavy atoms** ($Z \gtrsim 80$), where spin-orbit interaction dominates over spin-spin and orbit-orbit.

## the construction

for each electron, first couple its own orbital and spin to get its individual total $\vec j_i$:
$$\vec j_i = \vec\ell_i + \vec s_i, \quad j_i = \ell_i \pm 1/2$$

then sum the individual $\vec j_i$ to get the total:
$$\vec J = \sum_i \vec j_i$$

contrast with [[Russell-Saunders LS coupling]] where you first sum all $\ell$s, then all $s$s, then couple.

## why it differs

- **LS coupling** assumes spin-spin and orbit-orbit dominate over spin-orbit. valid when $Z$ is small.
- **jj coupling** assumes spin-orbit dominates. valid when $Z$ is large, because spin-orbit scales as $\sim Z^4$.

for light atoms ($Z < 30$), LS works. for heavy atoms ($Z > 80$, like Pb, Au, Bi, U), jj works. between these, **intermediate coupling** is the rule and the state is a mixture.

## notation

states in jj coupling are labelled differently:
$$(j_1, j_2, \dots)_J$$
e.g. $(3/2, 1/2)_2$ for two electrons with individual $j = 3/2$ and $j = 1/2$ summing to total $J = 2$.

## selection rules differ

in pure jj, the LS-coupling selection rules ($\Delta L = 0, \pm 1$ and $\Delta S = 0$) **break down**. transitions that would be forbidden in pure LS become allowed (intersystem lines, semi-forbidden lines). the textbook example is **C III] $\lambda 1909$** in AGN and star-forming galaxies, a $\Delta S \ne 0$ intersystem line that gets its strength from spin-orbit mixing. (C IV $\lambda\lambda 1548, 1551$ is not an example, it is a permitted resonance doublet.)

## astronomical relevance

most stellar spectroscopy is in the LS regime. but a few important cases:
- **Hg, Pb, Bi** in chemically peculiar stars: jj coupling notations.
- **rare-earth elements** (Eu, Gd, etc.) in r-process-enriched stars: intermediate coupling.
- **highly ionised heavy elements** in hot plasmas (X-ray spectroscopy, Fe XXIV, Ni XXV, etc.): jj-like.
- **forbidden transitions** in nebulae: spin-changing forbidden lines like $[OIII]\,\lambda 4959, 5007$ ($^1D_2 \to {^3P_{1,2}}$, $\Delta S = 1$) gain their M1/E2 strength through spin-orbit mixing, a deviation from pure LS. $[OIII]\,\lambda 4363$ ($^1S_0 \to {^1D_2}$) keeps $\Delta S = 0$ and is an E2 line.

<!-- ciroi-sync -->
## In Ciroi's notes

Ciroi's criterion is simple: spin-orbit coupling is weaker than spin-spin and orbit-orbit coupling in light atoms, generally $Z \le 30$, so LS holds. In heavier atoms, with a larger nuclear charge, spin-orbit becomes as strong as the other two and the $j$-$j$ scheme applies (Ciroi's notes, p. 6). The selection rules $\Delta L = 0, \pm1$ and $\Delta S = 0$ hold only in LS coupling (Ciroi's notes, p. 13).
<!-- /ciroi-sync -->

<!-- sources:wiki-arxiv -->
## Wikipedia and arXiv sources

- **Angular momentum coupling**. "In quantum mechanics, angular momentum coupling is the procedure of constructing eigenstates of total angular momentum out of eigenstates of separate angular momenta. For instance, the orbit and spin of a single particle can interact through spin–orbit interaction, in which case the complete physical picture must include spin–orbit coupling." ([Wikipedia](https://en.wikipedia.org/wiki/Angular_momentum_coupling))

> Definitions quoted from Wikipedia (CC BY-SA 4.0). Figures credited in their captions.
<!-- /sources:wiki-arxiv -->

## see also

- [[Russell-Saunders LS coupling]]
- [[Quantum numbers and atomic states]]
- [[Atomic term symbols]]
- [[Selection rules]]
- [[Forbidden vs permitted vs semiforbidden transitions]]
## Linked References

- [[Forbidden vs permitted vs semiforbidden transitions]]
- [[Quantum numbers and atomic states]]
- [[Russell-Saunders LS coupling]]
- [[Astronomical_Spectroscopy_MOC]]


