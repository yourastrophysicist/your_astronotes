---
layout: default
title: "Bolometric correction and effective temperature"
---

a single filter only catches part of a star's light; the rest of the SED is invisible to that band. the **bolometric correction** is the offset to convert a filter magnitude to a bolometric magnitude. the **effective temperature** is the temperature of the equivalent blackbody that would produce the star's total luminosity at its actual radius.

## bolometric magnitude

defined from the total radiative output:
$$M_{\rm bol} = -2.5 \log_{10}(L/L_0)$$
with $L_0 = 3.0128 \times 10^{28}$ W (IAU 2015) so that $M_{\rm bol,\odot} = +4.74$.

bolometric magnitudes are **directly comparable to total power**, unlike single-band magnitudes which depend on filter and SED.

## bolometric correction

definition:
$$\boxed{\, BC_X \equiv M_{\rm bol} - M_X \,}$$

so $BC_V$ converts $M_V$ to $M_{\rm bol}$. by convention, $BC$ is **negative** for stars whose energy output peaks outside the V-band (e.g. very hot stars peak in UV, very cold stars in IR; in both cases $M_{\rm bol}$ is *more negative* than $M_V$, hence $BC < 0$).

values for V-band:
- O5 V: $BC_V \approx -4.1$ (peak is in UV).
- B0 V: $BC_V \approx -2.7$.
- A0 V (Vega): $BC_V \approx -0.3$.
- G2 V (Sun): $BC_V \approx -0.07$ (V is very close to bolometric peak).
- M0 V: $BC_V \approx -1.2$ (peak in NIR).
- M5 III: $BC_V \approx -1.7$.

so the Sun is a special case where V is very close to bolometric. for very hot or very cold stars, V misses most of the light.

bolometric corrections are tabulated as a function of $T_{\rm eff}$ and surface gravity; standard refs are Bessell, Castelli, Plez 1998.

## effective temperature

defined by the Stefan-Boltzmann formula:
$$\boxed{\, L = 4\pi R^2 \sigma_{SB}\, T_{\rm eff}^4 \,}$$

so $T_{\rm eff}$ is the temperature of a blackbody that would produce the **same bolometric flux per unit surface area** as the actual star. it is **not** the surface temperature in any literal thermodynamic sense; the photosphere has a $T(\tau)$ profile and $T_{\rm eff}$ is just the integral.

for the Sun: $T_{\rm eff} = 5772$ K, but the visible-light photosphere temperature ranges from $4400$ to $6600$ K depending on optical depth.

## linking $T_{\rm eff}$, $L$, $R$, and color

three observables and three unknowns:
- if you know $T_{\rm eff}$ and $L$, you get $R$.
- if you know $L$ and $R$, you get $T_{\rm eff}$.
- if you know $T_{\rm eff}$ and $R$, you get $L$.

practical chain:
1. **spectral type** $\to$ $T_{\rm eff}$ via empirical calibrations (e.g. de Jager-Nieuwenhuijzen 1987 for OB; Casagrande 2010 for FGK).
2. **distance** + **apparent magnitude** $\to$ $M_X$.
3. **$BC_X(T_{\rm eff})$** $\to$ $M_{\rm bol}$ $\to$ $L$.
4. $L$ + $T_{\rm eff}$ $\to$ $R$ via Stefan-Boltzmann.

this is the standard way to populate the [HR diagram](../../02_Zettel/Theory/HR diagram.md) with both luminosity and radius.

## modern alternative: SED fitting

instead of using $BC$, fit a model spectrum (Kurucz, PHOENIX, BT-Settl) to multi-band photometry directly. recovers $T_{\rm eff}$, $\log g$, $[Fe/H]$, and integrated $L$ in one Bayesian step. requires good filter throughput knowledge and reliable model atmospheres.

## see also

- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.md)
- [Stellar scaling relations](../../02_Zettel/Theory/Stellar scaling relations.md)
- [HR diagram](../../02_Zettel/Theory/HR diagram.md)
- [Stellar spectra and spectral classification](../../02_Zettel/Theory/Stellar spectra and spectral classification.md)
- [Planck law Wien Stefan-Boltzmann](../../02_Zettel/Theory/Planck law Wien Stefan-Boltzmann.md)
- [Specific intensity flux luminosity](../../02_Zettel/Theory/Specific intensity flux luminosity.md)
- [Filter systems and bandpasses](../../02_Zettel/Theory/Filter systems and bandpasses.md)
