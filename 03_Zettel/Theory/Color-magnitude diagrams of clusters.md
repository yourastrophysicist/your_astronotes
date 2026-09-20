---
layout: "default"
title: "Color-magnitude diagrams of clusters"
---
![](../../assets/images/Pasted%2520image%252020260914195153.png)
a **color-magnitude diagram** (CMD) is the observational version of the [[HR diagram]]: $M_V$ (or $M_X$) vs a color (e.g. $B-V$, $g-r$, or $V-I$). for stellar **clusters** specifically, all stars share the same age, metallicity, and distance, so a cluster CMD is a powerful diagnostic of all four parameters: age, $Z$, distance modulus, and reddening. milone et al. 2025 (A&A 696, 221) provides the modern reference CMD for NGC 6397 ($\sim 13.5$ Gyr), used as the canonical example throughout the course.

## why clusters

a cluster is essentially a **single stellar population (SSP)**: all members born in one star-formation event from the same cloud, sharing:
- distance modulus $\mu$ (uniform within $\sim 1$ pc).
- age $\tau$ (formed essentially simultaneously, $\Delta\tau \ll \tau$).
- metallicity $[Fe/H]$ (homogeneous within most clusters).
- reddening $E(B - V)$ (assumed uniform).

so the cluster CMD is a slice through the multi-parameter HR diagram at fixed $\tau, Z$. its shape is the **isochrone** for those parameters.

## the features in a CMD

main classes from bottom (faint, red) to top (bright, blue):

### main sequence (MS)
diagonal band of H-burning stars, from M dwarfs at the bottom to O stars at the top. its **upper end is set by the cluster age**: stars more massive than $M_{\rm TO}$ have already exited the MS. the position of the **turnoff** is the central age indicator.

### turnoff (TO)
where the MS bends rightward as stars exhaust core hydrogen. luminosity at TO:
$$L_{\rm TO}/L_\odot \approx (M_{\rm TO}/M_\odot)^{3.5}, \quad \tau_{\rm TO} \approx 10\,\text{Gyr}\,(M_{\rm TO}/M_\odot)^{-2.5}$$

so $\tau \sim 10\,\text{Gyr}\,(L_{\rm TO}/L_\odot)^{-0.7}$.

### subgiant branch (SGB)
short transition from TO to the base of the RGB.

### red giant branch (RGB)
H-shell-burning, ascending the giant branch with growing convective envelopes. ends at the **TRGB** (helium flash).

### horizontal branch (HB)
post-helium-flash, He-core-burning stars. blue HB in metal-poor populations, red HB / red clump in metal-rich.

### asymptotic giant branch (AGB)
double-shell-burning stars after core He exhaustion.

### blue stragglers
abnormally bluer-than-MS turnoff stars; products of mass transfer or mergers in tight binaries.

### white dwarf cooling sequence
faint blue-end remnants of stars that finished post-MS evolution.

## reading a CMD

four shifts move the isochrone in characteristic directions:
- **distance**: moves the whole CMD vertically (down for farther).
- **reddening**: moves it diagonally along the reddening vector ($A_V \approx 3.1 E(B-V)$).
- **age**: moves the turnoff diagonally; old populations have lower-mass, fainter, redder turnoffs.
- **metallicity**: moves the giant branch and isochrone position; high-$Z$ shifts redward.

so by overlaying a grid of model isochrones (Padova/PARSEC [Bressan et al. 2012], BaSTI [Pietrinferni et al. 2004, 2006], DSEP/Dartmouth [Dotter et al. 2008], MIST, Y$^2$) at different ages and metallicities, you can simultaneously fit all four parameters from a single CMD.

## observational challenges

two features of real CMDs create difficulties (Milone 2026 Lectures 2-3):

1. **zig-zag along the MS**: in UV-optical CMDs, the main sequence is not a smooth curve but shows inflections + wiggles. these reflect changes in opacity sources (H$^-$ bound-free, molecular absorption) that affect bolometric corrections at different $T_{\rm eff}$ values. the **MS knee** (where the MS bends in UV filters) is prominent in metal-rich populations (e.g. 47 Tuc; Marino et al. 2024).

2. **UV-dim stars**: some MS stars appear anomalously faint in the F275W (NUV) filter while appearing normal in optical. this has been linked to stellar activity, chromospheric emission, or unresolved binary companions with UV-excess WDs.

## proper motion cleaning

modern CMDs from HST + Gaia are cleaned using **proper-motion membership selection** (Cordoni et al. 2018). a proper-motion diagram separates cluster members (tight clump) from field stars (dispersed). this dramatically sharpens the CMD by removing foreground/background contaminants and is essential for all precise CMD studies.

## examples

### open cluster (Pop I)
Pleiades, Hyades, M67. young to intermediate age ($10^7$ to $10^{10}$ yr). well-defined MS turnoff; pre-main-sequence stars in the youngest. lots of MS, little giant branch (giants live shortly).

### globular cluster (Pop II)
M3, M13, 47 Tuc, $\omega$ Cen. old ($\sim 10$ to $13$ Gyr), metal-poor. well-developed RGB, HB with RR Lyrae instability strip, narrow MS, faint TO. ages **bound the universe**: the oldest globulars are $\sim 13$ Gyr, consistent with $\Lambda$CDM age $\sim 13.8$ Gyr.

### dwarf spheroidal galaxy
mixed-age, metal-poor populations. CMDs show extended MS + RGB + multiple turnoffs (multiple star formation episodes).

## reference papers

- **Milone et al. 2025, A&A 696, 221** — modern reference CMD for NGC 6397.
- **Cordoni et al. 2018** — proper motion cleaning of cluster CMDs.
- **Bressan et al. 2012** — PARSEC isochrones (Padova).
- **Dotter et al. 2008** — DSEP/Dartmouth isochrones.
- **Pietrinferni et al. 2004, 2006** — BaSTI isochrones.
- **Marino et al. 2024** — MS knee in 47 Tuc.

## see also

- [[HR diagram]]
- [[Cluster ages from CMD turnoff]]
- [[Stellar populations I II III]]
- [[Spectroscopic parallax and main-sequence fitting]]
- [[Variable stars as standard candles]]
- [[Initial mass function]]
- [[Stellar evolution timescales]]
- [[Color indices]]
- [[Distance modulus]]
- [[SFH from resolved CMDs]]
- [[Isochrones and isochrone fitting]]
- [[Stellar_Astrophysics_MOC]]

---

## observational astrophysics course slides (Prof. Paolo Cassata)

![obs_stars-065.png](../../assets/images/obs_stars-065.png)
*Star clusters as natural laboratories: coeval, chemically homogeneous, same distance.*

![obs_stars-066.png](../../assets/images/obs_stars-066.png)
*Open clusters (galactic clusters): Pop I, young, metal-rich, located in galactic disk.*

![obs_stars-067.png](../../assets/images/obs_stars-067.png)
*Globular clusters: Pop II, ancient (10-13 Gyr), metal-poor, spherically distributed in halo.*

![obs_stars-068.png](../../assets/images/obs_stars-068.png)
*Composite CMD of open clusters of varying ages (Pleiades, Hyades, Praesepe, M67, NGC 188).*

---

## Complete Lecture Slide Panels & Observational Evidence (Lecture 01 — Reading the CMD I: Morphology & Clusters)

> **Context**: *CMD anatomy, NGC 6397 reference sequences, star cluster taxonomy, simple stellar populations (SSPs), observational photometric errors, and completeness limits.*

The following slides from Prof. Antonino Milone's lecture series provide the direct observational, photometric, and theoretical foundations for this topic:

![L01_p14_CMD_evolutionary_phases-14.png](../../assets/images/L01_p14_CMD_evolutionary_phases-14.png)
*Figure P01-01: L01_p14_CMD_evolutionary_phases-14.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![L01_p23_stellar_pop_I_II-23.png](../../assets/images/L01_p23_stellar_pop_I_II-23.png)
*Figure P01-02: L01_p23_stellar_pop_I_II-23.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_01.png](../../assets/images/LAntonino_p01_01.png)
*Figure P01-03: LAntonino_p01_01.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_02.png](../../assets/images/LAntonino_p01_02.png)
*Figure P01-04: LAntonino_p01_02.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_03.png](../../assets/images/LAntonino_p01_03.png)
*Figure P01-05: LAntonino_p01_03.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_04.png](../../assets/images/LAntonino_p01_04.png)
*Figure P01-06: LAntonino_p01_04.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_05.png](../../assets/images/LAntonino_p01_05.png)
*Figure P01-07: LAntonino_p01_05.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_06.png](../../assets/images/LAntonino_p01_06.png)
*Figure P01-08: LAntonino_p01_06.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_07.png](../../assets/images/LAntonino_p01_07.png)
*Figure P01-09: LAntonino_p01_07.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_08.png](../../assets/images/LAntonino_p01_08.png)
*Figure P01-10: LAntonino_p01_08.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_09.png](../../assets/images/LAntonino_p01_09.png)
*Figure P01-11: LAntonino_p01_09.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_10.png](../../assets/images/LAntonino_p01_10.png)
*Figure P01-12: LAntonino_p01_10.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_11.png](../../assets/images/LAntonino_p01_11.png)
*Figure P01-13: LAntonino_p01_11.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_12.png](../../assets/images/LAntonino_p01_12.png)
*Figure P01-14: LAntonino_p01_12.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_13.png](../../assets/images/LAntonino_p01_13.png)
*Figure P01-15: LAntonino_p01_13.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_14.png](../../assets/images/LAntonino_p01_14.png)
*Figure P01-16: LAntonino_p01_14.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_15.png](../../assets/images/LAntonino_p01_15.png)
*Figure P01-17: LAntonino_p01_15.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_16.png](../../assets/images/LAntonino_p01_16.png)
*Figure P01-18: LAntonino_p01_16.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_17.png](../../assets/images/LAntonino_p01_17.png)
*Figure P01-19: LAntonino_p01_17.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_18.png](../../assets/images/LAntonino_p01_18.png)
*Figure P01-20: LAntonino_p01_18.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_19.png](../../assets/images/LAntonino_p01_19.png)
*Figure P01-21: LAntonino_p01_19.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_20.png](../../assets/images/LAntonino_p01_20.png)
*Figure P01-22: LAntonino_p01_20.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_21.png](../../assets/images/LAntonino_p01_21.png)
*Figure P01-23: LAntonino_p01_21.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_22.png](../../assets/images/LAntonino_p01_22.png)
*Figure P01-24: LAntonino_p01_22.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_23.png](../../assets/images/LAntonino_p01_23.png)
*Figure P01-25: LAntonino_p01_23.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_24.png](../../assets/images/LAntonino_p01_24.png)
*Figure P01-26: LAntonino_p01_24.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*

![LAntonino_p01_25.png](../../assets/images/LAntonino_p01_25.png)
*Figure P01-27: LAntonino_p01_25.png — Observational data, CMD morphology, and diagnostics from Lecture 01 — Reading the CMD I: Morphology & Clusters.*



## Linked References

- [[Age dating from the WD luminosity function]]
- [[Age-metallicity degeneracy]]
- [[Age-metallicity relation of Galactic GCs]]
- [[Atmospheric parameters Teff log g feh vmicro]]
- [[Binary stars in CMD]]
- [[Blue stragglers in star clusters]]
- [[Bulge CMD complications]]
- [[CMD constraints on disk vs halo populations]]
- [[Calcium and CaII H+K]]
- [[Calcium population vs T]]
- [[Cluster binary fraction methods]]
- [[Color indices]]
- [[Effects of differential reddening on CMD analysis]]
- [[Extended main sequence turn-off eMSTO]]
- [[Extinction law and Rv]]
- [[Extragalactic star clusters]]
- [[Galactic GC two-population age structure]]
- [[Globular clusters as SSP laboratories]]
- [[Helium flash and horizontal branch]]
- [[Helium spread in GCs]]
- [[IMF from cluster luminosity functions]]
- [[Initial vs present-day mass function]]
- [[Interstellar reddening and the reddening vector]]
- [[Isochrones and isochrone fitting]]
- [[M-dwarf discontinuity and convective merging instability]]
- [[Main sequence on the CMD]]
- [[Moving cluster method]]
- [[Multiple populations in GCs discovery]]
- [[Open clusters as young SSP laboratories]]
- [[PSF photometry]]
- [[Photometric chromosome maps]]
- [[Population I and II stars]]
- [[Red giant branch RGB]]
- [[Resolved vs unresolved stellar populations]]
- [[Single stellar population SSP]]
- [[Spectroscopic determination of Teff]]
- [[Spectroscopic parallax and main-sequence fitting]]
- [[Star cluster types]]
- [[Stellar evolutionary phases on the CMD]]
- [[Stellar rotation effects on CMD]]
- [[Stellar rotation v sini]]
- [[TRGB tip of the red giant branch]]
- [[UFDG search via deep CMD]]
- [[UFDG star formation histories]]
- [[Variable stars as standard candles]]
- [[WDCS turn to blue and CIA]]
- [[WDCS vs MSTO ages comparison]]
- [[White dwarf cooling sequence on the CMD]]
- [[White dwarf cooling theory]]
- [[White dwarf overview]]
- [[Yellow stragglers and sub-subgiants]]
- [[Observational_Astrophysics_MOC]]
- [[Stellar_Astrophysics_MOC]]


