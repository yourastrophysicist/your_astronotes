---
layout: default
title: "SED fitting for SFH"
---

# SED fitting for SFH

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.md)

## the idea

beyond the Local Group we cannot resolve individual stars (see [SFH from resolved CMDs](../../02_Zettel/Theory/SFH from resolved CMDs.md)). the only accessible observable is the integrated SED. the goal of SED fitting is:

**given multi-band photometry of a galaxy, recover $\psi(t)$, $Z(t)$, $A_V$, $M_*$, and $z$.**

this is the workhorse of modern extragalactic work from $z = 0$ to $z = 15$. every mass function, SFR density, or main-sequence paper uses it.

## the ingredients

the forward model:

$$F_\lambda^{\text{obs}}(\lambda) = \int_0^{t_0} \psi(t_0 - \tau)\, S_\lambda^{\text{SSP}}(\tau, Z)\, d\tau\, \times\, e^{-\tau_\lambda(A_V)}\, \times\, [\text{IGM attenuation, redshift}]$$

inputs:
- **SSP library**: SED of a single-age, single-metallicity population as a function of age. from Bruzual & Charlot 2003, FSPS, Maraston 2005, or Starburst99
- **IMF**: typically Chabrier or Kroupa
- **SFH parametrization**: delta, tau-model, delayed-tau, non-parametric (see [Star formation history parametrizations](../../02_Zettel/Theory/Star formation history parametrizations.md))
- **attenuation curve**: Calzetti, Cardelli, Charlot-Fall, or free (see [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.md))
- **nebular emission** (continuum + lines) for young populations
- **dust re-emission** (MIR/FIR templates) if IR data included
- **IGM absorption** at $\lambda < 1216$ Å for $z > 2$

## the Pablo examples

- **Papovich, Dickinson, Ferguson 2001** show NIC IDs 503 and 814 at $z \sim 2$–$3$ with four or more equally good SFH fits: $t = 10$ Myr + high $A_V$, or $t = 500$ Myr + low $A_V$. the ages span factors of $10$+ because the UV-to-NIR photometry alone does not break the age-dust-metallicity degeneracy
- **Pérez-González 2008 "Rainbow"** multiwavelength SED fitting from UV to FIR constrains SFH more tightly by adding Spitzer MIPS and Herschel SED shape

moral: without FIR data, SFH parameters are weakly constrained. *adding* IR breaks the degeneracy because the IR gives a direct handle on the total UV absorbed.

## modern codes

- **MAGPHYS** (da Cunha 2008): energy-balance between UV/optical absorbed and FIR emitted
- **CIGALE**: grid-based, including AGN templates
- **Prospector** (Leja): MCMC, non-parametric SFH, full Bayesian
- **BAGPIPES** (Carnall): MCMC, flexible SFH, fast
- **Rainbow** (Pérez-González): CANDELS / COSMOS workhorse

## what you actually extract reliably

in order of reliability:
1. redshift (photometric, good to $\sigma_z/(1+z) \sim 0.01$ with good filters)
2. stellar mass ($\pm 0.1$–$0.2$ dex)
3. current SFR ($\pm 0.3$ dex)
4. $A_V$
5. mass-weighted age
6. SFH shape parameters ($\tau$, burst fraction): noisy

## known biases

- **outshining**: a small recent burst dominates UV/optical flux, hiding the older population. biases $M_*$ low by factor $\sim 1.5$–$2$. solved by adding NIR data sensitive to old stars
- **AGN**: contaminates UV/MIR. missing an AGN component biases SFR high
- **metallicity priors**: most codes fix or weakly constrain $Z$. if $Z$ is wrong, $M_*$ shifts

## connections

- models used: [Stellar population synthesis](../../02_Zettel/Theory/Stellar population synthesis.md)
- parametric forms: [Star formation history parametrizations](../../02_Zettel/Theory/Star formation history parametrizations.md)
- resolved alternative: [SFH from resolved CMDs](../../02_Zettel/Theory/SFH from resolved CMDs.md)
- extinction: [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.md)
- FIR input: [IR SFR tracer](../../02_Zettel/Theory/IR SFR tracer.md)
- stellar mass: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md)

## key references

- Walcher et al. 2011 (SED-fitting review)
- Conroy 2013 ARAA
- Pacifici et al. 2023 ApJ (non-parametric SFH benchmarking)
- da Cunha, Charlot, Elbaz 2008 MNRAS 388, 1595 (MAGPHYS)
