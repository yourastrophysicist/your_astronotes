---
layout: default
title: "Dark matter rotation curves"
---

**flat rotation curves of spiral galaxies** were the original observational evidence for dark matter. discovered by Vera Rubin + Kent Ford in the 1970s. now confirmed across thousands of galaxies.

## the Newtonian prediction

for a spherical mass distribution $M(r)$, circular orbital velocity:
$$V^2(r) = GM(r)/r$$

if all the mass is in a stellar disk concentrated within radius $R_*$, then beyond $R_*$:
$$V(r) \propto 1/\sqrt r\quad\text{(Keplerian)}$$

so we expect a **Keplerian decline** at large radii: velocities falling off like $1/\sqrt r$.

## the observation

what is **observed**: rotation curves remain **flat** out to large radii, $V(r) \sim $ const for $r \gg R_*$.

example data from Rubin 1980 (21 spiral galaxies):
- inner: rises rapidly with $r$.
- middle: plateaus.
- outer: stays at $V_{\rm flat}$ for many disk scale lengths.

## the implication: dark matter halo

flat $V(r)$ requires $M(r) \propto r$ at large radii, i.e. **$\rho(r) \propto 1/r^2$** (constant mass enclosed per shell). this is **dark matter**, distributed in a roughly spherical halo around the galaxy.

specifically: rotation curves out to $\sim 5\,r_d$ (5 disk scale lengths) imply:
- **dark matter mass** ($r < 5 r_d$) typically $\sim 5$ to $10$ times the stellar mass.
- **dark halo profile** approximately NFW (Navarro-Frenk-White) or pseudo-isothermal.

## measurement methods

### 21-cm rotation curves
HI gas in spiral galaxies extends to $\sim 5 r_d$ or beyond. 21-cm Doppler observations (Arecibo, Westerbork, ATCA) give $V(r)$ to large radii where stellar disk has faded.

modern surveys: **THINGS** (The HI Nearby Galaxy Survey, $\sim 30$ galaxies). high-resolution kinematics.

### optical emission-line rotation
H$\alpha$ + $[NII]$ from HII regions. easier to observe at smaller radii. Rubin's original technique.

### IFU
modern: H$\alpha$ + stellar kinematics from MaNGA, SAMI, CALIFA. resolved 2D velocity fields.

## the rotation curve decomposition

modern fits decompose $V(r)$ into:
$$V^2(r) = V_*^2(r) + V_g^2(r) + V_{DM}^2(r)$$

with:
- $V_*$: stellar disk contribution.
- $V_g$: gas (HI + H$_2$).
- $V_{DM}$: dark-matter halo.

each component has its own profile. **$V_{DM}(r)$ dominates at large radii** (where stellar + gas contributions fall).

## the dark-halo profiles

candidate halo profiles:
- **NFW** (Navarro-Frenk-White 1996): $\rho \propto 1/[r(r + r_s)^2]$. inner cusp $\rho \propto 1/r$, outer $\rho \propto 1/r^3$. predicted by $\Lambda$CDM N-body simulations.
- **pseudo-isothermal**: $\rho \propto 1/(r^2 + r_c^2)$. inner core $\rho = $ const, outer $\rho \propto 1/r^2$.
- **Burkert profile**: empirical core profile, fits dwarf rotation curves better than NFW.
- **Einasto**: $\rho \propto \exp(-r^\alpha)$. modern simulations fit this slightly better than NFW.

observations of dwarf spirals suggest **cores rather than cusps** (the "cusp-core problem"), an open issue in $\Lambda$CDM phenomenology. baryonic feedback may convert NFW cusps to cores (ROMULUS, FIRE simulations).

## the M/L ratio

mass-to-light ratio in the visible disk: $M_*/L \sim 1$ to $5$ in solar units (consistent with normal stellar populations).

mass-to-light for the **whole halo**: $M_{\rm tot}/L \sim 10$ to $30$ for typical spirals; up to $\sim 1000$ for dwarfs.

## see also

- [Cosmic_inventory_dark_matter](../../02_Zettel/Theory/Cosmic_inventory_dark_matter.html)
- [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.html)
- [Spiral arm kinematics](../../02_Zettel/Theory/Spiral arm kinematics.html)
- [Dark matter in elliptical galaxies](../../02_Zettel/Theory/Dark matter in elliptical galaxies.html)
- [Dark matter in dwarf galaxies](../../02_Zettel/Theory/Dark matter in dwarf galaxies.html)
- [MOND](../../02_Zettel/Theory/MOND.html)
- [Lensing as a cosmological probe](../../02_Zettel/Theory/Lensing as a cosmological probe.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
