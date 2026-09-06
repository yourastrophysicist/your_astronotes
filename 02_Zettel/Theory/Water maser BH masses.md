---
layout: default
title: "Water maser BH masses"
---

a special technique to measure SMBH masses with extreme precision: **water masers** in the accretion disks of certain AGN, observed via VLBI. used at NGC 4258 to give the most precise BH mass + distance ever for an external galaxy.

## the technique

some AGN host molecular **water vapour** ($H_2O$) in their accretion disks. the disk is **maser-amplified** by population inversion driven by IR radiation. produces narrow $22.235$ GHz line emission visible to radio telescopes.

if the disk is **edge-on**, the maser emission is amplified preferentially along long sight lines tangent to the rotating disk. this produces:
- **systemic features** (at galaxy redshift) from the front of the disk.
- **redshifted features** from the receding side.
- **blueshifted features** from the approaching side.

## the kinematic information

the masers act as **point-like tracers** of the disk's kinematics. VLBI imaging at $\sim 0.1$ mas resolution gives:
- **positions** of maser spots in the disk.
- **line-of-sight velocities** (Doppler shifts).
- **proper motions** (over years).

from these, **fit a thin Keplerian disk** + **directly measure $M_{BH}$**:
$$M_{BH} = v^2 r/G$$

with $v$ = rotation speed at radius $r$. high-precision: $\sim 1\%$ for the best systems.

## NGC 4258: the gold standard

**NGC 4258** (M106) is the most famous water-maser galaxy:
- $M_{BH} = (4.0 \pm 0.1) \times 10^7\,M_\odot$ (Miyoshi 1995; refined by 2010 + later).
- **distance**: $7.6 \pm 0.2$ Mpc.

## the geometric distance + Hubble constant

beyond just $M_{BH}$, NGC 4258 also gives a **geometric distance** to the galaxy. method:
- VLBI gives **angular size** of the disk.
- Doppler shifts give **physical velocity**.
- combining + assuming the geometry, derive the **physical size**.
- distance = physical size / angular size.

result: distance to NGC 4258 is known to $\sim 3\%$ purely **geometrically**, no distance ladder involved.

NGC 4258 is then used to **calibrate the Cepheid distance scale**: the Cepheids in NGC 4258 give absolute calibration. one of the anchors of the SH0ES program for $H_0$ measurement.

## other maser galaxies

the **Megamaser Cosmology Project (MCP)** has found $\sim 20$ similar systems (UGC 3789, NGC 6323, NGC 5765b, etc.). each gives:
- direct $M_{BH}$.
- direct geometric distance + $H_0$.

current MCP $H_0 \sim 73$ km/s/Mpc, consistent with local SH0ES + in tension with Planck.

## why so precise

water-maser BH masses are precise because:
1. the maser sources are **point-like** + **directly orbiting** the BH at known radii.
2. the **Keplerian disk** model is simple + well-tested.
3. VLBI resolution ($\sim 0.1$ mas) allows resolving sub-parsec scales.
4. no need for stellar dynamics or reverberation mapping; **direct kinematic measurement**.

## limitations

- **rare**: most galaxies don't host water masers. only a few hundred known systems, even fewer with disk geometry.
- **needs edge-on disk** + maser amplification along tangent.
- **VLBI requirements**: need world-spanning array of antennas.

so water-maser masses are powerful but **niche**. complementary to stellar dynamics + reverberation mapping for general AGN samples.

## see also

- [Galactic Center Sgr A and S-stars](../../02_Zettel/Theory/interf/Galactic Center Sgr A and S-stars.html)
- [Reverberation mapping](../../02_Zettel/Theory/Reverberation mapping.html)
- [Stellar dynamics SMBH masses](../../02_Zettel/Theory/Stellar dynamics SMBH masses.html)
- [Magorrian relation](../../02_Zettel/Theory/Magorrian relation.html)
- [M sigma relation](../../02_Zettel/Theory/M sigma relation.html)
- [AGN spectroscopy](../../02_Zettel/Theory/AGN spectroscopy.html)
- [Hubble law](../../02_Zettel/Theory/Hubble law.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
