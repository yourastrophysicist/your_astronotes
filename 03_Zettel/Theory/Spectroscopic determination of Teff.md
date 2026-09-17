---
layout: "default"
title: "Spectroscopic determination of Teff"
name: "Spectroscopic determination of Teff"
description: "how effective temperature is derived from line ratios, excitation balance, hydrogen wings, and SED fitting"
---
{% raw %}
# spectroscopic determination of Teff

the effective temperature is the most fundamental atmospheric parameter (see [Atmospheric parameters Teff log g feh vmicro](interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html)). several spectroscopic techniques exist, each with distinct sensitivities and systematics. in practice multiple methods are combined and cross-checked.

## 1. excitation balance (Boltzmann method)

within a given ionisation stage of one element (typically Fe I), the populations of different excitation levels follow the Boltzmann distribution,
$$\frac{N_i}{N_j} = \frac{g_i}{g_j}\,e^{-(\chi_i - \chi_j)/kT}.$$
lines arising from different lower excitation potentials $\chi_{\rm exc}$ have different temperature sensitivities. if you derive the iron abundance line by line (using each line's equivalent width and the [Curve of growth](./Curve%20of%20growth.html)) and plot [Fe/H] vs $\chi_{\rm exc}$, the correct $T_{\rm eff}$ is the one for which the **slope is zero**, i.e. all lines yield the same abundance.

practical requirements:

- many Fe I lines covering a wide range of $\chi_{\rm exc}$ (typically 0-5 eV).
- assumption of [Local thermodynamic equilibrium LTE](./Local%20thermodynamic%20equilibrium%20LTE.html) (Boltzmann holds only locally).
- adequate spectral resolution and S/N.

this method is the workhorse for FGK stars in [Color-magnitude diagrams of clusters](./Color-magnitude%20diagrams%20of%20clusters.html) and field surveys.

## 2. hydrogen line wings

the broad wings of the Balmer lines (H$\alpha$, H$\beta$, H$\gamma$) are very sensitive to $T_{\rm eff}$ in late-type stars (FGK), and only weakly sensitive to $\log g$ in this regime. the wings form deep in the photosphere where Stark and resonance broadening dominate. fitting the wing profile against a grid of model atmospheres yields $T_{\rm eff}$ to $\sim 50\text{-}100$ K. for hotter stars (B, A) the situation reverses: H wings become sensitive to $\log g$, less to $T_{\rm eff}$.

## 3. line-depth ratios

in cool stars, ratios of two nearby spectral lines with different temperature sensitivities (e.g. a low-$\chi$ to a high-$\chi$ line of the same species) form an **empirical thermometer**. these ratios are easy to measure (no continuum normalisation needed) and well calibrated for FGK stars at the level of 10-20 K differential precision.

## 4. SED fitting (photometric / spectrophotometric)

the overall shape of the spectral energy distribution, particularly the slope of the Paschen continuum and the Balmer jump in hot stars, plus broadband colours, gives $T_{\rm eff}$ via comparison with models or with the infrared flux method (IRFM). this is largely independent of the spectroscopic methods above and provides a useful cross-check. limitations: requires accurate reddening (see [Effects of differential reddening on CMD analysis](./Effects%20of%20differential%20reddening%20on%20CMD%20analysis.html)) and absolute photometric calibration.

## 5. ionisation balance (cross-check)

while ionisation balance is primarily used for $\log g$ (see [Spectroscopic determination of log g](./Spectroscopic%20determination%20of%20log%20g.html)), the two ionisation stages also give a constraint on $T_{\rm eff}$ through their joint Saha-Boltzmann dependence. usually it is co-determined with gravity in an iterative loop.

## sources of systematic error

- **non-LTE effects.** in metal-poor giants, departures from LTE for Fe I can systematically lower the inferred Teff by 50-150 K. Fe II is more reliable because it is the majority species.
- **3D atmosphere effects.** classical 1D models miss granulation; using 3D non-LTE corrections shifts Teff by tens of kelvin.
- **microturbulence coupling.** an incorrect $\xi_t$ (see [Microturbulence](./Microturbulence.html)) introduces a tilt in the EW vs $\chi_{\rm exc}$ diagram that mimics a temperature error.

## typical precision

- absolute: $\Delta T_{\rm eff} \sim 100\text{-}300$ K
- differential (star-to-star within similar parameters): $\Delta T_{\rm eff} \sim 10\text{-}50$ K

## see also
- [Atmospheric parameters Teff log g feh vmicro](interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html)
- [Spectroscopic determination of log g](./Spectroscopic%20determination%20of%20log%20g.html)
- [Spectroscopic determination of metallicity](./Spectroscopic%20determination%20of%20metallicity.html)
- [Curve of growth](./Curve%20of%20growth.html)
- [Equivalent width](./Equivalent%20width.html)
- [Local thermodynamic equilibrium LTE](./Local%20thermodynamic%20equilibrium%20LTE.html)
- [Saha ionisation equation](./Saha%20ionisation%20equation.html)
- [Microturbulence](./Microturbulence.html)
- [Stellar_Astrophysics_MOC](../../04_Atlas/Stellar_Astrophysics_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (6)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html" class="backlink-item">Atmospheric parameters Teff log g feh vmicro</a></li>
    <li class="backlink-item-wrap"><a href="interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html" class="backlink-item">Atmospheric parameters Teff log g feh vmicro</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20determination%20of%20log%20g.html" class="backlink-item">Spectroscopic determination of log g</a></li>
    <li class="backlink-item-wrap"><a href="./Spectroscopic%20determination%20of%20metallicity.html" class="backlink-item">Spectroscopic determination of metallicity</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20spectral%20types%20OBAFGKM.html" class="backlink-item">Stellar spectral types OBAFGKM</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Stellar_Astrophysics_MOC.html" class="backlink-item">Stellar_Astrophysics_MOC</a></li>
  </ul>
</div>
