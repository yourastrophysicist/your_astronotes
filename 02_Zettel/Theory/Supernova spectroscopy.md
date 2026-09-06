---
layout: default
title: "Supernova spectroscopy"
---

**supernova spectra** classify SNe into thermonuclear (Type Ia) vs core-collapse (Types Ib, Ic, II) based on the **presence or absence** of hydrogen and helium in the spectrum. the ejecta evolve dramatically over weeks to months, with each phase producing distinctive spectral features.

## the classification scheme

### Type Ia
- **no hydrogen** (no Balmer lines).
- **strong Si II $\lambda 6355$ Å** absorption near max light. signature of partial nuclear burning to intermediate-mass elements.
- **broad lines** $\sim 10^4$ km/s.
- progenitor: thermonuclear explosion of a $\sim 1.4\,M_\odot$ C/O white dwarf.
- standard candle for cosmology ([Type Ia supernovae as standard candles](../../02_Zettel/Theory/Type Ia supernovae as standard candles.md)).

### Type Ib
- **no hydrogen**, **with helium** (He I $\lambda 5876, 6678, 7065$).
- progenitor: massive star that lost its H envelope (Wolf-Rayet WN type) before core collapse.

### Type Ic
- **no hydrogen, no helium**.
- progenitor: even more stripped (WC), only C/O remaining.
- some Type Ic-BL (broad-lined) connected to long gamma-ray bursts.

### Type II
- **hydrogen present** (broad Balmer P-Cygni profiles).
- progenitor: red supergiant retaining most of its H envelope.
- subdivided by light curve: Type IIP (plateau, classical), IIL (linear), IIb (transitions to Type Ib appearance), IIn (narrow lines from CSM interaction).

## spectral evolution

over weeks to months post-max:

### **photospheric phase** (day 0 to $\sim 30$)
optically thick photosphere recedes through the ejecta. spectrum shows:
- broad **P Cygni profiles**: blueshifted absorption + redshifted emission.
- velocity from absorption-line minimum: thousands of km/s.
- progenitor's composition revealed in absorption lines (Si II for Ia, He I for Ib, H for II).

### **nebular phase** (day $\sim 100+$)
ejecta optically thin. spectrum dominated by **forbidden line emission** from the inner ejecta:
- **$[OI]\,\lambda 6300$**: oxygen-rich, traces core-collapse nucleosynthesis.
- **$[CaII]\,\lambda 7291, 7324$**: calcium emission.
- **$[FeII]$, $[FeIII]$**: iron from $^{56}$Ni $\to ^{56}$Co $\to ^{56}$Fe decay chain.
- **$[NiII]$**: in Type Ia, traces unmixed iron-peak material.

profile widths give ejecta velocity ($\sim 10^4$ km/s for Type Ia, $\sim 10^3$ to $10^4$ for core-collapse).

## examples in `intro_spec.pdf`

the user has plot:
- **SN 1996X (Ia)**: clear Si II, no H, no He.
- **SN 1994I (Ic)**: O I, Ca II, no H, no He.
- **SN 1999ex (Ib)**: He I prominent, no H.
- **SN 2008ax (IIb)**: H$\alpha$ + He I, transitioning.
- **SN 1999em (II)**: H$\alpha$ Balmer dominant.
- **SN 2007gr (Ic)** in nebular: $[OI], [CaII], [FeII]$.
- **SN 2007Y (IIb)**, **SN 2004et (II)** in nebular: clear nebular forbidden lines.

## the role of $^{56}$Ni decay

a critical link to spectroscopy: SNe Ia (and most core-collapse) are powered late-time by **radioactive decay**:
$$^{56}{\rm Ni} \xrightarrow{6.1\,{\rm d}} ^{56}{\rm Co} \xrightarrow{77.3\,{\rm d}} ^{56}{\rm Fe}$$

energy from gamma-rays + positrons heats the ejecta, driving the late-time emission. nebular Fe + Co lines directly trace the produced $^{56}$Ni mass: $\sim 0.6\,M_\odot$ for typical Ia, $\sim 0.05\,M_\odot$ for core-collapse.

## see also

- [Type Ia supernovae as standard candles](../../02_Zettel/Theory/Type Ia supernovae as standard candles.md)
- [Cepheids and supernovae](../../02_Zettel/Theory/Cepheids and supernovae.md)
- [Emission line stars](../../02_Zettel/Theory/Emission line stars.md)
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.md)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.md)
- [Helium energy levels](../../02_Zettel/Theory/Helium energy levels.md)
- [Galactic novae spectroscopy](../../02_Zettel/Theory/Galactic novae spectroscopy.md)
- [Supernova remnant spectroscopy](../../02_Zettel/Theory/Supernova remnant spectroscopy.md)
- [Stellar populations I II III](../../02_Zettel/Theory/Stellar populations I II III.md)
