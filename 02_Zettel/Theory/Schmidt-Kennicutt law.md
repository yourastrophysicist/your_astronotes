---
layout: default
title: "Schmidt-Kennicutt law"
---

# schmidt-kennicutt law

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## the relation

local star formation rate surface density is a power law in gas surface density:

$$\Sigma_{SFR} = A\, \Sigma_{\text{gas}}^N$$

with $N \approx 1.4$ (Kennicutt 1998), $A$ depending on units. above a threshold $\Sigma_{\text{gas, thresh}} \sim 10\, M_\odot\, \text{pc}^{-2}$ (atomic + molecular), star formation switches on; below, it is heavily suppressed.

equivalently, the SFR per unit gas mass is $\sim$ constant per *free-fall time* of the gas, so $\Sigma_{SFR} \propto \Sigma_{\text{gas}}/t_{\text{ff}}$. since $t_{\text{ff}} \propto \rho^{-1/2} \propto \Sigma_{\text{gas}}^{-1/2}$ in self-gravitating disks, this gives $\Sigma_{SFR} \propto \Sigma_{\text{gas}}^{1.5}$, close to the observed slope.

## who measured it

- **Schmidt 1959**: $\Sigma_{SFR} \propto \rho^N$ with $N \approx 2$, from young stars in the milky way.
- **Kennicutt 1998**, ApJ 498, 541: galaxy-averaged version using H$\alpha$ for SFR and CO + HI for gas, sample of nearby spirals + circumnuclear starbursts. fixed slope at $1.4$.
- **Bigiel et al. 2008**: spatially resolved, $\sim$ kpc scales. found $N \approx 1$ on molecular gas alone, $N$ much steeper if HI-dominated.

## why it matters

it sets the local conversion of gas to stars, which is the input to every galaxy formation model. it is the closest thing to a "fundamental law" of star formation, and it works across $\sim 5$ orders of magnitude in $\Sigma_{\text{gas}}$ (from outer disks to ULIRG starbursts).

depletion time interpretation: $t_{\text{depl}} = \Sigma_{\text{gas}}/\Sigma_{SFR} \approx 2\, \text{Gyr}$ for normal spirals, $\sim 100\,\text{Myr}$ for ULIRGs. so the law also encodes the *efficiency* of star formation per gas reservoir.

## the high-z extension

the Schmidt-Kennicutt law extends with similar slope to $z \sim 3$ (Genzel 2010, Daddi 2010), with **two sequences**:

- normal MS galaxies on the local SK relation
- starbursts (mergers, sub-mm galaxies) on a parallel sequence with $\sim 4 \times$ shorter depletion time

this matches the bimodality seen in the [Galaxy main sequence of star formation](../../02_Zettel/Theory/Galaxy main sequence of star formation.html).

## connections

- main-sequence picture: [Galaxy main sequence of star formation](../../02_Zettel/Theory/Galaxy main sequence of star formation.html)
- gas accretion / feedback: [Halo gravity suppression of galaxy formation](../../02_Zettel/Theory/Halo gravity suppression of galaxy formation.html)
- spirals' dynamics: [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.html)
- aggregate consequence: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.html)

## key references

- Schmidt 1959, ApJ 129, 243 (the original)
- Kennicutt 1998, ApJ 498, 541 (the canonical galaxy-averaged version)
- Bigiel et al. 2008 (resolved Schmidt-Kennicutt)
- Kennicutt & Evans 2012 ARAA
