---
layout: default
title: "Double power-law modified Schechter"
---

# double power-law modified schechter

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.md) · [Schechter function](../../02_Zettel/Theory/Schechter function.md)

## why a single schechter is not enough at high z

at $z \gtrsim 1$ in the IR / sub-mm and at $z \gtrsim 4$ in the UV / optical, the bright end of the LF often shows an **excess** above the exponential cutoff. instead of falling like $e^{-L/L^*}$, the LF falls more slowly, like a second power law.

physically: at high $z$ the AGN-feedback cutoff has not yet kicked in fully (host halos are not massive enough), so the most luminous dust-obscured starbursts and quasars escape the exponential. you need a parametrization that reproduces this.

## the modified form

the canonical replacement (Saunders et al. 1990 for IRAS far-IR LF, then used by Pérez-González et al. 2005, Bethermin 2010, and many sub-mm groups):

$$\phi(L)\, dL = \phi^* \left(\frac{L}{L^*}\right)^{1 - \alpha} \exp\!\left[-\frac{1}{2 \sigma^2} \log_{10}^2\!\left(1 + \frac{L}{L^*}\right)\right] \frac{dL}{L}$$

three+ parameters: $\phi^*$, $L^*$, $\alpha$ as before, plus $\sigma$ (controls the bright-end gaussianness in $\log L$).

an alternative (truly piecewise) double power law:

$$\phi(L) = \begin{cases} \phi^* (L/L^*)^{\alpha}, & L < L^* \\ \phi^* (L/L^*)^{\beta}, & L \geq L^* \end{cases}$$

with $\beta < \alpha < 0$ giving a steeper bright-end power law than the faint-end. both forms appear in the literature.

## perez-gonzalez 2005

P-G et al. 2005 fit Spitzer 24 μm LFs from $z = 0$ to $z \sim 1$ and showed that:

- $L^*$ evolves strongly: $L^*_{IR}(z) \propto (1+z)^{3.7}$
- $\phi^*$ stays roughly constant
- the bright end (above $L^*$) requires a power-law tail rather than exponential at $z > 0.5$

this is interpreted as **luminosity evolution**: every galaxy's IR luminosity grows with redshift (more SF, more dust heating), but the number density does not change much. the bright-end power law is the high-$z$ ULIRGs that simply do not exist in the local universe.

## what the modified form buys

- properly matches the **counts** (bright-end excess in $dN/dS$ at high $z$, see [Differential vs cumulative number counts](../../02_Zettel/Theory/Differential vs cumulative number counts.md))
- gives the right **luminosity density** when integrated (a single Schechter under-predicts $\rho_L$ at high $z$ by 20–50%)
- decouples evolution in $L^*$ from evolution in $\alpha$ (a single Schechter often forces $\alpha$ to absorb the excess)

## what i remember

Schechter is the *local* fit. at high $z$, the bright end fattens. you either fit two Schechters (passive + star-forming), or use a Saunders / double power-law form. the choice matters at the 10–30% level for $\rho_L$ and $\rho_{SFR}$.

## connections

- baseline form: [Schechter function](../../02_Zettel/Theory/Schechter function.md)
- bright-end excess matters in counts: [Galaxy counts at different wavelengths](../../02_Zettel/Theory/Galaxy counts at different wavelengths.md)
- LF evolution drives [Cosmic star formation history](../../02_Zettel/Theory/Cosmic star formation history.md)

## key references

- Saunders et al. 1990, MNRAS 242, 318 (IRAS LF, modified Schechter)
- Pérez-González et al. 2005, ApJ 630, 82 (Spitzer 24 μm)
- Bethermin et al. 2010, A&A 512, A78
