---
layout: default
title: "Jeans theory and protostellar formation"
---

stars do not form in equilibrium — they form by **gravitational collapse** of cold molecular cloud regions whose mass exceeds the **Jeans mass**.

the cosmological version of this argument applies to perturbations on the FRW background (see [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.md)). here we focus on the stellar/protostellar version.

---

## the Jeans length and Jeans mass

in a self-gravitating gas with sound speed $c_s$ and density $\rho$, perturbations larger than the **Jeans length** are gravitationally unstable:
$$\lambda_J = c_s \sqrt{\frac{\pi}{G\rho}}$$

the corresponding **Jeans mass**:
$$M_J = \frac{4\pi}{3}\rho\left(\frac{\lambda_J}{2}\right)^3 \propto T^{3/2}\rho^{-1/2}$$

physical meaning: a self-gravitating cloud with $M > M_J$ collapses; one with $M < M_J$ oscillates as sound waves and disperses.

---

## the collapse criterion for molecular clouds

molecular clouds in the Milky Way have:
- $T \sim 10$ K (cold molecular hydrogen)
- $\rho \sim 10^{-22}$ g/cm$^3$, or $n_{H_2} \sim 10^4$ cm$^{-3}$

so the Jeans mass is:
$$M_J \sim 100\,M_\odot$$

(at this temperature and density.) cold dense cores in molecular clouds with $M > M_J$ collapse to form stars. denser regions have smaller Jeans masses, so they fragment into multiple stars.

---

## the collapse phase

once collapse begins, the cloud's temperature stays roughly constant (radiation efficiently cools the cloud) while density rises. so $M_J \propto T^{3/2} \rho^{-1/2}$ falls. **the collapsing cloud fragments** into smaller and smaller pieces with smaller $M_J$ — until the cloud becomes optically thick to its own radiation and starts to heat up adiabatically, halting fragmentation.

this is the **opacity-limited fragmentation** mechanism that determines the minimum stellar mass:
$$M_{\rm min} \sim 0.01\, M_\odot$$

— the brown dwarf / planet boundary.

---

## the protostar

after fragmentation, each fragment continues to contract. when the central density and temperature rise enough, **molecular hydrogen dissociates** at $T \sim 2000$ K, absorbing energy and slowing the collapse:
$$H_2 \to 2H \quad (E_{\rm diss} = 4.5\,\text{eV})$$

then **hydrogen ionizes** at $T \sim 10^4$ K:
$$H \to p + e^- \quad (E_{\rm ion} = 13.6\,\text{eV})$$

each phase absorbs energy and modifies the contraction. eventually the central temperature reaches $\sim 10^6$ K and the protostar settles into a **quasi-equilibrium**, contracting on the Kelvin-Helmholtz timescale (see [Stellar evolution timescales](../../02_Zettel/Theory/Stellar evolution timescales.md)).

---

## the Hayashi track

once the protostar is quasi-equilibrium, it descends along the **Hayashi track** on the HR diagram — a nearly vertical line at low $T_{\rm eff}$ (cool surface). during this time:
- $L$ decreases (the surface cools)
- $T_{\rm eff}$ stays nearly constant (the H$^-$ opacity in the photosphere is what fixes it)
- the star contracts on $t_{\rm KH}$

then it transitions to the **Henyey track** (horizontal across the HR diagram) at intermediate masses, until it reaches the **zero-age main sequence (ZAMS)** when $T_c$ becomes high enough to ignite hydrogen.

PMS lifetime:
- $1\, M_\odot$: $t_{\rm KH} \sim 30$ Myr
- $0.1\, M_\odot$: $\sim$ 100 Myr
- $10\, M_\odot$: $\sim 0.1$ Myr (very fast — high mass stars are born almost on the MS)

---

## the IMF

different fragments produce stars of different masses. the resulting distribution of stellar masses at birth is the **initial mass function** (IMF) — see [Initial mass function](../../02_Zettel/Theory/Initial mass function.md).

empirically (Salpeter 1955):
$$\frac{dN}{dM} \propto M^{-2.35} \quad (M \gtrsim 0.5\,M_\odot)$$

with a turnover/flattening at low masses. the IMF is approximately *universal* across galaxies — same shape in the Milky Way, the SMC, and high-z galaxies (within current observational uncertainties). this is a remarkable empirical fact.

---

## why this matters

protostellar collapse is the **bridge** between the diffuse ISM and the stars we observe. it determines:
- the **star formation rate** (SFR) of a galaxy
- the **IMF** that sets the relative number of high vs low mass stars
- the **multiplicity** of star systems (binaries, triples)
- the **initial conditions** for stellar evolution

→ fundamental for galaxy evolution and chemical enrichment ([Chemical evolution of galaxies](../../02_Zettel/Theory/Chemical evolution of galaxies.md)).

---

## see also

- [Fundamentals_Astrophysics_Cosmology_MOC](../../00_Atlas/Fundamentals_Astrophysics_Cosmology_MOC.md)
- [Jeans analysis in expanding universe](../../02_Zettel/Theory/Jeans analysis in expanding universe.md)
- [HR diagram](../../02_Zettel/Theory/HR diagram.md)
- [Main sequence, giants, supergiants, white dwarfs](../../02_Zettel/Theory/Main sequence, giants, supergiants, white dwarfs.md)
- [Stellar evolution timescales](../../02_Zettel/Theory/Stellar evolution timescales.md)
- [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- [Interstellar medium components and gas cycle](../../02_Zettel/Theory/Interstellar medium components and gas cycle.md)
