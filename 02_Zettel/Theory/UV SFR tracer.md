---
layout: default
title: "UV SFR tracer"
---

# UV SFR tracer

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## what the UV sees

the rest-frame UV continuum between $\sim 1250$ Å and $\sim 2800$ Å is dominated by O and B stars on the main sequence. their lifetimes are $\sim 10$–$300$ Myr, so the UV luminosity is roughly proportional to the SFR averaged over the last $\sim 100$ Myr.

for a galaxy forming stars at a constant rate for $> 100$ Myr, the UV luminosity reaches a steady state, and the Kennicutt 1998 calibration is:

$$\text{SFR}\;[M_\odot/\text{yr}] = 1.4 \times 10^{-28}\, L_\nu(\text{UV})\;[\text{erg}/\text{s}/\text{Hz}]$$

valid for $1500$–$2800$ Å, Salpeter IMF $0.1$–$100\,M_\odot$, solar metallicity.

## why the UV is such a good tracer

- ionizing photons and UV continuum come from the *same* stellar population, so cross-checks are possible
- UV surveys are cheap compared to Hα imaging for high-$z$ galaxies: the Lyman break falls into optical for $z \gtrsim 2.5$, so UV at rest = optical at observed for a huge fraction of the universe
- the UV is the primary tracer for all Lyman-break galaxies and drop-out samples (Bouwens 2010, Madau-Dickinson 2014)

## the killer problem: dust

young massive stars form in dusty regions. a canonical spiral has $A_V \sim 1$, which corresponds to $A_{1500} \sim 3$–$4$. so UV luminosity can be suppressed by factors of 10–100 before it leaves the galaxy. raw UV SFR without dust correction can be wrong by an order of magnitude.

the absorbed energy re-emerges in the infrared, which is the dual of the UV (see [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)). so the correct total SFR is:

$$\text{SFR}_{\text{total}} = \text{SFR}_{\text{UV,uncorrected}} + \text{SFR}_{\text{IR}}$$

this additive form is known as "UV + IR" SFR and is the current best single-galaxy estimator.

## if you have no IR: the β correction

Meurer 1999 showed that the UV spectral slope

$$F_\lambda \propto \lambda^\beta$$

measured between $\sim 1250$ and $\sim 2600$ Å correlates with the infrared-excess $\text{IRX} \equiv L_{\text{IR}}/L_{\text{UV}}$. a redder slope (larger $\beta$) means more dust. this **IRX-β relation** lets you recover the absorbed UV when no IR data are available. see [UV slope and IRX-beta relation](../../02_Zettel/Theory/UV slope and IRX-beta relation.html).

## when it fails

- the IRX-β relation has ~0.3 dex scatter, larger for:
  - extreme starbursts (IRX above the Meurer line)
  - old populations (intrinsically red UV, confused with dust)
  - SMC-type dust (shallower attenuation curve, different IRX for same β)
- for $z > 6$ Lyman-break galaxies the calibration may differ (Bouwens 2009, Reddy 2018)

## connections

- dual: [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.html)
- needs: [UV slope and IRX-beta relation](../../02_Zettel/Theory/UV slope and IRX-beta relation.html), [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
- comparison: [SFR tracer comparison](../../02_Zettel/Theory/SFR tracer comparison.html)
- integral: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.html)

## key references

- Kennicutt 1998 ARAA
- Meurer, Heckman, Calzetti 1999, ApJ 521, 64
- Madau & Dickinson 2014 ARAA
- Leitherer et al. 1999 (Starburst99 spectra)
