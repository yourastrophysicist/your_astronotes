---
layout: default
title: "Young stellar object disks"
---

# Young stellar object disks

interferometric imaging of the *inner few AU* of disks around forming stars. directly probes:
- inner disk truncation (where the disk meets the star or stellar wind)
- dust sublimation radius (the boundary of dust-filled vs gas-only regions)
- accretion physics
- planet-formation processes

VLTI/GRAVITY and the historical PIONIER instrument are the workhorses. CHARA contributes too.

## what is a YSO disk

![ALMA 1.3 mm continuum image of concentric dust rings and gaps in the protoplanetary disk surrounding HL Tauri.](Young_stellar_object_disks.jpg)


a young star (T Tauri, Herbig Ae/Be) of age $< 10$ Myr has a circumstellar disk of gas and dust. the disk:
- accretes onto the star (~$10^{-8}$ M_⊙/yr typical)
- emits thermal IR from heated dust
- launches outflows and jets
- forms planets

inner-disk physics:
- $r < 0.1$ AU: stellar magnetosphere truncates accretion
- $r = 0.1$-$1$ AU: dust sublimation, hot gas
- $r > 1$ AU: optically thick dust disk

interferometry resolves these scales for nearby YSOs (~140 pc).

## the typical resolution

for a YSO at 140 pc:
- 1 AU = 7 mas
- inner disk (0.5 AU) = 3.5 mas
- typical interferometric resolution at K-band on VLTI: 3 mas

so the *innermost* disk regions are at the boundary of interferometric resolution. with baselines and $\lambda$-tuning, observation is feasible.

## what interferometry sees

at near-IR wavelengths (1-2 μm): the **dust sublimation radius**, where the disk's hot dust starts ($T \sim 1500$ K). a "wall" of hot dust at $r_{\rm sub} \sim 0.1$-$0.5$ AU.

at mid-IR wavelengths (10 μm): **disk-photosphere thermal emission**, intermediate radii.

at sub-mm wavelengths (ALMA): **outer disk structure**, dust gaps, snow lines.

so different wavelengths probe different disk radii.

## the canonical sources

### MWC 758 (Herbig star)

CHARA + ALMA images show an asymmetric inner-disk wall plus larger-scale spiral structures. dust sublimation radius mapped directly.

### Z CMa (FU Orionis-type)

VLTI MATISSE: dust shell expansion measured during outburst. constrains accretion-driven mass loss.

### TW Hya (T Tauri)

GRAVITY + ALMA: planet candidate at ~22 AU detected via gap in the disk. interferometric geometry constrains where planets are forming.

### HL Tau (the famous ALMA image)

ALMA's iconic ringed disk. but the *inner* AU was imaged by GRAVITY: photometric center confirms a Keplerian rotating inner disk consistent with no inner planet.

## the science

interferometric YSO observations test:

### 1. magnetospheric truncation

stellar magnetic fields truncate the disk at $r \sim B^{4/7}$ (the Alfvén radius). interferometry directly resolves where this happens.

### 2. dust-sublimation radius

scales with stellar luminosity: $r_{\rm sub} \sim 0.45 (L/L_\odot)^{1/2}$ AU. interferometric measurements verify this scaling for many YSOs.

### 3. planet formation

direct or indirect evidence for planets:
- spiral structures (planet wakes)
- gaps in the disk
- excess emission at planet positions

### 4. accretion rate

the inner disk's mass accretion rate is set by viscous evolution. direct imaging constrains the alpha-viscosity parameter.

## the typical observation

planning a GRAVITY observation:
1. observe the target with two baseline orientations
2. use a fringe-tracking star within ~10" (often the YSO itself if bright)
3. integrate for 20-60 minutes per baseline
4. observe a calibrator
5. fit a parametric disk model (uniform disk + ring + sublimation wall)

result: a model-fit description of the inner disk geometry plus uncertainty bounds.

## the interplay with ALMA

ALMA images the *outer* disk (10-100 AU); GRAVITY/VLTI images the *inner* disk (0.1-10 AU). together they give a complete picture.

YSO surveys often combine both: ALMA for outer-disk gas/dust, VLTI/CHARA for inner-disk structure. modern science papers routinely fuse these data.

## see also

- [VLTI Very Large Telescope Interferometer](../../02_Zettel/Theory/interf/VLTI Very Large Telescope Interferometer.html)
- [Stellar surface imaging](../../02_Zettel/Theory/interf/Stellar surface imaging.html)
- [Dust shells and Wolf-Rayet stars](../../02_Zettel/Theory/interf/Dust shells and Wolf-Rayet stars.html)
- [Major radio interferometers](../../02_Zettel/Theory/interf/Major radio interferometers.html)
- [Astronomical_Interferometry_MOC](../../00_Atlas/Astronomical_Interferometry_MOC.html)
