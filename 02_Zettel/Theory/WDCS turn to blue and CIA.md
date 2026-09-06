---
layout: default
name: WDCS turn to blue and CIA
description: H2 collision-induced absorption in cool dense WD atmospheres bends the cooling sequence back toward the blue
---

# wdcs turn to blue and cia

deep CMDs of nearby globular clusters and old open clusters reveal something unexpected at the very faint end of the [White dwarf cooling theory](../../02_Zettel/Theory/White dwarf cooling theory.md): instead of continuing to redden as luminosity drops, the white dwarf cooling sequence (WDCS) bends back **toward the blue**, forming a hook (the so-called blue turn) at $M_{F606W} \sim 15\text{-}16$. ![L06_p07_WD_blueturn](../../assets/images/L06_p07_WD_blueturn.png) this feature is real, predicted by atmosphere models, and a sensitive age diagnostic.

## physical origin

the explanation lies in the high-density physics of cool, hydrogen-rich WD atmospheres.

**high-density opacity effects.** as a WD cools below $T_{\rm eff} \sim 5000$ K its photosphere becomes very dense (because the atmosphere is so thin and gravity so strong). collisions between H, H$_2$, and He become frequent enough to perturb the electronic and rotational states of the molecules, producing opacity that does not exist in dilute gas.

**collision-induced absorption (CIA) of H$_2$.** the H$_2$ molecule has no permanent dipole moment and so does not absorb infrared photons in isolation. but during a collision (with another H$_2$, with He, or with H), the transient distortion of the molecular charge distribution produces an induced dipole that **does** couple to radiation. this gives broad, strong opacity bands across the red and infrared, particularly around $\sim 1\text{-}5\,\mu$m. the opacity scales with density squared (because two collision partners are needed) and so it switches on dramatically only when the atmosphere is cool and dense.

## consequence for the CMD

the photosphere becomes nearly opaque in the infrared while remaining relatively transparent in the optical and near-UV. the spectral energy distribution shifts: the star can no longer radiate efficiently at long wavelengths, so the emergent flux pushes toward bluer colours even as $T_{\rm eff}$ continues to drop. the result is that, in $(F606W{-}F814W)$ or any optical-IR colour, the cooling sequence reaches a reddest point and then walks back toward the blue. in a CMD this looks like a hook at the faint end, often referred to as the **blue hook of the WDCS**.

## why it matters

the blue turn is set by a **specific combination of $T_{\rm eff}$, $\log g$, and atmospheric composition**, and atmosphere models (e.g. Hansen et al. 2007) reproduce it quantitatively. since cooler WDs are older, the blue turn corresponds to a definite age. clusters that show a clear hook are old enough that the oldest WDs have cooled into the CIA regime; clusters that don't reach the hook are too young or too distant. the position of the hook in absolute magnitude is therefore one of the cleanest age estimators available, with little dependence on metallicity (see [White dwarf cooling theory](../../02_Zettel/Theory/White dwarf cooling theory.md) for why WDCS ages are metallicity-insensitive in general).

it is one of the few places in stellar astrophysics where molecular physics in a strange regime (dense H$_2$ at $\rho \gtrsim 0.1$ g cm$^{-3}$) directly maps onto a measurable colour-magnitude feature used to date the Galaxy.

## see also
- [White dwarf cooling theory](../../02_Zettel/Theory/White dwarf cooling theory.md)
- [Age dating from the WD luminosity function](../../02_Zettel/Theory/Age dating from the WD luminosity function.md)
- [Color-magnitude diagrams of clusters](../../02_Zettel/Theory/Color-magnitude diagrams of clusters.md)
- [Continuum opacity sources](../../02_Zettel/Theory/Continuum opacity sources.md)
- [White dwarf overview](../../02_Zettel/Theory/White dwarf overview.md)
- [Stellar_Astrophysics_MOC](../../00_Atlas/Stellar_Astrophysics_MOC.md)
