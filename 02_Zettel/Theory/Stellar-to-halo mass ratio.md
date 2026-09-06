---
layout: default
title: "Stellar-to-halo mass ratio"
---

# stellar-to-halo mass ratio

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the most informative single plot in galaxy evolution

plot $M_*/M_h$ as a function of $M_h$ on log-log axes. you get a curve that looks like an inverted parabola (in log space): it rises from low $M_*/M_h$ at low halo mass, peaks around $M_h \sim 10^{12}\,M_\odot$, and falls again at high halo mass.

Behroozi, Wechsler & Conroy 2013 produced the canonical version using **abundance matching** (rank-order the SMF and HMF, assign the most massive galaxy to the most massive halo, walk down both lists). their figure 7 is what pablo shows on this slide.

## the numbers

at the peak:

- $M_h \approx 10^{12}\,M_\odot$
- $M_*/M_h \approx 0.03$
- (so $M_* \approx 3 \times 10^{10}\,M_\odot$, milky-way mass)

if galaxy formation were 100% efficient (every baryon converted to stars), $M_*/M_h$ would be $f_b \approx 0.16$. so even at the peak, only $\sim 20\%$ of the available baryons end up as stars. *most* baryons in galaxies have been ejected, never accreted, or are still in hot halos (CGM, IGM).

at low mass:

- $M_h = 10^{10}\,M_\odot$ → $M_*/M_h \sim 10^{-3}$, so $M_* \sim 10^7\,M_\odot$
- only $\sim 1\%$ of the cosmic baryon budget makes it into stars
- this is **SN feedback** (see [Halo gravity suppression of galaxy formation](../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.html))

at high mass:

- $M_h = 10^{14}\,M_\odot$ (cluster) → $M_*/M_h \sim 10^{-2}$, so $M_* \sim 10^{12}\,M_\odot$ in the central galaxy
- but most baryons are in the X-ray-emitting intracluster medium, not in stars
- this is **AGN feedback** + virial shock heating

## evolution with $z$

remarkably, the SHMR shape is *roughly constant* with redshift: the peak halo mass stays at $\sim 10^{12}\,M_\odot$ from $z = 0$ to $z \sim 4$, with the peak amplitude rising mildly. this is because the feedback physics is local to halos, not cosmic-time-dependent.

what *does* evolve: the halo mass function shifts to lower masses at high $z$ (fewer halos at $10^{14}$, more at $10^{10}$), so the *galaxy population* you observe at high $z$ is dominated by lower-mass halos.

## what abundance matching assumes

- monotonic relation between $M_h$ and $M_*$ at fixed $z$ (no scatter, or controlled scatter)
- both functions are correctly measured (the SMF, see [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.html), and the HMF from N-body or Press-Schechter)
- no environmental dependence beyond what is captured by halo mass

modern variants relax these (HOD models, conditional luminosity functions, splashback masses), but the SHMR is the simplest and most informative starting point.

## what i remember

every galaxy formation model lives or dies on this plot. you have one curve, one peak, two falloffs, and two distinct feedback channels you have to invoke to explain it. it is the empirical proof that galaxies are *not* a passive product of gravity.

## connections

- function pair: [Halo mass function vs galaxy mass function](../../02_Zettel/Theory/Halo mass function vs galaxy mass function.html)
- mechanism: [Halo gravity suppression of galaxy formation](../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.html)
- LF/SMF: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.html)
- big-picture: [Observational_Cosmology_MOC](../../00_Atlas/Observational_Cosmology_MOC.html) block 10

## key references

- Behroozi, Wechsler & Conroy 2013, ApJ 770, 57 (SHMR figure)
- Moster et al. 2013 (independent abundance matching)
- Wechsler & Tinker 2018, ARAA 56, 435 (galaxy-halo connection review)
