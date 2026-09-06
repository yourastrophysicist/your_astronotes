---
layout: default
title: "Thermal Doppler broadening"
---

**thermal Doppler broadening** is the line broadening from the random thermal motion of the absorbing atoms. each atom shifts the line frequency by $v/c$, and the Maxwell-Boltzmann velocity distribution gives a **Gaussian** profile.

## the derivation

each atom moving with line-of-sight velocity $v_z$ sees an incoming photon at the rest-frame frequency $\nu_0(1 + v_z/c)$, which means it absorbs at observed frequency $\nu = \nu_0(1 - v_z/c)$ in the lab frame.

so the absorption profile in the gas frame, summed over all atoms, is:
$$\phi(\nu) = \int dv_z\,n(v_z)\,\delta(\nu - \nu_0(1 - v_z/c))$$
where $n(v_z)$ is the velocity distribution.

for Maxwellian $n(v_z) \propto e^{-mv_z^2/(2k_BT)}$, this convolves to a **Gaussian profile** at frequency:
$$\boxed{\, \phi_D(\nu) = \frac{1}{\Delta\nu_D \sqrt\pi}\,\exp\!\left[-\left(\frac{\nu - \nu_0}{\Delta\nu_D}\right)^2\right] \,}$$

with the **Doppler width**:
$$\Delta\nu_D = \frac{\nu_0}{c}\sqrt{\frac{2k_BT}{m}}$$

equivalent in wavelength: $\Delta\lambda_D = (\lambda_0/c)\sqrt{2k_BT/m}$.

## numerical values

for an iron line at $5000$ Å in a stellar photosphere at $T = 6000$ K, $m_{\rm Fe} = 56$ amu:
$$\sqrt{2k_BT/m} = \sqrt{(2)(1.38\times 10^{-16})(6000)/(56\cdot 1.66\times 10^{-24})}$$
$\approx 1.3$ km/s.
$$\Delta\lambda_D = 5000 \cdot (1300)/(3\times 10^{10}) \approx 0.022\,\text{Å}$$

so an Fe line is naturally $\sim 0.02$ Å wide from thermal Doppler. an H line at the same $T$ is $\sqrt{56}\approx 7.5$× broader because $m_H \ll m_{\rm Fe}$, $\Delta\lambda_D \approx 0.16$ Å.

## consequence: lighter atoms have broader thermal cores

| species | $\Delta\lambda_D$ at $T = 6000$ K, $\lambda = 5000$ Å |
|---|---|
| H | $\sim 0.16$ Å |
| He | $\sim 0.08$ Å |
| Li | $\sim 0.05$ Å |
| Na | $\sim 0.03$ Å |
| Fe | $\sim 0.02$ Å |
| Ba | $\sim 0.015$ Å |

so light-atom lines look broader than heavy-atom lines at the same $T$.

## the FWHM relation

Gaussian FWHM = $2\sqrt{\ln 2}\,\Delta\nu_D \approx 1.665\,\Delta\nu_D$.

## with microturbulence

in real stellar atmospheres there's also small-scale turbulence (microturbulence) which adds a velocity component:
$$\Delta\nu_D = \frac{\nu_0}{c}\sqrt{\frac{2k_BT}{m} + v_{\rm turb}^2}$$

so for cool-star metal lines, $v_{\rm turb} \sim 1$ to $5$ km/s exceeds the thermal width and dominates. see [Microturbulence](../../02_Zettel/Theory/Microturbulence.html).

## thermometric use

since $\Delta\nu_D \propto \sqrt T$, measuring the Doppler core of a line gives **the local temperature** at the line-forming layer. used in:
- nebular plasma (very narrow thermal cores in $[OIII]$ from $T_e \sim 10^4$ K).
- coronal loops ($T \sim 10^6$ K).
- planetary atmospheres (rovibrational lines).

caveat: must subtract macro/microturbulence and rotational broadening first.

## see also

- [Line profile function phi nu](../../02_Zettel/Theory/Line profile function phi nu.html)
- [Natural broadening Lorentzian](../../02_Zettel/Theory/Natural broadening Lorentzian.html)
- [Microturbulence](../../02_Zettel/Theory/Microturbulence.html)
- [Macroturbulence](../../02_Zettel/Theory/Macroturbulence.html)
- [Voigt profile](../../02_Zettel/Theory/Voigt profile.html)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.html)
- [Stellar v sin i from line shape](../../02_Zettel/Theory/Stellar v sin i from line shape.html)
