---
layout: default
title: "AGN spectroscopy"
---

**Active Galactic Nuclei (AGN)** are powered by accretion onto supermassive black holes ($M \sim 10^6$ to $10^{10}\,M_\odot$). their spectra are the most diverse in astronomy, with features spanning radio to gamma-ray. central spectroscopic distinction: **broad-line region (BLR)** + **narrow-line region (NLR)** + nuclear continuum.

## the unified model

an AGN consists of:
- **central engine**: SMBH + accretion disk (UV-optical luminosity).
- **broad-line region (BLR)**: dense, fast-moving gas at $\sim 0.01$ to $1$ pc from BH. emits broad permitted lines (FWHM $\sim 5000$ km/s) from photoionised gas.
- **dusty torus**: at $\sim 1$ to $10$ pc, obscures the BLR from edge-on viewing angles. emits IR thermal continuum.
- **narrow-line region (NLR)**: extended low-density gas at $\sim 100$ pc to kpc. photoionised by central source, emits narrow forbidden + permitted lines (FWHM $\sim 100$ to $1000$ km/s).
- **jets**: synchrotron radio + X-ray emission.

depending on viewing angle, different combinations are visible.

## the canonical AGN types

| type | BLR visible? | NLR visible? | continuum | example |
|---|---|---|---|---|
| Type 1 (Seyfert 1, BLRG, quasar) | yes (face-on view) | yes | UV + power law | NGC 4151, 3C390.3 |
| Type 2 (Seyfert 2, NLRG) | no (edge-on, BLR obscured) | yes | host-dominated | NGC 1068, Cyg A |
| LINER | weak/none | yes (low-ionisation lines) | weak/host | NGC 4579 |
| BL Lac | no | no | beamed featureless | 0814+425 |
| quasar | yes | yes | extreme | 3C273 |

## key BLR features (Type 1)

broad permitted lines, ionised gas in deep gravity well of SMBH:
- **broad H$\alpha, H\beta$**: FWHM $\sim 2000$ to $20\,000$ km/s.
- **broad He II $\lambda 4686$**.
- **broad Mg II $\lambda 2798$** in UV.
- **broad Ly$\alpha$**: prominent in $z > 1.7$ AGN.
- **C IV $\lambda 1549$, C III] $\lambda 1909$**: signature UV resonance + intersystem lines.

profile widths give **virial mass** of the SMBH: $M_{\rm BH} \propto R_{BLR} \cdot v_{BLR}^2/G$, with $R_{BLR}$ from reverberation mapping and $v_{BLR}$ from line FWHM.

## key NLR features

narrow forbidden + permitted lines, low-density photoionised gas:
- **$[OIII]\,\lambda 4959, 5007$**: very strong.
- **$[NeIII]\,\lambda 3869$**, **$[NeV]\,\lambda 3426$**: high-ionisation tracers.
- **$[OII], [NII], [SII], [OI]$**.
- **He II $\lambda 4686$**: confirms hard ionising spectrum.

ratios of these distinguish AGN photoionisation from star-formation photoionisation (BPT diagram).

## reverberation mapping

a beautiful technique for BLR sizes + SMBH masses:
1. monitor the **continuum** and **broad emission line** light curves over months.
2. measure the **time delay** $\tau$ between continuum changes and the line response.
3. light-travel time: $R_{BLR} = c\tau$.
4. use the line FWHM as proxy for $v_{BLR}$.
5. mass: $M_{BH} = f\,R_{BLR}\,v_{BLR}^2/G$ with $f$ a geometric factor.

reverberation-mapped masses for $\sim 100$ AGN. forms the basis of "broad-line virial mass estimates" applied to surveys of $\sim 10^5$ quasars.

## the variability

AGN are **variable** at all timescales:
- continuum varies on weeks to months.
- emission lines respond with delay (the reverberation principle).
- some AGN ("changing-look" AGN) transition between Type 1 and Type 2 over years.

this requires multi-epoch spectroscopy.

## quasars at high redshift

quasars are the brightest AGN, observable to $z = 7$. their spectra at high $z$ probe:
- **the IGM via Ly$\alpha$ forest**: HI absorbers along the sight line.
- **proximity zones**: ionisation around the quasar.
- **damped Ly$\alpha$ systems (DLAs)**: HI clouds along the sight line.
- **metal absorbers**: foreground galaxies.
- **the epoch of reionisation**: at $z > 6$, the increasing Gunn-Peterson trough.

so AGN are not just targets but **probes** of cosmology.

## see also

- [Galaxy spectroscopy by type](../../02_Zettel/Theory/Galaxy spectroscopy by type.md)
- [BPT diagram](../../02_Zettel/Theory/BPT diagram.md)
- [Forbidden line diagnostics](../../02_Zettel/Theory/Forbidden line diagnostics.md)
- [Ionisation parameter U](../../02_Zettel/Theory/Ionisation parameter U.md)
- [Magnesium and alkali earths](../../02_Zettel/Theory/Magnesium and alkali earths.md)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.md)
- [Helium energy levels](../../02_Zettel/Theory/Helium energy levels.md)
- [Forbidden vs permitted vs semiforbidden transitions](../../02_Zettel/Theory/Forbidden vs permitted vs semiforbidden transitions.md)
- [Synchrotron continuum](../../02_Zettel/Theory/Synchrotron continuum.md)
- [Galactic Center](../../02_Zettel/Theory/Galactic Center.md) — the closest SMBH
