---
layout: default
name: Color-magnitude diagrams of clusters
description: the central diagnostic tool of stellar population studies, plotting magnitude vs color for resolved cluster stars to extract age, metallicity, distance, and reddening
---

a **color-magnitude diagram** (CMD) is the observational version of the [HR diagram](../../02_Zettel/Theory/HR diagram.md): $M_V$ (or $M_X$) vs a color (e.g. $B-V$, $g-r$, or $V-I$). for stellar **clusters** specifically, all stars share the same age, metallicity, and distance, so a cluster CMD is a powerful diagnostic of all four parameters: age, $Z$, distance modulus, and reddening. milone et al. 2025 (A&A 696, 221) provides the modern reference CMD for NGC 6397 ($\sim 13.5$ Gyr), used as the canonical example throughout the course.

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

- [HR diagram](../../02_Zettel/Theory/HR diagram.md)
- [Cluster ages from CMD turnoff](../../02_Zettel/Theory/Cluster ages from CMD turnoff.md)
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.md)
- [Spectroscopic parallax and main-sequence fitting](../../02_Zettel/Theory/Spectroscopic parallax and main-sequence fitting.md)
- [Variable stars as standard candles](../../02_Zettel/Theory/Variable stars as standard candles.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [Stellar evolution timescales](../../02_Zettel/Theory/Stellar evolution timescales.md)
- [Color indices](../../02_Zettel/Theory/Color indices.md)
- [Distance modulus](../../02_Zettel/Theory/Distance modulus.md)
- [SFH from resolved CMDs](../../02_Zettel/Theory/SFH from resolved CMDs.md)
- [Isochrones and isochrone fitting](../../02_Zettel/Theory/Isochrones and isochrone fitting.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
