---
layout: "default"
title: "Stellar diameters and limb darkening"
---
{% raw %}
# Stellar diameters and limb darkening

the canonical first measurement of any stellar interferometer. measure the angular diameter of a star (using the visibility curve's first null), and from the deviations of the visibility curve from a uniform-disk model, extract limb-darkening information about the stellar atmosphere.

## the basic measurement

a star is approximately a uniform disk of angular diameter $\theta$. its visibility:

$$\lvert V(B)\rvert = \left\lvert\frac{2 J_1(\pi \theta B/\lambda)}{\pi \theta B/\lambda}\right\rvert$$

first null at $B_1 = 1.22 \lambda/\theta$.

measure visibility at several baselines, fit a uniform-disk model, extract $\theta$.

## the resolution requirements

for a star at distance $d$ with physical radius $R$:
$$\theta_{\rm star} \approx 2 R/d$$

examples:
- Sun at 10 pc: $R_\odot = 7 \times 10^8$ m → $\theta = 0.93$ mas. within reach of CHARA (1 mas) but needs longest baselines
- Betelgeuse (red supergiant, ~700 pc): $R \sim 800 R_\odot$ → $\theta \sim 50$ mas. easily resolved
- nearby late-type giant (e.g. Aldebaran, 20 pc): $\theta \sim 21$ mas. easy
- main-sequence stars (10-100 pc): $\theta \sim 0.1$-$1$ mas. requires CHARA's longest baselines

## limb darkening

a real star is *not* a uniform disk: it is brighter at the center than at the limb. this is **limb darkening**: stellar atmosphere is more transparent looking straight down (where photons emerge from deeper, hotter layers) than looking at the limb (cooler layers).

the surface brightness as a function of angle from disk center:
$$\mu(\theta_{\rm disk}) = 1 - u (1 - \sqrt{1 - (\theta/\theta_{\rm disk})^2})$$

with $u$ the **linear limb-darkening coefficient**, typically $u = 0.5$-$0.8$ for stars in the visible.

## the visibility with limb darkening

a limb-darkened disk's visibility deviates from the uniform-disk Bessel function. specifically:
- first null shifts *inward* (smaller $B_1$)
- visibility doesn't go to zero (the limb-bright "edge" doesn't fully cancel)

a fit to limb-darkened visibility gives:
- effective angular diameter $\theta_{\rm eff}$
- limb-darkening coefficient $u$

## the science

precise diameters at many wavelengths give:
- **effective temperature**: from the Stefan-Boltzmann law, $L = 4\pi R^2 \sigma T_{\rm eff}^4$. need $L$ from photometry and $R$ from interferometry
- **gravity**: from $g = GM/R^2$ with mass from spectroscopy or asteroseismology
- **stellar atmosphere validation**: limb-darkening predictions from atmosphere models can be tested

## the limb-darkening physics

limb-darkening is a probe of *stellar atmospheres*. specifically:
- *temperature stratification* of the atmosphere (steeper gradient → more limb darkening)
- *opacity* sources (continuum and lines)
- *non-grey* effects: limb darkening varies with wavelength

at visible wavelengths: $u \sim 0.5$-$0.8$ for most stars.
at IR: smaller $u$ ($\sim 0.2$-$0.4$).

so multi-wavelength interferometric measurements of limb darkening test stellar atmosphere models with high precision.

## the historical landmarks

- **Michelson 1920**: Betelgeuse, $\theta = 47$ mas (uniform-disk model)
- **Pease 1931**: Antares, Arcturus, several other supergiants
- **Narrabri 1965-1972**: 32 stars, including Sirius, Vega, Rigel
- **Mark III 1990s**: Vega, Altair, hundreds of stars
- **CHARA 2000s-now**: hundreds of diameters with $\sim 1\%$ precision

CHARA has produced *the* modern catalog of stellar diameters, anchoring the empirical $T_{\rm eff}$ scale used in modern stellar evolution.

## the typical observing strategy

modern survey:
1. observe the target at multiple baselines (5-10) covering the visibility curve
2. observe a calibrator (unresolved or known-diameter star) at each baseline
3. divide target/calibrator visibilities → calibrated visibility curve
4. fit a limb-darkened disk model → diameter and limb-darkening parameters
5. compare to atmosphere model predictions → physics constraint

a single star observation: 30-60 minutes.

## see also

- [Fringe visibility and contrast](./Fringe%20visibility%20and%20contrast.html)
- [Van Cittert-Zernike theorem](./Van%20Cittert-Zernike%20theorem.html)
- [CHARA array](./CHARA%20array.html)
- [Stellar surface imaging](./Stellar%20surface%20imaging.html)
- [Astronomical_Interferometry_MOC](../../../04_Atlas/Astronomical_Interferometry_MOC.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (19)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="../../../04_Atlas/Astronomical_Interferometry_MOC.html" class="backlink-item">Astronomical_Interferometry_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Binary%20star%20orbits.html" class="backlink-item">Binary star orbits</a></li>
    <li class="backlink-item-wrap"><a href="../Binary%20star%20orbits.html" class="backlink-item">Binary star orbits</a></li>
    <li class="backlink-item-wrap"><a href="../CHARA%20array.html" class="backlink-item">CHARA array</a></li>
    <li class="backlink-item-wrap"><a href="./CHARA%20array.html" class="backlink-item">CHARA array</a></li>
    <li class="backlink-item-wrap"><a href="./Fringe%20visibility%20and%20contrast.html" class="backlink-item">Fringe visibility and contrast</a></li>
    <li class="backlink-item-wrap"><a href="../Fringe%20visibility%20and%20contrast.html" class="backlink-item">Fringe visibility and contrast</a></li>
    <li class="backlink-item-wrap"><a href="../Galactic%20Center%20Sgr%20A%20and%20S-stars.html" class="backlink-item">Galactic Center Sgr A and S-stars</a></li>
    <li class="backlink-item-wrap"><a href="./Galactic%20Center%20Sgr%20A%20and%20S-stars.html" class="backlink-item">Galactic Center Sgr A and S-stars</a></li>
    <li class="backlink-item-wrap"><a href="./Michelson%20stellar%20interferometer.html" class="backlink-item">Michelson stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Michelson%20stellar%20interferometer.html" class="backlink-item">Michelson stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../NPOI%20Navy%20Prototype%20Optical%20Interferometer.html" class="backlink-item">NPOI Navy Prototype Optical Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./NPOI%20Navy%20Prototype%20Optical%20Interferometer.html" class="backlink-item">NPOI Navy Prototype Optical Interferometer</a></li>
    <li class="backlink-item-wrap"><a href="./Pulsating%20stars%20and%20Mira%20variables.html" class="backlink-item">Pulsating stars and Mira variables</a></li>
    <li class="backlink-item-wrap"><a href="../Pulsating%20stars%20and%20Mira%20variables.html" class="backlink-item">Pulsating stars and Mira variables</a></li>
    <li class="backlink-item-wrap"><a href="../Stellar%20surface%20imaging.html" class="backlink-item">Stellar surface imaging</a></li>
    <li class="backlink-item-wrap"><a href="./Stellar%20surface%20imaging.html" class="backlink-item">Stellar surface imaging</a></li>
    <li class="backlink-item-wrap"><a href="./Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
    <li class="backlink-item-wrap"><a href="../Young%20experiment%20as%20a%20stellar%20interferometer.html" class="backlink-item">Young experiment as a stellar interferometer</a></li>
  </ul>
</div>
