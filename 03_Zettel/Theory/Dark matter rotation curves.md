---
layout: "default"
title: "Dark matter rotation curves"
---
{% raw %}
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

- [Cosmic_inventory_dark_matter](./Cosmic_inventory_dark_matter.html)
- [Tully-Fisher relation](./Tully-Fisher%20relation.html)
- [Spiral arm kinematics](./Spiral%20arm%20kinematics.html)
- [Dark matter in elliptical galaxies](./Dark%20matter%20in%20elliptical%20galaxies.html)
- [Dark matter in dwarf galaxies](./Dark%20matter%20in%20dwarf%20galaxies.html)
- [MOND](./MOND.html)
- [Lensing as a cosmological probe](./Lensing%20as%20a%20cosmological%20probe.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_dm-06.png](../../assets/images/gal_dm-06.png)
*Vera Rubin and Kent Ford (1970) optical spectroscopy of M31 HII regions.*

![gal_dm-07.png](../../assets/images/gal_dm-07.png)
*21 cm HI radio observations (Bosma 1981, van Albada 1985) tracing rotation beyond optical disks.*

![gal_dm-08.png](../../assets/images/gal_dm-08.png)
*Navarro, Frenk & White (NFW 1996) dark matter halo profile: rho(r) = rho_0 / [ (r/r_s) * (1 + r/r_s)^2 ].*

![gal_dm-09.png](../../assets/images/gal_dm-09.png)
*Cusp-core problem: NFW steep central cusp (rho ~ r^(-1)) vs observed flat cores (rho ~ const) in dwarf galaxies.*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_dm-01.png](../../assets/images/gal_dm-01.png)

![gal_dm-02.png](../../assets/images/gal_dm-02.png)

![gal_dm-03.png](../../assets/images/gal_dm-03.png)

![gal_dm-04.png](../../assets/images/gal_dm-04.png)

![gal_dm-05.png](../../assets/images/gal_dm-05.png)

![gal_dm-10.png](../../assets/images/gal_dm-10.png)

![gal_dm-11.png](../../assets/images/gal_dm-11.png)

![gal_dm-12.png](../../assets/images/gal_dm-12.png)

![gal_dm-13.png](../../assets/images/gal_dm-13.png)

![gal_dm-14.png](../../assets/images/gal_dm-14.png)

![gal_dm-15.png](../../assets/images/gal_dm-15.png)

![gal_dm-16.png](../../assets/images/gal_dm-16.png)

![gal_dm-17.png](../../assets/images/gal_dm-17.png)

![gal_dm-18.png](../../assets/images/gal_dm-18.png)

![gal_dm-19.png](../../assets/images/gal_dm-19.png)

![gal_dm-20.png](../../assets/images/gal_dm-20.png)

![gal_dm-21.png](../../assets/images/gal_dm-21.png)

![gal_dm-22.png](../../assets/images/gal_dm-22.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (9)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Dark%20matter%20in%20dwarf%20galaxies.html" class="backlink-item">Dark matter in dwarf galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Dark%20matter%20in%20elliptical%20galaxies.html" class="backlink-item">Dark matter in elliptical galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Ionized%20gas%20kinematics.html" class="backlink-item">Ionized gas kinematics</a></li>
    <li class="backlink-item-wrap"><a href="./Low%20surface%20brightness%20galaxies.html" class="backlink-item">Low surface brightness galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./MOND.html" class="backlink-item">MOND</a></li>
    <li class="backlink-item-wrap"><a href="./Mass-radius%20and%20mass-velocity%20relations.html" class="backlink-item">Mass-radius and mass-velocity relations</a></li>
    <li class="backlink-item-wrap"><a href="./Modified%20gravity%20alternatives.html" class="backlink-item">Modified gravity alternatives</a></li>
    <li class="backlink-item-wrap"><a href="./Rotation%20curves.html" class="backlink-item">Rotation curves</a></li>
  </ul>
</div>
