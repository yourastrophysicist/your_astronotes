---
layout: "default"
title: "MOND"
---
{% raw %}
**Modified Newtonian Dynamics (MOND)**, proposed by Mordehai Milgrom in 1983, is the most-developed alternative to dark matter. it modifies Newtonian gravity at very low accelerations to explain galaxy rotation curves without invoking unseen mass.

## the basic idea

at low accelerations $a \ll a_0 \sim 1.2 \times 10^{-10}$ m/s$^2$, gravity is no longer Newtonian:
$$F = m\,\mu(a/a_0)\,a$$

with the **interpolation function** $\mu(x) \to 1$ for $x \gg 1$ (Newtonian regime) and $\mu(x) \to x$ for $x \ll 1$ (deep MOND regime).

equivalent: the gravitational force from a mass $M$ at distance $r$ is:
$$F_{\rm grav} = \begin{cases}GM/r^2 & a \gg a_0\,(\text{Newtonian})\\ \sqrt{GM a_0}/r & a \ll a_0\,(\text{MOND})\end{cases}$$

## the predictions

### flat rotation curves

in the deep MOND regime: equating to centripetal $V^2/r$:
$$V^2/r = \sqrt{GMa_0}/r \quad\Rightarrow\quad V_{\rm flat} = (GMa_0)^{1/4}$$

so $V$ becomes **constant** at large $r$, naturally explaining flat rotation curves **without dark matter**.

### the baryonic Tully-Fisher relation

at large $r$: $V^4 = GMa_0$. so $M_{\rm baryon} = V^4/(Ga_0)$. relates baryonic mass directly to flat rotation velocity, the **baryonic Tully-Fisher relation** (BTF). this is observed: McGaugh et al. show $M_{\rm baryon} \propto V^4$ with very small scatter, **unexplained in $\Lambda$CDM** without fine-tuning.

### the radial-acceleration relation

McGaugh + Lelli + Schombert 2016: across all spirals, the observed acceleration is a tight function of the Newtonian (baryonic) acceleration alone:
$$g_{\rm obs} = g_{\rm bar}/(1 - e^{-\sqrt{g_{\rm bar}/g_\dagger}})$$

with $g_\dagger \sim 1.2 \times 10^{-10}$ m/s$^2$. matches $a_0$ from MOND.

so **galaxy dynamics are driven by baryons alone**, not by an extended dark matter halo with arbitrary properties. a remarkable observational fact, naturally explained by MOND.

## the successes

MOND fits:
- **rotation curves** of $\sim 200$ spiral galaxies (SPARC sample) without free parameters.
- **baryonic Tully-Fisher** with no scatter.
- **dwarf galaxies** with low $\Sigma$ (deep MOND).
- **gravitational lensing** in galaxy-scale lenses (mostly).

## the failures

MOND struggles with:
- **galaxy clusters**: needs $\sim 2$ to $3$ times more "missing" mass than baryons can provide. usually attributed to "cluster dark matter" (neutrinos? or something else).
- **CMB**: scalar perturbations + acoustic peak structure are very well fit by $\Lambda$CDM with cold dark matter; MOND has trouble matching at the percent level.
- **Bullet Cluster**: gas + lensing maps separated, requires DM as a collisionless component. MOND cannot easily reproduce.
- **structure formation**: dark matter is needed to grow LSS from primordial seeds.

so MOND is **excellent** at the galaxy scale, **fails** at cluster + cosmological scales.

## the relativistic extensions

MOND in its original form is Newtonian. relativistic versions exist:
- **TeVeS** (Bekenstein 2004): scalar-tensor-vector theory. accommodates lensing.
- **Aether-scalar-tensor** theories.
- **Verlinde's emergent gravity** (2016): an entirely different framework deriving MOND-like dynamics from holographic principles.

none has been fully successful at explaining all of cosmology.

## the modern view

most cosmologists support **$\Lambda$CDM with dark matter** as the standard model. but:
- MOND's success at galaxy scales is **real + unexplained**.
- the **baryonic Tully-Fisher** + **radial-acceleration relations** are striking + need explanation in any framework.

possible synthesis: dark matter exists, but its distribution + interactions with baryons effectively produce MOND-like behaviour at small scales (through feedback + halo conspiracy).

active debate. JWST + Euclid + ELT + DESI will help discriminate.

## see also

- [Cosmic_inventory_dark_matter](./Cosmic_inventory_dark_matter.html)
- [Dark matter rotation curves](./Dark%20matter%20rotation%20curves.html)
- [Tully-Fisher relation](./Tully-Fisher%20relation.html)
- [Dark matter in dwarf galaxies](./Dark%20matter%20in%20dwarf%20galaxies.html)
- [Lensing as a cosmological probe](./Lensing%20as%20a%20cosmological%20probe.html)
- [Galaxy clusters and overview of evolution](./Galaxy%20clusters%20and%20overview%20of%20evolution.html)
- [ΛCDM current parameters](./%CE%9BCDM%20current%20parameters.html)
- [Astrophysics_of_Galaxies_MOC](../../04_Atlas/Astrophysics_of_Galaxies_MOC.html)

---

## astrophysics of galaxies figures and slides (Prof. Alessandro Pizzella)

![gal_dm-13.png](../../assets/images/gal_dm-13.png)
*Modified Newtonian Dynamics (Mordehai Milgrom 1983).*

![gal_dm-14.png](../../assets/images/gal_dm-14.png)
*Acceleration threshold a_0 ~ 1.2 x 10^(-10) m/s^2.*

![gal_dm-15.png](../../assets/images/gal_dm-15.png)
*Deep-MOND regime (a << a_0): effective acceleration a = sqrt(a_N * a_0) = sqrt(G M a_0) / r.*

![gal_dm-16.png](../../assets/images/gal_dm-16.png)
*Flat rotation curve derivation: v^2 / r = sqrt(G M a_0) / r implies v_flat = (G M a_0)^(1/4).*

![gal_dm-17.png](../../assets/images/gal_dm-17.png)
*Natural explanation of the Baryonic Tully-Fisher Relation (M_baryon proportional to v_flat^4).*

---

## lecture slides and reference figures (Prof. Alessandro Pizzella)

![gal_dm-59.png](../../assets/images/gal_dm-59.png)

![gal_dm-60.png](../../assets/images/gal_dm-60.png)

![gal_dm-61.png](../../assets/images/gal_dm-61.png)

![gal_dm-62.png](../../assets/images/gal_dm-62.png)

![gal_dm-63.png](../../assets/images/gal_dm-63.png)

![gal_dm-64.png](../../assets/images/gal_dm-64.png)

![gal_dm-65.png](../../assets/images/gal_dm-65.png)

![gal_dm-66.png](../../assets/images/gal_dm-66.png)

![gal_dm-67.png](../../assets/images/gal_dm-67.png)

![gal_dm-68.png](../../assets/images/gal_dm-68.png)

![gal_dm-69.png](../../assets/images/gal_dm-69.png)

![gal_dm-70.png](../../assets/images/gal_dm-70.png)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (3)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astrophysics_of_Galaxies_MOC.html" class="backlink-item">Astrophysics_of_Galaxies_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Dark%20matter%20in%20dwarf%20galaxies.html" class="backlink-item">Dark matter in dwarf galaxies</a></li>
    <li class="backlink-item-wrap"><a href="./Dark%20matter%20rotation%20curves.html" class="backlink-item">Dark matter rotation curves</a></li>
  </ul>
</div>
