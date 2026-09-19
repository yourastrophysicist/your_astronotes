---
layout: "default"
title: "Voigt profile"
---
the **Voigt profile** is the **convolution of a Gaussian and a Lorentzian**, the standard line shape in stellar atmospheres because both broadening mechanisms operate together.

## the convolution

Gaussian (thermal Doppler + microturbulence):
$$\phi_G(\nu) = \frac{1}{\Delta\nu_D \sqrt\pi}\,e^{-(\nu-\nu_0)^2/\Delta\nu_D^2}$$

Lorentzian (natural + collisional):
$$\phi_L(\nu) = \frac{\Gamma/(2\pi)}{(\nu-\nu_0)^2 + (\Gamma/2)^2}$$

Voigt:
$$\phi_V(\nu) = \int \phi_G(\nu - \nu')\,\phi_L(\nu')\,d\nu'$$

## the Voigt function

usually written in terms of the dimensionless **damping parameter**:
$$a = \frac{\Gamma}{4\pi\,\Delta\nu_D}$$
and the dimensionless frequency offset:
$$u = \frac{\nu - \nu_0}{\Delta\nu_D}$$

then $\phi_V(\nu) = (1/(\Delta\nu_D \sqrt\pi))\,H(a, u)$, with $H(a, u)$ the **Voigt function**:
$$H(a, u) = \frac{a}{\pi}\int_{-\infty}^{+\infty} \frac{e^{-y^2}}{(u-y)^2 + a^2}\,dy$$

equivalently the real part of the **Faddeeva function** $w(z)$ with $z = u + ia$. computed efficiently via `scipy.special.wofz`.

## limits

- **$a \ll 1$** (Lorentzian wings small): pure Gaussian core. line is essentially Gaussian.
- **$a \gg 1$** (Gaussian narrow vs Lorentzian): line is essentially Lorentzian.
- **$a \sim 1$** (Voigt regime): both contribute, gives the famous "Gaussian core, Lorentzian wings" shape.

## the line behaviour

real spectra show:
- **near line center** ($\lvert u\rvert \lesssim 1$): Gaussian dominates. core depth set by integrated optical depth.
- **at line wings** ($\lvert u\rvert \gtrsim 5$): Lorentzian dominates. fall-off as $1/u^2$ rather than exponential.

so a typical absorption line has a deep narrow Doppler core surrounded by extended Lorentzian wings. visible in solar Ca II H + K, in stellar Balmer wings, and in the famous Damped Lyman Alpha (DLA) absorbers in QSO spectra.

## numerical example

solar Fe I line at $\lambda 5250$ Å, $T = 5800$ K:
- thermal $\Delta\lambda_D \sim 0.027$ Å.
- collisional $\Delta\lambda_L \sim 0.01$ Å.
- $a \sim 0.05$, modest but non-negligible.

so the line core is mostly Gaussian, but the wings (a few hundred mÅ from line center) start to show Lorentzian decay.

## damping wings

at very high column density, the line core saturates (zero flux) and the optical depth is $\sim \Gamma/(\nu-\nu_0)^2$ in the wings. so the **wing optical depth is $\propto N$ at fixed offset**, hence the wing equivalent width $\propto \sqrt{N\Gamma}$. this is the "damping wing" regime of the curve of growth, where lines continue to grow despite saturated cores.

DLA systems in QSO sight lines have $N \sim 10^{20}$ to $10^{22}$ cm$^{-2}$ of HI; their Lyman alpha line shows extreme damping wings extending many Å. the wing width directly gives $N$.

## see also

- [Line profile function phi nu](Line%20profile%20function%20phi%20nu.html)
- [Natural broadening Lorentzian](Natural%20broadening%20Lorentzian.html)
- [Thermal Doppler broadening](Thermal%20Doppler%20broadening.html)
- [Collisional pressure broadening](Collisional%20pressure%20broadening.html)
- [Stark broadening](Stark%20broadening.html)
- [Microturbulence](Microturbulence.html)
- [Rotational broadening](Rotational%20broadening.html)
- [Damping wings](Damping%20wings.html)
- [Curve of growth](Curve%20of%20growth.html)
- [Equivalent width](Equivalent%20width.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (16)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Collisional%20pressure%20broadening.html" class="backlink-item">Collisional pressure broadening</a></li>
    <li class="backlink-item-wrap"><a href="Curve%20of%20growth%20abundance%20analysis.html" class="backlink-item">Curve of growth abundance analysis</a></li>
    <li class="backlink-item-wrap"><a href="Curve%20of%20growth.html" class="backlink-item">Curve of growth</a></li>
    <li class="backlink-item-wrap"><a href="Damping%20wings.html" class="backlink-item">Damping wings</a></li>
    <li class="backlink-item-wrap"><a href="Equivalent%20width.html" class="backlink-item">Equivalent width</a></li>
    <li class="backlink-item-wrap"><a href="Line%20profile%20function%20phi%20nu.html" class="backlink-item">Line profile function phi nu</a></li>
    <li class="backlink-item-wrap"><a href="Lyman-alpha%20forest.html" class="backlink-item">Lyman-alpha forest</a></li>
    <li class="backlink-item-wrap"><a href="MK%20luminosity%20classes.html" class="backlink-item">MK luminosity classes</a></li>
    <li class="backlink-item-wrap"><a href="Macroturbulence.html" class="backlink-item">Macroturbulence</a></li>
    <li class="backlink-item-wrap"><a href="Microturbulence.html" class="backlink-item">Microturbulence</a></li>
    <li class="backlink-item-wrap"><a href="Natural%20broadening%20Lorentzian.html" class="backlink-item">Natural broadening Lorentzian</a></li>
    <li class="backlink-item-wrap"><a href="Rotational%20broadening.html" class="backlink-item">Rotational broadening</a></li>
    <li class="backlink-item-wrap"><a href="Stark%20broadening.html" class="backlink-item">Stark broadening</a></li>
    <li class="backlink-item-wrap"><a href="Stellar%20v%20sin%20i%20from%20line%20shape.html" class="backlink-item">Stellar v sin i from line shape</a></li>
    <li class="backlink-item-wrap"><a href="Thermal%20Doppler%20broadening.html" class="backlink-item">Thermal Doppler broadening</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

