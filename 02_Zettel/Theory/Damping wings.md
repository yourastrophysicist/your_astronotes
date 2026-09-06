---
layout: default
title: "Damping wings"
---

at very high column density, the **Lorentzian wings** of a Voigt profile dominate the line absorption far from line center. these "damping wings" are the signature of the high-column / highly-saturated regime.

## the geometry

far from line center ($|\nu - \nu_0| \gg \Delta\nu_D$), the Voigt profile reduces to the Lorentzian:
$$\phi(\nu) \approx \frac{\Gamma/(4\pi^2)}{(\nu - \nu_0)^2}$$

the optical depth in the wings:
$$\tau_\nu^{\rm wing} = N\,\frac{\pi e^2 f}{m_e c}\,\phi(\nu) \approx N\,\frac{e^2 f \Gamma}{4\pi m_e c}\,\frac{1}{(\nu-\nu_0)^2}$$

so $\tau \propto N \cdot \Gamma / (\nu - \nu_0)^2$. **the wing optical depth scales linearly with $N$**, even when the core is saturated.

## consequence for the line shape

at $N$ where the core has $\tau_0 \gg 1$ (saturated), increasing $N$ doesn't change the core but **deepens the wings** at increasingly large $|\nu - \nu_0|$. the line "grows outward" symmetrically.

equivalent width contribution from wings:
$$W_{\rm wing} \approx 2\sqrt{N\,\frac{e^2 f \Gamma \lambda_0^2}{m_e c^3}}$$

so $W \propto \sqrt{N}$, the slope $1/2$ of the curve-of-growth damping regime.

## astronomical examples

### stellar Balmer lines

at $T \gtrsim 9000$ K (A0 stars), Stark broadening of H Balmer lines is very strong. the Balmer line profile has a Doppler core saturated to zero flux + extensive Stark damping wings extending tens of Å. the wing extent is a sensitive **gravity diagnostic** ([MK luminosity classes](../../02_Zettel/Theory/MK luminosity classes.html)).

### Ca II H + K

in cool stars, the Ca II resonance lines are strong and saturate easily. the wings extend $\sim 50$ Å on each side of the core. fitting damping wings constrains the gas pressure / surface gravity.

### Damped Lyman Alpha (DLA)

at high redshift, neutral H clouds (DLAs) along QSO sight lines have HI column densities $N_{\rm HI} \sim 10^{20}$ to $10^{22}$ cm$^{-2}$. their Ly$\alpha$ absorption shows a saturated core and extended damping wings. fitting the wings directly gives $N_{\rm HI}$ to $\sim 5\%$ precision.

### Lyman alpha forest

at lower $N_{\rm HI} \sim 10^{14}$ to $10^{18}$, the wings are not yet developed and the lines are in the Doppler core regime. but at higher $N$, they enter damping. the boundary between forest and DLA is at $\sim 10^{20}$.

## abundance work

the damping wings are useful for measuring abundances of saturated lines. specifically:
- **strong lines** with saturated cores can still yield $N$ via wing measurements.
- requires accurate $\Gamma$ values (collisional broadening parameters).

modern abundance pipelines (turbospectrum, MOOG) include damping wings in the line-by-line fits. classical microturbulence calibration via the curve of growth uses both the saturation regime (microturbulence) and the damping regime ($\Gamma$).

## see also

- [Voigt profile](../../02_Zettel/Theory/Voigt profile.html)
- [Curve of growth](../../02_Zettel/Theory/Curve of growth.html)
- [Equivalent width](../../02_Zettel/Theory/Equivalent width.html)
- [Stark broadening](../../02_Zettel/Theory/Stark broadening.html)
- [Collisional pressure broadening](../../02_Zettel/Theory/Collisional pressure broadening.html)
- [Natural broadening Lorentzian](../../02_Zettel/Theory/Natural broadening Lorentzian.html)
- [Optical depth](../../02_Zettel/Theory/Optical depth.html)
- [Hydrogen spectral series](../../02_Zettel/Theory/Hydrogen spectral series.html)
- [Calcium and CaII H+K](../../02_Zettel/Theory/Calcium and CaII H+K.html)
- [Curve of growth abundance analysis](../../02_Zettel/Theory/Curve of growth abundance analysis.html)
