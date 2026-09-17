---
layout: "default"
title: "MK luminosity classes"
---
{% raw %}
the MK system extends the OBAFGKM temperature sequence with **luminosity classes** (I-V) based on stellar surface gravity, which manifests in the **shape and width** of spectral lines.

## the five classes

| class | description | typical $\log g$ | examples |
|---|---|---|---|
| I | supergiants | $\sim 0$ to $1.5$ | Rigel (B8 Ia), Betelgeuse (M2 Ia) |
| II | bright giants | $\sim 1.5$ to $2.5$ | Polaris (F8 II), $\beta$ Aql (G8 II) |
| III | giants (red giant branch) | $\sim 2.5$ to $3.5$ | Aldebaran (K5 III), Arcturus (K1.5 III) |
| IV | subgiants | $\sim 3.5$ to $4.0$ | Procyon (F5 IV) |
| V | dwarfs (main sequence) | $\sim 4.0$ to $4.5$ | Sun (G2 V), 61 Cyg A (K5 V) |

(Roman numerals for the class. additional: VI for "subdwarfs," VII for white dwarfs, etc.)

so a full MK type looks like **G2 V** (the Sun), **K0 III** (Arcturus), **B8 Ia** (Rigel), etc.

## physical basis: surface gravity

at fixed $T_{\rm eff}$, the **size** of the star differs hugely between dwarfs and supergiants. since $\log g = \log(GM/R^2)$:
- dwarf ($M = M_\odot, R = R_\odot$): $\log g = 4.44$.
- giant ($M = M_\odot, R = 100\,R_\odot$): $\log g = 0.4$.
- supergiant ($M = 20\,M_\odot, R = 1000\,R_\odot$): $\log g = 0.0$.

so giants have **much lower gravity** than dwarfs. the photosphere has lower pressure for given $T$, which changes line profiles.

## the diagnostics

at fixed $T_{\rm eff}$ (i.e. fixed letter class), luminosity-class differences appear in:

### Balmer line wings (especially in O, B, A stars)

higher gravity = denser atmosphere = stronger Stark broadening of H lines. dwarf B5 V has very wide Balmer wings; supergiant B5 Iab has narrow Balmer cores. the wing width is a **gravity discriminator**.

### resonance line wings (in cool stars)

Ca II H + K, Mg I b, Na I D wings: stronger in dwarfs, narrower in giants. driven by van der Waals and resonance broadening, both density-sensitive.

### specific line ratios

certain line ratios are very gravity-sensitive:
- Sr II $\lambda 4077$ / Fe I $\lambda 4071$: stronger Sr II in giants.
- O I triplet $\lambda 7774$: weaker in giants.
- Ca I $\lambda 4226$ / Sr II $\lambda 4077$.

these are tabulated in the MK atlas.

### CN, CH, MgH bands (in cool stars)

molecular bands are stronger in giants because lower gravity allows more pressure-stable molecules. M giants have very strong TiO bands compared to M dwarfs.

## the HR diagram interpretation

luminosity class corresponds to the position on the HR diagram:
- **Class V (MS)**: thin diagonal band at modest $L$.
- **Class III (giants)**: red giant branch + clump at $L \sim 100\,L_\odot$.
- **Class I (supergiants)**: top of the diagram, $L \sim 10^4$ to $10^6\,L_\odot$.

knowing both letter class (T) and luminosity class places the star on the HR diagram.

## the Hertzsprung gap and other features

- **Hertzsprung gap**: between MS and red giants for late-A through early-G stars. few stars there because evolution is fast.
- **horizontal branch**: He-burning stars at $L \sim 50\,L_\odot$, mostly Pop II.
- **AGB**: very luminous late-type, $L \sim 10^3\,L_\odot$, rich Mira-type variables.

## consequence for galactic surveys

luminosity classes matter because:
- **same letter class but different luminosity** = very different intrinsic brightness.
- **misclassifying** a giant as a dwarf changes inferred distance by factor $\sim 10$.
- **photometric distance estimates** rely on knowing both class and luminosity.

modern stellar surveys (Gaia + spectroscopy) recover both reliably.

## see also

- [Stellar spectra and spectral classification](./Stellar%20spectra%20and%20spectral%20classification.html)
- [Why the Sequence OBAFGKM](./Why%20the%20Sequence%20OBAFGKM.html)
- [History of stellar classification](./History%20of%20stellar%20classification.html)
- [Collisional pressure broadening](./Collisional%20pressure%20broadening.html)
- [Stark broadening](./Stark%20broadening.html)
- [Voigt profile](./Voigt%20profile.html)
- [Damping wings](./Damping%20wings.html)
- [HR diagram](./HR%20diagram.html)
- [Stellar populations I II III](./Stellar%20populations%20I%20II%20III.html)
- [Spectroscopic parallax and main-sequence fitting](./Spectroscopic%20parallax%20and%20main-sequence%20fitting.html)
- [Sodium population vs T](./Sodium%20population%20vs%20T.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Collisional%20pressure%20broadening.html" class="backlink-item">Collisional pressure broadening</a></li>
    <li class="backlink-item-wrap"><a href="./Damping%20wings.html" class="backlink-item">Damping wings</a></li>
    <li class="backlink-item-wrap"><a href="./History%20of%20stellar%20classification.html" class="backlink-item">History of stellar classification</a></li>
    <li class="backlink-item-wrap"><a href="./Saha%20ionisation%20equation.html" class="backlink-item">Saha ionisation equation</a></li>
    <li class="backlink-item-wrap"><a href="./Sodium%20and%20alkalis.html" class="backlink-item">Sodium and alkalis</a></li>
    <li class="backlink-item-wrap"><a href="./Sodium%20population%20vs%20T.html" class="backlink-item">Sodium population vs T</a></li>
    <li class="backlink-item-wrap"><a href="./Stark%20broadening.html" class="backlink-item">Stark broadening</a></li>
    <li class="backlink-item-wrap"><a href="./Why%20the%20Sequence%20OBAFGKM.html" class="backlink-item">Why the Sequence OBAFGKM</a></li>
  </ul>
</div>
