---
layout: default
title: "Thermal continuum from stellar photosphere"
---

a stellar continuum is, to first order, a **modified Planck spectrum**. the modification comes from the wavelength-dependent opacity of the photosphere, which shifts the depth at which $\tau = 1$ (and hence the emergent temperature).

## the simple Planck approximation

at the photospheric temperature $T_{\rm eff}$:
$$F_\nu^{\rm star} \approx \pi B_\nu(T_{\rm eff})$$

(integrated over the visible hemisphere of a star at distance $d$, divided by $d^2$).

this is the **zeroth-order** stellar continuum: a single $T$ Planck curve. it has:
- **Wien peak** at $\lambda_{\rm peak} = 2898\,\mu$m K $/T$. for the Sun ($T = 5800$ K), peak at $\sim 500$ nm.
- **Rayleigh-Jeans tail** at long $\lambda$: $F_\nu \propto \nu^2$.
- **Wien cutoff** at short $\lambda$: $F_\nu \propto \nu^3 e^{-h\nu/k_BT}$.

## the modifications from opacity

real stellar continua deviate from $B_\nu(T)$ for several reasons:

### opacity-dependent emergent depth
each frequency emerges from a different depth (where $\tau_\nu = 1$). different depths have different $T$. so $F_\nu \propto B_\nu(T(\tau_\nu = 1))$ which varies with $\nu$.

modulates the spectrum: bands of higher opacity (e.g. H bound-free at the Balmer edge) emit from cooler upper layers, hence lower flux there.

### bound-free continuum edges
at $\lambda \le 3646$ Å (Balmer edge), H I bound-free opacity kicks in $\to$ light from cooler upper layers $\to$ **continuum drop** (Balmer jump). visible in A and F stars.

similarly: Lyman edge (912 Å), Paschen edge (8203 Å), etc. each is a discontinuity in the emergent continuum.

### line blanketing
in cool stars, millions of metal lines absorb optical-UV photons and re-emit at IR. effectively reduces the visible continuum by $\sim 10\%$ to $50\%$ in the blue. results in a **redder** SED than a pure blackbody.

### H$^-$ ion
in cool stars, the dominant continuum opacity. H$^-$ has a very broad bound-free continuum peaking near $1\,\mu$m, with a smooth wavelength dependence. modulates the optical-NIR slope.

## consequence: stellar continua are NOT simple blackbodies

| star type | dominant deviation from Planck |
|---|---|
| O, B | electron scattering, helium edges |
| A | Balmer + Paschen jumps prominent |
| F-G (Sun) | line blanketing in blue, H$^-$ in red |
| K-M | molecular bands (TiO, VO) carve out optical |

modern stellar atmosphere codes (PHOENIX, MARCS, ATLAS9) include all these effects. the resulting **synthetic spectra** are tabulated in libraries (Castelli-Kurucz, BT-Settl) used by population synthesis codes ([SPS code families](../../02_Zettel/Theory/SPS code families.html)).

## bolometric flux

integrating over all $\nu$ gives the bolometric flux:
$$F_{\rm bol} = \int F_\nu d\nu = \sigma_{SB} T_{\rm eff}^4$$

(Stefan-Boltzmann integrated.) this is the basis of $T_{\rm eff}$ definition: temperature of equivalent blackbody producing the same bolometric flux per unit area.

## the consequence for photometry

photometric magnitudes depend on the convolution of $F_\lambda$ with filter throughput. the deviations from Planck contribute to the **bolometric correction** ([Bolometric correction and effective temperature](../../02_Zettel/Theory/Bolometric correction and effective temperature.html)). for the Sun, $BC_V \approx -0.07$, very small. for an O5 star, $BC_V \approx -4.1$ (most light in UV).

## see also

- [Continuum opacity sources](../../02_Zettel/Theory/Continuum opacity sources.html)
- [Equation of radiative transfer](../../02_Zettel/Theory/Equation of radiative transfer.html)
- [Eddington-Barbier approximation](../../02_Zettel/Theory/Eddington-Barbier approximation.html)
- [Source function](../../02_Zettel/Theory/Source function.html)
- [Stellar atmosphere structure](../../02_Zettel/Theory/Stellar atmosphere structure.html)
- [Planck law Wien Stefan-Boltzmann](../../02_Zettel/Theory/Planck law Wien Stefan-Boltzmann.html)
- [Bolometric correction and effective temperature](../../02_Zettel/Theory/Bolometric correction and effective temperature.html)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- [Single stellar population SSP](../../02_Zettel/Theory/Single stellar population SSP.html)
- [SPS code families](../../02_Zettel/Theory/SPS code families.html)
