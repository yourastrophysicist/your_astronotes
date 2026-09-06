---
layout: default
title: "MOND"
---

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

- [Cosmic_inventory_dark_matter](../../02_Zettel/Theory/Cosmic_inventory_dark_matter.html)
- [Dark matter rotation curves](../../02_Zettel/Theory/Dark matter rotation curves.html)
- [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.html)
- [Dark matter in dwarf galaxies](../../02_Zettel/Theory/Dark matter in dwarf galaxies.html)
- [Lensing as a cosmological probe](../../02_Zettel/Theory/Lensing as a cosmological probe.html)
- [Galaxy clusters and overview of evolution](../../02_Zettel/Theory/Galaxy clusters and overview of evolution.html)
- [ΛCDM current parameters](../../02_Zettel/Theory/ΛCDM current parameters.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
