---
layout: default
title: "Cosmological masers"
---

# Cosmological masers

VLBI imaging of *water masers* in nearby galaxies — narrow, very-bright emission lines from $H_2O$ molecules excited by stellar/AGN radiation. their high brightness temperature ($T_b \sim 10^{14}$ K) makes them ideal VLBI targets, and their presence in galactic disks gives us *geometric* distance measurements.

## the masers

water masers at 22 GHz. the upper-level transition is **inverted** (more atoms in the excited state than ground), allowing **stimulated emission** that exponentially amplifies an incoming photon flux. result: extremely narrow, bright spectral lines.

bright maser lines: $\sim 10$-$100$ Jy. at $T_b > 10^{14}$ K (10⁵× brighter than the brightest non-maser radio source). compact (~mas) and short-lived (~years).

## the scientific value

water masers in nearby galaxies trace the kinematics of *molecular gas* in the central regions:
- accretion-disk-driven masers in AGN central regions
- star-formation-driven masers around forming massive stars
- shock-driven masers in supernovae and outflows

VLBI imaging at ~mas resolution traces the maser positions and velocities precisely. when the masers form a Keplerian disk, this gives a *direct geometric distance* to the host galaxy.

## the canonical example: NGC 4258

a nearby spiral galaxy at $\sim 7.6$ Mpc. its central region hosts a Keplerian disk of water masers around the central SMBH ($M_{\rm BH} = 4 \times 10^7 M_\odot$).

the masers:
- form a thin nearly-edge-on disk
- show Keplerian rotation around the central BH
- have known *radial velocities* (from spectroscopy) and *positions* (from VLBI)
- the masers' centripetal acceleration toward the BH is *measurable*

from the rotation curve + acceleration, you get **the geometric distance** without using any distance ladder:
$$d = \frac{v_{\rm cosphasing}^2}{a_{\rm centripetal}} = \text{angular size of orbit}$$

NGC 4258 distance: $7.60 \pm 0.17$ Mpc (Reid et al. 2019). independent of every other distance measurement.

## the implications for $H_0$

the cosmological **distance ladder** uses:
- nearby Cepheids (parallax-calibrated)
- Cepheids in galaxies with type Ia supernovae
- type Ia supernovae at cosmological distances

each rung introduces uncertainty. NGC 4258's *direct geometric distance* provides an independent calibration:
- Cepheids in NGC 4258's disk can be measured with HST
- their period-luminosity relation calibrated against the maser distance
- this calibration applied to other galaxies' Cepheids
- result: an independent $H_0$ value

NGC 4258 + Cepheids + SN Ia → $H_0 = 73.5 \pm 1.0$ km/s/Mpc (Riess et al. 2022). this is *the* high-precision direct distance ladder.

## other galactic megamaser disks

NGC 4258 is not unique. other spiral galaxies with similar structures:
- **NGC 1068** (M77): central megamaser disk, distance precision ~5%
- **NGC 1320, NGC 3079, NGC 6323, etc.**: less-well-studied megamaser hosts
- the **Megamaser Cosmology Project** systematically observes these for $H_0$ measurements

each provides an independent geometric distance, contributing to the precision of the cosmological distance ladder.

## the technique

VLBI observation:
1. observe the galaxy with a global VLBI array at 22 GHz
2. detect maser spots at $\sim$ mas precision
3. measure their relative positions over years
4. fit a Keplerian disk model
5. extract the geometric distance

a typical observation: 100+ hours of integration on each galaxy, with multi-year monitoring.

## the future

planned:
- **ngVLA** would observe more megamaser galaxies at higher precision
- **SKA-Mid** could detect fainter masers, extending the distance reach
- **JCMT and ALMA** in mm regime could extend to 321 GHz water masers (less common but cleaner)

these will provide independent $H_0$ measurements at $\sim 1\%$ precision by 2030s.

## see also

- [Very Long Baseline Interferometry VLBI](../../../02_Zettel/Theory/interf/Very Long Baseline Interferometry VLBI.html)
- [Major radio interferometers](../../../02_Zettel/Theory/interf/Major radio interferometers.html)
- [AGN and supermassive black holes](../../../02_Zettel/Theory/interf/AGN and supermassive black holes.html)
- [Astronomical_Interferometry_MOC](../../../00_Atlas/Astronomical_Interferometry_MOC.html)
