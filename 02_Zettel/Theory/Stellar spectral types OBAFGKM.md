---
layout: default
name: Stellar spectral types OBAFGKM
description: the Harvard spectral classification, dominant features in each class, and what they tell us about Teff
---

# stellar spectral types obafgkm

the OBAFGKM sequence is a one-parameter classification of stellar spectra that turned out to be ordered almost entirely by **effective temperature** (see [Spectroscopic determination of Teff](../../02_Zettel/Theory/Spectroscopic determination of Teff.md)). it is the cornerstone of empirical stellar astrophysics. the order is hot to cool: O is hottest ($T_{\rm eff} > 30{,}000$ K), M is coolest ($T_{\rm eff} \lesssim 3500$ K). the standard mnemonic, "Oh Be A Fine Girl/Guy Kiss Me," helps fix the order.

each class is subdivided 0-9 (e.g. G2, the sun). additional letters L, T, Y extend the sequence to brown dwarfs.

## what changes with $T_{\rm eff}$

the spectrum is dominated by which atoms and ions are populated and how. the [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md) and [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.md) govern the ionisation balance, and the Boltzmann distribution governs which excitation levels of a given species are populated. as $T_{\rm eff}$ drops, light elements progressively recombine and electrons settle into lower levels.

| class | $T_{\rm eff}$ (K) | dominant lines | colour | typical examples |
|-|-|-|-|-|
| O | $\geq 30{,}000$ | He II, He I, ionised metals (Si IV, C III, N III) | blue | $\zeta$ Pup, mintaka |
| B | 10{,}000-30{,}000 | He I, weak H, ionised metals (Mg II, Si II) | blue-white | Rigel, Spica |
| A | 7500-10{,}000 | strong H Balmer, Ca II, weak metals | white | Sirius, Vega |
| F | 6000-7500 | weak H, strong Ca II H&K, Fe lines | yellow-white | Procyon, Polaris |
| G | 5200-6000 | Ca II H&K dominant, many Fe and metal lines, G-band (CH) | yellow | the sun, $\alpha$ Cen A |
| K | 3700-5200 | strong neutral metals, weak Ca II, hints of TiO | orange | Arcturus, Aldebaran |
| M | $\leq 3700$ | TiO bands dominant, VO, neutral metals, Ca I | red | Betelgeuse, Proxima Cen |

the dominant-features curve as a function of class peaks for each species at a particular $T_{\rm eff}$: H Balmer peaks at A0 ($\sim 9500$ K), He II is only seen in O stars, Ca II H&K becomes dominant in F-G stars, TiO appears in late K and grows through M. the canonical "line strength vs spectral type" plot organises this beautifully.

## hydrogen Balmer paradox

H Balmer lines do not simply track temperature. they peak around A0 because:

- in cooler stars (G, K, M), most H is in the ground state (n=1) and cannot absorb Balmer photons (which arise from n=2).
- in hotter stars (B, O), most H is fully ionised, so there are no neutral atoms to absorb at all.
- the maximum H I population in n=2 occurs at intermediate temperatures, around 9500 K.

this is a textbook Saha-Boltzmann result and historically the breakthrough that allowed Cecilia Payne to interpret the OBAFGKM sequence as a temperature sequence rather than a composition sequence (see [History of stellar classification](../../02_Zettel/Theory/History of stellar classification.md)).

## luminosity classes

a second dimension, **luminosity class**, was added by Morgan & Keenan in 1943 (the "MK system"):

- I supergiants (Ia, Ib)
- II bright giants
- III giants
- IV subgiants
- V main-sequence dwarfs
- VI subdwarfs
- VII white dwarfs

luminosity class is essentially set by [Spectroscopic determination of log g](../../02_Zettel/Theory/Spectroscopic determination of log g.md): lower log g (giants, supergiants) gives narrower lines because pressure broadening (collisional Stark) is weaker. so the sun is "G2 V" and Betelgeuse is "M2 Iab".

## see also
- [Spectroscopic determination of Teff](../../02_Zettel/Theory/Spectroscopic determination of Teff.md)
- [Spectroscopic determination of log g](../../02_Zettel/Theory/Spectroscopic determination of log g.md)
- [Saha ionisation equation](../../02_Zettel/Theory/Saha ionisation equation.md)
- [Saha equation and recombination](../../02_Zettel/Theory/Saha equation and recombination.md)
- [History of stellar classification](../../02_Zettel/Theory/History of stellar classification.md)
- [HR diagram](../../02_Zettel/Theory/HR diagram.md)
- [Atmospheric parameters Teff log g feh vmicro](../../02_Zettel/Theory/interf/Atmospheric parameters Teff log g feh vmicro.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
