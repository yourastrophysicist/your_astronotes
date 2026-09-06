---
layout: default
title: "Useful constants and conversions"
---

a reference card for the constants, conversions, and rules of thumb that come up repeatedly in observational work and on the exam.

## physical constants (CODATA 2018, rounded)

| constant | value | units |
|---|---|---|
| speed of light | $c = 2.998 \times 10^{10}$ | cm/s |
| Planck | $h = 6.626 \times 10^{-27}$ | erg s |
| reduced Planck | $\hbar = 1.055 \times 10^{-27}$ | erg s |
| Boltzmann | $k_B = 1.381 \times 10^{-16}$ | erg/K |
| gravitational | $G = 6.674 \times 10^{-8}$ | cm$^3$/g/s$^2$ |
| Stefan-Boltzmann | $\sigma_{SB} = 5.67 \times 10^{-5}$ | erg/s/cm$^2$/K$^4$ |
| radiation constant | $a = 4\sigma_{SB}/c = 7.566 \times 10^{-15}$ | erg/cm$^3$/K$^4$ |
| Wien displacement | $\lambda_{\rm max} T = 0.2898$ | cm K |
| electron mass | $m_e = 9.109 \times 10^{-28}$ | g |
| proton mass | $m_p = 1.673 \times 10^{-24}$ | g |
| Thomson cross section | $\sigma_T = 6.65 \times 10^{-25}$ | cm$^2$ |
| electron volt | $1$ eV $= 1.602 \times 10^{-12}$ | erg |
| temperature equiv. | $1$ eV $= 1.16 \times 10^4$ | K |

## astronomical constants

| constant | value | units |
|---|---|---|
| AU | $1.496 \times 10^{13}$ | cm |
| parsec | $3.086 \times 10^{18}$ | cm |
| light year | $9.461 \times 10^{17}$ | cm |
| solar mass | $M_\odot = 1.989 \times 10^{33}$ | g |
| solar radius | $R_\odot = 6.957 \times 10^{10}$ | cm |
| solar luminosity | $L_\odot = 3.828 \times 10^{33}$ | erg/s |
| solar bolometric magnitude | $M_{\rm bol,\odot} = +4.74$ | (IAU 2015) |
| solar V magnitude | $M_{V,\odot} = +4.83$ | |
| solar effective temperature | $T_\odot = 5772$ | K |
| Earth mass | $M_\oplus = 5.972 \times 10^{27}$ | g |
| Earth radius | $R_\oplus = 6.378 \times 10^{8}$ | cm |
| Hubble constant (Planck) | $H_0 = 67.4$ | km/s/Mpc |
| critical density today | $\rho_{c,0} = 1.88 h^2 \times 10^{-29}$ | g/cm$^3$ |

## photometry zeropoints

| system | zero-point definition |
|---|---|
| Vega | $m_{\rm Vega}({\rm Vega}) \equiv 0$ in all bands |
| AB | $m_{AB} = 0$ at $F_\nu = 3631$ Jy = $3.631 \times 10^{-20}$ erg/s/cm$^2$/Hz |
| ST | $m_{ST} = 0$ at $F_\lambda = 3.631 \times 10^{-9}$ erg/s/cm$^2$/Å |
| jansky | $1$ Jy $= 10^{-23}$ erg/s/cm$^2$/Hz |

useful: $1\,\mu$Jy at $\nu = 1$ THz corresponds to $\sim 23.9$ mag (AB).

## angular conversions

$$1\,\text{rad} = 206\,265''$$
$$1''= 4.848 \times 10^{-6}\,\text{rad}$$
$$1\,\text{arcmin} = 60'' = 0.01667°$$
$$1\,\text{deg} = 60' = 3600''$$

## distance / size formulae

| formula | use |
|---|---|
| $d({\rm pc}) = 1/p({\rm arcsec})$ | parallax |
| $d_L = d_M(1+z)$ | luminosity distance, low to high $z$ |
| $d_A = d_M/(1+z)$ | angular-diameter distance |
| $d_L = d_A (1+z)^2$ | the Etherington reciprocity |
| $\theta = D/d_A$ | angular size (rad), small angles |
| $D = \theta\,d_A$ | physical size |
| $1''\text{at}~1$ Mpc $= 4.85$ pc | useful for galaxy scales |

## flux-magnitude conversions

| $\Delta m$ | flux ratio |
|---|---|
| $1$ | $2.512$ |
| $2.5$ | $10$ |
| $5$ | $100$ |
| $7.5$ | $10^3$ |
| $10$ | $10^4$ |

mag-to-fractional-flux for small changes: $\Delta F/F \approx 0.921\,\Delta m$. mag-to-percent: $\Delta m = 0.01$ corresponds to $\Delta F/F \approx 0.92\%$.

## airmass

$X = \sec z$ for $z \lesssim 60°$.
- $z = 0°$ (zenith): $X = 1.0$.
- $z = 30°$: $X = 1.15$.
- $z = 45°$: $X = 1.41$.
- $z = 60°$: $X = 2.0$.
- $z = 75°$: $X = 3.86$ (using Hardie correction).

## seeing / Fried parameter

$\theta_{\rm seeing} \approx \lambda/r_0$. for $r_0 = 15$ cm at $500$ nm:
- $V$ (550 nm): $0.7''$.
- $J$ (1.25$\,\mu$m): $0.3''$ (with $r_0 \propto \lambda^{6/5}$).
- $K$ (2.2$\,\mu$m): $0.18''$.

## see also

- [Atmospheric extinction](../../02_Zettel/Theory/interf/Atmospheric extinction.md)
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.md)
- [Distance modulus](../../02_Zettel/Theory/Distance modulus.md)
- [Filter systems and bandpasses](../../02_Zettel/Theory/Filter systems and bandpasses.md)
- [Atmospheric seeing](../../02_Zettel/Theory/interf/Atmospheric seeing.md)
- [Distance ladder derivations](../../02_Zettel/Theory/Distance ladder derivations.md)
- [Cosmic_inventory_overview](../../02_Zettel/Theory/Cosmic_inventory_overview.md)
