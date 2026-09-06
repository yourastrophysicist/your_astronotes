---
layout: default
title: "Photodissociation regions PDRs"
---

**photodissociation regions (PDRs)** are the boundary layers between HII regions and dense molecular clouds, illuminated by UV photons that don't ionise hydrogen but **do dissociate molecules**. brightest at far-IR fine-structure lines.

## the physical setup

between an HII region (fully ionised, $h\nu > 13.6$ eV photons consumed) and a dense molecular cloud (mostly H$_2$ and CO), there's a transition layer. UV photons with energies between $\sim 6$ eV (the H$_2$ dissociation threshold) and $13.6$ eV penetrate this layer. they don't ionise H, but they:
- dissociate H$_2$ via the Lyman-Werner bands at $\sim 11.5$ eV.
- ionise C I (11.3 eV) and metals.
- heat the gas via photoelectric heating from dust grains.

## the layered structure

moving inward from the HII region toward the dark molecular cloud:

1. **HII region**: H$^+$, $T \sim 10^4$ K.
2. **HII boundary** (ionisation front): rapid drop in ionisation.
3. **HI layer** (PDR): mostly atomic H, ionised C from C II, partially molecular H$_2$. $T \sim 100$ to $1000$ K.
4. **C I layer**: deeper in, C transitions from C II to C I.
5. **CO molecular layer**: even deeper, C I forms CO.
6. **molecular cloud core**: H$_2$, CO, dust at $\sim 10$ to $50$ K.

each layer has characteristic emission.

## key emission lines

### $[CII]\,\lambda 158\,\mu$m

the dominant cooling line of the warm PDR phase. C$^+$ excited collisionally, decays via fine-structure transition of $^2P$ ground term. ALMA + Herschel + APEX have mapped extensive [CII] in nearby and high-$z$ galaxies. emerging as a key SFR tracer at high $z$.

### $[OI]\,\lambda 63, 145\,\mu$m

oxygen fine-structure lines. dominant at high density and pressure. distinguish PDR vs HII contribution via $[OI]/[CII]$ ratio.

### $H_2$ rotational and vibrational lines

excited by UV pumping (Lyman-Werner) followed by cascades through rotational levels. observable at $\sim 2\,\mu$m (1-0 S(1) at 2.12 $\mu$m) for shocked / hot H$_2$, and at mid-IR $\sim 17, 28\,\mu$m for warm H$_2$.

### CO rotational

low-J CO lines (1-0 at 2.6 mm, 2-1 at 1.3 mm, etc.) trace the cold molecular cloud just inside the PDR.

## the science

### photoelectric heating

UV photons absorbed by dust grains eject hot photoelectrons that thermalise in the gas. dominant heating mechanism for the WNM and PDRs. balanced by [CII] and [OI] cooling, gives equilibrium $T$.

### the C+/C/CO transition

depth-dependent. mapping [CII], [CI], CO across a PDR diagnoses local conditions: density, UV field, metallicity.

### chemistry

PDR chemistry is rich: photodissociation, ion-molecule reactions, dust catalysis. modern PDR codes (Meudon PDR, Cloudy with the molecular module, KOSMA) predict line emission given gas density + UV field.

### high-$z$ galaxies

at high $z$, ALMA detects [CII] in galaxies out to $z \sim 8$. the **[CII]-SFR relation** is being calibrated as a high-$z$ SFR tracer competitive with H$\alpha$.

## the ionisation parameter for PDRs

PDRs are characterised by $G_0$ (the FUV flux relative to the local interstellar field) and $n$ (gas density). Tielens & Hollenbach 1985 model grid sets the standard for predicting line emission from $(G_0, n)$.

typical:
- diffuse ISM: $G_0 \sim 1$, $n \sim 1$ cm$^{-3}$. [CII] dominates the cooling.
- typical PDR (Orion bar): $G_0 \sim 10^4$, $n \sim 10^5$ cm$^{-3}$.
- starburst galaxies: $G_0 \sim 10^3$, $n \sim 10^3$.

## see also

- Strömgren sphere
- [H I regions](../../02_Zettel/Theory/H I regions.html)
- [Ionisation stratification](../../02_Zettel/Theory/Ionisation stratification.html)
- [Interstellar medium components and gas cycle](../../02_Zettel/Theory/Interstellar medium components and gas cycle.html)
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.html)
- Cosmic infrared background — sometimes confused
- [Forbidden lines](../../02_Zettel/Theory/Forbidden lines.html)
