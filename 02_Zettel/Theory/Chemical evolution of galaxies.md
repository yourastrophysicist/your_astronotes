---
layout: default
title: "Chemical evolution of galaxies"
---

# chemical evolution of galaxies

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.md)

## the question

galaxies start with primordial gas: H + He, no metals (Z = 0 apart from trace Li). today we measure metallicities from $Z \sim 10^{-4}\,Z_\odot$ in tiny dwarfs up to $Z \sim 3\,Z_\odot$ in massive galaxy centers. **what chain of stellar generations transformed pristine gas into the metal distributions we see?**

this is the domain of chemical evolution, built on:
- stellar yields (how much of each element a star of mass $M$ ejects)
- the IMF (how many stars of each mass form)
- the SFH (when they formed)
- gas flows (inflow from IGM, outflow via winds)

## the bookkeeping equation (Tinsley 1979)

for an element $i$ with mass fraction $X_i$ in the gas, and gas mass $M_g$:

$$\frac{d(M_g X_i)}{dt} = -X_i\, \psi(t) + \int_0^\infty y_{i}(M)\, \xi(M)\, \psi(t - \tau_M)\, dM + \text{inflow} - \text{outflow}$$

terms:
- $-X_i \psi$: element locked into new stars
- integral: element returned by previous generations, with $y_i(M)$ the ejected yield of element $i$ per unit mass of star of mass $M$, and $\tau_M$ the lifetime of that star
- inflow: primordial / metal-poor gas accreted, dilutes $X_i$
- outflow: metal-enriched winds, preferentially remove metals

the Pablo slide (Tinsley 1979) shows $\log E_m$ vs stellar mass for $^{12}$C and $^{16}$O, indicating which stars produce which elements:

## who makes what

- **Type II SNe** (massive stars, $M > 8\,M_\odot$, lifetime $\sim 10$ Myr): α-elements O, Mg, Si, S, Ca. fast enrichment, sets initial α/Fe > 0
- **Type Ia SNe** (WD + companion, delay time $\sim 100$ Myr–Gyr): Fe-peak elements Fe, Ni. slow, drops α/Fe to solar after $\sim 1$ Gyr
- **AGB stars** (intermediate-mass, $1 < M/M_\odot < 8$, lifetime $100$ Myr–Gyr): C, N, s-process elements (Ba, Zr)
- **winds from massive stars**: C, N contributions, depends on $Z$ and rotation

## α/Fe as a clock

the ratio [α/Fe] tells us *how fast* star formation happened:
- high [α/Fe]: enrichment dominated by SN II (fast, short burst before Ia had time)
- solar [α/Fe]: extended SFH, Ia caught up
- sub-solar [α/Fe]: either very extended SFH or Fe-rich accretion

massive ellipticals have enhanced [α/Fe] (Thomas 2005): they formed their stars rapidly, in $< 1$ Gyr, and quenched. the Milky Way thick disk is similar. the thin disk is near-solar.

## closed box vs open box

**closed box**: no inflows, no outflows. gives $Z_{\text{eff}} \simeq p \ln(M_{g,0}/M_g)$ where $p$ is the yield. predicts a *G-dwarf problem*: too many low-$Z$ long-lived stars relative to observation

**open box with inflow** (Larson 1972): dilutes gas, lowers $Z$. solves G-dwarf problem

**leaky box / outflow**: winds remove metals preferentially (supernova-driven). relevant for dwarfs. explains the mass-metallicity relation: lower $M_*$ → stronger relative outflow → lower $Z$

## the mass-metallicity relation

Tremonti 2004 (SDSS): gas-phase O/H rises with $M_*$ over $\sim 2$ dex in mass, flattens near $\log M_* / M_\odot \sim 10.5$.

$$12 + \log(\text{O/H}) \simeq 8.5 + 0.5\,\log(M_*/10^{10}\,M_\odot)$$

interpretation: feedback-driven outflow efficiency depends on $M_h$ → shallower potential → more metals lost. a fundamental relation entangling stellar mass, gas mass, and metallicity. see also the "fundamental metallicity relation" (Mannucci 2010) with SFR as third axis.

## why this matters for SED fitting

- SSP libraries are tabulated at fixed $Z$. the galaxy's actual metallicity history is rarely single-valued
- age-metallicity degeneracy: old/metal-poor looks like young/metal-rich
- better SED fitting models now include chemical evolution as an input (Pacifici 2012, Leja 2017)

## connections

- stellar yields depend on: [Initial mass function](../../02_Zettel/Theory/Initial mass function.md)
- enriches with: [Starburst galaxies](../../02_Zettel/Theory/Starburst galaxies.md), [LIRGs ULIRGs HyLIRGs](../../02_Zettel/Theory/LIRGs ULIRGs HyLIRGs.md)
- measured via: Lick indices in [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.md)
- context for SED fitting: [SED fitting for SFH](../../02_Zettel/Theory/SED fitting for SFH.md)
- cosmological driver: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)

## key references

- Tinsley 1979, 1980 (foundational)
- Tremonti et al. 2004 (mass-metallicity)
- Thomas et al. 2005 (α/Fe in ellipticals)
- Mannucci et al. 2010 (FMR)
- Matteucci 2012 (textbook)
