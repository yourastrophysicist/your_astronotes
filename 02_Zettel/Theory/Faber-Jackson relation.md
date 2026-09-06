---
layout: default
title: "Faber-Jackson relation"
---

the **Faber-Jackson relation** (1976) is the elliptical-galaxy analog of the Tully-Fisher relation: $L \propto \sigma_v^4$. links luminosity to central velocity dispersion. used as a distance indicator + a probe of elliptical formation.

## the relation

$$L \propto \sigma_v^4$$

equivalently:
$$\log_{10}(L) = 4\log_{10}(\sigma_v) + \text{const}$$

with $L$ = total luminosity, $\sigma_v$ = central stellar velocity dispersion (within $\sim 1 r_e$).

scatter: $\sim 0.5$ mag in luminosity at fixed $\sigma_v$. moderately large.

## the physical origin

simple virial argument:
$$M \sim \sigma_v^2 R/G$$

if $L \propto M$ + $R$ scales with $L$ (like Kormendy relation $\langle\mu\rangle \propto \log R_e$), then $L \propto \sigma_v^4$ comes out approximately.

more carefully: assume isothermal halo + constant $M/L$, derive $L \propto \sigma_v^4$ as a consequence of virial equilibrium + structural homology.

## the use as a distance indicator

procedure:
1. measure $\sigma_v$ from spectroscopy (single-aperture or central IFU).
2. compute $L$ from $\sigma_v^4$ relation.
3. compare with apparent magnitude $m$ to get $d_L$ via the distance modulus.

precision: $\sim 25\%$ in distance per galaxy. modest, but useful for elliptical-rich environments where Cepheids + TRGB don't work.

modern: usually superseded by the **fundamental plane** (3D relation including $R_e$ + $\langle\mu\rangle$), which has tighter scatter.

## the connection to the fundamental plane

Faber-Jackson is the **2D projection** of the more fundamental **fundamental plane**:
$$R_e \propto \sigma^{1.4}\,\langle I\rangle^{-0.9}$$

projecting onto the $L-\sigma$ plane (with $L \propto R_e^2 \langle I\rangle$) gives Faber-Jackson with some scatter. the Fundamental Plane is **tighter** because it captures the additional dimension.

see [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.html).

## the M-σ Connection

related: the **M-σ relation** $M_{BH} \propto \sigma^4$ for SMBH masses. same exponent as Faber-Jackson is suggestive:
- elliptical bulge mass: $L \propto \sigma^4$.
- $M_{BH} \propto M_{\rm bulge} \propto \sigma^4$.

so Magorrian + Faber-Jackson are mathematically consistent.

## modern values

calibrated on $\sim 2000$ ellipticals from SDSS + ATLAS3D:
$$\log_{10}(L_K/L_{K,*}) \approx 4.0\log_{10}(\sigma/200\,\text{km/s})$$

with $L_{K,*} \sim 10^{11}\,L_\odot$ for $\sigma = 200$ km/s.

## limitations

- **scatter** larger than Tully-Fisher (~0.5 mag vs ~0.3 mag).
- **structural inhomogeneity**: ellipticals have varying $n_{\rm Sersic}$, $r_e/R$, etc.
- **environmental dependence**: cluster ellipticals behave slightly different from field.
- **age + metallicity**: stellar populations affect $L$ at fixed mass.

## see also

- [Tully-Fisher relation](../../02_Zettel/Theory/Tully-Fisher relation.html)
- [Fundamental plane of ellipticals](../../02_Zettel/Theory/Fundamental plane of ellipticals.html)
- [Kormendy relation](../../02_Zettel/Theory/Kormendy relation.html)
- [M sigma relation](../../02_Zettel/Theory/M sigma relation.html)
- [Magorrian relation](../../02_Zettel/Theory/Magorrian relation.html)
- [Velocity dispersion from line width](../../02_Zettel/Theory/Velocity dispersion from line width.html)
- [LOSVD](../../02_Zettel/Theory/LOSVD.html)
- [Astrophysics_of_Galaxies_MOC](../../00_Atlas/Astrophysics_of_Galaxies_MOC.html)
