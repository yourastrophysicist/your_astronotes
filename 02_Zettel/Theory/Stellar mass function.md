---
layout: default
title: "Stellar mass function"
---

# stellar mass function

up: [Pablo_02_Statistical_properties_of_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_02_Statistical_properties_of_galaxies.html)

## from luminosity to mass

the LF $\phi(L)$ depends on the band; the **stellar mass function (SMF)** $\phi(M_*)$ does not. it is the more physical statistic. to convert, you need the mass-to-light ratio $\Upsilon = M_*/L$, which depends on:

- stellar population age (older → larger $\Upsilon$)
- metallicity (higher → larger $\Upsilon$)
- IMF (Kroupa vs Salpeter vs top-heavy gives factor $\sim 2$ shifts)
- dust attenuation (in optical bands; not in K)

so SMFs are derived from SED fitting, and they carry a $\sim 0.2$–$0.3$ dex systematic from those choices.

## the schechter parametrization

the SMF is well-fit by a Schechter form in $\log M_*$:

$$\phi(M_*)\, dM_* = \phi^* \left(\frac{M_*}{M^*}\right)^\alpha \exp\!\left(-\frac{M_*}{M^*}\right) \frac{dM_*}{M^*}$$

or its $\log$ version with the substitution $d\log M = dM/(M \ln 10)$.

local SMF parameters (Cole et al. 2001 from 2MASS, Bell et al. 2003 from SDSS+2MASS, Pérez-González et al. 2003, Pérez-González 2008):

- $M^* \approx (5\text{-}7) \times 10^{10}\, M_\odot$
- $\alpha \approx -1.2$
- $\phi^* \approx 5 \times 10^{-3}\, h^3\, \text{Mpc}^{-3}$

## bimodal SMF: passive vs star-forming

just like the [Color bimodality of galaxies](../../02_Zettel/Theory/Color bimodality of galaxies.html), the SMF splits cleanly into two components:

- **passive (red sequence) SMF**: $M^*_{\text{pass}} \approx 7 \times 10^{10}\, M_\odot$, $\alpha \approx -0.4$ (flat faint end)
- **star-forming (blue cloud) SMF**: $M^*_{\text{SF}} \approx 5 \times 10^{10}\, M_\odot$, $\alpha \approx -1.4$ (steep faint end)

the two cross around $M_* \sim 3 \times 10^{10}\, M_\odot$. above the crossover, passive galaxies dominate. below, star-formers do. the crossover mass is the **mass-quenching scale** that Peng et al. 2010 identified empirically.

## evolution with $z$

the total SMF evolves modestly:

- $M^*$ does not change much from $z \sim 2$ to $z = 0$ (mass scales freeze in early)
- $\phi^*$ at high $M_*$ doubles since $z = 1$ (red sequence buildup, [Green valley and quenching tracks](../../02_Zettel/Theory/Green valley and quenching tracks.html))
- the low-mass slope $\alpha$ steepens slightly

the integrated stellar mass density $\rho_*(z)$ rises by a factor $\sim 5$ from $z \sim 3$ to today (see [Cosmic stellar mass density growth](../../02_Zettel/Theory/Cosmic stellar mass density growth.html)).

## SMF vs HMF: the mismatch

the predicted halo mass function (HMF) from $\Lambda$CDM is also Schechter-like (Press-Schechter), but with a *much* shallower exponential cutoff ($M^*_h \sim 10^{14}\,M_\odot$) and a *much* steeper faint-end slope ($\alpha_{\text{HMF}} \approx -1.9$). the two functions do not match in either parameter. the gap is the central puzzle of galaxy formation, see [Halo mass function vs galaxy mass function](../../02_Zettel/Theory/Halo mass function vs galaxy mass function.html) and [Stellar-to-halo mass ratio](../../02_Zettel/Theory/Stellar-to-halo mass ratio.html).

## connections

- baseline LF: [Luminosity function definition](../../02_Zettel/Theory/Luminosity function definition.html), [Schechter function](../../02_Zettel/Theory/Schechter function.html)
- color split: [Color bimodality of galaxies](../../02_Zettel/Theory/Color bimodality of galaxies.html)
- halo connection: [Halo mass function vs galaxy mass function](../../02_Zettel/Theory/Halo mass function vs galaxy mass function.html), [Stellar-to-halo mass ratio](../../02_Zettel/Theory/Stellar-to-halo mass ratio.html)
- cosmic integral: [Cosmic stellar mass density growth](../../02_Zettel/Theory/Cosmic stellar mass density growth.html)

## key references

- Cole et al. 2001 (2MASS local SMF)
- Bell et al. 2003 (SDSS+2MASS, separated by color)
- Pérez-González et al. 2008, ApJ 675, 234 (SMF to $z \sim 4$)
- Ilbert et al. 2013 (COSMOS SMF evolution)
