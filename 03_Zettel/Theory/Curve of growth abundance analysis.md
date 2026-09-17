---
layout: "default"
title: "Curve of growth abundance analysis"
---
{% raw %}
measuring stellar abundances via the **curve-of-growth method**: combine equivalent width of many lines of the same species with their atomic-physics oscillator strengths, and the unique abundance shifts the points to land on the universal curve of growth. classical method, foundational to stellar spectroscopy.

## the procedure

for each line of species $X$:
1. measure equivalent width $W$ from the spectrum.
2. compute the abscissa: $\log(W/\lambda) - \log gf - \log(\Delta\nu_D)$ (or similar, with appropriate $\theta = 5040/T_{\rm eff}$ corrections).
3. plot points on the universal curve of growth: linear, saturated, damping regimes.
4. shift all points horizontally so they fall on a smooth curve.
5. the **shift** gives $\log N_X$, the column density of $X$.

with assumed $T$ + $n_e$ + atmospheric model, $\log N_X$ converts to $\log\,\epsilon(X) = \log(n_X/n_H) + 12$, the standard abundance scale.

## the model atmosphere assumption

abundance work needs:
- **$T_{\rm eff}, \log g$**: from photometry + spectroscopy fit.
- **microturbulence** $\xi_t$: tuned to make weak vs strong lines give consistent abundances.
- **model atmosphere**: typically Kurucz ATLAS9 or MARCS, providing $T(\tau), P(\tau)$.

then the curve of growth + atomic data + EW gives abundance.

## the modern alternative: spectral synthesis

instead of curve-of-growth, **fit the entire line profile** with a synthetic spectrum:
1. compute synthetic spectra for grids of $T_{\rm eff}, \log g, [Fe/H], \xi_t$.
2. find the best-fit by chi-square minimisation.
3. constrain abundances simultaneously with stellar parameters.

modern codes: turbospectrum, MOOG, SME, iSpec. fit lines line-by-line or full-spectrum chunks. preferred over curve-of-growth for high-quality data because it uses the full line shape (cores + wings), not just the integrated $W$.

## the iron-abundance benchmark

for cool stars, **iron lines** are the most common abundance indicator:
- $\sim 1000$ Fe I + Fe II lines in the optical.
- well-measured $\log gf$ values.
- reliable across a wide range of stellar types.

iterative procedure:
1. assume $T_{\rm eff}, \log g, \xi_t$.
2. compute $[Fe/H]$ from each line.
3. **excitation balance**: Fe I lines should give the same $[Fe/H]$ regardless of excitation potential. enforced by tuning $T_{\rm eff}$.
4. **ionisation balance**: Fe I and Fe II should agree. enforced by tuning $\log g$.
5. **microturbulence**: weak vs strong lines should agree. enforced by tuning $\xi_t$.
6. iterate until self-consistent.

end product: $T_{\rm eff} \pm 50$ K, $\log g \pm 0.1$, $[Fe/H] \pm 0.05$ for high-S/N spectra. this is the **spectroscopic temperature/gravity/metallicity (STGM) determination**.

## abundance patterns: $\alpha$/Fe etc.

beyond Fe, key abundance ratios:
- **$[\alpha/Fe]$** (O, Mg, Si, Ca, Ti / Fe): reflects star-formation timescale (see [Metallicity and chemical evolution](./Metallicity%20and%20chemical%20evolution.html)).
- **$[C/O]$**: from C and O lines, traces nucleosynthesis.
- **$[Eu/Fe]$, $[Ba/Fe]$**: r-process and s-process tracers.
- **$[Li/H]$**: stellar age and convective mixing.

each requires careful line selection + spectral synthesis to extract.

## scope

modern Galactic-archaeology surveys recover abundances of $\sim 30$ elements per star for $> 10^6$ stars (APOGEE, GALAH). enables stellar population dating, identifying stars from disrupted streams, and tracing the chemical evolution of the Milky Way.

## see also

- [Curve of growth](./Curve%20of%20growth.html)
- [Equivalent width](./Equivalent%20width.html)
- [Absorption coefficient and oscillator strength](./Absorption%20coefficient%20and%20oscillator%20strength.html)
- [Voigt profile](./Voigt%20profile.html)
- [Microturbulence](./Microturbulence.html)
- [Boltzmann equation in spectroscopy](./Boltzmann%20equation%20in%20spectroscopy.html)
- [Saha ionisation equation](./Saha%20ionisation%20equation.html)
- [Stellar atmosphere structure](./Stellar%20atmosphere%20structure.html)
- [Metallicity and chemical evolution](./Metallicity%20and%20chemical%20evolution.html)
- [Echelle spectroscopy](./Echelle%20spectroscopy.html)
{% endraw %}

<div class="backlinks-section">
  <h4 class="backlinks-title">Linked References (7)</h4>
  <ul class="backlinks-list">
    <li class="backlink-item-wrap"><a href="./Absorption%20coefficient%20and%20oscillator%20strength.html" class="backlink-item">Absorption coefficient and oscillator strength</a></li>
    <li class="backlink-item-wrap"><a href="../../04_Atlas/Astronomical_Spectroscopy_MOC.html" class="backlink-item">Astronomical_Spectroscopy_MOC</a></li>
    <li class="backlink-item-wrap"><a href="./Curve%20of%20growth.html" class="backlink-item">Curve of growth</a></li>
    <li class="backlink-item-wrap"><a href="./Damping%20wings.html" class="backlink-item">Damping wings</a></li>
    <li class="backlink-item-wrap"><a href="./Echelle%20spectroscopy.html" class="backlink-item">Echelle spectroscopy</a></li>
    <li class="backlink-item-wrap"><a href="./Equivalent%20width.html" class="backlink-item">Equivalent width</a></li>
    <li class="backlink-item-wrap"><a href="./Microturbulence.html" class="backlink-item">Microturbulence</a></li>
  </ul>
</div>
