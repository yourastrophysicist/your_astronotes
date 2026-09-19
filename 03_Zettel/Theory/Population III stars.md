---
layout: "default"
title: "Population III stars"
---
**Population III stars** are the hypothetical first generation of stars in the universe, formed from primordial gas at $z \sim 20$-$30$ with $Z = 0$ (no metals beyond H, He, Li from BBN). they are the **bridge between the Big Bang and chemical evolution**: their nucleosynthesis seeded the universe with the first heavy elements, enabling all subsequent star formation.

![L14_p05_first_stars-05.png](../../assets/images/L14_p05_first_stars-05.png)

## the predicted IMF

without metals, the gas cooling channels are restricted to:
- molecular hydrogen H$_2$ (rotational + vibrational lines, weak below $\sim 200$ K);
- HD cooling (slightly more efficient at low $T$);
- atomic hydrogen Lyman-$\alpha$ (above $10^4$ K).

these are weak compared to metal-line cooling. the consequence: gas in primordial halos cannot fragment into low-mass clouds. simulations (Bromm & Larson 2004 review, ARA&A 42, 79) predict a **top-heavy IMF** with characteristic mass $\langle M \rangle \sim 100\,M_\odot$ and stars potentially up to $1000\,M_\odot$.

this is dramatically different from the [Salpeter/Chabrier IMFs](Salpeter%20Kroupa%20Chabrier%20IMFs.html) of present-day stellar populations.

## fates of Pop III stars

depending on initial mass:

| $M_{\rm Pop III}$ | fate | yield |
|---|---|---|
| $\lesssim 9\,M_\odot$ | white dwarf | minimal enrichment |
| $10$-$40\,M_\odot$ | core-collapse SN | typical CCSN yields |
| $40$-$100\,M_\odot$ | direct collapse to BH | no enrichment |
| $140$-$260\,M_\odot$ | **pair-instability supernova** | enormous enrichment, 100% destruction, characteristic even-Z pattern |
| $> 260\,M_\odot$ | direct collapse to BH | no enrichment |

so the **even-Z element pattern** is a smoking gun for pair-instability SNe. searches for stars with this pattern have so far been unsuccessful, suggesting most Pop III stars were either $< 140\,M_\odot$ (CCSN dominant) or $> 260\,M_\odot$ (direct collapse, no enrichment).

## why no direct detection (yet)

Pop III stars formed at $z \sim 15$-$30$, within $\sim 100$-$300$ Myr after the Big Bang. by $z \sim 6$ (reionisation completion), most have either died as SNe or been incorporated into Pop II stars. JWST is now searching for direct detection at $z > 10$ via:

- **He II $\lambda 1640$ emission**: characteristic of $T_{\rm eff} > 10^5$ K (only achievable in extremely massive low-metallicity stars).
- **strong UV continuum + Balmer break absence**.
- **specific SED slopes** distinct from later galaxy populations.

candidate Pop III SF regions identified at $z \sim 10$-$15$ (LAP1-B, GLASS-z12, etc.) are tantalising but not yet definitive. see [JWST and the first stars](JWST%20and%20the%20first%20stars.html).

## the indirect evidence: CEMP-no + r-II stars

Pop III nucleosynthesis is fingerprinted in the chemistry of extremely metal-poor ($[{\rm Fe/H}] < -3$) Galactic halo + UFDG stars:

- **CEMP-no stars** (carbon-enhanced metal-poor, no s-process): high [C/Fe] without the s-process pattern of AGB stars; consistent with the predicted yields of zero-metallicity faint SNe (Christlieb et al. 2002, HE 0107-5240).
- **r-process II stars**: [Eu/Fe] $> +1$, requiring rare neutron-star mergers or magnetorotational SNe; some observed in UFDGs (Ji et al. 2016 in Reticulum II).
- **near-zero metallicity giants**: HE 1327-2326 with $[{\rm Fe/H}] = -5.4$ (Frebel et al. 2005, Nature 434, 871) — among the most iron-poor stars ever found.

these stars are direct chemical fossils of single-progenitor Pop III enrichment events: each is a "ghost" of a single Pop III progenitor that polluted a small protocloud.

## connection to first galaxy formation

Pop III stars set the timing of:

1. the **end of the cosmic dark ages** (their UV photons reionise H);
2. the **transition from Pop III to Pop II** at $Z = Z_{\rm crit} \sim 10^{-5}$-$10^{-4}\,Z_\odot$ (see [Critical metallicity for fragmentation](Critical%20metallicity%20for%20fragmentation.html));
3. the **seeding of supermassive black holes** (direct-collapse Pop III stars $> 260\,M_\odot$ may form intermediate-mass BHs that later grow into SMBHs).

## surveys for extremely metal-poor stars

the hunt for Pop III fossils is carried out by several ongoing survey programs (Milone 2026, Lecture 14):

- **Hamburg/ESO Survey** (Christlieb, Frebel, Beers): low-resolution prism survey selecting metal-poor candidates from objective-prism Ca K line weakness. discovered HE 0107-5240 and HE 1327-2326.
- **SkyMapper** (Wolf et al. 2018): southern photometric survey using a dedicated $v$-filter centered on the Ca II K + H lines. photometric metallicity from $v-g$ color allows pre-selection of $[{\rm Fe/H}] < -3$ candidates down to $g \sim 17$.
- **Pristine survey** (Starkenburg et al. 2017): northern photometric survey using a narrow CaHK filter on CFHT MegaCam. photometric $[{\rm Fe/H}]$ accuracy $\sim 0.2$ dex for metal-poor halo stars.
- **R-Process Alliance** (Hansen et al. 2018): systematic follow-up of r-process-enhanced stars to map early neutron-capture nucleosynthesis.

## reference papers

- **Bromm & Larson 2004, ARA&A 42, 79** — review of Pop III stars + critical metallicity.
- **Christlieb et al. 2002, Nature 419, 904** — HE 0107-5240, an ultra-iron-poor giant.
- **Frebel et al. 2005, Nature 434, 871** — HE 1327-2326, $[{\rm Fe/H}] = -5.4$.
- **Beers & Christlieb 2005, ARA&A 43, 531** — review of metal-poor stars.
- **Heger & Woosley 2002, ApJ 567, 532** — Pop III nucleosynthesis predictions.
- **Karlsson et al. 2013, RvMP 85, 809** — review of stellar archaeology.
- **Wolf et al. 2018** — SkyMapper survey for metal-poor stars.
- **Starkenburg et al. 2017** — Pristine CaHK photometric metallicity survey.
- **Hansen et al. 2018** — R-Process Alliance.

## see also

- [Critical metallicity for fragmentation](Critical%20metallicity%20for%20fragmentation.html)
- [Pop III nucleosynthesis signatures](Pop%20III%20nucleosynthesis%20signatures.html)
- [Search for Pop III stars in dwarf galaxies](Search%20for%20Pop%20III%20stars%20in%20dwarf%20galaxies.html)
- [JWST and the first stars](JWST%20and%20the%20first%20stars.html)
- [Pop III remnants in UFDGs](Pop%20III%20remnants%20in%20UFDGs.html)
- [Big Bang nucleosynthesis](Big%20Bang%20nucleosynthesis.html)
- [Ultra-faint dwarf galaxies definition](Ultra-faint%20dwarf%20galaxies%20definition.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)

---

## Complete Lecture Slide Panels & Observational Evidence (Lecture 14 — Population III & The First Stars)

> **Context**: *Zero-metallicity star formation, H2 molecular cooling, top-heavy IMF (M ~ 10-1000 Msun), pair-instability supernovae (PISN), and critical metallicity Z_crit.*

The following slides from Prof. Antonino Milone's lecture series provide the direct observational, photometric, and theoretical foundations for this topic:

![LAntonino_p14_01.png](../../assets/images/LAntonino_p14_01.png)
*Figure P14-01: LAntonino_p14_01.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_02.png](../../assets/images/LAntonino_p14_02.png)
*Figure P14-02: LAntonino_p14_02.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_03.png](../../assets/images/LAntonino_p14_03.png)
*Figure P14-03: LAntonino_p14_03.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_04.png](../../assets/images/LAntonino_p14_04.png)
*Figure P14-04: LAntonino_p14_04.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_05.png](../../assets/images/LAntonino_p14_05.png)
*Figure P14-05: LAntonino_p14_05.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_06.png](../../assets/images/LAntonino_p14_06.png)
*Figure P14-06: LAntonino_p14_06.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_07.png](../../assets/images/LAntonino_p14_07.png)
*Figure P14-07: LAntonino_p14_07.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_08.png](../../assets/images/LAntonino_p14_08.png)
*Figure P14-08: LAntonino_p14_08.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_09.png](../../assets/images/LAntonino_p14_09.png)
*Figure P14-09: LAntonino_p14_09.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_10.png](../../assets/images/LAntonino_p14_10.png)
*Figure P14-10: LAntonino_p14_10.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_11.png](../../assets/images/LAntonino_p14_11.png)
*Figure P14-11: LAntonino_p14_11.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_12.png](../../assets/images/LAntonino_p14_12.png)
*Figure P14-12: LAntonino_p14_12.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_13.png](../../assets/images/LAntonino_p14_13.png)
*Figure P14-13: LAntonino_p14_13.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_14.png](../../assets/images/LAntonino_p14_14.png)
*Figure P14-14: LAntonino_p14_14.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_15.png](../../assets/images/LAntonino_p14_15.png)
*Figure P14-15: LAntonino_p14_15.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_16.png](../../assets/images/LAntonino_p14_16.png)
*Figure P14-16: LAntonino_p14_16.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_17.png](../../assets/images/LAntonino_p14_17.png)
*Figure P14-17: LAntonino_p14_17.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_18.png](../../assets/images/LAntonino_p14_18.png)
*Figure P14-18: LAntonino_p14_18.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_19.png](../../assets/images/LAntonino_p14_19.png)
*Figure P14-19: LAntonino_p14_19.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_20.png](../../assets/images/LAntonino_p14_20.png)
*Figure P14-20: LAntonino_p14_20.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_21.png](../../assets/images/LAntonino_p14_21.png)
*Figure P14-21: LAntonino_p14_21.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_22.png](../../assets/images/LAntonino_p14_22.png)
*Figure P14-22: LAntonino_p14_22.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_23.png](../../assets/images/LAntonino_p14_23.png)
*Figure P14-23: LAntonino_p14_23.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_24.png](../../assets/images/LAntonino_p14_24.png)
*Figure P14-24: LAntonino_p14_24.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![LAntonino_p14_25.png](../../assets/images/LAntonino_p14_25.png)
*Figure P14-25: LAntonino_p14_25.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![Lecture14_p15-15.png](../../assets/images/Lecture14_p15-15.png)
*Figure P14-26: Lecture14_p15-15.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![Lecture14_p25-25.png](../../assets/images/Lecture14_p25-25.png)
*Figure P14-27: Lecture14_p25-25.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![Lecture14_p35-35.png](../../assets/images/Lecture14_p35-35.png)
*Figure P14-28: Lecture14_p35-35.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

![Lecture14_p5-05.png](../../assets/images/Lecture14_p5-05.png)
*Figure P14-29: Lecture14_p5-05.png — Observational data, CMD morphology, and diagnostics from Lecture 14 — Population III & The First Stars.*

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (8)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Critical%20metallicity%20for%20fragmentation.html" class="backlink-item">Critical metallicity for fragmentation</a></li>
    <li class="backlink-item-wrap"><a href="High-z%20galaxies%20with%20JWST.html" class="backlink-item">High-z galaxies with JWST</a></li>
    <li class="backlink-item-wrap"><a href="JWST%20and%20the%20first%20stars.html" class="backlink-item">JWST and the first stars</a></li>
    <li class="backlink-item-wrap"><a href="Pop%20III%20nucleosynthesis%20signatures.html" class="backlink-item">Pop III nucleosynthesis signatures</a></li>
    <li class="backlink-item-wrap"><a href="Salpeter%20Kroupa%20Chabrier%20IMFs.html" class="backlink-item">Salpeter Kroupa Chabrier IMFs</a></li>
    <li class="backlink-item-wrap"><a href="Search%20for%20Pop%20III%20stars%20in%20dwarf%20galaxies.html" class="backlink-item">Search for Pop III stars in dwarf galaxies</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20mass%20function%20xi%28M%29.html" class="backlink-item">Stellar mass function xi(M)</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>

