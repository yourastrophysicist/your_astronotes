---
layout: default
title: "Alpha-Fe enhancement"
---

# alpha-fe enhancement

up: [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html) · [Stellar nucleosynthesis](../../02_Zettel/Theory/Stellar nucleosynthesis.html) · Early-type galaxies

## definition

The alpha-to-iron abundance ratio measures the relative abundance of $\alpha$-elements ($\text{O}, \text{Mg}, \text{Si}, \text{S}, \text{Ca}, \text{Ti}$) compared to iron:

$$[\alpha/\text{Fe}] = \log_{10}\left(\frac{N_\alpha}{N_{\text{Fe}}}\right)_* - \log_{10}\left(\frac{N_\alpha}{N_{\text{Fe}}}\right)_\odot$$

## nucleosynthetic clocks

The ratio serves as a cosmic clock because the two element groups are synthesized in different supernovae with vastly different timescales:

1. **core-collapse supernovae (type ii, ib, ic)**:
   - Progenitors: massive stars ($M \gtrsim 8 M_\odot$).
   - Timescale: very short, $\tau \sim 10^7$ yr ($3 - 30$ Myr).
   - Yields: rich in $\alpha$-elements (synthesized via successive $\alpha$-particle captures during quiescent burning and explosive nucleosynthesis), low in Fe.
2. **type ia supernovae (thermonuclear)**:
   - Progenitors: carbon-oxygen white dwarfs in binary systems approaching $M_{\rm Ch}$.
   - Timescale: delayed, broad delay-time distribution (DTD $\propto t^{-1}$) peaking around $\tau \sim 1$ Gyr.
   - Yields: rich in iron-peak elements (nuclear burning of $\text{C}+\text{O} \to ^{56}\text{Ni} \to ^{56}\text{Co} \to ^{56}\text{Fe}$), negligible $\alpha$-elements.

## interpretation of [alpha/Fe]

- **$[\alpha/\text{Fe}] > 0$ (enhanced, up to $+0.3$ to $+0.4$)**:
  - Star formation occurred rapidly in a short, intense burst ($\tau_{\rm SF} < 1$ Gyr) and shut off before Type Ia SNe could pollute the interstellar gas with iron.
  - Seen in massive elliptical galaxies, globular clusters, and galactic bulges.
- **$[\alpha/\text{Fe}] \approx 0$ (solar)**:
  - Star formation was extended and continuous over several Gyr, allowing Type Ia iron enrichment to dilute the initial $\alpha$-excess.
  - Seen in the Milky Way disk and late-type spirals.

## correlation with galaxy mass

In early-type galaxies, Thomas et al. 2005 demonstrated that $[\alpha/\text{Fe}]$ increases systematically with galaxy velocity dispersion $\sigma$:
$$[\alpha/\text{Fe}] \approx 0.32 \log_{10}\sigma - 0.5$$
More massive ellipticals formed their stars faster and earlier (downsizing).

## connections

- stellar populations: [Color gradients in ellipticals](../../02_Zettel/Theory/Color gradients in ellipticals.html), [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.html)
- scaling laws: [Faber-Jackson relation](../../02_Zettel/Theory/Faber-Jackson relation.html)
