---
layout: "default"
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

- [Equivalent width](Equivalent%20width.html)
- [Absorption coefficient and oscillator strength](Absorption%20coefficient%20and%20oscillator%20strength.html)
- [Line profile function phi nu](Line%20profile%20function%20phi%20nu.html)
- [Voigt profile](Voigt%20profile.html)
- [Damping wings](Damping%20wings.html)
- [Optical depth](Optical%20depth.html)
- [Microturbulence](Microturbulence.html)
- [Thermal Doppler broadening](Thermal%20Doppler%20broadening.html)
- [Curve of growth abundance analysis](Curve%20of%20growth%20abundance%20analysis.html)

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (17)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="Absorption%20coefficient%20and%20oscillator%20strength.html" class="backlink-item">Absorption coefficient and oscillator strength</a></li>
    <li class="backlink-item-wrap"><a href="Collisional%20pressure%20broadening.html" class="backlink-item">Collisional pressure broadening</a></li>
    <li class="backlink-item-wrap"><a href="Curve%20of%20growth%20abundance%20analysis.html" class="backlink-item">Curve of growth abundance analysis</a></li>
    <li class="backlink-item-wrap"><a href="Damping%20wings.html" class="backlink-item">Damping wings</a></li>
    <li class="backlink-item-wrap"><a href="Element%20abundance%20patterns.html" class="backlink-item">Element abundance patterns</a></li>
    <li class="backlink-item-wrap"><a href="Equivalent%20width.html" class="backlink-item">Equivalent width</a></li>
    <li class="backlink-item-wrap"><a href="Line%20profile%20function%20phi%20nu.html" class="backlink-item">Line profile function phi nu</a></li>
    <li class="backlink-item-wrap"><a href="Macroturbulence.html" class="backlink-item">Macroturbulence</a></li>
    <li class="backlink-item-wrap"><a href="Microturbulence.html" class="backlink-item">Microturbulence</a></li>
    <li class="backlink-item-wrap"><a href="Natural%20broadening%20Lorentzian.html" class="backlink-item">Natural broadening Lorentzian</a></li>
    <li class="backlink-item-wrap"><a href="Optical%20depth.html" class="backlink-item">Optical depth</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20Teff.html" class="backlink-item">Spectroscopic determination of Teff</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20log%20g.html" class="backlink-item">Spectroscopic determination of log g</a></li>
    <li class="backlink-item-wrap"><a href="Spectroscopic%20determination%20of%20metallicity.html" class="backlink-item">Spectroscopic determination of metallicity</a></li>
    <li class="backlink-item-wrap"><a href="Thermal%20Doppler%20broadening.html" class="backlink-item">Thermal Doppler broadening</a></li>
    <li class="backlink-item-wrap"><a href="Voigt%20profile.html" class="backlink-item">Voigt profile</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
  </ul>
</div>

