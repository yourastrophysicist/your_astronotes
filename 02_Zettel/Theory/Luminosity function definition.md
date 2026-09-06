---
layout: default
title: "Luminosity function definition"
---

# luminosity function definition

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md)

## what it is

the **galaxy luminosity function (LF)** $\phi(L)$ is the number of galaxies per unit luminosity per unit comoving volume:

$$dN = \phi(L)\, dL\, dV$$

units of $\phi$: $\text{Mpc}^{-3}\, L_\odot^{-1}$, or in magnitudes $\text{Mpc}^{-3}\, \text{mag}^{-1}$.

## why it is the central object

the LF is what every galaxy survey wants to measure. all the other 1-D statistics are projections or integrals of it:

- $N(L) = \int \phi(L)\, dL\, dV$ across a survey volume gives the [Galaxy number counts N(m)](../../02_Zettel/Theory/Galaxy number counts N(m).md)
- $\rho_L = \int L\, \phi(L)\, dL$ is the **luminosity density**, the total light per unit volume
- $\rho_{SFR} = \int (\text{SFR}/L)\, L\, \phi(L)\, dL$ is the [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)
- $\rho_* = \int (M_*/L)\, L\, \phi(L)\, dL$ is the cosmic stellar mass density

so once you have $\phi(L, z)$ in slices of $z$, you have most of extragalactic statistics.

## the three things you specify

every LF measurement specifies:

1. **band**: $\phi_K(L)$ vs $\phi_B(L)$ vs $\phi_{1500\,\text{Å}}(L)$ are very different objects. K-band traces stellar mass, FUV traces unobscured SFR, IR traces obscured SFR.
2. **redshift slice**: $\phi(L, z_1 < z < z_2)$. the LF evolves.
3. **sample**: split by morphology, color, environment, or sample-wide. each gives a different LF (see [LF by morphology and SED](../../02_Zettel/Theory/LF by morphology and SED.md)).

## the magnitude form

since absolute magnitude is the working unit in the optical:

$$\phi(M)\, dM = \phi(L)\, dL$$

with $M = -2.5 \log_{10}(L / L_0)$. so $dL/dM = -0.4 \ln 10\, L$, and

$$\phi(M) = 0.4 \ln 10 \cdot L \cdot \phi(L)$$

(absolute value taken; the minus sign just orients $M$ vs $L$).

## the normalization

$\int \phi(L)\, dL$ is the **total galaxy number density**. this integral is *divergent at the faint end* if the LF has $\alpha < -1$ (which most measured LFs do at low $L$). that means *the integrated number is dominated by the faintest galaxies you can detect*, and the answer depends on your low-$L$ cutoff.

luminosity density $\int L\, \phi(L)\, dL$ converges if the slope is shallower than $-2$ at the faint end (universally true).

## connections

- the parametric form: [Schechter function](../../02_Zettel/Theory/Schechter function.md)
- estimator: [1Vmax estimator](../../02_Zettel/Theory/1Vmax estimator.md)
- mass version: [Stellar mass function](../../02_Zettel/Theory/Stellar mass function.md)
- integrals over $z$: [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)

## key references

- Schechter 1976, ApJ 203, 297
- Felten 1977 (LF formalism)
- Binggeli, Sandage, Tammann 1988 ARAA
