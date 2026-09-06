---
layout: default
title: "Specific intensity flux luminosity"
---

these are the four fundamental radiometric quantities, ranked from most local (intensity) to most global (luminosity). every observational measurement is one of them, dressed up in some practical unit.

## specific intensity $I_\nu$

energy per unit area per unit time per unit solid angle per unit frequency:
$$I_\nu = \frac{dE}{dA\, dt\, d\Omega\, d\nu}$$

units: erg s$^{-1}$ cm$^{-2}$ sr$^{-1}$ Hz$^{-1}$.

the most fundamental: it specifies the radiation field at a point in a direction at a frequency. crucially, **$I_\nu$ is conserved along a ray** in vacuum:
$$\frac{dI_\nu}{ds} = 0\quad\text{in free space}$$
this is why surface brightness of a resolved object is *independent of distance* in Euclidean space (in cosmology, redshift breaks this: $I_\nu^{\rm obs} = I_\nu^{\rm rest}/(1+z)^4$, see [Surface brightness dimming](../../02_Zettel/Theory/Surface brightness dimming.md)).

## flux $F_\nu$ and bolometric flux $F$

energy per unit area per unit time per unit frequency:
$$F_\nu = \int I_\nu \cos\theta\, d\Omega$$

units: erg s$^{-1}$ cm$^{-2}$ Hz$^{-1}$, or jansky ($1$ Jy $= 10^{-23}$ erg s$^{-1}$ cm$^{-2}$ Hz$^{-1}$).

bolometric flux (integrated over frequency):
$$F = \int_0^\infty F_\nu\, d\nu$$
units: erg s$^{-1}$ cm$^{-2}$ or W m$^{-2}$.

flux is what a small detector measures. it depends on the source distance via $F \propto 1/d^2$ for isotropic emission.

## luminosity $L$

total power radiated by a source:
$$L = \int F\, dA$$
integrated over a closed surface around the source.

units: erg s$^{-1}$ or W.

intrinsic property of the source. the relation to flux:
$$\boxed{\, F = \frac{L}{4\pi d^2} \,}$$
the inverse-square law for isotropic emission. used everywhere.

## radiation density $u_\nu$

energy per unit volume per unit frequency:
$$u_\nu = \frac{4\pi}{c} \langle I_\nu\rangle$$
relevant for thermodynamic problems (CMB, stellar interiors). the bolometric:
$$u = \int u_\nu\, d\nu$$
for a blackbody, $u = aT^4$ with $a = 4\sigma_{SB}/c$. see [Blackbody radiation and Stefan-Boltzmann](../../02_Zettel/Theory/Blackbody radiation and Stefan-Boltzmann.md).

## a worked relation

for a uniformly emitting spherical source of radius $R$ at temperature $T$, surface brightness $B_\nu(T)$:
$$L_\nu = 4\pi R^2 \cdot \pi B_\nu(T) = 4\pi^2 R^2 B_\nu(T)$$
$$L = \int L_\nu d\nu = 4\pi R^2 \sigma_{SB} T^4$$
this is **the** stellar luminosity formula. flux at distance $d$:
$$F = \frac{L}{4\pi d^2} = \left(\frac{R}{d}\right)^2 \sigma_{SB} T^4$$

## summary table

| quantity | symbol | units | depends on distance? |
|---|---|---|---|
| specific intensity | $I_\nu$ | erg/s/cm$^2$/sr/Hz | no (in vacuum, no cosmology) |
| flux density | $F_\nu$ | erg/s/cm$^2$/Hz | yes, $\propto 1/d^2$ |
| flux (bolometric) | $F$ | erg/s/cm$^2$ | yes, $\propto 1/d^2$ |
| luminosity | $L$ | erg/s | no, intrinsic |
| radiation density | $u_\nu$ | erg/cm$^3$/Hz | depends |

## see also

- [Blackbody radiation and Stefan-Boltzmann](../../02_Zettel/Theory/Blackbody radiation and Stefan-Boltzmann.md)
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.md)
- [Distance modulus](../../02_Zettel/Theory/Distance modulus.md)
- [Luminosity distance](../../02_Zettel/Theory/Luminosity distance.md) — the cosmological generalisation
- [Surface brightness dimming](../../02_Zettel/Theory/Surface brightness dimming.md)
- [Electromagnetic radiation basics](../../02_Zettel/Theory/Electromagnetic radiation basics.md)
- [Luminosity and Flux for -Instrumentations](../../02_Zettel/Theory/Luminosity and Flux for -Instrumentations.md)
