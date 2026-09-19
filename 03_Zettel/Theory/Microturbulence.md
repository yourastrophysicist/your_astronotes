---
layout: "default"
title: "Microturbulence"
---
**microturbulence** is small-scale, isotropic velocity dispersion within the line-forming region of a stellar atmosphere. behaves like extra thermal broadening, with the same Gaussian shape but a velocity scale set by macroscopic turbulence rather than thermal speed.

## the parameter

an extra Gaussian velocity component $v_{\rm turb}$ that adds to the thermal speed in quadrature:
$$\Delta\nu_D = \frac{\nu_0}{c}\sqrt{\frac{2k_BT}{m} + v_{\rm turb}^2}$$

so the Doppler width is enhanced. for stellar atmospheres, $v_{\rm turb} \sim 1$ to $5$ km/s typically.

## why "micro"?

distinguishes from **macroturbulence** ([Macroturbulence](Macroturbulence.html)), which acts on scales **larger** than the line-forming layer, so different parts of the photosphere see different bulk velocities. macroturbulence smears the line as a whole rather than broadening individual line cores.

quantitatively, **micro vs macro** is set by comparing the velocity correlation length $L_c$ to the line-forming-layer thickness. if $L_c \ll$ thickness $\to$ microturbulence. if $L_c \gg$ thickness $\to$ macroturbulence.

## determining $v_{\rm turb}$ observationally

the textbook method: plot $\log W$ vs $\log gf$ for many lines of the same species spanning a range of strengths. lines in the linear regime have $W \propto N \cdot f$. lines in the saturation regime are sensitive to the Doppler width.

if $v_{\rm turb}$ is wrong, the inferred abundance will systematically differ between weak and strong lines. tune $v_{\rm turb}$ until weak and strong lines give the same abundance. this is the **microturbulence dispersion test**.

modern stellar abundance pipelines (turbospectrum, MOOG, SME, iSpec) include $v_{\rm turb}$ as a free parameter to be fit per star.

## typical values

|stellar type | $v_{\rm turb}$ (km/s) |
|---|---|
| Sun (G2 V) | $\sim 0.9$ |
| F dwarfs | $\sim 1$ to $1.5$ |
| K dwarfs | $\sim 0.7$ to $1$ |
| K giants | $\sim 1.5$ to $2.5$ |
| M giants, AGB | $\sim 3$ to $5$ |
| supergiants | $\sim 5$ to $10$ |

so $v_{\rm turb}$ tends to grow with luminosity (at fixed $T$) because lower-density atmospheres have less efficient pressure damping of convective overshoot.

## physical origin

probably **convective overshoot** + small-scale wave motions. in cool stars, granulation drives convective updrafts and downdrafts; the turbulent kinetic energy spectrum has a small-scale tail that broadens spectral lines.

3D radiative-MHD simulations (CO5BOLD, Stagger) reproduce observed $v_{\rm turb}$ from first principles in simple cases (the Sun), validating the picture.

## consequence: $W$ at saturation depends on $v_{\rm turb}$

in the saturation regime of the curve of growth ([Curve of growth](Curve%20of%20growth.html)), $W$ growth depends on $\Delta\lambda_D$, hence on $v_{\rm turb}$. so abundance estimates from saturated lines have built-in $v_{\rm turb}$ uncertainty.

best practice: measure abundances from weak (linear-regime) lines, where $W \propto N \cdot f$ has no $v_{\rm turb}$ dependence.

## see also

- [Thermal Doppler broadening](Thermal%20Doppler%20broadening.html)
- [Macroturbulence](Macroturbulence.html)
- [Line profile function phi nu](Line%20profile%20function%20phi%20nu.html)
- [Curve of growth](Curve%20of%20growth.html)
- [Equivalent width](Equivalent%20width.html)
- [Voigt profile](Voigt%20profile.html)
- [Curve of growth abundance analysis](Curve%20of%20growth%20abundance%20analysis.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (14)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html" class="backlink-item">Atmospheric parameters Teff log g feh vmicro</a></li>
    <li class="backlink-item-wrap"><a href="Curve%20of%20growth%20abundance%20analysis.html" class="backlink-item">Curve of growth abundance analysis</a></li>
    <li class="backlink-item-wrap"><a href="Curve%20of%20growth.html" class="backlink-item">Curve of growth</a></li>
    <li class="backlink-item-wrap"><a href="Line%20profile%20function%20phi%20nu.html" class="backlink-item">Line profile function phi nu</a></li>
    <li class="backlink-item-wrap"><a href="Macroturbulence.html" class="backlink-item">Macroturbulence</a></li>
    <li class="backlink-item-wrap"><a href="Rotational%20broadening.html" class="backlink-item">Rotational broadening</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20Teff.html" class="backlink-item">Spectroscopic determination of Teff</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20metallicity.html" class="backlink-item">Spectroscopic determination of metallicity</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20rotation%20v%20sini.html" class="backlink-item">Stellar rotation v sini</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20v%20sin%20i%20from%20line%20shape.html" class="backlink-item">Stellar v sin i from line shape</a></li>
    <li class="backlink-item-wrap"><a href="Thermal%20Doppler%20broadening.html" class="backlink-item">Thermal Doppler broadening</a></li>
    <li class="backlink-item-wrap"><a href="Voigt%20profile.html" class="backlink-item">Voigt profile</a></li>
    <li class="backlink-item-wrap"><a href="interf/Atmospheric%20parameters%20Teff%20log%20g%20feh%20vmicro.html" class="backlink-item">Atmospheric parameters Teff log g feh vmicro</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

