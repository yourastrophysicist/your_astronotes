---
layout: default
title: "Stellar population synthesis"
---

# stellar population synthesis

up: [Pablo_03_Star_formation_in_galaxies](../../01_Literature/Lectures/Observational_Cosmology/Pablo_03_Star_formation_in_galaxies.html)

## the goal

given an SFH $\psi(t)$ and an IMF $\xi(M)$, predict the integrated SED $F_\lambda(t)$ of a galaxy, including the effects of stellar evolution, dust, nebular gas, and metals.

the fundamental building block is the **SSP** (simple stellar population): the SED of a population formed instantaneously at $t = 0$ with a single metallicity $Z$, evolving in time:

$$L_\lambda^{\text{SSP}}(\tau, Z) = \int_{M_{\min}}^{M_{\text{TO}}(\tau)} f_\lambda(M, \tau, Z)\, \xi(M)\, dM$$

where $f_\lambda$ is the stellar spectrum from the isochrone at mass $M$ and age $\tau$. any galaxy SED is then a convolution:

$$L_\lambda^{\text{gal}}(t) = \int_0^t \psi(t - \tau)\, L_\lambda^{\text{SSP}}(\tau, Z(\tau))\, d\tau$$

## the ingredients (Pablo's slide)

1. **metallicity $Z$**. solar: $Z_\odot = 0.020$ (BC03) or $0.0142$ (Asplund). SPS libraries span $Z/Z_\odot = 10^{-4}$ to $\sim 2$
2. **IMF**. Salpeter, Kroupa, Chabrier. see [Initial mass function](../../02_Zettel/Theory/Initial mass function.html)
3. **SFH**. SSP, continuous, tau-models, delayed. see [Star formation history parametrizations](../../02_Zettel/Theory/Star formation history parametrizations.html)
4. **age**. measured from onset of SF
5. **attenuation curve + $A_V$**. see [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
6. **mass normalization**. arbitrary overall factor

## what SSP codes do internally

- **isochrones**: mass-age mapping of stellar properties $(T_{\text{eff}}, \log g, L)$. Padova, MIST, PARSEC, BaSTI
- **stellar atmospheres**: convert $(T_{\text{eff}}, \log g, Z)$ to a spectrum. Kurucz, PHOENIX, MILES, BaSeL
- optionally **nebular emission**: Starburst99 + CLOUDY
- optionally **TP-AGB**: the thermally-pulsating AGB contributes heavily at ages $0.5$–$2$ Gyr in the NIR. BC03 and Maraston 2005 differ by factor $\sim 2$ here; this is the biggest systematic uncertainty in high-$z$ mass estimates

## the Pablo figures: BC93

- **1 Gyr burst at 13.5 Gyr age**: NIR dominated by RGB, AGB, and CHeB. MS contributes weakly. PN and WD only faintly. integrated spectrum resembles a present-day elliptical
- **color-age tracks**: U-B, B-V, V-K vs age. a $10^7$ yr burst starts blue and reddens monotonically (except for brief blueward dips at He-core burning transitions)
- **10$^7$ yr burst vs MS**: integrated V magnitude per solar mass, evolving
- **elliptical vs 1 Gyr burst at 13.5 Gyr**: the BC93 integrated spectrum matches the average elliptical SED between 2000–20,000 Å to $\lesssim 0.1$ dex

## the Lick indices approach

instead of a full spectrum, define narrow band-pass indices measuring specific absorption-line strengths:

- Hβ (age-sensitive)
- Mg$_b$ (metallicity-sensitive, α-enhanced)
- Fe5270, Fe5335 (Fe-peak sensitive)

each index is a pseudo-equivalent-width. combining Hβ vs [MgFe] breaks the age-metallicity degeneracy in old populations. used to date stellar populations in globular clusters and elliptical galaxies (Worthey 1994, Thomas 2003, Tantalo 2002).

Pablo's Iodice 2002 plot shows $B - H$ vs $J - K$ tracks for ages 1/3/5/10 Gyr across five metallicities $Z_1 = 0.1$ down to $Z_5 = 0.0004$: the classic demonstration of the age-metallicity degeneracy and the shape of SSP tracks in NIR colour space.

## Starburst99

Leitherer 1999: specialized SSP library for *young* populations, with emphasis on:

- Wolf-Rayet stars
- O-star winds
- ionizing photon output $Q(\text{HI}, \text{HeI}, \text{HeII})$ vs age
- supernova rates
- mechanical feedback

used as a Starburst99 → CLOUDY chain to predict nebular emission lines in SFGs. url: http://www.stsci.edu/science/starburst99/

## the three main SSP libraries

- **BC03 / BC07** (Bruzual & Charlot): workhorse, Padova isochrones, STELIB + MILES atmospheres
- **Maraston 2005 (M05)**: heavy TP-AGB, bluer at intermediate age. controversial for high-$z$ masses
- **FSPS (Conroy)**: most flexible, swappable isochrones + atmospheres. current standard in SED fitting codes

## connections

- input for SFR: [SED fitting for SFH](../../02_Zettel/Theory/SED fitting for SFH.html)
- IMF: [Initial mass function](../../02_Zettel/Theory/Initial mass function.html)
- SFH: [Star formation history parametrizations](../../02_Zettel/Theory/Star formation history parametrizations.html)
- dust: [Dust attenuation and extinction curves](../../02_Zettel/Theory/Dust attenuation and extinction curves.html)
- chemical yields: [Chemical evolution of galaxies](../../02_Zettel/Theory/Chemical evolution of galaxies.html)

## key references

- Bruzual & Charlot 1993, 2003
- Leitherer et al. 1999 (Starburst99)
- Maraston 2005 MNRAS 362, 799
- Conroy, Gunn, White 2009 (FSPS)
- Conroy 2013 ARAA
