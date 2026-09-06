---
layout: default
title: "Curve of growth"
---

the **curve of growth** plots equivalent width $W$ vs column density $N$ for a spectral line. it has three characteristic regimes (linear, saturation, damping), each with a distinct slope. central tool for abundance analysis.

## the three regimes

### 1. linear regime ($\tau_0 \ll 1$)

the line is optically thin everywhere. each photon at the line frequency has a small chance of being absorbed; the absorption depth is proportional to the column density.
$$W \approx \frac{\pi e^2}{m_e c}\,N\,f_{lu}\,\lambda_0/c$$

so $W \propto N$. doubling absorbers doubles equivalent width. linear in $\log W$ vs $\log N$ with slope $1$.

useful for **abundance work** when you can find weak unsaturated lines.

### 2. saturation / Doppler regime ($\tau_0 \gtrsim 1$)

the line core absorbs essentially all the flux at line center. additional $N$ doesn't deepen the centre (it's already at the floor) but only modestly broadens the line. width grows logarithmically:
$$W \approx \Delta\lambda_D \cdot 2\sqrt{\ln(\tau_0)}$$
or equivalently $W \propto \sqrt{\ln N}$, very slow growth in $N$.

slope on log-log plot: shallow, $\sim 1/(2\ln N) \approx 0$.

this is where curve-of-growth analysis becomes hardest: small $W$ changes correspond to huge $N$ uncertainties.

### 3. damping wing regime ($\tau_0 \gg 1$)

at very high column density, the **Lorentzian wings** of the line profile become important. far from line center, the wings have $\phi \propto 1/(\nu-\nu_0)^2$. the wings continue absorbing as $N$ grows:
$$W \propto \sqrt{N\,\Gamma\,f}$$
where $\Gamma$ is the damping constant.

slope on log-log: $1/2$. specific to the Lorentzian damping wings.

useful: in this regime you can recover $N$ from the wing depth even when the core is fully saturated.

## the typical curve

$\log W$ vs $\log N$ plot: linear rise (slope 1), turnover into saturation plateau (shallow slope), then transition into damping rise (slope 1/2). the **knee** at $\tau_0 \sim 1$ corresponds to $W \approx \Delta\lambda_D$, the Doppler width.

so **measuring $W$ at the knee** gives the Doppler parameter directly, useful for inferring stellar microturbulence.

## abundance analysis with curve of growth

standard procedure:
1. measure $W$ for many lines of the same species across a wide $N$ range.
2. compute $\log gf$-corrected abscissa for each line.
3. plot all points; they should lie on the **same** universal curve of growth (one curve per ion).
4. the **horizontal shift** between observed points and the theoretical curve gives $\log N$.

this is **Russell's curve-of-growth method**, the historical basis of stellar abundance analysis. modern methods (spectral synthesis with full RTE) have largely replaced it but the curve of growth remains pedagogically essential and is still used for quick abundance estimates.

## consequence for stellar abundances

- **weak lines** (linear regime): $\log gf + \log W$ direct $\to$ abundance, simple.
- **moderate lines** (saturation): need to know microturbulence + thermal width independently. uncertain.
- **strong lines** (damping wings): need accurate $\Gamma$ (collisional broadening parameters). usable but model-dependent.

## see also

- [Equivalent width](../../02_Zettel/Theory/Equivalent width.md)
- [Absorption coefficient and oscillator strength](../../02_Zettel/Theory/Absorption coefficient and oscillator strength.md)
- [Line profile function phi nu](../../02_Zettel/Theory/Line profile function phi nu.md)
- [Voigt profile](../../02_Zettel/Theory/Voigt profile.md)
- [Damping wings](../../02_Zettel/Theory/Damping wings.md)
- [Optical depth](../../02_Zettel/Theory/Optical depth.md)
- [Microturbulence](../../02_Zettel/Theory/Microturbulence.md)
- [Thermal Doppler broadening](../../02_Zettel/Theory/Thermal Doppler broadening.md)
- [Curve of growth abundance analysis](../../02_Zettel/Theory/Curve of growth abundance analysis.md)
