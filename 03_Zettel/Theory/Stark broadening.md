---
layout: "default"
title: "Stark broadening"
---
{% raw %}
**Stark broadening** is the special case of pressure broadening caused by **electric microfields** from charged particles (free electrons and ions) near the absorber. dominates the broadening of hydrogen lines in hot stellar atmospheres.

## the Stark effect

an external electric field $E$ shifts atomic energy levels by an amount $\Delta E \propto E^n$, with $n = 1$ for **linear Stark effect** (degenerate states like H) and $n = 2$ for **quadratic Stark** (non-degenerate states like He I).

for hydrogen, the linear Stark effect is unique: the $n = 2$ levels (and higher) are degenerate (different $\ell$ at same $n$ have the same energy in pure Coulomb). a small electric field splits them linearly.

## why this matters in hot stars

in OB stars, the photosphere is highly ionised ($n_e \sim 10^{14}$ to $10^{16}$ cm$^{-3}$). the electric microfields from free electrons fluctuate as electrons pass, perturbing nearby H atoms. since H exhibits **linear Stark effect**, the effect is **first order** in the field, hence very strong.

$\Delta E \sim e \cdot E \cdot a_0 n^2$, where $E \sim e/r^2$ for a typical electron at distance $r$. averaging over the perturber distribution gives broad Lorentzian wings.

## observational consequence

H Balmer lines in hot stars (B and A) have **enormous wings**, often extending $> 20$ Å. the line width scales with $n_e$, hence with **gas density**. so the H wing widths are a thermometer + densitometer for hot stellar photospheres.

specifically, **wing extent $\propto n_e^{2/3}$** (more carefully, the Holtsmark distribution scaling).

## the H Balmer line widths in stars

a famous diagnostic:
- **B0 V** ($T = 30\,000$ K, high gravity): H$\beta$ wings extend $\sim 30$ Å.
- **A0 V** ($T = 10\,000$ K, gravitating): H$\beta$ wings $\sim 15$ Å.
- **B0 Ia supergiant** (low gravity): H$\beta$ wings $\sim 15$ Å.

so at fixed $T$, dwarf H wings are wider than supergiant ones $\to$ a **gravity (pressure) discriminator**, basis of [MK luminosity classes](./MK%20luminosity%20classes.html) in early-type stars.

## the formal theory

Holtsmark (1919) derived the field distribution of perturbing ions in a quasi-static approximation. modern unified theories (Vidal, Cooper, Smith 1973; Stehlé et al.) account for both ion and electron contributions and dynamic effects. tabulated as line profiles for $n_e$, $T$ grids, used in stellar atmosphere codes (TLUSTY, ATLAS9).

## comparison with van der Waals

| broadening type | dominant in | scaling |
|---|---|---|
| natural | always (small) | constant, $\sim A_{ul}$ |
| **Stark (linear, H)** | hot stars, plasmas | $\propto n_e^{2/3}$ |
| Stark (quadratic, He, metals) | hot stars | $\propto n_e$ |
| van der Waals (neutrals) | cool stars | $\propto n_n$ |
| resonance broadening (same species) | cool stars | $\propto n_{\rm same}$ |

at $T < 7000$ K, van der Waals dominates for most lines (collisions with neutral H, He). at $T > 10\,000$ K, Stark dominates for H lines. metals see both regimes depending on conditions.

## see also

- [Collisional pressure broadening](./Collisional%20pressure%20broadening.html)
- [Natural broadening Lorentzian](./Natural%20broadening%20Lorentzian.html)
- [Voigt profile](./Voigt%20profile.html)
- [Hydrogen spectral series](./Hydrogen%20spectral%20series.html)
- [MK luminosity classes](./MK%20luminosity%20classes.html)
- [Stellar atmosphere structure](./Stellar%20atmosphere%20structure.html)
- [Continuum opacity sources](./Continuum%20opacity%20sources.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (5)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Collisional%20pressure%20broadening.html" class="backlink-item">Collisional pressure broadening</a></li>
    <li class="backlink-item-wrap"><a href="./Damping%20wings.html" class="backlink-item">Damping wings</a></li>
    <li class="backlink-item-wrap"><a href="./MK%20luminosity%20classes.html" class="backlink-item">MK luminosity classes</a></li>
    <li class="backlink-item-wrap"><a href="./Voigt%20profile.html" class="backlink-item">Voigt profile</a></li>
  </ul>
</div>
