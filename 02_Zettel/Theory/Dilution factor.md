---
layout: default
title: "Dilution factor"
---

in low-density gas illuminated by a distant star, the radiation field is **geometrically diluted** compared to the field at the star's surface. the **dilution factor** $W$ quantifies this and enters non-LTE calculations of nebular line emission.

## the geometry

at distance $r$ from a star of radius $R_\star$, the radiation field drops as $(R_\star/r)^2$. specifically, the **mean intensity** $J_\nu$ at a point in vacuum surrounding a uniformly bright sphere is:
$$J_\nu(r) = \frac{1}{4\pi}\int I_\nu d\Omega = W(r)\,B_\nu(T_\star)$$
with the **dilution factor**:
$$\boxed{\, W(r) = \frac{1}{2}\left[1 - \sqrt{1 - (R_\star/r)^2}\right] \,}$$

at $r \gg R_\star$: $W \approx (R_\star/r)^2/4$, dropping as the inverse-square law.

## physical meaning

think of it this way: at the stellar surface ($r = R_\star$), the radiation comes from $2\pi$ steradians (the full hemisphere of the star). $W = 0.5$ in that limit.

far from the star, the star subtends a small solid angle, and most of the sky is empty. so the radiation field has the spectral shape of $B_\nu(T_\star)$ but reduced amplitude.

## consequence for line emission

photoexcitation rate of a line at distance $r$ from the star:
$$R_{\rm photo} = W(r)\,\frac{4\pi B_\nu(T_\star)}{h\nu}\,\sigma_{\rm photo}$$

so photoexcitation is suppressed by $W$ at large $r$. consequence: **far from the central star, photoexcitation is negligible** compared to local processes (collisions, recombination cascades). this is exactly the regime of HII regions and PNe at significant radial distance.

at the surface or just above ($r \sim R_\star$ to $\sim 10\,R_\star$), photoexcitation can rival collisions and the line populations are non-LTE in a different regime.

## the dilute Boltzmann distribution

a simple result: in pure resonance scattering with photoexcitation only (no collisions), the population balance gives a **dilute Boltzmann distribution**:
$$\frac{n_u}{n_l} = \frac{g_u}{g_l}\,W \cdot e^{-h\nu/k_BT_\star}$$

at $W = 1$ (full source), this is the LTE ratio at the source temperature. at $W \ll 1$ (dilute), suppression by $W$ relative to LTE.

so even with the right temperature, distance dilutes the populations.

## astronomical relevance

### nebulae

at typical HII-region radii (Strömgren sphere, $\sim 1$ pc), $W \sim 10^{-12}$ for an O star. so the photoexcitation rate from the central star is negligible compared to local collisional rates. the line emission is mostly **collisionally driven** (forbidden lines) or **recombination cascade** (H, He recombination lines).

### CMB photon bath

the CMB has $W = 1$ everywhere (filling all space). so its photoexcitation rate at the H 21 cm line, etc., is fully effective. relevant for high-$z$ HI cooling.

### accretion disks

near the inner edge of a disk around a black hole or compact object, the radiation is intense ($W \to 0.5$). photoionisation and photoexcitation rates approach LTE values; **both** processes are relevant.

## see also

- Strömgren sphere
- [Photoionisation balance](../../02_Zettel/Theory/Photoionisation balance.md)
- [Two-level atom](../../02_Zettel/Theory/Two-level atom.md)
- [Statistical equilibrium equations](../../02_Zettel/Theory/Statistical equilibrium equations.md)
- [Source function](../../02_Zettel/Theory/Source function.md)
- [Local thermodynamic equilibrium LTE](../../02_Zettel/Theory/Local thermodynamic equilibrium LTE.md)
- [Optically thin recombination lines](../../02_Zettel/Theory/Optically thin recombination lines.md)
- [Specific intensity flux luminosity](../../02_Zettel/Theory/Specific intensity flux luminosity.md)
