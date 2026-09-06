---
layout: default
title: "Solar evolution and final stages"
---

stellar evolution diverges sharply by mass into two branches:
- **low/intermediate mass** ($M_{\rm initial} \lesssim 8\,M_\odot$): becomes a white dwarf via planetary nebula
- **high mass** ($M_{\rm initial} \gtrsim 8\,M_\odot$): explodes as a core-collapse supernova → neutron star or black hole

between these, the most studied case is **the Sun**, a 1 $M_\odot$ G2 V star at age 4.6 Gyr.

---

## the Sun's life

the Sun's history and future, on the HR diagram:

| stage | age | $T_{\rm eff}$ (K) | $L$ ($L_\odot$) | $R$ ($R_\odot$) |
|---|---|---|---|---|
| protostar (Hayashi) | < 30 Myr | $\sim 4000$ | falling from $\sim 100$ | falling from large |
| ZAMS | 0 (cosmic 4.6 Gyr ago) | 5800 | 1 | 1 |
| current MS | 4.6 Gyr | 5800 | 1 | 1 |
| terminal MS | 10 Gyr | 6000 | $\sim 2$ | $\sim 1.5$ |
| subgiant | 11 Gyr | 4500 | $\sim 5$ | 4 |
| RGB tip | 12 Gyr | 3000 | $\sim 3000$ | $\sim 100$ |
| He flash | 12.2 Gyr | 4500 | drops back to $\sim 50$ | $\sim 10$ |
| HB | 12.2-12.3 Gyr | 4800 | 50 | 10 |
| AGB | 12.4 Gyr | $\sim 3000$ | $\sim 5000$ | $\sim 200$ |
| planetary nebula | 12.5 Gyr | shedding envelope, exposing hot core | | |
| white dwarf | $> 12.5$ Gyr | $10^5 \to$ falling | $\sim 10^{-3}$ | 0.01 |

so the Sun has about 5 Gyr left on the MS, then ~1.5 Gyr of post-MS evolution, then it becomes a faint white dwarf cooling forever.

at the RGB tip (12.2 Gyr cosmic age), the Sun's radius will be $\sim 100\, R_\odot \sim 0.5$ AU — engulfing Mercury and Venus, possibly Earth.

<img src="{{ "/assets/images/stellar-26.png" | relative_url }}" alt="stellar-26" class="note-img" loading="lazy" style="max-width: 100%; height: auto; border: 1px solid var(--border-subtle); border-radius: 2px; margin: 12px 0;" />

---

## the He flash

at the RGB tip, the He core has grown to $\sim 0.5\, M_\odot$ and is **degenerate**. when the core temperature reaches $\sim 10^8$ K, the triple-alpha process ignites:
$$3\,{}^4\text{He} \to {}^{12}\text{C}$$

but the core is degenerate, so the temperature can rise without immediate pressure response. this leads to a **runaway**: more burning → hotter → faster burning. the **He flash** lasts a few minutes, releases enormous energy, and lifts the degeneracy. then the core settles into stable He burning.

the flash is actually an outright explosion — but it is buried so deeply within the convective envelope that almost no energy escapes the surface.

---

## planetary nebula

the AGB star sheds its envelope through pulsations and radiation pressure. mass loss rates can reach $10^{-5}\, M_\odot$/yr. the ejected envelope forms a **planetary nebula** — beautiful, glowing shells of ionized gas, illuminated by the central UV-bright stellar core (a very hot $\sim 10^5$ K WD precursor).

named "planetary" because they looked planet-like to William Herschel through 18th-century telescopes — nothing to do with planets.

---

## white dwarf cooling

the exposed core is now a **C-O white dwarf** at $\sim 0.6\, M_\odot$ with no nuclear burning. it just **cools** over cosmic time:
- $t = 0$: $T_{\rm WD} \sim 10^5$ K
- $t = 10^9$ yr: $T_{\rm WD} \sim 10^4$ K
- $t = 10^{10}$ yr: $T_{\rm WD} \sim 5000$ K

cooling timescale slows down because heat capacity of degenerate matter is small. the universe has not been around long enough for any WD to fully cool — the oldest WDs we see are about 13 Gyr.

→ this gives an independent age check on the universe (oldest WDs match $t_0 \sim 13.8$ Gyr).

---

## massive star endpoints

stars with $M_{\rm initial} \gtrsim 8\, M_\odot$ go through all the burning stages (H, He, C, Ne, O, Si). at the iron core, fusion is endothermic. when the iron core exceeds $\sim 1.4\, M_\odot$ (Chandrasekhar mass for an iron-rich plasma), it **collapses**:

1. core implodes from $\sim 10^4$ km to $\sim 10$ km in $\sim 1$ second
2. neutron star forms with density $\sim 10^{14}$ g/cm$^3$
3. infalling matter bounces off → shock wave
4. shock stalls, neutrinos help reactivate it
5. shock blows off the outer envelope → **supernova explosion**

types of core-collapse SNe:
- **Type II**: still has H envelope. most common.
- **Type Ib**: H envelope stripped (Wolf-Rayet star)
- **Type Ic**: also He stripped

remnant:
- **neutron star** if final mass $\sim 1.4-2.5\, M_\odot$
- **black hole** if final mass $\gtrsim 2.5\, M_\odot$

energy: $\sim 10^{53}$ erg released, mostly in neutrinos. only $\sim 10^{49}$ erg in kinetic energy of ejecta, $\sim 10^{49}$ erg in light. but a SN at peak can outshine its host galaxy briefly.

→ see [Lab_High-Energy_MOC](../../00_Atlas/Lab_High-Energy_MOC.html) for accretion onto compact objects formed in this way.

---

## why this all matters

the post-MS evolution is crucial because:
1. **chemical enrichment**: SNe and AGB winds return processed material to the ISM, increasing metallicity
2. **stellar feedback**: SNe shock heat the ISM, drive galactic winds, regulate star formation
3. **standard candles**: SN Ia (from binary WD mergers/accretion) are the cosmic distance ladder — see [Cepheids and supernovae](../../02_Zettel/Theory/Cepheids and supernovae.html)
4. **gravitational waves**: NS-NS and NS-BH mergers (descendents of high-mass stellar evolution) are the LIGO/Virgo sources
5. **the elements**: everything heavier than helium in the universe comes from stellar nucleosynthesis (modulo trace BBN $^7$Li)

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.html)
- [Stellar evolution timescales](../../02_Zettel/Theory/Stellar evolution timescales.html)
- [Stellar nucleosynthesis](../../02_Zettel/Theory/Stellar nucleosynthesis.html)
- [Main sequence, giants, supergiants, white dwarfs](../../02_Zettel/Theory/Main sequence, giants, supergiants, white dwarfs.html)
- [HR diagram](../../02_Zettel/Theory/HR diagram.html)
- [Cepheids and supernovae](../../02_Zettel/Theory/Cepheids and supernovae.html)
- [Accretion onto compact objects](../../02_Zettel/Theory/Accretion onto compact objects.html)
- [Chemical evolution of galaxies](../../02_Zettel/Theory/Chemical evolution of galaxies.html)
