---
layout: default
title: "Stellar spectra and spectral classification"
---

a star's spectrum is *almost* a blackbody (set by the photospheric temperature), but with **absorption lines** superimposed by atoms in the cooler outer layers. the strength and pattern of these lines depends on temperature and chemical composition, and they are how we classify stars.

---

## the Harvard spectral sequence: OBAFGKM

the modern classification, ordered by **decreasing temperature**:

| class | $T_{\rm eff}$ (K) | color | dominant lines | examples |
|---|---|---|---|---|
| **O** | 30 000 - 60 000 | blue | He II, He I, weak H | 10 Lac |
| **B** | 10 000 - 30 000 | blue-white | He I, H Balmer (strengthening) | Rigel, Spica |
| **A** | 7500 - 10 000 | white | H Balmer (peak), Ca II appearing | Vega, Sirius |
| **F** | 6000 - 7500 | yellow-white | H weakening, Ca II strengthening, metals | Procyon |
| **G** | 5200 - 6000 | yellow | Ca II H&K dominant, many metals | Sun |
| **K** | 3700 - 5200 | orange | metals dominant, TiO appearing | Aldebaran |
| **M** | 2400 - 3700 | red | TiO bands dominate | Betelgeuse, Proxima |

mnemonic: "**O**h **B**e **A** **F**ine **G**irl/**G**uy, **K**iss **M**e."

each class is subdivided 0–9 (with 0 hottest within the class). the Sun is **G2**.

extensions: **L** and **T** for brown dwarfs (cooler than M); **W** for Wolf-Rayet stars (extremely hot, with strong emission lines); **C** and **S** for carbon-rich AGB stars.

---

## why the line strengths vary with temperature

a **counter-intuitive result**: H Balmer lines are *strongest* in A stars (~10 000 K), not in the hottest stars.

reason:
- in cooler stars (G, K, M): hydrogen is in the ground state. very few electrons in $n=2$, so very weak Balmer absorption (which requires $n=2 \to n=3,4,5,\dots$)
- in hotter stars (O, B): hydrogen is mostly **ionized** (no electron at all). so no Balmer absorption.
- in A stars: most hydrogen is neutral but with a thermal population of $n=2$. **maximum** Balmer line strength.

this is the Saha-Boltzmann balance — a competition between excitation (favors hot) and ionization (kills the lines once you go too hot).

similarly:
- He II lines: strongest in O stars (need very hot temperatures to ionize He I once)
- He I: strongest in B stars (intermediate T)
- Ca II H & K: strongest in G–K stars (Ca is mostly Ca II at those temps, with $n=2$ populated)
- TiO bands: only in M stars (need cool enough for molecules to form)

so the spectrum is a **thermometer**: from line ratios alone, you can read off $T$.

---

## the MK luminosity classes

a perpendicular axis to OBAFGKM. classifies stars by **luminosity** at fixed temperature, separating dwarfs from giants:

| class | name | description |
|---|---|---|
| **0** or **Ia⁺** | hypergiants | most luminous, rare |
| **Ia** | luminous supergiants | |
| **Ib** | normal supergiants | |
| **II** | bright giants | |
| **III** | giants | post-main-sequence helium burners |
| **IV** | subgiants | between MS and giant branch |
| **V** | main-sequence (dwarf) | hydrogen burning |
| **VI** | subdwarfs (rare) | metal-poor MS |
| **VII** | white dwarfs | degenerate, fading |

the Sun is **G2 V** — a main-sequence G2 star.

the luminosity class is read off the *width* of certain lines: in giants, lower atmospheric pressure makes lines sharper (less Stark broadening) than in dwarfs at the same T.

---

## the HR diagram connection

plotting all stars in the $(T_{\rm eff}, L)$ plane gives the **Hertzsprung-Russell diagram** (see [HR diagram](../../02_Zettel/Theory/HR diagram.html)). the OBAFGKM sequence runs along the main sequence (luminosity class V), where temperature and luminosity correlate. the giant and supergiant branches lie above the main sequence at the same temperature (cooler outer envelopes, larger radius → more luminous via Stefan-Boltzmann).

so spectral type + luminosity class = position in the HR diagram = stellar physics.

---

## practical use

a typical observation might give: "spectral type G2 V."

from this alone, you know:
- $T_{\rm eff} \approx 5800$ K (G2)
- $L \approx L_\odot$ (V, on the main sequence at G2)
- $R \approx R_\odot$ (from Stefan-Boltzmann)
- mass $\approx 1\, M_\odot$ (from MS mass-luminosity relation)
- age $\sim$ a few Gyr (still on MS)

→ the spectrum is a complete physical description of the star.

---

## the historical naming

the original Harvard classification (Pickering, Cannon, Maury, Fleming) ordered stars **alphabetically by line strength** (A had the strongest Balmer, B less, etc.). but when the **temperature interpretation** emerged, the order had to be rearranged: A is in the middle, not the hottest.

so OBAFGKM is the *temperature-ordered* version, with the original alphabetical labels preserved out of historical inertia. that's why the order seems random.

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Blackbody radiation and Stefan-Boltzmann](../../02_Zettel/Theory/Blackbody radiation and Stefan-Boltzmann.html)
- [HR diagram](../../02_Zettel/Theory/HR diagram.html)
- [Main sequence, giants, supergiants, white dwarfs](../../02_Zettel/Theory/Main sequence, giants, supergiants, white dwarfs.html)
- [Stellar scaling relations](../../02_Zettel/Theory/Stellar scaling relations.html)
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.html)
