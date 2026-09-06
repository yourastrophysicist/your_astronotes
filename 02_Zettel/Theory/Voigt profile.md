---
layout: default
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
- **near line center** ($|u| \lesssim 1$): Gaussian dominates. core depth set by integrated optical depth.
- **at line wings** ($|u| \gtrsim 5$): Lorentzian dominates. fall-off as $1/u^2$ rather than exponential.

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

- [Line profile function phi nu](../../02_Zettel/Theory/Line profile function phi nu.md)
- [Natural broadening Lorentzian](../../02_Zettel/Theory/Natural broadening Lorentzian.md)
- [Thermal Doppler broadening](../../02_Zettel/Theory/Thermal Doppler broadening.md)
- [Collisional pressure broadening](../../02_Zettel/Theory/Collisional pressure broadening.md)
- [Stark broadening](../../02_Zettel/Theory/Stark broadening.md)
- [Microturbulence](../../02_Zettel/Theory/Microturbulence.md)
- [Rotational broadening](../../02_Zettel/Theory/Rotational broadening.md)
- [Damping wings](../../02_Zettel/Theory/Damping wings.md)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.md)
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.md)
