---
layout: default
title: "Atmospheric extinction"
---

at all transparent wavelengths the atmosphere still **dims** the light in a wavelength-dependent way. the dimming follows Beer-Lambert and grows with the path length through the atmosphere. it is the thing every photometric measurement must correct for.

## the geometry: airmass

the "amount of atmosphere" along a line of sight at zenith distance $z$ is parameterised by the **airmass** $X$:
$$X(z) \approx \sec z = 1/\cos z$$
for $z \lesssim 60°$. at zenith, $X = 1$ (one airmass by definition). at $z = 60°$, $X = 2$. at $z = 75°$, $X \approx 3.9$.

at $z > 60°$ a curved-Earth + density-profile correction matters; one common form is the Hardie formula
$$X(z) = \sec z - 0.0018167(\sec z - 1) - 0.002875(\sec z - 1)^2 - 0.0008083(\sec z - 1)^3$$
or Young 1994. for percent-level photometry above $z = 60°$, use one of these.

## Beer-Lambert and the extinction coefficient

the observed magnitude in band $\lambda$ at airmass $X$ is
$$\boxed{\, m_{\rm obs}(\lambda) = m_0(\lambda) + k(\lambda)\, X \,}$$
where $m_0$ is the magnitude above the atmosphere and $k(\lambda)$ is the **extinction coefficient** for that band on that night, in mag per airmass.

typical values at a good site:
| band | $k$ (mag/airmass) |
|---|---|
| U | $\sim 0.5$ |
| B | $\sim 0.25$ |
| V | $\sim 0.15$ |
| R | $\sim 0.10$ |
| I | $\sim 0.07$ |
| J | $\sim 0.10$ |
| H | $\sim 0.06$ |
| K | $\sim 0.10$ |

values are wavelength-dependent and night-dependent (aerosols, humidity).

## the physical breakdown

three contributions sum to $k(\lambda)$:
1. **Rayleigh scattering** by molecules, $\sigma_R \propto \lambda^{-4}$. dominant in the blue. responsible for the blue daytime sky.
2. **Mie scattering** by aerosols (dust, salt droplets), weaker $\lambda$ dependence ($\lambda^{-1}$ to $\lambda^{0}$). varies with weather, dust storms, volcanic ash.
3. **molecular absorption** by O$_3$ (UV), H$_2$O (NIR + sub-mm), O$_2$ (red, mm). narrow bands, locally strong.

## the Bouguer line, calibrating $k$

practical procedure:
1. observe a **photometric standard star** (Landolt, SDSS) repeatedly through the night.
2. record $m_{\rm obs}$ vs $X = \sec z$.
3. fit a line: slope $=$ $k(\lambda)$, intercept $=$ $m_0$.
4. apply the same $k$ to your science target, correcting back to $X = 0$ (above the atmosphere).
5. for absolute photometry, use the catalogued $m_0$ of the standard star to get a zeropoint.

this fit, $m_{\rm obs}$ vs $X$, is the **Bouguer line**, named after Pierre Bouguer (1729). a "photometric night" is one where Bouguer lines are straight and reproducible to $\sim 0.01$ mag.

## non-photometric nights

cloud, varying aerosol, or jet stream cause $k$ to vary on minute timescales. these are **non-photometric** conditions, and the standard-star approach fails. workarounds:
- **differential photometry**: measure target relative to a comparison star at the same airmass; both are extinguished by the same factor.
- **all-sky pipelines** that cross-calibrate against many standards.
- **Sloan-style** ubercalibration, post-processing many overlapping fields.

## what to remember on the exam

- $X \approx \sec z$ at moderate zenith distance.
- Beer-Lambert: $m_{\rm obs} = m_0 + k(\lambda) X$.
- $k$ is mainly Rayleigh in the blue, aerosol Mie in the red, molecular bands in NIR.
- Bouguer line procedure: photometric standards at multiple $X$, fit a line, get $k$ and $m_0$.
- for percent photometry: $X \le 1.5$, photometric night.

## see also

- [Earth atmosphere for observations](../../02_Zettel/Theory/Earth atmosphere for observations.html)
- [Atmospheric transparency windows](../../02_Zettel/Theory/interf/Atmospheric transparency windows.html)
- [Magnitudes and photometric systems](../../02_Zettel/Theory/Magnitudes and photometric systems.html)
- [Photometric standard stars](../../02_Zettel/Theory/Photometric standard stars.html)
- [Distance modulus](../../02_Zettel/Theory/Distance modulus.html)
- [Interstellar absorption](../../02_Zettel/Theory/Interstellar absorption.html) — the analogous problem for ISM dust
